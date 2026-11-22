# 详细步骤 - G074

三个指标依次确定设计中的各个量：$R_{id}$ 确定 $r_\pi$，从而确定偏置电流；增益再确定 $R_C$；CMRR 确定 $R_{\text{TAIL}}$。电源电压由 $R_C$ 和 $R_{\text{TAIL}}$ 上的直流压降得到。

### 第 1 步 — 由输入电阻求偏置电流

没有发射极负反馈时，差模输入在每个 $r_\pi$ 上加 $v_{id}/2$，故 $R_{id}=v_{id}/i_b=2r_\pi$：

$$
r_\pi=\frac{2\ \mathrm{M\Omega}}2=1\ \mathrm{M\Omega},\qquad
g_m=\frac{\beta_0}{r_\pi}=\frac{200}{1\ \mathrm{M\Omega}}=0.2\ \mathrm{mA/V},\qquad
I_C=g_mV_T=(0.2\ \mathrm{mA/V})(26\ \mathrm{mV})=5.2\ \mu\mathrm A .
$$

### 第 2 步 — 由增益求集电极电阻

差模半边电路（half circuit）中尾节点为交流地，故 $v_{od}/v_{id}=-g_mR_C$：

$$
R_C=\frac{500}{g_m}=\frac{500}{0.2\ \mathrm{mA/V}}=2.5\ \mathrm{M\Omega}.
$$

### 第 3 步 — 由 CMRR 求尾电阻

共模半边电路中每个发射极看到 $2R_{\text{TAIL}}$，故 $A_{cm}=-g_mR_C/[1+2g_mR_{\text{TAIL}}(1+1/\beta_0)]$，从而

$$
\mathrm{CMRR}=\left|\frac{A_{dm}}{A_{cm}}\right|=1+2g_mR_{\text{TAIL}}\left(1+\frac1{\beta_0}\right)=500 .
$$

忽略很小的 $1/\beta_0$ 项，

$$
R_{\text{TAIL}}=\frac{499}{2(0.2\ \mathrm{mA/V})}=1.25\ \mathrm{M\Omega}
$$

（若保留因子 $1+1/\beta_0$，则为 1.24 MΩ）。

### 第 4 步 — 最小 $V_{CC}$

基极处于 0 V 的共模输入电压。每个集电极位于 $V_{CC}-I_CR_C$，直流压降为

$$
I_CR_C=(5.2\ \mu\mathrm A)(2.5\ \mathrm{M\Omega})=13\ \mathrm V .
$$

正向放大区要求集电结不正偏，即 $V_{CB}\ge0$，所以

$$
V_{CC}-13\ \mathrm V\ge0\quad\Rightarrow\quad V_{CC,\min}=13\ \mathrm V .
$$

（若改为要求 $V_{CE}\ge0.2$ V 之类的裕量，该值会略低，约为 12.5 V。）

### 第 5 步 — 最小 $V_{EE}$

$I_{\text{TAIL}}=0$ 时，两个发射极电流全部由尾电阻提供。尾节点位于 $-V_{BE(\text{on})}=-0.7$ V，且

$$
2I_E=\frac{2I_C}{\alpha_0}=2(5.2\ \mu\mathrm A)\frac{201}{200}=10.45\ \mu\mathrm A,
$$

$$
V_{EE}=V_{BE(\text{on})}+2I_ER_{\text{TAIL}}=0.7\ \mathrm V+(10.45\ \mu\mathrm A)(1.25\ \mathrm{M\Omega})=13.7\ \mathrm V .
$$

由于指标固定了尾电流，这个值必须恰好满足：$V_{EE}$ 不同会改变 $I_C$，从而改变 $r_\pi$、增益和 CMRR。设计结果为 $I_C=5.2\ \mu$A，$R_C=2.5\ \mathrm{M\Omega}$，$R_{\text{TAIL}}=1.25\ \mathrm{M\Omega}$，$V_{CC,\min}=13$ V，$V_{EE,\min}\approx13.7$ V。
