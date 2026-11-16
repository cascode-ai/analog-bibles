# Golden Solution - G396

## Reference answer

$V_{OC} = V_{DD} - |V_{GS3}| = 2.5 - (0.6 + 0.2) = 1.7$ V.

- The gates draw no current and the circuit is symmetric, so with no differential signal no dc current flows in the 20-kΩ resistors: $V_{o1} = V_{o2} =$ the gate voltage of $M_3$/$M_4$.
- $M_3$ and $M_4$ each carry $I_{D5}/2 = 100\ \mu$A with $|V_{ov}| = 0.2$ V, so $|V_{GS3}| = |V_{tp}| + |V_{ov}| = 0.8$ V: they behave as diode-connected loads for CM.
- $V_{OC} = 2.5 - 0.8 = 1.7$ V (all devices are active: $M_1$'s drain at 1.7 V is well above its gate at 0 V minus $V_t$).

## Grading notes

+2: 1.7 V with the reasoning that the resistor midpoint (= PMOS gates) sits at the CM output and $|V_{GS3}|$ = 0.8 V. +1: 1.7 V with weak reasoning. 0: right idea with a slip in $|V_{GS}|$ (e.g. 1.9 V from using only $|V_t|$ or only $|V_{ov}|$). −2 (asserted as fact): the claim that $V_{OC}$ is undefined or set by the tail current alone, or a value like 0.8 V or 2.3 V.
