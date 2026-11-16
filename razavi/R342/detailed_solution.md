# Detailed solution - R342

**Approach.** Call X the node between $M_1$ and $M_2$. With $\lambda = 0$, both $M_1$ and the PMOS current source $M_3$ are ideal current sources connected to X. The current that the cascode $M_2$ carries up to the output is therefore fixed by $M_1$ and $M_3$ alone (KCL at X). $M_2$'s own noise can only move $v_X$. We then write the output voltage and refer each surviving noise term to the input.

### Step 1 — Small-signal model

**Nodes:** the input, node X (drain of $M_1$, source of $M_2$, drain of $M_3$), and the output (drain of $M_2$, bottom of $R_D$).

- **$M_1$** (gate at $v_{in}$, source grounded): current $g_{m1}v_{in}$ from X to ground, with channel noise $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_{m1}$) in parallel. With $\lambda = 0$ it does not depend on $v_X$.
- **$M_3$** (PMOS, gate at the fixed bias $V_{b1}$, source at $V_{DD}$): no small-signal current ($v_{sg3} = 0$) and infinite output resistance. Only its noise $I_{n3}$ ($\overline{I_{n3}^2} = 4kT\gamma g_{m3}$) remains, flowing from $V_{DD}$ into X.
- **$M_2$** (gate at the fixed bias $V_{b2}$ = ac ground): current $g_{m2}(0 - v_X)$ from the output to X, with noise $I_{n2}$ ($\overline{I_{n2}^2} = 4kT\gamma g_{m2}$) in parallel.
- **$R_D$**: from the output to $V_{DD}$ (ac ground), with Norton noise $I_{nD}$ ($\overline{I_{nD}^2} = 4kT/R_D$), taken as flowing from $V_{DD}$ into the output.

Here $k$ is Boltzmann's constant, $T$ the absolute temperature and $\gamma$ the channel-noise coefficient.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at node X: the current carried by $M_2$

Current entering X (from $M_2$ and from $M_3$) equals current leaving X (through $M_1$):

$$\underbrace{-g_{m2}v_X + I_{n2}}_{i_{M2}} + I_{n3} = g_{m1}v_{in} + I_{n1}.$$

So the total small-signal current through $M_2$ (its transconductance current plus its noise) is

$$i_{M2} = g_{m1}v_{in} + I_{n1} - I_{n3}.$$

The right-hand side contains neither $I_{n2}$ nor $v_X$. What $I_{n2}$ does is fix the voltage at X:

$$v_X = \frac{I_{n2} + I_{n3} - g_{m1}v_{in} - I_{n1}}{g_{m2}}.$$

$M_2$'s noise current circulates locally: it pushes X up, which reduces $M_2$'s $v_{gs}$ until the transconductance current $-g_{m2}v_X$ exactly cancels $I_{n2}$. In the dc picture, the current in $M_2$ is $I_{D1} - |I_{D3}|$, set entirely by the two current sources at X.

### Step 3 — KCL at the output

All of $i_{M2}$ comes from the $R_D$ branch:

$$\frac{0 - v_{out}}{R_D} + I_{nD} = i_{M2} = g_{m1}v_{in} + I_{n1} - I_{n3}.$$

Solve for $v_{out}$:

$$v_{out} = -g_{m1}R_D\,v_{in} - R_D(I_{n1} - I_{n3}) + R_DI_{nD}.$$

**Gain:**

$$A_v = \frac{v_{out}}{v_{in}} = -g_{m1}R_D .$$

All of $M_1$'s signal current reaches $R_D$. $M_3$ is an ideal current source and takes none of it, so there is no current division between $M_2$ and $M_3$.

### Step 4 — Referring the noise to the input

The three surviving sources ($M_1$, $M_3$, $R_D$) are uncorrelated, and each appears at the output with coefficient $\pm R_D$:

$$\overline{V_{n,out}^2} = R_D^2\left(4kT\gamma g_{m1} + 4kT\gamma g_{m3} + \frac{4kT}{R_D}\right).$$

Divide by $A_v^2 = g_{m1}^2R_D^2$:

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{4kT\gamma g_{m1} + 4kT\gamma g_{m3} + 4kT/R_D}{g_{m1}^2}\\
&= 4kT\left(\frac{\gamma}{g_{m1}} + \frac{\gamma g_{m3}}{g_{m1}^2} + \frac{1}{g_{m1}^2R_D}\right).
\end{aligned}
$$

Each term has a clear meaning:

- $\gamma/g_{m1}$: the input transistor's own noise.
- $\gamma g_{m3}/g_{m1}^2$: $M_3$'s noise current enters X and goes straight up through $M_2$ to $R_D$, exactly like a load current source, so it is referred by dividing by $g_{m1}^2$.
- $1/(g_{m1}^2R_D)$: the load resistor.
- $M_2$: **zero**, because its noise never leaves the $M_2$–X loop.

### Step 5 — Design remark

Why add $M_3$ at all? It supplies part of $M_1$'s bias current, so $M_1$ can run at a large current (large $g_{m1}$, small $\gamma/g_{m1}$) while $M_2$ and $R_D$ carry only $I_{D1} - |I_{D3}|$. A smaller dc current in $R_D$ allows a larger $R_D$ for the same voltage drop, which raises the gain and lowers the $R_D$ term. The price is the extra term $4kT\gamma g_{m3}/g_{m1}^2$: to keep it small, $M_3$ should have a small $g_{m3}$ for its current, i.e. a large overdrive.

### Result

$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{\gamma g_{m3}}{g_{m1}^2} + \frac{1}{g_{m1}^2R_D}\right)$$

$M_2$ contributes nothing. With $\lambda = 0$, $M_1$ and $M_3$ fix the current through $M_2$ ($i_{M2} = g_{m1}v_{in} + I_{n1} - I_{n3}$), so $M_2$'s noise only changes $v_X$. The gain is $-g_{m1}R_D$, and $M_3$'s noise appears like that of a current-source load.

**Common mistake.** Treating $M_3$ as noiseless because "it only supplies bias current". Its channel noise is injected into node X, and since $M_1$ cannot absorb it (ideal current source), all of it flows through $M_2$ into $R_D$.

**Common mistake.** Including a noise term for the cascode device $M_2$. The node below it is driven only by ideal current sources, so the current in $M_2$ is fixed regardless of $M_2$'s own noise. This holds even with $g_{mb2}$ or $r_{O2}$ included, since those also act only between the output and X.

**Common mistake.** Splitting $M_1$'s signal current between $M_2$ and $M_3$, for example by treating $M_3$ as a resistance $1/g_{m3}$ from X to ac ground, which would give a gain smaller than $g_{m1}R_D$. $M_3$ has a fixed gate–source voltage and (with $\lambda = 0$) infinite output resistance, so it carries no signal current; the gain is simply $g_{m1}R_D$.
