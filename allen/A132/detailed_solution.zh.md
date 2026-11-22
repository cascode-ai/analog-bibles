# 详细步骤 - A132

两管都由 $v_{in}$ 驱动且都饱和，所以每个管子都是向输出端馈送电流的跨导器，并各自并联一个输出电导。对输出节点列 KCL 得到增益；代入平方律的 $g_m$ 和 $g_{ds}=\lambda I_D$ 即得题给的闭式表达式。输入由理想源驱动，输出节点单独决定一个极点。

### 第 1 步 — 小信号模型与 KCL

M1（n 沟道，源极接地）的漏极电流 $g_{m1}v_{gs1}=g_{m1}v_{in}$ 从输出流向地。M2（p 沟道，源极接 $V_{DD}$，为交流地）有 $v_{sg2}=-v_{in}$，向输出端注入 $g_{m2}v_{sg2}=-g_{m2}v_{in}$，即同样取走 $g_{m2}v_{in}$。漏极电阻 $r_{ds1}$、$r_{ds2}$ 接在输出与交流地之间。对输出节点列 KCL：

$$
(g_{m1}+g_{m2})v_{in}+(g_{ds1}+g_{ds2})v_{out}=0
\quad\Rightarrow\quad
\frac{v_{out}}{v_{in}}=-\frac{g_{m1}+g_{m2}}{g_{ds1}+g_{ds2}} .
$$

### 第 2 步 — 用器件参数表示

两管电流同为 $I_D$。饱和区中 $g_{mi}=\sqrt{2K'_i(W_i/L_i)I_D}$，由因子 $(1+\lambda v_{DS})$ 得 $g_{dsi}\approx\lambda_iI_D$。代入得

$$
\frac{v_{out}}{v_{in}}=-\frac{\sqrt{2I_D}\left[\sqrt{K'_N(W_1/L_1)}+\sqrt{K'_P(W_2/L_2)}\right]}{(\lambda_1+\lambda_2)I_D}
=-\sqrt{\frac{2}{I_D}}\left[\frac{\sqrt{K'_N(W_1/L_1)}+\sqrt{K'_P(W_2/L_2)}}{\lambda_1+\lambda_2}\right],
$$

即所求表达式。增益按 $1/\sqrt{I_D}$ 下降。

### 第 3 步 — 增益数值

取 $W/L=5$、$I_D=200$ µA：

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(5)(200\ \mu\mathrm A)}=469.0\ \mu\mathrm S,\qquad
g_{m2}=\sqrt{2(50\ \mu\mathrm{A/V^2})(5)(200\ \mu\mathrm A)}=316.2\ \mu\mathrm S,
$$

$$
g_{ds1}+g_{ds2}=(0.04+0.05\ \mathrm{V^{-1}})(200\ \mu\mathrm A)=18\ \mu\mathrm S,
\qquad
A_v=-\frac{785.2\ \mu\mathrm S}{18\ \mu\mathrm S}=-43.6\ \mathrm{V/V}.
$$

输出电阻为 $1/(18\ \mu\mathrm S)=55.6$ kΩ。

### 第 4 步 — 输出电容与 −3 dB 频率

输入由理想源驱动，所以 $C_{gd1}$ 和 $C_{gd2}$（栅极接输入，漏极接输出）与 $C_{bd1}$、$C_{bd2}$、$C_L$ 一样，都算作从输出到交流固定节点的电容：

$$
C_{out}=C_{gd1}+C_{gd2}+C_{bd1}+C_{bd2}+C_L=5+5+50+50\ \mathrm{fF}+10\ \mathrm{pF}=10.11\ \mathrm{pF}.
$$

计入这些电容后对输出节点列 KCL，得

$$
\frac{v_{out}}{v_{in}}=-\frac{(g_{m1}+g_{m2})-s(C_{gd1}+C_{gd2})}{g_{ds1}+g_{ds2}+sC_{out}},
\qquad
f_{-3\,\mathrm{dB}}=\frac{g_{ds1}+g_{ds2}}{2\pi C_{out}}=\frac{18\ \mu\mathrm S}{2\pi(10.11\ \mathrm{pF})}=283\ \mathrm{kHz}.
$$

位于 $(g_{m1}+g_{m2})/[2\pi(C_{gd1}+C_{gd2})]=12.5$ GHz 的右半平面零点可以忽略。增益带宽积为 $43.6\times283\ \mathrm{kHz}\approx12.4$ MHz，即 $(g_{m1}+g_{m2})/(2\pi C_{out})$。
