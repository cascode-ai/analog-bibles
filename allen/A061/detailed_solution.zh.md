# 详细步骤 - A061

偏置相同时，电路仍是一阶 RC 低通：M1 没有直流电流，是非饱和区的电阻；M2 沟道反型且其余端子均接地，是栅电容。由 −3 dB 频率确定所需的 $RC$ 乘积，保持 M1 不变，再确定 M2 的尺寸以提供所需电容。

### 第 1 步 — 所需时间常数

由传递函数 $v_{out}/v_{in}=1/(1+sR_{on1}C)$，−3 dB 频率为 $f_{-3dB}=1/(2\pi R_{on1}C)$。对 100 kHz：

$$
R_{on1}C=\frac{1}{2\pi(100\ \mathrm{kHz})}=1.59\ \mu\mathrm s .
$$

原电路的 $R_{on1}C\approx81$ ps（约 2 GHz），因此 $R_{on1}C$ 须增大约 $2\times10^4$ 倍。

### 第 2 步 — M1 的电阻

在 2 V 输入电平下，M1 的 $V_{GS1}=3$ V、$V_{SB1}=2$ V、$V_{DS1}=0$。计入体效应的阈值和导通电阻为

$$
V_{T1}=0.7\ \mathrm V+0.4\ \mathrm{V^{1/2}}\big(\sqrt{2.7\ \mathrm V}-\sqrt{0.7\ \mathrm V}\big)=1.023\ \mathrm V,
\qquad
R_{on1}=\frac{1}{K'(W/L)_1(V_{GS1}-V_{T1})}.
$$

保持 $(W/L)_1=2\ \mu\mathrm m/0.8\ \mu\mathrm m=2.5$：

$$
R_{on1}=\frac{1}{(110\ \mu\mathrm{A/V^2})(2.5)(1.977\ \mathrm V)}=1.84\ \mathrm{k\Omega}.
$$

### 第 3 步 — M2 的尺寸

所需电容为

$$
C=\frac{1.59\ \mu\mathrm s}{1.84\ \mathrm{k\Omega}}=865\ \mathrm{pF}.
$$

栅面积很大时沟道区项占主导，$C\approx C_{ox}W_2L_2$，因此

$$
W_2L_2=\frac{865\ \mathrm{pF}}{24.7\times10^{-4}\ \mathrm{F/m^2}}=3.50\times10^{5}\ \mu\mathrm m^2,
\qquad W_2=L_2\approx592\ \mu\mathrm m
$$

（取正方形栅）。交叠项 $2\,\mathrm{CGSO}\cdot W_2+\mathrm{CGBO}\cdot L_2\approx0.7$ pF 对结果的影响小于 0.1%。M2 保持反型（$V_{GS2}=2\ \mathrm V>V_{T0}$），因此这一完整电容存在。

### 第 4 步 — 设计与校验

设计：M1 = 2 µm/0.8 µm，M2 = 592 µm/592 µm。校验：

$$
f_{-3dB}=\frac{1}{2\pi(1.84\ \mathrm{k\Omega})(24.7\times10^{-4}\ \mathrm{F/m^2})(592\ \mu\mathrm m)^2}=100\ \mathrm{kHz}.
$$

任何满足 $R_{on1}C=1.59\ \mu$s 的尺寸都可行，设计者可在电阻与电容之间折中。细长的 M1 可减小 M2 的面积：例如 M1 = 2 µm/80 µm 时 $R_{on1}=184\ \mathrm{k\Omega}$，只需 $C=8.65$ pF，即 M2 ≈ 59 µm × 59 µm。无论哪种设计，M1 的电阻都通过 $V_{GS1}-V_{T1}$ 依赖于输入电平，因此该转折频率对应 2 V 偏置。
