# Golden Solution - A552

## Reference answer

$Y(z) = X(z) + (1 - z^{-1})^3Q_3(z)$, so $NTF_Q(z) = (1 - z^{-1})^3$ (third-order shaping; $Q_1$ and $Q_2$ cancel).

- Each stage is a first-order loop with a non-delaying integrator $1/(1 - z^{-1})$ and feedback $z^{-1}Y_i$, so $Y_i = U_i + (1 - z^{-1})Q_i$ and the integrator output is $V_i = Y_i - Q_i$.
- Stage inputs: $U_1 = X$; $U_2 = V_1 - Y_1 = -Q_1$; $U_3 = V_2 - Y_2 = -Q_2$.
- Stage outputs: $Y_1 = X + (1 - z^{-1})Q_1$; $Y_2 = -Q_1 + (1 - z^{-1})Q_2$; $Y_3 = -Q_2 + (1 - z^{-1})Q_3$.
- Combination: $Y = Y_1 + (1 - z^{-1})Y_2 + (1 - z^{-1})^2Y_3$. The $Q_1$ and $Q_2$ terms cancel, leaving $Y = X + (1 - z^{-1})^3Q_3$.

## Grading notes

+2: $Y = X + (1 - z^{-1})^3Q_3$ (STF = 1, $Q_1$ and $Q_2$ cancelled) and $NTF_Q = (1 - z^{-1})^3$, with the stage equations shown. +1: correct NTF with an error in the signal term (e.g., an extra $z^{-1}$) or incomplete intermediate results. 0: correct stage equations but a cancellation error leaving a residual lower-order noise term, while the third-order structure is recognized. −2 (asserted as fact): NTF of order 1 or 2, or a final expression with uncancelled $(1 - z^{-1})Q_1$ presented as the answer.
