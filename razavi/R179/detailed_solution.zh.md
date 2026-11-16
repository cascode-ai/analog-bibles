# 详细步骤 - R179

**思路。** $M_5$ 是源极接 $V_{DD}$ 的 PMOS 电流源，其电流由 $V_{DD} - V_b$ 决定。由平方律（square law）求出使电流为 0.4 mA 的 $|V_{GS5}|$，再换算成对地的电压。

### 第 1 步 — 所需电流

每个输入器件流过 $I_{SS}/2 = 0.5$ mA，$M_5$（$M_6$ 同理）必须提供其中的 80 %：

$$I_{D5} = I_{D6} = 0.8\times\frac{I_{SS}}{2} = 0.8\times 0.5\ \mathrm{mA} = 0.4\ \mathrm{mA}.$$

余下的 0.1 mA 由二极管连接（diode-connected）的 $M_3$ 提供。

### 第 2 步 — $M_5$ 的过驱动电压（overdrive voltage）与栅极电压

由 $\mu_pC_{ox}(W/L) = (38.4\ \mu\mathrm{A/V^2})(100) = 3.84\ \mathrm{mA/V^2}$（$W/L = 50/0.5 = 100$）以及 $I_{D5} = \tfrac12\mu_pC_{ox}(W/L)(|V_{GS5}| - |V_{TH}|)^2$：

$$
\begin{aligned}
|V_{GS5}| - |V_{TH}| &= \sqrt{\frac{2I_{D5}}{\mu_pC_{ox}(W/L)}} = \sqrt{\frac{2(0.4\ \mathrm{mA})}{3.84\ \mathrm{mA/V^2}}} = \sqrt{0.2083\ \mathrm{V^2}} = 0.456\ \mathrm{V},\\
|V_{GS5}| &= 0.8 + 0.456 = 1.256\ \mathrm{V}.
\end{aligned}
$$

$M_5$ 的源极接 $V_{DD}$，因此其栅极比 $V_{DD}$ **低** $|V_{GS5}|$：

$$V_b = V_{DD} - |V_{GS5}| = 3 - 1.256 = 1.744\ \mathrm{V}.$$

### 第 3 步 — 检查 $M_5$ 是否饱和

$M_5$ 的漏极就是节点 $X$，它被二极管 $M_3$（0.1 mA）保持在 $V_{DD} - |V_{GS3}|$，其中

$$|V_{GS3}| = 0.8 + \sqrt{\frac{2(0.1\ \mathrm{mA})}{3.84\ \mathrm{mA/V^2}}} = 0.8 + 0.228 = 1.028\ \mathrm{V}.$$

所以 $V_{SD5} = |V_{GS3}| = 1.028$ V $>$ 0.456 V：$M_5$ 处于饱和区（saturation region）。

### 第 4 步 — 计入沟道长度调制（channel-length modulation）的修正（可选）

取 $\lambda_p = 0.2\ \mathrm{V^{-1}}$，$I_{D5} = \tfrac12\mu_pC_{ox}(W/L)V_{ov5}^2(1 + \lambda_pV_{SD5})$，其中 $V_{SD5} \approx 1.028$ V：

$$
\begin{aligned}
V_{ov5} &= \sqrt{\frac{2(0.4\ \mathrm{mA})}{(3.84\ \mathrm{mA/V^2})(1 + 0.2\times 1.028)}} = \sqrt{\frac{0.8}{3.84\times 1.206}}\ \mathrm{V} = 0.416\ \mathrm{V},\\
V_b &= 3 - 0.8 - 0.416 = 1.784\ \mathrm{V} \approx 1.78\ \mathrm{V}.
\end{aligned}
$$

沟道长度调制使电流增大，因此所需的过驱动电压略小，$V_b$ 上移约 40 mV；基本的平方律答案为 1.74 V。

### 结果

$$V_b = V_{DD} - |V_{TH}| - \sqrt{\frac{2(0.4\ \mathrm{mA})}{\mu_pC_{ox}(W/L)}} = 3 - 0.8 - 0.456 \approx 1.74\ \mathrm{V}$$

（$|V_{GS5}| = 1.256$ V）。若计入 $\lambda_p$ 并取 $V_{SD5} \approx 1.03$ V，则约为 1.78 V。

**常见错误。** 给出 $V_b = 1.256$ V，这只是 $|V_{GS5}|$ 本身。PMOS 的源极接 $V_{DD}$，因此 $V_b = V_{DD} - |V_{GS5}|$。

**常见错误。** 使用错误的电流（0.5 mA，即整个支路电流；或 0.1 mA，即二极管电流）或 NMOS 参数。$M_5$ 是流过 $0.8\times 0.5 = 0.4$ mA 的 PMOS。

**常见错误。** 令 $V_b = V_{DD} - |V_{TH}| = 2.2$ V，这会使 $M_5$ 恰好偏置在阈值处，不流过电流；还需要在此基础上再加 0.456 V 的过驱动电压。
