# 详细步骤 - G386

同时驱动 $M_3$ 和 $M_4$ 的栅极使两个负载电流同等变化，因此这是共模激励。在共模半边电路中，$M_3$ 是共源放大器，其负载为自身的 $r_{o3}$ 与从 $M_1$ 漏极向下看的电阻并联，后者由半个尾电阻构成源极负反馈。

### 第 1 步 — 半边电路参数

在 $|I_D|=50\ \mu$A、$|V_{ov}|=0.1$ V 时，

$$
g_{m3}=\frac{2|I_{D3}|}{|V_{ov}|}=\frac{2(50\ \mu\mathrm A)}{0.1\ \mathrm V}=1\ \mathrm{mA/V},\qquad
r_{o3}=\frac{20\ \mathrm V}{50\ \mu\mathrm A}=400\ \mathrm{k\Omega},
$$

$g_{m1}=1$ mA/V，$r_{o1}=200$ kΩ，栅极接固定偏置的尾电流管 $M_5$ 在每个共模半边电路中表现为 $r_{o5h}=2r_{o5}=200$ kΩ。由于 $v_{ic}=0$，$M_1$ 的栅极为交流地。

### 第 2 步 — 输出节点看到的负载

从 $M_1$ 漏极向下看，其源极接 $r_{o5h}$：

$$
R_{o(\mathrm{down})}=r_{o1}(1+g_{m1}r_{o5h})+r_{o5h}=(200\ \mathrm{k\Omega})(201)+200\ \mathrm{k\Omega}=40.4\ \mathrm{M\Omega},
$$

因此输出节点的总电阻为

$$
r_{o3}\parallel R_{o(\mathrm{down})}=400\ \mathrm{k\Omega}\parallel40.4\ \mathrm{M\Omega}=396\ \mathrm{k\Omega}.
$$

### 第 3 步 — 共模控制增益

$M_3$ 把 $v_{cmc}$ 转换为漏极电流 $g_{m3}v_{cmc}$（其源极接 $V_{DD}$，为交流地）。对 PMOS 器件而言，栅压升高会减小送入输出节点的电流，因此

$$
a_{cmc}=\frac{v_{oc}}{v_{cmc}}=-g_{m3}\left(r_{o3}\parallel R_{o(\mathrm{down})}\right)=-(1\ \mathrm{mA/V})(396\ \mathrm{k\Omega})\approx-396 .
$$

### 第 4 步 — 解释

增益为负：提高 PMOS 栅压使 $|I_{D3}|$ 和 $|I_{D4}|$ 减小，而 $M_1$ 和 $M_2$ 仍吸取各自分得的尾电流，因此两个输出都下降。其数值与以 $M_5$ 栅极作为 CMC 输入时相同，因为这里 $g_{m3}=g_{m5h}=1$ mA/V，且两种情况下输出节点看到的电阻相同。
