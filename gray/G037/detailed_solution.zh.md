# 详细步骤 - G037

衬底 $pnp$ 管的基区是发射区底部与衬底之间均匀掺杂的外延层，因此其 Gummel 数为 $Q_B=N_DW_B$。在已知 $I_C$ 下测得的 $V_{BE}$ 确定 $I_S$，进而确定 $Q_B$ 和 $W_B$；再加上 3 µm 的发射区深度即得外延层厚度。外延夹断电阻经由同一段外延层导电，因此其方块电阻也由同一个 $Q_B$ 决定。

### 第 1 步 — 外延层施主浓度

用题给的电子迁移率，

$$
N_D=\frac1{q\mu_n\rho}=\frac1{(1.6\times10^{-19}\ \mathrm C)(800\ \mathrm{cm^2/V\,s})(2\ \Omega\,\mathrm{cm})}=3.9\times10^{15}\ \mathrm{cm^{-3}}.
$$

### 第 2 步 — 由 $V_{BE}$ 求基区电荷

对于均匀掺杂、纵向流动且复合可忽略的基区，

$$
I_C=I_Se^{V_{BE}/V_T},\qquad I_S=\frac{qAD_pn_i^2}{Q_B}\quad\Rightarrow\quad Q_B=\frac{qAD_pn_i^2}{I_C}e^{V_{BE}/V_T},
$$

其中 $Q_B=N_DW_B$ 为基区单位面积的施主数。取 $A=5100\ \mu\mathrm m^2=5.1\times10^{-5}\ \mathrm{cm^2}$：

$$
\frac{qAD_pn_i^2}{I_C}=\frac{(1.6\times10^{-19}\ \mathrm C)(5.1\times10^{-5}\ \mathrm{cm^2})(10\ \mathrm{cm^2/s})(2.25\times10^{20}\ \mathrm{cm^{-6}})}{10\ \mu\mathrm A}=1836\ \mathrm{cm^{-2}}.
$$

525 mV 时，$e^{525/26}=e^{20.19}=5.88\times10^8$，$Q_B=1.08\times10^{12}\ \mathrm{cm^{-2}}$。

### 第 3 步 — 基区宽度与外延层厚度

$$
W_B=\frac{Q_B}{N_D}=\frac{1.08\times10^{12}\ \mathrm{cm^{-2}}}{3.9\times10^{15}\ \mathrm{cm^{-3}}}=2.76\times10^{-4}\ \mathrm{cm}=2.8\ \mu\mathrm m,\qquad
t_{epi}=W_B+3\ \mu\mathrm m=5.8\ \mu\mathrm m.
$$

| $V_{BE}$ (mV) | $Q_B$ (cm⁻²) | $W_B$ (µm) | $t_{epi}$ (µm) |
|---|---|---|---|
| 525 | $1.08\times10^{12}$ | 2.8 | 5.8 |
| 560 | $4.15\times10^{12}$ | 10.6 | 13.6 |

### 第 4 步 — 外延夹断电阻的方块电阻

夹断电阻在 3 µm 覆盖层与衬底之间厚度为 $W_B$ 的外延层中由电子导电，故

$$
R_\square=\frac\rho{W_B}=\frac1{q\mu_nQ_B}.
$$

525 mV 时：$R_\square=1/[(1.6\times10^{-19}\ \mathrm C)(800\ \mathrm{cm^2/V\,s})(1.08\times10^{12}\ \mathrm{cm^{-2}})]=7.2\ \mathrm{k\Omega}/\square$；560 mV 时为 1.9 kΩ/□。

因此外延层厚度约在 5.8 µm（525 mV 的晶圆）到 13.6 µm（560 mV 的晶圆）之间，外延夹断电阻的方块电阻约从 7.2 kΩ/□（薄外延层）降到 1.9 kΩ/□（厚外延层）。$V_{BE}$ 越高，$I_S$ 越小，基区越宽，夹断方块电阻越低。
