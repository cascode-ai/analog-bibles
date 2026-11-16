# Golden Solution - A543

## Reference answer

$B = 5$ bits.

- $M = f_s/(2f_B) = 50$; $n_0 = \dfrac{\Delta}{\sqrt{12}}\dfrac{\pi^2}{\sqrt5}M^{-2.5} = \dfrac{\Delta}{\sqrt{12}} \times 4.414 \times 5.66\times10^{-5}$.
- Ratio to the allowed noise: $n_0/[V_{REF}/(2^{16}\sqrt{12})] = 2^{16}\times 2.50\times10^{-4}/2^B = 16.4/2^B$.
- So $2^B \ge 16.4$: B = 4 gives 1.02 (just fails, by ≈ 0.2 dB) and B = 5 gives 0.51 (meets, ≈ 5.8 dB margin).
- Each extra quantizer bit gains 6 dB; the 1-bit second-order loop is ≈ 18 dB short and needs about 4 more bits.

## Grading notes

+2: B = 5, with the noise of the second-order loop at M = 50 computed and the per-bit 6-dB improvement (Δ halving) applied, showing B = 4 falls just short. +1: B = 4 concluded by treating the ≈ 0.2-dB shortfall as negligible, provided the margin is shown; or B = 5 with a minor numerical slip. 0: correct method but an error such as Δ = V_REF/(2^B − 1) combined with the stated criterion inconsistently, giving B = 6, with the reasoning shown. −2 (asserted as fact): B ≤ 3 (e.g., comparing the rms noise with one full LSB instead of LSB/√12), or a claim that the quantizer resolution does not affect the in-band noise.
