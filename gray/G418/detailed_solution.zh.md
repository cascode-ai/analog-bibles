# 详细步骤 - G418

把共模反馈看作围绕运放共模通路的负反馈环路。在共模半边电路（half circuit）中计算三个低频增益：开环共模增益 $a_{cm}=v_{oc}/v_{ic}$、CMC 增益 $a_{cmc}=v_{oc}/v_{cmc}$，以及题给的检测增益 $a_{cms0}$。闭环时 $v_{oc}=a_{cm}v_{ic}+a_{cmc}a_{cms0}v_{oc}$，故

$$
a'_{cm}=\frac{a_{cm}}{1-a_{cmc}a_{cms0}}=\frac{a_{cm}}{1+T},\qquad T=-a_{cms0}a_{cmc}.
$$

### 第 1 步 — 小信号参数

由 $r_o=|V_A|/|I_D|$、$g_m=2|I_D|/|V_{ov}|$，共模半边电路使用一半尾电流（$100\ \mu$A）：

| 量 | 数值 |
|---|---|
| $r_{o2}=20.5\ \mathrm V/100\ \mu\mathrm A$（PMOS） | 205 kΩ |
| $r_{o4}=41\ \mathrm V/100\ \mu\mathrm A$（NMOS） | 410 kΩ |
| $r_{o5h}=2(20.5\ \mathrm V/200\ \mu\mathrm A)$ | 205 kΩ |
| $g_{m5h}=\tfrac12\cdot2(200\ \mu\mathrm A)/0.5\ \mathrm V$ | 0.4 mA/V |
| $r_{o6}=41\ \mathrm V/400\ \mu\mathrm A$，$r_{o7}=20.5\ \mathrm V/400\ \mu\mathrm A$ | 102.5 kΩ，51.25 kΩ |

第二级（$M_6$ 共源、$M_7$ 为负载）的增益幅值为

$$
|A_2|=g_{m6}(r_{o6}\parallel r_{o7})=(1.55\ \mathrm{mA/V})(34.2\ \mathrm{k\Omega})=53.0 .
$$

### 第 2 步 — 第一级负载与开环共模增益

在共模半边电路中，$M_2$ 受 $r_{o5h}$ 的源极负反馈（source degeneration）。其等效跨导及从其漏极看进去的电阻为

$$
G_m=\frac{g_{m2}}{1+g_{m2}r_{o5h}}=\frac{1\ \mathrm{mA/V}}{206}=4.85\ \mu\mathrm{A/V},\qquad
R_{o(\mathrm{up})}=r_{o2}(1+g_{m2}r_{o5h})+r_{o5h}=42.4\ \mathrm{M\Omega}.
$$

第一级输出节点的负载为 $R_1=r_{o4}\parallel R_{o(\mathrm{up})}=406\ \mathrm{k\Omega}$。$v_{ic}$ 升高使流入 $M_4$ 的 PMOS 电流减小，第一级输出降低；第二级再反相一次，因此

$$
a_{cm}=+G_mR_1|A_2|=(4.85\ \mu\mathrm{A/V})(406\ \mathrm{k\Omega})(53.0)=1.97\times53.0=+104 .
$$

### 第 3 步 — CMC 增益

$v_{cmc}$ 驱动 PMOS 尾电流管 $M_5$ 的栅极。在共模半边电路中，$M_{5h}$ 向 $M_2$ 的源极注入 $-g_{m5h}v_{cmc}$，后者作为共栅级把几乎全部电流传到第一级输出。$v_{cmc}$ 升高使尾电流减小，第一级输出降低，$v_{oc}$ 升高：

$$
a_{cmc}=+g_{m5h}R_1|A_2|=(0.4\ \mathrm{mA/V})(406\ \mathrm{k\Omega})(53.0)=+8600 .
$$

### 第 4 步 — 环路增益与闭环共模增益

检测增益为负（$v_{oc}$ 升高使 $I_{cms}$ 增大，$M_{25}$ 的栅极即 $v_{cmc}$ 降低），所以该环路为负反馈：

$$
T=-a_{cms0}a_{cmc}=-(-0.71)(8600)=6100,
\qquad
a'_{cm}=\frac{a_{cm}}{1+T}=\frac{104}{6108}=+0.017 .
$$

当 $g_{m2}r_{o5h}\gg1$ 时 $a_{cm}/a_{cmc}=G_m/g_{m5h}\approx1/(g_{m5h}r_{o5h})$，结果可写成简洁形式

$$
a'_{cm}\approx\frac{a_{cm}}{T}=\frac{1}{g_{m5h}r_{o5h}|a_{cms0}|}=\frac1{(82)(0.71)}=0.017 .
$$

共模反馈环路使共模增益减小 $1+T\approx6100$ 倍，从约 104 降到约 0.017。
