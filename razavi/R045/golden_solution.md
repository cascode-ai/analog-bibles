# Golden Solution - R045

## Reference answer

$W/L = \dfrac{2I_D}{\mu_nC_{ox}(V_{GS}-V_{TH})^2} \propto (V_{GS}-V_{TH})^{-2}$: a hyperbola-like curve that grows without bound as the overdrive → 0 and falls rapidly with increasing overdrive (halving the overdrive quadruples W/L). Example: $I_D = 0.5$ mA, $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$: W/L ≈ 186, 46.6, 7.5 at 0.2, 0.4, 1 V.

![R045 constant-$I_D$ $W/L$ curve](/q/R045/solution-wl.svg)

## Grading notes

+2: $W/L \propto 1/(V_{GS}-V_{TH})^2$ with the correct curve shape. +1: correct shape with the exponent left vague. -2 (asserted as fact): $W/L \propto 1/(V_{GS}-V_{TH})$, increasing with overdrive, or linear.
