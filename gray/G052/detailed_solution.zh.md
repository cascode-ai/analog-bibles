# 详细步骤 - G052

在平方律模型中使用有效沟道长度，求出给定电流下的过驱动电压和 $g_m$，确认器件处于饱和区，再由给定的沟道长度调制速率求 $r_o$。栅电容由饱和区的沟道电荷加上交叠电容得到。

### 第 1 步 — 有效长度与过驱动电压

$$
L_{\text{eff}}=0.2\ \mu\mathrm m-2(0.01\ \mu\mathrm m)=0.18\ \mu\mathrm m,\qquad \frac W{L_{\text{eff}}}=\frac{0.9}{0.18}=5 .
$$

由 $I_D=\tfrac12k'(W/L)V_{ov}^2$，$g_m=k'(W/L)V_{ov}=\sqrt{2k'(W/L)I_D}$：

$$
g_m=\sqrt{2(247\ \mu\mathrm{A/V^2})(5)(100\ \mu\mathrm A)}=497\ \mu\mathrm{A/V},\qquad V_{ov}=\frac{2I_D}{g_m}=0.40\ \mathrm V .
$$

由于 $V_{DS}=1\ \mathrm V>V_{ov}$，器件如假设处于有源区。若平方律中保留因子 $1+\lambda V_{DS}=1.156$，则 $V_{ov}=0.375$ V，$g_m=2I_D/V_{ov}=534\ \mu$A/V。

### 第 2 步 — 输出电阻

$$
\lambda=\frac{dX_d/dV_{DS}}{L_{\text{eff}}}=\frac{0.028\ \mu\mathrm m/\mathrm V}{0.18\ \mu\mathrm m}=0.156\ \mathrm{V^{-1}},\qquad
r_o=\frac1{\lambda I_D}=\frac1{(0.156\ \mathrm{V^{-1}})(100\ \mu\mathrm A)}=64\ \mathrm{k\Omega}
$$

（用 $(1+\lambda V_{DS})/(\lambda I_D)$ 时为 74 kΩ）。$\lambda$ 很大反映了沟道很短。

### 第 3 步 — 栅电容

饱和区中沟道给 $C_{gs}$ 贡献 $\tfrac23WL_{\text{eff}}C_{ox}$，对 $C_{gd}$ 没有贡献；交叠电容 $WC_{ol}=(0.9\ \mu\mathrm m)(0.36\ \mathrm{fF/\mu m})=0.32$ fF 出现在两侧：

$$
C_{gs}=\frac23(0.9\ \mu\mathrm m)(0.18\ \mu\mathrm m)(8.22\ \mathrm{fF/\mu m^2})+0.32\ \mathrm{fF}=0.89+0.32=1.21\ \mathrm{fF},\qquad C_{gd}=0.32\ \mathrm{fF}.
$$

在这种短沟道器件中，交叠电容约占 $C_{gs}$ 的四分之一。

### 第 4 步 — 小结

| 参数 | 数值 |
|---|---|
| $g_m$ | 0.50 mA/V |
| $r_o$ | 64 kΩ |
| $C_{gs}$ | 1.21 fF |
| $C_{gd}$ | 0.32 fF |
