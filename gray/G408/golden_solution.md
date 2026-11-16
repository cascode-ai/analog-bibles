# Golden Solution - G408

## Reference answer

$C_{Ld} = C_{Lc} = 1.1$ pF.

- Seen from an output: 0.5 pF to ground, plus 1.5 pF in series with 1 pF to the (ac-grounded) source, since the op-amp input node has no other capacitance: $1.5 \times 1/(1.5 + 1) = 0.6$ pF.
- Total $0.5 + 0.6 = 1.1$ pF.
- The two halves are not cross-coupled (each feedback capacitor returns to its own side), so the DM and CM half-circuits are identical and both loads are 1.1 pF.

## Grading notes

+2: 1.1 pF for both DM and CM, with the series combination of 1.5 pF and 1 pF. +1: 1.1 pF for one mode and the other not stated but implied equal. 0: 2.0 pF from treating the op-amp input as a virtual ground (a different load definition), with correct arithmetic and the assumption stated. −2 (asserted as fact): DM and CM loads claimed different (e.g. bridging-capacitor reasoning that does not apply here), 3 pF from summing all capacitors, or 0.5 pF ignoring the feedback path.
