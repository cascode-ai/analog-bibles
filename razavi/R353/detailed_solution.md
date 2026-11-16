# Detailed solution - R353

**Approach.** Place each transistor's flicker noise as a voltage source in series with its gate. $M_1$'s source is already in series with the input. $M_2$'s source becomes a noise current injected into the output node. Write KCL at the output, including the body effect of $M_1$, and divide the output noise by the follower's gain. The body effect cancels.

### Step 1 — Noise sources

The flicker noise of each transistor is a gate voltage with PSD

$$\overline{V_{n1}^2} = \frac{K_N}{C_{ox}(WL)_1\,f}, \qquad \overline{V_{n2}^2} = \frac{K_N}{C_{ox}(WL)_2\,f},$$

where $K_N$ is the NMOS flicker-noise coefficient, $C_{ox}$ the gate-oxide capacitance per unit area, $(WL)_j$ the gate area and $f$ the frequency. Both devices are NMOS, so both use $K_N$. The two sources are uncorrelated.

### Step 2 — Small-signal model with the body effect

**Nodes:** the input (gate of $M_1$) and the output (source of $M_1$, drain of $M_2$).

- **$M_1$**: drain at $V_{DD}$ (ac ground), effective gate voltage $v_{in} + V_{n1}$, source at $v_{out}$, bulk at ground. It delivers into the output the current
$$g_{m1}(v_{in} + V_{n1} - v_{out}) + g_{mb1}(0 - v_{out}),$$
where the second term is the body effect: $v_{bs1} = 0 - v_{out}$, and $g_{mb1}$ is the body transconductance.
- **$M_2$**: source grounded, gate at the fixed bias $V_b$ (ac ground) plus its noise $V_{n2}$. It draws from the output the current $g_{m2}V_{n2}$. With $\lambda = 0$ it has no output resistance, and its bulk and source are both grounded, so it has no body effect.

### Step 3 — KCL at the output

The current delivered by $M_1$ equals the current drawn by $M_2$:

$$g_{m1}(v_{in} + V_{n1} - v_{out}) - g_{mb1}v_{out} = g_{m2}V_{n2}.$$

Collect the $v_{out}$ terms:

$$
\begin{aligned}
v_{out}(g_{m1} + g_{mb1}) &= g_{m1}(v_{in} + V_{n1}) - g_{m2}V_{n2}\\
v_{out} &= \frac{g_{m1}(v_{in} + V_{n1}) - g_{m2}V_{n2}}{g_{m1} + g_{mb1}}.
\end{aligned}
$$

### Step 4 — Gain and input-referred noise

**Gain:**

$$A_v = \frac{v_{out}}{v_{in}} = \frac{g_{m1}}{g_{m1} + g_{mb1}},$$

the familiar source-follower gain (below 1 because of the body effect).

**Output noise.** $M_2$'s noise current $g_{m2}V_{n2}$ flows into the follower's output resistance $1/(g_{m1} + g_{mb1})$, and $M_1$'s noise is amplified like the input:

$$v_{out}\Big|_{noise} = \frac{g_{m1}V_{n1} - g_{m2}V_{n2}}{g_{m1} + g_{mb1}}.$$

**Refer to the input** by dividing by $A_v$:

$$v_{n,in} = \frac{g_{m1}V_{n1} - g_{m2}V_{n2}}{g_{m1} + g_{mb1}}\cdot\frac{g_{m1} + g_{mb1}}{g_{m1}} = V_{n1} - \frac{g_{m2}}{g_{m1}}V_{n2}.$$

The factor $g_{m1} + g_{mb1}$ cancels: **the body effect does not change the input-referred noise** (with $r_O$ neglected). It reduces the gain and the output resistance equally, so signal and noise are scaled by the same factor.

**Add the powers** (uncorrelated sources):

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \overline{V_{n1}^2} + \frac{g_{m2}^2}{g_{m1}^2}\overline{V_{n2}^2}\\
&= \frac{K_N}{C_{ox}f}\left[\frac{1}{(WL)_1} + \frac{g_{m2}^2}{g_{m1}^2}\cdot\frac{1}{(WL)_2}\right].
\end{aligned}
$$

### Step 5 — Interpretation and design hints

- The result has the same structure as the thermal noise of the same follower, $4kT\gamma\left(1/g_{m1} + g_{m2}/g_{m1}^2\right)$: the current-source noise is converted to an input voltage by dividing by $g_{m1}$.
- To reduce the $1/f$ noise:
  - make $M_1$ large in area, which lowers $\overline{V_{n1}^2}$;
  - make $g_{m2}$ small relative to $g_{m1}$ (for a given current, a large overdrive for $M_2$) and $M_2$ large in area. A long channel achieves both: it keeps $W/L$ small (low $g_{m2}$) while making $WL$ large.

### Result

$$\overline{V_{n,in}^2}\Big|_{1/f} = \frac{K_N}{C_{ox}f}\left[\frac{1}{(WL)_1} + \frac{g_{m2}^2}{g_{m1}^2}\cdot\frac{1}{(WL)_2}\right]$$

$M_1$'s gate noise is directly in series with the input. $M_2$'s noise current $g_{m2}V_{n2}$ flows into the output resistance $1/(g_{m1} + g_{mb1})$, and dividing by the gain $g_{m1}/(g_{m1} + g_{mb1})$ gives $g_{m2}V_{n2}/g_{m1}$. The body effect therefore cancels.

**Common mistake.** Claiming that $M_2$'s noise does not reach the output because "the follower has a low output impedance". The output impedance is low, $1/(g_{m1} + g_{mb1})$, but not zero; $M_2$'s noise current produces an output voltage that, referred to the input, is $(g_{m2}/g_{m1})V_{n2}$, comparable to $M_1$'s own noise when $g_{m2} \approx g_{m1}$.

**Common mistake.** Weighting $M_2$'s term by $g_{m2}/g_{m1}$ instead of $(g_{m2}/g_{m1})^2$, or by $g_{m2}^2$ without dividing by $g_{m1}^2$. The *voltage* $V_{n2}$ is scaled by $g_{m2}/g_{m1}$, so its PSD is scaled by the square of that ratio.

**Common mistake.** Treating the body effect inconsistently, for example dividing the $M_2$ term by $(g_{m1} + g_{mb1})^2$ while using the gain $g_{m1}/(g_{m1} + g_{mb1})$ for the signal. Done consistently, $g_{m1} + g_{mb1}$ appears in both the output noise and the gain and cancels. Also, both devices are NMOS, so $K_N$ applies to both.
