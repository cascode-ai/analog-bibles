# Golden Solution - A043

## Reference answer

For a given area $A$: circle $P/A = 2\sqrt{\pi}/\sqrt{A} \approx 3.545/\sqrt{A}$; square $P/A = 4/\sqrt{A}$; rectangle with side ratio $k$: $P/A = (2/\sqrt{A})(\sqrt{k} + 1/\sqrt{k}) \ge 4/\sqrt{A}$. The circle is lowest, with about 11.4% less perimeter than the square ($\sqrt{\pi}/2 = 0.886$), and the square is the best rectangle.

- Circle: $A = \pi r^2$, $P = 2\pi r = 2\sqrt{\pi A}$.
- Rectangle $a \times ka$: $A = ka^2$, $P = 2a(1 + k) = 2(1 + k)\sqrt{A/k}$, so $P/A = \frac{2}{\sqrt{A}}\left(\sqrt{k} + \frac{1}{\sqrt{k}}\right)$; since $\sqrt{k} + 1/\sqrt{k} \ge 2$ (equality at $k = 1$), the square ($P/A = 4/\sqrt{A}$) is the best rectangle, and a 4:1 rectangle is 25% worse than the square.
- Circle vs square: $2\sqrt{\pi} = 3.545 < 4$.
- General shape: for a regular n-gon $P^2/A = 4n\tan(\pi/n)$, which decreases monotonically with n toward $4\pi$ (circle) as $n \to \infty$; more generally the isoperimetric inequality $P^2 \ge 4\pi A$ holds for every plane figure, with equality only for the circle. So the circle minimizes $P/A = \sqrt{P^2/A}/\sqrt{A}$ for a given area.

## Grading notes

+2: correct $P/A$ (or $P^2/A$) for circle, square and a general rectangle, showing the rectangle minimum at the square and the circle below the square (3.545 vs 4), plus an argument that the circle is the overall minimum (isoperimetric inequality or regular-polygon limit). +1: the three comparisons right without a general argument, or the general argument without the explicit rectangle analysis. 0: only numerical examples for one area value without the scaling with $\sqrt{A}$, or only circle vs square. −2 (asserted as fact): the square claimed to have the minimum, a long rectangle claimed better than the square, or P/A said to be independent of area.
