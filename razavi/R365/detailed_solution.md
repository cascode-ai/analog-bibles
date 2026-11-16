# Detailed solution - R365

**Approach.** Find the input-referred noise current of the common-gate (CG) stage by leaving the input open and dividing the output noise by the transimpedance $R_D$. This shows which devices contribute and how. Then impose the rms ratio of 1/5 between $M_2$'s and $R_D$'s contributions, solve for $g_{m2}$, and convert $g_{m2}$ to $(W/L)_2$ with the square law at $I_D = 0.5$ mA.

### Step 1 — The circuit

Reading the figure:

- $M_1$ is the CG amplifier: gate at the bias $V_b$ (AC ground), source = input node $V_{in}$, drain = output $V_{out}$, loaded by $R_D$ to $V_{DD}$.
- $M_2$ is an NMOS current source from the input node to ground. It mirrors the diode-connected $M_0$, which is fed by $I_1$.
- $C_0$ from the common gate of $M_0$/$M_2$ to ground shunts the noise of $M_0$ (and of $I_1$) to ground. So the gate of $M_2$ is a clean AC ground, and the only noise $M_2$ adds is its own channel noise $\overline{I_{n2}^2} = 4kT\gamma g_{m2}$, drawn between its drain (the input node) and ground.

Bias: $I_{D1} = I_{D2} = 0.5$ mA (all of $M_2$'s current flows through $M_1$), $(W/L)_1 = 50/0.5$, $R_D = 1\ \mathrm{k}\Omega$.

Noise sources:

- $R_D$: $\overline{I_{nD}^2} = 4kT/R_D$, a current in parallel with $R_D$;
- $M_1$: $\overline{I_{n1}^2} = 4kT\gamma g_{m1}$, between its drain and source;
- $M_2$: $\overline{I_{n2}^2} = 4kT\gamma g_{m2}$, from the input node to ground.

Here $k$ is Boltzmann's constant, $T = 300$ K and $\gamma = 2/3$.

### Step 2 — Input-referred noise current: which sources contribute

The **input-referred noise current** $\overline{I_{n,in}^2}$ is found with the input **open** (driven by an ideal current source of infinite impedance). We compute the output noise voltage in that condition and divide by the square of the transimpedance $v_{out}/i_{in}$.

**Small-signal model in words.** Two nodes: the input node "in" (source of $M_1$, drain of $M_2$) and the output node "out" (drain of $M_1$). The gate of $M_1$ is AC ground, so $v_{gs1} = -v_{in}$. Between out and in: the controlled current $g_{m1}v_{gs1}$ and the noise current $I_{n1}$, both flowing from drain to source of $M_1$. From in to ground: only $M_2$'s noise current $I_{n2}$. ($M_2$'s controlled source is zero because its gate is at AC ground, and with $\lambda = 0$ it has no $r_O$.) From out to ground: $R_D$ and its noise current $I_{nD}$.

<!-- diagram: diagram-01.cir -->

**KCL at the input node.** The total channel current of $M_1$ (drain to source) enters the node, and $I_{n2}$ leaves it to ground:

$$g_{m1}v_{gs1} + I_{n1} = I_{n2}.$$

So the total current through $M_1$, which is exactly what reaches $R_D$, equals $I_{n2}$, *whatever* $I_{n1}$ is.

- **$M_1$'s noise contributes nothing.** If $I_{n2} = 0$, the channel current is forced to zero: the source node simply moves by $I_{n1}/g_{m1}$ so that the controlled current cancels $I_{n1}$. With the input open, $M_1$'s noise current has no path outside the device.
- **$M_2$'s noise current flows entirely through $M_1$ into $R_D$.** It sits at the input node, exactly where an input current would be applied, so it is already "input-referred".

**KCL at the output node.** The current $I_{n2}$ comes up through $M_1$ from the output node, and $I_{nD}$ flows in parallel with $R_D$, so

$$v_{out} = -R_D\,(I_{n2} + I_{nD}), \qquad \overline{V_{n,out}^2} = R_D^2\left(4kT\gamma g_{m2} + \frac{4kT}{R_D}\right).$$

**Transimpedance.** A signal current $i_{in}$ injected at the open input must pass through $M_1$ (the CG current gain is 1) and then through $R_D$: $v_{out}/i_{in} = R_D$ in magnitude.

**Divide by $R_D^2$:**

$$\overline{I_{n,in}^2} = \frac{4kT}{R_D} + 4kT\gamma g_{m2}.$$

The two contributions are: $4kT/R_D$ from the load, and $4kT\gamma g_{m2}$ from the bias transistor $M_2$.

### Step 3 — Imposing the 1/5 ratio on the rms values

The problem asks that $M_2$'s contribution to the input-referred noise **current** (the rms value, not the mean-square value) be one-fifth of $R_D$'s:

$$\sqrt{4kT\gamma g_{m2}} = \frac15\sqrt{\frac{4kT}{R_D}} .$$

Square both sides; the factor 1/5 becomes 1/25:

$$4kT\gamma g_{m2} = \frac{1}{25}\cdot\frac{4kT}{R_D}.$$

Cancel $4kT$ and solve for $g_{m2}$:

$$g_{m2} = \frac{1}{25\gamma R_D}.$$

Numbers:

$$g_{m2} = \frac{1}{25\times\tfrac23\times1000\ \Omega} = \frac{1}{16\,667\ \Omega} = 60\ \mu\mathrm{S}.$$

Note that $(W/L)_1$ does not appear: $M_1$ does not affect the input-referred current.

### Step 4 — Converting $g_{m2}$ to $(W/L)_2$

Square-law saturation current and transconductance:

$$I_D = \frac12\mu_nC_{ox}\frac{W}{L}V_{ov}^2, \qquad g_m = \mu_nC_{ox}\frac{W}{L}V_{ov},$$

where $V_{ov} = V_{GS} - V_{TH}$ is the overdrive. Eliminating $V_{ov}$ gives $g_m^2 = 2\mu_nC_{ox}(W/L)I_D$, so

$$\left(\frac{W}{L}\right)_2 = \frac{g_{m2}^2}{2\mu_nC_{ox}I_{D2}}.$$

Numbers:

$$
\begin{aligned}
g_{m2}^2 &= (60\times10^{-6}\ \mathrm{S})^2 = 3.6\times10^{-9}\ \mathrm{S^2},\\
2\mu_nC_{ox}I_{D2} &= 2\,(134\times10^{-6}\ \mathrm{A/V^2})(0.5\times10^{-3}\ \mathrm{A}) = 1.34\times10^{-7}\ \mathrm{A^2/V^2},\\
\left(\frac{W}{L}\right)_2 &= \frac{3.6\times10^{-9}}{1.34\times10^{-7}} = 0.0269 .
\end{aligned}
$$

For example $W = 0.5\ \mu$m and $L = 0.5/0.0269\ \mu\mathrm{m} \approx 18.6\ \mu$m: a long, narrow device, which is the usual way to make a current source with low $g_m$.

### Step 5 — Check of the numbers and of feasibility

**Noise values.** With $4kT = 1.656\times10^{-20}$ J:

$$
\begin{aligned}
\frac{4kT}{R_D} &= \frac{1.656\times10^{-20}}{1000} = 1.656\times10^{-23}\ \mathrm{A^2/Hz} \;\Rightarrow\; 4.07\ \mathrm{pA/\sqrt{Hz}},\\
4kT\gamma g_{m2} &= (1.656\times10^{-20})\left(\tfrac23\right)(60\times10^{-6}) = 6.62\times10^{-25}\ \mathrm{A^2/Hz} \;\Rightarrow\; 0.814\ \mathrm{pA/\sqrt{Hz}}.
\end{aligned}
$$

Indeed $0.814/4.07 = 1/5$. The total is $\sqrt{1.656\times10^{-23} + 6.62\times10^{-25}} = 4.15$ pA/√Hz.

**Region of operation / feasibility.** The overdrive needed to carry 0.5 mA with such a small $g_m$ is

$$V_{ov2} = \frac{2I_{D2}}{g_{m2}} = \frac{2\times0.5\ \mathrm{mA}}{60\ \mu\mathrm{S}} = 16.7\ \mathrm{V}.$$

$M_2$ would need $V_{GS2} \approx V_{TH} + 16.7$ V and, to stay saturated, $V_{DS2} \ge 16.7$ V. This is far beyond any realistic supply (a few volts). So the specification is **not realizable** at $I_D = 0.5$ mA with a square-law device. The underlying reason: a current source carrying $I_D$ with overdrive $V_{ov}$ has noise $4kT\gamma\cdot2I_D/V_{ov}$, while $R_D$ has $4kT/R_D = 4kTI_D/(I_DR_D)$. With $I_DR_D = 0.5$ V, $M_2$'s noise falls well below $R_D$'s only if $V_{ov2}$ is many times larger than 0.5 V. For instance, a still-practical $V_{ov2} = 1$ V gives $g_{m2} = 1$ mS and an rms ratio $\sqrt{\gamma g_{m2}R_D} = \sqrt{0.667} = 0.82$, far from 0.2.

### Result

$$\overline{I_{n,in}^2} = \frac{4kT}{R_D} + 4kT\gamma g_{m2}, \qquad \sqrt{4kT\gamma g_{m2}} = \frac15\sqrt{\frac{4kT}{R_D}} \;\Rightarrow\; g_{m2} = \frac{1}{25\gamma R_D} = 60\ \mu\mathrm{S},$$

$$\left(\frac{W}{L}\right)_2 = \frac{g_{m2}^2}{2\mu_nC_{ox}I_D} = \frac{(60\ \mu\mathrm{S})^2}{2(134\ \mu\mathrm{A/V^2})(0.5\ \mathrm{mA})} \approx 0.027$$

(e.g. $W = 0.5\ \mu$m, $L \approx 18.6\ \mu$m). This requires an overdrive $V_{GS2} - V_{TH} = 2I_D/g_{m2} \approx 16.7$ V, so the requirement cannot be met in practice at 0.5 mA.

**Common mistake.** Applying the factor 1/5 to the noise *power*, which gives $g_{m2} = 1/(5\gamma R_D) = 300\ \mu$S and $(W/L)_2 = 0.67$. The problem specifies the noise *current* (rms), so the power ratio is $1/5^2 = 1/25$.

**Common mistake.** Including $M_1$'s noise in the input-referred current. With the input open, KCL at the source node forces $M_1$'s channel current to equal $I_{n2}$; $M_1$'s own noise current cancels itself and never reaches $R_D$.

**Common mistake.** Inventing an overdrive (for example $V_{ov} = 0.2$ V) and using $g_m = \mu_nC_{ox}(W/L)V_{ov}$. Both $g_{m2}$ and $I_{D2}$ are fixed, so the overdrive is not free: it follows as $2I_D/g_{m2}$. The relation $g_m^2 = 2\mu_nC_{ox}(W/L)I_D$ must be used.
