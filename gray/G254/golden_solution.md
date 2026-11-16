# Golden Solution - G254

## Reference answer

$Z_{out} \approx 12.8$ Ω (up from ≈ 1.16 Ω with an ideal current-source drive).

- $g_m = 3.464$ mS, $r_o = 50$ kΩ; stage gains of $M_1$, $M_2$: $-15.75$; $M_3$ (loaded by $R_F$): $-10.83$.
- The source resistance shunts the input: basic-amplifier input resistance $1\text{k}\|10\text{k} = 909$ Ω, so $a = -909\times15.75^2\times10.83 = -2.44$ MΩ and $T = a(-1/R_F) = 244$.
- $Z_{out} = (5\text{k}\|50\text{k}\|10\text{k})/(1+T) = 3125/245 = 12.76$ Ω.
- (Return-ratio check: $\mathcal{R} = 251$, $R_{out}(g_{m1}{=}0) = 4545\|11\text{k} = 3216$ Ω, $R_{out} = 3216/252 = 12.76$ Ω.)

## Grading notes

+2: $Z_{out}$ ≈ 12.8 Ω (±5%), with the explanation that the source resistance reduces the loop gain (to ≈ 244–251). +1: correct method with a slip giving a value within ±15%. 0: correct qualitative statement (output resistance rises because $T$ falls) with a wrong number. −2 (asserted as fact): output resistance unchanged or decreased, or the source resistance placed in series with the input.
