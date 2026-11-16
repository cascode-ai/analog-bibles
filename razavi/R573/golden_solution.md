# Golden Solution - R573

## Reference answer

$t \approx 1.70$ ns.

- Gate and drain are both at $V_{DD}$, so $M_1$ is saturated: $C_H\,dV_{out}/dt = \tfrac12\beta(V_{DD} - V_{out} - V_{TH})^2$ with $\beta = 5.36$ mA/V².
- Integrating from $V_{out}(0) = 0$: $V_{out} = V_{DD} - V_{TH} - \dfrac{1}{\dfrac{\beta}{2C_H}t + \dfrac{1}{V_{DD} - V_{TH}}}$, which approaches 2.3 V only asymptotically.
- $\beta/(2C_H) = 2.68 \times 10^9\ \mathrm{V^{-1}s^{-1}}$. For $V_{out} = 2.1$ V the remaining overdrive is 0.2 V, so $2.68\times10^9\,t = 1/0.2 - 1/2.3 = 4.565\ \mathrm{V^{-1}}$ and $t = 1.70$ ns.
- (With body effect, γ = 0.45 V^½, the output could not exceed ≈ 1.97 V, so 2.1 V would never be reached; the question excludes this.)

## Grading notes

+2: 1.6–1.8 ns from the saturated-charging solution with γ = 0. 0: correct differential equation and solution form with an arithmetic slip in the final value. -2 (asserted as fact): $M_1$ treated as a fixed triode resistor (an exponential with a time constant ≈ 81 ps, giving roughly 0.1–0.2 ns), the ½ dropped (0.85 ns), or a claim that 2.1 V is unreachable based on body effect, contrary to the stated γ = 0.
