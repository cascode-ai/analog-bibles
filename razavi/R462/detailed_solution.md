# Detailed solution - R462

**Approach.** Model each transistor's channel thermal noise as a drain-source current $4kT\gamma g_m$ ($\gamma = 2/3$). In the first stage each noise current acts like an extra current of an input transistor and is referred to the input by dividing by $g_{m1}$; the second stage's noise is referred to node Y and then divided by the first-stage gain squared. Uncorrelated powers add.

### Step 1 — Small-signal parameters

$$
\begin{aligned}
g_{m1} = g_{m2} &= 2.81\ \mathrm{mS}\quad\text{(given)},\\
g_{m3} = g_{m4} &= \frac{2\,(0.5\ \mathrm{mA})}{0.25\ \mathrm{V}} = 4\ \mathrm{mS},\\
g_{m5} &= \frac{2\,(1\ \mathrm{mA})}{0.25\ \mathrm{V}} = 8\ \mathrm{mS},\\
g_{m6} &= \frac{2\,(1\ \mathrm{mA})}{0.25\ \mathrm{V}} = 8\ \mathrm{mS},
\end{aligned}
$$

$$4kT\cdot\tfrac23 = 4\,(1.38\times10^{-23})(300)\left(\tfrac23\right) = 1.104\times10^{-20}\ \mathrm{J}.$$

### Step 2 — Input pair $M_1$, $M_2$

$I_{n1}$ flows in parallel with the signal current $g_{m1}v_{sg1}$, so it is equivalent to a gate voltage $I_{n1}/g_{m1}$:

$$\overline{V_{n,in}^2}\Big|_{M_1} = \frac{\overline{I_{n1}^2}}{g_{m1}^2} = \frac{4kT\cdot\tfrac23\,g_{m1}}{g_{m1}^2} = \frac{4kT\cdot\tfrac23}{g_{m1}} .$$

$M_2$ contributes the same, uncorrelated amount.

### Step 3 — Mirror load $M_3$, $M_4$

$I_{n3}$ flows from X to ground, where $M_1$'s current also arrives; with the common source node P an ac ground for differential signals, it acts as an extra noise current of $M_1$:

$$\overline{V_{n,in}^2}\Big|_{M_3} = \frac{\overline{I_{n3}^2}}{g_{m1}^2} = \frac{4kT\cdot\tfrac23\,g_{m3}}{g_{m1}^2} ,$$

and likewise for $M_4$ at Y. The weight is $1/g_{m1}^2$, not $1/g_{m3}^2$, so a load with large $g_{m3}$ is noisy.

### Step 4 — Tail $M_7$

Its noise current splits equally between $M_1$ and $M_2$; $M_4$ copies $M_1$'s half into Y, where it cancels $M_2$'s half. To first order the tail is a common-mode disturbance and is not counted.

### Step 5 — First-stage total

$$
\overline{V_{n,in}^2}\Big|_{stage\,1} = 2\times4kT\cdot\tfrac23\left(\frac{1}{g_{m1}} + \frac{g_{m3}}{g_{m1}^2}\right) = 8kT\cdot\tfrac23\left(\frac{1}{g_{m1}} + \frac{g_{m3}}{g_{m1}^2}\right),
$$

$$
\begin{aligned}
\frac{1}{g_{m1}} &= \frac{1}{2.81\ \mathrm{mS}} = 356\ \Omega,\\
\frac{g_{m3}}{g_{m1}^2} &= \frac{4\times10^{-3}\ \mathrm{S}}{(2.81\times10^{-3}\ \mathrm{S})^2} = \frac{4\times10^{-3}}{7.90\times10^{-6}}\ \Omega = 506\ \Omega,\\
\text{sum} &= 862\ \Omega,\\
\overline{V_{n,in}^2}\Big|_{stage\,1} &= 2\,(1.104\times10^{-20}\ \mathrm{J})(862\ \Omega) = 1.90\times10^{-17}\ \mathrm{V^2/Hz}.
\end{aligned}
$$

The load contributes *more* than the input pair (506 Ω versus 356 Ω) because $g_{m3} = 4$ mS exceeds $g_{m1} = 2.81$ mS, a result of the small 0.25-V mirror overdrive; a larger overdrive for $M_3$/$M_4$ would reduce it. (An exact nodal analysis keeping all output resistances agrees to within 0.1 %.)

### Step 6 — Second stage $M_5$, $M_6$

Both noise currents flow into the output; referred to the gate of $M_5$ (node Y):

$$
\overline{V_{n,Y}^2} = \frac{4kT\cdot\tfrac23\,(g_{m5} + g_{m6})}{g_{m5}^2} = (1.104\times10^{-20})\,\frac{16\times10^{-3}}{(8\times10^{-3})^2}\ \mathrm{V^2/Hz} = (1.104\times10^{-20})(250)\ \mathrm{V^2/Hz} = 2.76\times10^{-18}\ \mathrm{V^2/Hz}.
$$

Assuming $\lambda_p = 0.2$ and $\lambda_n = 0.1\ \mathrm{V^{-1}}$ (not given in the problem), $A_1 = g_{m1}(r_{O2}\parallel r_{O4}) = 2.81\ \mathrm{mS}\times(10\ \mathrm{k}\Omega\parallel20\ \mathrm{k}\Omega) = 18.75$, so

$$\overline{V_{n,in}^2}\Big|_{stage\,2} = \frac{2.76\times10^{-18}}{18.75^2}\ \mathrm{V^2/Hz} = \frac{2.76\times10^{-18}}{352}\ \mathrm{V^2/Hz} = 7.9\times10^{-21}\ \mathrm{V^2/Hz},$$

about 0.04 % of the first-stage noise (0.15 % even if $A_1$ were only 10): negligible.

### Step 7 — Total input-referred noise

$$\overline{V_{n,in}^2} \approx 1.90\times10^{-17}\ \mathrm{V^2/Hz},$$

$$\sqrt{\overline{V_{n,in}^2}} = \sqrt{1.90\times10^{-17}}\ \mathrm{V/\sqrt{Hz}} = 4.4\ \mathrm{nV/\sqrt{Hz}} .$$

### Result

$$\overline{V_{n,in}^2} \approx 8kT\cdot\tfrac23\left(\frac{1}{g_{m1}} + \frac{g_{m3}}{g_{m1}^2}\right) = 2.21\times10^{-20}\times(356 + 506)\ \Omega \approx 1.9\times10^{-17}\ \mathrm{V^2/Hz},$$

i.e. about **4.4 nV/√Hz**. The second stage adds less than 0.1 %, and the tail $M_7$ contributes only common-mode noise.

**Common mistake.** Weighting the load term as $4kT\gamma/g_{m3}$. The load's noise *current* enters the signal node and is reproduced at the input through $g_{m1}$, so its weight is $g_{m3}/g_{m1}^2$.

**Common mistake.** Using $4kT$ instead of $8kT$: both input devices and both load devices are independent sources.

**Common mistake.** Thinking the second stage dominates because $M_5$ and $M_6$ carry twice the current; their noise is divided by $A_1^2 \approx 350$. Counting the tail $M_7$ as differential noise is also wrong: it cancels through the mirror.
