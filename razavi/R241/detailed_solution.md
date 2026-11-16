# Detailed solution - R241

**Approach.** With perfect matching the two branches are identical, so $V_{out} = V_F$. The threshold mismatch makes $M_4$ deliver slightly less current than $M_3$ for the same $V_{SG}$. Linearizing around the matched point and comparing the branches device by device, this current difference can only be absorbed by a difference between $V_{out}$ and $V_F$, acting through $r_{O2}$ and $r_{O4}$.

### Step 1 — Matched operating point and small-signal parameters

Each branch carries $I_{D5}/2 = 0.25$ mA, and all devices have $W/L = 50/0.5 = 100$. In the matched case $M_3$ and $M_4$ have the same $V_{SG}$ and current, so (with $\lambda \neq 0$) the same $V_{SD}$: $V_{out} = V_F$.

$$g_{m4} = \sqrt{2\mu_pC_{ox}\frac{W}{L}I_D} = \sqrt{2(38.4\ \mu\mathrm{A/V^2})(100)(0.25\ \mathrm{mA})} = \sqrt{1.92\times10^{-6}}\ \mathrm{A/V} = 1.39\ \mathrm{mS},$$

$$g_{m1} = g_{m2} = \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(0.25\ \mathrm{mA})} = 2.59\ \mathrm{mS},$$

$$r_{O2} = \frac{1}{\lambda_nI_D} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.25\ \mathrm{mA})} = 40\ \mathrm{k}\Omega, \qquad r_{O4} = \frac{1}{\lambda_pI_D} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.25\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,$$

$$r_{O2}\|r_{O4} = \frac{40\times20}{40 + 20}\ \mathrm{k}\Omega = 13.3\ \mathrm{k}\Omega .$$

### Step 2 — How the mismatch acts

Let $\delta = |V_{TH4}| - |V_{TH3}| = 1$ mV. $M_4$ has the same $V_{SG}$ as $M_3$ but a threshold larger by $\delta$, so its overdrive is smaller by $\delta$ and, to first order, its current is lower by

$$\Delta I_{mis} = g_{m4}\,\delta = (1.39\ \mathrm{mS})(1\ \mathrm{mV}) = 1.39\ \mu\mathrm{A} ,$$

as if a 1-mV error source were in series with the gate of $M_4$.

### Step 3 — Compare the two branches

Let $\Delta = V_{out} - V_F$ and linearize around the matched point ($\Delta = 0$).

**$M_2$ versus $M_1$.** Same gate voltage (1.5 V) and same source, so their currents differ only through $V_{DS2} - V_{DS1} = \Delta$:

$$I_{D2} - I_{D1} = \frac{\Delta}{r_{O2}} .$$

**$M_4$ versus $M_3$.** Same $V_{SG}$; they differ through the mismatch and through $V_{SD4} - V_{SD3} = (V_{DD} - V_{out}) - (V_{DD} - V_F) = -\Delta$:

$$I_{D4} - I_{D3} = -g_{m4}\delta - \frac{\Delta}{r_{O4}} .$$

Since $I_{D3} = I_{D1}$ and $I_{D4} = I_{D2}$, the two differences are equal:

$$\frac{\Delta}{r_{O2}} = -g_{m4}\delta - \frac{\Delta}{r_{O4}} ,$$

$$
\begin{aligned}
\Delta\left(\frac{1}{r_{O2}} + \frac{1}{r_{O4}}\right) &= -g_{m4}\delta,\\
\Delta &= -g_{m4}\,(r_{O2}\|r_{O4})\,\delta .
\end{aligned}
$$

The tail and the motion of P affect both branches equally and cancel; a full small-signal analysis including $r_{O5}$, $r_{O1}$, $r_{O3}$ and body effect gives exactly this expression.

### Step 4 — Numerical value

$$V_{out} - V_F = -(1.39\ \mathrm{mS})(13.3\ \mathrm{k}\Omega)(1\ \mathrm{mV}) = -18.5\times1\ \mathrm{mV} = -18.5\ \mathrm{mV} .$$

$V_{out}$ is about **18.5 mV below $V_F$**. Practically all of the change is in $V_{out}$: F is held by the diode $M_3$ ($\approx 1/g_{m3} = 0.72\ \mathrm{k}\Omega$) and moves by only about 0.16 mV. In other words, $M_4$ supplies 1.39 μA less than $M_2$ sinks, and at the high-resistance output this deficit pulls $V_{out}$ down by $1.39\ \mu\mathrm{A}\times13.3\ \mathrm{k}\Omega = 18.5$ mV.

**Input-referred view.** An error $\delta$ at the gate of the load corresponds to an input offset $\delta\,g_{m4}/g_{m1} = 1\ \mathrm{mV}\times1.39/2.59 = 0.54$ mV; times the gain $g_{m1}(r_{O2}\|r_{O4}) = 34.5$, this again gives 18.5 mV.

**Refinement.** Keeping $(1 + \lambda V_{DS})$ in the bias calculation (with typical thresholds of 0.7 V and $-0.8$ V) makes the incremental $r_O = (1 + \lambda V_{DS})/(\lambda I_D)$ and $g_m$ larger (about 45 kΩ, 24.5 kΩ and 1.53 mS), and the deviation grows to about $-24$ mV, the same order of magnitude.

### Result

$$V_{out} - V_F = -g_{m4}(r_{O2}\|r_{O4})\,\Delta|V_{TH}| = -(1.39\ \mathrm{mS})(40\ \mathrm{k}\Omega\,\|\,20\ \mathrm{k}\Omega)(1\ \mathrm{mV}) \approx -18.5\ \mathrm{mV},$$

i.e. $V_{out}$ is about 18.5 mV **below** $V_F$ (about 24 mV if the $(1 + \lambda V_{DS})$ factors are kept in $g_m$ and $r_O$).

**Common mistake.** Answering 1 mV (or zero) because "the mismatch is only 1 mV." The mismatch creates a current error $g_{m4}\delta$ at the high-impedance output, where it is multiplied by $r_{O2}\|r_{O4}$.

**Common mistake.** Getting the sign wrong. A *larger* $|V_{TH4}|$ makes $M_4$ *weaker*, so the output falls below $V_F$.

**Common mistake.** Using only $r_{O4}$ (or only $r_{O2}$) at the output. Both devices respond to $V_{out}$ through channel-length modulation, so the resistance is $r_{O2}\|r_{O4}$.
