零点：$z = -g_{m1}/C_1$ ≈ −9.4×10¹⁰ rad/s（−14.9 GHz）。极点：$p = -\dfrac{g_{m1}+g_{mbs1}+g_{m2}+g_{ds1}+g_{ds2}}{C_1+C_2}$ ≈ −9.2×10⁸ rad/s（−147 MHz）。

- $g_{m1} = g_{m2} = \sqrt{2\cdot110\cdot10\cdot100}$ µS = 469 µS；$g_{mbs1} = 469\cdot0.4/(2\sqrt{5.7})$ µS = 39.3 µS；$g_{ds1} = g_{ds2}$ = 4 µS。
- $C_1 = C_{gs1}$ = 5 fF；$C_2$ = 30 + 5 + 30 + 1000 fF = 1.065 pF。
- 传递函数：$\dfrac{V_{out}}{V_{in}} = \dfrac{g_{m1}+sC_1}{g_{m1}+g_{mbs1}+g_{m2}+g_{ds1}+g_{ds2}+s(C_1+C_2)}$。
- $z = -469\ \mu\mathrm{S}/5\ \mathrm{fF}$ = −9.38×10¹⁰ rad/s → −14.9 GHz（位于左半平面）。
- $p = -986\ \mu\mathrm{S}/1.07\ \mathrm{pF}$ = −9.21×10⁸ rad/s → −146.6 MHz（若略去 $g_{mbs1}$ 则为 −140.7 MHz）。与电流沉负载的情形相比，二极管负载的 $g_{m2}$ 使极点频率大约加倍。
- 题中给定的 $V_{SB1}$ = 5 V 按原样使用。在所画电路中，M1 的源极位于 $V_{SS} + V_{GS2}$，因此其实际 $V_{SB1} = V_{GS2} \approx 1.13$ V；用该值得 $g_{mbs1} \approx 69$ µS，极点 ≈ −9.5×10⁸ rad/s（−151 MHz）。两种结果均正确。
