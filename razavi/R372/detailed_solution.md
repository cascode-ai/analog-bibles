# Detailed solution - R372

**Approach.** Build the small-signal model of the cascode with the three noise sources ($M_1$, $M_2$, $R_D$) and $C_X$. KCL at X and at the output gives the output voltage in terms of the input and each noise current; dividing by the frequency-dependent gain gives an equivalent input noise voltage, whose terms add in power (the sources are uncorrelated).

### Step 1 — The small-signal noise model

Three nodes matter: in, X and out ($s = j\omega$; no $r_O$ and no $g_{mb}$).

- $M_1$: controlled current $g_{m1}v_{in}$ from X to ground, with its noise current $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_{m1}$) in parallel, also from X to ground.
- $M_2$: gate at ac ground, so $v_{gs2} = -V_X$; controlled current $-g_{m2}V_X$ from out to X, with its noise current $I_{n2}$ ($\overline{I_{n2}^2} = 4kT\gamma g_{m2}$) in parallel, also from out to X.
- $C_X$: from X to ground, carrying $sC_XV_X$.
- $R_D$: from out to ac ground, with its noise current $I_{nR}$ ($\overline{I_{nR}^2} = 4kT/R_D$) injected into out.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at node X

The current arriving at X through $M_2$ leaves through $M_1$ and $C_X$:

$$-g_{m2}V_X + I_{n2} = g_{m1}v_{in} + I_{n1} + sC_XV_X ,$$

$$
\begin{aligned}
-V_X\,(g_{m2} + sC_X) &= g_{m1}v_{in} + I_{n1} - I_{n2}\\
V_X &= \frac{I_{n2} - g_{m1}v_{in} - I_{n1}}{g_{m2} + sC_X}.
\end{aligned}
$$

### Step 3 — Current delivered to the output through $M_2$

The total current through $M_2$ from out to X is $I_2 = -g_{m2}V_X + I_{n2}$. Substituting $V_X$:

$$
\begin{aligned}
I_2 &= -\frac{g_{m2}\left(I_{n2} - g_{m1}v_{in} - I_{n1}\right)}{g_{m2} + sC_X} + \frac{I_{n2}\,(g_{m2} + sC_X)}{g_{m2} + sC_X}\\
&= \frac{-g_{m2}I_{n2} + g_{m2}g_{m1}v_{in} + g_{m2}I_{n1} + g_{m2}I_{n2} + sC_XI_{n2}}{g_{m2} + sC_X}\\
&= \frac{g_{m2}\left(g_{m1}v_{in} + I_{n1}\right) + sC_XI_{n2}}{g_{m2} + sC_X}.
\end{aligned}
$$

The $g_{m2}I_{n2}$ terms cancel, so $I_{n2}$ enters only through $sC_X$.

**KCL at the output.** The current $-v_{out}/R_D$ from $R_D$ plus $I_{nR}$ equals $I_2$:

$$-\frac{v_{out}}{R_D} + I_{nR} = I_2 \quad\Longrightarrow\quad v_{out} = -R_DI_2 + R_DI_{nR}.$$

### Step 4 — Signal gain

With all noise sources off:

$$A_v(s) = \frac{v_{out}}{v_{in}} = -g_{m1}R_D\,\frac{g_{m2}}{g_{m2} + sC_X}.$$

At low frequency this is the cascode gain $-g_{m1}R_D$; at high frequency $C_X$ steals part of $M_1$'s signal current, giving a pole at $\omega_X = g_{m2}/C_X$.

### Step 5 — Referring the noise to the input

With $v_{in} = 0$:

$$v_{n,out} = -R_D\,\frac{g_{m2}I_{n1} + sC_XI_{n2}}{g_{m2} + sC_X} + R_DI_{nR}.$$

Dividing by $A_v(s)$, i.e. multiplying by $-(g_{m2} + sC_X)/(g_{m1}R_Dg_{m2})$:

$$
\begin{aligned}
v_{n,in} &= \frac{g_{m2}I_{n1} + sC_XI_{n2}}{g_{m1}g_{m2}} - \frac{(g_{m2} + sC_X)\,I_{nR}}{g_{m1}g_{m2}}\\
&= \frac{I_{n1}}{g_{m1}} + \frac{sC_X}{g_{m1}g_{m2}}\,I_{n2} - \frac{g_{m2} + sC_X}{g_{m1}g_{m2}}\,I_{nR}.
\end{aligned}
$$

The power is the sum of the squared coefficient magnitudes times the source PSDs, with $s = j\omega$:

**$M_1$ term:**
$$\frac{\overline{I_{n1}^2}}{g_{m1}^2} = \frac{4kT\gamma g_{m1}}{g_{m1}^2} = \frac{4kT\gamma}{g_{m1}}.$$

**$M_2$ term:**
$$\left|\frac{j\omega C_X}{g_{m1}g_{m2}}\right|^2\overline{I_{n2}^2} = \frac{\omega^2C_X^2}{g_{m1}^2g_{m2}^2}\cdot4kT\gamma g_{m2} = \left(\frac{\omega C_X}{g_{m1}}\right)^2\frac{4kT\gamma}{g_{m2}}.$$

**$R_D$ term** (with $|g_{m2} + j\omega C_X|^2 = g_{m2}^2 + \omega^2C_X^2$):
$$\frac{g_{m2}^2 + \omega^2C_X^2}{g_{m1}^2g_{m2}^2}\cdot\frac{4kT}{R_D} = \frac{4kT}{g_{m1}^2R_D} + \left(\frac{\omega C_X}{g_{m1}}\right)^2\frac{4kT}{g_{m2}^2R_D}.$$

**Sum**, grouping the flat and the $\omega^2$ terms:

$$\overline{V_{n,in}^2}(\omega) = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right) + \left(\frac{\omega C_X}{g_{m1}}\right)^2 4kT\left(\frac{\gamma}{g_{m2}} + \frac{1}{g_{m2}^2R_D}\right).$$

### Step 6 — Interpretation

**Low frequency.** Only the first bracket survives, the common-source result: the cascode device adds **no** noise. With $\lambda = 0$, $M_1$ is an ideal current source at X, so X moves by $I_{n2}/g_{m2}$, the controlled current cancels $I_{n2}$, and nothing reaches $R_D$.

**High frequency.** $C_X$ gives $M_2$'s noise current a path to ground, so part of it flows through $R_D$; it also diverts signal current, so $R_D$'s referred noise grows by $1 + \omega^2C_X^2/g_{m2}^2$. Both make the input-referred noise rise as $\omega^2$.

**Where it matters.** With $A = \gamma/g_{m1} + 1/(g_{m1}^2R_D)$ and $B = \gamma/g_{m2} + 1/(g_{m2}^2R_D)$, the $\omega^2$ part equals the flat part when $(\omega C_X/g_{m1})^2B = A$, i.e. at

$$\omega = \frac{g_{m1}}{C_X}\sqrt{\frac{A}{B}} .$$

For $g_{m1} = g_{m2}$ this is $\omega = g_{m2}/C_X$, the pole of node X, normally far above the signal band. ($4kT\,B$ is the input-referred noise of $M_2$ and $R_D$ as a common-gate stage with input at X; $C_X$ turns it into a current $\omega C_X\times$(voltage), referred to the input through $g_{m1}$.)

### Result

$$\overline{V_{n,in}^2}(\omega) = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right) + \left(\frac{\omega C_X}{g_{m1}}\right)^2 4kT\left(\frac{\gamma}{g_{m2}} + \frac{1}{g_{m2}^2R_D}\right).$$

Equivalently: the $M_1$ term $4kT\gamma/g_{m1}$ is unchanged; $M_2$ contributes $4kT\gamma\,\omega^2C_X^2/(g_{m1}^2g_{m2})$; and the $R_D$ term $4kT/(g_{m1}^2R_D)$ is multiplied by $1 + \omega^2C_X^2/g_{m2}^2$. At low frequency $M_2$ contributes nothing; its noise (and the referred noise of $R_D$) rises as $\omega^2$ because $C_X$ opens a path for $M_2$'s noise current and reduces the signal gain.

**Common mistake.** Declaring the cascode device noiseless at all frequencies. That holds only when X has no path to ac ground other than $M_2$; $C_X$ (and, in practice, $r_{O1}$) provides one.

**Common mistake.** Dividing the output noise by the low-frequency gain $g_{m1}R_D$ instead of $g_{m1}R_Dg_{m2}/|g_{m2} + j\omega C_X|$. This misses the $\omega^2$ rise of the $R_D$ term and multiplies the $M_2$ term by $g_{m2}^2/(g_{m2}^2 + \omega^2C_X^2)$.

**Common mistake.** Concluding that $C_X$ *reduces* the noise because $M_1$'s output noise falls at high frequency. The signal falls by the same factor, so $M_1$'s input-referred noise is unchanged, while the other two terms grow.
