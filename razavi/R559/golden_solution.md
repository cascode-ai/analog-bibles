# Golden Solution - R559

## Reference answer

$V_{out} = V_T\ln\dfrac{I_1(1 + r + \epsilon)}{I_S} + \dfrac{C_2}{C_1}V_T\ln(1 + r + \epsilon) \approx V_{out,nom} + \left(1 + \dfrac{C_2}{C_1}\right)\dfrac{V_T\,\epsilon}{1 + r}$,
with $V_{out,nom} = V_{EB}[I_1(1+r)] + (C_2/C_1)V_T\ln(1 + r)$.
- The error is dominated by the term amplified by $C_2/C_1$. Example: $r = 7$, $C_2/C_1 \approx 8.3$, $\epsilon = 0.01$ gives ≈ 0.3 mV.
- The error is PTAT, so it also adds a TC of $(1 + C_2/C_1)(k/q)\epsilon/(1 + r)$ and shifts the zero-TC temperature.
- Derivation: phase 1 stores $V_{EB}(I_1)$ on $C_2$. In phase 2, $V_X = V_{EB}(I_1 + I_2)$, and charge conservation gives $V_{out} = V_X + (C_2/C_1)[V_X - V_{EB}(I_1)]$ with $V_X - V_{EB}(I_1) = V_T\ln(1 + I_2/I_1)$.

## Grading notes

+2: the exact expression or the first-order error $(1 + C_2/C_1)V_T\epsilon/(1 + r)$; an answer that splits it into $(C_2/C_1)V_T\epsilon/(1+r)$ plus the $V_{EB}$ change $V_T\epsilon/(1+r)$ is equivalent. Noting the TC consequence is a plus. +1: only the $C_2/C_1$-amplified term (the change of $V_{EB}$ omitted), or a relative-error convention ($I_2/I_1 = r(1+\epsilon)$) used consistently instead of the stated one. 0: right charge-conservation setup with an algebra slip in the linearization. -2 (asserted as fact): an error independent of $C_2/C_1$ (e.g., $\epsilon$ or $V_T\epsilon$ added directly), or the claim that the ratio error cancels because the same junction is used in both phases.
