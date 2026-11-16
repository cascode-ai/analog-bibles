# Golden Solution - A007

## Reference answer

$\dfrac{v_2}{v_1} = \dfrac{g_mR_L}{1 + g_mR_L}$ and $\dfrac{v_1}{i_1} = R_L + \dfrac{1}{g_m}$.

- The input terminal connects only to the dependent source, so the input current is the source current: $i_1 = g_m(v_1 - v_2)$.
- All of it flows into $R_L$: $v_2 = i_1R_L = g_mR_L(v_1 - v_2)$, hence $v_2(1 + g_mR_L) = g_mR_Lv_1$.
- $v_1 = v_2 + i_1/g_m = i_1R_L + i_1/g_m$, hence $v_1/i_1 = R_L + 1/g_m$.
(This is the small-signal model of a follower with a transconductance in series: gain just below 1 for $g_mR_L \gg 1$, input resistance $R_L + 1/g_m$.)

## Grading notes

The two ratios share the credit equally. +2: both correct (any equivalent form, e.g. $v_1/i_1 = (1 + g_mR_L)/g_m$). +1: both correct with a minor flaw that does not change them. 0: one ratio correct and the other wrong or missing (including a critical error confined to one ratio). −2 (asserted as fact): both wrong, e.g. $v_2/v_1 = g_mR_L$ (feedback of $v_2$ ignored) together with an infinite input resistance (input treated as an open circuit), or the source direction misread so that $v_2/v_1 = -g_mR_L/(1 - g_mR_L)$.
