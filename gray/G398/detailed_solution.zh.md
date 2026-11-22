# 详细步骤 - G398

没有尾电流源时，两半电路没有公共节点：每一侧从输入到输出都是一个独立的共源级（common-source stage）。因此差模和共模半边电路（half circuit）是同一个电路，两个增益相等。

### 第 1 步 — 小信号参数

所有器件都流过 100 μA，$|V_{ov}|=0.2$ V。饱和区中 $g_m=2I_D/|V_{ov}|$，$r_o=|V_A|/|I_D|$：

$$
g_{m1}=\frac{2(100\ \mu\mathrm A)}{0.2\ \mathrm V}=1\ \mathrm{mA/V},\qquad
r_{o1}=\frac{10\ \mathrm V}{100\ \mu\mathrm A}=100\ \mathrm{k\Omega},\qquad
r_{o3}=\frac{20\ \mathrm V}{100\ \mu\mathrm A}=200\ \mathrm{k\Omega}.
$$

### 第 2 步 — 半边电路

$M_1$、$M_2$ 的源极接电源 $-V_{SS}$，即交流地；$M_3$、$M_4$ 的栅极接固定的 $V_{BIAS}$。于是左侧就是源极接地的共源放大器 $M_1$，其负载为 $r_{o3}$ 与其自身的 $r_{o1}$ 并联：

$$
\frac{v_{o1}}{v_{i1}}=-g_{m1}(r_{o1}\parallel r_{o3})=-(1\ \mathrm{mA/V})(66.7\ \mathrm{k\Omega})=-66.7,
$$

右侧的 $v_{o2}/v_{i2}$ 与之相同。该增益与另一输入如何变化无关。

### 第 3 步 — 差模与共模增益

令 $v_{i1}=v_{ic}+v_{id}/2$、$v_{i2}=v_{ic}-v_{id}/2$、$v_{od}=v_{o1}-v_{o2}$、$v_{oc}=(v_{o1}+v_{o2})/2$，每个输出都是其自身输入的 $-66.7$ 倍，故

$$
\begin{aligned}
a_{dm}&=\frac{v_{od}}{v_{id}}=-g_{m1}(r_{o1}\parallel r_{o3})=-66.7,\\
a_{cm}&=\frac{v_{oc}}{v_{ic}}=-g_{m1}(r_{o1}\parallel r_{o3})=-66.7.
\end{aligned}
$$

共模抑制比（CMRR）为 $|a_{dm}/a_{cm}|=1$：共模输入与差模输入被同样放大，因为没有尾电流源以其高电阻对共模半边电路形成源极负反馈。
