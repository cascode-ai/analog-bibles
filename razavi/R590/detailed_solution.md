# Detailed solution - R590

**Approach.** The "op amp" here is just one differential pair with current-source loads, so its open-loop gain is modest. We compute that gain from the device parameters, apply charge conservation at the gate (summing) node of the differential half circuit to get the closed-loop gain, and compare it with the nominal value $C_1/C_3$.

### Step 1 — Half circuit and small-signal model

For differential signals the two sides move in opposite directions, so the tail node P does not move: it is an **AC (virtual) ground**. Each side then behaves as a common-source stage, and we can analyse one half:

- node X = gate of $M_1$; $C_1$ connects X to the switched input plate, and $C_3$ connects X to the output (drain of $M_1$);
- at the output, $M_1$ acts as a current source $g_{m1}v_X$ drawn from the output to ground, in parallel with its output resistance $r_{O1}$ and with the output resistance $r_{O3}$ of the PMOS load $M_3$ (whose gate is at the fixed bias $V_b$);
- transistor capacitances are neglected, as stated.

<!-- diagram: diagram-01.cir -->

The open-loop voltage gain from X to the output is therefore

$$A_v = \frac{v_{out}}{-v_X} = g_{m1}\,(r_{O1}\parallel r_{O3}).$$

### Step 2 — Small-signal parameters

Each branch carries $I_D = I_{SS}/2 = 0.5$ mA (not the full tail current).

**Transconductance** (square law, $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$, $W/L = 50/0.5 = 100$):

$$g_{m1} = \sqrt{2\,(134\times10^{-6}\ \mathrm{A/V^2})(100)(0.5\times10^{-3}\ \mathrm{A})} = \sqrt{1.34\times10^{-5}}\ \mathrm{A/V} = 3.66\ \mathrm{mS}.$$

**Output resistances** ($r_O = 1/(\lambda I_D)$, channel-length modulation):

$$
\begin{aligned}
r_{O1} &= \frac{1}{\lambda_nI_D} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\times10^{-3}\ \mathrm{A})} = 20\ \mathrm{k}\Omega,\\
r_{O3} &= \frac{1}{\lambda_pI_D} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\times10^{-3}\ \mathrm{A})} = 10\ \mathrm{k}\Omega.
\end{aligned}
$$

**Resistance at the output node** (the two resistances are in parallel, both going to AC ground):

$$r_{O1}\parallel r_{O3} = \frac{(20)(10)}{20 + 10}\ \mathrm{k}\Omega = 6.67\ \mathrm{k}\Omega.$$

**Open-loop gain:**

$$A_v = g_{m1}(r_{O1}\parallel r_{O3}) = (3.66\times10^{-3}\ \mathrm{S})(6.67\times10^{3}\ \Omega) = 24.4 .$$

### Step 3 — Closed-loop gain from charge conservation at X

When the circuit switches to amplification, the left plate of $C_1$ moves from the input to $V_{CM}$: a step $\Delta V_{in}$ (half of the differential input, with sign). X is connected only to capacitors and a MOS gate, so its **charge is conserved**:

$$C_1\,(\Delta V_X - \Delta V_{in}) + C_3\,(\Delta V_X - \Delta V_{out}) = 0.$$

The amplifier relates the output to X by $\Delta V_{out} = -A_v\Delta V_X$, i.e. $\Delta V_X = -\Delta V_{out}/A_v$. (After settling no current flows in the capacitors, so the full low-frequency gain $A_v$ applies.) Collect terms:

$$
\begin{aligned}
(C_1 + C_3)\,\Delta V_X - C_3\,\Delta V_{out} &= C_1\,\Delta V_{in}\\
-(C_1 + C_3)\frac{\Delta V_{out}}{A_v} - C_3\,\Delta V_{out} &= C_1\,\Delta V_{in}\\
\frac{\Delta V_{out}}{\Delta V_{in}} &= -\frac{C_1}{C_3 + (C_1 + C_3)/A_v} = -\frac{C_1}{C_3}\cdot\frac{1}{1 + \dfrac{1}{\beta A_v}},
\end{aligned}
$$

where

$$\beta = \frac{C_3}{C_1 + C_3}$$

is the **feedback factor**: the fraction of the output voltage that the capacitive divider $C_3$ / $C_1$ returns to X when the input plate is held fixed. The same expression holds for the full differential gain, since both halves are identical.

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

The **gain error** is the relative shortfall from the nominal gain:

$$
\begin{aligned}
\varepsilon &= \frac{4 - 3.32}{4} = 1 - \frac{1}{1 + 1/(\beta A_v)} = \frac{1}{1 + \beta A_v}\\
&= \frac{1}{1 + 4.88} = \frac{1}{5.88} = 0.170 = 17\ \%.
\end{aligned}
$$

The first-order approximation $\varepsilon \approx 1/(\beta A_v) = (C_1 + C_3)/(C_3A_v) = 20.5\ \%$ is valid only when $\beta A_v \gg 1$, which is not the case here; that is why it overestimates the error noticeably.

**Why so large?** A single differential pair with current-source loads has a gain of only $g_m(r_{O1}\parallel r_{O3}) \approx 24$ at this bias, and the capacitive feedback network returns only one fifth of the output to the input, so the loop gain is below 5. A gain error of 1 % or less would need a loop gain of about 100, i.e. an amplifier gain of about 500 (cascodes or a second stage).

### Result

$A_v = g_{m1}(r_{O1}\parallel r_{O3}) = 3.66\ \mathrm{mS}\times6.67\ \mathrm{k}\Omega \approx 24.4$ and $\beta = C_3/(C_1 + C_3) = 0.2$, so the closed-loop gain is

$$\frac{C_1/C_3}{1 + 1/(\beta A_v)} = \frac{4}{1.205} \approx 3.32$$

instead of 4: a **gain error of about 17 %** (exact, $1/(1 + \beta A_v)$), or 20.5 % with the first-order formula $(C_1 + C_3)/(C_3A_v)$.

**Common mistake.** Leaving out the feedback factor and quoting $1/A_v \approx 4\ \%$. The amplifier "sees" only $\beta = 0.2$ of its output fed back, because $C_1$ also loads the summing node; the relevant quantity is the loop gain $\beta A_v$, not $A_v$.

**Common mistake.** Miscalculating $A_v$: using $r_{O1} + r_{O3}$ (the two resistances are in parallel at the output node, both returning to AC ground), or putting the full 1-mA tail current into one transistor (each side carries $I_{SS}/2$), or using the PMOS $\lambda$ for the NMOS device.
