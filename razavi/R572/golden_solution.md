# Golden Solution - R572

## Reference answer

Linear-resistor model: $R_{on} = 1/(5.36\ \mathrm{mA/V^2} \times 2.3\ \mathrm{V}) = 81.1$ Ω, $\tau = 81.1$ ps, and $t = \tau\ln(3\ \mathrm{V}/1\ \mathrm{mV}) = 8.01\tau = 0.649$ ns.

Square-law model: 49 ps in saturation plus 684 ps in triode = 0.733 ns.

Comparison: the resistor model underestimates the time by ≈ 84 ps (≈ 11%). The real transistor always conducts less than the resistor. In saturation its current is capped at $\tfrac12\beta(2.3)^2 = 14.2$ mA, whereas the resistor would draw 37 mA at 3 V. In triode its current $\beta[(V_{DD} - V_{TH})V - V^2/2]$ is below $V/R_{on}$. The two coincide only near the end ($V_{out} \ll 2(V_{DD} - V_{TH})$), where both decay with the same 81-ps time constant.

## Grading notes

+2: ≈ 0.65 ns (±5%) for the resistor model and ≈ 0.73 ns (±5%) for the square-law model, with the resistor model faster by ≈ 10%. +1: the resistor-model value right with only a qualitative comparison (correctly saying it is optimistic), or the square-law number off by a slip. 0: only the resistor-model value with no or a wrong comparison. -2 (asserted as fact): the resistor model said to give a longer time, or τ or the logarithm factor wrong by a formula error (e.g., $t = \tau$ or $t = \tau\ln 3$).
