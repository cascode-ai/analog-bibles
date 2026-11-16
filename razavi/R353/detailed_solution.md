# Detailed solution - R353

**Approach.** Put each transistor's flicker noise in series with its gate: $M_1$'s is then in series with the input, while $M_2$'s becomes a noise current at the output node. Write KCL at the output, including the body effect of $M_1$, and divide the output noise by the follower's gain; the body effect cancels.

### Step 1 — Noise sources

Both devices are NMOS, so both use $K_N$:

$$\overline{V_{n1}^2} = \frac{K_N}{C_{ox}(WL)_1\,f}, \qquad \overline{V_{n2}^2} = \frac{K_N}{C_{ox}(WL)_2\,f}.$$

The two sources are uncorrelated.

### Step 2 — Small-signal model with the body effect

- **$M_1$** (drain at ac ground, bulk at ground): with effective gate voltage $v_{in} + V_{n1}$ and $v_{bs1} = 0 - v_{out}$, it delivers into the output
$$g_{m1}(v_{in} + V_{n1} - v_{out}) + g_{mb1}(0 - v_{out}).$$
- **$M_2$** (source grounded, gate at ac ground plus its noise $V_{n2}$): it draws $g_{m2}V_{n2}$ from the output. With $\lambda = 0$ it has no output resistance, and with bulk and source grounded, no body effect.

### Step 3 — KCL at the output

The current delivered by $M_1$ equals the current drawn by $M_2$:

$$g_{m1}(v_{in} + V_{n1} - v_{out}) - g_{mb1}v_{out} = g_{m2}V_{n2},$$

$$
\begin{aligned}
v_{out}(g_{m1} + g_{mb1}) &= g_{m1}(v_{in} + V_{n1}) - g_{m2}V_{n2}\\
v_{out} &= \frac{g_{m1}(v_{in} + V_{n1}) - g_{m2}V_{n2}}{g_{m1} + g_{mb1}}.
\end{aligned}
$$

### Step 4 — Gain and input-referred noise

The gain is the familiar source-follower value,

$$A_v = \frac{v_{out}}{v_{in}} = \frac{g_{m1}}{g_{m1} + g_{mb1}},$$

and the output noise is $M_1$'s noise amplified like the input plus $M_2$'s noise current flowing into the output resistance $1/(g_{m1} + g_{mb1})$:

$$v_{out}\Big|_{noise} = \frac{g_{m1}V_{n1} - g_{m2}V_{n2}}{g_{m1} + g_{mb1}}.$$

Dividing by $A_v$:

$$v_{n,in} = \frac{g_{m1}V_{n1} - g_{m2}V_{n2}}{g_{m1} + g_{mb1}}\cdot\frac{g_{m1} + g_{mb1}}{g_{m1}} = V_{n1} - \frac{g_{m2}}{g_{m1}}V_{n2}.$$

The factor $g_{m1} + g_{mb1}$ cancels: **the body effect does not change the input-referred noise** (with $r_O$ neglected), because it reduces the gain and the output resistance equally. Adding the uncorrelated powers:

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \overline{V_{n1}^2} + \frac{g_{m2}^2}{g_{m1}^2}\overline{V_{n2}^2}\\
&= \frac{K_N}{C_{ox}f}\left[\frac{1}{(WL)_1} + \frac{g_{m2}^2}{g_{m1}^2}\cdot\frac{1}{(WL)_2}\right].
\end{aligned}
$$

### Step 5 — Interpretation and design hints

The result has the same structure as the follower's thermal noise, $4kT\gamma\left(1/g_{m1} + g_{m2}/g_{m1}^2\right)$. To reduce it, make $M_1$ large in area, and make $M_2$ large in area with a small $g_{m2}$ relative to $g_{m1}$ (a large overdrive for its current); a long channel for $M_2$ achieves both, keeping $W/L$ small while making $WL$ large.

### Result

$$\overline{V_{n,in}^2}\Big|_{1/f} = \frac{K_N}{C_{ox}f}\left[\frac{1}{(WL)_1} + \frac{g_{m2}^2}{g_{m1}^2}\cdot\frac{1}{(WL)_2}\right]$$

$M_1$'s gate noise is directly in series with the input. $M_2$'s noise current $g_{m2}V_{n2}$ flows into the output resistance $1/(g_{m1} + g_{mb1})$, and dividing by the gain $g_{m1}/(g_{m1} + g_{mb1})$ gives $g_{m2}V_{n2}/g_{m1}$. The body effect therefore cancels.

**Common mistake.** Claiming that $M_2$'s noise does not reach the output because the follower's output impedance is low. That impedance, $1/(g_{m1} + g_{mb1})$, is not zero, and $M_2$'s noise referred to the input is $(g_{m2}/g_{m1})V_{n2}$, comparable to $M_1$'s own noise when $g_{m2} \approx g_{m1}$.

**Common mistake.** Weighting $M_2$'s term by $g_{m2}/g_{m1}$ instead of $(g_{m2}/g_{m1})^2$. The *voltage* $V_{n2}$ is scaled by $g_{m2}/g_{m1}$, so its PSD is scaled by the square.

**Common mistake.** Treating the body effect inconsistently, for example dividing the $M_2$ term by $(g_{m1} + g_{mb1})^2$ while using the gain $g_{m1}/(g_{m1} + g_{mb1})$ for the signal. Done consistently, $g_{m1} + g_{mb1}$ cancels.
