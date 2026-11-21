# 详细步骤 - grsim-07-38

偏置链确定了 100/2 镜像器件的栅极电压，因此 $M_5$ 必须承担剩余电压，而 $M_1$ 必须把 2.5 V 电平移位到 $V_{GS2}$，并须计入其体效应。两个宽度确定后，增益等于跟随器增益乘以共源级增益。带宽由零值时间常数求得，以密勒电容 $C_{gd2}$ 为主，并用 level-1 ngspice 模型验证。偏置设计中忽略 $\lambda$，小信号分析中保留。

### 第 1 步 — 确定 $M_5$ 尺寸

所有 100/2 器件流过 100 µA。由 $V_{ov}=\sqrt{2I_D/(k'W/L)}$：

$$
V_{GS6}=0.7+\sqrt{\frac{2(100\ \mu\mathrm A)}{(60\ \mu\mathrm{A/V^2})(50)}}=0.958\ \mathrm V,\qquad
|V_{GS4}|=0.7+\sqrt{\frac{2(100\ \mu\mathrm A)}{(30\ \mu\mathrm{A/V^2})(50)}}=1.065\ \mathrm V.
$$

$M_5$（衬底接源极，无体效应）承担 5 V 中的其余部分：

$$
|V_{GS5}|=5-0.958-1.065=2.977\ \mathrm V,\quad |V_{ov5}|=2.277\ \mathrm V,\quad
\left(\frac WL\right)_5=\frac{2(100\ \mu\mathrm A)}{(30\ \mu\mathrm{A/V^2})(2.277\ \mathrm V)^2}=1.29 .
$$

在 2 µm 最小尺寸限制下取 $W_5=2.6\ \mu$m、$L_5=2\ \mu$m。

### 第 2 步 — 确定 $M_1$ 尺寸

$M_2$（100/2，100 µA）需要 $V_{GS2}=0.958$ V，因此 $M_1$ 的源极位于 0.958 V，而其栅极位于 2.5 V。其衬底接地，故 $V_{SB1}=0.958$ V：

$$
V_{t1}=0.7+0.4\left(\sqrt{0.6+0.958}-\sqrt{0.6}\right)=0.889\ \mathrm V,\qquad V_{ov1}=2.5-0.958-0.889=0.652\ \mathrm V,
$$

$$
\left(\frac WL\right)_1=\frac{2(100\ \mu\mathrm A)}{(60\ \mu\mathrm{A/V^2})(0.652\ \mathrm V)^2}=7.83\quad(W_1=15.7\ \mu\mathrm m,\ L_1=2\ \mu\mathrm m).
$$

若忽略体效应会得到约 4.2，此时 $V_i=2.5$ V 时 $V_O$ 将不在 2.5 V。

### 第 3 步 — 低频增益

每个器件的 $r_o=1/(\lambda I_D)=333\ \mathrm{k\Omega}$。

$$
g_{m1}=\frac{2I_D}{V_{ov1}}=0.307\ \mathrm{mA/V},\quad g_{mb1}=\frac{\gamma g_{m1}}{2\sqrt{0.6+0.958}}=0.049\ \mathrm{mA/V},\quad g_{m2}=\frac{2I_D}{0.258\ \mathrm V}=0.775\ \mathrm{mA/V}.
$$

跟随器（负载为 $r_{o1}\parallel r_{o7}$）与共源级（负载为 $r_{o2}\parallel r_{o3}=167\ \mathrm{k\Omega}$）：

$$
A_1=\frac{g_{m1}}{g_{m1}+g_{mb1}+2/r_o}=0.848,\qquad R_{o1}=\frac{1}{g_{m1}+g_{mb1}+2/r_o}=2.76\ \mathrm{k\Omega},
$$

$$
A_2=-g_{m2}(r_{o2}\parallel r_{o3})=-129,\qquad A_v=A_1A_2=-109 .
$$

### 第 4 步 — 零值时间常数

电容（100 µm 器件：$C_{gs}=\tfrac23(100)(2)(1.73)+30=261$ fF，$C_{gd}=30$ fF；漏/源结电容为 $80\ \mathrm{fF}/\sqrt{1+V_R/0.6}$）。各节点电阻：输出 $R_{out}=167\ \mathrm{k\Omega}$；$M_2$ 栅极 $R_{o1}=2.76\ \mathrm{k\Omega}$；$M_3$/$M_4$ 栅极节点 $1/g_{m4}\parallel(1/g_{m5}+1/g_{m6})=1.6\ \mathrm{k\Omega}$；$M_6$/$M_7$ 栅极节点 1.18 kΩ。

| 电容 | 看到的电阻 | $RC$ (ns) |
|---|---|---|
| $C_{gd2}$（30 fF），输出–$M_2$ 栅极 | $2.76+167+g_{m2}(167)(2.76)=526\ \mathrm{k\Omega}$ | 15.8 |
| $C_{gd3}$（30 fF），输出–$M_3$ 栅极 | $1.6+167+g_{m3}(167)(1.6)=314\ \mathrm{k\Omega}$（$g_{m3}=0.548$ mA/V） | 9.4 |
| $C_{db2}+C_{db3}$（2.5 V 下各 35.2 fF） | $R_{out}$ | 11.7 |
| $M_3$/$M_4$ 栅极节点（$C_{gs3}+C_{gs4}+C_{db4}+C_{gs5}\approx570$ fF） | 1.6 kΩ | 0.9 |
| $M_2$ 栅极（$C_{gs2}+C_{db7}+C_{sb1}+C_{gs1}\approx360$ fF） | 2.76 kΩ | 1.0 |
| $M_6$/$M_7$ 栅极节点、$C_{gd7}$ | ≈ 1.2 kΩ，6.5 kΩ | 0.9 |
| 总和 $T_0$ | | ≈ 40 |

$$
f_{-3\text{dB}}\approx\frac{1}{2\pi T_0}\approx4.0\ \mathrm{MHz}.
$$

密勒电容 $C_{gd2}$ 占主导，其次是输出节点电容以及输出经 $C_{gd3}$ 与 $M_3$ 栅极的耦合。

### 第 5 步 — SPICE 验证

level-1 模型采用给定参数（$\lambda=0.03\ \mathrm{V^{-1}}$，NMOS 的 $\gamma=0.4\ \mathrm{V^{1/2}}$）。结电容按 0.8 fF/µm 的侧壁电容输入，周长取等于宽度。由于 $\lambda$ 使直流输出对微小的电流失配很敏感，先调节直流输入使 $V_O$ 位于 2.5 V。

```spice
* grsim-07-38 CMOS amplifier stage
.model nm nmos level=1 kp=60u vto=0.7 gamma=0.4 phi=0.6 lambda=0.03 tox=20n
+ cgso=0.3n cgdo=0.3n cj=0 cjsw=0.8n mjsw=0.5 pb=0.6
.model pm pmos level=1 kp=30u vto=-0.7 gamma=0.4 phi=0.6 lambda=0.03 tox=20n
+ cgso=0.3n cgdo=0.3n cj=0 cjsw=0.8n mjsw=0.5 pb=0.6
VDD vdd 0 5
Vi i 0 dc 2.49425 ac 1
M4 g4 g4 vdd vdd pm w=100u   l=2u pd=100u   ps=100u
M5 g6 g6 g4  g4  pm w=2.58u  l=2u pd=2.58u  ps=2.58u
M6 g6 g6 0   0   nm w=100u   l=2u pd=100u   ps=100u
M7 s1 g6 0   0   nm w=100u   l=2u pd=100u   ps=100u
M1 vdd i s1  0   nm w=15.66u l=2u pd=15.66u ps=15.66u
M2 o  s1 0   0   nm w=100u   l=2u pd=100u   ps=100u
M3 o  g4 vdd vdd pm w=100u   l=2u pd=100u   ps=100u
.ac dec 200 1k 10G
.pz i 0 o 0 vol pol
.end
```

| 量 | 手算 | ngspice |
|---|---|---|
| $V_O=2.5$ V 时的 $V_i$ | 2.5 V | 2.501 V（$\lambda=0$）；2.494 V（$\lambda=0.03$） |
| 漏极电流 | 100 µA | 108–112 µA |
| $V_{GS2}$（$M_1$ 源极） | 0.958 V | 0.964 V |
| 增益 | −109 | 41.2 dB（−115） |
| −3 dB 频率 | ≈ 4.0 MHz | 4.61 MHz |
| 主极点 | — | $2.91\times10^7$ rad/s（4.63 MHz） |
| 其后的极点 | — | 128 MHz，然后是约 290 MHz 处的一对复极点 |

$\lambda=0$ 时，设计在 $V_i=2.501$ V 处使 $V_O=2.5$ V，证实了尺寸选择。$\lambda=0.03\ \mathrm{V^{-1}}$ 时，电流通过 $1+\lambda V_{DS}$ 增大 8–12 %，使 $g_{m2}$ 增大，增益因此提高约 5 %。带宽比零值估算高约 15 %，零值法照例略偏保守。
