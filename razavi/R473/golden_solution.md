# Golden Solution - R473

## Reference answer

$A_0 \approx 36.6$ (gain crossover at about 311 MHz).
- Loop gain with β = 1: $A_0/[(1 + jf/10\,\mathrm{MHz})(1 + jf/500\,\mathrm{MHz})]$. PM = 60° means the phase is −120° at the gain crossover $f_u$: $\tan^{-1}(f_u/10) + \tan^{-1}(f_u/500) = 120°$ ($f_u$ in MHz), so $f_u \approx 310.5$ MHz (88.2° + 31.8°).
- $|H(f_u)| = 1$: $A_0 = \sqrt{1 + 31.05^2}\,\sqrt{1 + 0.621^2} = 31.07 \times 1.177 \approx 36.6$.
- A rougher version takes the first pole's phase as exactly 90°: then $f_u = 500\tan 30° = 289$ MHz and $A_0 \approx (289/10)\sqrt{1 + 1/3} \approx 33$.

## Grading notes

+2: $A_0$ = 35.5–37.5 from the exact phase condition, or ≈ 33 when the answer states that it takes the dominant pole's phase as 90°. The crossover should be about 290–311 MHz. +1: right method, but a cruder approximation that the answer does not state gives a value between 30 and 35.5. 0: right setup, but an arithmetic slip changes $A_0$ beyond these ranges. -2 (asserted as fact): PM read as a phase of −60° at crossover (giving $A_0$ of about 2), β ≠ 1, or $A_0$ off by more than a factor of 1.5 because of a wrong formula.
