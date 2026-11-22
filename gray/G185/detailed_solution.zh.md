# 详细步骤 - G185

小信号电路有两个电容 $C_{gs}$ 和 $C_{gd}$（$C_{db}=C_{sb}=0$），因此增益有两个极点。列出节点方程，读出二阶分母的系数，再用极点远离近似 $|p_2|\approx a_1/a_2$，并与精确根比较。

### 第 1 步 — 器件参数

由给定的几何尺寸，$L_{\text{eff}}=1.6\ \mu$m，$W/L_{\text{eff}}=62.5$，故

$$
g_m=\sqrt{2k_n'\frac{W}{L_{\text{eff}}}I_D}=\sqrt{2(60\ \mu\mathrm A/\mathrm V^2)(62.5)(0.5\ \mathrm{mA})}=1.94\ \mathrm{mA/V},
$$
$$
C_{gs}=\tfrac23WL_{\text{eff}}C_{ox}=\tfrac23(100\ \mu\mathrm m)(1.6\ \mu\mathrm m)(0.7\ \mathrm{fF/\mu m^2})=74.7\ \mathrm{fF},\qquad C_{gd}=14\ \mathrm{fF}.
$$

### 第 2 步 — 传递函数

在栅极（电压 $v_g$）和漏极（电压 $v_o$）列 KCL：

$$
\frac{v_i-v_g}{R_S}=sC_{gs}v_g+sC_{gd}(v_g-v_o),\qquad
sC_{gd}(v_g-v_o)=g_mv_g+\frac{v_o}{R_L}.
$$

消去 $v_g$ 得

$$
\frac{v_o}{v_i}=\frac{-g_mR_L\,(1-sC_{gd}/g_m)}{1+a_1s+a_2s^2},
$$
$$
a_1=R_S\bigl[C_{gs}+C_{gd}(1+g_mR_L)\bigr]+R_LC_{gd},\qquad a_2=R_SR_LC_{gs}C_{gd}.
$$

数值上 $a_1=2.31\times10^{-9}$ s，$a_2=5.23\times10^{-20}\ \mathrm s^2$。

### 第 3 步 — 次极点

若 $|p_1|\ll|p_2|$，则 $1+a_1s+a_2s^2\approx(1+s/|p_1|)(1+s/|p_2|)$，其中 $|p_1|\approx1/a_1$，$|p_1||p_2|=1/a_2$，故

$$
|p_2|\approx\frac{a_1}{a_2}=\frac1{R_LC_{gd}}+\frac1{R_SC_{gs}}+\frac1{R_LC_{gs}}+\frac{g_m}{C_{gs}} .
$$

| 项 | 数值（rad/s） |
|---|---|
| $1/(R_LC_{gd})=1/[(5\ \mathrm{k\Omega})(14\ \mathrm{fF})]$ | $1.43\times10^{10}$ |
| $1/(R_SC_{gs})$ | $1.34\times10^{9}$ |
| $1/(R_LC_{gs})$ | $2.68\times10^{9}$ |
| $g_m/C_{gs}=(1.94\ \mathrm{mA/V})/(74.7\ \mathrm{fF})$ | $2.59\times10^{10}$ |

$$
|p_2|\approx4.42\times10^{10}\ \mathrm{rad/s},\qquad f_2=\frac{|p_2|}{2\pi}=7.04\ \mathrm{GHz}.
$$

### 第 4 步 — 近似的校验

主极点为 $|p_1|\approx1/a_1=4.32\times10^8$ rad/s（69 MHz），比 $|p_2|$ 低约 100 倍，因此第 3 步所设的极点分离成立。$1+a_1s+a_2s^2$ 的精确根为 $4.37\times10^8$ 和 $4.38\times10^{10}$ rad/s，故次极点为 $|p_2|\approx4.4\times10^{10}$ rad/s，约 7.0 GHz。它高于 $\omega_T=g_m/(C_{gs}+C_{gd})=2.18\times10^{10}$ rad/s，主要是由于 $g_m/C_{gs}$ 和 $1/(R_LC_{gd})$ 两项。
