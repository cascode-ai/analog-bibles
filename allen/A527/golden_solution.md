# Golden Solution - A527

## Reference answer

$N = 7$ bits (1 LSB = 3 V/128 = 23.4 mV); 8 bits (11.7 mV) would not be enough.

- Overdrive needed for a full 5-V swing: 5 V/1000 = 5 mV.
- Common-mode error referred to the input: $A_{cm}v_{cm}/1000$, at most 4 V/1000 = 4 mV (at $v_{cm}$ = 4 V), and in the worst case it opposes the decision.
- Worst case: $1000(0.5\,\mathrm{LSB}) - 4\ \mathrm{V} \ge 5$ V, i.e. 0.5 LSB ≥ 5 mV + 4 mV = 9 mV, so LSB ≥ 18 mV.
- $3\ \mathrm{V}/2^N \ge 18$ mV → $2^N \le 166.7$ → $N = 7$.

## Grading notes

+2: N = 7 from 0.5 LSB ≥ 5 mV (full swing) + 4 mV (worst-case input-referred CM error at $v_{cm}$ = 4 V), i.e. LSB ≥ 18 mV. +1: N = 7 with a loosely explained bound, or the correct bound (LSB ≥ 18 mV) with a rounding slip in N. 0: only one of the two error mechanisms counted while the method is otherwise right: e.g., N = 8 from the CM error alone (4 mV ≤ 0.5 LSB) or from the swing alone (5 mV ≤ 0.5 LSB), with the reasoning shown; or N = 8 from letting the CM term help one of the decisions, contrary to the stated worst-case sign. −2 (asserted as fact): N = 9 or more (e.g., a mid-supply trip-point argument giving a 1.5-mV error), a claim that the common-mode gain does not limit the resolution, or a wrong LSB (e.g., using 5 V instead of 3 V as the full scale with a different N).
