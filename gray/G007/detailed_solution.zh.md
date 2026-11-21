# 详细步骤 - G007

先由单边集电结的平面结击穿求出 $BV_{CBO}$，再把它折算为基极开路时的值：进入基区的雪崩电流被晶体管放大，因此共射极接法下的击穿发生在 $M\alpha_F=1$ 处。

### 第 1 步 — $BV_{CBO}$

基区掺杂远重于集电区，因此耗尽区位于集电区，$N_D=10^{15}\ \mathrm{cm^{-3}}$。单边突变结的峰值电场为 $|\mathcal E_{max}|=\sqrt{2qN_DV_R/\epsilon}$，由泊松方程（Poisson's equation）在 $V_R\gg\psi_0$ 时得到。令其等于 $\mathcal E_{crit}$：

$$
BV_{CBO}=\frac{\epsilon\,\mathcal E_{crit}^2}{2qN_D}=\frac{(1.04\times10^{-12}\ \mathrm{F/cm})(3\times10^5\ \mathrm{V/cm})^2}{2(1.6\times10^{-19}\ \mathrm C)(10^{15}\ \mathrm{cm^{-3}})}=292.5\ \mathrm V .
$$

### 第 2 步 — 基极开路的击穿条件

计入集电结耗尽区内的倍增，$I_C=M\alpha_FI_E$，$I_B=I_E-I_C$，故

$$
I_C=\frac{M\alpha_F}{1-M\alpha_F}\,I_B ,
$$

当 $M\alpha_F=1$ 时它发散。取 $V_{CB}\approx V_{CE}$（因为 $V_{BE}\approx0.7$ V 很小），代入倍增规律：

$$
1-\left(\frac{BV_{CEO}}{BV_{CBO}}\right)^n=\alpha_F
\quad\Rightarrow\quad
BV_{CEO}=BV_{CBO}(1-\alpha_F)^{1/n}\approx\frac{BV_{CBO}}{\beta_F^{1/n}} .
$$

### 第 3 步 — 数值结果

取 $\beta_F=400$、$n=4$，$400^{1/4}=4.472$：

$$
BV_{CEO}=\frac{292.5\ \mathrm V}{4.472}=65.4\ \mathrm V .
$$

用精确形式 $1-\alpha_F=1/401$ 同样得到 65.4 V。与 $6\times10^{15}\ \mathrm{cm^{-3}}$ 的集电区掺杂相比，较轻的掺杂使 $BV_{CBO}$ 提高到 6 倍，而较高的 $\beta_F$ 又抵消了 $BV_{CEO}$ 的一部分增益。

结果：$BV_{CBO}=293$ V，$BV_{CEO}\approx65$ V。
