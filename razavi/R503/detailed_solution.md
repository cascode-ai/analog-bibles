# Detailed solution - R503

**Approach.** Model the channel noise of each transistor, find how each source enters the closed-loop equations, and express it as an equivalent current at the input node; the sources are uncorrelated, so their powers add.

### Step 1 — Bias and small-signal parameters

Call the input node (gate of $M_1$, drain of $M_3$) A and the drain of $M_1$ B. Bias: $I_{D3} = 10\ \mu$A, $I_{D1} = |I_{D2}| = 1$ mA. With $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$ and $r_O = 1/(\lambda I_D)$:

$$
\begin{aligned}
g_{m1} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = 5.18\ \mathrm{mS}, & r_{O1} &= 10\ \mathrm{k}\Omega,\\
g_{m2} &= \sqrt{2(38.4\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = 2.77\ \mathrm{mS}, & r_{O2} &= 5\ \mathrm{k}\Omega,\\
g_{m3} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(10)(10\ \mu\mathrm{A})} = 0.164\ \mathrm{mS}, & r_{O3} &= 1\ \mathrm{M}\Omega .
\end{aligned}
$$

Noise constant: $4kT\gamma = 4(1.38\times10^{-23}\ \mathrm{J/K})(300\ \mathrm{K})(2/3) = 1.104\times10^{-20}$ J.

### Step 2 — Noise model and closed-loop equations

$M_3$'s noise is a current $I_{n3}$ ($\overline{I_{n3}^2} = 4kT\gamma g_{m3}$) from A to ground. The drain noise of the common-source devices $M_1$ and $M_2$ is moved to their gates as series voltages $V_{n1}$ and $V_{n2}$, with $\overline{V_{n1}^2} = 4kT\gamma/g_{m1}$ and $\overline{V_{n2}^2} = 4kT\gamma/g_{m2}$ (at node B).

Let $Y_A = 1/r_{O3} + sC_A$ be the admittance from A to ground *excluding* the feedback ($C_A$ is whatever capacitance sits at the input: $C_{GS1}$, a photodiode, and so on), and $A_v = (g_{m1}r_{O1})(g_{m2}r_{O2})$ the (non-inverting) gain from the gate of $M_1$ to Y.

<!-- diagram: diagram-01.cir -->

**KCL at node A:**

$$I_{in} = Y_AV_A + g_{m3}V_Y + I_{n3} .$$

**Forward path** (gate of $M_1$ at $V_A + V_{n1}$; $M_2$'s noise ignored for the moment):

$$V_Y = A_v\,(V_A + V_{n1}) .$$

Solving the KCL for $V_A = (I_{in} - I_{n3} - g_{m3}V_Y)/Y_A$ and substituting:

$$
\begin{aligned}
V_Y &= A_v\left[\frac{I_{in} - I_{n3} - g_{m3}V_Y}{Y_A} + V_{n1}\right]\\
V_Y\left(1 + \frac{A_vg_{m3}}{Y_A}\right) &= \frac{A_v}{Y_A}\left(I_{in} - I_{n3} + Y_AV_{n1}\right)\\
V_Y &= \frac{A_v}{Y_A + A_vg_{m3}}\left(I_{in} - I_{n3} + Y_AV_{n1}\right).
\end{aligned}
$$

The bracket shows directly how each source compares with the input current.

### Step 3 — Contribution of $M_3$

$I_{n3}$ appears in the bracket exactly like $I_{in}$ (same node, same transfer function), so it refers to the input **unchanged**:

$$\overline{I_{n,in}^2}\Big|_{M_3} = 4kT\gamma\,g_{m3} = (1.104\times10^{-20})(1.64\times10^{-4}) = 1.81\times10^{-24}\ \mathrm{A^2/Hz}.$$

Feedback does not reduce it: a noise current entering at the input node is indistinguishable from the signal.

### Step 4 — Contribution of $M_1$

$V_{n1}$ appears in the bracket as the current $Y_AV_{n1}$, so

$$\overline{I_{n,in}^2}\Big|_{M_1} = |Y_A|^2\,\overline{V_{n1}^2} = \frac{4kT\gamma}{g_{m1}}\left(\frac{1}{r_{O3}^2} + \omega^2C_A^2\right).$$

**Low frequency** ($\omega \to 0$):

$$\overline{I_{n,in}^2}\Big|_{M_1} = \frac{4kT\gamma}{g_{m1}r_{O3}^2} = \frac{1.104\times10^{-20}}{(5.18\times10^{-3})(10^6)^2}\ \mathrm{A^2/Hz} = 2.1\times10^{-30}\ \mathrm{A^2/Hz},$$

about a million times smaller than $M_3$'s term, because the input-node admittance (1 µS) that converts $V_{n1}$ into a current is tiny.

**Higher frequencies.** The term grows as $\omega^2$ and equals $M_3$'s when $\omega^2C_A^2/g_{m1} = g_{m3}$, i.e. at $\omega = \sqrt{g_{m1}g_{m3}}/C_A = (9.2\times10^{-4}\ \mathrm{S})/C_A$: about $9\times10^9$ rad/s for $C_A = 0.1$ pF, or $9\times10^8$ rad/s for 1 pF. Below that, $M_1$ is negligible.

### Step 5 — Contribution of $M_2$

$V_{n2}$ at the gate of $M_2$ equals $V_{n2}/(g_{m1}r_{O1})$ at the gate of $M_1$, so its contribution is $M_1$'s expression scaled by

$$\frac{\overline{V_{n2}^2}/(g_{m1}r_{O1})^2}{\overline{V_{n1}^2}} = \frac{g_{m1}}{g_{m2}(g_{m1}r_{O1})^2} = \frac{5.18}{2.77\times51.8^2} = 7\times10^{-4},$$

which is negligible.

### Step 6 — Total

$$\overline{I_{n,in}^2} = 4kT\gamma\left[g_{m3} + \frac{\left|1/r_{O3} + j\omega C_A\right|^2}{g_{m1}}\left(1 + \frac{g_{m1}}{g_{m2}(g_{m1}r_{O1})^2}\right)\right].$$

At low frequencies only the first term matters:

$$\overline{I_{n,in}^2} \approx 4kT\gamma\,g_{m3} = \frac{16}{3}kT\,g_{m3} = 1.8\times10^{-24}\ \mathrm{A^2/Hz}, \qquad \sqrt{\overline{I_{n,in}^2}} \approx 1.34\ \mathrm{pA/\sqrt{Hz}} .$$

With a large loop gain, $V_Y \approx I_{in}/g_{m3}$: the transimpedance is about $1/g_{m3} = 6.1$ kΩ, so $M_3$ acts as a 6.1-kΩ feedback resistor. A real 6.1-kΩ resistor would contribute $4kT/R = 2.7\times10^{-24}\ \mathrm{A^2/Hz}$; the transistor gives the same with the factor $\gamma = 2/3$.

### Result

$$\overline{I_{n,in}^2} \approx 4kT\gamma\,g_{m3} \approx 1.8\times10^{-24}\ \mathrm{A^2/Hz}\quad(\approx 1.34\ \mathrm{pA/\sqrt{Hz}})$$

at low frequencies, set entirely by the feedback device $M_3$ ($g_{m3} = 0.164$ mS). $M_1$ contributes $4kT\gamma|1/r_{O3} + j\omega C_A|^2/g_{m1}$, negligible at low frequency (≈ $2\times10^{-30}\ \mathrm{A^2/Hz}$) but rising as $\omega^2$; $M_2$ is smaller still, by a factor of about $7\times10^{-4}$.

**Common mistake.** Taking $M_1$ as the dominant source, e.g. $4kT\gamma g_{m1} \approx 5.7\times10^{-23}\ \mathrm{A^2/Hz}$. $M_1$'s noise is a *voltage* at its gate, which becomes an input current only through the tiny input-node admittance.

**Common mistake.** Dividing $M_3$'s noise by the loop gain. $M_3$'s noise current enters the same node as the signal and is amplified exactly like it, so it is referred to the input unchanged.

**Common mistake.** Including noise from $I_1$–$I_3$, which the problem states are noiseless; in a real design they would add their own noise currents (the one at the input node, $I_3$, directly).
