# 详细步骤 - grsim-11-26

把每个晶体管的噪声折算到差分输入端。输入对的栅极参考噪声直接出现在输入端，电流镜负载的噪声乘以 $(g_{m3}/g_{m1})^2$ 后计入。第二级的噪声要除以第一级增益，尾电流源的噪声是共模的。每项折算后的贡献都是一个 $\propto1/f$ 的闪烁噪声项加一个白热噪声项，因此三个点频只需一个表达式。最后用 SPICE `.noise` 分析核对。

### 第 1 步 — 有效沟道长度与偏置电流

所有晶体管 $L_{\text{drwn}}=1\ \mu$m，故

$$
L_{\text{eff}}=L_{\text{drwn}}-2L_d-X_d=1-0.18-0.1=0.72\ \mu\mathrm m.
$$

$M_5$ 与 $M_8$ 尺寸相同，镜像 200 µA 参考电流，所以尾电流为 200 µA，$M_1$–$M_4$ 各流过 100 µA。由饱和区平方律 $g_m=\sqrt{2k'(W/L_{\text{eff}})I_D}$：

$$
g_{m1}=\sqrt{2(64.7\ \mu\mathrm{A/V^2})\frac{150}{0.72}(100\ \mu\mathrm A)}=1.64\ \mathrm{mS},\qquad
g_{m3}=\sqrt{2(194\ \mu\mathrm{A/V^2})\frac{50}{0.72}(100\ \mu\mathrm A)}=1.64\ \mathrm{mS}.
$$

二者相等，因为三倍的迁移率之比恰好抵消了三倍的宽度之比。

### 第 2 步 — 第一级噪声的折算

每个器件用栅极参考噪声源 $\overline{v_j^2}$ 表示。$M_1$ 和 $M_2$ 的噪声源与输入串联，原样出现在输入端。负载管栅极上的噪声源产生漏极电流 $g_{m3}v_3$，输入端需要 $g_{m1}v_i$ 才能抵消它，因此折算为 $(g_{m3}/g_{m1})v_3$；$M_4$ 同理。四个器件互不相关，故

$$
\frac{\overline{v_i^2}}{\Delta f}=2\frac{\overline{v_1^2}}{\Delta f}+2\left(\frac{g_{m3}}{g_{m1}}\right)^2\frac{\overline{v_3^2}}{\Delta f},
\qquad
\frac{\overline{v_j^2}}{\Delta f}=\frac{K_f}{W_jL_{\text{eff}}C_{ox}f}+4kT\frac{2}{3g_{mj}}.
$$

### 第 3 步 — 闪烁噪声部分与热噪声部分

由于 $g_{m3}=g_{m1}$，闪烁噪声部分为

$$
\frac{\overline{v_{i,f}^2}}{\Delta f}=\frac{2K_f}{L_{\text{eff}}C_{ox}f}\left[\frac1{W_1}+\frac1{W_3}\right]
=\frac{2(3\times10^{-24}\ \mathrm{F\,V^2})}{(0.72\ \mu\mathrm m)(4.31\ \mathrm{fF/\mu m^2})f}\left[\frac1{150\ \mu\mathrm m}+\frac1{50\ \mu\mathrm m}\right]
=\frac{1.29\times10^{-11}+3.87\times10^{-11}}{f}=\frac{5.16\times10^{-11}\ \mathrm{V^2}}{f}.
$$

NMOS 负载的贡献是输入对的三倍，因为它们的栅面积只有输入对的三分之一。热噪声部分为

$$
\frac{\overline{v_{i,t}^2}}{\Delta f}=2\cdot4kT\frac{2}{3g_{m1}}\left(1+\frac{g_{m3}}{g_{m1}}\right)=2(1.66\times10^{-20})\frac{2}{3(1.64\ \mathrm{mS})}(2)=2.7\times10^{-17}\ \mathrm{V^2/Hz},
$$

即 5.2 nV/√Hz 的白噪声底。闪烁噪声部分在 $f_c=5.16\times10^{-11}/2.7\times10^{-17}\approx1.9$ MHz 处与之相等，因此在三个点频处都是闪烁噪声占主导。

### 第 4 步 — 其余晶体管

- $M_6$ 和 $M_7$：它们在 $M_6$ 栅极处的噪声要除以第一级增益 $g_{m1}(r_{o2}\parallel r_{o4})$。由 $\lambda_p=0.04/0.72=0.0556\ \mathrm{V^{-1}}$、$\lambda_n=0.02/0.72=0.0278\ \mathrm{V^{-1}}$ 得 $r_{o2}=180$ kΩ、$r_{o4}=360$ kΩ，增益为 $1.64\ \mathrm{mS}\times120\ \mathrm{k\Omega}\approx197$。它们在 $M_6$ 栅极处约 $1.3\times10^{-11}/f$ V² 的闪烁噪声，折算到输入端只有 $3\times10^{-16}/f$ V²，可以忽略。
- $M_5$（以及经 $M_8$ 传来的参考电流噪声）：尾电流噪声在两侧平均分配，属于共模，电流镜在一阶近似下将其抵消。
- $M_9$：与 5 pF 串联的线性区电阻。在 10 kHz 处电容的容抗为 3.2 MΩ，把它的噪声隔离开，可以忽略。

### 第 5 步 — 点频值

$$
\frac{\overline{v_i^2}}{\Delta f}=\frac{5.16\times10^{-11}\ \mathrm{V^2}}{f}+2.7\times10^{-17}\ \mathrm{V^2/Hz}:
$$

| $f$ | 闪烁噪声（V²/Hz） | 总噪声（V²/Hz） | $\sqrt{\overline{v_i^2}/\Delta f}$ |
|---|---|---|---|
| 100 Hz | $5.16\times10^{-13}$ | $5.16\times10^{-13}$ | 0.72 µV/√Hz |
| 1 kHz | $5.16\times10^{-14}$ | $5.16\times10^{-14}$ | 0.23 µV/√Hz |
| 10 kHz | $5.16\times10^{-15}$ | $5.18\times10^{-15}$ | 72 nV/√Hz |

### 第 6 步 — SPICE 验证

采用 level-1 模型：$K_P=194$ 和 $64.7\ \mu$A/V²，$V_{TO}=0.6$ 和 $-0.8$ V，LD $=0.14\ \mu$m（使 $L-2\mathrm{LD}=L_{\text{eff}}=0.72\ \mu$m，把 $X_d$ 一并计入），$\lambda_n=0.0278$、$\lambda_p=0.0556\ \mathrm{V^{-1}}$，$t_{ox}=80$ Å。ngspice-46 的 level-1 闪烁噪声项等于 $\mathrm{KF}\,g_m^2/(C_{ox}WL_{\text{eff}}f)$（通过扫描几何尺寸验证），因此两种器件都取 KF $=K_f=3\times10^{-24}$、AF $=1$ 即再现题给模型；若用经典形式 $\mathrm{KF}\,I_D/(C_{ox}L_{\text{eff}}^2f)$，等效值应为 $2k'K_f$。$M_9$ 取 $W/L=7.25/1$，使其导通电阻等于 $1/g_{m6}$。输出经 1-TH 电感接回 $M_1$ 栅极，该栅极再经 1-GF 电容接地。这样只建立直流偏置，在噪声频率上不影响环路。对于 PMOS 输入对且电流镜二极管位于 $M_1$ 一侧的结构，$M_1$ 栅极是反相输入端，因此信号源驱动 $M_2$ 栅极。

```spice
* grsim-11-26 CMOS op amp input noise
VDD vdd 0 1.5
VSS vss 0 -1.5
VIN inp 0 dc 0 ac 1
IREF d8 vss 200u
M8 d8 d8 vdd vdd pm W=150u L=1u
M5 t d8 vdd vdd pm W=150u L=1u
M1 d1 inn t vdd pm W=150u L=1u
M2 x inp t vdd pm W=150u L=1u
M3 d1 d1 vss vss nm W=50u L=1u
M4 x d1 vss vss nm W=50u L=1u
M6 out x vss vss nm W=100u L=1u
M7 out d8 vdd vdd pm W=150u L=1u
M9 x vdd y vss nm W=7.25u L=1u
CC y out 5p
LF out inn 1e12
CG inn 0 1e9
.model nm nmos level=1 vto=0.6 kp=194u ld=0.14u lambda=0.02778 tox=80e-10 kf=3e-24 af=1
.model pm pmos level=1 vto=-0.8 kp=64.7u ld=0.14u lambda=0.05556 tox=80e-10 kf=3e-24 af=1
.temp 27.4
.noise v(out) VIN dec 1 100 1e8
.end
```

工作点为 $I_{D1}=98\ \mu$A，$g_{m1}=1.70$ mS，$g_{m3}=1.64$ mS；$M_9$ 的电导为 3.27 mS，$g_{m6}=3.39$ mS。输入参考噪声为：

| $f$ | 手算（V²/Hz） | SPICE（V²/Hz） | SPICE |
|---|---|---|---|
| 100 Hz | $5.16\times10^{-13}$ | $4.88\times10^{-13}$ | 0.70 µV/√Hz |
| 1 kHz | $5.16\times10^{-14}$ | $4.89\times10^{-14}$ | 0.22 µV/√Hz |
| 10 kHz | $5.18\times10^{-15}$ | $4.91\times10^{-15}$ | 70 nV/√Hz |

仿真值低 5%，因为沟道长度调制使 $g_{m3}/g_{m1}=0.965$ 而非 1，占主导的负载项因此乘以 0.93：$1.29\times10^{-11}+0.93(3.87\times10^{-11})=4.89\times10^{-11}$ V²，与仿真的 $f\cdot\overline{v_i^2}/\Delta f$ 一致。$1/f$ 斜率一直延续到约 1 MHz，与 1.9 MHz 的转折频率（corner frequency）相符。
