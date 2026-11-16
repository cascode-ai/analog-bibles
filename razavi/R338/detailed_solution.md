# Detailed solution - R338

**Approach.** Write KCL at the folding node X with the signal and all four noise sources ($M_1$, $M_2$, $R_S$, $R_D$) present, and get the output from the current that $M_2$ delivers into $R_D$. Dividing each noise coefficient by the signal gain refers it to the input, and the uncorrelated powers add.

### Step 1 — Small-signal model

- **$M_1$:** a current source $g_{m1}v_{in}$ from X to ground ($\lambda = 0$), with its channel noise $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_{m1}$) in parallel, in the same direction.
- **$R_S$:** from X to ac ground, with its Norton noise $I_{nS}$ ($\overline{I_{nS}^2} = 4kT/R_S$) flowing from $V_{DD}$ into X.
- **$M_2$** (gate at ac ground): a current $g_{m2}v_{sg2} = g_{m2}v_X$ from X into the output, with its noise $I_{n2}$ ($\overline{I_{n2}^2} = 4kT\gamma g_{m2}$) in parallel, also from X to the output.
- **$R_D$:** from the output to ground, with its Norton noise $I_{nD}$ ($\overline{I_{nD}^2} = 4kT/R_D$) flowing from ground into the output.

<!-- diagram: diagram-01.cir -->

$M_1$'s signal current is drawn from X, which is fed both by $R_S$ and by $M_2$ (whose source presents $1/g_{m2}$); only the part supplied through $M_2$ reaches $R_D$.

### Step 2 — KCL at node X

The currents leaving X sum to zero:

$$\underbrace{g_{m1}v_{in} + I_{n1}}_{\text{through } M_1} + \underbrace{g_{m2}v_X + I_{n2}}_{\text{through } M_2} + \underbrace{\frac{v_X}{R_S} - I_{nS}}_{\text{through } R_S} = 0 ,$$

$$
\begin{aligned}
v_X\left(g_{m2} + \frac{1}{R_S}\right) &= I_{nS} - g_{m1}v_{in} - I_{n1} - I_{n2}\\
v_X &= \frac{I_{nS} - g_{m1}v_{in} - I_{n1} - I_{n2}}{g_{m2} + 1/R_S}.
\end{aligned}
$$

### Step 3 — Output voltage

The current $g_{m2}v_X + I_{n2}$ that $M_2$ delivers flows into $R_D$ together with $I_{nD}$:

$$v_{out} = R_D\left(g_{m2}v_X + I_{n2}\right) + R_DI_{nD}.$$

Substituting $v_X$ over the common denominator $g_{m2} + 1/R_S$:

$$
\begin{aligned}
g_{m2}v_X + I_{n2} &= \frac{g_{m2}\left(I_{nS} - g_{m1}v_{in} - I_{n1} - I_{n2}\right) + I_{n2}\left(g_{m2} + 1/R_S\right)}{g_{m2} + 1/R_S}\\
&= \frac{g_{m2}I_{nS} - g_{m1}g_{m2}v_{in} - g_{m2}I_{n1} - g_{m2}I_{n2} + g_{m2}I_{n2} + I_{n2}/R_S}{g_{m2} + 1/R_S}\\
&= \frac{g_{m2}I_{nS} - g_{m1}g_{m2}v_{in} - g_{m2}I_{n1} + I_{n2}/R_S}{g_{m2} + 1/R_S}.
\end{aligned}
$$

Multiplying numerator and denominator by $R_S$:

$$g_{m2}v_X + I_{n2} = \frac{g_{m2}R_S\left(I_{nS} - g_{m1}v_{in} - I_{n1}\right) + I_{n2}}{1 + g_{m2}R_S},$$

$$v_{out} = \frac{R_D}{1 + g_{m2}R_S}\Big[g_{m2}R_S\left(I_{nS} - g_{m1}v_{in} - I_{n1}\right) + I_{n2}\Big] + R_DI_{nD}.$$

### Step 4 — Signal gain

$$A_v = \frac{v_{out}}{v_{in}} = -g_{m1}R_D\,\frac{g_{m2}R_S}{1 + g_{m2}R_S}.$$

The factor $g_{m2}R_S/(1 + g_{m2}R_S) = R_S/(R_S + 1/g_{m2})$ is the current divider between $R_S$ and $1/g_{m2}$ at X: the fraction of $M_1$'s signal current that reaches the output.

### Step 5 — Referring each noise source to the input

Each noise term of $v_{out}$ is divided by $A_v$, which is $-g_{m1}g_{m2}R_S$ times the common factor $\frac{R_D}{1 + g_{m2}R_S}$ (signs do not matter, since each source is squared).

- **$M_1$:** coefficient $-g_{m2}R_S\cdot\frac{R_D}{1 + g_{m2}R_S}$. Referred: $\dfrac{-g_{m2}R_SI_{n1}}{-g_{m1}g_{m2}R_S} = \dfrac{I_{n1}}{g_{m1}}$, so
$$\overline{V_{n,in}^2}\Big|_{M_1} = \frac{4kT\gamma g_{m1}}{g_{m1}^2} = \frac{4kT\gamma}{g_{m1}}.$$
- **$R_S$:** coefficient $+g_{m2}R_S\cdot\frac{R_D}{1 + g_{m2}R_S}$, the same magnitude as $M_1$'s, since $I_{nS}$ enters X exactly where $M_1$'s signal current does. Referred: $I_{nS}/g_{m1}$, so
$$\overline{V_{n,in}^2}\Big|_{R_S} = \frac{4kT/R_S}{g_{m1}^2} = \frac{4kT}{g_{m1}^2R_S}.$$
- **$M_2$:** coefficient $\frac{R_D}{1 + g_{m2}R_S}$. Referred: $\dfrac{I_{n2}}{g_{m1}g_{m2}R_S}$, so
$$\overline{V_{n,in}^2}\Big|_{M_2} = \frac{4kT\gamma g_{m2}}{(g_{m1}g_{m2}R_S)^2} = \frac{4kT\gamma}{g_{m1}^2g_{m2}R_S^2}.$$
Only the fraction $1/(1 + g_{m2}R_S)$ of $M_2$'s noise reaches the output: $R_S$ degenerates the cascode device.
- **$R_D$:** coefficient $R_D$. Referred: $\dfrac{I_{nD}(1 + g_{m2}R_S)}{g_{m1}g_{m2}R_S}$, so
$$\overline{V_{n,in}^2}\Big|_{R_D} = \frac{4kT}{R_D}\cdot\frac{(1 + g_{m2}R_S)^2}{(g_{m1}g_{m2}R_S)^2} = \frac{4kT(1 + g_{m2}R_S)^2}{g_{m1}^2g_{m2}^2R_S^2R_D}.$$

### Step 6 — Total

The four sources are uncorrelated, so their input-referred powers add:

$$\overline{V_{n,in}^2} = 4kT\left[\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_S} + \frac{\gamma}{g_{m1}^2g_{m2}R_S^2} + \frac{(1 + g_{m2}R_S)^2}{g_{m1}^2g_{m2}^2R_S^2R_D}\right].$$

**Check.** For $R_S \to \infty$ (an ideal current source in its place), the second and third terms vanish and the last becomes $1/(g_{m1}^2R_D)$, giving $4kT\left[\gamma/g_{m1} + 1/(g_{m1}^2R_D)\right]$: the simple common-source stage with load $R_D$, as expected for an ideal folded cascode.

### Result

$$\overline{V_{n,in}^2} = 4kT\left[\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_S} + \frac{\gamma}{g_{m1}^2g_{m2}R_S^2} + \frac{(1+g_{m2}R_S)^2}{g_{m1}^2g_{m2}^2R_S^2R_D}\right]$$

with gain $A_v = -g_{m1}R_D\,\dfrac{g_{m2}R_S}{1 + g_{m2}R_S}$. The four terms come from $M_1$, $R_S$, $M_2$ and $R_D$, in that order.

**Common mistake.** Treating $R_S$ as a degeneration resistor of $M_1$, or as noiseless. $R_S$ supplies $M_1$'s bias current at X, and its noise current enters X exactly like $M_1$'s signal current, so it refers to the input as $4kT/(g_{m1}^2R_S)$.

**Common mistake.** Taking the gain as $g_{m1}R_D$, ignoring the current divider at X. Only the fraction $g_{m2}R_S/(1 + g_{m2}R_S)$ of $M_1$'s signal current reaches the output, and this factor enters how the $R_D$ and $M_2$ noise are referred.

**Common mistake.** Dropping $M_2$ because "a cascode device adds no noise". That holds only when its source sees an infinite impedance; with the finite $R_S$ at X, a fraction $1/(1 + g_{m2}R_S)$ of $M_2$'s noise current reaches the output.
