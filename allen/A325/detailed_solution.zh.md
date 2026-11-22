# 详细步骤 - A325

输入极点为 $1/(R_NC_N)$，其中 $R_N$ 是求和节点（$R_1$、$R_2$ 与 $R_3$ 的连接点）对地的小信号电阻，$C_N$ 是该节点上的总电容。先由电流放大器的输入电阻和两个外接电阻求 $R_N$，再把接在该节点上的器件电容相加，最后与 $R_2$ 和 $C_o$ 形成的极点比较。

### 第 1 步 — 电流放大器的输入电阻

经 $R_3$ 流入的信号电流到达 M3 的漏极，该节点也是 M1 和 M2 的栅极。M1 像二极管连接器件一样承载这一电流，因此 M3 漏极节点看到约 $1/g_{m1}$。M3 的栅极就接在求和节点上，M3 随输入一起运动，本身不增加电阻。用饱和区跨导 $g_m=\sqrt{2K'(W/L)I_D}$：

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(200)(1\ \mathrm{mA})}=6.63\ \mathrm{mS},\qquad
r_i=R_3+\frac1{g_{m1}}=300\ \Omega+151\ \Omega=451\ \Omega .
$$

### 第 2 步 — 求和节点的总电阻

求输入极点时输入源视为对地短路，所以 $R_1$ 接地。$R_2$ 接到电流放大器的输出端，在输入极点频率处该处电容 $C_o$ 近似短路，所以 $R_2$ 也视为接地。M3 和 M5 的输出电阻（$\sim$ 数十 kΩ）并联后可以忽略。因此

$$
R_N=r_i\parallel R_1\parallel R_2=451\ \Omega\parallel3.2\ \mathrm{k\Omega}\parallel352\ \mathrm{k\Omega}\approx395\ \Omega .
$$

### 第 3 步 — 求和节点的电容

该节点连接 M3 和 M4 的栅极以及 M5 的漏极。饱和区中 $C_{gs}=CGSO\cdot W+\tfrac23C_{ox}WL$，$C_{gd}=CGDO\cdot W$；零偏置漏结电容为 $C_{bd}=CJ\cdot AD+CJSW\cdot PD$，其中 $AD=(2\ \mu\mathrm m)W$，$PD=2(W+2\ \mu\mathrm m)$。对 M3（$W=200\ \mu$m）：

$$
C_{gs3}=(220\ \mathrm{pF/m})(200\ \mu\mathrm m)+0.67(24.7\times10^{-4}\ \mathrm{F/m^2})(200\times10^{-12}\ \mathrm{m^2})=44+331=375\ \mathrm{fF}.
$$

对 p 沟道的 M5（$W=200\ \mu$m，$AD=400\times10^{-12}\ \mathrm{m^2}$，$PD=404\ \mu$m）：

$$
C_{bd5}=(560\ \mu\mathrm{F/m^2})(400\times10^{-12}\ \mathrm{m^2})+(350\ \mathrm{pF/m})(404\ \mu\mathrm m)=224+141=365\ \mathrm{fF}.
$$

其余各项用同样的公式计算（M4 的宽度是 M3 的十分之一）：

| 电容 | 数值（fF） |
|---|---|
| $C_{gs3}$ | 375 |
| $C_{gs4}$ | 37.5 |
| $C_{gd3}$ | 44 |
| $C_{gd4}$ | 4.4 |
| $C_{gd5}$ | 44 |
| $C_{bd5}$ | 365 |
| $C_N$ | ≈ 870 |

$C_{gs3}$ 和 M5 的漏结电容占主要部分。

### 第 4 步 — 输入极点

$$
p_{in}=-\frac1{R_NC_N}=-\frac1{(395\ \Omega)(870\ \mathrm{fF})}=-2.91\times10^9\ \mathrm{rad/s}\quad(463\ \mathrm{MHz}).
$$

若节点电阻只取 $r_i$，则 $|p_{in}|=1/[(451\ \Omega)(870\ \mathrm{fF})]=2.55\times10^9$ rad/s（406 MHz），下面的结论不变。

### 第 5 步 — 输出极点及比较

在电流放大器的输出端，$R_2$ 是与 $C_o$ 并联的主要电阻：

$$
\frac1{R_2C_o}=\frac1{(352\ \mathrm{k\Omega})(105\ \mathrm{fF})}=27.1\times10^6\ \mathrm{rad/s}.
$$

经 $R_2$ 的电流反馈闭合后，环路增益 $A_o$ 使其升高为

$$
|p_{out}|=\frac{1+A_o}{R_2C_o}=(1.1)(27.1\times10^6\ \mathrm{rad/s})=29.8\times10^6\ \mathrm{rad/s}\quad(4.7\ \mathrm{MHz}).
$$

因此 $|p_{in}|/|p_{out}|\approx2.91\times10^9/29.8\times10^6\approx100$：输出极点是主极点（dominant pole），输入极点远高于它，也比预期的 50 MHz 带宽高约 9 倍。但输入极点低于预期的 GB（500 MHz），若把放大器推向该目标，它会限制 GB。
