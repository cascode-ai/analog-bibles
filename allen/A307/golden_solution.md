# Golden Solution - A307

## Reference answer

$\dfrac{v_{OUT}}{v_{IN}} = \dfrac{A(s)(1+sRC)}{1+sRC+A(s)} = \dfrac{GB\,(s+1/RC)}{s^2 + s(\omega_a + 1/RC) + (\omega_a + GB)/RC}$; with the numbers $\dfrac{v_{OUT}}{v_{IN}} = \dfrac{2\pi\times10^6\,(s+0.01)}{(s+41.1)(s+1530)}$.

- The feedback network is a low-pass: $v_- = v_{OUT}/(1+sRC)$; $v_{OUT} = A(s)(v_{IN} - v_-)$ gives the first form.
- Asymptotes (for $A_v(0) \gg 1$ and $1/RC \ll \omega_a$): at dc the capacitor is open, the feedback is complete and the gain is $A_v(0)/(1+A_v(0)) \approx 1$ (0 dB). The zero at $1/RC$ makes the gain rise at +20 dB/decade. The denominator roots, for $(\omega_a+GB)/RC \ll \omega_a^2$, are ≈ $(\omega_a+GB)/(RC\,\omega_a) = (1+A_v(0))/RC \approx A_v(0)/RC$ and ≈ $\omega_a$. So the rise stops at $A_v(0)/RC$, where $|sRC| \approx A_v(0)$; above it the loop gain is below 1 and the response equals the open-loop $A(s)$ (flat at $A_v(0)$ up to $\omega_a$, then −20 dB/decade to 0 dB at $GB$).
- Numbers: $RC = 100$ s → $1/RC = 0.01$ rad/s; $\omega_a = GB/A_v(0) = 2\pi\times10^6/4000 = 1571$ rad/s; denominator $s^2 + 1570.8s + 6.28\times10^4$ → roots −41.1 rad/s and −1530 rad/s.
- Sketch: 0 dB up to 0.01 rad/s (1.6 mHz); +20 dB/decade up to ≈ 72 dB (≈ $A_v(0)$ = 4000) at 41 rad/s (6.5 Hz); flat at ≈ 72 dB to 1.53 krad/s (≈ 243 Hz); −20 dB/decade, crossing 0 dB at ≈ $GB$ = 6.28 Mrad/s (1 MHz).

## Grading notes

+2: correct closed-loop expression (any equivalent form), verification of the asymptotes (0 dB at dc, zero at 1/RC, meeting $A_v(0)$ at ≈ $A_v(0)/RC$, then the open-loop curve), and the numerical sketch with corners at ≈ 0.01, ≈ 41 and ≈ 1530 rad/s (±5%), plateau ≈ 72 dB and 0-dB crossing near 1 MHz. +1: correct expression and shape with one numerical slip, or the numbers right with the general verification only sketched. 0: correct expression but wrong numbers or no sketch. −2 (asserted as fact): an inverting (negative) dc gain or a dc gain of $A_v(0)$, the zero and pole interchanged (gain falling from dc), or a response that rises indefinitely. "GB = 1 MHz" means $GB = 2\pi\times10^6$ rad/s; an answer that consistently takes $GB = 10^6$ rad/s instead ($\omega_a$ = 250 rad/s, roots ≈ 50 and 200 rad/s), with otherwise correct expression and asymptotes, has a single unit-convention slip: +1. $C_L$ and $R_L$ at the output have no values; treating the op amp output as ideal is expected.
