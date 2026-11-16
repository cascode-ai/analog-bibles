# Golden Solution - R393

## Reference answer

$\dfrac{V_{out}}{V_{in}} = \dfrac{A_0}{\left(1 + \dfrac{g_{22}}{Z_{in}}\right)(1 + g_{11}Z_{out}) + A_0g_{21} - A_0G_{12}g_{11}g_{22}}$ (with $I_2$ defined into the amplifier, $I_2 = -g_{11}V_{out}$; the sign of the $G_{12}$ term flips if $I_2$ is defined in the other direction).

The term is negligible when $A_0|G_{12}|g_{11}g_{22} \ll (1 + g_{22}/Z_{in})(1 + g_{11}Z_{out}) + A_0g_{21}$. Since $(1 + g_{22}/Z_{in})(1 + g_{11}Z_{out}) \ge g_{11}g_{22}Z_{out}/Z_{in}$, a sufficient condition independent of the feedback network is $|G_{12}| \ll \dfrac{Z_{out}}{A_0Z_{in}}$, i.e. $A_0G_{12}Z_{in}/Z_{out} \ll 1$: the reverse current $G_{12}I_2$, with $I_2$ at most about $A_0V_e/Z_{out}$, must be small compared with the normal input current $V_e/Z_{in}$. (When the loop gain is large, the network-dependent condition $G_{12} \ll g_{21}/(g_{11}g_{22})$ already suffices; for a resistive divider $R_1$ (top), $R_2$ (bottom) this is $G_{12} \ll 1 + R_2/R_1$.)

Derivation:
- Output: no load, so $I_2 = -g_{11}V_{out}$; $V_{out} = A_0V_e + Z_{out}I_2$ → $V_e = V_{out}(1 + g_{11}Z_{out})/A_0$.
- Input current: $I_{in} = V_e/Z_{in} + G_{12}I_2 = V_e/Z_{in} - G_{12}g_{11}V_{out}$.
- Input loop: $V_{in} = V_e + g_{22}I_{in} + g_{21}V_{out} = V_e(1 + g_{22}/Z_{in}) + V_{out}(g_{21} - G_{12}g_{11}g_{22})$.
- Combining gives the result; for $G_{12} = 0$ it reduces to $A_0/[(1 + g_{22}/Z_{in})(1 + g_{11}Z_{out}) + g_{21}A_0]$.

## Grading notes

+2: closed-loop gain equivalent to the reference (sign of the $G_{12}$ term consistent with the answer's current direction) and a correct, justified sufficient condition such as $G_{12} \ll Z_{out}/(A_0Z_{in})$, or the exact comparison $A_0G_{12}g_{11}g_{22} \ll (1+g_{22}/Z_{in})(1+g_{11}Z_{out}) + A_0g_{21}$ correctly reduced to a network-independent bound. +1: correct gain, condition given only in a correct network-dependent form (e.g. $G_{12} \ll g_{21}/(g_{11}g_{22})$) with justification. 0: correct gain but the condition wrong or missing (including the inverted form $G_{12} \ll A_0Z_{in}/Z_{out}$, which is not sufficient: with $Z_{in}$ = 1 MΩ, $Z_{out}$ = 1 kΩ, $A_0$ = 100, $G_{12}$ = 1 and a 10k/10k divider the gain changes by a factor of two); or the right condition with a slip in the gain; or the source treated as $G_{12}V_{out}$ despite the stated definition, worked consistently. -2 (asserted as fact): a gain expression that is wrong in its main structure (e.g. missing the loading factors or the $A_0g_{21}$ term).
