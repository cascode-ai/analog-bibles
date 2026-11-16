# Detailed solution - R631

**Approach.** First check the region of $M_3$: the source follower places its gate one $V_{GS5}$ below its drain, which keeps $M_3$ just at the edge of saturation, so its saturation transconductance applies. Then apply a small test voltage at X: the follower copies it onto the gate of $M_3$ with unity gain, so $M_3$ responds exactly like a diode-connected PMOS, with resistance $1/g_{m3}$.

### Step 1 — Operating region of $M_3$

The follower $M_5$ (gate at X) drives the gate of $M_3$, so $V_{G3} = V_X - V_{GS5}$ instead of the diode connection's $V_{G3} = V_X$. With $M_3$'s source at $V_{DD}$:

$$
\begin{aligned}
|V_{GS3}| &= V_{DD} - V_{G3} = V_{DD} - V_X + V_{GS5},\\
|V_{DS3}| &= V_{DD} - V_X = |V_{GS3}| - V_{GS5}.
\end{aligned}
$$

Saturation requires $|V_{DS3}| \ge |V_{GS3}| - |V_{TH3}|$, i.e.

$$|V_{GS3}| - V_{GS5} \ge |V_{GS3}| - |V_{TH3}| \quad\Longrightarrow\quad V_{GS5} \le |V_{TH3}| .$$

With $V_{GS5} \approx |V_{TH3}|$ this is just met: $M_3$ is **at the edge of the triode region**, still saturated, so it is described by $g_{m3}$ and (with $\lambda = 0$) an infinite $r_{O3}$.

### Step 2 — Small-signal model

Apply a test voltage $v_x$ at X and find the current $i_x$ flowing from the test source into the load. With $\lambda = \gamma = 0$:

- **$M_5$:** drain at ac ground, gate at $v_x$, source at node $s_5$ (the gate of $M_3$): a controlled source $g_{m5}(v_x - v_{s5})$ from $V_{DD}$ into $s_5$. The ideal bias current source is an open circuit.
- **$M_3$:** source at ac ground, gate at $s_5$, drain at X: a controlled source $g_{m3}v_{sg3} = g_{m3}(0 - v_{s5})$ from $V_{DD}$ into X.

<!-- diagram: diagram-01.cir -->

### Step 3 — The follower transfers $v_x$ to the gate of $M_3$

At node $s_5$ the only other elements are the ideal current source and the gate of $M_3$, neither of which carries small-signal current, so KCL gives

$$g_{m5}(v_x - v_{s5}) = 0 \quad\Longrightarrow\quad v_{s5} = v_x .$$

The follower's current is pinned, so its $V_{GS}$ cannot change: it has **exactly unity gain**, and $v_{g3} = v_{s5} = v_x$.

### Step 4 — Current drawn by the load

$$v_{sg3} = v_{s3} - v_{g3} = 0 - v_x = -v_x, \qquad i_{d3} = g_{m3}v_{sg3} = -g_{m3}v_x ,$$

where $i_{d3}$ flows from $V_{DD}$ into X. The gate of $M_5$ draws nothing and its drain current comes from $V_{DD}$, so the test current is

$$i_x = -i_{d3} = g_{m3}v_x ,$$

and the resistance seen at X is

$$R_X = \frac{v_x}{i_x} = \frac{1}{g_{m3}} .$$

Raising X raises the gate of $M_3$ by the same amount, cutting its current by $g_{m3}v_x$, exactly as in a diode-connected PMOS.

### Step 5 — The benefit, and the effect of non-idealities

**Headroom.** A diode-connected PMOS drops $|V_{GS3}| = |V_{TH3}| + |V_{ov3}|$; here $M_3$ takes only

$$|V_{DS3}| = |V_{GS3}| - V_{GS5} \approx |V_{GS3}| - |V_{TH3}| = |V_{ov3}|,$$

about one overdrive, so the output can sit roughly $|V_{TH3}|$ higher with the same load resistance $1/g_{m3}$.

**With $\gamma \neq 0$ or $\lambda \neq 0$.** The follower gain becomes $A_{SF} = g_{m5}/(g_{m5} + g_{mb5}) < 1$ and $r_{O3}$ appears in parallel:

$$R_X = r_{O3} \parallel \frac{1}{A_{SF}\,g_{m3}} \approx \left(1 + \frac{g_{mb5}}{g_{m5}}\right)\frac{1}{g_{m3}} \parallel r_{O3},$$

still close to $1/g_{m3}$. Each follower senses only its own node, so the load presents $1/g_{m3}$ to both differential and common-mode signals.

### Result

With $V_{GS5} \approx |V_{TH3}|$, $M_3$ sits at the edge of saturation ($|V_{DS3}| = |V_{GS3}| - V_{GS5}$). The source follower, biased by an ideal current source, has unity gain ($v_{g3} = v_x$), so a test voltage $v_x$ at X changes the current of $M_3$ by $g_{m3}v_x$:

$$R_{load} = \frac{v_x}{i_x} = \frac{1}{g_{m3}} .$$

More generally the load is $r_{O3} \parallel 1/(A_{SF}g_{m3})$ with follower gain $A_{SF} \approx 1$, still roughly $1/g_{m3}$. The load behaves like a diode-connected PMOS but consumes only about one overdrive voltage of headroom.

**Common mistake.** Giving the resistance as $1/g_{m5}$ or $1/(g_{m3} + g_{m5})$. $M_5$ carries no signal current from X (gate draws nothing, drain at $V_{DD}$); it only copies the voltage at X onto the gate of $M_3$.

**Common mistake.** Treating $M_3$ as a triode resistor or as a current source with resistance $r_{O3}$. The follower moves the gate of $M_3$ with its drain, so $M_3$ responds through its transconductance, and since $V_{GS5} \le |V_{TH3}|$ it remains saturated.

**Common mistake.** Assuming the follower inverts. It is non-inverting with gain close to 1, so an increase at X *reduces* $|V_{GS3}|$ and the current of $M_3$, which is what makes the load resistive.
