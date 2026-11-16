# 详细步骤 - R278

**思路。** 在 X、Y 和 P 列 KCL 方程，其中 $I_C$ 为从 Y 经 $C_1$ 流入 P 的电流。方程表明 $M_1$ 始终恰好流过一半的尾电流（tail current），这确定了 $V_X$ 和 $V_P$。节点 Y 从 $V_P$ 开始（电容未充电），因此 $M_2$ 一开始的 $V_{DS} = 0$。$M_2$ 暂时无法吸收的电流镜（current mirror）电流给 $C_1$ 充电并抬高 $V_Y$：先是线性上升，随着 $M_2$ 导通增强而变慢，最后通过沟道长度调制（channel-length modulation）一直上升到平衡值 $V_Y = V_X$。

### 第 1 步 — KCL：$V_X$ 和 $V_P$ 固定

令 $I_C = C_1\,d(V_Y - V_P)/dt$：

$$\text{X: } |I_{D3}| = I_{D1}, \qquad \text{Y: } |I_{D4}| = I_{D2} + I_C, \qquad \text{P: } I_{D1} + I_{D2} + I_C = I_{SS}.$$

只要 $V_Y < V_X + 0.8$ V，$M_4$ 就饱和，这里该条件成立，因此在 λ 的零阶近似下，$|I_{D4}| = |I_{D3}| = I_{D1}$。于是 Y 的方程给出 $I_{D2} + I_C = I_{D1}$，P 的方程变为

$$I_{D1} + I_{D1} = I_{SS} \quad\Longrightarrow\quad I_{D1} = \frac{I_{SS}}{2}\ \ \text{at all times.}$$

因此：

- $M_3$ 流过 $I_{SS}/2$：$V_X = V_{DD} - 0.8 - \sqrt{I_{SS}/[\mu_pC_{ox}(W/L)_3]}$，**恒定**。
- $M_1$（栅极为 1.5 V，饱和）流过 $I_{SS}/2$：$V_P = 1.5 - V_{GS1}(I_{SS}/2) = 1.5 - V_{TH}(V_P) - V_{ov}$，**恒定**，其中 $V_{ov} = \sqrt{I_{SS}/(\mu_nC_{ox}W/L)}$，$V_{TH}(V_P)$ 计入了体效应（body effect）。

$C_1$ 从 Y 取走的任何电流都来自电流镜的复制电流，而不是来自 $M_1$ 所分得的尾电流。

### 第 2 步 — $t = 0^+$：$M_2$ 没有漏源电压

由于 $v_{C1}(0) = 0$，$V_Y(0^+) = V_P$，因此 $V_{DS2} = 0$，$I_{D2} = 0$。由 Y 的方程得

$$I_C(0^+) = |I_{D4}| = \frac{I_{SS}}{2}:$$

全部电流镜电流都流入 $C_1$，因此 $V_Y$ 开始以如下斜率上升：

$$\left.\frac{dV_Y}{dt}\right|_{0^+} = \frac{I_{SS}}{2C_1}.$$

### 第 3 步 — $M_2$ 处于线性区：逐渐变慢的双曲型上升

令 $v = V_Y - V_P = V_{DS2}$。当 $v < V_{ov}$ 时，$M_2$ 处于线性区，其过驱动电压（overdrive voltage）与 $M_1$ 相同，均为 $V_{ov}$（栅极电压和源极都相同）：

$$I_{D2} = \beta\left(V_{ov}v - \tfrac12v^2\right).$$

电容电流就是 $I_{SS}/2 = \tfrac{\beta}{2}V_{ov}^2$ 中剩下的部分：

$$I_C = \frac{\beta}{2}V_{ov}^2 - \beta\left(V_{ov}v - \tfrac12v^2\right) = \frac{\beta}{2}\left(V_{ov}^2 - 2V_{ov}v + v^2\right) = \frac{\beta}{2}(V_{ov} - v)^2 .$$

$V_P$ 恒定，因此 $C_1\,dv/dt = I_C$。令 $w = V_{ov} - v$：

$$
\begin{aligned}
\frac{dw}{dt} &= -\frac{\beta}{2C_1}w^2 \quad\Longrightarrow\quad \frac{1}{w} = \frac{1}{V_{ov}} + \frac{\beta t}{2C_1},\\
v(t) &= V_{ov}\left[1 - \frac{1}{1 + t/\tau}\right], \qquad \tau = \frac{2C_1}{\beta V_{ov}} = \frac{2C_1}{g_m},
\end{aligned}
$$

其中 $g_m = \beta V_{ov}$ 为 $M_2$ 在 $I_{SS}/2$ 下的值。因此

$$V_Y(t) = V_P + V_{ov}\,\frac{t/\tau}{1 + t/\tau}.$$

$V_Y$ 起初上升很快（斜率为 $V_{ov}/\tau = I_{SS}/(2C_1)$，与第 2 步一致），随后变慢，并按双曲规律趋近饱和区边缘

$$V_Y \to V_P + V_{ov} = 1.5 - V_{TH2}(V_P)$$

若 $\lambda = 0$，它将停在那里：一旦 $M_2$ 饱和，它就流过 $I_{SS}/2$，$I_C = 0$。

### 第 4 步 — $\lambda > 0$ 时：缓慢趋近 $V_X$

计入沟道长度调制时，平衡的最终状态为 $V_Y = V_X$，此时 $M_4$ 与 $M_3$ 的 $V_{SD}$ 相等，$M_2$ 与 $M_1$ 的 $V_{DS}$ 相等。只要 $V_Y < V_X$，$M_4$（$V_{SD}$ 较大）提供的电流就略多于 $M_3$，而 $M_2$（$V_{DS}$ 较小）吸收的电流略少于 $M_1$；这一差值继续给 $C_1$ 充电。在终点附近线性化：

$$I_C \approx \frac{V_X - V_Y}{r_{O2}\|r_{O4}} .$$

$C_1$ 接到几乎不动的低阻抗节点 P，因此 $C_1\,dV_Y/dt \approx I_C$，从而得到指数型的趋近过程

$$V_X - V_Y \propto e^{-t/\tau_2}, \qquad \tau_2 \approx C_1\,(r_{O2}\|r_{O4}),$$

它比 $\tau$ 慢得多。（$V_X$ 和 $V_P$ 同样最多漂移几十 mV，因为电流镜对 $M_3$ 电流的复制只精确到 λ 项。）

### 第 5 步 — 数值示例

$I_{SS} = 200\ \mu\mathrm{A}$，NMOS 的 $W/L = 10/0.5$（$\beta_n = 2.68\ \mathrm{mA/V^2}$），PMOS 的 $W/L = 20/0.5$（$\beta_p = 1.536\ \mathrm{mA/V^2}$），$\lambda_n = 0.1$，$\lambda_p = 0.2\ \mathrm{V^{-1}}$，$C_1 = 1$ pF。

$$
\begin{aligned}
V_{ov} &= \sqrt{2(100\ \mu\mathrm{A})/(2.68\ \mathrm{mA/V^2})} = 0.273\ \mathrm{V}, \qquad g_m = (2.68\ \mathrm{mA/V^2})(0.273\ \mathrm{V}) = 0.732\ \mathrm{mS},\\
\tau &= \frac{2(1\ \mathrm{pF})}{0.732\ \mathrm{mS}} = 2.7\ \mathrm{ns}, \qquad \frac{I_{SS}}{2C_1} = \frac{100\ \mu\mathrm{A}}{1\ \mathrm{pF}} = 0.1\ \mathrm{V/ns},\\
V_P &\approx 0.45\ \mathrm{V}\ (V_{TH2} \approx 0.79\ \mathrm{V}), \qquad 1.5 - V_{TH2} \approx 0.71\ \mathrm{V}, \qquad V_X \approx 1.87\ \mathrm{V},\\
\tau_2 &\approx (1\ \mathrm{pF})(40\ \mathrm{k}\Omega) = 40\ \mathrm{ns}.
\end{aligned}
$$

完整平方律方程（含 λ）的瞬态解：

| $t$ | $V_X$ (V) | $V_P$ (V) | $V_Y$ (V) | $I_C$ |
|---|---|---|---|---|
| $0^+$ | 1.89 | 0.46 | 0.46 | 110 μA |
| 1 ns | 1.89 | 0.46 | 0.54 | 64 μA |
| 2.7 ns | 1.89 | 0.46 | 0.63 | 37 μA |
| 5 ns | 1.89 | 0.46 | 0.70 | 27 μA |
| 20 ns | 1.88 | 0.46 | 1.04 | 20 μA |
| 50 ns | 1.88 | 0.45 | 1.47 | 10 μA |
| 100 ns | 1.88 | 0.45 | 1.76 | 3 μA |
| 300 ns | 1.874 | 0.449 | 1.873 | ≈ 0 |

（初始 $I_C$ 为 110 μA 而不是 100 μA，这是 $\lambda_p$ 造成的：$V_{SD} \approx 2.5$ V 的 $M_4$ 以约 $(1 + 0.2\times2.54)/(1 + 0.2\times1.11) = 1.23$ 的比例复制 $V_{SD} \approx 1.1$ V 的 $M_3$ 的电流，于是 KCL 把尾电流分配为：$M_1$ 中约 90 μA，$C_1$ 中约 110 μA。）

### 结果

- 从 $t = 0^+$ 起，**$V_X$ 恒定**在 $V_{DD} - 0.8 - \sqrt{I_{SS}/[\mu_pC_{ox}(W/L)_3]}$，**$V_P = 1.5 - V_{GS1}(I_{SS}/2)$** 也恒定：KCL 与电流镜一起迫使始终有 $I_{D1} = I_{SS}/2$。
- **$V_Y$ 从 $V_P$ 开始**（$C_1$ 未充电，$M_2$ 的 $V_{DS} = 0$）上升，起初以 $I_{SS}/(2C_1)$ 的斜率线性上升。随后，由于处于线性区的 $M_2$ 分走越来越多的电流，上升变慢，并按双曲规律趋近饱和区边缘 $1.5 - V_{TH2}$：
$$V_Y(t) = V_P + V_{ov}\frac{t/\tau}{1 + t/\tau}, \qquad \tau = \frac{2C_1}{g_m}.$$
- **当 λ > 0 时**，它随后继续缓慢地趋向其终值 $V_X$，时间常数的量级为 $C_1(r_{O2}\|r_{O4})$。

**常见错误。** 让 $V_Y$ 从 $V_X$ 或其正常平衡值开始。电容以零电压把 Y 与 P 连在一起，因此在 $t = 0^+$ 时 $V_Y = V_P$，比其终值低约 1.4 V。

**常见错误。** 让 $V_X$（或 $V_P$）发生显著变化。$C_1$ 吸取的电流来自节点 Y 处 $M_4$ 的复制电流，而 KCL 与电流镜一起迫使 $M_1$ 和 $M_3$ 始终流过 $I_{SS}/2$。

**常见错误。** 不加说明地让波形停在 $1.5 - V_{TH}$，或者画成单一的 RC 指数曲线。早期的上升是由 $M_2$ 所缺少的电流按平方律（双曲型）充电形成的；当 λ > 0 时，终值为 $V_X$，要经过一段慢得多、由 λ 控制的拖尾才能到达。
