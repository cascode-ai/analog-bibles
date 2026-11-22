# 详细步骤 - A161

先找出驱动 $v_3$ 的器件：M1 直接驱动，M3 经交叉耦合的电流镜 M6 → M5 驱动。在镜像节点 X（M5、M6 的栅极，接 $C_2$）和节点 3（接 $C_1$）列基尔霍夫电流定律（KCL）方程，再消去 $V_X$。节点 4 和 Y（接 $C_4$ 和 $C_3$）位于电路的另一半，不进入 $V_3/V_{in}$。

### 第 1 步 — 连接关系、偏置与小信号参数

由图可知，M1 和 M2 的栅极接 $v_1$，M3 和 M4 的栅极接 $v_2$，四个管子的源极共用流过 $I=200\ \mu$A 的尾电流节点。M1 的漏极接节点 3，负载为 M5。M3 的漏极接节点 X，即二极管连接的 M6，其栅极同时驱动 M5。M2 和 M4 以同样方式接到电流镜 M7 → M8 和节点 4。

四个输入管尺寸相同，因此平衡时各流过 $I/4=50\ \mu$A，各负载管也是如此。由 $g_m=\sqrt{2K'(W/L)I_D}$ 和 $g_{ds}=\lambda I_D$：

$$
\begin{aligned}
g_{m1}=g_{m3}&=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(50\ \mu\mathrm A)}=331.7\ \mu\mathrm S,\\
g_{m5}=g_{m6}&=\sqrt{2(50\ \mu\mathrm{A/V^2})(10)(50\ \mu\mathrm A)}=223.6\ \mu\mathrm S,\\
g_{ds1}+g_{ds5}&=(0.04+0.05)(50\ \mu\mathrm A)=4.5\ \mu\mathrm S.
\end{aligned}
$$

在纯差模驱动 $V_1=V_{in}/2$、$V_2=-V_{in}/2$ 下电路对称，因此公共源极节点为交流地。

### 第 2 步 — 镜像节点 X

M3 的漏极电流（以流入漏极为正）为 $g_{m3}V_2=-g_{m3}V_{in}/2$。节点 X 接电导为 $g_{m6}$ 的二极管 M6（其 $g_{ds}$ 和 $g_{ds3}$ 与 $g_{m6}$ 相比可忽略）以及 $C_2$。列 KCL，经 M3 流出 X 的电流由 M6 和 $C_2$ 平衡：

$$
(g_{m6}+sC_2)V_X=-g_{m3}V_2=\frac{g_{m3}V_{in}}2
\quad\Rightarrow\quad
V_X=\frac{g_{m3}V_{in}/2}{g_{m6}+sC_2}.
$$

### 第 3 步 — 节点 3 与传递函数

M1 从节点 3 抽取 $g_{m1}V_{in}/2$。M5 是源极接交流地的 p 沟道管，向节点 3 提供 $-g_{m5}V_X$（其栅极电压升高会使电流减小）。节点电导为 $g_{ds1}+g_{ds5}$ 加上 $sC_1$：

$$
(sC_1+g_{ds1}+g_{ds5})V_3=-\frac{g_{m1}V_{in}}2-\frac{g_{m5}g_{m3}V_{in}/2}{g_{m6}+sC_2}.
$$

取 $g_{m3}=g_{m1}$，两项合并为

$$
\frac{V_3(s)}{V_{in}(s)}=-\frac{g_{m1}}2\,\frac{sC_2+g_{m5}+g_{m6}}{(sC_1+g_{ds1}+g_{ds5})(sC_2+g_{m6})}.
$$

当 $s\to0$ 且 $g_{m5}=g_{m6}$ 时，增益为 $-g_{m1}/(g_{ds1}+g_{ds5})$：镜像通路送来另一半差分电流。高频时 $C_2$ 将节点 X 短路，镜像通路消失，只剩 M1 的一半，因此在镜像极点频率的两倍处出现左半平面零点。

### 第 4 步 — 数值

$$
\begin{aligned}
A_0&=-\frac{g_{m1}}{g_{ds1}+g_{ds5}}=-\frac{331.7\ \mu\mathrm S}{4.5\ \mu\mathrm S}=-73.7\ \mathrm{V/V},\\
p_1&=-\frac{g_{ds1}+g_{ds5}}{C_1}=-\frac{4.5\ \mu\mathrm S}{1\ \mathrm{pF}}=-4.5\times10^6\ \mathrm{rad/s}\quad(716\ \mathrm{kHz}),\\
p_2&=-\frac{g_{m6}}{C_2}=-\frac{223.6\ \mu\mathrm S}{1\ \mathrm{pF}}=-2.24\times10^8\ \mathrm{rad/s}\quad(35.6\ \mathrm{MHz}),\\
z_1&=-\frac{g_{m5}+g_{m6}}{C_2}=-\frac{2(223.6\ \mu\mathrm S)}{1\ \mathrm{pF}}=-4.47\times10^8\ \mathrm{rad/s}\quad(71.2\ \mathrm{MHz}).
\end{aligned}
$$

$C_3$ 和 $C_4$ 只出现在 $V_4$ 中，不影响 $V_3/V_{in}$。在节点 X 保留 $g_{ds3}+g_{ds6}$ 只使数值略有变化（增益 −73.0，$p_2=-2.28\times10^8$ rad/s，$z_1=-4.52\times10^8$ rad/s）。对同一电路进行 level-1 ngspice 交流分析，得到反相增益 79 和 −3 dB 频率 677 kHz；这一小差别来自仿真器采用的 $g_{ds}=\lambda I_D/(1+\lambda V_{DS})$。
