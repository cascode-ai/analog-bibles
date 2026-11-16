# Detailed solution - R701

**Approach.** Set the parallel-plate term ($\epsilon W/h$) equal to the three fringe terms and solve for the normalized width $x = W/h$. The equation contains $x^{0.25}$, so it has no closed-form solution; solve it by fixed-point iteration (checked with Newton's method), then convert back to $W = xh$.

### Step 1 — Setting up the equation

With $x = W/h$, setting parallel plate = fringe and cancelling $\epsilon$:

$$x = 0.77 + 1.06\,x^{0.25} + 1.06\sqrt{\frac{t}{h}} \quad\Longrightarrow\quad x = c + 1.06\,x^{0.25}, \qquad c = 0.77 + 1.06\sqrt{\frac{t}{h}} .$$

**Uniqueness.** $f(x) = x - c - 1.06x^{0.25}$ has $f(0) = -c < 0$, $f \to +\infty$ for large $x$, and $f'(x) = 1 - 0.265x^{-0.75} > 0$ for every $x > 0.17$, so there is exactly one positive root.

**Solution method.** Iterate $x_{n+1} = c + 1.06\,x_n^{0.25}$. The slope of the right-hand side, $0.265x^{-0.75}$, is only about 0.12 near the root, so each iteration reduces the error by roughly a factor of 8.

### Step 2 — Case $h = 3\ \mu$m ($t = 1\ \mu$m)

$$\sqrt{\frac{t}{h}} = \sqrt{\frac{1}{3}} = 0.5774, \qquad 1.06\times0.5774 = 0.6120, \qquad c = 0.77 + 0.6120 = 1.3820 ,$$

so $x = 1.3820 + 1.06\,x^{0.25}$. Starting from $x_0 = 2$:

| $n$ | $x_n$ | $x_n^{0.25}$ | $x_{n+1} = 1.3820 + 1.06x_n^{0.25}$ |
|---|---|---|---|
| 0 | 2.0000 | 1.1892 | 2.6426 |
| 1 | 2.6426 | 1.2750 | 2.7335 |
| 2 | 2.7335 | 1.2858 | 2.7450 |
| 3 | 2.7450 | 1.2872 | 2.7464 |
| 4 | 2.7464 | 1.2873 | 2.7466 |

The iteration settles at $x = 2.7466$ (Newton's method, $x \leftarrow x - f(x)/f'(x)$, gives 2.74659).

**Check:** parallel plate $= 2.7466$; fringe $= 0.77 + 1.06\times1.28736 + 0.6120 = 0.77 + 1.3646 + 0.6120 = 2.7466$. ✓

$$W = xh = 2.7466\times3\ \mu\mathrm{m} = 8.24\ \mu\mathrm{m}.$$

### Step 3 — Case $h = 5\ \mu$m ($t = 1\ \mu$m)

$$\sqrt{\frac{t}{h}} = \sqrt{\frac15} = 0.4472, \qquad 1.06\times0.4472 = 0.4740, \qquad c = 0.77 + 0.4740 = 1.2440 ,$$

so $x = 1.2440 + 1.06\,x^{0.25}$. Starting from $x_0 = 2$:

| $n$ | $x_n$ | $x_n^{0.25}$ | $x_{n+1} = 1.2440 + 1.06x_n^{0.25}$ |
|---|---|---|---|
| 0 | 2.0000 | 1.1892 | 2.5046 |
| 1 | 2.5046 | 1.2580 | 2.5775 |
| 2 | 2.5775 | 1.2671 | 2.5871 |
| 3 | 2.5871 | 1.2683 | 2.5884 |
| 4 | 2.5884 | 1.2684 | 2.5886 |

So $x = 2.5886$.

**Check:** fringe $= 0.77 + 1.06\times1.26843 + 0.4740 = 0.77 + 1.3445 + 0.4740 = 2.5885 \approx x$. ✓

$$W = xh = 2.5886\times5\ \mu\mathrm{m} = 12.94\ \mu\mathrm{m}.$$

### Step 4 — Interpretation

**Split versus width** ($h = 3\ \mu$m):

| $W$ (µm) | $x = W/h$ | parallel plate | fringe | parallel-plate share |
|---|---|---|---|---|
| 1 | 0.33 | 0.33 | 2.19 | 13 % |
| 3 | 1.00 | 1.00 | 2.44 | 29 % |
| 8.24 | 2.75 | 2.75 | 2.75 | 50 % |
| 20 | 6.67 | 6.67 | 3.09 | 68 % |
| 50 | 16.7 | 16.7 | 3.52 | 83 % |

- **Narrow wires are fringe-dominated.** For signal lines a few micrometres wide or less, $\epsilon W/h$ alone badly underestimates the capacitance.
- **Effect of a thicker dielectric.** From $h = 3$ to $5\ \mu$m the crossover *ratio* $W/h$ drops slightly (2.75 → 2.59), because the side-wall term $1.06\sqrt{t/h}$ shrinks, but the crossover *width* grows roughly in proportion to $h$ (8.2 → 12.9 µm).
- For scale, with an SiO$_2$ dielectric ($\epsilon = 3.9\epsilon_0 = 0.0345$ fF/µm), the total capacitance at the $h = 3\ \mu$m crossover is $C = \epsilon(2\times2.747) \approx 0.19$ fF per µm of wire length.

### Result

Parallel-plate and fringe capacitances are equal when $W/h = 0.77 + 1.06(W/h)^{0.25} + 1.06\sqrt{t/h}$:

- $h = 3\ \mu$m: $W/h = 2.747$, so $W \approx 8.2\ \mu$m;
- $h = 5\ \mu$m: $W/h = 2.589$, so $W \approx 12.9\ \mu$m.

Narrower wires are dominated by fringe capacitance.

**Common mistake.** Counting the constant $0.77$ or the $(W/h)^{0.25}$ term as part of the parallel-plate capacitance. Only $W/h$ is the parallel-plate term, as the problem states.

**Common mistake.** Reporting the ratio $x = W/h$ as the width, or reusing the first ratio for $h = 5\ \mu$m. The width is $W = xh$, and the ratio itself changes with $h$ through the $\sqrt{t/h}$ term.

**Common mistake.** Dropping the side-wall term $1.06\sqrt{t/h}$ or evaluating it as $1.06\,t/h$. With the square root it contributes 0.61 (for $h = 3\ \mu$m), and leaving it out shifts the crossover width by roughly 25 %.
