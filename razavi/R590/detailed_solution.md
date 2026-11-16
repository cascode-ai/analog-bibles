# Detailed solution - R590

**Approach.** The "op amp" here is one differential pair with current-source loads, so its open-loop gain is modest. Compute that gain, apply charge conservation at the gate (summing) node of the differential half circuit to get the closed-loop gain, and compare it with the nominal value $C_1/C_3$.

### Step 1 — Half circuit

For differential signals the tail node P is an AC ground, so each side is a common-source stage. Call the gate of $M_1$ X: $C_1$ connects it to the switched input plate and $C_3$ to the output, where $M_1$ draws $g_{m1}v_X$ to ground in parallel with $r_{O1}$ and the load's $r_{O3}$ (transistor capacitances neglected).

<!-- diagram: diagram-01.cir -->

The open-loop gain from X to the output is

$$A_v = \frac{v_{out}}{-v_X} = g_{m1}\,(r_{O1}\parallel r_{O3}).$$

### Step 2 — Small-signal parameters

Each branch carries $I_D = I_{SS}/2 = 0.5$ mA (not the full tail current), and $W/L = 50/0.5 = 100$:

$$g_{m1} = \sqrt{2\,(134\times10^{-6}\ \mathrm{A/V^2})(100)(0.5\times10^{-3}\ \mathrm{A})} = \sqrt{1.34\times10^{-5}}\ \mathrm{A/V} = 3.66\ \mathrm{mS},$$

$$
\begin{aligned}
r_{O1} &= \frac{1}{\lambda_nI_D} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\times10^{-3}\ \mathrm{A})} = 20\ \mathrm{k}\Omega,\\
r_{O3} &= \frac{1}{\lambda_pI_D} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\times10^{-3}\ \mathrm{A})} = 10\ \mathrm{k}\Omega,\\
r_{O1}\parallel r_{O3} &= \frac{(20)(10)}{20 + 10}\ \mathrm{k}\Omega = 6.67\ \mathrm{k}\Omega,\\
A_v &= g_{m1}(r_{O1}\parallel r_{O3}) = (3.66\times10^{-3}\ \mathrm{S})(6.67\times10^{3}\ \Omega) = 24.4 .
\end{aligned}
$$

### Step 3 — Closed-loop gain from charge conservation at X

In amplification the left plate of $C_1$ moves from the input to $V_{CM}$, a step $\Delta V_{in}$ (half of the differential input, with sign). X connects only to capacitors and a MOS gate, so its charge is conserved:

$$C_1\,(\Delta V_X - \Delta V_{in}) + C_3\,(\Delta V_X - \Delta V_{out}) = 0.$$

After settling no current flows in the capacitors, so the full low-frequency gain applies, $\Delta V_X = -\Delta V_{out}/A_v$:

$$
\begin{aligned}
(C_1 + C_3)\,\Delta V_X - C_3\,\Delta V_{out} &= C_1\,\Delta V_{in}\\
-(C_1 + C_3)\frac{\Delta V_{out}}{A_v} - C_3\,\Delta V_{out} &= C_1\,\Delta V_{in}\\
\frac{\Delta V_{out}}{\Delta V_{in}} &= -\frac{C_1}{C_3 + (C_1 + C_3)/A_v} = -\frac{C_1}{C_3}\cdot\frac{1}{1 + \dfrac{1}{\beta A_v}},
\end{aligned}
$$

with the feedback factor (the fraction of the output that the $C_3$/$C_1$ divider returns to X)

$$\beta = \frac{C_3}{C_1 + C_3}.$$

Both halves are identical, so the same expression holds for the full differential gain.

### Step 4 — Numbers

$$
\begin{aligned}
\frac{C_1}{C_3} &= \frac{2\ \mathrm{pF}}{0.5\ \mathrm{pF}} = 4\quad\text{(nominal gain)},\\
\beta &= \frac{0.5\ \mathrm{pF}}{2\ \mathrm{pF} + 0.5\ \mathrm{pF}} = 0.2,\\
\beta A_v &= 0.2\times24.4 = 4.88\quad\text{(loop gain)},\\
\frac{1}{\beta A_v} &= \frac{1}{4.88} = 0.205,\\
\left|\frac{\Delta V_{out}}{\Delta V_{in}}\right| &= \frac{4}{1 + 0.205} = \frac{4}{1.205} = 3.32 .
\end{aligned}
$$

### Step 5 — Gain error

The gain error is the relative shortfall from the nominal gain:

$$
\begin{aligned}
\varepsilon &= \frac{4 - 3.32}{4} = 1 - \frac{1}{1 + 1/(\beta A_v)} = \frac{1}{1 + \beta A_v}\\
&= \frac{1}{1 + 4.88} = \frac{1}{5.88} = 0.170 = 17\ \%.
\end{aligned}
$$

The first-order approximation $\varepsilon \approx 1/(\beta A_v) = (C_1 + C_3)/(C_3A_v) = 20.5\ \%$ needs $\beta A_v \gg 1$, which fails here, so it overestimates the error noticeably.

The error is large because a single pair with current-source loads gives only $A_v \approx 24$, and only one fifth of the output is fed back, so the loop gain is below 5. A gain error of 1 % or less would need a loop gain of about 100, i.e. an amplifier gain of about 500 (cascodes or a second stage).

### Result

$A_v = g_{m1}(r_{O1}\parallel r_{O3}) = 3.66\ \mathrm{mS}\times6.67\ \mathrm{k}\Omega \approx 24.4$ and $\beta = C_3/(C_1 + C_3) = 0.2$, so the closed-loop gain is

$$\frac{C_1/C_3}{1 + 1/(\beta A_v)} = \frac{4}{1.205} \approx 3.32$$

instead of 4: a **gain error of about 17 %** (exact, $1/(1 + \beta A_v)$), or 20.5 % with the first-order formula $(C_1 + C_3)/(C_3A_v)$.

**Common mistake.** Leaving out the feedback factor and quoting $1/A_v \approx 4\ \%$. $C_1$ also loads the summing node, so only $\beta = 0.2$ of the output is fed back; the relevant quantity is the loop gain $\beta A_v$.

**Common mistake.** Miscalculating $A_v$: using $r_{O1} + r_{O3}$ (they are in parallel at the output), putting the full 1-mA tail current into one transistor (each side carries $I_{SS}/2$), or using the PMOS $\lambda$ for the NMOS device.
