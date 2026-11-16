# Detailed solution - R543

**Approach.** Represent the noise of $M_1$ and $M_2$ by current sources $i_{n1}$ and $i_{n2}$ injected into nodes A and B. Solve the two node equations and the op-amp equation for $v_B$, and add the two uncorrelated contributions in power. The large-gain limit shows that the loop cannot remove the *difference* between the two noise currents.

### Step 1 — The small-signal model with noise sources

- The op amp gives $v_P = A_0(v_+ - v_-) = A_0(v_B - v_A)$ ($V_{n,op} = 0$).
- At A (drain of $M_1$), $M_1$'s small-signal current $g_{mP}v_P$ is drawn out of A, i.e. a source from A to ground (raising the PMOS gate reduces the current flowing into A); the bipolar device is $1/g_{mN}$ to ground, and $i_{n1}$ is injected into A.
- At B (drain of $M_2$, the output), the same $g_{mP}v_P$ is drawn out of B, the branch resistance to ground is $R_1 + 1/g_{mN}$, and $i_{n2}$ is injected into B.

Each noise current has the given spectral density $\overline{i_n^2}$; $i_{n1}$ and $i_{n2}$ come from different devices and are uncorrelated.

<!-- diagram: diagram-01.cir -->

### Step 2 — Node equations

The net current into each node flows to ground through its branch resistance:

$$v_A = \frac{i_{n1} - g_{mP}v_P}{g_{mN}} ,\qquad v_B = \left(i_{n2} - g_{mP}v_P\right)\left(R_1 + \frac{1}{g_{mN}}\right),\qquad v_P = A_0\,(v_B - v_A).$$

### Step 3 — Solve for $v_B$

Let $u = g_{mP}v_P$ (the common PMOS signal current), $r_A = 1/g_{mN}$ and $r_B = R_1 + 1/g_{mN}$, so that $r_B - r_A = R_1$. Multiplying the op-amp equation by $g_{mP}$ and substituting the node voltages:

$$u = A_0g_{mP}\left[r_B(i_{n2} - u) - r_A(i_{n1} - u)\right] = A_0g_{mP}\left[r_Bi_{n2} - r_Ai_{n1} - R_1u\right],$$

$$u\,(1 + A_0g_{mP}R_1) = A_0g_{mP}\,(r_Bi_{n2} - r_Ai_{n1}),\qquad u = \frac{A_0g_{mP}(r_Bi_{n2} - r_Ai_{n1})}{1 + A_0g_{mP}R_1}.$$

Then $v_B = r_B(i_{n2} - u)$:

$$
\begin{aligned}
v_B &= \frac{r_B}{1 + A_0g_{mP}R_1}\left[i_{n2}(1 + A_0g_{mP}R_1) - A_0g_{mP}r_Bi_{n2} + A_0g_{mP}r_Ai_{n1}\right]\\
&= \frac{r_B}{1 + A_0g_{mP}R_1}\left[A_0g_{mP}r_A\,i_{n1} + (1 - A_0g_{mP}r_A)\,i_{n2}\right],
\end{aligned}
$$

using $1 + A_0g_{mP}R_1 - A_0g_{mP}r_B = 1 - A_0g_{mP}r_A$. With $r_A = 1/g_{mN}$ and $r_B/g_{mN} = (1 + g_{mN}R_1)/g_{mN}^2$:

$$\boxed{V_{n,out} = v_B = \frac{(1 + g_{mN}R_1)\left[A_0g_{mP}\,(i_{n1} - i_{n2}) + g_{mN}\,i_{n2}\right]}{g_{mN}^2\,(1 + A_0g_{mP}R_1)}}$$

### Step 4 — Output noise power (exact)

The coefficients of $i_{n1}$ and $i_{n2}$ are

$$K_1 = \frac{(1 + g_{mN}R_1)A_0g_{mP}}{g_{mN}^2(1 + A_0g_{mP}R_1)},\qquad K_2 = \frac{(1 + g_{mN}R_1)(g_{mN} - A_0g_{mP})}{g_{mN}^2(1 + A_0g_{mP}R_1)},$$

and the uncorrelated, equal-density sources add in power:

$$\overline{V_{n,out}^2} = (K_1^2 + K_2^2)\,\overline{i_n^2} = \left[\frac{1 + g_{mN}R_1}{g_{mN}^2(1 + A_0g_{mP}R_1)}\right]^2\left[(A_0g_{mP})^2 + (A_0g_{mP} - g_{mN})^2\right]\overline{i_n^2}.$$

### Step 5 — Large-gain approximation

For $A_0g_{mP}R_1 \gg 1$ and $A_0g_{mP} \gg g_{mN}$, the $g_{mN}i_{n2}$ term and the "1" in the denominator are negligible:

$$V_{n,out} \approx \frac{(1 + g_{mN}R_1)(i_{n1} - i_{n2})}{g_{mN}^2R_1} = (i_{n1} - i_{n2})\,\frac{1}{g_{mN}}\left(1 + \frac{1}{g_{mN}R_1}\right).$$

With infinite gain the loop forces $v_A = v_B$ but can only change the *common* current $u$, so the difference $i_{n1} - i_{n2}$ remains. With $i_B$ flowing down branch B and $i_B + (i_{n1} - i_{n2})$ down branch A, equal voltages require

$$\frac{i_B + i_{n1} - i_{n2}}{g_{mN}} = i_B\left(R_1 + \frac{1}{g_{mN}}\right)\quad\Longrightarrow\quad i_B = \frac{i_{n1} - i_{n2}}{g_{mN}R_1},$$

and $v_B = i_B(R_1 + 1/g_{mN})$ reproduces the result above. Since only the small $R_1$ distinguishes the branches, a small current difference produces a large branch current: **the PMOS noise is not suppressed by the loop gain.** With two uncorrelated sources:

$$\boxed{\overline{V_{n,out}^2} \approx 2\left(\frac{1}{g_{mN}}\right)^2\left(1 + \frac{1}{g_{mN}R_1}\right)^2\left[4kT\gamma g_{mP} + \frac{K_P}{C_{ox}WLf}\,g_{mP}^2\right]}$$

The first term in the bracket is thermal noise, the second flicker noise, which dominates at low frequencies.

### Step 6 — Interpretation for a real bandgap core

With a bipolar current $I$, $g_{mN} = I/V_T$, and with emitter-area ratio $n$, $IR_1 = V_T\ln n$, so $g_{mN}R_1 = \ln n$ and

$$\overline{V_{n,out}^2} \approx 2\left(\frac{V_T}{I}\right)^2\left(1 + \frac{1}{\ln n}\right)^2\overline{i_n^2}.$$

**Example (thermal part only).** $I = 10\ \mu$A, $n = 8$, PMOS overdrive 0.2 V so $g_{mP} = 2I/V_{ov} = 0.1$ mS, $\gamma = 2/3$, $T = 300$ K:

$$
\begin{aligned}
\frac{1}{g_{mN}} &= \frac{26\ \mathrm{mV}}{10\ \mu\mathrm{A}} = 2.6\ \mathrm{k\Omega},\qquad 1 + \frac{1}{\ln8} = 1.48,\\
4kT\gamma g_{mP} &= 4(1.38\times10^{-23})(300)\tfrac23(10^{-4}) = 1.10\times10^{-24}\ \mathrm{A^2/Hz},\\
\overline{V_{n,out}^2} &\approx 2\,(2.6\ \mathrm{k\Omega})^2(1.48)^2(1.10\times10^{-24}) = 3.3\times10^{-17}\ \mathrm{V^2/Hz},
\end{aligned}
$$

i.e. about 5.7 nV/√Hz from the PMOS thermal noise alone. At a fixed PMOS overdrive $g_{mP} \propto I$, so the thermal part scales as $1/I$ in power ($1/\sqrt I$ in rms); large-area PMOS devices reduce the flicker part.

### Result

With $i_{n1}$, $i_{n2}$ injected at A and B:

$$V_{n,out} = \frac{(1 + g_{mN}R_1)\left[A_0g_{mP}(i_{n1} - i_{n2}) + g_{mN}i_{n2}\right]}{g_{mN}^2(1 + A_0g_{mP}R_1)},$$

$$\overline{V_{n,out}^2} = \left[\frac{1 + g_{mN}R_1}{g_{mN}^2(1 + A_0g_{mP}R_1)}\right]^2\left[(A_0g_{mP})^2 + (A_0g_{mP} - g_{mN})^2\right]\overline{i_n^2}.$$

For large op-amp gain ($A_0g_{mP} \gg g_{mN}$, $A_0g_{mP}R_1 \gg 1$):

$$\overline{V_{n,out}^2} \approx 2\left(\frac{1}{g_{mN}}\right)^2\left(1 + \frac{1}{g_{mN}R_1}\right)^2\left[4kT\gamma g_{mP} + \frac{K_P}{C_{ox}WLf}g_{mP}^2\right].$$

The PMOS noise is not suppressed by the loop gain. In a real core $g_{mN}R_1 = \ln n$ and $1/g_{mN} = V_T/I$.

**Common mistake.** Assuming the feedback loop suppresses the PMOS noise as $A_0 \to \infty$. The loop controls only the *common* PMOS current; the difference $i_{n1} - i_{n2}$ remains and is converted to voltage with gain $(1/g_{mN})(1 + 1/(g_{mN}R_1))$.

**Common mistake.** Letting $i_{n1}$ and $i_{n2}$ cancel because the transistors are identical. Their spectra are equal but their waveforms are independent, so their difference has twice the power of either: hence the factor 2.

**Common mistake.** Writing the PMOS noise current with the bipolar transconductance, e.g. $4kT\gamma g_{mN}$. Each noise current uses its own device's $g_{mP}$; $g_{mN}$ appears only in the impedances.
