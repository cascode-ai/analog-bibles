# Golden Solution - R637

## Reference answer

With a current stimulus $I_{in}$ into the source node (gate at ac ground; $V_1$ = source voltage), the closed-loop gain is
$\dfrac{V_{out}}{I_{in}} = \dfrac{R_PL_Ps(g_m + C_2s)}{R_PL_P[C_1C_2 + C_P(C_1+C_2)]s^3 + L_P(C_1 + C_2 + g_mR_PC_P)s^2 + [g_mL_P + R_P(C_1+C_2)]s + g_mR_P}$,
equivalently the characteristic equation $Y_T(s)[g_m + (C_1+C_2)s] + C_1C_2s^2 = 0$ with $Y_T = 1/(L_Ps) + 1/R_P + C_Ps$.
- Imaginary part zero at $s = j\omega_R$: $\omega_R^2 = \dfrac{g_mL_P + R_P(C_1+C_2)}{R_PL_P[C_1C_2 + C_P(C_1+C_2)]} \approx \dfrac{C_1+C_2}{L_P[C_1C_2 + C_P(C_1+C_2)]} = \dfrac{1}{L_P[C_P + C_1C_2/(C_1+C_2)]}$, using $g_mL_P \ll R_P(C_1+C_2)$ (true for typical, reasonably high-Q tanks). $C_P$ simply adds in parallel with the series combination of $C_1$ and $C_2$.
- Real part zero: $g_mR_P(1 - L_PC_P\omega_R^2) = L_P(C_1+C_2)\omega_R^2$. With the $\omega_R$ above, $1 - L_PC_P\omega_R^2 = C_1C_2/[C_1C_2 + C_P(C_1+C_2)]$, so the start-up condition remains $g_mR_P = (C_1+C_2)^2/(C_1C_2)$ (≥ 4, minimum at $C_1 = C_2$), unchanged by $C_P$.
- Node equations: output (drain) node: $V_{out}Y_T - g_mV_1 + C_2s(V_{out} - V_1) = 0$ (the drain-to-source current of $M_1$ is $g_m(0 - V_1)$); source node: $-g_mV_1 + C_2s(V_{out} - V_1) - C_1sV_1 + I_{in} = 0$. Eliminating $V_1$ gives the expression above.

## Grading notes

+2: a correct characteristic equation (any equivalent form, any valid stimulus) including the $C_P$ terms, the imaginary-part condition leading to the stated $\omega_R$, and the approximation $g_mL_P \ll R_P(C_1+C_2)$ (or an equivalent high-Q argument) identified. Showing that the gain condition is unchanged is a plus, not required. +1: correct derivation that drops the $g_mL_P$ term without stating the approximation, or a minor algebra slip that does not affect the final form. 0: only an unsupported assertion that $C_P$ adds in parallel with $C_1C_2/(C_1+C_2)$, without derivation or physical justification. -2 (asserted as fact): a derivation that ends with a different frequency (e.g., $1/[L_P(C_P + C_1 + C_2)]$ or $C_P$ in series), or a claim that the stated result is false.
