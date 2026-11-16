# Golden Solution - R343

## Reference answer

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_m} + 4kTR_G + \frac{4kT}{g_m^2R_D},\qquad \overline{I_{n,in}^2} = \frac{4kT}{R_D}$$

- Voltage (input shorted, gain $g_mR_D$): $M_1$ → $4kT\gamma/g_m$; $R_D$ → $4kT/(g_m^2R_D)$; $R_G$: no gate current flows, so its noise voltage $4kTR_G$ sits directly at the gate and acts like an input voltage (only $V_{GS}$ matters) → $4kTR_G$.
- Current (input open): nothing else is connected to the source, so the total current of $M_1$ (channel plus its noise) is zero; neither $M_1$'s nor $R_G$'s noise reaches the output. Output noise $4kTR_D$; the input current flows entirely through $M_1$ into $R_D$ (transimpedance $R_D$), so $\overline{I_{n,in}^2} = 4kT/R_D$.

## Grading notes

+2: both results, with $R_G$ appearing one-to-one in the voltage and not at all in the current. +1: one of the two quantities fully right and the other with a minor slip (e.g., $R_G$ term scaled by a gain factor). 0: one quantity fully right and the other missing or wrong. An error confined to one quantity caps the score here, e.g. $M_1$'s (or $R_G$'s) noise kept in the input-referred current (such as $4kT(\gamma g_m + g_m^2R_G + 1/R_D)$, the input-shorted output noise divided by $R_D^2$) with the voltage right, or $R_G$ left out of the voltage ("the gate draws no current, so $R_G$ adds no noise") with the current right. -2 (asserted as fact): both quantities wrong (e.g., $R_G$ dropped from the voltage and $M_1$'s noise kept in the current), the stage treated as common-source, or two conflicting results asserted for the same quantity.
