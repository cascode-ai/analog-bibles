# 详细步骤 - A382

延迟指标确定两个极点的乘积。把它平均分给两级：输出级电流由 $C_{II}$ 决定，第一级电流由 $C_I$ 决定，而该电容须先估计、事后核验。输出摆幅决定 M6 和 M7 的尺寸，输入共模范围决定 M3 和 M5，分辨率所需的增益决定 M1–M2。所有沟道长度都是 1 µm，因此 $W/L$ 在数值上等于以 µm 计的宽度。

### 第 1 步 — 由传播延迟得到的极点要求

两级输出端的极点分别为 $p_I=g_I/C_I$、$p_{II}=g_{II}/C_{II}$，对输入阶跃 $V_{in}$ 的响应为

$$
v_{out}(t)=A_v(0)V_{in}\left[1-\frac{p_{II}e^{-p_It}-p_Ie^{-p_{II}t}}{p_{II}-p_I}\right]
\approx A_v(0)V_{in}\,\frac{p_Ip_{II}t^2}{2}\quad(t\ll1/p_I,\,1/p_{II}).
$$

输出移动了半个摆幅 $(V_{OH}-V_{OL})/2=A_v(0)V_{in}(\min)/2$ 时即越过中点，其中 $A_v(0)=(V_{OH}-V_{OL})/V_{in}(\min)$ 是恰好能分辨 $V_{in}(\min)$ 的增益。取 $V_{in}=kV_{in}(\min)$ 并用抛物线近似：

$$
kV_{in}(\min)\frac{p_Ip_{II}t_p^2}{2}=\frac{V_{in}(\min)}{2}
\quad\Rightarrow\quad t_p=\frac1{\sqrt{k\,p_Ip_{II}}} .
$$

对 $t_p=25$ ns、$k=10$ 且两极点相等：

$$
p_I=p_{II}=\frac1{t_p\sqrt k}=\frac1{(25\ \mathrm{ns})\sqrt{10}}=1.265\times10^7\ \mathrm{rad/s}.
$$

### 第 2 步 — 输出级：$I_7$、M6 与 M7

输出电导为 $g_{II}=g_{ds6}+g_{ds7}=(\lambda_N+\lambda_P)I_7$，故

$$
I_7=\frac{p_{II}C_{II}}{\lambda_N+\lambda_P}=\frac{(1.265\times10^7\ \mathrm{s^{-1}})(5\ \mathrm{pF})}{0.09\ \mathrm{V^{-1}}}=703\ \mu\mathrm A\ \rightarrow\ I_6=I_7=750\ \mu\mathrm A .
$$

向上取整为极点留出裕量。摆幅限制确定饱和电压：$V_{SD6}(\mathrm{sat})=V_{DD}-V_{OH}=0.5$ V，$V_{DS7}(\mathrm{sat})=V_{OL}-V_{SS}=0.5$ V。由 $I_D=\tfrac12K'(W/L)V_{DS}(\mathrm{sat})^2$：

$$
\left(\frac WL\right)_6=\frac{2(750\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(0.5\ \mathrm V)^2}=120,\qquad
\left(\frac WL\right)_7=\frac{2(750\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(0.5\ \mathrm V)^2}=54.5\rightarrow55 .
$$

### 第 3 步 — 由 $C_I$ 的估计值求第一级电流

第一级输出电导为 $g_I=g_{ds2}+g_{ds4}=(\lambda_N+\lambda_P)I_5/2$，两极点相等要求 $I_5=2I_7C_I/C_{II}$。$C_I$ 主要来自大尺寸 M6 的栅极。每 µm 宽度的 $C_{ox}WL=(24.7\times10^{-4}\ \mathrm{F/m^2})(1\ \mu\mathrm m^2)=2.47$ fF：

$$
C_{gs6}=\tfrac23C_{ox}W_6L+C_{GSO}W_6=\tfrac23(120)(2.47\ \mathrm{fF})+(220\ \mathrm{pF/m})(120\ \mu\mathrm m)=198+26=224\ \mathrm{fF},
$$

再加上漏区结电容（junction capacitance），$C_I\approx0.3$ pF。于是

$$
I_5=\frac{2(750\ \mu\mathrm A)(0.3\ \mathrm{pF})}{5\ \mathrm{pF}}=90\ \mu\mathrm A\ \rightarrow\ 100\ \mu\mathrm A .
$$

### 第 4 步 — 由共模上限确定 M3–M4

在 $V_{icm}^+=2$ V 时，M1 保持饱和要求其漏极电压 $V_{DD}-V_{SG3}$ 不低于 $V_{icm}^+-V_{TN}$，故

$$
V_{SG3}\le V_{DD}-V_{icm}^++V_{TN}=2.5-2+0.7=1.2\ \mathrm V,
$$
$$
\left(\frac WL\right)_3=\left(\frac WL\right)_4=\frac{2(I_5/2)}{K'_P(V_{SG3}-|V_{TP}|)^2}=\frac{100\ \mu\mathrm A}{(50\ \mu\mathrm{A/V^2})(0.5\ \mathrm V)^2}=8 .
$$

### 第 5 步 — 由增益要求确定 M1–M2

比较器须把 $V_{in}(\min)=1$ mV 放大到满摆幅，故 $A_v(0)=(2-(-2))\ \mathrm V/1\ \mathrm{mV}=4000$。两级增益为

$$
A_v(0)=\frac{g_{m1}}{g_{ds2}+g_{ds4}}\cdot\frac{g_{m6}}{g_{ds6}+g_{ds7}},
$$

其中 $g_{ds2}+g_{ds4}=(0.09\ \mathrm{V^{-1}})(50\ \mu\mathrm A)=4.5\ \mu$S，$g_{ds6}+g_{ds7}=(0.09\ \mathrm{V^{-1}})(750\ \mu\mathrm A)=67.5\ \mu$S，$g_{m6}=\sqrt{2K'_P(W/L)_6I_6}=\sqrt{2(50)(120)(750)}\ \mu\mathrm S=3.0$ mS。因此

$$
g_{m1}=\frac{A_v(0)(4.5\ \mu\mathrm S)(67.5\ \mu\mathrm S)}{3.0\ \mathrm{mS}}=405\ \mu\mathrm S,\qquad
\left(\frac WL\right)_1=\frac{g_{m1}^2}{2K'_N(I_5/2)}=\frac{(405\ \mu\mathrm S)^2}{(110\ \mu\mathrm{A/V^2})(100\ \mu\mathrm A)}=14.9\rightarrow15 .
$$

取 $(W/L)_1=15$ 时，$g_{m1}=406\ \mu$S，$A_v(0)=(90.3)(44.4)=4012$。

### 第 6 步 — 由共模下限确定 M5

在 $V_{icm}^-=-1.25$ V 时，尾节点电压为 $V_{icm}^--V_{GS1}$，其中 $V_{GS1}=V_{TN}+\sqrt{2(50\ \mu\mathrm A)/((110\ \mu\mathrm{A/V^2})(15))}=0.946$ V。M5 须保持饱和：

$$
V_{DS5}(\mathrm{sat})=V_{icm}^--V_{GS1}-V_{SS}=-1.25-0.946+2.5=0.304\ \mathrm V,
$$
$$
\left(\frac WL\right)_5=\frac{2I_5}{K'_NV_{DS5}(\mathrm{sat})^2}=\frac{2(100\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(0.304\ \mathrm V)^2}=19.7\rightarrow20 .
$$

M5 与 M7 所需栅压不同（$V_{ov5}=0.30$ V，$V_{ov7}=0.5$ V），因此各自由独立的二极管连接（diode-connected）基准管偏置。

### 第 7 步 — 核验 $C_I$ 与延迟

第一级输出端电容，结电容按零偏置、漏区 $W\times3\ \mu$m 计（面积 $3W$，周长 $2W+6\ \mu$m）：

| 分量 | 表达式 | 数值 |
|---|---|---|
| $C_{gd2}$ | $C_{GDO}W_2$ | 3.3 fF |
| $C_{gd4}$ | $C_{GDO}W_4$ | 1.8 fF |
| $C_{gs6}$ | $\tfrac23C_{ox}W_6L+C_{GSO}W_6$ | 224 fF |
| $C_{bd2}$ | $(770\ \mu\mathrm{F/m^2})(45\ \mu\mathrm m^2)+(380\ \mathrm{pF/m})(36\ \mu\mathrm m)$ | 48.3 fF |
| $C_{bd4}$ | $(560\ \mu\mathrm{F/m^2})(24\ \mu\mathrm m^2)+(350\ \mathrm{pF/m})(22\ \mu\mathrm m)$ | 21.1 fF |
| $C_I$ | 合计 | 0.299 pF |

与 0.3 pF 的假设一致。两极点为

$$
p_I=\frac{4.5\ \mu\mathrm S}{0.299\ \mathrm{pF}}=1.51\times10^7\ \mathrm{rad/s},\qquad
p_{II}=\frac{67.5\ \mu\mathrm S}{5\ \mathrm{pF}}=1.35\times10^7\ \mathrm{rad/s},
$$
$$
t_p=\frac1{\sqrt{10(1.51\times10^7)(1.35\times10^7)}}=22.2\ \mathrm{ns}.
$$

抛物线略微高估了早期响应；用第 1 步的精确两极点表达式求解 $1-(\ldots)=1/(2k)=0.05$，得 $t_p=24.9$ ns，仍在 25 ns 以内。

| 器件 | M1、M2 | M3、M4 | M5 | M6 | M7 |
|---|---|---|---|---|---|
| $W/L$（µm/µm） | 15/1 | 8/1 | 20/1 | 120/1 | 55/1 |
| 电流 | 各 50 µA | 各 50 µA | $I_5=100$ µA | 750 µA | $I_7=750$ µA |

两极点模型把两级看作相互独立。$C_I$ 表中未计入的 $C_{gd6}=C_{GDO}W_6=26.4$ fF 实际上跨接在两级输出之间，跨越的第二级增益为 44。这一密勒耦合使极点分裂（pole splitting）到约 $2.5\times10^6$ 与 $7.3\times10^7$ rad/s，使精确的线性延迟增大到约 33 ns；含全部器件电容的 level-1 ngspice 阶跃响应给出 30 ns。因此在实际芯片中，该设计需要超出所规定两极点计算的额外裕量，例如增大电流。
