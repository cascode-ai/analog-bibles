# 详细步骤 - grsim-07-10

用 $g_m$、$C_{gs}$（栅极到源极）和 $C_{gd}$（栅极到交流地）建立跟随器模型。在栅极和源极列节点方程，得到两个极点、一个零点的传递函数。对每种负载求值，再与同一线性模型的 ngspice 仿真比较幅值、相位和阶跃响应。

### 第 1 步 — 小信号参数

$$
g_m=\sqrt{2k_n'\frac{W}{L_{\text{eff}}}I_D}=\sqrt{2(60\ \mu\mathrm{A/V^2})(62.5)(0.5\ \mathrm{mA})}=1.94\ \mathrm{mA/V},
$$

$$
C_{gs}=\tfrac23WL_{\text{eff}}C_{ox}=\tfrac23(100\ \mu\mathrm m)(1.6\ \mu\mathrm m)(0.7\ \mathrm{fF/\mu m^2})=74.7\ \mathrm{fF},\qquad C_{gd}=14\ \mathrm{fF}.
$$

### 第 2 步 — 一般传递函数

源极接负载导纳 $Y_L$ 时，对栅极（$v_g$）和源极（$v_o$）列 KCL，对负载 $R_L$ 或 $C_L$ 得到

$$
\frac{v_o}{v_i}=A_0\,\frac{1+sC_{gs}/g_m}{1+as+bs^2}.
$$

$g_m/C_{gs}=2.6\times10^{10}$ rad/s（4.13 GHz）处的零点对应流过 $C_{gs}$ 的电流抵消 $g_mv_{gs}$ 的频率。

### 第 3 步 — 电阻负载 $R_L=1\ \mathrm{k\Omega}$

$$
A_0=\frac{g_mR_L}{1+g_mR_L}=\frac{1.94}{2.94}=0.659\ (-3.6\ \mathrm{dB}),
$$

$$
a=\frac{R_LC_{gs}+R_S(C_{gs}+C_{gd})+R_Sg_mR_LC_{gd}}{1+g_mR_L}=0.42\ \mathrm{ns},\qquad
b=\frac{R_SR_LC_{gs}C_{gd}}{1+g_mR_L}=3.6\times10^{-21}\ \mathrm{s^2}.
$$

两个极点为实数且相距很远：387 MHz 和 18.4 GHz。幅值在约 30 MHz 以内平坦于 −3.6 dB，−3 dB 点在 390 MHz 附近，1 GHz 时约为 −12 dB。此后 4.13 GHz 的零点使斜率变缓，20 GHz 时增益约为 −27 dB；由于 $C_{gd}$ 把栅极旁路，增益继续下降。相位在 1 GHz 时约 −58°，由于零点在 10 GHz 附近回升到约 −49°，越过 18 GHz 极点后再次下降。

### 第 4 步 — 电容负载 $C_L=400$ pF

只有 $C_L$（电流源偏置）时 $A_0=1$（0 dB），令 $R_L\to\infty$：

$$
a=\frac{C_{gs}+C_L+R_Sg_mC_{gd}}{g_m}=207\ \mathrm{ns},\qquad
b=\frac{R_S\left[C_L(C_{gs}+C_{gd})+C_{gs}C_{gd}\right]}{g_m}=1.83\times10^{-16}\ \mathrm{s^2}.
$$

极点位于 0.773 MHz（基本上就是 $g_m/(2\pi C_L)$，即 $1/g_m$ 的输出电阻驱动 $C_L$）和 179 MHz。−3 dB 点为 0.77 MHz。幅值以 −20 dB/十倍频下降到约 180 MHz（10 MHz 时 −22 dB），之后以 −40 dB/十倍频下降（1 GHz 时约 −77 dB），在 4.13 GHz 零点以上斜率变缓。相位在 1 MHz 时为 −53°，10 MHz 时为 −89°，1 GHz 附近约 −156°，在 20 GHz 时回到接近 −90°。

### 第 5 步 — SPICE 频率响应

```spice
* grsim-07-10 source follower, linear model
.subckt sf g s
Cgs g s 74.67f
Cgd g 0 14f
G   0 s g s 1.93649m
.ends
Vs  i 0 dc 0 ac 1 pwl(0 0 1p 1m)
RS1 i g1 10k
X1  g1 s1 sf
RL  s1 0 1k
RS2 i g2 10k
X2  g2 s2 sf
CL  s2 0 400p
.ac dec 100 10k 20G
.pz i 0 s1 0 vol pz
.tran 0.01n 5n
.end
```

![1 kΩ 与 400 pF 负载下源极跟随器增益幅值的仿真结果](/q/grsim-07-10/solution-magnitude.zh.svg)

![1 kΩ 与 400 pF 负载下源极跟随器增益相位的仿真结果](/q/grsim-07-10/solution-phase.zh.svg)

| $f$ | 1 MHz | 10 MHz | 100 MHz | 390 MHz | 1 GHz | 10 GHz | 20 GHz |
|---|---|---|---|---|---|---|---|
| 1 kΩ：dB / ° | −3.6 / −0.1 | −3.6 / −1.4 | −3.9 / −13 | −6.6 / −41 | −12.2 / −58 | −24.6 / −49 | −27.4 / −58 |
| 400 pF：dB / ° | −4.3 / −53 | −22.3 / −89 | −43.4 / −117 | −61.6 / −150 | −77.1 / −156 | −108.8 / −111 | −115.3 / −101 |

1 kΩ 情况的极零点分析给出极点 $2.43\times10^9$ 与 $1.15\times10^{11}$ rad/s，零点 $2.59\times10^{10}$ rad/s（387 MHz、18.4 GHz、4.13 GHz）。−3 dB 点为 390 MHz（1 kΩ）和 0.777 MHz（400 pF），与手算一致。

### 第 6 步 — 阶跃响应（1 mV 输入阶跃）

| 负载 | 终值 | 10–90 % 上升时间 | 过冲 |
|---|---|---|---|
| 1 kΩ | 0.659 mV | 0.90 ns | 无 |
| 400 pF | 1.000 mV | 0.45 µs（τ = 0.21 µs） | 无 |

由于两组极点都是实数，两种响应都是单调的。1 kΩ 时响应由 387 MHz 极点主导。400 pF 时为单一时间常数的指数响应，$\tau\approx C_L/g_m=0.21\ \mu$s，最终稳定在 1 mV。

与驱动电容的双极型射极跟随器不同，这里没有振荡。源极跟随器的输出阻抗确实随频率上升（从 $1/g_m=516\ \Omega$ 趋向 $R_S$），但只在约 $1/(2\pi R_SC_{gs})=213$ MHz 以上才上升，因为 $R_S$ 只通过很小的 $C_{gs}$ 与输出耦合。远在此之前，400 pF 负载已在 0.77 MHz 处使增益滚降，因此负载看到的输出阻抗是电阻性的，不会形成谐振。
