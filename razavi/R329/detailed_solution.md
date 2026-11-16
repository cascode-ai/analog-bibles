# Detailed solution - R329

**Approach.** Write the input-referred thermal noise of the stage and turn the specification into a ratio $g_{m2}/g_{m1}$. Both transistors carry the same current, so with $g_m = 2I_D/|V_{ov}|$ this is an overdrive ratio, which is then compared with the 3-V supply to find the output swing.

### Step 1 — Input-referred noise of the stage

With $v_{in} = 0$ and the gate of $M_2$ at the fixed $V_b$, both dependent sources are zero. The channel-noise currents $\overline{I_{n1}^2} = 4kT\gamma g_{m1}$ and $\overline{I_{n2}^2} = 4kT\gamma g_{m2}$ then flow through the same output resistance $R_{out} = r_{O1}\parallel r_{O2}$, and being uncorrelated, their powers add:

$$\overline{V_{n,out}^2} = 4kT\gamma\,(g_{m1} + g_{m2})\,R_{out}^2 .$$

With the gain $|A_v| = g_{m1}R_{out}$,

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{\overline{V_{n,out}^2}}{A_v^2} = \frac{4kT\gamma\,(g_{m1} + g_{m2})R_{out}^2}{g_{m1}^2R_{out}^2}\\
&= \underbrace{\frac{4kT\gamma}{g_{m1}}}_{M_1} + \underbrace{4kT\gamma\,\frac{g_{m2}}{g_{m1}^2}}_{M_2}.
\end{aligned}
$$

$R_{out}$ cancels, so this holds whatever $\lambda$ is. $M_2$'s noise current enters the output node like the signal current $g_{m1}v_{in}$, so it is divided by $g_{m1}^2$, not by $g_{m2}^2$.

### Step 2 — Translating the specification into a $g_m$ ratio

The specification concerns noise **voltage**, i.e. the rms values, which are the square roots of the PSD terms:

$$V_{n,in}\big|_{M_1} = \sqrt{\frac{4kT\gamma}{g_{m1}}}, \qquad V_{n,in}\big|_{M_2} = \sqrt{\frac{4kT\gamma\,g_{m2}}{g_{m1}^2}}.$$

Their ratio, set equal to $1/5$ and squared:

$$\frac{V_{n,in}|_{M_2}}{V_{n,in}|_{M_1}} = \sqrt{\frac{4kT\gamma\,g_{m2}/g_{m1}^2}{4kT\gamma/g_{m1}}} = \sqrt{\frac{g_{m2}}{g_{m1}}} = \frac15 \quad\Longrightarrow\quad \frac{g_{m2}}{g_{m1}} = \frac{1}{25}.$$

A factor of 5 in voltage is a factor of 25 in power.

### Step 3 — Small-signal parameters of $M_1$

With $(W/L)_1 = 50/0.5 = 100$ and $I_{D1} = 0.1$ mA:

$$
\begin{aligned}
g_{m1} &= \sqrt{2\mu_nC_{ox}\Big(\frac{W}{L}\Big)_1I_{D1}} = \sqrt{2\times(134\ \mu\mathrm{A/V^2})\times100\times(0.1\ \mathrm{mA})}\\
&= \sqrt{2.68\times10^{-6}\ \mathrm{A^2/V^2}} = 1.637\ \mathrm{mS},\\[4pt]
V_{ov1} &= \frac{2I_{D1}}{g_{m1}} = \frac{2\times0.1\ \mathrm{mA}}{1.637\ \mathrm{mS}} = 0.122\ \mathrm{V}.
\end{aligned}
$$

(Check: $V_{ov1} = \sqrt{2I_{D1}/(\mu_nC_{ox}(W/L)_1)} = \sqrt{0.2\ \mathrm{mA}/(13.4\ \mathrm{mA/V^2})} = \sqrt{0.01493\ \mathrm{V^2}} = 0.122$ V.)

### Step 4 — Required transconductance and overdrive of $M_2$

From Step 2:

$$g_{m2} = \frac{g_{m1}}{25} = \frac{1.637\ \mathrm{mS}}{25} = 65.5\ \mu\mathrm{S}.$$

Since $|I_{D2}| = I_{D1}$ and $g_m = 2I_D/|V_{ov}|$, the $g_m$ ratio is the inverse of the overdrive ratio:

$$\frac{g_{m2}}{g_{m1}} = \frac{2I_D/|V_{ov2}|}{2I_D/V_{ov1}} = \frac{V_{ov1}}{|V_{ov2}|} = \frac{1}{25} \quad\Longrightarrow\quad |V_{ov2}| = 25\,V_{ov1} = 25\times0.122\ \mathrm{V} = 3.05\ \mathrm{V}.$$

(Directly: $|V_{ov2}| = 2|I_{D2}|/g_{m2} = 0.2\ \mathrm{mA}/65.5\ \mu\mathrm{S} = 3.05$ V.) The corresponding aspect ratio is

$$\Big(\frac{W}{L}\Big)_2 = \frac{g_{m2}^2}{2\mu_pC_{ox}|I_{D2}|} = \frac{(65.5\ \mu\mathrm{S})^2}{2\times(38.4\ \mu\mathrm{A/V^2})\times(0.1\ \mathrm{mA})} = \frac{4.29\times10^{-9}}{7.68\times10^{-9}} \approx 0.56,$$

a long, narrow device. A quiet load needs a small $g_{m2}$ at a fixed current, i.e. a weak transistor with a huge overdrive, and overdrive is exactly what eats voltage headroom.

### Step 5 — Output swing with both devices saturated

- **$M_1$ saturated:** $V_{out} \ge V_{ov1} = 0.122$ V.
- **$M_2$ saturated:** $V_{DD} - V_{out} \ge |V_{ov2}|$, so $V_{out} \le V_{DD} - |V_{ov2}| = 3 - 3.05 = -0.05$ V.

The allowed range,

$$0.122\ \mathrm{V} \le V_{out} \le -0.05\ \mathrm{V},$$

is empty: the upper limit lies *below* the lower one. Formally,

$$
\begin{aligned}
V_{swing} &= (V_{DD} - |V_{ov2}|) - V_{ov1}\\
&= 3\ \mathrm{V} - 3.054\ \mathrm{V} - 0.122\ \mathrm{V}\\
&= -0.18\ \mathrm{V} < 0 .
\end{aligned}
$$

### Step 6 — The specification cannot be met

A negative swing means that **no output voltage keeps both transistors saturated**, so the circuit cannot even be biased. Equivalently, for $M_2$ to carry 0.1 mA with $|V_{ov2}| = 3.05$ V, its gate would need

$$V_b = V_{DD} - |V_{TH2}| - |V_{ov2}| = 3 - 0.8 - 3.05 = -0.85\ \mathrm{V},$$

below ground. Merely reaching zero swing would require

$$V_{DD} \ge V_{ov1} + |V_{ov2}| = 0.122 + 3.054 = 3.18\ \mathrm{V} \approx 3.2\ \mathrm{V},$$

and any useful swing needs more.

**For comparison only:** applying the factor 1/5 to the noise *power* would give $g_{m2} = g_{m1}/5$, $|V_{ov2}| = 5V_{ov1} = 0.61$ V and a swing of $3 - 0.61 - 0.12 \approx 2.27$ V, but the problem specifies the voltage, not the voltage squared.

### Result

The rms-noise requirement gives $\sqrt{g_{m2}/g_{m1}} = 1/5$, i.e. $g_{m2} = g_{m1}/25 = 65.5\ \mu$S. With $g_{m1} = 1.64$ mS and $V_{ov1} = 0.122$ V, this forces

$$|V_{GS2} - V_{TH2}| = 25\,V_{ov1} \approx 3.05\ \mathrm{V}.$$

The maximum swing would be $V_{DD} - V_{ov1} - |V_{ov2}| = 3 - 0.122 - 3.05 \approx -0.18$ V: **negative, so the specification cannot be met with $V_{DD} = 3$ V**. There is no usable output swing, and the circuit cannot even be biased with both devices in saturation (it would need $V_b \approx -0.85$ V, or a supply above about 3.2 V just for zero swing).

**Common mistake.** Applying the factor 1/5 to the noise power, i.e. $g_{m2} = g_{m1}/5$, which yields an attractive swing of about 2.27 V. The problem specifies the noise *voltage*, and a 1/5 voltage ratio is a 1/25 power ratio.

**Common mistake.** Writing the load's input-referred contribution as $4kT\gamma/g_{m2}$, as if $M_2$ were an input device. Its noise current is injected at the output and referred through $g_{m1}$, giving $4kT\gamma g_{m2}/g_{m1}^2$; the wrong form would even suggest a *large* $g_{m2}$ to reduce noise.

**Common mistake.** Reporting a positive swing by ignoring $|V_{ov2}|$ (for example $V_{DD} - V_{ov1} \approx 2.9$ V). The large overdrive of the low-noise load consumes the whole supply.
