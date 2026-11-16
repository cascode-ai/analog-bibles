# Detailed solution - R374

**Approach.** The amplifier has a finite input impedance (because of $R_F$), so its noise is described by an input-referred noise voltage (found with the input shorted) and an input-referred noise current (found with the input open). We redo both calculations with $r_O$ included, by KCL at the output node, and then compare with $\lambda = 0$. The key observation: $r_O$ is a noiseless element that appears in exactly the same way in the noise transfer and in the signal transfer, so it cancels from the input-referred quantities.

### Step 1 — The circuit and its small-signal noise model

Reading the figure: $M_1$ is a common-source device (gate = input node G, source grounded, drain = output). Its load is the ideal, noiseless current source $I_1$ from $V_{DD}$. The resistor $R_F$ connects the output back to the gate (shunt feedback).

**Small-signal model in words.** Two nodes: G (input) and out.

- $M_1$: a controlled current $g_mv_g$ from out to ground, its channel-noise current $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_m$) also from out to ground, and the **noiseless** output resistance $r_O$ from out to ground. ($r_O$ models channel-length modulation; it is not a physical resistor and generates no thermal noise in this model.)
- $I_1$: ideal current source, so an open circuit for small signals.
- $R_F$: between G and out, with its thermal noise represented either as a parallel current $\overline{I_{nF}^2} = 4kT/R_F$ or as a series voltage $\overline{V_{nF}^2} = 4kTR_F$, whichever is more convenient.

Here $k$ is Boltzmann's constant, $T$ the temperature, $\gamma$ the channel-noise coefficient and $g_m$ the transconductance of $M_1$.

<!-- diagram: diagram-01.cir -->

### Step 2 — Input-referred noise voltage (input shorted)

**Output noise with G grounded.** $v_g = 0$, so the controlled source is off. At the output node, $R_F$ (now to ground) and $r_O$ are in parallel, and the two noise currents $I_{n1}$ and $I_{nF}$ flow into that parallel combination:

$$v_{n,out} = (I_{n1} + I_{nF})\,(R_F\parallel r_O),$$

$$\overline{V_{n,out}^2}\Big|_{\text{in shorted}} = 4kT\left(\gamma g_m + \frac{1}{R_F}\right)(R_F\parallel r_O)^2 .$$

**Voltage gain.** Drive G with a voltage $v_{in}$ and write KCL at the output (currents leaving the node through $R_F$, $M_1$ and $r_O$ sum to zero):

$$
\begin{aligned}
\frac{v_{out} - v_{in}}{R_F} + g_mv_{in} + \frac{v_{out}}{r_O} &= 0\\
v_{out}\left(\frac{1}{R_F} + \frac{1}{r_O}\right) &= -v_{in}\left(g_m - \frac{1}{R_F}\right)\\
A_v = \frac{v_{out}}{v_{in}} &= -\left(g_m - \frac{1}{R_F}\right)(R_F\parallel r_O).
\end{aligned}
$$

($g_m - 1/R_F$ is the net transconductance: $M_1$ sinks $g_mv_{in}$ while $R_F$ feeds $v_{in}/R_F$ forward to the output.)

**Divide by $A_v^2$.** The factor $(R_F\parallel r_O)^2$ appears in both and cancels:

$$\overline{V_{n,in}^2} = \frac{4kT\left(\gamma g_m + 1/R_F\right)(R_F\parallel r_O)^2}{(g_m - 1/R_F)^2(R_F\parallel r_O)^2} = \frac{4kT/R_F + 4kT\gamma g_m}{(g_m - 1/R_F)^2}.$$

### Step 3 — Input-referred noise current (input open)

**Output noise with G open.** The gate draws no current, so with the input open **no current flows through $R_F$**. If $R_F$'s noise is written as a series voltage $V_{nF}$, the drop across $R_F$ itself is zero and the gate simply follows the output plus the noise voltage:

$$v_g = v_{out} + V_{nF}.$$

KCL at the output (the current through $R_F$ is zero, $I_1$ carries no small-signal current):

$$
\begin{aligned}
g_mv_g + I_{n1} + \frac{v_{out}}{r_O} &= 0\\
g_m(v_{out} + V_{nF}) + I_{n1} + \frac{v_{out}}{r_O} &= 0\\
v_{out}\left(g_m + \frac{1}{r_O}\right) &= -\left(g_mV_{nF} + I_{n1}\right)\\
v_{n,out} &= -\frac{g_mV_{nF} + I_{n1}}{g_m + 1/r_O}.
\end{aligned}
$$

$$\overline{V_{n,out}^2}\Big|_{\text{in open}} = \frac{4kT\left(g_m^2R_F + \gamma g_m\right)}{(g_m + 1/r_O)^2}.$$

**Transimpedance.** Inject a current $i_{in}$ into the open gate. It must flow through $R_F$ to the output, so $v_g = v_{out} + i_{in}R_F$. KCL at the output (current arriving through $R_F$ equals current leaving through $M_1$ and $r_O$):

$$
\begin{aligned}
i_{in} &= g_m(v_{out} + i_{in}R_F) + \frac{v_{out}}{r_O}\\
i_{in}(1 - g_mR_F) &= v_{out}\left(g_m + \frac{1}{r_O}\right)\\
\frac{v_{out}}{i_{in}} &= -\frac{g_mR_F - 1}{g_m + 1/r_O}.
\end{aligned}
$$

**Divide.** The factor $(g_m + 1/r_O)^2$ cancels:

$$\overline{I_{n,in}^2} = \frac{4kT(g_m^2R_F + \gamma g_m)/(g_m + 1/r_O)^2}{(g_mR_F - 1)^2/(g_m + 1/r_O)^2} = \frac{4kTR_Fg_m^2 + 4kT\gamma g_m}{(g_mR_F - 1)^2}.$$

### Step 4 — Comparison with $\lambda = 0$

Setting $r_O \to \infty$ in Steps 2 and 3:

| Quantity | $\lambda = 0$ | $\lambda > 0$ |
|---|---|---|
| $\overline{V_{n,in}^2}$ | $\dfrac{4kT/R_F + 4kT\gamma g_m}{(g_m - 1/R_F)^2}$ | same |
| $\overline{I_{n,in}^2}$ | $\dfrac{4kTR_Fg_m^2 + 4kT\gamma g_m}{(g_mR_F - 1)^2}$ | same |
| $\overline{V_{n,out}^2}$, input shorted | $4kT\left(\dfrac{1}{R_F} + \gamma g_m\right)R_F^2$ | $4kT\left(\dfrac{1}{R_F} + \gamma g_m\right)(R_F\parallel r_O)^2$ |
| $\overline{V_{n,out}^2}$, input open | $4kTR_F + \dfrac{4kT\gamma}{g_m}$ | $\dfrac{4kT(g_m^2R_F + \gamma g_m)}{(g_m + 1/r_O)^2}$ |

(For the last line at $\lambda = 0$: $4kT(g_m^2R_F + \gamma g_m)/g_m^2 = 4kTR_F + 4kT\gamma/g_m$.)

**The input-referred noise voltage and current are unchanged; only the output noise voltages are smaller.**

**Why.** $r_O$ is noiseless and sits across the output port (from out to AC ground). In each test condition it changes the impedance seen at the output, and so it scales the output noise and the output signal by *the same* factor: $(R_F\parallel r_O)$ with the input shorted, $1/(g_m + 1/r_O)$ with the input open. Dividing one by the other removes it. Equivalently: if we compute short-circuit output *currents* instead of output voltages, $r_O$ carries no current at all, and both the noise currents and the transconductances are exactly those of the $\lambda = 0$ case.

**Intuition for large loop gain** ($g_mR_F \gg 1$): $\overline{V_{n,in}^2} \approx 4kT\gamma/g_m + 4kT/(g_m^2R_F)$, essentially a CS stage's noise, and $\overline{I_{n,in}^2} \approx 4kT/R_F + 4kT\gamma/(g_mR_F^2)$, essentially the feedback resistor's noise current.

### Result

$$\overline{V_{n,in}^2} = \frac{4kT/R_F + 4kT\gamma g_m}{(g_m - 1/R_F)^2}, \qquad \overline{I_{n,in}^2} = \frac{4kTR_Fg_m^2 + 4kT\gamma g_m}{(g_mR_F - 1)^2},$$

independent of $r_O$, i.e. identical to the $\lambda = 0$ results. Only the output noise voltages change:

- input shorted: $\overline{V_{n,out}^2} = 4kT\left(\dfrac{1}{R_F} + \gamma g_m\right)(R_F\parallel r_O)^2$ instead of $\ldots R_F^2$;
- input open: $\overline{V_{n,out}^2} = \dfrac{4kT(g_m^2R_F + \gamma g_m)}{(g_m + 1/r_O)^2}$ instead of $4kTR_F + 4kT\gamma/g_m$.

$r_O$ is noiseless and scales the noise and the gain equally, so it drops out of the input-referred quantities.

**Common mistake.** Treating $r_O$ as a noisy resistor and adding $4kT/r_O$. $r_O$ only models the dependence of the drain current on $V_{DS}$; the channel noise is already fully described by $4kT\gamma g_m$.

**Common mistake.** Writing the net transconductance as $g_m - 1/R_F - 1/r_O$. With the input shorted, $r_O$ does not carry any of the signal current that the input generates when the output is held at ground; it only sets the output impedance, $R_F\parallel r_O$. Mixing it into the transconductance gives an input-referred noise that wrongly depends on $\lambda$.

**Common mistake.** Concluding that the input-referred noise drops with $\lambda$ because the output noise drops. The gain drops by exactly the same factor, so the noise referred to the input is unchanged.
