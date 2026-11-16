# Detailed solution - R333

**Approach.** The circuit has three independent thermal noise sources: the channel noise of $M_1$, the noise of $R_S$ and the noise of $R_D$. Find the input voltage that would produce the same output as each source (one source at a time), then add the three input-referred powers, since the sources are uncorrelated. Throughout, $\lambda = 0$ and there is no body effect, so the transistor's drain current depends only on $V_{GS}$.

### Step 1 — Small-signal model and voltage gain

**Model in words.** The circuit has three nodes besides ground: the input (gate), the source node S and the output (drain). The transistor is a voltage-controlled current source $g_m(v_{in} - v_S)$ flowing from the output to S. $R_S$ connects S to ground. $R_D$ connects the output to $V_{DD}$, which is ac ground. Because $\lambda = 0$, there is no $r_O$. The three noise sources are then added: the channel noise of $M_1$ between drain and source, and a Norton current in parallel with each resistor.

<!-- diagram: diagram-01.cir -->

**Signal gain (noise sources off).** Let $i_d$ be the drain current.

- Device equation: $i_d = g_m(v_{in} - v_S)$.
- KCL at S: $i_d$ flows entirely into $R_S$, so $v_S = i_dR_S$.

Substitute the second into the first and solve:

$$
\begin{aligned}
i_d &= g_m(v_{in} - i_dR_S)\\
i_d(1 + g_mR_S) &= g_mv_{in}\\
i_d &= \frac{g_m}{1 + g_mR_S}\,v_{in}.
\end{aligned}
$$

$i_d$ flows from $V_{DD}$ through $R_D$, so $v_{out} = -i_dR_D$ and

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{g_mR_D}{1 + g_mR_S}.$$

The quantity $G_m = g_m/(1 + g_mR_S)$ is the effective transconductance of the degenerated device.

### Step 2 — Noise of $M_1$

The channel noise is a current $I_{n1}$ between drain and source, with $\overline{I_{n1}^2} = 4kT\gamma g_m$, where $k$ is Boltzmann's constant, $T$ the absolute temperature and $\gamma$ the channel-noise coefficient.

The total current flowing through the device from drain to source is

$$i_d = g_m v_{gs} + I_{n1} = g_m\left(v_{gs} + \frac{I_{n1}}{g_m}\right).$$

So the noise current has exactly the same effect as an extra voltage $I_{n1}/g_m$ added to $v_{gs}$, i.e. a voltage source $I_{n1}/g_m$ in series with the gate. This equivalence is exact here because, with $\lambda = 0$ and no body effect, the device current depends on $v_{gs}$ alone. It therefore holds **whatever** is connected to the source.

Check with the degenerated circuit: with $v_{in} = 0$, $i_d = g_m(-i_dR_S) + I_{n1}$, so $i_d = I_{n1}/(1 + g_mR_S)$. An input $v_{in}$ gives $i_d = g_mv_{in}/(1 + g_mR_S)$. They are equal when $v_{in} = I_{n1}/g_m$. ✓ Hence

$$\overline{V_{n,in}^2}\Big|_{M_1} = \frac{\overline{I_{n1}^2}}{g_m^2} = \frac{4kT\gamma g_m}{g_m^2} = \frac{4kT\gamma}{g_m}.$$

### Step 3 — Noise of $R_S$

Model the noise of $R_S$ as a current $I_{nS}$, with $\overline{I_{nS}^2} = 4kT/R_S$, in parallel with $R_S$ and flowing from S to ground. With $v_{in} = 0$:

- device equation: $i_d = g_m(0 - v_S) = -g_mv_S$;
- KCL at S: the drain current splits between $R_S$ and the noise source, $i_d = v_S/R_S + I_{nS}$, so $v_S = (i_d - I_{nS})R_S$.

Substitute and solve:

$$
\begin{aligned}
i_d &= -g_mR_S\,(i_d - I_{nS})\\
i_d(1 + g_mR_S) &= g_mR_S\,I_{nS}\\
i_d &= \frac{g_m}{1 + g_mR_S}\,(R_SI_{nS}).
\end{aligned}
$$

Compare with the signal relation $i_d = \dfrac{g_m}{1 + g_mR_S}v_{in}$: the noise is equivalent to an input voltage of magnitude $R_SI_{nS}$. (The sign does not matter for a noise power.) Thus

$$\overline{V_{n,in}^2}\Big|_{R_S} = R_S^2\cdot\frac{4kT}{R_S} = 4kTR_S .$$

**Intuition.** In Thevenin form the noise of $R_S$ is a voltage $V_{nS}$ ($\overline{V_{nS}^2} = 4kTR_S$) in series with the source terminal. The transistor responds only to $V_{GS} = V_G - V_S$, so a voltage in series with the source is indistinguishable from the same voltage (with opposite sign) at the gate. It is referred to the input **one-to-one**, without any division by the gain.

### Step 4 — Noise of $R_D$

Model the noise of $R_D$ as a current $I_{nD}$, $\overline{I_{nD}^2} = 4kT/R_D$, in parallel with $R_D$. With $\lambda = 0$ the drain of $M_1$ is an ideal current source: its current is fixed by $v_{gs}$ and does not change with $v_{out}$. Hence none of $I_{nD}$ can flow into the transistor and all of it flows through $R_D$:

$$\overline{V_{n,out}^2}\Big|_{R_D} = \overline{I_{nD}^2}\,R_D^2 = \frac{4kT}{R_D}R_D^2 = 4kTR_D .$$

Divide by the squared gain from Step 1:

$$
\begin{aligned}
\overline{V_{n,in}^2}\Big|_{R_D} &= \frac{4kTR_D}{A_v^2} = 4kTR_D\cdot\frac{(1 + g_mR_S)^2}{g_m^2R_D^2}\\
&= 4kT\,\frac{(1 + g_mR_S)^2}{g_m^2R_D}.
\end{aligned}
$$

Degeneration lowers the gain by $(1 + g_mR_S)$, so the load noise, which appears at the output, is magnified by $(1 + g_mR_S)^2$ when referred back to the input.

### Step 5 — Total input-referred noise

The three sources are uncorrelated, so their input-referred powers add:

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \overline{V_{n,in}^2}\Big|_{M_1} + \overline{V_{n,in}^2}\Big|_{R_S} + \overline{V_{n,in}^2}\Big|_{R_D}\\
&= \frac{4kT\gamma}{g_m} + 4kTR_S + 4kT\frac{(1 + g_mR_S)^2}{g_m^2R_D}\\
&= 4kT\left[\frac{\gamma}{g_m} + R_S + \frac{(1 + g_mR_S)^2}{g_m^2R_D}\right].
\end{aligned}
$$

**Checks.**

- For $R_S = 0$ this reduces to the plain common-source result $4kT\left(\gamma/g_m + 1/(g_m^2R_D)\right)$.
- Degeneration *adds* noise: the term $4kTR_S$ appears directly at the input, and the $R_D$ term grows by $(1 + g_mR_S)^2$. This is the noise price paid for the improved linearity of a degenerated stage.

### Result

$$\overline{V_{n,in}^2} = 4kT\left[\frac{\gamma}{g_m} + R_S + \frac{(1+g_mR_S)^2}{g_m^2R_D}\right]$$

- $M_1$: its drain noise current is equivalent to a gate voltage with PSD $4kT\gamma/g_m$, independent of $R_S$ ($\lambda = 0$, no body effect).
- $R_S$: its noise voltage $4kTR_S$ acts directly on $V_{GS}$ and is referred one-to-one.
- $R_D$: output noise $4kTR_D$, divided by $A_v^2 = \left[g_mR_D/(1+g_mR_S)\right]^2$.

**Common mistake.** Dividing the $R_S$ noise by the gain, or multiplying it by $g_m^2$. The noise voltage of $R_S$ sits in series with the source terminal and changes $V_{GS}$ exactly as an input voltage would, so it is referred to the input one-to-one as $4kTR_S$.

**Common mistake.** Using the undegenerated gain $g_mR_D$ when referring the $R_D$ noise, which gives $4kT/(g_m^2R_D)$. The actual gain is $g_mR_D/(1 + g_mR_S)$, so the $R_D$ term carries the factor $(1 + g_mR_S)^2$.

**Common mistake.** Writing the transistor term as $4kT\gamma g_m$ (that is the drain *current* PSD, not an input voltage), or attaching a degeneration factor to it. The channel noise current and the signal current are both reduced by the same factor $1 + g_mR_S$, so the input-referred transistor noise stays $4kT\gamma/g_m$.
