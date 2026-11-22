# 详细步骤 - G034

双极晶体管的饱和电流与基区 Gummel 数（Gummel number）$Q_B$ 成反比，因此在已知 $I_C$ 下测得的 $V_{BE}$ 就确定了 $Q_B$。夹断电阻使用同一有源基区层，其方块电阻也与同一个 $Q_B$ 成反比。

### 第 1 步 — 由 $V_{BE}$ 求 $Q_B$

对于复合可以忽略、扩散系数恒定的基区，集电极电流为

$$
I_C=I_Se^{V_{BE}/V_T},\qquad I_S=\frac{qA\bar D_nn_i^2}{Q_B},
$$

其中 $Q_B$ 为基区单位面积的受主数。解出 $Q_B$：

$$
Q_B=\frac{qA\bar D_nn_i^2}{I_C}\,e^{V_{BE}/V_T}.
$$

取 $A=(100\ \mu\mathrm m)^2=10^{-4}\ \mathrm{cm^2}$：

$$
\frac{qA\bar D_nn_i^2}{I_C}=\frac{(1.6\times10^{-19}\ \mathrm C)(10^{-4}\ \mathrm{cm^2})(13\ \mathrm{cm^2/s})(2.25\times10^{20}\ \mathrm{cm^{-6}})}{10\ \mu\mathrm A}=4680\ \mathrm{cm^{-2}}.
$$

$V_{BE}=520$ mV 时，$e^{520/26}=e^{20}=4.85\times10^8$，故 $Q_B=2.27\times10^{12}\ \mathrm{cm^{-2}}$（$I_S=2.1\times10^{-14}$ A）。580 mV 时，$e^{22.31}=4.88\times10^9$，故 $Q_B=2.28\times10^{13}\ \mathrm{cm^{-2}}$（$I_S=2.1\times10^{-15}$ A）。

### 第 2 步 — 夹断电阻的方块电阻

夹断电阻在同一有源基区层中由空穴导电，其方块电导等于 $q\mu_p$ 乘以单位面积受主数：

$$
R_\square=\frac1{q\mu_pQ_B}.
$$

$Q_B=2.27\times10^{12}\ \mathrm{cm^{-2}}$ 时：

$$
R_\square=\frac1{(1.6\times10^{-19}\ \mathrm C)(150\ \mathrm{cm^2/V\,s})(2.27\times10^{12}\ \mathrm{cm^{-2}})}=18.4\ \mathrm{k\Omega}/\square .
$$

| $V_{BE}$ (mV) | $I_S$ (A) | $Q_B$ (cm⁻²) | 夹断电阻 $R_\square$ (kΩ/□) |
|---|---|---|---|
| 520 | $2.1\times10^{-14}$ | $2.27\times10^{12}$ | 18.4 |
| 580 | $2.1\times10^{-15}$ | $2.28\times10^{13}$ | 1.83 |

### 第 3 步 — 解释

$V_{BE}$ 相差 60 mV，对应 $I_S$ 相差 $e^{60/26}=10$ 倍，因此 $Q_B$ 和夹断方块电阻都有 10:1 的分散。$V_{BE}$ 越高，$I_S$ 越小，基区电荷越多，夹断电阻的方块电阻越低：从 520 mV 晶圆上的约 18 kΩ/□ 降到 580 mV 晶圆上的约 1.8 kΩ/□。
