# Detailed solution - R224

**Approach.** The CMRR of a differential-output stage is $|A_{DM}/A_{CM-DM}|$. A common-mode (CM) input reaches the differential output only if the two halves respond differently, i.e. if the small-signal load resistances or the input transconductances differ. So check whether a threshold mismatch of the diode-connected loads makes $1/g_{m3}$ and $1/g_{m4}$ different.

### Step 1 — Bias currents and parameters of the input pair and tail

Call the common source node P. Apart from $|V_{TH3}| - |V_{TH4}| = 1$ mV, the circuit is perfectly matched.

For a CM input $V_{GS1} = V_{GS2}$, and with $\lambda = 0$ the matched $M_1$, $M_2$ carry equal currents **whatever the loads do**; the loads carry the same currents:

$$I_{D1} = I_{D2} = I_{D3} = I_{D4} = \frac{I_{SS}}{2} = 0.25\ \mathrm{mA} .$$

With $W/L = 50/0.5 = 100$,

$$g_{m1} = g_{m2} = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(0.25\ \mathrm{mA})} = \sqrt{6.70\times10^{-6}}\ \mathrm{A/V} = 2.588\ \mathrm{mS} .$$

The tail transistor's output resistance is

$$R_{SS} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega .$$

### Step 2 — What the threshold mismatch does to the loads

Each diode-connected PMOS is saturated and carries the current imposed by the input transistor below it, so

$$|V_{GS}| = |V_{TH}| + \underbrace{\sqrt{\frac{2I_D}{\mu_pC_{ox}W/L}}}_{V_{ov}} .$$

With $W/L = 10/0.5 = 20$,

$$V_{ov3} = V_{ov4} = \sqrt{\frac{2\,(0.25\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(20)}} = \sqrt{0.651\ \mathrm{V^2}} = 0.807\ \mathrm{V} .$$

The overdrive depends only on the current and on $\mu_pC_{ox}W/L$, **not on $V_{TH}$**, so the mismatch is absorbed entirely into $|V_{GS}|$:

$$|V_{GS3}| - |V_{GS4}| = |V_{TH3}| - |V_{TH4}| = 1\ \mathrm{mV} .$$

Since $V_X = V_{DD} - |V_{GS3}|$ and $V_Y = V_{DD} - |V_{GS4}|$, the only consequence is a **dc offset** of 1 mV between X and Y. The small-signal load resistance is $1/g_m$, with

$$g_{m3} = \frac{2I_{D3}}{V_{ov3}} = \sqrt{2\mu_pC_{ox}\frac{W}{L}I_{D3}} = \sqrt{2\,(38.4\ \mu\mathrm{A/V^2})(20)(0.25\ \mathrm{mA})} = \sqrt{3.84\times10^{-7}}\ \mathrm{A/V} = 0.620\ \mathrm{mS} .$$

$M_4$ has the same $\mu_pC_{ox}$, $W/L$ and current, so

$$g_{m4} = g_{m3} = 0.620\ \mathrm{mS}, \qquad \frac{1}{g_{m3}} = \frac{1}{g_{m4}} = 1.61\ \mathrm{k}\Omega .$$

**The threshold mismatch creates no mismatch in the small-signal load resistances.**

### Step 3 — Common-mode input: gain to the differential output

In the small-signal circuit for a CM input $v_{CM}$, $M_1$ and $M_2$ are $g_m$ sources into P, the loads are $1/g_{m3}$ and $1/g_{m4}$ to ac ground, and the tail is $R_{SS}$.

<!-- diagram: diagram-01.cir -->

With $v_{gs1} = v_{gs2} = v_{CM} - v_P$ and $g_{m1} = g_{m2} = g_m$, each branch carries $i = g_m(v_{CM} - v_P)$, and KCL at P gives

$$2g_m(v_{CM} - v_P) = \frac{v_P}{R_{SS}} \quad\Longrightarrow\quad v_P = \frac{2g_mR_{SS}}{1 + 2g_mR_{SS}}\,v_{CM} ,$$

$$i = g_m\left(1 - \frac{2g_mR_{SS}}{1 + 2g_mR_{SS}}\right)v_{CM} = \frac{g_m}{1 + 2g_mR_{SS}}\,v_{CM} .$$

Numerically, $2g_mR_{SS} = 2(2.588\ \mathrm{mS})(20\ \mathrm{k}\Omega) = 103.5$, so

$$\frac{i}{v_{CM}} = \frac{2.588\ \mathrm{mS}}{104.5} = 24.8\ \mu\mathrm{S} .$$

The current $i$ is drawn from X through $1/g_{m3}$ and from Y through $1/g_{m4}$:

$$
\begin{aligned}
v_X &= -\frac{i}{g_{m3}} = -\frac{g_m/g_{m3}}{1 + 2g_mR_{SS}}\,v_{CM} = -\frac{4.18}{104.5}\,v_{CM} = -0.040\,v_{CM},\\
v_Y &= -\frac{i}{g_{m4}} = -0.040\,v_{CM} ,
\end{aligned}
$$

$$A_{CM-DM} = \frac{v_X - v_Y}{v_{CM}} = -\frac{g_m}{1 + 2g_mR_{SS}}\left(\frac{1}{g_{m3}} - \frac{1}{g_{m4}}\right) = 0 .$$

### Step 4 — Differential gain

For a differential input $v_{in}$ ($\pm v_{in}/2$ on the gates), P does not move, so

$$i_1 = g_m\frac{v_{in}}{2}, \qquad i_2 = -g_m\frac{v_{in}}{2},$$

$$v_X = -\frac{i_1}{g_{m3}} = -\frac{g_m}{2g_{m3}}v_{in}, \qquad v_Y = -\frac{i_2}{g_{m4}} = +\frac{g_m}{2g_{m3}}v_{in} ,$$

$$|A_{DM}| = \left|\frac{v_X - v_Y}{v_{in}}\right| = \frac{g_{m1}}{g_{m3}} = \frac{2.588\ \mathrm{mS}}{0.620\ \mathrm{mS}} = 4.18 .$$

### Step 5 — CMRR

$$\mathrm{CMRR} = \left|\frac{A_{DM}}{A_{CM-DM}}\right| = \frac{4.18}{0} \;\to\; \infty .$$

CM-to-DM conversion needs unequal input transconductances or unequal load resistances, and neither exists: the matched input pair carries equal currents whatever its drain voltages, and the loads' $g_m = \sqrt{2\mu_pC_{ox}(W/L)I_D}$ depends on current and size, not on $V_{TH}$. (A threshold mismatch in the *input pair* would convert, because there $V_{GS}$ is common and the current is not.)

The result is "infinite to first order". Effects the problem tells us to neglect, such as channel-length modulation of $M_1$, $M_2$ (their drains sit 1 mV apart) or a $\mu_pC_{ox}W/L$ mismatch of the loads, would make the CMRR very large but finite; the data do not allow estimating them.

### Result

$$\mathrm{CMRR} \to \infty \quad\text{(to first order).}$$

The 1-mV threshold mismatch of $M_3$, $M_4$ only produces a **dc offset** of about 1 mV between X and Y. Both loads carry 0.25 mA and have $g_{m3} = g_{m4} = \sqrt{2\mu_pC_{ox}(W/L)I_D} = 0.62$ mS, independent of $V_{TH}$. A CM input therefore changes both branch currents by the same $g_{m1}v_{CM}/(1 + 2g_{m1}R_{SS})$ (with $g_{m1} = 2.59$ mS and $R_{SS} = 20\ \mathrm{k}\Omega$), producing identical changes at X and Y, so $A_{CM-DM} = 0$, while $A_{DM} = g_{m1}/g_{m3} \approx 4.2$.

**Common mistake.** Translating the threshold mismatch into a transconductance mismatch, $\Delta g_m/g_m = \Delta V_{TH}/V_{ov} = 1\ \mathrm{mV}/0.807\ \mathrm{V} = 1.24\times10^{-3}$, and computing a finite CMRR of about $(1 + 2g_{m1}R_{SS})/(\Delta g_m/g_m) \approx 8.4\times10^4$. That relation applies to devices with a *common* $V_{GS}$, such as the input pair; a diode-connected load has its *current* imposed.

**Common mistake.** Using the resistive-load formula $A_{CM-DM} = \Delta R_D/(1/g_m + 2R_{SS})$ with some $\Delta R_D$. The small-signal load resistances here, $1/g_{m3}$ and $1/g_{m4}$, are exactly equal.

**Common mistake.** Confusing the dc offset with CM-to-DM conversion. The 1-mV offset exists with no input at all and does not change with the CM input.
