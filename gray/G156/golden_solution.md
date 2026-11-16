# Golden Solution - G156

## Reference answer

$PSRR^+ = -g_mR$ (magnitude $g_mR$, the same as the amplifier's own gain magnitude when $r_o \gg R$), and $PSRR^- = -\dfrac{g_mr_o}{1+g_mr_o} \approx -1$ (no rejection at all from $V_{ss}$).

- Signal gain: $A_{dm} = v_o/v_i = -g_m(R\parallel r_o)$.
- From $v_{dd}$ ($v_i = v_{ss} = 0$): $v_{gs} = 0$, so $R$ and $r_o$ form a divider: $A^+ = \dfrac{r_o}{R + r_o}$. Then $PSRR^+ = \dfrac{-g_m(R\parallel r_o)}{r_o/(R+r_o)} = -g_mR$.
- From $v_{ss}$ (gate at ground, source moves with $v_{ss}$): $v_{gs} = -v_{ss}$. KCL at the output: $v_o/R + g_m(-v_{ss}) + (v_o - v_{ss})/r_o = 0$, so $A^- = (1 + g_mr_o)\dfrac{R}{R + r_o} \approx g_m(R\parallel r_o)$, as large as the signal gain. Then $PSRR^- = -\dfrac{g_mr_o}{1+g_mr_o} \approx -1$ (0 dB).
- Limits for $r_o \to \infty$: $A^+ = 1$, $PSRR^+ = -g_mR$; $A^- = g_mR$, $|PSRR^-| = 1$. The source supply drives the transistor exactly like the input (a $v_{ss}$ variation is a $v_{gs}$ variation of opposite sign).

## Grading notes

+2: $|PSRR^+| = g_mR$ (or $g_m(R\parallel r_o)(R+r_o)/r_o$ unsimplified) and $|PSRR^-| \approx 1$ (exactly $g_mr_o/(1+g_mr_o)$), with $A^+$ as the $R$–$r_o$ divider and $A^-$ ≈ the signal gain; signs optional. Results for $r_o\to\infty$ ($g_mR$ and 1) are accepted if the assumption is stated. +1: both magnitudes right but one gain derived loosely, or one sign error that is clearly conventional. 0: one of the two PSRRs right and the other wrong through an algebra slip. -2 (asserted as fact): $A^-$ taken as a voltage divider (ignoring that $v_{ss}$ changes $v_{gs}$), giving a large $PSRR^-$; $A^+ = g_mR$; or the PSRR defined as gain from supply over gain from input and reported inverted without saying so.
