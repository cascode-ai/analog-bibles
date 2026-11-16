# Golden Solution - R554

## Reference answer

The small-signal impedance at $Y$ must exceed that at $X$: $R_2 \parallel \left(R_1 + \dfrac{1}{g_{m2}}\right) > R_3 \parallel \dfrac{1}{g_{m1}}$, preferably by about a factor of two (for a well-behaved transient response).
- A gate-voltage change δ changes both PMOS currents by $g_{mP}\delta$. $X$ moves by $g_{mP}\delta Z_X$, which reaches the inverting input (positive feedback); $Y$ moves by $g_{mP}\delta Z_Y$, which reaches the noninverting input (negative feedback). The net loop gain is $-A_1g_{mP}(Z_Y - Z_X)$.
- With the usual zero-TC design $R_2 = R_3$ (equal collector currents, $g_{m1} = g_{m2} = g_m$), the condition holds for any $R_1 > 0$, and the margin is $Z_Y/Z_X = \dfrac{(1 + g_mR_1)(1 + g_mR_2)}{1 + g_mR_1 + g_mR_2} \approx 1 + g_mR_1 = 1 + \ln n$ for $R_2 \gg R_1 + 1/g_m$.
- Since $g_mR_1 = \ln n$ and zero TC gives $g_mR_2 = (R_2/R_1)\ln n \approx 17.2$, the ratio is ≈ 2.8 for $n = 8$ and only ≈ 1.6 for $n = 2$. So choose $n$ (i.e., $R_1$ relative to $1/g_m$) large enough ($\ln n \gtrsim 1$), keep $R_2 = R_3 \gg R_1 + 1/g_m$, and do not make $R_3$ larger than $R_2$, which would strengthen the positive loop.

## Grading notes

+2: correct condition $R_2 \parallel (R_1 + 1/g_{m2}) > R_3 \parallel (1/g_{m1})$ (or the equivalent comparison of the gains from the PMOS gate to $Y$ and to $X$), with $Y$ correctly identified as the negative-feedback path, and a consequence for the choice of resistors (e.g., with $R_2 = R_3$ the condition holds for any $R_1 > 0$, margin ≈ $1 + g_mR_1$; or an explicit bound on $R_1$). Mentioning a margin of about 2 is a plus, not required. +1: correct inequality with no discussion of how to choose the resistors, or with a minor error in a specialization (e.g., $g_{m2} = ng_{m1}$ inferred from the area ratio; with $R_2 = R_3$ the collector currents are equal and $g_{m1} = g_{m2}$). 0: only a qualitative statement ("the impedance at $Y$ must be larger") without the expressions. -2 (asserted as fact): reversed inequality ($Z_X > Z_Y$), loops misidentified, or the bipolar resistances dropped so that $X$ is treated as a fixed voltage and any resistor choice is claimed to work.
