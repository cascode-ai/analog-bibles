# Golden Solution - A137

## Reference answer

$V_{IC}(\max) = V_{DD} - V_{SD5}(\mathrm{sat}) - V_{SG1} = V_{DD} - \sqrt{\dfrac{2I_{DD}}{K'_P(W_5/L_5)}} - |V_{T1}| - \sqrt{\dfrac{I_{DD}}{K'_P(W_1/L_1)}}$

$V_{IC}(\min) = V_{SS} + V_{GS3} - |V_{T1}| = V_{SS} + V_{T3} + \sqrt{\dfrac{I_{DD}}{K'_N(W_3/L_3)}} - |V_{T1}|$

- Upper limit: as the gates rise, the common source node $V_{S1} = V_{IC} + V_{SG1}$ rises until M5 leaves saturation, at $V_{S1} = V_{DD} - V_{SD5}(\mathrm{sat})$. M5 carries $I_{DD}$, so $V_{SD5}(\mathrm{sat}) = \sqrt{2I_{DD}/\beta_5}$. M1 carries $I_{DD}/2$, so $V_{SG1} = |V_{T1}| + \sqrt{I_{DD}/\beta_1}$.
- Lower limit: M1 stays saturated while $V_{SD1} \ge V_{SG1} - |V_{T1}|$, i.e. $V_{D1} \le V_{G1} + |V_{T1}|$. The drain of M1 is held at $V_{SS} + V_{GS3}$ by the diode-connected M3 ($I_{DD}/2$), so $V_{IC} \ge V_{SS} + V_{GS3} - |V_{T1}|$. The M2/M4 path gives the same limit in balance (output at the mirror node voltage).
- The body effect of M1, M2 is neglected (bulks tied to their sources); with bulks at $V_{DD}$, $|V_{T1}|$ depends on $V_{SB}$.

## Grading notes

Credit is split equally between the two limits. +2: both expressions equivalent to the reference, including the factor 2 in $V_{SD5}(\mathrm{sat})$ (M5 carries the full $I_{DD}$), $I_{DD}/2$ in M1 and M3, and $K'_N(W_3/L_3)$ in $V_{GS3}$. +1: one factor-of-2 slip in an overdrive term with the structure right. 0: one limit right and the other wrong. −2 (asserted as fact): the limits swapped (the upper set by the load, the lower by the tail source), $V_{IC}(\min)$ built from the p-channel parameters of M1 instead of $V_{GS3}$, or $V_{SD5}(\mathrm{sat})$ omitted from $V_{IC}(\max)$.
