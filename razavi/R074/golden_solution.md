# Golden Solution - R074

## Reference answer

Let $V_{ov}=V_{GS}-V_{TH}$. The example uses an NMOS with $V_{GS}>V_{TH}>0$ and assumes $V_{DS}\geq V_{ov}$.

With $I_D$ and $L$ fixed, $g_m=2I_D/V_{ov}$ and $r_O=1/(\lambda I_D)$ is constant. Keeping the current fixed requires $W\propto V_{ov}^{-2}$.

$$g_mr_O=\frac{2}{\lambda(V_{GS}-V_{TH})}.$$

The gain is a decreasing hyperbola. The square-law extrapolation has a vertical asymptote at $V_{GS}=V_{TH}$ and tends to zero at large $V_{GS}$.

The dashed curve shows the square-law extrapolation near threshold.

![Intrinsic gain g_m r_O](/q/R074/solution-gain.svg)

## Grading notes

+2: $g_mr_O \propto 1/(V_{GS} - V_{TH})$ (e.g. $2/(\lambda V_{ov})$), decreasing hyperbola, with the reason ($g_m \propto 1/V_{ov}$ at fixed $I_D$, $r_O$ constant).

+1: correct decreasing trend and reason without the explicit expression, or the expression without the reason.

0: decreasing trend with a wrong law (e.g., linear decrease).

-2 (asserted as fact): gain increasing with $V_{GS}$, constant, or $\propto \sqrt{V_{GS} - V_{TH}}$.
