# Golden Solution - R599

## Reference answer

The largest deviation occurs at $x = x_{max}/2$ and equals $|\Delta y|_{max} = |\alpha_2|\,x_{max}^2/4$. Normalized to the output swing $y(x_{max}) - y(0) = \alpha_1x_{max} + \alpha_2x_{max}^2$, the maximum nonlinearity is $\dfrac{|\alpha_2|\,x_{max}}{4(\alpha_1 + \alpha_2x_{max})} \approx \dfrac{|\alpha_2|\,x_{max}}{4\alpha_1}$ (for $\alpha_2x_{max} \ll \alpha_1$).
- End-point line: $y_1 = (\alpha_1 + \alpha_2x_{max})\,x$.
- $\Delta y = y - y_1 = \alpha_2x^2 - \alpha_2x_{max}x = \alpha_2x(x - x_{max})$; $d\Delta y/dx = 0$ at $x = x_{max}/2$, where $\Delta y = -\alpha_2x_{max}^2/4$.
- The relative nonlinearity grows linearly with $x_{max}$ (a symmetric cubic characteristic gives an $x_{max}^2$ dependence instead).

## Grading notes

+2: maximum deviation $|\alpha_2|x_{max}^2/4$ at $x = x_{max}/2$, normalized to give $|\alpha_2|x_{max}/[4(\alpha_1+\alpha_2x_{max})]$; the approximation $|\alpha_2|x_{max}/(4\alpha_1)$ is fine when labelled as the small-nonlinearity limit. +1: correct deviation and location, normalized result given only as $\alpha_2x_{max}/(4\alpha_1)$ without saying it is approximate, or the sign of $\alpha_2$ handled loosely. 0: correct deviation but normalized to a swing off by a factor (e.g., $2(\alpha_1x_{max}+\alpha_2x_{max}^2)$ copied from a symmetric-range definition), or deviation correct and normalization missing. -2 (asserted as fact): maximum at a wrong point (e.g., $x_{max}/\sqrt3$) or of wrong size (e.g., $\alpha_2x_{max}^2/(3\sqrt3)$ or $\alpha_2x_{max}^2/2$), or the deviation measured from the tangent at the origin and called the end-point nonlinearity.
