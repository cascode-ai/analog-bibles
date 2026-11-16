# Golden Solution - A228

## Reference answer

$v_{OUT}(\max) = (V_{DD}+V_{BIAS}-V_{T1}) + \dfrac{1}{\beta_1R_L} - \sqrt{\dfrac{1}{(\beta_1R_L)^2} + \dfrac{2(V_{DD}+V_{BIAS}-V_{T1})}{\beta_1R_L}}$

$v_{OUT}(\min) = -(|V_{SS}|+V_{BIAS}-|V_{T2}|) - \dfrac{1}{\beta_2R_L} + \sqrt{\dfrac{1}{(\beta_2R_L)^2} + \dfrac{2(|V_{SS}|+V_{BIAS}-|V_{T2}|)}{\beta_2R_L}}$

with $V_{T1} = V_{T0N} + \gamma_N\left(\sqrt{2|\phi_{FN}| + v_{OUT}(\max) - V_{SS}} - \sqrt{2|\phi_{FN}|}\right)$ and $|V_{T2}| = |V_{T0P}| + \gamma_P\left(\sqrt{2|\phi_{FP}| + V_{DD} - v_{OUT}(\min)} - \sqrt{2|\phi_{FP}|}\right)$ (solve iteratively).

- Maximum ($v_{IN} = V_{DD}$, M2 off): M1 is saturated ($V_{DS1} = V_{DD}-v_{OUT} \ge V_{GS1}-V_{T1}$ because $V_{BIAS} \le V_{T1}$) and all its current flows in $R_L$: $v_{OUT}/R_L = \frac{\beta_1}{2}(V_{DD}+V_{BIAS}-v_{OUT}-V_{T1})^2$. With $u = V_{DD}+V_{BIAS}-V_{T1}-v_{OUT}$ this is $\frac{\beta_1R_L}{2}u^2 + u - (V_{DD}+V_{BIAS}-V_{T1}) = 0$, whose positive root gives the expression above.
- Minimum ($v_{IN} = V_{SS}$, M1 off): $-v_{OUT}/R_L = \frac{\beta_2}{2}(v_{OUT}-V_{SS}+V_{BIAS}-|V_{T2}|)^2$, solved the same way.
- For $R_L \to \infty$: $v_{OUT}(\max) \to V_{DD}+V_{BIAS}-V_{T1}$ and $v_{OUT}(\min) \to V_{SS}-V_{BIAS}+|V_{T2}|$; the body effect makes $V_{T1}$ and $|V_{T2}|$ large at the extremes and severely limits the swing. Example: $V_{DD} = -V_{SS}$ = 2.5 V, $V_{BIAS}$ = 0.7 V, book parameters: $v_{OUT}(\max)$ ≈ 1.93 V ($V_{T1}$ ≈ 1.27 V) and $v_{OUT}(\min)$ ≈ −1.73 V even with no load.
- (If the gates could not go beyond the rails, $V_{DD}+V_{BIAS}$ and $|V_{SS}|+V_{BIAS}$ would be replaced by $V_{DD}$ and $|V_{SS}|$.)

## Grading notes

+2: both expressions equivalent to the reference (closed form or the quadratic stated and solved), with the body-effect dependence of the thresholds noted. +1: correct structure with the body effect ignored, or only the $R_L \to \infty$ limits with the body-effect thresholds, or one sign slip. 0: only one of the two limits derived. −2 (asserted as fact): output reaching the rails, the swing limited by $V_{DS(sat)}$ of a current source, or the conducting device treated as in nonsaturation with the wrong current equation and a result that does not reduce to $V_{DD}+V_{BIAS}-V_{T1}$ for $R_L \to \infty$.
