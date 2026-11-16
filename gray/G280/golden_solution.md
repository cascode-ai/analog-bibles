# Golden Solution - G280

## Reference answer

$T = a_v = 1000$, $v_o/v_i = a_v/(1+a_v) = 0.9990$, $R_{in} = R_i(1+a_v) \approx 1.0$ GΩ, $R_{out} = \dfrac{R_o + \beta_0/g_m}{(\beta_0+1)(1+a_v)}$ ≈ 0.150 Ω for $\beta_0 = 100$.

- $g_m = 0.5\text{ mA}/26\text{ mV} = 19.2$ mS, $r_\pi = \beta_0/g_m$ (5.2 kΩ for $\beta_0 = 100$).
- Feedback: wire, $f = 1$, no loading. Basic amplifier: with no load other than the ideal current source, the emitter follower has gain exactly 1, so $a = a_v = 1000$, independent of $\beta_0$; $T = 1000$.
- $A = 1000/1001 = 0.999$.
- $R_{in} = R_i(1+T) = 1001$ MΩ.
- Basic-amplifier output resistance: $(R_o + r_\pi)/(\beta_0+1) = 15.2\text{k}/101 = 150.5$ Ω (for $\beta_0 = 100$); $R_{out} = 150.5/1001 = 0.150$ Ω.

## Grading notes

Four quantities. +2: $T = 1000$, gain 0.999, $R_{in}$ ≈ 1.0 GΩ, $R_{out}$ expression equivalent to $(R_o + r_\pi)/[(\beta_0+1)(1+a_v)]$ and ≈ 0.15 Ω for β₀ = 100 (assuming a different stated β₀ and evaluating correctly is fine). +1: one quantity off by a slip, or $R_{out}$ given only numerically for an assumed β. 0: two of four right. Assuming a value of β₀ openly (and saying the result depends on it) is not penalized. −2 (asserted as fact): $R_{out} = 1/g_m$ (ignoring $R_o$, $r_\pi$ and the feedback), or $R_{in}$ divided by $(1+T)$.
