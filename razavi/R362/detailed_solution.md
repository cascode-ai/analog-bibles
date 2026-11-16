# Detailed solution - R362

**Approach.** With $\lambda = 0$ both $M_1$ and the degenerated load have infinite output resistance, so the voltage gain is infinite; compare **output short-circuit currents** instead, since signal and noise currents flow into the same output impedance. The signal current is $g_{m1}v_{in}$; the load's noise current follows from analysing $M_2$ with its degeneration resistor, and dividing the noise currents by $g_{m1}$ refers them to the input.

### Step 1 — Small-signal model with the output shorted

Call S2 the source of $M_2$.

- **$M_1$:** draws $g_{m1}v_{in} + I_{n1}$ from the output, with $\overline{I_{n1}^2} = 4kT\gamma g_{m1}$.
- **$M_2$** (gate at ac ground): its source-to-drain current is $g_{m2}v_{sg2} + I_{n2} = g_{m2}(v_{s2} - 0) + I_{n2}$, with $\overline{I_{n2}^2} = 4kT\gamma g_{m2}$.
- **$R_S$:** from ac ground ($V_{DD}$) to S2, in series with its noise voltage $V_{nS}$ ($\overline{V_{nS}^2} = 4kTR_S$).

The three sources are uncorrelated.

<!-- diagram: diagram-01.cir -->

### Step 2 — Signal transconductance

$M_2$'s gate is at a fixed bias, so it carries no signal current, and the short-circuit output current due to the input is $M_1$'s alone:

$$G_m = g_{m1}.$$

### Step 3 — Noise current delivered by the degenerated load

Let $i_2$ be the total current through $M_2$ from S2 into the output. At S2, the current arriving through $R_S$ leaves through $M_2$:

$$\frac{V_{nS} - v_{s2}}{R_S} = g_{m2}v_{s2} + I_{n2},$$

$$
\begin{aligned}
V_{nS} - v_{s2} &= g_{m2}R_Sv_{s2} + R_SI_{n2}\\
v_{s2}(1 + g_{m2}R_S) &= V_{nS} - R_SI_{n2}\\
v_{s2} &= \frac{V_{nS} - R_SI_{n2}}{1 + g_{m2}R_S}.
\end{aligned}
$$

Then

$$
\begin{aligned}
i_2 &= g_{m2}v_{s2} + I_{n2} = \frac{g_{m2}V_{nS} - g_{m2}R_SI_{n2}}{1 + g_{m2}R_S} + I_{n2}\\
&= \frac{g_{m2}V_{nS} - g_{m2}R_SI_{n2} + I_{n2}(1 + g_{m2}R_S)}{1 + g_{m2}R_S}\\
&= \frac{g_{m2}V_{nS} + I_{n2}}{1 + g_{m2}R_S}.
\end{aligned}
$$

With $I_{n2} = g_{m2}V_{n2}$, where $\overline{V_{n2}^2} = 4kT\gamma/g_{m2}$ is $M_2$'s gate-referred noise,

$$i_2 = \frac{g_{m2}}{1 + g_{m2}R_S}\left(V_{nS} + V_{n2}\right):$$

both voltages sit in $M_2$'s gate–source loop and reach the output through the **degenerated transconductance** $g_{m2}/(1 + g_{m2}R_S)$. The PSD is

$$
\begin{aligned}
\overline{i_2^2} &= \frac{g_{m2}^2\overline{V_{nS}^2} + \overline{I_{n2}^2}}{(1 + g_{m2}R_S)^2} = \frac{g_{m2}^2\cdot4kTR_S + 4kT\gamma g_{m2}}{(1 + g_{m2}R_S)^2}\\
&= \frac{4kT\left(\gamma g_{m2} + g_{m2}^2R_S\right)}{(1 + g_{m2}R_S)^2}.
\end{aligned}
$$

### Step 4 — Input-referred noise voltage

The noise short-circuit current is $I_{n1} + i_2$, compared with the signal current $g_{m1}v_{in}$:

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{\overline{I_{n1}^2} + \overline{i_2^2}}{g_{m1}^2}\\
&= \frac{4kT\gamma g_{m1}}{g_{m1}^2} + \frac{4kT\left(\gamma g_{m2} + g_{m2}^2R_S\right)}{g_{m1}^2(1 + g_{m2}R_S)^2}\\
&= \frac{4kT\gamma}{g_{m1}} + \frac{4kT\left(\gamma g_{m2} + g_{m2}^2R_S\right)}{g_{m1}^2(1 + g_{m2}R_S)^2}.
\end{aligned}
$$

### Step 5 — Checks and design insight

- **$R_S = 0$:** the load term becomes $4kT\gamma g_{m2}/g_{m1}^2$, the standard current-source-load result $4kT\gamma\left(1/g_{m1} + g_{m2}/g_{m1}^2\right)$.
- **$g_{m2}R_S \gg 1$:**
$$\overline{i_2^2} \approx \frac{4kT\gamma g_{m2}}{g_{m2}^2R_S^2} + \frac{4kTg_{m2}^2R_S}{g_{m2}^2R_S^2} = \frac{4kT\gamma}{g_{m2}R_S^2} + \frac{4kT}{R_S} \approx \frac{4kT}{R_S},$$
so the load term becomes $4kT/(g_{m1}^2R_S)$: a heavily degenerated current source is about as noisy as $R_S$ alone.
- **Design insight:** degeneration lowers the load noise whenever $4kT/R_S < 4kT\gamma g_{m2}$, i.e. $R_S > 1/(\gamma g_{m2})$, which is why low-noise designs often degenerate their current-source loads.

### Result

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{4kT\left(\gamma g_{m2} + g_{m2}^2R_S\right)}{g_{m1}^2(1 + g_{m2}R_S)^2}$$

The output short-circuit current method is used because the output resistance is infinite with $\lambda = 0$; the transconductance from the input is $g_{m1}$. $M_2$'s gate-referred noise ($4kT\gamma/g_{m2}$) and $R_S$'s noise ($4kTR_S$) both reach the output through the degenerated transconductance $g_{m2}/(1 + g_{m2}R_S)$.

**Common mistake.** Ignoring the degeneration and using the load noise $4kT\gamma g_{m2}$. $R_S$ reduces $M_2$'s noise current at the drain by $1 + g_{m2}R_S$.

**Common mistake.** Claiming that the noise of $R_S$ does not reach the output, or writing it as $4kT/R_S$ for any $R_S$. It reaches the drain through $g_{m2}/(1 + g_{m2}R_S)$, giving $4kTg_{m2}^2R_S/(1 + g_{m2}R_S)^2$, which tends to $4kT/R_S$ only for $g_{m2}R_S \gg 1$.

**Common mistake.** Dividing by a finite voltage gain that depends on $R_S$. The degenerated $M_2$ is an ideal current source for the signal, so $R_S$ only affects how much noise the load injects.
