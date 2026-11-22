# 详细步骤 - G184

由偏置和几何尺寸求出 $g_m$ 与 $C_{gs}$，把 $C_{gd}$ 换成栅极处的密勒等效电容，再取 $R_S$ 与栅极总电容构成的输入极点作为 −3-dB 频率。由于 $\lambda=0$、$C_{db}=0$，输出节点只有 $R_L$ 和 $C_{gd}$ 的输出侧。

### 第 1 步 — 跨导与低频增益

$L_{\text{eff}}=L_{\text{drwn}}-2L_d-X_d=2\ \mu\mathrm m-0.4\ \mu\mathrm m=1.6\ \mu$m，故 $W/L_{\text{eff}}=62.5$。在饱和区，由 $I_D=\tfrac{k_n'}2\tfrac{W}{L_{\text{eff}}}V_{ov}^2$ 得

$$
g_m=\sqrt{2k_n'\frac{W}{L_{\text{eff}}}I_D}=\sqrt{2(60\ \mu\mathrm A/\mathrm V^2)(62.5)(0.5\ \mathrm{mA})}=1.94\ \mathrm{mA/V}.
$$

低频增益为 $v_o/v_i=-g_mR_L=-(1.94\ \mathrm{mA/V})(5\ \mathrm{k\Omega})=-9.68$。

### 第 2 步 — 栅源电容

$$
C_{gs}=\tfrac23WL_{\text{eff}}C_{ox}=\tfrac23(100\ \mu\mathrm m)(1.6\ \mu\mathrm m)(0.7\ \mathrm{fF/\mu m^2})=74.7\ \mathrm{fF}.
$$

### 第 3 步 — 密勒电容与输入极点

$C_{gd}$ 连接栅极与漏极，低频时漏极电压是栅极电压的 $-g_mR_L$ 倍。密勒近似把它换成栅极对地电容

$$
C_M=C_{gd}(1+g_mR_L)=(14\ \mathrm{fF})(1+9.68)=150\ \mathrm{fF},
$$

于是栅极节点电容为 $C_t=C_{gs}+C_M=74.7\ \mathrm{fF}+150\ \mathrm{fF}=224$ fF。栅极处唯一的电阻是 $R_S$（MOS 管没有 $r_\pi$，题目也未给出栅极电阻），故

$$
\omega_{-3\text{dB}}=\frac1{R_SC_t}=\frac1{(10\ \mathrm{k\Omega})(224\ \mathrm{fF})}=4.46\times10^8\ \mathrm{rad/s},\qquad
f_{-3\text{dB}}=\frac{\omega_{-3\text{dB}}}{2\pi}=71.0\ \mathrm{MHz}.
$$

### 第 4 步 — 与更精确结果的比较

密勒近似忽略了经 $C_{gd}$ 流入 $R_L$ 的电流。计入该电流的主极点估计 $1/\{R_S[C_{gs}+C_{gd}(1+g_mR_L+R_L/R_S)]\}$ 给出 68.8 MHz，精确的双极点传递函数的 −3-dB 点为 69.5 MHz。密勒近似的结果约 71 MHz，与之相差不到 2 %。
