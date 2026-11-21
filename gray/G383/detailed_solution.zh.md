# 详细步骤 - G383

把对称放大器拆分为差模半边电路（尾节点为交流地）和共模半边电路（每一半由两倍尾电阻构成源极负反馈）。由每个半边电路求出开路增益、输出电阻和短路跨导，再把定义方程与 T 形和 π 形网络对应。

### 第 1 步 — 新偏置下的小信号参数

$$
g_{m1}=\frac{2I_D}{V_{ov}}=\frac{2(50\ \mu\mathrm A)}{0.1\ \mathrm V}=1\ \mathrm{mA/V},\qquad
r_{o1}=\frac{10\ \mathrm V}{50\ \mu\mathrm A}=200\ \mathrm{k\Omega},\qquad
r_{o3}=\frac{20\ \mathrm V}{50\ \mu\mathrm A}=400\ \mathrm{k\Omega},
$$

$$
r_{o5}=\frac{10\ \mathrm V}{100\ \mu\mathrm A}=100\ \mathrm{k\Omega},\qquad r_{o5h}=2r_{o5}=200\ \mathrm{k\Omega},
$$

其中 $r_{o5h}$ 是每个共模半边电路看到的尾电阻。过驱动电压减半使 $g_{m1}$ 保持为 1 mA/V，而电流减半使所有 $r_o$ 加倍。

### 第 2 步 — 差模参数

在差模半边电路中，$M_1$ 是负载为 $r_{o3}$ 的共源级：

$$
\frac{R_{od}}{2}=r_{o1}\parallel r_{o3}=133\ \mathrm{k\Omega}\ \ (R_{od}=267\ \mathrm{k\Omega}),\qquad
a_{dm}=-g_{m1}(r_{o1}\parallel r_{o3})=-133 .
$$

输出短路时 $i_{od}=g_{m1}v_{id}/2$，故 $G_{md}=g_{m1}/2=0.5$ mA/V，且满足 $a_{dm}=-G_{md}R_{od}$。

### 第 3 步 — 共模参数

$M_1$ 的源极接 $r_{o5h}$ 时，

$$
R_{o(\mathrm{down})}=r_{o1}(1+g_{m1}r_{o5h})+r_{o5h}=40.4\ \mathrm{M\Omega},\qquad
R_{oc}=R_{o(\mathrm{down})}\parallel r_{o3}=396\ \mathrm{k\Omega},
$$

$$
G_{mc}=\frac{g_{m1}}{1+g_{m1}r_{o5h}+r_{o5h}/r_{o1}}=\frac{1\ \mathrm{mA/V}}{202}=4.95\ \mu\mathrm A/\mathrm V\approx\frac{1}{r_{o5h}}=5\ \mu\mathrm A/\mathrm V,
$$

$$
a_{cm}=-G_{mc}R_{oc}=-1.96\qquad(\approx-R_{oc}/r_{o5h}=-1.98\ \text{if}\ G_{mc}=1/r_{o5h}).
$$

### 第 4 步 — T 形网络元件

把 $v_{o1}=a_{dm}v_{id}/2+a_{cm}v_{ic}+(R_{od}/2)i_{od}+(2R_x+R_{od}/2)i_{oc}$ 与定义对应，得到并联支路电阻 $R_x=R_{oc}/2-R_{od}/4$：

$$
R_x=198\ \mathrm{k\Omega}-66.7\ \mathrm{k\Omega}=131\ \mathrm{k\Omega}.
$$

| T 形网络元件 | 数值 |
|---|---|
| 串联电阻 $R_{od}/2$ | 各 133 kΩ |
| 串联电源 $a_{dm}v_{id}/2$ | $a_{dm}=-133$ |
| 并联支路电阻 $R_{oc}/2-R_{od}/4$ | 131 kΩ |
| 并联支路电源 $a_{cm}v_{ic}$ | $a_{cm}\approx-1.96$ 至 $-1.98$ |

### 第 5 步 — π 形网络元件

$i_{o1}$ 中 $v_{od}$ 的系数为 $1/(2R_{oc})+1/R_b=1/R_{od}$，因此桥接电阻为

$$
R_b=R_{od}\parallel(-2R_{oc})=267\ \mathrm{k\Omega}\parallel(-792\ \mathrm{k\Omega})=402\ \mathrm{k\Omega}.
$$

| π 形网络元件 | 数值 |
|---|---|
| 并联电阻 $R_{oc}$ | 各 396 kΩ |
| 并联电源 $G_{mc}v_{ic}$ | $G_{mc}\approx5\ \mu$A/V |
| 桥接电阻 $R_{od}\parallel(-2R_{oc})$ | 402 kΩ |
| 桥接电源 $G_{md}v_{id}$ | $G_{md}=0.5$ mA/V |

与 $|V_{ov}|=0.2$ V、200 µA 的偏置相比，差模增益和所有电阻都加倍，而 $G_{md}$ 与共模增益基本不变。
