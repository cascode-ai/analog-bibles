# 详细步骤 - A374

输出电平由输出级的大信号工作决定：求 $V_{OH}$ 时 p 沟道管 M6 被强烈导通（栅极处于最低值），在吸收 M7 固定电流的同时处于线性区；求 $V_{OL}$ 时 M6 截止。增益、分辨率和极点由未补偿两级放大器的小信号模型得到，其两个高阻节点各与自身电容形成一个极点。

### 第 1 步 — $V_{OH}$

$V_{G6}=0$ V 时，M6 的 $V_{SG6}=2.5$ V，过驱动电压 $V_{SG6}-|V_{TP}|=1.8$ V，$\beta_6=K'_P(W/L)_6=(50\ \mu\mathrm{A/V^2})(38)=1900\ \mu\mathrm{A/V^2}$。它必须在很小的 $V_{SD6}$ 下承载 $I_7=234\ \mu$A，即处于线性区：

$$
I_7=\beta_6\Bigl[(V_{SG6}-|V_{TP}|)V_{SD6}-\frac{V_{SD6}^2}2\Bigr].
$$

取较小的根，

$$
V_{SD6}=(V_{SG6}-|V_{TP}|)\Bigl[1-\sqrt{1-\frac{2I_7}{\beta_6(V_{SG6}-|V_{TP}|)^2}}\Bigr]
=(1.8\ \mathrm V)\bigl[1-\sqrt{1-0.0760}\bigr]=0.070\ \mathrm V,
$$
$$
V_{OH}=V_{DD}-V_{SD6}=2.5-0.070=2.43\ \mathrm V .
$$

### 第 2 步 — $V_{OL}$

第一级输出上升时 M6 截止。没有负载电流时，M7 把输出一直拉到底（它在 $V_{DS7}=0$ 处进入线性区，电流降为零）：

$$
V_{OL}=V_{SS}=-2.5\ \mathrm V .
$$

### 第 3 步 — 直流增益

用 $g_m=\sqrt{2K'(W/L)I_D}$ 和 $g_{ds}=\lambda I_D$：

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(3)(15\ \mu\mathrm A)}=99.5\ \mu\mathrm S,\qquad
g_{ds2}+g_{ds4}=(15\ \mu\mathrm A)(0.04+0.05)\ \mathrm{V^{-1}}=1.35\ \mu\mathrm S,
$$
$$
g_{m6}=\sqrt{2(50\ \mu\mathrm{A/V^2})(38)(234\ \mu\mathrm A)}=943\ \mu\mathrm S,\qquad
g_{ds6}+g_{ds7}=(234\ \mu\mathrm A)(0.09\ \mathrm{V^{-1}})=21.1\ \mu\mathrm S .
$$

$$
A_v(0)=\frac{g_{m1}}{g_{ds2}+g_{ds4}}\cdot\frac{g_{m6}}{g_{ds6}+g_{ds7}}=(73.7)(44.8)\approx3300\ \mathrm{V/V}.
$$

### 第 4 步 — 输入分辨率

$$
V_{in}(\min)=\frac{V_{OH}-V_{OL}}{A_v(0)}=\frac{2.43\ \mathrm V+2.5\ \mathrm V}{3300}\approx1.5\ \mathrm{mV}.
$$

### 第 5 步 — 极点

没有补偿时，每个高阻节点都有自己的极点，由该节点的输出电导和电容决定：

$$
p_1=-\frac{g_{ds2}+g_{ds4}}{C_I}=-\frac{1.35\ \mu\mathrm S}{0.2\ \mathrm{pF}}=-6.75\times10^6\ \mathrm{rad/s}\quad(1.07\ \mathrm{MHz}),
$$
$$
p_2=-\frac{g_{ds6}+g_{ds7}}{C_{II}}=-\frac{21.1\ \mu\mathrm S}{5\ \mathrm{pF}}=-4.21\times10^6\ \mathrm{rad/s}\quad(0.67\ \mathrm{MHz}).
$$

| 物理量 | 数值 |
|---|---|
| $V_{OH}$ | 2.43 V |
| $V_{OL}$ | −2.5 V |
| $A_v(0)$ | ≈ 3300 V/V |
| $V_{in}(\min)$ | ≈ 1.5 mV |
| $p_1$ | $-6.75\times10^6$ rad/s（1.07 MHz） |
| $p_2$ | $-4.21\times10^6$ rad/s（0.67 MHz） |
