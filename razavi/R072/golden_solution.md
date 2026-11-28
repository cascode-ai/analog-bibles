# Golden Solution - R072

## Reference answer

The gain magnitude changes by a factor of 2: $g_mR_D \approx 10.35$ at $V_{out} = 1$ V and ≈ 5.18 at $V_{out} = 2.5$ V (a change of ≈ 5.2, i.e., a 50% drop from the maximum).

- $I_D = (3 - V_{out})/R_D$: 1 mA and 0.25 mA; $g_m = \sqrt{2(13.4\ \mathrm{mA/V^2})I_D}$ = 5.18 mS and 2.59 mS.
- Since $g_m \propto \sqrt{I_D} \propto \sqrt{V_{DD} - V_{out}}$, the ratio is $\sqrt{2/0.5} = 2$.

## Grading notes

+2: both gain values (≈ 10.4 and ≈ 5.2, ±3%) and the factor-of-2 (or ≈ 5.2 absolute, 50%) variation. +1: correct factor of 2 stated with one value slipped. 0: gains computed but the variation stated wrongly by a slip. -2 (asserted as fact): gain claimed constant, a variation factor of 4 (from $g_m \propto I_D$), or gains computed in triode.
