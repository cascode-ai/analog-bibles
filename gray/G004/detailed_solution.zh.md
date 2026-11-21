# 详细步骤 - G004

认为耗尽区内峰值电场达到临界电场时发生雪崩击穿。先用耗尽近似（depletion approximation）把突变结的峰值电场表示为结电压的函数，再求出 $|\mathcal E_{max}|=\mathcal E_{crit}$ 时的电压。

### 第 1 步 — 峰值电场与结电压的关系

由电荷中性（charge neutrality）$N_AW_1=N_DW_2$ 和泊松方程（Poisson's equation），耗尽区上的电压为 $V_j=\tfrac12|\mathcal E_{max}|(W_1+W_2)$，结处峰值电场为 $|\mathcal E_{max}|=qN_AW_1/\epsilon=qN_DW_2/\epsilon$。消去宽度：

$$
W_1+W_2=\frac{\epsilon|\mathcal E_{max}|}{q}\left(\frac1{N_A}+\frac1{N_D}\right)
\quad\Rightarrow\quad
|\mathcal E_{max}|=\left[\frac{2qN_AN_DV_j}{\epsilon(N_A+N_D)}\right]^{1/2}.
$$

其中 $V_j=\psi_0+V_R$；击穿时 $V_R\gg\psi_0$，故 $V_j\approx V_R$。

### 第 2 步 — 击穿电压

令 $|\mathcal E_{max}|=\mathcal E_{crit}$，解出电压：

$$
BV=\frac{\epsilon\,\mathcal E_{crit}^2}{2q}\left(\frac1{N_A}+\frac1{N_D}\right).
$$

代入数值：

$$
\begin{aligned}
\frac{\epsilon\,\mathcal E_{crit}^2}{2q}&=\frac{(1.04\times10^{-12}\ \mathrm{F/cm})(4\times10^5\ \mathrm{V/cm})^2}{2(1.6\times10^{-19}\ \mathrm C)}=5.2\times10^{17}\ \mathrm{V\,cm^{-3}},\\
BV&=(5.2\times10^{17}\ \mathrm{V\,cm^{-3}})\left(1.25\times10^{-16}+10^{-17}\right)\mathrm{cm^3}=70.2\ \mathrm V.
\end{aligned}
$$

严格地说，这是结上的总电压 $\psi_0+V_R$；减去 $\psi_0\approx0.75$ V 后，外加反向电压为 69.4 V，因此两种算法都有 $BV\approx70$ V。

### 第 3 步 — 由哪一侧决定击穿

$1/N_A$ 项占总和的 92.6%：轻掺杂的 p 侧承担了大部分耗尽宽度，决定了击穿电压。若只保留 $N_A$（单边结近似，one-sided approximation），得到 $(5.2\times10^{17}\ \mathrm{V\,cm^{-3}})/(8\times10^{15}\ \mathrm{cm^{-3}})=65$ V，偏低约 7%。

结果：$BV\approx70$ V。
