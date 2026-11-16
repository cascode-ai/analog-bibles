# Golden Solution - alsim-03-6-06

## Reference answer

Hand analysis with the same level-1 equations (the models have no device capacitances, so only the 5 pF load matters):
- Bias: M3 is diode-connected: $(5 - V_{SG3})/200\ \mathrm{k\Omega} = 125\ \mu\mathrm{A/V^2}(V_{SG3} - 0.7)^2(1 + 0.05V_{SG3})$ → $V_{SG3}$ ≈ 1.09 V, V(3) ≈ 3.91 V, reference current ≈ 19.6 µA (37.7 µA with 100 kΩ). M2 mirrors it: ≈ 20.9 µA at $v_{OUT}$ = 2.5 V.

(a) $v_{OUT}$ ≈ 5 V up to $v_{IN}$ ≈ 0.8 V, then a very steep fall: 4.83 V at 0.9 V, 2.5 V at $v_{IN}$ ≈ 0.96 V (≈ 1.06 V with 100 kΩ), 0.22 V at 1.0 V, 0.03 V at 2 V, ≈ 0.01 V at 5 V.

(b) At $v_{IN}$ ≈ 0.963 V ($v_{OUT}$ ≈ 2.5 V): $g_{m1}$ ≈ 159 µS, $g_{ds1}$ ≈ 0.76 µS, $g_{ds2}$ ≈ 0.93 µS, so $A_v = -g_{m1}/(g_{ds1} + g_{ds2})$ ≈ −94 (≈ 39.5 dB; ≈ 36.7 dB with 100 kΩ). Single pole at $(g_{ds1} + g_{ds2})/(2\pi\cdot5\ \mathrm{pF})$ ≈ 54 kHz (≈ 103 kHz with 100 kΩ), then −20 dB/decade to unity gain near 5 MHz and ≈ −26 dB at 100 MHz. The phase goes from 180° (inversion) through 135° at ≈ 54 kHz to ≈ 90° above a few MHz. Because the gain is high, the dc input must be set within a few millivolts of 0.963 V to keep $v_{OUT}$ in the high-gain region (check with .OP).

(c) $v_{OUT}$ = 5 V until 1 µs. As $v_{IN}$ rises to 3 V, M1 (which can sink ≈ 1.7 mA) discharges the 5 pF within a few tens of ns to ≈ 0.02 V. At 3.05 µs M1 turns off and M2 charges the load with ≈ 21 µA (slew ≈ 4.2–4.4 V/µs): $v_{OUT}$ ramps up almost linearly, crosses 2.5 V at ≈ 3.6 µs and reaches only ≈ 4.1 V at 4 µs. (With 100 kΩ the ramp is about twice as fast and $v_{OUT}$ is back at 5 V by ≈ 3.8 µs.)

## Grading notes

Parts (a), (b), (c) carry equal weight. (a) correct: an inverting curve with $v_{OUT}$ = 2.5 V at $v_{IN}$ ≈ 0.96 V (±0.03 V), steeper than with 100 kΩ. (b) correct: low-frequency gain ≈ 36–42 dB with 180° phase, −3 dB frequency ≈ 45–65 kHz, −20 dB/decade roll-off, phase approaching 90°; a bias point outside the high-gain region (output stuck near 0 or 5 V, gain far below 30 dB) means the dc input was not set correctly. (c) correct: a fast fall at ≈ 1.0–1.05 µs to near 0 V, a slow, nearly linear rise from ≈ 3.05 µs at ≈ 4–4.5 V/µs, and $v_{OUT}$ ≈ 3.9–4.3 V at 4 µs. Results matching R1 = 100 kΩ (≈ 1.06 V, ≈ 36.7 dB, ≈ 100 kHz, full recovery before 4 µs) mean the resistor change was ignored.
