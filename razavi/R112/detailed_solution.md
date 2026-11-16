# Detailed solution - R112

**Approach.** Replace each transistor by its small-signal model (a controlled current source $g_m v_{gs}$ in parallel with the output resistance $r_O$), write Kirchhoff's current law (KCL) at the output node, and solve for $v_{out}/v_{in}$. We then check the result by superposition: the circuit is a common-source stage ($M_1$) and a source follower ($M_2$) driven by the same input.

### Step 1 — Reading the circuit

From the figure:

- $M_1$ is an NMOS with its gate at $V_{in}$, its source at ground and its drain at $V_{out}$.
- $M_2$ is also an NMOS (the arrow on its source points outward). Its drain is at $V_{DD}$, its source is at $V_{out}$, and its gate is **also** connected to $V_{in}$.
- Nothing else is connected to $V_{out}$, so the output is unloaded.

So the output node is simultaneously the drain of $M_1$ and the source of $M_2$. Seen from $M_1$, the circuit is a common-source (CS) amplifier; seen from $M_2$, it is a source follower. Both are driven by the same input voltage.

The problem gives $\gamma = 0$, so there is no body effect (no $g_{mb}$ source), and $\lambda \neq 0$, so each transistor has a finite output resistance $r_O$. Here $\lambda$ is the channel-length modulation coefficient, $g_m$ is the transconductance, and $r_O \approx 1/(\lambda I_D)$ is the small-signal drain–source resistance.

### Step 2 — Small-signal model

$V_{DD}$ is a constant supply, so it is an **ac ground**: its small-signal voltage is zero. Lower-case symbols ($v_{in}$, $v_{out}$, ...) denote small-signal quantities.

The small-signal circuit has two non-ground nodes, the input (in) and the output (out):

- **$M_1$**: gate–source voltage $v_{gs1} = v_{in} - 0 = v_{in}$. It contributes a controlled current source $g_{m1}v_{gs1} = g_{m1}v_{in}$ flowing from out (drain) to ground (source), with $r_{O1}$ in parallel between out and ground.
- **$M_2$**: gate–source voltage $v_{gs2} = v_{in} - v_{out}$ (the source is the output node, which moves). Its drain is at ac ground, so it contributes a controlled current source $g_{m2}(v_{in} - v_{out})$ flowing from ground (drain) into out (source), with $r_{O2}$ in parallel between ground and out.

<!-- diagram: diagram-01.cir -->

In words: the output node is connected to ground through $r_{O1}$ and through $r_{O2}$, $M_1$'s source pulls current $g_{m1}v_{in}$ out of the node, and $M_2$'s source pushes current $g_{m2}(v_{in} - v_{out})$ into it.

**Small-signal drain currents.** Each transistor's drain current is its controlled source plus the current in its $r_O$ (which carries $v_{ds}/r_O$):

$$i_{D1}\ (\text{out}\to\text{ground}) = g_{m1}v_{in} + \frac{v_{out}}{r_{O1}},$$

$$i_{D2}\ (V_{DD}\to\text{out}) = g_{m2}(v_{in} - v_{out}) + \frac{0 - v_{out}}{r_{O2}} = g_{m2}(v_{in} - v_{out}) - \frac{v_{out}}{r_{O2}}.$$

For $M_2$, $v_{ds2} = v_d - v_s = 0 - v_{out}$, which is why its $r_O$ term is $-v_{out}/r_{O2}$.

### Step 3 — KCL at the output node

The output is unloaded, so the current that $M_2$ delivers into the output node must all leave through $M_1$:

$$i_{D2} = i_{D1}.$$

Substitute the two expressions:

$$g_{m2}(v_{in} - v_{out}) - \frac{v_{out}}{r_{O2}} = g_{m1}v_{in} + \frac{v_{out}}{r_{O1}}.$$

Expand the left side:

$$g_{m2}v_{in} - g_{m2}v_{out} - \frac{v_{out}}{r_{O2}} = g_{m1}v_{in} + \frac{v_{out}}{r_{O1}}.$$

Move all $v_{in}$ terms to the left and all $v_{out}$ terms to the right:

$$g_{m2}v_{in} - g_{m1}v_{in} = g_{m2}v_{out} + \frac{v_{out}}{r_{O1}} + \frac{v_{out}}{r_{O2}}.$$

Factor:

$$(g_{m2} - g_{m1})\,v_{in} = \left(g_{m2} + \frac{1}{r_{O1}} + \frac{1}{r_{O2}}\right)v_{out}.$$

Divide to get the gain:

$$A_v = \frac{v_{out}}{v_{in}} = \frac{g_{m2} - g_{m1}}{g_{m2} + \dfrac{1}{r_{O1}} + \dfrac{1}{r_{O2}}}.$$

### Step 4 — Writing the gain in standard forms

The denominator is a sum of conductances: $g_{m2}$ (a conductance $1/(1/g_{m2})$), $1/r_{O1}$ and $1/r_{O2}$. The reciprocal of a sum of conductances is the parallel combination of the corresponding resistances:

$$\frac{1}{g_{m2} + \dfrac{1}{r_{O1}} + \dfrac{1}{r_{O2}}} = \frac{1}{g_{m2}}\,\Big\|\,r_{O1}\,\Big\|\,r_{O2}.$$

Pulling a minus sign out of the numerator:

$$A_v = -(g_{m1} - g_{m2})\left(\frac{1}{g_{m2}}\,\Big\|\,r_{O1}\,\Big\|\,r_{O2}\right).$$

To get a single fraction, multiply the numerator and the denominator of the Step 3 result by $r_{O1}r_{O2}$:

$$
\begin{aligned}
A_v &= \frac{(g_{m2} - g_{m1})\,r_{O1}r_{O2}}{g_{m2}r_{O1}r_{O2} + \dfrac{r_{O1}r_{O2}}{r_{O1}} + \dfrac{r_{O1}r_{O2}}{r_{O2}}}\\[4pt]
&= \frac{(g_{m2} - g_{m1})\,r_{O1}r_{O2}}{g_{m2}r_{O1}r_{O2} + r_{O2} + r_{O1}}\\[4pt]
&= -\frac{(g_{m1} - g_{m2})\,r_{O1}r_{O2}}{r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}}.
\end{aligned}
$$

### Step 5 — Check by superposition: CS stage plus source follower

The small-signal circuit is linear, so we may apply $v_{in}$ to the two gates one at a time and add the results.

**(a) Drive only the gate of $M_1$** (gate of $M_2$ held at ac ground). $M_1$ is then a CS stage. Its load is $r_{O1}$ in parallel with the resistance seen looking into the source of $M_2$ with its gate grounded, which is $\frac{1}{g_{m2}}\parallel r_{O2}$. So

$$A_{v,a} = -g_{m1}\left(\frac{1}{g_{m2}}\,\Big\|\,r_{O1}\,\Big\|\,r_{O2}\right).$$

**(b) Drive only the gate of $M_2$** (gate of $M_1$ held at ac ground, so $M_1$ is just $r_{O1}$). $M_2$ is then a source follower with load $R_L = r_{O1}\parallel r_{O2}$ (here $r_{O2}$ also appears in parallel because the drain of $M_2$ is at ac ground). The source-follower gain is

$$A_{v,b} = \frac{g_{m2}R_L}{1 + g_{m2}R_L} = \frac{g_{m2}}{\dfrac{1}{R_L} + g_{m2}} = \frac{g_{m2}}{g_{m2} + \dfrac{1}{r_{O1}} + \dfrac{1}{r_{O2}}} = g_{m2}\left(\frac{1}{g_{m2}}\,\Big\|\,r_{O1}\,\Big\|\,r_{O2}\right).$$

**Sum:**

$$A_v = A_{v,a} + A_{v,b} = (-g_{m1} + g_{m2})\left(\frac{1}{g_{m2}}\,\Big\|\,r_{O1}\,\Big\|\,r_{O2}\right),$$

which agrees with Step 4. The physical picture: when $v_{in}$ rises, $M_1$ pulls the output **down** (inverting CS action, $-g_{m1}$), while $M_2$ tries to pull it **up** (non-inverting follower action, $+g_{m2}$). The net gain is set by the difference $g_{m1} - g_{m2}$, and both actions see the same small resistance at the output, dominated by $1/g_{m2}$.

### Step 6 — The large-$r_O$ limit

Usually $g_{m2}r_{O1} \gg 1$ and $g_{m2}r_{O2} \gg 1$, i.e. $r_{O1}, r_{O2} \gg 1/g_{m2}$. In a parallel combination the smallest resistance dominates, so

$$\frac{1}{g_{m2}}\,\Big\|\,r_{O1}\,\Big\|\,r_{O2} \approx \frac{1}{g_{m2}},$$

and

$$A_v \approx -\frac{g_{m1} - g_{m2}}{g_{m2}} = 1 - \frac{g_{m1}}{g_{m2}}.$$

- If $g_{m1} > g_{m2}$, the gain is negative (the CS action wins).
- If $g_{m1} = g_{m2}$, the two actions cancel and the gain is about zero.
- If $g_{m1} < g_{m2}$, the gain is positive but below 1.

Because the output is unloaded, $M_1$ and $M_2$ carry the same bias current. With the square-law relation $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$ this gives $g_{m1}/g_{m2} = \sqrt{(W/L)_1/(W/L)_2}$, so in this approximation the gain depends only on the size ratio. In any case $|A_v|$ stays modest, because the low resistance $1/g_{m2}$ at the output limits it.

*Side remark on the bias.* With $\gamma = 0$ both devices have the same threshold $V_{TH}$. Saturation of $M_1$ requires $V_{out} \ge V_{in} - V_{TH}$, while conduction of $M_2$ requires $V_{GS2} = V_{in} - V_{out} > V_{TH}$, i.e. $V_{out} < V_{in} - V_{TH}$. The two conditions are incompatible, so in practice $M_1$ sits at the edge of saturation or in triode. That is why the problem tells us to *assume* saturation; the result above is the gain of that small-signal model.

### Result

$$A_v = \frac{v_{out}}{v_{in}} = -(g_{m1} - g_{m2})\left(\frac{1}{g_{m2}}\,\Big\|\,r_{O1}\,\Big\|\,r_{O2}\right) = -\frac{(g_{m1} - g_{m2})\,r_{O1}r_{O2}}{r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}}.$$

For $r_{O1}, r_{O2} \gg 1/g_{m2}$: $A_v \approx -(g_{m1} - g_{m2})/g_{m2} = 1 - g_{m1}/g_{m2}$.

**Common mistake.** Treating $M_2$ as a plain diode-connected load and writing $A_v = -g_{m1}/g_{m2}$ (or $-g_{m1}(\frac{1}{g_{m2}}\parallel r_{O1}\parallel r_{O2})$). $M_2$'s gate is not at its source or at a fixed voltage; it is driven by $v_{in}$. That drive makes $M_2$ act as a source follower, which adds the $+g_{m2}$ term in the numerator.

**Common mistake.** Treating $M_2$ as a current-source load that presents only $r_{O2}$ to the output, which gives $-g_{m1}(r_{O1}\parallel r_{O2})$, a large gain. It is the *source* of $M_2$, not its drain, that faces the output, so $v_{gs2} = v_{in} - v_{out}$ changes with the output; the resulting $g_{m2}v_{out}$ term brings the small resistance $1/g_{m2}$ into the output node and keeps the gain modest.

**Common mistake.** Writing $v_{gs2} = v_{in}$ instead of $v_{in} - v_{out}$. The gate–source voltage is the difference between the gate and *source* voltages, and $M_2$'s source is not grounded. Dropping the $-v_{out}$ removes $g_{m2}$ from the denominator and gives a wrong (much larger) gain.
