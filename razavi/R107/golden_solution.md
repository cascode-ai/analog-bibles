# Golden Solution - R107

## Reference answer

$R_1$ carries no dc current (it only feeds the gates), so both gates sit at $V_X$ and both transistors are diode-connected: $I_X = \tfrac12\beta_n(V_X - 0.7)^2 - \tfrac12\beta_p(2.2 - V_X)^2$ over the range where each conducts.

- $0 \le V_X \le 0.7$ V: $M_1$ off; $M_2$ ($V_{SG} = V_{SD} = 3 - V_X$, saturated) supplies current into the source: $I_X = -\tfrac12\beta_p(2.2 - V_X)^2$, from $-2.42\beta_p$ at 0 V to $-1.125\beta_p$ at 0.7 V.
- $0.7 \le V_X \le 2.2$ V: both on and saturated: $I_X = \tfrac12\beta_n(V_X - 0.7)^2 - \tfrac12\beta_p(2.2 - V_X)^2$, rising; zero at $V_X = (0.7\sqrt{\beta_n} + 2.2\sqrt{\beta_p})/(\sqrt{\beta_n} + \sqrt{\beta_p})$ (1.45 V for $\beta_n = \beta_p$, where the middle segment is a straight line).
- $2.2 \le V_X \le 3$ V: $M_2$ off; $I_X = \tfrac12\beta_n(V_X - 0.7)^2$, from $1.125\beta_n$ to $2.645\beta_n$ at 3 V.
- Transition points: 0.7 V ($M_1$ turns on), 2.2 V ($M_2$ turns off), the zero crossing.

## Grading notes

+2: $R_1$ recognized as carrying no dc current (gates at $V_X$), both devices diode-connected and saturated when on, the three segments with breakpoints at 0.7 V and 2.2 V, negative start $-\tfrac12\beta_p(2.2)^2$ and end $\tfrac12\beta_n(2.3)^2$. +1: correct segments but values or zero crossing missing. 0: one device's current handled correctly, the other wrong. -2 (asserted as fact): a dc current through $R_1$ assumed, devices treated as in triode, or $I_X$ decreasing with $V_X$.
