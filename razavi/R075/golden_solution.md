# Golden Solution - R075

## Reference answer

Let $V_{ov}=V_{GS}-V_{TH}$. The plotted points have $V_{ov}>0$ and assume $V_{DS}\geq V_{ov}$. The example uses $V_{TH}=0.7$ V. The solid curves start at $V_{GS}=0.8$ V ($V_{ov}=0.1$ V). The shaded interval requires a separate transition model.

With $W$ and $L$ fixed, $\beta=\mu_n C_{ox}(W/L)$ is constant. Then $g_m=\beta V_{ov}$ and $I_D=\tfrac12\beta V_{ov}^2$, so $r_O=1/(\lambda I_D)\propto V_{ov}^{-2}$.

$$g_mr_O=\frac{2}{\lambda(V_{GS}-V_{TH})}.$$

The gain is a decreasing hyperbola. The square-law extrapolation has a vertical asymptote at $V_{GS}=V_{TH}$ and tends to zero at large $V_{GS}$.

![Intrinsic gain g_m r_O](/q/R075/solution-gain.svg)

## Grading notes

+2: decreasing $\propto 1/(V_{GS} - V_{TH})$ with the reasoning ($g_m \propto V_{ov}$, $r_O \propto 1/V_{ov}^2$).

+1: correct trend with incomplete reasoning, or the expression without justification.

0: decreasing trend with a wrong law.

-2 (asserted as fact): gain increasing with $V_{GS}$ (because $g_m$ increases, ignoring the fall of $r_O$), or constant.
