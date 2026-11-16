# Detailed solution - R371

**Approach.** Write KCL at the output of the source follower with both channel-noise currents included, and refer the output noise to the input through the follower gain (equal to 1 here). The rms ratio of the two contributions fixes $g_{m2}$, and the square law gives $(W/L)_2$ and the overdrive $V_{ov2}$. The output swing is bounded below by the saturation of $M_2$ and above by the largest input, $V_{DD}$, minus $V_{GS1}$.

### Step 1 — The circuit and the known quantities

Reading the figure:

- $M_1$: NMOS with drain at $V_{DD} = 3$ V, gate = input, source = output (source follower).
- $M_2$: NMOS current source from the output to ground with its gate at the fixed bias $V_b$.
- Both carry $I_D = 0.1$ mA, and $g_{m1} = 10$ mS (sized for $R_{out} = 1/g_{m1} = 100\ \Omega$).

**Overdrive of $M_1$** ($V_{ov} = V_{GS} - V_{TH}$; from the square law, $g_m = 2I_D/V_{ov}$):

$$V_{ov1} = \frac{2I_D}{g_{m1}} = \frac{2\times0.1\ \mathrm{mA}}{10\ \mathrm{mS}} = 0.02\ \mathrm{V}.$$

Noise sources: the channel noise of $M_1$, $\overline{I_{n1}^2} = 4kT\gamma g_{m1}$ (between its drain and source), and that of $M_2$, $\overline{I_{n2}^2} = 4kT\gamma g_{m2}$ (between the output and ground). Here $k$ is Boltzmann's constant, $T$ the temperature and $\gamma$ the channel-noise coefficient, the same for both devices.

### Step 2 — Small-signal noise model and output noise

**Model in words.** One node matters: the output, with voltage $v_{out}$. Into it flow

- the controlled current of $M_1$, $g_{m1}v_{gs1} = g_{m1}(v_{in} - v_{out})$, from the drain ($V_{DD}$, AC ground);
- $M_1$'s noise current $I_{n1}$, also from the drain into the output;

and out of it flows

- $M_2$'s noise current $I_{n2}$, to ground. ($M_2$'s gate and source are fixed, so its controlled source is zero; with $\lambda = 0$ there are no $r_O$'s, and the body effect is neglected.)

<!-- diagram: diagram-01.cir -->

**KCL at the output** (no external load):

$$g_{m1}(v_{in} - v_{out}) + I_{n1} - I_{n2} = 0 .$$

**Gain (noise sources off):** $g_{m1}(v_{in} - v_{out}) = 0$, so $v_{out} = v_{in}$ and $A_v = 1$. With no $r_O$ and no body effect, the follower is ideal.

**Output noise (input grounded, $v_{in} = 0$):**

$$
\begin{aligned}
-g_{m1}v_{out} + I_{n1} - I_{n2} &= 0\\
v_{out} &= \frac{I_{n1} - I_{n2}}{g_{m1}}.
\end{aligned}
$$

Both noise currents are converted to voltage by the same resistance, $1/g_{m1}$, which is the resistance seen at the follower's output. The two currents are uncorrelated, so their powers add:

$$\overline{V_{n,out}^2} = \frac{4kT\gamma g_{m1} + 4kT\gamma g_{m2}}{g_{m1}^2}.$$

### Step 3 — Input-referred noise and the 1/5 condition

Dividing by $A_v^2 = 1$:

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{4kT\gamma g_{m2}}{g_{m1}^2} = 4kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m2}}{g_{m1}^2}\right).$$

The first term is due to $M_1$, the second to $M_2$. Their **rms** (voltage, not voltage-squared) ratio is

$$\frac{\sqrt{4kT\gamma g_{m2}/g_{m1}^2}}{\sqrt{4kT\gamma/g_{m1}}} = \sqrt{\frac{g_{m2}}{g_{m1}^2}\cdot g_{m1}} = \sqrt{\frac{g_{m2}}{g_{m1}}}.$$

Set it equal to 1/5 and square:

$$
\begin{aligned}
\sqrt{\frac{g_{m2}}{g_{m1}}} &= \frac15\\
\frac{g_{m2}}{g_{m1}} &= \frac{1}{25}\\
g_{m2} &= \frac{g_{m1}}{25} = \frac{10\ \mathrm{mS}}{25} = 0.4\ \mathrm{mS}.
\end{aligned}
$$

### Step 4 — Size and overdrive of $M_2$

From the square law, $g_m^2 = 2\mu_nC_{ox}(W/L)I_D$ (obtained by eliminating $V_{ov}$ between $I_D = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$ and $g_m = \mu_nC_{ox}(W/L)V_{ov}$):

$$
\begin{aligned}
\left(\frac{W}{L}\right)_2 &= \frac{g_{m2}^2}{2\mu_nC_{ox}I_D} = \frac{(0.4\times10^{-3}\ \mathrm{A/V})^2}{2\,(134\times10^{-6}\ \mathrm{A/V^2})(0.1\times10^{-3}\ \mathrm{A})}\\
&= \frac{1.6\times10^{-7}}{2.68\times10^{-8}} = 5.97 \approx 6 .
\end{aligned}
$$

The overdrive of $M_2$:

$$V_{ov2} = \frac{2I_D}{g_{m2}} = \frac{2\times0.1\ \mathrm{mA}}{0.4\ \mathrm{mS}} = 0.5\ \mathrm{V}.$$

(Check: $\tfrac12(134\ \mu\mathrm{A/V^2})(5.97)(0.5\ \mathrm{V})^2 = 0.1$ mA ✓.) The bias is then $V_b = V_{TH} + V_{ov2} = 0.7 + 0.5 = 1.2$ V.

**Intuition.** A low-noise current source needs a *small* $g_m$ for its current, i.e. a large overdrive. Here $g_{m2}$ must be 25 times smaller than $g_{m1}$, so $V_{ov2}$ is 25 times larger than $V_{ov1}$ (0.5 V vs 0.02 V). The cost is headroom at the bottom of the output range.

### Step 5 — Maximum output swing

**Lowest output.** $M_2$ stays saturated while $V_{DS2} = V_{out} \ge V_{ov2}$:

$$V_{out,min} = V_{ov2} = 0.5\ \mathrm{V}.$$

**Highest output.** The output follows the input at a distance $V_{GS1} = V_{TH} + V_{ov1}$, and the input cannot exceed $V_{DD}$:

$$V_{out,max} = V_{DD} - V_{TH} - V_{ov1} = 3 - 0.7 - 0.02 = 2.28\ \mathrm{V}.$$

$M_1$ stays saturated over the whole range: its drain is at $V_{DD} \ge V_{in}$, so $V_{DS1} = V_{DD} - V_{out} \ge V_{in} - V_{out} = V_{GS1} > V_{GS1} - V_{TH}$.

**Swing:**

$$V_{out,max} - V_{out,min} = 2.28 - 0.5 = 1.78\ \mathrm{V}.$$

*Aside on the body effect.* If $M_1$'s bulk is at ground, its threshold rises as the output rises. With typical values ($\gamma_{body} = 0.45\ \mathrm{V^{1/2}}$, $2|\phi_F| = 0.9$ V), solving $V_{out} = 2.28 - 0.45(\sqrt{0.9 + V_{out}} - \sqrt{0.9})$ gives $V_{out,max} \approx 1.95$ V ($V_{TH1} \approx 1.03$ V), and the swing shrinks to about 1.45 V. The problem asks us to neglect it.

### Result

$$\overline{V_{n,in}^2} = 4kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m2}}{g_{m1}^2}\right), \qquad \sqrt{\frac{g_{m2}}{g_{m1}}} = \frac15 \;\Rightarrow\; g_{m2} = \frac{g_{m1}}{25} = 0.4\ \mathrm{mS},$$

$$\left(\frac{W}{L}\right)_2 = \frac{g_{m2}^2}{2\mu_nC_{ox}I_D} \approx 6.0, \qquad V_{ov2} = 0.5\ \mathrm{V}.$$

Output range: $0.5\ \mathrm{V} \le V_{out} \le V_{DD} - V_{TH} - V_{ov1} = 2.28$ V, i.e. a maximum swing of **about 1.78 V**.

**Common mistake.** Applying the 1/5 ratio to the noise *power* ($g_{m2} = g_{m1}/5 = 2$ mS, $(W/L)_2 \approx 149$). The problem specifies the noise *voltage* (rms), so the power ratio is $1/25$.

**Common mistake.** Writing $M_2$'s contribution as $4kT\gamma/g_{m2}$, as if $M_2$ were the input device. $M_2$'s noise current is converted to voltage by the follower's output resistance $1/g_{m1}$, so its input-referred contribution is $4kT\gamma g_{m2}/g_{m1}^2$; a small $g_{m2}$ means *less* noise, not more.

**Common mistake.** Taking the lower limit of the output as 0 V. The current source $M_2$ needs $V_{DS2} \ge V_{ov2} = 0.5$ V to stay saturated; the low-noise choice of a large overdrive costs exactly this much swing.
