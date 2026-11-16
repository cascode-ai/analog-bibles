# Golden Solution - R639

## Reference answer

Frequency: $\omega_{osc}^2 = \dfrac{g_mL_1 + R_P(C_1+C_2)}{R_PL_1C_1C_2} \approx \dfrac{1}{L_1\,C_1C_2/(C_1+C_2)}$. Condition: $g_mR_P \ge \dfrac{(C_1+C_2)^2}{C_1C_2}$ (≥ 4, minimum at $C_1 = C_2$) — identical to the Colpitts oscillator.

Derivation:
- Inject $I_{in}$ into the gate node G (nodes G and S; drain = ground). KCL at G: $V_G(1/L_1s + 1/R_P) + C_1s(V_G - V_S) = I_{in}$. At S: $g_m(V_G - V_S) + C_1s(V_G - V_S) = C_2sV_S$.
- Solving: $\dfrac{V_G}{I_{in}} = \dfrac{R_PL_1s[g_m + (C_1+C_2)s]}{R_PC_1C_2L_1s^3 + (C_1+C_2)L_1s^2 + [g_mL_1 + R_P(C_1+C_2)]s + g_mR_P}$.
- At $s = j\omega$: imaginary part → $\omega^2 = [g_mL_1 + R_P(C_1+C_2)]/(R_PL_1C_1C_2) \approx (C_1+C_2)/(L_1C_1C_2)$ (for $g_mL_1 \ll R_P(C_1+C_2)$); real part → $(C_1+C_2)L_1\omega^2 = g_mR_P$, i.e., $g_mR_P = (C_1+C_2)^2/(C_1C_2)$ at the edge, larger for growth.
- Reason for the identical result: the circuit is the same three-node network as the Colpitts (inductor between gate and drain, $C_1$ gate–source, $C_2$ drain–source); only the node chosen as ac ground differs, which does not change the natural frequencies. Equivalently, $M_1$ with $C_1$, $C_2$ presents $-g_m/(C_1C_2\omega^2)$ in series with $C_1C_2/(C_1+C_2)$ to the inductor.

## Grading notes

+2: $\omega \approx 1/\sqrt{L_1C_1C_2/(C_1+C_2)}$ and $g_mR_P \ge (C_1+C_2)^2/(C_1C_2)$ derived from a correct characteristic equation or a correct negative-resistance analysis; a series-loss model ($R_S$) with the equivalent condition $g_m/(C_1C_2\omega^2) \ge R_S$, i.e., $g_m \ge R_S(C_1+C_2)/L_1$, also earns +2. Noting the minimum of 4 at $C_1 = C_2$ is a plus. +1: both results right with a minor slip or missing justification. 0: frequency right but the condition missing or wrong through an algebra slip. -2 (asserted as fact): frequency $1/\sqrt{L_1(C_1+C_2)}$, condition $g_mR_P \ge 1$, or the topology misread (e.g., $C_1$ taken from gate to ground, $C_2$ across gate–drain).
