# Detailed solution - R552

**Approach.** Write the gain in terms of $\mu$ and the tail current $I_{SS}$, and require its temperature derivative to vanish, which gives the needed $I_{SS}(T)$. Then use a bias circuit whose current is inversely proportional to $\mu$ (the constant-$g_m$, or "β-multiplier", bias) and mirror it into the tail.

### Step 1 — Required temperature behaviour of $I_{SS}$

Each pair transistor carries $I_{SS}/2$, so

$$A_v = g_mR_D = R_D\sqrt{2\mu C_{ox}\frac{W}{L}\cdot\frac{I_{SS}}{2}} = R_D\sqrt{\mu C_{ox}\frac{W}{L}I_{SS}} .$$

Only $\mu$ and $I_{SS}$ depend on $T$, so the fractional TC of the gain is

$$\frac{1}{A_v}\frac{\partial A_v}{\partial T} = \frac12\cdot\frac{1}{\mu}\frac{\partial\mu}{\partial T} + \frac12\cdot\frac{1}{I_{SS}}\frac{\partial I_{SS}}{\partial T}.$$

Setting it to zero:

$$\frac{1}{I_{SS}}\frac{\partial I_{SS}}{\partial T} = -\frac{1}{\mu}\frac{\partial\mu}{\partial T},$$

i.e. $\mu I_{SS}$ must be constant: **$I_{SS} \propto 1/\mu$**. With $\mu = \mu_0(T/T_0)^{-3/2}$, $(1/\mu)\,\partial\mu/\partial T = -3/(2T)$, so

$$\frac{1}{I_{SS}}\frac{\partial I_{SS}}{\partial T} = +\frac{3}{2T}, \qquad I_{SS} \propto \frac{1}{\mu} \propto T^{3/2}.$$

At $T = 300$ K the required TC is

$$\frac{1.5}{300\ \mathrm{K}} = 5\times10^{-3}\ \mathrm{K^{-1}} = +0.5\ \%/\mathrm{K}.$$

The tail current must **increase** with temperature to make up for the falling mobility, and a current $\propto T^{3/2}$ keeps the gain constant at *all* temperatures, not only at 300 K. With a constant tail current the gain TC would be $\tfrac12(-1.5/T) = -0.75/T = -0.25\ \%/\mathrm{K}$ at 300 K: about 25 % gain loss over 100 K.

### Step 2 — A current proportional to $1/\mu$: the constant-$g_m$ bias

Use the self-biased circuit shown on the left of the diagram below. It has a diode-connected $M_1$ ($(W/L)_N$, gate and drain at node N, source grounded); $M_2$ ($K(W/L)_N$ with $K > 1$, gate at N, source to ground through $R_S$, drain at node P); and equal PMOS devices $M_3$ (diode-connected at P) and $M_4$ (drain at N), a 1:1 mirror that forces $I_{D1} = I_{D2} = I$.

<!-- diagram: diagram-01.cir -->

KVL around the gate loop gives $V_{GS1} = V_{GS2} + IR_S$. With the square law (body effect and channel-length modulation neglected), $V_{TH}$ cancels:

$$\sqrt{\frac{2I}{\mu_nC_{ox}(W/L)_N}}\left(1 - \frac{1}{\sqrt K}\right) = IR_S .$$

Dividing by $\sqrt I$ and squaring:

$$I = \frac{2}{\mu_nC_{ox}(W/L)_N}\cdot\frac{1}{R_S^2}\left(1 - \frac{1}{\sqrt K}\right)^2 .$$

Everything here is fixed except $\mu_n$ (and $R_S$, taken as temperature-independent for now), so

$$I \propto \frac{1}{\mu_n} \propto T^{3/2},$$

exactly the required behaviour: as $\mu_n$ falls, the loop raises the current so that $M_1$ and $M_2$ still develop the same overdrive difference $IR_S$.

### Step 3 — Mirror the current into the tail and check the gain

$M_9$ (gate at N, source grounded) copies $M_1$'s current, scaled by $M = (W/L)_9/(W/L)_N$, and serves as the tail of the pair $M_5$, $M_6$:

$$I_{SS} = M\,I = \frac{2M}{\mu_nC_{ox}(W/L)_NR_S^2}\left(1 - \frac{1}{\sqrt K}\right)^2 .$$

For a pair transistor of aspect ratio $(W/L)_P$ carrying $I_{SS}/2$:

$$
\begin{aligned}
g_m &= \sqrt{\mu_nC_{ox}(W/L)_P\,I_{SS}}\\
&= \sqrt{\mu_nC_{ox}(W/L)_P\cdot\frac{2M}{\mu_nC_{ox}(W/L)_NR_S^2}\left(1 - \frac{1}{\sqrt K}\right)^2}\\
&= \frac{1}{R_S}\left(1 - \frac{1}{\sqrt K}\right)\sqrt{\frac{2M(W/L)_P}{(W/L)_N}} .
\end{aligned}
$$

$\mu_nC_{ox}$ cancels, and

$$A_v = g_mR_D = \left(1 - \frac{1}{\sqrt K}\right)\sqrt{\frac{2M(W/L)_P}{(W/L)_N}}\cdot\frac{R_D}{R_S}$$

depends only on device ratios and a resistor ratio, so it has (to first order) **zero TC**. For example, if the pair devices equal $M_1$ in size and $M = 2$ (each pair device carries $I$), then $g_m = 2(1 - 1/\sqrt K)/R_S$, the familiar "constant-$g_m$" result.

### Step 4 — Practical remarks

- **Resistor TC.** Making $R_S$ from the same material as $R_D$ (and laying them out alike) keeps $R_D/R_S$ constant, so the gain stays temperature-independent even with real resistor drift.
- **Threshold voltage.** $V_{TH}$ cancelled in Step 2, so its drift does not enter (apart from body effect on $M_2$).
- **Start-up.** The self-biased loop also has a zero-current state and needs a start-up circuit.
- **Rougher alternatives.** A PTAT current ($\propto T$, TC $= 1/T = +0.33\ \%/\mathrm{K}$) tracks only partly: the gain TC becomes $\tfrac12(-1.5 + 1)/T = -0.25/T = -0.083\ \%/\mathrm{K}$, a third of the constant-current case. Adding a superlinear (for example PTAT²) component brings it closer to $T^{3/2}$.

### Result

Zero TC of $g_mR_D = R_D\sqrt{\mu C_{ox}(W/L)I_{SS}}$ requires $\mu I_{SS}$ = constant, so

$$I_{SS} \propto \frac{1}{\mu} \propto T^{3/2}, \qquad \frac{1}{I_{SS}}\frac{\partial I_{SS}}{\partial T} = \frac{1.5}{T} \approx +0.5\ \%/\mathrm{K}\ \text{at 300 K}.$$

**Circuit:** a constant-$g_m$ (β-multiplier) bias, with $M_1$ of $(W/L)_N$ and $M_2$ of $K(W/L)_N$ plus $R_S$ in its source, and an equal PMOS mirror. It produces $I = \dfrac{2}{\mu_nC_{ox}(W/L)_NR_S^2}\left(1 - \dfrac{1}{\sqrt K}\right)^2 \propto 1/\mu_n$, which is mirrored into the tail. The pair's $g_m$ then equals (constant)$/R_S$, and $g_mR_D \propto R_D/R_S$. That is zero TC if $R_S$ has zero TC, and also with resistor TC if $R_S$ is made of the same material as $R_D$. A PTAT current is a rougher approximation (it gives $T$ instead of $T^{3/2}$).

**Common mistake.** Taking $g_m$ to be proportional to $\mu I_{SS}$, or mishandling the square root and concluding $I_{SS} \propto T^{3/4}$. For a square-law device $g_m \propto \sqrt{\mu I_D}$, and keeping it constant requires $I_D \propto 1/\mu = T^{3/2}$.

**Common mistake.** Proposing a zero-TC (bandgap-derived) tail current. With $I_{SS}$ constant the gain still falls by about 0.25 %/K; the current must *rise* with temperature.

**Common mistake.** Using a constant-$g_m$ bias whose NMOS devices are of a different type, or whose $R_S$ is of a different material, than the pair and $R_D$. Cancelling $\mu_n$ requires the same mobility in bias and pair devices, and cancelling resistor drift requires matched resistors.
