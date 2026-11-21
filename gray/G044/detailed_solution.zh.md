# 详细步骤 - G044

在 $g_m$、$g_{mb}$ 和 $r_o$ 的平方律表达式中使用有效沟道长度；栅电容取饱和区的沟道电荷贡献加上交叠电容；源、漏结电容由其面积和场氧周长，在反偏 $V_{SB}=1$ V 和 $V_{DB}=V_{DS}+V_{SB}=3$ V 下计算。

### 第 1 步 — 有效长度

$$
L_{\text{eff}}=L_{\text{drwn}}-2L_d=1\ \mu\mathrm m-2(0.09\ \mu\mathrm m)=0.82\ \mu\mathrm m,\qquad \frac W{L_{\text{eff}}}=\frac{10}{0.82}=12.2 .
$$

### 第 2 步 — $g_m$、$g_{mb}$ 和 $r_o$

由 $I_D=\tfrac12k'(W/L)V_{ov}^2$，$g_m=k'(W/L)V_{ov}=\sqrt{2k'(W/L)I_D}$：

$$
g_m=\sqrt{2(194\ \mu\mathrm{A/V^2})(12.2)(20\ \mu\mathrm A)}=308\ \mu\mathrm{A/V},\qquad V_{ov}=\frac{2I_D}{g_m}=0.13\ \mathrm V
$$

（保留因子 $1+\lambda V_{DS}$ 时为 315 µA/V）。体跨导为 $g_{mb}=\chi g_m$，其中 $\chi=\partial V_t/\partial V_{SB}$：

$$
\chi=\frac{\gamma}{2\sqrt{2\phi_f+V_{SB}}}=\frac{0.094\ \mathrm{V^{1/2}}}{2\sqrt{1.66\ \mathrm V}}=0.036,\qquad g_{mb}=(0.036)(308\ \mu\mathrm{A/V})=11.2\ \mu\mathrm{A/V}.
$$

输出电阻：

$$
\lambda=\frac{dX_d/dV_{DS}}{L_{\text{eff}}}=\frac{0.02\ \mu\mathrm m/\mathrm V}{0.82\ \mu\mathrm m}=0.0244\ \mathrm{V^{-1}},\qquad r_o=\frac1{\lambda I_D}=\frac1{(0.0244\ \mathrm{V^{-1}})(20\ \mu\mathrm A)}=2.05\ \mathrm{M\Omega}
$$

（用 $(1+\lambda V_{DS})/(\lambda I_D)$ 时为 2.15 MΩ）。

### 第 3 步 — 栅电容

饱和区中沟道电荷给 $C_{gs}$ 贡献 $\tfrac23WL_{\text{eff}}C_{ox}$，对 $C_{gd}$ 没有贡献；两侧各加交叠电容 $WC_{ol}=(10\ \mu\mathrm m)(0.35\ \mathrm{fF/\mu m})=3.5$ fF：

$$
C_{gs}=\frac23(10\ \mu\mathrm m)(0.82\ \mu\mathrm m)(4.32\ \mathrm{fF/\mu m^2})+3.5\ \mathrm{fF}=23.6+3.5=27.1\ \mathrm{fF},\qquad C_{gd}=3.5\ \mathrm{fF}.
$$

### 第 4 步 — 结电容

每个扩散区的底面积为 $1\times10=10\ \mu$m²，得 $C_{j0}A=2.0$ fF；与场氧相邻的周长为 $10+1+1=12\ \mu$m（栅下的边不计），得 $C_{jsw0}P=14.4$ fF。取梯度系数 0.5 和 0.4，

$$
C=\frac{C_{j0}A}{(1+V_R/\psi_0)^{0.5}}+\frac{C_{jsw0}P}{(1+V_R/\psi_0)^{0.4}} .
$$

源极 $V_{SB}=1$ V，$1+1/0.7=2.43$：

$$
C_{sb}=\frac{2.0\ \mathrm{fF}}{2.43^{0.5}}+\frac{14.4\ \mathrm{fF}}{2.43^{0.4}}=1.28+10.1=11.4\ \mathrm{fF}.
$$

漏极 $V_{DB}=3$ V，$1+3/0.7=5.29$：$C_{db}=0.87+7.4=8.3$ fF。若计入全部 22 µm 周长，则分别为 19.8 fF 和 14.4 fF。忽略沟道与衬底之间的耗尽层电容（约 1 fF）。

### 第 5 步 — 小结

| 参数 | 数值 |
|---|---|
| $g_m$ | 308 µA/V |
| $g_{mb}$ | 11.2 µA/V |
| $r_o$ | 2.05 MΩ |
| $C_{gs}$ | 27.1 fF |
| $C_{gd}$ | 3.5 fF |
| $C_{sb}$ | 11.4 fF |
| $C_{db}$ | 8.3 fF |
