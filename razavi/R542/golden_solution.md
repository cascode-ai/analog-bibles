# Golden Solution - R542

## Reference answer

$\Delta V_{out} = V_T\ln\dfrac{\beta(\beta + 2)}{(\beta + 1)^2} \approx -\dfrac{V_T}{(\beta + 1)^2}$: negligible (≈ −0.2 mV for β = 10, −0.7 mV for β = 5). The PTAT current, and hence the term amplified by $1 + R_2/R_1$, is unaffected.

Derivation (all PMOS currents equal $I$, $\alpha = \beta/(\beta + 1)$):
- The base current $I/(\beta + 1)$ of $Q_2$ flows out of its base into the emitter of $Q_1$: $I_{E1} = I_{C1} = I(\beta + 2)/(\beta + 1)$. $Q_2$'s collector current is $\alpha I$. The same happens on the other side: $I_{C3} = I(\beta + 2)/(\beta + 1)$, $I_{C4} = \alpha I$.
- Loop: $|V_{EB1}| + |V_{EB2}| = V_T\ln\dfrac{I(\beta+2)/(\beta+1)}{I_S} + V_T\ln\dfrac{\alpha I}{I_S}$ and $|V_{EB3}| + |V_{EB4}|$ has the same arguments with $nI_S$. Hence $IR_1 = 2V_T\ln n$ exactly: the base-current errors are identical in both halves and cancel.
- $V_{out} = |V_{EB3}| + |V_{EB4}| + I(R_1 + R_2)$ changes only through $|V_{EB3}| + |V_{EB4}|$: $V_T\ln\frac{\beta+2}{\beta+1} + V_T\ln\frac{\beta}{\beta+1}$, which is the result, not amplified.
- If the emitter–base voltages are (less accurately) taken from the emitter currents, the shift is $V_T\ln[(\beta+2)/(\beta+1)] \approx V_T/(\beta+1)$, still unamplified. Base-current cancellation becomes important when the halves are not symmetric (e.g., different β for $Q_2$ and $Q_4$), because then the difference is multiplied by $1 + R_2/R_1$.

## Grading notes

+2: base currents of $Q_2$ and $Q_4$ add $I/(\beta+1)$ to the emitter currents of $Q_1$ and $Q_3$; the effect is the same in both halves, so the PTAT current and the $(1 + R_2/R_1)$-amplified term are unchanged; the residual output shift $V_T\ln[\beta(\beta+2)/(\beta+1)^2] \approx -V_T/\beta^2$ (or an equivalent statement that the error is second order and negligible). +1: cancellation recognized but the residual shift computed from emitter currents (≈ $+V_T/(\beta+1)$), or the residual not quantified. 0: error computed for only one half but explicitly flagged as incomplete. -2 (asserted as fact): an error of order $(1 + R_2/R_1)V_T/\beta$ (only $Q_1$'s extra current considered and amplified), or a large error from treating the base currents as flowing through $R_1$/$R_2$.
