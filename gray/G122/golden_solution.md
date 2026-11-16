# Golden Solution - G122

## Reference answer

$A_{vQ} \approx 0.849$ (at $V_i = 0$, where $V_o \approx -1.117$ V).
- $V_{ov1} = \sqrt{2(1\ \mathrm{mA})/(200\ \mu\mathrm{A/V^2} \times 1000)} = 0.1$ V.
- $0 = V_o + 0.7 + 0.5\left(\sqrt{V_o + 3.1} - \sqrt{0.6}\right) + 0.1$: with $x = \sqrt{V_o + 3.1}$, $x^2 + 0.5x - 3.1 - 0.8 + 0.3873 = 0$ → $x = 1.4083$, $V_o = -1.117$ V, $V_o + V_{DD} + 2\phi_f = 1.983$ V.
- $A_{vQ} = 1/\left(1 + 0.5/(2\sqrt{1.983})\right) = 1/1.1775 = 0.849$.

## Grading notes

+2: $A_{vQ}$ = 0.849 ± 0.003 with $V_o \approx -1.12$ V. +1: correct method with a small numerical slip (within ±0.006). 0: correct slope expression evaluated at $V_o = 0$ (giving ≈ 0.875) with the rest sound. −2 (asserted as fact): slope 1 (body effect ignored), slope from $g_m/(g_m + g_{mb})$ with a wrong $\chi$ formula giving > 0.95 or < 0.75, or slope > 1.
