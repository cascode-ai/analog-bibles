# 详细步骤 - G027

对计入速度饱和的缓变沟道模型的饱和区电流求关于 $V_{GS}$ 的导数，并与平方律 $g_m$ 比较。两者都与 $C_{ox}$ 成正比，而由于 $t_{ox}=L/50$，这里它按 $1/L$ 增大；两者之比只取决于 $V_{ov}/(\mathcal E_cL)$，由它决定精度界限。

### 第 1 步 — 含速度饱和的饱和区电流

沿沟道对 $I_D=WC_{ox}[V_{ov}-V(y)]\,v_d$ 积分，并代入 $v_d=\mu_n\mathcal E/(1+\mathcal E/\mathcal E_c)$，得线性区电流 $I_D=\tfrac12\mu_nC_{ox}(W/L)(2V_{ov}V_{DS}-V_{DS}^2)/[1+V_{DS}/(\mathcal E_cL)]$。其最大值即饱和区电流，在下式处达到：

$$
V_{DS(act)}=\mathcal E_cL\left(\sqrt{1+u}-1\right),\qquad u=\frac{2V_{ov}}{\mathcal E_cL},\qquad
I_D=\frac12\mu_nC_{ox}\frac WLV_{DS(act)}^2 .
$$

### 第 2 步 — 含与不含速度饱和的跨导

由于 $dV_{DS(act)}/dV_{ov}=1/\sqrt{1+u}$，

$$
g_m=\frac{dI_D}{dV_{ov}}=\mu_nC_{ox}\frac WL\frac{V_{DS(act)}}{\sqrt{1+u}}=WC_{ox}\mu_n\mathcal E_c\,\frac{\sqrt{1+u}-1}{\sqrt{1+u}} .
$$

不计速度饱和时，$g_{m0}=\mu_nC_{ox}(W/L)V_{ov}$。两者之比为

$$
\frac{g_m}{g_{m0}}=\frac2u\cdot\frac{\sqrt{1+u}-1}{\sqrt{1+u}}\approx1-\frac32\frac{V_{ov}}{\mathcal E_cL}\quad(u\ll1),
$$

与 $C_{ox}$ 无关。由于 $C_{ox}=\epsilon_{ox}/t_{ox}=50\epsilon_{ox}/L$，$g_{m0}\propto1/L^2$。

### 第 3 步 — 数值结果

$L=1\ \mu$m 时：$t_{ox}=200$ Å，$C_{ox}=50(3.45\times10^{-11}\ \mathrm{F/m})/(10^{-6}\ \mathrm m)=1.725\times10^{-3}\ \mathrm{F/m^2}$，$\mu_nC_{ox}=77.6\ \mu\mathrm{A/V^2}$，$\mathcal E_cL=1.5$ V，$u=0.1333$：

$$
\begin{aligned}
g_{m0}&=(77.6\ \mu\mathrm{A/V^2})(10)(0.1\ \mathrm V)=77.6\ \mu\mathrm S,\\
g_m&=(10\ \mu\mathrm m)(1.725\times10^{-3}\ \mathrm{F/m^2})(0.045\ \mathrm{m^2/V\,s})(1.5\times10^6\ \mathrm{V/m})\frac{\sqrt{1.1333}-1}{\sqrt{1.1333}}=70.6\ \mu\mathrm S .
\end{aligned}
$$

| $L$ (µm) | $t_{ox}$ (Å) | $\mu_nC_{ox}$ (µA/V²) | $g_m$ (µS) | $g_{m0}$ (µS) | $g_{m0}/g_m-1$ |
|---|---|---|---|---|---|
| 10 | 2000 | 7.76 | 0.769 | 0.776 | 1.0% |
| 5 | 1000 | 15.5 | 3.04 | 3.11 | 2.0% |
| 2 | 400 | 38.8 | 18.5 | 19.4 | 5.0% |
| 1 | 200 | 77.6 | 70.6 | 77.6 | 9.9% |
| 0.8 | 160 | 97.0 | 108 | 121 | 12% |
| 0.5 | 100 | 155 | 260 | 311 | 20% |
| 0.4 | 80 | 194 | 390 | 485 | 24% |

### 第 4 步 — 平方律 $g_m$ 的适用范围

平方律给出的 $g_m$ 偏高，且随 $L$ 减小 $V_{ov}/(\mathcal E_cL)$ 增大，误差也增大。求解 10% 误差点：$L=0.99\ \mu$m 时 $g_{m0}/g_m=1.1$（等价地，$L=0.89\ \mu$m 时 $g_m/g_{m0}=0.9$）。因此不计速度饱和的模型在 $L\gtrsim1\ \mu$m 时误差在 10% 以内；在 0.4 µm 时它把 $g_m$ 高估 24%。
