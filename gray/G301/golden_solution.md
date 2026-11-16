# Golden Solution - G301

## Reference answer

$C \approx 76$ nF (asymptotic design; ≈ 67 nF for exactly 60°), open-loop gain 0 dB at ≈ 270 kHz.

- 60° PM: the 500-kHz and 10-MHz poles may together contribute 30° at the unity-gain frequency: $\arctan(f_u/500\text{k}) + \arctan(f_u/10\text{M}) = 30°$ → $f_u = 271$ kHz.
- Dominant pole: $a_0 |p_1| = \omega_u$ → $|p_1|/2\pi = 271\text{ kHz}/2.51 \times 10^5 = 1.08$ Hz.
- The pole is set by the 1.95-MΩ node: $C = 1/(2\pi \times 1.08\text{ Hz} \times 1.95\text{ MΩ}) = 76$ nF (the original ≈ 2.7 pF at that node is negligible).
- Requiring $|a| = 1$ exactly at 271 kHz (the other poles reduce $|a|$ by 1.14) gives $|p_1|/2\pi = 1.23$ Hz and $C = 67$ nF. (With 76 nF the true 0-dB frequency is ≈ 245 kHz and PM ≈ 63°.)
- Compared with Miller compensation (≈ 6 pF, ≈ 5.8 MHz) the shunt capacitor is four orders of magnitude larger and the bandwidth about 20 times lower, because the 500-kHz pole is not split away.

## Grading notes

+2: $f_u$ ≈ 270 kHz (accept 240–280 kHz) and $C$ ≈ 67–76 nF (accept 60–80 nF) consistent with the method used. +1: correct $f_u$ with a slip in $C$ under 15%, or correct $C$ with the frequency missing. 0: right approach but the 500-kHz pole's phase ignored or mishandled, giving a clearly different $f_u$. −2 (asserted as fact): Miller multiplication applied to the shunt capacitor (pF values), the 500-kHz pole assumed split away, or 45° used instead of 60°.
