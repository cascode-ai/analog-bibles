# 详细步骤 - G200

由偏置求出 $g_m$，由 $f_T$ 求出栅极总电容，并由结电容公式求出与偏置有关的漏极-衬底电容。由于 $\lambda=0$、$C_{sb}=0$，该电路就是基本共源级，零值电阻分别为：$C_{gs}$ 看到 $R_S$，$C_{gd}$ 看到密勒电阻，$C_{db}$ 看到 $R_L$。由于 $C_{gd}$ 未知，利用 $C_{gs}=(C_{gs}+C_{gd})-C_{gd}$ 消去栅源电容，把 $T_0$ 保留为 $C_{gd}$ 的函数。

### 第 1 步 — 增益与跨导

取 $W/L_{\text{eff}}=62.5$，按平方律，

$$
g_m=\sqrt{2k_n'\frac{W}{L_{\text{eff}}}I_D}=\sqrt{2(60\ \mu\mathrm A/\mathrm V^2)(62.5)(0.5\ \mathrm{mA})}=1.94\ \mathrm{mA/V}.
$$

栅极不吸取电流，因此低频时 $v_i$ 全部出现在栅极上：

$$
\frac{v_o}{v_i}=-g_mR_L=-(1.94\ \mathrm{mA/V})(5\ \mathrm{k\Omega})=-9.68 .
$$

### 第 2 步 — 电容

由 $\omega_T=g_m/(C_{gs}+C_{gd})$：

$$
C_{gs}+C_{gd}=\frac{1.94\ \mathrm{mA/V}}{2\pi(3\ \mathrm{GHz})}=102.7\ \mathrm{fF}\;\Rightarrow\;C_{gs}=102.7\ \mathrm{fF}-C_{gd}.
$$

漏结面积为 $A_D=(5\ \mu\mathrm m)(100\ \mu\mathrm m)=500\ \mu\mathrm m^2$，周长为 $P_D=100\ \mu$m，故

$$
C_{db0}=(500\ \mu\mathrm m^2)(0.4\ \mathrm{fF/\mu m^2})+(100\ \mu\mathrm m)(0.4\ \mathrm{fF/\mu m})=240\ \mathrm{fF},
\qquad
C_{db}=\frac{240\ \mathrm{fF}}{\sqrt{1+7.5\ \mathrm V/0.6\ \mathrm V}}=65.3\ \mathrm{fF}.
$$

### 第 3 步 — 零值电阻

令 $v_i=0$：

- $C_{gs}$（栅极到接地的源极）：$R_{gs0}=R_S=10$ kΩ。
- $C_{gd}$（栅极到漏极）：测试电流使栅极升高 $i_xR_S$，漏极升高 $i_xR_L+g_mR_L\cdot i_xR_S$，故
$$
R_{gd0}=R_S+R_L+g_mR_LR_S=10+5+96.8\ \mathrm{k\Omega}=111.8\ \mathrm{k\Omega}.
$$
- $C_{db}$（漏极到衬底，交流地）：$R_{db0}=R_L=5$ kΩ。

### 第 4 步 — $T_0$ 与 −3-dB 频率

$$
\begin{aligned}
T_0&=R_S(102.7\ \mathrm{fF}-C_{gd})+(111.8\ \mathrm{k\Omega})C_{gd}+(5\ \mathrm{k\Omega})(65.3\ \mathrm{fF})\\
&=1.027\ \mathrm{ns}+0.327\ \mathrm{ns}+(101.8\ \mathrm{k\Omega})\,C_{gd}=1.35\ \mathrm{ns}+(101.8\ \mathrm{k\Omega})\,C_{gd},
\end{aligned}
$$
$$
f_{-3\text{dB}}\approx\frac1{2\pi T_0}=\frac1{2\pi\bigl[1.35\ \mathrm{ns}+(101.8\ \mathrm{k\Omega})\,C_{gd}\bigr]}.
$$

| 假设的 $C_{gd}$ | $T_0$ | $f_{-3\text{dB}}$ |
|---|---|---|
| 0 | 1.35 ns | 118 MHz |
| 5 fF | 1.86 ns | 85 MHz |
| 14 fF | 2.78 ns | 57 MHz |

从 $C_{gs}$ 中每移 1 fF 到 $C_{gd}$，$T_0$ 约增加 0.1 ns，因为 $C_{gd}$ 被密勒倍增（$R_{gd0}/R_S\approx11$）。因此带宽强烈依赖于未给出的 $C_{gd}$。
