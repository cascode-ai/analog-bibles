# Golden Solution - R392

## Reference answer

Transimpedance $V_{out}/I_{in} = +R_{D2}$ exactly (the output current is $-I_{in}$); input-referred noise current $\overline{I_n^2} = 4kT/R_{D2}$ (only $R_{D2}$ contributes; a real current source would add its own noise current directly).

- The gate of $M_1$ draws no current, so all of $I_{in}$ flows through $R_F$ into node Y. At Y the ideal current source carries a fixed current, so the small-signal drain–source current of $M_2$ must be $-I_{in}$: the current gain is exactly −1, independent of $g_{m1}$, $g_{m2}$, $R_D$, $R_F$. In feedback terms: current–current feedback with β = 1 and an infinite open-loop current gain (the input node sees an open circuit through $R_F$ and the current source), so the closed-loop gain is $1/\beta$; the finite loop $g_{m1}R_D$ only sets node voltages.
- $V_{out} = V_{DD} - R_{D2}I_{D2}$ → $v_{out} = -R_{D2}i_{d2} = R_{D2}I_{in}$.
- Noise: the same KCL applies to terminal currents including the noise sources of $M_1$, $M_2$, $R_D$ and $R_F$; they change only node voltages, so none of them reaches the drain current of $M_2$. The output noise is $4kTR_{D2}$, and with the input open the input-referred current is $4kTR_{D2}/R_{D2}^2 = 4kT/R_{D2}$.
- (Not asked: $Z_{in} = (R_F + 1/g_{m2})/(1 + g_{m1}R_D)$.)

## Grading notes

+2: transimpedance $R_{D2}$ (positive with the drain-of-$M_2$ output; a stated opposite sign convention is fine) justified by output current = input current, and $\overline{I_n^2} = 4kT/R_{D2}$ with the reason that the other noise sources cannot change the output current. The two results carry equal weight. +1: both right but a weak justification, or the noise result with an extra term that the answer itself shows to be negligible. 0: transimpedance right but the noise wrong (e.g. noise of $M_1$, $R_D$ or $R_F$ referred as if the loop were open), or the reverse. -2 (asserted as fact): a transimpedance such as $R_F$, $-R_F$ or a $g_m$-dependent expression, or $R_S$ kept in the circuit.
