# Golden Solution - alsim-04-3-07

## Reference answer

Expected: $i_{OUT}$ ≈ 10 µA (within about 1–3%) for [Fig. 1], clearly closer to 10 µA than the result for [Fig. 2] (≈ 8–9.5 µA in LEVEL 3), because M3 and M1 now have matched terminal conditions.

- In [Fig. 1] the extra 4/1 device (gate at $V_T + 2V_{ON}$ ≈ 1.13 V) carries the same 10 µA as M2 and has the same gate voltage, so it holds M3's drain at the same voltage as M1's drain ($V_{DS3} = V_{DS1}$ ≈ 0.17–0.21 V). The loop through M3's gate sets $V_{GS3}$ to whatever gives exactly 10 µA at that $V_{DS}$ (≈ 0.918 V in a LEVEL-1 estimate with body effect, even if both are at the edge of triode), and M1, with identical $V_{GS}$ and $V_{DS}$, copies it: $i_{OUT} = 10$ µA independent of channel-length modulation and of the triode/saturation boundary.
- In [Fig. 2], M3 is diode-connected ($V_{DS3}$ ≈ 0.91 V) while M1 sits at ≈ 0.2 V, so λ, DIBL (ETA) and the near-triode operation of M1 make $i_{OUT}$ differ from 10 µA (LEVEL-1 estimate ≈ 9.7–9.9 µA; LEVEL-3 lower).
- The output resistance and minimum output voltage stay those of the high-swing cascode (≈ $2V_{ON}$ ≈ 0.4 V, ≈ 0.6–0.7 GΩ).

## Grading notes

A correct result reports a simulated $i_{OUT}$ within about ±3% of 10 µA for [Fig. 1] and a noticeably larger error for [Fig. 2], and attributes the improvement to equal drain–source voltages of M3 and M1 enforced by the added device. Reporting that [Fig. 1] is less accurate, or attributing the improvement to a higher output resistance alone, is wrong.
