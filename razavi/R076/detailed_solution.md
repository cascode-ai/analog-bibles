# Detailed solution - R076

**Approach.** With $V_{GS}$ and $L$ fixed, find how $I_D$, $g_m$ and $r_O$ scale with $W/L$, and form the product $g_mr_O$ to see how it depends on $W/L$.

### Step 1 — How $I_D$, $g_m$ and $r_O$ scale with $W/L$

$V_{TH}$ does not depend on $W$, so the overdrive $V_{ov} = V_{GS} - V_{TH}$ is constant. $\lambda$ depends on $L$ only, so it is constant too, and the saturation condition $V_{DS} \ge V_{ov}$ does not involve $W/L$. With $\mu C_{ox}$, $V_{ov}$ and $\lambda$ fixed, the square law gives

$$
\begin{aligned}
I_D &= \Big(\tfrac12\mu C_{ox}V_{ov}^2\Big)\cdot\frac{W}{L} &&\propto \frac{W}{L},\\
g_m &= \frac{\partial I_D}{\partial V_{GS}} = \big(\mu C_{ox}V_{ov}\big)\cdot\frac{W}{L} &&\propto \frac{W}{L},\\
r_O &= \frac{1}{\lambda I_D} = \frac{2}{\lambda\mu C_{ox}V_{ov}^2}\cdot\left(\frac{W}{L}\right)^{-1} &&\propto \left(\frac{W}{L}\right)^{-1}.
\end{aligned}
$$

Widening the device raises the transconductance, but it raises the current by the same factor, and the larger current lowers $r_O$ in proportion.

### Step 2 — Form the product $g_mr_O$

$$g_mr_O = \mu C_{ox}\frac{W}{L}V_{ov}\cdot\frac{1}{\lambda\cdot\frac12\mu C_{ox}\frac{W}{L}V_{ov}^2} .$$

Cancelling $\mu C_{ox}(W/L)$ and then one factor of $V_{ov}$:

$$g_mr_O = \frac{V_{ov}}{\lambda\cdot\frac12 V_{ov}^2} = \frac{1}{\frac12\lambda V_{ov}} = \frac{2}{\lambda V_{ov}} = \frac{2}{\lambda\,(V_{GS} - V_{TH})} .$$

**Check.** With $g_m = 2I_D/V_{ov}$,

$$g_mr_O = \frac{2I_D}{V_{ov}}\cdot\frac{1}{\lambda I_D} = \frac{2}{\lambda V_{ov}} ,$$

which depends only on the overdrive and $\lambda$, both fixed here, so $W/L$ drops out completely. If the saturation current carries the factor $(1+\lambda V_{DS})$, that factor multiplies both $g_m$ and $I_D$ and cancels in the ratio, so the conclusion is unchanged.

### Step 3 — Numerical illustration

Take, as an example, $\mu C_{ox} = 100\ \mu\mathrm{A/V^2}$, $V_{ov} = 0.2$ V and $\lambda = 0.1\ \mathrm{V^{-1}}$. For $W/L = 10$:

$$
\begin{aligned}
I_D &= \tfrac12\,(100\ \mu\mathrm{A/V^2})(10)(0.2\ \mathrm{V})^2 = 20\ \mu\mathrm{A},\\
g_m &= (100\ \mu\mathrm{A/V^2})(10)(0.2\ \mathrm{V}) = 0.2\ \mathrm{mS},\\
r_O &= \frac{1}{(0.1\ \mathrm{V^{-1}})(20\ \mu\mathrm{A})} = 500\ \mathrm{k}\Omega,\\
g_mr_O &= (0.2\ \mathrm{mS})(500\ \mathrm{k}\Omega) = 100 .
\end{aligned}
$$

For other widths:

| $W/L$ | $I_D$ | $g_m$ | $r_O$ | $g_mr_O$ |
|---|---|---|---|---|
| 10 | 20 μA | 0.2 mS | 500 kΩ | 100 |
| 20 | 40 μA | 0.4 mS | 250 kΩ | 100 |
| 50 | 100 μA | 1.0 mS | 100 kΩ | 100 |
| 100 | 200 μA | 2.0 mS | 50 kΩ | 100 |

The formula agrees: $2/(\lambda V_{ov}) = 2/[(0.1\ \mathrm{V^{-1}})(0.2\ \mathrm{V})] = 100$.

### Step 4 — The plot

- With $W/L$ on the horizontal axis, $g_mr_O$ is a **horizontal straight line** at height $2/[\lambda(V_{GS} - V_{TH})]$, with zero slope and no break points.
- The height is set by the chosen $V_{GS}$: a smaller overdrive gives a higher line (for example 100 at $V_{ov} = 0.2$ V and 200 at $V_{ov} = 0.1$ V, with $\lambda = 0.1\ \mathrm{V^{-1}}$).
- If $g_m$ and $r_O$ are drawn as well, on log–log axes $g_m$ is a line of slope $+1$, $r_O$ a line of slope $-1$, and their product is flat.

At fixed $V_{GS}$, a device of width $NW$ is $N$ devices of width $W$ in parallel: $g_m$ is multiplied by $N$ and $r_O$ divided by $N$, so widening buys more current (and speed), not more gain.

### Result

$$g_mr_O = \frac{2}{\lambda\,(V_{GS} - V_{TH})} ,$$

which does **not** depend on $W/L$: the plot is a **horizontal line**. As $W/L$ grows, $g_m$ rises in proportion to $W/L$ and $I_D$ rises in the same proportion, so $r_O = 1/(\lambda I_D)$ falls as $(W/L)^{-1}$ and the product stays constant ($\lambda$ is fixed because $L$ is constant).

**Common mistake.** Concluding that the gain rises linearly with $W/L$ because $g_m = \mu C_{ox}(W/L)V_{ov}$ does. At constant $V_{GS}$ the drain current also grows with $W/L$, and $r_O = 1/(\lambda I_D)$ falls by exactly the same factor.

**Common mistake.** Using $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$ with $I_D$ held constant, which gives a $\sqrt{W/L}$ curve: that answers the constant-current question. Here $V_{GS}$ is fixed, so use $g_m = \mu C_{ox}(W/L)V_{ov}$ or $g_m = 2I_D/V_{ov}$.

**Common mistake.** Letting $\lambda$ change with $W/L$. Channel-length modulation depends on $L$, which is held constant.
