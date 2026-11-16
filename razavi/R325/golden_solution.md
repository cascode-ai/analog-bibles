# Golden Solution - R325

## Reference answer

$$\omega_{-3dB} \approx \frac{1}{R_{GS}C_{GS} + R_{GD}C_{GD} + R_{CL}C_L}$$
with (input set to zero; each resistance found with the other capacitors open):
- $R_{CL} = R_{out} = R_D\,\|\,[r_O + (1 + (g_m + g_{mb})r_O)R_S]$.
- $R_{GD} = R_G + R_{out}(1 + G_mR_G)$, where $G_m = \dfrac{g_mr_O}{r_O + [1 + (g_m + g_{mb})r_O]R_S}$ is the transconductance of the degenerated stage.
- $R_{GS} = \dfrac{R_G + R_S'}{1 + g_m'R_S'}$, with $R_S' = R_S\,\Big\|\,\dfrac{r_O + R_D}{1 + g_{mb}r_O}$ and $g_m' = \dfrac{g_mr_O}{r_O + R_D}$.
  Explicitly: $R_{GS} = \dfrac{R_G[r_O + R_D + R_S(1 + g_{mb}r_O)] + R_S(r_O + R_D)}{r_O + R_D + R_S[1 + (g_m + g_{mb})r_O]}$.
Limits: for $r_O \to \infty$, $g_{mb} = 0$ these become $R_{GS} = (R_G + R_S)/(1 + g_mR_S)$, $R_{GD} = R_D + [1 + g_mR_D/(1 + g_mR_S)]R_G$, $R_{CL} = R_D$ (the λ = γ = 0 result).

Derivation sketch (test source $V_X$/$I_X$ across each capacitor; drain current $g_mV_{GS} - g_{mb}V_S + (V_D - V_S)/r_O$):
- $C_L$: resistance at the drain with the gate at ac ground, $R_D$ in parallel with the degenerated drain resistance $r_O + [1 + (g_m+g_{mb})r_O]R_S$.
- $C_{GD}$: inject $I_X$ into the gate and out of the drain. $V_G = I_XR_G$, the drain sees $R_{out}$ carrying $I_X + G_mV_G$, so $V_G - V_D = I_X[R_G + R_{out}(1 + G_mR_G)]$.
- $C_{GS}$: inject $I_X$ into the gate and out of the source; solving the source and drain KCL gives the expression above. The body effect and $r_O$ weaken the source's bootstrapping (smaller effective $g_m'$, smaller $R_S'$).

## Grading notes

+2: ZVTC sum with the three resistances equivalent to the reference, including $r_O$ and $g_{mb}$ (e.g., $R_{CL} = R_D\|[r_O + (1+(g_m+g_{mb})r_O)R_S]$, $R_{GD} = R_G + R_{out}(1 + G_mR_G)$, correct $R_{GS}$), and the correct λ = γ = 0 limits. +1: two of the three resistances fully right and the third right except for one term (e.g., $g_{mb}$ missing in $R_{GS}$). 0: correct method but only the λ = γ = 0 resistances (no $r_O$, $g_{mb}$), or one resistance badly wrong. -2 (asserted as fact): ZVTC applied with capacitors shorted instead of opened, the −3-dB frequency taken as the sum of the individual $1/(RC)$ values, or $R_{CL} = R_D$ claimed exact with $r_O$ present and no comment.
