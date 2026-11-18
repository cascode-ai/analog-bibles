// Local browser harness. Review writes are held in memory, never sent to D1.
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import http from "node:http";
import crypto from "node:crypto";
import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";
import { fileURLToPath } from "node:url";

export async function startBrowser() {
  const executable = [process.env.BROWSER_PATH,
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "/usr/bin/chromium", "/usr/bin/chromium-browser", "/usr/bin/google-chrome",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  ].find((name) => name && fs.existsSync(name));
  if (!executable) throw new Error("Set BROWSER_PATH to a Chromium browser to run the reading tests.");
  const root = fileURLToPath(new URL("../dist/", import.meta.url));
  const requests = [], reviews = [], errors = [];
  const vendorCache = path.join(os.tmpdir(), "analog-bibles-test-cdn");
  fs.mkdirSync(vendorCache, { recursive: true });
  const mime = { ".html": "text/html", ".js": "application/javascript", ".json": "application/json",
    ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".woff2": "font/woff2" };
  const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, "http://localhost");
    requests.push({ method: req.method, path: url.pathname });
    if (url.pathname.startsWith("/api/")) {
      res.setHeader("content-type", "application/json");
      if (req.method === "POST" && url.pathname === "/api/reviews") {
        let body = "";
        for await (const chunk of req) body += chunk;
        reviews.push(JSON.parse(body));
        res.end(JSON.stringify({ id: reviews.length }));
      } else res.end(url.pathname === "/api/reviews" ? "[]" : "{}");
      return;
    }
    if (req.method !== "GET") { res.writeHead(405).end(); return; }
    try {
      let content;
      const ext = path.extname(url.pathname);
      if (url.pathname.startsWith("/__cdn/")) {
        // Cache the page's pinned public renderer assets for repeatable runs.
        const remote = "https://cdnjs.cloudflare.com/" + url.pathname.slice(7);
        const cache = path.join(vendorCache, crypto.createHash("sha256").update(remote).digest("hex"));
        if (!fs.existsSync(cache)) {
          const response = await fetch(remote);
          if (!response.ok) throw new Error(`CDN ${response.status}: ${remote}`);
          fs.writeFileSync(cache, Buffer.from(await response.arrayBuffer()));
        }
        content = fs.readFileSync(cache);
      } else {
        const name = ["/", "/browse", "/review"].includes(url.pathname) ? "index.html" : decodeURIComponent(url.pathname.slice(1));
        const target = path.resolve(root, name);
        if (!target.startsWith(path.resolve(root) + path.sep)) { res.writeHead(403).end(); return; }
        content = fs.readFileSync(target);
        if (name === "index.html") content = Buffer.from(content.toString().replaceAll("https://cdnjs.cloudflare.com/", "/__cdn/"));
      }
      res.setHeader("content-type", mime[ext] || (["/", "/browse", "/review"].includes(url.pathname) ? "text/html" : "text/plain"));
      if (/^\/(assets|b)\//.test(url.pathname)) res.setHeader("cache-control", "public, max-age=31536000, immutable");
      res.end(content);
    } catch (error) {
      if (url.pathname.startsWith("/__cdn/")) errors.push(String(error));
      res.writeHead(404).end();
    }
  });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const origin = `http://127.0.0.1:${server.address().port}`;
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), "analog-bibles-reading-"));
  const browser = spawn(executable, ["--headless=new", "--disable-gpu", "--no-first-run", "--disable-background-networking",
    "--remote-debugging-port=0", `--user-data-dir=${profile}`, "about:blank"], { windowsHide: true, stdio: "ignore" });
  let ws;
  async function close() {
    if (ws?.readyState === WebSocket.OPEN) {
      try { await cdp("Browser.close"); } catch { /* already closed */ }
    }
    ws?.close();
    browser.kill();
    server.closeAllConnections();
    server.close();
  }
  let sequence = 0;
  const pending = new Map();
  function cdp(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = ++sequence;
      const timer = setTimeout(() => { pending.delete(id); reject(new Error(`CDP timeout: ${method}`)); }, 15000);
      pending.set(id, { resolve, reject, timer });
      ws.send(JSON.stringify({ id, method, params }));
    });
  }
  async function evaluate(expression) {
    const value = await cdp("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
    if (value.exceptionDetails) throw new Error(JSON.stringify(value.exceptionDetails));
    return value.result.value;
  }
  async function waitFor(expression) {
    for (let i = 0; i < 150; i++) {
      try { if (await evaluate(expression)) return; } catch { /* navigation in progress */ }
      await delay(100);
    }
    throw new Error(`Timed out: ${expression}; ${errors.join("; ")}`);
  }
  try {
    const portFile = path.join(profile, "DevToolsActivePort");
    // Windows may expose the file while Chromium still holds its write lock.
    let port;
    for (let i = 0; i < 100; i++) {
      try {
        const candidate = fs.readFileSync(portFile, "utf8").split("\n")[0].trim();
        if (/^\d+$/.test(candidate)) { port = candidate; break; }
      } catch (error) {
        if (!["ENOENT", "EBUSY"].includes(error.code)) throw error;
      }
      await delay(100);
    }
    if (!port) throw new Error("Browser debug port was not ready within 10 seconds.");
    const targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
    ws = new WebSocket(targets.find((target) => target.type === "page").webSocketDebuggerUrl);
    await new Promise((resolve, reject) => { ws.onopen = resolve; ws.onerror = reject; });
    ws.onmessage = ({ data }) => {
      const value = JSON.parse(data);
      if (value.id) {
        const callback = pending.get(value.id);
        if (!callback) return;
        clearTimeout(callback.timer);
        pending.delete(value.id);
        value.error ? callback.reject(value.error) : callback.resolve(value.result);
      } else if (value.method === "Runtime.exceptionThrown") errors.push(JSON.stringify(value.params.exceptionDetails));
    };
    await cdp("Runtime.enable");
    await cdp("Page.enable");
    await cdp("Page.addScriptToEvaluateOnNewDocument", { source: 'localStorage.setItem("ab.key", "local-test-only");' });
    async function viewport(width, height) {
      await cdp("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: false });
    }
    async function open(url) {
      await cdp("Page.navigate", { url: origin + url });
      await waitFor('typeof state !== "undefined" && state.ready && window.marked && window.katex');
      await waitFor('document.querySelector(".q-question")?.textContent.length > 20 && !document.querySelector(".q-question").textContent.includes("Loading…")');
      await evaluate("document.fonts.ready.then(() => true)");
    }
    async function screenshot(filename) {
      await evaluate("document.fonts.ready.then(() => true)");
      const { data } = await cdp("Page.captureScreenshot", { format: "png" });
      fs.writeFileSync(filename, Buffer.from(data, "base64"));
    }
    return { cdp, evaluate, waitFor, viewport, open, screenshot, requests, reviews, errors, close };
  } catch (error) { await close(); throw error; }
}
