# Golden Solution - R097

## Reference answer

A source-follower characteristic: zero up to 0.7 V, a short region where $M_2$ is in triode, then a straight-ish line of slope $1/(1+\eta) < 1$ once $M_2$ is a constant current source. Let $I_2 = \tfrac12\beta_2(V_b - 0.7)^2$.

- $V_{in} \le 0.7$ V: $M_1$ off, $V_{out} = 0$ ($M_2$ in triode with zero current).
- $M_1$ on, $V_{out} < V_b - 0.7$ V: $M_2$ in triode (a resistance ≈ $1/[\beta_2(V_b - 0.7)]$ near 0 V); $V_{out}$ rises with slope $g_{m1}R/[1 + (g_{m1}+g_{mb1})R]$, $R$ being $M_2$'s incremental resistance; the current grows toward $I_2$.
- $V_{out} \ge V_b - 0.7$ V: $M_2$ saturated, current fixed at $I_2$; $V_{out} = V_{in} - V_{TH1}(V_{out}) - \sqrt{2I_2/\beta_1}$, slope $1/(1+\eta_1)$, e.g. ≈ 0.86 around $V_{out} = 1$ V ($\eta = 0.45/(2\sqrt{1.9}) \approx 0.16$).
- $M_1$ stays saturated over the whole range (drain at $V_{DD}$, gate at most $V_{DD}$).
- Transition points: $V_{in} = 0.7$ V; $V_{out} = V_b - 0.7$ V, reached at $V_{in} = V_b + 0.45[\sqrt{V_b + 0.2} - \sqrt{0.9}] + (V_b - 0.7)\sqrt{\beta_2/\beta_1}$ (if this exceeds 3 V, $M_2$ stays in triode over the whole sweep); end point $V_{out} = 3 - V_{TH1}(V_{out}) - \sqrt{2I_2/\beta_1}$ at $V_{in} = 3$ V.

![R097 output curve](/q/R097/solution-plot.svg)

## Grading notes

+2: zero below 0.7 V, an initial region with $M_2$ in triode, then a follower line with slope $1/(1+\eta)$ (< 1, body effect) once $V_{out} > V_b - V_{TH}$, $M_1$ saturated throughout. +1: follower slope right but the $M_2$ triode region omitted, or body effect ignored (slope 1). 0: rough rising curve without regions. -2 (asserted as fact): inverting, slope > 1, $M_1$ claimed to enter triode, or $V_{out} = V_{in} - V_{TH}$ with no current-dependent drop and slope exactly 1 asserted as including body effect.
