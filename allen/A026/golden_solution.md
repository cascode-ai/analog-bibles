# Golden Solution - A026

## Reference answer

$i_D = \dfrac{\mu_nC_{ox}W}{L}\left[(v_{GS} - V_{T0})v_{DS} - (1+\alpha)\dfrac{v_{DS}^2}{2}\right]$.

- $Q_I(y) = C_{ox}[v_{GS} - V_{T0} - (1+\alpha)v(y)]$.
- $\int_0^L i_D\,dy = W\mu_nC_{ox}\int_0^{v_{DS}}[v_{GS} - V_{T0} - (1+\alpha)v]\,dv$ ⇒ $i_DL = W\mu_nC_{ox}\left[(v_{GS} - V_{T0})v_{DS} - (1+\alpha)v_{DS}^2/2\right]$.
- Consequence (optional): the current peaks at $v_{DS(sat)} = (v_{GS} - V_{T0})/(1+\alpha)$, where the channel pinches off, with $i_{D(sat)} = \dfrac{\mu_nC_{ox}W}{2(1+\alpha)L}(v_{GS} - V_{T0})^2$: the body-effect variation along the channel lowers the current by the factor $1+\alpha$.

## Grading notes

+2: the expression above from a correct integration with $V_{T0} + \alpha v$ substituted in $Q_I$. The saturation remarks are not required. +1: correct result with a minor notational slip (e.g. limits not shown). 0: correct setup with an algebra error in the final coefficient (e.g. $(1+\alpha)$ applied to the linear term). −2 (asserted as fact): the α term dropped or given as $(1-\alpha)$, α multiplying $v_{GS}$, or a final expression that does not reduce to the given one for α = 0.
