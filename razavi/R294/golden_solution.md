# Golden Solution - R294

## Reference answer

With $R = r_{O1}\|r_{O2}$ and $g_m = g_{m1} + g_{m2}$:
$$Z_{in} = \frac{1}{C_1s} + \frac{1 + RC_2s}{C_2s\,[1 + (g_{m1} + g_{m2})R]} = \frac{1}{C_1s} + \frac{1}{[1 + (g_{m1}+g_{m2})R]\,C_2s} + \frac{R}{1 + (g_{m1}+g_{m2})R}$$
i.e. $C_1$ in series with a Miller-multiplied $C_2$, $[1 + (g_{m1}+g_{m2})(r_{O1}\|r_{O2})]C_2$, and a resistance $(r_{O1}\|r_{O2})/[1 + (g_{m1}+g_{m2})(r_{O1}\|r_{O2})] \approx 1/(g_{m1} + g_{m2})$.

Derivation: node A (gates of $M_1$ and $M_2$) and node D (drains). The test current $I_x$ flows through $C_1$ and $C_2$ into D: $I_x = (V_A - V_D)C_2s$. KCL at D: $I_x = (g_{m1} + g_{m2})V_A + V_D/R$ (both transistors are driven by $V_A$; the inverter's transconductance is $g_{m1} + g_{m2}$). Eliminating $V_D = V_A - I_x/(C_2s)$: $I_x[1 + 1/(RC_2s)] = V_A(g_{m1} + g_{m2} + 1/R)$, so $V_A/I_x = (1 + RC_2s)/\{C_2s[1 + (g_{m1}+g_{m2})R]\}$; add $1/(C_1s)$.

## Grading notes

+2: correct expression (any equivalent form) with transconductance $g_{m1} + g_{m2}$ and $R = r_{O1}\|r_{O2}$, interpreted or at least expressible as $C_1$ in series with $[1 + (g_{m1}+g_{m2})R]C_2$ and a resistance ≈ $1/(g_{m1}+g_{m2})$. +1: correct structure with a minor omission (e.g., only $g_{m1}$ used but noted that $M_2$ also contributes, or the $1/C_1s$ term dropped at the end). 0: $M_2$ treated as a plain current source (only $g_{m1}$ and $r_{O1}\|r_{O2}$) with otherwise correct algebra. -2 (asserted as fact): $M_2$ read as a diode-connected device or as an NMOS, λ ignored so that the resistive term is dropped without comment while claiming exactness, or a result without Miller multiplication of $C_2$.
