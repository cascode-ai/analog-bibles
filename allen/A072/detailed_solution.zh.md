# 详细步骤 - A072

从 [图 2] 读出所需的响应，认识到电路是由开关电阻与负载电容构成的 RC 低通，求出使极点位于所需转折频率的电阻，再确定 M1 的尺寸，使其在工作点处提供该电阻。

### 第 1 步 — 所需响应

[图 2] 中，20 MHz 以下为 0 dB，之后斜率为每倍频程 −6 dB（40 MHz 处 −6 dB，80 MHz 处 −12 dB），即 −20 dB/十倍频程。这是一个位于 $f_p=20$ MHz、直流增益为 1 的单实极点。

### 第 2 步 — 电路即 RC 低通

M1 没有寄生电容，电容不取直流电流，因此 M1 中没有电流，沟道两端都在 $V_{DC}=3$ V：$V_{DS}=0$，M1 处于非饱和区。$V_{DS}=0$ 时 $g_m$ 和 $g_{mbs}$ 与 $V_{DS}$ 成正比而为零，其小信号模型是电阻 $r_{ON}=1/[K'(W/L)(V_{GS}-V_T)]$。$C=2$ pF 从 $v_{out}$ 接地，因此

$$
\frac{v_{out}}{v_{in}}=\frac{1}{1+s\,r_{ON}C},\qquad f_p=\frac{1}{2\pi r_{ON}C}.
$$

令 $f_p=20$ MHz：

$$
r_{ON}=\frac{1}{2\pi(20\ \mathrm{MHz})(2\ \mathrm{pF})}=3.98\ \mathrm{k\Omega}.
$$

### 第 3 步 — 工作点处的阈值

$V_{GS}=5\ \mathrm V-3\ \mathrm V=2$ V，$V_{SB}=3$ V，体效应显著：

$$
V_T=0.7\ \mathrm V+0.4\ \mathrm{V^{1/2}}\big(\sqrt{3.7\ \mathrm V}-\sqrt{0.7\ \mathrm V}\big)=1.135\ \mathrm V,\qquad V_{GS}-V_T=0.865\ \mathrm V .
$$

### 第 4 步 — M1 的尺寸

$$
\frac WL=\frac{1}{K'(V_{GS}-V_T)\,r_{ON}}=\frac{1}{(110\ \mu\mathrm{A/V^2})(0.865\ \mathrm V)(3.98\ \mathrm{k\Omega})}=2.64 ,
$$

例如 $W=2.64\ \mu$m、$L=1\ \mu$m。校验：$r_{ON}=1/[(110\ \mu\mathrm{A/V^2})(2.64)(0.865\ \mathrm V)]=3.98\ \mathrm{k\Omega}$，$1/(2\pi\cdot3.98\ \mathrm{k\Omega}\cdot2\ \mathrm{pF})=20$ MHz。若不计体效应（$V_T=0.7$ V），设计结果为 $W/L=1.76$，实际转折频率将偏低。
