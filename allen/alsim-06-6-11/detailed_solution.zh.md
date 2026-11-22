# 详细步骤 - alsim-06-6-11

线性小信号理论预测正、负阶跃的过冲相同。因此不对称必然来自 0.2 V 的阶跃已大到足以移动 A 类输出级的工作点。估算阶跃所需的电流，与输出级的偏置电流比较，再跟踪每个边沿上 $g_{m6}$ 以及随之变化的输出极点和相位裕度。用给定模型仿真可以证实这一机理。

### 第 1 步 — 输出级为 A 类

M6（p 沟道，94/1）是共源驱动管，只要栅极驱动允许，它几乎可以拉出任意电流。M7（n 沟道，14/1）是电流沉，固定在其偏置值，约 95 µA（仿真中为 98 µA）。输出极点和右半平面零点都与 M6 的跨导成正比：

$$
p_2\approx-\frac{g_{m6}}{C_L},\qquad z=\frac{g_{m6}}{C_c},\qquad g_{m6}=\sqrt{2K'_P\frac{W_6}{L_6}I_{D6}}\propto\sqrt{I_{D6}} .
$$

接 20 pF 时，偏置点处的相位裕度只有约 53°（仿真：在 $f_u=4.7$ MHz 处开环相位为 −127°）。非常小（±5 mV）的阶跃在两个方向上的过冲都约为 15%。

### 第 2 步 — 0.2 V 阶跃所需的电流

在线性区，跟随器输出的起始变化速率约为 $\omega_u\,\Delta V$：

$$
\frac{dv_{out}}{dt}\approx2\pi(4.7\ \mathrm{MHz})(0.2\ \mathrm V)\approx6\ \mathrm{V/\mu s},
\qquad
I\approx(C_L+C_c)\frac{dv_{out}}{dt}=(23\ \mathrm{pF})(6\ \mathrm{V/\mu s})\approx140\ \mu\mathrm A .
$$

这超过了 M7 95–98 µA 的偏置电流，所以虽然该阶跃对输入级来说很小，对输出级却并不小。

### 第 3 步 — 上升沿：M6 导通更强

为给负载充电，M6 必须在 M7 的偏置电流之外再提供这一电流。仿真中其漏极电流从 98 µA 升到 202 µA。$g_{m6}$ 增大到 $\sqrt{202/98}=1.44$ 倍，因此在过渡期间 $|p_2|$ 和右半平面零点都移向更高频率。输出建立时环路的相位裕度更大，正向过冲小于小信号值：10.4% 而不是 15%。

### 第 4 步 — 下降沿：M6 接近截止

为给负载放电，电流必须流入 M7，而 M7 的电流不能超过其固定偏置，其中还有一部分要给 $C_c$ 放电。因此 M6 必须几乎截止：其电流降到 15 µA。$g_{m6}$ 降到静态值的 $\sqrt{15/98}=0.39$ 倍，于是 $p_2$ 下移，输出级短暂地发生压摆（峰值斜率 3.7 V/µs，上升沿为 4.5 V/µs）。环路恢复控制时相位裕度小得多，输出冲过终值：过冲 22.9%，恢复也更慢。

### 第 5 步 — 仿真

用给定的 level-1 模型，取 AS = AD = W × 6 µm、PS = PD = 2W + 12 µm，对 $C_L=20$ pF、边沿 10 ns 的 ±0.1 V 阶跃仿真 [图 1] 的跟随器：

```spice
* alsim-06-6-11 follower, CL = 20 pF
VDD vdd 0 DC 2.5
VSS vss 0 DC -2.5
IB vdd b DC 30U
M8 b b vss vss NCH W=4.5U L=1U AD=27P AS=27P PD=21U PS=21U
M5 t b vss vss NCH W=4.5U L=1U AD=27P AS=27P PD=21U PS=21U
M1 d1 out t vss NCH W=3U L=1U AD=18P AS=18P PD=18U PS=18U
M2 a inp t vss NCH W=3U L=1U AD=18P AS=18P PD=18U PS=18U
M3 d1 d1 vdd vdd PCH W=15U L=1U AD=90P AS=90P PD=42U PS=42U
M4 a d1 vdd vdd PCH W=15U L=1U AD=90P AS=90P PD=42U PS=42U
M6 out a vdd vdd PCH W=94U L=1U AD=564P AS=564P PD=200U PS=200U
M7 out b vss vss NCH W=14U L=1U AD=84P AS=84P PD=40U PS=40U
CC a out 3P
CL out 0 20P
VIN inp 0 DC -0.1 PULSE(-0.1 0.1 3U 10N 10N 1U 2U)
.MODEL NCH NMOS LEVEL=1 VTO=0.7 KP=110U GAMMA=0.4 LAMBDA=0.04 PHI=0.7
+ CGSO=220P CGDO=220P CGBO=700P CJ=770U CJSW=380P MJ=0.5 MJSW=0.38 LD=0.016U TOX=14N
.MODEL PCH PMOS LEVEL=1 VTO=-0.7 KP=50U GAMMA=0.57 LAMBDA=0.05 PHI=0.8
+ CGSO=220P CGDO=220P CGBO=700P CJ=560U CJSW=350P MJ=0.5 MJSW=0.35 LD=0.014U TOX=14N
.TRAN 0.5N 4.5U
.PRINT TRAN V(OUT) I(VDD)
.END
```

![20 pF 与 10 pF 负载下跟随器对 ±0.1 V 阶跃的仿真输出，下降沿的过冲更大](/q/alsim-06-6-11/solution-step.zh.svg)

![20 pF 负载下阶跃期间 M6 漏极电流的仿真结果，上升沿升至 202 µA，下降沿降至 15 µA](/q/alsim-06-6-11/solution-id6.zh.svg)

| 阶跃 | $C_L$ = 20 pF 过冲 | $C_L$ = 10 pF 过冲 | $I_{D6}$ 变化（20 pF） |
|---|---|---|---|
| ±5 mV（线性） | 14.7% / 15.0% | — | 可忽略 |
| −0.1 → +0.1 V | 10.4% | 2.3% | 98 → 202 µA |
| +0.1 → −0.1 V | 22.9% | 6.4% | 98 → 15 µA |

10 pF 的仿真总体相位裕度更大，给出了 [图 2] 中正向过冲仅几个百分点、负向过冲更大的形态。20 pF 的仿真表现出同样但更强的不对称。

正向过冲较小，是因为上升沿使 M6 的电流和 $g_{m6}$ 增大，抬高了非主极点和相位裕度。下降沿则使 M6 电流不足，因为 M7 只能吸收其固定的偏置电流，于是 $g_{m6}$ 和相位裕度骤降。同一机理也使该运放的大信号负向压摆率小于正向压摆率。增大输出级偏置电流（使 M7 足以提供 $C_L$ 与 $C_c$ 所需的电流），或采用推挽输出级，可以使两个方向的过冲相等。
