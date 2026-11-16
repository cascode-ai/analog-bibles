# Golden Solution - G300

## Reference answer

$C \approx 6.4$ pF, open-loop gain 0 dB at ≈ 5.8 MHz (asymptotic design). An exact two-pole calculation gives $C \approx 5.6$ pF with 0 dB at 5.77 MHz.

- After compensation: dominant pole $|p_1| \approx 1/(g_m R_1 R_2 C)$ (Miller), the split-off pole negligible, and the 10-MHz pole remains.
- 60° phase margin: the 10-MHz pole may contribute 30° at the unity-gain frequency: $f_u = 10\text{ MHz} \times \tan 30° = 5.77$ MHz, $\omega_u = 3.63 \times 10^7$ rad/s.
- $a_0 = 10^{108/20} = 2.51 \times 10^5$; $g_m R_1 R_2 = 6.39\text{ mA/V} \times 1.95\text{ MΩ} \times 86.3\text{ kΩ} = 1.075 \times 10^9$ Ω.
- With −20 dB/dec roll-off, $a_0 |p_1| = \omega_u$: $C = \dfrac{a_0}{g_m R_1 R_2\,\omega_u} = \dfrac{2.51 \times 10^5}{1.075 \times 10^9 \times 3.63 \times 10^7} = 6.4$ pF ($|p_1|/2\pi = 23$ Hz).
- Check: with 6.4 pF the true 0-dB frequency is 5.1 MHz (the 10-MHz pole lowers $|a|$ by 1.15 at 5.8 MHz) and PM ≈ 63°. Requiring $|a| = 1$ exactly at 5.77 MHz gives $C = 6.4/1.155 = 5.6$ pF.

## Grading notes

+2: $C$ ≈ 6.4 pF (asymptotic) or ≈ 5.6 pF (exact), accept 5.4–6.6 pF, with the 0-dB frequency ≈ 5.1–5.8 MHz consistent with the method, and the Miller pole $1/(g_m R_1R_2C)$ used. +1: correct $C$ with the frequency missing or a minor slip. 0: right method with a slip of more than 10% in $C$. −2 (asserted as fact): $C$ computed from $1/(2\pi R_1 C)$ without Miller multiplication (≈ nF values), the 500-kHz pole kept in the phase budget, or 45° used instead of 60°.
