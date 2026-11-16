# Detailed solution - R168

**Approach.** The differential signal is amplified by $A_{DM} = g_mR_D$. The common-mode noise reaches the differential output only through the load mismatch, with gain $A_{CM-DM} = g_m\Delta R_D/(1 + 2g_mR_{SS})$. The output SNR is the ratio of the two output amplitudes.

### Step 1 — Bias quantities

**Tail.** The NMOS current source carries $I_{SS} = 1$ mA, so

$$R_{SS} = r_O = \frac{1}{\lambda I_{SS}} = \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega .$$

**Input devices.** Each carries $I_{SS}/2 = 0.5$ mA, and $\mu_nC_{ox}(W/L) = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}$:

$$g_m = \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D} = \sqrt{2(13.4\ \mathrm{mA/V^2})(0.5\ \mathrm{mA})} = \sqrt{13.4}\ \mathrm{mS} = 3.66\ \mathrm{mS}.$$

**Load mismatch.** $\Delta R_D = 0.005\times 2\ \mathrm{k}\Omega = 10\ \Omega$: the left load is $R_D = 2$ kΩ, the right one $R_D + \Delta R_D = 2.01$ kΩ.

### Step 2 — Differential gain (the signal path)

For a differential input $v_{in}$ the two currents change by $\pm g_mv_{in}/2$, so no signal current flows in $R_{SS}$ and $P$ is an ac ground. Each drain current flows through its own load:

$$
\begin{aligned}
v_X &= -\frac{g_mv_{in}}{2}R_D, \qquad v_Y = +\frac{g_mv_{in}}{2}(R_D + \Delta R_D),\\
v_X - v_Y &= -g_mv_{in}\left(R_D + \frac{\Delta R_D}{2}\right) \approx -g_mR_D\,v_{in},
\end{aligned}
$$

$$|A_{DM}| = g_mR_D = (3.66\ \mathrm{mS})(2\ \mathrm{k}\Omega) = 7.32 ,$$

the 0.25 % correction from $\Delta R_D/2$ being negligible. The 10-mV peak-to-peak input therefore gives

$$v_{out,signal} = 7.32\times 10\ \mathrm{mV} = 73.2\ \mathrm{mV}\ \text{peak-to-peak}.$$

($V_{in,DM}$ is applied to the gate of $M_1$ only, so $V_{in1} - V_{in2} = V_{in,DM}$; its small common-mode share, $V_{in,DM}/2$, is converted by the mechanism of Step 3 into only microvolts and can be ignored.)

### Step 3 — Common-mode to differential conversion (the noise path)

For a common-mode change $v_{cm}$ on both gates, each transistor is a current source $g_mv_{gs}$ from its drain to $P$ with $v_{gs} = v_{cm} - v_P$; $R_{SS}$ connects $P$ to ground, and the loads $R_D$ and $R_D + \Delta R_D$ go to ac ground.

<!-- diagram: diagram-01.cir -->

The two transistors see the same $v_{gs}$, so they carry equal currents $i$, both flowing through $R_{SS}$:

$$
\begin{aligned}
v_P &= 2i\,R_{SS},\\
i &= g_m(v_{cm} - v_P) = g_m(v_{cm} - 2iR_{SS}),\\
i &= \frac{g_m}{1 + 2g_mR_{SS}}\,v_{cm}.
\end{aligned}
$$

The equal currents flow through *unequal* loads:

$$
\begin{aligned}
v_X &= -iR_D, \qquad v_Y = -i(R_D + \Delta R_D),\\
v_X - v_Y &= i\,\Delta R_D = \frac{g_m\Delta R_D}{1 + 2g_mR_{SS}}\,v_{cm},
\end{aligned}
$$

so

$$|A_{CM-DM}| = \frac{g_m\Delta R_D}{1 + 2g_mR_{SS}} .$$

Numerically:

$$
\begin{aligned}
2g_mR_{SS} &= 2(3.66\ \mathrm{mS})(10\ \mathrm{k}\Omega) = 73.2, \qquad 1 + 2g_mR_{SS} = 74.2,\\
g_m\Delta R_D &= (3.66\ \mathrm{mS})(10\ \Omega) = 0.0366,\\
|A_{CM-DM}| &= \frac{0.0366}{74.2} = 4.93\times10^{-4}.
\end{aligned}
$$

The 100-mV peak-to-peak noise $V_n(t)$ therefore produces a differential output of

$$v_{out,noise} = (4.93\times10^{-4})(100\ \mathrm{mV}) = 49.3\ \mu\mathrm{V}\ \text{peak-to-peak}.$$

It is small for two reasons: the tail resistance degenerates the common-mode transconductance by $1 + 2g_mR_{SS} = 74$, and only the 0.5 % *difference* between the loads turns the common-mode current into a differential voltage.

### Step 4 — Signal-to-noise ratio

$$\mathrm{SNR} = \frac{v_{out,signal}}{v_{out,noise}} = \frac{73.2\ \mathrm{mV}}{49.3\ \mu\mathrm{V}} \approx 1.48\times10^3,$$

or $20\log_{10}(1484) \approx 63.4$ dB.

**Cross-check through the CMRR.**

$$\mathrm{CMRR} = \frac{A_{DM}}{A_{CM-DM}} = \frac{g_mR_D}{g_m\Delta R_D/(1 + 2g_mR_{SS})} = \frac{R_D}{\Delta R_D}(1 + 2g_mR_{SS}) = 200\times 74.2 = 1.48\times10^4 .$$

The input SNR is $10\ \mathrm{mV}/100\ \mathrm{mV} = 0.1$, so the output SNR is $\mathrm{CMRR}\times 0.1 \approx 1.48\times10^3$ ✓: the circuit improves the SNR from 0.1 at the input to about 1,500 at the output.

### Result

$$\mathrm{SNR} \approx \frac{g_mR_D\times 10\ \mathrm{mV}}{\dfrac{g_m\Delta R_D}{1 + 2g_mR_{SS}}\times 100\ \mathrm{mV}} = \frac{73.2\ \mathrm{mV}}{49.3\ \mu\mathrm{V}} \approx 1{,}480\quad(\approx 63.4\ \mathrm{dB}),$$

with $g_m = 3.66$ mS, $R_{SS} = 10$ kΩ, $A_{DM} = 7.32$ and $A_{CM-DM} = 4.93\times10^{-4}$.

**Common mistake.** Using the single-ended common-mode gain of a symmetric pair, $R_D/(2R_{SS})$ (or $g_mR_D/(1 + 2g_mR_{SS})$), as the noise gain. That gain describes how both outputs move *together*; the differential output sees only the part caused by the asymmetry, $g_m\Delta R_D/(1 + 2g_mR_{SS})$.

**Common mistake.** Computing the tail impedance with a wrong formula, for example $\lambda/I_D$, or $1/(\lambda I_D)$ with 0.5 mA. The current source carries the whole 1 mA, so $R_{SS} = 1/(0.1\times 1\ \mathrm{mA}) = 10$ kΩ.

**Common mistake.** Assuming that the SNR stays at the input value, 0.1. The pair amplifies the differential signal by 7.3 and suppresses the common-mode noise by a factor of about $1.5\times10^4$ relative to it.
