# Golden Solution - A285

## Reference answer

$\dfrac{v_{out}}{v_{ground}} = \dfrac{G_IG_{II} + sC_c(g_{mII}+G_I+G_{II})}{g_{mI}g_{mII} + G_IG_{II} + s\left[C_c(g_{mII}-g_{mI}+G_I+G_{II}) + C_LG_I\right] + s^2C_cC_L} \approx \dfrac{1}{A_v(0)}\cdot\dfrac{1+s/|p_1|}{(1+s/GB)(1+s/|p_2|)}$

- Low-frequency gain: $G_IG_{II}/(g_{mI}g_{mII}+G_IG_{II}) \approx G_IG_{II}/(g_{mI}g_{mII}) = 1/A_v(0)$ (in phase).
- Zero: $s \approx -G_IG_{II}/(C_cg_{mII}) = -|p_1|$, the op amp's dominant pole ($= -GB/A_v(0)$).
- Poles: the roots of $s^2C_cC_L + s\,C_c(g_{mII}-g_{mI}) + g_{mI}g_{mII} \approx 0$, i.e. $s \approx -g_{mI}/C_c = -GB$ and $s \approx -g_{mII}/C_L = -|p_2|$ (the closed-loop follower poles, the same as the zeros of PSRR⁺).
- Shape: $1/A_v(0)$ at dc, rising at +20 dB/decade from $|p_1|$, ≈ 1 (0 dB) between $GB$ and $|p_2|$, falling at −20 dB/decade above $|p_2|$ (there $C_L$ ties the output to the signal ground).

Derivation: since the bias battery and both supplies move together with $v_{ground}$, shift every node voltage by $-v_{ground}$. In that frame the supplies and bias are quiet, the noninverting input (M1 gate) and the bottom of $C_L$ are at $-v_{ground}$, and $v'_{out} = v_{out}-v_{ground}$. With $v_{id} = -v_{ground} - v'_{out}$:
first stage: $(G_I + sC_c)V_1 - sC_cv'_{out} + g_{mI}v_{id} = 0$;
output: $G_{II}v'_{out} + sC_L(v'_{out}+v_{ground}) + sC_c(v'_{out}-V_1) + g_{mII}V_1 = 0$.
Solving and adding back $v_{ground}$ gives the expression above. The noisy ground therefore appears at the output only after division by the loop gain at low frequency, but passes almost unattenuated between $GB$ and $|p_2|$.

(A complete transistor-level model also includes the first stage's common-mode gain referred to the supplies, which multiplies the low-frequency value by $(1 - A_{cm})$, e.g. ≈ 0.6 for typical two-stage values; the roots are unchanged.)

## Grading notes

+2: low-frequency gain ≈ $G_IG_{II}/(g_{mI}g_{mII}) = 1/A_v(0)$, one zero at ≈ $G_IG_{II}/(g_{mII}C_c)$ (the dominant pole), and two poles at ≈ $g_{mI}/C_c$ and $g_{mII}/C_L$ (or the exact quadratic); exact or approximate forms equivalent to the reference are fine. Describing the resulting band-pass shape is welcome but not required, since the question does not ask for it. +1: correct structure with a slip in one root or in the dc value. 0: correct poles but a wrong low-frequency gain or zero, or correct dc value only. −2 (asserted as fact): a low-frequency gain dominated by $g_{m7}$ (e.g. $G_I(g_{ds6}-g_{ds7}-g_{m7})/(2g_{mI}g_{mII})$), which treats the M7 gate as held at signal ground although the drawn $V_{BIAS}$ is referenced to the $V_{SS}$ rail; a gain of order 1 at dc; or poles placed at the open-loop op-amp poles ($|p_1|$ and $|p_2|$).
