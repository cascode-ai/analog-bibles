# Detailed solution - A237

The output resistance can be cut far below $r_{ds}$ by negative feedback that samples the output voltage. With one transistor, the strongest choice is a common-gate device that senses $v_{out}$ at its source and returns a current to the input X of the second inverter, so that the loop gain contains the gain of the second inverter. Compute the unmodified value first, then the test-source current of the modified circuit.

### Step 1 — Unmodified output resistance

In Class AB both M3 and M4 are saturated. With the input at ac ground, X is fixed, so $v_{gs3}=v_{gs4}=0$ and the output sees only the two output resistances:

$$
R_{out}=r_{ds3}\parallel r_{ds4}=\frac{r_{ds}}{2}.
$$

### Step 2 — Adding the common-gate feedback transistor

Connect an n-channel M5 with its source at $v_{out}$, its gate at a battery $V_B$ (ac ground) and its drain at X. An ideal current source $I_B$ from $V_{DD}$ into X supplies M5's bias current, and the battery sets the dc output level, $V_{OUT}=V_B-V_{GS5}$.

<!-- diagram: diagram-01.cir -->

Check the loop polarity. A rise of $v_{out}$ lowers $V_{GS5}$ and reduces M5's current by $g_mv_{out}$. Because $I_B$ is fixed, this extra current $g_mv_{out}$ flows into X, whose resistance is $r_{ds1}\parallel r_{ds2}=r_{ds}/2$:

$$
v_X=g_mv_{out}\frac{r_{ds}}{2}.
$$

The second inverter, with both devices active and total transconductance $2g_m$, then draws $2g_mv_X$ out of the output, pulling it back down. The feedback is negative.

### Step 3 — Output resistance with feedback

Apply $v_x$ at the output (input at ac ground) and add the currents it must supply:

- through $r_{ds3}\parallel r_{ds4}$: $2v_x/r_{ds}$;
- into M5's source: $g_mv_x$ (common-gate input conductance, $r_{ds5}$ neglected);
- into the second inverter: $2g_mv_X=2g_m\cdot g_mv_x\,r_{ds}/2=g_m^2r_{ds}v_x$.

$$
i_x=v_x\Big(g_m^2r_{ds}+g_m+\frac{2}{r_{ds}}\Big)
\quad\Rightarrow\quad
R_{out}=\frac{1}{g_m^2r_{ds}+g_m+2/r_{ds}}\approx\frac{1}{g_m^2r_{ds}} .
$$

This is $g_mr_{ds}$ times smaller than $1/g_m$, and about $(g_mr_{ds})^2/2$ times smaller than the unmodified $r_{ds}/2$. The same feedback also acts on the signal: the overall voltage gain drops to about $+2$ (M5 forces the current $g_m v_{out}$ to balance the first inverter's $2g_mv_{in}$).

### Step 4 — Other one-transistor options

Simpler connections also work but give larger values:

- **Source-follower buffer**: M5 with its gate at the second inverter's output, an ideal current-source load, and the new output at its source. $R_{out}\approx1/(g_m+g_{mbs})\approx1/g_m$, and the voltage gain is preserved.
- **Resistive shunt feedback**: M5 biased in nonsaturation by a battery on its gate and connected between $v_{out}$ and X as a resistor. With feedback factor near 1, $R_{out}\approx1/(2g_m)$.

The common-gate feedback of Step 2 gives the smallest output resistance, $R_{out}\approx1/(g_m^2r_{ds})$.
