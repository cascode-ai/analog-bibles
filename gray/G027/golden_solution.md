# Golden Solution - G027

## Reference answer

The model without velocity saturation is accurate within 10% for $L \gtrsim 1\ \mu$m (overestimate of exactly 10% at $L \approx 0.99$ µm; $g_m/g_{m0} = 0.9$ at $L \approx 0.89$ µm). At 0.4 µm it overestimates $g_m$ by ≈ 24%.

- With velocity saturation (active region): $g_m = WC_{ox}\mu_n\mathcal{E}_c\,\dfrac{\sqrt{1+u}-1}{\sqrt{1+u}}$, $u = \dfrac{2V_{ov}}{\mathcal{E}_cL}$. Without: $g_{m0} = \mu_nC_{ox}\dfrac{W}{L}V_{ov}$. Ratio $g_m/g_{m0} = \dfrac{2}{u}\,\dfrac{\sqrt{1+u}-1}{\sqrt{1+u}} \approx 1 - \tfrac32\dfrac{V_{ov}}{\mathcal{E}_cL}$.
- $C_{ox} = 50\epsilon_{ox}/L$, so $g_{m0} \propto 1/L^2$.

| L (µm) | $t_{ox}$ (Å) | $\mu_nC_{ox}$ (µA/V²) | $g_m$ (µS) | $g_{m0}$ (µS) | $g_{m0}/g_m - 1$ |
|---|---|---|---|---|---|
| 10 | 2000 | 7.8 | 0.769 | 0.776 | 1.0% |
| 5 | 1000 | 15.5 | 3.04 | 3.11 | 2.0% |
| 2 | 400 | 38.8 | 18.5 | 19.4 | 5.0% |
| 1 | 200 | 77.6 | 70.6 | 77.6 | 9.9% |
| 0.8 | 160 | 97.0 | 108 | 121 | 12% |
| 0.5 | 100 | 155 | 260 | 311 | 20% |
| 0.4 | 80 | 194 | 390 | 485 | 24% |

## Grading notes

+2: $g_m$ with and without velocity saturation computed over the range (at least the end points within ±5%: ≈ 0.77 µS at 10 µm, ≈ 390 vs 485 µS at 0.4 µm), the $1/L^2$ growth of $g_{m0}$, and the 10% boundary placed between 0.85 and 1.05 µm (either definition of the 10% error). +1: right boundary with a slip in some table values, or right values with the boundary slightly outside (0.8–1.1 µm). 0: values right but the boundary taken from the $g_m/I_D$ rule of thumb $V_{ov} < 0.1\mathcal{E}_cL$ (≈ 0.67 µm), where the $g_m$ error is actually ≈ 14%; or only a few lengths computed with no conclusion. -2 (asserted as fact): velocity saturation claimed to raise $g_m$, $g_m$ computed with a fixed $C_{ox}$ (ignoring $t_{ox} = L/50$) giving wrong scaling, or the boundary placed at a clearly wrong length (e.g. 0.1 µm or 5 µm).
