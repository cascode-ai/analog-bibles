# 详细步骤 - A103

该电路是由 $V_{DD}$ 经 $R$ 供电的 $V_{EB}$ 倍增器。先选定总电流及其在分压器与晶体管之间的分配，由指数律算出 $V_{EB}$，再在计入流入分压器抽头的基极电流的情况下确定 $R_1$ 和 $R_2$。灵敏度则由 $R$ 与晶体管–分压器组合的输出电阻构成的小信号分压关系求得。

### 第 1 步 — 选定电流

$V_{REF}=2.5$ V、$V_{DD}=5$ V 时，$R$ 上的压降为 2.5 V。取总电流 100 µA：

$$
R=\frac{V_{DD}-V_{REF}}{I_{tot}}=\frac{2.5\ \mathrm V}{100\ \mu\mathrm A}=25\ \mathrm{k\Omega}.
$$

令 20 µA 流过 $R_1$，其余流入发射极，$I_E=80$ µA。由 $\beta_F=100$，

$$
I_C=\frac{\beta_F}{\beta_F+1}I_E=79.21\ \mu\mathrm A,\qquad
I_B=\frac{I_E}{\beta_F+1}=0.792\ \mu\mathrm A .
$$

集电极接地，基极比它高约 1.85 V，所以集电结反偏，pnp 管工作在正向放大区（forward-active region）。

### 第 2 步 — 发射结电压与 $R_1$

正向放大区中 $I_C=I_s\exp(V_{EB}/V_t)$，故

$$
V_{EB}=V_t\ln\frac{I_C}{I_s}=(0.026\ \mathrm V)\ln\frac{79.21\ \mu\mathrm A}{1\ \mathrm{fA}}=0.6525\ \mathrm V .
$$

$R_1$ 接在发射极（电位 $V_{REF}$）与基极之间，其两端电压为 $V_{EB}$：

$$
R_1=\frac{V_{EB}}{20\ \mu\mathrm A}=\frac{0.6525\ \mathrm V}{20\ \mu\mathrm A}=32.6\ \mathrm{k\Omega}.
$$

### 第 3 步 — 计入基极电流确定 $R_2$

对基极列 KCL：$R_2$ 中的电流等于流过 $R_1$ 的分压电流加上从 pnp 基极流出、注入抽头的基极电流。$R_2$ 两端电压为 $V_{REF}-V_{EB}$：

$$
R_2=\frac{V_{REF}-V_{EB}}{20\ \mu\mathrm A+I_B}=\frac{2.5-0.6525\ \mathrm V}{20.79\ \mu\mathrm A}=88.9\ \mathrm{k\Omega}.
$$

等价地，$V_{REF}=V_{EB}(1+R_2/R_1)+I_BR_2$；仅理想倍增项给出 $(0.6525\ \mathrm V)(3.724)=2.430$ V，其余由 $I_BR_2=70$ mV 补足。设计结果为 $R=25$ kΩ、$R_1=32.6$ kΩ、$R_2=88.9$ kΩ。

### 第 4 步 — 倍增器的输出电阻

把 $V_{DD}$ 看作小信号源 $v_{dd}$。节点 $V_{REF}$ 一侧经 $R$ 接 $v_{dd}$，另一侧对地为晶体管连同分压器的电阻 $r_{out}$。该偏置下的混合 π 模型（hybrid-π model）参数为

$$
g_m=\frac{I_C}{V_t}=\frac{79.21\ \mu\mathrm A}{26\ \mathrm{mV}}=3.046\ \mathrm{mS},\qquad
r_\pi=\frac{\beta_F}{g_m}=32.8\ \mathrm{k\Omega}.
$$

在发射极加 $v_{out}$。发射结信号 $v_{eb}$ 加在 $R_1\|r_\pi$ 上，$R_2$ 上为 $v_{out}-v_{eb}$，基极 KCL 给出 $v_{eb}(1/R_1+1/r_\pi)=(v_{out}-v_{eb})/R_2$。从该节点取出的电流为 $R_1$ 的电流加上发射极电流 $g_m(1+1/\beta)v_{eb}$，由此得

$$
r_{out}=\frac{R_1+R_2+R_1R_2/r_\pi}{1+g_mR_1(1+1/\beta)}
=\frac{32.6+88.9+88.3\ \mathrm{k\Omega}}{1+(3.046\ \mathrm{mS})(32.6\ \mathrm{k\Omega})(1.01)}
=2.07\ \mathrm{k\Omega}.
$$

### 第 5 步 — 对 $V_{DD}$ 的灵敏度

$R$ 与 $r_{out}$ 构成从 $v_{dd}$ 到 $V_{REF}$ 的分压器：

$$
\frac{\partial V_{REF}}{\partial V_{DD}}=\frac{r_{out}}{R+r_{out}}=\frac{2.07}{25+2.07}=0.0764,
\qquad
S_{V_{DD}}^{V_{REF}}=\frac{V_{DD}}{V_{REF}}\frac{\partial V_{REF}}{\partial V_{DD}}=\frac{5}{2.5}(0.0764)\approx0.15 .
$$

用 ngspice 对该设计（$I_s=1$ fA、$\beta_F=100$）作 $V_{DD}$ 直流扫描，得 $S=0.152$，与上述数值一致。

若忽略基极电流对分压器的负载作用（$\beta\to\infty$），则 $r_{out}\approx(R_1+R_2)/(1+g_mR_1)=1.21$ kΩ，$S\approx0.09$；有限的 $\beta$ 使 $r_{out}$ 增大，$S$ 约增加一倍。对其他设计，$S\approx(V_{DD}/V_{REF})\,r_{out}/R$，其中 $r_{out}\approx(V_{REF}/V_{EB})/g_m$，典型值为 0.08–0.2：让更大比例的电流流过晶体管可提高 $g_m$、降低 $S$。
