# Detailed solution - R552

**Approach.** Write the pair's gain in terms of the mobility $\mu$ and the tail current $I_{SS}$ using the square law. Then require its temperature derivative to vanish, which gives the needed $I_{SS}(T)$. Finally, use a bias circuit whose output current is inversely proportional to $\mu$ (the constant-$g_m$, or "β-multiplier", bias) and mirror it into the tail.

### Step 1 — Gain of the pair in terms of $\mu$ and $I_{SS}$

At balance each transistor of the pair carries half the tail current, $I_D = I_{SS}/2$. The **square-law transconductance** in saturation is

$$g_m = \sqrt{2\mu C_{ox}\frac{W}{L}I_D} = \sqrt{2\mu C_{ox}\frac{W}{L}\cdot\frac{I_{SS}}{2}} = \sqrt{\mu C_{ox}\frac{W}{L}I_{SS}} .$$

Here $\mu$ is the channel mobility, $C_{ox}$ the gate-oxide capacitance per unit area, and $W/L$ the aspect ratio of each pair transistor. The small-signal differential gain is

$$A_v = g_mR_D = R_D\sqrt{\mu C_{ox}\frac{W}{L}I_{SS}} .$$

By assumption, $R_D$, $C_{ox}$ and $W/L$ do not depend on temperature. Only $\mu$ and (possibly) $I_{SS}$ do.

### Step 2 — Condition for zero temperature coefficient

Take the natural logarithm, which turns the product and square root into a sum:

$$\ln A_v = \ln R_D + \frac12\ln\left(C_{ox}\frac WL\right) + \frac12\ln\mu + \frac12\ln I_{SS} .$$

Differentiate with respect to $T$. The constant terms disappear:

$$\frac{1}{A_v}\frac{\partial A_v}{\partial T} = \frac12\cdot\frac{1}{\mu}\frac{\partial\mu}{\partial T} + \frac12\cdot\frac{1}{I_{SS}}\frac{\partial I_{SS}}{\partial T}.$$

The left side is the fractional TC of the gain. Setting it to zero:

$$\frac{1}{I_{SS}}\frac{\partial I_{SS}}{\partial T} = -\frac{1}{\mu}\frac{\partial\mu}{\partial T}.$$

In words, the product $\mu I_{SS}$ must be constant: **$I_{SS} \propto 1/\mu$**.

### Step 3 — The required temperature behaviour

With $\mu \propto T^{-3/2}$, i.e. $\mu = \mu_0(T/T_0)^{-3/2}$:

$$\frac{1}{\mu}\frac{\partial\mu}{\partial T} = -\frac{3}{2}\cdot\frac{1}{T}.$$

Therefore

$$\frac{1}{I_{SS}}\frac{\partial I_{SS}}{\partial T} = +\frac{3}{2T}, \qquad I_{SS} \propto \frac{1}{\mu} \propto T^{3/2}.$$

At $T = 300$ K the required TC is

$$\frac{1.5}{300\ \mathrm{K}} = 5\times10^{-3}\ \mathrm{K^{-1}} = +0.5\ \%/\mathrm{K}.$$

The tail current must **increase** with temperature, to make up for the falling mobility. A current $\propto T^{3/2}$ keeps the gain constant at *all* temperatures, not only at 300 K.

**Why it matters.** With a constant tail current, the gain TC would be $\tfrac12(-1.5/T) = -0.75/T = -0.25\ \%/\mathrm{K}$ at 300 K: about 25 % gain loss over 100 K.

### Step 4 — A current proportional to $1/\mu$: the constant-$g_m$ bias

Consider the self-biased circuit with two NMOS devices and a PMOS mirror (shown on the left of the diagram below):

- $M_1$, aspect ratio $(W/L)_N$, diode-connected (gate and drain at node N), source grounded;
- $M_2$, aspect ratio $K(W/L)_N$ with $K > 1$, gate at N, source to ground through $R_S$, drain at node P;
- PMOS $M_3$ (diode-connected at P) and $M_4$ (gate at P, drain at N), of equal size, forming a 1:1 mirror that forces $I_{D1} = I_{D2} = I$.

<!-- diagram: diagram-01.cir -->

**KVL around the gate loop**: from ground through $V_{GS1}$ up to N, then back down through $V_{GS2}$ and $R_S$:

$$V_{GS1} = V_{GS2} + IR_S .$$

**Square law** (neglecting body effect and channel-length modulation), with equal currents $I$:

$$V_{GS1} = V_{TH} + \sqrt{\frac{2I}{\mu_nC_{ox}(W/L)_N}}, \qquad V_{GS2} = V_{TH} + \sqrt{\frac{2I}{\mu_nC_{ox}K(W/L)_N}} .$$

Substitute. $V_{TH}$ cancels:

$$
\begin{aligned}
\sqrt{\frac{2I}{\mu_nC_{ox}(W/L)_N}} - \frac{1}{\sqrt K}\sqrt{\frac{2I}{\mu_nC_{ox}(W/L)_N}} &= IR_S\\
\sqrt{\frac{2I}{\mu_nC_{ox}(W/L)_N}}\left(1 - \frac{1}{\sqrt K}\right) &= IR_S .
\end{aligned}
$$

Divide both sides by $\sqrt I$ and square:

$$
\begin{aligned}
\sqrt{\frac{2}{\mu_nC_{ox}(W/L)_N}}\left(1 - \frac{1}{\sqrt K}\right) &= \sqrt I\,R_S\\
I &= \frac{2}{\mu_nC_{ox}(W/L)_N}\cdot\frac{1}{R_S^2}\left(1 - \frac{1}{\sqrt K}\right)^2 .
\end{aligned}
$$

Everything here is fixed except $\mu_n$ (and $R_S$, which we take as temperature-independent for now), so

$$I \propto \frac{1}{\mu_n} \propto T^{3/2}.$$

This is exactly the required behaviour. Physically, as $\mu_n$ falls with temperature, the loop must raise the current so that $M_1$ and $M_2$ still develop the same overdrive difference $IR_S$.

### Step 5 — Mirror the current into the tail and check the gain

Add an NMOS $M_9$ whose gate is at N and source at ground. It copies $M_1$'s current, scaled by the size ratio $M = (W/L)_9/(W/L)_N$, and serves as the tail of the NMOS pair $M_5$, $M_6$:

$$I_{SS} = M\,I = \frac{2M}{\mu_nC_{ox}(W/L)_NR_S^2}\left(1 - \frac{1}{\sqrt K}\right)^2 .$$

Substitute into the $g_m$ of a pair transistor (aspect ratio $(W/L)_P$, carrying $I_{SS}/2$):

$$
\begin{aligned}
g_m &= \sqrt{\mu_nC_{ox}(W/L)_P\,I_{SS}}\\
&= \sqrt{\mu_nC_{ox}(W/L)_P\cdot\frac{2M}{\mu_nC_{ox}(W/L)_NR_S^2}\left(1 - \frac{1}{\sqrt K}\right)^2}\\
&= \frac{1}{R_S}\left(1 - \frac{1}{\sqrt K}\right)\sqrt{\frac{2M(W/L)_P}{(W/L)_N}} .
\end{aligned}
$$

$\mu_nC_{ox}$ has cancelled. The gain is

$$A_v = g_mR_D = \left(1 - \frac{1}{\sqrt K}\right)\sqrt{\frac{2M(W/L)_P}{(W/L)_N}}\cdot\frac{R_D}{R_S}.$$

It depends only on device ratios and a resistor ratio, so it has (to first order) **zero TC**. For example, if the pair devices equal $M_1$ in size and $M = 2$ (each pair device carries $I$), then $g_m = 2(1 - 1/\sqrt K)/R_S$, the familiar "constant-$g_m$" result.

### Step 6 — Practical remarks

- **Resistor TC.** Real resistors drift. Making $R_S$ from the same material as $R_D$ (and laying them out alike) keeps $R_D/R_S$ constant, so the gain stays temperature-independent even then. This is a bonus over the idealized problem statement.
- **Threshold voltage.** $V_{TH}$ cancelled in Step 4, so its temperature drift does not enter (apart from body effect on $M_2$).
- **Start-up.** The self-biased loop also has a zero-current state and needs a start-up circuit.
- **Rougher alternatives.** A PTAT current ($\propto T$, TC $= 1/T = +0.33\ \%/\mathrm{K}$) tracks only partly: the gain TC becomes $\tfrac12(-1.5 + 1)/T = -0.25/T = -0.083\ \%/\mathrm{K}$, a third of the constant-current case. Adding a superlinear (for example PTAT²) component brings it closer to $T^{3/2}$.

### Result

Zero TC of $g_mR_D = R_D\sqrt{\mu C_{ox}(W/L)I_{SS}}$ requires $\mu I_{SS}$ = constant, so

$$I_{SS} \propto \frac{1}{\mu} \propto T^{3/2}, \qquad \frac{1}{I_{SS}}\frac{\partial I_{SS}}{\partial T} = \frac{1.5}{T} \approx +0.5\ \%/\mathrm{K}\ \text{at 300 K}.$$

**Circuit:** a constant-$g_m$ (β-multiplier) bias, with $M_1$ of $(W/L)_N$ and $M_2$ of $K(W/L)_N$ plus $R_S$ in its source, and an equal PMOS mirror. It produces $I = \dfrac{2}{\mu_nC_{ox}(W/L)_NR_S^2}\left(1 - \dfrac{1}{\sqrt K}\right)^2 \propto 1/\mu_n$, which is mirrored into the tail. The pair's $g_m$ then equals (constant)$/R_S$, and $g_mR_D \propto R_D/R_S$. That is zero TC if $R_S$ has zero TC, and also with resistor TC if $R_S$ is made of the same material as $R_D$. A PTAT current is a rougher approximation (it gives $T$ instead of $T^{3/2}$).

**Common mistake.** Taking $g_m$ to be proportional to $\mu I_{SS}$ (a linear, not square-root, dependence), or mishandling the square root and concluding $I_{SS} \propto T^{3/4}$. For a square-law device $g_m \propto \sqrt{\mu I_D}$, and keeping it constant requires $I_D \propto 1/\mu = T^{3/2}$.

**Common mistake.** Proposing a zero-TC (bandgap-derived) tail current. With $I_{SS}$ constant, the gain still falls by about 0.25 %/K because the mobility falls. The current must *rise* with temperature.

**Common mistake.** Using a constant-$g_m$ bias whose NMOS devices are of a different type, or whose $R_S$ is of a different material, than the pair and $R_D$. The cancellation of $\mu_n$ requires the bias devices to have the same mobility as the pair, and the cancellation of resistor drift requires matched resistors.
