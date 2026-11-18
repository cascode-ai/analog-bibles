# Golden Solution - G350

## Reference answer

≈ 19 µV rms (spot density ≈ $1.8\times10^{-14}$ V²/Hz × 20 kHz ≈ $3.6\times10^{-10}$ V²). Unsuitable for low source impedances: the noise is set by the circuit's own 100-kΩ resistor and by base-current shot noise flowing in it, about 30 times worse than the alternatives with emitter degeneration or low collector current.

- $\overline{v_i^2}/\Delta f \approx 4kT(100\text{ k} + r_b + 1/2g_m) + 2qI_B(100.1\text{ k})^2 = 1.66\times10^{-15} + 1.60\times10^{-14} = 1.77\times10^{-14}$ V²/Hz ($I_B = 5\ \mu$A); an exact calculation including the referred collector and load noise gives $1.79\times10^{-14}$.
- With a zero-impedance source only $\overline{v_i^2}$ matters: $\sqrt{1.79\times10^{-14}\times2\times10^4} \approx 18.9\ \mu$V rms.

## Grading notes

+2: ≈ 18–20 µV rms with the base-current noise in 100 kΩ identified as dominant, and the conclusion that this circuit is poor (much the noisiest way to get a high input resistance) for low source impedances. +1: the 100-kΩ thermal noise alone used (≈ 5.8 µV) together with a clearly stated omission, or a correct number with no comment. 0: only the 100-kΩ thermal term (≈ 5.8 µV) presented as complete, with a sensible qualitative comment. −2 (asserted as fact): a value below 1 µV (100-kΩ resistor and base-current noise ignored), or the claim that this is the best low-noise option.
