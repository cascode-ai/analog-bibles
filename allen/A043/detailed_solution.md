# Detailed solution - A043

For a fixed area $A$, minimizing $P/A$ is the same as minimizing the perimeter $P$. Express $P$ in terms of $A$ for a circle, for a general rectangle and for a square, compare, and then state the general result that covers every shape.

### Step 1 — Circle

With radius $r$, $A=\pi r^2$ and $P=2\pi r$. Eliminating $r=\sqrt{A/\pi}$:

$$
P_{circle}=2\sqrt{\pi A},\qquad \frac{P}{A}\Big|_{circle}=\frac{2\sqrt\pi}{\sqrt A}=\frac{3.545}{\sqrt A}.
$$

### Step 2 — Rectangle, and the square as its best case

Take sides $a$ and $ka$, with aspect ratio $k>0$. Then $A=ka^2$, so $a=\sqrt{A/k}$, and

$$
P=2a(1+k)=2(1+k)\sqrt{\frac{A}{k}},\qquad
\frac{P}{A}\Big|_{rect}=\frac{2}{\sqrt A}\left(\sqrt k+\frac{1}{\sqrt k}\right).
$$

Since $\sqrt k+1/\sqrt k-2=\left(k^{1/4}-k^{-1/4}\right)^2\ge0$, the bracket is at least 2, with equality only at $k=1$. The square is therefore the best rectangle:

$$
\frac{P}{A}\Big|_{square}=\frac{4}{\sqrt A}.
$$

Elongation costs perimeter: for a 4:1 rectangle the bracket is $2+0.5=2.5$, giving $5/\sqrt A$, 25 % worse than the square.

### Step 3 — Circle versus square

$$
\frac{(P/A)_{circle}}{(P/A)_{square}}=\frac{2\sqrt\pi}{4}=\frac{\sqrt\pi}{2}=0.886 .
$$

For the same area the circle has about 11.4 % less perimeter than the square, and hence less than any rectangle.

### Step 4 — Every other shape

For a regular $n$-sided polygon, $P^2/A=4n\tan(\pi/n)$, which decreases monotonically with $n$:

| Shape | Triangle | Square | Hexagon | Octagon | Circle ($n\to\infty$) |
|---|---|---|---|---|---|
| $P^2/A$ | 20.8 | 16.0 | 13.9 | 13.3 | $4\pi=12.57$ |

More generally, the isoperimetric inequality $P^2\ge4\pi A$ holds for every plane figure, with equality only for the circle. Since $P/A=\sqrt{P^2/A}/\sqrt A$, the circle minimizes the perimeter-to-area ratio for a given area. This is why a circular (or, in Manhattan layout, a near-square or octagonal) shape minimizes edge effects such as fringing and edge-variation errors in capacitors.
