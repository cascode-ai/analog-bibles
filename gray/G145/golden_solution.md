# Golden Solution - G145

## Reference answer

$I_{out} = V_{in}/R$ (for $V_{in} > 0$), independent of the transistor parameters.

- The op amp drives the gate, and the source is fed back to the inverting input, so the loop is a negative-feedback source follower. With an ideal op amp the two inputs are at the same voltage: $V_S = V_- = V_+ = V_{in}$.
- The current in $R$ is therefore $V_{in}/R$. The ideal op amp draws no input current and the MOS gate draws no current, so the whole resistor current is the drain current: $I_{out} = I_D = V_{in}/R$.
- The op amp sets its output to $V_{in} + V_{GS}$, where $V_{GS}$ is whatever gate-source voltage the transistor needs for that current. Neither $V_{GS}$ nor $V_t$ appears in $I_{out}$. The circuit is a voltage-to-current converter (a transconductor with $G = 1/R$).
- This needs $V_{in} > 0$ (an NMOS cannot carry negative drain current; for $V_{in} \le 0$ the device cuts off and $I_{out} = 0$). It also needs the drain voltage high enough to keep the transistor in saturation, and the op amp must be able to produce $V_{in} + V_{GS}$.

## Grading notes

+2: $I_{out} = V_{in}/R$, justified by the virtual short ($V_S = V_{in}$) and the absence of gate/op-amp input current. Stating that the result is independent of $V_t$, $k'$, $W/L$, or noting the $V_{in} > 0$ condition, is a plus but not required. +1: correct result with a vague or partly wrong justification (e.g. no mention that the gate draws no current), or a sign slip in the stated current direction that is clearly only a convention issue. 0: correct idea but the final expression is wrong by a slip (e.g. $V_{in}/2R$). -2 (asserted as fact): $I_{out}$ depending on transistor parameters (e.g. $\tfrac{k'}{2}\tfrac{W}{L}(V_{in}-V_t)^2$), $I_{out} = -V_{in}/R$ as a physical result, or the feedback misread as positive.
