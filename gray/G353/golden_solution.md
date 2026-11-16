# Golden Solution - G353

## Reference answer

≈ 0.47–0.50 µV rms (0.47 µV from the transistor, 0.50 µV including the load).

Suitability: for a low-impedance source only the input noise voltage matters (the zero input noise current of the MOS gate pays off only for high-impedance sources). The white input noise, ≈ 3.6 nV/√Hz, equals the thermal noise of $R_{eq} = 2/(3g_m) + 1/(g_m^2R_L) \approx 770\ \Omega$, so for a source of a few tens of ohms the amplifier's own noise dominates (noise factor ≈ $1 + 767\ \Omega/R_S$, about 12 dB for 50 Ω): usable, but not a noise-matched low-noise amplifier for a very low-impedance source; a larger $g_m$ (wider device, more current) or a bipolar input would lower the noise. In practice MOS flicker noise, neglected here, usually dominates at audio frequencies and would make it worse still.

- $\overline{v_i^2}/\Delta f = 4kT\frac{2}{3g_m} + \frac{4kT}{g_m^2R_L} = 4kT(667 + 100) = 1.27\times10^{-17}$ V²/Hz.
- Total: $\sqrt{1.27\times10^{-17}\times2\times10^4} = 0.50\ \mu$V ($\sqrt{1.11\times10^{-17}\times2\times10^4} = 0.47\ \mu$V without the load).

## Grading notes

+2: 0.45–0.52 µV rms (with or without the load contribution, stated) and a comment tied to the input noise voltage, e.g. compared with the source's thermal noise or expressed as an equivalent noise resistance ≈ 770 Ω; a verdict of "reasonably low noise" or of "poor noise figure for a very low-impedance source" is fine when it is reasoned this way. A flicker-noise remark is welcome but not required (the question says to neglect it), and no comparison with other high-input-resistance circuits is required (none is given). +1: correct number with no comment, or a comment not tied to the noise voltage (e.g. only "high input resistance, no gate current"). 0: $4kT/g_m$ used without the 2/3 (≈ 0.58–0.6 µV) as a stated model choice, with sound reasoning. −2 (asserted as fact): a value off by more than a factor of 3, or the claim that MOS input noise is negligible at all frequencies.
