# Golden Solution - G087

## Reference answer

$R_o \approx 158$ kΩ, $v_o/v_i \approx +144$.

- $I_D = 50$ µA; $g_{m1} = 0.913$ mS; $g_{m4} = \sqrt{2k'_p(100/0.64)(50\ \mu)} = 0.948$ mS; $r_{o2} = 190$ kΩ, $r_{o4} = 320$ kΩ.
- Degenerated load: $R_{o4} = r_{o4}(1 + g_{m4}R_S) + R_S = 320\ \mathrm{k}(1 + 1.90) + 2\ \mathrm{k} \approx 929$ kΩ.
- $R_o = r_{o2}\|R_{o4} = 190\|929 \approx 158$ kΩ (full small-signal: 159 kΩ).
- $v_o/v_i = g_{m1}R_o \approx 0.913\ \mathrm{mS}\times158\ \mathrm{k\Omega} \approx 144$ (vs. 109 without the source resistors).

## Grading notes

+2: gain 133–155 and $R_o$ 148–168 kΩ, with the degenerated PMOS output resistance $r_{o4}(1+g_{m4}R_S)$ in parallel with $r_{o2}$. +1: one slip moving a value slightly outside the ranges. 0: degeneration ignored (109, 119 kΩ) with otherwise correct work, or $R_o$ right and gain missing. -2 (asserted as fact): gain $g_mR_o/2$, $R_o = R_{o4}$ alone or $2r_{o2}\|R_{o4}$, degeneration claimed to reduce the output resistance, or a wrong process data set.
