# Golden Solution - R295

## Reference answer

$$Z_{in} = \frac{1}{g_m + g_{mb}}\left(1 + \frac{g_m}{C_2s}\right) = \frac{1}{g_m + g_{mb}} + \frac{g_m}{g_m + g_{mb}}\cdot\frac{1}{C_2s}$$
which reduces to $Z_{in} = \dfrac{1}{g_m} + \dfrac{1}{C_2s}$ if the body effect is neglected. $C_1$ does not appear.

Derivation: the test current $I_x$ enters the source of $M_1$ and must flow through the channel to the drain ($I_D = -I_x$ in the drain-to-source direction). At the drain node $I_1$ is ideal, so this current can only continue through $C_1$ into the gate node and then through $C_2$ to ground (the gate draws no current). Hence $V_G = I_x/(C_2s)$. The channel current is $g_m(V_G - V_S) - g_{mb}V_S = -I_x$, giving $V_S = [I_x + g_mV_G]/(g_m + g_{mb}) = \dfrac{I_x}{g_m + g_{mb}}\left(1 + \dfrac{g_m}{C_2s}\right)$.

## Grading notes

+2: the body-effect form above, or $Z_{in} = 1/g_m + 1/(C_2s)$ with the body effect explicitly neglected; plus the argument that all the test current flows through $C_1$ and $C_2$ (ideal $I_1$) so that $C_1$ drops out. +1: $1/g_m + 1/(C_2s)$ with the body effect silently ignored, or the correct result with a sketchy justification. 0: correct method with a slip (e.g., $1/g_m + 1/(C_1s)$ from mixing up the capacitors through a slip). -2 (asserted as fact): $C_1$ and $C_2$ combined in series or in parallel and that combination used as the input capacitance (losing the gate-node control, e.g. $Z_{in} = 1/g_m + (C_1+C_2)/(C_1C_2s)$); replacing the $C_1$–$C_2$ string by its series equivalent from drain to ground while keeping $v_g = v_dC_1/(C_1+C_2)$ is a valid route and earns full credit if it reaches the result. Also -2: a negative resistance claimed (as in a Colpitts structure with the gate driven), or $M_1$ misread (e.g., the input taken at the drain).
