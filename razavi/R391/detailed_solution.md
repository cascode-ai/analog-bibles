# Detailed solution - R391

**Approach.** The "simple op amp" is a five-transistor operational transconductance amplifier (OTA) with low-frequency open-loop gain $A_0 = g_{m1}(r_{O2}\parallel r_{O4})$. The capacitive divider $C_1$/$C_2$ feeds a fraction $\beta$ of the output back to the inverting input (the gate of $M_2$), forming a non-inverting amplifier with nominal gain $1/\beta$. The gain error is about $1/(\beta A_0)$; limiting it to 5 % caps $1/\beta$. So we compute $A_0$ from the device data and then the largest allowed $1/\beta$.

### Step 1 — The circuit

Reading the figure:

- $M_1$, $M_2$: NMOS differential pair with tail current $I_{SS} = 1$ mA. The gate of $M_1$ is the input $V_{in}$; the gate of $M_2$ is node X.
- $M_3$ (diode-connected) and $M_4$: PMOS current-mirror load. The output is taken at the drains of $M_2$ and $M_4$.
- $C_1$ from $V_{out}$ to X and $C_2$ from X to ground form the feedback divider (the dc bias of X is set by a network not shown).

**Which input is which.** A rise at the gate of $M_1$ increases $I_{D1}$, which the mirror copies into $M_4$, and it decreases $I_{D2}$; both effects push current into the output node, so $V_{out}$ rises. The gate of $M_1$ is therefore the non-inverting input and X the inverting input, so feeding the output back to X gives **negative feedback**.

### Step 2 — Bias currents and small-signal parameters

In the balanced state the tail current splits equally:

$$I_{D1} = I_{D2} = I_{D3} = I_{D4} = \frac{I_{SS}}{2} = 0.5\ \mathrm{mA}.$$

**Transconductance of the input pair** (square law, $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$, with $(W/L)_{1,2} = 50/0.5 = 100$):

$$g_{m1} = \sqrt{2\,(134\times10^{-6}\ \mathrm{A/V^2})(100)(0.5\times10^{-3}\ \mathrm{A})} = \sqrt{1.34\times10^{-5}}\ \mathrm{A/V} = 3.66\ \mathrm{mS}.$$

**Output resistances** ($r_O = 1/(\lambda I_D)$):

$$
\begin{aligned}
r_{O2} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,\\
r_{O4} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k}\Omega,\\
r_{O2}\parallel r_{O4} &= \frac{20\times10}{20 + 10}\ \mathrm{k}\Omega = 6.67\ \mathrm{k}\Omega .
\end{aligned}
$$

(The PMOS size $(W/L)_{3,4}$ does not enter the low-frequency gain.)

### Step 3 — Open-loop gain

For the OTA with a current-mirror load, the small-signal output current is $g_{m1}(V_{in} - V_X)$ (half from $M_2$ directly, half from $M_1$ through the mirror), and it flows into the output resistance $r_{O2}\parallel r_{O4}$:

$$A_0 = g_{m1}\,(r_{O2}\parallel r_{O4}) = (3.66\times10^{-3}\ \mathrm{S})(6.67\times10^{3}\ \Omega) = 24.4 .$$

### Step 4 — Closed-loop gain and gain error

**Model in words.** The OTA is a current source $g_{m1}(V_{in} - V_X)$ into the output node, in parallel with $r_{O2}\parallel r_{O4}$ to ground. $C_1$ connects the output to X, and $C_2$ connects X to ground.

<!-- diagram: diagram-01.cir -->

**Feedback factor.** The gate of $M_2$ draws no current, so X is a capacitive divider tap:

$$V_X = \frac{C_1}{C_1 + C_2}V_{out} = \beta V_{out}, \qquad \beta = \frac{C_1}{C_1 + C_2}, \qquad \frac1\beta = 1 + \frac{C_2}{C_1}.$$

At low frequencies the capacitors draw negligible current from the output, so they do not load it.

**Closed-loop gain.** $V_{out} = A_0(V_{in} - V_X) = A_0(V_{in} - \beta V_{out})$, so

$$
\begin{aligned}
V_{out}(1 + \beta A_0) &= A_0V_{in}\\
\frac{V_{out}}{V_{in}} &= \frac{A_0}{1 + \beta A_0} = \frac1\beta\cdot\frac{1}{1 + \dfrac{1}{\beta A_0}} \approx \frac1\beta\left(1 - \frac{1}{\beta A_0}\right).
\end{aligned}
$$

The ideal (infinite-$A_0$) gain is $1/\beta = 1 + C_2/C_1$, and the relative gain error is, to first order,

$$\varepsilon \approx \frac{1}{\beta A_0}.$$

The error depends on the loop gain $\beta A_0$, not on $A_0$ alone: the larger the desired gain $1/\beta$, the smaller the loop gain and the larger the error.

### Step 5 — Maximum gain for an error below 5 %

$$
\begin{aligned}
\frac{1}{\beta A_0} &\le 0.05\\
\frac1\beta &\le 0.05\,A_0 = 0.05\times24.4 = 1.22 .
\end{aligned}
$$

At this limit $\beta A_0 = 24.4/1.22 = 20$, and the actual closed-loop gain is

$$\frac{A_0}{1 + \beta A_0} = \frac{24.4}{1 + 20} = 1.16 .$$

So the maximum closed-loop gain is **about 1.2** (nominal $1 + C_2/C_1 = 1.22$, i.e. $C_2/C_1 = 0.22$; actual 1.16).

*Exact error definition.* If the actual gain must be at least 95 % of $1/\beta$, then $\beta A_0/(1 + \beta A_0) \ge 0.95$, i.e. $\beta A_0 \ge 19$, so $1/\beta \le 24.4/19 = 1.28$, and the actual gain is $0.95\times1.28 = 1.22$.

**Interpretation.** With an open-loop gain of only about 24, a precise (5 %) closed-loop amplifier can provide barely more than unity gain. This is why practical op amps need far higher open-loop gain (cascodes, two stages).

### Result

$A_0 = g_{m1}(r_{O2}\parallel r_{O4}) = (3.66\ \mathrm{mS})(6.67\ \mathrm{k}\Omega) \approx 24.4$. With the gain error $\approx 1/(\beta A_0) \le 5\%$ and $\beta = C_1/(C_1 + C_2)$:

$$\frac1\beta = 1 + \frac{C_2}{C_1} \le 0.05A_0 \approx 1.22,$$

so the **maximum closed-loop gain is ≈ 1.2** (nominal 1.22, actual $24.4/21 \approx 1.16$). With the exact error definition ($\beta A_0 \ge 19$): nominal 1.28, actual ≈ 1.22.

**Common mistake.** Taking the gain error as $1/A_0$ and concluding that any closed-loop gain up to about $0.95A_0$ is allowed. The error is $1/(\beta A_0)$: a closed-loop gain of $1/\beta$ uses up a factor $1/\beta$ of the open-loop gain.

**Common mistake.** Computing $g_{m1}$ with the full tail current (1 mA) in one transistor, which gives 5.18 mS and $A_0 \approx 34.5$. In the balanced pair each device carries $I_{SS}/2 = 0.5$ mA.

**Common mistake.** Using $A_0 = g_{m1}r_{O2}$ and ignoring the mirror's output resistance $r_{O4}$, or swapping the NMOS and PMOS values of $\lambda$. The output node sees $r_{O2}$ and $r_{O4}$ in parallel, with $\lambda_n = 0.1\ \mathrm{V^{-1}}$ for $M_2$ and $\lambda_p = 0.2\ \mathrm{V^{-1}}$ for $M_4$.
