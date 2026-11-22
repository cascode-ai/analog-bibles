# 详细步骤 - G400

两个增益都对应单极点半边电路（half circuit）：一个跨导驱动输出电阻与负载电容的并联。对于直流增益 $a_0\gg1$ 的单极点系统，$|a(j\omega)|=1$ 出现在 $\omega\approx G_m/C$ 处。分别求差模半边电路（输入管 $M_1$）和 CMC 半边电路（输入管为半个 $M_5$）的 $G_m$、$R$ 和 $a_0$。

### 第 1 步 — 小信号参数

$M_1$–$M_4$ 流过 $I_{D5}/2=100\ \mu\mathrm A$，$M_5$ 流过 200 μA，所有器件 $|V_{ov}|=0.25$ V。由 $g_m=2I_D/|V_{ov}|$、$r_o=|V_A|/|I_D|$：

$$
\begin{aligned}
g_{m1}&=\frac{2(100\ \mu\mathrm A)}{0.25\ \mathrm V}=0.8\ \mathrm{mA/V},\qquad
g_{m5}=\frac{2(200\ \mu\mathrm A)}{0.25\ \mathrm V}=1.6\ \mathrm{mA/V},\\
r_{o1}&=\frac{20\ \mathrm V}{100\ \mu\mathrm A}=200\ \mathrm{k\Omega},\qquad
r_{o3}=\frac{25\ \mathrm V}{100\ \mu\mathrm A}=250\ \mathrm{k\Omega},\qquad
r_{o5}=\frac{20\ \mathrm V}{200\ \mu\mathrm A}=100\ \mathrm{k\Omega}.
\end{aligned}
$$

在共模半边电路中，尾电流管拆成两个并联的一半，各流过 100 μA，$g_{m5h}=g_{m5}/2=0.8\ \mathrm{mA/V}$，$r_{o5h}=2r_{o5}=200\ \mathrm{k\Omega}$。

### 第 2 步 — 差模增益及其单位增益频率

差模输入时尾节点为交流地，$M_3$、$M_4$ 的栅极接固定的 $V_{BIAS}$。差模半边电路是一个共源级，负载为 $R=r_{o1}\parallel r_{o3}$ 与 $C_{Ld}$：

$$
a_{dm}(s)=-\frac{g_{m1}R}{1+sRC_{Ld}},\qquad
R=200\ \mathrm{k\Omega}\parallel250\ \mathrm{k\Omega}=111\ \mathrm{k\Omega},\qquad
a_{dm0}=-(0.8\ \mathrm{mA/V})(111\ \mathrm{k\Omega})=-88.9.
$$

令 $|a_{dm}(j\omega)|=|a_{dm0}|/\sqrt{1+(\omega RC_{Ld})^2}=1$，得 $\omega=\sqrt{a_{dm0}^2-1}/(RC_{Ld})$；当 $|a_{dm0}|\gg1$ 时化为

$$
\omega_{u,dm}\approx\frac{g_{m1}}{C_{Ld}}=\frac{0.8\ \mathrm{mA/V}}{2\ \mathrm{pF}}=4.0\times10^{8}\ \mathrm{rad/s}\quad(64\ \mathrm{MHz}).
$$

### 第 3 步 — CMC 增益及其单位增益频率

CMC 输入驱动 $M_5$ 的栅极，输入对管的栅极保持在固定的 $V_{IC}$。在共模半边电路中，$M_{5h}$ 是一个跨导器，其漏极电流 $g_{m5h}v_{cmc}$ 流入 $M_1$ 的源极，后者作为共栅（共源共栅）器件工作；输出节点看到 $r_{o3}$ 与向下看的共源共栅电阻并联：

$$
R_{o(\mathrm{down})}=r_{o1}(1+g_{m1}r_{o5h})+r_{o5h}=200\ \mathrm{k\Omega}(1+160)+200\ \mathrm{k\Omega}=32.4\ \mathrm{M\Omega},
\qquad R_c=R_{o(\mathrm{down})}\parallel r_{o3}=248\ \mathrm{k\Omega}.
$$

$g_{m5h}v_{cmc}$ 几乎全部流过 $M_1$（$M_1$ 源极的电导为 $\approx g_{m1}$，远大于 $1/r_{o5h}$），因此

$$
a_{cmc}(s)\approx-\frac{g_{m5h}R_c}{1+sR_cC_{Lc}},\qquad
a_{cmc0}\approx-(0.8\ \mathrm{mA/V})(248\ \mathrm{k\Omega})=-198.
$$

同样 $|a_{cmc0}|\gg1$，故

$$
\omega_{u,cmc}\approx\frac{g_{m5h}}{C_{Lc}}=\frac{0.8\ \mathrm{mA/V}}{2\ \mathrm{pF}}=4.0\times10^{8}\ \mathrm{rad/s}\quad(64\ \mathrm{MHz}).
$$

### 第 4 步 — 二者相等的原因

$M_5$ 的每一半与 $M_1$ 流过相同的 100 μA、具有相同的过驱动电压，所以 $g_{m5h}=g_{m1}$；又因 $C_{Lc}=C_{Ld}$，两个单位增益频率相同，都约为 $4.0\times10^{8}$ rad/s。而极点频率本身（$1/(RC_{Ld})=4.5\times10^{6}$ rad/s 与 $1/(R_cC_{Lc})=2.0\times10^{6}$ rad/s）不同，因为直流增益不同。
