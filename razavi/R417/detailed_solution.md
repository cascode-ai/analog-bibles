# Detailed solution - R417

**Approach.** Model each transistor's channel thermal noise as a drain–source current. Both noise currents flow into the single output node, so add their powers, convert to an output voltage, and divide by the square of the voltage gain.

### Step 1 — Noise model

$$\overline{I_{n1}^2} = 4kT\gamma g_{m1},\qquad \overline{I_{n2}^2} = 4kT\gamma g_{m2}\qquad(\mathrm{A^2/Hz}),$$

uncorrelated, so their powers add. $V_{DD}$ and ground are ac grounds, so both noise currents connect the output node to ac ground, where the output resistance is $R_0 = r_{O1}\parallel r_{O2}$. $r_{O1}$ and $r_{O2}$ are part of the transistor model, not physical resistors, so they add no noise of their own.

<!-- diagram: diagram-01.cir -->

### Step 2 — Output noise

With the input at ac ground, neither controlled source acts and the total noise current flows through $R_0$:

$$
\begin{aligned}
\overline{I_{n,out}^2} &= \overline{I_{n1}^2} + \overline{I_{n2}^2} = 4kT\gamma\,(g_{m1} + g_{m2}),\\
\overline{V_{n,out}^2} &= \overline{I_{n,out}^2}\,R_0^2 = 4kT\gamma\,(g_{m1} + g_{m2})\,(r_{O1}\parallel r_{O2})^2 .
\end{aligned}
$$

### Step 3 — Voltage gain

$M_1$ draws $g_{m1}v_{in}$ out of the output node, and $M_2$, whose $v_{SG}$ changes by $-v_{in}$, delivers $g_{m2}v_{in}$ *less* into it. KCL at the output:

$$
\begin{aligned}
(g_{m1} + g_{m2})\,v_{in} + \frac{v_{out}}{R_0} &= 0\\
A_v = \frac{v_{out}}{v_{in}} &= -(g_{m1} + g_{m2})\,(r_{O1}\parallel r_{O2}) .
\end{aligned}
$$

### Step 4 — Refer the noise to the input

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{\overline{V_{n,out}^2}}{A_v^2} = \frac{4kT\gamma\,(g_{m1} + g_{m2})\,R_0^2}{(g_{m1} + g_{m2})^2R_0^2}\\
&= \frac{4kT\gamma}{g_{m1} + g_{m2}} .
\end{aligned}
$$

$R_0$ cancels, so the finite output resistances do not matter. For $\gamma = 2/3$:

$$\overline{V_{n,in}^2} = \frac{8kT}{3\,(g_{m1} + g_{m2})} .$$

The inverter behaves like a single transistor with transconductance $g_{m1} + g_{m2}$ and channel noise $4kT\gamma(g_{m1} + g_{m2})$: the PMOS adds noise but also amplifies the signal, so the result has the single-device form $4kT\gamma/g_m$.

### Step 5 — Check by referring each device separately

$M_1$'s noise current is equivalent to $\overline{V^2} = 4kT\gamma/g_{m1}$ in series with **$M_1$'s gate only**. That source produces $g_{m1}V$ at the output, while a true input voltage produces $(g_{m1} + g_{m2})V$, so referred to the common input $M_1$'s contribution is scaled by $[g_{m1}/(g_{m1} + g_{m2})]^2$:

$$
\begin{aligned}
\overline{V_{n,in}^2}\Big|_{M_1} &= \frac{4kT\gamma}{g_{m1}}\cdot\frac{g_{m1}^2}{(g_{m1} + g_{m2})^2} = \frac{4kT\gamma\,g_{m1}}{(g_{m1} + g_{m2})^2},\\
\overline{V_{n,in}^2}\Big|_{M_2} &= \frac{4kT\gamma\,g_{m2}}{(g_{m1} + g_{m2})^2},\\
\text{sum} &= \frac{4kT\gamma\,(g_{m1} + g_{m2})}{(g_{m1} + g_{m2})^2} = \frac{4kT\gamma}{g_{m1} + g_{m2}},
\end{aligned}
$$

the same result.

### Step 6 — Sense of scale (illustration)

For $(W/L)_{1,2} = 50/0.5$ biased at the switching threshold of a 3-V inverter ($I_D \approx 1.83$ mA, $g_{m1} \approx 7.0$ mS, $g_{m2} \approx 3.75$ mS, so $g_{m1} + g_{m2} \approx 10.8$ mS), at $T = 300$ K with $\gamma = 2/3$:

$$
\begin{aligned}
4kT\gamma &= 4(1.38\times10^{-23}\ \mathrm{J/K})(300\ \mathrm{K})(2/3) = 1.104\times10^{-20}\ \mathrm{J},\\
\overline{V_{n,in}^2} &= \frac{1.104\times10^{-20}}{10.76\times10^{-3}}\ \mathrm{V^2/Hz} = 1.03\times10^{-18}\ \mathrm{V^2/Hz},
\end{aligned}
$$

i.e. about 1.0 nV/√Hz.

### Result

$$\overline{V_{n,in}^2} = \frac{4kT\gamma\,(g_{m1} + g_{m2})}{(g_{m1} + g_{m2})^2} = \frac{4kT\gamma}{g_{m1} + g_{m2}}\qquad\left(= \frac{8kT}{3(g_{m1} + g_{m2})}\ \text{for}\ \gamma = \tfrac23\right),$$

independent of $r_{O1}$ and $r_{O2}$.

**Common mistake.** Adding the two devices' gate-referred noises directly, $4kT\gamma/g_{m1} + 4kT\gamma/g_{m2}$. Each refers a noise current to *its own* gate, but the input drives both gates, so the common-input gain uses $g_{m1} + g_{m2}$.

**Common mistake.** Treating $M_2$ as a passive load and referring with $g_{m1}$ only, which gives $4kT\gamma(g_{m1} + g_{m2})/g_{m1}^2$.

**Common mistake.** Adding a thermal-noise term $4kT/r_O$ for the output resistances. They describe channel-length modulation, not physical resistors.
