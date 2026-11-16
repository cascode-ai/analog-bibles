# Detailed solution - R365

**Approach.** Find the input-referred noise current of the common-gate (CG) stage with the input open (output noise divided by the transimpedance $R_D$ squared), impose the rms ratio of 1/5 between $M_2$'s and $R_D$'s contributions, solve for $g_{m2}$, and convert it to $(W/L)_2$ at $I_D = 0.5$ mA.

### Step 1 — Input-referred noise current: which sources contribute

$C_0$ makes the gate of $M_2$ a clean ac ground, so $M_2$ adds only its channel noise $\overline{I_{n2}^2} = 4kT\gamma g_{m2}$, from the input node to ground. The other sources are $M_1$, $\overline{I_{n1}^2} = 4kT\gamma g_{m1}$ between drain and source, and $R_D$, $\overline{I_{nD}^2} = 4kT/R_D$ in parallel with it.

With the input open, the gate of $M_1$ is ac ground, so $v_{gs1} = -v_{in}$. Between out and in flow $g_{m1}v_{gs1}$ and $I_{n1}$ (drain to source of $M_1$); from in to ground flows only $I_{n2}$ ($M_2$'s gate is at ac ground and, with $\lambda = 0$, it has no $r_O$); $R_D$ and $I_{nD}$ connect out to ground.

<!-- diagram: diagram-01.cir -->

**KCL at the input node.** The channel current of $M_1$ enters the node and $I_{n2}$ leaves it:

$$g_{m1}v_{gs1} + I_{n1} = I_{n2}.$$

So the total current through $M_1$, which is what reaches $R_D$, equals $I_{n2}$ *whatever* $I_{n1}$ is.

- **$M_1$'s noise contributes nothing.** With $I_{n2} = 0$ the source node moves by $I_{n1}/g_{m1}$ so that the controlled current cancels $I_{n1}$.
- **$M_2$'s noise current flows entirely through $M_1$ into $R_D$.** It sits where an input current would be applied, so it is already input-referred.

**Output node.** $I_{n2}$ is drawn up through $M_1$ from the output, and $I_{nD}$ flows in parallel with $R_D$:

$$v_{out} = -R_D\,(I_{n2} + I_{nD}), \qquad \overline{V_{n,out}^2} = R_D^2\left(4kT\gamma g_{m2} + \frac{4kT}{R_D}\right).$$

The CG current gain is 1, so the transimpedance is $|v_{out}/i_{in}| = R_D$. Dividing by $R_D^2$:

$$\overline{I_{n,in}^2} = \frac{4kT}{R_D} + 4kT\gamma g_{m2},$$

$4kT/R_D$ from the load and $4kT\gamma g_{m2}$ from the bias transistor $M_2$.

### Step 2 — Imposing the 1/5 ratio on the rms values

The ratio applies to the noise **current** (rms), not to its square:

$$\sqrt{4kT\gamma g_{m2}} = \frac15\sqrt{\frac{4kT}{R_D}} \quad\Longrightarrow\quad 4kT\gamma g_{m2} = \frac{1}{25}\cdot\frac{4kT}{R_D} \quad\Longrightarrow\quad g_{m2} = \frac{1}{25\gamma R_D}.$$

Numbers:

$$g_{m2} = \frac{1}{25\times\tfrac23\times1000\ \Omega} = \frac{1}{16\,667\ \Omega} = 60\ \mu\mathrm{S}.$$

$(W/L)_1$ does not appear: $M_1$ does not affect the input-referred current.

### Step 3 — Converting $g_{m2}$ to $(W/L)_2$

Both $g_{m2}$ and $I_{D2}$ are fixed, so use $g_m^2 = 2\mu_nC_{ox}(W/L)I_D$:

$$\left(\frac{W}{L}\right)_2 = \frac{g_{m2}^2}{2\mu_nC_{ox}I_{D2}}.$$

$$
\begin{aligned}
g_{m2}^2 &= (60\times10^{-6}\ \mathrm{S})^2 = 3.6\times10^{-9}\ \mathrm{S^2},\\
2\mu_nC_{ox}I_{D2} &= 2\,(134\times10^{-6}\ \mathrm{A/V^2})(0.5\times10^{-3}\ \mathrm{A}) = 1.34\times10^{-7}\ \mathrm{A^2/V^2},\\
\left(\frac{W}{L}\right)_2 &= \frac{3.6\times10^{-9}}{1.34\times10^{-7}} = 0.0269 .
\end{aligned}
$$

For example $W = 0.5\ \mu$m and $L = 0.5/0.0269\ \mu\mathrm{m} \approx 18.6\ \mu$m: a long, narrow device, the usual way to make a low-$g_m$ current source.

### Step 4 — Check of the numbers and of feasibility

**Noise values.** With $4kT = 1.656\times10^{-20}$ J:

$$
\begin{aligned}
\frac{4kT}{R_D} &= \frac{1.656\times10^{-20}}{1000} = 1.656\times10^{-23}\ \mathrm{A^2/Hz} \;\Rightarrow\; 4.07\ \mathrm{pA/\sqrt{Hz}},\\
4kT\gamma g_{m2} &= (1.656\times10^{-20})\left(\tfrac23\right)(60\times10^{-6}) = 6.62\times10^{-25}\ \mathrm{A^2/Hz} \;\Rightarrow\; 0.814\ \mathrm{pA/\sqrt{Hz}}.
\end{aligned}
$$

Indeed $0.814/4.07 = 1/5$. The total is $\sqrt{1.656\times10^{-23} + 6.62\times10^{-25}} = 4.15$ pA/√Hz.

**Feasibility.** The overdrive needed to carry 0.5 mA with such a small $g_m$ is

$$V_{ov2} = \frac{2I_{D2}}{g_{m2}} = \frac{2\times0.5\ \mathrm{mA}}{60\ \mu\mathrm{S}} = 16.7\ \mathrm{V}.$$

$M_2$ would need $V_{GS2} \approx V_{TH} + 16.7$ V and $V_{DS2} \ge 16.7$ V to stay saturated, far beyond any realistic supply, so the specification is **not realizable** at $I_D = 0.5$ mA with a square-law device. The reason: $M_2$'s noise is $4kT\gamma\cdot2I_D/V_{ov}$ while $R_D$'s is $4kT/R_D = 4kTI_D/(I_DR_D)$; with $I_DR_D = 0.5$ V, $M_2$'s noise falls well below $R_D$'s only if $V_{ov2}$ is many times 0.5 V. A still-practical $V_{ov2} = 1$ V gives $g_{m2} = 1$ mS and an rms ratio $\sqrt{\gamma g_{m2}R_D} = \sqrt{0.667} = 0.82$, far from 0.2.

### Result

$$\overline{I_{n,in}^2} = \frac{4kT}{R_D} + 4kT\gamma g_{m2}, \qquad \sqrt{4kT\gamma g_{m2}} = \frac15\sqrt{\frac{4kT}{R_D}} \;\Rightarrow\; g_{m2} = \frac{1}{25\gamma R_D} = 60\ \mu\mathrm{S},$$

$$\left(\frac{W}{L}\right)_2 = \frac{g_{m2}^2}{2\mu_nC_{ox}I_D} = \frac{(60\ \mu\mathrm{S})^2}{2(134\ \mu\mathrm{A/V^2})(0.5\ \mathrm{mA})} \approx 0.027$$

(e.g. $W = 0.5\ \mu$m, $L \approx 18.6\ \mu$m). This requires an overdrive $V_{GS2} - V_{TH} = 2I_D/g_{m2} \approx 16.7$ V, so the requirement cannot be met in practice at 0.5 mA.

**Common mistake.** Applying the factor 1/5 to the noise *power*, which gives $g_{m2} = 1/(5\gamma R_D) = 300\ \mu$S and $(W/L)_2 = 0.67$. The rms ratio 1/5 is a power ratio of $1/5^2 = 1/25$.

**Common mistake.** Including $M_1$'s noise in the input-referred current. With the input open, $M_1$'s channel current is forced to equal $I_{n2}$, and its own noise current never reaches $R_D$.

**Common mistake.** Inventing an overdrive (for example $V_{ov} = 0.2$ V) and using $g_m = \mu_nC_{ox}(W/L)V_{ov}$. With $g_{m2}$ and $I_{D2}$ fixed, the overdrive follows as $2I_D/g_{m2}$.
