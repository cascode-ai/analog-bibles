# Golden Solution - A213

## Reference answer

$SR^+$ ≈ +352 V/µs.

For a large positive step $v_{IN}$ → +2.5 V, M1 at $v_{OUT}$ = 0 has $V_{GS1} = V_{DS1}$ = 2.5 V: $I_{D1} = 5.5\ \mathrm{mA/V^2}(1.8)^2$ = 17.8 mA. The sink takes 200 µA and the resistor nothing at 0 V, so $C_L$ charges with 17.6 mA: $SR^+$ = 17.6 mA/50 pF = 352 V/µs.

## Grading notes

+2: 350–357 V/µs. +1: 356 V/µs (sink current not subtracted) or a units slip. 0: method right with a current slip. −2 (asserted as fact): +4 V/µs (limited by the sink), or a value from the p-channel parameters.
