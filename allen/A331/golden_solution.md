# Golden Solution - A331

## Reference answer

| Op amp | $V_o(\max)$ | $V_o(\min)$ |
|---|---|---|
| [Fig. 1] | $V_{DD} - V_{ON}$ | $V_{SS} + V_{ON}$ |
| [Fig. 2] | $V_{DD} - V_{ON}$ | $V_{SS} + V_{ON}$ |
| [Fig. 3] | $V_{DD} - 2V_{ON}$ | $V_{SS} + 2V_{ON}$ |
| [Fig. 4] | $V_{DD} - 2V_{ON}$ | $V_{SS} + 2V_{ON}$ |
| [Fig. 5] | $V_{DD} - 2V_{ON}$ | $V_{SS} + 2V_{ON}$ |

- [Fig. 1], [Fig. 2]: each output has a single transistor to each rail (M6/M7 and M8/M9), so it swings to within one $V_{ON}$ of either supply: the widest range.
- [Fig. 3]: cascode stacks M4–M6 (M5–M7) above and M8–M10 (M9–M11) below each output: two saturation voltages at each end.
- [Fig. 4]: M6–M8 / M7–M9 above, and the cascode mirrors M19–M21 / M11–M13 below: two $V_{ON}$ at each end.
- [Fig. 5]: cascoded outputs M9–M13 / M10–M14 above and M11–M15 / M12–M16 below: two $V_{ON}$ at each end.

## Grading notes

+2: all ten limits as in the table, with the two-stage designs recognized as having the widest swing (one $V_{ON}$ from each rail) and the cascoded ones two $V_{ON}$. +1: one or two limits off by one $V_{ON}$. 0: only the qualitative ordering right. −2 (asserted as fact): cascoded outputs claimed to swing within one $V_{ON}$ of the rails, or limits including thresholds (e.g., $V_{DD} - V_T - V_{ON}$) for the two-stage outputs.
