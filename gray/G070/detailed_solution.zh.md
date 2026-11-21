# 详细步骤 - G070

先求偏置电流（计入 $R_{\text{TAIL}}$ 中少量的额外电流），再利用电路的对称性：差模输入时尾节点为交流地，共模输入时每个发射极的负载为 $R_E$ 加上两倍尾电阻。每个半边电路（half circuit）都是带发射极电阻的共射级，因此一个公式适用于两种模式。

### 第 1 步 — 直流偏置

直流输入为零时，两个基极都在 0 V，尾节点电压为 $V_X=-V_{BE}-I_ER_E$。尾支路中流过 $I_{\text{TAIL}}$，再加上经 $R_{\text{TAIL}}$ 回到 $-V_{EE}$ 的电流：

$$
2I_E=I_{\text{TAIL}}+\frac{V_X+V_{EE}}{R_{\text{TAIL}}},\qquad V_{BE}=V_T\ln\frac{I_C}{I_S},\qquad I_C=\frac{\beta_0}{\beta_0+1}I_E .
$$

从 $I_E=10\ \mu$A 出发迭代两次：$V_{BE}=26\ \mathrm{mV}\cdot\ln(10.17\ \mu\mathrm A/5\ \mathrm{fA})=0.557$ V，$V_X=-0.557\ \mathrm V-(10.2\ \mu\mathrm A)(4\ \mathrm{k\Omega})=-0.598$ V，且

$$
2I_E=20\ \mu\mathrm A+\frac{-0.598\ \mathrm V+5\ \mathrm V}{10\ \mathrm{M\Omega}}=20.44\ \mu\mathrm A,\qquad I_C=\frac{200}{201}(10.22\ \mu\mathrm A)=10.17\ \mu\mathrm A .
$$

小信号参数为

$$
g_m=\frac{I_C}{V_T}=\frac{10.17\ \mu\mathrm A}{26\ \mathrm{mV}}=0.3911\ \mathrm{mA/V},\qquad
r_\pi=\frac{\beta_0}{g_m}=511\ \mathrm{k\Omega}.
$$

### 第 2 步 — 带发射极电阻的半边电路增益

对总发射极电阻为 $R_{E,\text{tot}}$ 的共射级，发射极电流为 $(g_m+1/r_\pi)v_{be}=g_m(1+1/\beta_0)v_{be}$，由基极到地的 KVL 和集电极电流得

$$
v_i=v_{be}\left[1+g_mR_{E,\text{tot}}\left(1+\frac1{\beta_0}\right)\right],\qquad v_o=-g_mR_Cv_{be}
\quad\Rightarrow\quad
\frac{v_o}{v_i}=-\frac{g_mR_C}{1+g_mR_{E,\text{tot}}(1+1/\beta_0)} .
$$

半边电路从基极看进去的输入电阻为 $r_\pi+(\beta_0+1)R_{E,\text{tot}}$。

### 第 3 步 — 差模

$v_{i1}=-v_{i2}=v_{id}/2$ 时，两半边电流变化方向相反，尾节点电位不动：$R_{E,\text{tot}}=R_E$。于是 $v_{o1}=-v_{o2}$，$v_{od}/v_{id}$ 等于半边电路增益：

$$
g_mR_C=39.11,\qquad g_mR_E\left(1+\frac1{\beta_0}\right)=(0.3911\ \mathrm{mA/V})(4\ \mathrm{k\Omega})(1.005)=1.572,
$$

$$
A_{dm}=-\frac{39.11}{1+1.572}=-15.2\qquad\left(\approx-\frac{R_C}{R_E+1/g_m}\right).
$$

每个基极得到 $v_{id}/2$，因此

$$
R_{id}=\frac{v_{id}}{i_b}=2\left[r_\pi+(\beta_0+1)R_E\right]=2(511\ \mathrm{k\Omega}+804\ \mathrm{k\Omega})=2.63\ \mathrm{M\Omega}.
$$

### 第 4 步 — 共模

$v_{i1}=v_{i2}=v_{ic}$ 时，两半边向尾节点注入相同的电流，尾电阻流过的电流是一半边的两倍。把 $R_{\text{TAIL}}$ 拆成两个并联的 $2R_{\text{TAIL}}$，每半边的 $R_{E,\text{tot}}=R_E+2R_{\text{TAIL}}=20.004\ \mathrm{M\Omega}$（理想尾电流源的电阻为无穷大）：

$$
A_{cm}=-\frac{39.11}{1+(0.3911\ \mathrm{mA/V})(20.004\ \mathrm{M\Omega})(1.005)}=-\frac{39.11}{7864}=-4.97\times10^{-3}
\qquad\left(\approx-\frac{R_C}{R_E+2R_{\text{TAIL}}}\right),
$$

$$
R_{ic}=\frac{v_{ic}}{i_b}=r_\pi+(\beta_0+1)(R_E+2R_{\text{TAIL}})=0.511\ \mathrm{M\Omega}+201(20.004\ \mathrm{M\Omega})=4.02\ \mathrm{G\Omega}.
$$

### 第 5 步 — CMRR

两者之比中分子 $g_mR_C$ 相消：

$$
\mathrm{CMRR}=\left|\frac{A_{dm}}{A_{cm}}\right|=\frac{1+g_m(R_E+2R_{\text{TAIL}})(1+1/\beta_0)}{1+g_mR_E(1+1/\beta_0)}=\frac{7864}{2.572}=3.06\times10^3\ (69.7\ \mathrm{dB}).
$$

与不加 $R_E$ 的差分对相比（$A_{dm}=-39.1$，CMRR ≈ 7900，$R_{id}=2r_\pi=1.02\ \mathrm{M\Omega}$），负反馈电阻以差模增益和 CMRR 为代价，换来更高的差模输入电阻和更宽的线性输入范围；$A_{cm}$ 和 $R_{ic}$ 由 $2R_{\text{TAIL}}$ 主导，几乎不变。
