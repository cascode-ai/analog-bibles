# 详细步骤 - G053

按一般平方律器件的方法处理，并使用有效沟道长度：由电流求 $V_{ov}$ 和 $g_m$，由沟道长度调制速率求 $r_o$，由饱和沟道电荷加交叠求栅电容。栅漏电流等于给定的电流密度乘以栅面积。在这个 0.1 µm 器件中 $\lambda$ 很大，平方律中是否保留 $1+\lambda V_{DS}$ 会明显改变 $g_m$ 和 $r_o$，因此两种约定都给出。

### 第 1 步 — 有效长度、过驱动电压与 $g_m$

$$
L_{\text{eff}}=0.1\ \mu\mathrm m-2(0.005\ \mu\mathrm m)=0.09\ \mu\mathrm m,\qquad \frac W{L_{\text{eff}}}=\frac{0.5}{0.09}=5.56 .
$$

由 $I_D=\tfrac12k'(W/L)V_{ov}^2$：

$$
g_m=\sqrt{2k'\frac WLI_D}=\sqrt{2(539\ \mu\mathrm{A/V^2})(5.56)(100\ \mu\mathrm A)}=774\ \mu\mathrm{A/V},\qquad V_{ov}=\frac{2I_D}{g_m}=0.26\ \mathrm V .
$$

$V_{DS}=1\ \mathrm V>V_{ov}$，器件处于饱和区。

### 第 2 步 — 输出电阻

$$
\lambda=\frac{dX_d/dV_{DS}}{L_{\text{eff}}}=\frac{0.06\ \mu\mathrm m/\mathrm V}{0.09\ \mu\mathrm m}=0.67\ \mathrm{V^{-1}},\qquad
r_o=\frac1{\lambda I_D}=\frac1{(0.67\ \mathrm{V^{-1}})(100\ \mu\mathrm A)}=15\ \mathrm{k\Omega}.
$$

若在平方律中始终保留 $1+\lambda V_{DS}=1.67$，则 $V_{ov}=\sqrt{2I_D/[k'(W/L)(1.67)]}=0.20$ V，$g_m=2I_D/V_{ov}=1.0$ mA/V，$r_o=(1+\lambda V_{DS})/(\lambda I_D)=25$ kΩ。无论哪种约定，本征增益 $g_mr_o$ 都只有约 12–25。

### 第 3 步 — 栅电容

饱和区中沟道给 $C_{gs}$ 贡献 $\tfrac23WL_{\text{eff}}C_{ox}$；交叠电容 $WC_{ol}=(0.5\ \mu\mathrm m)(0.10\ \mathrm{fF/\mu m})=0.05$ fF 出现在两侧边缘：

$$
C_{gs}=\frac23(0.5\ \mu\mathrm m)(0.09\ \mu\mathrm m)(13.8\ \mathrm{fF/\mu m^2})+0.05\ \mathrm{fF}=0.41+0.05=0.46\ \mathrm{fF},\qquad C_{gd}=0.05\ \mathrm{fF}.
$$

### 第 4 步 — 栅漏电流

25 Å 的氧化层薄到足以发生直接隧穿（direct tunneling）。按画出的栅面积，

$$
I_G=J_GWL=(1.2\ \mathrm{nA/\mu m^2})(0.5\ \mu\mathrm m)(0.1\ \mu\mathrm m)=60\ \mathrm{pA}
$$

（用 $L_{\text{eff}}$ 时为 54 pA）。它约为漏极电流的 $6\times10^{-7}$，在此偏置下可以忽略，但对极小电流或大面积栅极则不可忽略。

### 第 5 步 — 小结

| 参数 | 数值 |
|---|---|
| $g_m$ | 0.77 mA/V（计入 $1+\lambda V_{DS}$ 时为 1.0 mA/V） |
| $r_o$ | 15 kΩ（计入 $1+\lambda V_{DS}$ 时为 25 kΩ） |
| $C_{gs}$ | 0.46 fF |
| $C_{gd}$ | 0.05 fF |
| $I_G$ | 55–60 pA |
