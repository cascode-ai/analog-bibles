# Golden Solution - G362

## Reference answer

At 500 Hz: $R_{S(\text{opt})} \approx 215\ \Omega$ and $F_{\text{opt}} \approx 1.99$, i.e. ≈ 3.0 dB (standard uncorrelated-generator analysis). Keeping the correlation and the flicker base-current noise in $r_b$ gives ≈ 238 Ω and ≈ 4.1 dB.

- At 500 Hz the base-current noise is $2qI_B(1 + 1000/500) = 3\times2qI_B$, so $\overline{i_i^2} = 3\cdot2qI_C/\beta_F$; $\overline{v_i^2} = 4kT(r_b + 1/2g_m)$ unchanged.
- $R_{S(\text{opt})} = \sqrt{\overline{v_i^2}/\overline{i_i^2}} = 372/\sqrt3 = 215\ \Omega$.
- $F_{\text{opt}} = 1 + 2\sqrt{\overline{v_i^2}\,\overline{i_i^2}}/4kT = 1 + \sqrt3\times0.572 = 1.99$ → 2.99 dB (vs 1.97 dB without flicker noise).

## Grading notes

+2: either ≈ 215 Ω / ≈ 3.0 dB (standard method) or ≈ 238 Ω / ≈ 4.1 dB (correlated, flicker noise also in $r_b$), with the factor-3 increase of the base-current noise at 500 Hz. +1: correct factor of 3 but a slip in one of the two results, or no dB conversion. 0: flicker factor taken as 2 (fa/f only) or 1.5, with otherwise correct method. −2 (asserted as fact): flicker noise put into $\overline{v_i^2}$ as a 1/f collector term, the noise figure claimed independent of frequency, or $R_{S,opt}$ increased by flicker noise.
