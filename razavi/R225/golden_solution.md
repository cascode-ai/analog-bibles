# Golden Solution - R225

## Reference answer

$R_2/R_1 \approx 0.48$.

- Square law: $0.5\ \mathrm{mA} = \tfrac12(134\ \mu\mathrm{A/V^2})(100)(V_{GS}-V_{TH})^2$ → $V_{GS}-V_{TH} = 0.273$ V, $V_{GS} = 0.973$ V.
- $V_{GS} = V_{DD}R_2/(R_1+R_2)$ → $R_2/(R_1+R_2) = 0.973/3 = 0.324$ → $R_2/R_1 = 0.324/0.676 = 0.480$.

## Grading notes

+2: $R_2/R_1$ between 0.47 and 0.49 (from $V_{GS} \approx 0.97$ V). +1: correct $V_{GS}$ and divider ratio $R_2/(R_1+R_2) \approx 0.324$ with a small slip in the final conversion (within ±5%). 0: right method with a computational slip that changes the value by more than 5%. -2 (asserted as fact): the divider ratio inverted (giving $R_2/R_1 \approx 2.1$), the factor 1/2 dropped from the square law, or $V_{GS}$ taken equal to $V_{TH}$ or to $V_{DD}$.
