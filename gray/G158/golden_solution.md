# Golden Solution - G158

## Reference answer

$-V_{SS} + V_{ov7} \le V_o \le V_{DD} - |V_{ov6}|$, a peak-to-peak range of $V_{DD} + V_{SS} - V_{ov7} - |V_{ov6}|$.

- Only the second-stage transistors are between the output and the supplies. The n-channel load $M_7$ (source at $-V_{SS}$) leaves the active region when its drain-source voltage falls below its overdrive, i.e. when $V_o < -V_{SS} + V_{ov7}$.
- The p-channel driver $M_6$ (source at $V_{DD}$) enters triode when $V_{SD6} < |V_{ov6}|$, i.e. when $V_o > V_{DD} - |V_{ov6}|$.
- So the output can swing to within one overdrive of each supply, as in the original circuit (only the roles of $M_6$ and $M_7$ are exchanged). Smaller overdrives on $M_6$ and $M_7$ widen the swing.

## Grading notes

+2: both limits correct ($-V_{SS} + V_{ov7}$ and $V_{DD} - |V_{ov6}|$), assigned to the right devices. Notation slips that do not enter the result (e.g. a p-channel overdrive defined with the wrong sign of a threshold magnitude but used correctly, or a lower-case symbol for a total node voltage in a side remark) are trivial and do not lower +2. +1: correct limits but devices swapped in the explanation, or the limits written with a threshold term added by a slip that is then dropped. 0: one limit right. -2 (asserted as fact): limits containing thresholds (e.g. $V_{DD} - |V_t| - |V_{ov}|$) as the final answer, limits set by first-stage devices, or the original (unreversed) assignment of $M_6$ to the low limit with an n-channel overdrive used for the top.
