# Golden Solution - R643

## Reference answer

$I_{H,min} \approx 0.25$ mA ($= I_T/4$).

Derivation:
- Worst case: all of $I_T$ steered by $M_6$ to $M_3$–$M_4$ ($M_5$ off). Then $M_1$, $M_2$ carry only $I_H/2$ each and $g_{m3,4}R = 0.5$.
- Half circuit: the load is $R \parallel (-1/g_{m3,4}) = R/(1 - g_{m3,4}R)$, so the stage gain is $g_{m1,2}R/(1 - g_{m3,4}R)$, which must be ≥ 2 → $g_{m1,2}R \ge 1$.
- $g_{m1,2} = \sqrt{\mu_nC_{ox}(W/L)_{1,2}I_H}$ → $I_H \ge 1/[\mu_nC_{ox}(W/L)_{1,2}R^2] = 1/[134\times10^{-6} \times 100 \times 546^2] = 0.25$ mA. (Since $g_{m1,2}R = 2$ at 1 mA, halving it takes a quarter of the current.)
- Other settings are not worse: with a fraction x of $I_T$ through $M_1$–$M_2$ (plus $I_H$), the gain is $2\sqrt{x + 0.25}/(1 - 0.5\sqrt{1-x})$: 2.0 at x = 0, 2.68 at x = 0.5, 2.24 at x = 1.

## Grading notes

+2: 0.25 mA (±5%) from the worst case (all of $I_T$ in $M_3$–$M_4$) with the gain $g_{m1,2}R/(1 - g_{m3,4}R) \ge 2$. +1: correct expression with a numerical slip, or the right number without checking/arguing the worst case. 0: correct gain expression without a final value. -2 (asserted as fact): the cross-coupled pair treated as a positive resistance (gain $g_{m1,2}R/(1 + g_{m3,4}R)$ or $g_{m1,2}R(1 - g_{m3,4}R)$, giving 2.25 mA or 4 mA), a gain requirement of 1, or $g_{m1,2}$ computed with all of $I_H$ in one device (0.125 mA).
