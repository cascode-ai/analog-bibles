# Golden Solution - G170

## Reference answer

Output range: $V_{IC} - V_t + V_{ov} \le V_O \le V_{DD} - 2|V_{ov}|$, i.e. $V_{IC} - 0.8\ \mathrm{V} \le V_O \le V_{DD} - 0.4$ V (swing $V_{DD} - V_{IC} + 0.4$ V). The optimum is the lowest allowed $V_{IC} = -V_{SS} + V_t + 2V_{ov} = -V_{SS} + 1.4$ V, which gives $-V_{SS} + 0.6\ \mathrm{V} \le V_O \le V_{DD} - 0.4$ V: a peak-to-peak swing of $V_{DD} + V_{SS} - 1.0$ V (five overdrives less than the total supply).

Circuit: n-channel $M_1$–$M_2$ with tail $M_5$ to $-V_{SS}$; n-channel cascodes $M_{1A}$, $M_{2A}$ on their drains, gates driven by $M_9$ (diode-connected n-channel from the common-source node, biased by $I_C$ from $V_{DD}$); p-channel high-swing cascode mirror $M_3/M_{3A}$ (input side, on $M_{1A}$) and $M_4/M_{4A}$ (output side) at $V_{DD}$; output at the drains of $M_{2A}$ and $M_{4A}$.

- Top of the swing: the high-swing mirror biases $M_4$ at $V_{SD4} = |V_{ov}|$, so $M_{4A}$ stays active while $V_O \le V_{DD} - 2|V_{ov}| = V_{DD} - 0.4$ V. This is independent of $V_{IC}$.
- Bottom of the swing: common source $V_S = V_{IC} - V_t - V_{ov} = V_{IC} - 1.2$ V. $M_9$ holds $M_2$ at the edge, so the source of $M_{2A}$ is at $V_S + V_{ov} = V_{IC} - 1.0$ V, and $M_{2A}$ needs $V_O \ge V_{IC} - 1.0 + 0.2 = V_{IC} - 0.8$ V. The minimum output tracks the common-mode input.
- $V_{IC}$ is bounded below by the tail source: $V_S + V_{SS} \ge V_{ov}$ gives $V_{IC} \ge -V_{SS} + V_t + 2V_{ov} = -V_{SS} + 1.4$ V. (Its upper bound, set by $M_{1A}$ against the mirror's input-node voltage near $V_{DD}$, lies far above the optimum and does not matter here.)
- At $V_{IC} = -V_{SS} + 1.4$ V the minimum output is $-V_{SS} + 0.6$ V ($M_5$, $M_2$, $M_{2A}$ each at one overdrive), so the swing is $(V_{DD} - 0.4) - (-V_{SS} + 0.6) = V_{DD} + V_{SS} - 1.0$ V. For example ±1.5 V supplies give 2.0 V peak-to-peak.

## Grading notes

+2: correct structure; maximum output $V_{DD} - 2|V_{ov}|$, minimum output $V_{IC} - V_t + V_{ov}$; optimum $V_{IC} = -V_{SS} + V_t + 2V_{ov} = -V_{SS} + 1.4$ V; resulting range $-V_{SS} + 0.6$ V to $V_{DD} - 0.4$ V (swing $V_{DD} + V_{SS} - 1.0$ V). Values within ±0.05 V. +1: all limits and the optimum correct with only an arithmetic slip in the final swing, or the optimum identified correctly but the final swing not evaluated. 0: correct structure, lower limit $V_{IC} - V_t + V_{ov}$ and optimum $V_{IC} = -V_{SS} + 1.4$ V, but one limit miscounted by one overdrive through a modeling error (e.g. upper limit $V_{DD} - |V_{ov}|$, ignoring the drop across the cascode $M_{4A}$), so the swing expression and the final swing are off by 0.2 V; or only the upper limit or only the $V_{IC}$-dependence of the lower limit right. -2 (asserted as fact): maximum output containing a threshold term ($V_{DD} - |V_t| - 2|V_{ov}|$) for the high-swing mirror, optimum $V_{IC}$ at the top of the range, or the swing claimed independent of $V_{IC}$.
