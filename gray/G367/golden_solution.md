# Golden Solution - G367

## Reference answer

It decreases: from about 16.3 dB at 50 Ω to about 13.4 dB at 100 Ω.

- The circuit's equivalent input noise voltage corresponds to a noise resistance of about 2.1 kΩ ($\overline{v_i^2} \approx 4kT\cdot2.1$ kΩ: twice $r_b + 1/2g_m + R_E$ for the pair with $I_C \approx 46\ \mu$A, plus the referred load noise), and the current generator ($2qI_B$, $I_B \approx 0.46\ \mu$A) is negligible at such low $R_S$.
- Then $F - 1 \approx R_{eq}/R_S$: doubling $R_S$ halves the excess noise ratio: $F \approx 1 + 2100/100 = 22$ (13.4 dB) instead of 43 (16.3 dB). The source's own noise grows in proportion to $R_S$ while the amplifier's dominant noise (voltage generator) does not.
- The optimum source resistance is $\sqrt{\overline{v_i^2}/\overline{i_i^2}} \approx 15$ kΩ, so any increase from 50 Ω toward it lowers F.

## Grading notes

+2: "decrease" with the reason (voltage-noise dominated, $F-1 \propto 1/R_S$ below the optimum ≈ 15 kΩ), ideally with ≈ 13.4 dB vs 16.3 dB. +1: correct conclusion and reason without numbers. 0: correct conclusion with a muddled or partly wrong explanation. −2 (asserted as fact): "increase", or the claim that the noise figure is independent of $R_S$.
