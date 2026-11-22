# 详细步骤 - grsim-04-01

五个晶体管共用同一个基射极电压，因此集电极电流按器件数目成比例：两个二极管连接的输入管（$Q_1$、$Q_2$）和三个输出管（$Q_3$–$Q_5$）构成 3/2 的镜像比。厄利效应（Early effect）使 $I_{OUT}$ 随 $V_{OUT}$ 增大，输出电阻为三个输出管的并联。手算忽略基极电流，仿真则包含基极电流。

### 第 1 步 — 输入电流

电阻把输入电流送入二极管连接的输入管对，每个器件约 0.72 mA 时其基射极电压为 $V_{BE}=V_T\ln(I_C/I_S)$：

$$
V_{BE}=26\ \mathrm{mV}\,\ln\frac{0.717\ \mathrm{mA}}{5\times10^{-15}\ \mathrm A}=0.668\ \mathrm V,\qquad
I_{IN}=\frac{15\ \mathrm V-0.668\ \mathrm V}{10\ \mathrm{k\Omega}}=1.433\ \mathrm{mA}.
$$

### 第 2 步 — 镜像比与输出电流

$Q_1$、$Q_2$ 各流过 $I_{IN}/2$。输出管具有相同的 $V_{BE}$，因此在 $V_{CE}=V_{BE}$（无厄利失配）时每个也流过 $I_{IN}/2$，合计

$$
I_{OUT}\big|_{V_{OUT}=V_{BE}}=\frac32I_{IN}=2.150\ \mathrm{mA}.
$$

计入厄利效应，$I_C\propto1+V_{CE}/V_A$，$V_{CE}=V_{OUT}$ 的输出管比 $V_{CE}=V_{BE}$ 的输入管电流更大。一阶近似为

$$
I_{OUT}=2.150\ \mathrm{mA}\left[1+\frac{V_{OUT}-V_{BE}}{V_A}\right].
$$

例如 $V_{OUT}=5$ V 时：$2.150\ \mathrm{mA}\,[1+(5-0.668)/130]=2.221$ mA。

### 第 3 步 — 输出电阻

$V_{OUT}$ 的变化只通过三个输出管各自的 $r_o=V_A/I_C$ 改变其集电极电流；三者并联，

$$
R_o=r_{o3}\parallel r_{o4}\parallel r_{o5}=\frac{V_A}{I_{OUT}}=\frac{130\ \mathrm V}{2.15\ \mathrm{mA}}=60.5\ \mathrm{k\Omega}.
$$

### 第 4 步 — SPICE 验证

仿真包含手算中忽略的基极电流。五个器件的总基极电流 $5I_C/\beta_F=2.5(2I_C)/\beta_F$ 取自 $I_{IN}$，因此所有电流都乘以因子 $1/(1+2.5/\beta_F)=0.988$。

```spice
* grsim-04-01 bipolar current mirror, ratio 3/2
VCC vcc 0 15
R   vcc b 10k
Q1  b b 0 npn
Q2  b b 0 npn
Q3  out b 0 npn
Q4  out b 0 npn
Q5  out b 0 npn
VOUT out 0 5
.model npn npn is=5e-15 bf=200 vaf=130
.control
dc VOUT 0 30 0.01
let iout = -i(VOUT)
wrdata iout.txt iout
.endc
.end
```

| $V_{OUT}$ | 手算 $I_{OUT}$ | 手算 × 0.988 | ngspice $I_{OUT}$ |
|---|---|---|---|
| 1 V | 2.155 mA | 2.129 mA | 2.129 mA |
| 5 V | 2.221 mA | 2.194 mA | 2.195 mA |
| 30 V | 2.635 mA | 2.602 mA | 2.603 mA |

仿真中 5 V 到 15 V 之间的斜率为 16.3 μA/V，即 $R_o=61.2$ kΩ，与手算的约 60 kΩ 一致（由于 $r_o$ 取决于实际电流，该值随 $V_{OUT}$ 略有增大）。乘以基极电流因子后，手算与仿真的差别在 0.1% 以内。剩余的微小差别来自 SPICE 的厄利模型：输入管和输出管都按 $I_C\propto(1+V_{CE}/V_A)$，给出比值 $(1+V_{OUT}/V_A)/(1+V_{BE}/V_A)$，而不是线性化的 $1+(V_{OUT}-V_{BE})/V_A$。
