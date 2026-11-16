# Detailed solution - R115

**Approach.** $M_1$ is a common-gate (CG) amplifier: its gate is at a dc bias, the input drives its source, and the output is its drain. Its load is a PMOS cascode current source ($M_2$ on $M_3$). We first reduce the cascode to a single resistance $R_L$, then write Kirchhoff's current law (KCL) at the output with $M_1$'s small-signal model and solve for $v_{out}/v_{in}$.

### Step 1 — Reading the circuit

From the figure, from top to bottom:

- $M_3$: PMOS, source at $V_{DD}$, gate at the dc bias $V_{b3}$, drain at an internal node we call $P$.
- $M_2$: PMOS, source at $P$, gate at the dc bias $V_{b2}$, drain at $V_{out}$.
- $M_1$: NMOS, drain at $V_{out}$, gate at the dc bias $V_{b1}$, source driven directly by the ideal source $V_{in}$.

$V_{b1}$, $V_{b2}$, $V_{b3}$ and $V_{DD}$ are constant, so they are **ac grounds**. $V_{in}$ is an ideal voltage source, so the source of $M_1$ is driven with zero source resistance.

The problem gives $\gamma = 0$ (no body effect, even though the sources of $M_1$ and $M_2$ are not at their bulk potentials) and $\lambda \neq 0$. Here $g_{mi}$ is the transconductance of $M_i$ and $r_{Oi} \approx 1/(\lambda I_D)$ its output resistance due to channel-length modulation. All small-signal quantities are written in lower case.

### Step 2 — Resistance of the cascode load, $R_L$

Since nothing but $M_1$ and the load connects to the output, we can replace $M_2$–$M_3$ by the resistance $R_L$ seen looking up into the drain of $M_2$.

**Test setup.** Apply a test voltage $v_x$ at the output (with $M_1$ removed) and find the test current $i_x$ flowing into the drain of $M_2$, up through $M_2$ and $M_3$ to $V_{DD}$.

<!-- diagram: diagram-01.cir -->

**$M_3$.** Its gate ($V_{b3}$) and source ($V_{DD}$) are both at ac ground, so $v_{gs3} = 0$ and its controlled source is zero. It is just the resistor $r_{O3}$ from $P$ to ac ground. The current $i_x$ flows through it, so

$$v_P = i_xr_{O3}.$$

**$M_2$.** The small-signal model of a PMOS is the same as that of an NMOS: a current $g_mv_{gs}$ from drain to source, with $r_O$ from drain to source. The gate of $M_2$ is at ac ground and its source is at $P$, so $v_{gs2} = 0 - v_P = -v_P$. The drain-to-source current of $M_2$ is $i_x$:

$$i_x = g_{m2}v_{gs2} + \frac{v_{ds2}}{r_{O2}} = -g_{m2}v_P + \frac{v_x - v_P}{r_{O2}}.$$

**Solve.** Substitute $v_P = i_xr_{O3}$:

$$i_x = -g_{m2}r_{O3}\,i_x + \frac{v_x - i_xr_{O3}}{r_{O2}}.$$

Multiply by $r_{O2}$:

$$i_xr_{O2} = -g_{m2}r_{O2}r_{O3}\,i_x + v_x - i_xr_{O3}.$$

Collect the $i_x$ terms:

$$v_x = i_x\,(r_{O2} + r_{O3} + g_{m2}r_{O2}r_{O3}),$$

$$R_L = \frac{v_x}{i_x} = r_{O2} + r_{O3} + g_{m2}r_{O2}r_{O3} \approx g_{m2}r_{O2}r_{O3}.$$

The approximation uses $g_{m2}r_{O2} \gg 1$. The cascode multiplies $r_{O3}$ by roughly the intrinsic gain $g_{m2}r_{O2}$: if the current tries to change, $v_P$ moves, which changes $v_{gs2}$ in the direction that opposes the change.

### Step 3 — Small-signal model of the CG stage

With the load reduced to $R_L$, the small-signal circuit has the input node (in, forced to $v_{in}$ by the ideal source) and the output node (out):

- **$M_1$**: gate at ac ground, source at in, so $v_{gs1} = 0 - v_{in} = -v_{in}$. A controlled current source $g_{m1}v_{gs1} = -g_{m1}v_{in}$ flows from out (drain) to in (source), and $r_{O1}$ connects out and in.
- **Load**: $R_L$ from out to ac ground.

<!-- diagram: diagram-02.cir -->

### Step 4 — KCL at the output node

The sum of currents leaving the output node is zero. Current leaves through $R_L$ (toward ac ground) and through $M_1$ (controlled source plus $r_{O1}$, the latter carrying $v_{ds1}/r_{O1} = (v_{out} - v_{in})/r_{O1}$):

$$\frac{v_{out}}{R_L} + \left[-g_{m1}v_{in} + \frac{v_{out} - v_{in}}{r_{O1}}\right] = 0.$$

Expand and separate the $v_{out}$ and $v_{in}$ terms:

$$\frac{v_{out}}{R_L} + \frac{v_{out}}{r_{O1}} = g_{m1}v_{in} + \frac{v_{in}}{r_{O1}},$$

$$v_{out}\left(\frac{1}{R_L} + \frac{1}{r_{O1}}\right) = v_{in}\left(g_{m1} + \frac{1}{r_{O1}}\right).$$

Multiply both sides by $R_Lr_{O1}$:

$$v_{out}\,(r_{O1} + R_L) = v_{in}\,(1 + g_{m1}r_{O1})\,R_L.$$

So

$$A_v = \frac{v_{out}}{v_{in}} = \frac{(1 + g_{m1}r_{O1})\,R_L}{r_{O1} + R_L}.$$

The current $v_{in}/r_{O1}$ term is why the factor is $(1 + g_{m1}r_{O1})$ and not just $g_{m1}r_{O1}$: raising the source voltage both reduces $v_{gs1}$ (the $g_{m1}$ term) and changes $v_{ds1}$ (the $r_{O1}$ term), and both changes reduce the current $M_1$ draws from the output.

### Step 5 — Final expression and approximation

Substituting $R_L$ from Step 2:

$$A_v = \frac{(1 + g_{m1}r_{O1})\,(r_{O2} + r_{O3} + g_{m2}r_{O2}r_{O3})}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O2}r_{O3}}.$$

**Approximation.** The cascode resistance $R_L \approx g_{m2}r_{O2}r_{O3}$ is larger than $r_{O1}$ by roughly the factor $g_{m2}r_{O2} \gg 1$. Therefore $R_L/(r_{O1} + R_L) \approx 1$ and

$$A_v \approx 1 + g_{m1}r_{O1} \approx g_{m1}r_{O1}.$$

**Intuition.** With a nearly ideal current-source load, the current through $M_1$ can hardly change. If $v_{in}$ rises by $\Delta v$, $v_{gs1}$ falls by $\Delta v$, which alone would reduce the current by $g_{m1}\Delta v$. To keep the current constant, $v_{ds1}$ must rise by $g_{m1}r_{O1}\Delta v$, so the drain moves by $(1 + g_{m1}r_{O1})\Delta v$, in the same direction as the input. The CG stage is therefore **non-inverting**, and its gain is close to the intrinsic gain of $M_1$.

### Result

$$A_v = \frac{(1 + g_{m1}r_{O1})\,R_L}{r_{O1} + R_L},\qquad R_L = r_{O2} + r_{O3} + g_{m2}r_{O2}r_{O3},$$

a positive (non-inverting) gain. Because $R_L \gg r_{O1}$, $A_v \approx 1 + g_{m1}r_{O1}$.

**Common mistake.** Taking the load as $r_{O3}$ (or $r_{O2}$) alone, i.e. ignoring the cascode. Looking into the drain of $M_2$, whose source is degenerated by $r_{O3}$, gives $r_{O2} + r_{O3} + g_{m2}r_{O2}r_{O3}$, about $g_{m2}r_{O2}$ times larger than $r_{O3}$. With $R_L = r_{O3}$ the gain would be only about $(1 + g_{m1}r_{O1})r_{O3}/(r_{O1} + r_{O3})$, roughly half the correct value for similar $r_O$'s.

**Common mistake.** Giving the gain a negative sign, or reading $M_1$ as a common-source device. The input drives the *source* of $M_1$, while the gate is at ac ground. Raising the source lowers $v_{gs1}$, which reduces the current drawn from the output, so the output rises: the stage is non-inverting.

**Common mistake.** Writing $A_v = g_{m1}R_L$ (the textbook CG gain for $r_{O1} = \infty$). With a load as large as $R_L \approx g_{m2}r_{O2}r_{O3}$, $r_{O1}$ can no longer be ignored: it appears in parallel with the load and limits the gain to about $1 + g_{m1}r_{O1}$, far below $g_{m1}R_L$.
