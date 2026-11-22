# 详细步骤 - A360

用饱和电压和输入管阈值写出输入共模范围的两个极限，把该范围与电源轨区间 $[0,V_{DD}]$ 求交，找出交集缩为一点时的电源电压。答案取决于起约束作用的是哪个极限或哪条电源轨。

### 第 1 步 — 饱和电压

用 $V_{DS}(\mathrm{sat})=\sqrt{2I_D/[K'(W/L)]}$，$W/L=100$：

$$
V_{DS5}(\mathrm{sat})=\sqrt{\frac{2(100\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(100)}}=0.135\ \mathrm V,\qquad
V_{DS1}(\mathrm{sat})=\sqrt{\frac{2(50\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(100)}}=0.095\ \mathrm V,
$$
$$
V_{SD3}(\mathrm{sat})=\sqrt{\frac{2(50\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(100)}}=0.141\ \mathrm V .
$$

### 第 2 步 — 输入共模范围的极限

下限：M5 须保持 $V_{DS5}\ge V_{DS5}(\mathrm{sat})$，而输入栅极比公共源极高一个 $V_{GS1}=V_{T1}+V_{DS1}(\mathrm{sat})$：

$$
v_{icm}\ge V_{DS5}(\mathrm{sat})+V_{T1}+V_{DS1}(\mathrm{sat})=0.135+0.7+0.095=0.930\ \mathrm V .
$$

上限：M1/M2 的漏极位于 $V_{DD}-V_{SD3}$；M3 饱和要求 $V_{SD3}\ge V_{SD3}(\mathrm{sat})$，M1 饱和要求 $V_{D1}\ge v_{icm}-V_{T1}$：

$$
v_{icm}\le V_{DD}-V_{SD3}(\mathrm{sat})+V_{T1}=V_{DD}+0.559\ \mathrm V .
$$

该上限总是高于 $V_{DD}$，所以在电源轨之内，可用范围的上端就是电源轨 $V_{DD}$ 本身。

### 第 3 步 — 最低电源电压

电源轨内的可用范围为

$$
0.930\ \mathrm V\le v_{icm}\le V_{DD},
$$

它缩为一点时的电源电压为

$$
V_{DD}(\min)\approx0.93\ \mathrm V .
$$

若改为令两个器件极限相等，得 $V_{DD}=V_{SD3}(\mathrm{sat})+V_{DS1}(\mathrm{sat})+V_{DS5}(\mathrm{sat})=0.372$ V，但此时唯一的共模点在 0.93 V，远高于 0.37 V 的电源；这一条件并不充分。对增强型输入管，决定最低电源电压的是下限，约为 $V_T+2V_{ON}$。

若计入体效应（衬底接地），$V_{T1}$ 升高到约 0.73 V，最低电源电压约为 0.96 V。
