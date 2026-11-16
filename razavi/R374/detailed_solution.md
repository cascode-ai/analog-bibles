# Detailed solution - R374

**Approach.** $R_F$ gives the amplifier a finite input impedance, so its noise needs an input-referred voltage (input shorted) and current (input open). Redo both with $r_O$ included, by KCL at the output, and compare with $\lambda = 0$. The key point: the noiseless $r_O$ enters the noise transfer and the signal transfer in the same way, so it cancels from the input-referred quantities.

### Step 1 — Small-signal noise model

Two nodes matter: the gate G (input) and out.

- $M_1$: controlled current $g_mv_g$ from out to ground, its channel-noise current $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_m$) also from out to ground, and the **noiseless** $r_O$ from out to ground ($r_O$ models channel-length modulation and generates no thermal noise).
- $I_1$: ideal current source, an open circuit for small signals.
- $R_F$: between G and out, with its noise as a parallel current $\overline{I_{nF}^2} = 4kT/R_F$ or a series voltage $\overline{V_{nF}^2} = 4kTR_F$, whichever is more convenient.

<!-- diagram: diagram-01.cir -->

### Step 2 — Input-referred noise voltage (input shorted)

With G grounded, $v_g = 0$, and $R_F$ (now to ground) is in parallel with $r_O$; both noise currents flow into that combination:

$$v_{n,out} = (I_{n1} + I_{nF})\,(R_F\parallel r_O),$$

$$\overline{V_{n,out}^2}\Big|_{\text{in shorted}} = 4kT\left(\gamma g_m + \frac{1}{R_F}\right)(R_F\parallel r_O)^2 .$$

**Voltage gain.** KCL at the output with G driven by $v_{in}$:

$$
\begin{aligned}
\frac{v_{out} - v_{in}}{R_F} + g_mv_{in} + \frac{v_{out}}{r_O} &= 0\\
v_{out}\left(\frac{1}{R_F} + \frac{1}{r_O}\right) &= -v_{in}\left(g_m - \frac{1}{R_F}\right)\\
A_v = \frac{v_{out}}{v_{in}} &= -\left(g_m - \frac{1}{R_F}\right)(R_F\parallel r_O).
\end{aligned}
$$

($g_m - 1/R_F$ is the net transconductance: $M_1$ sinks $g_mv_{in}$ while $R_F$ feeds $v_{in}/R_F$ forward.) Dividing by $A_v^2$, $(R_F\parallel r_O)^2$ cancels:

$$\overline{V_{n,in}^2} = \frac{4kT\left(\gamma g_m + 1/R_F\right)(R_F\parallel r_O)^2}{(g_m - 1/R_F)^2(R_F\parallel r_O)^2} = \frac{4kT/R_F + 4kT\gamma g_m}{(g_m - 1/R_F)^2}.$$

### Step 3 — Input-referred noise current (input open)

With G open, **no current flows through $R_F$**, so with $R_F$'s noise as a series voltage the gate follows the output plus that voltage: $v_g = v_{out} + V_{nF}$. KCL at the output:

$$
\begin{aligned}
g_mv_g + I_{n1} + \frac{v_{out}}{r_O} &= 0\\
g_m(v_{out} + V_{nF}) + I_{n1} + \frac{v_{out}}{r_O} &= 0\\
v_{out}\left(g_m + \frac{1}{r_O}\right) &= -\left(g_mV_{nF} + I_{n1}\right)\\
v_{n,out} &= -\frac{g_mV_{nF} + I_{n1}}{g_m + 1/r_O},
\end{aligned}
$$

$$\overline{V_{n,out}^2}\Big|_{\text{in open}} = \frac{4kT\left(g_m^2R_F + \gamma g_m\right)}{(g_m + 1/r_O)^2}.$$

**Transimpedance.** A current $i_{in}$ into the open gate flows through $R_F$, so $v_g = v_{out} + i_{in}R_F$, and KCL at the output gives

$$
\begin{aligned}
i_{in} &= g_m(v_{out} + i_{in}R_F) + \frac{v_{out}}{r_O}\\
i_{in}(1 - g_mR_F) &= v_{out}\left(g_m + \frac{1}{r_O}\right)\\
\frac{v_{out}}{i_{in}} &= -\frac{g_mR_F - 1}{g_m + 1/r_O}.
\end{aligned}
$$

Dividing, $(g_m + 1/r_O)^2$ cancels:

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

**The input-referred noise voltage and current are unchanged; only the output noise voltages are smaller.** The noiseless $r_O$ sits across the output port and scales output noise and output signal by the same factor, $(R_F\parallel r_O)$ with the input shorted and $1/(g_m + 1/r_O)$ with the input open. Equivalently, with short-circuit output *currents* $r_O$ carries no current at all.

For large loop gain ($g_mR_F \gg 1$): $\overline{V_{n,in}^2} \approx 4kT\gamma/g_m + 4kT/(g_m^2R_F)$, essentially a CS stage's noise, and $\overline{I_{n,in}^2} \approx 4kT/R_F + 4kT\gamma/(g_mR_F^2)$, essentially the feedback resistor's noise current.

### Result

$$\overline{V_{n,in}^2} = \frac{4kT/R_F + 4kT\gamma g_m}{(g_m - 1/R_F)^2}, \qquad \overline{I_{n,in}^2} = \frac{4kTR_Fg_m^2 + 4kT\gamma g_m}{(g_mR_F - 1)^2},$$

independent of $r_O$, i.e. identical to the $\lambda = 0$ results. Only the output noise voltages change:

- input shorted: $\overline{V_{n,out}^2} = 4kT\left(\dfrac{1}{R_F} + \gamma g_m\right)(R_F\parallel r_O)^2$ instead of $4kT\left(\dfrac{1}{R_F} + \gamma g_m\right)R_F^2$;
- input open: $\overline{V_{n,out}^2} = \dfrac{4kT(g_m^2R_F + \gamma g_m)}{(g_m + 1/r_O)^2}$ instead of $4kTR_F + 4kT\gamma/g_m$.

$r_O$ is noiseless and scales the noise and the gain equally, so it drops out of the input-referred quantities.

**Common mistake.** Treating $r_O$ as a noisy resistor and adding $4kT/r_O$. The channel noise is already fully described by $4kT\gamma g_m$.

**Common mistake.** Writing the net transconductance as $g_m - 1/R_F - 1/r_O$. $r_O$ carries none of the input-generated current when the output is held at ground; it only sets the output impedance $R_F\parallel r_O$. Mixing it in makes the input-referred noise wrongly depend on $\lambda$.

**Common mistake.** Concluding that the input-referred noise drops with $\lambda$ because the output noise drops. The gain drops by exactly the same factor.
