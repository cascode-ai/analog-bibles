# 详细步骤 - G224

先由 Widlar 电流源 $Q_5$–$Q_6$ 求尾电流，再求差分对和有源负载的小信号参数。由于输出取差分且电路对称，只需考虑差模半边电路：公共发射极节点为交流地，接在 $V_B$ 的 pnp 负载基极为交流地，每一侧得到 $v_i$ 的一半。差模半边电路是源电阻为 20 kΩ、负载为 $r_{o1}\parallel r_{o3}$ 的共射级。

### 第 1 步 — 偏置

$Q_6$ 为二极管连接，其基极和集电极位于 $-10\ \mathrm V+0.7\ \mathrm V=-9.3$ V，因此 $R_{B2}$ 中的电流为

$$
I_{\text{REF}}=\frac{0-(-9.3\ \mathrm V)}{20\ \mathrm{k\Omega}}=0.465\ \mathrm{mA}.
$$

$Q_5$ 的发射极串联 $R_{B1}$，构成 Widlar 电流源。对两个基极-发射极结列 KVL：

$$
V_T\ln\frac{I_{\text{REF}}}{I_{C5}}=I_{C5}R_{B1}
\;\Rightarrow\;
(26\ \mathrm{mV})\ln\frac{465\ \mu\mathrm A}{I_{C5}}=I_{C5}(10\ \mathrm{k\Omega})
\;\Rightarrow\;I_{C5}\approx10\ \mu\mathrm A,
$$

故 $I_{C1}=I_{C2}=5\ \mu$A（校验：$26\ \mathrm{mV}\cdot\ln46.5=99.8$ mV $\approx(10\ \mu\mathrm A)(10\ \mathrm{k\Omega})$）。$V_B$ 的设定使 $Q_3$、$Q_4$ 同样流过 5 µA，且集电极位于 +5 V。

### 第 2 步 — 小信号参数与增益

$$
g_{m1}=\frac{5\ \mu\mathrm A}{26\ \mathrm{mV}}=0.192\ \mathrm{mA/V},\quad r_{\pi1}=\frac{100}{g_{m1}}=521\ \mathrm{k\Omega},\quad
r_{o1}=\frac{120\ \mathrm V}{5\ \mu\mathrm A}=24\ \mathrm{M\Omega},\quad r_{o3}=\frac{50\ \mathrm V}{5\ \mu\mathrm A}=10\ \mathrm{M\Omega},
$$

因此每个集电极看到 $R_L=r_{o1}\parallel r_{o3}=7.07$ MΩ。两输入端分别为 $\pm v_i/2$ 时，各集电极变化 $\mp g_{m1}R_L\frac{r_{\pi1}}{r_{\pi1}+20\ \mathrm{k\Omega}}\frac{v_i}2$，而 $v_o=v_{c1}-v_{c2}$：

$$
\frac{v_o}{v_i}=-g_{m1}R_L\frac{r_{\pi1}}{r_{\pi1}+20\ \mathrm{k\Omega}}=-(1357)(0.963)=-1.31\times10^3 .
$$

### 第 3 步 — 半边电路中的电容

由 1 mA 时的 $f_T$ 求 npn 管的 $\tau_F$：$(12.24-0.7-3)\ \mathrm{pF}/38.5\ \mathrm{mA/V}=222$ ps，故 $C_{\pi1}=(222\ \mathrm{ps})(0.192\ \mathrm{mA/V})+3\ \mathrm{pF}=3.04$ pF。结电容：$Q_1$ 基极约为 0 V，集电极位于 +5 V，$V_B=9.3$ V，衬底位于 −10 V：

| 电容 | 连接 | $V_R$ | 数值 |
|---|---|---|---|
| $C_{\mu1}$ | $Q_1$ 基极到集电极 | 5 V | 0.220 pF |
| $C_{cs1}$ | 输出到衬底 | 15 V | 0.376 pF |
| $C_{\mu3}$ | 输出到 $Q_3$ 基极（交流地） | 4.3 V | 0.337 pF |

$C_{\pi3}$ 和 $C_{bs3}$ 两端都处于交流地，因此不需要横向 pnp 管的 $f_T$。

### 第 4 步 — 零值时间常数

基极节点看到 $R_{\pi0}=20\ \mathrm{k\Omega}\parallel r_{\pi1}=19.3$ kΩ。

- $C_{\pi1}$：$R_{\pi0}=19.3$ kΩ。
- $C_{\mu1}$：$R_{\pi0}+R_L+g_{m1}R_LR_{\pi0}=19.3\ \mathrm{k\Omega}+7.07\ \mathrm{M\Omega}+26.1\ \mathrm{M\Omega}=33.2$ MΩ。
- $C_{cs1}$ 和 $C_{\mu3}$（输出到交流地）：$R_L=7.07$ MΩ。

| 电容 | 数值 | 电阻 | 时间常数 |
|---|---|---|---|
| $C_{\pi1}$ | 3.04 pF | 19.3 kΩ | 0.059 µs |
| $C_{\mu1}$ | 0.220 pF | 33.2 MΩ | 7.32 µs |
| $C_{cs1}$ | 0.376 pF | 7.07 MΩ | 2.66 µs |
| $C_{\mu3}$ | 0.337 pF | 7.07 MΩ | 2.38 µs |

$$
T_0=12.42\ \mu\mathrm s,\qquad f_{-3\text{dB}}\approx\frac1{2\pi T_0}=12.8\ \mathrm{kHz}.
$$

对半边电路的精确分析同样给出 12.8 kHz。5 µA 的偏置使输出电阻非常大，因此 $C_{\mu1}$ 的密勒项以及输出节点上的两个电容（各只有零点几皮法）限制了带宽。
