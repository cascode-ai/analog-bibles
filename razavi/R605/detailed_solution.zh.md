# 详细步骤 - R605

**思路。** 在 $W/L$ 和 $R_D$ 固定时，偏置电流 $I$ 决定了 $V_{ov}$ 和 $g_m$。用 $V_{ov}$ 表示失真——平方律下只有二次谐波（second harmonic）——用 $g_m$ 表示输入参考热噪声，并把功耗写成 $V_{DD}I$；它们对电流的依赖关系给出随 $I$ 变化的三条曲线，由此即可得出折中关系。

### 第 1 步 — $V_{ov}$、$g_m$ 和功耗随 $I$ 的变化

由 $I = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$：

$$V_{ov} = \sqrt{\frac{2I}{\mu_nC_{ox}W/L}} \;\propto\; I^{1/2},$$

$$g_m = \mu_nC_{ox}\frac{W}{L}V_{ov} = \sqrt{2\mu_nC_{ox}(W/L)\,I} \;\propto\; I^{1/2}.$$

与改变 $W/L$ 的情形不同，$V_{ov}$ 和 $g_m$ **都**随电流增大。功耗 $P = V_{DD}I \propto I$ 是一条过原点的直线。

### 第 2 步 — 失真随 $I$ 的变化

令 $V_{GS} = V_{GS0} + V_m\cos\omega t$，并利用 $\cos^2\theta = \tfrac12(1 + \cos2\theta)$：

$$
\begin{aligned}
I_D &= \tfrac12\mu_nC_{ox}\tfrac{W}{L}(V_{ov} + V_m\cos\omega t)^2\\
&= \tfrac12\mu_nC_{ox}\tfrac{W}{L}\left[V_{ov}^2 + \tfrac12V_m^2 + 2V_{ov}V_m\cos\omega t + \tfrac12V_m^2\cos2\omega t\right].
\end{aligned}
$$

只出现二次谐波，而输出 $V_{DD} - R_DI_D$ 与 $I_D$ 成线性关系，因此

$$\mathrm{THD} = \mathrm{HD2} = \frac{\tfrac12V_m^2}{2V_{ov}V_m} = \frac{V_m}{4V_{ov}} = \frac{V_m}{4}\sqrt{\frac{\mu_nC_{ox}W/L}{2I}} \;\propto\; I^{-1/2}.$$

**曲线：** 一条按 $1/\sqrt I$ 下降的曲线，在小电流时陡峭，在大电流时平缓。把 $I$ 加倍会使 THD 降低 $\sqrt2$ 倍；要使其减半则需要四倍的电流。电流很小时，过驱动电压（overdrive voltage）降到接近 $V_m$，器件在负峰值处截止，上述公式不再适用。

### 第 3 步 — 输入参考热噪声随 $I$ 的变化

输出节点经 $R_D$ 接交流地，其上有两个互不相关的噪声电流：来自 $M_0$ 的 $\overline{I_{n,M}^2} = 4kT\gamma g_m$（$\gamma = 2/3$）和来自电阻的 $\overline{I_{n,R}^2} = 4kT/R_D$：

$$\overline{V_{n,out}^2} = \left(4kT\gamma g_m + \frac{4kT}{R_D}\right)R_D^2 .$$

除以 $(g_mR_D)^2$：

$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_m} + \frac{1}{g_m^2R_D}\right) = 4kT\left(\frac{2}{3g_m} + \frac{1}{g_m^2R_D}\right).$$

由于 $g_m \propto I^{1/2}$：

- 晶体管项 $\propto 1/g_m \propto I^{-1/2}$，对应的均方根（rms）噪声 $\propto I^{-1/4}$；
- 电阻项 $\propto 1/g_m^2 \propto I^{-1}$。

**曲线：** 单调下降，在小电流时陡峭，在大电流时平缓。

### 第 4 步 — 三条曲线

以初始电流 $I_0$ 为基准归一化：

| $I/I_0$ | 0.25 | 0.5 | 1 | 2 | 4 |
|---|---|---|---|---|---|
| THD（∝ $I^{-1/2}$） | 2.0 | 1.41 | 1 | 0.71 | 0.50 |
| 噪声 PSD，晶体管项（∝ $I^{-1/2}$） | 2.0 | 1.41 | 1 | 0.71 | 0.50 |
| 噪声 PSD，电阻项（∝ $I^{-1}$） | 4.0 | 2.0 | 1 | 0.50 | 0.25 |
| 功耗（∝ $I$） | 0.25 | 0.5 | 1 | 2 | 4 |

THD 和噪声一起下降；功耗线性上升。

### 第 5 步 — 折中关系

**噪声和线性度与功耗的关系。** 两者都只按 $I^{-1/2}$ 改善：HD2（或晶体管噪声 PSD）每改善 2× 就要付出 4× 的功耗。利用 $g_mV_{ov} = 2I$，二者的乘积

$$\overline{V_{n,in}^2}\Big|_{M_0}\times\mathrm{HD2} = \frac{4kT\gamma}{g_m}\cdot\frac{V_m}{4V_{ov}} = \frac{kT\gamma V_m}{2I} = \frac{kTV_m}{3I}$$

按 $1/I$ 下降：要**同时**改善两者，代价是功耗。

**功耗固定时。** 当 $I$ 固定时，只剩下 $W/L$ 可调：较大的 $W/L$ 降低噪声但增大失真，反之亦然，而上述乘积保持不变。功耗可以同时换来两者；尺寸设计只能在两者之间取舍。

**电压余量（headroom）。** 在 $R_D$ 固定时，增大 $I$ 会降低漏极偏置电压 $V_{DD} - IR_D$，同时 $V_{ov}$ 增大，因此 $V_{DS}$ 最终会低于 $V_{ov}$ 加上输出摆幅（output swing），晶体管退出饱和区。增益 $g_mR_D \propto \sqrt I$ 也随之增大，使固定的 $V_m$ 产生更大的输出摆幅，进一步收紧这一限制。

### 结果

在 $W/L$ 和 $R_D$ 固定时，增大 $I$ 会同时提高 $V_{ov} \propto \sqrt I$ 和 $g_m \propto \sqrt I$：

- **THD** $= \mathrm{HD2} = V_m/(4V_{ov}) = \tfrac{V_m}{4}\sqrt{\mu_nC_{ox}(W/L)/(2I)}$ **按 $I^{-1/2}$ 下降**；
- **输入参考噪声** $\overline{V_{n,in}^2} = 4kT\left[2/(3g_m) + 1/(g_m^2R_D)\right]$ **下降**：晶体管项按 $I^{-1/2}$（均方根值 $\propto I^{-1/4}$），电阻项按 $I^{-1}$；
- **功耗** $P = V_{DD}I$ **线性上升**。

折中关系：噪声和线性度都随电流改善，但改善得很慢：使 HD2 或晶体管噪声 PSD 减半需要四倍的功耗。在功耗固定时，噪声与线性度只能通过 $W/L$ 相互折中。在 $R_D$ 固定时，更大的电流还会降低漏极电压，最终在失去饱和之前限制摆幅。

**常见错误。** 认为 THD 随电流增大（“增益越大，失真越大”）。在 $W/L$ 固定时，电流越大意味着过驱动电压越大，因此固定的摆幅 $V_m$ 占 $V_{ov}$ 的比例越小，失真随之下降。

**常见错误。** 认为改善程度与功耗成线性关系。HD2 和噪声 PSD 只按 $1/\sqrt I$ 下降，因此要改善 2× 需要 4× 的电流。
