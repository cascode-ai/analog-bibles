# Detailed solution - R333

**Approach.** Refer each of the three uncorrelated thermal noise sources ($M_1$, $R_S$, $R_D$) to the input separately, by finding the input voltage that produces the same drain current, and add the input-referred powers. With $\lambda = 0$ and no body effect, the drain current depends only on $V_{GS}$.

### Step 1 — Small-signal model and voltage gain

The transistor is a current $g_m(v_{in} - v_S)$ from the output to the source node S; $R_S$ connects S to ground and $R_D$ connects the output to ac ground. The channel noise sits between drain and source, and each resistor has a Norton noise current in parallel.

<!-- diagram: diagram-01.cir -->

With the noise sources off, $i_d = g_m(v_{in} - v_S)$ and all of $i_d$ flows into $R_S$, so $v_S = i_dR_S$:

$$
\begin{aligned}
i_d &= g_m(v_{in} - i_dR_S)\\
i_d(1 + g_mR_S) &= g_mv_{in}\\
i_d &= \frac{g_m}{1 + g_mR_S}\,v_{in}.
\end{aligned}
$$

Since $v_{out} = -i_dR_D$,

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{g_mR_D}{1 + g_mR_S},$$

and $G_m = g_m/(1 + g_mR_S)$ is the effective transconductance of the degenerated device.

### Step 2 — Noise of $M_1$

With the channel noise $I_{n1}$, $\overline{I_{n1}^2} = 4kT\gamma g_m$, the drain-to-source current is

$$i_d = g_m v_{gs} + I_{n1} = g_m\left(v_{gs} + \frac{I_{n1}}{g_m}\right).$$

Since the current depends on $v_{gs}$ alone, $I_{n1}$ is exactly equivalent to a voltage $I_{n1}/g_m$ in series with the gate, **whatever** is connected to the source. Check with the degenerated circuit: with $v_{in} = 0$, $i_d = g_m(-i_dR_S) + I_{n1}$, so $i_d = I_{n1}/(1 + g_mR_S)$, which equals the response $g_mv_{in}/(1 + g_mR_S)$ for $v_{in} = I_{n1}/g_m$. ✓ Hence

$$\overline{V_{n,in}^2}\Big|_{M_1} = \frac{\overline{I_{n1}^2}}{g_m^2} = \frac{4kT\gamma g_m}{g_m^2} = \frac{4kT\gamma}{g_m}.$$

### Step 3 — Noise of $R_S$

The noise current $I_{nS}$, $\overline{I_{nS}^2} = 4kT/R_S$, flows from S to ground in parallel with $R_S$. With $v_{in} = 0$, $i_d = -g_mv_S$, and KCL at S gives $i_d = v_S/R_S + I_{nS}$, i.e. $v_S = (i_d - I_{nS})R_S$:

$$
\begin{aligned}
i_d &= -g_mR_S\,(i_d - I_{nS})\\
i_d(1 + g_mR_S) &= g_mR_S\,I_{nS}\\
i_d &= \frac{g_m}{1 + g_mR_S}\,(R_SI_{nS}).
\end{aligned}
$$

Compared with $i_d = \dfrac{g_m}{1 + g_mR_S}v_{in}$, the noise is equivalent to an input voltage of magnitude $R_SI_{nS}$ (the sign does not matter for a noise power):

$$\overline{V_{n,in}^2}\Big|_{R_S} = R_S^2\cdot\frac{4kT}{R_S} = 4kTR_S .$$

In Thevenin form this is a voltage $4kTR_S$ in series with the source terminal; it changes $V_{GS}$ exactly as a gate voltage would, so it is referred to the input **one-to-one**.

### Step 4 — Noise of $R_D$

With $\lambda = 0$ the drain is an ideal current source, so all of the noise current $I_{nD}$, $\overline{I_{nD}^2} = 4kT/R_D$, flows through $R_D$:

$$\overline{V_{n,out}^2}\Big|_{R_D} = \overline{I_{nD}^2}\,R_D^2 = \frac{4kT}{R_D}R_D^2 = 4kTR_D .$$

Dividing by the squared gain of Step 1:

$$
\begin{aligned}
\overline{V_{n,in}^2}\Big|_{R_D} &= \frac{4kTR_D}{A_v^2} = 4kTR_D\cdot\frac{(1 + g_mR_S)^2}{g_m^2R_D^2}\\
&= 4kT\,\frac{(1 + g_mR_S)^2}{g_m^2R_D}.
\end{aligned}
$$

Degeneration lowers the gain by $(1 + g_mR_S)$, so the load noise, referred back to the input, grows by $(1 + g_mR_S)^2$.

### Step 5 — Total input-referred noise

The three sources are uncorrelated, so their input-referred powers add:

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \overline{V_{n,in}^2}\Big|_{M_1} + \overline{V_{n,in}^2}\Big|_{R_S} + \overline{V_{n,in}^2}\Big|_{R_D}\\
&= \frac{4kT\gamma}{g_m} + 4kTR_S + 4kT\frac{(1 + g_mR_S)^2}{g_m^2R_D}\\
&= 4kT\left[\frac{\gamma}{g_m} + R_S + \frac{(1 + g_mR_S)^2}{g_m^2R_D}\right].
\end{aligned}
$$

For $R_S = 0$ this reduces to the plain common-source result $4kT\left(\gamma/g_m + 1/(g_m^2R_D)\right)$. Degeneration *adds* noise, through the term $4kTR_S$ and the factor $(1 + g_mR_S)^2$ on the $R_D$ term: the noise price of its better linearity.

### Result

$$\overline{V_{n,in}^2} = 4kT\left[\frac{\gamma}{g_m} + R_S + \frac{(1+g_mR_S)^2}{g_m^2R_D}\right]$$

- $M_1$: its drain noise current is equivalent to a gate voltage with PSD $4kT\gamma/g_m$, independent of $R_S$ ($\lambda = 0$, no body effect).
- $R_S$: its noise voltage $4kTR_S$ acts directly on $V_{GS}$ and is referred one-to-one.
- $R_D$: output noise $4kTR_D$, divided by $A_v^2 = \left[g_mR_D/(1+g_mR_S)\right]^2$.

**Common mistake.** Dividing the $R_S$ noise by the gain, or multiplying it by $g_m^2$. Its noise voltage changes $V_{GS}$ exactly as an input voltage would, so it is referred one-to-one as $4kTR_S$.

**Common mistake.** Referring the $R_D$ noise with the undegenerated gain $g_mR_D$, which gives $4kT/(g_m^2R_D)$. The gain is $g_mR_D/(1 + g_mR_S)$, so the $R_D$ term carries the factor $(1 + g_mR_S)^2$.

**Common mistake.** Writing the transistor term as $4kT\gamma g_m$ (the drain *current* PSD), or attaching a degeneration factor to it. Channel noise and signal currents are reduced by the same factor $1 + g_mR_S$, so the input-referred transistor noise stays $4kT\gamma/g_m$.
