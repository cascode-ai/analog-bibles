# 详细步骤 - G001

对突变结采用耗尽近似（depletion approximation）：空间电荷区完全耗尽，p 侧为均匀电荷 $-qN_A$，n 侧为均匀电荷 $+qN_D$，中性区内没有电场。由电荷中性（charge neutrality）和泊松方程（Poisson's equation）即可用结上总电压 $\psi_0+V_R$ 确定耗尽深度和峰值电场。

### 第 1 步 — 内建电势

平衡时，中性 p 区与中性 n 区之间的静电势差由多数载流子的玻尔兹曼关系（Boltzmann relation）得到，其中 $p_{p0}=N_A$、$n_{n0}=N_D$，且 $np=n_i^2$：

$$
\psi_0=\frac{kT}{q}\ln\frac{N_AN_D}{n_i^2}.
$$

代入题给数值：

$$
\frac{N_AN_D}{n_i^2}=\frac{(8\times10^{15})(10^{17})}{(1.5\times10^{10})^2}=3.556\times10^{12},\qquad
\psi_0=(0.026\ \mathrm V)(28.90)=0.751\ \mathrm V.
$$

### 第 2 步 — 5 V 反向偏置下的耗尽深度

反向偏置 $V_R$ 与内建电势相加，因此耗尽区上的电压为 $\psi_0+V_R=5.751$ V。电荷中性要求两侧耗尽电荷等量异号：

$$
N_AW_1=N_DW_2 .
$$

对泊松方程 $d^2V/dx^2=-\rho/\epsilon$ 在两侧区域积分两次，得电压降 $\psi_0+V_R=\dfrac{qN_AW_1^2}{2\epsilon}+\dfrac{qN_DW_2^2}{2\epsilon}$。用中性条件消去 $W_2$：

$$
W_1=\left[\frac{2\epsilon(\psi_0+V_R)}{qN_A\left(1+N_A/N_D\right)}\right]^{1/2},\qquad W_2=W_1\frac{N_A}{N_D}.
$$

代入数值，其中 $1+N_A/N_D=1.08$：

$$
\begin{aligned}
W_1&=\left[\frac{2(1.04\times10^{-12}\ \mathrm{F/cm})(5.751\ \mathrm V)}{(1.6\times10^{-19}\ \mathrm C)(8\times10^{15}\ \mathrm{cm^{-3}})(1.08)}\right]^{1/2}
=9.30\times10^{-5}\ \mathrm{cm}=0.930\ \mu\mathrm m,\\
W_2&=(0.930\ \mu\mathrm m)(0.08)=7.44\times10^{-6}\ \mathrm{cm}=0.0744\ \mu\mathrm m .
\end{aligned}
$$

总耗尽宽度为 $W_1+W_2=1.00\ \mu$m，其中大部分位于轻掺杂的 p 侧，因为同样的电荷所需的深度与掺杂浓度成反比。

### 第 3 步 — 最大电场

由高斯定律，均匀电荷使电场在每个耗尽区内线性增大，并在冶金结处达到峰值。从 p 侧边缘积分：

$$
|\mathcal E_{max}|=\frac{qN_AW_1}{\epsilon}=\frac{(1.6\times10^{-19}\ \mathrm C)(8\times10^{15}\ \mathrm{cm^{-3}})(9.30\times10^{-5}\ \mathrm{cm})}{1.04\times10^{-12}\ \mathrm{F/cm}}=1.14\times10^{5}\ \mathrm{V/cm}.
$$

由电荷中性，n 侧给出相同的值 $qN_DW_2/\epsilon$。验算：三角形电场分布给出 $\tfrac12|\mathcal E_{max}|(W_1+W_2)=\tfrac12(1.14\times10^5\ \mathrm{V/cm})(1.005\times10^{-4}\ \mathrm{cm})=5.75$ V，正好等于结电压。

结果：$\psi_0=0.751$ V，$W_1=0.93\ \mu$m（p 侧），$W_2=0.074\ \mu$m（n 侧），$|\mathcal E_{max}|=1.14\times10^5$ V/cm，位于冶金结处。
