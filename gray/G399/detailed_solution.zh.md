# 详细步骤 - G399

用半边电路（half circuit）分析两个放大器。唯一的区别在尾部：[图 1] 中源极直接接 $-V_{SS}$，[图 2] 中源极共同接到 $M_5$ 的漏极，其栅极接固定偏置 $V_{cmc}$。两个电路中 $M_3$、$M_4$ 的栅极都接固定的 $V_{BIAS}$，因此负载只是电阻为 $r_{o3}$ 的电流源。

### 第 1 步 — 小信号参数

由 $g_m=2I_D/|V_{ov}|$、$r_o=|V_A|/|I_D|$：

$$
\begin{aligned}
g_{m1}&=\frac{2(100\ \mu\mathrm A)}{0.2\ \mathrm V}=1\ \mathrm{mA/V},\qquad
r_{o1}=\frac{10\ \mathrm V}{100\ \mu\mathrm A}=100\ \mathrm{k\Omega},\qquad
r_{o3}=\frac{20\ \mathrm V}{100\ \mu\mathrm A}=200\ \mathrm{k\Omega},\\
r_{o5}&=\frac{10\ \mathrm V}{200\ \mu\mathrm A}=50\ \mathrm{k\Omega},\qquad r_{o5h}=2r_{o5}=100\ \mathrm{k\Omega}.
\end{aligned}
$$

$r_{o5h}$ 是半个尾电流管的电阻，出现在每个共模半边电路中。

### 第 2 步 — 无尾电流源的放大器（[图 1]）

每一侧都是一个独立的源极接地共源级（common-source stage），负载为 $r_{o1}\parallel r_{o3}=66.7\ \mathrm{k\Omega}$，因此差模与共模半边电路相同：

$$
a_{dm}=a_{cm}=-g_{m1}(r_{o1}\parallel r_{o3})=-(1\ \mathrm{mA/V})(66.7\ \mathrm{k\Omega})=-66.7.
$$

### 第 3 步 — 带尾电流源的放大器（[图 2]）

差模：尾节点位于对称线上，是交流地，差模半边电路与第 2 步相同：

$$
a_{dm}=-g_{m1}(r_{o1}\parallel r_{o3})=-66.7.
$$

共模：尾节点随之变化，$M_1$ 受 $r_{o5h}$ 的源极负反馈（source degeneration）。在源极节点（$v_s$）与输出节点（$v_{oc}$）列 KCL，同一漏极电流 $i=g_{m1}(v_{ic}-v_s)+(v_{oc}-v_s)/r_{o1}$ 流入 $r_{o5h}$、并从 $r_{o3}$ 流出：

$$
i=\frac{v_s}{r_{o5h}}=-\frac{v_{oc}}{r_{o3}}
\;\Rightarrow\;
a_{cm}=\frac{v_{oc}}{v_{ic}}=-\frac{g_{m1}r_{o3}}{1+g_{m1}r_{o5h}+(r_{o3}+r_{o5h})/r_{o1}}
=-\frac{200}{1+100+3}=-1.92.
$$

等价地，带源极负反馈的 $M_1$ 有 $G_m\approx1/r_{o5h}$，输出电阻 $R_{o(\mathrm{down})}=r_{o1}(1+g_{m1}r_{o5h})+r_{o5h}=10.2\ \mathrm{M\Omega}$，得 $a_{cm}\approx-(R_{o(\mathrm{down})}\parallel r_{o3})/r_{o5h}=-196\ \mathrm{k\Omega}/100\ \mathrm{k\Omega}=-1.96$。

### 第 4 步 — 比较

| 电路 | $a_{dm}$ | $a_{cm}$ | CMRR $=\lvert a_{dm}/a_{cm}\rvert$ |
|---|---|---|---|
| 无尾电流源（[图 1]） | −66.7 | −66.7 | 1 |
| 尾电流源 $M_5$（[图 2]） | −66.7 | −1.92 | 35 |

尾电流源不改变 $a_{dm}$，因为对差模信号而言尾节点是交流地；它使 $|a_{cm}|$ 减小约 35 倍。

### 第 5 步 — 对共模控制的启示

没有尾电流源时，共模输入变化、电源噪声和失配到达输出的强度与差模信号相同。直流输出电平只由 NMOS 与 PMOS 电流的平衡决定，因此对 $V_{ic}$ 和器件失配极其敏感。

尾电流源大大改善了对共模输入的抑制，但仍不能确定输出共模电平。采用电流源负载时，输出是高阻节点：共模输出电阻为 $r_{o3}\parallel R_{o(\mathrm{down})}\approx196\ \mathrm{k\Omega}$。$V_{OC}$ 由 $I_{D5}$ 与 $|I_{D3}|+|I_{D4}|$ 之间的平衡决定，这些电流之间的微小失配乘以约 196 kΩ，就会使其移动数伏。

因此两个放大器都需要共模反馈来设定 $V_{OC}$，例如由共模检测电路驱动 $V_{cmc}$（或 $V_{BIAS}$）。尾电流源改善了共模抑制，但不能替代 CMFB。
