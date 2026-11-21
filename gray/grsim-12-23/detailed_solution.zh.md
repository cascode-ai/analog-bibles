# 详细步骤 - grsim-12-23

由电流核算确定两个偏置器件的尺寸：在共模反馈平衡点，PMOS 栅极偏置线和尾节点的电流都必须平衡。随后由共源共栅输出电阻和共模反馈环路增益估算差模、共模增益，并由大信号电流和饱和条件求压摆率（slew rate）与摆幅。对每种失配情形，分析它如何把差模与共模耦合起来。在失调修正后的工作点上对完整电路做 SPICE 仿真，得到各情形的四个增益。

### 第 1 步 — (a) $M_{12}$ 与 $M_{51}$ 的宽度

$M_{11}$ 为二极管连接，流过 $I_{DC}=100\ \mu$A。其栅极偏置线上几何尺寸同为 $96/1.4$ 的所有 PMOS（$M_3$、$M_4$、$M_{26}$、$M_{27}$）因此都流过 100 µA。$M_{12}$ 为 $M_{13}$ 供电，必须流过 20 µA；$L$ 相同时电流与 $W$ 成正比：

$$
W_{12}=96\ \mu\mathrm m\times\frac{20\ \mu\mathrm A}{100\ \mu\mathrm A}=19.2\ \mu\mathrm m\quad(L=1.4\ \mu\mathrm m).
$$

尾节点汇集两个输入支路和 $M_{13}$ 的电流：

$$
I_{tail}=|I_{D3}|+|I_{D4}|+I_{D13}=100+100+20=220\ \mu\mathrm A.
$$

平衡时（$V_{oc}=V_{CM}$）每个共模反馈差分对把 100 µA 平分，所以 $M_{25}$ 流过 $50+50=100\ \mu$A，1:1 镜像管 $M_{52}$ 流过 100 µA。$M_{51}$ 必须提供其余的 120 µA，即 $M_{14}$ 的 100 µA 的 1.2 倍：

$$
W_{51}=16\ \mu\mathrm m\times1.2=19.2\ \mu\mathrm m\quad(L=0.8\ \mu\mathrm m).
$$

### 第 2 步 — (b) 增益的手算估计

由平方律及 $\lambda=(dX_d/dV_{DS})/L$：$\lambda_n=0.025$，$\lambda_p(1.4\ \mu\mathrm m)=0.0286$，$\lambda_p(0.8\ \mu\mathrm m)=0.05\ \mathrm{V^{-1}}$。

$$
g_{m1}=\sqrt{2(194\ \mu\mathrm{A/V^2})(80)(100\ \mu\mathrm A)}=1.76\ \mathrm{mA/V},\quad
r_{o1}=\frac{1}{0.025(100\ \mu\mathrm A)}=400\ \mathrm{k\Omega},\quad
r_{o3}=\frac{1}{0.0286(100\ \mu\mathrm A)}=350\ \mathrm{k\Omega}.
$$

- 差模：共源共栅管使从输出向下看的电阻升高到 $g_{m1C}r_{o1C}r_{o1}\approx280$ MΩ，所以输出电阻 $\approx r_{o3}=350$ kΩ，$a_{dm}\approx-g_{m1}(350\ \mathrm{k\Omega})\approx-616$。
- 共模开环：尾电阻为 $r_{o51}\parallel r_{o52}=333\parallel400=182$ kΩ，每一半为 364 kΩ，故 $a_{cm}\approx-350/364\approx-0.96$。
- 共模反馈环路：每个检测管流过 50 µA，$M_{25}$ 流过 100 µA，$g_{m21}=\sqrt{2(64.7\ \mu)(7.5)(50\ \mu)}=0.22$ mA/V，$g_{m25}=g_{m52}=\sqrt{2(194\ \mu)(20)(100\ \mu)}=0.88$ mA/V。$V_{oc}$ 升高 $v$ 使 $M_{21}$ 和 $M_{24}$ 的电流各减小 $g_{m21}v/2$，这部分电流被引入 $M_{25}$，故 $v_{g25}=(g_{m21}/g_{m25})v=0.25v$。$M_{52}$ 的每一半给本支路增加 $g_{m52}v_{g25}/2$，流入 $r_{o3}$：$a_{cmc}\approx-(g_{m52}/2)(350\ \mathrm{k\Omega})\approx-154$。环路增益 $T\approx0.25\times154=38.5$，为负反馈。

$$
\frac{v_{od}}{v_{id}}\approx-616,\qquad \frac{v_{oc}}{v_{ic}}\approx\frac{-0.96}{1+38.5}\approx-0.024,\qquad \frac{v_{od}}{v_{ic}}=\frac{v_{oc}}{v_{id}}=0\ \ \text{(balanced)}.
$$

### 第 3 步 — SPICE 设置

level-1 模型采用题给的 $k'$ 和 $V_t$，以及三个 $\lambda$ 值：NMOS 为 0.025，$L=1.4\ \mu$m 的 PMOS 为 0.0286，$L=0.8\ \mu$m 的 PMOS 为 0.05 $\mathrm{V^{-1}}$。$I_{DC}$ 为接在二极管 $M_{11}$ 与 $M_{14}$ 之间的 100 µA 电流源。两个输入都位于 $V_{ic}=V_{CM}=-0.65$ V，再由同一个差分源叠加 $\pm v_{id}/2$。每种情形都先做直流扫描求出输入失调，即使 $V_{od}=0$ 的 $V_{id}$；然后在该点求工作点并做两次交流分析（差模和共模）。

```spice
* grsim-12-23 balanced case (edit W of M1, M2, M3, M4 for (e), (f))
VDD vdd 0 1.65
VSS vss 0 -1.65
IDC p p14 100u
M11 p p vdd vdd p14 W=96u L=1.4u
M12 g13 p vdd vdd p14 W=19.2u L=1.4u
M3 vo1 p vdd vdd p14 W=96u L=1.4u
M4 vo2 p vdd vdd p14 W=96u L=1.4u
M26 s1 p vdd vdd p14 W=96u L=1.4u
M27 s2 p vdd vdd p14 W=96u L=1.4u
M1C vo1 g13 a1 vss n08 W=64u L=0.8u
M2C vo2 g13 a2 vss n08 W=64u L=0.8u
M1 a1 vi1 t vss n08 W=64u L=0.8u
M2 a2 vi2 t vss n08 W=64u L=0.8u
M13 g13 g13 t vss n08 W=1.4u L=0.8u
M14 p14 p14 vss vss n08 W=16u L=0.8u
M51 t p14 vss vss n08 W=19.2u L=0.8u
M52 t g25 vss vss n08 W=16u L=0.8u
M21 vss vo2 s1 vdd p08 W=6u L=0.8u
M22 g25 vcm s1 vdd p08 W=6u L=0.8u
M23 g25 vcm s2 vdd p08 W=6u L=0.8u
M24 vss vo1 s2 vdd p08 W=6u L=0.8u
M25 g25 g25 vss vss n08 W=16u L=0.8u
VCMS vcm 0 -0.65
VID vid 0 dc 0 ac 1
VIC vic 0 dc -0.65 ac 0
EP vi1 vic vid 0 0.5
EN vi2 vic vid 0 -0.5
.model n08 nmos level=1 vto=0.6 kp=194u lambda=0.025
.model p14 pmos level=1 vto=-0.8 kp=64.7u lambda=0.028571
.model p08 pmos level=1 vto=-0.8 kp=64.7u lambda=0.05
.ac lin 1 10 10
.end
```

平衡电路中：$I_{D1}=103\ \mu$A，$I_{D13}=20.6\ \mu$A，$I_{D51}=118\ \mu$A，$I_{D52}=109\ \mu$A，$V_{tail}=-1.365$ V，$V_{G1C}=-0.421$ V，$V_{o1}=V_{o2}=-0.596$ V。由于环路增益有限且 $\lambda$ 改变了镜像比，$V_{oc}$ 比 $V_{CM}$ 高 54 mV。

### 第 4 步 — (b)、(e)、(f) 仿真增益

| 情形 | $V_{OS}$ | $v_{od}/v_{id}$ | $v_{oc}/v_{ic}$ | $v_{od}/v_{ic}$ | $v_{oc}/v_{id}$ |
|---|---|---|---|---|---|
| (b) 平衡 | 0 | −645 | −0.0270 | $\approx10^{-13}$（0） | $\approx10^{-12}$（0） |
| (e) $W_1=63$，$W_2=65\ \mu$m | 1.80 mV | −645 | −0.0270 | $+5.1\times10^{-4}$ | $+1.07\times10^{-4}$ |
| (f) $W_3=95$，$W_4=97\ \mu$m | −1.20 mV | −645 | −0.0270 | $-3.5\times10^{-4}$ | $-0.081$ |

(b) 中仿真得到的 −645 和 −0.027 与手算值 −616 和 −0.024 分别相差 5% 和 11%。交叉增益在数值精度内为零。

### 第 5 步 — (e) 输入对失配

失调是使 $W$ 不同的两管电流相等所需的栅压差。由平方律，

$$
V_{OS}\approx\frac{V_{ov1}}{2}\frac{\Delta W}{W}=\frac{0.114\ \mathrm V}{2}\cdot\frac{2}{64}=1.8\ \mathrm{mV},
$$

与仿真的 1.80 mV 一致。在修正后的工作点上主增益不变，并出现两个很小的交叉增益，其中 $\Delta g_m/g_m=\Delta W/2W=-1/64$：

- 共模到差模：共模反馈只允许每侧流过极小的共模电流 $i_{cm}=-v_{oc}/r_{o3}$。两管按各自的 $g_m$ 分担这一电流，故 $v_{od}=(\Delta g_m/g_m)v_{oc}=(-1/64)(-0.027)v_{ic}\approx+4\times10^{-4}v_{ic}$。
- 差模到共模：差模输入产生不相等的电流 $\pm g_{m1,2}v_{id}/2$。其和使尾节点移动，由此引起的尾电流变化给出约 $(\Delta g_m/g_m)\,r_{o3}/(8R_{tail})\,v_{id}=(1/64)(350/1456)v_{id}=3.8\times10^{-3}v_{id}$ 的开环共模输出。共模反馈将其除以 $1+T\approx40$，得 $\approx1\times10^{-4}$。

二者的符号和数量级都与仿真一致；由于共模反馈的抑制，交叉增益始终很小。

### 第 6 步 — (f) 负载失配

负载电流与 $W$ 成正比，因此输入对必须提供 $\Delta I=(2/96)(100\ \mu\mathrm A)=2.1\ \mu$A 的差额：

$$
V_{OS}\approx\frac{\Delta I}{g_{m1}}=\frac{2.1\ \mu\mathrm A}{1.76\ \mathrm{mA/V}}=1.2\ \mathrm{mV}
$$

（指幅值），与仿真一致。在修正后的工作点上两个负载电流略有不同，输出电阻也随之不同：$r_{o3}=353.7$ kΩ，$r_{o4}=346.4$ kΩ。于是差模信号电流 $\pm g_{m1}v_{id}/2$ 产生不相等的输出摆动，其平均值就是共模输出：

$$
v_{oc,\text{open}}=\frac{g_{m1}v_{id}}{2}\cdot\frac{r_{o4}-r_{o3}}{2}=\frac{1.76\ \mathrm{mA/V}}{2}\cdot\frac{-7.3\ \mathrm{k\Omega}}{2}v_{id}=-3.2\,v_{id},
\qquad
\frac{v_{oc}}{v_{id}}\approx\frac{-3.2}{1+T}\approx-0.08.
$$

这就是仿真得到的 −0.081，比 (e) 大得多，因为这里的失配作用在完整的差模增益上。同样的电阻差把微小的共模电流转换为 $v_{od}=v_{oc}(r_{o3}-r_{o4})/r_o$，量级为 $10^{-4}v_{ic}$，与仿真一致。$v_{od}/v_{id}$ 和 $v_{oc}/v_{ic}$ 不变。

### 第 7 步 — (c) 压摆率

差模大阶跃时一个输入管截止。尾电流 220 µA（120 µA + 100 µA）减去 $M_{13}$ 的 20 µA，全部流过另一侧的共源共栅支路：200 µA 对抗其 100 µA 的负载。该输出以 $200-100=100\ \mu$A 放电。另一侧输入管截止，其负载以 100 µA 给输出充电。每个输出接 4 pF：

$$
\left|\frac{dV_{o1}}{dt}\right|=\left|\frac{dV_{o2}}{dt}\right|=\frac{100\ \mu\mathrm A}{4\ \mathrm{pF}}=25\ \mathrm{V/\mu s},\qquad
\left|\frac{dV_{od}}{dt}\right|=50\ \mathrm{V/\mu s}.
$$

### 第 8 步 — (d) 差分输出摆幅

$V_{ic}=V_{CM}=-0.65$ V，共模反馈使 $V_{OC}=-0.65$ V：

- 下限（共源共栅管）：$V_{GS1}=0.6+0.114=0.714$ V，尾节点位于 $-1.364$ V。$M_{13}$ 流过 20 µA 时 $V_{GS13}=0.6+\sqrt{2(20\ \mu)/(194\ \mu\cdot1.75)}=0.943$ V，故 $V_{G1C}=-0.421$ V。当 $V_o<V_{G1C}-V_{tn}=-1.02$ V 时 $M_{1C}$ 退出饱和。其下方的器件不构成限制：$M_1$ 的 $V_{DS1}=V_{GS13}-V_{GS1C}=0.23$ V $>V_{ov1}$，$M_{51}$ 的 $V_{DS}=0.29$ V $>V_{ov51}=0.23$ V。
- 上限：$M_3$ 在 $V_{DD}-|V_{ov3}|=1.65-0.21=1.44$ V 处退出饱和。共模反馈差分对（$|V_{ov21}|=0.454$ V）在 $|V_o-V_{CM}|>\sqrt2(0.454)=0.64$ V，即高于 $-0.01$ V 时完全切换。

起决定作用的是下限，比 $V_{OC}$ 低 $-0.65-(-1.02)=0.37$ V，因此每个输出在约 $-1.02$ V 到 $-0.28$ V 之间摆动：

$$
|V_{od}|_{\max}\approx2(0.37\ \mathrm V)=0.74\ \mathrm V\ \text{peak}\quad(1.48\ \mathrm V\ \text{peak-to-peak}).
$$

对仿真电路做直流扫描证实了这一点。在 $V_{od}\approx0.75$ V 以内，$V_{oc}$ 与静态值相差不超过约 20 mV，此时较低的输出到达 −0.95 V。超过约 0.8 V 后，较低的输出停在共源共栅极限附近的 −1.03 V，共模反馈无法再保持 $V_{oc}$，在 $V_{od}=1$ V 时它升到 −0.53 V。
