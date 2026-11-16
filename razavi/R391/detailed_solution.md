# Detailed solution - R391

**Approach.** The five-transistor OTA has low-frequency open-loop gain $A_0 = g_{m1}(r_{O2}\parallel r_{O4})$. The divider $C_1$/$C_2$ feeds a fraction $\beta$ of the output back to the gate of $M_2$, forming a non-inverting amplifier of nominal gain $1/\beta$ with gain error $\approx 1/(\beta A_0)$. Compute $A_0$ from the device data; the 5 % limit then caps $1/\beta$.

### Step 1 — Bias and small-signal parameters

Call the gate of $M_2$ node X. A rise at the gate of $M_1$ raises $I_{D1}$ (mirrored into $M_4$) and lowers $I_{D2}$, both pushing current into the output, so the gate of $M_1$ is the non-inverting input and feeding the output back to X gives **negative feedback**.

The balanced tail current splits equally:

$$I_{D1} = I_{D2} = I_{D3} = I_{D4} = \frac{I_{SS}}{2} = 0.5\ \mathrm{mA}.$$

With $(W/L)_{1,2} = 50/0.5 = 100$:

$$g_{m1} = \sqrt{2\,(134\times10^{-6}\ \mathrm{A/V^2})(100)(0.5\times10^{-3}\ \mathrm{A})} = \sqrt{1.34\times10^{-5}}\ \mathrm{A/V} = 3.66\ \mathrm{mS},$$

$$
\begin{aligned}
r_{O2} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,\\
r_{O4} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k}\Omega,\\
r_{O2}\parallel r_{O4} &= \frac{20\times10}{20 + 10}\ \mathrm{k}\Omega = 6.67\ \mathrm{k}\Omega .
\end{aligned}
$$

$(W/L)_{3,4}$ does not enter the low-frequency gain.

### Step 2 — Open-loop gain

With the mirror load, the output current is $g_{m1}(V_{in} - V_X)$ into $r_{O2}\parallel r_{O4}$:

$$A_0 = g_{m1}\,(r_{O2}\parallel r_{O4}) = (3.66\times10^{-3}\ \mathrm{S})(6.67\times10^{3}\ \Omega) = 24.4 .$$

### Step 3 — Closed-loop gain and gain error

The OTA is a current source $g_{m1}(V_{in} - V_X)$ into the output, in parallel with $r_{O2}\parallel r_{O4}$; $C_1$ runs from the output to X and $C_2$ from X to ground.

<!-- diagram: diagram-01.cir -->

The gate of $M_2$ draws no current, and at low frequencies the capacitors do not load the output, so

$$V_X = \frac{C_1}{C_1 + C_2}V_{out} = \beta V_{out}, \qquad \beta = \frac{C_1}{C_1 + C_2}, \qquad \frac1\beta = 1 + \frac{C_2}{C_1}.$$

With $V_{out} = A_0(V_{in} - \beta V_{out})$:

$$
\begin{aligned}
V_{out}(1 + \beta A_0) &= A_0V_{in}\\
\frac{V_{out}}{V_{in}} &= \frac{A_0}{1 + \beta A_0} = \frac1\beta\cdot\frac{1}{1 + \dfrac{1}{\beta A_0}} \approx \frac1\beta\left(1 - \frac{1}{\beta A_0}\right).
\end{aligned}
$$

The ideal gain is $1/\beta = 1 + C_2/C_1$, and the relative error is, to first order, $\varepsilon \approx 1/(\beta A_0)$: the larger the desired gain $1/\beta$, the smaller the loop gain and the larger the error.

### Step 4 — Maximum gain for an error below 5 %

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

With an open-loop gain of only about 24, a 5 %-precise closed-loop amplifier provides barely more than unity gain; practical op amps need far higher open-loop gain (cascodes, two stages).

### Result

$A_0 = g_{m1}(r_{O2}\parallel r_{O4}) = (3.66\ \mathrm{mS})(6.67\ \mathrm{k}\Omega) \approx 24.4$. With the gain error $\approx 1/(\beta A_0) \le 5\%$ and $\beta = C_1/(C_1 + C_2)$:

$$\frac1\beta = 1 + \frac{C_2}{C_1} \le 0.05A_0 \approx 1.22,$$

so the **maximum closed-loop gain is ≈ 1.2** (nominal 1.22, actual $24.4/21 \approx 1.16$). With the exact error definition ($\beta A_0 \ge 19$): nominal 1.28, actual ≈ 1.22.

**Common mistake.** Taking the gain error as $1/A_0$ and allowing any closed-loop gain up to about $0.95A_0$. The error is $1/(\beta A_0)$: a closed-loop gain of $1/\beta$ uses up a factor $1/\beta$ of the open-loop gain.

**Common mistake.** Computing $g_{m1}$ with the full tail current (1 mA) in one transistor, which gives 5.18 mS and $A_0 \approx 34.5$. Each device carries $I_{SS}/2 = 0.5$ mA.

**Common mistake.** Using $A_0 = g_{m1}r_{O2}$, ignoring $r_{O4}$, or swapping the NMOS and PMOS values of $\lambda$ ($\lambda_n = 0.1\ \mathrm{V^{-1}}$ for $M_2$, $\lambda_p = 0.2\ \mathrm{V^{-1}}$ for $M_4$).
