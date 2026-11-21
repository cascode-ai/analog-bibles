# 详细步骤 - G061

使用去掉 $r_b$ 和 $r_o$ 的混合 π 模型（hybrid-π model）。集电极为交流地，基极为输入，发射极为输出并驱动 $R_L$。三个量都可由基极—发射极回路求得，回路中发射极电阻流过的电流是基极电流的 $(\beta_0+1)$ 倍。

### 第 1 步 — 小信号参数

$$
g_m=\frac{I_C}{V_T}=\frac{1\ \mathrm{mA}}{26\ \mathrm{mV}}=38.46\ \mathrm{mA/V},\qquad
r_\pi=\frac{\beta_0}{g_m}=\frac{200}{38.46\ \mathrm{mA/V}}=5.2\ \mathrm{k\Omega}.
$$

### 第 2 步 — 从基极看进去的输入电阻

设基极电流为 $i_b$。它产生 $v_{be}=i_br_\pi$ 和集电极电流 $g_mv_{be}=\beta_0i_b$，因此流过 $R_L$ 的发射极电流为 $(\beta_0+1)i_b$。从基极到地列 KVL：

$$
v_b=i_br_\pi+(\beta_0+1)i_bR_L
\quad\Rightarrow\quad
R_i=\frac{v_b}{i_b}=r_\pi+(\beta_0+1)R_L .
$$

$$
R_i=5.2\ \mathrm{k\Omega}+201\times500\ \Omega=5.2\ \mathrm{k\Omega}+100.5\ \mathrm{k\Omega}=105.7\ \mathrm{k\Omega}.
$$

### 第 3 步 — 计入 $R_S$ 和 $R_L$ 的电压增益

信号源看到 $R_S$ 与 $R_i$ 串联，故 $i_b=v_s/(R_S+R_i)$，输出为 $R_L$ 两端电压：

$$
\frac{v_o}{v_s}=\frac{(\beta_0+1)R_L}{R_S+r_\pi+(\beta_0+1)R_L}
=\frac{100.5\ \mathrm{k\Omega}}{5\ \mathrm{k\Omega}+5.2\ \mathrm{k\Omega}+100.5\ \mathrm{k\Omega}}
=\frac{100.5}{110.7}=0.908 .
$$

增益为正且略小于 1；损失来自 $R_S+r_\pi$ 与折算负载 $(\beta_0+1)R_L$ 之间的分压。

### 第 4 步 — 计入 $R_L$ 的输出电阻

令 $v_s=0$，在发射极加测试电压 $v_x$。此时基极经 $R_S$ 接地，基极电流为 $i_b=-v_x/(R_S+r_\pi)$，测试源流入发射极的电流为 $(\beta_0+1)|i_b|$。因此从发射极看进去的电阻为

$$
R_e=\frac{R_S+r_\pi}{\beta_0+1}=\frac{10.2\ \mathrm{k\Omega}}{201}=50.75\ \Omega,
$$

再与 $R_L$ 并联：

$$
R_o=R_e\,\|\,R_L=\frac{(50.75\ \Omega)(500\ \Omega)}{550.75\ \Omega}=46.1\ \Omega .
$$

结果为 $R_i=105.7\ \mathrm{k\Omega}$，$v_o/v_s=0.908$，$R_o=46.1\ \Omega$。跟随器在两个方向上都按 $(\beta_0+1)$ 变换阻抗：500 Ω 负载在基极表现为 100.5 kΩ，基极侧 10.2 kΩ 的电阻在发射极表现为约 51 Ω。
