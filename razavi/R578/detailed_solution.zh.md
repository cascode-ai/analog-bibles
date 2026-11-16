# 详细步骤 - R578

**思路。** 两个晶体管都开始把 $C_H$ 从 3 V 向 0 V 的输入放电，但方式不同。NMOS 的源极在接地的输入端，过驱动电压（overdrive voltage）始终为完整的 2.3 V。PMOS 的源极在不断下降的输出端，因此其栅源电压随 $V_{out}$ 减小，一旦 $V_{out}$ 降到约 $|V_{THP}|$，它就截止。把瞬态过程分为三个阶段，分别计算（两个用辛普森法则，一个精确求解），再相加。

### 第 1 步 — 两个晶体管的端口与电流

**NMOS $M_1$。** 电位较低的端口，即接地的输入端，是源极：

$$V_{GS} = 3\ \mathrm{V},\quad V_{SB} = 0\ (V_{THN} = 0.7\ \mathrm{V}),\quad V_{ov,N} = 2.3\ \mathrm{V},\quad V_{DS} = V_{out}.$$

由 $\beta_n = 134\ \mu\mathrm{A/V^2}\times40 = 5.36$ mA/V²：

$$I_N = \begin{cases}\tfrac12\beta_n(2.3)^2 = 14.18\ \mathrm{mA}, & V_{out} \ge 2.3\ \mathrm{V},\\ \beta_n\left(2.3V_{out} - V_{out}^2/2\right), & V_{out} < 2.3\ \mathrm{V}.\end{cases}$$

**PMOS $M_2$。** 电位较高的端口，即输出节点，是源极，因此

$$V_{SG} = V_{out} - 0 = V_{out}, \qquad V_{SD} = V_{out} - 0 = V_{out},$$

由于 $V_{SD} = V_{SG}$，它**只要导通就处于饱和区**。由 $V_{BS} = V_{DD} - V_{out}$ 和 $\beta_p = 38.4\ \mu\mathrm{A/V^2}\times120 = 4.61$ mA/V²：

$$|V_{THP}| = 0.8 + 0.4\left(\sqrt{0.8 + 3 - V_{out}} - \sqrt{0.8}\right),$$

$$I_P = \tfrac12\beta_p\left(V_{out} - |V_{THP}|\right)^2 = (2.30\ \mathrm{mA/V^2})\left(V_{out} - |V_{THP}|\right)^2 .$$

**PMOS 的截止点。** 当 $V_{out} = |V_{THP}(V_{out})|$ 时 $I_P = 0$。在 $V_{out} = 1.10$ V 时，$|V_{THP}| = 0.8 + 0.4(\sqrt{2.70} - 0.894) = 0.8 + 0.4(1.643 - 0.894) = 1.10$ V ✓，因此 **PMOS 在 $V_{out} \approx 1.10$ V 处截止**（不考虑体效应时为 0.8 V），在此之下只有 NMOS 给 $C_H$ 放电。

### 第 2 步 — 控制方程与三个阶段

$$C_H\frac{dV_{out}}{dt} = -(I_N + I_P) \quad\Longrightarrow\quad t = C_H\int_{V_{end}}^{V_{start}}\frac{dV}{I_N(V) + I_P(V)}.$$

| 阶段 | $V_{out}$ 范围 | NMOS | PMOS |
|---|---|---|---|
| A | 3 V → 2.3 V | 饱和 | 饱和 |
| B | 2.3 V → 1.10 V | 线性区 | 饱和 |
| C | 1.10 V → 1 mV | 线性区 | 截止 |

### 第 3 步 — 阶段 A（3 V → 2.3 V）

| $V_{out}$ | $\lvert V_{THP}\rvert$ | $I_N$ | $I_P$ | $I_N + I_P$ |
|---|---|---|---|---|
| 3.00 V | 0.800 V | 14.18 mA | $2.30(2.20)^2 = 11.15$ mA | 25.33 mA |
| 2.65 V | 0.871 V | 14.18 mA | $2.30(1.779)^2 = 7.29$ mA | 21.47 mA |
| 2.30 V | 0.932 V | 14.18 mA | $2.30(1.368)^2 = 4.31$ mA | 18.49 mA |

用辛普森法则 $\int_a^b f\,dV \approx \frac{b - a}{6}[f(a) + 4f(m) + f(b)]$，取 $f = 1/I$：

$$t_A = (1\ \mathrm{pF})\cdot\frac{0.7\ \mathrm{V}}{6}\left[\frac{1}{25.33} + \frac{4}{21.47} + \frac{1}{18.49}\right]\mathrm{mA^{-1}} = (0.1167)(0.2799)\ \mathrm{ns} = 32.7\ \mathrm{ps}$$

（单独的 NMOS 完成这一阶段需要 49.4 ps）。

### 第 4 步 — 阶段 B（2.3 V → 1.10 V）

| $V_{out}$ | $I_N = \beta_n(2.3V - V^2/2)$ | $\lvert V_{THP}\rvert$ | $I_P$ | 总电流 |
|---|---|---|---|---|
| 2.30 V | 14.18 mA | 0.932 V | 4.31 mA | 18.49 mA |
| 1.70 V | $5.36(3.91 - 1.445) = 13.21$ mA | 1.022 V | $2.30(0.678)^2 = 1.06$ mA | 14.27 mA |
| 1.10 V | $5.36(2.529 - 0.605) = 10.31$ mA | 1.10 V | 0 | 10.31 mA |

$$t_B = (1\ \mathrm{pF})\cdot\frac{1.2\ \mathrm{V}}{6}\left[\frac{1}{18.49} + \frac{4}{14.27} + \frac{1}{10.31}\right]\mathrm{mA^{-1}} = (0.2)(0.4314)\ \mathrm{ns} = 86.3\ \mathrm{ps}.$$

这里 PMOS 的贡献已经很小（约 1 mA，而 NMOS 提供 10 mA 以上）。

### 第 5 步 — 阶段 C（1.10 V → 1 mV）：仅 NMOS，精确求解

只有处于线性区的 NMOS 时，$C_H\,dV/dt = -\frac{\beta_n}{2}V(2V_{ov} - V)$，其中 $V_{ov} = 2.3$ V；利用 $\frac{1}{V(2V_{ov} - V)} = \frac{1}{2V_{ov}}\left[\frac1V + \frac{1}{2V_{ov} - V}\right]$ 分离变量，得

$$t_C = \frac{C_H}{\beta_nV_{ov}}\left[\ln\frac{V_1}{2V_{ov} - V_1} - \ln\frac{V_2}{2V_{ov} - V_2}\right],$$

其中 $C_H/(\beta_nV_{ov}) = 1\ \mathrm{pF}/(5.36\ \mathrm{mA/V^2}\times2.3\ \mathrm{V}) = 81.1$ ps。对于 $V_1 = 1.10$ V 和 $V_2 = 1$ mV：

$$
\begin{aligned}
\ln\frac{1.10}{4.6 - 1.10} &= \ln(0.3141) = -1.158,\\
\ln\frac{0.001}{4.6 - 0.001} &= \ln(2.174\times10^{-4}) = -8.434,\\
t_C &= 81.1\ \mathrm{ps}\times(-1.158 + 8.434) = 81.1\times7.276\ \mathrm{ps} = 590\ \mathrm{ps}.
\end{aligned}
$$

大部分时间都花在这段拖尾上，其时间常数 $C_H/[\beta_n(V_{DD} - V_{THN})] = 81$ ps 仅由 NMOS 决定。

### 第 6 步 — 总时间与比较

$$t = t_A + t_B + t_C = 32.7 + 86.3 + 590 \approx 709\ \mathrm{ps} \approx 0.71\ \mathrm{ns}.$$

直接对 $C_H\,dV_{out}/dt = -(I_N + I_P)$ 进行数值积分，也得到 0.709 ns，PMOS 在 $t \approx 0.12$ ns 时截止。

| 情形 | 下降到 1 mV 所需的时间 |
|---|---|
| 仅 NMOS（平方律） | 0.733 ns |
| NMOS + PMOS，计入 PMOS 体效应 | **0.709 ns** |
| NMOS + PMOS，忽略 PMOS 体效应（在 0.8 V 处截止） | 0.704 ns |
| NMOS 视为固定的 81 Ω 电阻，$\tau\ln 3000$ | 0.65 ns |

PMOS 只使放电加快约 3 %：它只在 $V_{out}$ 较高时起作用，而在漫长的最终建立过程中是截止的。互补开关改善的是输入接近 $V_{DD}$ 时的导通电阻（on-resistance），而不是 0 V 输入时的导通电阻。

### 结果

约 **0.71 ns**（≈ 0.7 ns），只比单独使用 NMOS（0.73 ns）快约 3 %。

- NMOS 的源极在接地的输入端（无体效应）。当 $V_{out} > 2.3$ V 时它饱和，电流为 14.2 mA，此后进入线性区，$\beta_n = 5.36$ mA/V²。
- PMOS 的源极在 $V_{out}$ 一侧，栅极接 0，因此 $V_{SG} = V_{SD} = V_{out}$，只要导通就处于饱和区：$|I| = 2.30\ \mathrm{mA/V^2}\,(V_{out} - |V_{THP}|)^2$，其中 $|V_{THP}| = 0.8 + 0.4(\sqrt{3.8 - V_{out}} - \sqrt{0.8})$ 从 0.8 V 上升到约 1.10 V，此时 PMOS 截止（约 0.12 ns 之后）。
- 此后直到 1 mV 的放电由处于线性区的 NMOS 单独完成，时间常数为 $C_H/[\beta_n(V_{DD} - V_{THN})] = 81$ ps。
- 各阶段：33 ps（两者都饱和）+ 86 ps（NMOS 处于线性区，PMOS 逐渐截止）+ 590 ps（仅 NMOS）≈ 0.71 ns。

**常见错误。** 在整个瞬态过程中使用并联组合 $R_{on,N} \parallel R_{on,P}$，例如 $81\ \Omega \parallel 99\ \Omega = 44.5\ \Omega$，得到 $44.5\ \mathrm{ps}\times\ln 3000 \approx 0.36$ ns。在 $V_{out} = V_{in} = 0$ 附近，PMOS 的 $V_{SG} \approx 0$，处于截止状态，因此最终的建立过程仅由 NMOS 决定。

**常见错误。** 把输入端当作 PMOS 的源极（这样它永远不会导通），或者认为它始终有完整的 3 V 栅极驱动。它的源极是电位较高的输出端，因此其驱动电压 $V_{SG} = V_{out}$ 从 3 V 开始，并随电容放电而迅速减小。

**常见错误。** 忽略 NMOS 的饱和区阶段和线性区的非线性，或者给 NMOS 加上体效应。它的源极是接地的输入端（$V_{SB} = 0$），过驱动电压始终为 2.3 V。
