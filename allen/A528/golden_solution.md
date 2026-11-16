# Golden Solution - A528

## Reference answer

$N = 5$ bits (1 LSB = 3 V/32 = 93.75 mV).

- Overdrive needed for a full 5-V swing: 5 V/1000 = 5 mV, plus the opposing offset of 40 mV.
- Worst case: $1000(0.5\,\mathrm{LSB} - 0.040) \ge 5$ → 0.5 LSB ≥ 45 mV → LSB ≥ 90 mV.
- $3\ \mathrm{V}/2^N \ge 90$ mV → $2^N \le 33.3$ → $N = 5$ ($N = 6$ would give 46.9 mV).
- (The offset alone, 40 mV ≤ 0.5 LSB, gives LSB ≥ 80 mV and the same N = 5.)

## Grading notes

+2: N = 5, with the 40-mV offset (plus, optionally, the 5-mV swing requirement) compared against 0.5 LSB, giving LSB ≥ 80–90 mV. +1: N = 5 with a minor slip in the bound or a loosely explained worst case. 0: right method but the offset compared with a full LSB, giving N = 6, with the reasoning shown. −2 (asserted as fact): the offset ignored, or N ≥ 6 claimed without a valid argument, or another wrong N.
