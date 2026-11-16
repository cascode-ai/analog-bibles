# Golden Solution - G305

## Reference answer

(Positions given as $s/2\pi$.)
- $f = 10^{-3}$ ($T_0 = 100$): poles at −9.92 kHz and −122.2 kHz; zero at −100 kHz.
- $f = 1$ ($T_0 = 10^5$): poles at −99.83 kHz and −12.02 MHz; zero at −100 kHz (a nearly cancelling pole-zero doublet; the response is essentially single-pole at 12 MHz with a small slow-settling component).

Root locus: the loop gain has poles at −100 Hz and −120 kHz and a zero at −100 kHz. The real axis is on the locus between −100 Hz and −100 kHz and to the left of −120 kHz. So the branch from −100 Hz moves left and ends on the zero at −100 kHz, and the branch from −120 kHz moves left to −∞; the poles stay real for all $f$ (no break-away). The zeros of the closed-loop gain are the zeros of $a(s)$, so −100 kHz is a zero for every $f$.

Closed-loop poles from $(1 + s/\omega_1)(1 + s/\omega_2) + T_0(1 + s/\omega_z) = 0$ (in kHz units: $s^2/12 + s(10.008 + T_0/100) + (1 + T_0) = 0$):
- $T_0 = 100$: $s^2 + 132.1s + 1212 = 0$ → −9.92, −122.2 kHz.
- $T_0 = 10^5$: $s^2 + 12{,}120s + 1.2 \times 10^6 = 0$ → −99.83 kHz, −12.02 MHz.

## Grading notes

+2: correct locus (all real: from −100 Hz to the zero, from −120 kHz to −∞) and both sets of poles within ±3% with the zero at −100 kHz for both values of $f$. +1: correct poles with a sketch lacking justification, or a correct sketch with one pole set slightly off. 0: correct locus but pole values wrong by a setup slip, or zero of the closed loop omitted while the poles are right. −2 (asserted as fact): complex closed-loop poles, the zero claimed to move or disappear with feedback, or a branch from −100 Hz going to −∞.
