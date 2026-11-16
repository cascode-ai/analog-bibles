# Golden Solution - A217

## Reference answer

$\eta = \dfrac{V_p^2/(2R_L)}{(V_{DD}-V_{SS})I_Q}$; the smallest bias current that allows a symmetrical peak swing $V_p$ is $I_Q = V_p/R_L$ (M2 must sink the whole load current at the negative peak, where M1 turns off), which gives

$\eta = \dfrac{V_p}{2(V_{DD}-V_{SS})} = \dfrac{V_p}{4V_{DD}}$.

The maximum possible efficiency is 25%, reached when the output swings to the rails ($V_p = (V_{DD}-V_{SS})/2 = V_{DD}$), the same as a Class A amplifier.

- Supply power: M1's drain current is $I_Q + i_L$, whose average is $I_Q$, and M2 sinks $I_Q$, so the supplies deliver $(V_{DD}-V_{SS})I_Q$; the load receives $V_p^2/(2R_L)$.
- Practical refinement: if the gate of M1 cannot be driven above $V_{DD}$, the top of the swing is limited to $V_{DD} - V_{GS1} = V_{DD} - V_{T1} - V_{ON1}$ (the bottom limit $V_{SS}+V_{DS2(sat)}$ ≈ $V_{SS}$ is less restrictive), so $\eta_{max} \approx (V_{DD}-V_{GS1})/(4V_{DD})$: about 20% for ±5 V (21.5% from the 0.7-V threshold drop alone, a little less with M1's overdrive). The body effect (neglected here) lowers it further.

## Grading notes

+2: $\eta = V_p^2/[2R_L(V_{DD}-V_{SS})I_Q]$ with $I_Q = V_p/R_L$ → $V_p/[2(V_{DD}-V_{SS})] = V_p/(4V_{DD})$, and the maximum possible efficiency: 25% for an output that can swing to the rails; or, if the answer states that M1's gate cannot exceed $V_{DD}$, the threshold-limited $(V_{DD}-V_{T1}-V_{ON1})/(4V_{DD})$ (≈ 20% for ±5 V; dropping $V_{ON1}$ is acceptable). With the 25% answer, a remark that headroom makes the practical value lower (M1's $V_{GS}$ or $V_{DS(sat)}$, M2's $V_{DS(sat)}$) is welcome but not required, and a roughly right headroom remark is not an error. A consistent analysis that keeps $I_Q$ general, with the maximum symmetrical swing $V_{p,max} = I_QR_L$ giving $\eta = V_{p,max}/(4V_{DD})$ and 25% at $I_QR_L = V_{DD}$, is equivalent. +1: expression right but the maximum given only as a number (e.g. ≈ 20%) without the 25% limit or the threshold-limited expression and its assumption, or $I_Q$ not minimized (η left in terms of $I_Q$) but handled consistently. 0: correct definition with an algebra slip. −2 (asserted as fact): a maximum efficiency of 50% or 78.5%, or supply power computed without the quiescent current.
