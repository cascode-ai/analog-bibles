# 详细步骤 - G385

$M_5$ 栅极上的信号改变尾电流，尾电流在两半之间平均分配，使两个输出同向变化，因此它是纯共模激励。用共模半边电路分析：半个 $M_5$ 作为共源级，其漏极电流经作为共栅（cascode）器件的 $M_1$ 送到负载为 $r_{o3}$ 的输出节点。

### 第 1 步 — 半边电路参数

把 $M_5$ 拆分为两个并联的一半，每一半的宽度和电流（50 µA）都减半，过驱动电压不变：

$$
g_{m5h}=\frac{2(50\ \mu\mathrm A)}{0.1\ \mathrm V}=1\ \mathrm{mA/V},\qquad
r_{o5h}=2r_{o5}=2\,\frac{10\ \mathrm V}{100\ \mu\mathrm A}=200\ \mathrm{k\Omega}.
$$

其他器件为 $g_{m1}=1$ mA/V、$r_{o1}=200$ kΩ、$r_{o3}=400$ kΩ。由于 $v_{ic}=0$，$M_1$ 的栅极为交流地。

### 第 2 步 — 增益表达式

$M_{5h}$ 把 $v_{cmc}$ 转换为短路漏极电流 $g_{m5h}v_{cmc}$，该电流经 $M_1$ 向上流入输出节点。输出节点看到的是 $r_{o3}$ 与从 $M_1$ 漏极向下看的电阻并联，后者由 $r_{o5h}$ 构成源极负反馈：

$$
R_{o(\mathrm{down})}=r_{o1}(1+g_{m1}r_{o5h})+r_{o5h}=(200\ \mathrm{k\Omega})(201)+200\ \mathrm{k\Omega}=40.4\ \mathrm{M\Omega}.
$$

因此低频共模控制增益为

$$
a_{cmc}=\frac{v_{oc}}{v_{cmc}}=-g_{m5h}\left(R_{o(\mathrm{down})}\parallel r_{o3}\right).
$$

### 第 3 步 — 数值

$$
R_{o(\mathrm{down})}\parallel r_{o3}=40.4\ \mathrm{M\Omega}\parallel400\ \mathrm{k\Omega}=396\ \mathrm{k\Omega},\qquad
a_{cmc}=-(1\ \mathrm{mA/V})(396\ \mathrm{k\Omega})\approx-396 .
$$

精确求解半边电路的节点（在半个尾节点和输出节点列 KCL）得到 $-394$；完全忽略共源共栅的 $R_{o(\mathrm{down})}$ 则得到 $-g_{m5h}r_{o3}=-400$。

### 第 4 步 — 符号与解释

增益为负：提高 $V_{cmc}$ 使尾电流增大，$M_1$ 和 $M_2$ 都从各自的 PMOS 负载吸取更多电流，使两个输出都下降。其幅值约为 400，与共源共栅级相当，因为 $M_1$ 把输出与 $r_{o5}$ 隔离开来；正是这一大增益使驱动 $V_{cmc}$ 的共模反馈环路能把输出共模电平稳定住。
