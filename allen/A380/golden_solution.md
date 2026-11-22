# Golden Solution - A380

## Reference answer

Falling output ≈ 79 ns, rising output ≈ 17.5 ns, comparator propagation delay ≈ 48 ns.
- Trip point of the second stage: M6 carries 234 µA at $V_{SG6} = 0.7+\sqrt{2\cdot234/(50\cdot38)} = 1.196$ V, so $V_{TRP2} = 2.5-1.196 = 1.304$ V.
- Initial state for $t < 0.2\ \mu$s ($v_{G1} = -2.5$ V ≪ $V_{G2}$): M1 is off, so no mirror current reaches $v_{o1}$; $C_I$ discharges through M2–M5 until M5 leaves saturation, $v_{o1} \approx V_{SS} = -2.5$ V, and $v_{out}$ is high (≈ 2.47 V).
- Rising $v_{G1}$ at 0.2 µs → falling output: M1 takes $I_{SS} = 30\ \mu$A, M4 mirrors it into $C_I$ (M2 off): $t_{ro1} = 0.2\ \mathrm{pF}\times(1.304+2.5)\ \mathrm{V}/30\ \mu\mathrm{A} = 25.4$ ns. M6 then turns off and M7 discharges $C_{II}$ with 234 µA from ≈ 2.5 V to 0 V: $t_{f,out} = 5\ \mathrm{pF}\times2.5\ \mathrm{V}/234\ \mu\mathrm{A} = 53.4$ ns. Total ≈ 78.8 ns.
- Initial state for the falling edge ($v_{G1} = +2.5$ V ≫ $V_{G2}$): $v_{o1} \approx V_{DD}$, $v_{out} = V_{SS}$.
- Falling $v_{G1}$ at 0.4 µs → rising output: M1 and the mirror turn off, M2 sinks 30 µA from $C_I$: $t_{fo1} = 0.2\ \mathrm{pF}\times(2.5-1.304)\ \mathrm{V}/30\ \mu\mathrm{A} = 8.0$ ns. $v_{o1}$ keeps falling toward $V_{SS}$, but only at $I_{SS}/C_I = 0.15$ V/ns, so M6's overdrive ramps as $V_{ov} = 0.496\ \mathrm{V} + St$ with $S = 0.15$ V/ns. The charge balance $\tfrac{1900\ \mu\mathrm{A/V^2}}{6S}\left[(0.496+St)^3-0.496^3\right] - 234\ \mu\mathrm{A}\cdot t = 5\ \mathrm{pF}\times2.5\ \mathrm{V}$ gives $t_{r,out} \approx 9.5$ ns (at the end $v_{o1} \approx -0.12$ V, $I_6 \approx 3.5$ mA). Total ≈ 17.5 ns. (Taking $v_{G6}$ midway between 1.304 V and −2.5 V, $I_6 \approx 5.46$ mA and $t_{r,out} \approx 2.4$ ns, overestimates the gate drive: in 2.4 ns $v_{o1}$ falls only 0.36 V.)
- Average: $(78.8+17.5)/2 \approx 48$ ns. The falling output is slower than when $v_{G2}$ is driven because here $v_{o1}$ starts from $V_{SS}$ instead of ≈ −1.0 V.

## Grading notes

+2: falling-output delay 70–90 ns, rising-output delay 8–20 ns, average 40–50 ns, with the initial states identified (low $v_{o1}$ ≈ $V_{SS}$ before the rising edge, $v_{o1}$ ≈ $V_{DD}$ before the falling edge) and the second-stage trip point ≈ 1.30 V. Small differences from the choice of the $v_{G6}$ value for the M6 current are fine (the cruder midway estimate, ≈ 10 ns rising and ≈ 45 ns average, is also accepted). +1: initial low value of $v_{o1}$ taken as ≈ −1.0 V (giving ≈ 69 ns falling, ≈ 43 ns average) or another single misjudged state, with correct method otherwise. 0: correct method with a slip that changes one delay by more than 30 %. −2 (asserted as fact): stages' delays not summed (only the output stage counted), the output falling delay computed with the large M6 current, wrong trip point (e.g., 0 V for the first stage), or the edges' directions inverted.
