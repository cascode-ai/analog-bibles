# 详细步骤 - R003

**思路。** 把都用 $I_D$ 表示的平方律 $g_m$ 与 $r_O$ 相乘，再代入 $\lambda \propto 1/L$，看结果如何随沟道长度变化；然后取几组 $L$ 和 $I_D$ 计算数值，画出曲线族。

### 第 1 步 — 本征增益

在饱和区，利用平方律从 $g_m = \mu_nC_{ox}(W/L)V_{ov}$ 中消去 $V_{ov}$，得到 $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$，它只按 $\sqrt{I_D}$ 增长；在 $I_D$ 中忽略 $\lambda V_{DS}$ 相对于 1 的影响，得到 $r_O = 1/(\lambda I_D)$，它按 $1/I_D$ 下降。二者之积为：

$$
\begin{aligned}
g_m r_O &= \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D}\cdot\frac{1}{\lambda I_D}\\
&= \frac{1}{\lambda}\cdot\frac{\sqrt{2\mu_nC_{ox}(W/L)}\,\sqrt{I_D}}{I_D}\\
&= \frac{1}{\lambda}\sqrt{\frac{2\mu_nC_{ox}(W/L)}{I_D}} .
\end{aligned}
$$

在根号内代入 $I_D = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$，得到等价的过驱动电压（overdrive voltage）形式

$$g_m r_O = \frac{1}{\lambda}\sqrt{\frac{2\mu_nC_{ox}(W/L)}{\tfrac12\mu_nC_{ox}(W/L)V_{ov}^2}} = \frac{1}{\lambda}\cdot\frac{2}{V_{ov}} = \frac{2}{\lambda V_{ov}} .$$

尺寸固定时，电流越大，过驱动电压越大，因此本征增益按 $1/V_{ov} \propto 1/\sqrt{I_D}$ 下降。

### 第 2 步 — 引入沟道长度

已知 $\lambda_0 = 0.1\ \mathrm{V^{-1}}$ 对应 $L_0 = 0.5\ \mu$m，于是

$$\lambda = \lambda_0\frac{L_0}{L}, \qquad \frac{1}{\lambda} = \frac{L}{\lambda_0L_0}.$$

代入第 1 步的结果，答案取决于 $L$ 变化时保持哪个量不变。

**(a) 宽度 $W$ 固定**，此时宽长比（aspect ratio）$W/L$ 随 $L$ 增大而减小：

$$
\begin{aligned}
g_m r_O &= \frac{L}{\lambda_0 L_0}\sqrt{\frac{2\mu_nC_{ox}W}{L\,I_D}}\\
&= \frac{1}{\lambda_0L_0}\sqrt{\frac{L^2\cdot2\mu_nC_{ox}W}{L\,I_D}}\\
&= \frac{1}{\lambda_0 L_0}\sqrt{\frac{2\mu_nC_{ox}WL}{I_D}} \;\propto\; \sqrt{\frac{L}{I_D}} .
\end{aligned}
$$

$L$ 加倍时，$r_O$ 乘以 2，但 $g_m$ 要除以 $\sqrt2$（因为 $W/L$ 变小），净效果是增大到 $\sqrt2 \approx 1.41$ 倍。

**(b) 宽长比 $W/L$ 固定**，即 $W$ 和 $L$ 按同一比例缩放：

$$g_m r_O = \frac{L}{\lambda_0L_0}\sqrt{\frac{2\mu_nC_{ox}(W/L)}{I_D}} \;\propto\; \frac{L}{\sqrt{I_D}} .$$

此时在给定电流下 $g_m$ 不变，只有 $r_O$ 增大，因此 $L$ 加倍会使本征增益加倍。

无论哪种情况，**在相同电流下，沟道越长，本征增益越高**，代价是器件更大（电容更大、速度更低）。

### 第 3 步 — $W = 50\ \mu$m 固定时的数值示例

对每个长度求出 $W/L$ 和 $\lambda$，再取 $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$，计算 $g_mr_O = (1/\lambda)\sqrt{2\mu_nC_{ox}(W/L)/I_D}$。

**$L = 0.5\ \mu$m：** $W/L = 100$，$\lambda = 0.1\ \mathrm{V^{-1}}$，$2\mu_nC_{ox}(W/L) = 2(134\ \mu\mathrm{A/V^2})(100) = 26.8\ \mathrm{mA/V^2}$，因此

$$g_mr_O = \frac{1}{0.1\ \mathrm{V^{-1}}}\sqrt{\frac{26.8\ \mathrm{mA/V^2}}{I_D}} ,$$

$$
\begin{aligned}
I_D = 0.1\ \mathrm{mA}:&\quad (10\ \mathrm{V})\sqrt{\frac{26.8\ \mathrm{mA/V^2}}{0.1\ \mathrm{mA}}} = (10\ \mathrm{V})\sqrt{268\ \mathrm{V^{-2}}} = (10\ \mathrm{V})(16.37\ \mathrm{V^{-1}}) = 164,\\
I_D = 0.5\ \mathrm{mA}:&\quad 10\sqrt{53.6} = 10\times7.32 = 73.2,\\
I_D = 1\ \mathrm{mA}:&\quad 10\sqrt{26.8} = 10\times5.18 = 51.8.
\end{aligned}
$$

其余各行的单位相同（V 乘以 V⁻¹，无量纲）。

**$L = 1\ \mu$m：** $W/L = 50$，$\lambda = 0.1 \times 0.5/1 = 0.05\ \mathrm{V^{-1}}$，$2\mu_nC_{ox}(W/L) = 13.4\ \mathrm{mA/V^2}$：

$$
\begin{aligned}
I_D = 0.1\ \mathrm{mA}:&\quad 20\sqrt{134} = 20\times11.58 = 232,\\
I_D = 0.5\ \mathrm{mA}:&\quad 20\sqrt{26.8} = 20\times5.18 = 104,\\
I_D = 1\ \mathrm{mA}:&\quad 20\sqrt{13.4} = 20\times3.66 = 73.2.
\end{aligned}
$$

**$L = 2\ \mu$m：** $W/L = 25$，$\lambda = 0.1\times0.5/2 = 0.025\ \mathrm{V^{-1}}$，$2\mu_nC_{ox}(W/L) = 6.7\ \mathrm{mA/V^2}$：

$$
\begin{aligned}
I_D = 0.1\ \mathrm{mA}:&\quad 40\sqrt{67} = 40\times8.19 = 327,\\
I_D = 0.5\ \mathrm{mA}:&\quad 40\sqrt{13.4} = 40\times3.66 = 146,\\
I_D = 1\ \mathrm{mA}:&\quad 40\sqrt{6.7} = 40\times2.59 = 104.
\end{aligned}
$$

$L$ 每加倍一次，各数值都乘以 $\sqrt2$，与第 2 步 (a) 的预测一致。

### 第 4 步 — 作图

$g_m r_O$ 的数值（$W = 50\ \mu$m 固定），另外增加了两个电流点以显示曲线形状：

| $I_D$ (mA) | $L = 0.5\ \mu$m | $L = 1\ \mu$m | $L = 2\ \mu$m |
|---|---|---|---|
| 0.05 | 232 | 327 | 463 |
| 0.1 | 164 | 232 | 327 |
| 0.2 | 116 | 164 | 232 |
| 0.5 | 73 | 104 | 146 |
| 1 | 52 | 73 | 104 |
| 2 | 37 | 52 | 73 |

- 每条曲线都**按 $1/\sqrt{I_D}$ 衰减**：小电流时很大，起初下降很陡，随后趋于平坦；在双对数坐标中是一条斜率为 $-1/2$ 的直线。
- **$L$ 越长，曲线越高**：各曲线是彼此沿纵向按比例缩放的副本，$W$ 固定时 $L$ 每加倍一次放大 $\sqrt2$ 倍（$W/L$ 固定时放大 2 倍），即在双对数坐标中是一组平行直线。
- 由于 $W$ 固定时 $g_mr_O \propto \sqrt{L/I_D}$，$L = 1\ \mu$m 的曲线在 $I_D$ 处的值等于 $L = 0.5\ \mu$m 的曲线在 $I_D/2$ 处的值（例如 0.2 mA 处的 164 与 0.1 mA 处的 164）。

**$W/L$ 固定的情形。** 保持 $W/L = 100$（$L = 1\ \mu$m 时 $W = 100\ \mu$m，$L = 2\ \mu$m 时 $W = 200\ \mu$m），$g_m$ 不变，相当于把 $L = 0.5\ \mu$m 一列的数值分别乘以 2 和 4：例如 $I_D = 0.5$ mA 时为 146 和 293。

**平方律的适用范围。** 电流很小时，器件进入亚阈值区，此时 $g_m \approx I_D/(\zeta V_T)$，其中 $\zeta > 1$ 为亚阈值斜率因子（subthreshold slope factor），因此 $g_mr_O \approx \frac{I_D}{\zeta V_T}\cdot\frac{1}{\lambda I_D} = \frac{1}{\lambda\zeta V_T}$，$1/\sqrt{I_D}$ 的上升趋于平缓。电流很大时，速度饱和（velocity saturation）使 $g_m$ 低于平方律给出的值，增益下降得更快。

### 结果

$$g_m r_O = \frac{\sqrt{2\mu_nC_{ox}(W/L)I_D}}{\lambda I_D} = \frac{1}{\lambda}\sqrt{\frac{2\mu_nC_{ox}(W/L)}{I_D}} = \frac{2}{\lambda(V_{GS} - V_{TH})} .$$

代入 $\lambda = \lambda_0L_0/L$：

$$g_m r_O = \frac{1}{\lambda_0L_0}\sqrt{\frac{2\mu_nC_{ox}WL}{I_D}} .$$

- 以 $I_D$ 为横轴，每条曲线都**按 $1/\sqrt{I_D}$ 下降**。
- **$L$ 越长，曲线越高**：$W$ 固定时 $g_mr_O \propto \sqrt{L}$（$L$ 加倍使其增大到 $\sqrt2$ 倍），$W/L$ 固定时 $\propto L$（$L$ 加倍使其加倍）。
- $W = 50\ \mu$m 时的示例：$L = 0.5\ \mu$m 时，$I_D = 0.1$、0.5、1 mA 对应的值为 164、73、52；$L = 1\ \mu$m 时为 232、104、73；$L = 2\ \mu$m 时为 327、146、104。

**常见错误。** 因为 $g_m$ 随电流增大，就断定 $g_mr_O$ 也随 $I_D$ **增大**。输出电阻（output resistance）按 $1/I_D$ 下降，比 $g_m$ 的上升（$\sqrt{I_D}$）更快，因此高本征增益要在**低**电流密度下获得。

**常见错误。** 忘记在 $W$ 固定时，$L$ 变化会使 $W/L$ 随之变化。$W$ 固定时按 $\sqrt L$ 变化，$W/L$ 固定时按 $L$ 变化，因此必须说明所作的假设。

**常见错误。** 认为 $g_m r_O$ 与 $L$ 无关，或者随之减小。由于 $\lambda \propto 1/L$，$r_O$ 与 $L$ 成正比地增大，其影响总是超过 $g_m$ 至多 $\sqrt{L}$ 倍的下降。
