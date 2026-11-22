# 详细步骤 - A269

输入对管尺寸固定（2/2），因此 $g_{m1}$ 由加倍后的尾电流决定，并通过 GB 指标确定 $C_c$。增益指标给出 $g_{m6}$ 的最小值；M3/M4 与 M6 一起确定尺寸，使 $V_{SG6}=V_{SG4}$（无系统失调（systematic offset）），M5 和 M7 是 M8 基准电流的镜像比例。所有器件工作在饱和区（saturation region），$i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2$，$S=W/L$，$g_{ds}=\lambda I_D$，L = 2 µm 时 $\lambda=0.01\ \mathrm{V^{-1}}$。

### 第 1 步 — 输入跨导和 $C_c$

每个输入管流过 $I_5/2=50$ µA：

$$
g_{m1}=\sqrt{2K'_NS_1I_1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(1)(50\ \mu\mathrm A)}=104.9\ \mu\mathrm S .
$$

密勒补偿运放的 $GB=g_{m1}/C_c$（rad/s），对 1 MHz：

$$
C_c=\frac{g_{m1}}{2\pi(10^6\ \mathrm{Hz})}=\frac{104.9\ \mu\mathrm S}{6.283\times10^6\ \mathrm{s^{-1}}}=16.7\ \mathrm{pF}.
$$

### 第 2 步 — 第二级所需跨导

低频增益是两级增益之积，每级为 $g_m$ 除以该节点输出电导之和：

$$
A_v=\frac{g_{m1}g_{m6}}{(g_{ds2}+g_{ds4})(g_{ds6}+g_{ds7})},\qquad
\begin{aligned}
g_{ds2}+g_{ds4}&=(0.01+0.01)(50\ \mu\mathrm A)=1\ \mu\mathrm S,\\
g_{ds6}+g_{ds7}&=(0.01+0.01)(200\ \mu\mathrm A)=4\ \mu\mathrm S.
\end{aligned}
$$

$A_v\ge5000$ 要求

$$
g_{m6}\ge\frac{5000(1\ \mu\mathrm S)(4\ \mu\mathrm S)}{104.9\ \mu\mathrm S}=191\ \mu\mathrm S .
$$

### 第 3 步 — 镜像负载 M3、M4 和输出管 M6

差模输入为零时 $V_{SG6}=V_{SD4}=V_{SG4}$。要使 M6 在该栅压下恰好流过 $I_7$，M6 与 M4 的电流密度必须相等，$S_6/S_4=I_6/I_4=200/50=4$。取 $W_3=W_4=4$ µm，$L_3=L_4=2$ µm（$S_4=2$）：

$$
V_{SG3}=|V_{TP}|+\sqrt{\frac{2I_3}{K'_PS_3}}=0.7\ \mathrm V+\sqrt{\frac{2(50\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(2)}}=1.7\ \mathrm V,
$$
$$
S_6=4S_4=8\ (16/2),\qquad
g_{m6}=\sqrt{2K'_PS_6I_6}=\sqrt{2(50\ \mu\mathrm{A/V^2})(8)(200\ \mu\mathrm A)}=400\ \mu\mathrm S .
$$

该值大于 191 µS，因此

$$
A_v=\frac{(104.9\ \mu\mathrm S)(400\ \mu\mathrm S)}{(1\ \mu\mathrm S)(4\ \mu\mathrm S)}=1.05\times10^4\ge5000 .
$$

要把增益降到恰好 5000 需要 $S_4<1$（L > 2 µm），所以最小尺寸方案以下限方式满足指标。

### 第 4 步 — 偏置支路和尾电流管 M5

取 M8 = 4/2（$S_8=2$）。$R_B$ 承受其余电源电压并流过 M8 的电流：

$$
I_8=\frac{V_{DD}-V_{SS}-V_{GS8}}{R_B},\quad V_{GS8}=V_{TN}+\sqrt{\frac{2I_8}{K'_NS_8}}
\;\Rightarrow\; I_8=37.2\ \mu\mathrm A,\quad V_{GS8}=1.28\ \mathrm V .
$$

M5、M7 与 M8 共用 $V_{GS8}$，宽长比与电流成正比：

$$
S_5=S_8\frac{I_5}{I_8}=2\cdot\frac{100\ \mu\mathrm A}{37.2\ \mu\mathrm A}=5.38\ (W_5\approx10.8\ \mu\mathrm m,\ L_5=2\ \mu\mathrm m),\qquad
S_7=2\cdot\frac{200\ \mu\mathrm A}{37.2\ \mu\mathrm A}=10.8\ (\approx21.5/2).
$$

| 器件 | M1、M2 | M3、M4 | M5 | M6 | M7 | M8 |
|---|---|---|---|---|---|---|
| W/L (µm/µm) | 2/2 | 4/2 | 10.8/2 | 16/2 | 21.5/2 | 4/2 |
| $I_D$ (µA) | 50 | 50 | 100 | 200 | 200 | 37.2 |

### 第 5 步 — 输入共模为零时的饱和校核

两栅极都接 0 V 时，公共源极位于 $-V_{GS1}$：

$$
V_{GS1}=0.7+\sqrt{\frac{2(50\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(1)}}=1.65\ \mathrm V,\qquad
V_{DS5}=-1.65-(-2.5)=0.85\ \mathrm V>V_{DS5,\mathrm{sat}}=0.58\ \mathrm V .
$$

M1 漏极位于 $V_{DD}-V_{SG3}=0.8$ V，故 $V_{DS1}=2.45$ V，大于 $V_{GS1}-V_{TN}=0.95$ V。M3、M4 和 M8 为二极管连接（或与之平衡），处于饱和。输出可从 $V_{SS}+V_{DS7,\mathrm{sat}}=-2.5+0.58=-1.92$ V 摆到 $V_{DD}-V_{SD6,\mathrm{sat}}=2.5-1.0=1.5$ V，M6 和 M7 保持饱和。

### 第 6 步 — 调零电阻

补偿支路的零点位于 $z=1/[C_c(1/g_{m6}-R_z)]$；取

$$
R_z=\frac1{g_{m6}}=\frac1{400\ \mu\mathrm S}=2.5\ \mathrm{k\Omega}
$$

可把零点移到无穷远，消除右半平面零点的影响。

### 第 7 步 — 负载电容和压摆率

无零点时 $\Phi_M=90^\circ-\arctan(GB/|p_2|)$，$|p_2|\approx g_{m6}/C_L$。60° 裕度需要 $|p_2|\ge1.73\,GB$：

$$
C_L\le\frac{g_{m6}}{1.73(2\pi)(10^6\ \mathrm{Hz})}=\frac{400\ \mu\mathrm S}{1.087\times10^7\ \mathrm{s^{-1}}}=36.8\ \mathrm{pF}
$$

（45° 裕度时为 64 pF）。压摆时尾电流对 $C_c$ 充电：

$$
SR=\frac{I_5}{C_c}=\frac{100\ \mu\mathrm A}{16.7\ \mathrm{pF}}=6.0\ \mathrm{V/\mu s}.
$$
