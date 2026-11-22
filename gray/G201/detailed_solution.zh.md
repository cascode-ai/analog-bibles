# 详细步骤 - G201

由于 $\lambda=0$、$C_{sb}=C_{db}=0$，该级只有 $C_{gs}$ 和 $C_{gd}$ 两个电容。先求中频增益，再在 $v_i=0$、另一电容开路的条件下求每个电容的零值电阻，并以 $\omega_{-3\text{dB}}\approx1/T_0$ 作为估计。

### 第 1 步 — 器件参数与增益

$$
g_m=\sqrt{2k_n'\frac{W}{L_{\text{eff}}}I_D}=\sqrt{2(60\ \mu\mathrm A/\mathrm V^2)(62.5)(0.5\ \mathrm{mA})}=1.94\ \mathrm{mA/V},
$$
$$
C_{gs}=\tfrac23(100\ \mu\mathrm m)(1.6\ \mu\mathrm m)(0.7\ \mathrm{fF/\mu m^2})=74.7\ \mathrm{fF}.
$$

栅极没有电流，因此低频时栅极得到全部 $v_i$：

$$
\frac{v_o}{v_i}=-g_mR_L=-(1.94\ \mathrm{mA/V})(5\ \mathrm{k\Omega})=-9.68 .
$$

### 第 2 步 — 零值时间常数

- $C_{gs}$（栅极到接地的源极）：$R_{gs0}=R_S=10$ kΩ，故 $C_{gs}R_{gs0}=0.747$ ns。
- $C_{gd}$（栅极到漏极）：测试电流 $i_x$ 使栅极升高 $i_xR_S$，漏极升高 $i_xR_L$ 再加上 $g_mR_L\cdot i_xR_S$：
$$
R_{gd0}=R_S+R_L+g_mR_LR_S=10+5+96.8\ \mathrm{k\Omega}=111.8\ \mathrm{k\Omega},
$$
故 $C_{gd}R_{gd0}=(14\ \mathrm{fF})(111.8\ \mathrm{k\Omega})=1.565$ ns。

### 第 3 步 — −3-dB 频率

$$
T_0=0.747+1.565\ \mathrm{ns}=2.31\ \mathrm{ns},\qquad
\omega_{-3\text{dB}}\approx\frac1{T_0}=4.3\times10^8\ \mathrm{rad/s},\qquad
f_{-3\text{dB}}\approx68.8\ \mathrm{MHz}.
$$

该电路精确的双极点响应在 69.5 MHz 处下降 3 dB，因此估计误差在 1 % 以内。$C_{gd}$ 通过密勒项 $g_mR_LR_S$ 占主导。与两倍电流下的双极型共射级（相同 $R_S$、$R_L$ 时增益 −65.8、约 0.92 MHz）相比，MOS 级增益低得多但带宽高得多，因为其 $g_m$ 和电容都小得多。
