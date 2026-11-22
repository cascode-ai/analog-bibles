# 详细步骤 - G097

将 $V_{OUT}=V_{BE(\text{on})}+MV_T$ 对温度求导。$V_{BE(\text{on})}$ 的导数由三部分组成：来自 $V_T$ 的 $V_{BE}/T$、偏置电流 $I_1$ 的温度系数，以及 $I_S$ 强烈的温度依赖。令总导数为零，即可直接得到输出电压，而无需明确知道 $M$ 或 $I_S$。$I_1$ 的温度系数通过指数 $\alpha=T\cdot TC_F$ 进入结果。

### 第 1 步 — 偏置电流的温度系数

在 $T_0$ 附近的小范围内，相对温度系数为 $TC_F$ 的电流可写成 $I_1\propto T^{\alpha}$，其中

$$
\frac1{I_1}\frac{dI_1}{dT}=\frac{\alpha}T\quad\Rightarrow\quad\alpha=T_0\cdot TC_F=(298\ \mathrm K)(-1500\times10^{-6}\ \mathrm{K^{-1}})=-0.447 .
$$

与绝对温度成正比（PTAT）的电流对应 $\alpha=1$。扩散电阻产生的电流随温度下降，所以 $\alpha<0$。

### 第 2 步 — $V_{BE(\text{on})}$ 对温度的导数

由 $V_{BE(\text{on})}=V_T\ln(I_1/I_S)$ 及 $V_T=kT/q$：

$$
\frac{dV_{BE(\text{on})}}{dT}=\frac{V_{BE(\text{on})}}T+V_T\left[\frac1{I_1}\frac{dI_1}{dT}-\frac1{I_S}\frac{dI_S}{dT}\right].
$$

由 $I_S\propto T^{\gamma}\exp(-V_{G0}/V_T)$ 得 $\frac1{I_S}\frac{dI_S}{dT}=\frac{\gamma}T+\frac{V_{G0}}{V_TT}$。代入该式，并把电流项写成 $\alpha/T$：

$$
\frac{dV_{BE(\text{on})}}{dT}=\frac{V_{BE(\text{on})}-V_{G0}-(\gamma-\alpha)V_T}T .
$$

### 第 3 步 — 使 $V_{OUT}$ 的温度系数为零

$M$ 与温度无关，所以 $d(MV_T)/dT=MV_T/T$。令输出在 $T_0$ 处的导数为零：

$$
\frac{dV_{OUT}}{dT}=\frac{V_{BE(\text{on})}+MV_T-V_{G0}-(\gamma-\alpha)V_T}{T_0}=0
\quad\Rightarrow\quad
V_{OUT}(T_0)=V_{G0}+(\gamma-\alpha)V_{T0}.
$$

基准电压必须比外推的带隙电压高 $(\gamma-\alpha)V_T$。无论 $M$ 取何值，它只需使输出等于这一数值。

### 第 4 步 — 数值

$$
V_{OUT}=1.205\ \mathrm V+(3.2+0.447)(25.7\ \mathrm{mV})=1.205\ \mathrm V+0.094\ \mathrm V=1.299\ \mathrm V\approx1.30\ \mathrm V .
$$

若偏置电流为 PTAT（$\alpha=1$），同一公式给出 $1.205\ \mathrm V+(2.2)(25.7\ \mathrm{mV})=1.262$ V。由电阻产生的电流具有负温度系数，使 $V_{BE(\text{on})}$ 随温度下降得更快。抵消它需要更大的 PTAT 项，从而使零温度系数输出电压升高 37 mV。
