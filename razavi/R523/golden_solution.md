# Golden Solution - R523

## Reference answer

With $I_D$ fixed:
- $g_m = 3I_D/(V_{GS}-V_{TH}) \propto 1/(V_{GS}-V_{TH})$ is a decreasing hyperbola, $3I_D/V_{ov}$ instead of the square law's $2I_D/V_{ov}$. At small overdrive it cannot exceed the weak-inversion limit $I_D/(\xi V_T)$, so it flattens out below about $3\xi V_T \approx 0.12$ V.
- With $\beta = kW/L$, $W/L = 3I_D/[k(V_{GS}-V_{TH})^3] \propto (V_{GS}-V_{TH})^{-3}$. It falls much more steeply than the square law's $(V_{GS}-V_{TH})^{-2}$: halving the overdrive needs 8 times the $W/L$, instead of 4 times.

## Grading notes

+2: $g_m \propto 1/(V_{GS}-V_{TH})$ (coefficient $3I_D$) and $W/L \propto (V_{GS}-V_{TH})^{-3}$, both decreasing. Mentioning the weak-inversion cap at small overdrive is a plus, not required. +1: right shapes, with the $W/L$ curve described as "steeper than the square law" but without the exponent, or the $g_m$ coefficient given as 2 instead of 3. 0: shapes only, or one curve wrong. -2 (asserted as fact): $W/L \propto V_{ov}^{-2}$ (the square-law answer) for this device, $g_m$ increasing with overdrive, or $W/L$ increasing with overdrive.
