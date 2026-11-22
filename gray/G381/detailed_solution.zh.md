# 详细步骤 - G381

电路是对称的，因此把它拆分为差模（DM）半边电路和共模（CM）半边电路：差模时尾节点为交流地，共模时每一半看到两倍的尾电阻。每个半边电路给出开路增益和输出电阻，把输出短路则得到相应的跨导。再把定义方程与 T 形和 π 形网络对应，求出各元件值。

### 第 1 步 — 小信号参数

$$
g_{m1}=\frac{2I_D}{V_{ov}}=\frac{2(100\ \mu\mathrm A)}{0.2\ \mathrm V}=1\ \mathrm{mA/V},\qquad
r_{o1}=\frac{10\ \mathrm V}{100\ \mu\mathrm A}=100\ \mathrm{k\Omega},\qquad
r_{o3}=\frac{20\ \mathrm V}{100\ \mu\mathrm A}=200\ \mathrm{k\Omega},
$$

$$
r_{o5}=\frac{10\ \mathrm V}{200\ \mu\mathrm A}=50\ \mathrm{k\Omega},\qquad r_{o5h}=2r_{o5}=100\ \mathrm{k\Omega},
$$

其中 $r_{o5h}$ 是每个共模半边电路看到的尾电阻。

### 第 2 步 — 差模参数

在差模半边电路中尾节点不动，因此 $M_1$ 是由 $v_{id}/2$ 驱动、负载为 $r_{o3}$ 的共源级。在 $v_{o1}$ 处看到的输出电阻为 $R_{od}/2$，开路输出为 $a_{dm}v_{id}/2$：

$$
\frac{R_{od}}{2}=r_{o1}\parallel r_{o3}=66.7\ \mathrm{k\Omega}\ \ (R_{od}=133\ \mathrm{k\Omega}),\qquad
a_{dm}=-g_{m1}(r_{o1}\parallel r_{o3})=-66.7 .
$$

把输出短路到地时，流入端子 1 的电流等于 $M_1$ 吸取的信号电流 $g_{m1}v_{id}/2$，因此 $i_{od}=g_{m1}v_{id}/2$，

$$
G_{md}=\frac{g_{m1}}{2}=0.5\ \mathrm{mA/V},
$$

与 $a_{dm}=-G_{md}R_{od}$ 一致。

### 第 3 步 — 共模参数

在共模半边电路中，$M_1$ 的源极接 $r_{o5h}$。从其漏极向下看：

$$
R_{o(\mathrm{down})}=r_{o1}(1+g_{m1}r_{o5h})+r_{o5h}=10.2\ \mathrm{M\Omega},\qquad
R_{oc}=R_{o(\mathrm{down})}\parallel r_{o3}=196\ \mathrm{k\Omega}.
$$

输出短路时，带源极负反馈的跨导为

$$
G_{mc}=\frac{g_{m1}}{1+g_{m1}r_{o5h}+r_{o5h}/r_{o1}}=\frac{1\ \mathrm{mA/V}}{102}=9.80\ \mu\mathrm A/\mathrm V\approx\frac{1}{r_{o5h}},
$$

电流流入每个输出端子。开路共模增益为

$$
a_{cm}=-G_{mc}R_{oc}=-(9.80\ \mu\mathrm A/\mathrm V)(196\ \mathrm{k\Omega})=-1.92 .
$$

在源极和漏极节点列 KCL 求解共模半边电路，得到相同的 $v_{oc}/v_{ic}=-1.92$。（若用较粗略的 $G_{mc}\approx1/r_{o5h}$，则 $a_{cm}\approx-1.96$。）

### 第 4 步 — T 形网络元件

在 T 形网络中，每个输出经 $R_{od}/2$ 和电源 $a_{dm}v_{id}/2$ 接到中心节点，中心节点经并联支路电阻 $R_x$ 与电源 $a_{cm}v_{ic}$ 串联后接地。令 $i_{o1}=i_{oc}+i_{od}$，中心节点流过 $2i_{oc}$，因此

$$
v_{o1}=\frac{a_{dm}v_{id}}{2}+a_{cm}v_{ic}+\frac{R_{od}}{2}i_{od}+\left(2R_x+\frac{R_{od}}{2}\right)i_{oc}.
$$

令 $i_{oc}$ 的系数等于 $R_{oc}$：

$$
R_x=\frac{R_{oc}}{2}-\frac{R_{od}}{4}=98.1\ \mathrm{k\Omega}-33.3\ \mathrm{k\Omega}=64.7\ \mathrm{k\Omega}.
$$

| T 形网络元件 | 数值 |
|---|---|
| 串联电阻 $R_{od}/2$ | 各 66.7 kΩ |
| 串联电源 $a_{dm}v_{id}/2$ | $a_{dm}=-66.7$ |
| 并联支路电阻 $R_{oc}/2-R_{od}/4$ | 64.7 kΩ |
| 并联支路电源 $a_{cm}v_{ic}$ | $a_{cm}=-1.92$ |

### 第 5 步 — π 形网络元件

在 π 形网络中，每个输出对地接 $R_{oc}$ 和电源 $G_{mc}v_{ic}$，桥接电阻 $R_b$ 与电源 $G_{md}v_{id}$ 连接两个输出。流入端子 1 的电流包含 $v_{o1}/R_{oc}+(v_{o1}-v_{o2})/R_b$；由 $v_{o1}=v_{oc}+v_{od}/2$，$v_{od}$ 的系数为 $1/(2R_{oc})+1/R_b$，它必须等于 $1/R_{od}$：

$$
R_b=\left(\frac{1}{R_{od}}-\frac{1}{2R_{oc}}\right)^{-1}=R_{od}\parallel(-2R_{oc})=133\ \mathrm{k\Omega}\parallel(-392\ \mathrm{k\Omega})=202\ \mathrm{k\Omega}.
$$

| π 形网络元件 | 数值 |
|---|---|
| 并联电阻 $R_{oc}$ | 各 196 kΩ |
| 并联电源 $G_{mc}v_{ic}$ | $G_{mc}=9.8\ \mu$A/V |
| 桥接电阻 $R_{od}\parallel(-2R_{oc})$ | 202 kΩ |
| 桥接电源 $G_{md}v_{id}$ | $G_{md}=0.5$ mA/V |

在没有共模反馈时，共模增益之所以较小（$-1.92$），完全依靠尾电流管的输出电阻；而差模增益由 $r_{o1}\parallel r_{o3}$ 决定。
