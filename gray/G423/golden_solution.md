# Golden Solution - G423

## Reference answer

$A_{dm} \approx -3.89$, $A_{cm} \approx -0.0133$, $A_{dm-cm} \approx 1.11 \times 10^{-3}$, $A_{cm-dm} \approx 5.4 \times 10^{-5}$.

- Feedback network (no input current): $v_{id} = (R_3v_{sd} + R_1v_{od})/(R_1 + R_3) = 0.8v_{sd} + 0.2v_{od}$, $v_{ic} = 0.8v_{sc} + 0.2v_{oc}$.
- Effective gains with the CMFB loop: $T_{cmfb} = -a_{cmc}a_{cms} = 171.8$; $a'_{cm} = a_{cm}/(1 + T_{cmfb}) = -0.01673$; $a'_{dm-cm} = a_{dm-cm}/(1 + T_{cmfb}) = 0.0518$; $a'_{cm-dm} = a_{cm-dm} + a'_{cm}a_{cms}a_{cmc-dm} = 0.15 - 0.1475 = 0.00252$ (the indirect path through the CMFB nearly cancels the direct one).
- Loop gains: $T_{dm} = (-a_{dm})R_1/(R_1 + R_3) = 36.2$, $T_{cm} = (-a'_{cm})(0.2) = 0.00335$.
- $A_{dm} = -(R_3/R_1)\,T_{dm}/(1 + T_{dm}) = -4(36.2/37.2) = -3.89$.
- $A_{cm} = a'_{cm}(0.8)/(1 + T_{cm}) = -0.0133$.
- $A_{dm-cm} = a'_{dm-cm}(0.8)/[(1 + T_{cm})(1 + T_{dm})] = 0.0414/37.3 = 1.11 \times 10^{-3}$.
- $A_{cm-dm} = a'_{cm-dm}(0.8)/[(1 + T_{dm})(1 + T_{cm})] = 0.00202/37.3 = 5.4 \times 10^{-5}$.
- Solving the five linear equations exactly gives the same values to three digits (−3.892, −0.01334, 1.113 × 10⁻³, 5.42 × 10⁻⁵).

## Grading notes

Credit split equally among the four gains (rubric share rule). Tolerances: $A_{dm}$ −3.85 to −3.93; $A_{cm}$ −0.0125 to −0.014; $A_{dm-cm}$ (1.0–1.2) × 10⁻³; $A_{cm-dm}$ (4.8–6.0) × 10⁻⁵. +2: all four within tolerance, with the CMFB loop included (via $v_{cmc} = a_{cms}v_{oc}$). +1: three right. 0: two right. A common error is to omit the indirect path $a'_{cm}a_{cms}a_{cmc-dm}$, giving $A_{cm-dm} \approx 3.2 \times 10^{-3}$. Another is to ignore the CMFB reduction of $a_{cm}$ and $a_{dm-cm}$, giving $A_{cm} \approx -1.47$ or $A_{dm-cm} \approx 0.12$ (≈ 0.19 if the $1 + T_{cm}$ factor is also dropped). Each such error makes that gain wrong; if most gains are wrong this way, −2. −2 (asserted as fact): $A_{dm} = -4$ exactly with all cross gains claimed zero, or the CMFB loop ignored entirely.
