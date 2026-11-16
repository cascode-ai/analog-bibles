# Detailed solution - R355

**Approach.** With $\lambda = 0$ the output resistance, and hence the voltage gain, is infinite, so work with the **output short-circuit current**: signal and noise currents flow into the same output impedance, and the input-referred noise is the noise short-circuit current divided by the short-circuit transconductance. Find how much of each transistor's noise reaches the output, add the powers, and divide by $g_{m1}^2$.

### Step 1 — Small-signal model with the output shorted

Call X the drain of $M_1$ (diode $M_3$, gate of $M_4$) and P the tail node; the input is $v_{in} = v_{in1} - v_{in2}$, and the output is shorted to ac ground.

- **$M_3$:** delivers $g_{m3}(0 - v_X)$ into X, i.e. a resistance $1/g_{m3}$ from X to ac ground.
- **$M_4$:** delivers $g_{m4}(0 - v_X) = -g_{m4}v_X$ into the output.
- **$M_1$:** draws $i_1 = g_{m1}(v_{in1} - v_P) + I_{n1}$ from X to P.
- **$M_2$:** draws $i_2 = g_{m2}(v_{in2} - v_P) + I_{n2}$ from the output to P.
- **Tail:** ideal, open for ac, noiseless.

The noise currents (PSD $4kT\gamma g_m$ each, all uncorrelated) are $I_{n1}$ and $I_{n2}$ as included above, $I_{n3}$ into X and $I_{n4}$ into the output. Also $g_{m1} = g_{m2}$ and $g_{m3} = g_{m4}$. The short-circuit output current, flowing out of the output node into the short, is

$$I_{out} = \underbrace{\left(-g_{m4}v_X + I_{n4}\right)}_{\text{delivered by } M_4} - \underbrace{i_2}_{\text{drawn by } M_2}.$$

<!-- diagram: diagram-01.cir -->

### Step 2 — Currents in the input pair (KCL at P)

The tail is open for ac, so $i_1 + i_2 = 0$. With $g_{m1} = g_{m2}$:

$$
\begin{aligned}
g_{m1}(v_{in1} - v_P) + I_{n1} + g_{m1}(v_{in2} - v_P) + I_{n2} &= 0\\
v_P &= \frac{v_{in1} + v_{in2}}{2} + \frac{I_{n1} + I_{n2}}{2g_{m1}}.
\end{aligned}
$$

Substituting into $i_1$:

$$
\begin{aligned}
i_1 &= g_{m1}v_{in1} - g_{m1}\frac{v_{in1} + v_{in2}}{2} - \frac{I_{n1} + I_{n2}}{2} + I_{n1}\\
&= \frac{g_{m1}}{2}(v_{in1} - v_{in2}) + \frac{I_{n1} - I_{n2}}{2},
\end{aligned}
$$

and $i_2 = -i_1$: each input device's noise splits equally between its own branch and, with opposite sign, the other device.

### Step 3 — Currents in the mirror (KCL at X)

The current delivered by $M_3$ (plus its noise) equals the current drawn by $M_1$:

$$-g_{m3}v_X + I_{n3} = i_1\quad\Longrightarrow\quad v_X = \frac{I_{n3} - i_1}{g_{m3}}.$$

With $g_{m4} = g_{m3}$, $M_4$ then delivers into the output

$$-g_{m4}v_X + I_{n4} = -\frac{g_{m4}}{g_{m3}}(I_{n3} - i_1) + I_{n4} = i_1 - I_{n3} + I_{n4}.$$

The mirror copies $i_1$ to the output with unity gain, and also $M_3$'s noise: $I_{n3}$ produces $v_X = I_{n3}/g_{m3}$ across the diode, which $M_4$ converts back into $-I_{n3}$.

### Step 4 — Short-circuit output current

Combining Steps 1 to 3:

$$
\begin{aligned}
I_{out} &= (i_1 - I_{n3} + I_{n4}) - i_2 = 2i_1 - I_{n3} + I_{n4}\\
&= g_{m1}(v_{in1} - v_{in2}) + (I_{n1} - I_{n2}) - I_{n3} + I_{n4}.
\end{aligned}
$$

The short-circuit transconductance is $G_m = g_{m1}$, and **each of the four noise currents reaches the output with unity weight**.

### Step 5 — Input-referred noise voltage

Signal and noise see the same output impedance, so dividing by $G_m$:

$$v_{n,in} = \frac{I_{n1} - I_{n2} - I_{n3} + I_{n4}}{g_{m1}},$$

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{4kT\gamma\left(g_{m1} + g_{m2} + g_{m3} + g_{m4}\right)}{g_{m1}^2} = \frac{4kT\gamma\left(2g_{m1} + 2g_{m3}\right)}{g_{m1}^2}\\
&= 8kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m3}}{g_{m1}^2}\right).
\end{aligned}
$$

Each input transistor contributes $4kT\gamma/g_{m1}$ and each load transistor $4kT\gamma g_{m3}/g_{m1}^2$, as in a fully differential pair with current-source loads; a small $g_{m3}/g_{m1}$ (PMOS loads with a large overdrive) keeps the load noise small.

### Result

$$\overline{V_{n,in}^2} = 8kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m3}}{g_{m1}^2}\right)$$

- With $\lambda = 0$ the gain is infinite, so we used the output short-circuit current; the signal gives $I_{out} = g_{m1}v_{in}$.
- $M_1$, $M_2$: with an ideal tail, $I_{n1} - I_{n2}$ reaches the output ($M_1$'s part through the mirror); each refers to $4kT\gamma/g_{m1}$.
- $M_3$: its noise current flows in its diode impedance and is copied by $M_4$ to the output with gain 1. $M_4$'s noise goes directly to the output. Each refers to $4kT\gamma g_{m3}/g_{m1}^2$.

**Common mistake.** Concluding that the input-referred noise is zero because the voltage gain is infinite. The output noise is infinite for the same reason; comparing short-circuit currents gives the finite ratio.

**Common mistake.** Assuming that $M_3$'s noise is suppressed because it is diode-connected. The diode turns $I_{n3}$ into a gate voltage $I_{n3}/g_{m3}$, and $M_4$ turns it back into the full current $I_{n3}$ at the output.

**Common mistake.** Getting the result off by a factor of 2, or counting tail noise. The factor 2 ($8kT$) comes from two input and two load devices; the tail is ideal here, and its noise would be common-mode anyway.
