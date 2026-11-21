# 详细步骤 - G233

对两个电路都使用零值时间常数法：在其余电容全部开路、$v_i$ 置零时求每个电容看到的电阻，把各乘积相加得到 $T_0$，取 $f_{-3\mathrm{dB}}\approx1/(2\pi T_0)$。两个电路的主要差别在于 $C_{\mu1}$ 看到的电阻。

### 第 1 步 — 混合 π 参数

在 $I_C=1$ mA 时，$g_m=I_C/V_T=38.46$ mA/V，$r_\pi=\beta/g_m=2.6\ \mathrm{k\Omega}$。特征频率由 $\omega_T=g_m/(C_\pi+C_\mu)$ 定义，故

$$
C_\pi=\frac{g_m}{2\pi f_T}-C_\mu=\frac{38.46\ \mathrm{mA/V}}{2\pi(500\ \mathrm{MHz})}-0.4\ \mathrm{pF}=12.24\ \mathrm{pF}-0.4\ \mathrm{pF}=11.84\ \mathrm{pF}.
$$

$v_i$ 置零时，$Q_1$ 的基极看到 $R_S$ 与 $r_\pi$ 并联：

$$
R_{\pi0}=R_S\parallel r_\pi=5\ \mathrm{k\Omega}\parallel2.6\ \mathrm{k\Omega}=1.71\ \mathrm{k\Omega}.
$$

两个电路的低频增益几乎相同：共射级为 −39.5，共射–共基级为 −39.1。

### 第 2 步 — 共射级

- $C_\pi$（基极对地）：$R_{\pi0}=1.71\ \mathrm{k\Omega}$。
- $C_\mu$（基极到集电极）：测试电流 $i_x$ 使基极电位升高 $i_xR_{\pi0}$，使集电极电位下降 $i_xR_L$，受控源又使其再下降 $g_m(i_xR_{\pi0})R_L$，故

$$
R_{\mu0}=R_{\pi0}+R_L+g_mR_LR_{\pi0}=1.71\ \mathrm{k\Omega}+3\ \mathrm{k\Omega}+(38.46\ \mathrm{mA/V})(3\ \mathrm{k\Omega})(1.71\ \mathrm{k\Omega})=202\ \mathrm{k\Omega}.
$$

- $C_{cs}$（集电极对衬底，即交流地）：$R_L=3\ \mathrm{k\Omega}$。

$$
T_0=(1.71\ \mathrm{k\Omega})(11.84\ \mathrm{pF})+(202\ \mathrm{k\Omega})(0.4\ \mathrm{pF})+(3\ \mathrm{k\Omega})(1\ \mathrm{pF})=20.3+80.8+3.0=104.1\ \mathrm{ns},
$$

$$
f_{-3\mathrm{dB}}\approx\frac1{2\pi(104.1\ \mathrm{ns})}=1.53\ \mathrm{MHz}.
$$

经密勒倍增的 $C_\mu$ 贡献了 $T_0$ 的近 80%。

### 第 3 步 — 共射–共基级

$Q_1$ 的集电极（节点 $x$）现在驱动共基管 $Q_2$ 的发射极。$Q_2$ 基极接地时，在发射极加测试电压 $v$ 将吸取 $v/r_\pi+g_mv$ 的电流，故节点 $x$ 的电阻为

$$
R_x=\frac{r_\pi}{\beta+1}=\frac{2.6\ \mathrm{k\Omega}}{101}=25.7\ \Omega .
$$

该电阻同样适用于直接接在发射极与接地基极之间的 $C_{\pi2}$。于是

$$
R_{\mu1,0}=R_{\pi0}+R_x+g_mR_xR_{\pi0}=1.71\ \mathrm{k\Omega}+25.7\ \Omega+(38.46\ \mathrm{mA/V})(25.7\ \Omega)(1.71\ \mathrm{k\Omega})=3.43\ \mathrm{k\Omega}.
$$

$C_{\mu2}$ 和 $C_{cs2}$ 接在输出与交流地之间，看到 $R_L$（$r_o=\infty$ 时 $Q_2$ 的集电极呈无穷大电阻）。

| 电容 | $C$ (pF) | $R_{j0}$ | $R_{j0}C_j$ (ns) |
|---|---|---|---|
| $C_{\pi1}$ | 11.84 | 1.71 kΩ | 20.3 |
| $C_{\mu1}$ | 0.4 | 3.43 kΩ | 1.37 |
| $C_{cs1}$ | 1 | 25.7 Ω | 0.03 |
| $C_{\pi2}$ | 11.84 | 25.7 Ω | 0.30 |
| $C_{\mu2}$ | 0.4 | 3 kΩ | 1.2 |
| $C_{cs2}$ | 1 | 3 kΩ | 3.0 |
| 总和 $T_0$ | | | 26.2 |

$$
f_{-3\mathrm{dB}}\approx\frac1{2\pi(26.2\ \mathrm{ns})}=6.08\ \mathrm{MHz}.
$$

### 第 4 步 — 比较

在增益几乎不变的情况下，共射–共基级使带宽扩大约 $104.1/26.2\approx4$ 倍。$Q_1$ 从基极到集电极的增益由 $-g_mR_L=-115$ 降为 $-g_mR_x\approx-1$，因此 $C_{\mu1}$ 的密勒项由 80.8 ns 降到 1.37 ns。剩下的主要是 $C_{\pi1}$ 经 $R_S\parallel r_\pi$ 充电（20.3 ns），这是共射–共基结构无法消除的；因此改善倍数小于 MOS 电路约 5 倍的改善，后者的输入电容相对较小。

精确求解电路得到 1.54 MHz 和 7.1 MHz；对共射–共基级的估计偏保守，因为其时间常数不那么集中于单一项。
