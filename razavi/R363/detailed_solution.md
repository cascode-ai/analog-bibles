# Detailed solution - R363

**Approach.** Refer all thermal noise to the input. The noise of $M_1$ is fixed by $I_D$ and $(W/L)_1$, so only the noise current of the load ($M_2$ with $R_S$) can be changed. Compute that noise current as a function of $R_S$, impose the headroom constraint $V_H = I_DR_S + |V_{GS2} - V_{TH2}|$, and minimize.

### Step 1 — What has to be minimized

Every noise source ends up as a current into the output node, where it sees the same resistance $R_{out}$ as the signal current, so dividing by the gain $g_{m1}R_{out}$ gives

$$\overline{V_{n,in}^2} = \frac{\overline{I_{n,out}^2}\,R_{out}^2}{g_{m1}^2R_{out}^2} = \frac{\overline{I_{n,out}^2}}{g_{m1}^2},$$

whatever $R_{out}$ is (it is very large with $\lambda = 0$). The output noise current consists of $M_1$'s channel noise, $4kT\gamma g_{m1}$, and the uncorrelated load noise current $\overline{I_{n,L}^2}$ of $M_2$ and $R_S$:

$$\overline{V_{n,in}^2} = \frac{4kT\gamma g_{m1} + \overline{I_{n,L}^2}}{g_{m1}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{\overline{I_{n,L}^2}}{g_{m1}^2}.$$

Since $g_{m1} = \sqrt{2\mu_nC_{ox}(W/L)_1I_D}$ does not depend on $R_S$, **minimizing $\overline{V_{n,in}^2}$ means minimizing $\overline{I_{n,L}^2}$.**

### Step 2 — Noise current delivered by the degenerated load

Short the output to ac ground and call S the source of $M_2$, with voltage $v_s$; since the gate is at ac ground, $v_{sg} = v_s$. $R_S$ connects ac ground ($V_{DD}$) to S, in series with its noise voltage $\overline{v_{nR}^2} = 4kTR_S$, and $M_2$ carries $g_{m2}v_s$ plus its channel noise $i_{n2}$, $\overline{i_{n2}^2} = 4kT\gamma g_{m2}$, from S to the drain (no $r_O$, no $g_{mb}$). The load noise current is the current $i_{out}$ leaving the drain into the shorted output.

<!-- diagram: diagram-01.cir -->

**(a) Noise of $M_2$ alone** ($v_{nR} = 0$). KCL at S:

$$
\begin{aligned}
\frac{0 - v_s}{R_S} &= g_{m2}v_s + i_{n2}\\
-v_s\left(\frac{1}{R_S} + g_{m2}\right) &= i_{n2}\\
v_s &= -\frac{i_{n2}R_S}{1 + g_{m2}R_S},
\end{aligned}
$$

$$
\begin{aligned}
i_{out} &= g_{m2}v_s + i_{n2}\\
&= i_{n2}\left(1 - \frac{g_{m2}R_S}{1 + g_{m2}R_S}\right)\\
&= \frac{i_{n2}}{1 + g_{m2}R_S}.
\end{aligned}
$$

Degeneration suppresses $M_2$'s noise: $i_{n2}$ pulls S down, reducing $v_{sg}$ so that the controlled source cancels most of it.

**(b) Noise of $R_S$ alone** ($i_{n2} = 0$). KCL at S:

$$
\begin{aligned}
\frac{v_{nR} - v_s}{R_S} &= g_{m2}v_s\\
v_{nR} &= v_s\,(1 + g_{m2}R_S)\\
v_s &= \frac{v_{nR}}{1 + g_{m2}R_S},
\end{aligned}
$$

$$i_{out} = g_{m2}v_s = \frac{g_{m2}\,v_{nR}}{1 + g_{m2}R_S}.$$

**(c) Total load noise** (uncorrelated sources):

$$
\begin{aligned}
\overline{I_{n,L}^2} &= \frac{\overline{i_{n2}^2}}{(1 + g_{m2}R_S)^2} + \frac{g_{m2}^2\,\overline{v_{nR}^2}}{(1 + g_{m2}R_S)^2}\\
&= \frac{4kT\gamma g_{m2} + g_{m2}^2\cdot4kTR_S}{(1 + g_{m2}R_S)^2}\\
&= \frac{4kT\left(\gamma g_{m2} + g_{m2}^2R_S\right)}{(1 + g_{m2}R_S)^2}.
\end{aligned}
$$

For $R_S = 0$ this is $4kT\gamma g_{m2}$ (a plain current source), and for $g_{m2}R_S \gg 1$ it is $4kTg_{m2}^2R_S/(g_{m2}R_S)^2 = 4kT/R_S$ (the resistor alone). The expression seems to say "make $R_S$ large", but with $I_D$ fixed a larger $R_S$ eats into the headroom, forcing a smaller overdrive and hence a *larger* $g_{m2}$; this coupling must be included.

### Step 3 — Imposing the headroom constraint

The swing fixes

$$V_H = I_DR_S + |V_{ov2}|, \qquad |V_{ov2}| = |V_{GS2} - V_{TH2}| .$$

Define the voltage across the resistor,

$$x = I_DR_S, \qquad 0 \le x < V_H,$$

so the overdrive left for $M_2$ is

$$|V_{ov2}| = V_H - x ,$$

and by the square law

$$g_{m2} = \frac{2I_D}{|V_{ov2}|} = \frac{2I_D}{V_H - x},$$

with $(W/L)_2 = 2I_D/[\mu_pC_{ox}(V_H - x)^2]$ chosen freely to carry $I_D$ at this overdrive. The pieces of $\overline{I_{n,L}^2}$:

$$
\begin{aligned}
g_{m2}R_S &= \frac{2I_D}{V_H - x}\cdot\frac{x}{I_D} = \frac{2x}{V_H - x},\\
1 + g_{m2}R_S &= \frac{V_H - x + 2x}{V_H - x} = \frac{V_H + x}{V_H - x},\\
\gamma g_{m2} &= \frac{2\gamma I_D}{V_H - x},\\
g_{m2}^2R_S &= g_{m2}\,(g_{m2}R_S) = \frac{2I_D}{V_H - x}\cdot\frac{2x}{V_H - x} = \frac{4I_Dx}{(V_H - x)^2}.
\end{aligned}
$$

Over the common denominator $(V_H - x)^2$,

$$\gamma g_{m2} + g_{m2}^2R_S = \frac{2\gamma I_D(V_H - x) + 4I_Dx}{(V_H - x)^2} = \frac{2I_D\left[\gamma(V_H - x) + 2x\right]}{(V_H - x)^2},$$

and dividing by $(1 + g_{m2}R_S)^2 = (V_H + x)^2/(V_H - x)^2$, the factors $(V_H - x)^2$ cancel:

$$\frac{\gamma g_{m2} + g_{m2}^2R_S}{(1 + g_{m2}R_S)^2} = \frac{2I_D\left[\gamma(V_H - x) + 2x\right]}{(V_H + x)^2}.$$

With $\gamma(V_H - x) + 2x = \gamma V_H + (2 - \gamma)x$:

$$\overline{I_{n,L}^2} = 8kTI_D\,\frac{\gamma V_H + (2 - \gamma)x}{(V_H + x)^2},$$

a function of the single design variable $x = I_DR_S$.

### Step 4 — Minimizing with respect to $x$

Let

$$f(x) = \frac{\gamma V_H + (2 - \gamma)x}{(V_H + x)^2}.$$

By the quotient rule:

$$
\begin{aligned}
f'(x) &= \frac{(2 - \gamma)(V_H + x)^2 - 2(V_H + x)\left[\gamma V_H + (2 - \gamma)x\right]}{(V_H + x)^4}\\
&= \frac{(2 - \gamma)(V_H + x) - 2\gamma V_H - 2(2 - \gamma)x}{(V_H + x)^3}\\
&= \frac{(2 - \gamma)V_H - 2\gamma V_H + (2 - \gamma)x - 2(2 - \gamma)x}{(V_H + x)^3}\\
&= \frac{(2 - 3\gamma)V_H - (2 - \gamma)x}{(V_H + x)^3}.
\end{aligned}
$$

For $\gamma = 2/3$, $2 - 3\gamma = 0$ and $2 - \gamma = 4/3$, so

$$f'(x) = -\frac{\tfrac43\,x}{(V_H + x)^3} < 0 \quad\text{for all } x > 0 .$$

The derivative vanishes only at $x = 0$ (a flat start), so the load noise **decreases monotonically as $R_S$ grows**: there is no interior minimum, and the best choice is the largest $x$ allowed, $x \to V_H$.

**Numerical check** with $u = x/V_H$ and $\gamma = 2/3$, $f = \dfrac{\tfrac23 + \tfrac43u}{(1 + u)^2}\cdot\dfrac{1}{V_H}$:

| $u = I_DR_S/V_H$ | $\lvert V_{ov2}\rvert$ | $V_H f(x)$ | $\overline{I_{n,L}^2}$ in units of $8kTI_D/V_H$ |
|---|---|---|---|
| 0 | $V_H$ | $0.667/1 = 0.667$ | 0.667 |
| 0.25 | $0.75V_H$ | $1.000/1.5625 = 0.640$ | 0.640 |
| 0.50 | $0.50V_H$ | $1.333/2.25 = 0.593$ | 0.593 |
| 0.75 | $0.25V_H$ | $1.667/3.0625 = 0.544$ | 0.544 |
| 1 (limit) | $\to 0$ | $2.000/4 = 0.500$ | 0.500 |

### Step 5 — The two endpoints and the physical reason

**$R_S = 0$** ($x = 0$, all headroom used as overdrive): $g_{m2} = 2I_D/V_H$ and

$$\overline{I_{n,L}^2}\Big|_{R_S = 0} = 8kT\gamma\frac{I_D}{V_H} = 4kT\gamma\cdot\frac{2I_D}{V_H}.$$

**$R_S \to V_H/I_D$** ($x \to V_H$, overdrive of $M_2$ tending to zero):

$$\overline{I_{n,L}^2}\Big|_{x \to V_H} = 8kTI_D\frac{\gamma V_H + (2 - \gamma)V_H}{(2V_H)^2} = 8kTI_D\frac{2V_H}{4V_H^2} = \frac{4kTI_D}{V_H} = \frac{4kT}{R_S}.$$

The ratio is

$$\frac{8kT\gamma I_D/V_H}{4kTI_D/V_H} = 2\gamma = 2\times\frac23 = \frac43 ,$$

so moving all the headroom onto $R_S$ cuts the load noise current by 4/3. The reason: carrying a current $I$ with a voltage $V$ across it, a resistor has noise current $4kT/R = 4kT\,I/V$, while a saturated MOSFET with overdrive $V$ has $4kT\gamma g_m = 4kT\gamma\cdot 2I/V$, noisier by $2\gamma > 1$.

In practice $(W/L)_2 = 2I_D/[\mu_pC_{ox}(V_H - x)^2]$ grows without bound as $x \to V_H$, so $M_2$ gets the smallest practical overdrive (a wide device near the edge of strong inversion) and the rest of $V_H$ goes across $R_S$, with $V_b = V_{DD} - I_DR_S - |V_{TH2}| - |V_{ov2}|$. (For $\gamma < 2/3$ a stationary point $x = (2 - 3\gamma)V_H/(2 - \gamma)$ appears, but $f'$ changes from positive to negative there, so it is a noise *maximum*; the minimum is still at an endpoint.)

### Result

The load noise current, with the headroom constraint built in ($x = I_DR_S$, $|V_{ov2}| = V_H - x$), is

$$\overline{I_{n,L}^2} = \frac{4kT(\gamma g_{m2} + g_{m2}^2R_S)}{(1 + g_{m2}R_S)^2} = 8kTI_D\,\frac{\gamma(V_H - x) + 2x}{(V_H + x)^2},$$

and $\overline{V_{n,in}^2} = 4kT\gamma/g_{m1} + \overline{I_{n,L}^2}/g_{m1}^2$. For $\gamma = 2/3$ its derivative is $\propto -x \le 0$, so the noise **decreases monotonically with $R_S$**. The input-referred noise is minimized by making $R_S$ as large as the headroom allows:

$$R_S \to \frac{V_H}{I_D},$$

with $M_2$'s overdrive made as small as practical (a wide $M_2$). The load noise then approaches $4kT/R_S = 4kTI_D/V_H$, compared with $8kT\gamma I_D/V_H$ for $R_S = 0$: an improvement by $2\gamma = 4/3$.

**Common mistake.** Optimizing $\overline{I_{n,L}^2}$ with $g_{m2}$ held constant. With $I_D$ and $V_H$ fixed, $g_{m2} = 2I_D/(V_H - I_DR_S)$ rises with $R_S$; ignoring this gives wrong conclusions such as an interior optimum ($R_S = 1/g_{m2}$) or "make $R_S$ infinite".

**Common mistake.** Concluding that $R_S = 0$ is best because a resistor adds its own noise. It adds $4kTR_S$, but its degeneration divides $M_2$'s noise by $(1 + g_{m2}R_S)^2$, and for the same current and voltage a resistor ($4kTI/V$) is quieter than a saturated MOSFET ($8kT\gamma I/V$) whenever $2\gamma > 1$.

**Common mistake.** Claiming that $R_S$ does not matter because $M_1$'s noise dominates. The load term $\overline{I_{n,L}^2}/g_{m1}^2$ is of the same order as $4kT\gamma/g_{m1}$ and is exactly the part that $R_S$ controls.
