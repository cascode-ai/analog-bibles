# Detailed solution - R198

**Approach.** Use the differential half circuit: the tail node P is a virtual ground, so each side is a common-source stage, $M_1$, loaded by the PMOS current source $M_3$. $M_3$ is **degenerated** by $R_1$ in its source, and its source is not at its bulk potential, so we derive its output resistance including body effect. The gain is then $-g_{m1}$ times the parallel combination of $r_{O1}$ and that output resistance.

### Step 1 — Reading the circuit

From the figure:

- $M_1$, $M_2$: NMOS input pair, sources joined at node P, tail transistor $M_5$ (gate at $V_{b1}$). NMOS bulks are at ground.
- $M_3$, $M_4$: PMOS with gates at the fixed bias $V_{b2}$. The source of $M_3$ connects to $V_{DD}$ through $R_1$ (and $M_4$ through $R_2 = R_1$). PMOS bulks are at $V_{DD}$.
- X is the left output (drain of $M_1$ and $M_3$) and Y the right output. $V_{out} = V_X - V_Y$.

**Small-signal parameters:** $g_{m}$ (transconductance), $g_{mb}$ (body transconductance), $r_O$ (output resistance) of each device.

### Step 2 — The differential half circuit

For a differential input $v_{in1} = +v_d/2$, $v_{in2} = -v_d/2$, symmetry gives $v_Y = -v_X$. The signal currents of $M_1$ and $M_2$ into P are equal and opposite, so P does not move: it is a **virtual ground**. Each half is therefore a common-source amplifier.

- $M_1$: gate at $v_d/2$, source at AC ground. Its bulk is also at ground, so $v_{bs1} = 0$ and body effect plays no role for $M_1$.
- Load: the drain of $M_3$. Its gate is at AC ground ($V_{b2}$ is a constant bias), its source connects to AC ground through $R_1$, and its bulk is at AC ground ($V_{DD}$).

The gain of the half circuit is

$$\frac{v_X}{v_d/2} = -g_{m1}\left(r_{O1}\parallel R_{out3}\right),$$

where $R_{out3}$ is the resistance seen looking into the drain of $M_3$.

### Step 3 — Output resistance of the degenerated PMOS, with body effect

**Model.** Apply a test voltage $v_x$ to the drain of $M_3$ and let $i_x$ flow into the drain. The small-signal model of a PMOS has the same form as that of an NMOS:

- a controlled current $g_{m3}v_{gs3}$ from drain to source;
- a body-effect current $g_{mb3}v_{bs3}$ from drain to source;
- $r_{O3}$ between drain and source.

The source node $s_3$ is connected to AC ground through $R_1$.

<!-- diagram: diagram-01.cir -->

**Source voltage.** No current enters the gate, so all of $i_x$ leaves the source through $R_1$ (Ohm's law):

$$v_{s3} = i_xR_1 .$$

**Gate–source and bulk–source voltages.** The gate and the bulk are both at AC ground:

$$v_{gs3} = 0 - v_{s3} = -i_xR_1, \qquad v_{bs3} = 0 - v_{s3} = -i_xR_1 .$$

**KCL at the drain.** $i_x$ splits between the two controlled sources and $r_{O3}$:

$$i_x = g_{m3}v_{gs3} + g_{mb3}v_{bs3} + \frac{v_x - v_{s3}}{r_{O3}} = -(g_{m3} + g_{mb3})R_1i_x + \frac{v_x - v_{s3}}{r_{O3}} .$$

**Solve for $v_x$.** Rearrange for the voltage across $r_{O3}$:

$$
\begin{aligned}
\frac{v_x - v_{s3}}{r_{O3}} &= i_x\left[1 + (g_{m3} + g_{mb3})R_1\right]\\
v_x - v_{s3} &= i_xr_{O3}\left[1 + (g_{m3} + g_{mb3})R_1\right]\\
v_x &= i_xR_1 + i_xr_{O3}\left[1 + (g_{m3} + g_{mb3})R_1\right].
\end{aligned}
$$

Therefore

$$R_{out3} = \frac{v_x}{i_x} = R_1 + r_{O3} + (g_{m3} + g_{mb3})\,r_{O3}R_1 .$$

*Why the body effect appears.* The bulk of $M_3$ is tied to $V_{DD}$, but its source sits at $V_{DD} - I_DR_1$. When the source moves by $v_{s3}$, the bulk–source voltage changes by $-v_{s3}$, and the device responds as if its gate had moved too, which adds $g_{mb3}$ to $g_{m3}$. Degeneration therefore multiplies $r_{O3}$ by about $1 + (g_{m3} + g_{mb3})R_1$. This is the same "local feedback" boost a cascode gives.

### Step 4 — The differential gain

Node X sees $r_{O1}$ (from $M_1$, to AC ground) in parallel with $R_{out3}$. KCL at X in the half circuit (the controlled current $g_{m1}v_d/2$ leaves X through $M_1$):

$$
\begin{aligned}
g_{m1}\frac{v_d}{2} + \frac{v_X}{r_{O1}\parallel R_{out3}} &= 0\\
v_X &= -g_{m1}\left(r_{O1}\parallel R_{out3}\right)\frac{v_d}{2}.
\end{aligned}
$$

With $v_Y = -v_X$, $v_{out} = v_X - v_Y = 2v_X$, so

$$A_v = \frac{v_{out}}{v_{in1} - v_{in2}} = -g_{m1}\left\{r_{O1}\,\Big\|\,\left[R_1 + r_{O3} + (g_{m3} + g_{mb3})r_{O3}R_1\right]\right\}.$$

**Approximation.** Usually $(g_{m3} + g_{mb3})R_1 \gg 1$ and $r_{O3} \gg R_1$, so $R_{out3} \approx (g_{m3} + g_{mb3})r_{O3}R_1$ and

$$A_v \approx -g_{m1}\left\{r_{O1}\parallel\left[(g_{m3} + g_{mb3})r_{O3}R_1\right]\right\}.$$

Since $R_{out3}$ is then much larger than $r_{O1}$, the gain approaches the intrinsic gain $g_{m1}r_{O1}$ of the input device.

*Numerical feel:* take $g_{m1} = 1$ mS, $r_{O1} = r_{O3} = 50\ \mathrm{k}\Omega$, $g_{m3} = 1$ mS, $g_{mb3} = 0.2$ mS and $R_1 = 2\ \mathrm{k}\Omega$:

$$
\begin{aligned}
R_{out3} &= 2 + 50 + (1.2\ \mathrm{mS})(50\ \mathrm{k}\Omega)(2\ \mathrm{k}\Omega) = 2 + 50 + 120 = 172\ \mathrm{k}\Omega,\\
r_{O1}\parallel R_{out3} &= \frac{50\times172}{50 + 172}\ \mathrm{k}\Omega = 38.7\ \mathrm{k}\Omega,\\
A_v &= -(1\ \mathrm{mS})(38.7\ \mathrm{k}\Omega) = -38.7,
\end{aligned}
$$

compared with $-(1\ \mathrm{mS})(25\ \mathrm{k}\Omega) = -25$ without degeneration.

### Result

$$A_v = \frac{V_{out}}{V_{in1} - V_{in2}} = -g_{m1}\left\{r_{O1}\,\Big\|\,\left[R_1 + r_{O3} + (g_{m3} + g_{mb3})r_{O3}R_1\right]\right\} \approx -g_{m1}\left\{r_{O1}\parallel\left[(g_{m3} + g_{mb3})r_{O3}R_1\right]\right\}.$$

$M_3$ (gate at the fixed $V_{b2}$) is a PMOS current source degenerated by $R_1$. Its output resistance includes the body effect, because its source sits below its $V_{DD}$-connected bulk. P is a virtual ground, so the half-circuit gain $-g_{m1}(r_{O1}\parallel R_{out3})$ is the differential gain.

**Common mistake.** Treating $R_1$ as a load resistor from the output to $V_{DD}$, which gives a gain of about $g_{m1}R_1$. $R_1$ is in the **source** of $M_3$. The output node is the drain of $M_3$, and degeneration *raises* the resistance seen there far above $R_1$.

**Common mistake.** Leaving out $g_{mb3}$. The PMOS bulk is at $V_{DD}$ while its source moves with the signal (by $i_xR_1$), so $v_{bs3} \ne 0$ and the body transconductance adds to $g_{m3}$ in the degeneration factor.

**Common mistake.** Dropping the lone "$+R_1$" term, or taking $R_{out3} = r_{O3}$ (missing the degeneration altogether). Also, $M_3$/$M_4$ are not diode-connected (their gates are at $V_{b2}$), so no $1/g_{m3}$ term belongs in the load.
