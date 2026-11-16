# Golden Solution - R568

## Reference answer

$$\frac{V_{out}}{V_{in}}(s) = \frac{R_{out}C_1s}{1 + G_mR_{out} + R_{out}C_1s} \approx \frac{C_1s/G_m}{1 + C_1s/G_m}\quad (G_mR_{out} \gg 1)$$
A first-order high-pass: zero at the origin, pole at $\omega_p = (1 + G_mR_{out})/(R_{out}C_1) \approx G_m/C_1$, high-frequency gain 1, no inversion. Node X (= $V_{out}$) is a good virtual ground only for $\omega \ll G_m/C_1$; the voltage across $C_1$ is $V_{in}(1 + G_mR_{out})/(1 + G_mR_{out} + R_{out}C_1s)$.

Derivation: X and the output are the same node. KCL: $C_1s(V_{in} - V_X) - G_mV_X - V_X/R_{out} = 0$ (the op-amp current is $G_m(0 - V_X)$).

## Grading notes

+2: the exact expression or the approximate form explicitly for $G_mR_{out} \gg 1$, with the pole at $(1 + G_mR_{out})/(R_{out}C_1) \approx G_m/C_1$. +1: correct form with a minor slip such as $G_mR_{out}$ in place of $1 + G_mR_{out}$ without comment. 0: correct KCL equation not solved. -2 (asserted as fact): a low-pass or inverting result, $V_{out} = 0$ (ideal virtual ground) given as the transfer function, or a gain set by $C_1$ and a feedback capacitor that is not in this circuit.
