# Golden Solution - R220

## Reference answer

$(V_X - V_Y)/(2V_{in1}) = -g_m(R_D\|r_O)$, the same as the half-circuit result.
- Impedance looking into the source of $M_2$ (gate grounded, drain loaded by $R_D$): $R_S = \dfrac{R_D + r_O}{1 + g_mr_O}$.
- $M_1$ as a degenerated CS stage: $\dfrac{v_X}{v_{in}} = -\dfrac{g_mr_OR_D}{R_D + r_O + (1 + g_mr_O)R_S} = -\dfrac{g_mr_OR_D}{2(R_D + r_O)} = -\tfrac12 g_m(R_D\|r_O)$.
- $M_2$ as a CG stage driven by the Thevenin equivalent of $M_1$ at P ($V_T = \dfrac{g_mr_O}{1+g_mr_O}v_{in}$, $R_T = \dfrac{R_D + r_O}{1 + g_mr_O}$): $\dfrac{v_Y}{V_T} = \dfrac{(1 + g_mr_O)R_D}{R_D + r_O + (1+g_mr_O)R_T} = \dfrac{(1 + g_mr_O)R_D}{2(R_D + r_O)}$, so $\dfrac{v_Y}{v_{in}} = +\tfrac12 g_m(R_D\|r_O)$.
- Left input alone: $v_X - v_Y = -g_m(R_D\|r_O)v_{in}$. By symmetry the right input ($-V_{in1}$) gives another $-g_m(R_D\|r_O)V_{in1}$; total $V_X - V_Y = -2g_m(R_D\|r_O)V_{in1}$.

## Grading notes

+2: source impedance $(R_D + r_O)/(1 + g_mr_O)$, the two partial gains $\mp\tfrac12g_m(R_D\|r_O)$ (or equivalent expressions), and the final $-g_m(R_D\|r_O)$. +1: final result right with one intermediate step sketchy or slightly wrong but self-corrected. 0: correct final result obtained with the half-circuit method instead of the requested superposition. -2 (asserted as fact): $r_O$ ignored in the source impedance ($1/g_m$) leading to a final result other than $g_m(R_D\|r_O)$, or a final gain of $g_m(R_D\|r_O)/2$ for the differential output.
