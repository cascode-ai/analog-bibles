# 详细步骤 - grsim-11-27

按给定工作点在 SPICE 中搭建该输入级，以差分输入为信号源做 `.noise` 分析，并利用仿真器给出的各器件噪声贡献，除以增益平方折算到输入端。白噪声仿真用来核对手算分析。随后加入转折频率为 1 kHz 的基极电流闪烁噪声，用同样的分解在 1 Hz 处找出主导器件。一段简短的手算说明其原因：基极接低阻偏置、带发射极负反馈的晶体管，其基极闪烁噪声电流几乎不经分流地到达集电极。

### 第 1 步 — 仿真设置

电路按图搭建，取 $V_{CC}=3$ V、$V_{EE}=0$，两个输入的共模电平均为 0.3 V。$\text{Bias}_1=2.140$ V 和 $\text{Bias}_{CM}=0.843$ V 为理想（无噪声、低阻）电压源。节点 9 和 10 经零伏电流检测源固定在 1.5 V，所以噪声输出就是短路差分电流 $i_o$，再由无噪声 CCVS 转换为电压。模型采用 Gummel–Poon：pnp 为 IS $=10^{-16}$ A、BF $=10$、RB $=200\ \Omega$，npn 为 BF $=40$、RB $=400\ \Omega$，并设定温度使 $4kT=1.66\times10^{-20}$ V·C。$Q_{11}$ 的面积取 2.5，使 33-kΩ 尾电流支路提供 $I_{C3}=I_{C4}=3\ \mu$A。所得工作点为 $I_{C3}=3.01\ \mu$A，$I_{C9}=6.01\ \mu$A，$I_{C13}=6.02\ \mu$A，$I_{B13}=0.60\ \mu$A，$I_{B9}=0.15\ \mu$A；仿真得 $G_{m1}=94.8\ \mu$A/V，与手算的 97 µA/V 接近。

```spice
* grsim-11-27 bipolar input stage noise
VCC vcc 0 3
VB1 bias1 0 2.140
VBCM biascm 0 0.843
VINP inp 0 dc 0.3 ac 1
VINN inn 0 dc 0.3
R11 vcc e11 33k
Q11 t bias1 e11 qp 2.5
Q3 c3 inn t qp
Q4 c4 inp t qp
R13 vcc e13 33k
R14 vcc e14 33k
Q13 n9 bias1 e13 qp
Q14 n10 bias1 e14 qp
Q9 n9 biascm c3 qn
Q10 n10 biascm c4 qn
R9 c3 0 22k
R10 c4 0 22k
V9 n9 o9 0
V10 n10 o10 0
VO9 o9 0 1.5
VO10 o10 0 1.5
H9 a 0 V9 1
H10 b 0 V10 1
.model qp pnp is=1e-16 bf=10 rb=200 kf=3.2e-16 af=1
.model qn npn is=1e-16 bf=40 rb=400 kf=3.2e-16 af=1
.temp 27.4
.noise v(a,b) VINP dec 1 1 1e5 1
.end
```

白噪声仿真时 KF $=0$。求输入噪声电流时，用交流电流源驱动输入端，0.3 V 偏置经 1-GH 电感送入。

### 第 2 步 — 白噪声：核对手算分析

KF $=0$ 时，仿真得到的等效输入噪声电压不随频率变化：

$$
\frac{\overline{v_i^2}}{\Delta f}=4.05\times10^{-16}\ \mathrm{V^2/Hz}=4kT(24.4\ \mathrm{k\Omega})\quad(20\ \mathrm{nV/\sqrt{Hz}}).
$$

| 贡献（折算到输入） | SPICE | 手算估计 |
|---|---|---|
| $Q_3$、$Q_4$ | $4kT(9.1\ \mathrm{k\Omega})$ | $4kT(9\ \mathrm{k\Omega})$ |
| $Q_9$、$Q_{10}$、$Q_{13}$、$Q_{14}$ 以及 $R_9$、$R_{10}$、$R_{13}$、$R_{14}$ | $4kT(15.3\ \mathrm{k\Omega})$ | $4kT(13\ \mathrm{k\Omega})$ |
| $Q_{11}$、$R_{11}$（共模） | $\approx0$ | 0 |
| 合计 | $4kT(24.4\ \mathrm{k\Omega})$ | $4kT(22\ \mathrm{k\Omega})$ |

输入对的结果非常接近。负载器件高出约 2 kΩ，原因是手算忽略了它们的基极散粒噪声。这部分噪声流入 33-kΩ 和 22-kΩ 发射极电阻，并与第 4 步中的闪烁噪声一样几乎不经分流地到达集电极。按此估计，$Q_{13}$/$Q_{14}$ 约增加 $4kT(1.7\ \mathrm{k\Omega})$，$Q_9$/$Q_{10}$ 约增加 $4kT(0.4\ \mathrm{k\Omega})$。仿真得到的白噪声输入电流为 $1.06\times10^{-25}$ A²/Hz，与 $2qI_B=9.6\times10^{-26}$ A²/Hz 接近。因此手算分析在约 10% 以内得到验证。

### 第 3 步 — 闪烁噪声系数

基极电流噪声为 $\overline{i_b^2}/\Delta f=2qI_B+K_1I_B/f$。两项相等处即转折频率（corner frequency）$f_c=K_1/2q$，因此要使每个晶体管的转折频率为 1 kHz，需

$$
K_1=2q(1\ \mathrm{kHz})=2(1.6\times10^{-19}\ \mathrm C)(10^3\ \mathrm{s^{-1}})=3.2\times10^{-16}\ \mathrm A,
\qquad
\frac{\overline{i_b^2}}{\Delta f}=2qI_B\left(1+\frac{1000\ \mathrm{Hz}}{f}\right).
$$

在 1 Hz 处每个基极电流噪声源都是其散粒噪声的 1001 倍。在 SPICE 中对应 KF $=3.2\times10^{-16}$、AF $=1$。

### 第 4 步 — 基极电流噪声如何到达输出

以 $Q_{13}$ 为例：基极接交流地，发射极经 $R_{13}$ 接 $V_{CC}$，集电极接节点 9。其基极电流噪声 $i_n$ 从内基区流入发射极节点。在该节点列 KCL，并利用 $v_{be}=-v_e$，得

$$
v_e=\frac{i_nR_{13}}{1+(g_m+g_\pi)R_{13}},\qquad
\frac{i_c}{i_n}=\frac{g_mR_{13}}{1+(1+1/\beta)g_mR_{13}}.
$$

由 $1/g_{m13}=26\ \mathrm{mV}/6\ \mu\mathrm A=4.3$ kΩ，$g_mR_{13}=7.6$，$\beta=10$，得 $i_c/i_n=0.81$：基极电流噪声的大部分出现在输出中。由于 pnp 的 $\beta$ 低，$I_{B13}=0.6\ \mu$A 很大。共基管 $Q_9$ 同理，$g_mR_9=5.1$，$\beta=40$，$i_c/i_n=0.82$，但 $I_{B9}=0.15\ \mu$A 只有其四分之一。相比之下，输入短路时 $Q_3$/$Q_4$ 的基极电流噪声只流过 $r_b$。

### 第 5 步 — 1 Hz 处的各项贡献

每对器件（两侧以均方相加）经 $G_{m1}=97\ \mu$A/V 折算：

$$
\begin{aligned}
Q_{13},Q_{14}:&\quad\frac{2\cdot2q(0.6\ \mu\mathrm A)(1001)(0.81)^2}{(97\ \mu\mathrm A/\mathrm V)^2}=\frac{2(1.92\times10^{-22})(0.66)}{9.41\times10^{-9}}=2.7\times10^{-14}\ \mathrm{V^2/Hz},\\
Q_9,Q_{10}:&\quad\frac{2\cdot2q(0.15\ \mu\mathrm A)(1001)(0.82)^2}{(97\ \mu\mathrm A/\mathrm V)^2}=6.8\times10^{-15}\ \mathrm{V^2/Hz},\\
Q_3,Q_4:&\quad2\cdot2q(0.3\ \mu\mathrm A)(1001)\,r_b^2=2(9.6\times10^{-23})(200\ \Omega)^2=7.7\times10^{-18}\ \mathrm{V^2/Hz}.
\end{aligned}
$$

1 Hz 处的仿真分解（使用仿真器自身的 $G_{m1}$）：

| 器件 | 1 Hz 处折算到输入（V²/Hz） | 占比 |
|---|---|---|
| $Q_{13}$、$Q_{14}$ | $2.87\times10^{-14}$ | 79% |
| $Q_9$、$Q_{10}$ | $7.47\times10^{-15}$ | 20% |
| $Q_3$、$Q_4$（其中闪烁噪声 $7.7\times10^{-18}$） | $1.6\times10^{-16}$ | 0.4% |
| 电阻 | $1.9\times10^{-16}$ | 0.5% |
| 合计 | $3.65\times10^{-14}$ | （190 nV/√Hz） |

1 Hz 处的总噪声约为白噪声水平的 90 倍。

### 第 6 步 — 1 Hz 处的主导器件

在 1 Hz 处，等效输入噪声电压由 pnp 有源负载电流源 $Q_{13}$ 和 $Q_{14}$ 主导，约占 $3.7\times10^{-14}$ V²/Hz 的 80%。它们的 $\beta$ 低，基极电流大；由于基极接低阻偏置、33-kΩ 发射极电阻迫使噪声电流流向集电极，其闪烁噪声几乎不经分流地到达输出。npn 共基管 $Q_9$/$Q_{10}$ 居第二（约 20%），输入对的贡献不到 1%。

1 Hz 处的输入噪声电流由 $Q_3$/$Q_4$ 的基极电流闪烁噪声决定：手算为 $2q(0.3\ \mu\mathrm A)(1001)=9.6\times10^{-23}$ A²/Hz，仿真为 $8.9\times10^{-23}$ A²/Hz。
