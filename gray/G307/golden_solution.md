# Golden Solution - G307

## Reference answer

Unity-gain frequency ≈ 3.85 Mrad/s ≈ 0.61 MHz; slew rate ≈ 0.2 V/μs.

- Input stage: pnp pair with $I_{EE} = 20$ μA, 10 μA per side, active (current-mirror) load $Q_3$–$Q_4$, so its transconductance into the base of $Q_5$ is $G_m = g_{m1} = 10\text{ μA}/26\text{ mV} = 0.385$ mA/V.
- The dominant pole is at the base of $Q_5$, where the 0.05-μF capacitor sits. Above that pole, $v_{b5} \approx G_m v_i/(j\omega C)$ and $v_o = -500\,v_{b5}$, so $|v_o/v_i| = 500\,G_m/(\omega C)$, which is unity at $\omega_u = 500 \times 0.385\text{ mA/V}/0.05\text{ μF} = 3.85 \times 10^6$ rad/s, $f_u ≈ 613$ kHz.
- Slew rate: the input stage can deliver at most $I_{EE} = 20$ μA into the capacitor: $dV_{b5}/dt = 20\text{ μA}/0.05\text{ μF} = 400$ V/s, and the output moves 500 times faster: 0.2 V/μs.
- Both are ten times worse than with the 10-pF Miller capacitor (which acts as about $10\text{ pF} \times 501 ≈ 5$ nF at the base of $Q_5$: 6.1 MHz and 2 V/μs); the ratio SR/$\omega_u = I_{EE}/G_m$ = 52 mV is unchanged.

## Grading notes

+2: $G_m$ = 0.385 mA/V (full $g_{m1}$ because of the mirror), $f_u$ ≈ 0.61 MHz (±10%; 3.85 Mrad/s), slew rate ≈ 0.2 V/μs (±10%). +1: both results right in form with one numerical slip, or $f_u$ given in rad/s without conversion but labelled. A unit-conversion slip in the slew rate (e.g. 400 V/s written as 0.4 V/μs, giving 200 V/μs) with the method $I_{EE}/C \times 500$ shown, and $f_u$ right, is this +1 case, not 0. 0: one of the two quantities right. −2 (asserted as fact): Miller multiplication applied to the grounded 0.05-μF capacitor, $G_m = g_{m1}/2$ giving values off by 2 without justification, or the slew rate computed without the factor of 500 (0.4 mV/μs).
