# Golden Solution - G157

## Reference answer

$A_v = \dfrac{v_o}{v_i} = -g_{m1}(r_{o2}\parallel r_{o4})\,g_{m6}(r_{o6}\parallel r_{o7}) = -\dfrac{2}{V_{ov1}}\,\dfrac{2}{|V_{ov6}|}\left(\dfrac{V_{A2}|V_{A4}|}{V_{A2}+|V_{A4}|}\right)\left(\dfrac{|V_{A6}|V_{A7}}{|V_{A6}|+V_{A7}}\right)$

- First stage (n-channel pair with p-channel mirror load): $A_{v1} = G_{m1}R_{o1} = g_{m1}(r_{o2}\parallel r_{o4})$. The mirror adds the two drain-current changes, so $G_{m1} = g_{m1}$.
- Second stage: the p-channel common-source $M_6$ with current-source load $M_7$: $A_{v2} = -g_{m6}(r_{o6}\parallel r_{o7})$. The second stage's gate input resistance is infinite, so the stages can be multiplied.
- Sign: raising the gate of $M_1$ raises $I_{D1}$ and the mirrored current in $M_4$ and lowers $I_{D2}$, so the first-stage output rises. That lowers $|V_{GS6}|$ and the output falls. The gate of $M_1$ is the inverting input, as in the original circuit.
- With $g_m = 2|I_D|/|V_{ov}|$, $r_o = |V_A|/|I_D|$, $|I_{D2}| = |I_{D4}|$ and $|I_{D6}| = |I_{D7}|$, the gain is the overdrive/Early-voltage form above (each stage is of order $g_mr_o$, so $|A_v| \sim (g_mr_o)^2/4$).

## Grading notes

+2: the product $g_{m1}(r_{o2}\parallel r_{o4})\cdot g_{m6}(r_{o6}\parallel r_{o7})$ (sign negative with $v_i$ as defined, or magnitude with a stated sign convention) and an equivalent $V_{ov}$/$V_A$ form. +1: correct $g_m r_o$ form but the $V_{ov}/V_A$ form missing or with a factor-of-2 slip, or the sign not addressed. 0: one stage right and the other wrong in form. (Using $g_{m6}r_{o6}$ alone for the second stage, ignoring $r_{o7}$, is only a minor error: +1.) -2 (asserted as fact): first-stage gain $g_{m1}(r_{o2}\parallel r_{o4})/2$ (mirror ignored), gain $1/g_m$-type expressions, or a misread structure (e.g. the second stage treated as a source follower).
