# Golden Solution - R566

## Reference answer

$$\frac{V_{out}}{V_{in}}(s) = -\frac{C_1\,(A_v - R_{out}C_2s)}{C_1 + (1+A_v)C_2 + R_{out}C_1C_2s} = -\frac{C_1}{C_2}\cdot\frac{A_v - R_{out}C_2s}{1 + A_v + \dfrac{C_1}{C_2} + R_{out}C_1s}$$
With the given values: $\dfrac{V_{out}}{V_{in}} = -4\,\dfrac{A_v - (0.5\ \mathrm{pF})R_{out}s}{5 + A_v + (2\ \mathrm{pF})R_{out}s}$.

Features: low-frequency gain $-4A_v/(5+A_v)$ (→ −4 for large $A_v$); a right-half-plane zero at $s = A_v/(R_{out}C_2)$ (feedforward through $C_2$ into $R_{out}$); a pole at $s = -(1 + A_v + C_1/C_2)/(R_{out}C_1)$; at very high frequency the gain tends to +1 (the capacitors couple $V_{in}$ straight to the output).

Derivation:
- KCL at X: $C_1s(V_{in} - V_X) = C_2s(V_X - V_{out})$ → $V_X = (C_1V_{in} + C_2V_{out})/(C_1 + C_2)$.
- Output node: the current through $R_{out}$ flows into $C_2$: $(-A_vV_X - V_{out})/R_{out} = C_2s(V_{out} - V_X)$ → $V_X(R_{out}C_2s - A_v) = V_{out}(1 + R_{out}C_2s)$.
- Eliminating $V_X$ gives the result. It equals the resistive-feedback formula with $R_1 \to 1/(C_1s)$, $R_2 \to 1/(C_2s)$. A Norton op-amp model ($G_m$, $R_{out}$) gives the same result with $A_v = G_mR_{out}$.

## Grading notes

+2: an expression algebraically equivalent to the reference (either form, or the Norton-model form with $A_v = G_mR_{out}$), containing the zero at $A_v/(R_{out}C_2)$ and the pole at $(1 + A_v + C_1/C_2)/(R_{out}C_1)$; the numerical form with $C_1/C_2 = 4$ is optional. +1: correct structure with one coefficient wrong through an algebra slip that does not change the zero/pole structure. 0: correct node equations not solved, or only the dc gain $-(C_1/C_2)A_v/(1 + A_v + C_1/C_2)$ given. -2 (asserted as fact): result $-C_1/C_2$ with the claim that $R_{out}$ has no effect, the feedforward term (zero) dropped, a non-inverting low-frequency gain, or $R_F$ reintroduced.
