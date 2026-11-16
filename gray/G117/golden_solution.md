# Golden Solution - G117

## Reference answer

About 82 µW for $R_L = 2\ \mathrm{k\Omega}$ and 110 µW for $R_L = 10\ \mathrm{k\Omega}$; the power gain is $\approx \beta_F = 100$ (20 dB) in both cases.
- $I_Q = 2.86$ mA. Maximum amplitudes: $\hat V_o = I_QR_L = 5.72$ V (2 kΩ) and $14.8$ V (10 kΩ); load powers 8.18 mW and 10.95 mW.
- The follower's voltage gain is ≈ 1, so the driver's signal voltage amplitude is ≈ $\hat V_o$; the signal base current amplitude is $\hat I_b = (\hat V_o/R_L)/\beta_F$ (28.6 µA and 14.8 µA).
- Driver power $P_i = \tfrac12\hat V_o\hat I_b = P_L/\beta_F$: $\tfrac12(5.72)(28.6\ \mu\mathrm{A}) = 81.8$ µW; $\tfrac12(14.8)(14.8\ \mu\mathrm{A}) = 109.5$ µW.
- Power gain $P_L/P_i = \beta_F = 100$ (101 if $I_e = (\beta_F+1)I_b$ is used).
- If the base currents of $Q_2$ and $Q_3$ are also included with β = 100, $I_Q = 2.86/1.02 = 2.80$ mA, so at 2 kΩ $\hat V_o = 5.61$ V and $P_i \approx 78$ µW; the 10-kΩ case and the power gain are unchanged.

## Grading notes

+2: both input powers within ±5% (≈82 µW and ≈110 µW) and power gain ≈ 100 (or 101). Taking β = 100 for $Q_2$ and $Q_3$ as well ($I_Q \approx 2.80$ mA, $P_i \approx 78$ µW at 2 kΩ) is also correct, since the question gives β only for $Q_1$. +1: power gain right and one input power off by a slip. 0: correct idea (gain ≈ β) without the input powers, or input powers computed with the dc base current instead of the signal component but labelled. −2 (asserted as fact): power gain equal to the voltage gain (≈1), power gain β² or a value off by more than a factor 2, or the driver power taken as the load power.
