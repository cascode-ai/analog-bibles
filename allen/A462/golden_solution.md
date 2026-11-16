# Golden Solution - A462

## Reference answer

$+INL = +0.75$ LSB, $-INL = -3$ LSB; $+DNL = +0.25$ LSB, $-DNL = -1.75$ LSB; the DAC is not monotonic (the output falls by 0.75 LSB at 0011→0100, 0111→1000 and 1011→1100).

Derivation (code $= 4m + n$, $m = 2b_0 + b_1$, $n = 2b_2 + b_3$, both 0…3; values in LSB $= V_{REF}/16$):
- Actual output $= 0.75(4m) + 1.25n = 3m + 1.25n$; ideal $= 4m + n$.
- Error $= -m + 0.25n$: largest $+0.75$ ($m = 0$, $n = 3$, code 0011), smallest $-3$ ($m = 3$, $n = 0$, code 1100).
- Steps: inside a group 1.25 LSB → DNL = +0.25; at a group transition ($n$: 3 → 0, $m$ → $m+1$) the step is $3 - 3.75 = -0.75$ LSB → DNL = −1.75. A negative step means the DAC is nonmonotonic.

## Grading notes

+2: INL +0.75/−3, DNL +0.25/−1.75 LSB (±0.02) and "nonmonotonic". +1: one value wrong by a slip, rest correct. 0: correct actual-output expression and method but two or more values wrong, or values right with no monotonicity verdict. −2 (asserted as fact): DAC called monotonic, references applied to the wrong subDACs, or LSB size wrong (e.g. INL quoted in units of $V_{REF}/4$).
