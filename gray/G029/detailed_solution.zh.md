# 详细步骤 - G029

在弱反型区，漏极电流与栅压呈指数关系，因此 $g_m$ 等于电流除以 $nV_T$。$f_T$ 的定义与强反型时相同：$g_m$ 除以 $2\pi$ 乘总栅电容。

### 第 1 步 — 亚阈值跨导

弱反型区的漏极电流为

$$
I_D=\frac WLI_t\exp\!\left(\frac{V_{GS}-V_t}{nV_T}\right)\left(1-e^{-V_{DS}/V_T}\right).
$$

由于 $V_{DS}=1\ \mathrm V\gg V_T=26$ mV，最后一个因子为 $1-e^{-38}\approx1$，电流与 $V_{DS}$ 无关，故

$$
g_m=\frac{\partial I_D}{\partial V_{GS}}=\frac{I_D}{nV_T}=\frac{10\ \mathrm{nA}}{1.5(26\ \mathrm{mV})}=2.56\times10^{-7}\ \mathrm{A/V}=0.256\ \mu\mathrm{A/V}.
$$

因子 $n>1$ 反映了栅电容与耗尽层电容之间的电容分压：栅压的变化只有 $1/n$ 传到表面势上。

### 第 2 步 — 单位电流增益频率

漏极、源极和衬底均为交流地时，栅极电流 $i_g=j\omega(C_{gs}+C_{gd}+C_{gb})v_{gs}$ 产生输出电流 $g_mv_{gs}$，因此电流增益在下式处降到 1：

$$
f_T=\frac{g_m}{2\pi(C_{gs}+C_{gd}+C_{gb})}=\frac{2.56\times10^{-7}\ \mathrm{A/V}}{2\pi(10\times10^{-15}\ \mathrm F)}=4.08\ \mathrm{MHz}.
$$

结果：$g_m\approx0.256\ \mu$A/V，$f_T\approx4.1$ MHz。尽管电容很小，但电流很小使器件速度很慢。
