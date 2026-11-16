# Detailed solution - R305

**Approach.** The circuit is an NMOS cascode ($M_1$, $M_2$) with a PMOS current-source load ($M_3$) and a capacitor $C_1$ from the cascode node X to the output. With $\lambda = 0$, we show by KCL on a supernode that the gain is unbounded at *every* frequency, and we confirm this with the two limits ($C_1$ open and $C_1$ shorted). Because an "infinite" answer only makes sense as a limit, we then repeat the analysis with finite $r_O$ and let $\lambda\to0$.

### Step 1 — Reading the circuit

From the figure:

- $M_1$ (NMOS): gate at $V_{in}$, source grounded, drain at node **X**. It is the input (common-source) device.
- $M_2$ (NMOS): gate at the fixed bias $V_{b2}$, source at X, drain at the **output**. It is the cascode (common-gate) device.
- $M_3$ (PMOS): source at $V_{DD}$, gate at the fixed bias $V_{b2}$, drain at the output. It is the current-source load.
- $C_1$ connects X to the output.

All other capacitances are neglected, so **no capacitance connects X or the output to ground**.

### Step 2 — Small-signal model

- $V_{DD}$ and $V_{b2}$ are ac grounds.
- **$M_1$:** current $g_{m1}V_{in}$ from X to ground (plus $r_{O1}$ from X to ground if $\lambda\ne0$).
- **$M_2$:** drain-to-source current $g_{m2}v_{gs2} = g_{m2}(0 - V_X) = -g_{m2}V_X$, flowing from the output to X (plus $r_{O2}$ between the output and X if $\lambda\ne0$).
- **$M_3$:** gate and source at ac ground, so $v_{gs3} = 0$; only $r_{O3}$ from the output to ac ground remains. With $\lambda = 0$, $M_3$ is an **ideal current source** (open circuit).
- **$C_1$** between X and the output.

<!-- diagram: diagram-01.cir -->

For $\lambda = 0$, remove $r_{O1}$, $r_{O2}$ and $r_{O3}$ from this model.

### Step 3 — KCL on the supernode X + output (λ = 0)

Draw a boundary around X and the output together. Inside it are $M_2$'s channel and $C_1$, which only move current between X and the output. The elements that cross the boundary are:

- $M_1$'s drain, carrying $g_{m1}V_{in}$ out of X to ground;
- $M_3$, an ideal current source, carrying no signal current;
- nothing else: the gate of $M_2$ sits at the fixed bias $V_{b2}$ and draws no current.

KCL on the supernode therefore reads

$$g_{m1}V_{in} = 0 .$$

For any nonzero input this cannot be satisfied by finite node voltages. The signal current $g_{m1}V_{in}$ has nowhere to go: there is no resistive path (λ = 0) and no capacitive path (no grounded capacitance) from X or the output to ground. The node voltages grow without bound, i.e. **the gain is infinite**, and this holds at every frequency because $C_1$ is entirely inside the supernode.

### Step 4 — Very low frequencies (λ = 0)

At low frequency $C_1$ is an open circuit, and the circuit is an ordinary cascode with a current-source load. Its gain is approximately

$$A_v = -g_{m1}\,(R_{out,casc}\parallel r_{O3}),$$

where $R_{out,casc}\approx g_{m2}r_{O2}r_{O1}$ is the output resistance of the cascode. With $\lambda = 0$, every $r_O$ is infinite, so $R_{out,casc}\parallel r_{O3} = \infty$ and

$$A_v(\text{low}) = \infty .$$

### Step 5 — Very high frequencies (λ = 0)

At high frequency $C_1$ is a short circuit between X and the output. $M_2$ then has its drain shorted to its source, so it no longer affects the circuit, which becomes a common-source stage $M_1$ loaded by $M_3$:

$$A_v = -g_{m1}\,(r_{O1}\parallel r_{O3}).$$

With $\lambda = 0$ this is also infinite:

$$A_v(\text{high}) = \infty .$$

### Step 6 — For reference: the same circuit with finite $r_O$

To see what "infinite" is the limit of, keep $r_{O1}$, $r_{O2}$, $r_{O3}$. Let

$$i_{2} = -g_{m2}V_X + \frac{V_{out} - V_X}{r_{O2}} + (V_{out} - V_X)C_1s$$

be the total current flowing from the output to X through $M_2$, $r_{O2}$ and $C_1$.

**KCL at the output.** The current $-V_{out}/r_{O3}$ arriving through $r_{O3}$ leaves as $i_2$:

$$-\frac{V_{out}}{r_{O3}} = i_2 . \qquad (1)$$

**KCL at X.** $i_2$ arrives and leaves through $M_1$ and $r_{O1}$:

$$i_2 = g_{m1}V_{in} + \frac{V_X}{r_{O1}} . \qquad (2)$$

Equate (1) and (2) and solve for $V_X$:

$$V_X = -r_{O1}\left(g_{m1}V_{in} + \frac{V_{out}}{r_{O3}}\right). \qquad (3)$$

Write $Y = 1/r_{O2} + C_1s$. Then (1) becomes $-V_{out}/r_{O3} = -V_X(g_{m2} + Y) + V_{out}Y$, i.e.

$$V_X\,(g_{m2} + Y) = V_{out}\left(Y + \frac{1}{r_{O3}}\right). \qquad (4)$$

Substitute (3) into (4):

$$
\begin{aligned}
-r_{O1}\left(g_{m1}V_{in} + \frac{V_{out}}{r_{O3}}\right)(g_{m2} + Y) &= V_{out}\left(Y + \frac{1}{r_{O3}}\right)\\
-g_{m1}r_{O1}(g_{m2} + Y)\,V_{in} &= V_{out}\left[Y + \frac{1}{r_{O3}} + \frac{r_{O1}}{r_{O3}}(g_{m2} + Y)\right]\\
\frac{V_{out}}{V_{in}} &= \frac{-g_{m1}r_{O1}r_{O3}(g_{m2} + Y)}{r_{O3}Y + 1 + r_{O1}(g_{m2} + Y)}.
\end{aligned}
$$

Now put $Y = 1/r_{O2} + C_1s$ back and multiply numerator and denominator by $r_{O2}$:

$$\frac{V_{out}}{V_{in}}(s) = \frac{-g_{m1}r_{O1}r_{O3}\left(1 + g_{m2}r_{O2} + C_1r_{O2}s\right)}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2} + C_1r_{O2}(r_{O1} + r_{O3})s}.$$

**Low-frequency limit** ($s\to0$), the cascode gain:

$$A_v(0) = -\frac{g_{m1}r_{O1}r_{O3}(1 + g_{m2}r_{O2})}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2}}\approx -g_{m1}\left[(g_{m2}r_{O2}r_{O1})\parallel r_{O3}\right].$$

**High-frequency limit** ($s\to\infty$, only the $s$ terms survive):

$$A_v(\infty) = -\frac{g_{m1}r_{O1}r_{O3}C_1r_{O2}}{C_1r_{O2}(r_{O1} + r_{O3})} = -g_{m1}(r_{O1}\parallel r_{O3}).$$

$C_1$ bypasses the cascode device at high frequency and removes the output-resistance boost $g_{m2}r_{O2}$, so the gain drops from the cascode value to the simple CS value. **Letting $\lambda\to0$** ($r_O\to\infty$), the low-frequency value grows like $r_O$ and so does the high-frequency value, so both tend to infinity, in agreement with Steps 4 and 5.

### Result

With $\lambda = 0$ the gain is **unbounded (infinite) at both very low and very high frequencies**. X and the output, taken together, have no resistive or capacitive path to ground (ideal current-source load, no grounded capacitance), so the current $g_{m1}V_{in}$ cannot be absorbed at any frequency.

- Low frequencies ($C_1$ open): cascode with ideal load, $-g_{m1}R_{out}$ with $R_{out} = \infty$.
- High frequencies ($C_1$ short): CS stage with ideal load, $-g_{m1}(r_{O1}\parallel r_{O3}) = \infty$.

For finite $r_O$: low frequency $-\dfrac{g_{m1}r_{O1}r_{O3}(1 + g_{m2}r_{O2})}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2}}\approx -g_{m1}\left[(g_{m2}r_{O2}r_{O1})\parallel r_{O3}\right]$, and high frequency $-g_{m1}(r_{O1}\parallel r_{O3})$.

**Common mistake.** Producing a finite gain under $\lambda = 0$, for example $-g_{m1}/g_{m2}$ (as if the output were a diode load) or a capacitive-divider ratio. Nothing in the circuit converts the current $g_{m1}V_{in}$ into a finite voltage: the load is an ideal current source and there is no capacitance to ground.

**Common mistake.** Claiming that $C_1$ has no effect at high frequency in a finite-$r_O$ analysis. $C_1$ shorts the cascode device, so the high-frequency gain loses the factor $g_{m2}r_{O2}$ and falls to $-g_{m1}(r_{O1}\parallel r_{O3})$.

**Common mistake.** Silently switching to finite $r_O$ and reporting only finite numbers. The problem states $\lambda = 0$, for which the answer is "infinite at both ends"; finite-$r_O$ expressions are useful only as a limit that confirms this.
