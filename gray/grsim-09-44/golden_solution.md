# Golden Solution - grsim-09-44

## Reference answer

Calculated return ratio: $\mathscr{R}(s) = a_v(s)\dfrac{Z_d}{Z_d + R_F} = \dfrac{500}{(1 + s/100)(1 + s/10^6)(1 + s/5 \times 10^6)}$ with $Z_d = 100\text{ kΩ} \| 1/(sC_{\text{in}})$, $R_F$ = 100 kΩ.
Injection quantities (from the circuit): $\mathscr{R}'_i = (1 + a_v)Z_d/R_F$, $\mathscr{R}'_v = a_v + R_F/Z_d$.
(a) Values (magnitude ∠ phase):
- 1 kHz: $\mathscr{R}'_i$ = 15.9∠−86.0°, $\mathscr{R}'_v$ = 15.9∠−85.9°, $\mathscr{R}$ = 7.96∠−89.5°.
- 100 kHz: $\mathscr{R}'_i$ = 0.907∠−21.1°, $\mathscr{R}'_v$ = 0.938∠+8.4°, $\mathscr{R}$ = 0.0669∠−129.3°.
- 10 MHz: $\mathscr{R}'_i$ = 0.0398∠−87.7°, $\mathscr{R}'_v$ = 25.2∠+87.7°, $\mathscr{R}$ = 1.0 × 10⁻⁶∠−264.5° (= +95.5°).
- 1 GHz: $\mathscr{R}'_i$ = 3.98 × 10⁻⁴∠−90°, $\mathscr{R}'_v$ = 2513∠+90°, $\mathscr{R}$ = 1.0 × 10⁻¹²∠−270°.
(b) $|\mathscr{R}|$: 54 dB to 100 rad/s (16 Hz), −20 dB/dec to 1 Mrad/s, −40 dB/dec to 5 Mrad/s, −60 dB/dec above. Unity-gain frequency 4.99 × 10⁴ rad/s (7.95 kHz), phase −93.3° → PM ≈ 86.7°. Phase −180° at $\sqrt{5} \times 10^6$ rad/s (356 kHz) where $|\mathscr{R}| = 0.0083$ → gain margin ≈ 41.6 dB. The simulated values should equal the directly calculated ones (the network is ideal), confirming the technique.

## Grading notes

Because the model is ideal, a correct simulation must reproduce the calculated $\mathscr{R}$ to within numerical precision: 7.96∠−89.5° at 1 kHz, 0.067∠−129° at 100 kHz, ≈ 10⁻⁶ at 10 MHz and ≈ 10⁻¹² at 1 GHz (phases −264° to −270°), unity-gain frequency ≈ 7.95 kHz, PM ≈ 86.7°, GM ≈ 41.6 dB. $\mathscr{R}'_i$ and $\mathscr{R}'_v$ individually differ from $\mathscr{R}$ (e.g. both ≈ 15.9 at 1 kHz); reporting either one as the return ratio is an error, as is combining magnitudes instead of complex values.
