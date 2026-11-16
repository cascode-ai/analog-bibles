# Golden Solution - G421

## Reference answer

Use PMOS transistors matched in type to $M_1$–$M_2$, with $W = W_1/2 = 38.5\ \mu$m and the same $L$ (1 μm drawn). Each has its gate on one op-amp input and its source and drain shorted together to the drain of the opposite input transistor.

- In cutoff there is no channel, so the capacitance between the gate and the shorted source/drain is the two overlap capacitances: $C_n = C_{gd} + C_{gs} = 2C_{ol}W_n$.
- Setting $C_n = C_{gd1} = C_{ol}W_1$ gives $W_n = W_1/2 = 38.5\ \mu$m. The length does not affect the overlap capacitance; using the same $L$ and type keeps the structures matched.
- Equivalently, tying the dummy's gate and source together to the input shorts its $C_{gs}$ and leaves one overlap $C_{gd} = C_{ol}W$ between the two nodes, so a PMOS with $W = 77\ \mu$m (a replica of $M_1$, $V_{SG} = 0$, off) with its drain on the opposite drain also works.
- Cutoff check for a PMOS with gate at ≈ 0 V and source/drain at ≈ −0.55 V: $V_{SG} \approx -0.55$ V, far below $|V_{tp}| = 0.8$ V, so it is off. (An NMOS with its gate on the input would have $V_{GS} \approx +0.55$ V, only 50 mV below $V_{tn} = 0.6$ V, too close to turning on; an NMOS with its gate on the −0.55-V drain node and source/drain on the input is firmly off, $V_{GS} \approx -0.55$ V, but does not track $M_1$'s PMOS overlap capacitance.)

## Grading notes

+2: a cutoff PMOS (same type as $M_1$–$M_2$) sized from the overlap capacitance, either (a) gate to one input, source and drain shorted to the opposite drain, $W$ ≈ 38.5 μm (two overlaps), or (b) gate and source tied to one input, drain to the opposite drain, $W$ ≈ 77 μm (one $C_{gd}$ overlap, $C_{gs}$ shorted); with a correct cutoff check; any reasonable $L$ (same as $M_1$ preferred). +1: correct W for the chosen connection but the type not justified, or an NMOS placed so that it is firmly off (gate on the −0.55-V drain node, $V_{GS} \approx -0.55$ V). 0: an NMOS with its gate on the input ($V_{GS} \approx +0.55$ V, only 50 mV below $V_{tn}$) presented without noting the small margin, or a W inconsistent with the chosen connection (77 μm with source and drain shorted, 38.5 μm with gate and source tied). −2 (asserted as fact): a device biased in inversion/active region, gate-channel capacitance $C_{ox}WL$ used to size it, or W doubled to 154 μm.
