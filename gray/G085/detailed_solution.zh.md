# 详细步骤 - G085

把有源负载对的增益写成 $v_o/v_i=G_mR_o$。$G_m$ 是单位输入电压产生的短路输出电流（short-circuit output current），$R_o$ 是 $v_i=0$ 时从输出端看进去的电阻。发射极电阻对电流镜两侧施加相同的负反馈，因此几乎不改变电流镜的电流增益和 $G_m$。但它们提高了 $Q_4$ 的输出电阻，输出电阻与增益一同增大。

### 第 1 步 — 偏置与小信号参数

理想的 100-µA 尾电流平均分配，每个晶体管都流过 $I_C=50\ \mu\mathrm A$：

$$
g_m=\frac{I_C}{V_T}=\frac{50\ \mu\mathrm A}{26\ \mathrm{mV}}=1.92\ \mathrm{mA/V},\qquad
r_{o,npn}=\frac{130\ \mathrm V}{50\ \mu\mathrm A}=2.6\ \mathrm{M\Omega},\qquad
r_{o,pnp}=\frac{50\ \mathrm V}{50\ \mu\mathrm A}=1\ \mathrm{M\Omega},
$$

$$
r_{\pi,pnp}=\frac{\beta_0}{g_m}=\frac{50}{1.92\ \mathrm{mA/V}}=26\ \mathrm{k\Omega}.
$$

每个 2-kΩ 电阻上只有 0.1 V 压降，所有器件仍工作在正向放大区。

### 第 2 步 — 跨导

输出短接到交流地时，输入电压平分在两个发射结上：$i_{c1}=g_mv_i/2$，$i_{c2}=-g_mv_i/2$。电流镜把 $i_{c1}$ 复制到输出端。$Q_3$ 与 $Q_4$ 的发射极负反馈完全相同，所以除 pnp 基极电流外复制是精确的。这些基极电流使电流镜增益降为约 $1/(1+2/\beta_{0,pnp})=0.962$。送到输出端的电流为镜像电流减去 $i_{c2}$：

$$
G_m=\frac{g_m}2(1+0.962)=0.98\,g_m=1.88\ \mathrm{mA/V}\ (\approx g_m=1.92\ \mathrm{mA/V}\ \text{for an ideal mirror}).
$$

$v_i$ 增大时 $i_{c1}$ 增大，电流镜向输出端推入更多电流，而 $Q_2$ 吸收的电流减少，因此增益为正。

### 第 3 步 — 带负反馈的负载管 $Q_4$ 的输出电阻

$Q_4$ 的基极由二极管一侧的低阻抗（$\approx1/g_m+R_E$）驱动，因此可用带发射极负反馈（emitter degeneration）$R_E$、基极接低阻抗的晶体管的标准结果：

$$
R_{o4}\approx r_{o4}\left[1+g_m\left(R_E\,\|\,r_{\pi4}\right)\right],\qquad R_E\|r_{\pi4}=2\ \mathrm{k\Omega}\,\|\,26\ \mathrm{k\Omega}=1.86\ \mathrm{k\Omega},
$$

$$
R_{o4}=(1\ \mathrm{M\Omega})\left[1+(1.92\ \mathrm{mA/V})(1.86\ \mathrm{k\Omega})\right]=4.57\ \mathrm{M\Omega}.
$$

$r_{\pi4}$ 与 $R_E$ 并联，是因为一部分发射极电流经基极返回。

### 第 4 步 — 整个电路的输出电阻

流入输出端的测试电流在 $Q_4$ 与 $Q_2$ 之间分配。流入 $Q_2$ 集电极的部分看到约 $2r_{o2}$（$Q_1$ 的发射极给 $Q_2$ 提供 $1/g_m$ 的负反馈）。这部分电流经 $Q_1$ 的发射极流出，流过 $Q_3$，再由 $Q_4$ 镜像回输出端，使其作用加倍，因此 $Q_2$ 一侧贡献 $r_{o2}$，与不加负反馈的电路相同。于是

$$
R_o\approx r_{o2}\,\|\,R_{o4}=2.6\ \mathrm{M\Omega}\,\|\,4.57\ \mathrm{M\Omega}=1.66\ \mathrm{M\Omega}.
$$

对混合 $\pi$ 电路做完整的节点分析（计入全部基极电流），得 $R_o=1.64\ \mathrm{M\Omega}$。

### 第 5 步 — 电压增益

$$
\frac{v_o}{v_i}=G_mR_o=(1.88\ \mathrm{mA/V})(1.64\ \mathrm{M\Omega})=+3.1\times10^3 .
$$

若电流镜理想（$G_m=g_m$），估算值为 $(1.92\ \mathrm{mA/V})(1.66\ \mathrm{M\Omega})=3.2\times10^3$。完整求解给出 $3.09\times10^3$。

不加发射极电阻时，$R_o=r_{o2}\|r_{o4}=2.6\ \mathrm{M\Omega}\,\|\,1\ \mathrm{M\Omega}=0.72\ \mathrm{M\Omega}$，增益约为 $1.4\times10^3$。对 pnp 负载施加负反馈，使其输出电阻从 1 MΩ 提高到 4.6 MΩ。此时由 npn 一侧（$r_{o2}=2.6\ \mathrm{M\Omega}$）限制 $R_o$，增益提高约 2.3 倍。
