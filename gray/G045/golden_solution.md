# Golden Solution - G045

## Reference answer

Three linear-ramp phases (node capacitances ≈ 20 fF each: junction 16.4 fF + overlap 3.5 fF):

1. $0 < t \lesssim 4.2$ ns: the transistor is off ($V_{GS} = -V_S < V_t$). The drain stays at +1.5 V; the source ramps down at $10\ \mu\mathrm{A}/C_S \approx 0.5$ V/ns until $V_S \approx -0.6$ V (where $V_{GS}$ reaches $V_t$).
2. ≈ 4.2 to ≈ 8.4 ns: the transistor turns on in saturation. The source settles almost immediately to $-(V_t + V_{ov}) \approx -0.69$ V ($V_{ov} = \sqrt{2(10\ \mu)/(194\ \mu\times12.2)} = 0.09$ V) and stays there, while the 10 μA now comes from the drain capacitance through the channel: the drain ramps down at $10\ \mu\mathrm{A}/C_D \approx 0.5$ V/ns from +1.5 V to the edge of saturation, $V_D = V_G - V_t = -0.6$ V.
3. ≈ 8.4 ns onward: triode. The drain approaches the source and the two nodes then fall together (drain a few mV above the source, $V_{DS} \approx 5$ mV at the end) at $10\ \mu\mathrm{A}/(C_S + C_D) \approx 0.25$ V/ns, so the drain reaches −1.5 V at $t \approx 12$ ns, with the source just below it. (If the gate-to-channel capacitance $WLC_{ox} \approx 35$ fF, which must also be charged as $V_{GS}$ grows, is included, the slope is ≈ 0.13 V/ns and the end is at ≈ 15 ns; with junction capacitances only, 0.61 and 0.30 V/ns, end ≈ 10 ns.)

- $C_S = C_D$: area $10\ \mu\mathrm{m}^2\times0.2 = 2$ fF + periphery $12\ \mu\mathrm{m}\times1.2 = 14.4$ fF, plus overlap $10\times0.35 = 3.5$ fF to the grounded gate.

## Grading notes

Grade the shape and levels first, timing second. +2: (i) source ramps linearly while the drain stays at +1.5 V, until $V_S \approx -0.6$ V; (ii) source then held at ≈ −0.6 to −0.7 V while the drain ramps down at about the same rate (equal node capacitances) to ≈ −0.6 V; (iii) both then fall together, more slowly (about half the rate or less), to −1.5 V; with slopes/times consistent with the stated capacitances (end time 9–16 ns). +1: correct three-phase shape with a timing error > 40% or capacitances from a different perimeter convention, or phase 3 drawn at the same slope as phases 1–2. 0: phases 1–2 right but phase 3 wrong or missing. −2 (asserted as fact): drain moving during phase 1, the source continuing to ramp to −1.5 V alone while the drain stays put, the transistor treated as on at $t = 0$, or the source rising.
