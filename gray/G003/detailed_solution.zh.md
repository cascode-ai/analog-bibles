# 详细步骤 - G003

在耗尽近似（depletion approximation）下，结相当于一个平板电容器，极板间距为总耗尽宽度，$C_j=\epsilon A/W_{tot}$。对于突变结，$W_{tot}\propto\sqrt{\psi_0-V_D}$，因此电容按 $(1-V_D/\psi_0)^{-1/2}$ 变化，其中正向偏置时 $V_D$ 为正。

### 第 1 步 — 内建电势

$$
\psi_0=\frac{kT}{q}\ln\frac{N_AN_D}{n_i^2}=(0.026\ \mathrm V)\ln\frac{(8\times10^{15})(10^{17})}{(1.5\times10^{10})^2}=0.751\ \mathrm V .
$$

### 第 2 步 — 零偏电容

结电压的微小变化 $dV$ 改变耗尽区边缘处的耗尽电荷 $Q=qAN_AW_1$，因此 $C_j=dQ/dV$。由泊松方程（Poisson's equation）和电荷中性（charge neutrality）得 $W_1=\left[2\epsilon(\psi_0-V_D)/\big(qN_A(1+N_A/N_D)\big)\right]^{1/2}$，于是

$$
C_j=A\left[\frac{q\epsilon N_AN_D}{2(N_A+N_D)(\psi_0-V_D)}\right]^{1/2}=\frac{C_{j0}}{\sqrt{1-V_D/\psi_0}},\qquad
C_{j0}=A\left[\frac{q\epsilon N_AN_D}{2(N_A+N_D)\psi_0}\right]^{1/2}.
$$

代入数值，其中 $N_AN_D/(N_A+N_D)=7.41\times10^{15}\ \mathrm{cm^{-3}}$：

$$
\begin{aligned}
C_{j0}&=(2\times10^{-5}\ \mathrm{cm^2})\left[\frac{(1.6\times10^{-19}\ \mathrm C)(1.04\times10^{-12}\ \mathrm{F/cm})(7.41\times10^{15}\ \mathrm{cm^{-3}})}{2(0.751\ \mathrm V)}\right]^{1/2}\\
&=(2\times10^{-5}\ \mathrm{cm^2})(2.864\times10^{-8}\ \mathrm{F/cm^2})=5.73\times10^{-13}\ \mathrm F=0.573\ \mathrm{pF}.
\end{aligned}
$$

等价地，零偏总宽度为 $W_{tot}=0.363\ \mu$m，$\epsilon A/W_{tot}=(1.04\times10^{-12}\ \mathrm{F/cm})(2\times10^{-5}\ \mathrm{cm^2})/(3.63\times10^{-5}\ \mathrm{cm})=0.573$ pF。

### 第 3 步 — 5 V 反向偏置与 0.3 V 正向偏置

反向偏置 $V_D=-5$ V 时，结电压升高，耗尽区变宽：

$$
C_j=\frac{0.573\ \mathrm{pF}}{\sqrt{1+5\ \mathrm V/0.751\ \mathrm V}}=\frac{0.573\ \mathrm{pF}}{\sqrt{7.654}}=0.207\ \mathrm{pF}.
$$

正向偏置 $V_D=+0.3$ V 时，耗尽区变窄：

$$
C_j=\frac{0.573\ \mathrm{pF}}{\sqrt{1-0.3\ \mathrm V/0.751\ \mathrm V}}=\frac{0.573\ \mathrm{pF}}{\sqrt{0.6007}}=0.739\ \mathrm{pF}.
$$

正向偏置的数值基于耗尽近似，只要 $V_D$ 明显低于 $\psi_0$（此处 $0.3\ \mathrm V<\psi_0/2$），该近似仍较合理。它只给出耗尽层电容；注入少数载流子产生的扩散电容（diffusion capacitance）是另外一项。

结果：$C_{j0}=0.573$ pF；5 V 反向偏置时 $C_j=0.207$ pF；0.3 V 正向偏置时 $C_j=0.739$ pF。
