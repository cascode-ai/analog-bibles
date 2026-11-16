# Golden Solution - G320

## Reference answer

With input resistance $1/g_{m11}$ at the source of $M_{11}$:
$\dfrac{v_o}{i_s} = \dfrac{g_mR_1R_2\,(1 + sC/g_{m11})}{(1 + sR_1C_1)\left[(1 + sR_2C_2)(1 + sC/g_{m11}) + sR_2C\right] + g_mR_1R_2\,sC}$,
which has a left-half-plane zero at $s = -g_{m11}/C$ (and a third pole); for $g_{m11} \to \infty$ it reduces to the given expression.

Derivation:
- With $r_{o11} = \infty$ and $\gamma = 0$, the gate of $M_{11}$ is at ac ground and its source presents a resistance $1/g_{m11}$. Let $v_s$ be the source voltage and $i_c$ the current flowing from the output through $C$ into the source; all of $i_c$ leaves the drain into node ①. Then $v_s = i_c/g_{m11}$ and $i_c = sC(v_o - v_s)$, so
$i_c = \dfrac{sC\,v_o}{1 + sC/g_{m11}}$.
- Node ①: $-i_s = v_1/R_1 + sC_1v_1 - i_c$. Output node: $g_mv_1 + v_o/R_2 + sC_2v_o + i_c = 0$.
- Eliminating $v_1$ and multiplying through by $(1 + sC/g_{m11})$ gives the expression above. The factor $(1 + sC/g_{m11})$ appears in the numerator because the feedback current $i_c$ is itself a first-order low-pass function of $v_o$ with time constant $C/g_{m11}$; it vanishes at $s = -g_{m11}/C$.

## Grading notes

+2: a correct derivation (source resistance $1/g_{m11}$, $i_c = sCv_o/(1 + sC/g_{m11})$, node equations, elimination) arriving at a numerator proportional to $(1 + sC/g_{m11})$, i.e. a zero at $-g_{m11}/C$ in the left half-plane, consistent with the zero-impedance limit. Any consistent sign convention for $v_1$ and the source currents is fine as long as the zero-impedance limit reproduces the quoted expression; an answer that notes the convention it uses for this is not making an error. A mis-transcribed intermediate line that the next correct line supersedes is trivial. +1: correct key step ($i_c$ expression) and conclusion with an algebra slip in the denominator. 0: the zero obtained by a heuristic argument (e.g. "the $RC$ branch $1/g_{m11}$–$C$ gives a zero") without a transfer-function derivation. −2 (asserted as fact): a right-half-plane zero, a zero at $-g_m/C$ or $g_{m11}/C_1$, or the claim that the finite input impedance only adds a pole.
