# Golden Solution - R068

## Reference answer

$V_{in} \approx 1.137$ V ($V_{out} = V_{in} - V_{TH} \approx 0.437$ V, $I_D \approx 1.28$ mA); $A_v \approx -11.7$.

- Edge of triode: $V_{out} = V_{in} - V_{TH} = V_{ov}$, and $V_{out} = V_{DD} - R_D \cdot \tfrac12\beta V_{ov}^2$ with $\beta = \mu_nC_{ox}W/L = 13.4\ \mathrm{mA/V^2}$: $13.4V_{ov}^2 + V_{ov} - 3 = 0$ → $V_{ov} = 0.437$ V.
- $g_m = \beta V_{ov} = 5.86$ mS; $A_v = -g_mR_D \approx -11.7$ (the triode-side value is the same, since the triode output conductance $\beta(V_{ov} - V_{DS})$ is zero at the edge).

## Grading notes

+2: $V_{in}$ ≈ 1.137 V (±0.01 V) and gain ≈ −11.7 (±3%). +1: one slip in an otherwise correct solution. 0: $V_{in}$ right but the gain wrong (e.g., the 1-mA value −10.35 reused), or vice versa. -2 (asserted as fact): edge condition written as $V_{out} = V_{in}$ or $V_{out} = V_{TH}$, or a gain computed with the triode formula giving a value far from −11.7.
