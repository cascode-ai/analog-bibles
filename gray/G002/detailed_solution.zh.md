# 详细步骤 - G002

对突变结采用耗尽近似（depletion approximation）。内建电势只取决于掺杂浓度；外加偏置 $V_D$（正向偏置为正）使耗尽区上的电压由 $\psi_0$ 变为 $\psi_0-V_D$，耗尽深度和峰值电场再由电荷中性（charge neutrality）和泊松方程（Poisson's equation）求出。

### 第 1 步 — 内建电势

由多数载流子的玻尔兹曼关系（Boltzmann relation），$p_{p0}=N_A$、$n_{n0}=N_D$：

$$
\psi_0=\frac{kT}{q}\ln\frac{N_AN_D}{n_i^2}=(0.026\ \mathrm V)\ln\frac{(8\times10^{15})(10^{17})}{(1.5\times10^{10})^2}=(0.026\ \mathrm V)(28.90)=0.751\ \mathrm V .
$$

偏置不改变掺杂浓度，因此两种情况下内建电势相同。

### 第 2 步 — 耗尽区公式

电荷中性给出 $N_AW_1=N_DW_2$。对泊松方程在均匀带电区域内积分，得到其上的电压 $\psi_0-V_D=q(N_AW_1^2+N_DW_2^2)/(2\epsilon)$。消去 $W_2$：

$$
W_1=\left[\frac{2\epsilon(\psi_0-V_D)}{qN_A\left(1+N_A/N_D\right)}\right]^{1/2},\qquad
W_2=W_1\frac{N_A}{N_D},\qquad
|\mathcal E_{max}|=\frac{qN_AW_1}{\epsilon}.
$$

峰值电场位于冶金结处，由高斯定律对 p 侧电荷积分得到。三个量都按 $\sqrt{\psi_0-V_D}$ 变化。

### 第 3 步 — 零偏置

$V_D=0$ 时结电压为 $\psi_0=0.751$ V，且 $1+N_A/N_D=1.08$：

$$
\begin{aligned}
W_1&=\left[\frac{2(1.04\times10^{-12}\ \mathrm{F/cm})(0.751\ \mathrm V)}{(1.6\times10^{-19}\ \mathrm C)(8\times10^{15}\ \mathrm{cm^{-3}})(1.08)}\right]^{1/2}=3.36\times10^{-5}\ \mathrm{cm}=0.336\ \mu\mathrm m,\\
W_2&=(0.336\ \mu\mathrm m)(0.08)=0.0269\ \mu\mathrm m,\\
|\mathcal E_{max}|&=\frac{(1.6\times10^{-19}\ \mathrm C)(8\times10^{15}\ \mathrm{cm^{-3}})(3.36\times10^{-5}\ \mathrm{cm})}{1.04\times10^{-12}\ \mathrm{F/cm}}=4.14\times10^4\ \mathrm{V/cm}.
\end{aligned}
$$

### 第 4 步 — 0.3 V 正向偏置

正向偏置与内建电势方向相反，结电压降为 $\psi_0-V_D=0.751\ \mathrm V-0.3\ \mathrm V=0.451$ V。将零偏结果乘以 $\sqrt{0.451/0.751}=0.775$：

| 物理量 | 零偏置 | 0.3 V 正向偏置 |
|---|---|---|
| 结电压 $\psi_0-V_D$ (V) | 0.751 | 0.451 |
| $W_1$（µm，p 侧） | 0.336 | 0.261 |
| $W_2$（µm，n 侧） | 0.0269 | 0.0208 |
| $\lvert\mathcal E_{max}\rvert$ (V/cm) | $4.14\times10^4$ | $3.21\times10^4$ |

正向偏置使耗尽区变窄、电场减小。两种情况下耗尽区的大部分都位于轻掺杂的 p 侧，$W_1/W_2=N_D/N_A=12.5$。
