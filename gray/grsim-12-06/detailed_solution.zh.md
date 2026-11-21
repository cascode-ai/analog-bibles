# 详细步骤 - grsim-12-06

采用共模半边电路（half circuit）。把尾电流管一分为二，每一半为 $r_{o5h}=2r_{o5}$、$g_{m5h}=g_{m5}/2$。先求从输入起的开环共模增益 $a_{cm}$ 和从 CMC 输入端起的增益 $a_{cmc}$，再闭合共模反馈环路：$a'_{cm}=a_{cm}/(1+T)$，环路增益（loop gain）$T=a_{cms}(-a_{cmc})$。(b) 小题用理想共模检测模块做交流仿真，得到 $|a'_{cm}|$ 的频率特性。

### 第 1 步 — 小信号参数

$|V_{ov}|=0.1$ V，$g_m=2I_D/|V_{ov}|$，$r_o=|V_A|/I_D$：

$$
\begin{aligned}
&g_{m1}=\frac{2(50\ \mu\mathrm A)}{0.1\ \mathrm V}=1\ \mathrm{mA/V},\quad r_{o1}=\frac{10\ \mathrm V}{50\ \mu\mathrm A}=200\ \mathrm{k\Omega},\quad r_{o3}=\frac{20\ \mathrm V}{50\ \mu\mathrm A}=400\ \mathrm{k\Omega},\\
&g_{m5}=2\ \mathrm{mA/V},\quad r_{o5}=\frac{10\ \mathrm V}{100\ \mu\mathrm A}=100\ \mathrm{k\Omega}\ \Rightarrow\ g_{m5h}=1\ \mathrm{mA/V},\quad r_{o5h}=200\ \mathrm{k\Omega}.
\end{aligned}
$$

### 第 2 步 — 共模半边电路的开环增益

半边电路中，$M_1$ 是以 $r_{o5h}$ 为源极负反馈、以 $r_{o3}$ 为负载的共源级。从其漏极向下看的电阻为

$$
R_{o(\text{down})}=r_{o1}(1+g_{m1}r_{o5h})+r_{o5h}\approx r_{o1}g_{m1}r_{o5h}=(200\ \mathrm{k\Omega})(1\ \mathrm{mA/V})(200\ \mathrm{k\Omega})=40\ \mathrm{M\Omega},
$$

因此输出节点看到的电阻为 $R_{o(\text{down})}\parallel r_{o3}=396$ kΩ。带负反馈的跨导为 $g_{m1}/(1+g_{m1}r_{o5h})\approx1/r_{o5h}$，故

$$
a_{cm}=\frac{v_{oc}}{v_{ic}}\approx-\frac{R_{o(\text{down})}\parallel r_{o3}}{r_{o5h}}=-\frac{396\ \mathrm{k\Omega}}{200\ \mathrm{k\Omega}}=-1.98.
$$

$M_5$ 栅极上的信号 $v_{cmc}$ 使每一半的尾电流变化 $g_{m5h}v_{cmc}$。$M_1$ 像共源共栅管一样把这一电流传到输出，故

$$
a_{cmc}=\frac{v_{oc}}{v_{cmc}}\approx-g_{m5h}\left(R_{o(\text{down})}\parallel r_{o3}\right)=-(1\ \mathrm{mA/V})(396\ \mathrm{k\Omega})=-396.
$$

### 第 3 步 — (a) 闭合共模反馈环路

[图 2] 的共模检测电路给出 $v_{cmc}=a_{cms}v_{oc}$，$a_{cms}=+1$。$v_{oc}$ 升高使 $M_5$ 栅压升高，该管吸收更多电流而使 $v_{oc}$ 下降，所以是负反馈，环路增益 $T=a_{cms}(-a_{cmc})=396$。由 $v_{oc}=a_{cm}v_{ic}+a_{cmc}a_{cms}v_{oc}$ 得

$$
a'_{cm}=\frac{a_{cm}}{1-a_{cms}a_{cmc}}=\frac{-1.98}{1+396}=-0.0050\quad(-46\ \mathrm{dB}).
$$

由于 $a_{cm}$ 和 $a_{cmc}$ 都正比于 $R_{o(\text{down})}\parallel r_{o3}$，当 $T\gg1$ 时该电阻被消去：

$$
a'_{cm}\approx-\frac{1}{g_{m5h}r_{o5h}}=-\frac{1}{g_{m5}r_{o5}}=-\frac{1}{200}.
$$

闭环共模增益就是尾电流管本征增益（intrinsic gain）的倒数。

### 第 4 步 — (b) 的 SPICE 设置

采用 level-1 模型：$\mu_nC_{ox}=127$ 和 $\mu_pC_{ox}=57.5\ \mu$A/V²，$V_t=\pm0.7$ V，$\lambda_n=0.1$、$\lambda_p=0.05\ \mathrm{V^{-1}}$。$L=0.8\ \mu$m，$W=(W/L)\cdot0.8\ \mu$m，模型中不含本征电容和结电容，而是给每个晶体管外接 $C_{gs}=180$ fF 和 $C_{gd}=20$ fF。[图 2] 的共模检测通路（跟随器、取平均电阻和检测放大器）用 $a_{cms}=1$、$V_{CM}=0$ 的理想受控源代替：$v_{cmc}=V_{SS}+0.8\ \mathrm V+(v_{o1}+v_{o2})/2$。$V_{BIAS}$ 的取值使工作点处 $|I_{D3}|=|I_{D4}|=50\ \mu$A，环路随之设定 $I_{D5}=100\ \mu$A。共模交流源驱动两个栅极，绘出 $v_{oc}=(v_{o1}+v_{o2})/2$。

```spice
* grsim-12-06 CM gain with CMFB
VDD vdd 0 2.5
VSS vss 0 -2.5
VIC vic 0 dc 0 ac 1
VB vbias 0 1.7057
M1 vo1 vic t vss nm W=63.2u L=0.8u
M2 vo2 vic t vss nm W=63.2u L=0.8u
M3 vo1 vbias vdd vdd pm W=139.2u L=0.8u
M4 vo2 vbias vdd vdd pm W=139.2u L=0.8u
M5 t cmc vss vss nm W=125.6u L=0.8u
CGS1 vic t 180f
CGD1 vic vo1 20f
CGS2 vic t 180f
CGD2 vic vo2 20f
CGS3 vbias vdd 180f
CGD3 vbias vo1 20f
CGS4 vbias vdd 180f
CGD4 vbias vo2 20f
CGS5 cmc vss 180f
CGD5 cmc t 20f
ECMC cmc vss value={0.8 + 0.5*(v(vo1)+v(vo2)) - 0}
.model nm nmos level=1 vto=0.7 kp=127u lambda=0.1
.model pm pmos level=1 vto=-0.7 kp=57.5u lambda=0.05
.ac dec 20 100 100e6
.end
```

工作点为 $I_{D1}=50.1\ \mu$A，$I_{D5}=100.1\ \mu$A，输出为 −7 mV（共模环路把它们保持在 $V_{CM}=0$），尾节点为 −0.80 V。

### 第 5 步 — (b) 100 Hz 到 100 MHz 的仿真 $|a'_{cm}|$

![仿真得到的 |a'cm|（dB）随频率的变化：约 10 MHz 以下平坦于 0.0039，其上开始上升；虚线为手算值 0.0050](/q/grsim-12-06/solution-curves.zh.svg)

| $f$ | 100 Hz – 1 MHz | 10 MHz | 30 MHz | 54 MHz | 100 MHz |
|---|---|---|---|---|---|
| $\lvert a'_{cm}\rvert$ | 0.00393 | 0.00400 | 0.00448 | 0.00556 | 0.00825 |
| dB | −48.1 | −48.0 | −47.0 | −45.1 | −41.7 |

低频相位为 180°，即 $a'_{cm}$ 为负，与计算一致。平台值 0.0039 比手算值 0.0050 低 21%，第 3 步解释了原因。平台值等于 $1/(g_{m5}r_{o5})$，而 level-1 模型给出 $g_{m5}=2.16$ mS、$r_{o5}=1/g_{ds5}=117$ kΩ。该模型的输出电导为 $\lambda I_D/(1+\lambda V_{DS})$ 而非 $I_D/V_A$，其过驱动电压也按同一因子 $(1+\lambda V_{DS5})=1.17$ 减小。因此仿真的 $g_{m5}r_{o5}=253$，给出 $1/253=0.0040$，与仿真一致。若用手算模型的 $g_{m5}r_{o5}=200$，平台值为 0.0050。

约 10 MHz 以上 $|a'_{cm}|$ 上升，斜率趋近 +20 dB/十倍频，在约 54 MHz 处比平台高 3 dB。共模反馈依靠尾电阻 $r_{o5}$ 抑制共模增益。尾节点到交流地的任何电容都会旁路 $r_{o5}$，使 $a'_{cm}\approx-(1+j\omega r_{o5}C_{tail})/(g_{m5}r_{o5})$。这里 $C_{gs1}$ 和 $C_{gs2}$ 把尾节点连到输入端，而输入在共模下与尾节点一起变化，所以尾节点唯一的对地电容是 $C_{gd5}$，对应的零点在 $1/(2\pi r_{o5}C_{gd5})=1/[2\pi(117\ \mathrm{k\Omega})(20\ \mathrm{fF})]\approx68$ MHz 附近。若模型中含结电容，尾节点电容更大，上升会更早开始，落在 1–10 MHz 范围。输出极点是 $a_{cm}$ 与 $a_{cmc}$ 共有的；闭环后它被推到约 $g_{m5h}/C_{out}$，远高于 100 MHz，所以图示范围内不出现滚降。
