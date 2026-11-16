# Golden Solution - A312

## Reference answer

$V_A \approx 0.90$ V, $V_B \approx 1.00$ V, $V_C \approx 0.094$ V (≈ 0.1 V).

- Load currents (mirrored from M7, 100 µA at 240/14): $I_3 = 100\ \mu\mathrm{A}\times(144/240) = 60\ \mu$A, $I_4 = 100\ \mu\mathrm{A}\times(240/240) = 100\ \mu$A.
- With an ideal current-source load the inverter switches where its driver, in saturation, carries the load current: $V_{GS} = V_{TN} + \sqrt{2I/(K'_N W/L)}$.
- $V_A = 0.7 + \sqrt{2(60\ \mu)/(47\ \mu\times 460/7.5)} = 0.7 + 0.204 = 0.904$ V.
- $V_B = 0.7 + \sqrt{2(100\ \mu)/(47\ \mu\times 360/7.5)} = 0.7 + 0.298 = 0.998$ V.
- $V_C = 0.998 - 0.904 = 0.094$ V: a small positive dead band in which both output devices are off, giving low quiescent current.
(With channel-length modulation, $\lambda_N = 0.05$, $\lambda_P = 0.04$ V⁻¹ and mid-supply outputs on ±6 V supplies, the midpoints move to about 0.893 and 0.981 V, $V_C \approx 0.09$ V.)

## Grading notes

+2: $V_A$ ≈ 0.90 V, $V_B$ ≈ 1.00 V and $V_C$ ≈ 0.09–0.1 V (±5% on $V_A$, $V_B$; $V_C$ between 0.08 and 0.11 V), from the mirrored load currents 60 µA and 100 µA and the saturation equation of M1 and M2. Small shifts from including λ are fine. +1: correct method with one current or ratio slip that leaves $V_C$ positive and of the right order. 0: correct method but both thresholds wrong through a parameter slip. −2 (asserted as fact): load currents taken equal to 100 µA for both inverters, $V_A$ and $V_B$ assigned to the wrong inverters giving a negative $V_C$, or thresholds computed from the p-channel devices as drivers.
