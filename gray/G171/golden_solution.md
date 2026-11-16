# Golden Solution - G171

## Reference answer

$-V_{SS} - 0.8\ \mathrm{V} \le V_{IC} \le V_{DD} - 1.4\ \mathrm{V}$ (symbolically $-V_{SS} + V_{ov} - |V_t| \le V_{IC} \le V_{DD} - |V_t| - 2|V_{ov}|$). The range extends 0.8 V below the negative supply.

- Common source of the p-channel pair: $V_S = V_{IC} + |V_t| + |V_{ov}| = V_{IC} + 1.2$ V.
- Upper limit, $M_5$ active: $V_{DD} - V_S \ge |V_{ov}|$, so $V_{IC} \le V_{DD} - 1.4$ V.
- Lower limit: with $M_{11}$, $M_{12}$ at the edge, the drains of $M_1$, $M_2$ (folding nodes) sit at $-V_{SS} + V_{ov} = -V_{SS} + 0.2$ V, independent of $V_{IC}$. $M_1$ stays active while $V_S - V_{D1} \ge |V_{ov}|$: $V_{IC} + 1.2 - (-V_{SS} + 0.2) \ge 0.2$, so $V_{IC} \ge -V_{SS} - 0.8$ V.
- Folding moves the input pair's drains down to one overdrive above $-V_{SS}$, instead of a diode drop (two-stage) or two diode drops (telescopic) above it. That is why the lower end of the range is far better.

## Grading notes

+2: both limits within ±0.05 V: $V_{DD} - 1.4$ V (from $M_5$) and $-V_{SS} - 0.8$ V (from $M_1$/$M_2$ with drains at $-V_{SS} + 0.2$ V). +1: correct limits but the lower limit stated as "includes $-V_{SS}$" without the 0.8-V value, or one overdrive slip in one limit. 0: only the upper limit right. -2 (asserted as fact): lower limit computed against a diode-connected load (e.g. $-V_{SS} + 0.2$ V or higher), the cascode transistors or mirror claimed to limit the input range, or the upper limit including the cascode mirror drop.
