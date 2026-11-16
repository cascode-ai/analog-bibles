Consider the circuit illustrated in [Fig. 1] ($V_{DD}$ = 5 V, R = 50 kΩ, all three transistors W/L = 1 µm/1 µm; the circled numbers are node numbers).

(a) Write a SPICE netlist that describes this circuit.
(b) Repeat part (a) with M2 being 2 µm/1 µm, where M3 and M2 are ratio matched, 1:2.

Use level-1 model parameters: n-channel VTO = 0.7 V, KP = 110 µA/V², GAMMA = 0.4 V$^{1/2}$, LAMBDA = 0.04 V⁻¹, PHI = 0.7 V; p-channel VTO = −0.7 V, KP = 50 µA/V², GAMMA = 0.57 V$^{1/2}$, LAMBDA = 0.05 V⁻¹, PHI = 0.8 V. The input voltage $v_{IN}$ is not specified: include a dc source for it (e.g. 1 V) and request the dc operating point.
