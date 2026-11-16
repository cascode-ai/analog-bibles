# Detailed solution - R336

**Approach.** This is a source-degenerated common-source stage with a diode-connected load. Find the voltage gain, refer each of the three uncorrelated noise sources ($M_1$, $R_S$, $M_2$) to the input separately, and add the powers.

### Step 1 — Small-signal model

With $\lambda = 0$, the diode-connected $M_2$ is a resistance $1/g_{m2}$ from the output to ac ground: its current from $V_{DD}$ into the output is $g_{m2}v_{sg2} = -g_{m2}v_{out}$. Its channel noise $I_{n2}$, $\overline{I_{n2}^2} = 4kT\gamma g_{m2}$, is in parallel with it, flowing into the output. $M_1$ is a current source $g_{m1}(v_{in} - v_S)$ from the output to its source node S, with its channel noise $I_{n1}$, $\overline{I_{n1}^2} = 4kT\gamma g_{m1}$, in parallel. S goes to ground through $R_S$ in series with its noise voltage $V_{nS}$, $\overline{V_{nS}^2} = 4kTR_S$.

<!-- diagram: diagram-01.cir -->

### Step 2 — Voltage gain

With the noise sources off, $i_{d1} = g_{m1}(v_{in} - v_S)$ and $v_S = i_{d1}R_S$:

$$
\begin{aligned}
i_{d1} &= g_{m1}(v_{in} - i_{d1}R_S)\\
i_{d1}(1 + g_{m1}R_S) &= g_{m1}v_{in}\\
i_{d1} &= \frac{g_{m1}}{1 + g_{m1}R_S}v_{in}.
\end{aligned}
$$

This current is drawn from the output and supplied by the load $1/g_{m2}$, so $v_{out} = -i_{d1}/g_{m2}$ and

$$A_v = -\frac{g_{m1}}{g_{m2}(1 + g_{m1}R_S)}.$$

### Step 3 — Noise of $M_1$

The current through $M_1$ is $g_{m1}v_{gs1} + I_{n1} = g_{m1}\left(v_{gs1} + I_{n1}/g_{m1}\right)$, which depends only on $v_{gs1}$ ($\lambda = 0$, no body effect). So $I_{n1}$ is exactly equivalent to a voltage $I_{n1}/g_{m1}$ in series with the gate, whatever is connected to the source or drain:

$$\overline{V_{n,in}^2}\Big|_{M_1} = \frac{\overline{I_{n1}^2}}{g_{m1}^2} = \frac{4kT\gamma g_{m1}}{g_{m1}^2} = \frac{4kT\gamma}{g_{m1}}.$$

### Step 4 — Noise of $R_S$

Around the input loop, $v_{gs1} = v_{in} - V_{nS} - i_{d1}R_S$. The transistor responds only to $v_{gs1}$, so $V_{nS}$ acts exactly like an input voltage $-V_{nS}$ and is referred to the input **one-to-one**:

$$\overline{V_{n,in}^2}\Big|_{R_S} = \overline{V_{nS}^2} = 4kTR_S .$$

### Step 5 — Noise of $M_2$

With $v_{in} = 0$ and the other sources off, the drain current of $M_1$ is zero, and with $\lambda = 0$ it does not depend on $v_{out}$: $M_1$ is an open circuit seen from the output. So $I_{n2}$ flows entirely through $1/g_{m2}$:

$$
\begin{aligned}
-g_{m2}v_{out} + I_{n2} &= 0\\
v_{out} &= \frac{I_{n2}}{g_{m2}},
\end{aligned}
$$

$$\overline{V_{n,out}^2}\Big|_{M_2} = \frac{\overline{I_{n2}^2}}{g_{m2}^2} = \frac{4kT\gamma g_{m2}}{g_{m2}^2} = \frac{4kT\gamma}{g_{m2}}.$$

Dividing by $A_v^2$ from Step 2:

$$
\begin{aligned}
\overline{V_{n,in}^2}\Big|_{M_2} &= \frac{4kT\gamma}{g_{m2}}\cdot\frac{g_{m2}^2(1 + g_{m1}R_S)^2}{g_{m1}^2}\\
&= \frac{4kT\gamma\,g_{m2}\,(1 + g_{m1}R_S)^2}{g_{m1}^2}.
\end{aligned}
$$

Equivalently, the output noise current $I_{n2}$ is divided by the effective transconductance $G_m = g_{m1}/(1 + g_{m1}R_S)$; degeneration lowers $G_m$, so the referred load noise grows by $(1 + g_{m1}R_S)^2$.

### Step 6 — Total input-referred noise

The three sources are uncorrelated, so their input-referred powers add:

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{4kT\gamma}{g_{m1}} + 4kTR_S + \frac{4kT\gamma\,g_{m2}(1 + g_{m1}R_S)^2}{g_{m1}^2}\\
&= 4kT\left[\frac{\gamma}{g_{m1}} + R_S + \frac{\gamma\,g_{m2}(1 + g_{m1}R_S)^2}{g_{m1}^2}\right].
\end{aligned}
$$

For $R_S = 0$ this becomes $4kT\gamma\left(1/g_{m1} + g_{m2}/g_{m1}^2\right)$, the standard result for a common-source stage with a diode-connected load. A small $g_{m2}/g_{m1}$ both lowers the load noise and raises the gain $g_{m1}/[g_{m2}(1 + g_{m1}R_S)]$.

### Result

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + 4kTR_S + \frac{4kT\gamma\, g_{m2}(1+g_{m1}R_S)^2}{g_{m1}^2}$$

- $M_1$: $4kT\gamma/g_{m1}$ (its drain noise current referred to the gate).
- $R_S$: $4kTR_S$ (a voltage in series with the source acts like a voltage at the gate).
- $M_2$: output noise $4kT\gamma/g_{m2}$, divided by the squared gain $\left[g_{m1}/(g_{m2}(1+g_{m1}R_S))\right]^2$.

**Common mistake.** Treating the diode-connected $M_2$ as an ideal current source or as a noiseless load. It is a resistance $1/g_{m2}$ that sets the gain, and its channel noise $4kT\gamma g_{m2}$ appears at the output as $4kT\gamma/g_{m2}$.

**Common mistake.** Leaving out the degeneration factor on the $M_2$ term, i.e. writing $4kT\gamma g_{m2}/g_{m1}^2$. With $R_S$ the gain is smaller by $1 + g_{m1}R_S$, so the referred load noise is larger by $(1 + g_{m1}R_S)^2$.

**Common mistake.** Dividing the $R_S$ noise by the gain. Its noise voltage lies inside the input loop and changes $v_{gs1}$ exactly as an input voltage does, so it is referred one-to-one as $4kTR_S$.
