# Golden Solution - A190

## Reference answer

$\dfrac{v_o}{v_s} = -\dfrac{R_2}{R_1}\left(\dfrac{A_i}{1+A_i}\right) = -\dfrac{R_2/R_1}{1+1/A_i}$.

- Both inputs are at 0 V, so $i_1 = v_s/R_1$, $i_2 = v_o/R_2$ (flowing from $v_o$ to the n input), $i_n = i_1 + i_2$ and $i_p = 0$.
- The unloaded output node gives $i_o = i_2$, so $v_o = R_2i_o$.
- $i_o = A_i(0 - i_n) = -A_i(v_s/R_1 + i_o)$ → $i_o = -\dfrac{A_i}{1+A_i}\dfrac{v_s}{R_1}$ → $v_o = -\dfrac{R_2}{R_1}\dfrac{A_i}{1+A_i}v_s$.
- Comparison: same magnitude and the same dependence on $A_i$ (closed-loop gain $R_2/R_1$ for $A_i \to \infty$, relative error $1/(1+A_i)$, negative feedback, so the −3 dB bandwidth is again $\omega_A(1+A_o)$ for a single-pole $A_i$, independent of $R_2/R_1$), but inverted in sign because here the signal enters the inverting (n) input together with the feedback.

## Grading notes

+2: $v_o/v_s = -(R_2/R_1)A_i/(1+A_i)$ with a correct KCL derivation and the comparison (same magnitude and $A_i$ dependence, opposite sign). +1: magnitude right but the sign dropped (e.g. $(R_2/R_1)/(1+1/A_i)$), or result right with no comparison. 0: following the arrow drawn in the figure instead of the stated convention and obtaining $-(R_2/R_1)A_i/(A_i-1)$ with a correct derivation for that convention. −2 (asserted as fact): a result that does not approach $R_2/R_1$ in magnitude for large $A_i$, or $i_2$ treated as independent of $v_o$.
