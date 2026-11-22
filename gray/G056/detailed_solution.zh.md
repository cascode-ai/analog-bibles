# 详细步骤 - G056

该级的增益 $v_o/v_i=-\beta_0(R_C\parallel r_o)/(R_S+r_\pi)$ 通过 $r_\pi=\beta_0V_T/I_C$ 和 $r_o=V_A/I_C$ 依赖于 $I_C$。对 $I_C$ 求最大值得到最优电流，再计算该电流下 $R_C$ 上的直流压降和小信号参数。

### 第 1 步 — 最优集电极电流

$r_b=0$ 时，由输入分压和集电极负载得

$$
\frac{v_o}{v_i}=-\frac{\beta_0(R_C\parallel r_o)}{R_S+r_\pi}=-\frac{\beta_0R_CV_AI_C}{(V_A+I_CR_C)(I_CR_S+\beta_0V_T)} .
$$

令 $I_C/[(V_A+I_CR_C)(I_CR_S+\beta_0V_T)]$ 的导数为零，得 $R_CR_SI_C^2=\beta_0V_TV_A$：

$$
I_{C,\text{opt}}=\sqrt{\frac{\beta_0V_TV_A}{R_SR_C}}=\sqrt{\frac{(200)(0.026\ \mathrm V)(130\ \mathrm V)}{(50\ \mathrm{k\Omega})^2}}=\frac{26\ \mathrm V}{50\ \mathrm{k\Omega}}=520\ \mu\mathrm A .
$$

### 第 2 步 — $R_C$ 上的直流压降

$$
V_{R_C}=I_{C,\text{opt}}R_C=(520\ \mu\mathrm A)(50\ \mathrm{k\Omega})=26\ \mathrm V .
$$

要使晶体管不进入饱和，电源电压至少需约 27 V，因此在低压电路中这一最优点并不实用。

### 第 3 步 — 电压增益

520 µA 时：

$$
g_m=\frac{520\ \mu\mathrm A}{26\ \mathrm{mV}}=20\ \mathrm{mA/V},\qquad r_\pi=\frac{200}{20\ \mathrm{mA/V}}=10\ \mathrm{k\Omega},\qquad r_o=\frac{130\ \mathrm V}{520\ \mu\mathrm A}=250\ \mathrm{k\Omega},
$$
$$
R_C\parallel r_o=41.7\ \mathrm{k\Omega},\qquad
\frac{v_o}{v_i}=-\frac{(200)(41.7\ \mathrm{k\Omega})}{50\ \mathrm{k\Omega}+10\ \mathrm{k\Omega}}=-139 .
$$

验算：$R_C/r_o=50/250=0.2=r_\pi/R_S$，正是最优点的平衡条件。

结果：$I_C=520\ \mu$A，$R_C$ 上压降为 26 V，$v_o/v_i\approx-139$。
