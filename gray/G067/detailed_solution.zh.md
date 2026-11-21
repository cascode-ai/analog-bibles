# 详细步骤 - G067

把 cascode 看成共射级 $Q_1$，其集电极电流由共基级 $Q_2$ 传送到输出端。输入电阻和跨导由 $Q_1$ 决定；输出电阻是以 $r_{o1}$ 作发射极负反馈（emitter degeneration）的 $Q_2$ 的输出电阻；开路增益为 $-G_mR_o$。

### 第 1 步 — 小信号参数

两个晶体管都流过 250 µA，参数相同：

$$
g_m=\frac{I_C}{V_T}=\frac{250\ \mu\mathrm A}{26\ \mathrm{mV}}=9.615\ \mathrm{mA/V},\qquad
r_\pi=\frac{\beta_0}{g_m}=20.8\ \mathrm{k\Omega},\qquad
r_o=\frac{V_A}{I_C}=\frac{130\ \mathrm V}{250\ \mu\mathrm A}=520\ \mathrm{k\Omega}.
$$

### 第 2 步 — 输入电阻

输入端是 $Q_1$ 的基极，其发射极接地；忽略 $r_b$ 和 $r_\mu$ 后，基极与电路其余部分没有其他连接，因此

$$
R_i=r_{\pi1}=20.8\ \mathrm{k\Omega}.
$$

### 第 3 步 — 跨导

把输出端短路到地。$Q_1$ 产生集电极电流 $g_{m1}v_i$（从 $Q_2$ 发射极所在节点吸取）。该节点一侧是接地的 $r_{o1}$，另一侧是 $Q_2$ 的发射极；基极和集电极为交流地时，发射极电阻为 $r_{e2}=\alpha_0/g_{m2}=103.5\ \Omega$。由于 $r_{e2}\ll r_{o1}$，几乎全部电流流入 $Q_2$，并由它把其中 $\alpha_0$ 的比例传到集电极：

$$
G_m\approx g_{m1}\,\alpha_0\,\frac{r_{o1}}{r_{o1}+r_{e2}}
=(9.615\ \mathrm{mA/V})(0.9950)\frac{520\ \mathrm{k\Omega}}{520.1\ \mathrm{k\Omega}}=9.57\ \mathrm{mA/V}\approx g_{m1}.
$$

### 第 4 步 — 输出电阻

$v_i=0$ 时，$Q_1$ 只相当于从 $Q_2$ 发射极到地的电阻 $r_{o1}$。带发射极电阻 $R_E$（基极为交流地）的双极晶体管，从集电极看进去的电阻为

$$
R_o=r_o\left[1+g_m(R_E\|r_\pi)\right]+R_E\|r_\pi ,
$$

它由发射极和集电极的 KCL 得到：测试电流流过 $R_E\|r_\pi$，抬高发射极电压，产生 $v_{be}=-i_x(R_E\|r_\pi)$，受控源再把它放大到 $r_o$ 两端。此处 $R_E=r_{o1}$：

$$
r_{o1}\|r_{\pi2}=520\ \mathrm{k\Omega}\,\|\,20.8\ \mathrm{k\Omega}=20.0\ \mathrm{k\Omega},\qquad g_{m2}(20.0\ \mathrm{k\Omega})=192.3,
$$

$$
R_o=520\ \mathrm{k\Omega}\,(1+192.3)+20.0\ \mathrm{k\Omega}=100.5\ \mathrm{M\Omega}.
$$

由于 $r_{o1}\gg r_{\pi2}$，负反馈的作用受 $r_{\pi2}$ 限制，$R_o\approx r_{o2}(1+g_{m2}r_{\pi2})\approx\beta_0r_{o2}=104\ \mathrm{M\Omega}$。MOS cascode 的估计 $g_{m2}r_{o2}r_{o1}\approx2.6\ \mathrm{G\Omega}$ 在此不适用：$Q_2$ 的有限基极电流把输出电阻限制在约 $\beta_0r_o$。

### 第 5 步 — 最大开路电压增益

负载电阻为无穷大时，短路输出电流 $G_mv_i$ 全部流入 $R_o$，且该级为反相：

$$
A_v=-G_mR_o=-(9.57\ \mathrm{mA/V})(100.5\ \mathrm{M\Omega})=-9.6\times10^5 .
$$

（若取 $G_m\approx g_{m1}=9.615$ mA/V，则得 $-9.7\times10^5$。）在 $R_o\approx\beta_0r_{o2}$ 的极限下，$A_v\approx-g_{m1}\beta_0r_{o2}=-\beta_0V_A/V_T=-1.0\times10^6$。

结果为 $R_i=20.8\ \mathrm{k\Omega}$，$G_m\approx9.6$ mA/V，$R_o\approx100.5\ \mathrm{M\Omega}$，$A_v\approx-9.7\times10^5$。
