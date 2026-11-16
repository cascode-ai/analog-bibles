# Golden Solution - G169

## Reference answer

$-V_{SS} + 1.6\ \mathrm{V} \le V_{IC} \le V_{DD} - 1.4\ \mathrm{V}$ (symbolically $-V_{SS} + |V_t| + 3|V_{ov}| \le V_{IC} \le V_{DD} - |V_t| - 2|V_{ov}|$). The range is $V_{DD}+V_{SS} - 3.0$ V wide, much narrower than for the uncascoded two-stage op amp.

- Common source of $M_1$–$M_2$: $V_S = V_{IC} + |V_t| + |V_{ov}| = V_{IC} + 1.2$ V.
- Upper limit, $M_5$ active: $V_{DD} - V_S \ge |V_{ov}|$, so $V_{IC} \le V_{DD} - |V_t| - 2|V_{ov}| = V_{DD} - 1.4$ V.
- Lower limit, $M_{1A}$ active. $M_9$ ties the cascode gates to $V_S$, so $M_1$ stays at the edge of saturation for every $V_{IC}$: its drain (the source of $M_{1A}$) is at $V_S - |V_{ov}| = V_{IC} + 1.0$ V. The drain of $M_{1A}$ is the top of the diode-connected cascode mirror: $-V_{SS} + 2(V_t + V_{ov}) = -V_{SS} + 2.4$ V. $M_{1A}$ needs $V_{SD} \ge 0.2$ V: $V_{IC} + 1.0 - (-V_{SS} + 2.4) \ge 0.2$, so $V_{IC} \ge -V_{SS} + 1.6$ V.
- The same limits hold for $M_2$/$M_{2A}$ on the other side. The cascode in series with the input pair costs the lower end of the range: the drain of $M_{1A}$ must sit two diode drops above $-V_{SS}$.

## Grading notes

+2: both limits within ±0.05 V ($V_{DD} - 1.4$ V and $-V_{SS} + 1.6$ V), with the lower limit traced to $M_{1A}$ against the two diode drops ($2V_t + 2V_{ov}$) of the cascode mirror and $M_1$ held at the edge by $M_9$. +1: correct upper limit and a lower limit off by one overdrive through a stated (but different) assumption, e.g. requiring $M_{1A}$ at $V_{SD} = 0$ (giving $-V_{SS} + 1.4$ V). 0: only the upper limit correct. -2 (asserted as fact): the uncascoded circuit's lower limit ($V_t - |V_t| + V_{ov} - V_{SS}$, i.e. about $-V_{SS} + 0.2$ V), the mirror treated as a simple (non-cascode) mirror, or limits claimed independent of the cascodes.
