# Detailed solution - R121

**Approach.** The output is the drain of the common-source device $M_1$ (node $X$), which is also the source of $M_2$ and the gate of $M_3$. Because the only signal source acting on $X$ is $M_1$'s controlled current, the gain is $-g_{m1}$ times the total resistance at $X$. So we compute the resistance $R_{up}$ looking up from $X$ into $M_2$–$M_3$ (one KCL equation at the internal node $D$) and combine it with $r_{O1}$.

### Step 1 — Reading the circuit

From the figure:

- $M_1$: NMOS, gate at $V_{in}$, source at ground, drain at node $X$.
- $M_2$: NMOS, gate at the dc bias $V_{b1}$, source at $X$, drain at a node we call $D$.
- $M_3$: PMOS, source at $V_{DD}$, drain at $D$, and its **gate connected to $X$** (the wire on the right runs from the gate of $M_3$ down to the output).
- The output is taken at $X$: $V_{out} = V_X$.

The problem gives $\gamma = 0$ (no body effect for $M_2$) and $\lambda \neq 0$. Here $g_{mi}$ is the transconductance of $M_i$, $r_{Oi} \approx 1/(\lambda I_D)$ its output resistance, and lower-case symbols are small-signal quantities. $V_{b1}$, $V_{DD}$ and ground are **ac grounds**.

### Step 2 — Small-signal model

The small-signal model of a PMOS is identical to that of an NMOS (current $g_mv_{gs}$ from drain to source, $r_O$ from drain to source). The unknown node voltages are $v_X = v_{out}$ and $v_D$.

- **$M_1$**: $v_{gs1} = v_{in}$; current $g_{m1}v_{in}$ from $X$ to ground, with $r_{O1}$ from $X$ to ground.
- **$M_2$**: gate at ac ground, source at $X$, so $v_{gs2} = -v_X$; current $-g_{m2}v_X$ from $D$ (drain) to $X$ (source), with $r_{O2}$ between $D$ and $X$.
- **$M_3$**: source at ac ground, gate at $X$, so $v_{gs3} = v_X$; current $g_{m3}v_X$ from $D$ (drain) to ac ground (source), with $r_{O3}$ from $D$ to ac ground.

<!-- diagram: diagram-01.cir -->

Branch currents (used below):

$$i_2 \equiv \text{current from } D \text{ through } M_2 \text{ into } X = -g_{m2}v_X + \frac{v_D - v_X}{r_{O2}},$$

$$i_3 \equiv \text{current from } V_{DD} \text{ through } M_3 \text{ into } D = -g_{m3}v_X - \frac{v_D}{r_{O3}}.$$

### Step 3 — Why $A_v = -g_{m1}(r_{O1}\parallel R_{up})$

At node $X$ three things are connected: $M_1$'s controlled source $g_{m1}v_{in}$, $M_1$'s $r_{O1}$, and the network $M_2$–$M_3$ above. That upper network contains no independent source; its controlled sources depend only on $v_X$ and $v_D$. So, seen from $X$, it is equivalent to a resistance $R_{up}$ to ac ground. KCL at $X$ then reads

$$g_{m1}v_{in} + \frac{v_X}{r_{O1}} + \frac{v_X}{R_{up}} = 0\quad\Longrightarrow\quad v_X = -g_{m1}\left(r_{O1}\parallel R_{up}\right)v_{in}.$$

We now find $R_{up}$.

### Step 4 — Resistance looking up from $X$

Apply a test voltage $v_X$ at $X$ (with $M_1$ disconnected). The current drawn from the test source flows up through $M_2$, i.e. it equals $-i_2$.

**KCL at $D$.** Nothing else connects to $D$, so the current $M_3$ delivers into $D$ must leave through $M_2$: $i_3 = i_2$:

$$-g_{m3}v_X - \frac{v_D}{r_{O3}} = -g_{m2}v_X + \frac{v_D - v_X}{r_{O2}}.$$

Collect the $v_D$ terms on the right and the $v_X$ terms on the left:

$$g_{m2}v_X - g_{m3}v_X + \frac{v_X}{r_{O2}} = \frac{v_D}{r_{O2}} + \frac{v_D}{r_{O3}}.$$

Multiply by $r_{O2}r_{O3}$:

$$v_X\,r_{O3}\left[1 + (g_{m2} - g_{m3})r_{O2}\right] = v_D\,(r_{O2} + r_{O3}),$$

$$v_D = \frac{r_{O3}\left[1 + (g_{m2} - g_{m3})r_{O2}\right]}{r_{O2} + r_{O3}}\,v_X.$$

**Test current.** Since $i_2 = i_3$, the current flowing from $X$ upward is

$$-i_2 = -i_3 = g_{m3}v_X + \frac{v_D}{r_{O3}} = v_X\left[g_{m3} + \frac{1 + (g_{m2} - g_{m3})r_{O2}}{r_{O2} + r_{O3}}\right].$$

Over a common denominator:

$$g_{m3}(r_{O2} + r_{O3}) + 1 + g_{m2}r_{O2} - g_{m3}r_{O2} = 1 + g_{m2}r_{O2} + g_{m3}r_{O3},$$

so

$$-i_2 = v_X\,\frac{1 + g_{m2}r_{O2} + g_{m3}r_{O3}}{r_{O2} + r_{O3}},\qquad R_{up} = \frac{v_X}{-i_2} = \frac{r_{O2} + r_{O3}}{1 + g_{m2}r_{O2} + g_{m3}r_{O3}}.$$

**Check.** With $g_{m3} = 0$ (gate of $M_3$ at ac ground), $R_{up} = (r_{O2} + r_{O3})/(1 + g_{m2}r_{O2})$, the standard resistance looking into the source of a transistor with drain load $r_{O3}$. ✓

### Step 5 — The gain

$$A_v = -g_{m1}\,\frac{r_{O1}R_{up}}{r_{O1} + R_{up}}.$$

Substitute $R_{up}$ and multiply numerator and denominator by $(1 + g_{m2}r_{O2} + g_{m3}r_{O3})$:

$$
\begin{aligned}
A_v &= -g_{m1}\,\frac{r_{O1}(r_{O2} + r_{O3})}{r_{O1}(1 + g_{m2}r_{O2} + g_{m3}r_{O3}) + r_{O2} + r_{O3}}\\[4pt]
&= -\frac{g_{m1}r_{O1}(r_{O2} + r_{O3})}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3}}.
\end{aligned}
$$

### Step 6 — Large-$g_mr_O$ approximation and intuition

For $g_mr_O \gg 1$, the terms $g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3}$ dominate the denominator:

$$A_v \approx -\frac{g_{m1}r_{O1}(r_{O2} + r_{O3})}{r_{O1}(g_{m2}r_{O2} + g_{m3}r_{O3})} = -\frac{g_{m1}(r_{O2} + r_{O3})}{g_{m2}r_{O2} + g_{m3}r_{O3}}.$$

Equivalently, $R_{up} \approx (r_{O2} + r_{O3})/(g_{m2}r_{O2} + g_{m3}r_{O3})$, a resistance of order $1/g_m$, much smaller than $r_{O1}$. For $r_{O2} = r_{O3}$, $R_{up} \approx 2/(g_{m2} + g_{m3})$ and $A_v \approx -2g_{m1}/(g_{m2} + g_{m3})$; for equal transconductances, $A_v \approx -1$.

**Why $X$ is a low-impedance node.** If $v_X$ rises, two things reduce the current flowing down into $X$: $v_{gs2}$ falls (so $M_2$ conducts less), and the gate of the PMOS $M_3$ rises (so $M_3$ conducts less). $M_2$ and $M_3$ are in series, so node $D$ (a high-impedance node) moves until their current changes are equal. The result is a current change proportional to an $r_O$-weighted average of $g_{m2}$ and $g_{m3}$, i.e. a resistance of order $1/g_m$. The loop $X \to$ gate of $M_3 \to D \to M_2 \to X$ is a local negative feedback that holds $X$ nearly fixed, so the gain is low: of order $g_{m1}/g_m$, not $g_mr_O$.

### Result

$$A_v = -\frac{g_{m1}r_{O1}(r_{O2} + r_{O3})}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3}} = -g_{m1}\left(r_{O1}\,\Big\|\,\frac{r_{O2} + r_{O3}}{1 + g_{m2}r_{O2} + g_{m3}r_{O3}}\right),$$

and for $g_mr_O \gg 1$:

$$A_v \approx -\frac{g_{m1}(r_{O2} + r_{O3})}{g_{m2}r_{O2} + g_{m3}r_{O3}},$$

a low gain of order $g_{m1}/g_m$.

**Common mistake.** Treating $M_3$ as an ideal current source (gate at ac ground). Its gate is tied to $X$, so it responds to $v_X$ with $g_{m3}$; this adds the $g_{m3}r_{O3}$ term to the denominator of $R_{up}$ and lowers the resistance at $X$.

**Common mistake.** Reading the output at the drain of $M_2$ (node $D$) and claiming a high gain of order $g_mr_O$. The output terminal is node $X$, the source of $M_2$, which is a low-impedance node.

**Common mistake.** Using $R_{up} \approx 1/g_{m2}$ (the resistance looking into a source whose drain is at ac ground). Here the drain of $M_2$ sees $r_{O3}$ (and the action of $M_3$), so the correct value is $(r_{O2} + r_{O3})/(1 + g_{m2}r_{O2} + g_{m3}r_{O3})$.
