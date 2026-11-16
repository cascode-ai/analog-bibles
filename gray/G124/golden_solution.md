# Golden Solution - G124

## Reference answer

$A_v = dv_o/dv_i = a_1 + 2a_2v_i + 3a_3v_i^2 + \dots = \sum_{n\ge1} n\,a_n v_i^{\,n-1}$. The incremental gain depends on the instantaneous input; at the quiescent point ($v_i = 0$) it is $a_1$.

## Grading notes

+2: $A_v = a_1 + 2a_2v_i + 3a_3v_i^2 + \dots$ (the series truncated after the cubic term is fine). +1: correct but with a coefficient slip in one term (e.g. $a_2v_i$ instead of $2a_2v_i$) noted elsewhere correctly. 0: only $A_v = a_1$ with a remark that it is the quiescent value. −2 (asserted as fact): $A_v = v_o/v_i$ (the large-signal ratio $a_1 + a_2v_i + a_3v_i^2$) presented as the incremental gain, or wrong derivatives in several terms.
