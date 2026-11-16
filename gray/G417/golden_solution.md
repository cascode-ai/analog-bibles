# Golden Solution - G417

## Reference answer

Each output can swing from −1.45 V to +1.45 V; $V_{OC} = 0$ gives the maximum symmetric swing (peak $V_{od}$ = 2.9 V).

- Upper limit: PMOS $M_6$ (or $M_8$) enters triode at $V_o = V_{DD} - |V_{ov6}| = 1.65 - 0.2 = 1.45$ V.
- Lower limit: NMOS $M_7$ (or $M_9$) enters triode at $V_o = -V_{SS} + V_{ov7} = -1.45$ V.
- The outputs are isolated from the input stage (they connect only to drains of the mirror outputs and current sources), so the input stage does not limit the swing.
- $V_{OC} = (1.45 + (-1.45))/2 = 0$.

## Grading notes

+2: ±1.45 V limits and $V_{OC} = 0$. +1: limits right, $V_{OC}$ missing or a slip. 0: one limit right. −2 (asserted as fact): limits including thresholds (e.g. ±0.85 V) or set by the input pair, or $V_{OC}$ ≠ 0 asserted for these symmetric limits.
