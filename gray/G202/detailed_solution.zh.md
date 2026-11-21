# 详细步骤 - G202

源极电阻 $R_{SS}$ 把等效跨导降低为 $G_m=g_m/(1+g_mR_{SS})$。由 $G_m$ 求中频增益，然后在 $v_i=0$ 时求 $C_{gs}$ 和 $C_{gd}$ 的零值电阻（计入经 $R_{SS}$ 的反馈），并以 $\omega_{-3\text{dB}}\approx1/T_0$ 作为估计。

### 第 1 步 — 增益

$$
g_m=\sqrt{2(60\ \mu\mathrm A/\mathrm V^2)(62.5)(0.5\ \mathrm{mA})}=1.94\ \mathrm{mA/V},\qquad 1+g_mR_{SS}=2.743,
$$
$$
G_m=\frac{g_m}{1+g_mR_{SS}}=0.706\ \mathrm{mA/V},\qquad
\frac{v_o}{v_i}=-G_mR_L=-(0.706\ \mathrm{mA/V})(5\ \mathrm{k\Omega})=-3.53 .
$$

### 第 2 步 — $C_{gs}$ 的零值电阻

$C_{gs}$ 连接栅极与源极。用从源极流向栅极的测试电流 $i_x$ 驱动它。栅极一侧看到 $R_S$；在源极，$i_x$ 与沟道电流 $g_mv_{gs}$ 一起流过 $R_{SS}$。写出 $v_g=-i_xR_S$ 和 $v_s=(i_x+g_mv_{gs})R_{SS}$，求解 $v_{sg}=v_s-v_g$：

$$
R_{gs0}=\frac{R_S+R_{SS}}{1+g_mR_{SS}}=\frac{10.9\ \mathrm{k\Omega}}{2.743}=3.97\ \mathrm{k\Omega},
\qquad C_{gs}R_{gs0}=(74.7\ \mathrm{fF})(3.97\ \mathrm{k\Omega})=0.297\ \mathrm{ns}.
$$

经 $R_{SS}$ 的反馈对 $C_{gs}$ 形成自举（bootstrapping），因此它看到的电阻远小于 $R_S$。

### 第 3 步 — $C_{gd}$ 的零值电阻

栅极看到 $R_S$（栅极不吸取电流），漏极电流经 $G_m$ 响应栅极电压：

$$
R_{gd0}=R_S+R_L+G_mR_LR_S=10+5+35.3\ \mathrm{k\Omega}=50.3\ \mathrm{k\Omega},
\qquad C_{gd}R_{gd0}=(14\ \mathrm{fF})(50.3\ \mathrm{k\Omega})=0.704\ \mathrm{ns}.
$$

### 第 4 步 — −3-dB 频率

$$
T_0=0.297+0.704\ \mathrm{ns}=1.00\ \mathrm{ns},\qquad
f_{-3\text{dB}}\approx\frac1{2\pi T_0}=159\ \mathrm{MHz}.
$$

精确节点分析给出 163 MHz。与无负反馈的级（增益 −9.68，约 69 MHz）相比，源极负反馈使增益降低 2.74 倍，带宽提高约 2.3 倍：密勒项随 $G_m$ 减小，同时 $C_{gs}$ 被自举。
