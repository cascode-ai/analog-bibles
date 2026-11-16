# Detailed solution - R371

**Approach.** Write KCL at the follower output with both channel-noise currents included and refer the output noise to the input through the follower gain (1 here). The rms ratio of the two contributions fixes $g_{m2}$, and the square law gives $(W/L)_2$ and $V_{ov2}$. The swing is bounded below by $M_2$'s saturation and above by $V_{DD} - V_{GS1}$.

### Step 1 — Small-signal noise model and output noise

The noise sources are $\overline{I_{n1}^2} = 4kT\gamma g_{m1}$ between the drain and source of $M_1$ and $\overline{I_{n2}^2} = 4kT\gamma g_{m2}$ from the output to ground. Into the output node flow $g_{m1}v_{gs1} = g_{m1}(v_{in} - v_{out})$ and $I_{n1}$, both from the drain ($V_{DD}$, ac ground); $I_{n2}$ flows out to ground. ($M_2$'s gate and source are fixed, so its controlled source is zero; with $\lambda = 0$ and no body effect there are no $r_O$ or $g_{mb}$ terms.)

<!-- diagram: diagram-01.cir -->

KCL at the output (no external load):

$$g_{m1}(v_{in} - v_{out}) + I_{n1} - I_{n2} = 0 .$$

With the noise sources off, $v_{out} = v_{in}$, so $A_v = 1$. With the input grounded:

$$
\begin{aligned}
-g_{m1}v_{out} + I_{n1} - I_{n2} &= 0\\
v_{out} &= \frac{I_{n1} - I_{n2}}{g_{m1}}.
\end{aligned}
$$

Both noise currents see the follower's output resistance $1/g_{m1}$, and being uncorrelated their powers add:

$$\overline{V_{n,out}^2} = \frac{4kT\gamma g_{m1} + 4kT\gamma g_{m2}}{g_{m1}^2}.$$

### Step 2 — Input-referred noise and the 1/5 condition

Dividing by $A_v^2 = 1$:

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{4kT\gamma g_{m2}}{g_{m1}^2} = 4kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m2}}{g_{m1}^2}\right).$$

The first term is due to $M_1$, the second to $M_2$. Their **rms** ratio is

$$\frac{\sqrt{4kT\gamma g_{m2}/g_{m1}^2}}{\sqrt{4kT\gamma/g_{m1}}} = \sqrt{\frac{g_{m2}}{g_{m1}^2}\cdot g_{m1}} = \sqrt{\frac{g_{m2}}{g_{m1}}}.$$

Setting it to 1/5:

$$
\begin{aligned}
\sqrt{\frac{g_{m2}}{g_{m1}}} &= \frac15\\
\frac{g_{m2}}{g_{m1}} &= \frac{1}{25}\\
g_{m2} &= \frac{g_{m1}}{25} = \frac{10\ \mathrm{mS}}{25} = 0.4\ \mathrm{mS}.
\end{aligned}
$$

### Step 3 — Size and overdrive of $M_2$

With $I_D = 0.1$ mA, from $g_m^2 = 2\mu_nC_{ox}(W/L)I_D$:

$$
\begin{aligned}
\left(\frac{W}{L}\right)_2 &= \frac{g_{m2}^2}{2\mu_nC_{ox}I_D} = \frac{(0.4\times10^{-3}\ \mathrm{A/V})^2}{2\,(134\times10^{-6}\ \mathrm{A/V^2})(0.1\times10^{-3}\ \mathrm{A})}\\
&= \frac{1.6\times10^{-7}}{2.68\times10^{-8}} = 5.97 \approx 6 .
\end{aligned}
$$

$$V_{ov2} = \frac{2I_D}{g_{m2}} = \frac{2\times0.1\ \mathrm{mA}}{0.4\ \mathrm{mS}} = 0.5\ \mathrm{V}.$$

(Check: $\tfrac12(134\ \mu\mathrm{A/V^2})(5.97)(0.5\ \mathrm{V})^2 = 0.1$ mA ✓.) The bias is then $V_b = V_{TH} + V_{ov2} = 0.7 + 0.5 = 1.2$ V.

For comparison, $V_{ov1} = 2I_D/g_{m1} = 2\times0.1\ \mathrm{mA}/10\ \mathrm{mS} = 0.02$ V. A low-noise current source needs a small $g_m$ for its current, so $g_{m2} = g_{m1}/25$ means $V_{ov2}$ is 25 times $V_{ov1}$ (0.5 V vs 0.02 V), paid for in headroom at the bottom of the output range.

### Step 4 — Maximum output swing

**Lowest output.** $M_2$ stays saturated while $V_{DS2} = V_{out} \ge V_{ov2}$:

$$V_{out,min} = V_{ov2} = 0.5\ \mathrm{V}.$$

**Highest output.** The output sits $V_{GS1} = V_{TH} + V_{ov1}$ below the input, which cannot exceed $V_{DD}$:

$$V_{out,max} = V_{DD} - V_{TH} - V_{ov1} = 3 - 0.7 - 0.02 = 2.28\ \mathrm{V}.$$

$M_1$ stays saturated throughout, since its drain is at $V_{DD} \ge V_{in}$: $V_{DS1} = V_{DD} - V_{out} \ge V_{GS1} > V_{GS1} - V_{TH}$.

**Swing:**

$$V_{out,max} - V_{out,min} = 2.28 - 0.5 = 1.78\ \mathrm{V}.$$

*Aside on the body effect* (neglected here). With $M_1$'s bulk at ground and typical values ($\gamma_{body} = 0.45\ \mathrm{V^{1/2}}$, $2|\phi_F| = 0.9$ V), solving $V_{out} = 2.28 - 0.45(\sqrt{0.9 + V_{out}} - \sqrt{0.9})$ gives $V_{out,max} \approx 1.95$ V ($V_{TH1} \approx 1.03$ V), and the swing shrinks to about 1.45 V.

### Result

$$\overline{V_{n,in}^2} = 4kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m2}}{g_{m1}^2}\right), \qquad \sqrt{\frac{g_{m2}}{g_{m1}}} = \frac15 \;\Rightarrow\; g_{m2} = \frac{g_{m1}}{25} = 0.4\ \mathrm{mS},$$

$$\left(\frac{W}{L}\right)_2 = \frac{g_{m2}^2}{2\mu_nC_{ox}I_D} \approx 6.0, \qquad V_{ov2} = 0.5\ \mathrm{V}.$$

Output range: $0.5\ \mathrm{V} \le V_{out} \le V_{DD} - V_{TH} - V_{ov1} = 2.28$ V, i.e. a maximum swing of **about 1.78 V**.

**Common mistake.** Applying the 1/5 ratio to the noise *power* ($g_{m2} = g_{m1}/5 = 2$ mS, $(W/L)_2 \approx 149$). The ratio is on the rms voltage, so the power ratio is $1/25$.

**Common mistake.** Writing $M_2$'s contribution as $4kT\gamma/g_{m2}$, as if $M_2$ were the input device. Its noise current is converted to voltage by $1/g_{m1}$, giving $4kT\gamma g_{m2}/g_{m1}^2$: a small $g_{m2}$ means *less* noise.

**Common mistake.** Taking the lower output limit as 0 V. $M_2$ needs $V_{DS2} \ge V_{ov2} = 0.5$ V to stay saturated; the low-noise large overdrive costs exactly this much swing.
