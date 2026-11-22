# 详细步骤 - alsim-07-1-03

交越级由两个共源反相器 M1–M3 和 M2–M4 组成，二者由同一输入 $v_{in}'$ 驱动。每个反相器都由 n 沟道驱动管和由 M7 镜像而来的 p 沟道电流源负载构成。由于驱动管和负载电流不同，两个反相器在略微不同的输入电压处翻转。两个翻转点之间的间隔决定了两个输出管都不导通的区间。先手算翻转点，再在 SPICE 中扫描 $v_{in}'$，画出 M5 和 M6 的栅极电压。

### 第 1 步 — 负载电流

M7（240/14）为二极管连接，电流 100 µA：

$$
100\ \mu\mathrm A=\frac{K'_P}{2}\frac{240}{14}(V_{SG7}-0.9)^2(1+0.04V_{SG7})\;\Rightarrow\;V_{SG7}=1.70\ \mathrm V .
$$

M3（144/14）和 M4（240/14）共用这一栅压。不计 λ 时它们分别流过 $(144/240)(100)=60\ \mu$A 和 100 µA。当输出处于电源中点附近（$V_{SD}\approx6$ V）时，沟道长度调制使其分别增大到约 70 µA 和 116 µA。所有源极都接在各自衬底所在的电源轨上，因此没有体效应。

### 第 2 步 — 翻转点

当饱和区的驱动管电流等于负载电流时，各反相器的输出摆过电源中点：

$$
V_A=V_{SS}+V_{TN}+\sqrt{\frac{2I_3}{K'_N(W/L)_1}}=V_{SS}+0.7+\sqrt{\frac{2(60\ \mu)}{(47\ \mu)(61.3)}}=V_{SS}+0.904\ \mathrm V,
$$

$$
V_B=V_{SS}+0.7+\sqrt{\frac{2(100\ \mu)}{(47\ \mu)(48)}}=V_{SS}+0.998\ \mathrm V,\qquad V_C=V_B-V_A\approx0.094\ \mathrm V .
$$

M1（460/7.5）比 M2（360/7.5）更宽，且负载电流更小，所以 M1–M3 反相器先翻转，$V_C$ 为正。每个反相器在翻转点处的增益为 $g_{m}/(g_{ds,n}+g_{ds,p})$，约为 100 量级，因此每次翻转所需的输入变化不到 0.1 V。

### 第 3 步 — 仿真网表

用直流源代替输入级接在 $v_{in}'$ 上，在翻转区内扫描。保留输出级和 $R_L$，使两个栅极节点带有实际负载。

```spice
* alsim-07-1-03 crossover and output stage
VDD vdd 0 DC 6
VSS vss 0 DC -6
IREF g7 0 DC 100U
M7 g7 g7 vdd vdd PCH W=240U L=14U
M3 g5 g7 vdd vdd PCH W=144U L=14U
M4 g6 g7 vdd vdd PCH W=240U L=14U
M1 g5 vin vss vss NCH W=460U L=7.5U
M2 g6 vin vss vss NCH W=360U L=7.5U
C1 vin g5 8P
C2 vin g6 5P
M5 out g5 vss vss NCH W=1400U L=14U
M6 out g6 vdd vdd PCH W=2400U L=7.5U
RL out 0 100
VIN vin 0 DC -5
.MODEL NCH NMOS LEVEL=1 KP=47U VTO=0.7 GAMMA=0.85 PHI=0.62 LAMBDA=0.05
.MODEL PCH PMOS LEVEL=1 KP=17U VTO=-0.9 GAMMA=0.25 PHI=0.62 LAMBDA=0.04
.DC VIN -5.2 -4.9 0.1M
.PRINT DC V(G5) V(G6) V(OUT)
.END
```

### 第 4 步 — 仿真传输曲线

![M5 和 M6 的栅极电压随交越级输入变化的仿真曲线，标出翻转点 VA、VB 及输出电压](/q/alsim-07-1-03/solution-vtc.zh.svg)

| | M1–M3（M5 栅极） | M2–M4（M6 栅极） |
|---|---|---|
| 输出过 0 V 处的 $v_{in}'-V_{SS}=$ | 0.893 V（$V_A$） | 0.981 V（$V_B$） |
| 该处斜率 | −147 V/V | −100 V/V |
| 从 +5 V 摆到 −5 V 的区间 | 0.862 至 0.931 V | 0.936 至 1.037 V |

两条曲线都是反相的轨到轨曲线，M2–M4 的曲线位于 M1–M3 曲线右侧，与理想化的 [图 2] 一致。交越电压为

$$
V_C=V_B-V_A=0.981-0.893=0.089\ \mathrm V,
$$

与不计 λ 的手算估计 0.094 V 接近。两个翻转点都比手算值低约 10 mV，因为 λ 使负载电流增大。

由于反相器的增益有限，两个输出管都截止的区间远比 $V_C$ 窄。M5 在其栅压低于 $V_{SS}+0.7$ V 时截止，对应 $v_{in}'-V_{SS}=0.934$ V。M6 在其栅压低于 $V_{DD}-0.9$ V 时导通，对应 0.935 V。因此真正的死区只有约 1 mV，在点线所示的输出曲线上表现为 0 V 附近一小段平台。
