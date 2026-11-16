# Golden Solution - G191

## Reference answer

$R_1 \approx \dfrac{1}{g_m}$ (exactly $1/(g_m - 1/R_S)$), $\quad R_2 = R_S\,\Big\|\,\dfrac{1}{g_{mb}}$, $\quad L \approx \dfrac{R_SC_{gs}}{g_m}$ (exactly $R_SC_{gs}/(g_m - 1/R_S)$).

Derivation: apply $v_x$ at the source with the gate returned to ground through $R_S$. The gate voltage is $v_g = v_x\,sC_{gs}R_S/(1 + sC_{gs}R_S)$, so $v_{gs} = -v_x/(1 + sC_{gs}R_S)$. The current into the source node is $i_x = g_{mb}v_x - (g_m + sC_{gs})v_{gs} = v_x\left[g_{mb} + \dfrac{g_m + sC_{gs}}{1 + sR_SC_{gs}}\right]$. Writing $\dfrac{g_m + sC_{gs}}{1 + sR_SC_{gs}} = \dfrac{1}{R_S} + \dfrac{g_m - 1/R_S}{1 + sR_SC_{gs}}$ gives
$Y_o = \left(g_{mb} + \dfrac{1}{R_S}\right) + \dfrac{1}{\dfrac{1}{g_m - 1/R_S} + s\dfrac{R_SC_{gs}}{g_m - 1/R_S}}$,
i.e. a conductance $1/R_2 = g_{mb} + 1/R_S$ in parallel with a series $R_1$–$L$ branch. Check: $z_o(0) = 1/(g_m + g_{mb})$, $z_o(\infty) = R_S\|(1/g_{mb})$. The $g_{mb}$ generator acts as a resistor $1/g_{mb}$ from the output to ground and only modifies $R_2$.

## Grading notes

+2: $R_1 = 1/g_m$ (or the exact $1/(g_m - 1/R_S)$), $R_2 = R_S\|(1/g_{mb})$, $L = R_SC_{gs}/g_m$ (or exact form). +1: $R_1$ and $L$ right but $R_2 = R_S$ (body effect omitted although $\gamma \ne 0$), or $R_1 = 1/(g_m + g_{mb})$ used with the other two right (a reasonable approximation of the low-frequency value). 0: only one or two of the three elements correct. −2 (asserted as fact): the impedance claimed capacitive (decreasing with frequency) under $R_S \gg 1/g_m$, $L$ proportional to $1/R_S$ or $R_2 = 1/g_m$, or $R_1$ and $R_2$ interchanged.
