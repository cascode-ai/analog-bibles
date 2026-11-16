# Golden Solution - R298

## Reference answer

$Z_{in} = 0$ and $\dfrac{V_{out}}{V_{in}} = -\dfrac{1}{g_{m2}R_S}$.
- $M_1$ (gate at the input node X) drives the output node, where $I_1$ is ideal, $\lambda = 0$ and the gate of $M_2$ draws no current. KCL at the output therefore forces $g_{m1}v_X = 0$: $v_X = 0$ for any input current (the loop X → $M_1$ → output → source follower $M_2$ → X is a negative-feedback loop with infinite loop gain).
- KCL at X ($I_2$ ideal, gate of $M_1$ open): the input current is absorbed by $M_2$: $i_{in} + g_{m2}(v_{out} - v_X) = 0$, so $v_{out} = -i_{in}/g_{m2}$. Since $v_X = 0$, $Z_{in} = v_X/i_{in} = 0$.
- With $i_{in} = V_{in}/R_S$: $V_{out} = -V_{in}/(g_{m2}R_S)$ (a transimpedance of $-1/g_{m2}$).
- (With finite $r_O$: $Z_{in} = r_{O2}/(1 + g_{m2}r_{O2} + g_{m1}g_{m2}r_{O1}r_{O2}) \approx 1/(g_{m1}g_{m2}r_{O1})$.)

## Grading notes

+2: $Z_{in} = 0$ and $V_{out}/V_{in} = -1/(g_{m2}R_S)$ with a correct argument (KCL at the output forces $v_X = 0$; the input current flows into $M_2$). +2 also for correct finite-$r_O$ expressions (e.g. $Z_{in} = 1/[g_{m2}(1+g_{m1}r_{O1})]$) whose λ → 0 limit is taken explicitly, giving $Z_{in} = 0$ and $-1/(g_{m2}R_S)$. +1: both results right with a vague justification, or only finite-$r_O$ expressions without the λ = 0 result. 0: one of the two results right. -2 (asserted as fact): finite $Z_{in}$ such as $1/g_{m2}$ or $1/g_{m1}$, a gain like $-g_{m1}/g_{m2}$ or $+1/(g_{m2}R_S)$, or $M_2$ misread as a PMOS or as a common-source device.
