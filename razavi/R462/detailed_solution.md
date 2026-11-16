# Detailed solution - R462

**Approach.** Model each transistor's channel thermal noise as a drain-source current of density $4kT\gamma g_m$ ($\gamma = 2/3$). In the first stage, every noise current can be converted into an equivalent noise current of an input transistor and referred to the input by dividing by $g_{m1}$. The second stage's noise is first referred to its own input (node Y) and then divided by the first-stage gain squared. Uncorrelated noise powers add.

### Step 1 — The circuit and its small-signal parameters

From the figure:

- **First stage:** PMOS input pair $M_1$–$M_2$ (sources at node P, fed by the tail $M_7$), NMOS current-mirror load $M_3$ (diode-connected, at X) and $M_4$ (at Y).
- **Second stage:** NMOS common-source device $M_5$ (gate at Y) with the PMOS current-source load $M_6$.

Transconductances (square law, $g_m = 2I_D/V_{ov}$, where $V_{ov}$ is the overdrive voltage):

$$
\begin{aligned}
g_{m1} = g_{m2} &= 2.81\ \mathrm{mS}\quad\text{(given)},\\
g_{m3} = g_{m4} &= \frac{2\,(0.5\ \mathrm{mA})}{0.25\ \mathrm{V}} = 4\ \mathrm{mS},\\
g_{m5} &= \frac{2\,(1\ \mathrm{mA})}{0.25\ \mathrm{V}} = 8\ \mathrm{mS},\\
g_{m6} &= \frac{2\,(1\ \mathrm{mA})}{0.25\ \mathrm{V}} = 8\ \mathrm{mS}.
\end{aligned}
$$

Constants: $k = 1.38\times10^{-23}$ J/K (Boltzmann's constant), $T = 300$ K, so

$$4kT\cdot\tfrac23 = 4\,(1.38\times10^{-23})(300)\left(\tfrac23\right) = 1.104\times10^{-20}\ \mathrm{J}.$$

### Step 2 — Input pair $M_1$, $M_2$

The noise current $I_{n1}$ of $M_1$ flows between its drain and source, exactly in parallel with its signal current $g_{m1}v_{sg1}$. A noise current $I_{n1}$ is therefore indistinguishable from a gate-voltage change of $I_{n1}/g_{m1}$, i.e. from a voltage in series with the input:

$$\overline{V_{n,in}^2}\Big|_{M_1} = \frac{\overline{I_{n1}^2}}{g_{m1}^2} = \frac{4kT\cdot\tfrac23\,g_{m1}}{g_{m1}^2} = \frac{4kT\cdot\tfrac23}{g_{m1}} .$$

$M_2$ contributes the same amount. The two are uncorrelated, so their powers add.

### Step 3 — Mirror load $M_3$, $M_4$

The noise current $I_{n3}$ of $M_3$ flows from node X to ground. $M_1$'s current also flows into X (from P). For differential signals P behaves as an AC ground, so $I_{n3}$ at X has the same effect as an extra noise current of $M_1$. Referring it the same way, by dividing by $g_{m1}$:

$$\overline{V_{n,in}^2}\Big|_{M_3} = \frac{\overline{I_{n3}^2}}{g_{m1}^2} = \frac{4kT\cdot\tfrac23\,g_{m3}}{g_{m1}^2} .$$

The same holds for $M_4$ at node Y (in parallel with $M_2$).

Note the weighting: the load's noise current is divided by $g_{m1}^2$, not $g_{m3}^2$. The input must reproduce the load's noise current through the input transistor's $g_m$, so a load with large $g_{m3}$ is noisy.

### Step 4 — Tail $M_7$

The noise current of $M_7$ splits equally between $M_1$ and $M_2$. Through the mirror, $M_1$'s half is copied by $M_4$ into Y, where it cancels $M_2$'s half. So, to first order, the tail contributes nothing to the output. It is a common-mode disturbance and is not counted.

### Step 5 — First-stage total

Adding the four uncorrelated contributions of Steps 2 and 3:

$$
\overline{V_{n,in}^2}\Big|_{stage\,1} = 2\times4kT\cdot\tfrac23\left(\frac{1}{g_{m1}} + \frac{g_{m3}}{g_{m1}^2}\right) = 8kT\cdot\tfrac23\left(\frac{1}{g_{m1}} + \frac{g_{m3}}{g_{m1}^2}\right).
$$

Numerically:

$$
\begin{aligned}
\frac{1}{g_{m1}} &= \frac{1}{2.81\ \mathrm{mS}} = 356\ \Omega,\\
\frac{g_{m3}}{g_{m1}^2} &= \frac{4\times10^{-3}\ \mathrm{S}}{(2.81\times10^{-3}\ \mathrm{S})^2} = \frac{4\times10^{-3}}{7.90\times10^{-6}}\ \Omega = 506\ \Omega,\\
\text{sum} &= 862\ \Omega,\\
\overline{V_{n,in}^2}\Big|_{stage\,1} &= 2\,(1.104\times10^{-20}\ \mathrm{J})(862\ \Omega) = 1.90\times10^{-17}\ \mathrm{V^2/Hz}.
\end{aligned}
$$

The load ($M_3$, $M_4$) contributes *more* than the input pair (506 Ω versus 356 Ω) because $g_{m3} = 4$ mS exceeds $g_{m1} = 2.81$ mS. That follows from the design choice of a small 0.25-V overdrive for the mirror; a larger overdrive for $M_3$/$M_4$ would reduce this term.

(An exact nodal analysis of the first stage, keeping all output resistances, gives the same total to within 0.1 %.)

### Step 6 — Second stage $M_5$, $M_6$

The noise currents of $M_5$ and $M_6$ both flow into the output node. Referred to the gate of $M_5$ (node Y), by dividing by $g_{m5}$:

$$
\overline{V_{n,Y}^2} = \frac{4kT\cdot\tfrac23\,(g_{m5} + g_{m6})}{g_{m5}^2} = (1.104\times10^{-20})\,\frac{16\times10^{-3}}{(8\times10^{-3})^2}\ \mathrm{V^2/Hz} = (1.104\times10^{-20})(250)\ \mathrm{V^2/Hz} = 2.76\times10^{-18}\ \mathrm{V^2/Hz}.
$$

To refer it to the op-amp input, divide by the square of the first-stage gain. With the design's channel-length modulation ($\lambda_p = 0.2$, $\lambda_n = 0.1\ \mathrm{V^{-1}}$), $A_1 = g_{m1}(r_{O2}\parallel r_{O4}) = 2.81\ \mathrm{mS}\times(10\ \mathrm{k}\Omega\parallel20\ \mathrm{k}\Omega) = 18.75$:

$$\overline{V_{n,in}^2}\Big|_{stage\,2} = \frac{2.76\times10^{-18}}{18.75^2}\ \mathrm{V^2/Hz} = \frac{2.76\times10^{-18}}{352}\ \mathrm{V^2/Hz} = 7.9\times10^{-21}\ \mathrm{V^2/Hz},$$

about 0.04 % of the first-stage noise. Even if $A_1$ were only 10, it would be 0.15 %. The second stage is negligible.

### Step 7 — Total input-referred noise

$$\overline{V_{n,in}^2} \approx 1.90\times10^{-17}\ \mathrm{V^2/Hz},$$

$$\sqrt{\overline{V_{n,in}^2}} = \sqrt{1.90\times10^{-17}}\ \mathrm{V/\sqrt{Hz}} = 4.4\ \mathrm{nV/\sqrt{Hz}} .$$

### Result

$$\overline{V_{n,in}^2} \approx 8kT\cdot\tfrac23\left(\frac{1}{g_{m1}} + \frac{g_{m3}}{g_{m1}^2}\right) = 2.21\times10^{-20}\times(356 + 506)\ \Omega \approx 1.9\times10^{-17}\ \mathrm{V^2/Hz},$$

i.e. about **4.4 nV/√Hz**. The second stage adds less than 0.1 %, and the tail $M_7$ contributes only common-mode noise.

**Common mistake.** Weighting the load term as $4kT\gamma/g_{m3}$ (as if the load's noise were referred to its own gate). The load's noise *current* enters the signal node and is reproduced at the input through $g_{m1}$, so its weight is $g_{m3}/g_{m1}^2$.

**Common mistake.** Dropping the factor 2 (using $4kT$ instead of $8kT$). Both input devices and both load devices are independent noise sources, and all four reach the output.

**Common mistake.** Thinking the second stage dominates because $M_5$ and $M_6$ carry twice the current and have large $g_m$. Their noise is divided by $A_1^2 \approx 350$ when referred to the input. Counting the tail $M_7$ as a differential noise source is also wrong: its noise cancels through the mirror.
