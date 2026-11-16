# Detailed solution - R342

**Approach.** Call X the node between $M_1$ and $M_2$. With $\lambda = 0$, $M_1$ and $M_3$ are ideal current sources at X, so by KCL at X they alone fix the current that the cascode $M_2$ carries to the output; $M_2$'s own noise can only move $v_X$. Write the output voltage and refer each surviving noise term to the input.

### Step 1 — Small-signal model

- **$M_1$:** a current $g_{m1}v_{in}$ from X to ground, independent of $v_X$, with its channel noise $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_{m1}$) in parallel.
- **$M_3$** (gate at the fixed $V_{b1}$): no small-signal current and infinite output resistance; only its noise $I_{n3}$ ($\overline{I_{n3}^2} = 4kT\gamma g_{m3}$) remains, flowing from $V_{DD}$ into X.
- **$M_2$** (gate at ac ground): a current $g_{m2}(0 - v_X)$ from the output to X, with its noise $I_{n2}$ ($\overline{I_{n2}^2} = 4kT\gamma g_{m2}$) in parallel.
- **$R_D$:** from the output to ac ground, with its Norton noise $I_{nD}$ ($\overline{I_{nD}^2} = 4kT/R_D$) flowing from $V_{DD}$ into the output.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at node X: the current carried by $M_2$

The current entering X from $M_2$ and $M_3$ leaves through $M_1$:

$$\underbrace{-g_{m2}v_X + I_{n2}}_{i_{M2}} + I_{n3} = g_{m1}v_{in} + I_{n1}.$$

So the total small-signal current through $M_2$ is

$$i_{M2} = g_{m1}v_{in} + I_{n1} - I_{n3},$$

which contains neither $I_{n2}$ nor $v_X$. $I_{n2}$ only sets the voltage at X:

$$v_X = \frac{I_{n2} + I_{n3} - g_{m1}v_{in} - I_{n1}}{g_{m2}}.$$

$M_2$'s noise circulates locally: it pushes X up until $-g_{m2}v_X$ cancels $I_{n2}$. At dc, likewise, the current in $M_2$ is $I_{D1} - |I_{D3}|$, set entirely by the two current sources at X.

### Step 3 — KCL at the output

All of $i_{M2}$ comes from the $R_D$ branch:

$$\frac{0 - v_{out}}{R_D} + I_{nD} = i_{M2} = g_{m1}v_{in} + I_{n1} - I_{n3},$$

$$v_{out} = -g_{m1}R_D\,v_{in} - R_D(I_{n1} - I_{n3}) + R_DI_{nD}.$$

The gain is

$$A_v = \frac{v_{out}}{v_{in}} = -g_{m1}R_D :$$

$M_3$ takes none of $M_1$'s signal current, so all of it reaches $R_D$.

### Step 4 — Referring the noise to the input

The three surviving sources ($M_1$, $M_3$, $R_D$) are uncorrelated, and each appears at the output with coefficient $\pm R_D$:

$$\overline{V_{n,out}^2} = R_D^2\left(4kT\gamma g_{m1} + 4kT\gamma g_{m3} + \frac{4kT}{R_D}\right).$$

Dividing by $A_v^2 = g_{m1}^2R_D^2$:

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{4kT\gamma g_{m1} + 4kT\gamma g_{m3} + 4kT/R_D}{g_{m1}^2}\\
&= 4kT\left(\frac{\gamma}{g_{m1}} + \frac{\gamma g_{m3}}{g_{m1}^2} + \frac{1}{g_{m1}^2R_D}\right).
\end{aligned}
$$

The terms come from $M_1$, from $M_3$ (whose noise goes straight up through $M_2$ to $R_D$, like that of a load current source) and from $R_D$; $M_2$ contributes **zero**.

### Step 5 — Design remark

$M_3$ supplies part of $M_1$'s bias current, so $M_1$ can run at a large current (large $g_{m1}$) while $R_D$ carries only $I_{D1} - |I_{D3}|$; a larger $R_D$ then raises the gain and lowers the $R_D$ term. The price is the term $4kT\gamma g_{m3}/g_{m1}^2$, which calls for a small $g_{m3}$ for its current, i.e. a large overdrive for $M_3$.

### Result

$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{\gamma g_{m3}}{g_{m1}^2} + \frac{1}{g_{m1}^2R_D}\right)$$

$M_2$ contributes nothing. With $\lambda = 0$, $M_1$ and $M_3$ fix the current through $M_2$ ($i_{M2} = g_{m1}v_{in} + I_{n1} - I_{n3}$), so $M_2$'s noise only changes $v_X$. The gain is $-g_{m1}R_D$, and $M_3$'s noise appears like that of a current-source load.

**Common mistake.** Treating $M_3$ as noiseless because it only supplies bias current. Its noise is injected into X, and since $M_1$ is an ideal current source, all of it flows through $M_2$ into $R_D$.

**Common mistake.** Including a noise term for the cascode $M_2$. The node below it is driven only by ideal current sources, so its current is fixed regardless of its own noise; this holds even with $g_{mb2}$ or $r_{O2}$, which also act only between the output and X.

**Common mistake.** Splitting $M_1$'s signal current between $M_2$ and $M_3$, for example by treating $M_3$ as a resistance $1/g_{m3}$ to ac ground. $M_3$ has a fixed gate–source voltage and infinite output resistance, so it carries no signal current and the gain is simply $g_{m1}R_D$.
