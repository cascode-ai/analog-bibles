# Golden Solution - G149

## Reference answer

$\mathrm{CMRR}_{min} \approx 10^4$ (80 dB).

- A finite CMRR acts as an input offset that changes with the common-mode input: $\Delta V_{OS} = \Delta V_{IC}/\mathrm{CMRR}$ (CMRR $= |A_{dm}/A_{cm}| \approx (\partial V_{OS}/\partial V_{IC})^{-1}$).
- The offset is zero at $V_{IC} = 0$, and the largest common-mode excursion is 10 V (at either end of the ±10 V range). Requiring $10\ \mathrm{V}/\mathrm{CMRR} < 1\ \mathrm{mV}$ gives $\mathrm{CMRR} > 10^4$.
- Refinements change this by about 0.1 %: the op amp's own common-mode input is $V_{IC}R_2/(R_1+R_2) = 0.999V_{IC}$, and an op-amp offset refers to the circuit input with the factor $(1+R_2/R_1)/(R_2/R_1) = 1.001$. So $\mathrm{CMRR} \ge 10^4$ (80 dB) either way.

## Grading notes

+2: CMRR ≥ $10^4$ (80 dB), within ±2 %, using ΔV_OS = ΔV_IC/CMRR with a 10-V excursion from the nulled point. +1: $2\times10^4$ obtained by using the full 20-V range when the null is explicitly assumed at one end of the range (a stated, consistent reading), or the right number with a sloppy definition of CMRR. 0: right relation but wrong numbers through a slip. -2 (asserted as fact): CMRR = $10^{-4}$ or 1000/1 mV-type inversions, CMRR multiplied by the closed-loop gain of 1000 (giving $10^7$ or $10$), or the claim that the closed-loop configuration makes CMRR irrelevant.
