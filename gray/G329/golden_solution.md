# Golden Solution - G329

## Reference answer

Return ratio $\mathscr{R} = a_v\dfrac{Z_1}{Z_1 + Z_2}$; the closed-loop poles are the roots of $(1 + a_v)Z_1 + Z_2 = 0$, which for any R/C combination are either absent or real and negative, so the circuit is always stable.

Return ratio: set $V_s = 0$ and replace the controlled source by an independent source $a_v v_t$. The output is $a_v v_t$; the divider gives the node voltage $a_v v_t Z_1/(Z_1 + Z_2)$, and $v_x$ is minus the node voltage, so the returned $v_r = -a_v v_t Z_1/(Z_1 + Z_2)$ and $\mathscr{R} = -v_r/v_t = a_vZ_1/(Z_1 + Z_2)$.

Stability: closed-loop poles are the zeros of $1 + \mathscr{R}$, i.e. of $(1 + a_v)Z_1 + Z_2$ (with $Z_1 + Z_2$ finite):
- $Z_1 = R_1$, $Z_2 = R_2$: no $s$ dependence, no poles.
- $Z_1 = R$, $Z_2 = 1/sC$: $(1 + a_v)R + 1/(sC) = 0$ → $s = -1/[(1 + a_v)RC] < 0$.
- $Z_1 = 1/sC$, $Z_2 = R$: $(1 + a_v)/(sC) + R = 0$ → $s = -(1 + a_v)/(RC) < 0$.
- $Z_1 = 1/sC_1$, $Z_2 = 1/sC_2$: $\mathscr{R} = a_vC_2/(C_1 + C_2)$ is constant; no finite poles.
All poles are in the left half-plane because $a_v > 0$ makes $1 + a_v > 0$. Equivalently, $Z_2/Z_1$ is a positive real number or ± a positive imaginary number times a constant, so $1 + Z_2/Z_1$ has positive real part, $\mathscr{R}(j\omega)$ stays in the right half-plane, and its Nyquist plot can never encircle −1.

## Grading notes

+2: $\mathscr{R} = a_vZ_1/(Z_1 + Z_2)$ with the correct sign handling of $v_x$, and a complete stability argument covering all four R/C combinations (or a general argument valid for all of them, e.g. via $(1 + a_v)Z_1 + Z_2 = 0$ or the right-half-plane location of $\mathscr{R}(j\omega)$). +1: correct $\mathscr{R}$ with the stability argument missing one case or slightly hand-waved. 0: correct $\mathscr{R}$ but no valid stability argument, or a valid argument built on a sign-flipped $\mathscr{R}$ that happens to give the right poles. −2 (asserted as fact): $\mathscr{R} = -a_vZ_1/(Z_1 + Z_2)$ leading to a claim of instability, $\mathscr{R} = a_vZ_2/(Z_1 + Z_2)$, or the claim that some R/C combination is unstable.
