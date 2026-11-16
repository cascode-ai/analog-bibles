# Detailed solution - R361

**Approach.** Both channel-noise currents flow at the output node into the same resistance $r_{O1}\parallel r_{O2}$ as the signal current $g_{m1}v_{in}$, so referring to the input divides each by $g_{m1}^2$: $\overline{V_{n,in}^2} = 4kT\gamma(1/g_{m1} + g_{m2}/g_{m1}^2)$. Compute $g_{m1}$ and $g_{m2}$ and evaluate.

### Step 1 — Transconductances

Both devices have $W/L = 50/0.5 = 100$ and carry $0.5$ mA, with $\mu_nC_{ox}$ for $M_1$ and $\mu_pC_{ox}$ for $M_2$:

$$
\begin{aligned}
g_{m1} &= \sqrt{2\times(134\ \mu\mathrm{A/V^2})\times100\times(0.5\ \mathrm{mA})} = \sqrt{1.34\times10^{-5}\ \mathrm{A^2/V^2}} = 3.661\ \mathrm{mS},\\
g_{m2} &= \sqrt{2\times(38.4\ \mu\mathrm{A/V^2})\times100\times(0.5\ \mathrm{mA})} = \sqrt{3.84\times10^{-6}\ \mathrm{A^2/V^2}} = 1.960\ \mathrm{mS}.
\end{aligned}
$$

The overdrives are $V_{ov1} = 2I_D/g_{m1} = 1\ \mathrm{mA}/3.661\ \mathrm{mS} = 0.27$ V and $|V_{ov2}| = 1\ \mathrm{mA}/1.960\ \mathrm{mS} = 0.51$ V (lower hole mobility, so a larger overdrive and smaller $g_m$). Both devices are saturated for outputs between $V_{ov1} = 0.27$ V and $V_{DD} - |V_{ov2}| = V_{DD} - 0.51$ V, as the problem states.

### Step 2 — Noise model and output noise

With $v_{in} = 0$ and $M_2$'s gate at the fixed $V_b$, both dependent sources are zero, and the output sees $r_{O1}\parallel r_{O2}$ to ac ground with two noise currents, $\overline{I_{n1}^2} = 4kT\gamma g_{m1}$ and $\overline{I_{n2}^2} = 4kT\gamma g_{m2}$. Both flow through $R_{out} = r_{O1}\parallel r_{O2}$, and being uncorrelated, their powers add:

$$\overline{V_{n,out}^2} = 4kT\gamma\,(g_{m1} + g_{m2})\,R_{out}^2 .$$

### Step 3 — Referring to the input

With $|A_v| = g_{m1}R_{out}$:

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{4kT\gamma(g_{m1} + g_{m2})R_{out}^2}{g_{m1}^2R_{out}^2}\\
&= 4kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m2}}{g_{m1}^2}\right).
\end{aligned}
$$

$R_{out}$ cancels, which is fortunate because $\lambda$ is not given. The load's noise is divided by $g_{m1}^2$, not $g_{m2}^2$, because it enters the output node just like the signal current $g_{m1}v_{in}$.

### Step 4 — Numbers

$$4kT\gamma = 4\times(1.38\times10^{-23}\ \mathrm{J/K})\times(300\ \mathrm{K})\times\tfrac23 = 1.104\times10^{-20}\ \mathrm{J}.$$

With $g_{m1}^2 = 1.34\times10^{-5}\ \mathrm{S^2}$ from Step 1, the two terms as equivalent resistances are

$$
\begin{aligned}
\frac{1}{g_{m1}} &= \frac{1}{3.661\times10^{-3}\ \mathrm{S}} = 273.2\ \Omega,\\
\frac{g_{m2}}{g_{m1}^2} &= \frac{1.960\times10^{-3}\ \mathrm{S}}{1.34\times10^{-5}\ \mathrm{S^2}} = 146.2\ \Omega,\\
\text{sum} &= 273.2 + 146.2 = 419.4\ \Omega ,
\end{aligned}
$$

$$\overline{V_{n,in}^2} = (1.104\times10^{-20}\ \mathrm{J})\times(419.4\ \Omega) = 4.63\times10^{-18}\ \mathrm{V^2/Hz},$$

$$\sqrt{\overline{V_{n,in}^2}} = \sqrt{4.63\times10^{-18}}\ \mathrm{V/\sqrt{Hz}} = 2.15\times10^{-9}\ \mathrm{V/\sqrt{Hz}} = 2.15\ \mathrm{nV/\sqrt{Hz}}.$$

### Step 5 — Interpretation

The ratio of the load term to the input-device term is

$$\frac{g_{m2}/g_{m1}^2}{1/g_{m1}} = \frac{g_{m2}}{g_{m1}} = \sqrt{\frac{\mu_pC_{ox}}{\mu_nC_{ox}}} = \sqrt{\frac{38.4}{134}} = 0.535,$$

so the PMOS load adds about 54 % to $M_1$'s noise power; with equal sizes and currents it is quieter only because of the lower hole mobility. A smaller $(W/L)_2$ (larger overdrive, smaller $g_{m2}$) would reduce it further, at the cost of headroom.

### Result

$$\overline{V_{n,in}^2} = 4kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m2}}{g_{m1}^2}\right) = 1.104\times10^{-20}\,(273.2 + 146.2)\ \mathrm{V^2/Hz} \approx 4.63\times10^{-18}\ \mathrm{V^2/Hz},$$

i.e. **about 2.15 nV/√Hz**, with $g_{m1} = 3.66$ mS and $g_{m2} = 1.96$ mS. $M_2$ adds about 54 % to $M_1$'s noise power, and $r_{O1}\parallel r_{O2}$ cancels. (With $\gamma = 1$ the result would be about 2.64 nV/√Hz.)

**Common mistake.** Leaving out the load transistor, which gives $\sqrt{1.104\times10^{-20}\times273.2} \approx 1.74\ \mathrm{nV/\sqrt{Hz}}$, about 19 % low. The current-source load injects its own channel noise straight into the output node.

**Common mistake.** Referring $M_2$'s noise as $4kT\gamma/g_{m2}$, as if $M_2$ were an input device. Its noise current is divided by $g_{m1}$, giving $4kT\gamma g_{m2}/g_{m1}^2$.

**Common mistake.** Using $\mu_nC_{ox}$ for the PMOS device, which gives $g_{m2} = g_{m1}$ and $\overline{V_{n,in}^2} = 2\times4kT\gamma/g_{m1} = 6.0\times10^{-18}\ \mathrm{V^2/Hz}$ (2.46 nV/√Hz).
