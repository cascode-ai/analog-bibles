# Golden Solution - A396

## Reference answer

$R_2 = 3R_1$ (e.g. $R_1 = 100$ kΩ, $R_2 = 300$ kΩ) and $V_{REF} = 0$ V.
- $V_{TRP}^{\pm} = \dfrac{R_1}{R_1+R_2}V_{OH/OL}+\dfrac{R_2}{R_1+R_2}V_{REF}$.
- Width: $\dfrac{R_1}{R_1+R_2}(2-(-2)) = 1$ V → $R_1+R_2 = 4R_1$, $R_2 = 3R_1$.
- Centre: $\dfrac{R_2}{R_1+R_2}V_{REF} = 0$ (the loop is symmetric about 0 because $V_{OH} = -V_{OL}$) → $V_{REF} = 0$.
- Check: $V_{TRP}^+ = \tfrac14(2) = 0.5$ V, $V_{TRP}^- = \tfrac14(-2) = -0.5$ V.

## Grading notes

+2: $R_2 = 3R_1$ (any specific pair in that ratio) and $V_{REF} = 0$. +1: correct ratio with $V_{REF}$ missing or a slip in it. 0: correct equations, both results wrong by algebra slips. −2 (asserted as fact): noninverting formulas used (giving $R_2 = 4R_1$), $R_1 = 3R_2$, or a nonzero $V_{REF}$ claimed necessary.
