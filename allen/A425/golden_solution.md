# Golden Solution - A425

## Reference answer

In the worst case all sink errors add at full scale: $\sum_i \varepsilon_i I/2^{i+1} \le I/2^{N+1}$. Giving each of the N sinks an equal share (0.5 LSB/N) of the error budget:

$\varepsilon_i \le \dfrac{2^{i-N}}{N}\times100\%$ for the sink of $b_i$, i.e. the single-sink tolerance divided by N (MSB: $\pm100/(N\cdot2^N)$ %, LSB: $\pm50/N$ %).

An equally valid allocation is one common fractional tolerance ε for every sink: $\varepsilon\,I(1 - 2^{-N}) \le I/2^{N+1}$ gives $\varepsilon \le 1/(2^{N+1} - 2) \approx 2^{-(N+1)}$, about half the MSB's single-sink tolerance, applied to all sinks. Either choice guarantees |INL| ≤ 0.5 LSB.

## Grading notes

Accept any worst-case allocation whose summed error stays within 0.5 LSB.
+2: an allocation with $\sum_i \varepsilon_i/2^{i+1} \le 2^{-(N+1)}$ worked out per sink, e.g. $2^{i-N}/N$ or a uniform $1/(2^{N+1} - 2)$. +1: correct worst-case idea with a slip in the final expression. 0: the single-sink values simply halved (a rule of thumb that does not guarantee 0.5 LSB for N > 2), or the right idea without a result. −2 (asserted as fact): tolerances looser than the single-sink values, or the claim that considering all sinks changes nothing.
