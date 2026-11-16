# Detailed solution - R112

**Approach.** Write KCL at the output node of the small-signal circuit and solve for $v_{out}/v_{in}$, then check the result by superposition: $M_1$ is a common-source (CS) stage and $M_2$ a source follower, both driven by $v_{in}$.

### Step 1 — Small-signal model

The output is unloaded, $V_{DD}$ is an ac ground, and $\gamma = 0$ removes the $g_{mb}$ sources. $M_1$ has $v_{gs1} = v_{in}$; $M_2$'s source is the output node, so $v_{gs2} = v_{in} - v_{out}$. Thus $M_1$ is a controlled source $g_{m1}v_{in}$ from out to ground with $r_{O1}$ in parallel, and $M_2$ is a controlled source $g_{m2}(v_{in} - v_{out})$ from ground (its drain) into out, with $r_{O2}$ between ground and out.

<!-- diagram: diagram-01.cir -->

The small-signal drain currents are

$$i_{D1}\ (\text{out}\to\text{ground}) = g_{m1}v_{in} + \frac{v_{out}}{r_{O1}},$$

$$i_{D2}\ (V_{DD}\to\text{out}) = g_{m2}(v_{in} - v_{out}) + \frac{0 - v_{out}}{r_{O2}} = g_{m2}(v_{in} - v_{out}) - \frac{v_{out}}{r_{O2}},$$

where $v_{ds2} = 0 - v_{out}$ gives the $-v_{out}/r_{O2}$ term.

### Step 2 — KCL at the output node

The output is unloaded, so $i_{D2} = i_{D1}$:

$$g_{m2}(v_{in} - v_{out}) - \frac{v_{out}}{r_{O2}} = g_{m1}v_{in} + \frac{v_{out}}{r_{O1}}.$$

Collecting the $v_{in}$ terms on the left and the $v_{out}$ terms on the right:

$$(g_{m2} - g_{m1})\,v_{in} = \left(g_{m2} + \frac{1}{r_{O1}} + \frac{1}{r_{O2}}\right)v_{out},$$

$$A_v = \frac{v_{out}}{v_{in}} = \frac{g_{m2} - g_{m1}}{g_{m2} + \dfrac{1}{r_{O1}} + \dfrac{1}{r_{O2}}}.$$

### Step 3 — Writing the gain in standard forms

The denominator is a sum of conductances, so its reciprocal is $\frac{1}{g_{m2}}\parallel r_{O1}\parallel r_{O2}$:

$$A_v = -(g_{m1} - g_{m2})\left(\frac{1}{g_{m2}}\,\Big\|\,r_{O1}\,\Big\|\,r_{O2}\right).$$

Multiplying the numerator and denominator of the Step 2 result by $r_{O1}r_{O2}$ gives a single fraction:

$$
\begin{aligned}
A_v &= \frac{(g_{m2} - g_{m1})\,r_{O1}r_{O2}}{g_{m2}r_{O1}r_{O2} + r_{O2} + r_{O1}}\\[4pt]
&= -\frac{(g_{m1} - g_{m2})\,r_{O1}r_{O2}}{r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}}.
\end{aligned}
$$

### Step 4 — Check by superposition: CS stage plus source follower

**(a) Only the gate of $M_1$ driven** (gate of $M_2$ at ac ground). $M_1$ is a CS stage loaded by $r_{O1}$ and the resistance looking into the source of $M_2$, $\frac{1}{g_{m2}}\parallel r_{O2}$:

$$A_{v,a} = -g_{m1}\left(\frac{1}{g_{m2}}\,\Big\|\,r_{O1}\,\Big\|\,r_{O2}\right).$$

**(b) Only the gate of $M_2$ driven** (gate of $M_1$ at ac ground, so $M_1$ is just $r_{O1}$). $M_2$ is a source follower with load $R_L = r_{O1}\parallel r_{O2}$ ($r_{O2}$ is in parallel because the drain of $M_2$ is at ac ground):

$$A_{v,b} = \frac{g_{m2}R_L}{1 + g_{m2}R_L} = \frac{g_{m2}}{\dfrac{1}{R_L} + g_{m2}} = \frac{g_{m2}}{g_{m2} + \dfrac{1}{r_{O1}} + \dfrac{1}{r_{O2}}} = g_{m2}\left(\frac{1}{g_{m2}}\,\Big\|\,r_{O1}\,\Big\|\,r_{O2}\right).$$

**Sum:**

$$A_v = A_{v,a} + A_{v,b} = (-g_{m1} + g_{m2})\left(\frac{1}{g_{m2}}\,\Big\|\,r_{O1}\,\Big\|\,r_{O2}\right),$$

which agrees with Step 3. When $v_{in}$ rises, $M_1$ pulls the output **down** ($-g_{m1}$) while $M_2$ pulls it **up** ($+g_{m2}$); both act on the same small output resistance, dominated by $1/g_{m2}$.

### Step 5 — The large-$r_O$ limit

For $r_{O1}, r_{O2} \gg 1/g_{m2}$ the parallel combination is $\approx 1/g_{m2}$, so

$$A_v \approx -\frac{g_{m1} - g_{m2}}{g_{m2}} = 1 - \frac{g_{m1}}{g_{m2}}.$$

The gain is negative for $g_{m1} > g_{m2}$ (the CS action wins), about zero for $g_{m1} = g_{m2}$, and positive but below 1 for $g_{m1} < g_{m2}$. The unloaded devices carry the same bias current, so the square law gives $g_{m1}/g_{m2} = \sqrt{(W/L)_1/(W/L)_2}$: in this approximation the gain depends only on the size ratio, and $|A_v|$ stays modest because of the low resistance $1/g_{m2}$ at the output.

*Side remark on the bias.* With $\gamma = 0$ both devices have the same $V_{TH}$. Saturation of $M_1$ needs $V_{out} \ge V_{in} - V_{TH}$, while conduction of $M_2$ needs $V_{in} - V_{out} > V_{TH}$, i.e. $V_{out} < V_{in} - V_{TH}$. The two are incompatible, so in practice $M_1$ sits at the edge of saturation or in triode; that is why the problem tells us to *assume* saturation.

### Result

$$A_v = \frac{v_{out}}{v_{in}} = -(g_{m1} - g_{m2})\left(\frac{1}{g_{m2}}\,\Big\|\,r_{O1}\,\Big\|\,r_{O2}\right) = -\frac{(g_{m1} - g_{m2})\,r_{O1}r_{O2}}{r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}}.$$

For $r_{O1}, r_{O2} \gg 1/g_{m2}$: $A_v \approx -(g_{m1} - g_{m2})/g_{m2} = 1 - g_{m1}/g_{m2}$.

**Common mistake.** Treating $M_2$ as a plain diode-connected load, $A_v = -g_{m1}/g_{m2}$ (or $-g_{m1}(\frac{1}{g_{m2}}\parallel r_{O1}\parallel r_{O2})$). $M_2$'s gate is driven by $v_{in}$, which makes it a source follower and adds the $+g_{m2}$ term in the numerator.

**Common mistake.** Treating $M_2$ as a current-source load that presents only $r_{O2}$, which gives the large gain $-g_{m1}(r_{O1}\parallel r_{O2})$. It is $M_2$'s *source* that faces the output, so its $g_{m2}v_{out}$ term puts $1/g_{m2}$ at the output node and keeps the gain modest.

**Common mistake.** Writing $v_{gs2} = v_{in}$ instead of $v_{in} - v_{out}$. This drops $g_{m2}$ from the denominator and gives a much larger gain.
