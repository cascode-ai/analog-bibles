# Detailed solution - R372

**Approach.** Build the small-signal model of the cascode with the three noise sources ($M_1$, $M_2$, $R_D$) and the capacitance $C_X$. Write KCL at node X and at the output to get the output voltage as a function of the input and of each noise current. Divide by the (frequency-dependent) signal gain to obtain an equivalent input noise voltage, then take the squared magnitude of each term (the sources are uncorrelated).

### Step 1 — The circuit and the small-signal noise model

Reading the figure:

- $M_1$: common-source input device, gate = $V_{in}$, source grounded, drain = node X.
- $M_2$: cascode device, gate at the fixed bias $V_b$ (AC ground), source = X, drain = $V_{out}$.
- $R_D$: load from $V_{out}$ to $V_{DD}$ (AC ground).
- $C_X$: capacitance from X to ground.

**Small-signal model in words.** Three nodes: in, X and out.

- $M_1$ is a controlled current $g_{m1}v_{in}$ from X to ground, with its channel-noise current $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_{m1}$) in parallel, also from X to ground.
- $M_2$ has $v_{gs2} = 0 - V_X = -V_X$ (gate at AC ground), so it is a controlled current $g_{m2}v_{gs2} = -g_{m2}V_X$ from out to X, with its noise current $I_{n2}$ ($\overline{I_{n2}^2} = 4kT\gamma g_{m2}$) in parallel, also from out to X.
- $C_X$ connects X to ground; its current is $sC_XV_X$, where $s = j\omega$.
- $R_D$ connects out to AC ground, with its noise current $I_{nR}$ ($\overline{I_{nR}^2} = 4kT/R_D$) injected into out in parallel with it.
- No $r_O$ (channel-length modulation neglected) and no $g_{mb}$ (body effect neglected).

Here $k$ is Boltzmann's constant, $T$ the absolute temperature, $\gamma$ the channel-noise coefficient and $g_{m1}$, $g_{m2}$ the transconductances.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at node X

The current arriving at X through $M_2$ must leave through $M_1$ and $C_X$:

$$-g_{m2}V_X + I_{n2} = g_{m1}v_{in} + I_{n1} + sC_XV_X .$$

Collect the $V_X$ terms:

$$
\begin{aligned}
-V_X\,(g_{m2} + sC_X) &= g_{m1}v_{in} + I_{n1} - I_{n2}\\
V_X &= \frac{I_{n2} - g_{m1}v_{in} - I_{n1}}{g_{m2} + sC_X}.
\end{aligned}
$$

### Step 3 — Current delivered to the output through $M_2$

The total current through $M_2$ from out to X is

$$I_2 = -g_{m2}V_X + I_{n2}.$$

Substitute $V_X$ and put everything over the common denominator $g_{m2} + sC_X$:

$$
\begin{aligned}
I_2 &= -\frac{g_{m2}\left(I_{n2} - g_{m1}v_{in} - I_{n1}\right)}{g_{m2} + sC_X} + \frac{I_{n2}\,(g_{m2} + sC_X)}{g_{m2} + sC_X}\\
&= \frac{-g_{m2}I_{n2} + g_{m2}g_{m1}v_{in} + g_{m2}I_{n1} + g_{m2}I_{n2} + sC_XI_{n2}}{g_{m2} + sC_X}\\
&= \frac{g_{m2}\left(g_{m1}v_{in} + I_{n1}\right) + sC_XI_{n2}}{g_{m2} + sC_X}.
\end{aligned}
$$

Note how $I_{n2}$ enters only through $sC_X$: the $g_{m2}I_{n2}$ terms cancelled.

**KCL at the output.** The current $-v_{out}/R_D$ arriving from $R_D$, plus the noise current $I_{nR}$, must equal the current $I_2$ leaving through $M_2$:

$$-\frac{v_{out}}{R_D} + I_{nR} = I_2 \quad\Longrightarrow\quad v_{out} = -R_DI_2 + R_DI_{nR}.$$

### Step 4 — Signal gain

With all noise sources off:

$$A_v(s) = \frac{v_{out}}{v_{in}} = -g_{m1}R_D\,\frac{g_{m2}}{g_{m2} + sC_X}.$$

At low frequency this is the familiar cascode gain $-g_{m1}R_D$. At high frequency $C_X$ steals part of $M_1$'s signal current before it reaches $M_2$, and the gain falls (a pole at $\omega_X = g_{m2}/C_X$).

### Step 5 — Referring the noise to the input

With $v_{in} = 0$, the output noise is

$$v_{n,out} = -R_D\,\frac{g_{m2}I_{n1} + sC_XI_{n2}}{g_{m2} + sC_X} + R_DI_{nR}.$$

The equivalent input noise voltage is the input that produces the same output, $v_{n,in} = v_{n,out}/A_v(s)$. Dividing by $A_v = -g_{m1}R_Dg_{m2}/(g_{m2} + sC_X)$ means multiplying by $-(g_{m2} + sC_X)/(g_{m1}R_Dg_{m2})$:

$$
\begin{aligned}
v_{n,in} &= \frac{g_{m2}I_{n1} + sC_XI_{n2}}{g_{m1}g_{m2}} - \frac{(g_{m2} + sC_X)\,I_{nR}}{g_{m1}g_{m2}}\\
&= \frac{I_{n1}}{g_{m1}} + \frac{sC_X}{g_{m1}g_{m2}}\,I_{n2} - \frac{g_{m2} + sC_X}{g_{m1}g_{m2}}\,I_{nR}.
\end{aligned}
$$

The three sources are uncorrelated, so the noise power is the sum of the squared magnitudes of the three coefficients times the source PSDs. With $s = j\omega$:

**$M_1$ term:**
$$\frac{\overline{I_{n1}^2}}{g_{m1}^2} = \frac{4kT\gamma g_{m1}}{g_{m1}^2} = \frac{4kT\gamma}{g_{m1}}.$$

**$M_2$ term:**
$$\left|\frac{j\omega C_X}{g_{m1}g_{m2}}\right|^2\overline{I_{n2}^2} = \frac{\omega^2C_X^2}{g_{m1}^2g_{m2}^2}\cdot4kT\gamma g_{m2} = \left(\frac{\omega C_X}{g_{m1}}\right)^2\frac{4kT\gamma}{g_{m2}}.$$

**$R_D$ term** (here $|g_{m2} + j\omega C_X|^2 = g_{m2}^2 + \omega^2C_X^2$):
$$\frac{g_{m2}^2 + \omega^2C_X^2}{g_{m1}^2g_{m2}^2}\cdot\frac{4kT}{R_D} = \frac{4kT}{g_{m1}^2R_D} + \left(\frac{\omega C_X}{g_{m1}}\right)^2\frac{4kT}{g_{m2}^2R_D}.$$

**Sum**, grouping the frequency-independent and the $\omega^2$ terms:

$$\overline{V_{n,in}^2}(\omega) = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right) + \left(\frac{\omega C_X}{g_{m1}}\right)^2 4kT\left(\frac{\gamma}{g_{m2}} + \frac{1}{g_{m2}^2R_D}\right).$$

### Step 6 — Interpretation

**Low frequency ($\omega \to 0$).** Only the first bracket survives: the input-referred noise of a simple common-source stage with load $R_D$. The cascode device adds **no** noise. The reason: with $\lambda = 0$, $M_1$ is an ideal current source at node X, so $M_2$'s noise current has no path except back through $M_2$ itself. Node X moves by $I_{n2}/g_{m2}$, the controlled current $g_{m2}V_X$ cancels $I_{n2}$, and no noise reaches $R_D$.

**High frequency.** $C_X$ gives $M_2$'s noise current a path to ground, so part of it flows through $R_D$. At the same time $C_X$ diverts signal current, so the gain falls and $R_D$'s noise, referred to the input, grows by the factor $1 + \omega^2C_X^2/g_{m2}^2$. Both effects make the input-referred noise rise as $\omega^2$.

**Where it matters.** Call the two brackets $A = \gamma/g_{m1} + 1/(g_{m1}^2R_D)$ and $B = \gamma/g_{m2} + 1/(g_{m2}^2R_D)$. The frequency-dependent part equals the flat part when $(\omega C_X/g_{m1})^2B = A$, i.e. at

$$\omega = \frac{g_{m1}}{C_X}\sqrt{\frac{A}{B}} .$$

For $g_{m1} = g_{m2}$ the brackets are equal and this is $\omega = g_{m2}/C_X$, the pole frequency of node X, which is normally far above the signal band.

**Interpretation of the second bracket.** $4kT\,B$ is exactly the input-referred noise voltage PSD of $M_2$ and $R_D$ viewed as a common-gate stage (input at X). $C_X$ turns a noise voltage at X into a current $\omega C_X\times$(voltage), and that current is referred to the input by dividing by $g_{m1}$.

### Result

$$\overline{V_{n,in}^2}(\omega) = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right) + \left(\frac{\omega C_X}{g_{m1}}\right)^2 4kT\left(\frac{\gamma}{g_{m2}} + \frac{1}{g_{m2}^2R_D}\right).$$

Equivalently: the $M_1$ term $4kT\gamma/g_{m1}$ is unchanged; $M_2$ contributes $4kT\gamma\,\omega^2C_X^2/(g_{m1}^2g_{m2})$; and the $R_D$ term $4kT/(g_{m1}^2R_D)$ is multiplied by $1 + \omega^2C_X^2/g_{m2}^2$. At low frequency $M_2$ contributes nothing; its noise (and the referred noise of $R_D$) rises as $\omega^2$ because $C_X$ opens a path for $M_2$'s noise current and reduces the signal gain.

**Common mistake.** Declaring the cascode device noiseless at all frequencies. That is only true when node X has no path to AC ground other than $M_2$. $C_X$ (and, in practice, $r_{O1}$) provides such a path, so $M_2$'s noise appears at the output.

**Common mistake.** Dividing the output noise by the low-frequency gain $g_{m1}R_D$ instead of the actual gain $g_{m1}R_Dg_{m2}/|g_{m2} + j\omega C_X|$. This misses the $\omega^2$ increase of the $R_D$ term, and gives a wrong $M_2$ term as well (it would be multiplied by $g_{m2}^2/(g_{m2}^2 + \omega^2C_X^2)$).

**Common mistake.** Concluding that $C_X$ *reduces* the noise because the output noise of $M_1$ falls at high frequency. The signal falls by exactly the same factor, so $M_1$'s input-referred noise is unchanged, while the other two terms grow.
