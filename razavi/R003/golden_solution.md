# Golden Solution - R003

## Reference answer

For strong-inversion saturation, let $I=|I_D|>0$ and $\beta=\mu C_{ox}(W/L)$. Using $g_m\approx\sqrt{2\beta I}$ and $r_O\approx1/(\lambda I)$ gives
$$
g_mr_O\approx\frac{\sqrt{2\beta I}}{\lambda I}
=\frac1\lambda\sqrt{\frac{2\mu C_{ox}(W/L)}{I}}
=\frac2{\lambda V_{ov}}.
$$
This uses the leading square-law bias current and first-order CLM output conductance. Substituting $\lambda=\lambda_0L_0/L$,
$$
g_mr_O\approx\frac{L}{\lambda_0L_0}\sqrt{\frac{2\mu C_{ox}W}{LI}}
=\frac{\sqrt{2\mu C_{ox}WL/I}}{\lambda_0L_0}.
$$
Each curve decreases as $I^{-1/2}$. At a given current, a longer $L$ gives a higher curve: doubling $L$ multiplies the gain by $\sqrt2$ at fixed $W$, or by 2 at fixed $W/L$.

The plotted example fixes $W=50\ \mu\mathrm m$, $\mu_nC_{ox}=134\ \mu\mathrm{A/V^2}$, and $\lambda_0=0.1\ \mathrm{V^{-1}}$ at $L_0=0.5\ \mu\mathrm m$:

| $L$ (µm) | $\lambda$ (V⁻¹) | Gain at 0.1 mA | At 0.5 mA | At 1 mA |
|---|---|---|---|---|
| 0.5 | 0.100 | 164 | 73.2 | 51.8 |
| 1 | 0.050 | 232 | 104 | 73.2 |
| 2 | 0.025 | 327 | 146 | 104 |

![Intrinsic gain versus drain current for three channel lengths at fixed width](/q/R003/solution-curves.svg)

The strong-inversion model must not be extrapolated to zero current; it does not describe subthreshold operation.

## Grading notes

+2: the complete first-order expression $g_mr_O\approx(1/\lambda)\sqrt{2\mu C_{ox}(W/L)/|I_D|}$ or an equivalent form, together with curves decreasing as $|I_D|^{-1/2}$. Longer $L$ gives higher curves, with the fixed quantity stated: scaling is $\sqrt L$ at fixed $W$, or $L$ at fixed $W/L$. The numerical example uses NMOS $\mu_nC_{ox}$; a numerical example itself is optional. A bare proportionality that omits the coefficient is not the full requested expression. Plotting-code details are not graded if they do not change the displayed curves, trends or values.

+1: expression and trends correct, but length scaling is not quantified or the fixed-$W$ versus fixed-$W/L$ assumption is unclear; also applies to correct trends with only a proportionality instead of the complete expression.

0: correct expression but one nonfundamental aspect of the plotted family is wrong, such as the length scaling under the stated width constraint.

-2 (asserted as fact): gain increasing with current, decreasing with length, or independent of length under either stated geometry constraint.
