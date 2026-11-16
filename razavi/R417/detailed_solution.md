# Detailed solution - R417

**Approach.** Model the channel thermal noise of each transistor as a current source between its drain and source. Both noise currents flow into the single output node, so add their powers, convert to an output voltage, and divide by the square of the voltage gain to refer the noise to the input.

### Step 1 — Circuit and noise model

Reading the figure: $M_1$ (NMOS, source at ground) and $M_2$ (PMOS, source at $V_{DD}$) have their gates tied to $V_{in}$ and their drains tied to $V_{out}$. Both are saturated.

**Channel thermal noise.** Each transistor has a noise current between drain and source with power spectral density

$$\overline{I_{n1}^2} = 4kT\gamma g_{m1},\qquad \overline{I_{n2}^2} = 4kT\gamma g_{m2}\qquad(\mathrm{A^2/Hz}),$$

where $k$ is Boltzmann's constant, $T$ the absolute temperature and $\gamma$ the channel-noise coefficient (2/3 for long-channel devices). The two sources come from different devices, so they are **uncorrelated** and their powers add.

**Small-signal model.** $V_{DD}$ and ground are ac grounds, so both noise currents connect the output node to an ac ground. The output resistance is $R_0 = r_{O1}\parallel r_{O2}$. The output resistances are part of the transistor model, not physical resistors, so they add no thermal noise of their own; the channel noise is already the transistor's thermal noise.

<!-- diagram: diagram-01.cir -->

In words: with the input at ac ground, the output node has $R_0$ to ground and the two noise current sources $I_{n1}$ (to ground) and $I_{n2}$ (from $V_{DD}$, i.e. also from ac ground).

### Step 2 — Output noise

Set the input to zero (ac ground). Then neither controlled source $g_mv_{gs}$ acts, and the total noise current flows through $R_0$:

$$
\begin{aligned}
\overline{I_{n,out}^2} &= \overline{I_{n1}^2} + \overline{I_{n2}^2} = 4kT\gamma\,(g_{m1} + g_{m2}),\\
\overline{V_{n,out}^2} &= \overline{I_{n,out}^2}\,R_0^2 = 4kT\gamma\,(g_{m1} + g_{m2})\,(r_{O1}\parallel r_{O2})^2 .
\end{aligned}
$$

### Step 3 — Voltage gain

A signal $v_{in}$ on the common gate drives both devices. $M_1$ draws $g_{m1}v_{in}$ out of the output node, and $M_2$, whose $v_{SG}$ changes by $-v_{in}$, delivers $g_{m2}v_{in}$ *less* into it. KCL at the output:

$$
\begin{aligned}
(g_{m1} + g_{m2})\,v_{in} + \frac{v_{out}}{R_0} &= 0\\
A_v = \frac{v_{out}}{v_{in}} &= -(g_{m1} + g_{m2})\,(r_{O1}\parallel r_{O2}) .
\end{aligned}
$$

### Step 4 — Refer the noise to the input

The input-referred noise voltage is the output noise divided by the gain squared:

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{\overline{V_{n,out}^2}}{A_v^2} = \frac{4kT\gamma\,(g_{m1} + g_{m2})\,R_0^2}{(g_{m1} + g_{m2})^2R_0^2}\\
&= \frac{4kT\gamma}{g_{m1} + g_{m2}} .
\end{aligned}
$$

$R_0$ cancels, so the finite output resistances do not affect the result. For $\gamma = 2/3$:

$$\overline{V_{n,in}^2} = \frac{8kT}{3\,(g_{m1} + g_{m2})} .$$

**Intuition.** The inverter behaves like a single transistor whose transconductance is $g_{m1} + g_{m2}$ and whose channel noise is $4kT\gamma(g_{m1} + g_{m2})$. The PMOS is not a "load" that only adds noise: its transconductance also amplifies the signal, so it helps exactly as much as it hurts, and the result has the form $4kT\gamma/g_m$ of one device with $g_m = g_{m1} + g_{m2}$.

### Step 5 — Check by referring each device separately

The noise current of $M_1$ is equivalent to a voltage $\overline{V^2} = 4kT\gamma/g_{m1}$ in series with **$M_1$'s gate only**. That source moves only $M_1$, producing $g_{m1}V$ at the output, while a true input voltage moves both devices and produces $(g_{m1} + g_{m2})V$. Referred to the common input, $M_1$'s contribution is therefore scaled by $[g_{m1}/(g_{m1} + g_{m2})]^2$:

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

**Common mistake.** Adding the two devices' gate-referred noises directly, $4kT\gamma/g_{m1} + 4kT\gamma/g_{m2}$. Each of those values refers a noise current to *its own* gate, but the input drives both gates at once, so the common-input gain is $g_{m1} + g_{m2}$, not $g_{m1}$ or $g_{m2}$ alone.

**Common mistake.** Treating $M_2$ as a passive load and referring the noise with $g_{m1}$ only, which gives $4kT\gamma(g_{m1} + g_{m2})/g_{m1}^2$. Because $M_2$'s gate is also driven by $V_{in}$, its transconductance belongs in the gain.

**Common mistake.** Adding a thermal-noise term $4kT/r_O$ for the output resistances. $r_{O1}$ and $r_{O2}$ describe channel-length modulation, not physical resistors; the transistor's thermal noise is already fully described by $4kT\gamma g_m$.
