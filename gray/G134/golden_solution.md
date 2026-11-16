# Golden Solution - G134

## Reference answer

$V_o^- = -13.4$ V for all three loads; $V_o^+ = +14.1$ V for 10 kΩ and 1 kΩ, but only ≈ +8.0 V for 200 Ω.
- Negative: $Q_{17}$ saturates, $V_1 = -15 + 0.2 = -14.8$ V; then $V_2 = V_1 + |V_{BE23}|$ and $V_o = V_2 + |V_{BE20}|$, so $V_o^- = -V_{CC} + V_{CE17(\text{sat})} + |V_{BE23}| + |V_{BE20}| = -13.4$ V. Base drive is not a limit ($Q_{23}$ can draw whatever base current $Q_{20}$ needs).
- Positive, voltage limit: $Q_{13A}$ saturates: $V_o^+ = V_{CC} - |V_{CE13A(\text{sat})}| - V_{BE14} = 14.1$ V.
- Positive, current limit: at most the whole 0.2 mA of $Q_{13A}$ reaches the base of $Q_{14}$, so $I_{o,max} = (\beta_F + 1)(0.2\ \mathrm{mA}) = 40.2$ mA (≈ 40 mA).
- 10 kΩ needs 1.41 mA and 1 kΩ needs 14.1 mA (both < 40 mA) → +14.1 V. 200 Ω would need 70.5 mA > 40 mA → $V_o^+ = 40.2\ \mathrm{mA}\times 200\ \Omega \approx 8.0$ V.

## Grading notes

+2: −13.4 V (all loads), +14.1 V for 10 kΩ and 1 kΩ, and ≈ +8.0 V (7.9–8.1 V) for 200 Ω from the $\beta_F \times 0.2$ mA drive limit. Refining the junction drops with $I_S$ and $V_T \approx 26$ mV is equally correct and also earns +2; the shifts are load dependent and reach ~0.1 V (≈ +14.13 / +14.07 / +8.04 V and ≈ −13.52 / −13.44 / −13.36 V for 10 kΩ / 1 kΩ / 200 Ω, because $Q_{23}$ carries only ~0.2–1.5 mA), so do not apply a fixed ±30 mV tolerance to such a self-consistent refinement. +1: all right except a minor numerical slip in one limit. 0: drive limit for 200 Ω missed (14.1 V for all loads) with the rest correct; or positive limits all right but the negative limit wrong from a misread of $Q_{23}$ (e.g. −14.1 V with $Q_{23}$ treated as a saturating npn pull-down, dropping one junction). −2 (asserted as fact): positive limit at $V_{CC} - V_{CE(\text{sat})}$ = 14.8 V, negative limit −14.8 V (ignoring the $Q_{23}$ and $Q_{20}$ junctions), or positive and negative stages interchanged.
