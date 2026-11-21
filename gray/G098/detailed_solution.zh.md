# 详细步骤 - G098

运放迫使 $R_1$ 和 $R_2$ 上的电压相等，所以两路电流之比由 $R_2/R_1$ 决定，$R_3$ 上得到的 $\Delta V_{BE}$ 因而与绝对温度成正比（PTAT）。先由给定的 $I_1$ 和 $\Delta V_{BE}$ 求出 $I_2$ 和 $R_3$。再说明两路偏置电流都是 PTAT 的，由此确定零温度系数的输出电压。最后选取 $R_1$ 和 $R_2$ 来产生这一电压。

### 第 1 步 — 电流比与 $R_3$

运放使两个输入端电压相同，两输入端分别接在 $R_1$ 和 $R_2$ 的下端，而二者上端都接 $V_{OUT}$。因此 $I_1R_1=I_2R_2$。在 $Q_2$ 一侧，输入节点电位为 $V_{BE2}+I_2R_3$；在 $Q_1$ 一侧为 $V_{BE1}$，所以

$$
I_2R_3=V_{BE1}-V_{BE2}=V_T\ln\frac{I_1}{I_2}=100\ \mathrm{mV}.
$$

$$
\frac{I_1}{I_2}=e^{100\ \mathrm{mV}/25.7\ \mathrm{mV}}=e^{3.891}=49.0,\qquad
I_2=\frac{200\ \mu\mathrm A}{49.0}=4.08\ \mu\mathrm A,\qquad
R_3=\frac{100\ \mathrm{mV}}{4.08\ \mu\mathrm A}=24.5\ \mathrm{k\Omega}.
$$

### 第 2 步 — 偏置电流是 PTAT 的

$I_1/I_2=R_2/R_1$ 由与温度无关的电阻固定，所以 $\Delta V_{BE}=V_T\ln(R_2/R_1)\propto T$。于是 $I_2=\Delta V_{BE}/R_3\propto T$，$I_1=(R_2/R_1)I_2\propto T$。若记 $I_C\propto T^{\alpha}$，这些电流的 $\alpha=1$。

### 第 3 步 — 零温度系数输出电压

输出为 $V_{OUT}=V_{BE1}+I_1R_1$，即一个 $V_{BE}$ 加上一个 PTAT 电压，形式为 $V_{BE}+MV_T$，$M$ 为常数。由 $V_{BE}=V_T\ln(I_C/I_S)$、$I_S\propto T^{\gamma}\exp(-V_{G0}/V_T)$ 和 $I_C\propto T^{\alpha}$ 求导得

$$
\frac{dV_{BE}}{dT}=\frac{V_{BE}-V_{G0}-(\gamma-\alpha)V_T}T,\qquad
\frac{dV_{OUT}}{dT}=\frac{V_{OUT}-V_{G0}-(\gamma-\alpha)V_T}T .
$$

在 298 K、$\alpha=1$ 时令其为零：

$$
V_{OUT}=V_{G0}+(\gamma-1)V_T=1.205\ \mathrm V+(2.2)(25.7\ \mathrm{mV})=1.2615\ \mathrm V .
$$

### 第 4 步 — $R_1$ 与 $R_2$

$$
V_{BE1}=V_T\ln\frac{I_1}{I_S}=(25.7\ \mathrm{mV})\ln\frac{200\ \mu\mathrm A}{5\times10^{-15}\ \mathrm A}=0.627\ \mathrm V .
$$

输出电压的其余部分加在 $R_1$ 上，也同样加在 $R_2$ 上：

$$
I_1R_1=I_2R_2=1.2615\ \mathrm V-0.627\ \mathrm V=0.634\ \mathrm V,
$$

$$
R_1=\frac{0.634\ \mathrm V}{200\ \mu\mathrm A}=3.17\ \mathrm{k\Omega},\qquad
R_2=\frac{0.634\ \mathrm V}{4.08\ \mu\mathrm A}=155\ \mathrm{k\Omega}.
$$

验证：$R_2/R_3=6.34$，$V_{OUT}=V_{BE1}+(R_2/R_3)\Delta V_{BE}=0.627\ \mathrm V+(6.34)(100\ \mathrm{mV})=1.2615$ V。按题给器件模型、在这些固定电阻下对 $V_{OUT}(T)$ 做数值计算，确认 298 K 时 $dV_{OUT}/dT=0$。若改用 $V_T=26$ mV，数值变为 23.4 kΩ、3.14 kΩ 和 147 kΩ。
