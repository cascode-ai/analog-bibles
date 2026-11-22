# 详细步骤 - A116

摆幅极限来自大信号传输特性：二极管连接的负载决定上限，$v_{IN}=V_{DD}$ 时 M1（线性区）与 M2（饱和）的电流平衡决定下限。在 50 µA 偏置点，用小信号模型求增益和输出电阻。由于输入由理想电压源驱动，只有输出节点具有时间常数，因此电路在输出端有一个极点，另外经 $C_{gd1}$ 产生一个右半平面零点。

### 第 1 步 — 输出摆幅极限

$\beta_1=K'_N(W_1/L_1)=220\ \mu\mathrm{A/V^2}$，$\beta_2=K'_P(W_2/L_2)=50\ \mu\mathrm{A/V^2}$：

- 上限：M2 为二极管连接，$v_{SG2}=|V_{TP}|$ 时停止导通，故 $v_{OUT}(\max)=V_{DD}-|V_{TP}|=4.3$ V（M1 截止）。
- 下限：$v_{IN}=V_{DD}$ 时，M1 处于线性区，M2 饱和。两管均取 $V_T=0.7$ V，令 $\beta_1[(V_{DD}-V_T)v_{OUT}-v_{OUT}^2/2]=\tfrac{\beta_2}{2}(V_{DD}-V_T-v_{OUT})^2$，得

$$
v_{OUT}(\min)=(V_{DD}-V_T)\left[1-\frac1{\sqrt{1+\beta_2/\beta_1}}\right]
=4.3\ \mathrm V-\frac{4.3\ \mathrm V}{\sqrt{1+50/220}}=0.418\ \mathrm V .
$$

两个极限都由传输特性决定，与偏置电流无关。（若在下限方程中保留 M2 的 $\lambda$，下限升至约 0.5 V。）

### 第 2 步 — 偏置点与小信号参数

$I_D=50$ µA、偏置中忽略 $\lambda$ 时，$V_{GS1}=0.7+\sqrt{2(50\ \mu\mathrm A)/(220\ \mu\mathrm{A/V^2})}=1.374$ V，$V_{OUT}=5-0.7-1.414=2.886$ V，所以 M1 饱和。由 $g_m=\sqrt{2\beta I_D}$ 和 $g_{ds}=\lambda I_D$：

$$
g_{m1}=\sqrt{2(220\ \mu\mathrm{A/V^2})(50\ \mu\mathrm A)}=148.3\ \mu\mathrm S,\qquad
g_{m2}=\sqrt{2(50\ \mu\mathrm{A/V^2})(50\ \mu\mathrm A)}=70.7\ \mu\mathrm S,
$$

$$
g_{ds1}=2\ \mu\mathrm S,\qquad g_{ds2}=2.5\ \mu\mathrm S,\qquad
G_{out}=g_{m2}+g_{ds1}+g_{ds2}=75.2\ \mu\mathrm S .
$$

### 第 3 步 — 增益与输出电阻

二极管连接的 M2 以 $g_{m2}$ 与 $g_{ds1}$、$g_{ds2}$ 并联作为输出端负载：

$$
A_v=-\frac{g_{m1}}{G_{out}}=-\frac{148.3}{75.2}=-1.97\ \mathrm{V/V},\qquad
R_{out}=\frac1{G_{out}}=13.3\ \mathrm{k\Omega}.
$$

若忽略输出电导，则 $A_v=-g_{m1}/g_{m2}=-2.10$ V/V，$R_{out}=14.1$ kΩ。

### 第 4 步 — 输出端的电容

$V_{DD}$、地和由理想源驱动的输入端都是交流固定节点。因此每个电容要么接在输出与固定节点之间，要么接在输出与输入之间：

- $C_{bd1}$（M1 漏极到地）和 $C_{bd2}$（M2 漏极到接 $V_{DD}$ 的衬底）：输出到交流地；
- $C_{gs2}$：M2 的栅极就是输出，源极接 $V_{DD}$，所以它也接在输出与交流地之间；
- $C_L$：输出到地；
- $C_{gd1}$：接在输入与输出之间。

$$
C_{out}=C_{bd1}+C_{bd2}+C_{gs2}+C_L=10+10+2+1000\ \mathrm{fF}=1022\ \mathrm{fF}.
$$

### 第 5 步 — 传递函数与 −3 dB 频率

对输出节点列 KCL，$C_{gd1}$ 中的电流从输入端流入：

$$
(v_{in}-v_{out})sC_{gd1}=g_{m1}v_{in}+G_{out}v_{out}+sC_{out}v_{out}
\quad\Rightarrow\quad
\frac{v_{out}}{v_{in}}=-\frac{g_{m1}-sC_{gd1}}{G_{out}+s(C_{out}+C_{gd1})}.
$$

极点为

$$
|p_1|=\frac{G_{out}}{C_{out}+C_{gd1}}=\frac{75.2\ \mu\mathrm S}{1022.5\ \mathrm{fF}}=7.36\times10^7\ \mathrm{rad/s},
\qquad f_{-3\,\mathrm{dB}}=\frac{|p_1|}{2\pi}=11.7\ \mathrm{MHz}
$$

（只计 $g_{m2}$ 时为 11.0 MHz）。右半平面零点位于 $g_{m1}/C_{gd1}=2.97\times10^{11}$ rad/s，即 47 GHz，远高于极点，不影响带宽。带宽较低只是因为 $C_L=1$ pF 占主导；而二极管负载的低电阻 $1/g_{m2}$ 使带宽仍能达到 11.7 MHz。
