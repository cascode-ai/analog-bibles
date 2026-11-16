# Detailed solution - R044

**Approach.** Call the node between the two transistors $X$. Write each transistor's square-law current in terms of $V_{GS}$, $V_{DS}$ and $V_X$, decide which region each device is in, and equate the two currents. Eliminating $V_X$ gives $I_D(V_{GS}, V_{DS})$, which is exactly the characteristic of one transistor with aspect ratio $W/(2L)$.

### Step 1 — Terminal voltages and the cut-off case

Call the upper transistor $M_1$ and the lower one $M_2$, and measure all voltages from the bottom terminal. With $k = \mu_nC_{ox}W/L$ and $V_{ov} = V_{GS} - V_{TH}$:

$$
\begin{aligned}
M_2:&\quad V_{GS2} = V_{GS}, & V_{DS2} &= V_X,\\
M_1:&\quad V_{GS1} = V_{GS} - V_X, & V_{DS1} &= V_{DS} - V_X .
\end{aligned}
$$

Since $\gamma = 0$, $M_1$ has the same $V_{TH}$ although its source sits at $V_X > 0$; since $\lambda = 0$, the saturation current does not depend on $V_{DS}$. For $V_{DS} \ge 0$ current flows downward and $0 \le V_X \le V_{DS}$.

If $V_{GS} \le V_{TH}$, $M_2$ has no channel, and neither has $M_1$ ($V_{GS1} = V_{GS} - V_X \le V_{TH}$), so

$$I_D = 0 \qquad (V_{GS} \le V_{TH}).$$

From now on $V_{ov} > 0$.

### Step 2 — $M_2$ is always in the triode region

For current to flow, $M_1$ must be on:

$$V_{GS1} > V_{TH} \;\Longleftrightarrow\; V_{GS} - V_X > V_{TH} \;\Longleftrightarrow\; V_X < V_{ov} .$$

But $V_X = V_{DS2}$ and $V_{ov}$ is the overdrive of $M_2$, so $V_{DS2} < V_{GS2} - V_{TH}$: **$M_2$ is in triode whenever the stack conducts**. Its current, in a convenient form:

$$I_D = k\left[V_{ov}V_X - \frac{V_X^2}{2}\right] = \frac{k}{2}\left[2V_{ov}V_X - V_X^2\right] = \frac{k}{2}\left[V_{ov}^2 - (V_{ov} - V_X)^2\right],$$

i.e. $k/2$ times the difference of the squared overdrives at the source end ($V_{ov}$) and at the drain end ($V_{ov} - V_X$) of the channel.

### Step 3 — Region of $M_1$

The overdrive of $M_1$ is $V_{ov1} = V_{GS} - V_X - V_{TH} = V_{ov} - V_X$, and $M_1$ is saturated when $V_{DS1} \ge V_{ov1}$:

$$V_{DS} - V_X \ge V_{ov} - V_X \;\Longleftrightarrow\; V_{DS} \ge V_{ov} .$$

$V_X$ cancels, so the boundary between the two cases is $V_{DS} = V_{GS} - V_{TH}$, exactly as for a single transistor.

### Step 4 — Case A: $V_{DS} \ge V_{ov}$ ($M_1$ saturated)

$M_1$ carries $I_D = \tfrac{k}{2}V_{ov1}^2 = \tfrac{k}{2}(V_{ov} - V_X)^2$. Equating with the current of $M_2$ (Step 2):

$$\frac{k}{2}(V_{ov} - V_X)^2 = \frac{k}{2}\left[V_{ov}^2 - (V_{ov} - V_X)^2\right] \quad\Longrightarrow\quad 2\,(V_{ov} - V_X)^2 = V_{ov}^2 \quad\Longrightarrow\quad (V_{ov} - V_X)^2 = \frac{V_{ov}^2}{2} .$$

Substituting back into the $M_1$ equation:

$$I_D = \frac{k}{2}\cdot\frac{V_{ov}^2}{2} = \frac{k}{4}V_{ov}^2 = \frac12\,\mu_nC_{ox}\frac{W}{2L}\,(V_{GS} - V_{TH})^2 .$$

The middle node sits at $V_X = V_{ov}(1 - 1/\sqrt2) = 0.293\,V_{ov}$, independent of $V_{DS}$, as expected when $M_1$ acts as a current source and $\lambda = 0$.

### Step 5 — Case B: $0 \le V_{DS} < V_{ov}$ ($M_1$ in triode)

Write the triode current of $M_1$ in the same difference-of-squares form, with source-end overdrive $V_{ov} - V_X$ and drain-end overdrive $V_{ov1} - V_{DS1} = (V_{ov} - V_X) - (V_{DS} - V_X) = V_{ov} - V_{DS}$:

$$
\begin{aligned}
I_D &= k\left[(V_{ov} - V_X)(V_{DS} - V_X) - \frac{(V_{DS} - V_X)^2}{2}\right]\\
&= \frac{k}{2}\left[(V_{ov} - V_X)^2 - (V_{ov} - V_{DS})^2\right].
\end{aligned}
$$

Adding this to the $M_2$ expression, $I_D = \tfrac{k}{2}[V_{ov}^2 - (V_{ov} - V_X)^2]$, cancels the unknown $(V_{ov} - V_X)^2$:

$$2I_D = \frac{k}{2}\left[V_{ov}^2 - (V_{ov} - V_{DS})^2\right] = \frac{k}{2}\left[2V_{ov}V_{DS} - V_{DS}^2\right] = k\left[V_{ov}V_{DS} - \frac{V_{DS}^2}{2}\right],$$

$$I_D = \frac{k}{2}\left[V_{ov}V_{DS} - \frac{V_{DS}^2}{2}\right] = \mu_nC_{ox}\frac{W}{2L}\left[(V_{GS} - V_{TH})V_{DS} - \frac{V_{DS}^2}{2}\right].$$

**Checks.** At $V_{DS} = V_{ov}$ this gives $\tfrac{k}{2}\cdot\tfrac{V_{ov}^2}{2} = \tfrac{k}{4}V_{ov}^2$, continuous with Case A. From the $M_2$ equation, $(V_{ov} - V_X)^2 = V_{ov}^2 - 2I_D/k = \tfrac12[V_{ov}^2 + (V_{ov} - V_{DS})^2]$, which lies between $(V_{ov} - V_{DS})^2$ and $V_{ov}^2$, so $0 \le V_X \le V_{DS}$, as assumed.

### Step 6 — Interpretation: one channel of length $2L$

With equal thresholds and gates, the two channels form one continuous channel of length $2L$, with $X$ at its middle. The gradual-channel relation $I_D = \mu_nC_{ox}W\,[V_{GS} - V(x) - V_{TH}]\,dV/dx$, with $V(x)$ the channel potential, integrated over $x$ from 0 to $2L$ and $V$ from 0 to $V_{DS}$, confirms it:

$$I_D\cdot2L = \mu_nC_{ox}W\left[V_{ov}V_{DS} - \frac{V_{DS}^2}{2}\right] \quad\Longrightarrow\quad I_D = \mu_nC_{ox}\frac{W}{2L}\left[V_{ov}V_{DS} - \frac{V_{DS}^2}{2}\right],$$

the same as Step 5. This is why stacking devices is a common way to make long-channel transistors from minimum-length cells.

### Result

With $V_{ov} = V_{GS} - V_{TH}$:

$$
I_D = \begin{cases}
0, & V_{GS} \le V_{TH},\\[4pt]
\mu_nC_{ox}\dfrac{W}{2L}\left[(V_{GS} - V_{TH})V_{DS} - \dfrac{V_{DS}^2}{2}\right], & 0 \le V_{DS} \le V_{GS} - V_{TH},\\[10pt]
\dfrac12\,\mu_nC_{ox}\dfrac{W}{2L}\,(V_{GS} - V_{TH})^2, & V_{DS} \ge V_{GS} - V_{TH}.
\end{cases}
$$

These are the triode and saturation equations of a single transistor with aspect ratio $W/(2L)$, with the same threshold and the same saturation boundary $V_{DS} = V_{GS} - V_{TH}$. The bottom device is always in triode; the top device sets the region of the composite.

**Common mistake.** Assuming both transistors are saturated and splitting $V_{DS}$ between them. For the top device to conduct, $V_X$ must stay below $V_{GS} - V_{TH}$, which keeps the bottom device in triode; equating two saturation currents forces $V_X = 0$, which contradicts a saturated bottom device.

**Common mistake.** Taking the equivalent aspect ratio as $W/L$ ("same width, same current") or $2W/L$ (as if in parallel). Devices in **series** add channel length, so the aspect ratio is $W/(2L)$ and the saturation current is half that of one device.

**Common mistake.** Forgetting that the result needs $\gamma = 0$. With body effect the top device's threshold rises with $V_X$, and the stack is no longer exactly one transistor of length $2L$.
