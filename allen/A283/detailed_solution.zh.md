# 详细步骤 - A283

先求偏置电流，再求小信号参数，然后由两节点模型（第一级输出 $V_1$、输出 $V_{out}$）求电源到输出的增益。PSRR 按教材的测量方式计算：运放接成单位增益跟随器，输入接地，于是 $PSRR=v_{supply}/v_{out}=(1+A_v)/A_{supply}$。按题意，M5 和 M7 的偏置 $V_{GS}$ 相对 $V_{SS}$ 保持固定。所有器件都饱和；$g_m=\sqrt{2K'(W/L)I_D}$，$g_{ds}=\lambda I_D$。

### 第 1 步 — 偏置电流

二极管连接的 M9（p，1/1）和 M8（n，1/1）分享 3 V 电源并流过相同电流：

$$
0.7+\sqrt{\frac{2I_8}{50\ \mu\mathrm{A/V^2}}}+0.7+\sqrt{\frac{2I_8}{110\ \mu\mathrm{A/V^2}}}=3\ \mathrm V
\;\Rightarrow\;
\left(0.200+0.135\right)\sqrt{I_8/\mu\mathrm A}=1.6\;\Rightarrow\;I_8=22.8\ \mu\mathrm A .
$$

M5（2/1）和 M7（10/1）镜像 M8：$I_5=2I_8=45.7$ µA，$I_7=I_6=10I_8=228$ µA。

### 第 2 步 — 小信号参数

$$
\begin{aligned}
g_{mI}&=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(22.8\ \mu\mathrm A)}=224\ \mu\mathrm S,\qquad
g_{mII}=\sqrt{2(50\ \mu\mathrm{A/V^2})(100)(228\ \mu\mathrm A)}=1.51\ \mathrm{mS},\\
G_I&=(0.04+0.05)(22.8\ \mu\mathrm A)=2.06\ \mu\mathrm S,\qquad g_{ds6}=11.4\ \mu\mathrm S,\qquad g_{ds7}=9.13\ \mu\mathrm S,
\end{aligned}
$$

且 $C_{gd7}=C_{GDO}W_7=(220\ \mathrm{pF/m})(10\ \mu\mathrm m)=2.2$ fF，$A_v(0)=g_{mI}g_{mII}/[G_I(g_{ds6}+g_{ds7})]=8.0\times10^3$。

### 第 3 步 — 电源增益与跟随器 PSRR

对 $V_1$ 和 $V_{out}$ 列 KCL（与任何带密勒电容 $C_c$ 的两级运放相同），得到公共分母
$D(s)=G_IG_{II}+s[C_c(g_{mII}+G_I+G_{II})+C_LG_I]+s^2C_cC_L$，以及

$$
A_v=\frac{g_{mI}(g_{mII}-sC_c)}{D},\qquad
A_{dd}=\frac{G_Ig_{ds6}+sC_c(g_{mII}+g_{ds6}+G_I)}{D},\qquad
A_{ss}=\frac{(g_{ds7}+sC_{gd7})(G_I+sC_c)}{D}.
$$

$V_{DD}$ 纹波经电流镜（在 $V_1$ 处的电导 $G_I$）和 M6 的源极（$g_{mII}+g_{ds6}$）进入；$V_{SS}$ 纹波在 $V_{GS7}$ 固定时只经 $g_{ds7}$ 和 $C_{gd7}$ 进入。在跟随器中 $v_{out}=A_{supply}v_{supply}-A_vv_{out}$，因此

$$
PSRR=\frac{1+A_v}{A_{supply}},\qquad D+g_{mI}(g_{mII}-sC_c)\approx g_{mI}g_{mII}\left(1+\frac{sC_c}{g_{mI}}\right)\left(1+\frac{sC_L}{g_{mII}}\right).
$$

这两个因子是跟随器在 $GB$ 和 $|p_2|$ 附近的闭环极点，它们成为 PSRR 的零点。

### 第 4 步 — PSRR⁺

$$
PSRR^+=\frac{g_{mI}g_{mII}}{G_Ig_{ds6}}\cdot\frac{(1+sC_c/g_{mI})(1+sC_L/g_{mII})}{1+s\,g_{mII}C_c/(G_Ig_{ds6})}
$$

| 项目 | 表达式 | 数值 |
|---|---|---|
| PSRR⁺(0) | $g_{mI}g_{mII}/(G_Ig_{ds6})$ | $1.44\times10^4$ (83 dB) |
| 零点 | $-g_{mI}/C_c$ | $-4.48\times10^7$ rad/s (−7.1 MHz) |
| 零点 | $-g_{mII}/C_L$ | $-7.55\times10^7$ rad/s (−12.0 MHz) |
| 极点 | $-G_Ig_{ds6}/(g_{mII}C_c)$ | $-3.1\times10^3$ rad/s (−494 Hz) |

### 第 5 步 — PSRR⁻

$$
PSRR^-=\frac{g_{mI}g_{mII}}{G_Ig_{ds7}}\cdot\frac{(1+sC_c/g_{mI})(1+sC_L/g_{mII})}{(1+sC_c/G_I)(1+sC_{gd7}/g_{ds7})}
$$

| 项目 | 表达式 | 数值 |
|---|---|---|
| PSRR⁻(0) | $g_{mI}g_{mII}/(G_Ig_{ds7})$ | $1.80\times10^4$ (85 dB) |
| 零点 | $-g_{mI}/C_c$，$-g_{mII}/C_L$ | −7.1 MHz，−12.0 MHz |
| 极点 | $-G_I/C_c$ | $-4.1\times10^5$ rad/s (−65 kHz) |
| 极点 | $-g_{ds7}/C_{gd7}$ | $-4.1\times10^9$ rad/s（≈ −660 MHz，可忽略） |

### 第 6 步 — 关于定义与模型的说明

精确求解时，两个零点构成一对复数根，即 $s^2C_cC_L+sC_c(g_{mII}-g_{mI})+g_{mI}g_{mII}=0$ 的根：$(-3.2\pm j4.9)\times10^7$ rad/s，模为 $\sqrt{g_{mI}g_{mII}/(C_cC_L)}=5.8\times10^7$ rad/s。若把 PSRR 定义为开环比值 $A_v/A_{supply}$，公共分母相消，这两个零点被 $A_v$ 位于 $+g_{mII}/C_c=+3.0\times10^8$ rad/s（+48 MHz）的右半平面零点代替；低频值和极点不变。

该模型忽略了尾电流管 M5。其 $g_{ds5}$ 同样注入 $V_{SS}$ 纹波，经第一级和 M6 传到输出，与 $g_{ds7}$ 路径方向相反；在这一按比例匹配的设计中两者几乎抵消，因此完整分析给出大得多的 PSRR⁻(0)（≈ 110–125 dB），其极点下移到 kHz 范围，而几百千赫以上的曲线不变。
