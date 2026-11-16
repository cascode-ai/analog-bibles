# Golden Solution - A366

## Reference answer

Interchange the roles of $I_{VBE}$ and $I_{PTAT}$: drive M1 with $I_{PTAT}$ (so M2 sources $K_2'I_{PTAT}$) and connect the sink $K_1'I_{VBE}$ to M2's drain; keep M3–M4. Then use this second circuit together with the original one.

- Above the crossing temperature, $K_2'I_{PTAT} > K_1'I_{VBE}$: M2 can supply more than the sink draws, enters the active (triode) region, its drain rises toward $V_{DD}$, M3 is off and the new current $I_{NL1} = 0$.
- Below the crossing (the low-temperature side), $K_1'I_{VBE} > K_2'I_{PTAT}$: M2 saturates and M3 supplies the difference, $I_{NL1} = K_1'I_{VBE} - K_2'I_{PTAT}$, which grows as the temperature falls; M4 delivers $K_3'I_{NL1}$.
- Correction: add both terms, $K_3I_{NL}$ (high-temperature side, original circuit) and $K_3'I_{NL1}$ (low-temperature side, modified circuit), to the uncorrected reference current $I_{VBE} + K_1I_{PTAT}$, so that the droop of the bandgap characteristic at both ends of the range is compensated. The constants (crossing temperatures and slopes) are chosen to minimize the temperature coefficient.

## Grading notes

+2: swaps $I_{VBE}$ and $I_{PTAT}$ in the circuit (M1 fed by $I_{PTAT}$, sink proportional to $I_{VBE}$), or gives another valid circuit with the same function, explains that the new current is nonzero only below the crossing ($K_1'I_{VBE} - K_2'I_{PTAT}$) and states that it is combined (summed with the same polarity) with the original $I_{NL}$ as the curvature-correction current; naming the bandgap summing node or the uncorrected reference current explicitly is not required. +1: correct circuit change without explaining how the two corrections are combined, or a correct functional description (a current that is zero above and grows below the crossing) with the circuit only partly specified. 0: only says "use the opposite correction" without a circuit. −2 (asserted as fact): a modification whose output is nonzero above the crossing (e.g. only changing $K_3$ or reversing the mirror M3–M4, or a diode-connected n-channel device added at M2's drain alongside the diode-connected M3: for $V_{DD} > V_{TN} + |V_{TP}|$, i.e. any practical supply, the two diodes conduct a shoot-through current from $V_{DD}$ to ground at all temperatures), or the claim that the original $I_{NL}$ already corrects the low-temperature side.
