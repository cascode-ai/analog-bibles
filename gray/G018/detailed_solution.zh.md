# 详细步骤 - G018

50 MHz 处的增益测量值确定了 1 mA 时的 $f_T$，结合已知的 $\tau_F$ 即可求出发射结耗尽层电容 $C_{je}$。在结电压固定时，$C_{je}$、$C_\mu$ 和 $C_{cs}$ 不随电流变化，因此在 2 mA 时只需重新计算与电流有关的元件。

### 第 1 步 — 由增益测量值求 1 mA 时的 $f_T$

短路电流增益为单极点函数，$|\beta(jf)|=\beta_0/\sqrt{1+(f/f_\beta)^2}$，且 $f_T=\beta_0f_\beta$。50 MHz 处增益为 9，远低于 $\beta_0=100$，因此该点位于 −20 dB/十倍频的下降段，$|\beta|\approx f_T/f$：

$$
f_T\approx|\beta|f=9(50\ \mathrm{MHz})=450\ \mathrm{MHz}.
$$

按精确的单极点形式求解，$(f/f_\beta)^2=(100/9)^2-1=122.5$，得 $f_\beta=4.52$ MHz、$f_T=452$ MHz，基本相同。

### 第 2 步 — 提取 $C_{je}$

由混合 π 模型，$1/(2\pi f_T)=\tau_F+(C_{je}+C_\mu)/g_m$，1 mA 时 $1/g_m=V_T/I_C=26\ \Omega$：

$$
\tau_T=\frac1{2\pi(450\ \mathrm{MHz})}=353.7\ \mathrm{ps},\qquad
C_{je}+C_\mu=\frac{353.7\ \mathrm{ps}-250\ \mathrm{ps}}{26\ \Omega}=3.99\ \mathrm{pF},\qquad
C_{je}=3.99\ \mathrm{pF}-0.6\ \mathrm{pF}=3.39\ \mathrm{pF}.
$$

（若取 $f_T=452$ MHz，则 $C_{je}=3.33$ pF。）

### 第 3 步 — $I_C=2$ mA 时的元件

$$
\begin{aligned}
g_m&=\frac{I_C}{V_T}=\frac{2\ \mathrm{mA}}{26\ \mathrm{mV}}=76.9\ \mathrm{mA/V},\qquad
r_\pi=\frac{\beta_0}{g_m}=\frac{100}{76.9\ \mathrm{mA/V}}=1.3\ \mathrm{k\Omega},\qquad
r_o=\frac{V_A}{I_C}=\frac{40\ \mathrm V}{2\ \mathrm{mA}}=20\ \mathrm{k\Omega},\\
C_b&=\tau_Fg_m=(0.25\ \mathrm{ns})(76.9\ \mathrm{mA/V})=19.2\ \mathrm{pF},\qquad
C_\pi=C_b+C_{je}=19.2\ \mathrm{pF}+3.39\ \mathrm{pF}=22.6\ \mathrm{pF}.
\end{aligned}
$$

$C_\mu=0.6$ pF、$C_{cs}=2$ pF、$r_b=150\ \Omega$ 和 $r_c=150\ \Omega$ 不变。题目未给出 $r_\mu$ 和 $r_{ex}$，因此把 $r_\mu$ 视为开路，$r_{ex}$ 取零。验算：2 mA 时 $f_T=g_m/[2\pi(C_\pi+C_\mu)]=527$ MHz，高于 1 mA 时的值，因为耗尽层电容项的影响变小。

### 第 4 步 — 等效电路

- $r_b=150\ \Omega$ 接在基极端 B 与内部基极 B′ 之间；
- $r_\pi=1.3$ kΩ 与 $C_\pi=22.6$ pF 并联，接在 B′ 与发射极 E 之间，其上电压为 $v_1$；
- $C_\mu=0.6$ pF 接在 B′ 与内部集电极 C′ 之间；
- 受控源 $g_mv_1$（$g_m=76.9$ mA/V）与 $r_o=20$ kΩ 接在 C′ 与 E 之间；
- $r_c=150\ \Omega$ 接在 C′ 与集电极端 C 之间；
- $C_{cs}=2$ pF 接在 C′ 与衬底（交流地）之间。

<!-- diagram: diagram-01.cir -->
