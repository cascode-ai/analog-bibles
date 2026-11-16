# 详细步骤 - R604

**思路。** 在偏置电流固定时，$W/L$ 只改变 $M_1$ 和 $M_2$ 的 $V_{ov}$ 与 $g_m$。用 $V_{ov}$ 表示对称差分对的失真（只有奇次谐波，以三次谐波为主），用 $g_m$ 表示输入参考噪声（两个晶体管和两个电阻）。它们对 $W/L$ 的依赖关系给出两条曲线，两者结合则揭示出与功耗之间的折中。

### 第 1 步 — 恒定电流下 $V_{ov}$ 和 $g_m$ 随 $W/L$ 的变化

平衡时每个晶体管流过 $I$，因此由 $I = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$：

$$V_{ov} = \sqrt{\frac{2I}{\mu_nC_{ox}W/L}} \propto (W/L)^{-1/2}, \qquad g_m = \sqrt{2\mu_nC_{ox}(W/L)I} = \frac{2I}{V_{ov}} \propto (W/L)^{1/2}.$$

电源提供 $I_{SS} = 2I$，因此 $P = 2IV_{DD}$，与 $W/L$ 无关。

### 第 2 步 — 对称差分对的失真

令 $k = \mu_nC_{ox}W/L$，且 $I_{SS} = 2I$（因此 $4I_{SS}/k = 4V_{ov}^2$），平方律差分对的特性为

$$\Delta I = I_{D1} - I_{D2} = \tfrac12kV_{in}\sqrt{4V_{ov}^2 - V_{in}^2} = kV_{ov}V_{in}\sqrt{1 - \frac{V_{in}^2}{4V_{ov}^2}}.$$

它是 $V_{in}$ 的**奇**函数，因此对称差分对**不产生偶次谐波**。利用 $\sqrt{1 - u} \approx 1 - u/2$ 展开：

$$\Delta I \approx kV_{ov}V_{in} - \frac{k}{8V_{ov}}V_{in}^3 .$$

对于 $V_{in} = V_m\cos\omega t$，由 $\cos^3\theta = \tfrac34\cos\theta + \tfrac14\cos3\theta$ 可得三次谐波为 $\tfrac14\cdot\dfrac{k}{8V_{ov}}V_m^3 = \dfrac{kV_m^3}{32V_{ov}}$，而基波（fundamental）$\approx kV_{ov}V_m$：

$$\mathrm{THD} \approx \mathrm{HD3} = \frac{kV_m^3/(32V_{ov})}{kV_{ov}V_m} = \frac{V_m^2}{32V_{ov}^2}.$$

代入 $V_{ov}^2 = 2I/(\mu_nC_{ox}W/L)$：

$$\mathrm{THD} \approx \frac{V_m^2\,\mu_nC_{ox}(W/L)}{64\,I} \;\propto\; W/L .$$

**曲线：** 一条过原点的直线；把 $W/L$ 加倍会使 THD 加倍。更高次的奇次谐波为 $(V_m/V_{ov})^4$ 量级，小得多。

### 第 3 步 — 输入参考热噪声

每个晶体管贡献 $\overline{I_{n,M}^2} = 4kT\gamma g_m$（$\gamma = 2/3$），每个负载电阻贡献 $\overline{I_{n,R}^2} = 4kT/R_D$；尾电流源的噪声是共模的，在差分输出中被抵消。每个半边都是增益为 $g_mR_D$ 的共源级，因此

$$\overline{V_{n,in,half}^2} = \frac{\left(4kT\gamma g_m + 4kT/R_D\right)R_D^2}{g_m^2R_D^2} = 4kT\left(\frac{\gamma}{g_m} + \frac{1}{g_m^2R_D}\right),$$

而两个相互独立的半边按功率相加：

$$\overline{V_{n,in}^2} = 2\times4kT\left(\frac{2}{3g_m} + \frac{1}{g_m^2R_D}\right) = 8kT\left(\frac{2}{3g_m} + \frac{1}{g_m^2R_D}\right).$$

晶体管项按 $1/g_m \propto (W/L)^{-1/2}$ 变化，电阻项按 $1/g_m^2 \propto (W/L)^{-1}$ 变化。

**曲线：** 单调下降；当晶体管项占主导时（$g_mR_D \gg 3/2$）按 $(W/L)^{-1/2}$ 下降，因此均方根（rms）噪声按 $(W/L)^{-1/4}$ 下降。

### 第 4 步 — 曲线的并列比较

以初始设计 $(W/L)_0$ 为基准归一化：

| $W/L\,/\,(W/L)_0$ | 0.25 | 0.5 | 1 | 2 | 4 |
|---|---|---|---|---|---|
| THD（∝ $W/L$） | 0.25 | 0.5 | 1 | 2 | 4 |
| 噪声 PSD，晶体管项（∝ $(W/L)^{-1/2}$） | 2.0 | 1.41 | 1 | 0.71 | 0.50 |
| 噪声 PSD，电阻项（∝ $(W/L)^{-1}$） | 4.0 | 2.0 | 1 | 0.50 | 0.25 |
| 功耗（$2IV_{DD}$） | 1 | 1 | 1 | 1 | 1 |

THD 线性上升，噪声下降，功耗保持不变。$W/L$ 非常大时，差分对最终会进入弱反型（weak inversion）区，此时 $g_m$ 饱和于约 $I/(\zeta V_T)$，两条曲线都趋于平坦；$W/L$ 非常小时则需要很大的过驱动电压，从而侵占维持饱和所需的电压余量（headroom）。

### 第 5 步 — 折中关系

**固定功耗下的噪声与线性度。** 加宽器件会降低过驱动电压：噪声下降，但 $V_m$ 占差分对线性范围（$\approx \sqrt2V_{ov}$）的比例变大，因此 HD3 上升。取噪声的晶体管项，并利用 $g_mV_{ov} = 2I$：

$$
\begin{aligned}
\left(\overline{V_{n,in}^2}\right)^2\cdot\mathrm{HD3} &= \left(\frac{16kT}{3g_m}\right)^2\cdot\frac{V_m^2}{32V_{ov}^2} = \frac{256\,k^2T^2}{9}\cdot\frac{V_m^2}{32\,(g_mV_{ov})^2}\\
&= \frac{8\,k^2T^2V_m^2}{9\,(2I)^2} = \frac{2\,k^2T^2V_m^2}{9\,I^2}.
\end{aligned}
$$

这一组合**与 $W/L$ 无关**，因此 $W/L$ 只是让设计点沿一条固定的噪声–线性度曲线滑动；它按 $1/I^2$ 下降，因此要同时改善两者就需要更大的电流，即更大的功耗。

**与共源级的比较**（采用相同器件和偏置电流 $I$）：

- 失真：共源级的 HD2 $= V_m/(4V_{ov})$，是 $V_m/V_{ov}$ 的一阶量，而差分对的 HD3 $= V_m^2/(32V_{ov}^2)$ 是二阶量，要小得多（例如在 $V_m = 0.1$ V、$V_{ov} = 0.43$ V 时为 0.17 % 对 5.8 %）；
- 噪声：两个有噪声的器件和两个电阻使输入噪声功率加倍；
- 功耗：差分对消耗 $2I$，是共源级的两倍。

### 结果

在 $I$ 恒定（功耗 $2IV_{DD}$ 恒定）时，增大 $W/L$ 会降低 $V_{ov} = \sqrt{2I/(\mu_nC_{ox}W/L)}$，并提高 $g_m = \sqrt{2\mu_nC_{ox}(W/L)I}$：

- **THD** $\approx \mathrm{HD3} = V_m^2/(32V_{ov}^2) = V_m^2\mu_nC_{ox}(W/L)/(64I)$ **随 $W/L$ 线性上升**（对称差分对中没有偶次谐波）；
- **输入参考噪声** $\overline{V_{n,in}^2} = 8kT\left[2/(3g_m) + 1/(g_m^2R_D)\right]$ **下降**，晶体管项按 $(W/L)^{-1/2}$，电阻项按 $(W/L)^{-1}$。

折中关系：在给定功耗下，更低的噪声（更大的 $W/L$、更小的过驱动电压）以牺牲线性度为代价，反之亦然，因为 $(\overline{V_{n,in}^2})^2\cdot\mathrm{HD3} \propto 1/I^2$ 与 $W/L$ 无关；只有增大电流（增大功耗）才能同时改善两者。与采用相同器件和电流的共源级相比，差分对的线性度高得多，但功耗和噪声功率都是其两倍。

**常见错误。** 认为 THD 随 $W/L$ 下降，或者照搬单个晶体管的 $\sqrt{W/L}$ 规律。差分对的失真是三阶的，$\propto 1/V_{ov}^2$，因此在电流恒定时它与 $W/L$ 成正比增长。

**常见错误。** 预测二次谐波（second harmonic）占主导，或者只计入一个半边的噪声。对称性抵消了偶次项，而两侧相互独立的噪声功率相加，得到 $8kT$ 而不是 $4kT$。
