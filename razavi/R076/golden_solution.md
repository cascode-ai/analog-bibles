# Golden Solution - R076

## Reference answer

Let $V_{ov}=V_{GS}-V_{TH}$. The plotted points have $V_{ov}>0$ and assume $V_{DS}\geq V_{ov}$.

With $V_{GS}$ and $L$ fixed, $g_m=\mu C_{ox}(W/L)V_{ov}$ and $I_D=\tfrac12\mu C_{ox}(W/L)V_{ov}^2$ are both proportional to $W/L$. The factor $W/L$ cancels in the product of $g_m$ and $r_O=1/(\lambda I_D)$.

$$g_mr_O=\frac{2}{\lambda(V_{GS}-V_{TH})}.$$

The gain is independent of $W/L$, so its plot is a horizontal line.

![Intrinsic gain g_m r_O](/q/R076/solution-gain.svg)

## Grading notes

+2: constant (flat) intrinsic gain equal to $2/(\lambda V_{ov})$ or an equivalent statement with the reason.

+1: flat line stated with incomplete reasoning.

0: correct reasoning pieces but a wrong conclusion qualified as uncertain.

-2 (asserted as fact): gain increasing with $W/L$ (linearly or as a square root) or decreasing.
