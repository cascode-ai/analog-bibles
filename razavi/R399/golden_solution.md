# Golden Solution - R399

## Reference answer

$Z_{in} = \dfrac{1}{sC_1} + \dfrac{1}{g_{m1}}$; $\quad Z_{out} = \dfrac{C_1+C_2}{C_2(g_{m1} + sC_1)} = \dfrac{1 + C_1/C_2}{g_{m1}}\ \Big\|\ \dfrac{1}{s\,C_1C_2/(C_1+C_2)}$, i.e. ≈ $(1 + C_1/C_2)/g_{m1}$ at low frequencies.

- Feedback: $C_2$ senses $V_{out}$ and returns a current to the gate G (shunt–shunt); $C_1$ is in series with the input.
- Impedance at G: the output node has no conductance except $C_2$ (ideal $I_1$, λ = 0), so the current entering G through $C_2$ must equal $g_{m1}v_G$: $Z_G = 1/g_{m1}$ exactly (the loop gain at the output is infinite). Hence $Z_{in} = 1/(sC_1) + 1/g_{m1}$.
- $Z_{out}$ ($V_{in}$ = 0): $v_G = v_XC_2/(C_1+C_2)$; $I_X = g_{m1}v_G + sv_X C_1C_2/(C_1+C_2)$. In feedback terms: open-loop output resistance ∞, $\beta = C_2/(C_1+C_2)$, closed-loop resistance $1/(g_{m1}\beta)$, in parallel with the capacitive path $C_1$ in series with $C_2$.

## Grading notes

+2: both impedances equivalent to the reference (the capacitive branch at the output included, or explicitly neglected as a low-frequency approximation). +1: one impedance right, the other with a minor slip (e.g. the parallel capacitive branch dropped without comment). 0: one right, the other wrong. -2 (asserted as fact): $Z_{in} = 1/(sC_1)$ only or a Miller capacitance with no resistive part (feedback misapplied), $Z_{out}$ infinite, or the divider ratio inverted ($(1 + C_2/C_1)/g_{m1}$).
