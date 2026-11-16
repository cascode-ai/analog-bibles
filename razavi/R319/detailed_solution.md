# Detailed solution - R319

**Approach.** Replace $I_1$ by the resistor $R_1$ (from $V_{DD}$, an ac ground, to Y), model $M_1$ by its controlled sources $g_m$, $g_{mb}$ and $r_O$, and drive node X (the source) with a test voltage. We first find the exact voltage gain from X to Y, then use Miller's theorem to split $r_O$ into a resistance at X, and combine it with the resistance presented by the controlled sources. A direct KCL derivation confirms the result.

### Step 1 — Small-signal model

From the figure, with $I_1$ replaced by $R_1$:

- the gate of $M_1$ is at $V_b$ (ac ground) and its bulk is at ground (ac ground);
- the source is node **X** (where $R_{in}$ is measured) and the drain is node **Y**;
- $r_O$ is drawn explicitly between Y and X;
- $R_1$ connects Y to $V_{DD}$, an ac ground.

The controlled sources carry, from drain (Y) to source (X),

$$g_mv_{gs} + g_{mb}v_{bs} = g_m(0 - V_X) + g_{mb}(0 - V_X) = -(g_m + g_{mb})V_X,$$

i.e. a current $(g_m + g_{mb})V_X$ flowing **from X to Y**.

<!-- diagram: diagram-01.cir -->

Apply a test voltage $V_X$ at X and let $I_X$ be the current flowing into X.

### Step 2 — Voltage gain from X to Y

**KCL at Y.** Current arrives from X through the controlled sources, $(g_m + g_{mb})V_X$, and through $r_O$, $(V_X - V_Y)/r_O$; it leaves through $R_1$, $V_Y/R_1$:

$$\frac{V_Y}{R_1} + \frac{V_Y - V_X}{r_O} = (g_m + g_{mb})V_X .$$

Collect terms:

$$
\begin{aligned}
V_Y\left(\frac{1}{R_1} + \frac{1}{r_O}\right) &= V_X\left(g_m + g_{mb} + \frac{1}{r_O}\right)\\
V_Y\,\frac{r_O + R_1}{R_1r_O} &= V_X\,\frac{1 + (g_m + g_{mb})r_O}{r_O}\\
A_v = \frac{V_Y}{V_X} &= \frac{\left[1 + (g_m + g_{mb})r_O\right]R_1}{R_1 + r_O}.
\end{aligned}
$$

This is the gain of the common-gate stage from its source to its drain, with load $R_1$.

### Step 3 — Miller's theorem applied to $r_O$

Miller's theorem says that an impedance $Z$ between nodes X and Y can be replaced, as seen from X, by $Z/(1 - A_v)$ to ground, where $A_v = V_Y/V_X$ is the gain for the actual excitation. Here we drive X, and $A_v$ from Step 2 is exact for this excitation, so the result will be exact.

First compute $1 - A_v$:

$$
\begin{aligned}
1 - A_v &= \frac{R_1 + r_O - R_1 - (g_m + g_{mb})r_OR_1}{R_1 + r_O}\\
&= \frac{r_O\left[1 - (g_m + g_{mb})R_1\right]}{R_1 + r_O}.
\end{aligned}
$$

Then the part of $r_O$ seen at X is

$$R_{X,Miller} = \frac{r_O}{1 - A_v} = \frac{R_1 + r_O}{1 - (g_m + g_{mb})R_1}.$$

**Remark.** If $(g_m + g_{mb})R_1 > 1$, then $A_v > 1$: Y moves *more* than X, so the current in $r_O$ flows *into* X when X rises. The Miller resistance is then **negative**. That is not a problem; it simply describes a current returning to X through $r_O$.

### Step 4 — Add the controlled sources and combine

From X's point of view, the controlled sources draw a current $(g_m + g_{mb})V_X$ out of X that is proportional to $V_X$ itself, i.e. they act as a resistance $1/(g_m + g_{mb})$ from X to ground. Hence

$$R_{in} = \frac{1}{g_m + g_{mb}}\ \Big\|\ \frac{R_1 + r_O}{1 - (g_m + g_{mb})R_1}.$$

Add the conductances:

$$
\begin{aligned}
\frac{1}{R_{in}} &= (g_m + g_{mb}) + \frac{1 - (g_m + g_{mb})R_1}{R_1 + r_O}\\
&= \frac{(g_m + g_{mb})(R_1 + r_O) + 1 - (g_m + g_{mb})R_1}{R_1 + r_O}\\
&= \frac{1 + (g_m + g_{mb})r_O}{R_1 + r_O}.
\end{aligned}
$$

Therefore

$$R_{in} = \frac{R_1 + r_O}{1 + (g_m + g_{mb})r_O}.$$

### Step 5 — Check by direct KCL

The test current $I_X$ enters X and can only go to Y (through the controlled sources and $r_O$), then through $R_1$ to ac ground. So $V_Y = I_XR_1$, and

$$I_X = (g_m + g_{mb})V_X + \frac{V_X - V_Y}{r_O} = (g_m + g_{mb})V_X + \frac{V_X - I_XR_1}{r_O}.$$

Collect $I_X$ on the left:

$$
\begin{aligned}
I_X\left(1 + \frac{R_1}{r_O}\right) &= V_X\left(g_m + g_{mb} + \frac{1}{r_O}\right)\\
R_{in} = \frac{V_X}{I_X} &= \frac{1 + R_1/r_O}{g_m + g_{mb} + 1/r_O} = \frac{R_1 + r_O}{1 + (g_m + g_{mb})r_O},
\end{aligned}
$$

the same result.

### Step 6 — Interpretation and limiting cases

For $(g_m + g_{mb})r_O\gg1$:

$$R_{in}\approx\frac{1}{g_m + g_{mb}} + \frac{R_1}{(g_m + g_{mb})r_O}.$$

The drain load is "seen" at the source divided by the intrinsic gain $(g_m + g_{mb})r_O$.

- **$R_1\to\infty$** (the original ideal current source $I_1$): $R_{in}\to\infty$. With nowhere for the current to go at Y, no current can enter X.
- **$R_1 = 0$** (drain at ac ground): $R_{in} = r_O/[1 + (g_m + g_{mb})r_O] = r_O\parallel\dfrac{1}{g_m + g_{mb}}$, the familiar value.
- **$r_O\to\infty$**: $R_{in}\to1/(g_m + g_{mb})$ for any finite $R_1$.

### Result

$$R_{in} = \frac{R_1 + r_O}{1 + (g_m + g_{mb})r_O}\approx\frac{1}{g_m + g_{mb}} + \frac{R_1}{(g_m + g_{mb})r_O}.$$

Via Miller's theorem: the gain from X to Y is $A_v = [1 + (g_m + g_{mb})r_O]R_1/(R_1 + r_O)$, so $r_O$ appears at X as $r_O/(1 - A_v) = (R_1 + r_O)/[1 - (g_m + g_{mb})R_1]$ (negative when $(g_m + g_{mb})R_1 > 1$). In parallel with $1/(g_m + g_{mb})$ this gives the result above. It tends to $\infty$ for $R_1\to\infty$ and to $r_O\parallel1/(g_m + g_{mb})$ for $R_1 = 0$.

**Common mistake.** Claiming $R_{in} = 1/(g_m + g_{mb})$ exactly. That ignores $r_O$: the current that $r_O$ carries depends on the voltage at Y, which is set by the load $R_1$, so the load appears at the source as $R_1/[(g_m + g_{mb})r_O]$.

**Common mistake.** Using the wrong gain in Miller's theorem, for example $A_v = (g_m + g_{mb})R_1$ (ignoring the $r_O$ terms) or $-A_v$ (as if the CG stage inverted). The common-gate stage is non-inverting, and the factor is $1 - A_v$ with the exact, positive $A_v$ from KCL at Y.

**Common mistake.** Answering $R_{in} = R_1 + r_O$ or $\infty$. $R_1 + r_O$ is the resistance of the passive path alone, which the transistor's controlled sources reduce by $1 + (g_m + g_{mb})r_O$; $\infty$ is only the limit for an ideal current source, not for a finite $R_1$.
