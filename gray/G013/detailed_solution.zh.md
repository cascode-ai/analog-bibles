# 详细步骤 - G013

测量数据只间接给出模型参数。由两个 $f_T$ 测量点提取正向渡越时间 $\tau_F$ 和发射结耗尽层电容 $C_{je}$，由 $r_o$ 求厄利电压，由 10 V 时的数值求零偏结电容。然后在三个电流和新的结电压下计算混合 π 模型的每个元件。

### 第 1 步 — 由两个 $f_T$ 测量值求 $\tau_F$ 和 $C_{je}$

由 $C_\pi=\tau_Fg_m+C_{je}$ 和 $f_T=g_m/[2\pi(C_\pi+C_\mu)]$，渡越时间 $\tau_T=1/(2\pi f_T)$ 是 $1/g_m$ 的线性函数：

$$
\tau_T=\frac1{2\pi f_T}=\tau_F+\frac{C_{je}+C_\mu}{g_m}.
$$

两次测量都在 $V_{CB}=10$ V 下进行，因此 $C_{je}+C_\mu$ 相同。1 mA 时 $1/g_m=V_T/I_C=26\ \Omega$，10 mA 时为 $2.6\ \Omega$：

$$
\begin{aligned}
\tau_T(1\ \mathrm{mA})&=\frac1{2\pi(600\ \mathrm{MHz})}=265.3\ \mathrm{ps},\qquad
\tau_T(10\ \mathrm{mA})=\frac1{2\pi(1\ \mathrm{GHz})}=159.2\ \mathrm{ps},\\
C_{je}+C_\mu&=\frac{(265.3-159.2)\ \mathrm{ps}}{(26-2.6)\ \Omega}=4.53\ \mathrm{pF},\qquad
\tau_F=159.2\ \mathrm{ps}-(2.6\ \Omega)(4.53\ \mathrm{pF})=147.4\ \mathrm{ps}.
\end{aligned}
$$

减去 $C_\mu(10\ \mathrm V)=0.15$ pF 得 $C_{je}=4.38$ pF，并认为它在正向偏置区内恒定。

### 第 2 步 — 厄利电压与新偏置下的结电容

由 $r_o=V_A/I_C$ 得 $V_A=(50\ \mathrm{k\Omega})(1\ \mathrm{mA})=50$ V。反偏电容满足 $C=C_0/(1+V_R/\psi_0)^{1/2}$；先由 10 V 数据求出 $C_0$，其中 $\sqrt{1+10/0.55}=4.380$：

$$
\begin{aligned}
C_{\mu0}&=(0.15\ \mathrm{pF})(4.380)=0.657\ \mathrm{pF},&\quad C_\mu(2\ \mathrm V)&=\frac{0.657\ \mathrm{pF}}{\sqrt{1+2/0.55}}=\frac{0.657\ \mathrm{pF}}{2.153}=0.305\ \mathrm{pF},\\
C_{cs0}&=(1\ \mathrm{pF})(4.380)=4.38\ \mathrm{pF},&\quad C_{cs}(15\ \mathrm V)&=\frac{4.38\ \mathrm{pF}}{\sqrt{1+15/0.55}}=\frac{4.38\ \mathrm{pF}}{5.317}=0.824\ \mathrm{pF}.
\end{aligned}
$$

这两个值以及 $r_b=r_c=100\ \Omega$ 在三个电流下都相同。

### 第 3 步 — 与电流有关的元件

$g_m=I_C/V_T$，$r_\pi=\beta_0/g_m$，$r_o=V_A/I_C$，$r_\mu=5\beta_0r_o$，$C_\pi=\tau_Fg_m+C_{je}$。$I_C=1$ mA 时：

$$
g_m=\frac{1\ \mathrm{mA}}{26\ \mathrm{mV}}=38.5\ \mathrm{mA/V},\quad r_\pi=2.6\ \mathrm{k\Omega},\quad r_o=50\ \mathrm{k\Omega},\quad r_\mu=25\ \mathrm{M\Omega},
$$
$$
C_\pi=(147.4\ \mathrm{ps})(38.5\ \mathrm{mA/V})+4.38\ \mathrm{pF}=5.67\ \mathrm{pF}+4.38\ \mathrm{pF}=10.05\ \mathrm{pF}.
$$

| $I_C$ | $g_m$ | $r_\pi$ | $r_o$ | $r_\mu$ | $C_\pi=\tau_Fg_m+C_{je}$ |
|---|---|---|---|---|---|
| 0.1 mA | 3.85 mA/V | 26 kΩ | 500 kΩ | 250 MΩ | 0.57 + 4.38 = 4.95 pF |
| 1 mA | 38.5 mA/V | 2.6 kΩ | 50 kΩ | 25 MΩ | 5.67 + 4.38 = 10.05 pF |
| 5 mA | 192 mA/V | 520 Ω | 10 kΩ | 5 MΩ | 28.3 + 4.38 = 32.7 pF |

小电流时耗尽层电容在 $C_\pi$ 中占主导；5 mA 时基区充电项占主导。

### 第 4 步 — 等效电路

三个电流下拓扑相同，只有第 3 步的数值改变。题目未给出发射极电阻，因此取 $r_{ex}$ 为零：

- $r_b=100\ \Omega$ 接在 B 与内部基极 B′ 之间；
- $r_\pi\parallel C_\pi$ 接在 B′ 与发射极 E 之间，其上电压为 $v_1$；
- $r_\mu\parallel C_\mu$（$C_\mu=0.305$ pF）接在 B′ 与内部集电极 C′ 之间；
- $g_mv_1$ 与 $r_o$ 接在 C′ 与 E 之间；
- $r_c=100\ \Omega$ 接在 C′ 与 C 之间；
- $C_{cs}=0.824$ pF 接在 C′ 与衬底（交流地）之间。

<!-- diagram: diagram-01.cir -->
