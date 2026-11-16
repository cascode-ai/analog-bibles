# Detailed solution - R356

**Approach.** Put all three thermal noise sources ($M_1$, $R_S$ as a series voltage, $R_D$) into the small-signal circuit at once, solve for the drain current and the output voltage, and divide by the voltage gain. With $\lambda = 0$ and no body effect, the transistor current depends only on $v_{GS}$, which keeps the algebra short.

### Step 1 — Small-signal model with the noise sources

- **$M_1$:** a drain-to-source current $g_m(v_{in} - v_S)$, with its channel noise $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_m$) in parallel; no $r_O$ and no $g_{mb}$.
- **$R_S$:** from the source node S to ground, in series with its Thevenin noise voltage $V_{nS}$ ($\overline{V_{nS}^2} = 4kTR_S$).
- **$R_D$:** from the output to ac ground, with its Norton noise $I_{nD}$ ($\overline{I_{nD}^2} = 4kT/R_D$) flowing from $V_{DD}$ into the output.

The three sources are uncorrelated.

<!-- diagram: diagram-01.cir -->

### Step 2 — Drain current with all sources present

The total current through $M_1$ is

$$i_d = g_m(v_{in} - v_S) + I_{n1},$$

and all of it flows down through $R_S$, so

$$v_S = i_dR_S + V_{nS}.$$

Substituting and solving for $i_d$:

$$
\begin{aligned}
i_d &= g_m\left(v_{in} - i_dR_S - V_{nS}\right) + I_{n1}\\
i_d(1 + g_mR_S) &= g_m(v_{in} - V_{nS}) + I_{n1}\\
i_d &= \frac{g_m}{1 + g_mR_S}\left(v_{in} - V_{nS} + \frac{I_{n1}}{g_m}\right).
\end{aligned}
$$

So **$V_{nS}$ and $I_{n1}/g_m$ enter exactly where $v_{in}$ does**, through the same degenerated transconductance $G_m = g_m/(1 + g_mR_S)$.

### Step 3 — Output voltage and gain

With $\lambda = 0$ the drain is an ideal current source, so the $R_D$ branch carries exactly $i_d$: $(0 - v_{out})/R_D + I_{nD} = i_d$, and

$$v_{out} = -R_Di_d + R_DI_{nD} = -\frac{g_mR_D}{1 + g_mR_S}\left(v_{in} - V_{nS} + \frac{I_{n1}}{g_m}\right) + R_DI_{nD}.$$

The voltage gain is

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{g_mR_D}{1 + g_mR_S}.$$

### Step 4 — Input-referred noise

Dividing the output by $A_v$:

$$
\begin{aligned}
\frac{v_{out}}{A_v} &= v_{in} - V_{nS} + \frac{I_{n1}}{g_m} + \frac{R_DI_{nD}}{-g_mR_D/(1 + g_mR_S)}\\
&= v_{in} + \underbrace{\left[-V_{nS} + \frac{I_{n1}}{g_m} - \frac{1 + g_mR_S}{g_m}I_{nD}\right]}_{v_{n,in}} .
\end{aligned}
$$

Squaring each term and adding (uncorrelated sources):

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \overline{V_{nS}^2} + \frac{\overline{I_{n1}^2}}{g_m^2} + \frac{(1 + g_mR_S)^2}{g_m^2}\overline{I_{nD}^2}\\
&= 4kTR_S + \frac{4kT\gamma g_m}{g_m^2} + \frac{(1 + g_mR_S)^2}{g_m^2}\cdot\frac{4kT}{R_D}\\
&= 4kT\left[\frac{\gamma}{g_m} + R_S + \frac{(1 + g_mR_S)^2}{g_m^2R_D}\right].
\end{aligned}
$$

### Step 5 — Meaning of each term

- **$M_1$, $4kT\gamma/g_m$:** degeneration reduces the drain noise current by $1 + g_mR_S$, but the signal current by the same factor, so the input-referred value is unchanged.
- **$R_S$, $4kTR_S$:** its noise voltage lies in the input loop and changes $v_{GS}$ exactly as $v_{in}$ does, so it is referred one-to-one.
- **$R_D$, $4kT(1 + g_mR_S)^2/(g_m^2R_D)$:** its output noise $4kTR_D$ is divided by the *degenerated* gain squared, smaller than $(g_mR_D)^2$ by $(1 + g_mR_S)^2$.

For $R_S = 0$ the result reduces to the plain common-source value $4kT\left[\gamma/g_m + 1/(g_m^2R_D)\right]$; degeneration improves linearity but adds noise.

### Result

$$\overline{V_{n,in}^2} = 4kT\left[\frac{\gamma}{g_m} + R_S + \frac{(1+g_mR_S)^2}{g_m^2R_D}\right]$$

The three terms come from $M_1$ (gate-referred, independent of $R_S$), from $R_S$ (its series noise voltage acts like an input voltage), and from $R_D$ (output noise $4kTR_D$ divided by the squared gain $[g_mR_D/(1+g_mR_S)]^2$).

**Common mistake.** Dividing the $R_S$ noise by the gain. $V_{nS}$ is in the input loop, not at the output, and changes $v_{GS}$ exactly as $v_{in}$ does, so it is referred as $4kTR_S$.

**Common mistake.** Dividing the transistor term by $(1 + g_mR_S)^2$ because degeneration "suppresses" the channel noise at the drain. The gain is reduced by the same factor, so the input-referred value stays $4kT\gamma/g_m$.

**Common mistake.** Referring the $R_D$ noise with the undegenerated gain $g_mR_D$, which drops the factor $(1 + g_mR_S)^2$; or writing the transistor term as $4kT\gamma g_m$, a current PSD rather than a voltage.
