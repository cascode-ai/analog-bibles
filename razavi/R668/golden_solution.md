# Golden Solution - R668

## Reference answer

The tail current doubles ($I_{SS}$ × 2) and the aspect ratio rises by 8 (W × 8 at the same L). The power $V_{DD}I_{SS}$ stays the same.
- C × 4 ($kT/C$ noise halved), so $G_m = g_{m1}$ × 4.
- $g_m = 2I_D/(V_{GS}-V_{TH})$ with the overdrive halved: $I_D = g_m(V_{GS}-V_{TH})/2$ changes by 4 × ½ = 2, so $I_{SS}$ × 2.
- $g_m = \mu C_{ox}(W/L)(V_{GS}-V_{TH})$: $W/L = g_m/[\mu C_{ox}(V_{GS}-V_{TH})]$ changes by 4/(½) = 8. Check: $I_D = \tfrac12\mu C_{ox}(W/L)(V_{GS}-V_{TH})^2$ changes by 8 × ¼ = 2. ✓
- Power: $(V_{DD}/2)(2I_{SS})$, unchanged. The 8× wider input devices also bring ≈ 8× larger gate capacitance, which loads the circuit.

## Grading notes

- +2: $I_{SS}$ × 2 and $W/L$ × 8 (W × 8 at fixed L), consistent with the halved overdrive. Noting unchanged power is a plus.
- +1: one of the two factors right and the other off by a slip.
- 0: correct relations but both numbers wrong through slips.
- -2 (asserted as fact): $I_{SS}$ × 4 with $W/L$ × 4 (inconsistent with the halved overdrive); any reduction of $I_{SS}$ or W; or $G_m$ taken as unchanged.
