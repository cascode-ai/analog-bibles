# Golden Solution - R096

## Reference answer

A non-inverting common-gate characteristic with a current-source load: $V_{out}$ low and tracking $V_{in}$ for small $V_{in}$, an abrupt (very high gain) rise around one input level $V_{in}^*$, and $V_{out}$ near $V_{DD}$ above it. Let $I_2 = \tfrac12\beta_2(V_{DD} - V_{b2} - 0.8)^2$ ($M_2$'s saturation current).

- The two devices carry the same current. $M_1$'s saturation current is $\tfrac12\beta_1(V_{b1} - V_S - V_{TH1})^2$ with source voltage $V_S = V_{in} + I_DR_S$ and $V_{TH1} = V_{TH}(V_S)$ (body effect); it decreases as $V_{in}$ rises.
- $V_{in} < V_{in}^*$: $M_1$ could carry more than $I_2$, so the current is $I_2$ ($M_2$ saturated) and $M_1$ is in triode: $V_{out} = V_{in} + I_2R_S + V_{DS1}$, rising with slope slightly above 1 (low, tracking region).
- $V_{in} \approx V_{in}^* = V_{b1} - V_{TH1} - \sqrt{2I_2/\beta_1} - I_2R_S$: both saturated; the gain is the CG gain with a current-source load, very large ($g_{m1}$ times the large output resistance, unbounded for λ = 0); $V_{out}$ jumps from ≈ $V_{b1} - V_{TH1}$ ($M_1$ edge) to ≈ $V_{b2} + 0.8$ V ($M_2$ edge).
- $V_{in} > V_{in}^*$: $M_1$ saturated with current below $I_2$, $M_2$ in triode, $V_{out}$ close to $V_{DD}$ and approaching it as the current falls; $M_1$ cuts off when $V_{in} \ge V_{b1} - V_{TH}(V_{in})$, after which $V_{out} = V_{DD}$.
- If $V_{in}^* < 0$ (large $I_2$) $V_{out}$ is high over the whole range; if $V_{in}^*$ exceeds 3 V it stays in the low region.
- The jump assumes $V_{b1} - V_{TH1} < V_{b2} + 0.8$ V at $V_{in}^*$, so that both devices can be saturated together. If instead $V_{b1} - V_{TH1} > V_{b2} + 0.8$ V, the output passes continuously through a region where both transistors are in triode, with finite slope; either case is acceptable when the condition is stated.

## Grading notes

+2: non-inverting; low output with $M_1$ in triode and $M_2$ saturated for small $V_{in}$; a sharp high-gain transition where $M_1$'s saturation current equals $I_2$ (at $V_{in}^* \approx V_{b1} - V_{TH} - \sqrt{2I_2/\beta_1} - I_2R_S$); output near $V_{DD}$ ($M_2$ triode) above it and exactly $V_{DD}$ after $M_1$ cuts off. +1: shape and transition right without the expression for $V_{in}^*$ or without the region labels. 0: non-inverting trend right but the transition described as gradual (gain ≈ 1 or $R_D/R_S$-like) with no current-source reasoning. -2 (asserted as fact): inverting characteristic, $V_{in}$ treated as a gate input, or $R_S$ read as connected to ground. The question does not say to neglect channel-length modulation: a vertical jump (λ = 0) or a very steep finite-gain segment (λ > 0) are both acceptable.
