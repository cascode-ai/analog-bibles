# 详细步骤 - A074

$\phi_1$ 为高电平时，$C_1$ 充电到源电压。在下降沿，沟道电荷和栅-漏交叠电容耦合的电荷注入 $C_1$，使其电压降低。求出工作点处的阈值（计入体效应），确认处于慢速区，再计算所给误差表达式的两项。

### 第 1 步 — 下降沿之前的电压与阈值

$\phi_1$ 保持高电平的时间足够长，$C_1$ 完全充电，因此脉冲结束前开关中没有电流，两端都在 $V_S=2.0$ V。衬底接地，$V_{SB}=2$ V：

$$
V_T=V_{T0}+\gamma\Big(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\Big)=0.7\ \mathrm V+0.4\ \mathrm{V^{1/2}}\big(\sqrt{2.7\ \mathrm V}-\sqrt{0.7\ \mathrm V}\big)=1.023\ \mathrm V .
$$

因此当下降的栅压到达 $V_S+V_T=3.023$ V 时开关关断。

### 第 2 步 — 下降沿参数与慢速区校验

$$
U=\frac{5\ \mathrm V}{10\ \mathrm{ns}}=5\times10^{8}\ \mathrm{V/s},\qquad
\beta=K'\frac WL=(110\ \mu\mathrm{A/V^2})(5)=550\ \mu\mathrm{A/V^2},
$$

$$
C_{channel}=WLC_{ox}=(5\ \mu\mathrm m)(1\ \mu\mathrm m)(24.7\times10^{-4}\ \mathrm{F/m^2})=12.35\ \mathrm{fF},\qquad C_L=C_1=30\ \mathrm{fF}.
$$

慢速区要求栅压下降的速度远慢于开关把电荷导回源端的速度。取 $V_{HT}=V_H-V_S-V_T=5-2-1.023=1.977$ V，

$$
\frac{\beta V_{HT}^2}{2C_L}=\frac{(550\ \mu\mathrm{A/V^2})(1.977\ \mathrm V)^2}{2(30\ \mathrm{fF})}=3.6\times10^{10}\ \mathrm{V/s}\gg U=5\times10^{8}\ \mathrm{V/s},
$$

因此慢速区表达式适用。

### 第 3 步 — 误差的两项

第一项是开关关断过程中到达 $C_L$ 的电荷。在慢速区，大部分沟道电荷和经交叠电容耦合的电荷流回低阻抗的源端，只有关断前很短时间内注入的部分留下：

$$
\frac{W\cdot\mathrm{CGDO}+C_{channel}/2}{C_L}\sqrt{\frac{\pi UC_L}{2\beta}}
=\frac{5\ \mathrm{fF}+6.175\ \mathrm{fF}}{30\ \mathrm{fF}}\sqrt{\frac{\pi(5\times10^{8}\ \mathrm{V/s})(30\ \mathrm{fF})}{2(550\ \mu\mathrm{A/V^2})}}
=0.3725\times0.207\ \mathrm V=0.077\ \mathrm V .
$$

第二项是开关关断后的电容馈通：栅压继续从 $V_S+V_T$ 降到 $V_L=0$，经交叠电容耦合到 $C_L$：

$$
\frac{W\cdot\mathrm{CGDO}}{C_L}(V_S+V_T-V_L)=\frac{5\ \mathrm{fF}}{30\ \mathrm{fF}}(2\ \mathrm V+1.023\ \mathrm V-0)=0.504\ \mathrm V .
$$

### 第 4 步 — $t_1$ 时刻的输出电压

$$
V_{error}=0.077\ \mathrm V+0.504\ \mathrm V=0.581\ \mathrm V,\qquad
v_{out}(t_1)=V_S-V_{error}=2.0\ \mathrm V-0.581\ \mathrm V=1.42\ \mathrm V .
$$

误差使电压降低，因为下降的栅压从 n 沟道开关的沟道和交叠电容中抽走电荷。误差主要来自交叠电容馈通，因为 5 fF 的交叠电容是 30 fF 保持电容的六分之一；若忽略体效应（$V_T=0.7$ V），会低估这一误差，得到 1.47 V。
