# 详细步骤 - R382

**思路。** 放大器不吸取输入电流，因此 $R_S$ 的噪声电压全部出现在其输入端。输出功率谱密度（PSD）等于这个白噪声功率谱密度乘以单极点传递函数模的平方；把它从 $f = 0$ 积分到 $\infty$，即得输出总噪声功率。

### 第 1 步 — 输出噪声功率谱密度

令信号源为零，$R_S$ 中没有电流，因此放大器输入端看到的恰好是 $R_S$ 的噪声电压，即白噪声功率谱密度 $S_{in}(f) = 4kTR_S$。由

$$A(s) = \frac{A_0}{1 + s/\omega_0}, \qquad |A(j2\pi f)|^2 = \frac{A_0^2}{1 + \left(2\pi f/\omega_0\right)^2},$$

可得输出功率谱密度为

$$S_{out}(f) = |A(j2\pi f)|^2\,S_{in}(f) = \frac{4kTR_S\,A_0^2}{1 + \left(2\pi f/\omega_0\right)^2}.$$

### 第 2 步 — 在全部频率范围内积分

$$\overline{V_{n,out,tot}^2} = \int_0^\infty S_{out}(f)\,df = 4kTR_SA_0^2\int_0^\infty\frac{df}{1 + (2\pi f/\omega_0)^2}.$$

令 $x = 2\pi f/\omega_0$，则 $df = (\omega_0/2\pi)\,dx$，再利用 $\int_0^\infty dx/(1 + x^2) = \arctan(\infty) - \arctan(0) = \pi/2$：

$$\int_0^\infty\frac{df}{1 + (2\pi f/\omega_0)^2} = \frac{\omega_0}{2\pi}\int_0^\infty\frac{dx}{1 + x^2} = \frac{\omega_0}{2\pi}\cdot\frac{\pi}{2} = \frac{\omega_0}{4}.$$

因此

$$\overline{V_{n,out,tot}^2} = 4kTR_SA_0^2\cdot\frac{\omega_0}{4} = A_0^2\,kTR_S\,\omega_0 .$$

单位：$kT$（J = V·A·s）乘以 $R_S$（V/A）再乘以 $\omega_0$（1/s），得到 V² ✓。

### 第 3 步 — 物理解释与算例

**噪声带宽。** 结果等于 $4kTR_SA_0^2\cdot\dfrac{\pi}{2}f_0$，其中 $f_0 = \omega_0/2\pi$：单极点系统收集的噪声与带宽为 $(\pi/2)f_0 \approx 1.57f_0$ 的理想矩形滤波器（brick-wall filter）相同，多出的 57 % 来自 $f_0$ 以上的滚降部分。

**与 $R_S$ 的关系。** 与 RC 滤波器的 $kT/C$ 结果不同，这里的总噪声随 $R_S$ 增大，因为带宽由放大器决定（$\omega_0$），而不是由 $R_S$ 决定。

**算例**（示意性数值）：$R_S = 1\ \mathrm{k}\Omega$，$A_0 = 10$，$f_0 = 10$ MHz（$\omega_0 = 6.28\times10^7$ rad/s），$T = 300$ K，因此 $kT = 4.14\times10^{-21}$ J：

$$
\begin{aligned}
\overline{V_{n,out,tot}^2} &= (10)^2(4.14\times10^{-21}\ \mathrm{J})(10^3\ \Omega)(6.28\times10^7\ \mathrm{s^{-1}}) = 2.6\times10^{-8}\ \mathrm{V^2},\\
V_{n,out,rms} &= \sqrt{2.6\times10^{-8}}\ \mathrm{V} \approx 161\ \mu\mathrm{V}.
\end{aligned}
$$

### 结果

$$\overline{V_{n,out,tot}^2} = A_0^2\,kTR_S\,\omega_0\quad(\mathrm{V^2}), \qquad V_{n,out,rms} = A_0\sqrt{kTR_S\,\omega_0},$$

等价地写作 $2\pi A_0^2kTR_Sf_0$，其中 $f_0 = \omega_0/2\pi$。该结果由 $S_{out}(f) = 4kTR_SA_0^2/[1 + (2\pi f/\omega_0)^2]$ 和 $\int_0^\infty df/[1 + (2\pi f/\omega_0)^2] = \omega_0/4$ 得到。

**常见错误。** 对 $\omega$ 而不是对 $f$ 积分。功率谱密度是“每赫兹”的量；对 $\omega$ 积分会得到 $A_0^2\cdot4kTR_S\cdot\pi\omega_0/2$，偏大 $2\pi$ 倍。

**常见错误。** 忘记对增益取平方，或者把电流功率谱密度 $4kT/R_S$ 当作输入电压。放大器感受到的是电压 $4kTR_S$，而功率谱按 $|A|^2$ 缩放。

**常见错误。** 给出一个与 $R_S$ 无关的 $kT/C$ 型结果。这里的带宽 $\omega_0$ 属于放大器，因此总噪声与 $R_S$ 成正比。
