# 详细步骤 - G343

先求二极管偏置电流，把二极管换成小信号电阻 $r_d$ 与散粒噪声电流源的并联，再加上 20 kΩ 电阻的热噪声电流，并通过节点阻抗把输出节点的总噪声电流换算为电压。结果为白噪声，因此 100 kHz 内的总噪声等于谱密度乘以带宽。

### 第 1 步 — 偏置点与小信号电阻

正向压降固定为 0.7 V，流过电阻和二极管的电流为

$$
I_D=\frac{10\ \mathrm V-0.7\ \mathrm V}{20\ \mathrm{k\Omega}}=0.465\ \mathrm{mA}.
$$

由二极管方程 $I_D=I_S\exp(V_D/V_T)$，增量电阻为

$$
r_d=\frac{kT/q}{I_D}=\frac{26\ \mathrm{mV}}{0.465\ \mathrm{mA}}=55.9\ \Omega .
$$

### 第 2 步 — 输出节点的噪声模型

二极管电流由彼此独立地越过结的载流子构成，因此带有散粒噪声（shot noise），其电流谱密度为 $\overline{i_d^2}/\Delta f=2qI_D$。该噪声源与 $r_d$ 并联；$r_d$ 本身不是实际电阻，不另外产生热噪声。电阻贡献与 $R$ 并联的热噪声电流 $\overline{i_R^2}/\Delta f=4kT/R$。对小信号而言 +10 V 电源相当于地，因此 $R$ 与二极管并联在 $v_o$ 与地之间，两个互不相关的噪声电流流入同一节点阻抗：

$$
\begin{aligned}
\frac{\overline{i_d^2}}{\Delta f}&=2qI_D=2(1.6\times10^{-19}\ \mathrm C)(0.465\ \mathrm{mA})=1.488\times10^{-22}\ \mathrm{A^2/Hz},\\
\frac{\overline{i_R^2}}{\Delta f}&=\frac{4kT}{R}=\frac{1.66\times10^{-20}\ \mathrm{V\cdot C}}{20\ \mathrm{k\Omega}}=8.3\times10^{-25}\ \mathrm{A^2/Hz},\\
r_d\parallel R&=\frac{(55.9\ \Omega)(20\ \mathrm{k\Omega})}{55.9\ \Omega+20\ \mathrm{k\Omega}}=55.8\ \Omega .
\end{aligned}
$$

电阻只贡献总噪声电流的 0.55%，它对 $r_d$ 的分流使节点阻抗变化 0.3%。

### 第 3 步 — 输出噪声电压谱密度

均方噪声电流相加，再由节点阻抗换算为电压：

$$
\frac{\overline{v_o^2}}{\Delta f}=\left(2qI_D+\frac{4kT}{R}\right)(r_d\parallel R)^2
=(1.496\times10^{-22}\ \mathrm{A^2/Hz})(55.8\ \Omega)^2=4.65\times10^{-19}\ \mathrm{V^2/Hz},
$$

即 $0.68\ \mathrm{nV/\sqrt{Hz}}$。若忽略 $R$，仅二极管给出 $2qI_Dr_d^2=2kT\,r_d$，是阻值为 $r_d$ 的实际电阻所产生热噪声 $4kTr_d$ 的一半。

### 第 4 步 — 100 kHz 内的总噪声

忽略电容和闪烁噪声后，谱密度不随频率变化，因此

$$
\overline{v_o^2}=(4.65\times10^{-19}\ \mathrm{V^2/Hz})(10^5\ \mathrm{Hz})=4.65\times10^{-14}\ \mathrm{V^2},
\qquad
v_{o,\mathrm{rms}}=\sqrt{4.65\times10^{-14}\ \mathrm{V^2}}=0.216\ \mu\mathrm V .
$$
