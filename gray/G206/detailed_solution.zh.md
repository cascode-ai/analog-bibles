# 详细步骤 - G206

先求出器件电容（由于 $Q_1$ 的电流只有另一管的 1/100，$C_{\pi1}$ 远小于 $C_{\pi2}$），再在 $v_i=0$、其余电容开路的条件下求六个电容各自的零值电阻，最后把时间常数相加。电路有三个节点：$Q_1$ 的基极（$b_1$）、$Q_1$ 发射极与 $Q_2$ 基极的连接点（$e_1$），以及输出（$c$，两个集电极）。

### 第 1 步 — 小信号参数与电容

$$
r_{\pi1}=260\ \mathrm{k\Omega},\quad g_{m1}=0.385\ \mathrm{mA/V};\qquad r_{\pi2}=2.6\ \mathrm{k\Omega},\quad g_{m2}=38.5\ \mathrm{mA/V}.
$$

在 1 mA 时，$C_\pi+C_\mu=g_{m2}/\omega_T=38.5\ \mathrm{mA/V}/[2\pi(500\ \mathrm{MHz})]=12.24$ pF，故 $C_{\pi2}=11.84$ pF，且

$$
\tau_F=\frac{C_{\pi2}-C_{je}}{g_{m2}}=\frac{11.84\ \mathrm{pF}-2\ \mathrm{pF}}{38.5\ \mathrm{mA/V}}=256\ \mathrm{ps},\qquad
C_{\pi1}=\tau_Fg_{m1}+C_{je}=(256\ \mathrm{ps})(0.385\ \mathrm{mA/V})+2\ \mathrm{pF}=2.10\ \mathrm{pF}.
$$

作为参考，低频增益为 $-\beta(\beta+2)R_L/[R_S+r_{\pi1}+(\beta+1)r_{\pi2}]=-49.1$，输入电阻 $R_i=522.6$ kΩ。

### 第 2 步 — 两个 $C_\pi$ 看到的电阻

- $C_{\pi1}$（$b_1$ 到 $e_1$）：它看到 $r_{\pi1}$ 与外部通路并联，外部通路在基极一侧为 $R_S$，在发射极一侧为 $r_{\pi2}$，且 $g_{m1}$ 经 $r_{\pi2}$ 形成反馈：
$$
R_{\pi1}=r_{\pi1}\parallel\frac{R_S+r_{\pi2}}{1+g_{m1}r_{\pi2}}=260\ \mathrm{k\Omega}\parallel\frac{102.6\ \mathrm{k\Omega}}{2.0}=260\ \mathrm{k\Omega}\parallel51.3\ \mathrm{k\Omega}=42.8\ \mathrm{k\Omega}.
$$
- $C_{\pi2}$（$e_1$ 到地）：它看到 $r_{\pi2}$ 与从 $Q_1$ 发射极看进去的电阻并联：
$$
R_{\pi2}=r_{\pi2}\parallel\frac{R_S+r_{\pi1}}{\beta+1}=2.6\ \mathrm{k\Omega}\parallel3.56\ \mathrm{k\Omega}=1.50\ \mathrm{k\Omega}.
$$

### 第 3 步 — 两个 $C_\mu$ 及 $C_{cs}$ 看到的电阻

- $C_{\mu1}$（$b_1$ 到输出）：基极节点看到 $R_A=R_S\parallel R_i=100\ \mathrm{k\Omega}\parallel522.6\ \mathrm{k\Omega}=83.9$ kΩ，从 $v_{b1}$ 到输出电流的复合跨导为 $G_m=\beta(\beta+2)/R_i=19.5$ mA/V。与共射级相同，
$$
R_{\mu1}=R_A+R_L+G_mR_LR_A=83.9\ \mathrm{k\Omega}+3\ \mathrm{k\Omega}+4.91\ \mathrm{M\Omega}=5.00\ \mathrm{M\Omega}.
$$
- $C_{\mu2}$（$e_1$ 到输出）：节点 $e_1$ 看到 $R_{\pi2}=1.50$ kΩ，该处电压使输出电流变化 $G_m'=g_{m2}-\beta/(R_S+r_{\pi1})=38.5-0.28\ \mathrm{mA/V}=38.2$ mA/V（$Q_1$ 发射极升高时其集电极电流略有减小），故
$$
R_{\mu2}=R_{\pi2}+R_L+G_m'R_LR_{\pi2}=1.5+3+172.2\ \mathrm{k\Omega}=177\ \mathrm{k\Omega}.
$$
- $C_{cs1}$、$C_{cs2}$（输出到交流地）：由于 $r_o=\infty$，各自看到 $R_L=3$ kΩ。

### 第 4 步 — 时间常数之和

| 电容 | 数值 | 电阻 | 时间常数 |
|---|---|---|---|
| $C_{\pi1}$ | 2.10 pF | 42.8 kΩ | 89.9 ns |
| $C_{\mu1}$ | 0.4 pF | 5.00 MΩ | 2001 ns |
| $C_{\pi2}$ | 11.84 pF | 1.50 kΩ | 17.8 ns |
| $C_{\mu2}$ | 0.4 pF | 177 kΩ | 70.7 ns |
| $C_{cs1}$, $C_{cs2}$ | 各 1 pF | 3 kΩ | 各 3 ns |

$$
T_0=89.9+2001+17.8+70.7+3+3\ \mathrm{ns}=2185\ \mathrm{ns},\qquad
f_{-3\text{dB}}\approx\frac1{2\pi T_0}=72.8\ \mathrm{kHz}.
$$

精确节点分析给出 73.3 kHz。$C_{\mu1}$ 占 $T_0$ 的 90 % 以上：它跨接在整个达林顿级的输入与输出之间，因而被完整的复合增益密勒倍增，同时还看到很大的源电阻 $R_S$。
