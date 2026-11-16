# Detailed solution - R631

**Approach.** First check the operating region of $M_3$: the source follower places its gate one $V_{GS5}$ below its drain, which keeps $M_3$ just at the edge of saturation, so its saturation transconductance applies. Then apply a small test voltage at X and compute the current the load draws. The follower copies the voltage at X onto the gate of $M_3$ with unity gain, so $M_3$ responds exactly as a diode-connected PMOS would, and the resistance is $1/g_{m3}$.

### Step 1 — The composite load

Reading the figure, on the left side (the right side is identical):

- $M_3$ is a PMOS with its source at $V_{DD}$ and its drain at node X (the output node, which is also the drain of input device $M_1$).
- $M_5$ is an NMOS source follower: gate at X, drain at $V_{DD}$, source connected to the gate of $M_3$ and biased by an ideal current source to ground.

So the gate of $M_3$ is driven from its own drain through the follower:

$$V_{G3} = V_X - V_{GS5}.$$

A plain diode-connected PMOS would have $V_{G3} = V_X$. The follower shifts the gate down by $V_{GS5}$.

### Step 2 — Operating region of $M_3$

Terminal voltages of $M_3$, written as positive quantities for a PMOS:

$$
\begin{aligned}
|V_{GS3}| &= V_{DD} - V_{G3} = V_{DD} - V_X + V_{GS5},\\
|V_{DS3}| &= V_{DD} - V_X = |V_{GS3}| - V_{GS5}.
\end{aligned}
$$

**Saturation condition.** The drain–source voltage must be at least the overdrive voltage:

$$|V_{DS3}| \ge |V_{GS3}| - |V_{TH3}| .$$

Substitute $|V_{DS3}| = |V_{GS3}| - V_{GS5}$:

$$|V_{GS3}| - V_{GS5} \ge |V_{GS3}| - |V_{TH3}| \quad\Longrightarrow\quad V_{GS5} \le |V_{TH3}| .$$

With $V_{GS5} \approx |V_{TH3}|$, the inequality is just met: $M_3$ operates **at the edge of the triode region**, still in saturation. Its small-signal behaviour is therefore described by the saturation transconductance $g_{m3}$ and, since $\lambda = 0$, an infinite output resistance $r_{O3}$.

**Why this matters.** In saturation, the drain current of $M_3$ depends only on $V_{SG3}$, not on $V_{SD3}$. If $M_3$ were in deep triode, its current would also depend strongly on $V_{DS3}$, and a different model would be needed.

### Step 3 — Small-signal model

Apply a small test voltage $v_x$ at X and find the current $i_x$ flowing from the test source into the load. With $\lambda = \gamma = 0$:

- **$M_5$:** drain at AC ground ($V_{DD}$), gate at $v_x$, source at node $s_5$ (the gate of $M_3$). It is a controlled source $g_{m5}(v_x - v_{s5})$ from $V_{DD}$ into $s_5$. The ideal bias current source is an open circuit for small signals.
- **$M_3$:** source at AC ground ($V_{DD}$), gate at $s_5$, drain at X. It is a controlled source $g_{m3}v_{sg3} = g_{m3}(0 - v_{s5})$ from $V_{DD}$ into X.

<!-- diagram: diagram-01.cir -->

### Step 4 — The follower transfers $v_x$ to the gate of $M_3$

**KCL at node $s_5$.** The current entering $s_5$ from $M_5$ must leave through the other elements at that node. The only ones are the ideal current source (no small-signal current) and the gate of $M_3$ (no current). Therefore

$$g_{m5}(v_x - v_{s5}) = 0 \quad\Longrightarrow\quad v_{s5} = v_x .$$

The follower has **exactly unity gain**. Its current is pinned by the ideal current source, so its $V_{GS}$ cannot change, and its source follows its gate exactly. Hence $v_{g3} = v_{s5} = v_x$.

### Step 5 — Current drawn by the load

The small-signal source–gate voltage of $M_3$ is

$$v_{sg3} = v_{s3} - v_{g3} = 0 - v_x = -v_x .$$

The current $M_3$ delivers from $V_{DD}$ into X is

$$i_{d3} = g_{m3}v_{sg3} = -g_{m3}v_x .$$

The test current $i_x$ flowing from the source into node X and into the load is the negative of the current the load delivers into X. The gate of $M_5$ draws nothing, and the drain current of $M_5$ comes from $V_{DD}$, not from X. So

$$i_x = -i_{d3} = g_{m3}v_x .$$

The small-signal resistance seen at X is

$$R_X = \frac{v_x}{i_x} = \frac{1}{g_{m3}} .$$

**Interpretation.** Raising X by $v_x$ raises the gate of $M_3$ by the same amount, reducing its source–gate voltage and its current by $g_{m3}v_x$, exactly as in a diode-connected PMOS. The load is therefore an "almost diode-connected" device with resistance $1/g_{m3}$.

### Step 6 — The benefit, and the effect of non-idealities

**Headroom.** A diode-connected PMOS takes a drop of $|V_{GS3}| = |V_{TH3}| + |V_{ov3}|$ from the supply. In the composite load, $M_3$ takes only

$$|V_{DS3}| = |V_{GS3}| - V_{GS5} \approx |V_{GS3}| - |V_{TH3}| = |V_{ov3}|,$$

i.e. about one overdrive voltage. The output node can sit roughly $|V_{TH3}|$ higher, leaving more voltage for the input pair and the tail source, with the same low, well-defined load resistance $1/g_{m3}$.

**With $\gamma \neq 0$ or $\lambda \neq 0$.** The follower gain becomes $A_{SF} = g_{m5}/(g_{m5} + g_{mb5}) < 1$, where $g_{mb5}$ is the body transconductance, and $r_{O3}$ appears in parallel. Then

$$R_X = r_{O3} \parallel \frac{1}{A_{SF}\,g_{m3}} \approx \left(1 + \frac{g_{mb5}}{g_{m5}}\right)\frac{1}{g_{m3}} \parallel r_{O3},$$

which is still close to $1/g_{m3}$. Each side's follower senses only its own node, so the load presents $1/g_{m3}$ to both differential and common-mode signals.

### Result

With $V_{GS5} \approx |V_{TH3}|$, $M_3$ sits at the edge of saturation ($|V_{DS3}| = |V_{GS3}| - V_{GS5}$). The source follower, biased by an ideal current source, has unity gain ($v_{g3} = v_x$), so a test voltage $v_x$ at X changes the current of $M_3$ by $g_{m3}v_x$:

$$R_{load} = \frac{v_x}{i_x} = \frac{1}{g_{m3}} .$$

More generally the load is $r_{O3} \parallel 1/(A_{SF}g_{m3})$ with follower gain $A_{SF} \approx 1$, still roughly $1/g_{m3}$. The load behaves like a diode-connected PMOS but consumes only about one overdrive voltage of headroom.

**Common mistake.** Giving the resistance as $1/g_{m5}$ or $1/(g_{m3} + g_{m5})$. $M_5$ does not carry the signal current from X: its gate draws no current and its drain is tied to $V_{DD}$. It only copies the voltage at X onto the gate of $M_3$.

**Common mistake.** Treating $M_3$ as a triode resistor (its on-resistance) or as a current source with resistance $r_{O3}$. The follower moves the gate of $M_3$ together with its drain, so $M_3$ responds through its transconductance, as a diode-connected device does. Since $V_{GS5} \le |V_{TH3}|$, it remains in saturation.

**Common mistake.** Assuming the follower inverts, or connecting its gate to the wrong node. The source follower is non-inverting with gain close to 1, so an increase at X *reduces* $|V_{GS3}|$ and the current of $M_3$, which is what makes the load resistive.
