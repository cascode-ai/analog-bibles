# Golden Solution - A105

## Reference answer

To $V_{DD}$, the source of M5 (and of M1–M4).

- M5's current depends on its source–gate voltage $V_{SG}$. A capacitor from the gate to $V_{DD}$ bypasses (filters) $V_{SG}$: high-frequency noise on the gate line (amplifier noise, mirror noise) is shunted, so less of it modulates the output current, and supply disturbances appear equally on gate and source, leaving $V_{SG}$ and the current unchanged.
- A capacitor to ground would hold the gate fixed with respect to ground, so every fluctuation of $V_{DD}$ would appear across $V_{SG}$ and be converted into output-current noise (poor supply rejection).
- (The capacitor adds a pole to the amplifier loop, which then has to be checked for stability.)

## Grading notes

+2: $V_{DD}$ (the PMOS sources), with the reason that it stabilizes/filters $V_{SG}$ rather than the gate-to-ground voltage, so supply noise is not converted into current noise. +1: $V_{DD}$ with a vague reason. 0: a reasoned discussion that does not commit to a node. −2 (asserted as fact): ground, or the output node, recommended as the best connection.
