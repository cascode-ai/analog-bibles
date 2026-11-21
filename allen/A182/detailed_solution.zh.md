# 详细步骤 - A182

输出支路是一个共源共栅放大器（输入管 M1，共源共栅管 M2），负载为共源共栅电流源（M4 加共源共栅管 M3）。因此输出端两侧都是共源共栅结构，$R_{out}$ 是两个 $g_mr_{ds}^2$ 型电阻的并联；$g_{m1}v_{in}$ 几乎全部送到输出端，故 $A_v\approx-g_{m1}R_{out}$。

### 第 1 步 — 偏置与小信号参数

100 µA 基准电流流过二极管连接的 M8 和 M7，它们设定 M4 和 M3 的栅压；尺寸相同时输出支路 M4–M3–M2–M1 流过 $I_D=100\ \mu$A，M1 的栅压与之相匹配。由另一个 100 µA 电流源供电的 M5、M6 为共源共栅管 M2 的栅极提供偏置。取 $W/L=10$，$g_m=\sqrt{2K'(W/L)I_D}$，$r_{ds}=1/(\lambda I_D)$：

$$
\begin{aligned}
g_{m1}=g_{m2}&=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(100\ \mu\mathrm A)}=469\ \mu\mathrm S,& r_{ds1}=r_{ds2}&=250\ \mathrm{k\Omega},\\
g_{m3}=g_{m4}&=\sqrt{2(50\ \mu\mathrm{A/V^2})(10)(100\ \mu\mathrm A)}=316\ \mu\mathrm S,& r_{ds3}=r_{ds4}&=200\ \mathrm{k\Omega}.
\end{aligned}
$$

### 第 2 步 — 输出电阻

向上看进 M3 的漏极，M3 是以 $r_{ds4}$ 作源极负反馈的共栅器件；向下看进 M2 的漏极，M2 以 $r_{ds1}$ 作源极负反馈。利用 $R=r_{ds,cas}+R_S+g_mr_{ds,cas}R_S\approx g_mr_{ds,cas}R_S$：

$$
\begin{aligned}
R_{up}&\approx g_{m3}r_{ds3}r_{ds4}=(316\ \mu\mathrm S)(200\ \mathrm{k\Omega})(200\ \mathrm{k\Omega})=12.6\ \mathrm{M\Omega},\\
R_{dn}&\approx g_{m2}r_{ds2}r_{ds1}=(469\ \mu\mathrm S)(250\ \mathrm{k\Omega})(250\ \mathrm{k\Omega})=29.3\ \mathrm{M\Omega},
\end{aligned}
$$

$$
R_{out}=R_{up}\parallel R_{dn}=12.6\ \mathrm{M\Omega}\parallel29.3\ \mathrm{M\Omega}=8.84\ \mathrm{M\Omega}.
$$

保留 $r_{ds3}+r_{ds4}$ 和 $r_{ds1}+r_{ds2}$ 项，得 $13.0$ MΩ 和 $29.8$ MΩ，故 $R_{out}=9.08$ MΩ。

### 第 3 步 — 电压增益

共源共栅管 M2 把 M1 的漏极电流 $g_{m1}v_{in}$ 几乎不变地传到输出端（M1 漏极处的电阻 $\approx1/g_{m2}$，远小于 $r_{ds1}$），因此

$$
A_v=\frac{v_{out}}{v_{in}}\approx-g_{m1}R_{out}=-(469\ \mu\mathrm S)(8.84\ \mathrm{M\Omega})=-4.1\times10^3\ \mathrm{V/V}.
$$

采用更精确的 $R_{out}=9.08$ MΩ，增益为 $-4.3\times10^3$；完整的节点分析给出约 $-4.2\times10^3$ V/V。因此 $R_{out}\approx8.8$–9.1 MΩ，$A_v\approx-4.1\times10^3$ V/V。
