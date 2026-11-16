# Detailed solution - R336

**Approach.** The circuit is a source-degenerated common-source stage ($M_1$, $R_S$) whose load is the diode-connected PMOS $M_2$. There are three uncorrelated noise sources: the channel noise of $M_1$, the noise of $R_S$ and the channel noise of $M_2$. We find the voltage gain, refer each source to the input separately, and add the powers.

### Step 1 — Small-signal model of the diode-connected load

$M_2$ has its gate tied to its drain (the output) and its source at $V_{DD}$ (ac ground). Its small-signal drain current, flowing from $V_{DD}$ into the output, is

$$i_{d2} = g_{m2}v_{sg2} = g_{m2}(0 - v_{out}) = -g_{m2}v_{out}.$$

A current proportional to the voltage across the device is a resistor: the diode-connected transistor behaves like a resistance $1/g_{m2}$ from the output to ac ground ($\lambda = 0$, so there is no $r_{O2}$ in parallel). Its channel noise $I_{n2}$, with $\overline{I_{n2}^2} = 4kT\gamma g_{m2}$, is a current source in parallel with this resistance.

**Full model in words.** The output node has the resistance $1/g_{m2}$ and the noise current $I_{n2}$ to ac ground. $M_1$ is a current source $g_{m1}(v_{in} - v_S)$ from the output to its source node S, with its channel noise $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_{m1}$) in parallel. Node S goes to ground through $R_S$ in series with the resistor's noise voltage $V_{nS}$ ($\overline{V_{nS}^2} = 4kTR_S$). Here $k$ is Boltzmann's constant, $T$ the absolute temperature and $\gamma$ the channel-noise coefficient.

<!-- diagram: diagram-01.cir -->

### Step 2 — Voltage gain

With the noise sources off, the drain current of the degenerated $M_1$ follows from $i_{d1} = g_{m1}(v_{in} - v_S)$ and $v_S = i_{d1}R_S$:

$$
\begin{aligned}
i_{d1} &= g_{m1}(v_{in} - i_{d1}R_S)\\
i_{d1}(1 + g_{m1}R_S) &= g_{m1}v_{in}\\
i_{d1} &= \frac{g_{m1}}{1 + g_{m1}R_S}v_{in}.
\end{aligned}
$$

This current is drawn from the output node and supplied by the load resistance $1/g_{m2}$, so $v_{out} = -i_{d1}/g_{m2}$ and

$$A_v = -\frac{g_{m1}}{g_{m2}(1 + g_{m1}R_S)}.$$

### Step 3 — Noise of $M_1$

The current through $M_1$ is $g_{m1}v_{gs1} + I_{n1} = g_{m1}\left(v_{gs1} + I_{n1}/g_{m1}\right)$. With $\lambda = 0$ and no body effect, the device current depends only on $v_{gs1}$, so the noise current is exactly equivalent to a voltage $I_{n1}/g_{m1}$ in series with the gate, whatever is connected to the source or the drain:

$$\overline{V_{n,in}^2}\Big|_{M_1} = \frac{\overline{I_{n1}^2}}{g_{m1}^2} = \frac{4kT\gamma g_{m1}}{g_{m1}^2} = \frac{4kT\gamma}{g_{m1}}.$$

### Step 4 — Noise of $R_S$

$V_{nS}$ is in series with the source of $M_1$. KVL around the input loop: $v_{gs1} = v_{in} - V_{nS} - i_{d1}R_S$. The transistor responds only to $v_{gs1}$, so $V_{nS}$ has exactly the same effect as an input voltage $-V_{nS}$. It is referred to the input **one-to-one**:

$$\overline{V_{n,in}^2}\Big|_{R_S} = \overline{V_{nS}^2} = 4kTR_S .$$

### Step 5 — Noise of $M_2$

With $v_{in} = 0$ and the other sources off, the drain current of $M_1$ is zero. Because $\lambda = 0$, $M_1$'s current does not depend on the output voltage, so $M_1$ looks like an open circuit from the output. KCL at the output therefore involves only $M_2$'s branch: the noise current $I_{n2}$ must flow entirely through the load resistance $1/g_{m2}$:

$$
\begin{aligned}
-g_{m2}v_{out} + I_{n2} &= 0\\
v_{out} &= \frac{I_{n2}}{g_{m2}}.
\end{aligned}
$$

The output noise PSD is

$$\overline{V_{n,out}^2}\Big|_{M_2} = \frac{\overline{I_{n2}^2}}{g_{m2}^2} = \frac{4kT\gamma g_{m2}}{g_{m2}^2} = \frac{4kT\gamma}{g_{m2}}.$$

Divide by $A_v^2$ from Step 2:

$$
\begin{aligned}
\overline{V_{n,in}^2}\Big|_{M_2} &= \frac{4kT\gamma}{g_{m2}}\cdot\frac{g_{m2}^2(1 + g_{m1}R_S)^2}{g_{m1}^2}\\
&= \frac{4kT\gamma\,g_{m2}\,(1 + g_{m1}R_S)^2}{g_{m1}^2}.
\end{aligned}
$$

**Intuition.** A noise current at the output is equivalent to an input voltage equal to that current divided by the stage's effective transconductance $G_m = g_{m1}/(1 + g_{m1}R_S)$. Degeneration lowers $G_m$, so the load noise referred to the input grows by $(1 + g_{m1}R_S)^2$.

### Step 6 — Total input-referred noise

The three sources are uncorrelated, so their input-referred powers add:

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{4kT\gamma}{g_{m1}} + 4kTR_S + \frac{4kT\gamma\,g_{m2}(1 + g_{m1}R_S)^2}{g_{m1}^2}\\
&= 4kT\left[\frac{\gamma}{g_{m1}} + R_S + \frac{\gamma\,g_{m2}(1 + g_{m1}R_S)^2}{g_{m1}^2}\right].
\end{aligned}
$$

**Checks.**

- For $R_S = 0$ this becomes $4kT\gamma\left(1/g_{m1} + g_{m2}/g_{m1}^2\right)$, the standard result for a common-source stage with a diode-connected load.
- To keep the load noise small one wants $g_{m2} \ll g_{m1}$, but that is also what sets the gain, $g_{m1}/[g_{m2}(1 + g_{m1}R_S)]$. A high-gain design is therefore also a low-noise design here.

### Result

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + 4kTR_S + \frac{4kT\gamma\, g_{m2}(1+g_{m1}R_S)^2}{g_{m1}^2}$$

- $M_1$: $4kT\gamma/g_{m1}$ (its drain noise current referred to the gate).
- $R_S$: $4kTR_S$ (a voltage in series with the source acts like a voltage at the gate).
- $M_2$: output noise $4kT\gamma/g_{m2}$, divided by the squared gain $\left[g_{m1}/(g_{m2}(1+g_{m1}R_S))\right]^2$.

**Common mistake.** Treating the diode-connected $M_2$ as an ideal current source (infinite impedance) or as a noiseless load. It is a resistance $1/g_{m2}$ that sets the gain, and it carries its own channel noise $4kT\gamma g_{m2}$, which appears at the output as $4kT\gamma/g_{m2}$.

**Common mistake.** Leaving out the degeneration factor on the $M_2$ term, i.e. writing $4kT\gamma g_{m2}/g_{m1}^2$. That uses the gain $g_{m1}/g_{m2}$ of the undegenerated stage; with $R_S$ present the gain is smaller by $1 + g_{m1}R_S$, so the referred load noise is larger by $(1 + g_{m1}R_S)^2$.

**Common mistake.** Dividing the $R_S$ noise by the gain. The resistor's noise voltage is in series with the source terminal, i.e. inside the input loop, and changes $v_{gs1}$ exactly as an input voltage does. It is referred one-to-one as $4kTR_S$.
