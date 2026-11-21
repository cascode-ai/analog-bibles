# 详细步骤 - grsim-04-05

在共源共栅电流镜中，$M_1$ 决定电流，$M_2$（栅极由二极管叠接 $M_4$–$M_3$ 固定）把 $M_1$ 的漏极与输出隔离。$M_1$ 的漏极节点相当于 $M_2$ 的源极负反馈电阻 $r_{o1}$，因此输出电阻为带源极负反馈的共源共栅值 $r_{o2}(1+g_{m2}r_{o1})+r_{o1}$。计算 $V_{ov}$、$g_m$ 和 $r_o$，再用 ngspice 验证 $R_o$ 和 $I_{OUT}$–$V_{OUT}$ 曲线。

### 第 1 步 — 器件参数

$L_{\mathrm{eff}}=1-2(0.09)=0.82\ \mu$m，$W/L_{\mathrm{eff}}=100/0.82=122$。四个器件都流过 100 μA。由平方律，

$$
V_{ov}=\sqrt{\frac{2I}{k'(W/L)}}=\sqrt{\frac{2(100\ \mu\mathrm A)}{(194\ \mu\mathrm{A/V^2})(122)}}=0.092\ \mathrm V,\qquad
g_m=\frac{2I}{V_{ov}}=2.18\ \mathrm{mA/V},
$$

$$
r_o=\frac1{\lambda I}=\frac1{(0.0244\ \mathrm{V^{-1}})(100\ \mu\mathrm A)}=410\ \mathrm{k\Omega}.
$$

### 第 2 步 — 输出电阻

$M_2$ 的栅极由二极管叠接固定（此处视为交流地），$M_1$ 的栅极由二极管连接的 $M_3$ 固定，因此 $M_1$ 只相当于 $M_2$ 源极中的 $r_{o1}$。测试电流 $i_x$ 使 $M_2$ 的源极升高 $i_xr_{o1}$，于是 $v_{gs2}=-i_xr_{o1}$；由 $i_x=-g_{m2}i_xr_{o1}+(v_x-i_xr_{o1})/r_{o2}$ 得

$$
R_o=r_{o2}(1+g_{m2}r_{o1})+r_{o1}=410\ \mathrm{k\Omega}\,(1+893)+410\ \mathrm{k\Omega}=3.67\times10^{8}\ \Omega\approx g_mr_o^2 .
$$

### 第 3 步 — $I_{OUT}$–$V_{OUT}$ 特性的转折点

二极管叠接使 $M_2$ 的栅极处于 $2V_{GS}=2(V_t+V_{ov})=1.38$ V；只要 $M_2$ 处于有源区，$M_1$ 的漏极就比该电压低一个 $V_{GS2}$，即 $V_{DS1}=V_t+V_{ov}=0.69$ V。
- $M_1$ 只需 $V_{DS1}\ge V_{ov}$。当 $V_{OUT}$ 低到 $M_2$ 再也无法维持其漏极电压时，它才离开有源区，大约在 $V_{OUT}<V_{ov}=0.09$ V。在此以下两管都处于线性区，电流急剧降到零。
- $M_2$ 在 $V_{DS2}\ge V_{ov}$ 时处于有源区：

$$
V_{OUT(\min)}=V_{DS1}+V_{ov}=V_t+2V_{ov}=0.6+2(0.092)=0.78\ \mathrm V .
$$

在 0.09 V 与 0.78 V 之间，$M_2$ 处于线性区而 $M_1$ 处于有源区，因此 $I_{OUT}$ 仍接近 100 μA。只是 $M_1$ 的 $V_{DS}$ 较小，通过沟道长度调制使电流略有降低，此时输出电阻较低。高于 0.78 V 时两管都处于有源区，曲线平坦，斜率为 $1/R_o\approx2.7$ nA/V。

### 第 4 步 — SPICE 验证

```spice
* grsim-04-05 MOS cascode current mirror
VDD  vdd 0 3
IIN  vdd g4 100u
M4   g4 g4 g3 0 nch W=100u L=0.82u
M3   g3 g3 0 0 nch W=100u L=0.82u
M2   out g4 d1 0 nch W=100u L=0.82u
M1   d1 g3 0 0 nch W=100u L=0.82u
VOUT out 0 2
.model nch nmos level=1 kp=194u vto=0.6 lambda=0.0244
.control
op
tf v(d1) VOUT
print all
dc VOUT 0 3 1m
let iout = -i(VOUT)
wrdata iv.txt iout
.endc
.end
```

直接输入有效长度（$L=0.82\ \mu$m，不设 LD），并省略体效应（GAMMA = 0）。`.tf` 在 VOUT = 2 V 处报告的输入电阻即为 $R_o$。

| 量 | 手算 | ngspice |
|---|---|---|
| $V_{G2}=2V_{GS}$ | 1.38 V | 1.382 V |
| $V_{DS1}$ | 0.69 V | 0.692 V |
| $R_o$ | 367 MΩ | 390 MΩ（`.tf`）；390 MΩ（1.5–2.5 V 斜率） |
| 0.09 / 0.2 / 0.78 / 2 V 处的 $I_{OUT}$ | — | 97.9 / 98.8 / 100.0 / 100.0 μA |

![MOS 共源共栅电流镜在 0 到 3 V 范围内的 ngspice IOUT–VOUT 曲线，转折点位于 0.09 V 和 0.78 V](/q/grsim-04-05/solution-iv.zh.svg)

仿真得到的 $R_o$ 比手算高 6%，因为 level-1 采用 $r_o=(1+\lambda V_{DS})/(\lambda I_D)$，且 $g_m$ 中也包含 $(1+\lambda V_{DS})$；在 $V_{DS2}\approx1.3$ V、$V_{DS1}\approx0.7$ V 时，这使 $g_{m2}r_{o1}r_{o2}$ 增大约 6%。曲线显示：约 0.09 V 以下急剧上升，到 0.78 V 拐点之前为近乎平坦但略有斜率的一段，拐点以上为平坦的共源共栅区。
