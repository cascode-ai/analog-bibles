# 详细步骤 - G207

器件参数与达林顿级相同，但连接方式不同：$Q_1$ 的集电极接交流地，因此 $C_{\mu1}$ 从输入节点接到地（没有密勒倍增），$C_{cs1}$ 被短路。在 $v_i=0$ 时求其余各电容的零值电阻，并把时间常数相加。

### 第 1 步 — 小信号参数与电容

$r_{\pi1}=260$ kΩ，$g_{m1}=0.385$ mA/V，$r_{\pi2}=2.6$ kΩ，$g_{m2}=38.5$ mA/V。由 1 mA 时的 $f_T$ 得 $C_\pi+C_\mu=12.24$ pF，故

$$
C_{\pi2}=11.84\ \mathrm{pF},\qquad \tau_F=\frac{C_{\pi2}-C_{je}}{g_{m2}}=256\ \mathrm{ps},\qquad
C_{\pi1}=\tau_Fg_{m1}+C_{je}=2.10\ \mathrm{pF}.
$$

低频增益为 $-\beta(\beta+1)R_L/[R_S+r_{\pi1}+(\beta+1)r_{\pi2}]=-48.7$，输入电阻 $R_i=522.6$ kΩ。

### 第 2 步 — 零值电阻

- $C_{\pi1}$（$Q_1$ 基极到发射极）：$r_{\pi1}$ 与经 $R_S$ 和 $r_{\pi2}$ 的外部通路并联，后者因 $g_{m1}$ 在 $r_{\pi2}$ 上的反馈而减小：
$$
R_{\pi1}=r_{\pi1}\parallel\frac{R_S+r_{\pi2}}{1+g_{m1}r_{\pi2}}=260\ \mathrm{k\Omega}\parallel51.3\ \mathrm{k\Omega}=42.8\ \mathrm{k\Omega}.
$$
- $C_{\mu1}$（$Q_1$ 基极到其接地的集电极）：即输入节点对地，
$$
R_{\mu1}=R_S\parallel R_i=100\ \mathrm{k\Omega}\parallel522.6\ \mathrm{k\Omega}=83.9\ \mathrm{k\Omega}.
$$
- $C_{\pi2}$（$Q_2$ 基极到地）：$r_{\pi2}$ 与从 $Q_1$ 发射极看进去的电阻并联，
$$
R_{\pi2}=r_{\pi2}\parallel\frac{R_S+r_{\pi1}}{\beta+1}=2.6\ \mathrm{k\Omega}\parallel3.56\ \mathrm{k\Omega}=1.50\ \mathrm{k\Omega}.
$$
- $C_{\mu2}$（$Q_2$ 基极到输出）：取 $R_A=R_{\pi2}=1.50$ kΩ，只有 $Q_2$ 驱动输出，故
$$
R_{\mu2}=R_A+R_L+g_{m2}R_LR_A=1.5+3+173.5\ \mathrm{k\Omega}=178\ \mathrm{k\Omega}.
$$
- $C_{cs2}$（输出到地）：$R_L=3$ kΩ。（$C_{cs1}$ 两端都处于交流地。）

### 第 3 步 — 时间常数之和

| 电容 | 数值 | 电阻 | 时间常数 |
|---|---|---|---|
| $C_{\pi1}$ | 2.10 pF | 42.8 kΩ | 89.9 ns |
| $C_{\mu1}$ | 0.4 pF | 83.9 kΩ | 33.6 ns |
| $C_{\pi2}$ | 11.84 pF | 1.50 kΩ | 17.8 ns |
| $C_{\mu2}$ | 0.4 pF | 178 kΩ | 71.2 ns |
| $C_{cs2}$ | 1 pF | 3 kΩ | 3.0 ns |

$$
T_0=89.9+33.6+17.8+71.2+3.0\ \mathrm{ns}=215.5\ \mathrm{ns},\qquad
f_{-3\text{dB}}\approx\frac1{2\pi T_0}=0.74\ \mathrm{MHz}.
$$

### 第 4 步 — 结果解释

精确节点分析给出约 1.0 MHz；由于没有单一的主极点（前几个极点为复数），零值时间常数估计在这里偏保守。在增益几乎相同的情况下（−48.7 对 −49.1），共集–共射级比达林顿级快约十倍（0.74 MHz 对 73 kHz）：把 $Q_1$ 的集电极接地消除了 $C_{\mu1}$ 的密勒倍增，而正是这一项主导了达林顿级的响应。
