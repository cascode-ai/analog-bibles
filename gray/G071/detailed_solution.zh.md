# 详细步骤 - G071

$Q_1$ 是驱动公共发射极节点的射极跟随器（emitter follower）；$Q_2$ 基极接地，是由该节点馈入的共基级。先求偏置，再解唯一的发射极节点得到 $v_e$，最后把 $Q_2$ 的发射极电流传到 $R_C$。

### 第 1 步 — 直流偏置

两个基极都在 0 V（$v_i$ 的直流值为零），公共发射极节点位于 $-V_{BE(\text{on})}=-0.7$ V。尾电阻电流在两个相同的晶体管之间平分：

$$
I_{R_{\text{TAIL}}}=\frac{-0.7\ \mathrm V-(-15\ \mathrm V)}{10\ \mathrm{k\Omega}}=1.43\ \mathrm{mA},\qquad
I_E=0.715\ \mathrm{mA},\qquad I_C=\frac{\beta_F}{\beta_F+1}I_E=0.711\ \mathrm{mA}.
$$

$$
g_m=\frac{I_C}{V_T}=27.4\ \mathrm{mA/V},\qquad r_\pi=\frac{\beta_0}{g_m}=7.31\ \mathrm{k\Omega},\qquad
r_{e}=\frac{r_\pi}{\beta_0+1}=36.4\ \Omega .
$$

验算：$V_{CE2}=15\ \mathrm V-(0.711\ \mathrm{mA})(10\ \mathrm{k\Omega})+0.7\ \mathrm V=8.6$ V，$Q_2$ 处于正向放大区（forward-active region）。

### 第 2 步 — 输入电阻

$Q_1$ 的发射极看到 $R_{\text{TAIL}}$ 与 $Q_2$ 的发射极并联。$Q_2$ 基极接地且忽略 $r_o$ 时，其发射极表现为 $r_\pi/(\beta_0+1)=r_e$。跟随器把发射极负载放大 $(\beta_0+1)$ 倍反映到基极：

$$
R_i=r_{\pi1}+(\beta_0+1)\left(R_{\text{TAIL}}\,\|\,r_{e2}\right)
=7.31\ \mathrm{k\Omega}+201\,(10\ \mathrm{k\Omega}\,\|\,36.4\ \Omega)
=7.31\ \mathrm{k\Omega}+7.28\ \mathrm{k\Omega}=14.6\ \mathrm{k\Omega}.
$$

由于 $r_{e2}\ll R_{\text{TAIL}}$，$R_i\approx2r_\pi$：信号源实际上看到两个串联的基射结，而不是很大的 $(\beta_0+1)R_{\text{TAIL}}\approx2$ MΩ。

### 第 3 步 — 发射极节点电压

在公共发射极节点 $v_e$ 列 KCL：$Q_1$ 的发射极电流 $(\beta_0+1)(v_i-v_e)/r_\pi$ 流入；$Q_2$ 的发射极电流 $(\beta_0+1)v_e/r_\pi$（其基极接地）和电流 $v_e/R_{\text{TAIL}}$ 流出：

$$
\frac{v_e}{v_i}=\frac{(\beta_0+1)/r_\pi}{2(\beta_0+1)/r_\pi+1/R_{\text{TAIL}}}
=\frac{27.50\ \mathrm{mA/V}}{55.00\ \mathrm{mA/V}+0.10\ \mathrm{mA/V}}=0.4991 .
$$

该节点的变化约为输入的一半，与单端驱动的差分对相同。

### 第 4 步 — 电压增益

对 $Q_2$，$v_{be2}=0-v_e$，故集电极电流为 $i_{c2}=-g_mv_e$，$R_C$ 上的输出电压（电源为交流地）为

$$
v_o=-i_{c2}R_C=g_mR_Cv_e
\quad\Rightarrow\quad
\frac{v_o}{v_i}=g_mR_C\frac{v_e}{v_i}=(27.36\ \mathrm{mA/V})(10\ \mathrm{k\Omega})(0.4991)=+137 .
$$

增益为同相：$v_i$ 上升使发射极电位升高，$Q_2$ 电流减小，$v_o$ 随之上升。增益基本等于 $g_mR_C/2$，即差分对的单端输出，只因 $R_{\text{TAIL}}$ 分走少量电流而略有减小。

### 第 5 步 — 输出电阻

$v_i=0$ 且忽略 $r_o$ 时，$Q_2$ 的集电极是理想电流源，输出端只剩 $R_C$：

$$
R_o=R_C=10\ \mathrm{k\Omega}.
$$

结果为 $R_i=14.6\ \mathrm{k\Omega}$，$v_o/v_i=+137$，$R_o=10\ \mathrm{k\Omega}$。
