# Golden Solution - A555

## Reference answer

DR ≈ 71.6 dB.

- One first-order modulator at 100 MHz with $\Delta = 0.25V_{REF}$: $n_o = \dfrac{0.25V_{REF}}{\sqrt{12}}\cdot\dfrac{\pi}{\sqrt3}\cdot(0.02)^{1.5} = 3.70\times10^{-4}V_{REF}$, i.e. 68.6 dB (6 dB better than the 1-bit case).
- Two modulators with uncorrelated quantization noise combined: the adder doubles the common signal (power ×4) while the noise powers add (×2), so the input-referred noise power halves, $n_{o,total} = 2.62\times10^{-4}V_{REF}$. (Correlated errors, e.g. identical bitstreams for a dc input, would give less than this 3 dB.)
- DR $= 20\log(1/2.62\times10^{-4}) = 71.6$ dB.
- (Treating the pair as one loop at 200 MHz would overstate this as 77.7 dB.)

## Grading notes

+2: ≈ 71.6 dB (±0.5 dB): single-modulator noise at 100 MHz with $\Delta = 0.25V_{REF}$ ($3.70\times10^{-4}V_{REF}$, 68.6 dB, 6 dB better than with $0.5V_{REF}$) plus the 3-dB gain of combining two modulators with uncorrelated quantization noise. Noting that correlated noises would give less than 3 dB is correct but not required. 0: the right single-modulator noise and the right combination model with an arithmetic or dB slip in the final value; or 68.6 dB reached through an openly stated assumption that the two quantization noises are fully correlated, with the dependence of the result on that assumption noted. −2 (asserted as fact): the two outputs combined with a wrong model (a model error, not a slip): no gain from the second modulator (68.6 dB), the two noise powers added without referring them to the input, i.e. ignoring that the signal doubles too ($\sqrt2\,n_o$, ≈ 65.6 dB), or the pair treated as one first-order modulator sampling at 200 MHz (77.6–77.7 dB, against the 100-MHz loops the question states); also the extra quantizer bit claimed to give no improvement or more than ~6 dB per bit, or a wrong-order formula.
