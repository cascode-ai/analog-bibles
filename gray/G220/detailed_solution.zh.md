# 详细步骤 - G220

先求偏置电流（三只晶体管相同）、小信号参数以及与偏置有关的结电容。跨阻由 $Q_1$ 的基极电流和输出节点的电阻得到；带宽由输入电流源开路时的零值时间常数得到。电路有三个信号节点：$Q_1$ 的基极（$b_1$）、输出，以及 $Q_2$、$Q_3$ 的公共基极节点（$b_m$）。$V_{\text{SUPPLY}}$、地和 $-V_{\text{SUPPLY}}$（$Q_2$、$Q_3$ 的发射极及衬底）都是交流地。

### 第 1 步 — 偏置与小信号参数

$Q_3$ 的基极和集电极比 $-V_{\text{SUPPLY}}$ 高一个 $V_{BE}$，位于 $-9.3$ V，因此从地接来的 30 kΩ 电阻中的电流为

$$
I_C=\frac{0-(-10\ \mathrm V+0.7\ \mathrm V)}{30\ \mathrm{k\Omega}}=0.31\ \mathrm{mA},
$$

$Q_2$ 镜像该电流，$Q_1$ 也流过该电流（调节 $I_B$ 使 $V_O=0$）。因此三管都有 $g_m=0.31\ \mathrm{mA}/26\ \mathrm{mV}=11.9$ mA/V，且

$$
r_{\pi1}=\frac{50}{g_m}=4.19\ \mathrm{k\Omega},\quad r_{\pi2}=r_{\pi3}=\frac{100}{g_m}=8.39\ \mathrm{k\Omega},\quad
r_{o1}=\frac{50\ \mathrm V}{0.31\ \mathrm{mA}}=161\ \mathrm{k\Omega},\quad r_{o2}=\frac{120\ \mathrm V}{0.31\ \mathrm{mA}}=387\ \mathrm{k\Omega},
$$

故输出节点看到 $R_{\text{out}}=r_{o1}\parallel r_{o2}=113.9$ kΩ。

### 第 2 步 — 电容

由 $f_T$，在测量电流下 $\tau_F=(g_m/\omega_T-C_{\mu0}-C_{je})/g_m$：

$$
\begin{aligned}
npn:&\quad \tau_F=\frac{12.24-0.7-3\ \mathrm{pF}}{38.5\ \mathrm{mA/V}}=222\ \mathrm{ps},\qquad C_{\pi2}=C_{\pi3}=(222\ \mathrm{ps})(11.9\ \mathrm{mA/V})+3\ \mathrm{pF}=5.65\ \mathrm{pF},\\
pnp:&\quad \tau_F=\frac{765.2-1-3\ \mathrm{pF}}{19.2\ \mathrm{mA/V}}=39.6\ \mathrm{ns},\qquad C_{\pi1}=(39.6\ \mathrm{ns})(11.9\ \mathrm{mA/V})+3\ \mathrm{pF}=475\ \mathrm{pF}.
\end{aligned}
$$

结电容按 $C=C_0/\sqrt{1+V_R/0.55\ \mathrm V}$ 计算，其中 $V_{b1}=9.3$ V，$V_O=0$，$V_{bm}=-9.3$ V，衬底位于 $-10$ V：

| 电容 | 结 | $V_R$ | 数值 |
|---|---|---|---|
| $C_{\mu1}$ | $Q_1$ 基极–集电极 | 9.3 V | 0.236 pF |
| $C_{bs1}$ | $Q_1$ 基极–衬底 | 19.3 V | 0.333 pF |
| $C_{\mu2}$ | $Q_2$ 基极–集电极 | 9.3 V | 0.165 pF |
| $C_{cs2}$ | $Q_2$ 集电极–衬底 | 10 V | 0.457 pF |
| $C_{cs3}$ | $Q_3$ 集电极–衬底 | 0.7 V | 1.33 pF |

$C_{\mu3}$ 被 $Q_3$ 的二极管连接短路。

### 第 3 步 — 跨阻

$Q_1$ 的发射极处于交流地，$i_i$ 全部经 $r_{\pi1}$ 抽出；从 pnp 管基极抽取电流会增大其发射极-基极电压，于是 $Q_1$ 的集电极向输出节点送入 $\beta_1i_i$。$Q_2$ 的基极节点由偏置网络固定，故

$$
\frac{v_o}{i_i}=+\beta_1R_{\text{out}}=50\,(113.9\ \mathrm{k\Omega})=5.69\ \mathrm{M\Omega},
$$

对图示方向（从基极抽出）的 $i_i$ 为正。

### 第 4 步 — 零值电阻

- $C_{\pi1}$ 和 $C_{bs1}$（$b_1$ 到交流地）：电流源开路时，$b_1$ 只看到 $r_{\pi1}=4.19$ kΩ。
- $C_{\mu1}$（$b_1$ 到输出）：$R_{\mu1}=r_{\pi1}+R_{\text{out}}+g_mR_{\text{out}}r_{\pi1}=4.19+113.9+5690\ \mathrm{k\Omega}=5.81$ MΩ。
- $C_{cs2}$（输出到衬底）：$R_{\text{out}}=113.9$ kΩ。
- $C_{\pi2}$、$C_{\pi3}$、$C_{cs3}$（节点 $b_m$ 到交流地）：二极管 $Q_3$ 占主导，$R_m=\tfrac1{g_m}\parallel r_{\pi2}\parallel r_{\pi3}\parallel30\ \mathrm{k\Omega}=82\ \Omega$。
- $C_{\mu2}$（$b_m$ 到输出）：$R_{\mu2}=R_m+R_{\text{out}}+g_mR_{\text{out}}R_m=0.08+113.9+111.4\ \mathrm{k\Omega}=225$ kΩ。

| 电容 | 数值 | 电阻 | 时间常数 |
|---|---|---|---|
| $C_{\pi1}$ | 475 pF | 4.19 kΩ | 1992 ns |
| $C_{bs1}$ | 0.333 pF | 4.19 kΩ | 1.4 ns |
| $C_{\mu1}$ | 0.236 pF | 5.81 MΩ | 1373 ns |
| $C_{cs2}$ | 0.457 pF | 113.9 kΩ | 52.0 ns |
| $C_{\mu2}$ | 0.165 pF | 225 kΩ | 37.3 ns |
| $C_{\pi2}+C_{\pi3}+C_{cs3}$ | 12.6 pF | 82 Ω | 1.0 ns |

### 第 5 步 — −3-dB 频率

$$
T_0=3.46\ \mu\mathrm s,\qquad f_{-3\text{dB}}\approx\frac1{2\pi T_0}=46\ \mathrm{kHz}.
$$

精确节点分析给出 47 kHz。起主导作用的有两项：慢速横向 pnp 管的大扩散电容 $C_{\pi1}$（$\tau_F\approx40$ ns），以及被该级高增益 $g_mR_{\text{out}}\approx1360$ 密勒倍增的 $C_{\mu1}$。
