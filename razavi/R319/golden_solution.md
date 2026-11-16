# Golden Solution - R319

## Reference answer

$$R_{in} = \frac{R_1 + r_O}{1 + (g_m + g_{mb})r_O} \approx \frac{1}{g_m + g_{mb}} + \frac{R_1}{(g_m + g_{mb})r_O}$$
Miller route:
- With X driven, the voltage gain from X to Y is $A_v = \dfrac{V_Y}{V_X} = \dfrac{[1 + (g_m + g_{mb})r_O]R_1}{R_1 + r_O}$ (KCL at Y: $V_Y/R_1 + (V_Y - V_X)/r_O = (g_m + g_{mb})V_X$).
- Splitting $r_O$ by Miller's theorem, the part at X is $\dfrac{r_O}{1 - A_v} = \dfrac{R_1 + r_O}{1 - (g_m + g_{mb})R_1}$. It is negative when $(g_m + g_{mb})R_1 > 1$.
- In parallel with the controlled-source resistance $1/(g_m + g_{mb})$ this gives $R_{in} = \dfrac{R_1 + r_O}{1 + (g_m + g_{mb})r_O}$.
- Checks: $R_1 \to \infty$ gives $R_{in} = \infty$ (the current-source case); $R_1 = 0$ gives $r_O\|1/(g_m+g_{mb})$.

## Grading notes

+2: $R_{in} = (R_1 + r_O)/[1 + (g_m + g_{mb})r_O]$ (any equivalent form, with or without the Miller derivation). +1: same result with $g_{mb}$ omitted (body effect neglected), or the correct Miller gain and split with a slip in the final combination. 0: correct approach but the X-to-Y gain wrong (e.g., $(g_m + g_{mb})R_1$ without $r_O$ terms), giving an approximate result. -2 (asserted as fact): $R_{in} = 1/(g_m + g_{mb})$ claimed exact, $R_{in} = \infty$ or $R_1 + r_O$, or Miller's theorem applied with the gain $-A_v$ (sign error) presented as the result.
