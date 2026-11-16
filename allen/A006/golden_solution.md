# Golden Solution - A006

## Reference answer

$\dfrac{i_{out}}{i_{in}} = -\dfrac{r_mR_1}{R_3(R_1 + R_2 - r_m)}$.

- Rearrangement: slide the source $r_mi$ through the node between $R_2$ and $R_3$ into series with $R_2$ and with $R_3$; that node is then shorted to ground. In each branch the source keeps the far end of the resistor at $-r_mi$.
- Substitution: in the $R_2$ branch the source carries its own controlling current $i$ and adds $-r_mi$ to the drop in the direction of $i$, so it is a resistor $-r_m$: the branch becomes $R_2 - r_m$.
- Chain: current divider at the input, $i = i_{in}\dfrac{R_1}{R_1 + R_2 - r_m}$; output branch, $i_{out} = \dfrac{-r_mi}{R_3}$ ($R_3$ is directly across the ideal source, so it does not load the rest of the circuit). Hence $i_{out}/i_{in} = -r_mR_1/[R_3(R_1 + R_2 - r_m)]$.
(Check by KCL: $v_A = iR_2 - r_mi$, $i_{in} = v_A/R_1 + i$.)

## Grading notes

+2: $-r_mR_1/[R_3(R_1 + R_2 - r_m)]$ or an equivalent form, with the effective $R_2 - r_m$ (from substitution or KCL) and $R_3$ not loading the divider. Using KCL/KVL instead of rearrangement/substitution with the correct result: +1 (the method asked for is missing). +1 also: correct result with a minor slip that does not change it. 0: correct reduction and divider with an algebra or sign slip in the final line. −2 (asserted as fact): $R_2 + r_m$ in the denominator (source polarity misread), $R_3$ included in the current divider, $i_{out}$ taken as positive $r_mi/R_3$ from a misread polarity, or the controlling current taken as a current other than the one in $R_2$.
