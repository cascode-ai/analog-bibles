# Golden Solution - G352

## Reference answer

≈ 0.6–0.7 µV rms (0.61 µV from the transistor alone, 0.71 µV including the load resistor). For a low-impedance source only $\overline{v_i^2}$ matters. Its equivalent noise resistance, $r_b + 1/2g_m$ (+ the load term) ≈ 1.1–1.5 kΩ, is set mainly by collector shot noise at the low bias current ($1/2g_m = 1$ kΩ), and the low gain ($g_mR_L = 5$) lets the load resistor add noticeably. This is comparable to the emitter-degenerated stage and far better than the series-resistor circuit, so the stage is usable, but it is not well optimized for a low-impedance source: such a source does not need the high input resistance, and the same transistor at a higher $I_C$ (e.g. 0.5 mA without degeneration, $4kT\cdot126$ Ω, ≈ 0.2 µV in 20 kHz) would be about 3× quieter. The low $I_C$ mainly reduces the current noise, which helps only with high-impedance sources. Either verdict ("usable, comparable to the degenerated stage" or "not well suited; raise $I_C$"), tied to the ≈ 1.1–1.5-kΩ noise resistance, is reasonable.

- $\overline{v_i^2}/\Delta f = 4kT(r_b + 1/2g_m) + 4kT/(g_m^2R_L) = 4kT(100 + 1000 + 400) = 2.49\times10^{-17}$ V²/Hz.
- Total: $\sqrt{2.49\times10^{-17}\times2\times10^4} = 0.71\ \mu$V ($\sqrt{1.83\times10^{-17}\times2\times10^4} = 0.61\ \mu$V without the load term).

## Grading notes

+2: 0.6–0.72 µV rms with collector shot noise ($1/2g_m$ = 1 kΩ) as the main term and a verdict tied to the ≈ 1.1–1.5-kΩ noise resistance. Accept either "usable / similar to a degenerated stage (low gain makes the load noise matter)" or "not well suited to a low-impedance source: only the voltage noise matters, and a higher $I_C$ would lower it; the low $I_C$ only helps the current noise"; neither verdict is an error. +1: correct value with no comment, or a minor slip. 0: right method with a numerical slip (e.g., $g_m$ wrong by a small factor). −2 (asserted as fact): $1/2g_m$ = 26 Ω used (giving ≈ 0.2 µV), or the low current claimed to reduce the input noise voltage.
