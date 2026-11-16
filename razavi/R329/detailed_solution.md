# Detailed solution - R329

**Approach.** Write the input-referred thermal noise of a common-source stage with a current-source load. Turn the noise specification into a ratio $g_{m2}/g_{m1}$. Because both transistors carry the same current, a $g_m$ ratio is an overdrive ratio ($g_m = 2I_D/|V_{ov}|$). Then compare the overdrives needed with the 3-V supply to find the output swing.

### Step 1 — Input-referred noise of the stage

**Circuit.** $M_1$ (NMOS, source grounded) is the amplifying device. $M_2$ (PMOS, source at $V_{DD}$, gate at the fixed bias $V_b$) is a current-source load. Both drains meet at the output node.

**Noise sources.** Each transistor has a channel thermal noise current between drain and source with PSD $\overline{I_n^2} = 4kT\gamma g_m$, where $k$ is Boltzmann's constant, $T$ the absolute temperature and $\gamma$ the channel-noise coefficient (the same for both devices):

$$\overline{I_{n1}^2} = 4kT\gamma g_{m1}, \qquad \overline{I_{n2}^2} = 4kT\gamma g_{m2}.$$

**Small-signal model with the input grounded.** With $v_{in} = 0$, the dependent source of $M_1$ is zero. The gate of $M_2$ is at a constant voltage $V_b$ and its source is at $V_{DD}$, so $v_{gs2} = 0$ and its dependent source is zero as well. What remains at the output node is the output resistance $r_{O1}\parallel r_{O2}$ to AC ground, plus the two noise currents. $M_1$'s noise flows from the output to ground and $M_2$'s noise flows from $V_{DD}$ (AC ground) into the output, so **both noise currents flow through the same resistance** $R_{out} = r_{O1}\parallel r_{O2}$.

The two sources are uncorrelated, so their powers add:

$$\overline{V_{n,out}^2} = 4kT\gamma\,(g_{m1} + g_{m2})\,R_{out}^2 .$$

**Refer to the input.** The small-signal gain is $|A_v| = g_{m1}R_{out}$, so

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{\overline{V_{n,out}^2}}{A_v^2} = \frac{4kT\gamma\,(g_{m1} + g_{m2})R_{out}^2}{g_{m1}^2R_{out}^2}\\
&= \underbrace{\frac{4kT\gamma}{g_{m1}}}_{M_1} + \underbrace{4kT\gamma\,\frac{g_{m2}}{g_{m1}^2}}_{M_2}.
\end{aligned}
$$

$R_{out}$ cancels, so the result holds whatever $\lambda$ is. Note that $M_2$'s noise current is divided by $g_{m1}^2$, not by $g_{m2}^2$: it enters the output node exactly like the signal current $g_{m1}v_{in}$, so it is equivalent to an input voltage $I_{n2}/g_{m1}$.

### Step 2 — Translating the specification into a $g_m$ ratio

The specification is about noise **voltage**, i.e. rms values, which are the square roots of the PSD terms:

$$
\begin{aligned}
V_{n,in}\big|_{M_1} &= \sqrt{\frac{4kT\gamma}{g_{m1}}}, \qquad V_{n,in}\big|_{M_2} = \sqrt{\frac{4kT\gamma\,g_{m2}}{g_{m1}^2}}.
\end{aligned}
$$

Their ratio:

$$\frac{V_{n,in}|_{M_2}}{V_{n,in}|_{M_1}} = \sqrt{\frac{4kT\gamma\,g_{m2}/g_{m1}^2}{4kT\gamma/g_{m1}}} = \sqrt{\frac{g_{m2}}{g_{m1}}} .$$

Setting it equal to $1/5$ and squaring:

$$\sqrt{\frac{g_{m2}}{g_{m1}}} = \frac15 \quad\Longrightarrow\quad \frac{g_{m2}}{g_{m1}} = \frac{1}{25}.$$

A factor of 5 in voltage is a factor of 25 in power, so the load's transconductance must be 25 times smaller than the input device's.

### Step 3 — Small-signal parameters of $M_1$

$(W/L)_1 = 50/0.5 = 100$ and $I_{D1} = 0.1$ mA. From the square law ($I_D = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$, with $V_{ov} = V_{GS} - V_{TH}$ the overdrive voltage):

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

In saturation, $g_m = 2I_D/|V_{ov}|$ for both devices. Since $|I_{D2}| = I_{D1}$, the $g_m$ ratio is the inverse of the overdrive ratio:

$$\frac{g_{m2}}{g_{m1}} = \frac{2I_D/|V_{ov2}|}{2I_D/V_{ov1}} = \frac{V_{ov1}}{|V_{ov2}|} = \frac{1}{25}.$$

Hence

$$|V_{ov2}| = 25\,V_{ov1} = 25\times0.122\ \mathrm{V} = 3.05\ \mathrm{V}.$$

(Directly: $|V_{ov2}| = 2|I_{D2}|/g_{m2} = 0.2\ \mathrm{mA}/65.5\ \mu\mathrm{S} = 3.05$ V.)

The corresponding aspect ratio of $M_2$ is

$$\Big(\frac{W}{L}\Big)_2 = \frac{g_{m2}^2}{2\mu_pC_{ox}|I_{D2}|} = \frac{(65.5\ \mu\mathrm{S})^2}{2\times(38.4\ \mu\mathrm{A/V^2})\times(0.1\ \mathrm{mA})} = \frac{4.29\times10^{-9}}{7.68\times10^{-9}} \approx 0.56,$$

a long, narrow device. **Physical intuition:** to make the load quiet we need a small $g_{m2}$ at a fixed current, i.e. a "weak" transistor driven with a huge overdrive. Overdrive is exactly what eats voltage headroom.

### Step 5 — Output swing with both devices saturated

- **$M_1$ saturated:** $V_{DS1} \ge V_{GS1} - V_{TH1}$, i.e. $V_{out} \ge V_{ov1} = 0.122$ V.
- **$M_2$ saturated:** $V_{SD2} \ge V_{SG2} - |V_{TH2}|$, i.e. $V_{DD} - V_{out} \ge |V_{ov2}|$, so $V_{out} \le V_{DD} - |V_{ov2}| = 3 - 3.05 = -0.05$ V.

The allowed range is therefore

$$0.122\ \mathrm{V} \le V_{out} \le -0.05\ \mathrm{V},$$

which is empty: the upper limit lies *below* the lower limit. Formally, the swing is

$$
\begin{aligned}
V_{swing} &= (V_{DD} - |V_{ov2}|) - V_{ov1}\\
&= 3\ \mathrm{V} - 3.054\ \mathrm{V} - 0.122\ \mathrm{V}\\
&= -0.18\ \mathrm{V} < 0 .
\end{aligned}
$$

### Step 6 — Interpretation: the specification cannot be met

A negative swing means there is **no output voltage at which both transistors are saturated**, so the circuit cannot even be biased properly. The same conclusion follows from the gate bias of $M_2$: for $M_2$ to carry 0.1 mA with $|V_{ov2}| = 3.05$ V we need

$$V_b = V_{DD} - |V_{TH2}| - |V_{ov2}| = 3 - 0.8 - 3.05 = -0.85\ \mathrm{V},$$

below ground, which is not available in a single 3-V supply circuit. Merely reaching zero swing would require

$$V_{DD} \ge V_{ov1} + |V_{ov2}| = 0.122 + 3.054 = 3.18\ \mathrm{V} \approx 3.2\ \mathrm{V},$$

and any useful swing needs even more.

**For comparison only:** if the factor 1/5 were (incorrectly) applied to the noise *power*, we would get $g_{m2} = g_{m1}/5$, $|V_{ov2}| = 5V_{ov1} = 0.61$ V and a swing of $3 - 0.61 - 0.12 \approx 2.27$ V. That is not what the problem asks, since it specifies the voltage, not the voltage squared.

### Result

The rms-noise requirement gives $\sqrt{g_{m2}/g_{m1}} = 1/5$, i.e. $g_{m2} = g_{m1}/25 = 65.5\ \mu$S. With $g_{m1} = 1.64$ mS and $V_{ov1} = 0.122$ V, this forces

$$|V_{GS2} - V_{TH2}| = 25\,V_{ov1} \approx 3.05\ \mathrm{V}.$$

The maximum swing would be $V_{DD} - V_{ov1} - |V_{ov2}| = 3 - 0.122 - 3.05 \approx -0.18$ V: **negative, so the specification cannot be met with $V_{DD} = 3$ V**. There is no usable output swing, and the circuit cannot even be biased with both devices in saturation (it would need $V_b \approx -0.85$ V, or a supply above about 3.2 V just for zero swing).

**Common mistake.** Applying the factor 1/5 to the noise power, i.e. setting $g_{m2} = g_{m1}/5$. This yields an attractive swing of about 2.27 V, but the problem explicitly specifies the noise *voltage*. Because voltages relate to powers through a square root, a 1/5 voltage ratio is a 1/25 power ratio, so $g_{m2} = g_{m1}/25$.

**Common mistake.** Writing the load's input-referred contribution as $4kT\gamma/g_{m2}$, as if $M_2$ were itself an input device. Its noise current is injected at the output and must be converted to an input voltage by dividing by $g_{m1}$ (the transconductance that converts the input to an output current), giving $4kT\gamma g_{m2}/g_{m1}^2$. The wrong form would even suggest a *large* $g_{m2}$ to reduce noise, which is the opposite of the truth.

**Common mistake.** Reporting a positive swing by ignoring $|V_{ov2}|$ (for example $V_{DD} - V_{ov1} \approx 2.9$ V). The large overdrive required by the low-noise load consumes the whole supply; this is precisely the trade-off between load noise and output headroom that the problem illustrates.
