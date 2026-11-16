# Golden Solution - A355

## Reference answer

$\overline{e_{eq}^2} \approx 1.0\times10^{-16}\ \mathrm{V^2/Hz}$, i.e. $e_{eq} \approx 10$ nV/√Hz.

- $g_m = \sqrt{2K'(W/L)I_D} = \sqrt{2\times25\ \mu\times15\times20\ \mu} = 122.5$ µS.
- MOSFET: $8kT/(3g_m) = 1.104\times10^{-20}/1.225\times10^{-4} = 9.01\times10^{-17}$ V²/Hz (9.5 nV/√Hz).
- $R_D$: output noise current $4kT/R_D$, referred to the input by dividing by $g_m^2$: $4kT/(g_m^2R_D) = 1.656\times10^{-20}/(1.5\times10^{-8}\times10^5) = 1.10\times10^{-17}$ V²/Hz.
- Total $1.01\times10^{-16}$ V²/Hz → 10.1 nV/√Hz. ($r_{ds}$ affects signal and noise at the output equally and drops out.)

## Grading notes

+2: 9.8–10.3 nV/√Hz (≈ 1.0×10⁻¹⁶ V²/Hz) with both the MOSFET channel noise and $R_D$'s noise referred to the input. +1: MOSFET noise only (≈ 9.5 nV/√Hz) with $R_D$ not considered, or a small numerical slip. 0: correct expressions but $g_m$ computed wrongly by more than 10 %. −2 (asserted as fact): $R_D$'s noise added at the input without dividing by the gain (≈ 40 nV/√Hz), noise formula $4kT g_m$ used as a voltage, W/L taken as 150 instead of 15, or 1/f noise substituted for thermal noise.
