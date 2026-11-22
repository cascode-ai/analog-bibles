# Golden Solution - grsim-04-36

## Reference answer

$I_{BIAS} \approx 0.20$ mA (203 µA with $V_T$ = 26 mV; 198 µA at 25.7 mV).

- The mirror $M_3$–$M_4$ (equal 50/1) forces equal currents $I$ in both branches.
- Gate loop: $V_{EB}(Q_2, 1\times) + V_{GS1} = V_{EB}(Q_1, 10\times) + V_{GS2}$, so $V_{GS2} - V_{GS1} = V_T\ln10 = 59.9$ mV.
- $\sqrt{2I/k'_n}\left(\dfrac{1}{\sqrt{50}} - \dfrac{1}{\sqrt{100}}\right) = V_T\ln10$ → $\sqrt{2I/k'_n} = 1.445$ V → $I = 1.045k'_n \approx 203$ µA ($V_{ov1}$ = 0.145 V, $V_{ov2}$ = 0.204 V, $|V_{ov4}|$ = 0.354 V; all devices active with the 3-V supply).
- Temperature: $I = \dfrac{k'_n(V_T\ln10)^2}{2(1/\sqrt{50} - 1/\sqrt{100})^2} \propto \mu_nT^2 \propto T^{0.5}$, so $TC_F \approx 0.5/T \approx +1700$ ppm/°C (much smaller than the $T^2$ of the PTAT voltage because the mobility falls).
- Supply sensitivity (small-signal estimate including $r_o$, with $r_e = V_T/I \approx 128$ Ω for each pnp): $\partial I_{BIAS}/\partial V_{DD} \approx 38$ µA/V, i.e. $S = (V_{DD}/I)(\partial I/\partial V_{DD}) \approx 0.6$ — the effective degeneration ($V_T\ln10$ across small $r_e$'s) is weak, so the circuit is only moderately supply-insensitive.
- Expected simulation: a level-1/2 model with these parameters gives $I_{BIAS}$ within ≈ 10–20 % of 200 µA (≈ 235 µA with the full stated level-1 model; channel-length modulation, mismatch of $V_{DS3}$ and $V_{DS4}$, and the body effect shift it); a start-up path may be needed to avoid the zero-current state.

## Grading notes

A correct answer gives $I_{BIAS}$ ≈ 190–210 µA from $V_{GS2} - V_{GS1} = V_T\ln10$, a temperature dependence ∝ $T^{1/2}$ (positive TC ≈ +0.17 %/°C), and a simulation within ≈ 20 %; the supply sensitivity should come out as a finite, moderate value (tens of µA/V). Getting the sign of $V_{GS2} - V_{GS1}$ wrong (no solution), a current ∝ $T^2$ ignoring mobility, or a claim of zero supply sensitivity is wrong.
