# Detailed solution - R319

**Approach.** With $R_1$ from Y to ac ground, drive the source X with a test voltage. Find the exact gain from X to Y, use Miller's theorem to move $r_O$ to X, and combine it with the resistance of the controlled sources. A direct KCL derivation confirms the result.

### Step 1 — Small-signal model

The gate and bulk are at ac ground, so the controlled sources carry, from drain (Y) to source (X),

$$g_mv_{gs} + g_{mb}v_{bs} = g_m(0 - V_X) + g_{mb}(0 - V_X) = -(g_m + g_{mb})V_X,$$

i.e. a current $(g_m + g_{mb})V_X$ **from X to Y**; $r_O$ runs between Y and X, and $R_1$ from Y to ac ground ($V_{DD}$).

<!-- diagram: diagram-01.cir -->

Apply a test voltage $V_X$ at X, with $I_X$ flowing into X.

### Step 2 — Voltage gain from X to Y

KCL at Y ($(g_m + g_{mb})V_X$ and $(V_X - V_Y)/r_O$ arrive from X, $V_Y/R_1$ leaves):

$$\frac{V_Y}{R_1} + \frac{V_Y - V_X}{r_O} = (g_m + g_{mb})V_X .$$

Collecting terms:

$$
\begin{aligned}
V_Y\left(\frac{1}{R_1} + \frac{1}{r_O}\right) &= V_X\left(g_m + g_{mb} + \frac{1}{r_O}\right)\\
V_Y\,\frac{r_O + R_1}{R_1r_O} &= V_X\,\frac{1 + (g_m + g_{mb})r_O}{r_O}\\
A_v = \frac{V_Y}{V_X} &= \frac{\left[1 + (g_m + g_{mb})r_O\right]R_1}{R_1 + r_O},
\end{aligned}
$$

the source-to-drain gain of the common-gate stage with load $R_1$.

### Step 3 — Miller's theorem applied to $r_O$

Seen from X, $r_O$ becomes $r_O/(1 - A_v)$ to ground; since $A_v$ is exact for this excitation, so is the result.

$$
\begin{aligned}
1 - A_v &= \frac{R_1 + r_O - R_1 - (g_m + g_{mb})r_OR_1}{R_1 + r_O}\\
&= \frac{r_O\left[1 - (g_m + g_{mb})R_1\right]}{R_1 + r_O},
\end{aligned}
$$

$$R_{X,Miller} = \frac{r_O}{1 - A_v} = \frac{R_1 + r_O}{1 - (g_m + g_{mb})R_1}.$$

If $(g_m + g_{mb})R_1 > 1$, then $A_v > 1$: Y moves *more* than X, the current in $r_O$ flows *into* X when X rises, and the Miller resistance is **negative**, which is legitimate.

### Step 4 — Add the controlled sources and combine

The controlled sources draw $(g_m + g_{mb})V_X$ out of X, proportional to $V_X$, so they act as $1/(g_m + g_{mb})$ from X to ground:

$$R_{in} = \frac{1}{g_m + g_{mb}}\ \Big\|\ \frac{R_1 + r_O}{1 - (g_m + g_{mb})R_1}.$$

Adding the conductances:

$$
\begin{aligned}
\frac{1}{R_{in}} &= (g_m + g_{mb}) + \frac{1 - (g_m + g_{mb})R_1}{R_1 + r_O}\\
&= \frac{(g_m + g_{mb})(R_1 + r_O) + 1 - (g_m + g_{mb})R_1}{R_1 + r_O}\\
&= \frac{1 + (g_m + g_{mb})r_O}{R_1 + r_O},
\end{aligned}
$$

$$R_{in} = \frac{R_1 + r_O}{1 + (g_m + g_{mb})r_O}.$$

### Step 5 — Check by direct KCL

$I_X$ can only flow from X to Y (through the controlled sources and $r_O$) and then through $R_1$, so $V_Y = I_XR_1$ and

$$I_X = (g_m + g_{mb})V_X + \frac{V_X - V_Y}{r_O} = (g_m + g_{mb})V_X + \frac{V_X - I_XR_1}{r_O}.$$

Collecting $I_X$:

$$
\begin{aligned}
I_X\left(1 + \frac{R_1}{r_O}\right) &= V_X\left(g_m + g_{mb} + \frac{1}{r_O}\right)\\
R_{in} = \frac{V_X}{I_X} &= \frac{1 + R_1/r_O}{g_m + g_{mb} + 1/r_O} = \frac{R_1 + r_O}{1 + (g_m + g_{mb})r_O},
\end{aligned}
$$

the same result.

### Step 6 — Interpretation and limiting cases

For $(g_m + g_{mb})r_O\gg1$,

$$R_{in}\approx\frac{1}{g_m + g_{mb}} + \frac{R_1}{(g_m + g_{mb})r_O} ,$$

so the drain load appears at the source divided by the intrinsic gain $(g_m + g_{mb})r_O$.

- **$R_1\to\infty$** (the original ideal current source $I_1$): $R_{in}\to\infty$, since no current can leave Y.
- **$R_1 = 0$** (drain at ac ground): $R_{in} = r_O/[1 + (g_m + g_{mb})r_O] = r_O\parallel\dfrac{1}{g_m + g_{mb}}$.
- **$r_O\to\infty$**: $R_{in}\to1/(g_m + g_{mb})$ for any finite $R_1$.

### Result

$$R_{in} = \frac{R_1 + r_O}{1 + (g_m + g_{mb})r_O}\approx\frac{1}{g_m + g_{mb}} + \frac{R_1}{(g_m + g_{mb})r_O}.$$

Via Miller's theorem: the gain from X to Y is $A_v = [1 + (g_m + g_{mb})r_O]R_1/(R_1 + r_O)$, so $r_O$ appears at X as $r_O/(1 - A_v) = (R_1 + r_O)/[1 - (g_m + g_{mb})R_1]$ (negative when $(g_m + g_{mb})R_1 > 1$). In parallel with $1/(g_m + g_{mb})$ this gives the result above. It tends to $\infty$ for $R_1\to\infty$ and to $r_O\parallel1/(g_m + g_{mb})$ for $R_1 = 0$.

**Common mistake.** Claiming $R_{in} = 1/(g_m + g_{mb})$ exactly. The current in $r_O$ depends on $V_Y$, which the load $R_1$ sets, so the load appears at the source as $R_1/[(g_m + g_{mb})r_O]$.

**Common mistake.** Using the wrong gain in Miller's theorem, e.g. $A_v = (g_m + g_{mb})R_1$ (no $r_O$ terms) or $-A_v$ (as if the stage inverted). The common-gate stage is non-inverting, and the factor is $1 - A_v$ with the exact, positive $A_v$ from KCL at Y.

**Common mistake.** Answering $R_1 + r_O$ or $\infty$. $R_1 + r_O$ is the passive path alone, which the controlled sources reduce by $1 + (g_m + g_{mb})r_O$; $\infty$ is only the limit for an ideal current source.
