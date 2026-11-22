# 详细步骤 - alsim-08-4-06

交叉耦合管 M6–M7 给二极管负载差分对引入正反馈。当前导通较多的一侧也会使其交叉耦合管导通，该管向另一侧的输出注入电流。因此输入必须把截止一侧的电流推过这部分额外电流，电路才能翻转。写出输入上升时的翻转条件，解出输入对管的电流，再换算为栅压差。由对称性得到下降时的跳变点。用慢三角波输入做瞬态仿真，可以证实迟滞。

### 第 1 步 — 正跳变点之前的状态

当 $v_{in}$ 远低于零时，M2 截止，M1 经其二极管负载 M3 承载全部尾电流。M6 与 M3 共栅且宽度是其五倍（$W_6/W_3=10/2$），因此它试图向节点 $v_{o2}$ 提供

$$
i_6=\frac{(W/L)_6}{(W/L)_3}\,i_3=5\,i_3
$$

的电流。M7 与 M4 共栅，而 M4 中没有电流，所以 M7 截止。M2 无法吸收 $i_6$，$v_{o2}$ 停在 $V_{DD}$ 附近。

### 第 2 步 — 翻转条件与电流

随着 $v_{in}$ 上升，M2 分走一部分尾电流。只有当 M2 吸收了 M6 提供的全部电流，即 $i_2=i_6$ 时，输出才能开始下降。此时 M4 开始导通，M7 随之导通，正反馈接管，电路翻转。由 $i_3=i_1$ 和 $i_1+i_2=i_5$：

$$
i_2=5i_1,\qquad i_1+5i_1=i_5\;\Rightarrow\;i_1=\frac{i_5}{6}=8.33\ \mu\mathrm A,\qquad i_2=\frac{5i_5}{6}=41.67\ \mu\mathrm A .
$$

### 第 3 步 — 正跳变点

两个输入管都饱和且共用源极节点，因此它们的阈值（含体效应）相等，在差值中相消。取 $\beta=K'_N(W/L)=(110\ \mu\mathrm{A/V^2})(10)=1100\ \mu\mathrm{A/V^2}$：

$$
v_{GS1}=V_T+\sqrt{\frac{2i_1}{\beta}}=0.7+\sqrt{\frac{2(8.33\ \mu)}{1100\ \mu}}=0.823\ \mathrm V,\qquad
v_{GS2}=0.7+\sqrt{\frac{2(41.67\ \mu)}{1100\ \mu}}=0.975\ \mathrm V,
$$

$$
V_{TRP}^+=v_{in}-0=v_{GS2}-v_{GS1}=0.152\ \mathrm V .
$$

### 第 4 步 — 负跳变点

翻转之后由 M2 承载电流，M4 和 M7 导通，M7（$5\times$ M4）向 $v_{o1}$ 注入 $5i_4$。下降的输入必须使 M1 的电流达到 $5i_2$。电路是对称的，因此

$$
V_{TRP}^-=-0.152\ \mathrm V .
$$

在器件尺寸固定时，迟滞宽度 $V_{TRP}^+-V_{TRP}^-=0.30$ V 按 $\sqrt{i_5}$ 变化。

### 第 5 步 — 仿真

输入在 200 µs 内从 −0.5 V 升到 +0.5 V 再降回，速度足够慢，可视为准静态：

```spice
* alsim-08-4-06 comparator with internal hysteresis
VDD vdd 0 DC 2.5
VSS vss 0 DC -2.5
IB vdd b DC 50U
M8 b b vss vss NCH W=10U L=1U AD=100P AS=100P PD=40U PS=40U
M5 t b vss vss NCH W=10U L=1U AD=100P AS=100P PD=40U PS=40U
M1 o1 0 t vss NCH W=10U L=1U AD=100P AS=100P PD=40U PS=40U
M2 o2 vin t vss NCH W=10U L=1U AD=100P AS=100P PD=40U PS=40U
M3 o1 o1 vdd vdd PCH W=2U L=1U AD=20P AS=20P PD=24U PS=24U
M4 o2 o2 vdd vdd PCH W=2U L=1U AD=20P AS=20P PD=24U PS=24U
M6 o2 o1 vdd vdd PCH W=10U L=1U AD=100P AS=100P PD=40U PS=40U
M7 o1 o2 vdd vdd PCH W=10U L=1U AD=100P AS=100P PD=40U PS=40U
VIN vin 0 PWL(0 -0.5 100U 0.5 200U -0.5)
.MODEL NCH NMOS LEVEL=1 VTO=0.7 KP=110U GAMMA=0.4 PHI=0.7 LAMBDA=0.04 TOX=140E-10
+ CGSO=220P CGDO=220P CGBO=700P CJ=770U CJSW=380P MJ=0.5 MJSW=0.38
.MODEL PCH PMOS LEVEL=1 VTO=-0.7 KP=50U GAMMA=0.57 PHI=0.8 LAMBDA=0.05 TOX=140E-10
+ CGSO=220P CGDO=220P CGBO=700P CJ=560U CJSW=350P MJ=0.5 MJSW=0.35
.TRAN 10N 200U 0 20N
.PRINT TRAN V(O2) V(VIN)
.END
```

M5 与 M8 相同（这里取 10/1），故 $i_5=I_{BIAS}=50\ \mu$A。题中未给漏区面积，假定为 W × 10 µm。

![i5 = 50 µA 时 vo2 随 vin 变化的仿真迟滞回线，点线为 ±0.152 V 的手算跳变点](/q/alsim-08-4-06/solution-hysteresis.zh.svg)

| | 手算（$\lambda=0$） | ngspice（level 1） |
|---|---|---|
| $V_{TRP}^+$ | +0.152 V | +0.144 V |
| $V_{TRP}^-$ | −0.152 V | −0.143 V |
| $v_{o2}$ 高 / 低电平 | — | 2.50 V / 0.83 V |

回线是对称的，负输入时 $v_{o2}$ 为高，正输入时为低。仿真跳变点比手算值向内约 8 mV。沟道长度调制使电流比 $i_6/i_3$ 偏离 5，因为 M6 和 M3 的 $V_{SD}$ 不同，而且正反馈在 $i_2$ 完全等于 $i_6$ 之前稍早就开始了。用 LEVEL-3 参数重新运行该网表，回线进一步变窄，为 +0.115 V / −0.114 V，原因是迁移率退化和较小的饱和电压。
