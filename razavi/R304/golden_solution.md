# Golden Solution - R304

## Reference answer

Very low frequencies: $V_{out}/V_{in} = -C_1/C_2$. Very high frequencies: $V_{out}/V_{in} = +1$.

Full transfer function, with $g_m = g_{m1} + g_{m2}$ (both transistors are driven by the gate node A and share the output):
$$\frac{V_{out}}{V_{in}}(s) = \frac{C_1}{C_2}\cdot\frac{C_2s - g_m}{C_1s + g_m}$$
(pole at $-g_m/C_1$, right-half-plane zero at $+g_m/C_2$).
- KCL at the output: $(V_A - V_{out})C_2s = g_mV_A$; at A: $(V_{in} - V_A)C_1s = (V_A - V_{out})C_2s$.
- Low frequencies: with λ = 0 the inverter $M_1$/$M_2$ has infinite gain, so node A is a virtual ground and the capacitive feedback sets the gain, $-C_1/C_2$.
- High frequencies: the transistor current $g_mV_A$ becomes negligible compared with the capacitor currents; since the output has no other load, no current flows in $C_2$ (and hence none in $C_1$), so $V_{out} = V_A = V_{in}$: gain +1.

## Grading notes

+2: low-frequency gain $-C_1/C_2$ and high-frequency gain $+1$, with correct reasoning (virtual ground at A from the infinite inverter gain; capacitors passing the signal unattenuated when the transistors' $g_m$ is negligible and nothing else loads the output). A full transfer function is a plus. +1: one value right and the other with a sign error (e.g., −1 at high frequency) from a slip. 0: one of the two right. -2 (asserted as fact): low-frequency gain $-(g_{m1}+g_{m2})r_O$ or infinite (feedback capacitor ignored), high-frequency gain 0 or $C_1/(C_1+C_2)$, or $M_2$ read as a load device not driven by A.
