# 详细步骤 - G416

尾电流固定且 $v_{ic}=0$ 时，输入对管和 PMOS 电流镜的电流保持不变。此时 CMC 信号直接驱动输出电流沉 $M_7$ 和 $M_9$ 的栅极，因此每个输出都是一个共源放大器：$M_7$（或 $M_9$）以镜像输出管 $M_6$（或 $M_8$）为负载。

### 第 1 步 — 小信号参数

$M_7$ 和 $M_9$ 在 $V_{ov}=0.2$ V 下吸收镜像过来的 100 μA：

$$
g_{m7}=\frac{2(100\ \mu\mathrm A)}{0.2\ \mathrm V}=1\ \mathrm{mA/V},\qquad
r_{o7}=\frac{10\ \mathrm V}{100\ \mu\mathrm A}=100\ \mathrm{k\Omega},\qquad
r_{o6}=\frac{20\ \mathrm V}{100\ \mu\mathrm A}=200\ \mathrm{k\Omega}.
$$

### 第 2 步 — PMOS 输出管为何相当于固定负载

$M_5$ 的栅极接固定偏置且 $v_{ic}=0$，因此 $M_1$–$M_4$ 的电流不变，$M_6$ 和 $M_8$ 的栅极电压也不变。$V_{o1}$ 的变化只通过 $r_{o6}$ 影响 $M_6$；所以 $M_6$ 只是一个从输出端到交流地的电阻 $r_{o6}$。

### 第 3 步 — 共源增益

在 $V_{o1}$ 节点，$M_7$ 吸收 $g_{m7}v_{cmc}$，节点电阻为 $r_{o6}\parallel r_{o7}$。NMOS 栅压升高使其电流增大，把输出拉低：

$$
a_{cmc}=\frac{v_{oc}}{v_{cmc}}=-g_{m7}(r_{o6}\parallel r_{o7})=-(1\ \mathrm{mA/V})(200\ \mathrm{k\Omega}\parallel100\ \mathrm{k\Omega})=-66.7.
$$

$V_{o2}$ 一侧（$M_9$ 与 $M_8$）完全相同，因此两个输出同向变化，正符合共模信号的特征。
