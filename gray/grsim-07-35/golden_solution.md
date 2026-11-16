# Golden Solution - grsim-07-35

## Reference answer

Bias: $I_{\text{REF}} = 5.4\ \mathrm{V}/6\ \mathrm{k\Omega} = 0.9$ mA, $Q_5$: $I_{C5} = 0.9\ \mathrm{V}/2\ \mathrm{k\Omega} = 0.45$ mA → $I_{C1} = I_{C2} = 0.225$ mA; $V_{C1} = 3.75$ V, tail of the second pair at 3.15 V → $I_{C3} = I_{C4} = 0.315$ mA, $V_O = 4.43$ V dc.

Small signal: $g_{m1} = 8.65$ mA/V, $r_{\pi1} = 23.1\ \mathrm{k\Omega}$; $g_{m3} = 12.1$ mA/V, $r_{\pi3} = 16.5\ \mathrm{k\Omega}$; $\tau_F = 208$ ps, $C_{\pi1} = 3.80$ pF, $C_{\pi3} = 4.52$ pF.

Gain: first-stage half-circuit $A_1 = -g_{m1}(10\ \mathrm{k}\|r_{\pi3})\,r_{\pi1}/(r_{\pi1} + 20\ \mathrm{k}) = -28.9$; second stage $A_2 = -g_{m3}(5\ \mathrm{k}) = -60.6$; the output is single-ended (half of the second-stage differential output), so $v_o/v_i = -A_1A_2/2 = -875$ (58.8 dB).

Zero-value time constants (DM half-circuit): $C_{\pi1}$: $20\ \mathrm{k}\|r_{\pi1} = 10.7\ \mathrm{k\Omega}$ → 40.7 ns; $C_{\mu1}$: $10.7\ \mathrm{k} + 6.23\ \mathrm{k} + g_{m1}(6.23\ \mathrm{k})(10.7\ \mathrm{k}) = 595\ \mathrm{k\Omega}$ → 119 ns; $C_{cs1}$: 6.23 kΩ → 6.2 ns; $C_{\pi3}$: 6.23 kΩ → 28.2 ns; $C_{\mu3}$: $6.23\ \mathrm{k} + 5\ \mathrm{k} + g_{m3}(5\ \mathrm{k})(6.23\ \mathrm{k}) = 388\ \mathrm{k\Omega}$ → 77.7 ns; $C_{cs3}$: 5 kΩ → 5 ns. $T_0 = 277$ ns → $f_{-3\text{dB}} \approx 575$ kHz; rise time $2.2T_0 \approx 0.61\ \mu$s.

Expected simulation: −3 dB ≈ 0.62 MHz (poles near 0.63, 7.3 and 93 MHz in the half-circuit); the phase reaches −135° (relative) at ≈ 7.4 MHz.

## Grading notes

Hand part: +2 needs gain ≈ −875 (±5%; ≈ −1750 would be the differential output and is a misread of the single-ended output), $f_{-3\text{dB}}$ ≈ 0.55–0.6 MHz, and $t_r$ ≈ 0.6 µs. A correct simulation shows ≈ 58.8 dB, a −3-dB frequency ≈ 0.6 MHz (within ±10% of 0.62 MHz for this model) and −135° near 7 MHz (±20%), the latter set by the second pole. −2 (asserted as fact): gain sign or magnitude off by a misread topology (e.g., second stage as a follower), the −135° frequency claimed equal to the −3-dB frequency, or a bandwidth in the tens of MHz.
