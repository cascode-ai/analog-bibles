# Detailed solution - R363

**Approach.** Refer all thermal noise to the input of the common-source stage. The noise of $M_1$ is fixed by $I_D$ and $(W/L)_1$, so only the noise current of the load ($M_2$ together with $R_S$) can be changed. We compute that noise current as a function of $R_S$, impose the headroom constraint $V_H = I_DR_S + |V_{GS2} - V_{TH2}|$, and minimize the result.

### Step 1 — What has to be minimized

Reading the figure:

- $M_1$ is an NMOS common-source (CS) amplifier: gate at $V_{in}$, source grounded, drain at $V_{out}$.
- $M_2$ is a PMOS current-source load: gate at the fixed bias $V_b$, drain at $V_{out}$, and source connected to $V_{DD}$ through the degeneration resistor $R_S$.

The **input-referred noise voltage** $\overline{V_{n,in}^2}$ is the noise voltage which, placed in series with the gate of a noiseless copy of the circuit, gives the same output noise. All noise sources here (channel noise of $M_1$, channel noise of $M_2$, thermal noise of $R_S$) are uncorrelated, so their powers add.

Every noise source in the circuit ends up as a noise *current* flowing into the output node. Let $R_{out}$ be the total small-signal resistance at the output node. A total noise current $\overline{I_{n,out}^2}$ produces an output noise voltage $\overline{I_{n,out}^2}R_{out}^2$, and the voltage gain is $g_{m1}R_{out}$ in magnitude. Dividing:

$$\overline{V_{n,in}^2} = \frac{\overline{I_{n,out}^2}\,R_{out}^2}{g_{m1}^2R_{out}^2} = \frac{\overline{I_{n,out}^2}}{g_{m1}^2}.$$

$R_{out}$ cancels, so it does not matter that channel-length modulation is neglected (which makes $R_{out}$ very large).

The total output noise current has two uncorrelated parts:

- $M_1$'s channel noise, $4kT\gamma g_{m1}$, where $k$ is Boltzmann's constant, $T$ the absolute temperature and $g_{m1}$ the transconductance of $M_1$;
- the load noise current $\overline{I_{n,L}^2}$ produced by $M_2$ and $R_S$ (found in Step 2).

Therefore

$$\overline{V_{n,in}^2} = \frac{4kT\gamma g_{m1} + \overline{I_{n,L}^2}}{g_{m1}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{\overline{I_{n,L}^2}}{g_{m1}^2}.$$

With the square law, $g_{m1} = \sqrt{2\mu_nC_{ox}(W/L)_1I_D}$ depends only on $I_D$ and $(W/L)_1$, which are not affected by the choice of $R_S$. So **minimizing $\overline{V_{n,in}^2}$ is the same as minimizing the load noise current $\overline{I_{n,L}^2}$.**

### Step 2 — Noise current delivered by the degenerated load

**Small-signal model in words.** To find the noise current that the load pushes into the output node, short the output (drain of $M_2$) to AC ground. The supply $V_{DD}$ and the gate bias $V_b$ are also AC ground. One internal node remains: the source of $M_2$, called S, with small-signal voltage $v_s$. Since the gate is grounded, $v_{sg} = v_s$. The elements are:

- $R_S$ between AC ground ($V_{DD}$) and S, with its thermal-noise voltage $\overline{v_{nR}^2} = 4kTR_S$ in series;
- the controlled current $g_{m2}v_{sg} = g_{m2}v_s$ flowing from S to the output (drain) through $M_2$;
- $M_2$'s channel-noise current $i_{n2}$, $\overline{i_{n2}^2} = 4kT\gamma g_{m2}$, also between S and the drain;
- no $r_O$ (channel-length modulation neglected) and no $g_{mb}$ (body effect neglected).

<!-- diagram: diagram-01.cir -->

The output noise current is the current $i_{out}$ leaving the drain into the shorted output node.

**(a) Noise of $M_2$ alone** ($v_{nR} = 0$). KCL at node S: the current arriving through $R_S$ equals the current leaving through the transistor.

$$
\begin{aligned}
\frac{0 - v_s}{R_S} &= g_{m2}v_s + i_{n2}\\
-v_s\left(\frac{1}{R_S} + g_{m2}\right) &= i_{n2}\\
v_s &= -\frac{i_{n2}R_S}{1 + g_{m2}R_S}.
\end{aligned}
$$

The current leaving the drain is the controlled current plus the noise current:

$$
\begin{aligned}
i_{out} &= g_{m2}v_s + i_{n2}\\
&= i_{n2}\left(1 - \frac{g_{m2}R_S}{1 + g_{m2}R_S}\right)\\
&= \frac{i_{n2}}{1 + g_{m2}R_S}.
\end{aligned}
$$

Degeneration suppresses $M_2$'s noise: when $i_{n2}$ tries to flow, it pulls node S down, which reduces $v_{sg}$ and makes the controlled source cancel most of it (negative feedback through $R_S$).

**(b) Noise of $R_S$ alone** ($i_{n2} = 0$). The current through $R_S$ is now $(v_{nR} - v_s)/R_S$. KCL at S:

$$
\begin{aligned}
\frac{v_{nR} - v_s}{R_S} &= g_{m2}v_s\\
v_{nR} &= v_s\,(1 + g_{m2}R_S)\\
v_s &= \frac{v_{nR}}{1 + g_{m2}R_S},
\end{aligned}
$$

so

$$i_{out} = g_{m2}v_s = \frac{g_{m2}\,v_{nR}}{1 + g_{m2}R_S}.$$

**(c) Total load noise.** The two sources are uncorrelated, so add the powers:

$$
\begin{aligned}
\overline{I_{n,L}^2} &= \frac{\overline{i_{n2}^2}}{(1 + g_{m2}R_S)^2} + \frac{g_{m2}^2\,\overline{v_{nR}^2}}{(1 + g_{m2}R_S)^2}\\
&= \frac{4kT\gamma g_{m2} + g_{m2}^2\cdot4kTR_S}{(1 + g_{m2}R_S)^2}\\
&= \frac{4kT\left(\gamma g_{m2} + g_{m2}^2R_S\right)}{(1 + g_{m2}R_S)^2}.
\end{aligned}
$$

Two limits check the result: for $R_S = 0$ it gives $4kT\gamma g_{m2}$ (a plain current source), and for $g_{m2}R_S \gg 1$ it gives $4kTg_{m2}^2R_S/(g_{m2}R_S)^2 = 4kT/R_S$ (the load behaves like the resistor alone).

The expression seems to say "make $R_S$ large", but $R_S$ cannot be raised freely: with $I_D$ fixed, a larger $R_S$ eats into the headroom, which forces a smaller overdrive on $M_2$ and therefore a *larger* $g_{m2}$. We must include this coupling.

### Step 3 — Imposing the headroom constraint

The output swing fixes the total voltage available for the load:

$$V_H = I_DR_S + |V_{ov2}|, \qquad |V_{ov2}| = |V_{GS2} - V_{TH2}| ,$$

where $|V_{ov2}|$ is the overdrive of $M_2$ (the minimum $|V_{DS2}|$ that keeps it saturated). Define the voltage dropped across the resistor,

$$x = I_DR_S, \qquad 0 \le x < V_H,$$

so the overdrive left for $M_2$ is

$$|V_{ov2}| = V_H - x .$$

**Transconductance of $M_2$.** From the square law $I_D = \tfrac12\mu_pC_{ox}(W/L)_2V_{ov2}^2$ and $g_{m2} = \mu_pC_{ox}(W/L)_2|V_{ov2}|$, dividing gives

$$g_{m2} = \frac{2I_D}{|V_{ov2}|} = \frac{2I_D}{V_H - x}.$$

(The width of $M_2$ is chosen to carry $I_D$ at this overdrive, $(W/L)_2 = 2I_D/[\mu_pC_{ox}(V_H - x)^2]$; this is a free design choice.)

**The pieces of $\overline{I_{n,L}^2}$**, one at a time:

$$
\begin{aligned}
g_{m2}R_S &= \frac{2I_D}{V_H - x}\cdot\frac{x}{I_D} = \frac{2x}{V_H - x},\\
1 + g_{m2}R_S &= \frac{V_H - x + 2x}{V_H - x} = \frac{V_H + x}{V_H - x},\\
\gamma g_{m2} &= \frac{2\gamma I_D}{V_H - x},\\
g_{m2}^2R_S &= g_{m2}\,(g_{m2}R_S) = \frac{2I_D}{V_H - x}\cdot\frac{2x}{V_H - x} = \frac{4I_Dx}{(V_H - x)^2}.
\end{aligned}
$$

**Numerator.** Put both terms over $(V_H - x)^2$:

$$\gamma g_{m2} + g_{m2}^2R_S = \frac{2\gamma I_D(V_H - x) + 4I_Dx}{(V_H - x)^2} = \frac{2I_D\left[\gamma(V_H - x) + 2x\right]}{(V_H - x)^2}.$$

**Divide by the denominator** $(1 + g_{m2}R_S)^2 = (V_H + x)^2/(V_H - x)^2$; the factors $(V_H - x)^2$ cancel:

$$\frac{\gamma g_{m2} + g_{m2}^2R_S}{(1 + g_{m2}R_S)^2} = \frac{2I_D\left[\gamma(V_H - x) + 2x\right]}{(V_H + x)^2}.$$

Multiply by $4kT$ and collect the terms in $x$, using $\gamma(V_H - x) + 2x = \gamma V_H + (2 - \gamma)x$:

$$\overline{I_{n,L}^2} = 8kTI_D\,\frac{\gamma V_H + (2 - \gamma)x}{(V_H + x)^2}.$$

Now the load noise depends on the single design variable $x = I_DR_S$, with $I_D$ and $V_H$ fixed.

### Step 4 — Minimizing with respect to $x$

Let

$$f(x) = \frac{\gamma V_H + (2 - \gamma)x}{(V_H + x)^2}.$$

**Derivative** by the quotient rule:

$$
\begin{aligned}
f'(x) &= \frac{(2 - \gamma)(V_H + x)^2 - 2(V_H + x)\left[\gamma V_H + (2 - \gamma)x\right]}{(V_H + x)^4}\\
&= \frac{(2 - \gamma)(V_H + x) - 2\gamma V_H - 2(2 - \gamma)x}{(V_H + x)^3}\\
&= \frac{(2 - \gamma)V_H - 2\gamma V_H + (2 - \gamma)x - 2(2 - \gamma)x}{(V_H + x)^3}\\
&= \frac{(2 - 3\gamma)V_H - (2 - \gamma)x}{(V_H + x)^3}.
\end{aligned}
$$

**Sign for $\gamma = 2/3$.** Then $2 - 3\gamma = 0$ and $2 - \gamma = 4/3$, so

$$f'(x) = -\frac{\tfrac43\,x}{(V_H + x)^3} < 0 \quad\text{for all } x > 0 .$$

The derivative is zero only at $x = 0$ (a flat start) and negative everywhere else. So $f$, and with it the load noise, **decreases monotonically as $R_S$ grows**. There is no interior minimum: the best choice is the largest $x$ the constraint allows, $x \to V_H$.

**Numerical check.** With $u = x/V_H$ and $\gamma = 2/3$, $f = \dfrac{\tfrac23 + \tfrac43u}{(1 + u)^2}\cdot\dfrac{1}{V_H}$:

| $u = I_DR_S/V_H$ | $\lvert V_{ov2}\rvert$ | $V_H f(x)$ | $\overline{I_{n,L}^2}$ in units of $8kTI_D/V_H$ |
|---|---|---|---|
| 0 | $V_H$ | $0.667/1 = 0.667$ | 0.667 |
| 0.25 | $0.75V_H$ | $1.000/1.5625 = 0.640$ | 0.640 |
| 0.50 | $0.50V_H$ | $1.333/2.25 = 0.593$ | 0.593 |
| 0.75 | $0.25V_H$ | $1.667/3.0625 = 0.544$ | 0.544 |
| 1 (limit) | $\to 0$ | $2.000/4 = 0.500$ | 0.500 |

The noise falls steadily across the whole range.

### Step 5 — The two endpoints and the physical reason

**$R_S = 0$ ($x = 0$, all headroom used as overdrive).** Then $g_{m2} = 2I_D/V_H$ and

$$\overline{I_{n,L}^2}\Big|_{R_S = 0} = 8kT\gamma\frac{I_D}{V_H} = 4kT\gamma\cdot\frac{2I_D}{V_H}.$$

**$R_S \to V_H/I_D$ ($x \to V_H$, overdrive of $M_2$ tends to zero).** Then

$$\overline{I_{n,L}^2}\Big|_{x \to V_H} = 8kTI_D\frac{\gamma V_H + (2 - \gamma)V_H}{(2V_H)^2} = 8kTI_D\frac{2V_H}{4V_H^2} = \frac{4kTI_D}{V_H} = \frac{4kT}{R_S}.$$

**Ratio:**

$$\frac{8kT\gamma I_D/V_H}{4kTI_D/V_H} = 2\gamma = 2\times\frac23 = \frac43 .$$

So moving all the headroom onto $R_S$ cuts the load noise current by a factor of 4/3.

**Physical reason.** Compare the two ways of carrying a current $I$ with a voltage $V$ across the device:

- a resistor $R = V/I$ has noise current $4kT/R = 4kT\,I/V$;
- a saturated MOSFET with overdrive $V$ has $g_m = 2I/V$ and noise current $4kT\gamma g_m = 4kT\gamma\cdot 2I/V$.

The transistor is noisier by the factor $2\gamma$, which exceeds 1 for $\gamma = 2/3$. Every volt of headroom moved from $M_2$'s overdrive to $R_S$ therefore lowers the noise.

**Practical limit.** As $x \to V_H$, $|V_{ov2}| \to 0$ and $(W/L)_2 = 2I_D/[\mu_pC_{ox}(V_H - x)^2]$ grows without bound. In practice one gives $M_2$ the smallest overdrive that is still practical (a wide $M_2$, near the edge of strong inversion) and puts the rest of $V_H$ across $R_S$. The gate bias then follows from $V_b = V_{DD} - I_DR_S - |V_{TH2}| - |V_{ov2}|$.

*Aside.* For a device with $\gamma < 2/3$ the stationary point $x = (2 - 3\gamma)V_H/(2 - \gamma)$ appears, but $f'$ changes from positive to negative there, so it is a noise *maximum*. The minimum is still at an endpoint.

### Result

The load noise current, with the headroom constraint built in ($x = I_DR_S$, $|V_{ov2}| = V_H - x$), is

$$\overline{I_{n,L}^2} = \frac{4kT(\gamma g_{m2} + g_{m2}^2R_S)}{(1 + g_{m2}R_S)^2} = 8kTI_D\,\frac{\gamma(V_H - x) + 2x}{(V_H + x)^2},$$

and $\overline{V_{n,in}^2} = 4kT\gamma/g_{m1} + \overline{I_{n,L}^2}/g_{m1}^2$. For $\gamma = 2/3$ its derivative is $\propto -x \le 0$, so the noise **decreases monotonically with $R_S$**. The input-referred noise is minimized by making $R_S$ as large as the headroom allows:

$$R_S \to \frac{V_H}{I_D},$$

with $M_2$'s overdrive made as small as practical (a wide $M_2$). The load noise then approaches $4kT/R_S = 4kTI_D/V_H$, compared with $8kT\gamma I_D/V_H$ for $R_S = 0$: an improvement by $2\gamma = 4/3$.

**Common mistake.** Optimizing $\overline{I_{n,L}^2}$ with $g_{m2}$ held constant. With $I_D$ and $V_H$ fixed, $g_{m2} = 2I_D/(V_H - I_DR_S)$ rises as $R_S$ rises. Ignoring this coupling gives wrong conclusions such as an interior optimum (for example $R_S = 1/g_{m2}$) or "make $R_S$ infinite".

**Common mistake.** Concluding that $R_S = 0$ is best because "a resistor adds its own noise". The resistor does add $4kTR_S$, but its degeneration also divides $M_2$'s noise by $(1 + g_{m2}R_S)^2$. For the same current and voltage drop, a resistor ($4kTI/V$) is quieter than a saturated MOSFET ($8kT\gamma I/V$) whenever $2\gamma > 1$.

**Common mistake.** Claiming that $R_S$ does not affect the noise because $M_1$'s noise dominates. $M_1$'s term $4kT\gamma/g_{m1}$ is indeed fixed, but the load term $\overline{I_{n,L}^2}/g_{m1}^2$ is of the same order and is exactly the part that $R_S$ controls.
