# Golden Solution - R131

## Reference answer

$V_{in} \approx 1.353$ V ($I_D \approx 1.17$ mA, $V_{out} \approx 0.653$ V); $A_v \approx -5.29$.

- Edge: $V_{out} = V_{in} - V_{TH}$, with $V_{out} = 3 - I_DR_D$ and $V_{in} = V_{TH} + V_{ov} + I_DR_S$ → $3 = V_{ov} + (R_D + R_S)\tfrac12\beta V_{ov}^2$, $\beta = 13.4\ \mathrm{mA/V^2}$: $14.74V_{ov}^2 + V_{ov} - 3 = 0$ → $V_{ov} = 0.4185$ V, $I_D = 1.173$ mA.
- $V_{in} = 0.7 + 0.4185 + 0.2347 = 1.353$ V.
- $g_m = \beta V_{ov} = 5.61$ mS; $A_v = -g_mR_D/(1 + g_mR_S) = -11.22/2.12 \approx -5.29$.

## Grading notes

+2: $V_{in}$ ≈ 1.35 V (±0.01 V) and gain ≈ −5.3 (±3%). +1: one slip. 0: right setup with a slip in solving for the overdrive that changes both results. -2 (asserted as fact): $R_S$ ignored in the bias calculation (giving the undegenerated value ≈ 1.14 V), gain without degeneration ($-g_mR_D \approx -11.2$), or positive gain.
