# Golden Solution - grsim-09-43

## Reference answer

Hand estimates (gate capacitances only, no junction areas specified):
- Low frequency $\mathscr{R}_0 = a_0 ≈ 4.3 \times 10^4$ (≈ 92.7 dB), dominant pole ≈ 72 Hz.
- 1 kHz: $|\mathscr{R}|$ ≈ 3.0 × 10³ (≈ 70 dB), phase ≈ −86°.
- 100 kHz: ≈ 30 (≈ 29.7 dB), ≈ −90°.
- 10 MHz: ≈ 0.27–0.29 (≈ −11 dB), ≈ −118° to −126° (nondominant poles in the 30–80 MHz range: output node with $C_c$ and $C_{gs6}$, the current-mirror node, and $R_Z$ with the channel capacitance of $M_9$).
- 1 GHz: ≈ $10^{-4}$–$10^{-3}$, phase ≈ −265°.
- Unity-gain frequency ≈ 3.0 MHz ($≈ g_{m1}/2\pi C_c$); phase margin ≈ 75–82°; phase reaches −180° at ≈ 30–45 MHz, gain margin ≈ 25–30 dB.
Combining rule check: for each frequency, $\mathscr{R} = \left[\dfrac{1}{1 + \mathscr{R}'_i} + \dfrac{1}{1 + \mathscr{R}'_v}\right]^{-1} - 1$, computed with complex values.

## Grading notes

A correct simulation gives $|\mathscr{R}|$ ≈ 3000 at 1 kHz (±25%), ≈ 30 at 100 kHz (±15%), well below 1 at 10 MHz with phase between ≈ −110° and −140°, and a very small value at 1 GHz; unity-gain frequency ≈ 2.5–3.5 MHz, phase margin ≈ 65–85° (lower if junction capacitances are included), finite gain margin of a few tens of dB. The complex combination must be used (combining magnitudes only is wrong). Results showing a unity-gain frequency far from ≈ 3 MHz or a negative margin indicate an incorrect $M_9$ (zero not cancelled) or a wrong bias point.
