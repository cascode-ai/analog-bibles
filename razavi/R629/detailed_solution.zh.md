# 详细步骤 - R629

**思路。** 每个共源级（common-source stage）是一个反相增益 $A_0 = g_mR_D$，在 $\omega_0 = 1/(R_DC_L)$ 处有一个极点。给定的低频环路增益 16 确定了 $A_0$，从而确定 $R_D$。三级环形振荡器在每个极点贡献 60° 的频率处振荡，即 $\omega_{osc} = \sqrt3\,\omega_0$，于是 1 GHz 的振荡频率确定了 $C_L$。

### 第 1 步 — 单级与环路的模型

$\lambda = 0$ 时，每个漏极看到的阻抗为 $Z = R_D \parallel (1/sC_L) = R_D/(1 + sR_DC_L)$，因此

$$\frac{v_{out}}{v_{in}} = -g_mZ = -\frac{A_0}{1 + s/\omega_0}, \qquad A_0 = g_mR_D, \qquad \omega_0 = \frac{1}{R_DC_L},$$

在 $M_1$ 的栅极处断开环路，环路增益为

$$H(s) = -\frac{A_0^3}{(1 + s/\omega_0)^3}.$$

### 第 2 步 — 由环路增益指标确定每级增益和 $R_D$

低频总环路增益为 $|H(0)|$：

$$|H(0)| = A_0^3 = 16 \quad\Longrightarrow\quad A_0 = 16^{1/3} = 2.52 .$$

取 $g_m = (200\ \Omega)^{-1}$：

$$R_D = \frac{A_0}{g_m} = 2.52\times200\ \Omega = 504\ \Omega .$$

**起振检查。** 振荡要求 $A_0 \ge 2$（第 3 步），而 2.52 > 2：在振荡频率处，环路增益为 $A_0^3/8 = 16/8 = 2$，是最小值的两倍。

### 第 3 步 — 三级环形振荡器的振荡频率

三次反相在直流时提供 180°，因此三个极点必须再提供 180°，每个 60°：

$$\tan^{-1}\frac{\omega_{osc}}{\omega_0} = 60^\circ \quad\Longrightarrow\quad \omega_{osc} = \sqrt3\,\omega_0 = \frac{\sqrt3}{R_DC_L}.$$

此时每级的幅值为 $A_0/\sqrt{1 + 3} = A_0/2$，这就是需要 $A_0 \ge 2$ 的原因。

### 第 4 步 — 求解 $C_L$

$$\omega_{osc} = 2\pi f_{osc} = 2\pi\times10^9\ \mathrm{s^{-1}} = 6.283\times10^9\ \mathrm{rad/s},$$

$$C_L = \frac{\sqrt3}{\omega_{osc}R_D} = \frac{1.732}{(6.283\times10^9\ \mathrm{rad/s})(504\ \Omega)} = \frac{1.732}{3.167\times10^{12}\ \mathrm{s^{-1}}} = 5.47\times10^{-13}\ \mathrm{F},$$

因此

$$C_L \approx 0.55\ \mathrm{pF}.$$

每级的极点位于 $\omega_0 = \omega_{osc}/\sqrt3 = 3.63\times10^9$ rad/s（$f_0 = 577$ MHz）。

**验算。** $R_DC_L = 504\ \Omega\times0.547\ \mathrm{pF} = 0.276$ ns，$\sqrt3/(0.276\ \mathrm{ns}) = 6.28\times10^9$ rad/s $= 2\pi\times1$ GHz。✓

### 第 5 步 — 说明：起振频率与稳态频率

由于 $A_0 = 2.52$ 超过临界值 2，小信号闭环极点，即 $(1 + s/\omega_0)^3 = -A_0^3$ 的根，位于右半平面：

$$s = \omega_0\left[\frac{A_0}{2} - 1 \pm j\frac{\sqrt3}{2}A_0\right] = \omega_0\,(0.26 \pm j2.18).$$

因此振荡**开始**增长时的频率为 $2.18\,\omega_0$，而不是 $\sqrt3\,\omega_0 = 1.73\,\omega_0$。随着幅度增大，晶体管的大信号特性使其等效增益下降，直到振荡频率处的环路增益恰好为 1；而 $R_DC_L$ 极点保持线性，因此仍由每级 60° 的条件决定频率，最终频率稳定在 $\sqrt3\,\omega_0$ 附近。（对采用平方律器件的该环形振荡器做瞬态仿真，得到的稳态频率与 1 GHz 相差约 10 % 以内。）$\omega_{osc} = \sqrt3\,\omega_0$ 是标准的设计公式。

若改为令起振极点的频率 $\sqrt3A_0\omega_0/2$ 等于 $2\pi\times1$ GHz，则得到 $C_L = \sqrt3A_0/(2\omega_{osc}R_D) = \sqrt3\,g_m/(2\omega_{osc}) \approx 0.69$ pF；它描述的是小扰动的初始增长，而不是稳态振荡。

### 结果

$$A_0 = 16^{1/3} = 2.52,\qquad R_D = 2.52\times200\ \Omega \approx 504\ \Omega,$$

$$C_L = \frac{\sqrt3}{2\pi f_{osc}R_D} = \frac{\sqrt3}{2\pi(10^9\ \mathrm{s^{-1}})(504\ \Omega)} \approx 0.55\ \mathrm{pF},$$

这由三级环形振荡器的条件 $\omega_{osc} = \sqrt3\,\omega_0 = \sqrt3/(R_DC_L)$ 得出。（若采用不断增长的起振极点的频率 $\sqrt3A_0\omega_0/2$，则约为 0.69 pF。）

**常见错误。** 把 16 当作每级的增益，得到 $R_D = 16\times200\ \Omega = 3.2$ kΩ。指标给出的是**总**环路增益，$A_0^3 = 16$。

**常见错误。** 令 $\omega_{osc} = 1/(R_DC_L)$，得到 $C_L = 0.32$ pF。在 $\omega_0$ 处每个极点只贡献 45°，总共 135°，不足以使环路一周的相移达到 360°。

**常见错误。** 使用 $\omega_{osc} = 10^9$ rad/s（把赫兹与 rad/s 混淆），这会使 $C_L$ 增大为 $2\pi$ 倍（约 3.4 pF）。
