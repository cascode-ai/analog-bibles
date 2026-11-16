# Golden Solution - G304

## Reference answer

With $R_F$, $R_E$ as given: $|f_0| = R_E/(R_E + R_F) = 0.0099$, $T_0 = 39.6$, low-frequency gain $A_0 = 4000/40.6 = 98.5$ (39.9 dB). Pole positions (as $s/2\pi$):
- Without $C_F$: $-4.5 \pm j26.7$ MHz ($\omega_n$ = 27 MHz, $Q ≈ 3.0$).
- With $C_F$: $-21.3 \pm j16.7$ MHz ($Q ≈ 0.63$, about 38° from the negative real axis), plus a far pole near −2.1 GHz from the feedback network.

Feedback function with $C_F$: $f(s) = -\dfrac{R_E}{R_E+R_F}\,\dfrac{1 + sR_FC_F}{1 + s\frac{R_ER_F}{R_E+R_F}C_F}$: a zero at $1/(2\pi R_FC_F)$ = 21.2 MHz and a pole at 101 times that (2.14 GHz, negligible). The loop gain therefore has poles at −3 and −6 MHz and, with $C_F$, a zero at −21.2 MHz.

Root loci:
- Without $C_F$: the poles from −3 and −6 MHz meet at −4.5 MHz ($T_0 = 0.125$, $f = 3.1 \times 10^{-5}$) and split vertically along Re = −4.5 MHz; at $f = 0.0099$ they are at $-4.5 \pm j26.7$ MHz (very high Q).
- With $C_F$: break-away at −4.57 MHz ($T_0 = 0.16$, $f = 4.0 \times 10^{-5}$); the complex branches follow a circle centred on the zero (−21.2 MHz) with radius 16.6 MHz, which would rejoin the real axis at −37.9 MHz at $T_0 = 79$ ($f = 0.0197$, beyond the range), after which one branch goes to the zero and the other to −∞. At $f = 0.0099$ the poles are on the top/bottom of the circle, $-21.3 \pm j16.7$ MHz. The feedback zero bends the locus away from the $j\omega$ axis.
- Closed-loop poles from $s^2 + s(|p_1| + |p_2| + T_0|p_1||p_2|/\omega_z) + (1+T_0)|p_1||p_2| = 0$ (with $C_F$) and the same without the $T_0$ term in the $s$ coefficient.

Gain magnitude $|i_o/i_s|$ (10 kHz–100 MHz):
- Without $C_F$: flat at 98.5 (39.9 dB) to a few MHz, peaking to ≈ 300 (+9.7 dB) near 26 MHz, −3 dB at ≈ 41 MHz, then falling at −40 dB/dec (≈ 7.7 at 100 MHz).
- With $C_F$: flat at 98.5 with no peaking, −3 dB at ≈ 24 MHz, then −40 dB/dec (≈ 7.2 at 100 MHz). The feedback zero is not a zero of $i_o/i_s$ (a "phantom zero"), so the response has two poles and no zero.

## Grading notes

+2: correct $T_0$ ≈ 40 and $A_0$ ≈ 98.5 (the usual approximation $|f_0| \approx R_E/R_F = 0.01$, giving $A_0 ≈ 97.6$, and neglecting the 2.14-GHz feedback-network pole are acceptable and not errors); locus without $C_F$ splitting vertically at −4.5 MHz; locus with $C_F$ bending around the feedback zero at ≈ −21 MHz (circle or equivalent description); closed-loop poles ≈ −4.5 ± j27 MHz without and ≈ −21 ± j17 MHz with $C_F$ (±10%); gain sketches showing ≈ 9–10 dB peaking near 27 MHz without $C_F$ and a flat, unpeaked response with $C_F$. +1: all main results right with one secondary item missing (e.g. no break-away values, or the gain sketch without numbers). 0: one of the two cases (with/without $C_F$) right and the other wrong or missing. −2 (asserted as fact): the feedback zero treated as a zero of the closed-loop gain in a way that changes the conclusions, $C_F$ claimed to make the response more peaked, or closed-loop poles computed with the open-loop gain of 4000 as the loop gain.
