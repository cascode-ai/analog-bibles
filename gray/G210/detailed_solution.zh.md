# 详细步骤 - G210

在计入泄放电阻的情况下重做达林顿级的零值时间常数分析：$R_B$ 提高了 $I_{C1}$（使 $C_{\pi1}$ 增大、$r_{\pi1}$ 减小），并在连接节点 $e_1$ 处与 $r_{\pi2}$ 并联。三个节点为 $b_1$（$Q_1$ 的基极）、$e_1$（$Q_1$ 的发射极与 $Q_2$ 的基极）以及输出 $c$。

### 第 1 步 — 小信号参数与电容

$$
g_{m1}=\frac{50\ \mu\mathrm A}{26\ \mathrm{mV}}=1.92\ \mathrm{mA/V},\quad r_{\pi1}=52\ \mathrm{k\Omega};\qquad g_{m2}=38.5\ \mathrm{mA/V},\quad r_{\pi2}=2.6\ \mathrm{k\Omega};\qquad R_{E1}\equiv r_{\pi2}\parallel R_B=2.22\ \mathrm{k\Omega}.
$$

由 1 mA 时的 $f_T$ 得 $C_{\pi2}=12.24\ \mathrm{pF}-0.4\ \mathrm{pF}=11.84$ pF，$\tau_F=(11.84-2)\ \mathrm{pF}/38.5\ \mathrm{mA/V}=256$ ps，故

$$
C_{\pi1}=\tau_Fg_{m1}+C_{je}=(256\ \mathrm{ps})(1.92\ \mathrm{mA/V})+2\ \mathrm{pF}=2.49\ \mathrm{pF}.
$$

低频增益为 −69.5，其中 $R_i=r_{\pi1}+(\beta+1)R_{E1}=275.8$ kΩ，输出电流为 $8708\,i_{b1}$。

### 第 2 步 — 零值电阻

- $C_{\pi1}$（$b_1$ 到 $e_1$）：$r_{\pi1}$ 与经 $R_S$ 和 $R_{E1}$ 的外部通路并联，后者因 $g_{m1}$ 在 $R_{E1}$ 上的反馈而减小：
$$
R_{\pi1}=r_{\pi1}\parallel\frac{R_S+R_{E1}}{1+g_{m1}R_{E1}}=52\ \mathrm{k\Omega}\parallel\frac{102.2\ \mathrm{k\Omega}}{5.26}=52\ \mathrm{k\Omega}\parallel19.4\ \mathrm{k\Omega}=14.1\ \mathrm{k\Omega}.
$$
- $C_{\mu1}$（$b_1$ 到输出）：基极节点看到 $R_A=R_S\parallel R_i=73.4$ kΩ，复合跨导为 $G_m=8708/R_i=31.6$ mA/V，故
$$
R_{\mu1}=R_A+R_L+G_mR_LR_A=73.4\ \mathrm{k\Omega}+3\ \mathrm{k\Omega}+6.95\ \mathrm{M\Omega}=7.03\ \mathrm{M\Omega}.
$$
- $C_{\pi2}$（$e_1$ 到地）：$R_{\pi2}=r_{\pi2}\parallel R_B\parallel\dfrac{R_S+r_{\pi1}}{\beta+1}=2.22\ \mathrm{k\Omega}\parallel1.51\ \mathrm{k\Omega}=896\ \Omega$。
- $C_{\mu2}$（$e_1$ 到输出）：$e_1$ 处电阻为 $R_{\pi2}=896\ \Omega$，且 $G_m'=g_{m2}-\beta/(R_S+r_{\pi1})=38.5-0.66\ \mathrm{mA/V}=37.8$ mA/V，
$$
R_{\mu2}=R_{\pi2}+R_L+G_m'R_LR_{\pi2}=0.9+3+101.6\ \mathrm{k\Omega}=106\ \mathrm{k\Omega}.
$$
- $C_{cs1}$、$C_{cs2}$：各自为 $R_L=3$ kΩ。

### 第 3 步 — 时间常数之和

| 电容 | 数值 | 电阻 | 时间常数 |
|---|---|---|---|
| $C_{\pi1}$ | 2.49 pF | 14.1 kΩ | 35.2 ns |
| $C_{\mu1}$ | 0.4 pF | 7.03 MΩ | 2811 ns |
| $C_{\pi2}$ | 11.84 pF | 896 Ω | 10.6 ns |
| $C_{\mu2}$ | 0.4 pF | 106 kΩ | 42.2 ns |
| $C_{cs1}$, $C_{cs2}$ | 各 1 pF | 3 kΩ | 各 3 ns |

$$
T_0=35.2+2811+10.6+42.2+3+3\ \mathrm{ns}=2905\ \mathrm{ns},\qquad
f_{-3\text{dB}}\approx\frac1{2\pi T_0}=54.8\ \mathrm{kHz}.
$$

由于 $C_{\mu1}$ 形成明显的主极点，精确节点分析同样给出 54.8 kHz。泄放电阻提高了增益（−69.5 对 −49.1），也就提高了 $C_{\mu1}$ 的密勒倍增，因此带宽从约 73 kHz 降到 55 kHz。
