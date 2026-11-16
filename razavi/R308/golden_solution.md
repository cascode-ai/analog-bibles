# Golden Solution - R308

## Reference answer

$$\frac{V_{out}}{V_{in}}(s) = \frac{g_{m1}}{2C_1s}$$
so the gain is infinite at very low frequencies and zero at very high frequencies (an integrator, with unity gain at $\omega = g_{m1}/(2C_1)$).
- With an ideal tail and λ = 0, the signal currents are $i_1 = -i_2 = g_{m1}V_{in}/2$ ($M_1$ and $M_2$ currents, drain to source).
- $M_3$ and $M_4$ have the same gate–source voltage, so they carry the same current $-g_{m3}V_A$ ($V_A$: mirror node). KCL at A: $-g_{m3}V_A + (V_{out} - V_A)C_1s = i_1$; at the output: $-g_{m3}V_A + (V_A - V_{out})C_1s = i_2$. Adding: $-2g_{m3}V_A = i_1 + i_2 = 0$, so $V_A = 0$ at all frequencies.
- Then $V_{out}C_1s = i_1$: $V_{out} = g_{m1}V_{in}/(2C_1s)$.
- Low frequencies: $C_1$ open, the usual active-mirror stage with gain $g_{m1}(r_{O2}\|r_{O4}) = \infty$ for λ = 0. High frequencies: $C_1$ shorts the output to the mirror node, both PMOS become diode-connected and the two branch currents cancel, so $V_{out} \to 0$.

## Grading notes

+2: infinite gain at low frequencies and zero at high frequencies, with the reasoning (λ = 0 and ideal mirror load; $C_1$ shorting output and mirror node so the signal currents cancel); the integrator form $g_{m1}/(2C_1s)$ is a plus. +1: both limits right with only qualitative reasoning. 0: one limit right (e.g., infinite at dc but a finite high-frequency gain such as $g_{m1}/(2g_{m3})$). -2 (asserted as fact): finite low-frequency gain under λ = 0 (e.g., $g_{m1}/g_{m3}$), high-frequency gain $g_{m1}/g_{m3}$ or 1/2, or $M_3$ read as a current source rather than diode-connected.
