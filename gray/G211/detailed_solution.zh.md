# 详细步骤 - G211

对带泄放电阻的共集–共射级应用零值时间常数法。与无 $R_B$ 的情况一样，$Q_1$ 的集电极接交流地，因此 $C_{\mu1}$ 从输入节点接到地，$C_{cs1}$ 被短路；$R_B$ 提高了 $I_{C1}$，并在 $Q_2$ 的基极处与 $r_{\pi2}$ 并联。

### 第 1 步 — 小信号参数与电容

$$
g_{m1}=1.92\ \mathrm{mA/V},\quad r_{\pi1}=52\ \mathrm{k\Omega};\qquad g_{m2}=38.5\ \mathrm{mA/V},\quad r_{\pi2}=2.6\ \mathrm{k\Omega};\qquad R_{E1}\equiv r_{\pi2}\parallel R_B=2.22\ \mathrm{k\Omega}.
$$

由 1 mA 时的 $f_T$ 得 $\tau_F=256$ ps，$C_{\pi2}=11.84$ pF，$C_{\pi1}=\tau_Fg_{m1}+C_{je}=2.49$ pF。低频增益为 −68.7，$R_i=275.8$ kΩ。

### 第 2 步 — 零值电阻

- $C_{\pi1}$（$Q_1$ 基极到发射极）：$R_{\pi1}=r_{\pi1}\parallel\dfrac{R_S+R_{E1}}{1+g_{m1}R_{E1}}=52\ \mathrm{k\Omega}\parallel19.4\ \mathrm{k\Omega}=14.1$ kΩ。
- $C_{\mu1}$（$Q_1$ 基极到其接地的集电极）：$R_{\mu1}=R_S\parallel R_i=100\ \mathrm{k\Omega}\parallel275.8\ \mathrm{k\Omega}=73.4$ kΩ。
- $C_{\pi2}$（$Q_2$ 基极到地）：$R_{\pi2}=r_{\pi2}\parallel R_B\parallel\dfrac{R_S+r_{\pi1}}{\beta+1}=2.22\ \mathrm{k\Omega}\parallel1.51\ \mathrm{k\Omega}=896\ \Omega$。
- $C_{\mu2}$（$Q_2$ 基极到输出）：只有 $Q_2$ 驱动输出，取 $R_A=896\ \Omega$，
$$
R_{\mu2}=R_A+R_L+g_{m2}R_LR_A=0.9+3+103.4\ \mathrm{k\Omega}=107\ \mathrm{k\Omega}.
$$
- $C_{cs2}$（输出到地）：$R_L=3$ kΩ。

### 第 3 步 — 时间常数之和

| 电容 | 数值 | 电阻 | 时间常数 |
|---|---|---|---|
| $C_{\pi1}$ | 2.49 pF | 14.1 kΩ | 35.2 ns |
| $C_{\mu1}$ | 0.4 pF | 73.4 kΩ | 29.4 ns |
| $C_{\pi2}$ | 11.84 pF | 896 Ω | 10.6 ns |
| $C_{\mu2}$ | 0.4 pF | 107 kΩ | 42.9 ns |
| $C_{cs2}$ | 1 pF | 3 kΩ | 3.0 ns |

$$
T_0=35.2+29.4+10.6+42.9+3.0\ \mathrm{ns}=121.1\ \mathrm{ns},\qquad
f_{-3\text{dB}}\approx\frac1{2\pi T_0}=1.31\ \mathrm{MHz}.
$$

### 第 4 步 — 结果解释

精确节点分析给出约 1.8 MHz；由于没有单一的主导电容（前几个极点为复数），零值时间常数之和偏保守。泄放电阻降低了两个晶体管基极处的电阻（$r_{\pi1}$ 以及 $Q_2$ 基极节点），因此带宽比无泄放电阻时（0.74 MHz）大约提高一倍，同时增益从 −48.7 提高到 −68.7。这与达林顿级相反，在那里同样的电阻通过更大的密勒效应降低了带宽。
