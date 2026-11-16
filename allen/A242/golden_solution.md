# Golden Solution - A242

## Reference answer

Model the op amp as $v_{out} = A_v v_i$ with $v_i = v_+ - v_-$ and a finite differential input impedance $Z_{id}$ (resistance $R_{id}$), and let a feedback network return a fraction $f > 0$ of the output to the inverting input, so that with an external signal $v_S$: $v_i = v_S - f v_{out}$.

- Then $v_i = v_S - fA_v v_i$, i.e. $v_i = \dfrac{v_S}{1 + fA_v}$ and $v_{out} = \dfrac{A_v}{1 + fA_v}v_S \to \dfrac{v_S}{f}$ (finite).
- As $A_v \to \infty$ with negative feedback ($fA_v > 0$), $v_i \to 0$: the differential input voltage vanishes (equivalently $v_i = v_{out}/A_v \to 0$ because $v_{out}$ stays finite).
- The input current is $i_i = v_i/Z_{id} \to 0$ as well, for any finite or infinite $Z_{id}$ (for a CMOS op amp $Z_{id}$ is essentially infinite anyway).
- Zero voltage and zero current at the same port: the input is a null port. (The feedback must be negative; with positive feedback $1 + fA_v$ can vanish and the argument fails.)

## Grading notes

+2: shows that the input voltage goes to zero because of the feedback ($v_i = v_S/(1 + fA_v)$, or $v_i = v_{out}/A_v$ with $v_{out}$ held finite by the feedback) and that the input current therefore also goes to zero ($i_i = v_i/Z_{id}$ or the MOS gate argument). +1: voltage part shown, current part only asserted. 0: only a statement that "the gain is infinite so the input is zero" with no feedback relation. −2 (asserted as fact): $v_{out} \to \infty$ while $v_i$ stays finite, the result claimed without feedback or with positive feedback, or $v_i = A_v v_S$.
