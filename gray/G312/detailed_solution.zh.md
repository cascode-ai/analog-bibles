# 详细步骤 - G312

这是一个两级 CMOS 运放：PMOS 差分对 $M_1$–$M_2$ 带电流镜负载 $M_3$–$M_4$，后接以电流源 $M_7$ 为负载的共源级 $M_6$，并通过消零电阻 $M_9$ 用 $C_c$ 进行密勒补偿。由各电流镜求偏置电流，计算 $L_{\text{eff}}$、$\lambda$、$g_m$ 和 $r_o$，再把两级增益相乘。零点消除后，单位增益带宽为 $g_{m1}/C_c$，压摆率为尾电流除以 $C_c$。

### 第 1 步 — 有效长度与 $\lambda$

所有画出的沟道长度都是 1 μm，因此对每个工作在有源区的器件
$$
L_{\text{eff}}=L_{\text{drwn}}-2L_d-X_d=1-2(0.09)-0.1=0.72\ \mu\mathrm m .
$$
由 $\lambda=(dX_d/dV_{DS})/L_{\text{eff}}$：
$$
\lambda_n=\frac{0.02\ \mu\mathrm{m/V}}{0.72\ \mu\mathrm m}=0.0278\ \mathrm{V^{-1}},\qquad
\lambda_p=\frac{0.04\ \mu\mathrm{m/V}}{0.72\ \mu\mathrm m}=0.0556\ \mathrm{V^{-1}}.
$$

### 第 2 步 — 偏置电流

$M_8$ 接成二极管，流过 200 μA 参考电流。$M_5$、$M_7$ 尺寸相同、$V_{GS}$ 相同，忽略电流镜中的沟道长度调制，它们也各流过 200 μA。

- 尾电流 $I_{D5}=200$ μA 平分：$I_{D1}=I_{D2}=I_{D3}=I_{D4}=100$ μA。
- 平衡时 $M_4$ 的漏极电压与二极管接法的 $M_3$ 的漏极电压相同，故 $V_{GS6}=V_{GS3}$。$M_6$（100/1）是 $M_3$（50/1）的两倍，因此 $I_{D6}=200$ μA。这与 $M_7$ 提供的 200 μA 一致，输出偏置自洽。

### 第 3 步 — 第一级增益

由 $I_D=\frac{k'}{2}\frac{W}{L_{\text{eff}}}V_{ov}^2$，跨导为 $g_m=\sqrt{2k'(W/L_{\text{eff}})I_D}$。$M_1$ 的 $W/L_{\text{eff}}=150/0.72=208.3$：
$$
g_{m1}=\sqrt{2\left(64.7\ \mu\mathrm{A/V^2}\right)(208.3)(100\ \mu\mathrm A)}=1.642\ \mathrm{mA/V},\qquad |V_{ov1}|=\frac{2I_{D1}}{g_{m1}}=0.122\ \mathrm V .
$$
采用电流镜负载时，第一级相当于跨导 $g_{m1}$ 驱动 $M_2$、$M_4$ 漏极处的电阻：
$$
r_{o2}=\frac1{\lambda_pI_{D2}}=\frac1{(0.0556\ \mathrm{V^{-1}})(100\ \mu\mathrm A)}=180\ \mathrm{k\Omega},\qquad
r_{o4}=\frac1{\lambda_nI_{D4}}=360\ \mathrm{k\Omega},
$$
$$
R_1=r_{o2}\,\|\,r_{o4}=120\ \mathrm{k\Omega},\qquad a_1=g_{m1}R_1=(1.642\ \mathrm{mA/V})(120\ \mathrm{k\Omega})=197 .
$$

### 第 4 步 — 第二级增益与总增益

$M_6$ 的 $W/L_{\text{eff}}=100/0.72=138.9$，电流 200 μA：
$$
g_{m6}=\sqrt{2\left(194\ \mu\mathrm{A/V^2}\right)(138.9)(200\ \mu\mathrm A)}=3.283\ \mathrm{mA/V}.
$$
输出电阻为
$$
r_{o6}=\frac1{(0.0278\ \mathrm{V^{-1}})(200\ \mu\mathrm A)}=180\ \mathrm{k\Omega},\qquad
r_{o7}=\frac1{(0.0556\ \mathrm{V^{-1}})(200\ \mu\mathrm A)}=90\ \mathrm{k\Omega},\qquad
R_2=60\ \mathrm{k\Omega},
$$
因此 $a_2=g_{m6}R_2=(3.283\ \mathrm{mA/V})(60\ \mathrm{k\Omega})=197$。低频增益幅值为
$$
|a_0|=a_1a_2=197\times197=3.88\times10^4\quad(91.8\ \mathrm{dB}).
$$
关于符号：标 + 的输入驱动电流镜二极管一侧的 $M_1$，所以从该输入看第一级是同相的，而 $M_6$ 反相。因此从 + 端看增益为 $-3.88\times10^4$。

### 第 5 步 — 单位增益带宽

$M_9$ 栅极接 $V_{DD}$，工作在线性区（triode region），相当于电阻 $R_z$。取 $R_z=1/g_{m6}$ 可把 $C_c$ 引入的零点移到无穷远。此时响应由第一级输出处的密勒极点主导，在该极点以上
$$
a(j\omega)\approx\frac{g_{m1}}{j\omega C_c}.
$$
令其幅值为 1：
$$
\omega_u=\frac{g_{m1}}{C_c}=\frac{1.642\ \mathrm{mA/V}}{5\ \mathrm{pF}}=3.28\times10^8\ \mathrm{rad/s},\qquad f_u=52.3\ \mathrm{MHz}.
$$

### 第 6 步 — 压摆率

大输入信号把全部 $I_{D5}$ 切换到差分对的一侧，经电流镜后第一级向 $C_c$ 提供 $\pm I_{D5}$。同时第二级使其输入电压几乎不变，因此 $dV_o/dt=I_{D5}/C_c$：
$$
SR=\frac{I_{D5}}{C_c}=\frac{200\ \mu\mathrm A}{5\ \mathrm{pF}}=40\ \mathrm{V/\mu s}.
$$
输出级能支持这一速率。输出上升时需要 $M_7$ 提供 $C_c\,dV_o/dt=200$ μA，而它恰好提供 200 μA；输出下降时由 $M_6$ 吸收电流，它能吸收更大的电流。
