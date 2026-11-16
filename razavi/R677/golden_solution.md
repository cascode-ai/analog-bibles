# Golden Solution - R677

## Reference answer

$$r_O = \left(\frac{\partial I_D}{\partial V_{DS}}\right)^{-1} = \frac{(1+\kappa V_{DS})^2}{\lambda I_{D0}},\qquad I_{D0} = \tfrac12\mu C_{ox}\frac{W}{L}(V_{GS}-V_{TH})^2 .$$
In terms of the actual current, $r_O = \dfrac{(1+\kappa V_{DS})[1+(\kappa+\lambda)V_{DS}]}{\lambda I_D} \approx \dfrac{(1+\kappa V_{DS})^2}{\lambda I_D}$. $r_O$ grows with $V_{DS}$, roughly as $V_{DS}^2$ once $\kappa V_{DS} \gg 1$.
- Derivation: $\dfrac{d}{dV}\left[\dfrac{V}{1+\kappa V}\right] = \dfrac{1}{(1+\kappa V)^2}$, so $\partial I_D/\partial V_{DS} = \lambda I_{D0}/(1+\kappa V_{DS})^2$. Substituting the modified λ into $1/(\lambda I_D)$ would give only $(1+\kappa V_{DS})/(\lambda I_D)$, because it misses the derivative of λ with respect to $V_{DS}$.

Distortion:
- The current source's I–V characteristic is no longer a straight line: its incremental resistance depends on the instantaneous voltage across it. Suppose a signal current flows through it, for example when it is the load of a CS stage or op amp, where the gain is $g_m(r_{O1}\|r_{O2})$. The voltage swing is then larger on the half-cycle that raises $V_{DS}$ (larger $r_O$) than on the half-cycle that lowers it. The waveform is asymmetric (expansive) and contains harmonics, mainly second order. Equivalently, the gain varies with the output level.
- Quantitatively: inverting the I–V law gives $V_{DS} = x/(\lambda - \kappa x)$ with $x = (I_D - I_{D0})/I_{D0}$, a nonlinear function. Around a bias point $V_{DS0}$, $v = r_Oi + \kappa r_O^2 i^2/(1+\kappa V_{DS0}) + \dots$. For a sinusoidal current that produces a fundamental voltage amplitude $V_p$, $HD_2 \approx \kappa V_p/[2(1+\kappa V_{DS0})]$; κ = 0 would give a linear source.

## Grading notes

- +2: $r_O = (1+\kappa V_{DS})^2/(\lambda I_{D0})$ or an equivalent exact form (the approximation $(1+\kappa V_{DS})^2/(\lambda I_D)$ is accepted), increasing with $V_{DS}$. Distortion explained as a nonlinear I–V (a $V_{DS}$-dependent $r_O$) that produces an asymmetric voltage swing or a level-dependent gain, i.e., harmonics (mainly even order). A quantitative $HD_2$ is a plus.
- +1: $r_O = (1+\kappa V_{DS})/(\lambda I_D)$ (derivative of the modified λ neglected) with a correct distortion explanation; or the exact $r_O$ with only a vague distortion statement.
- 0: only one of the two parts right.
- -2 (asserted as fact): $r_O$ decreasing with $V_{DS}$ for κ > 0, $r_O$ independent of $V_{DS}$, or the claim that the current source introduces no distortion.
