# Detailed solution - R175

**Approach.** The input devices are matched, so a common-mode input changes both branch currents equally. Those equal currents flow into unequal diode loads, $1/g_{m3} \neq 1/g_{m4}$, which produces a differential output. We compute the load resistances (the current through each load is the same, so only the width differs), the differential gain, and the common-mode-to-differential gain including the tail degeneration $1 + 2g_mR_{SS}$. The CMRR is their ratio.

### Step 1 — Currents and transconductances

The input pair is matched and the tail carries $I_{SS} = 0.5$ mA, so at equilibrium each side carries $0.25$ mA. A diode-connected load carries the current of its own branch, so **both loads carry 0.25 mA**. The width mismatch changes their $V_{GS}$, not their current.

**Input devices** ($\mu_nC_{ox}W/L = 13.4\ \mathrm{mA/V^2}$):

$$g_{m1} = g_{m2} = \sqrt{2(13.4\ \mathrm{mA/V^2})(0.25\ \mathrm{mA})} = 2.59\ \mathrm{mS}.$$

**Loads**, from $g_m = \sqrt{2\mu_pC_{ox}(W/L)I_D}$ with $L = 0.5\ \mu$m:

$$
\begin{aligned}
g_{m3} &= \sqrt{2(38.4\ \mu\mathrm{A/V^2})\left(\tfrac{10}{0.5}\right)(0.25\ \mathrm{mA})} = \sqrt{3.84\times10^{-7}}\ \mathrm{S} = 0.620\ \mathrm{mS}, & \frac{1}{g_{m3}} &= 1.614\ \mathrm{k}\Omega,\\
g_{m4} &= \sqrt{2(38.4\ \mu\mathrm{A/V^2})\left(\tfrac{11}{0.5}\right)(0.25\ \mathrm{mA})} = \sqrt{4.224\times10^{-7}}\ \mathrm{S} = 0.650\ \mathrm{mS}, & \frac{1}{g_{m4}} &= 1.539\ \mathrm{k}\Omega .
\end{aligned}
$$

**Load mismatch:**

$$\Delta R = \frac{1}{g_{m3}} - \frac{1}{g_{m4}} = 1.614 - 1.539 = 0.075\ \mathrm{k}\Omega = 75\ \Omega .$$

Relative to the average load (1.576 kΩ) this is about 4.8 %, roughly *half* of the 10 % width mismatch, because at equal current $g_m \propto \sqrt{W}$, so $1/g_m \propto 1/\sqrt{W}$ ($\sqrt{1.1} = 1.049$).

**Tail impedance** ($\lambda = 0.1\ \mathrm{V^{-1}}$, 0.5 mA):

$$R_{SS} = \frac{1}{\lambda I_{SS}} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega .$$

### Step 2 — Differential gain

For a differential input $\pm v_d/2$, the matched input devices change their currents by $\pm g_{m1}v_d/2$, and $P$ is an AC ground. Each current flows into its own diode load:

$$
\begin{aligned}
v_X &= -\frac{g_{m1}v_d}{2}\cdot\frac{1}{g_{m3}}, \qquad v_Y = +\frac{g_{m1}v_d}{2}\cdot\frac{1}{g_{m4}},\\
|A_{DM}| &= \left|\frac{v_X - v_Y}{v_d}\right| = g_{m1}\,\frac{1/g_{m3} + 1/g_{m4}}{2} = (2.59\ \mathrm{mS})(1.576\ \mathrm{k}\Omega) = 4.08 .
\end{aligned}
$$

### Step 3 — Common-mode to differential gain

Small-signal model for a common-mode input $v_{cm}$: two equal current sources $g_{m1}(v_{cm} - v_P)$ from $X$ and $Y$ to $P$, $R_{SS}$ from $P$ to ground, and loads $1/g_{m3}$ at $X$ and $1/g_{m4}$ at $Y$.

<!-- diagram: diagram-01.cir -->

Both transistors carry the same small-signal current $i$, and $R_{SS}$ carries $2i$. KCL at $P$:

$$
\begin{aligned}
v_P &= 2iR_{SS}, \qquad i = g_{m1}(v_{cm} - 2iR_{SS}),\\
i &= \frac{g_{m1}v_{cm}}{1 + 2g_{m1}R_{SS}} .
\end{aligned}
$$

The equal currents flow through unequal loads:

$$
\begin{aligned}
v_X - v_Y &= -\frac{i}{g_{m3}} + \frac{i}{g_{m4}} = -i\,\Delta R,\\
|A_{CM-DM}| &= \frac{g_{m1}\Delta R}{1 + 2g_{m1}R_{SS}} .
\end{aligned}
$$

Numbers:

$$
\begin{aligned}
1 + 2g_{m1}R_{SS} &= 1 + 2(2.59\ \mathrm{mS})(20\ \mathrm{k}\Omega) = 1 + 103.5 = 104.5,\\
g_{m1}\Delta R &= (2.59\ \mathrm{mS})(75.1\ \Omega) = 0.194,\\
|A_{CM-DM}| &= \frac{0.194}{104.5} = 1.86\times10^{-3}.
\end{aligned}
$$

(Unlike a threshold mismatch in the input pair, this mismatch does *not* cancel: the two loads carry the same current but have different widths, so their resistances differ for every value of the common-mode current.)

### Step 4 — CMRR

$$\mathrm{CMRR} = \frac{|A_{DM}|}{|A_{CM-DM}|} = \frac{4.08}{1.86\times10^{-3}} \approx 2.19\times10^3,$$

or $20\log_{10}(2190) \approx 66.8$ dB. In compact form,

$$\mathrm{CMRR} = \frac{(1/g_{m3} + 1/g_{m4})/2}{\Delta R}\left(1 + 2g_{m1}R_{SS}\right) \approx \frac{1}{0.048}\times 104.5 \approx 2.2\times10^3 .$$

As with resistive loads, the CMRR is the inverse relative load mismatch (about 21) times the tail degeneration factor (104.5).

### Result

$$\mathrm{CMRR} = \frac{g_{m1}(1/g_{m3} + 1/g_{m4})/2}{g_{m1}\Delta R/(1 + 2g_{m1}R_{SS})} \approx \frac{4.08}{1.86\times10^{-3}} \approx 2{,}200\quad(\approx 67\ \mathrm{dB}),$$

with $1/g_{m3} = 1.614$ kΩ, $1/g_{m4} = 1.539$ kΩ ($\Delta R = 75\ \Omega$, about 4.8 %), $g_{m1} = 2.59$ mS and $R_{SS} = 20$ kΩ.

**Common mistake.** Taking the load mismatch equal to the 10 % width mismatch, which halves the CMRR (≈ 1,050–1,100). The loads carry equal currents, and at equal current $1/g_m \propto 1/\sqrt{W}$, so a 10 % width error gives only about a 4.8 % resistance error.

**Common mistake.** Assuming that the wider load $M_4$ carries 10 % more current. The current of a diode-connected load is set by the input device below it; only its $V_{GS}$ adjusts.

**Common mistake.** Concluding that the CMRR is infinite (as can happen for a threshold mismatch in the input pair with diode loads), or leaving out the factor $1 + 2g_{m1}R_{SS}$. Here the two load resistances really differ, so equal common-mode currents produce unequal voltages, and the tail impedance sets how large those currents are.
