# 详细步骤 - A059

列出一端接在节点 $v_x$ 上的所有电容：驱动反相器（M1、M2）的漏结电容和栅-漏交叠电容，以及被驱动反相器（M3、M4）的栅电容。按版图和所标电压确定的直流工作点逐一计算，求和后得到 $|p|=1/(R\sum C)$。

### 第 1 步 — 器件尺寸与工作区

由版图（1 µm 网格）读出：

| 器件 | 类型 | $W/L$ | 接 $v_x$ 的漏扩散区 | $A$ | $P$ |
|---|---|---|---|---|---|
| M1、M3 | p 阱中的 n 沟道管 | 10 µm/2 µm | n⁺，10 µm × 6 µm | 60 µm² | 32 µm |
| M2、M4 | n 型衬底中的 p 沟道管 | 20 µm/2 µm | p⁺，20 µm × 6 µm | 120 µm² | 52 µm |

所有直流节点均为 2.5 V。对 M1（源极和 p 阱接地），$V_{GS}=V_{DS}=2.5$ V，$V_{GS}-V_T=1.8\ \mathrm V<V_{DS}$；对 M2（源极和衬底接 5 V），$|V_{GS}|=|V_{DS}|=2.5$ V，$|V_{GS}|-|V_T|=1.8\ \mathrm V<|V_{DS}|$。M3、M4 同理，因此所有晶体管都饱和；各器件的源-衬底电压均为零，没有体效应。

### 第 2 步 — M1 与 M2 的漏结电容

M1 的 n⁺ 漏区位于 0 V 的 p 阱中，M2 的 p⁺ 漏区位于 5 V 的 n 型衬底中，因此两个结都反偏 2.5 V，$1+|V_{BD}|/\mathrm{PB}=3.5$。按耗尽层模型 $C_{BD}=\mathrm{CJ}\,A/(1+|V_{BD}|/\mathrm{PB})^{\mathrm{MJ}}+\mathrm{CJSW}\,P/(1+|V_{BD}|/\mathrm{PB})^{\mathrm{MJSW}}$：

$$
\begin{aligned}
C_{BD1}&=\frac{(770\ \mu\mathrm{F/m^2})(60\ \mu\mathrm m^2)}{3.5^{0.5}}+\frac{(380\ \mathrm{pF/m})(32\ \mu\mathrm m)}{3.5^{0.38}}=\frac{46.2\ \mathrm{fF}}{1.871}+\frac{12.16\ \mathrm{fF}}{1.610}=24.7+7.6=32.2\ \mathrm{fF},\\
C_{BD2}&=\frac{(560\ \mu\mathrm{F/m^2})(120\ \mu\mathrm m^2)}{3.5^{0.5}}+\frac{(350\ \mathrm{pF/m})(52\ \mu\mathrm m)}{3.5^{0.35}}=\frac{67.2\ \mathrm{fF}}{1.871}+\frac{18.2\ \mathrm{fF}}{1.550}=35.9+11.7=47.7\ \mathrm{fF}.
\end{aligned}
$$

### 第 3 步 — 驱动级的交叠电容与负载的栅电容

M1、M2 饱和，其漏极只通过交叠电容与栅极相连：

$$
C_{GD1}+C_{GD2}=(220\ \mathrm{pF/m})(10\ \mu\mathrm m+20\ \mu\mathrm m)=6.6\ \mathrm{fF}.
$$

M3、M4 的栅极接在 $v_x$ 上。饱和时每个栅极有 $C_{GS}=\mathrm{CGSO}\cdot W+\tfrac23C_{ox}WL$、$C_{GD}=\mathrm{CGDO}\cdot W$ 和 $C_{GB}=\mathrm{CGBO}\cdot L$。其中 M3 的 $C_{ox}WL=49.4$ fF，M4 为 98.8 fF，$\mathrm{CGBO}\cdot L=(700\ \mathrm{pF/m})(2\ \mu\mathrm m)=1.4$ fF：

| 负载器件 | $C_{GS}$ (fF) | $C_{GD}$ (fF) | $C_{GB}$ (fF) | 合计 (fF) |
|---|---|---|---|---|
| M3 | $2.2+\tfrac23(49.4)=35.1$ | 2.2 | 1.4 | 38.7 |
| M4 | $4.4+\tfrac23(98.8)=70.3$ | 4.4 | 1.4 | 76.1 |

按题目给出的极点定义，这些电容的另一极板（地、5 V 和 $v_{out}$）均视为交流地；因此 $C_{GD3}$ 和 $C_{GD4}$ 只计一次，不作密勒倍增。

### 第 4 步 — 总电容与极点

$$
\sum C=32.2+47.7+6.6+38.7+76.1=201.3\ \mathrm{fF}.
$$

题目定义的极点大小为

$$
|p|=\frac{1}{R\sum C}=\frac{1}{(1\ \mathrm{M\Omega})(201.3\ \mathrm{fF})}=4.97\times10^{6}\ \mathrm{rad/s},
\qquad
f_p=\frac{|p|}{2\pi}=790\ \mathrm{kHz}\approx0.79\ \mathrm{MHz}.
$$

（若用 0.67 代替 $\tfrac23$，得 201.8 fF 和 789 kHz。）反偏的影响不可忽略：若结处于零偏，两个结电容分别为 58.4 fF 和 85.4 fF，总电容 266 fF，极点约 600 kHz。
