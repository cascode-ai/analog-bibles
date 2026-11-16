# Detailed solution - R224

**Approach.** The CMRR of a differential-output stage is $|A_{DM}/A_{CM-DM}|$, where $A_{CM-DM}$ is the gain from a common-mode (CM) input to the differential output. A CM input reaches the differential output only if the two halves respond differently, i.e. if the small-signal load resistances or the input transconductances differ. So we check whether a threshold mismatch of the diode-connected loads makes their small-signal resistances $1/g_{m3}$ and $1/g_{m4}$ different.

### Step 1 — The circuit

Reading the figure:

- $M_1$ and $M_2$ form an NMOS differential pair, with sources at node P. $V_{in}$ is applied between their gates.
- Their loads are the diode-connected PMOS devices $M_3$ (at node X) and $M_4$ (at node Y); each has its gate tied to its drain and its source at $V_{DD}$.
- The output is $V_{out} = V_X - V_Y$.
- The tail current $I_{SS} = 0.5$ mA is provided by an NMOS transistor with $W/L = 50/0.5$ and $\lambda = 0.1\ \mathrm{V^{-1}}$, so it has a finite output resistance $R_{SS}$.

Assumptions given: all devices in saturation; channel-length modulation and body effect neglected in $M_1$–$M_4$; $|V_{TH3}| - |V_{TH4}| = 1$ mV; otherwise the circuit is perfectly matched.

### Step 2 — Bias currents and parameters of the input pair and tail

**Currents of $M_1$, $M_2$.** For a CM input both gates are at the same voltage and both sources are at P, so $V_{GS1} = V_{GS2}$. $M_1$ and $M_2$ are matched and, with $\lambda = 0$, their currents do not depend on their drain voltages. So they carry equal currents **whatever the loads do**:

$$I_{D1} = I_{D2} = \frac{I_{SS}}{2} = 0.25\ \mathrm{mA} .$$

Each load is in series with one input transistor, so $I_{D3} = I_{D4} = 0.25$ mA as well.

**Transconductance of the input pair** (square law, $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$, $W/L = 50/0.5 = 100$):

$$g_{m1} = g_{m2} = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(0.25\ \mathrm{mA})} = \sqrt{6.70\times10^{-6}}\ \mathrm{A/V} = 2.588\ \mathrm{mS} .$$

**Output resistance of the tail transistor** ($r_O = 1/(\lambda I_D)$):

$$R_{SS} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega .$$

### Step 3 — What the threshold mismatch does to the loads

A diode-connected PMOS is always saturated ($V_{SD} = V_{SG} > V_{SG} - |V_{TH}|$). Its current follows the square law:

$$I_D = \frac12\mu_pC_{ox}\frac{W}{L}\left(|V_{GS}| - |V_{TH}|\right)^2 .$$

Here the current is **imposed** by the input transistor below it (0.25 mA). Solve for the gate–source voltage:

$$|V_{GS}| = |V_{TH}| + \underbrace{\sqrt{\frac{2I_D}{\mu_pC_{ox}W/L}}}_{V_{ov}} .$$

**Overdrive** $V_{ov} = |V_{GS}| - |V_{TH}|$ of the loads ($W/L = 10/0.5 = 20$):

$$V_{ov3} = V_{ov4} = \sqrt{\frac{2\,(0.25\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(20)}} = \sqrt{0.651\ \mathrm{V^2}} = 0.807\ \mathrm{V} .$$

The overdrive depends only on the current and on $\mu_pC_{ox}W/L$, **not on $V_{TH}$**. The 1-mV threshold mismatch is absorbed entirely into $|V_{GS}|$:

$$|V_{GS3}| - |V_{GS4}| = |V_{TH3}| - |V_{TH4}| = 1\ \mathrm{mV} .$$

Since $V_X = V_{DD} - |V_{GS3}|$ and $V_Y = V_{DD} - |V_{GS4}|$, the only consequence is a **dc offset** of 1 mV between X and Y.

**Small-signal resistance of the loads.** For a diode-connected device (with $\lambda = 0$) the resistance looking into the drain is $1/g_m$, with

$$g_{m3} = \frac{2I_{D3}}{V_{ov3}} = \sqrt{2\mu_pC_{ox}\frac{W}{L}I_{D3}} = \sqrt{2\,(38.4\ \mu\mathrm{A/V^2})(20)(0.25\ \mathrm{mA})} = \sqrt{3.84\times10^{-7}}\ \mathrm{A/V} = 0.620\ \mathrm{mS} .$$

$M_4$ has the same $\mu_pC_{ox}$, $W/L$ and current, so

$$g_{m4} = g_{m3} = 0.620\ \mathrm{mS}, \qquad \frac{1}{g_{m3}} = \frac{1}{g_{m4}} = 1.61\ \mathrm{k}\Omega .$$

**The threshold mismatch does not create any mismatch in the small-signal load resistances.**

### Step 4 — Common-mode input: gain to the differential output

**Small-signal circuit.** Apply a small CM input $v_{CM}$ to both gates. $V_{DD}$ is ac ground. Each input transistor is a current source $g_m v_{gs}$ from its drain to P; with $\lambda = 0$ there is no $r_O$. Each load is a resistance $1/g_m$ from its drain node to ac ground. The tail is the resistance $R_{SS}$ from P to ground.

<!-- diagram: diagram-01.cir -->

**Currents of $M_1$, $M_2$.** With $v_{gs1} = v_{gs2} = v_{CM} - v_P$ and $g_{m1} = g_{m2} = g_m$:

$$i_1 = i_2 = i = g_m(v_{CM} - v_P) .$$

**KCL at P:** both currents flow into P and leave through $R_{SS}$:

$$2g_m(v_{CM} - v_P) = \frac{v_P}{R_{SS}} \quad\Longrightarrow\quad v_P = \frac{2g_mR_{SS}}{1 + 2g_mR_{SS}}\,v_{CM} .$$

**Current in each branch:**

$$i = g_m\left(1 - \frac{2g_mR_{SS}}{1 + 2g_mR_{SS}}\right)v_{CM} = \frac{g_m}{1 + 2g_mR_{SS}}\,v_{CM} .$$

Numerically, $2g_mR_{SS} = 2(2.588\ \mathrm{mS})(20\ \mathrm{k}\Omega) = 103.5$, so

$$\frac{i}{v_{CM}} = \frac{2.588\ \mathrm{mS}}{104.5} = 24.8\ \mu\mathrm{S} .$$

**Output voltages.** The current $i$ is drawn from X through the load resistance $1/g_{m3}$ (and from Y through $1/g_{m4}$):

$$
\begin{aligned}
v_X &= -\frac{i}{g_{m3}} = -\frac{g_m/g_{m3}}{1 + 2g_mR_{SS}}\,v_{CM} = -\frac{4.18}{104.5}\,v_{CM} = -0.040\,v_{CM},\\
v_Y &= -\frac{i}{g_{m4}} = -0.040\,v_{CM} .
\end{aligned}
$$

**Differential output:**

$$A_{CM-DM} = \frac{v_X - v_Y}{v_{CM}} = -\frac{g_m}{1 + 2g_mR_{SS}}\left(\frac{1}{g_{m3}} - \frac{1}{g_{m4}}\right) = 0 .$$

The CM input moves X and Y by exactly the same amount, so nothing appears differentially.

### Step 5 — Differential gain

For a differential input $v_{in}$ (gate of $M_1$ at $+v_{in}/2$, gate of $M_2$ at $-v_{in}/2$), node P does not move (the two currents change in opposite directions, so the current in $R_{SS}$ does not change). Then

$$i_1 = g_m\frac{v_{in}}{2}, \qquad i_2 = -g_m\frac{v_{in}}{2},$$

$$v_X = -\frac{i_1}{g_{m3}} = -\frac{g_m}{2g_{m3}}v_{in}, \qquad v_Y = -\frac{i_2}{g_{m4}} = +\frac{g_m}{2g_{m3}}v_{in} .$$

$$|A_{DM}| = \left|\frac{v_X - v_Y}{v_{in}}\right| = \frac{g_{m1}}{g_{m3}} = \frac{2.588\ \mathrm{mS}}{0.620\ \mathrm{mS}} = 4.18 .$$

### Step 6 — CMRR

$$\mathrm{CMRR} = \left|\frac{A_{DM}}{A_{CM-DM}}\right| = \frac{4.18}{0} \;\to\; \infty .$$

**Why there is no conversion.** Common-mode-to-differential conversion needs the two halves to respond differently to the same CM signal. That requires either unequal input transconductances or unequal load resistances. Neither exists here:

- the input pair is matched and, with $\lambda = 0$, carries equal currents whatever the drain voltages are;
- the loads' $g_m = \sqrt{2\mu_pC_{ox}(W/L)I_D}$ depends on their current and size, which are equal, and not on $V_{TH}$.

Contrast this with a threshold mismatch in the **input pair**. There, both devices are forced to have the same $V_{GS}$, so a $V_{TH}$ difference changes their overdrives, currents and $g_m$, and CM-to-DM conversion does occur. In a diode-connected load the current is forced instead, and the $V_{TH}$ difference shows up only in $V_{GS}$.

**Limits of the model.** The result is "infinite to first order". Effects that the problem tells us to neglect would give a very large but finite CMRR. Examples are channel-length modulation of $M_1$, $M_2$ (their drains sit at voltages 1 mV apart, so their currents would differ very slightly) and any mismatch of $\mu_pC_{ox}W/L$ between the loads. The data given do not allow these to be estimated.

### Result

$$\mathrm{CMRR} \to \infty \quad\text{(to first order).}$$

The 1-mV threshold mismatch of $M_3$, $M_4$ only produces a **dc offset** of about 1 mV between X and Y. Both loads carry 0.25 mA and have $g_{m3} = g_{m4} = \sqrt{2\mu_pC_{ox}(W/L)I_D} = 0.62$ mS, independent of $V_{TH}$. A CM input therefore changes both branch currents by the same $g_{m1}v_{CM}/(1 + 2g_{m1}R_{SS})$ (with $g_{m1} = 2.59$ mS and $R_{SS} = 20\ \mathrm{k}\Omega$), producing identical changes at X and Y, so $A_{CM-DM} = 0$, while $A_{DM} = g_{m1}/g_{m3} \approx 4.2$.

**Common mistake.** Translating the threshold mismatch into a transconductance mismatch, $\Delta g_m/g_m = \Delta V_{TH}/V_{ov} = 1\ \mathrm{mV}/0.807\ \mathrm{V} = 1.24\times10^{-3}$, and then computing a finite CMRR of about $(1 + 2g_{m1}R_{SS})/(\Delta g_m/g_m) \approx 8.4\times10^4$. That relation applies to devices with a *common* $V_{GS}$ (such as the input pair). A diode-connected load has its *current* imposed, so its overdrive $\sqrt{2I_D/(\mu_pC_{ox}W/L)}$ and its $g_m$ do not depend on $V_{TH}$.

**Common mistake.** Treating the mismatch as a load-resistance mismatch $\Delta R_D$ and using the resistive-load formula $A_{CM-DM} = \Delta R_D/(1/g_m + 2R_{SS})$. The small-signal load resistances here are $1/g_{m3}$ and $1/g_{m4}$, which are exactly equal.

**Common mistake.** Confusing the dc offset with CM-to-DM conversion. The 1-mV offset exists even with no input at all, and it does not change when the CM input changes. CMRR concerns the *change* of the differential output caused by a *change* of the CM input.
