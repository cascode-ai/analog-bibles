# Golden Solution - A457

## Reference answer

$C_F = 2C$.

- Ladder during φ2: node 1 is driven to $-V_{REF}$. The last node sees its shunt C plus the terminating C (2C to ground); each earlier node, looking right, sees its shunt C in parallel with 2C in series with 2C, again 2C. Each series 2C into a 2C load halves the voltage: node voltages $-V_{REF}$, $-V_{REF}/2$, $-V_{REF}/4$, $-V_{REF}/8$ (the shunt capacitors' lower plates are at 0 V whether grounded or at the virtual ground).
- Charge into the summing node from the shunt capacitors of the bits that are 1 ends up on $C_F$: $v_{OUT} = -(C/C_F)\sum b_i V_{node,i} = (C/C_F)(b_0 + b_1/2 + b_2/4 + b_3/8)V_{REF}$.
- For $v_{OUT} = (b_0/2 + \cdots + b_3/16)V_{REF}$: $C/C_F = 1/2$ → $C_F = 2C$.

## Grading notes

+2: $C_F = 2C$ with the correct ladder division (halving per node). +1: $C_F = 2C$ with a sketchy ladder argument. 0: right charge-transfer approach with one node voltage wrong. −2 (asserted as fact): $C_F = C$, $16C$, $C/2$ or any value from treating the ladder as a plain binary-weighted array.
