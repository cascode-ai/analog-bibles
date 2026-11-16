# 详细步骤 - R560

**思路。** 运放迫使 $V_X = V_Y$，使 $R_1$ 两端的电压为 $\Delta V_{BE} = V_T\ln n$；于是由给定的电流和 $R_1$ 即可确定 $n$。$M_5$ 与 $M_4$ 共用栅极和源极，因此它按 $K = (W/L)_5/(W/L)_4$ 的比例复制与绝对温度成正比（PTAT）的电流，并使其流过 $R_2$，叠加在 $|V_{BE3}|$ 之上。选择 $K$ 使这一 PTAT 电压抵消 $|V_{BE3}|$ 的 $-1.5$ mV/K，即可得到零 TC。

### 第 1 步 — PTAT 电流与 $n$ 的值

$M_3$ 和 $M_4$ 相同且 $V_{GS}$ 相同，因此电流相等，$|I_{D3}| = |I_{D4}| = I = 50\ \mu$A，每个双极型晶体管流过与之相连的 PMOS 的电流。由 $V_X = V_Y$ 得

$$|V_{BE1}| = |V_{BE2}| + IR_1 .$$

由于 $I_{S2} = nI_S$：

$$IR_1 = |V_{BE1}| - |V_{BE2}| = V_T\ln\frac{I}{I_S} - V_T\ln\frac{I}{nI_S} = V_T\ln n .$$

由 $IR_1 = (50\ \mu\mathrm{A})(1\ \mathrm{k}\Omega) = 50$ mV 及 $V_T = kT/q = (8.617\times10^{-5})(300) = 25.85$ mV：

$$
\begin{aligned}
\ln n &= \frac{50\ \mathrm{mV}}{25.85\ \mathrm{mV}} = 1.934,\\
n &= e^{1.934} = 6.92 \approx 7 .
\end{aligned}
$$

因此 $I = V_T\ln n/R_1$ 是 PTAT 电流。

### 第 2 步 — 输出电压与零 TC：求 $K$ 和 $(W/L)_5$

$M_5$ 的 $|V_{GS}|$ 与 $M_4$ 相同，因此在 $\lambda = 0$ 时其电流按 $W/L$ 成比例变化：

$$K = \frac{(W/L)_5}{(W/L)_4}\quad\Longrightarrow\quad |I_{D5}| = K|I_{D4}| = K\,\frac{V_T\ln n}{R_1},$$

$$V_{out} = |V_{BE3}| + |I_{D5}|R_2 = |V_{BE3}| + K\frac{R_2}{R_1}V_T\ln n .$$

由于 $R_2/R_1 = 2$，$V_T\ln n = 50$ mV：

$$V_{out} = |V_{BE3}| + K\times2\times50\ \mathrm{mV} = |V_{BE3}| + K(0.1\ \mathrm{V}).$$

PTAT 项与 $T$ 成正比（$K$、$n$ 和 $R_2/R_1$ 都与温度无关），因此其 TC 等于它的值除以 $T$：

$$\frac{\partial}{\partial T}\left[K(0.1\ \mathrm{V})\right] = \frac{K(0.1\ \mathrm{V})}{300\ \mathrm{K}} = K(0.333\ \mathrm{mV/K}).$$

取 $\partial|V_{BE3}|/\partial T = -1.5$ mV/K：

$$
\begin{aligned}
-1.5\ \mathrm{mV/K} + K(0.333\ \mathrm{mV/K}) &= 0\\
K &= \frac{1.5}{0.333} = 4.5 .
\end{aligned}
$$

（若采用教材中的规则 $K(R_2/R_1)\ln n = 17.2$：$K = 17.2/(2\times1.934) = 4.45$；差别只是 $k/q$ 的舍入造成的。）因此

$$\left(\frac WL\right)_5 = K\left(\frac WL\right)_4 = 4.5\times\frac{50\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}} = \frac{225\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}}\quad(\approx 222\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}\ \text{with}\ K = 4.45),$$

$M_5$ 流过 $|I_{D5}| = 4.5\times50\ \mu\mathrm{A} = 225\ \mu$A（$K = 4.45$ 时为 222 μA）。用多个与 $M_4$ 相同的单元（$L$ 相同）并联构成 $M_5$，可以得到精确的比例。

### 第 3 步 — 检验

对于 $M_4$（由于电流与 $W/L$ 按相同比例变化，结论对三个 PMOS 都适用）：

$$
\begin{aligned}
|V_{ov}| &= \sqrt{\frac{2|I_D|}{\mu_pC_{ox}(W/L)}} = \sqrt{\frac{2(50\ \mu\mathrm{A})}{(38.4\ \mu\mathrm{A/V^2})(100)}} = \sqrt{0.0260\ \mathrm{V^2}} = 0.161\ \mathrm{V},\\
|V_{GS}| &= |V_{TH}| + |V_{ov}| = 0.8 + 0.161 = 0.96\ \mathrm{V}.
\end{aligned}
$$

输出电平为

$$V_{out} = |V_{BE3}| + 4.5\times0.1\ \mathrm{V} = |V_{BE3}| + 0.45\ \mathrm{V} \approx 1.2\text{--}1.25\ \mathrm{V}$$

其中 $|V_{BE3}| \approx 0.75$–0.8 V。所有 PMOS 都处于饱和区（$|V_{DS}| \ge |V_{ov}| = 0.16$ V）：$|V_{DS5}| = 3 - 1.25 = 1.75$ V，而 $M_3$、$M_4$（漏极约在 $|V_{BE1}| \approx 0.7$–0.8 V）的 $|V_{DS}| \approx 2.2$ V。

### 结果

$$n = \exp\!\left(\frac{50\ \mathrm{mV}}{25.85\ \mathrm{mV}}\right) \approx 6.9\ (\approx 7), \qquad \left(\frac WL\right)_5 \approx 4.45\text{--}4.5\times\left(\frac WL\right)_4 \approx \frac{222\text{--}225\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}},$$

此时 $|I_{D5}| \approx 222$–225 μA。这些结果来自：由 $V_X = V_Y$ 及两支路电流相等得到 $|I_{D4}|R_1 = V_T\ln n = 50$ mV；以及 $V_{out} = |V_{BE3}| + K(R_2/R_1)V_T\ln n = |V_{BE3}| + K(0.1\ \mathrm{V})$ 与 $K(0.1\ \mathrm{V})/300\ \mathrm{K} = 1.5$ mV/K。于是 $V_{out} \approx |V_{BE3}| + 0.45\ \mathrm{V} \approx 1.2$–1.25 V，$|V_{GS}| = 0.96$ V，$M_5$ 在 $|V_{DS}| \approx 1.75$ V 下处于饱和区。

**常见错误。** 忽略电阻比 $R_2/R_1$，写成 $V_{out} = |V_{BE3}| + K\,V_T\ln n$。这会得到 $K = 1.5/0.1667 = 9$（按 17.2 规则约为 8.9），大了一倍：在输出支路中，PTAT 电流流过的是 $R_2$ 而不是 $R_1$。

**常见错误。** 让 $M_5$ 流过与 $M_4$ 相同的电流（$K = 1$），却仍然声称 TC 为零。此时 $V_{out} = |V_{BE3}| + 0.1$ V 的 TC 为 $-1.5 + 0.33 = -1.17$ mV/K；4.5 这一倍数必须由电流镜比例提供。

**常见错误。** 由 $\ln n = 17.2$ 或 $n = 50\ \mathrm{mV}/V_T$ 来确定 $n$。$R_1$ 上的压降等于 $V_T\ln n$，所以 $\ln n = 1.934$；零 TC 条件随后由 $K$ 而不是 $n$ 来满足。
