# Detailed solution - R115

**Approach.** $M_1$ is a common-gate (CG) stage (gate at a dc bias, input at its source, output at its drain) loaded by the PMOS cascode $M_2$–$M_3$. Reduce the cascode to a single resistance $R_L$, then write KCL at the output and solve for $v_{out}/v_{in}$.

### Step 1 — Resistance of the cascode load, $R_L$

Call the node between $M_3$ and $M_2$ node $P$. The bias voltages and $V_{DD}$ are ac grounds, and $\gamma = 0$. Apply a test voltage $v_x$ at the output (with $M_1$ removed) and find the current $i_x$ flowing up into the drain of $M_2$ and through $M_3$ to $V_{DD}$.

<!-- diagram: diagram-01.cir -->

$M_3$ has $v_{gs3} = 0$, so it is just $r_{O3}$ from $P$ to ac ground, and $v_P = i_xr_{O3}$. For $M_2$, $v_{gs2} = 0 - v_P = -v_P$, and its drain-to-source current is $i_x$:

$$i_x = g_{m2}v_{gs2} + \frac{v_{ds2}}{r_{O2}} = -g_{m2}v_P + \frac{v_x - v_P}{r_{O2}}.$$

Substituting $v_P = i_xr_{O3}$ and multiplying by $r_{O2}$:

$$i_xr_{O2} = -g_{m2}r_{O2}r_{O3}\,i_x + v_x - i_xr_{O3},$$

$$R_L = \frac{v_x}{i_x} = r_{O2} + r_{O3} + g_{m2}r_{O2}r_{O3} \approx g_{m2}r_{O2}r_{O3}\quad(g_{m2}r_{O2} \gg 1).$$

The cascode multiplies $r_{O3}$ by roughly the intrinsic gain $g_{m2}r_{O2}$.

### Step 2 — Small-signal model of the CG stage

The ideal source forces the source of $M_1$ to $v_{in}$. The gate of $M_1$ is at ac ground, so $v_{gs1} = -v_{in}$: a controlled source $g_{m1}v_{gs1} = -g_{m1}v_{in}$ flows from out (drain) to in (source), with $r_{O1}$ between out and in. The load is $R_L$ from out to ac ground.

<!-- diagram: diagram-02.cir -->

### Step 3 — KCL at the output node

Current leaves the output through $R_L$ and through $M_1$, whose $r_{O1}$ carries $(v_{out} - v_{in})/r_{O1}$:

$$\frac{v_{out}}{R_L} + \left[-g_{m1}v_{in} + \frac{v_{out} - v_{in}}{r_{O1}}\right] = 0.$$

Separating the $v_{out}$ and $v_{in}$ terms:

$$v_{out}\left(\frac{1}{R_L} + \frac{1}{r_{O1}}\right) = v_{in}\left(g_{m1} + \frac{1}{r_{O1}}\right).$$

Multiplying both sides by $R_Lr_{O1}$:

$$v_{out}\,(r_{O1} + R_L) = v_{in}\,(1 + g_{m1}r_{O1})\,R_L,$$

$$A_v = \frac{v_{out}}{v_{in}} = \frac{(1 + g_{m1}r_{O1})\,R_L}{r_{O1} + R_L}.$$

The factor is $(1 + g_{m1}r_{O1})$, not $g_{m1}r_{O1}$, because raising the source both lowers $v_{gs1}$ and changes $v_{ds1}$, and both reduce the current $M_1$ draws from the output.

### Step 4 — Final expression and approximation

Substituting $R_L$ from Step 1:

$$A_v = \frac{(1 + g_{m1}r_{O1})\,(r_{O2} + r_{O3} + g_{m2}r_{O2}r_{O3})}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O2}r_{O3}}.$$

$R_L \approx g_{m2}r_{O2}r_{O3}$ exceeds $r_{O1}$ by roughly $g_{m2}r_{O2} \gg 1$, so $R_L/(r_{O1} + R_L) \approx 1$ and

$$A_v \approx 1 + g_{m1}r_{O1} \approx g_{m1}r_{O1}.$$

**Intuition.** With a nearly ideal current-source load, $M_1$'s current can hardly change. If $v_{in}$ rises by $\Delta v$, $v_{gs1}$ falls by $\Delta v$; to keep the current constant, $v_{ds1}$ must rise by $g_{m1}r_{O1}\Delta v$, so the drain moves by $(1 + g_{m1}r_{O1})\Delta v$ in the same direction as the input. The stage is **non-inverting**, with a gain close to the intrinsic gain of $M_1$.

### Result

$$A_v = \frac{(1 + g_{m1}r_{O1})\,R_L}{r_{O1} + R_L},\qquad R_L = r_{O2} + r_{O3} + g_{m2}r_{O2}r_{O3},$$

a positive (non-inverting) gain. Because $R_L \gg r_{O1}$, $A_v \approx 1 + g_{m1}r_{O1}$.

**Common mistake.** Taking the load as $r_{O3}$ (or $r_{O2}$) alone, ignoring the cascode. That gives only about $(1 + g_{m1}r_{O1})r_{O3}/(r_{O1} + r_{O3})$, roughly half the correct value for similar $r_O$'s.

**Common mistake.** A negative gain, or reading $M_1$ as a common-source device. The input drives the *source* of $M_1$: raising it lowers $v_{gs1}$ and the current drawn from the output, so the output rises.

**Common mistake.** Writing $A_v = g_{m1}R_L$ (the CG gain for $r_{O1} = \infty$). With a load as large as $R_L \approx g_{m2}r_{O2}r_{O3}$, $r_{O1}$ limits the gain to about $1 + g_{m1}r_{O1}$, far below $g_{m1}R_L$.
