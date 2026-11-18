# Golden Solution - G351

## Reference answer

≈ 0.64–0.67 µV rms (≈ 4.5–4.8 nV/√Hz). The noise is dominated by the thermal noise of the 1-kΩ emitter resistor (equivalent noise resistance ≈ 1.2–1.4 kΩ). This is far better than putting a 100-kΩ resistor in series with the base and reasonably good among ways of getting a high input resistance, but for a truly low-impedance source the amplifier noise still dominates (NF ≈ 14.5 dB at $R_S = 50$ Ω, ≈ 5.2 dB at 600 Ω): a low-impedance source does not need the high input resistance, and the same stage without $R_E$ ($4kT\cdot126$ Ω, ≈ 1.45 nV/√Hz) would be about 10 dB quieter. Either verdict, tied to the ≈ 1.2–1.4-kΩ noise resistance, is reasonable.

- $\overline{v_i^2}/\Delta f = 4kT(r_b + 1/2g_m + R_E) + 2qI_BR_E^2 = 4kT(1126) + 1.6\times10^{-18} = 2.03\times10^{-17}$ V²/Hz → $\sqrt{2.03\times10^{-17}\times2\times10^4} = 0.64\ \mu$V.
- Adding the 10-kΩ load referred through the gain ≈ 9.5 ($4kT\cdot110\ \Omega$) and the generator correlation gives ≈ $2.27\times10^{-17}$ V²/Hz → 0.67 µV.

## Grading notes

+2: 0.6–0.7 µV rms, with $R_E$ thermal noise identified as the main contributor and a verdict tied to the ≈ 1.1–1.4-kΩ noise resistance. Accept either "reasonably good / much better than the series-resistor circuit" or "not well suited to very low source impedances, because $R_E$'s noise dominates and the high input resistance is unnecessary"; neither verdict is an error. +1: correct value without the comment, or a slip that changes the value by <20%. 0: $R_E$ noise omitted (≈ 0.2–0.3 µV) with otherwise sound work. −2 (asserted as fact): $R_E$ said to reduce the input-referred noise, or a value off by more than a factor of 3 from a wrong model.
