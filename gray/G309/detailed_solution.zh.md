# 详细步骤 - G309

采用密勒补偿且第二级增益很大时，单位增益频率为 $\omega_u=g_{mI}/C$，压摆率为 $SR=I_{EE}/C$，其中 $g_{mI}$ 为输入级跨导。保持 $\omega_u$ 不变即可确定新的 $C$，压摆率的改善倍数等于两种输入级 $I_{EE}/g_{mI}$ 之比。

### 第 1 步 — 原电路的单位增益频率与压摆率

每个双极型输入管的电流为 $I_C=I_{EE}/2=10$ μA。采用电流镜负载时，两半边在输出节点相加，该级跨导为完整的 $g_{m1}$：
$$
g_{m1}=\frac{I_C}{V_T}=\frac{10\ \mu\mathrm A}{26\ \mathrm{mV}}=0.3846\ \mathrm{mA/V}.
$$
在主极点以上，密勒电容使增益为 $a(j\omega)\approx g_{m1}/(j\omega C)$，因此
$$
\omega_u=\frac{g_{m1}}{C}=\frac{0.3846\ \mathrm{mA/V}}{10\ \mathrm{pF}}=3.846\times10^7\ \mathrm{rad/s}\quad(6.12\ \mathrm{MHz}).
$$
压摆时输入级向 $C$ 最多提供 $I_{EE}$，第二级使 $Q_5$ 基极电压几乎不变，因此 $dV_o/dt=I_{EE}/C$：
$$
SR_{\text{old}}=\frac{20\ \mu\mathrm A}{10\ \mathrm{pF}}=2\ \mathrm{V/\mu s}.
$$

### 第 2 步 — 新的补偿电容

负载电流镜不变时，PMOS 差分对的 $G_m=g_m=300$ μA/V。要得到相同的 $\omega_u$，需要
$$
C=\frac{g_m}{\omega_u}=\frac{300\ \mu\mathrm{A/V}}{3.846\times10^7\ \mathrm{rad/s}}=7.80\ \mathrm{pF}.
$$

### 第 3 步 — 新的压摆率与改善倍数

全部尾电流 $I_{EE}=600$ μA 都可以切换到 $C$ 上：
$$
SR_{\text{new}}=\frac{I_{EE}}{C}=\frac{600\ \mu\mathrm A}{7.80\ \mathrm{pF}}=76.9\ \mathrm{V/\mu s}.
$$
两种设计中都有 $C=g_{mI}/\omega_u$，故 $SR=\omega_u\,(I_{EE}/g_{mI})$。$\omega_u$ 相同时，改善倍数为
$$
\frac{SR_{\text{new}}}{SR_{\text{old}}}=\frac{(I_{EE}/g_{mI})_{\text{new}}}{(I_{EE}/g_{mI})_{\text{old}}}=\frac{600\ \mu\mathrm A/300\ \mu\mathrm{A/V}}{20\ \mu\mathrm A/0.3846\ \mathrm{mA/V}}=\frac{2\ \mathrm V}{0.052\ \mathrm V}=38.5 .
$$
改善来自 MOS 差分对大得多的 $I_{EE}/g_{mI}$。双极型差分对的 $I_{EE}/g_m=2V_T=52$ mV 是固定的；MOS 差分对的这一比值等于 $V_{ov}$（此处为 2 V），由偏置和器件尺寸决定。

### 第 4 步 — 第二级的校核

$SR=I_{EE}/C$ 假设输出节点能在两个方向上提供电容电流 $I_{EE}$。输出下降时，$Q_6$ 可以吸收该电流。输出上升时，流过 $C$ 的电流必须来自 $Q_6$ 集电极上的 300 μA 电流源（$Q_6$ 截止）。[图 1] 中该电流源小于新的 600 μA 尾电流，因此若沿用该输出级，正向压摆率将被限制在 $300\ \mu\mathrm A/7.80\ \mathrm{pF}=38.5\ \mathrm{V/\mu s}$。只有把第二级偏置提高到不低于 $I_{EE}$，才能达到 76.9 V/μs；原设计中 $20\ \mu\mathrm A\ll300\ \mu\mathrm A$，不存在这一限制。
