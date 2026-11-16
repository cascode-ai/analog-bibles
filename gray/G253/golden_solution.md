# Golden Solution - G253

## Reference answer

$v_o/i_i \approx -9.996$ kΩ, $T \approx 2684$, $Z_{in} \approx 3.72$ Ω, $Z_{out} \approx 1.16$ Ω.

- $g_m = \sqrt{2k'(W/L)I_D} = \sqrt{2\cdot60\mu\cdot100\cdot1\text{m}} = 3.464$ mS; $r_o = 50$ kΩ.
- Feedback network $R_F = 10$ kΩ: $f = -1/R_F$; loading: $R_F$ from gate of $M_1$ to ground and from the output to ground.
- Stage gains: $M_1$, $M_2$: $-g_m(5\text{k}\|50\text{k}) = -3.464\text{m}\times4545 = -15.75$; $M_3$: $-g_m(5\text{k}\|50\text{k}\|10\text{k}) = -3.464\text{m}\times3125 = -10.83$.
- $a = R_F \times(-15.75)^2\times(-10.83) = -26.84$ MΩ; $T = af = 2684$.
- $A = a/(1+T) = -26.84\text{M}/2685 = -9996$ Ω (≈ $-R_F$).
- $Z_{in} = 10\text{k}/2685 = 3.72$ Ω; $Z_{out} = 3125/2685 = 1.164$ Ω.

## Grading notes

+2: all four values within ±3% (gain ≈ −10 kΩ is fine if $T$ is right and the gain is quoted as $A = a/(1+T)$ ≈ −9.996 kΩ or "≈ −10 kΩ"), with $r_o$ and $R_F$ loading included. Any equivalent factorization is acceptable when $|T| \approx 2684$ (e.g. a voltage gain $a = v_o/v_{g1} \approx -2684$ with $f \approx 1$). Quoting in addition the true return ratio $(g_m \cdot 4.545\ \text{k})^3 \approx 3904$ (valid because the ideal current-source input leaves $R_F$ unloaded when the loop is broken) is correct and not an error, provided the two-port $T \approx 2684$ is also given as the requested loop gain. +1: one value off by a slip, or $r_o$ neglected throughout (giving $T \approx 3464$, $Z_{in} \approx 2.9$ Ω, $Z_{out} \approx 0.96$ Ω) with an otherwise correct method. 0: two of four right. −2 (asserted as fact): positive transresistance, impedances multiplied by $(1+T)$, or a loop gain off by an order of magnitude.
