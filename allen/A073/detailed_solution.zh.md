# 详细步骤 - A073

电路仍是由开关电阻与 2 pF 负载构成的 RC 低通。降低栅压会减小 M1 的栅驱动，使导通电阻增大、极点降低。在新偏置下重新计算电阻，求出新的转折频率，并画出伯德图。

### 第 1 步 — M1 的新工作点

电容不取直流电流，因此 M1 沟道两端仍为 $V_{DC}=3$ V（$V_{DS}=0$，非饱和区），衬底偏置不变，$V_{SB}=3$ V：

$$
V_T=0.7\ \mathrm V+0.4\ \mathrm{V^{1/2}}\big(\sqrt{3.7\ \mathrm V}-\sqrt{0.7\ \mathrm V}\big)=1.135\ \mathrm V .
$$

栅极为 4.5 V 时，

$$
V_{GS}=4.5\ \mathrm V-3\ \mathrm V=1.5\ \mathrm V,\qquad V_{GS}-V_T=0.365\ \mathrm V,
$$

而栅极为 5 V 时为 0.865 V。

### 第 2 步 — 导通电阻与转折频率

$V_{DS}=0$ 时 $r_{ON}=1/[K'(W/L)(V_{GS}-V_T)]$：

$$
r_{ON}=\frac{1}{(110\ \mu\mathrm{A/V^2})(2.64)(0.365\ \mathrm V)}=9.43\ \mathrm{k\Omega},\qquad
f_{-3dB}=\frac{1}{2\pi(9.43\ \mathrm{k\Omega})(2\ \mathrm{pF})}=8.44\ \mathrm{MHz}.
$$

等价地，转折频率与过驱动电压成正比：$20\ \mathrm{MHz}\times0.365/0.865=8.44$ MHz，降低为原来的 1/2.37，尽管栅压只变化了 10%。频率响应为

$$
\frac{v_{out}}{v_{in}}(j\omega)=\frac{1}{1+jf/(8.44\ \mathrm{MHz})},\qquad
\left|\frac{v_{out}}{v_{in}}\right|=\frac{1}{\sqrt{1+(f/8.44\ \mathrm{MHz})^2}},\qquad
\angle\frac{v_{out}}{v_{in}}=-\arctan\frac{f}{8.44\ \mathrm{MHz}} .
$$

### 第 3 步 — 伯德图

![伯德幅频图：8.44 MHz 以下为 0 dB，转折频率处 −3 dB，之后以 −20 dB/十倍频程下降，84 MHz 处为 −20 dB；虚线为原 20 MHz 响应](/q/A073/solution-curves.zh.svg)

低频时幅值为 0 dB（没有直流电流，直流增益不变），8.44 MHz 处为 −3 dB，之后以 −20 dB/十倍频程（−6 dB/倍频程）下降：84 MHz 处为 −20 dB，169 MHz 处为 −26 dB。渐近线图相当于把原图沿对数频率轴向左平移，频率缩小为原来的 1/2.37。

![伯德相频图：相位从 0° 变到 −90°，在 8.44 MHz 处为 −45°；虚线为原响应](/q/A073/solution-phase.zh.svg)

相位从 0° 变到 −90°，在 8.44 MHz 转折频率处为 −45°。
