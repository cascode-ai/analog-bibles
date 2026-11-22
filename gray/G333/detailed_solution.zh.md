# 详细步骤 - G333

求晶体管 $g_m$ 发生器的回归比：把 $g_mv_{gs}$ 换成独立电流 $g_mv_t$，计算经 20 kΩ 反馈电阻返回的 $v_{gs}$。输入电流源在小信号电路中开路，因此栅极只经 $R_F$ 和 $C_{gd}$ 驱动。先求小信号参数，再把 $\mathscr{R}(s)$ 写成漏极阻抗乘以栅极分压比，并在四个频率处求值。

### 第 1 步 — 小信号参数

$R_F$ 中没有直流电流，栅极与漏极直流电压相同，因此晶体管以 $I_D=0.5$ mA 工作在饱和区。$W/L_{\text{eff}}=50/0.6=83.3$：
$$
V_{ov}=\sqrt{\frac{2I_D}{k'_n(W/L_{\text{eff}})}}=\sqrt{\frac{2(0.5\ \mathrm{mA})}{(194\ \mu\mathrm{A/V^2})(83.3)}}=0.249\ \mathrm V,\qquad
g_m=\frac{2I_D}{V_{ov}}=4.02\ \mathrm{mA/V},
$$
$$
\lambda=\frac{0.02\ \mu\mathrm{m/V}}{0.6\ \mu\mathrm m}=0.0333\ \mathrm{V^{-1}},\qquad r_o=\frac1{\lambda I_D}=60\ \mathrm{k\Omega},\qquad g_mr_o=241 .
$$
各电容为
$$
C_{gs}=\tfrac23(50)(0.6)(4.32\ \mathrm{fF})+(0.35\ \mathrm{fF})(50)=86.4+17.5=104\ \mathrm{fF},\qquad C_{gd}=17.5\ \mathrm{fF},\qquad C_L=2\ \mathrm{pF}.
$$

### 第 2 步 — 回归比表达式

从漏极抽出 $g_mv_t$。漏极节点看到 $r_o$、$C_L$，以及经 $Z_F=R_F\|(1/sC_{gd})$ 与 $C_{gs}$ 串联到地的支路，因此
$$
v_d=-g_mv_t\,Z_d,\qquad Z_d=r_o\,\Big\|\,\frac1{sC_L}\,\Big\|\,\left(Z_F+\frac1{sC_{gs}}\right).
$$
栅极是 $Z_F$ 与 $C_{gs}$ 构成的分压器的中点：
$$
\frac{v_g}{v_d}=\frac{1/(sC_{gs})}{Z_F+1/(sC_{gs})}=\frac{1+sR_FC_{gd}}{1+sR_F(C_{gs}+C_{gd})} .
$$
返回变量为 $v_{gs}=v_g$，$\mathscr{R}=-v_g/v_t$：
$$
\mathscr{R}(s)=g_m\,Z_d(s)\,\frac{1+sR_FC_{gd}}{1+sR_F(C_{gs}+C_{gd})} .
$$

### 第 3 步 — 低频值、极点与零点

直流时 $Z_d=r_o$（栅极支路经 $C_{gs}$ 开路），分压比为 1，因此 $\mathscr{R}_0=g_mr_o=241$（47.6 dB）。由于没有直流电流流入栅极，该电阻不降低低频环路增益。把 $\mathscr{R}(s)$ 整理成多项式之比，得到：

- 1.26 MHz 处的主极点，由 $r_o$ 和 2 pF 负载决定：$1/(2\pi r_oC_L)=1.33$ MHz，栅极支路使其略为降低；
- 68.5 MHz 处的第二极点，主要由 $R_F$ 与 $C_{gs}$ 决定，并受 $C_L$ 修正；
- $1/(2\pi R_FC_{gd})=455$ MHz 处的左半平面零点，来自经 $C_{gd}$ 的前馈。

### 第 4 步 — 四个频率处的值

在 $s=j2\pi f$ 处计算第 2 步的表达式：

| $f$ | $\lvert\mathscr{R}\rvert$ | $\angle\mathscr{R}$ |
|---|---|---|
| 1 kHz | 241 | $-0.05^\circ$ |
| 100 kHz | 240.5 | $-4.6^\circ$ |
| 10 MHz | 29.8 | $-89.9^\circ$ |
| 1 GHz | 0.050 | $-110.5^\circ$ |

10 MHz 位于两个极点之间，因此相位接近 $-90^\circ$，且 $|\mathscr{R}|\approx241\times1.26/10$。1 GHz 时两个极点贡献接近 $-180^\circ$，但 455 MHz 的零点补回约 $+66^\circ$，剩下 $-110^\circ$。
