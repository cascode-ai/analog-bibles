# Detailed solution - R076

**Approach.** Write the square-law expressions for $I_D$, $g_m$ and $r_O$ of a saturated MOSFET, decide which quantities stay fixed when only $W/L$ changes (here $V_{GS}$ and $L$ are held constant), and form the product $g_mr_O$ to see how it depends on $W/L$.

### Step 1 — Square-law model of a saturated MOSFET

Define the **overdrive voltage** $V_{ov} = V_{GS} - V_{TH}$, where $V_{GS}$ is the gate–source voltage and $V_{TH}$ the threshold voltage. In saturation the **square-law drain current** is

$$I_D = \frac12\,\mu C_{ox}\,\frac{W}{L}\,V_{ov}^2 ,$$

where $\mu$ is the carrier mobility, $C_{ox}$ the gate-oxide capacitance per unit area, and $W$, $L$ the channel width and length.

The **transconductance** is the derivative of $I_D$ with respect to $V_{GS}$, at constant $V_{DS}$:

$$g_m = \frac{\partial I_D}{\partial V_{GS}} = \frac12\,\mu C_{ox}\,\frac{W}{L}\cdot 2V_{ov} = \mu C_{ox}\,\frac{W}{L}\,V_{ov} .$$

The **output resistance** comes from channel-length modulation, with coefficient $\lambda$:

$$r_O = \frac{1}{\lambda I_D} .$$

The **intrinsic gain** $g_mr_O$ is the largest voltage gain a single transistor can give (a common-source stage with an ideal current-source load).

### Step 2 — What stays fixed and what changes when $W/L$ changes

We keep $V_{GS}$ and $L$ constant and vary only the width $W$, so only $W/L$ changes.

- **Threshold voltage.** $V_{TH}$ is set by the process and by the source–bulk voltage, not by $W$. So $V_{TH}$ is constant.
- **Overdrive.** $V_{ov} = V_{GS} - V_{TH}$ is the difference of two constants, so **$V_{ov}$ is constant**.
- **Channel-length modulation.** $\lambda$ is roughly inversely proportional to $L$ and does not depend on $W$. Since $L$ is fixed, **$\lambda$ is constant**.
- **Region of operation.** Saturation requires $V_{DS} \ge V_{ov}$. This condition does not involve $W/L$, so a device that is saturated stays saturated for every $W/L$.

With $\mu C_{ox}$, $V_{ov}$ and $\lambda$ all fixed, the three small-signal quantities scale as follows:

$$
\begin{aligned}
I_D &= \Big(\tfrac12\mu C_{ox}V_{ov}^2\Big)\cdot\frac{W}{L} &&\propto \frac{W}{L},\\
g_m &= \big(\mu C_{ox}V_{ov}\big)\cdot\frac{W}{L} &&\propto \frac{W}{L},\\
r_O &= \frac{1}{\lambda I_D} = \frac{2}{\lambda\mu C_{ox}V_{ov}^2}\cdot\left(\frac{W}{L}\right)^{-1} &&\propto \left(\frac{W}{L}\right)^{-1}.
\end{aligned}
$$

So widening the device raises the transconductance, but it raises the current by the same factor, and the larger current lowers $r_O$ in proportion.

### Step 3 — Form the product $g_mr_O$

Multiply the expressions for $g_m$ and $r_O$:

$$g_mr_O = \mu C_{ox}\frac{W}{L}V_{ov}\cdot\frac{1}{\lambda\cdot\frac12\mu C_{ox}\frac{W}{L}V_{ov}^2} .$$

Cancel the common factor $\mu C_{ox}(W/L)$ in numerator and denominator:

$$g_mr_O = \frac{V_{ov}}{\lambda\cdot\frac12 V_{ov}^2} .$$

Cancel one factor of $V_{ov}$:

$$g_mr_O = \frac{1}{\frac12\lambda V_{ov}} = \frac{2}{\lambda V_{ov}} = \frac{2}{\lambda\,(V_{GS} - V_{TH})} .$$

**A second route, as a check.** Dividing $g_m$ by $I_D$ gives $g_m = 2I_D/V_{ov}$. Then

$$g_mr_O = \frac{2I_D}{V_{ov}}\cdot\frac{1}{\lambda I_D} = \frac{2}{\lambda V_{ov}} ,$$

the same result. This form shows clearly that the intrinsic gain depends only on the overdrive and on $\lambda$. Both are fixed here, so $W/L$ has dropped out completely.

**With the $(1+\lambda V_{DS})$ factor.** If the saturation current is written as $I_D = \frac12\mu C_{ox}(W/L)V_{ov}^2(1+\lambda V_{DS})$, the same factor $(1+\lambda V_{DS})$ multiplies both $g_m$ and $I_D$. It cancels in the ratio, and the conclusion (no dependence on $W/L$) is unchanged.

### Step 4 — Numerical illustration

The problem gives no numbers, so take an example to see the scaling: $\mu C_{ox} = 100\ \mu\mathrm{A/V^2}$, $V_{ov} = 0.2$ V and $\lambda = 0.1\ \mathrm{V^{-1}}$. For $W/L = 10$:

$$
\begin{aligned}
I_D &= \tfrac12\,(100\ \mu\mathrm{A/V^2})(10)(0.2\ \mathrm{V})^2 = 20\ \mu\mathrm{A},\\
g_m &= (100\ \mu\mathrm{A/V^2})(10)(0.2\ \mathrm{V}) = 0.2\ \mathrm{mS},\\
r_O &= \frac{1}{(0.1\ \mathrm{V^{-1}})(20\ \mu\mathrm{A})} = 500\ \mathrm{k}\Omega,\\
g_mr_O &= (0.2\ \mathrm{mS})(500\ \mathrm{k}\Omega) = 100 .
\end{aligned}
$$

Repeating for other widths:

| $W/L$ | $I_D$ | $g_m$ | $r_O$ | $g_mr_O$ |
|---|---|---|---|---|
| 10 | 20 μA | 0.2 mS | 500 kΩ | 100 |
| 20 | 40 μA | 0.4 mS | 250 kΩ | 100 |
| 50 | 100 μA | 1.0 mS | 100 kΩ | 100 |
| 100 | 200 μA | 2.0 mS | 50 kΩ | 100 |

The formula agrees: $2/(\lambda V_{ov}) = 2/[(0.1\ \mathrm{V^{-1}})(0.2\ \mathrm{V})] = 100$.

### Step 5 — The plot

- **Horizontal axis:** $W/L$. **Vertical axis:** $g_mr_O$.
- The curve is a **horizontal straight line** at height $2/[\lambda(V_{GS} - V_{TH})]$. It has zero slope and no break points over the whole range of $W/L$.
- The height of the line is set by the chosen $V_{GS}$: a smaller overdrive gives a higher line (for example 100 at $V_{ov} = 0.2$ V and 200 at $V_{ov} = 0.1$ V, with $\lambda = 0.1\ \mathrm{V^{-1}}$).
- If $g_m$ and $r_O$ are drawn as well, on log–log axes $g_m$ is a line of slope $+1$, $r_O$ a line of slope $-1$, and their product is flat.

**Physical intuition.** At fixed $V_{GS}$, a transistor of width $NW$ behaves exactly like $N$ identical transistors of width $W$ connected in parallel. Paralleling $N$ devices multiplies the transconductance by $N$, but it also puts $N$ output resistances in parallel, dividing $r_O$ by $N$. The voltage gain $g_mr_O$ therefore cannot change. Widening the device at constant $V_{GS}$ buys more current (and speed), not more gain.

### Result

$$g_mr_O = \frac{2}{\lambda\,(V_{GS} - V_{TH})} ,$$

which does **not** depend on $W/L$: the plot is a **horizontal line**. As $W/L$ grows, $g_m$ rises in proportion to $W/L$ and $I_D$ rises in the same proportion, so $r_O = 1/(\lambda I_D)$ falls as $(W/L)^{-1}$ and the product stays constant ($\lambda$ is fixed because $L$ is constant).

**Common mistake.** Concluding that the gain rises linearly with $W/L$ because "$g_m = \mu C_{ox}(W/L)V_{ov}$ grows with $W/L$". At constant $V_{GS}$ the drain current also grows with $W/L$, and $r_O = 1/(\lambda I_D)$ falls by exactly the same factor. Both factors of the product must be followed, not just one.

**Common mistake.** Using $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$ with $I_D$ treated as constant, which gives a $\sqrt{W/L}$ curve. That is the answer to a different question (constant drain current). Here $V_{GS}$ is fixed, so $I_D$ is not constant; the most convenient form is $g_m = \mu C_{ox}(W/L)V_{ov}$, or $g_m = 2I_D/V_{ov}$, which contain only quantities that are fixed or cancel.

**Common mistake.** Letting $\lambda$ change with $W/L$. Channel-length modulation depends on the channel *length*, and $L$ is held constant, so $\lambda$ is the same for every width.
