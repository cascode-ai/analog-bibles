# Golden Solution - A209

## Reference answer

$SR^-$ ≈ −482 V/µs.

For a large negative step $v_{IN}$ → −2.5 V, M1 is driven hard: at $v_{OUT}$ = 0, $V_{SG1} = V_{SD1}$ = 2.5 V (saturated), $I_{D1} = 7.5\ \mathrm{mA/V^2}(2.5-0.7)^2$ = 24.3 mA. The 200-µA source supplies part of this, and the resistor current is zero at 0 V, so the capacitor is discharged by 24.1 mA: $SR^- = -24.1\ \mathrm{mA}/50\ \mathrm{pF}$ = −482 V/µs.

## Grading notes

+2: ≈ −482 V/µs (−479 to −485 V/µs; magnitude accepted with the sign stated as negative-going). A sign written inconsistently in an intermediate line (e.g. $C_L\,dv_{OUT}/dt = +24.1$ mA followed by $SR^- = -24.1\ \mathrm{mA}/50\ \mathrm{pF}$) is a trivial typo and does not lower the score. +1: ≈ 486 V/µs (the 200-µA source current not subtracted). 0: method right with M1's current wrong by a slip, or a units slip that changes the final value. −2 (asserted as fact): −4 V/µs (limited by the current source), or $K'_N$ used for the p-channel device.
