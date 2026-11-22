# 详细步骤 - G397

采用半边电路（half circuit）分析。两个电路都对称：纯差模输入时，对称线上的各节点均为交流地；纯共模输入时，两半同步变化，没有电流穿过对称线。小信号参数为 $g_m=2I_D/|V_{ov}|$、$r_o=|V_A|/|I_D|$。

### 第 1 步 — 小信号参数

$M_1$–$M_4$ 各流过 $I_{D5}/2=100\ \mu\mathrm A$，$M_5$ 流过 200 μA：

$$
\begin{aligned}
g_{m1}&=g_{m3}=\frac{2(100\ \mu\mathrm A)}{0.2\ \mathrm V}=1\ \mathrm{mA/V},\\
r_{o1}&=\frac{10\ \mathrm V}{100\ \mu\mathrm A}=100\ \mathrm{k\Omega},\qquad
r_{o3}=\frac{20\ \mathrm V}{100\ \mu\mathrm A}=200\ \mathrm{k\Omega},\\
r_{o5}&=\frac{10\ \mathrm V}{200\ \mu\mathrm A}=50\ \mathrm{k\Omega},\qquad
r_{o5h}=2r_{o5}=100\ \mathrm{k\Omega}.
\end{aligned}
$$

在共模半边电路中，尾电流管被拆成两个并联的一半，每一半的输出电阻为 $2r_{o5}$。

### 第 2 步 — 带局部共模反馈的差模增益

差模输入时 $v_{o2}=-v_{o1}$。两个相等的 20 kΩ 电阻接在反对称电压之间，其中点保持为 0，是交流地；$M_3$、$M_4$ 的栅极和尾节点同样是交流地。在差模半边电路中：
- $M_1$ 是源极接地的共源级；
- $M_3$ 的栅极和源极都是交流地，只相当于 $r_{o3}$；
- 输出端通过一个 20 kΩ 电阻接到交流地。

$$
a_{dm}=\frac{v_{od}}{v_{id}}=-g_{m1}\left(r_{o1}\parallel r_{o3}\parallel 20\ \mathrm{k\Omega}\right)
=-(1\ \mathrm{mA/V})(15.4\ \mathrm{k\Omega})=-15.4.
$$

### 第 3 步 — 带局部共模反馈的共模增益

共模输入时 $v_{o1}=v_{o2}=v_{oc}$，电阻中没有电流，$M_3$、$M_4$ 的栅极跟随 $v_{oc}$。于是 $M_3$ 成为二极管连接，呈现 $1/g_{m3}\parallel r_{o3}=995\ \Omega$。$M_1$ 的源极串有 $r_{o5h}$，其等效跨导降为

$$
G_{m}=\frac{g_{m1}}{1+g_{m1}r_{o5h}+\dots}\approx\frac1{r_{o5h}}=10\ \mu\mathrm{A/V}.
$$

由于负载电阻远小于带源极负反馈的 $M_1$ 的输出电阻，增益等于 $-G_m$ 乘以负载：

$$
a_{cm}=\frac{v_{oc}}{v_{ic}}\approx-\frac{1/g_{m3}\parallel r_{o3}}{r_{o5h}}=-\frac{995\ \Omega}{100\ \mathrm{k\Omega}}\approx-0.0099.
$$

精确求解半边电路的两个节点方程（源极节点：$g_{m1}(v_{ic}-v_s)+(v_{oc}-v_s)/r_{o1}=v_s/r_{o5h}$；输出节点：同一电流等于 $-(g_{m3}+1/r_{o3})v_{oc}$），得 $a_{cm}=-0.0098$。

### 第 4 步 — [图 2] 放大器的增益

没有电阻时，$M_3$、$M_4$ 的栅极接固定偏置，因此在两种半边电路中 $M_3$ 都只相当于 $r_{o3}$。

差模：尾节点为交流地，

$$
a_{dm}=-g_{m1}(r_{o1}\parallel r_{o3})=-(1\ \mathrm{mA/V})(66.7\ \mathrm{k\Omega})=-66.7.
$$

共模：此时负载 $r_{o3}$ 与向下看的输出电阻 $R_{o(\mathrm{down})}=r_{o1}(1+g_{m1}r_{o5h})+r_{o5h}=10.2\ \mathrm{M\Omega}$ 相比不可忽略，需要用半边电路的精确结果：

$$
a_{cm}=-\frac{g_{m1}r_{o1}r_{o3}}{r_{o3}+r_{o1}+(1+g_{m1}r_{o1})r_{o5h}}
=-\frac{(100)(200\ \mathrm{k\Omega})}{200\ \mathrm{k\Omega}+100\ \mathrm{k\Omega}+(101)(100\ \mathrm{k\Omega})}=-1.92.
$$

用近似 $G_{m}\approx1/r_{o5h}$ 则得 $-(R_{o(\mathrm{down})}\parallel r_{o3})/r_{o5h}=-196\ \mathrm{k\Omega}/100\ \mathrm{k\Omega}=-1.96$。

### 第 5 步 — 比较

| 电路 | $a_{dm}$ | $a_{cm}$ |
|---|---|---|
| 局部共模反馈（[图 1]） | −15.4 | −0.0098 |
| 固定偏置负载（[图 2]） | −66.7 | −1.92 |

局部共模反馈使负载管对共模信号成为二极管连接，$|a_{cm}|$ 减小约 200 倍，大致相当于检测增益为 1 的独立共模反馈（CMFB）环路的效果。代价是 20 kΩ 检测电阻在差模半边电路中给每个输出加载，使 $|a_{dm}|$ 降低约 4.3 倍。
