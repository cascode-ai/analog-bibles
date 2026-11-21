# 详细步骤 - G226

低频时栅极不取电流，整个输入电压都加在栅源之间；增益等于跨导乘以负载电阻。

### 第 1 步 — 给定偏置下的跨导

器件处于饱和区且 $\lambda=0$，由平方律$I_D=\tfrac12k_n'(W/L)V_{ov}^2$ 得 $g_m=\partial I_D/\partial V_{GS}=\sqrt{2k_n'(W/L)I_D}$。取 $W/L=100/1.6=62.5$：

$$
g_m=\sqrt{2\left(60\ \mu\mathrm{A/V^2}\right)(62.5)(0.5\ \mathrm{mA})}=\sqrt{3.75\ \mathrm{(mA/V)^2}}=1.936\ \mathrm{mA/V}.
$$

### 第 2 步 — 低频增益

忽略电容时 $R_S$ 中没有电流，故 $v_{gs}=v_i$。由于 $\lambda=0$，$r_o\to\infty$，漏极电流 $g_mv_{gs}$ 全部流过 $R_L$，使输出电压下降：

$$
\frac{v_o}{v_i}=-g_mR_L=-(1.936\ \mathrm{mA/V})(20\ \mathrm{k\Omega})=-38.7 .
$$

$R_S$ 不影响低频增益，只有计入栅电容后才起作用。
