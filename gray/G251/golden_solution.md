# Golden Solution - G251

## Reference answer

$T \approx 6.16\times10^4$, $v_o/i_i \approx -99.998$ kΩ (≈ −100 kΩ), $R_{in} \approx 1.35$ Ω, $R_{out} \approx 3.2$ mΩ.

- Feedback network ($R_F$): $y_{11f} = y_{22f} = 1/R_F$, $f = y_{12f} = -1/R_F = -10^{-5}$ S.
- Basic amplifier with loading: input $z_{ia} = R_F\|R_i = 100\|500 = 83.3$ kΩ; output load $R = R_F\|R_L = 13.04$ kΩ.
- $a = -z_{ia}\,a_v\,\dfrac{R}{R+R_o} = -83.3\text{k}\times 75{,}000 \times \dfrac{13.04}{13.24} = -6.16\times10^9$ Ω.
- $T = af = 61{,}560$; $A = a/(1+T) = -99{,}998$ Ω.
- $R_{in} = 83.3\text{ k}/61{,}561 = 1.354$ Ω; $R_{out} = (R_o\|R_F\|R_L)/(1+T) = 197.0/61{,}561 = 3.20$ mΩ.

## Grading notes

+2: $T$ ≈ 61,600 (±2%), gain ≈ −100 kΩ (−99,998 Ω or "−100 kΩ with a 16-ppm error"), $R_{in}$ ≈ 1.35 Ω, $R_{out}$ ≈ 3.2 mΩ (±3%), with the loading of $R_F$ included. A return ratio (≈ 61,660) reported instead of $T$ with otherwise identical results counts as a minor deviation (+1) since the question asks for the two-port loop gain. +1: one quantity off by a slip. 0: two of the four right. −2 (asserted as fact): positive gain, $R_{in}$ or $R_{out}$ multiplied rather than divided by $(1+T)$, or $T$ off by an order of magnitude.
