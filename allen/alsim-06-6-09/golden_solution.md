# Golden Solution - alsim-06-6-09

## Reference answer

Hand estimates with the given model (expected simulation results):
- GB = $g_{m1}/C_L$ with $g_{m1} = \sqrt{2(110\,\mu)(33)(50\,\mu)} = 603\ \mu$S: 30 Mrad/s ≈ 4.8 MHz (about half the 10-MHz design value, because $C_L$ is doubled).
- Slew rate = $I_3/C_L$ = 100 µA/20 pF = 5 V/µs.
- Power: 2.5 V × ($I_4 + I_5$) = 2.5 V × 250 µA ≈ 0.63 mW (plus the bias generator).
- Output resistance (75 µA in the cascodes): $g_{m9}r_{ds9}r_{ds11}$ = 574 µS/(3 µS)² ≈ 64 MΩ; $g_{m7}r_{ds7}(r_{ds2}\|r_{ds5})$ = 1.10 mS/(3.75 µS × 8.25 µS) ≈ 35 MΩ; $R_{out}$ ≈ 23 MΩ. Low-frequency gain ≈ $g_{m1}R_{out}$ ≈ 1.4×10⁴ (≈ 83 dB); dominant pole ≈ 1/($R_{out}C_L$) ≈ 2.2×10³ rad/s (≈ 350 Hz).
- Phase margin: high (≈ 80–90°): the nondominant poles at the folding and mirror nodes are at hundreds of Mrad/s, far above GB; the larger load improves it further.
- ICMR: lower limit $V_{DS3}(\mathrm{sat}) + V_{GS1}$ ≈ 0.35 + 0.87 ≈ 1.2 V (≈ 1.3 V with the body effect of M1); upper limit $V_{DD} - V_{SD4}(\mathrm{sat}) + V_{T1}$ ≈ 3 V, i.e. up to the 2.5-V rail.
- Output range ≈ 0.5 V (two n-channel saturation voltages ≈ 0.26 V each) to ≈ 2.2 V (two p-channel saturation voltages ≈ 0.18 + 0.14 V), depending on the cascode bias voltages.
- Settling: after slewing at 5 V/µs, linear settling with time constant ≈ 1/GB ≈ 33 ns; small-step settling to 1% in ≈ 0.15–0.2 µs.

## Grading notes

A correct simulation shows (within ≈ ±25%, since bias choices and λ matter): GB ≈ 4–5.5 MHz, SR ≈ 5 V/µs (rising and falling similar), $P_{diss}$ ≈ 0.6–0.8 mW, dc gain of order 10⁴ (80–85 dB), dominant pole of a few hundred Hz, phase margin ≥ 75°, ICMR from ≈ 1.2–1.4 V up to the positive rail, output range ≈ 0.5 V to ≈ 2.1–2.2 V, settling of the order of 0.2 µs for small steps. The answer should explain that GB and SR are about half of the original 10-pF design values. A GB near 10 MHz or SR near 10 V/µs with the 20-pF load, or a phase margin below ≈ 60°, indicates an error in the setup.
