# Golden Solution - A551

## Reference answer

$Y_o(z) = z^{-1}X(z) + (1 - z^{-1})^2Q_2(z)$; $Q_1$ is cancelled, and the modulator is second order.

- First stage: $V_1 = \dfrac{X - z^{-1}Y_1}{1 - z^{-1}}$ and $Y_1 = V_1 + Q_1$, so $Y_1 = X + (1 - z^{-1})Q_1$ (hence $V_1 = Y_1 - Q_1$).
- Second-stage input: $z^{-1}V_1 - z^{-1}Y_1 = -z^{-1}Q_1$.
- Second stage (same loop): $Y_2 = -z^{-1}Q_1 + (1 - z^{-1})Q_2$.
- Output combination: $Y_o = z^{-1}Y_1 + (1 - z^{-1})Y_2$. The $Q_1$ terms cancel: $z^{-1}(1 - z^{-1})Q_1 - (1 - z^{-1})z^{-1}Q_1 = 0$.
- Result: $Y_o = z^{-1}X + (1 - z^{-1})^2Q_2$, i.e. second-order noise shaping (a 1-1 MASH cascade).

## Grading notes

+2: $Y_o = z^{-1}X + (1 - z^{-1})^2Q_2$ with $Q_1$ cancelled, and order 2, from correct stage equations. +1: correct result and order with incomplete intermediate steps, or a delay slip in the signal term (e.g., $X$ instead of $z^{-1}X$) with correct noise terms. 0: correct stage equations but the $Q_1$ cancellation mishandled (a residual $Q_1$ term), while the order 2 is stated. −2 (asserted as fact): order 1 or 3, a residual first-order $Q_1$ term claimed as part of the final answer with the wrong order, or the stages' connections misread.
