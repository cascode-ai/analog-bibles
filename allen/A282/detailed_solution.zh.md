# 详细步骤 - A282

用两个高阻节点——第一级输出 $V_1$ 和输出 $V_{out}$——描述该运放，并对三种激励分别列节点方程：差模输入、$V_{DD}$ 上的纹波 $v_{dd}$、$V_{SS}$ 上的纹波 $v_{ss}$。三个传递函数的分母相同，因此在 PSRR 这一比值中运放极点相互抵消，只剩分子。分子的根就是草图的转折点。所有器件都饱和；$g_m=\sqrt{2K'(W/L)I_D}$，$g_{ds}=\lambda I_D$。

### 第 1 步 — 小信号参数

M1、M2 流过 15 µA（3/1），M6、M7 流过 95 µA（M6 为 94/1）：

$$
\begin{aligned}
g_{mI}&=g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(3)(15\ \mu\mathrm A)}=99.5\ \mu\mathrm S,\qquad
g_{mII}=g_{m6}=\sqrt{2(50\ \mu\mathrm{A/V^2})(94)(95\ \mu\mathrm A)}=945\ \mu\mathrm S,\\
G_I&=g_{ds2}+g_{ds4}=(0.04+0.05)(15\ \mu\mathrm A)=1.35\ \mu\mathrm S,\qquad
g_{ds6}=4.75\ \mu\mathrm S,\quad g_{ds7}=3.8\ \mu\mathrm S,\quad G_{II}=8.55\ \mu\mathrm S .
\end{aligned}
$$

因此 $A_v(0)=g_{mI}g_{mII}/(G_IG_{II})=8.1\times10^3$（78 dB），$GB=g_{mI}/C_c=33.2$ Mrad/s（5.3 MHz），$|p_2|=g_{mII}/C_L=94.5$ Mrad/s（15 MHz）。

### 第 2 步 — 差模增益

在差模输入 $v_{id}$ 下对 $V_1$ 和 $V_{out}$ 列 KCL：

$$
g_{mI}v_{id}+(G_I+sC_c)V_1-sC_cV_{out}=0,\qquad (g_{mII}-sC_c)V_1+(G_{II}+sC_c+sC_L)V_{out}=0,
$$
$$
A_v(s)=\frac{g_{mI}(g_{mII}-sC_c)}{D(s)},\qquad D(s)=G_IG_{II}+s[C_c(g_{mII}+G_I+G_{II})+C_LG_I]+s^2C_cC_L .
$$

### 第 3 步 — 从 $V_{DD}$ 到输出的增益与 PSRR⁺

M5 和 M7 的偏置 $V_{GS}$ 固定时，$V_{DD}$ 纹波通过两条途径进入。p 沟道电流镜 M3–M4 以 $V_{DD}$ 为参考，因此纹波经电导 $G_I$ 驱动节点 $V_1$；M6 的源极随 $V_{DD}$ 变化，因此 M6 向输出注入 $(g_{mII}+g_{ds6})v_{dd}$：

$$
G_Iv_{dd}=(G_I+sC_c)V_1-sC_cV_{out},\qquad (g_{mII}+g_{ds6})v_{dd}=(g_{mII}-sC_c)V_1+(G_{II}+sC_c+sC_L)V_{out},
$$
$$
A_{dd}(s)=\frac{G_Ig_{ds6}+sC_c(g_{mII}+g_{ds6}+G_I)}{D(s)} .
$$

两者相除，并利用 $g_{mII}\gg g_{ds6},G_I$：

$$
PSRR^+=\frac{A_v}{A_{dd}}\approx\frac{g_{mI}g_{mII}}{G_Ig_{ds6}}\cdot\frac{1-sC_c/g_{mII}}{1+s\,g_{mII}C_c/(G_Ig_{ds6})} .
$$

| 特征 | 表达式 | 数值 |
|---|---|---|
| 低频值 | $g_{mI}g_{mII}/(G_Ig_{ds6})$ | $1.47\times10^4$ (83 dB) |
| 极点 | $G_Ig_{ds6}/(g_{mII}C_c)$ | 2.26 krad/s (360 Hz) |
| 穿越 0 dB | 直流值 × 极点 $=g_{mI}/C_c$ | $GB$ = 5.3 MHz |
| 右半平面零点（斜率转折） | $g_{mII}/C_c$ | 315 Mrad/s (50 MHz) |
| 高频电平 | $g_{mI}/g_{mII}$ | −20 dB |

PSRR⁺ 在 360 Hz 就开始下降，因为 M6 的栅极经电流镜跟随 $V_{DD}$，而 $C_c$ 把该栅极直接耦合到输出；高于 50 MHz 时，电源增益甚至超过差模增益。

### 第 4 步 — 从 $V_{SS}$ 到输出的增益与 PSRR⁻

$V_{GS7}$ 固定时，$V_{SS}$ 纹波只经 $g_{ds7}$ 和 $C_{gd7}$ 到达输出；在这一两节点模型中节点 $V_1$ 没有直接注入：

$$
0=(G_I+sC_c)V_1-sC_cV_{out},\qquad (g_{ds7}+sC_{gd7})v_{ss}=(g_{mII}-sC_c)V_1+(G_{II}+sC_c+sC_L)V_{out},
$$
$$
A_{ss}(s)=\frac{(g_{ds7}+sC_{gd7})(G_I+sC_c)}{D(s)},\qquad
PSRR^-=\frac{g_{mI}g_{mII}}{G_Ig_{ds7}}\cdot\frac{1-sC_c/g_{mII}}{(1+sC_c/G_I)(1+sC_{gd7}/g_{ds7})} .
$$

（$D$ 中把 $C_{gd7}$ 加到 $C_L$ 上，影响可忽略。）

| 特征 | 表达式 | 数值 |
|---|---|---|
| 低频值 | $g_{mI}g_{mII}/(G_Ig_{ds7})$ | $1.83\times10^4$ (85 dB) |
| 极点 | $G_I/C_c$ | $4.5\times10^5$ rad/s (72 kHz) |
| $GB$ 处 | — | 48 dB |
| 右半平面零点（斜率转折） | $g_{mII}/C_c$ | 50 MHz |
| 极点 | $g_{ds7}/C_{gd7}$ | $3.8\times10^8$ rad/s (60 MHz) |

在 50 MHz 与 60 MHz 之间曲线平坦（约 28 dB）；高于 60 MHz 后再次以 −20 dB/十倍频程下降（1 GHz 处约 4 dB）。

### 第 5 步 — 草图

![PSRR+ 与 PSRR− 从 10 Hz 到 10 GHz 的伯德幅频图：PSRR+ 为 83 dB，在 360 Hz 有极点，在 GB 处为 0 dB，高于 50 MHz 后趋于约 −20 dB；PSRR− 为 85 dB，在 72 kHz 有极点，在 GB 处为 48 dB，在 50–60 MHz 间平坦，此后下降](/q/A282/solution-curves.zh.svg)

高于几百赫兹时，PSRR⁻ 远好于 PSRR⁺。

有两点说明限定了这一结果。第一，教材常把运放接成单位增益跟随器来测量 PSRR，得到 $(1+A_v)/A_{supply}$；在 $GB$ 以下它等于上面的比值，但在 $GB$ 以上其分子含有跟随器在 $GB$ 和 $|p_2|$ 附近的闭环极点，因此这种测量使 PSRR⁺ 在约 15 MHz 以下一直接近 0 dB，PSRR⁻ 则在约 48 dB 处趋平；这种高频形状属于跟随器测试，而不属于本题定义的比值。第二，两节点模型忽略了尾电流管 M5：其 $g_{ds5}$ 也注入 $V_{SS}$ 纹波，在这一按比例匹配的设计中该路径几乎抵消 $g_{ds7}$ 的注入，因此完整分析给出高得多的低频 PSRR⁻（约 100–120 dB 量级）；在约 70 kHz 以上，曲线与图示基本一致。
