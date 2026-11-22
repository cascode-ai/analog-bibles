# 详细步骤 - grsim-06-15

对所有器件采用 $L_{\text{eff}}=0.72$ µm 的平方律，因此版图上的 150/1、100/1 和 50/1 对应的有效宽长比为 208.3、138.9 和 69.4。由镜像比得到偏置电流，由这些电流下的 $g_m$ 与 $r_o$ 得到两级增益，由饱和条件得到共模范围，由各电源轨的小信号通路得到电源增益。每项结果都用 level-1 ngspice 模型核对。

### 第 1 步 — 偏置电流与过驱动电压

$M_8$ 流过 200 µA 基准电流。$M_5$ 与 $M_7$ 的 $V_{SG}$ 和 $W/L$ 相同，因此（忽略沟道长度调制）也各流过 200 µA。平衡的差分对中尾电流平分，$M_6$ 流过 $M_7$ 的电流：

$$
|I_{D5}|=|I_{D7}|=200\ \mu\mathrm A,\qquad |I_{D1}|=|I_{D2}|=I_{D3}=I_{D4}=100\ \mu\mathrm A,\qquad I_{D6}=200\ \mu\mathrm A .
$$

第二级是平衡的：$(W/L)_6=2(W/L)_4$，流过 $M_4$ 电流的两倍，因此 $M_3$、$M_4$、$M_6$ 的电流密度相同，零失调时 $V_{GS6}=V_{GS4}$。由 $V_{ov}=\sqrt{2I_D/(k'W/L_{\text{eff}})}$：

$$
|V_{ov1,2}|=\sqrt{\frac{2(100\ \mu\mathrm A)}{(64.7\ \mu\mathrm{A/V^2})(208.3)}}=0.122\ \mathrm V=V_{ov3,4}=V_{ov6},\qquad |V_{ov5,7,8}|=0.172\ \mathrm V .
$$

### 第 2 步 — 低频差模增益

由 $g_m=2I_D/V_{ov}$、$r_o=1/(\lambda I_D)$，$\lambda=0.0556\ \mathrm{V^{-1}}$：

$$
g_{m1}=\frac{2(100\ \mu\mathrm A)}{0.122\ \mathrm V}=1.64\ \mathrm{mS},\quad g_{m6}=3.28\ \mathrm{mS},\quad r_{o2}=r_{o4}=180\ \mathrm{k\Omega},\quad r_{o6}=r_{o7}=90\ \mathrm{k\Omega}.
$$

电流镜负载的第一级增益为 $g_{m1}(r_{o2}\parallel r_{o4})$，共源第二级为 $-g_{m6}(r_{o6}\parallel r_{o7})$：

$$
A_{v1}=(1.64\ \mathrm{mS})(90\ \mathrm{k\Omega})=148,\qquad A_{v2}=-(3.28\ \mathrm{mS})(45\ \mathrm{k\Omega})=-148,\qquad A_v=-2.2\times10^4\ (87\ \mathrm{dB}),
$$

其中 $v_i$ 定义为 $v_{g1}-v_{g2}$：从 $v_o$ 看，$M_1$ 的栅极是反相输入端。

### 第 3 步 — 输入共模范围

$M_1$、$M_2$ 的衬底接其源极，因此始终有 $|V_{t1}|=0.8$ V。

- **上限**：$M_5$ 必须保持饱和，故公共源极最高只能到 $V_{DD}-|V_{ov5}|$，而输入比它低 $|V_{t1}|+|V_{ov1}|$：
$$
V_{IC}<1.5-0.172-0.8-0.122=+0.41\ \mathrm V.
$$
- **下限**：$M_1$ 的漏极被固定在 $-V_{SS}+V_{GS3}=-1.5+0.722=-0.778$ V；只要栅极高于该漏极电压减去 $|V_{t1}|$，$M_1$ 就保持饱和：
$$
V_{IC}>-1.5+V_{t3}+V_{ov3}-|V_{t1}|=-1.58\ \mathrm V .
$$
该值低于负电源轨，因此输入共模范围（input common-mode range）约为 −1.5 V 至 +0.41 V。

### 第 4 步 — 各电源到输出的增益

**负电源。** $M_6$ 与 $M_7$ 的栅极保持不动（第一级输出与 $M_8$ 的栅极在一阶近似下不随 $V_{SS}$ 变化），$r_{o6}$ 与 $r_{o7}$ 构成从 $-V_{SS}$ 到 $V_{DD}$ 的分压器：

$$
A^-=\frac{v_o}{v_{ss}}=\frac{r_{o7}}{r_{o6}+r_{o7}}=0.5,\qquad PSRR^-=\frac{|A_v|}{A^-}\approx4.4\times10^4\ (93\ \mathrm{dB}).
$$

**正电源。** 两条通路相互抵消。$M_5$、$M_7$、$M_8$ 的栅极跟随 $V_{DD}$，因此这些器件只感受到 $|V_{DS}|$ 的变化。仅经 $M_7$ 时输出以 $+r_{o6}/(r_{o6}+r_{o7})=+0.5$ 跟随。经 $M_5$ 时，尾电流增加 $v_{dd}/r_{o5}$，两侧各分一半，$V_{GS3}$ 与 $V_{GS4}$ 都升高 $v_{dd}/(2g_{m3}r_{o5})$，再被 $M_6$ 放大：

$$
A^+\approx\frac{r_{o6}}{r_{o6}+r_{o7}}-\frac{g_{m6}(r_{o6}\parallel r_{o7})}{2g_{m3}r_{o5}}=0.5-\frac{148}{2(1.64\ \mathrm{mS})(90\ \mathrm{k\Omega})}=0.5-0.5\approx0 .
$$

由于 $V_{A5}=V_{A7}$ 且 $V_{ov3}=V_{ov6}$，抵消在一阶近似下是精确的；因此 $PSRR^+$ 非常大。

### 第 5 步 — SPICE 核对

采用 $L=L_{\text{eff}}=0.72$ µm、$\lambda=0.0556\ \mathrm{V^{-1}}$ 的 level-1 模型（体效应不起作用：其他器件的源极都接在其衬底所在的电源轨上）。从 $v_o$ 到 $M_1$ 栅极接 1 GΩ 电阻，并从该栅极接 1 F 电容到地，只在直流下闭合环路以消除失调，而在 1 Hz 的交流分析中环路是断开的。再依次把小信号源加在 $M_2$ 栅极、$V_{DD}$ 或 $V_{SS}$ 上。$M_9$ 与 5 pF 电容略去。

```spice
* grsim-06-15 two-stage CMOS op amp
.model nm nmos level=1 kp=194u  vto=0.6  lambda=0.0556
.model pm pmos level=1 kp=64.7u vto=-0.8 lambda=0.0556
VDD vdd 0 dc 1.5  ac 0
VSS vss 0 dc -1.5 ac 0
IB  g8 vss 200u
M8 g8  g8  vdd vdd pm w=150u l=0.72u
M5 s   g8  vdd vdd pm w=150u l=0.72u
M7 out g8  vdd vdd pm w=150u l=0.72u
M1 x   inp s   s   pm w=150u l=0.72u
M2 y   inm s   s   pm w=150u l=0.72u
M3 x   x   vss vss nm w=50u  l=0.72u
M4 y   x   vss vss nm w=50u  l=0.72u
M6 out y   vss vss nm w=100u l=0.72u
Rf out inp 1G
Cf inp 0 1
Vin inm 0 dc 0 ac 1
.ac lin 1 1 1
.end
```

| 量 | 手算 | ngspice |
|---|---|---|
| $\lvert I_{D5}\rvert$, $\lvert I_{D7}\rvert$ | 200 µA，200 µA | 196 µA，206 µA |
| $\lvert I_{D1}\rvert=I_{D3}$, $I_{D6}$ | 100 µA，200 µA | 98.0 µA，206 µA |
| $\lvert A_v\rvert$ | $2.2\times10^4$ | $2.73\times10^4$ |
| 共模范围 | −1.58 V（低于电源轨）至 +0.41 V | −1.5 V 至约 +0.42 V |
| $A^+$ | ≈ 0 | −0.018 |
| $A^-$ | 0.5 | 0.505 |

工作点上所有晶体管都处于饱和区。由于 $M_5$、$M_7$ 的 $|V_{DS}|$ 与 $M_8$ 不同，沟道长度调制使电流相差几个百分点。仿真增益约高 25 %，因为 level-1 模型中 $r_o=(1+\lambda V_{DS})/(\lambda I_D)$，且 $g_m$ 也按同一因子增大。对于共模范围，单位增益跟随器扫描在 +0.45 V 以内跟随误差小于 5 µV，$M_5$ 的 $|V_{SD}|$ 在 +0.42 V 附近降到其 0.17 V 的过驱动电压；在下端，−1.3 V 时 $M_1$ 仍有 $|V_{SD}|=0.40$ V，跟随器此后只受自身在电源轨附近的输出摆幅限制。正电源增益几乎被完全抵消，只剩很小的残余；负电源增益即 $r_o$ 分压值 0.5。
