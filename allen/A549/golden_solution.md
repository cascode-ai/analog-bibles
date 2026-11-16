# Golden Solution - A549

## Reference answer

For the diagram as drawn:
$\dfrac{Y(z)}{Q(z)} = \dfrac{(1 - z^{-1})^2}{1 - z^{-1} + 2z^{-2} - z^{-3}} = \dfrac{z(z-1)^2}{z^3 - z^2 + 2z - 1}$
(the same expression as $Y/X$, because $X$ enters after the loop filter). Its poles lie at $z \approx 0.570$ and $z \approx 0.215 \pm j1.307$ ($|z| \approx 1.32$), outside the unit circle, so this loop is unstable.

Derivation (let $D = z^{-1}Y$ be the output of the delay):
- The −1 block feeds $-D$ both into the left integrator and into the first summer: the first summer's output is $-D\left(1 + \dfrac{1}{1 - z^{-1}}\right)$.
- The second integrator gives $C = -D\dfrac{2 - z^{-1}}{(1 - z^{-1})^2}$.
- The X summer adds $X$, $C$ and $D$ (its lower input is fed directly from the delay output), and $Y = X + C + D + Q$.
- Substituting $D = z^{-1}Y$: $Y\left[1 - z^{-1} + \dfrac{z^{-1}(2 - z^{-1})}{(1 - z^{-1})^2}\right] = X + Q$, i.e. $Y\,\dfrac{1 - z^{-1} + 2z^{-2} - z^{-3}}{(1 - z^{-1})^2} = X + Q$.
- Without the direct path from the delay output into the X summer, the denominator collapses to 1 and $Y/Q = (1 - z^{-1})^2$: second-order noise shaping with two zeros at dc.

## Grading notes

+2: the as-drawn result $(1 - z^{-1})^2/(1 - z^{-1} + 2z^{-2} - z^{-3})$ (any equivalent form), derived with all three feedback connections of $z^{-1}Y$ (into the left integrator via −1, into the first summer via −1, and directly into the X summer); noting the two zeros at dc and/or the instability is a plus. +1: correct setup with an algebra slip in the denominator, while the numerator $(1 - z^{-1})^2$ and the use of all three paths are right. 0: answer $(1 - z^{-1})^2$ explicitly obtained by noting and discarding the direct path into the X summer (e.g., as a presumed drawing error), with the as-drawn expression not given. −2 (asserted as fact): $(1 - z^{-1})^2$ presented as the transfer function of the diagram as drawn (the direct path overlooked), or another expression from a misread connection.
