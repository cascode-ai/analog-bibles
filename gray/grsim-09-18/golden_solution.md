# Golden Solution - grsim-09-18

## Reference answer

New compensation capacitor ≈ 2.06 pF; slew rate ≈ 9.7 V/μs, an improvement of $1 + g_{m1}R_E$ ≈ 4.85 times.

- Original: $g_{m1} = 0.385$ mA/V, $\omega_u = g_{m1}/C = 3.85 \times 10^7$ rad/s (6.1 MHz), SR = 2 V/μs.
- With emitter degeneration: $g_{mI} = g_{m1}/(1 + g_{m1}R_E) = 0.385/(1 + 3.85) = 0.0794$ mA/V.
- Same $\omega_u$: $C = g_{mI}/\omega_u = 10\text{ pF}/4.85 = 2.06$ pF.
- SR $= I_{EE}/C = 20\text{ μA}/2.06\text{ pF} = 9.7$ V/μs (×4.85).
- Expected simulation: with $C$ ≈ 2.06 pF the open-loop unity-gain frequency stays ≈ 6 MHz; the slew rate measured in a unity-gain follower with a large step is ≈ 9.7 V/μs. The input stage's linear range widens to roughly $\pm(I_{EE}R_E + 4V_T)$ ≈ ±0.3 V, so in a follower the slewing phase ends earlier and the linear settling ($\tau = 1/\omega_u$ ≈ 26 ns) is unchanged.

## Grading notes

Hand results: $C$ ≈ 2.06 pF (±5%), improvement ≈ 4.85× (±5%), SR ≈ 9.7 V/μs. A correct simulation shows a unity-gain frequency close to the original ≈ 6 MHz (±10%) and a slew rate ≈ 9–10 V/μs; small deviations come from finite β and the emitter resistors' effect on the mirror balance. A simulated slew rate unchanged at 2 V/μs indicates the capacitor was not reduced.
