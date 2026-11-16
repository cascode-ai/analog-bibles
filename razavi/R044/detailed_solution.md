# Detailed solution - R044

**Approach.** Call the node between the two transistors $X$. Write each transistor's square-law current in terms of $V_{GS}$, $V_{DS}$ and $V_X$, decide which region each device is in, and use the fact that the same current flows through both. Eliminating $V_X$ gives $I_D(V_{GS}, V_{DS})$, which turns out to be exactly the characteristic of one transistor with aspect ratio $W/(2L)$.

### Step 1 — Labels and terminal voltages

Call the upper transistor $M_1$ and the lower one $M_2$. Measure all voltages from the bottom terminal (the source of the composite device):

- the common gate is at $V_{GS}$;
- the top terminal (drain of $M_1$) is at $V_{DS}$;
- the middle node $X$ (source of $M_1$, drain of $M_2$) is at $V_X$.

Define the device constant and the overdrive voltage of the composite structure:

$$k = \mu_nC_{ox}\frac{W}{L}, \qquad V_{ov} = V_{GS} - V_{TH},$$

where $\mu_n$ is the electron mobility, $C_{ox}$ the gate-oxide capacitance per unit area and $V_{TH}$ the threshold voltage.

The terminal voltages of each transistor are:

$$
\begin{aligned}
M_2:&\quad V_{GS2} = V_{GS}, & V_{DS2} &= V_X,\\
M_1:&\quad V_{GS1} = V_{GS} - V_X, & V_{DS1} &= V_{DS} - V_X .
\end{aligned}
$$

Because $\gamma = 0$ there is no body effect: although the source of $M_1$ sits at $V_X > 0$, its threshold is the same $V_{TH}$. Because $\lambda = 0$, the saturation current does not depend on $V_{DS}$. We consider $V_{DS} \ge 0$, so current flows downward and $0 \le V_X \le V_{DS}$.

### Step 2 — The cut-off case

If $V_{GS} \le V_{TH}$, then $M_2$ has no channel, and $M_1$, with $V_{GS1} = V_{GS} - V_X \le V_{TH}$, has none either. Hence

$$I_D = 0 \qquad (V_{GS} \le V_{TH}).$$

From now on $V_{GS} > V_{TH}$, i.e. $V_{ov} > 0$.

### Step 3 — $M_2$ is always in the triode region

For current to flow, $M_1$ must be on:

$$V_{GS1} > V_{TH} \;\Longleftrightarrow\; V_{GS} - V_X > V_{TH} \;\Longleftrightarrow\; V_X < V_{ov} .$$

But $V_X$ is the drain–source voltage of $M_2$, and $V_{ov}$ is its overdrive. So $V_{DS2} < V_{GS2} - V_{TH}$, the condition for the **triode region**. $M_2$ can never saturate while the stack conducts: its drain is held below $V_{GS} - V_{TH}$ by $M_1$, which needs a positive $V_{GS1} - V_{TH}$ to conduct.

**Triode current of $M_2$**, written in a convenient form:

$$
\begin{aligned}
I_D &= k\left[V_{ov}V_X - \frac{V_X^2}{2}\right]\\
&= \frac{k}{2}\left[2V_{ov}V_X - V_X^2\right]\\
&= \frac{k}{2}\left[V_{ov}^2 - (V_{ov} - V_X)^2\right].
\end{aligned}
$$

(The last line follows from $(V_{ov} - V_X)^2 = V_{ov}^2 - 2V_{ov}V_X + V_X^2$.) In words: the triode current is $k/2$ times the difference of the squared overdrives at the source end ($V_{ov}$) and at the drain end ($V_{ov} - V_X$) of the channel.

### Step 4 — Region of $M_1$

The overdrive of $M_1$ is

$$V_{ov1} = V_{GS1} - V_{TH} = V_{GS} - V_X - V_{TH} = V_{ov} - V_X .$$

$M_1$ is saturated when $V_{DS1} \ge V_{ov1}$:

$$V_{DS} - V_X \ge V_{ov} - V_X \;\Longleftrightarrow\; V_{DS} \ge V_{ov} .$$

$V_X$ cancels, so the boundary between the two cases is simply $V_{DS} = V_{GS} - V_{TH}$, exactly as for a single transistor.

### Step 5 — Case A: $V_{DS} \ge V_{ov}$ ($M_1$ saturated)

**Saturation current of $M_1$:**

$$I_D = \frac{k}{2}V_{ov1}^2 = \frac{k}{2}(V_{ov} - V_X)^2 .$$

The same current flows in $M_2$, so equate with Step 3:

$$\frac{k}{2}(V_{ov} - V_X)^2 = \frac{k}{2}\left[V_{ov}^2 - (V_{ov} - V_X)^2\right].$$

Cancel $k/2$ and collect the $(V_{ov} - V_X)^2$ terms:

$$2\,(V_{ov} - V_X)^2 = V_{ov}^2 \quad\Longrightarrow\quad (V_{ov} - V_X)^2 = \frac{V_{ov}^2}{2} .$$

Substitute back into the $M_1$ equation:

$$I_D = \frac{k}{2}\cdot\frac{V_{ov}^2}{2} = \frac{k}{4}V_{ov}^2 = \frac12\,\mu_nC_{ox}\frac{W}{2L}\,(V_{GS} - V_{TH})^2 .$$

The middle node sits at $V_X = V_{ov}(1 - 1/\sqrt2) = 0.293\,V_{ov}$, independent of $V_{DS}$, as expected when $M_1$ acts as a current source and $\lambda = 0$.

### Step 6 — Case B: $0 \le V_{DS} < V_{ov}$ ($M_1$ in triode)

Write the **triode current of $M_1$** in the same "difference of squares" form as in Step 3, with source-end overdrive $V_{ov} - V_X$ and drain-end overdrive $V_{ov1} - V_{DS1} = (V_{ov} - V_X) - (V_{DS} - V_X) = V_{ov} - V_{DS}$:

$$
\begin{aligned}
I_D &= k\left[(V_{ov} - V_X)(V_{DS} - V_X) - \frac{(V_{DS} - V_X)^2}{2}\right]\\
&= \frac{k}{2}\left[(V_{ov} - V_X)^2 - (V_{ov} - V_{DS})^2\right].
\end{aligned}
$$

We now have two expressions for the same $I_D$:

$$
\begin{aligned}
M_2:\quad I_D &= \frac{k}{2}\left[V_{ov}^2 - (V_{ov} - V_X)^2\right],\\
M_1:\quad I_D &= \frac{k}{2}\left[(V_{ov} - V_X)^2 - (V_{ov} - V_{DS})^2\right].
\end{aligned}
$$

**Add them.** The unknown term $(V_{ov} - V_X)^2$ cancels:

$$2I_D = \frac{k}{2}\left[V_{ov}^2 - (V_{ov} - V_{DS})^2\right].$$

Expand the bracket, $V_{ov}^2 - (V_{ov} - V_{DS})^2 = 2V_{ov}V_{DS} - V_{DS}^2$:

$$2I_D = \frac{k}{2}\left[2V_{ov}V_{DS} - V_{DS}^2\right] = k\left[V_{ov}V_{DS} - \frac{V_{DS}^2}{2}\right].$$

Divide by 2:

$$I_D = \frac{k}{2}\left[V_{ov}V_{DS} - \frac{V_{DS}^2}{2}\right] = \mu_nC_{ox}\frac{W}{2L}\left[(V_{GS} - V_{TH})V_{DS} - \frac{V_{DS}^2}{2}\right].$$

**Check of continuity.** At $V_{DS} = V_{ov}$ this gives $\tfrac{k}{2}\cdot\tfrac{V_{ov}^2}{2} = \tfrac{k}{4}V_{ov}^2$, the same as Case A.

**Check that $V_X$ is physical.** From the $M_2$ equation, $(V_{ov} - V_X)^2 = V_{ov}^2 - 2I_D/k = \tfrac12[V_{ov}^2 + (V_{ov} - V_{DS})^2]$. This lies between $(V_{ov} - V_{DS})^2$ and $V_{ov}^2$, so $0 \le V_X \le V_{DS}$, as assumed.

### Step 7 — Interpretation: one channel of length $2L$

The results are exactly the equations of a single transistor with aspect ratio $W/(2L)$. The reason is physical: with equal thresholds and gates, the two channels form one continuous channel of length $2L$, and node $X$ is just the point at its middle. The gradual-channel derivation confirms it. In the channel, $I_D = \mu_nC_{ox}W\,[V_{GS} - V(x) - V_{TH}]\,dV/dx$, where $V(x)$ is the channel potential at position $x$. Integrating $x$ from 0 to $2L$ and $V$ from 0 to $V_{DS}$:

$$I_D\cdot2L = \mu_nC_{ox}W\left[V_{ov}V_{DS} - \frac{V_{DS}^2}{2}\right] \quad\Longrightarrow\quad I_D = \mu_nC_{ox}\frac{W}{2L}\left[V_{ov}V_{DS} - \frac{V_{DS}^2}{2}\right],$$

the same as Step 6. This is why stacking devices is a common way to make long-channel transistors from minimum-length cells.

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

**Common mistake.** Assuming both transistors are saturated and splitting $V_{DS}$ between them. The bottom device can never saturate: for the top device to conduct, $V_X$ must be below $V_{GS} - V_{TH}$, which keeps the bottom device in triode. Equating two saturation currents forces $V_X = 0$ and returns the single-device current $\tfrac{k}{2}V_{ov}^2$, but with $V_X = 0$ the bottom device has $V_{DS2} = 0$ and cannot be saturated, so the assumption contradicts itself.

**Common mistake.** Concluding that the equivalent aspect ratio is $W/L$ ("same width, same current") or $2W/L$ (adding devices as if in parallel). Devices in **series** add channel length, so the aspect ratio is halved to $W/(2L)$, and the saturation current is half that of one device.

**Common mistake.** Forgetting that the result needs $\gamma = 0$. With body effect, the top device's source at $V_X$ raises its threshold, the two channel sections no longer match, and the stack is no longer exactly equivalent to one transistor of length $2L$.
