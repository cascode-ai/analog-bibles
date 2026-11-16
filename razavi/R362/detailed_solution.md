# Detailed solution - R362

**Approach.** With $\lambda = 0$ both the input device and the degenerated current-source load have infinite output resistance, so the voltage gain is infinite. As usual in that case, we compare **output short-circuit currents**: the signal and every noise source deliver currents into the same output node, which then flow into the same output impedance. The signal current is $g_{m1}v_{in}$. The load's noise current is found by analysing $M_2$ with its degeneration resistor $R_S$. Dividing the noise currents by $g_{m1}$ refers them to the input.

### Step 1 — Small-signal model with the output shorted

**Nodes:** the input, the output (shorted to ac ground for this calculation), and node S2 (source of $M_2$, bottom of $R_S$).

- **$M_1$** (source grounded): draws $g_{m1}v_{in} + I_{n1}$ from the output, with $\overline{I_{n1}^2} = 4kT\gamma g_{m1}$.
- **$M_2$** (PMOS, gate at $V_b$ = ac ground, source at S2, drain at the output): its source-to-drain current is $g_{m2}v_{sg2} + I_{n2} = g_{m2}(v_{s2} - 0) + I_{n2}$, with $\overline{I_{n2}^2} = 4kT\gamma g_{m2}$.
- **$R_S$**: from $V_{DD}$ (ac ground) to S2, in series with its noise voltage $V_{nS}$ ($\overline{V_{nS}^2} = 4kTR_S$).

Here $k$ is Boltzmann's constant, $T$ the absolute temperature and $\gamma$ the channel-noise coefficient. The three sources are uncorrelated.

<!-- diagram: diagram-01.cir -->

### Step 2 — Signal transconductance

$M_2$'s gate is at a fixed bias, so it carries no signal current. The short-circuit output current due to the input is just $M_1$'s:

$$G_m = g_{m1}.$$

### Step 3 — Noise current delivered by the degenerated load

Let $i_2$ be the total current through $M_2$ from S2 into the output.

**KCL at S2.** The current arriving through $R_S$ (with its noise voltage) equals the current leaving through $M_2$:

$$\frac{V_{nS} - v_{s2}}{R_S} = g_{m2}v_{s2} + I_{n2}.$$

Solve for $v_{s2}$:

$$
\begin{aligned}
V_{nS} - v_{s2} &= g_{m2}R_Sv_{s2} + R_SI_{n2}\\
v_{s2}(1 + g_{m2}R_S) &= V_{nS} - R_SI_{n2}\\
v_{s2} &= \frac{V_{nS} - R_SI_{n2}}{1 + g_{m2}R_S}.
\end{aligned}
$$

**Current into the output:**

$$
\begin{aligned}
i_2 &= g_{m2}v_{s2} + I_{n2} = \frac{g_{m2}V_{nS} - g_{m2}R_SI_{n2}}{1 + g_{m2}R_S} + I_{n2}\\
&= \frac{g_{m2}V_{nS} - g_{m2}R_SI_{n2} + I_{n2}(1 + g_{m2}R_S)}{1 + g_{m2}R_S}\\
&= \frac{g_{m2}V_{nS} + I_{n2}}{1 + g_{m2}R_S}.
\end{aligned}
$$

**Interpretation.** Write $I_{n2} = g_{m2}V_{n2}$, with $V_{n2}$ the gate-referred noise of $M_2$ ($\overline{V_{n2}^2} = 4kT\gamma/g_{m2}$). Then

$$i_2 = \frac{g_{m2}}{1 + g_{m2}R_S}\left(V_{nS} + V_{n2}\right).$$

Both $M_2$'s gate-referred noise and the noise voltage of $R_S$ sit in the gate–source loop of $M_2$. They reach the output through the **degenerated transconductance** $g_{m2}/(1 + g_{m2}R_S)$.

The PSD of the load noise current:

$$
\begin{aligned}
\overline{i_2^2} &= \frac{g_{m2}^2\overline{V_{nS}^2} + \overline{I_{n2}^2}}{(1 + g_{m2}R_S)^2} = \frac{g_{m2}^2\cdot4kTR_S + 4kT\gamma g_{m2}}{(1 + g_{m2}R_S)^2}\\
&= \frac{4kT\left(\gamma g_{m2} + g_{m2}^2R_S\right)}{(1 + g_{m2}R_S)^2}.
\end{aligned}
$$

### Step 4 — Input-referred noise voltage

The total noise short-circuit current at the output is $I_{n1}$ (from $M_1$) plus $i_2$ (from the load). Both are compared with the signal current $g_{m1}v_{in}$:

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{\overline{I_{n1}^2} + \overline{i_2^2}}{g_{m1}^2}\\
&= \frac{4kT\gamma g_{m1}}{g_{m1}^2} + \frac{4kT\left(\gamma g_{m2} + g_{m2}^2R_S\right)}{g_{m1}^2(1 + g_{m2}R_S)^2}\\
&= \frac{4kT\gamma}{g_{m1}} + \frac{4kT\left(\gamma g_{m2} + g_{m2}^2R_S\right)}{g_{m1}^2(1 + g_{m2}R_S)^2}.
\end{aligned}
$$

### Step 5 — Checks and design insight

- **$R_S = 0$:** the load term becomes $4kT\gamma g_{m2}/g_{m1}^2$, so $\overline{V_{n,in}^2} = 4kT\gamma\left(1/g_{m1} + g_{m2}/g_{m1}^2\right)$, the standard current-source-load result.
- **Large degeneration, $g_{m2}R_S \gg 1$:** the load noise current tends to
$$\overline{i_2^2} \approx \frac{4kT\gamma g_{m2}}{g_{m2}^2R_S^2} + \frac{4kTg_{m2}^2R_S}{g_{m2}^2R_S^2} = \frac{4kT\gamma}{g_{m2}R_S^2} + \frac{4kT}{R_S} \approx \frac{4kT}{R_S},$$
and the load term becomes $4kT/(g_{m1}^2R_S)$. A heavily degenerated current source is about as noisy as the resistor $R_S$ alone.
- **Design insight:** degeneration lowers the load noise whenever $4kT/R_S < 4kT\gamma g_{m2}$, i.e. $R_S > 1/(\gamma g_{m2})$. For a given current and headroom, a degenerated current source is quieter than a plain one; this is why low-noise designs often degenerate their current-source loads.

### Result

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{4kT\left(\gamma g_{m2} + g_{m2}^2R_S\right)}{g_{m1}^2(1 + g_{m2}R_S)^2}$$

The output short-circuit current method is used because the output resistance is infinite with $\lambda = 0$; the transconductance from the input is $g_{m1}$. $M_2$'s gate-referred noise ($4kT\gamma/g_{m2}$) and $R_S$'s noise ($4kTR_S$) both reach the output through the degenerated transconductance $g_{m2}/(1 + g_{m2}R_S)$.

**Common mistake.** Ignoring the degeneration and using the load noise $4kT\gamma g_{m2}$. The resistor $R_S$ provides local feedback that reduces $M_2$'s noise current at the drain by $1 + g_{m2}R_S$.

**Common mistake.** Claiming that the noise of $R_S$ does not reach the output, or writing its contribution as $4kT/R_S$ for any $R_S$. Its noise voltage modulates the source of $M_2$ and reaches the drain through $g_{m2}/(1 + g_{m2}R_S)$; the result $4kTg_{m2}^2R_S/(1 + g_{m2}R_S)^2$ tends to $4kT/R_S$ only for $g_{m2}R_S \gg 1$.

**Common mistake.** Dividing by a finite voltage gain that depends on $R_S$, or treating $M_2$ as noiseless. With $\lambda = 0$, the degenerated $M_2$ is an ideal current source for the signal, so $R_S$ does not enter the signal path at all; it only affects how much noise the load injects.
