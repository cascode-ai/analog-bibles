# Golden Solution - R046

## Reference answer

$g_m = \mu_nC_{ox}(W/L)(V_{GS}-V_{TH})$, so $W/L = \dfrac{g_m}{\mu_nC_{ox}(V_{GS}-V_{TH})} \propto (V_{GS}-V_{TH})^{-1}$: a hyperbola, decreasing more slowly than the constant-$I_D$ case ($\propto 1/V_{ov}^2$). Along this curve $I_D = g_m(V_{GS}-V_{TH})/2$ grows linearly with the overdrive.

![R046 constant-$g_m$ $W/L$ curve](/q/R046/solution-wl.svg)

## Grading notes

+2: $W/L \propto 1/(V_{GS}-V_{TH})$ (hyperbola) derived from $g_m = \mu_nC_{ox}(W/L)(V_{GS}-V_{TH})$. +1: correct shape, exponent not stated. -2 (asserted as fact): $W/L \propto 1/(V_{GS}-V_{TH})^2$ or increasing with overdrive.
