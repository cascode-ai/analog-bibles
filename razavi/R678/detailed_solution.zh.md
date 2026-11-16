# 详细步骤 - R678

**思路。** 该电路是一个共源级，在 $\lambda = 0$ 时其增益为 $-g_mR_D$。唯一的新内容是完全速度饱和晶体管的跨导（transconductance），它由 $I_D = (\text{charge per unit length})\times v_{sat}$ 导出。

### 第 1 步 — 完全速度饱和下的漏极电流

漏极电流等于单位长度的可动电荷乘以载流子速度。可动电荷 $Q_d = WC_{ox}(V_{GS} - V_{TH})$ 由栅极过驱动电压（overdrive voltage）决定；在完全速度饱和下，整个沟道中的载流子速度都是 $v_{sat}$（硅中电子约为 $10^7$ cm/s）：

$$I_D = Q_d\,v_{sat} = WC_{ox}\,v_{sat}\,(V_{GS} - V_{TH}).$$

电流是过驱动电压的**线性**函数，且与 $L$ 无关：速度固定时，更长的沟道并不会使载流子进一步减速，因此只有感应电荷起作用。

### 第 2 步 — 跨导

$V_{TH}$ 为常数（$\gamma = 0$，源极接地）：

$$g_m = \frac{\partial I_D}{\partial V_{GS}} = WC_{ox}\,v_{sat},$$

它与偏置电流、过驱动电压和 $L$ 都无关。只有 $W$（以及 $C_{ox}$）能使它增大。

### 第 3 步 — 共源级的小信号增益

$V_{DD}$ 为交流地，$v_{gs} = v_{in}$，没有 $r_O$（$\lambda = 0$），也没有体效应（body effect），从输出节点抽取的电流 $g_mv_{in}$ 流过 $R_D$：

$$
\begin{aligned}
\frac{0 - v_{out}}{R_D} &= g_mv_{in}\\
A_v = \frac{v_{out}}{v_{in}} &= -g_mR_D .
\end{aligned}
$$

### 第 4 步 — 合并结果

$$A_v = -WC_{ox}\,v_{sat}\,R_D .$$

**数值示例。** 取 $W = 10\ \mu$m，$t_{ox} = 4$ nm，$R_D = 1\ \mathrm{k}\Omega$：

$$
\begin{aligned}
C_{ox} &= \frac{\epsilon_{ox}}{t_{ox}} = \frac{3.9\times8.854\times10^{-12}\ \mathrm{F/m}}{4\times10^{-9}\ \mathrm{m}} = 8.63\times10^{-3}\ \mathrm{F/m^2},\\
g_m &= WC_{ox}v_{sat} = (10^{-5}\ \mathrm{m})(8.63\times10^{-3}\ \mathrm{F/m^2})(10^5\ \mathrm{m/s}) = 8.63\ \mathrm{mS},\\
A_v &= -g_mR_D = -(8.63\ \mathrm{mS})(1\ \mathrm{k}\Omega) = -8.6 .
\end{aligned}
$$

对于长沟道器件，$A_v = -\sqrt{2\mu_nC_{ox}(W/L)I_D}\,R_D$ 可以通过增大偏置电流或缩短 $L$ 来提高；而在完全速度饱和下，这两种办法都不起作用，增益只取决于 $W$、$C_{ox}$、$v_{sat}$ 和 $R_D$。

### 结果

$$A_v = -g_mR_D = -WC_{ox}\,v_{sat}\,R_D,$$

因为完全速度饱和给出 $I_D = WC_{ox}v_{sat}(V_{GS} - V_{TH})$，从而 $g_m = WC_{ox}v_{sat}$，与 $L$ 和偏置电流无关。

**常见错误。** 使用平方律跨导 $\sqrt{2\mu_nC_{ox}(W/L)I_D}$ 或 $2I_D/(V_{GS} - V_{TH})$。在速度饱和下，电流是过驱动电压的线性函数，因此 $g_m = I_D/(V_{GS} - V_{TH}) = WC_{ox}v_{sat}$。

**常见错误。** 在速度饱和电流中加入因子 $\tfrac12$ 或 $1/L$。它就是单位长度电荷乘以速度：$WC_{ox}(V_{GS} - V_{TH})\cdot v_{sat}$。
