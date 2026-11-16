# Detailed solution - R355

**Approach.** With $\lambda = 0$ the output resistance of this amplifier (and hence its voltage gain) is infinite. So we work with the **output short-circuit current**: the signal and every noise source produce currents into the same output node, which then flow into the same output impedance. The input-referred noise voltage is the noise short-circuit current divided by the short-circuit transconductance. We find how much of each transistor's noise current reaches the output, add the powers, and divide by $g_{m1}^2$.

### Step 1 — Small-signal model with the output shorted

**Nodes:** X (drain of $M_1$, diode-connected $M_3$, gate of $M_4$), the output (drain of $M_2$ and $M_4$, here shorted to ac ground), and the tail node P. The input is $v_{in} = v_{in1} - v_{in2}$.

- **$M_3$** (diode-connected PMOS, source at $V_{DD}$): delivers $g_{m3}(0 - v_X)$ into X, i.e. a resistance $1/g_{m3}$ from X to ac ground.
- **$M_4$** (PMOS, gate at X): delivers $g_{m4}(0 - v_X) = -g_{m4}v_X$ into the output.
- **$M_1$**: draws $i_1 = g_{m1}(v_{in1} - v_P) + I_{n1}$ from X to P.
- **$M_2$**: draws $i_2 = g_{m2}(v_{in2} - v_P) + I_{n2}$ from the output to P.
- **Tail:** ideal current source, open for ac, noiseless.

**Noise currents** (PSD $4kT\gamma g_m$ each, all uncorrelated): $I_{n1}$, $I_{n2}$ as included above; $I_{n3}$ flowing into X (in parallel with $M_3$); $I_{n4}$ flowing into the output (in parallel with $M_4$). Here $k$ is Boltzmann's constant, $T$ the absolute temperature and $\gamma$ the channel-noise coefficient. Also $g_{m1} = g_{m2}$ and $g_{m3} = g_{m4}$.

The short-circuit output current $I_{out}$ (flowing out of the output node into the short) is

$$I_{out} = \underbrace{\left(-g_{m4}v_X + I_{n4}\right)}_{\text{delivered by } M_4} - \underbrace{i_2}_{\text{drawn by } M_2}.$$

<!-- diagram: diagram-01.cir -->

### Step 2 — Currents in the input pair (KCL at P)

The tail is an open circuit for ac, so the two input-device currents must sum to zero:

$$i_1 + i_2 = 0 .$$

Write it out with $g_{m1} = g_{m2}$ and solve for $v_P$:

$$
\begin{aligned}
g_{m1}(v_{in1} - v_P) + I_{n1} + g_{m1}(v_{in2} - v_P) + I_{n2} &= 0\\
v_P &= \frac{v_{in1} + v_{in2}}{2} + \frac{I_{n1} + I_{n2}}{2g_{m1}}.
\end{aligned}
$$

Substitute back into $i_1$:

$$
\begin{aligned}
i_1 &= g_{m1}v_{in1} - g_{m1}\frac{v_{in1} + v_{in2}}{2} - \frac{I_{n1} + I_{n2}}{2} + I_{n1}\\
&= \frac{g_{m1}}{2}(v_{in1} - v_{in2}) + \frac{I_{n1} - I_{n2}}{2},
\end{aligned}
$$

and $i_2 = -i_1$. Each input device's noise splits equally: half flows in its own branch, and half is pushed (with opposite sign) through the other device via the tail node.

### Step 3 — Currents in the mirror (KCL at X)

The current delivered by $M_3$ (plus its noise) equals the current drawn by $M_1$:

$$-g_{m3}v_X + I_{n3} = i_1\quad\Longrightarrow\quad v_X = \frac{I_{n3} - i_1}{g_{m3}}.$$

$M_4$ then delivers into the output

$$-g_{m4}v_X + I_{n4} = -\frac{g_{m4}}{g_{m3}}(I_{n3} - i_1) + I_{n4} = i_1 - I_{n3} + I_{n4},$$

using $g_{m4} = g_{m3}$. The mirror copies $i_1$ to the output with unity gain. It also copies $M_3$'s noise: $I_{n3}$ flows into the diode impedance $1/g_{m3}$, producing $v_X = I_{n3}/g_{m3}$, which $M_4$ converts back into the current $-I_{n3}$.

### Step 4 — Short-circuit output current

Combine Steps 1 to 3:

$$
\begin{aligned}
I_{out} &= (i_1 - I_{n3} + I_{n4}) - i_2 = 2i_1 - I_{n3} + I_{n4}\\
&= g_{m1}(v_{in1} - v_{in2}) + (I_{n1} - I_{n2}) - I_{n3} + I_{n4}.
\end{aligned}
$$

So:

- the **short-circuit transconductance** is $G_m = g_{m1}$;
- **each of the four noise currents reaches the output with unity weight**.

### Step 5 — Input-referred noise voltage

The output impedance is common to signal and noise, so dividing the noise part of $I_{out}$ by $G_m$ refers it to the input:

$$v_{n,in} = \frac{I_{n1} - I_{n2} - I_{n3} + I_{n4}}{g_{m1}}.$$

The four sources are uncorrelated, so their powers add:

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{4kT\gamma\left(g_{m1} + g_{m2} + g_{m3} + g_{m4}\right)}{g_{m1}^2} = \frac{4kT\gamma\left(2g_{m1} + 2g_{m3}\right)}{g_{m1}^2}\\
&= 8kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m3}}{g_{m1}^2}\right).
\end{aligned}
$$

**Interpretation.** Each input transistor contributes $4kT\gamma/g_{m1}$ and each load transistor $4kT\gamma g_{m3}/g_{m1}^2$, exactly as in a fully differential pair with current-source loads. To keep the load noise small, make $g_{m3} \ll g_{m1}$ (PMOS loads with a large overdrive).

### Result

$$\overline{V_{n,in}^2} = 8kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m3}}{g_{m1}^2}\right)$$

- With $\lambda = 0$ the gain is infinite, so we used the output short-circuit current; the signal gives $I_{out} = g_{m1}v_{in}$.
- $M_1$, $M_2$: with an ideal tail, $I_{n1} - I_{n2}$ reaches the output ($M_1$'s part through the mirror); each refers to $4kT\gamma/g_{m1}$.
- $M_3$: its noise current flows in its diode impedance and is copied by $M_4$ to the output with gain 1. $M_4$'s noise goes directly to the output. Each refers to $4kT\gamma g_{m3}/g_{m1}^2$.

**Common mistake.** Concluding that the input-referred noise is zero because the voltage gain is infinite. The output noise is infinite too, for the same reason (infinite output impedance); the ratio is finite. Comparing short-circuit currents avoids the issue entirely.

**Common mistake.** Assuming that $M_3$'s noise is suppressed because it is diode-connected. The diode connection converts its noise current into a gate voltage $I_{n3}/g_{m3}$, and $M_4$ (with $g_{m4} = g_{m3}$) turns that voltage back into the full current $I_{n3}$ at the output.

**Common mistake.** Counting the tail current source as a noise source, or getting the result off by a factor of 2. The tail here is ideal and, being common to both sides, would in any case contribute only common-mode current. The factor 2 ($8kT$) comes from having two input devices and two load devices.
