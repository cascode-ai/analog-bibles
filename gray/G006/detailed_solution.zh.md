# 详细步骤 - G006

先由单边集电结的平面结击穿求出 $BV_{CBO}$。然后利用以下事实：基极开路时，雪崩产生的空穴充当基极电流并被晶体管放大；这一再生环路使击穿发生在 $M\alpha_F=1$ 处，远低于 $BV_{CBO}$。

### 第 1 步 — 集电结的 $BV_{CBO}$

基区掺杂远重于集电区，因此耗尽区位于集电区，掺杂浓度为 $N_D=6\times10^{15}\ \mathrm{cm^{-3}}$。由泊松方程（Poisson's equation）可得单边突变结的峰值电场 $|\mathcal E_{max}|=\sqrt{2qN_DV_R/\epsilon}$（取 $V_R\gg\psi_0$）。令其等于 $\mathcal E_{crit}$：

$$
BV_{CBO}=\frac{\epsilon\,\mathcal E_{crit}^2}{2qN_D}
=\frac{(1.04\times10^{-12}\ \mathrm{F/cm})(3\times10^5\ \mathrm{V/cm})^2}{2(1.6\times10^{-19}\ \mathrm C)(6\times10^{15}\ \mathrm{cm^{-3}})}=48.75\ \mathrm V.
$$

### 第 2 步 — 共射极接法下的击穿条件

到达集电极的电子电流 $\alpha_FI_E$ 在集电结耗尽区内被倍增 $M$ 倍，故 $I_C=M\alpha_FI_E$。基极电流为 $I_B=I_E-I_C$，代入 $I_E=I_C/(M\alpha_F)$：

$$
I_C=\frac{M\alpha_F}{1-M\alpha_F}\,I_B .
$$

在 $I_B$ 有限（或基极开路时为零）的情况下，当 $M\alpha_F\to1$ 时集电极电流无限增大，这就是 $BV_{CEO}$ 的定义。由于 $V_{BE}\approx0.7$ V 远小于击穿电压，$V_{CB}\approx V_{CE}$，代入倍增规律得

$$
\frac{\alpha_F}{1-(BV_{CEO}/BV_{CBO})^n}=1
\quad\Rightarrow\quad
BV_{CEO}=BV_{CBO}(1-\alpha_F)^{1/n}\approx\frac{BV_{CBO}}{\beta_F^{1/n}},
$$

其中利用了 $1-\alpha_F=1/(\beta_F+1)\approx1/\beta_F$。

### 第 3 步 — 数值结果

取 $\beta_F=200$、$n=4$，$200^{1/4}=3.761$：

$$
BV_{CEO}=\frac{48.75\ \mathrm V}{3.761}=12.96\ \mathrm V\approx13\ \mathrm V.
$$

若用精确值 $1-\alpha_F=1/201$，结果仅变为 12.95 V。电流增益使基极开路击穿电压约为 $BV_{CBO}$ 的四分之一：只需很小的倍增，$M=1/\alpha_F=1.005$。

结果：$BV_{CBO}=48.8$ V，$BV_{CEO}\approx13$ V。
