# 详细步骤 - G021

先求工作点：由工艺数据求 $\gamma$，求 $V_{SB}=1$ V 时计入体效应的阈值，再求过驱动电压和工作区。然后由平方律模型计算跨导和输出电阻，由沟道电荷和交叠求栅电容，由各结的反偏电压求结电容，并把它们放入四端小信号模型。

### 第 1 步 — 阈值与工作区

$C_{ox}=\epsilon_{ox}/t_{ox}=4.31\times10^{-7}\ \mathrm{F/cm^2}=4.31\ \mathrm{fF/\mu m^2}$，$\gamma=\sqrt{2q\epsilon_{Si}N_A}/C_{ox}=0.0946\ \mathrm{V^{1/2}}$。$V_{SB}=1$ V 时：

$$
V_t=V_{t0}+\gamma\left(\sqrt{2\phi_f+V_{SB}}-\sqrt{2\phi_f}\right)=0.6\ \mathrm V+(0.0946\ \mathrm{V^{1/2}})\left(\sqrt{1.6}-\sqrt{0.6}\right)\mathrm{V^{1/2}}=0.646\ \mathrm V .
$$

故 $V_{ov}=1-0.646=0.354$ V；由于 $V_{DS}=2\ \mathrm V>V_{ov}$，器件处于饱和区：

$$
I_D=\frac{k'}2\frac WLV_{ov}^2=\frac12(194\ \mu\mathrm{A/V^2})(10)(0.354\ \mathrm V)^2=121\ \mu\mathrm A
$$

（计入因子 $1+\lambda V_{DS}=1.048$ 时为 127 µA）。

### 第 2 步 — $g_m$、$g_{mb}$ 和 $r_o$

对 $I_D=\tfrac12k'(W/L)(V_{GS}-V_t)^2(1+\lambda V_{DS})$ 求导：

$$
g_m=\frac{\partial I_D}{\partial V_{GS}}=k'\frac WLV_{ov}(1+\lambda V_{DS})=(1.94\ \mathrm{mA/V^2})(0.354\ \mathrm V)(1.048)=0.719\ \mathrm{mA/V}
$$

（不计 CLM 因子时为 0.686 mA/V）。衬底通过 $V_t$ 起背栅（back gate）作用；记 $\partial V_t/\partial V_{SB}=\gamma/(2\sqrt{2\phi_f+V_{SB}})=\chi$，

$$
\chi=\frac{0.0946}{2(1.265)}=0.0374,\qquad g_{mb}=\chi g_m=(0.0374)(0.719\ \mathrm{mA/V})=26.9\ \mu\mathrm{A/V}.
$$

沟道长度调制（channel-length modulation）给出的输出电阻为

$$
r_o=\frac1{\lambda I_D}=\frac1{(0.024\ \mathrm{V^{-1}})(121\ \mu\mathrm A)}=343\ \mathrm{k\Omega}
$$

（若 $I_D$ 计入 CLM 因子则为 328 kΩ）。

### 第 3 步 — 电容

饱和区中沟道在漏端夹断，沟道电荷给 $C_{gs}$ 贡献 $\tfrac23WLC_{ox}$，对 $C_{gd}$ 没有贡献；交叠电容各增加 2 fF：

$$
C_{gs}=\frac23(10\ \mu\mathrm m)(1\ \mu\mathrm m)(4.31\ \mathrm{fF/\mu m^2})+2\ \mathrm{fF}=28.8\ \mathrm{fF}+2\ \mathrm{fF}=30.8\ \mathrm{fF},\qquad C_{gd}=2\ \mathrm{fF},\qquad C_{gb}=5\ \mathrm{fF}.
$$

源-衬底结的反偏电压为 $V_{SB}=1$ V，漏-衬底结为 $V_{DB}=V_{DS}+V_{SB}=3$ V：

$$
C_{sb}=\frac{20\ \mathrm{fF}}{\sqrt{1+1/0.7}}=12.8\ \mathrm{fF},\qquad
C_{db}=\frac{20\ \mathrm{fF}}{\sqrt{1+3/0.7}}=8.7\ \mathrm{fF}.
$$

### 第 4 步 — 等效电路

- $C_{gs}=30.8$ fF 接在 G 与 S 之间，$C_{gd}=2$ fF 接在 G 与 D 之间，$C_{gb}=5$ fF 接在 G 与 B 之间；
- 受控源 $g_mv_{gs}$（$g_m=0.719$ mA/V）和受控源 $g_{mb}v_{bs}$（$g_{mb}=26.9\ \mu$A/V）都接在 D 与 S 之间；
- $r_o=343$ kΩ 接在 D 与 S 之间；
- $C_{sb}=12.8$ fF 接在 S 与 B 之间，$C_{db}=8.7$ fF 接在 D 与 B 之间。

<!-- diagram: diagram-01.cir -->
