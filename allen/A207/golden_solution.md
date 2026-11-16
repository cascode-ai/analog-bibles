# Golden Solution - A207

## Reference answer

$v_{OUT}(\min)$ ≈ −1.58 V.

- Minimum at $v_{IN}$ = −2.5 V: $V_{SG1} = v_{OUT}+2.5$, and M1 is saturated ($V_{SD1} = V_{SG1}$).
- KCL at the output: $200\ \mu\mathrm{A} = v_{OUT}/10\ \mathrm{k\Omega} + 7.5\ \mathrm{mA/V^2}\,(v_{OUT}+2.5-0.7)^2$ (with $K'_PW/2L$ = 7.5 mA/V²).
- Solution: $v_{OUT}$ = −1.581 V (M1 carries 358 µA: the 200 µA from the source plus 158 µA drawn from ground through $R_L$).

## Grading notes

+2: −1.55 to −1.61 V from the KCL equation including the resistor current. +1: ≈ −1.64 V (≈ −1.6 V) from the approximation $v_{OUT} \approx v_{IN}+|V_T|+V_{ON}$ with $V_{ON}$ at 200 µA, the neglected resistor current stated as a small error. 0: the right method with a computational slip that moves the value outside −1.55 to −1.61 V (e.g. the resistor term lost by a unit error, giving −1.64 V presented as the KCL solution), or −1.8 V ($v_{IN}+|V_T|$, overdrive and load ignored) with correct reasoning otherwise. −2 (asserted as fact): −2.5 V or −2.0 V, the resistor current ignored in a way that gives the wrong sign of the M1 current, or $K'_N$ used (giving ≈ −1.65 V) as fact.
