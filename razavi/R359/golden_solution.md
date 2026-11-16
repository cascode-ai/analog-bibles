# Golden Solution - R359

## Reference answer

About 5.1 mV rms (output PSD ≈ 5.1×10⁻¹³ V²/Hz, i.e. ≈ 715 nV/√Hz, flat).

- $g_m = \sqrt{2(134\ \mu)(100)(0.05\ \mathrm{m})} = 1.158$ mS; $r_O = 1/(\lambda I_D) = 1/(0.1 \times 0.05\ \mathrm{m}) = 200$ kΩ.
- With an ideal current-source load the noise current sees only $r_O$: $\overline{V_{n,out}^2} = 4kT\gamma g_mr_O^2 = 1.104\times10^{-20}\times1.158\times10^{-3}\times(2\times10^5)^2 = 5.11\times10^{-13}\ \mathrm{V^2/Hz}$.
- Over 50 MHz: $2.56\times10^{-5}\ \mathrm{V^2}$ → ≈ 5.06 mV rms. (γ = 1 would give 6.2 mV.)
- This is the largest output noise a single transistor can produce at this current; $r_O$ itself is not a noise source.

## Grading notes

+2: ≈ 5.1 mV rms (±5%), with $4kT\gamma g_mr_O^2$ and $r_O = 200$ kΩ. Small deviations from including $(1+\lambda V_{DS})$ in $g_m$ with a stated $V_{DS}$ are acceptable. +1: correct PSD with a slip in the bandwidth integration or square root. 0: correct expression but a numerical error of more than ~10% in one factor. -2 (asserted as fact): $r_O$ treated as an additional noise source of $4kT/r_O$ dominating the result, output noise computed with a resistor load that does not exist, or the input-referred noise reported as the output noise.
