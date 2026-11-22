# 详细步骤 - A066

逐项计算方括号中的三项（把 COX 换算成与 NFS 相同的面积单位），再乘以热电压，并加到 $V_T$ 上。

### 第 1 步 — 热电压与表面态项

$T=300$ K 时

$$
\frac{kT}{q}=\frac{(1.381\times10^{-23}\ \mathrm{J/K})(300\ \mathrm K)}{1.602\times10^{-19}\ \mathrm C}=25.85\ \mathrm{mV}.
$$

NFS 以 cm² 为单位给出，因此 COX 也须以 cm² 表示：$24.7\times10^{-4}\ \mathrm{F/m^2}=2.47\times10^{-7}\ \mathrm{F/cm^2}$。于是快表面态项为无量纲量：

$$
\frac{q\cdot\mathrm{NFS}}{\mathrm{COX}}=\frac{(1.602\times10^{-19}\ \mathrm C)(7\times10^{11}\ \mathrm{cm^{-2}})}{2.47\times10^{-7}\ \mathrm{F/cm^2}}=0.454 .
$$

### 第 2 步 — 体效应项

$v_{SB}=0$，$f_s=f_n=1$，$\mathrm{PHI}=0.7$ V：

$$
\frac{\mathrm{GAMMA}\cdot f_s\,(\mathrm{PHI}+v_{SB})^{1/2}+f_n(\mathrm{PHI}+v_{SB})}{2(\mathrm{PHI}+v_{SB})}
=\frac{(0.4\ \mathrm{V^{1/2}})(0.837\ \mathrm{V^{1/2}})+0.7\ \mathrm V}{2(0.7\ \mathrm V)}=\frac{0.335+0.7}{1.4}=0.739 .
$$

该项反映耗尽层电容的作用：它与氧化层电容串联，对栅压进行分压后才作用到表面。

### 第 3 步 — $f_{ast}$ 与 $V_{ON}$

$$
f_{ast}=25.85\ \mathrm{mV}\times(1+0.454+0.739)=25.85\ \mathrm{mV}\times2.193=56.7\ \mathrm{mV},
$$

$$
V_{ON}=V_T+f_{ast}=0.7\ \mathrm V+0.0567\ \mathrm V=0.757\ \mathrm V .
$$

向弱反型的转变点比 $V_T$ 高约 57 mV。方括号的值 2.19 相当于亚阈值斜率因子（subthreshold slope factor）$n$：低于 $V_{ON}$ 时，$v_{GS}$ 每降低 $n\,kT/q\approx57$ mV，电流减小为原来的 $e$ 分之一。
