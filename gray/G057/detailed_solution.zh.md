# 详细步骤 - G057

用去掉 $r_b$ 和 $r_o$ 的混合 π 模型（hybrid-π model）代替晶体管，基极接交流地，再从发射极节点和集电极节点读出三个二端口参数。

### 第 1 步 — 偏置点处的小信号参数

在正向放大区（forward-active region），集电极电流随 $V_{BE}$ 指数变化，因此

$$
g_m=\frac{I_C}{V_T}=\frac{250\ \mu\mathrm A}{26\ \mathrm{mV}}=9.615\ \mathrm{mA/V},\qquad
r_\pi=\frac{\beta_0}{g_m}=\frac{200}{9.615\ \mathrm{mA/V}}=20.8\ \mathrm{k\Omega},
$$

$$
\alpha_0=\frac{\beta_0}{\beta_0+1}=\frac{200}{201}=0.99502.
$$

基极接地时，基射电压为 $v_{be}=-v_i$，其中 $v_i$ 为发射极电压。

### 第 2 步 — 输入电阻

在发射极加测试电压 $v_i$。流入发射极节点的电流有两个：输入电流 $i_i$ 和受控源电流 $g_mv_{be}$（方向由集电极指向发射极）。电流 $v_i/r_\pi$ 经 $r_\pi$ 流向接地的基极。由 KCL 得

$$
i_i=\frac{v_i}{r_\pi}-g_mv_{be}=\frac{v_i}{r_\pi}+g_mv_i
\quad\Rightarrow\quad
R_i=\frac{v_i}{i_i}=r_\pi\,\Big\|\,\frac1{g_m}=\frac{1}{g_m}\cdot\frac{\beta_0}{\beta_0+1}=\frac{\alpha_0}{g_m}=r_e.
$$

数值计算：

$$
R_i=\frac{0.99502}{9.615\ \mathrm{mA/V}}=103.5\ \Omega .
$$

输入电阻为 $r_e\approx1/g_m=104\ \Omega$，而不是 $r_\pi$：受控源由全部输入电压驱动，提供了几乎全部输入电流。

### 第 3 步 — 跨导

输出端短路到地（$v_o=0$，$R_C$ 中没有信号电流）时，流入集电极端的短路电流就是受控源电流 $-g_mv_{be}=g_mv_i$。取 $i_o$ 为集电极从输出节点吸取的电流，

$$
G_m=\left.\frac{i_o}{v_i}\right|_{v_o=0}=g_m=9.62\ \mathrm{mA/V}.
$$

共基级是同相的：$v_i$ 为正时 $v_{be}$ 减小，集电极经 $R_C$ 吸取的电流减小，$v_o$ 上升。

### 第 4 步 — 输出电阻

令 $v_i=0$。此时 $v_{be}=0$，受控源电流为零；忽略 $r_o$ 后，集电极与地之间再无其他支路。从输出节点看进去只剩 $R_C$（电源为交流地）：

$$
R_o=R_C=10\ \mathrm{k\Omega}.
$$

结果为 $R_i=103.5\ \Omega$（约 104 Ω），$G_m=9.62$ mA/V，$R_o=10\ \mathrm{k\Omega}$，开路电压增益（open-circuit voltage gain）为 $G_mR_o=96.2$。
