# Golden Solution - G321

## Reference answer

Both poles stay on the negative real axis for all $C$ (pole splitting): one moves from $-1.25 \times 10^6$ rad/s toward the origin (as $1/C$), the other from $-5 \times 10^7$ rad/s out to $-2.49 \times 10^8$ rad/s.

- Write the denominator as $G(s) + C\,H(s)$:
$G(s) = (1 + sR_1C_1)(1 + sR_2C_2)$, roots $-1/(R_1C_1) = -5.0 \times 10^7$ rad/s and $-1/(R_2C_2) = -1.25 \times 10^6$ rad/s (start points, $C = 0$);
$H(s) = s\left[(R_1 + R_2 + g_mR_1R_2) + sR_1R_2(C_1 + C_2)\right]$, roots $0$ and $-\dfrac{R_1 + R_2 + g_mR_1R_2}{R_1R_2(C_1 + C_2)} = -\dfrac{4.03 \times 10^7}{0.162} = -2.49 \times 10^8$ rad/s (end points, $C \to ∞$).
- Root-locus rule on the real axis (odd number of start/end points to the right): the locus occupies $[-1.25 \times 10^6, 0]$ and $[-2.49 \times 10^8, -5 \times 10^7]$. So the lower pole moves to the origin and the upper pole moves left to $-2.49 \times 10^8$ ≈ $-g_m/(C_1 + C_2)$; no break-away (the discriminant stays positive).
- Calibration (rad/s): $C$ = 0.01 pF: $-8.3 \times 10^5$, $-6.9 \times 10^7$; 0.1 pF: $-2.1 \times 10^5$, $-1.50 \times 10^8$; 1 pF: $-2.4 \times 10^4$, $-2.31 \times 10^8$; 10 pF: $-2.5 \times 10^3$, $-2.47 \times 10^8$; 100 pF: $-2.5 \times 10^2$, $-2.49 \times 10^8$.
- For large $C$: $p_1 ≈ -1/(g_mR_1R_2C)$ and $p_2 ≈ -g_mC/[C_1C_2 + C(C_1 + C_2)] \to -g_m/(C_1 + C_2)$.

## Grading notes

+2: correct start points (−1.25 × 10⁶ and −5 × 10⁷ rad/s), end points (0 and ≈ −2.5 × 10⁸ rad/s), both branches on the real axis moving apart (one toward the origin, one toward −2.5 × 10⁸), stated or shown to stay real. +1: correct qualitative pole splitting with one end point missing or wrong by a slip. 0: start points right but the locus drawn with complex branches or wrong end points. A unit slip in a given value (e.g. $C_2$ written as $8\times10^{-15}$ F), with the correct method and the correct qualitative locus (both poles real, one to the origin, one out to $-(R_1+R_2+g_mR_1R_2)/[R_1R_2(C_1+C_2)]$) but start and end points off by orders of magnitude, is a computational slip: at most 0, not −2. −2 (asserted as fact): poles moving together, crossing into the right half-plane, or the RHP zero treated as a pole.
