# 详细步骤 - G401

两个增益都对应单极点半边电路（half circuit）：一个跨导驱动输出电阻与负载电容的并联。对于直流增益 $|a_0|\gg1$ 的单极点系统，$|a(j\omega)|=1$ 出现在 $\omega\approx G_m/C$ 处。差模半边电路由 $M_1$ 驱动、负载为 $C_{Ld}$；CMC 半边电路由半个 $M_5$ 驱动、负载为 $C_{Lc}$。

### 第 1 步 — 小信号参数

$M_1$–$M_4$ 流过 $I_{D5}/2=100\ \mu\mathrm A$，$M_5$ 流过 200 μA，所有器件 $|V_{ov}|=0.25$ V。由 $g_m=2I_D/|V_{ov}|$、$r_o=|V_A|/|I_D|$：

| 量 | 数值 |
|---|---|
| $g_{m1}=2(100\ \mu\mathrm A)/0.25\ \mathrm V$ | 0.8 mA/V |
| $g_{m5h}=g_{m5}/2=\tfrac12\cdot2(200\ \mu\mathrm A)/0.25\ \mathrm V$ | 0.8 mA/V |
| $r_{o1}=20\ \mathrm V/100\ \mu\mathrm A$ | 200 kΩ |
| $r_{o3}=25\ \mathrm V/100\ \mu\mathrm A$ | 250 kΩ |
| $r_{o5h}=2r_{o5}=2(20\ \mathrm V/200\ \mu\mathrm A)$ | 200 kΩ |

$g_{m5h}$ 与 $r_{o5h}$ 描述共模半边电路中出现的、尾电流管两个并联一半中的一个。

### 第 2 步 — 差模单位增益频率

差模输入时尾节点为交流地，负载管栅极接固定偏置，因此差模半边电路是一个共源级：

$$
a_{dm}(s)=-\frac{g_{m1}R}{1+sRC_{Ld}},\qquad R=r_{o1}\parallel r_{o3}=111\ \mathrm{k\Omega},\qquad a_{dm0}=-88.9.
$$

由 $|a_{dm}(j\omega)|=|a_{dm0}|/\sqrt{1+(\omega RC_{Ld})^2}=1$ 得 $\omega=\sqrt{a_{dm0}^2-1}/(RC_{Ld})\approx g_{m1}/C_{Ld}$，因为 $|a_{dm0}|\gg1$：

$$
\omega_{u,dm}\approx\frac{g_{m1}}{C_{Ld}}=\frac{0.8\ \mathrm{mA/V}}{4\ \mathrm{pF}}=2.0\times10^{8}\ \mathrm{rad/s}\quad(32\ \mathrm{MHz}).
$$

### 第 3 步 — CMC 单位增益频率

在共模半边电路中，$M_{5h}$ 将 $v_{cmc}$ 转换为电流 $g_{m5h}v_{cmc}$，该电流流过 $M_1$；由于其栅极处于固定的输入共模电平，它作为共栅（共源共栅）器件工作。输出节点看到

$$
R_c=r_{o3}\parallel\left[r_{o1}(1+g_{m1}r_{o5h})+r_{o5h}\right]=250\ \mathrm{k\Omega}\parallel32.4\ \mathrm{M\Omega}=248\ \mathrm{k\Omega},
$$

因此

$$
a_{cmc}(s)\approx-\frac{g_{m5h}R_c}{1+sR_cC_{Lc}},\qquad a_{cmc0}\approx-198,
\qquad
\omega_{u,cmc}\approx\frac{g_{m5h}}{C_{Lc}}=\frac{0.8\ \mathrm{mA/V}}{2\ \mathrm{pF}}=4.0\times10^{8}\ \mathrm{rad/s}\quad(64\ \mathrm{MHz}).
$$

### 第 4 步 — 比较

尾电流管的每一半与 $M_1$ 电流相同、过驱动电压相同，因此 $g_{m5h}=g_{m1}$。唯一的区别在于负载：$C_{Ld}=2C_{Lc}$，所以差模单位增益频率 $2.0\times10^{8}$ rad/s 是 CMC 单位增益频率 $4.0\times10^{8}$ rad/s 的一半。
