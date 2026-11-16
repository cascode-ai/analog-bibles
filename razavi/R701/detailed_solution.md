# Detailed solution - R701

**Approach.** Split the empirical formula into its parallel-plate term ($\epsilon W/h$) and its fringe terms (the other three), set the two parts equal, and solve the resulting equation for the normalized width $x = W/h$. The equation contains $x^{0.25}$, so it has no closed-form solution; we solve it by a simple fixed-point iteration (checked with Newton's method), then convert back to $W = xh$.

### Step 1 — Setting up the equation

The capacitance per unit length is

$$C = \epsilon\left[\underbrace{\frac{W}{h}}_{\text{parallel plate}} + \underbrace{0.77 + 1.06\left(\frac{W}{h}\right)^{0.25} + 1.06\left(\frac{t}{h}\right)^{0.5}}_{\text{fringe}}\right],$$

where $\epsilon$ is the permittivity of the dielectric between wire and substrate, $W$ the wire width, $t$ its thickness and $h$ the height of its bottom surface above the substrate.

- The **parallel-plate** part, $\epsilon W/h$, is the field going straight down from the bottom face of the wire, as in a plate capacitor of width $W$ and spacing $h$.
- The **fringe** part collects the field lines that leave the edges and side walls of the wire and curve down to the substrate. It depends only weakly on $W$ (through $W^{0.25}$) and grows with the side-wall height $t$.

Introduce the normalized width

$$x = \frac{W}{h}.$$

Setting parallel-plate = fringe and cancelling the common factor $\epsilon$:

$$x = 0.77 + 1.06\,x^{0.25} + 1.06\sqrt{\frac{t}{h}} .$$

Collect the terms that do not depend on $x$ into one constant:

$$x = c + 1.06\,x^{0.25}, \qquad c = 0.77 + 1.06\sqrt{\frac{t}{h}} .$$

**Uniqueness.** Define $f(x) = x - c - 1.06x^{0.25}$. Then $f(0) = -c < 0$, $f \to +\infty$ for large $x$, and $f'(x) = 1 - 0.265x^{-0.75}$ is positive for every $x > 0.17$. So there is exactly one positive root.

**Solution method.** Rewrite as $x_{n+1} = c + 1.06\,x_n^{0.25}$ and iterate. This converges quickly because the slope of the right-hand side, $0.265x^{-0.75}$, is only about 0.12 near the root (much less than 1), so each iteration reduces the error by roughly a factor of 8.

### Step 2 — Case $h = 3\ \mu$m ($t = 1\ \mu$m)

**Constant term:**

$$\sqrt{\frac{t}{h}} = \sqrt{\frac{1}{3}} = 0.5774, \qquad 1.06\times0.5774 = 0.6120,$$

$$c = 0.77 + 0.6120 = 1.3820 .$$

**Equation:** $x = 1.3820 + 1.06\,x^{0.25}$.

**Iteration**, starting from $x_0 = 2$:

| $n$ | $x_n$ | $x_n^{0.25}$ | $x_{n+1} = 1.3820 + 1.06x_n^{0.25}$ |
|---|---|---|---|
| 0 | 2.0000 | 1.1892 | 2.6426 |
| 1 | 2.6426 | 1.2750 | 2.7335 |
| 2 | 2.7335 | 1.2858 | 2.7450 |
| 3 | 2.7450 | 1.2872 | 2.7464 |
| 4 | 2.7464 | 1.2873 | 2.7466 |

The iteration settles at $x = 2.7466$. (Newton's method, $x \leftarrow x - f(x)/f'(x)$, gives the same value, 2.74659.)

**Check:** parallel plate $= 2.7466$; fringe $= 0.77 + 1.06\times1.28736 + 0.6120 = 0.77 + 1.3646 + 0.6120 = 2.7466$. ✓

**Width:**

$$W = xh = 2.7466\times3\ \mu\mathrm{m} = 8.24\ \mu\mathrm{m}.$$

### Step 3 — Case $h = 5\ \mu$m ($t = 1\ \mu$m)

**Constant term:**

$$\sqrt{\frac{t}{h}} = \sqrt{\frac15} = 0.4472, \qquad 1.06\times0.4472 = 0.4740,$$

$$c = 0.77 + 0.4740 = 1.2440 .$$

**Equation:** $x = 1.2440 + 1.06\,x^{0.25}$.

**Iteration**, starting from $x_0 = 2$:

| $n$ | $x_n$ | $x_n^{0.25}$ | $x_{n+1} = 1.2440 + 1.06x_n^{0.25}$ |
|---|---|---|---|
| 0 | 2.0000 | 1.1892 | 2.5046 |
| 1 | 2.5046 | 1.2580 | 2.5775 |
| 2 | 2.5775 | 1.2671 | 2.5871 |
| 3 | 2.5871 | 1.2683 | 2.5884 |
| 4 | 2.5884 | 1.2684 | 2.5886 |

So $x = 2.5886$.

**Check:** fringe $= 0.77 + 1.06\times1.26843 + 0.4740 = 0.77 + 1.3445 + 0.4740 = 2.5885 \approx x$. ✓

**Width:**

$$W = xh = 2.5886\times5\ \mu\mathrm{m} = 12.94\ \mu\mathrm{m}.$$

### Step 4 — Interpretation

**How the split varies with width** ($h = 3\ \mu$m; fraction of the total that is parallel-plate):

| $W$ (µm) | $x = W/h$ | parallel plate | fringe | parallel-plate share |
|---|---|---|---|---|
| 1 | 0.33 | 0.33 | 2.19 | 13 % |
| 3 | 1.00 | 1.00 | 2.44 | 29 % |
| 8.24 | 2.75 | 2.75 | 2.75 | 50 % |
| 20 | 6.67 | 6.67 | 3.09 | 68 % |
| 50 | 16.7 | 16.7 | 3.52 | 83 % |

- **Narrow wires are fringe-dominated.** For typical signal lines a few micrometres wide (or less), most of the capacitance comes from the edges, so the parallel-plate formula $\epsilon W/h$ alone badly underestimates it.
- **Effect of a thicker dielectric.** Going from $h = 3$ to $5\ \mu$m, the crossover *ratio* $W/h$ drops slightly (2.75 → 2.59), because the side-wall term $1.06\sqrt{t/h}$ shrinks as the wire's thickness becomes small relative to its height. The crossover *width* nevertheless grows, roughly in proportion to $h$ (8.2 → 12.9 µm): a wire must be wider to make its bottom face count as much as its edges when it is farther from the substrate.
- For scale, with an SiO$_2$ dielectric ($\epsilon = 3.9\epsilon_0 = 0.0345$ fF/µm), the total capacitance at the $h = 3\ \mu$m crossover is $C = \epsilon(2\times2.747) \approx 0.19$ fF per µm of wire length.

### Result

Parallel-plate and fringe capacitances are equal when $W/h = 0.77 + 1.06(W/h)^{0.25} + 1.06\sqrt{t/h}$:

- $h = 3\ \mu$m: $W/h = 2.747$, so $W \approx 8.2\ \mu$m;
- $h = 5\ \mu$m: $W/h = 2.589$, so $W \approx 12.9\ \mu$m.

Narrower wires are dominated by fringe capacitance.

**Common mistake.** Splitting the formula incorrectly, for example counting the constant $0.77$ or the $(W/h)^{0.25}$ term as part of the parallel-plate capacitance. Only $W/h$ is the parallel-plate term; the other three terms all describe fringing fields, as the problem states.

**Common mistake.** Solving for the ratio $x = W/h$ and reporting it as the width, or converting with the wrong height. The equation gives $x$; the width is $W = xh$, which must be recomputed with $h = 5\ \mu$m for the second case (the ratio itself also changes because the $\sqrt{t/h}$ term changes).

**Common mistake.** Dropping the side-wall term $1.06\sqrt{t/h}$ or evaluating it as $1.06\,t/h$. With the square root it contributes 0.61 (for $h = 3\ \mu$m), a large part of the fringe, and leaving it out shifts the crossover width by roughly 25 %.
