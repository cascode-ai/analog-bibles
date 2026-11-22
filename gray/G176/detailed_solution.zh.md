# 详细步骤 - G176

先在输入级所有电阻加倍的条件下重新计算偏置电流，再求输入级的跨导 $G_{m1}$、输出电阻 $R_{o1}$ 及带载增益。后级不变，故总增益为 $a_{v1}\times120\times18$。在题给工作条件下只有 pnp 对管 $Q_3$–$Q_4$ 工作：每管驱动一个折叠节点（3 或 4），其信号电流在 $R_9$（或 $R_{10}$）与共基管 $Q_9$（或 $Q_{10}$）的发射极之间分配，共基管的集电极即输出节点 9（或 10）。

### 第 1 步 — 电阻加倍后的偏置电流

基极接 $\mathrm{Bias_1}$、发射极电阻为 $R$ 的 pnp 管导通 $(33\ \mathrm{k\Omega}/R)\times6\ \mu$A。取 $R_{11}=66$ kΩ、$R_{13}=R_{14}=66$ kΩ：

$$
|I_{C11}|=\frac{33}{66}(6\ \mu\mathrm A)=3\ \mu\mathrm A,\qquad
|I_{C3}|=|I_{C4}|=1.5\ \mu\mathrm A,\qquad
|I_{C13}|=|I_{C14}|=3\ \mu\mathrm A .
$$

共模反馈使 $I_{C9}=I_{C10}=|I_{C13}|=3\ \mu$A。所有电流减半而电阻加倍，因此直流压降都不变。

### 第 2 步 — 输入级跨导

$Q_3$ 的 $g_{m3}=|I_{C3}|/V_T=1.5\ \mu\mathrm A/26\ \mathrm{mV}=57.7\ \mu$A/V。其集电极电流流入节点 3，该节点对地有 $R_9=44$ kΩ，并与 $Q_9$（基极交流接地）的发射极并联。发射极输入电阻为 $r_{e9}=\alpha_9/g_{m9}=(\beta_0/(\beta_0+1))V_T/I_{C9}$，发射极电流中有 $\alpha_9$ 的比例到达集电极。因此 $Q_3$ 信号电流到达节点 9 的比例为

$$
\rho=\alpha_9\frac{R_9}{R_9+r_{e9}}
=\frac{40}{41}\cdot\frac{44\ \mathrm{k\Omega}}{44\ \mathrm{k\Omega}+\frac{40}{41}(8.67\ \mathrm{k\Omega})}=0.818 ,
$$

与原电阻值时相同，因为 $R_9$ 与 $r_{e9}$ 都加倍了。（$Q_3$ 的输出电阻约 13 MΩ，与 $R_9$ 并联可忽略。）

差模输入 $v_{id}$ 在 $Q_3$、$Q_4$ 中产生 $\pm g_{m3}v_{id}/2$，于是流入节点 9、10 的电流为 $\pm\rho g_{m3}v_{id}/2$，且

$$
G_{m1}=\rho\,g_{m3}=(0.818)(57.7\ \mu\mathrm A/\mathrm V)=47.2\ \mu\mathrm A/\mathrm V,
$$

为原来 $94.4\ \mu$A/V 的一半。

### 第 3 步 — 各输出节点的输出电阻

基极交流接地、发射极电阻为 $R$ 的晶体管，其输出电阻为 $r_o[1+g_m(R\parallel r_\pi)]$，即

$$
R_{out}\approx r_o\,\frac{1+g_mR\,(\beta_0+1)/\beta_0}{1+g_mR/\beta_0}.
$$

| 器件 | $r_o$ | $g_mR$ | $\beta_0$ | $R_{out}$ |
|---|---|---|---|---|
| $Q_{13}$（向上），$R_{13}=66$ kΩ | $20\ \mathrm V/3\ \mu\mathrm A=6.67$ MΩ | 7.62 | 10 | 35.5 MΩ |
| $Q_9$（向下），$R_9=44$ kΩ | $30\ \mathrm V/3\ \mu\mathrm A=10$ MΩ | 5.08 | 40 | 55.1 MΩ |

对 $Q_{13}$：$r_o\cdot(1+7.62\times1.1)/(1+0.762)=(6.67\ \mathrm{M\Omega})(5.32)=35.5$ MΩ。单端输出电阻为 $R_{o1}=35.5\ \mathrm{M\Omega}\parallel55.1\ \mathrm{M\Omega}=21.6$ MΩ，是原值的两倍。

### 第 4 步 — 输入级带载增益

第二级在节点 9、10 之间呈现 1.3 MΩ；对差模信号其中点为交流地，故每个节点看到 0.65 MΩ。于是 $v_{od1}=G_{m1}(R_{o1}\parallel0.65\ \mathrm{M\Omega})v_{id}$：

$$
a_{v1}=(47.2\ \mu\mathrm A/\mathrm V)(21.6\ \mathrm{M\Omega}\parallel0.65\ \mathrm{M\Omega})=(47.2\ \mu\mathrm A/\mathrm V)(0.631\ \mathrm{M\Omega})=29.8 .
$$

按原电阻值进行相同计算得 $a_{v1}=(94.4\ \mu\mathrm A/\mathrm V)(10.8\ \mathrm{M\Omega}\parallel0.65\ \mathrm{M\Omega})=57.9$。

### 第 5 步 — 总增益

$$
a_v=a_{v1}\times120\times18=29.8\times2160\approx6.4\times10^4,
$$

约为原值 $1.25\times10^5$ 的一半。$R_{o1}$ 加倍几乎没有帮助，因为节点电阻由第二级的 0.65 MΩ 负载主导；增益因此跟随 $G_{m1}$，而后者随偏置电流减半。
