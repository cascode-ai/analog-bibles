# 详细步骤 - G177

将运放分成三级，每级增益写成（该级跨导）×（其输出节点的电阻），该电阻包含下一级的输入电阻。小信号参数由给定电流求得：$g_m=|I_C|/V_T$，$r_\pi=\beta_0/g_m$，$r_o=V_A/|I_C|$。有两点需要特别注意：输入级驱动第二级的输入电阻；[图 4] 的输出级偏置环路把节点 26 的信号电流转移到节点 25。

基极交流接地、发射极串联电阻 $R$ 的晶体管，其输出电阻为 $r_o[1+g_m(R\parallel r_\pi)]$，下文写作

$$
R_{out}=r_o\,\frac{1+g_mR\,(\beta_0+1)/\beta_0}{1+g_mR/\beta_0}.
$$

### 第 1 步 — 输入级：跨导

$Q_1$、$Q_2$ 截止时，pnp 对管 $Q_3$–$Q_4$（$|I_C|=3\ \mu$A，$g_{m3}=115.4\ \mu$A/V）驱动节点 3 和 4。在节点 3，信号电流在 $R_9=22$ kΩ 与共基管 $Q_9$ 的发射极之间分配，后者的输入电阻为 $r_{e9}=\frac{\beta_0}{\beta_0+1}\frac{V_T}{I_{C9}}=\frac{80}{81}(4.33\ \mathrm{k\Omega})=4.28$ kΩ；$Q_9$ 发射极电流中有 $\alpha_9=80/81$ 的比例到达节点 9：

$$
\rho=\alpha_9\frac{R_9}{R_9+r_{e9}}=0.988\times\frac{22\ \mathrm{k\Omega}}{26.3\ \mathrm{k\Omega}}=0.827,\qquad
G_{m1}=\rho\,g_{m3}=95.4\ \mu\mathrm A/\mathrm V .
$$

$G_{m1}$ 联系差模输出电流与差模输入；输出平衡时 $v_9=-v_{10}=v_{od1}/2$，$v_{od1}=G_{m1}R_{node1}v_{id}$，其中 $R_{node1}$ 是每个输出节点对地的电阻。

### 第 2 步 — 输入级：输出电阻、负载与增益

| 节点 9 处的器件 | $r_o$ | $g_mR$ | $\beta_0$ | $R_{out}$ |
|---|---|---|---|---|
| $Q_{13}$（向上），$R_{13}=33$ kΩ，6 µA | 3.33 MΩ | 7.62 | 20 | 21.7 MΩ |
| $Q_9$（向下），$R_9=22$ kΩ，6 µA | 5.00 MΩ | 5.08 | 80 | 28.9 MΩ |

故 $R_{o1}=21.7\ \mathrm{M\Omega}\parallel28.9\ \mathrm{M\Omega}=12.4$ MΩ。

节点 9 驱动 pnp 跟随器 $Q_{21}$（$|I_C|=4\ \mu$A，$r_{\pi21}=130$ kΩ，$r_{o21}=5$ MΩ）的基极，其发射极同时驱动 $Q_{25}$ 和 $Q_{26}$ 的基极。差模工作时 $Q_{25}$–$Q_{28}$ 的公共发射极节点为交流地，因此跟随器负载为 $R_{L21}=\tfrac12r_{\pi25}\parallel r_{o21}=104\ \mathrm{k\Omega}\parallel5\ \mathrm{M\Omega}=102$ kΩ，其中 $r_{\pi25}=80/(384.6\ \mu\mathrm A/\mathrm V)=208$ kΩ。于是每个节点看到

$$
R_{i2}/2=r_{\pi21}+(\beta_0+1)R_{L21}=130\ \mathrm{k\Omega}+21(102\ \mathrm{k\Omega})=2.27\ \mathrm{M\Omega},
$$

且

$$
a_{v1}=G_{m1}\bigl(R_{o1}\parallel R_{i2}/2\bigr)=(95.4\ \mu\mathrm A/\mathrm V)(12.4\ \mathrm{M\Omega}\parallel2.27\ \mathrm{M\Omega})=(95.4\ \mu\mathrm A/\mathrm V)(1.92\ \mathrm{M\Omega})=183 .
$$

### 第 3 步 — 第二级：跨导与偏置环路的作用

跟随器增益为 $a_{v21}=(\beta_0+1)R_{L21}/[r_{\pi21}+(\beta_0+1)R_{L21}]=0.943$。$Q_{25}$ 与 $Q_{26}$ 共享基极驱动 $a_{v21}v_9=a_{v21}v_{od1}/2$，其发射极处于交流地，因此每个集电极电流为

$$
i_{c25}=i_{c26}=g_{m25}\,a_{v21}\frac{v_{od1}}2,\qquad
G_{m2}=\frac{a_{v21}g_{m25}}2=\frac{(0.943)(384.6\ \mu\mathrm A/\mathrm V)}2=181\ \mu\mathrm A/\mathrm V .
$$

$Q_{27}$、$Q_{28}$ 的集电极电流流回 $V_{CC}$，不携带输出信号。

节点 26 驱动 $Q_{68}$ 和 Nbase，即 $Q_{75}$ 的基极。[图 4] 的偏置环路使 $I_{C75}$ 保持恒定，因此信号电流 $i_{c26}$ 不能改变 $Q_{75}$：它被集电极同样接在节点 26 的 $Q_{40}$ 吸收。由于 $Q_{39}$–$Q_{40}$ 的尾电流固定，$Q_{39}$ 的集电极电流在节点 25 处以相同方向变化相同的量。于是节点 25 得到 $i_{c25}+i_{c39}=2i_{c25}$：第二级的等效跨导为 $2G_{m2}$。$Q_{39}$ 对节点 25 几乎没有负载作用：其基极电压和发射极电流都固定，集电极电阻约为 $(\beta_0+1)r_{o39}\approx81(3.3\ \mathrm{M\Omega})\approx0.27$ GΩ。

### 第 4 步 — 计入基极电流的输出级直流电流

| 物理量 | 计算 | 数值 |
|---|---|---|
| $I_{C62}$ | $6\ \mu\mathrm A-(6+33)\ \mu\mathrm A/80$ | 5.51 µA |
| $I_{C63}$ | 求解 $V_T\ln(I_{C63}/I_{C62})+I_{C63}R_{63}=I_{C62}R_{62}$ | 28.6 µA |
| $\lvert I_{C65}\rvert$ | $\tfrac{20}{21}\bigl(0.75\ \mathrm V/7.5\ \mathrm{k\Omega}+1.2\ \mathrm{mA}/20\bigr)$ | 152 µA |
| $I_{C64}$ | $\tfrac{80}{81}\bigl(28.6\ \mu\mathrm A-152\ \mu\mathrm A/20\bigr)$ | 20.7 µA |
| $I_{C68}$ | $\tfrac{80}{81}\bigl(6\ \mu\mathrm A+210\ \mu\mathrm A/80\bigr)$ | 8.5 µA |

$I_{C63}$ 的方程是对带发射极负反馈的电流镜列 KVL，$V_{BE62}+I_{C62}R_{62}=V_{BE63}+I_{C63}R_{63}$，两管发射极面积相等（原来的 6 µA / 33 µA 满足该式）。

### 第 5 步 — 第二级：节点 25 的电阻与增益

向上：$Q_{17}$（21 µA，$R_{17}=9.3$ kΩ，$g_mR=7.51$，$r_o=0.952$ MΩ）给出 $R_{up2}=6.15$ MΩ。向下：$Q_{25}$ 的发射极看到其余三个发射极并联，$R_{E25}=\tfrac13\cdot\tfrac{80}{81}\cdot\tfrac{1}{g_{m25}}=0.856$ kΩ，故 $R_{down2}=r_{o25}[1+g_{m25}(R_{E25}\parallel r_{\pi25})]=(3\ \mathrm{M\Omega})(1.33)=3.98$ MΩ。因此 $R_{o2}=6.15\ \mathrm{M\Omega}\parallel3.98\ \mathrm{M\Omega}=2.42$ MΩ。

负载是跟随器链 $Q_{64}$（npn）→ $Q_{65}$（pnp）→ Pbase 的输入。在 Pbase 处，

$$
R_{E65}=R_{65}\parallel r_{\pi66}\parallel r_{\pi74}=7.5\ \mathrm{k\Omega}\parallel\frac{20(26\ \mathrm{mV})}{37.5\ \mu\mathrm A}\parallel\frac{20(26\ \mathrm{mV})}{1.2\ \mathrm{mA}}=7.5\ \mathrm{k\Omega}\parallel13.9\ \mathrm{k\Omega}\parallel433\ \Omega=398\ \Omega .
$$

$Q_{64}$ 的发射极看到电流沉 $Q_{63}$ 的 $r_{o63}[1+g_{m63}(R_{63}\parallel r_{\pi63})]=2.41$ MΩ，与 $Q_{65}$ 的输入电阻 $r_{\pi65}+21R_{E65}=3.41\ \mathrm{k\Omega}+8.36\ \mathrm{k\Omega}=11.8$ kΩ 并联，故 $R_{E64}=11.7$ kΩ。于是

$$
R_{i3}=r_{\pi64}+(\beta_0+1)R_{E64}=100\ \mathrm{k\Omega}+81(11.7\ \mathrm{k\Omega})=1.05\ \mathrm{M\Omega},
$$
$$
a_{v2}=2G_{m2}\bigl(R_{o2}\parallel R_{i3}\bigr)=2(181\ \mu\mathrm A/\mathrm V)(2.42\ \mathrm{M\Omega}\parallel1.05\ \mathrm{M\Omega})=(362\ \mu\mathrm A/\mathrm V)(0.732\ \mathrm{M\Omega})=265 .
$$

### 第 6 步 — 输出级增益

由于环路使 $I_{C75}$ 固定，只有 $Q_{74}$ 把信号转换为输出电流。两级跟随器把节点 25 的电压传到 Pbase，增益分别为

$$
a_{v64}=\frac{81R_{E64}}{r_{\pi64}+81R_{E64}}=0.904,\qquad
a_{v65}=\frac{21R_{E65}}{r_{\pi65}+21R_{E65}}=0.710,
$$

故 $G_{m3}=a_{v64}a_{v65}g_{m74}=(0.904)(0.710)(46.2\ \mathrm{mA/V})=29.6$ mA/V。输出电阻为 $r_{o74}\parallel r_{o75}=16.7\ \mathrm{k\Omega}\parallel143\ \mathrm{k\Omega}=14.9$ kΩ，再与 2 kΩ 负载并联：

$$
a_{v3}=G_{m3}(14.9\ \mathrm{k\Omega}\parallel2\ \mathrm{k\Omega})=(29.6\ \mathrm{mA/V})(1.76\ \mathrm{k\Omega})=52 .
$$

### 第 7 步 — 总增益

$$
a_v=a_{v1}a_{v2}a_{v3}=183\times265\times52\approx2.5\times10^6 .
$$

该运放的增益约为 $2.5\times10^6$（约 128 dB）。若取较低的 $\beta_{npn}=40$、$\beta_{pnp}=10$，同样分析得约 $1.3\times10^5$；较高的 β 提高了各级节点电阻和跟随器增益，使总增益提高约二十倍。
