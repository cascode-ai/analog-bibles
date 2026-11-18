$\dfrac{v_{OUT}}{v_{IN}} = \dfrac{A(s)(1+sRC)}{1+sRC+A(s)} = \dfrac{GB\,(s+1/RC)}{s^2 + s(\omega_a + 1/RC) + (\omega_a + GB)/RC}$；代入数值得 $\dfrac{v_{OUT}}{v_{IN}} = \dfrac{2\pi\times10^6\,(s+0.01)}{(s+41.1)(s+1530)}$。

- 反馈网络是低通网络：$v_- = v_{OUT}/(1+sRC)$；由 $v_{OUT} = A(s)(v_{IN} - v_-)$ 得到第一种形式。
- 渐近线（设 $A_v(0) \gg 1$ 且 $1/RC \ll \omega_a$）：直流时电容开路，反馈为全反馈，增益为 $A_v(0)/(1+A_v(0)) \approx 1$（0 dB）。$1/RC$ 处的零点使增益以 +20 dB/十倍频程上升。当 $(\omega_a+GB)/RC \ll \omega_a^2$ 时，分母的根为 ≈ $(\omega_a+GB)/(RC\,\omega_a) = (1+A_v(0))/RC \approx A_v(0)/RC$ 和 ≈ $\omega_a$。因此上升在 $A_v(0)/RC$ 处停止，此时 $|sRC| \approx A_v(0)$；高于该频率后环路增益小于 1，响应等于开环 $A(s)$（在 $\omega_a$ 以下平坦地保持在 $A_v(0)$，之后以 −20 dB/十倍频程下降，在 $GB$ 处降到 0 dB）。
- 数值：$RC = 100$ s → $1/RC = 0.01$ rad/s；$\omega_a = GB/A_v(0) = 2\pi\times10^6/4000 = 1571$ rad/s；分母 $s^2 + 1570.8s + 6.28\times10^4$ → 根为 −41.1 rad/s 和 −1530 rad/s。
- 草图：0.01 rad/s（1.6 mHz）以下为 0 dB；以 +20 dB/十倍频程上升，到 41 rad/s（6.5 Hz）时达到 ≈ 72 dB（≈ $A_v(0)$ = 4000）；在 ≈ 72 dB 处保持平坦直到 1.53 krad/s（≈ 243 Hz）；然后以 −20 dB/十倍频程下降，在 ≈ $GB$ = 6.28 Mrad/s（1 MHz）处穿过 0 dB。
