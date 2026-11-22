# Detailed solution - A101

Replace the pnp by its hybrid-π model, set $V_{DD}$ to ac ground, apply a test voltage $v_{out}$ at $V_{REF}$ and find the current it supplies. $R$ simply appears in parallel with the transistor–divider combination, whose resistance follows from one KCL equation at the base.

### Step 1 — Small-signal circuit

With $V_{DD}$ grounded for ac, $R$ connects $V_{REF}$ to ground. The pnp is in the forward-active region; its collector is grounded, so it is described by $r_\pi$ between base and emitter and a controlled current $g_mv_{eb}$ from emitter to collector, where $v_{eb}$ is the emitter–base signal voltage ($r_o$ is neglected).

At the output node, $R_1$ and $r_\pi$ both connect the emitter ($v_{out}$) to the base, so both carry $v_{eb}$; $R_2$ connects the base (at $v_{out}-v_{eb}$) to ground.

### Step 2 — Emitter–base voltage from the base node

KCL at the base: the currents arriving through $R_1$ and $r_\pi$ leave through $R_2$,

$$
\frac{v_{eb}}{R_1}+\frac{v_{eb}}{r_\pi}=\frac{v_{out}-v_{eb}}{R_2}
\quad\Rightarrow\quad
v_{eb}=\frac{v_{out}}{R_2\left(\dfrac1{R_1}+\dfrac1{r_\pi}+\dfrac1{R_2}\right)} .
$$

### Step 3 — Current drawn by the transistor and divider

The test source supplies the current into $R_1$ plus the emitter current. The emitter current is the collector current plus the base current through $r_\pi$, $g_mv_{eb}+v_{eb}/r_\pi=g_m(1+1/\beta)v_{eb}$ with $\beta=g_mr_\pi$:

$$
i_t=\left[\frac1{R_1}+g_m\left(1+\frac1\beta\right)\right]v_{eb} .
$$

Substituting $v_{eb}$ and multiplying numerator and denominator by $R_1$,

$$
\frac{v_{out}}{i_t}=\frac{R_2\left(\dfrac1{R_1}+\dfrac1{r_\pi}+\dfrac1{R_2}\right)}{\dfrac1{R_1}+g_m\left(1+\dfrac1\beta\right)}
=\frac{R_1+R_2+R_1R_2/r_\pi}{1+g_mR_1(1+1/\beta)} .
$$

### Step 4 — Output resistance and its approximation

Adding $R$ in parallel,

$$
r_{out}=R\,\Big\|\,\frac{R_1+R_2+R_1R_2/r_\pi}{1+g_mR_1(1+1/\beta)} .
$$

For large $\beta$ ($r_\pi\gg R_2$, and $1/\beta\ll1$) the base current no longer loads the divider and $v_{eb}=v_{out}R_1/(R_1+R_2)$. If also $g_mR_1\gg1$,

$$
r_{out}\approx R\,\Big\|\,\frac{R_1+R_2}{1+g_mR_1}\approx\frac1{g_m}\left(1+\frac{R_2}{R_1}\right)=\frac1{g_m}\frac{V_{REF}}{V_{EB}} ,
$$

since the divider sets $V_{REF}=V_{EB}(1+R_2/R_1)$. This is the "$V_{BE}$ multiplier" result: the diode resistance $1/g_m$ multiplied by the same factor as the voltage. $R$ is normally much larger and has little effect. A small $\beta$ raises $r_{out}$ through the term $R_1R_2/r_\pi$, because $r_\pi$ loads the base node and reduces $v_{eb}$ for a given $v_{out}$.
