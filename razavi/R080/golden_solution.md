# Golden Solution - R080

## Reference answer

As the bulk voltage $V_B$ goes negative, $V_{SB} = -V_B$ rises and $V_{TH} = V_{TH0} + \gamma(\sqrt{2|\phi_F| + V_{SB}} - \sqrt{2|\phi_F|})$ increases, so the overdrive $V_{GS} - V_{TH}$ shrinks:
- $g_m = \beta(V_{GS} - V_{TH})$ decreases — fastest near $V_B = 0$ (since $dV_{TH}/dV_{SB} = \gamma/(2\sqrt{2|\phi_F| + V_{SB}})$ is largest there), more slowly afterward — and reaches zero when $V_{TH}$ reaches $V_{GS}$.
- $r_O = 1/(\lambda I_D) = 2/(\lambda\beta V_{ov}^2)$ increases, tending to infinity at the same point.
- $g_mr_O = 2/(\lambda V_{ov})$ increases, also without bound at that point (square law).
- The device cuts off at a finite bulk voltage, $V_{SB,off} = [(V_{GS} - V_{TH0})/\gamma + \sqrt{2|\phi_F|}]^2 - 2|\phi_F|$; e.g. $V_{GS} = 1.2$ V gives $V_B \approx -3.34$ V. Beyond it the square law gives $g_m = 0$, $I_D = 0$ (in reality a subthreshold current, with $g_m$ falling exponentially and $g_mr_O$ levelling off near $1/(\lambda\zeta V_T)$).

## Grading notes

+2: $g_m$ decreasing, $r_O$ increasing, $g_mr_O$ increasing, explained by the body-effect rise of $V_{TH}$, plus either the cutoff at a finite negative bulk voltage or the square-root (diminishing) rate of change. +1: all three trends right with the body-effect reason but no cutoff/shape detail. 0: two of the three trends right. -2 (asserted as fact): $g_m$ increasing or $r_O$ decreasing, $V_{TH}$ claimed to fall with negative bulk voltage, or $g_mr_O$ claimed constant.
