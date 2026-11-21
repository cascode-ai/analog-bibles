# 详细步骤 - A205

源极跟随器的输出就是 M1 的源极。该节点的小信号模型包含 $g_{m1}v_{gs}$、体跨导项 $g_{mbs1}v_{bs}$（衬底接交流地 $V_{SS}$，而源极随信号移动），以及 M1 和电流沉 M2 的电导 $g_{ds1}$、$g_{ds2}$。在输出端列基尔霍夫电流定律（KCL）方程即可同时得到增益和输出电阻；体效应在 $V_{SB1}=6$ V 下计算。

### 第 1 步 — 小信号参数

在 $I_D=50\ \mu$A、$W/L=2$ 下：

$$
g_{m1}=\sqrt{2K'_N(W/L)I_D}=\sqrt{2(110\ \mu\mathrm{A/V^2})(2)(50\ \mu\mathrm A)}=148.3\ \mu\mathrm S .
$$

M1 的源极位于 $V_{OUT}=1$ V，衬底位于 $-5$ V，故 $V_{SB1}=6$ V，

$$
g_{mbs1}=\frac{g_{m1}\gamma}{2\sqrt{2|\phi_F|+V_{SB1}}}=\frac{(148.3\ \mu\mathrm S)(0.4)}{2\sqrt{6.7}}=11.5\ \mu\mathrm S .
$$

$$
g_{ds1}=g_{ds2}=\lambda I_D=(0.04\ \mathrm{V^{-1}})(50\ \mu\mathrm A)=2\ \mu\mathrm S .
$$

### 第 2 步 — 电压增益

M1 的漏极接 $V_{DD}$（交流地），栅极为 $v_{in}$，源极为 $v_{out}$；衬底为交流地，故 $v_{bs}=-v_{out}$。M2 的栅极固定。输出端不接负载时，M1 推入输出端的电流必须经 $g_{ds2}$ 流出：

$$
g_{m1}(v_{in}-v_{out})-g_{mbs1}v_{out}-g_{ds1}v_{out}=g_{ds2}v_{out},
$$

$$
A_v=\frac{v_{out}}{v_{in}}=\frac{g_{m1}}{g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2}}=\frac{148.3}{148.3+11.5+2+2}=\frac{148.3}{163.8}=0.906\ \mathrm{V/V}.
$$

增益损失主要来自体效应：没有体效应时结果为 0.974。

### 第 3 步 — 输出电阻

$v_{in}=0$ 时，分母中的四项都表现为输出端对交流地的电导：

$$
R_{out}=\frac{1}{g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2}}=\frac{1}{163.8\ \mu\mathrm S}=6.1\ \mathrm{k\Omega}.
$$

以上采用 $g_m=\sqrt{2K'(W/L)I_D}$，偏置中不计 λ。若保留 $(1+\lambda V_{DS})$ 因子（$V_{DS1}=4$ V），$g_{m1}$ 增大到约 160 µS，$R_{out}$ 降到约 5.7 kΩ，增益基本不变，仍约为 0.91。
