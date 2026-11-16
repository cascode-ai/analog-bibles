# Golden Solution - R279

## Reference answer

- Initial value: $V_{out}(0) = V_{DD} - |V_{GS3}| = V_{DD} - |V_{THP}| - \sqrt{I_{SS}/[\mu_pC_{ox}(W/L)_3]}$ (with equal inputs the circuit is balanced and $V_{out} = V_X$; $C_L$ keeps $V_{out}$ continuous at $t = 0^+$).
- Final value: $V_{out}(\infty) = V_{out}(0) - g_{m1}(r_{O2}\|r_{O4})\Delta V$ (more precisely times $\frac{2g_{m4}r_{O4}+1}{2(g_{m4}r_{O4}+1)}$); the output moves down because the gate of $M_1$ went down.
- Time constant: $\tau = (r_{O2}\|r_{O4})C_L$, the output resistance of the five-transistor OTA times $C_L$; $V_{out}(t) = V_{out}(0) - g_{m1}(r_{O2}\|r_{O4})\Delta V(1 - e^{-t/\tau})$.
- In terms of bias: $g_{m1} = \sqrt{\mu_nC_{ox}(W/L)_1I_{SS}}$, $r_{O2}\|r_{O4} = \dfrac{2}{(\lambda_n+\lambda_p)I_{SS}}$.

## Grading notes

+2: initial value $V_{DD} - |V_{GS3}|$ (= the mirror node voltage at $I_{SS}/2$), final value lower by $g_{m1}(r_{O2}\|r_{O4})\Delta V$, and $\tau = (r_{O2}\|r_{O4})C_L$. Exact small-signal results that keep the $g_o$ terms and reduce to these for $g_m \gg g_o$ are equally correct, e.g. $\tau = C_L(g_{o2}+2g_{m4}+2g_{o4})/[2(g_{o2}+g_{o4})(g_{m4}+g_{o4})]$ and gain $g_{m1}(2g_{m4}+g_{o4})/[2(g_{o2}+g_{o4})(g_{m4}+g_{o4})]$; do not deduct for not writing the approximate form explicitly. +1: all three right in form but the direction of the output change wrong or unstated, or the initial value not expressed. 0: τ right but initial/final values missing or wrong. -2 (asserted as fact): $\tau = C_L/g_m$, $\tau = r_{O4}C_L$ with the claim that $M_2$ contributes nothing, a final change of only $\Delta V$ or of $(g_{m1}/2)(r_{O2}\|r_{O4})\Delta V$, or $V_{out}$ jumping at $t = 0$.
