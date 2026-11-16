# Golden Solution - G308

## Reference answer

$V_o$ is a straight ramp at the slew rate of 0.2 V/μs: −5 V at $t = 0$, −3 V at 10 μs, −1 V at 20 μs. It is still slewing at 20 μs; it would reach the +5-V final value only at ≈ 50 μs and then settle exponentially with $\tau = 1/\omega_u ≈ 0.26$ μs.

- At $t = 0^+$ the differential input is 10 V, far beyond the linear range of the bipolar pair (a few $V_T$), so all of $I_{EE} = 20$ μA charges the 0.05-μF capacitor: $|dV_{b5}/dt| = 400$ V/s, $dV_o/dt = 500 \times 400$ V/s = 0.2 V/μs. Signs: through the $Q_3$–$Q_4$ mirror and the inverting $Q_5$–$Q_6$ stage, the base of $Q_2$ is the noninverting input and the base of $Q_1$ the inverting one, so the loop takes the step on $Q_2$ and $V_o$ back to $Q_1$; $Q_1$ then carries the whole 20 μA, $Q_4$ pulls it out of the $Q_5$ base node ($dV_{b5}/dt = -400$ V/s) and $dV_o/dt = (-500)(-400\ \mathrm{V/s}) = +0.2$ V/μs. The slew rate is the same in either direction.
- The small-signal unity-gain frequency is $\omega_u = 500\,g_{m1}/C = 500 \times 0.385\text{ mA/V}/0.05\text{ μF} = 3.85$ Mrad/s, so the linear settling after slewing has a 0.26-μs time constant; the input stage leaves saturation only when the error falls to ≈ SR/$\omega_u$ ≈ 52 mV.

## Grading notes

+2: linear ramp at ≈ 0.2 V/μs (±10%) from −5 V, reaching ≈ −1 V at 20 μs, with the statement that the output is still slewing at 20 μs (final value at ≈ 50 μs). +1: correct slew rate and shape with an endpoint slip, or the ramp drawn correctly but the late-time behaviour (settling) wrongly described. 0: correct slewing method (the full $I_{EE}$ into the 0.05-μF capacitor, times the gain of 500) but a unit or arithmetic slip that changes the slew rate and hence the waveform (even if the slipped ramp then reaches +5 V within a few μs). −2 (asserted as fact): slewing ignored (an exponential linear-model response reaching +5 V within a few μs), a slew rate of 2 V/μs (Miller-compensated value) or 0.4 mV/μs (missing gain of 500).
