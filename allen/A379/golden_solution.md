# Golden Solution - A379

## Reference answer

The output rises from 0 V and crosses 2 V about 24 ns after the step; it then settles at ≈ 3.5 V.
- Before the step: $v_{in} = V_{DD}$, M6 off, M7 holds $v_{out}$ at 0 V.
- After the step: $V_{SG6} = 3$ V, so M6 sources $\tfrac{50\cdot10}{2}(2.3)^2 = 1.32$ mA (saturated while $v_{out} < 1.7$ V); M7 ($V_{GS} = 1$ V) sinks at most $\tfrac{110\cdot100}{2}(0.3)^2 = 0.495$ mA (in triode below 0.3 V, so even less at first).
- Net charging current ≈ 1.32 − 0.50 ≈ 0.83 mA → slope ≈ 83 V/µs; $t \approx 10\ \mathrm{pF}\times2\ \mathrm{V}/0.83\ \mathrm{mA} \approx 24$ ns (a numerical integration including the triode regions gives 23.7 ns; ≈ 20 ns with λ included).
- Sketch: 0 V until the step, a nearly linear ramp, rounding off above ≈ 1.7 V as M6 enters triode, and an exponential approach (time constant ≈ 10 ns) to $V_{OH} \approx 3.52$ V, where the triode current of M6 equals 495 µA.

## Grading notes

+2: correct initial state (output low, 0 V), rising output, net current $I_6 - I_7$ ≈ 0.8 mA (I6 ≈ 1.3 mA, I7 ≈ 0.5 mA), delay ≈ 20–28 ns, and a sketch that settles near 3.5 V. +1: delay right but the final level or the sketch missing/vague, or $I_7$ neglected (delay ≈ 15 ns) with everything else right. 0: correct method with a current computed wrongly by a slip. −2 (asserted as fact): output assumed to fall, sizes swapped between M6 and M7, a delay of order 100 ns or more from a wrong current, or the output claimed to swing to $V_{DD}$ with M7 conducting.
