# Golden Solution - A554

## Reference answer

DR ≈ 65.6 dB.

- One first-order modulator at $f_S$ = 100 MHz: $n_o = \dfrac{0.5V_{REF}}{\sqrt{12}}\cdot\dfrac{\pi}{\sqrt3}\cdot(0.02)^{1.5} = 0.1443 \times 1.814 \times 2.83\times10^{-3}\,V_{REF} = 7.40\times10^{-4}V_{REF}$, i.e. 62.6 dB.
- Each modulator shapes its own noise with its own first-order loop at 100 MHz, and the two quantization errors are uncorrelated (the white-noise model on which the given formula rests). The adder doubles the common signal (power ×4) while the uncorrelated in-band noise powers add (×2), so the input-referred noise power halves (equivalently, averaging the two outputs keeps the signal and halves the noise power): $n_{o,total} = n_o/\sqrt2 = 5.24\times10^{-4}V_{REF}$.
- DR $= 20\log(1/5.24\times10^{-4}) = 65.6$ dB, a 3-dB gain over a single modulator. (If the two errors were correlated, e.g. identical bitstreams for a dc input, the gain would be smaller, down to none.)
- The pair is not equivalent to one first-order loop sampling at 200 MHz (that would give 71.6 dB), because the noise-shaping zero of each loop is set by its own 100-MHz sampling: the in-band NTF magnitude stays $2\sin(\pi f/100\,\mathrm{MHz})$.

## Grading notes

+2: ≈ 65.6 dB (±0.5 dB): single-modulator noise at 100 MHz ($7.40\times10^{-4}V_{REF}$, 62.6 dB) plus 3 dB from combining two modulators with uncorrelated quantization noise (common signal adds coherently, noise powers add, so the input-referred noise power halves). Noting that correlated noises (e.g., identical bitstreams for a dc input) would give less than 3 dB is correct but not required. 0: the right single-modulator noise and the right combination model with an arithmetic or dB slip in the final value; or 62.6 dB reached through an openly stated assumption that the two quantization noises are fully correlated, with the dependence of the result on that assumption noted. −2 (asserted as fact): the two outputs combined with a wrong model (a model error, not a slip): no gain from the second modulator (62.6 dB, e.g., each modulator's noise power weighted by its half of the output time slots), the two noise powers added without referring them to the input, i.e. ignoring that the signal doubles too ($\sqrt2\,n_o$, ≈ 59.6 dB), or the pair treated as one first-order modulator sampling at 200 MHz (71.6 dB, against the 100-MHz loops the question states); also DR from a wrong formula or wrong order (e.g., second-order shaping assumed), or an error of more than ~10 dB.
