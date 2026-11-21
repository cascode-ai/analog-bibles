# 详细步骤 - G054

用混合 π 模型（$r_b=0$）代替晶体管，并把该级当作二端口网络描述：基极看进去的输入电阻、从输入电压到输出电流的短路跨导，以及输入源置零时从集电极看进去的电阻。

### 第 1 步 — 小信号参数

$I_C=250\ \mu$A 时：

$$
g_m=\frac{I_C}{V_T}=\frac{250\ \mu\mathrm A}{26\ \mathrm{mV}}=9.62\ \mathrm{mA/V},\qquad
r_\pi=\frac{\beta_0}{g_m}=\frac{200}{9.62\ \mathrm{mA/V}}=20.8\ \mathrm{k\Omega},\qquad
r_o=\frac{V_A}{I_C}=\frac{130\ \mathrm V}{250\ \mu\mathrm A}=520\ \mathrm{k\Omega}.
$$

### 第 2 步 — 输入电阻

$r_b=0$ 时基极直接接到 $r_\pi$，发射极接地，故

$$
R_i=r_\pi=20.8\ \mathrm{k\Omega}.
$$

### 第 3 步 — 跨导

输出对地短路时，$R_C$ 和 $r_o$ 中没有电流，输出电流就是受控源的电流：$i_o=g_mv_i$。因此

$$
G_m=\left.\frac{i_o}{v_i}\right|_{v_o=0}=g_m=9.62\ \mathrm{mA/V}.
$$

### 第 4 步 — 输出电阻

$v_i=0$ 时 $v_{be}=0$，受控源不起作用，只剩 $r_o$ 与 $R_C$ 并联：

$$
R_o=R_C\parallel r_o=\frac{(20\ \mathrm{k\Omega})(520\ \mathrm{k\Omega})}{20\ \mathrm{k\Omega}+520\ \mathrm{k\Omega}}=19.3\ \mathrm{k\Omega}.
$$

$r_o$ 是 $R_C$ 的 26 倍，因此只使输出电阻降低约 4%。该级的开路电压增益为 $-G_mR_o=-185$。

结果：$R_i=20.8$ kΩ，$G_m=9.62$ mA/V，$R_o=19.3$ kΩ。
