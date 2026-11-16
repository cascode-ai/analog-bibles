# Detailed solution - R305

**Approach.** The circuit is an NMOS cascode ($M_1$, $M_2$) with a PMOS current-source load ($M_3$) and a capacitor $C_1$ from the cascode node X to the output. With $\lambda = 0$, KCL on a supernode shows that the gain is unbounded at *every* frequency, which the two limits ($C_1$ open and $C_1$ shorted) confirm. Since "infinite" only makes sense as a limit, the analysis is then repeated with finite $r_O$ and $\lambda\to0$.

### Step 1 — Small-signal model

Call the drain of $M_1$ (source of $M_2$) node X. With $V_{DD}$ and $V_{b2}$ at ac ground:

- **$M_1$:** $g_{m1}V_{in}$ from X to ground (plus $r_{O1}$ from X to ground if $\lambda\ne0$).
- **$M_2$:** $g_{m2}v_{gs2} = g_{m2}(0 - V_X) = -g_{m2}V_X$ from the output to X (plus $r_{O2}$ between the output and X if $\lambda\ne0$).
- **$M_3$:** $v_{gs3} = 0$, so only $r_{O3}$ from the output to ac ground remains; with $\lambda = 0$, $M_3$ is an **ideal current source** (open circuit).
- **$C_1$** between X and the output. No capacitance connects X or the output to ground.

<!-- diagram: diagram-01.cir -->

For $\lambda = 0$, remove $r_{O1}$, $r_{O2}$ and $r_{O3}$ from this model.

### Step 2 — KCL on the supernode X + output (λ = 0)

Draw a boundary around X and the output. $M_2$'s channel and $C_1$ lie inside and only move current between the two nodes. The only element crossing the boundary with a signal current is $M_1$'s drain, carrying $g_{m1}V_{in}$ out of X to ground: $M_3$ is an ideal current source, and the gate of $M_2$ sits at $V_{b2}$ and draws no current. So KCL on the supernode reads

$$g_{m1}V_{in} = 0 ,$$

which no finite node voltages can satisfy for a nonzero input. The current $g_{m1}V_{in}$ has no resistive path (λ = 0) and no capacitive path (no grounded capacitance) to ground, so the node voltages grow without bound: **the gain is infinite**, at every frequency, because $C_1$ lies entirely inside the supernode.

### Step 3 — Very low frequencies (λ = 0)

$C_1$ is open, leaving an ordinary cascode with a current-source load:

$$A_v = -g_{m1}\,(R_{out,casc}\parallel r_{O3}), \qquad R_{out,casc}\approx g_{m2}r_{O2}r_{O1}.$$

With $\lambda = 0$ every $r_O$ is infinite, so $R_{out,casc}\parallel r_{O3} = \infty$ and

$$A_v(\text{low}) = \infty .$$

### Step 4 — Very high frequencies (λ = 0)

$C_1$ shorts X to the output, so $M_2$ (drain shorted to source) drops out, leaving a common-source stage $M_1$ loaded by $M_3$:

$$A_v = -g_{m1}\,(r_{O1}\parallel r_{O3}),$$

which with $\lambda = 0$ is also infinite:

$$A_v(\text{high}) = \infty .$$

### Step 5 — For reference: the same circuit with finite $r_O$

Keep $r_{O1}$, $r_{O2}$, $r_{O3}$, and let

$$i_{2} = -g_{m2}V_X + \frac{V_{out} - V_X}{r_{O2}} + (V_{out} - V_X)C_1s$$

be the total current from the output to X through $M_2$, $r_{O2}$ and $C_1$. KCL at the output and at X:

$$-\frac{V_{out}}{r_{O3}} = i_2 , \qquad (1)$$

$$i_2 = g_{m1}V_{in} + \frac{V_X}{r_{O1}} . \qquad (2)$$

Equating (1) and (2):

$$V_X = -r_{O1}\left(g_{m1}V_{in} + \frac{V_{out}}{r_{O3}}\right). \qquad (3)$$

With $Y = 1/r_{O2} + C_1s$, (1) becomes $-V_{out}/r_{O3} = -V_X(g_{m2} + Y) + V_{out}Y$, i.e.

$$V_X\,(g_{m2} + Y) = V_{out}\left(Y + \frac{1}{r_{O3}}\right). \qquad (4)$$

Substitute (3) into (4):

$$
\begin{aligned}
-r_{O1}\left(g_{m1}V_{in} + \frac{V_{out}}{r_{O3}}\right)(g_{m2} + Y) &= V_{out}\left(Y + \frac{1}{r_{O3}}\right)\\
-g_{m1}r_{O1}(g_{m2} + Y)\,V_{in} &= V_{out}\left[Y + \frac{1}{r_{O3}} + \frac{r_{O1}}{r_{O3}}(g_{m2} + Y)\right]\\
\frac{V_{out}}{V_{in}} &= \frac{-g_{m1}r_{O1}r_{O3}(g_{m2} + Y)}{r_{O3}Y + 1 + r_{O1}(g_{m2} + Y)}.
\end{aligned}
$$

Putting $Y = 1/r_{O2} + C_1s$ back and multiplying numerator and denominator by $r_{O2}$:

$$\frac{V_{out}}{V_{in}}(s) = \frac{-g_{m1}r_{O1}r_{O3}\left(1 + g_{m2}r_{O2} + C_1r_{O2}s\right)}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2} + C_1r_{O2}(r_{O1} + r_{O3})s}.$$

**Low-frequency limit** ($s\to0$), the cascode gain:

$$A_v(0) = -\frac{g_{m1}r_{O1}r_{O3}(1 + g_{m2}r_{O2})}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2}}\approx -g_{m1}\left[(g_{m2}r_{O2}r_{O1})\parallel r_{O3}\right].$$

**High-frequency limit** ($s\to\infty$, only the $s$ terms survive):

$$A_v(\infty) = -\frac{g_{m1}r_{O1}r_{O3}C_1r_{O2}}{C_1r_{O2}(r_{O1} + r_{O3})} = -g_{m1}(r_{O1}\parallel r_{O3}).$$

At high frequency $C_1$ bypasses the cascode device and removes the output-resistance boost $g_{m2}r_{O2}$, so the gain drops from the cascode value to the simple CS value. **Letting $\lambda\to0$** ($r_O\to\infty$), both values grow like $r_O$ and tend to infinity, in agreement with Steps 3 and 4.

### Result

With $\lambda = 0$ the gain is **unbounded (infinite) at both very low and very high frequencies**. X and the output, taken together, have no resistive or capacitive path to ground (ideal current-source load, no grounded capacitance), so the current $g_{m1}V_{in}$ cannot be absorbed at any frequency.

- Low frequencies ($C_1$ open): cascode with ideal load, $-g_{m1}R_{out}$ with $R_{out} = \infty$.
- High frequencies ($C_1$ short): CS stage with ideal load, $-g_{m1}(r_{O1}\parallel r_{O3}) = \infty$.

For finite $r_O$: low frequency $-\dfrac{g_{m1}r_{O1}r_{O3}(1 + g_{m2}r_{O2})}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2}}\approx -g_{m1}\left[(g_{m2}r_{O2}r_{O1})\parallel r_{O3}\right]$, and high frequency $-g_{m1}(r_{O1}\parallel r_{O3})$.

**Common mistake.** Producing a finite gain under $\lambda = 0$, for example $-g_{m1}/g_{m2}$ (as if the output had a diode load) or a capacitive-divider ratio. With an ideal current-source load and no capacitance to ground, nothing converts $g_{m1}V_{in}$ into a finite voltage.

**Common mistake.** Claiming that $C_1$ has no effect at high frequency in a finite-$r_O$ analysis. $C_1$ shorts the cascode device, so the gain loses the factor $g_{m2}r_{O2}$ and falls to $-g_{m1}(r_{O1}\parallel r_{O3})$.

**Common mistake.** Silently switching to finite $r_O$ and reporting only finite numbers. For the stated $\lambda = 0$ the answer is "infinite at both ends"; the finite-$r_O$ expressions only confirm this as a limit.
