# Golden Solution - R263

## Reference answer

$V_X$ is constant at $V_{GS}(I_{REF}) = 0.7 + \sqrt{2I_{REF}/\beta}$. $V_Y$ starts at $V_{DD} - R_1I_{REF}$ and rises back toward $V_{DD}$ as $C_1$ charges and $M_1$'s current dies out, quickly at first and then slowly (an algebraic, not exponential, tail).

- At $t = 0^+$ the source of $M_1$ is at 0 V, so $M_1$ copies $I_{REF}$ (assuming it is saturated, i.e., $V_{DD} - R_1I_{REF} > \sqrt{2I_{REF}/\beta}$).
- The drain current charges $C_1$: $V_{S1}$ rises toward $V_X - V_{TH1}(V_{S1})$, the overdrive and current shrink: without body effect $I_{D1}(t) = I_{REF}/(1+t/\tau)^2$ with $\tau = 2C_1/g_m$, $g_m = \sqrt{2\beta I_{REF}}$; the body effect makes the source stop a little lower.
- $V_Y(t) = V_{DD} - R_1I_{D1}(t)$, approaching $V_{DD}$.

## Grading notes

+2: $V_X$ constant ($M_2$ unaffected), $V_Y$ starting at $V_{DD} - R_1I_{REF}$ and rising toward $V_{DD}$ as $M_1$'s source charges toward $V_X - V_{TH}$ (current decaying, slow tail). The exact time law is optional. +1: correct trends without initial value, or the decay called exponential. 0: $V_Y$ right but $V_X$ claimed to change. -2 (asserted as fact): $V_Y$ falling with time, $V_Y$ constant at $V_{DD} - R_1I_{REF}$ (capacitor ignored), or $M_1$'s source ending at $V_X$.
