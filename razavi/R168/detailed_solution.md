# Detailed solution - R168

**Approach.** The desired differential signal is amplified by the differential gain $A_{DM} = g_mR_D$. The common-mode noise would produce no differential output in a perfectly symmetric circuit, but the load mismatch $\Delta R_D$ converts part of it into a differential output, with gain $A_{CM-DM} = g_m\Delta R_D/(1 + 2g_mR_{SS})$. The output SNR is the ratio of the two output amplitudes.

### Step 1 — Bias quantities

**Tail.** The tail is an NMOS current source carrying $I_{SS} = 1$ mA. Its output resistance, from channel-length modulation, is

$$R_{SS} = r_O = \frac{1}{\lambda I_{SS}} = \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega .$$

**Input devices.** Each carries $I_{SS}/2 = 0.5$ mA. With $\mu_nC_{ox}(W/L) = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}$, the square-law transconductance is

$$g_m = \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D} = \sqrt{2(13.4\ \mathrm{mA/V^2})(0.5\ \mathrm{mA})} = \sqrt{13.4}\ \mathrm{mS} = 3.66\ \mathrm{mS}.$$

**Load mismatch.** $\Delta R_D = 0.005\times 2\ \mathrm{k}\Omega = 10\ \Omega$: the left load is $R_D = 2$ kΩ, the right one $R_D + \Delta R_D = 2.01$ kΩ.

As instructed, channel-length modulation and body effect are neglected in $M_1$ and $M_2$.

### Step 2 — Differential gain (the signal path)

For a differential input $v_{in}$ ($+v_{in}/2$ on $M_1$, $-v_{in}/2$ on $M_2$), the two matched transistors change their currents by $+g_mv_{in}/2$ and $-g_mv_{in}/2$. The total is unchanged, so no signal current flows in $R_{SS}$, and the tail node $P$ is an AC ground. Each drain current flows through its own load:

$$
\begin{aligned}
v_X &= -\frac{g_mv_{in}}{2}R_D, \qquad v_Y = +\frac{g_mv_{in}}{2}(R_D + \Delta R_D),\\
v_X - v_Y &= -g_mv_{in}\left(R_D + \frac{\Delta R_D}{2}\right) \approx -g_mR_D\,v_{in}.
\end{aligned}
$$

So

$$|A_{DM}| = g_mR_D = (3.66\ \mathrm{mS})(2\ \mathrm{k}\Omega) = 7.32 .$$

(The 0.25 % correction from $\Delta R_D/2$ is negligible.) The 10-mV peak-to-peak input therefore gives

$$v_{out,signal} = 7.32\times 10\ \mathrm{mV} = 73.2\ \mathrm{mV}\ \text{peak-to-peak}.$$

(In the figure, $V_{in,DM}$ is applied in series with the gate of $M_1$ only, so $V_{in1} - V_{in2} = V_{in,DM}$. Its small common-mode share, $V_{in,DM}/2$, is converted by the mechanism of Step 3 into only microvolts and can be ignored.)

### Step 3 — Common-mode to differential conversion (the noise path)

Now apply a common-mode change $v_{cm}$ to both gates. The small-signal model: each transistor is a controlled current source $g_mv_{gs}$ from its drain to node $P$, with $v_{gs} = v_{cm} - v_P$ for both. $R_{SS}$ connects $P$ to ground, and the loads $R_D$ and $R_D + \Delta R_D$ connect the drains to AC ground ($V_{DD}$).

<!-- diagram: diagram-01.cir -->

The transistors are identical and see the same $v_{gs}$, so they carry equal currents $i$. KCL at $P$ (both currents flow through $R_{SS}$):

$$
\begin{aligned}
v_P &= 2i\,R_{SS},\\
i &= g_m(v_{cm} - v_P) = g_m(v_{cm} - 2iR_{SS}),\\
i\,(1 + 2g_mR_{SS}) &= g_mv_{cm},\\
i &= \frac{g_m}{1 + 2g_mR_{SS}}\,v_{cm}.
\end{aligned}
$$

The equal currents flow through *unequal* loads:

$$
\begin{aligned}
v_X &= -iR_D, \qquad v_Y = -i(R_D + \Delta R_D),\\
v_X - v_Y &= i\,\Delta R_D = \frac{g_m\Delta R_D}{1 + 2g_mR_{SS}}\,v_{cm}.
\end{aligned}
$$

So the common-mode-to-differential conversion gain is

$$|A_{CM-DM}| = \frac{g_m\Delta R_D}{1 + 2g_mR_{SS}} .$$

Numerically:

$$
\begin{aligned}
2g_mR_{SS} &= 2(3.66\ \mathrm{mS})(10\ \mathrm{k}\Omega) = 73.2, \qquad 1 + 2g_mR_{SS} = 74.2,\\
g_m\Delta R_D &= (3.66\ \mathrm{mS})(10\ \Omega) = 0.0366,\\
|A_{CM-DM}| &= \frac{0.0366}{74.2} = 4.93\times10^{-4}.
\end{aligned}
$$

The noise $V_n(t)$, 100 mV peak-to-peak on the common-mode level, therefore produces a differential output of

$$v_{out,noise} = (4.93\times10^{-4})(100\ \mathrm{mV}) = 49.3\ \mu\mathrm{V}\ \text{peak-to-peak}.$$

**Why it is so small.** Two effects reduce it. First, the tail resistance degenerates the common-mode transconductance by $1 + 2g_mR_{SS} = 74$. Second, only the 0.5 % *difference* between the loads turns the common-mode current into a differential voltage.

### Step 4 — Signal-to-noise ratio

$$\mathrm{SNR} = \frac{v_{out,signal}}{v_{out,noise}} = \frac{73.2\ \mathrm{mV}}{49.3\ \mu\mathrm{V}} \approx 1.48\times10^3,$$

or $20\log_{10}(1484) \approx 63.4$ dB.

**Cross-check through the CMRR.** The common-mode rejection ratio is

$$\mathrm{CMRR} = \frac{A_{DM}}{A_{CM-DM}} = \frac{g_mR_D}{g_m\Delta R_D/(1 + 2g_mR_{SS})} = \frac{R_D}{\Delta R_D}(1 + 2g_mR_{SS}) = 200\times 74.2 = 1.48\times10^4 .$$

The input SNR is $10\ \mathrm{mV}/100\ \mathrm{mV} = 0.1$, so the output SNR is $\mathrm{CMRR}\times 0.1 \approx 1.48\times10^3$. ✓

The circuit has improved the signal-to-noise ratio from 0.1 at the input to about 1,500 at the output.

### Result

$$\mathrm{SNR} \approx \frac{g_mR_D\times 10\ \mathrm{mV}}{\dfrac{g_m\Delta R_D}{1 + 2g_mR_{SS}}\times 100\ \mathrm{mV}} = \frac{73.2\ \mathrm{mV}}{49.3\ \mu\mathrm{V}} \approx 1{,}480\quad(\approx 63.4\ \mathrm{dB}),$$

with $g_m = 3.66$ mS, $R_{SS} = 10$ kΩ, $A_{DM} = 7.32$ and $A_{CM-DM} = 4.93\times10^{-4}$.

**Common mistake.** Using the single-ended common-mode gain of a symmetric pair, $R_D/(2R_{SS})$ (or $g_mR_D/(1 + 2g_mR_{SS})$), as the noise gain. That gain describes how both outputs move *together*. The differential output, which is what the SNR refers to, sees only the part caused by the asymmetry, $g_m\Delta R_D/(1 + 2g_mR_{SS})$.

**Common mistake.** Computing the tail impedance with a wrong formula, for example $\lambda/I_D$ or $1/(\lambda I_D)$ with 0.5 mA. The current source carries the whole tail current, 1 mA, so $R_{SS} = 1/(0.1\times 1\ \mathrm{mA}) = 10$ kΩ.

**Common mistake.** Assuming that the SNR stays at the input value, 0.1. The differential pair amplifies the differential signal by 7.3 and suppresses the common-mode noise by a factor of about $1.5\times10^4$ relative to it.
