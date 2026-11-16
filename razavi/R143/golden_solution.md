# Golden Solution - R143

## Reference answer

Proof: the gate draws no current, so the small-signal current $i_d$ flowing down through $R_D$ into the drain is exactly the current leaving the source and flowing down through $R_S$ — whatever the transistor model ($g_m$, $g_{mb}$, $r_O$ only change how large $i_d$ is). Then $v_{out1} = -i_dR_D$ (with $V_{DD}$ at ac ground) and $v_{out2} = i_dR_S$, so $v_{out1}/v_{out2} = -R_D/R_S$, independent of λ and γ.
(Check with explicit gains: $v_{out1}/v_{in} = -g_mr_OR_D/[R_D + r_O + R_S + (g_m+g_{mb})R_Sr_O]$ and $v_{out2}/v_{in} = g_mr_OR_S/[\ldots]$ with the same denominator.)

## Grading notes

+2: the KCL argument that the same small-signal current flows through both resistors (zero gate current), valid for any λ, γ, giving $-R_D/R_S$; or explicit gain expressions with a common denominator. +1: correct result with a minor gap (e.g., sign of one voltage argued loosely). 0: proof given only for λ = γ = 0. -2 (asserted as fact): ratio claimed to depend on $g_m$, $g_{mb}$ or $r_O$, or a ratio of −1 asserted because both resistors are labelled $R_D$ in the drawing while ignoring the stated $R_S$.
