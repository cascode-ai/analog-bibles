# Golden Solution - R640

## Reference answer

Frequency: $\omega_{osc}^2 = \dfrac{g_mL_1 + R_P(C_1+C_2)}{R_PL_1C_1C_2} \approx \dfrac{1}{L_1\,C_1C_2/(C_1+C_2)}$. Condition (high Q): $g_mR_P \ge \dfrac{(C_1+C_2)^2}{C_1C_2}$ (≥ 4, minimum at $C_1 = C_2$) — identical to the Colpitts oscillator. Exact (real and imaginary parts solved together): $g_m \ge \dfrac{R_P(C_1+C_2)^2}{R_P^2C_1C_2 - L_1(C_1+C_2)}$, i.e., $g_mR_P \ge \dfrac{(C_1+C_2)^2}{C_1C_2}\cdot\dfrac{Q^2}{Q^2-1}$ with $Q = R_P/(\omega_0L_1)$ and $\omega_0^2 = (C_1+C_2)/(L_1C_1C_2)$; at this threshold $\omega_{osc} = \omega_0Q/\sqrt{Q^2-1}$.

Derivation:
- Inject $I_{in}$ into the drain node D (nodes G and D; source = ground). Let $Y = 1/(L_1s) + 1/R_P$. KCL at G: $Y(V_G - V_D) + C_1sV_G = 0$. At D: $Y(V_D - V_G) + C_2sV_D + g_mV_G = I_{in}$.
- Solving: $\dfrac{V_D}{I_{in}} = \dfrac{R_PL_1C_1s^2 + L_1s + R_P}{R_PC_1C_2L_1s^3 + (C_1+C_2)L_1s^2 + [g_mL_1 + R_P(C_1+C_2)]s + g_mR_P}$.
- At $s = j\omega$: imaginary part → $\omega^2 = [g_mL_1 + R_P(C_1+C_2)]/(R_PL_1C_1C_2) \approx (C_1+C_2)/(L_1C_1C_2)$ (for $g_mL_1 \ll R_P(C_1+C_2)$); real part → $(C_1+C_2)L_1\omega^2 = g_mR_P$, i.e., $g_mR_P = (C_1+C_2)^2/(C_1C_2)$ at the edge with the approximate ω (with the exact ω, the factor $Q^2/(Q^2-1)$ above), larger for growth.
- Reason for the identical result: the circuit is the same three-node network as the Colpitts (inductor between gate and drain, $C_1$ gate–source, $C_2$ drain–source); only the ac-ground node differs, which does not change the natural frequencies. Equivalently, $M_1$ with $C_1$, $C_2$ presents $-g_m/(C_1C_2\omega^2)$ in series with $C_1C_2/(C_1+C_2)$ to the inductor.

## Grading notes

+2: $\omega \approx 1/\sqrt{L_1C_1C_2/(C_1+C_2)}$ and $g_mR_P \ge (C_1+C_2)^2/(C_1C_2)$ derived from a correct characteristic equation or a correct negative-resistance analysis; a series-loss model ($R_S$) with the equivalent condition $g_m/(C_1C_2\omega^2) \ge R_S$, i.e., $g_m \ge R_S(C_1+C_2)/L_1$, also earns +2. The exact threshold $g_mR_P = [(C_1+C_2)^2/(C_1C_2)]\,Q^2/(Q^2-1)$, from solving the real and imaginary parts together, is also +2. Noting the minimum of 4 at $C_1 = C_2$ is a plus. An overall sign slip in an expression that is only set to zero changes nothing and is not penalized. +1: both results right with a minor slip or missing justification. 0: frequency right but the condition missing or wrong through an algebra slip. -2 (asserted as fact): frequency $1/\sqrt{L_1(C_1+C_2)}$, condition $g_mR_P \ge 1$, or the topology misread (e.g., $C_1$ and $C_2$ treated as in parallel).
