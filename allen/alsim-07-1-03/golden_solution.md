# Golden Solution - alsim-07-1-03

## Reference answer

Hand-analysis expectations (LEVEL 1, parameters as given; no body effect arises because every source sits at its bulk rail):
- Load currents: M7 (240/14) at 100 µA has $V_{SG7}$ ≈ 1.70 V; M3 (144/14) mirrors ≈ 60 µA and M4 (240/14) ≈ 100 µA, both increased by channel-length modulation at large $V_{SD}$ (≈ 70 µA and 116 µA with the outputs at mid-supply).
- Without λ the switching points are $V_A = V_{SS} + 0.7 + \sqrt{2(60\ \mu)/(47\ \mu\cdot61.3)} = V_{SS} + 0.904$ V and $V_B = V_{SS} + 0.7 + \sqrt{2(100\ \mu)/(47\ \mu\cdot48)} = V_{SS} + 0.998$ V, $V_C \approx 0.094$ V.
- With λ (what the simulation includes): M1–M3 output crosses 0 V at $v_{in}' \approx V_{SS} + 0.893$ V with a slope ≈ −150 V/V, swinging from within 1 V of $V_{DD}$ to within 1 V of $V_{SS}$ between ≈ 0.86 and 0.93 V; M2–M4 output crosses 0 V at ≈ $V_{SS} + 0.981$ V with a slope ≈ −100 V/V (transition ≈ 0.94–1.04 V). Midpoint crossover voltage $V_C \approx 0.09$ V.
- Because of the finite inverter gain, M5 actually cuts off (its gate below $V_{SS} + 0.7$ V) at $v_{in}' \approx V_{SS} + 0.934$ V and M6 turns on (gate below $V_{DD} - 0.9$ V) at ≈ $V_{SS} + 0.935$ V, so the true dead band where both output devices are off is only a few millivolts wide.
- Both curves are rail-to-rail (≈ +6 V to ≈ −6 V), M2–M4 lying to the right of M1–M3, as in the idealized sketch.

## Grading notes

A correct simulation shows two inverting transfer curves of the gate voltages of M5 and M6, rail to rail, the M1–M3 curve switching first: midpoints within about ±40 mV of $V_{SS}$ + 0.89 V and $V_{SS}$ + 0.98 V (or the λ-free 0.90 V and 1.00 V), transition widths of roughly 0.05–0.15 V, and a crossover voltage $V_C$ ≈ 0.06–0.12 V (positive). The netlist should use the given LEVEL 1 parameters (KP = 47u/17u, VTO = 0.7/−0.9, GAMMA, PHI = 0.62, LAMBDA = 0.05/0.04) and the drawn sizes. Wrong: curves in the opposite order (negative $V_C$), switching points near 1.5–2 V above $V_{SS}$ (wrong KP or W/L), or curves that do not reach the rails.
