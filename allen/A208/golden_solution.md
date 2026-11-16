# Golden Solution - A208

## Reference answer

$SR^+$ = +4 V/µs.

A large positive input step turns M1 off, so only the 200-µA source charges the 50-pF capacitor; at $v_{OUT}$ = 0 the resistor takes no current: $SR^+ = 200\ \mu\mathrm{A}/50\ \mathrm{pF}$ = 4 V/µs.

## Grading notes

+2: 4 V/µs with M1 off and the 200 µA charging $C_L$. +1: right idea with a units slip. 0: incomplete. −2 (asserted as fact): a slew rate set by M1's current (hundreds of V/µs) for the positive direction, or 200 µA reduced by a resistor current at $v_{OUT}$ = 0.
