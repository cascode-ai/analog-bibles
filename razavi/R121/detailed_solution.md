# Detailed solution - R121

**Approach.** The output is the drain of the common-source device $M_1$ (node $X$), which is also the source of $M_2$ and the gate of $M_3$. The only signal source acting on $X$ is $M_1$'s controlled current, so the gain is $-g_{m1}$ times the total resistance at $X$: compute the resistance $R_{up}$ looking up into $M_2$–$M_3$ (one KCL equation at their common drain $D$) and combine it with $r_{O1}$.

### Step 1 — Small-signal model

$V_{b1}$ and $V_{DD}$ are ac grounds and $\gamma = 0$. Call the common drain of $M_2$ and $M_3$ node $D$. With the unknowns $v_X = v_{out}$ and $v_D$:

- **$M_1$**: $v_{gs1} = v_{in}$; a controlled source $g_{m1}v_{in}$ from $X$ to ground, with $r_{O1}$ from $X$ to ground.
- **$M_2$**: $v_{gs2} = -v_X$; a controlled source $-g_{m2}v_X$ from $D$ (drain) to $X$ (source), with $r_{O2}$ between $D$ and $X$.
- **$M_3$**: $v_{gs3} = v_X$ (source at ac ground); a controlled source $g_{m3}v_X$ from $D$ (drain) to ac ground, with $r_{O3}$ from $D$ to ac ground.

<!-- diagram: diagram-01.cir -->

Branch currents:

$$i_2 \equiv \text{current from } D \text{ through } M_2 \text{ into } X = -g_{m2}v_X + \frac{v_D - v_X}{r_{O2}},$$

$$i_3 \equiv \text{current from } V_{DD} \text{ through } M_3 \text{ into } D = -g_{m3}v_X - \frac{v_D}{r_{O3}}.$$

The network $M_2$–$M_3$ contains no independent source, so seen from $X$ it is a resistance $R_{up}$ to ac ground, and KCL at $X$ gives

$$g_{m1}v_{in} + \frac{v_X}{r_{O1}} + \frac{v_X}{R_{up}} = 0\quad\Longrightarrow\quad v_X = -g_{m1}\left(r_{O1}\parallel R_{up}\right)v_{in}.$$

### Step 2 — Resistance looking up from $X$

Apply a test voltage $v_X$ at $X$ (with $M_1$ disconnected); the test current flows up through $M_2$, i.e. it equals $-i_2$.

**KCL at $D$** ($i_3 = i_2$):

$$-g_{m3}v_X - \frac{v_D}{r_{O3}} = -g_{m2}v_X + \frac{v_D - v_X}{r_{O2}}.$$

Collecting the $v_X$ terms on the left and the $v_D$ terms on the right, then multiplying by $r_{O2}r_{O3}$:

$$g_{m2}v_X - g_{m3}v_X + \frac{v_X}{r_{O2}} = \frac{v_D}{r_{O2}} + \frac{v_D}{r_{O3}},$$

$$v_X\,r_{O3}\left[1 + (g_{m2} - g_{m3})r_{O2}\right] = v_D\,(r_{O2} + r_{O3}),$$

$$v_D = \frac{r_{O3}\left[1 + (g_{m2} - g_{m3})r_{O2}\right]}{r_{O2} + r_{O3}}\,v_X.$$

**Test current.** Since $i_2 = i_3$,

$$-i_2 = -i_3 = g_{m3}v_X + \frac{v_D}{r_{O3}} = v_X\left[g_{m3} + \frac{1 + (g_{m2} - g_{m3})r_{O2}}{r_{O2} + r_{O3}}\right].$$

Over a common denominator,

$$g_{m3}(r_{O2} + r_{O3}) + 1 + g_{m2}r_{O2} - g_{m3}r_{O2} = 1 + g_{m2}r_{O2} + g_{m3}r_{O3},$$

so

$$-i_2 = v_X\,\frac{1 + g_{m2}r_{O2} + g_{m3}r_{O3}}{r_{O2} + r_{O3}},\qquad R_{up} = \frac{v_X}{-i_2} = \frac{r_{O2} + r_{O3}}{1 + g_{m2}r_{O2} + g_{m3}r_{O3}}.$$

**Check.** With $g_{m3} = 0$, $R_{up} = (r_{O2} + r_{O3})/(1 + g_{m2}r_{O2})$, the standard resistance looking into a source with drain load $r_{O3}$. ✓

### Step 3 — The gain

$$A_v = -g_{m1}\,\frac{r_{O1}R_{up}}{r_{O1} + R_{up}}.$$

Substituting $R_{up}$ and multiplying numerator and denominator by $(1 + g_{m2}r_{O2} + g_{m3}r_{O3})$:

$$
\begin{aligned}
A_v &= -g_{m1}\,\frac{r_{O1}(r_{O2} + r_{O3})}{r_{O1}(1 + g_{m2}r_{O2} + g_{m3}r_{O3}) + r_{O2} + r_{O3}}\\[4pt]
&= -\frac{g_{m1}r_{O1}(r_{O2} + r_{O3})}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3}}.
\end{aligned}
$$

### Step 4 — Large-$g_mr_O$ approximation and intuition

For $g_mr_O \gg 1$, $g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3}$ dominates the denominator:

$$A_v \approx -\frac{g_{m1}r_{O1}(r_{O2} + r_{O3})}{r_{O1}(g_{m2}r_{O2} + g_{m3}r_{O3})} = -\frac{g_{m1}(r_{O2} + r_{O3})}{g_{m2}r_{O2} + g_{m3}r_{O3}}.$$

Equivalently, $R_{up} \approx (r_{O2} + r_{O3})/(g_{m2}r_{O2} + g_{m3}r_{O3})$, of order $1/g_m$ and much smaller than $r_{O1}$. For $r_{O2} = r_{O3}$, $R_{up} \approx 2/(g_{m2} + g_{m3})$ and $A_v \approx -2g_{m1}/(g_{m2} + g_{m3})$; for equal transconductances, $A_v \approx -1$.

**Why $X$ is a low-impedance node.** If $v_X$ rises, $M_2$'s $v_{gs}$ falls and $M_3$'s gate rises, so both conduct less; $D$ moves until their current changes are equal. The loop $X \to$ gate of $M_3 \to D \to M_2 \to X$ is a local negative feedback that holds $X$ nearly fixed, so the gain is of order $g_{m1}/g_m$, not $g_mr_O$.

### Result

$$A_v = -\frac{g_{m1}r_{O1}(r_{O2} + r_{O3})}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3}} = -g_{m1}\left(r_{O1}\,\Big\|\,\frac{r_{O2} + r_{O3}}{1 + g_{m2}r_{O2} + g_{m3}r_{O3}}\right),$$

and for $g_mr_O \gg 1$:

$$A_v \approx -\frac{g_{m1}(r_{O2} + r_{O3})}{g_{m2}r_{O2} + g_{m3}r_{O3}},$$

a low gain of order $g_{m1}/g_m$.

**Common mistake.** Treating $M_3$ as an ideal current source (gate at ac ground). Its gate is tied to $X$, which adds the $g_{m3}r_{O3}$ term to the denominator of $R_{up}$ and lowers the resistance at $X$.

**Common mistake.** Reading the output at the drain of $M_2$ (node $D$) and claiming a high gain of order $g_mr_O$. The output is node $X$, a low-impedance node.

**Common mistake.** Using $R_{up} \approx 1/g_{m2}$, as if the drain of $M_2$ were at ac ground. It sees $r_{O3}$ and the action of $M_3$, giving $(r_{O2} + r_{O3})/(1 + g_{m2}r_{O2} + g_{m3}r_{O3})$.
