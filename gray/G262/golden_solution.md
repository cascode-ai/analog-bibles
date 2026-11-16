# Golden Solution - G262

## Reference answer

Increasing the feedback resistors $R_F$ decreases $T$, roughly in inverse proportion to $R_F$ (and decreasing $R_F$ increases $T$).

Reason: the feedback factor is $f = R_E/(R_E+R_F) \approx R_E/R_F$ ($R_E = 50$ Ω), which falls as $R_F$ grows. The forward gain $a$ changes only slightly and in the opposite direction: the output loading $R_E+R_F$ in parallel with the 200-Ω collector resistor is reduced (so $a$ rises a little), while the input-stage degeneration $R_E\|R_F$ hardly changes. Net: $T \approx K\,(R_{C3}\|(R_E+R_F))/R_F$ falls less than proportionally (nominal $T \approx 10$; +20% in $R_F$ gives ≈ −13% at fixed bias). The closed-loop gain $\approx 1 + R_F/R_E$ rises at the same time. (The 500-Ω resistors also carry dc bias current, so a re-biased circuit shows a somewhat larger drop, same direction.)

## Grading notes

+2: $T$ decreases as $R_F$ increases, explained mainly by the smaller feedback factor, with the (minor, opposing) change of output loading noted or the net "somewhat less than proportional" behaviour stated. +1: correct direction with only the feedback-factor argument. 0: both effects named but no net conclusion. −2 (asserted as fact): $T$ increases with $R_F$, or $T$ claimed unchanged.
