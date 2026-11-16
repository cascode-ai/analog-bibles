# Detailed solution - R356

**Approach.** Put all three thermal noise sources into the small-signal circuit at once: the channel noise of $M_1$, the noise of $R_S$ (as a series voltage) and the noise of $R_D$. Solve for the drain current and the output voltage, and read off the input-referred noise by dividing by the voltage gain. With $\lambda = 0$ and no body effect, the transistor current depends only on $v_{GS}$, which makes the algebra short.

### Step 1 — Small-signal model with the noise sources

**Nodes:** the input (gate), the source node S, and the output (drain).

- **$M_1$**: drain-to-source current $g_m(v_{in} - v_S)$, with its channel noise $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_m$) in parallel. No $r_O$ ($\lambda = 0$) and no $g_{mb}$.
- **$R_S$**: from S to ground, modelled as the resistor in series with its Thevenin noise voltage $V_{nS}$ ($\overline{V_{nS}^2} = 4kTR_S$).
- **$R_D$**: from the output to $V_{DD}$ (ac ground), with its Norton noise current $I_{nD}$ ($\overline{I_{nD}^2} = 4kT/R_D$), taken as flowing from $V_{DD}$ into the output.

Here $k$ is Boltzmann's constant, $T$ the absolute temperature and $\gamma$ the channel-noise coefficient. The three sources are uncorrelated.

<!-- diagram: diagram-01.cir -->

### Step 2 — Drain current with all sources present

Let $i_d$ be the total current through $M_1$ from drain to source (signal plus noise):

$$i_d = g_m(v_{in} - v_S) + I_{n1}.$$

All of $i_d$ flows down through $R_S$ (no gate current), so KVL from S to ground gives

$$v_S = i_dR_S + V_{nS}.$$

Substitute $v_S$ into the device equation and solve for $i_d$:

$$
\begin{aligned}
i_d &= g_m\left(v_{in} - i_dR_S - V_{nS}\right) + I_{n1}\\
i_d(1 + g_mR_S) &= g_m(v_{in} - V_{nS}) + I_{n1}\\
i_d &= \frac{g_m}{1 + g_mR_S}\left(v_{in} - V_{nS} + \frac{I_{n1}}{g_m}\right).
\end{aligned}
$$

The last form is the key result: **$V_{nS}$ and $I_{n1}/g_m$ enter in exactly the same place as $v_{in}$**. They pass through the same degenerated transconductance $G_m = g_m/(1 + g_mR_S)$ as the signal.

### Step 3 — Output voltage and gain

With $\lambda = 0$, the drain of $M_1$ is an ideal current source, so the $R_D$ branch carries exactly $i_d$. KCL at the output: $(0 - v_{out})/R_D + I_{nD} = i_d$, so

$$v_{out} = -R_Di_d + R_DI_{nD} = -\frac{g_mR_D}{1 + g_mR_S}\left(v_{in} - V_{nS} + \frac{I_{n1}}{g_m}\right) + R_DI_{nD}.$$

The voltage gain (noise off) is

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{g_mR_D}{1 + g_mR_S}.$$

### Step 4 — Input-referred noise

Divide the output by $A_v$ to get the equivalent input voltage:

$$
\begin{aligned}
\frac{v_{out}}{A_v} &= v_{in} - V_{nS} + \frac{I_{n1}}{g_m} + \frac{R_DI_{nD}}{-g_mR_D/(1 + g_mR_S)}\\
&= v_{in} + \underbrace{\left[-V_{nS} + \frac{I_{n1}}{g_m} - \frac{1 + g_mR_S}{g_m}I_{nD}\right]}_{v_{n,in}} .
\end{aligned}
$$

Square each term and add (uncorrelated sources):

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \overline{V_{nS}^2} + \frac{\overline{I_{n1}^2}}{g_m^2} + \frac{(1 + g_mR_S)^2}{g_m^2}\overline{I_{nD}^2}\\
&= 4kTR_S + \frac{4kT\gamma g_m}{g_m^2} + \frac{(1 + g_mR_S)^2}{g_m^2}\cdot\frac{4kT}{R_D}\\
&= 4kT\left[\frac{\gamma}{g_m} + R_S + \frac{(1 + g_mR_S)^2}{g_m^2R_D}\right].
\end{aligned}
$$

### Step 5 — Meaning of each term

- **$M_1$: $4kT\gamma/g_m$.** A noise current in parallel with the channel is equivalent to a gate voltage $I_{n1}/g_m$, because the device current is $g_m(v_{gs} + I_{n1}/g_m)$. Degeneration reduces the noise current at the drain by $1 + g_mR_S$, but it reduces the signal current by the same factor, so the input-referred value is unchanged.
- **$R_S$: $4kTR_S$.** Its noise voltage sits in series with the source, inside the input loop. The transistor responds only to $v_{GS}$, so $V_{nS}$ is indistinguishable from an input voltage and is referred one-to-one.
- **$R_D$: $4kT(1 + g_mR_S)^2/(g_m^2R_D)$.** Its noise appears directly at the output as $4kTR_D$. Referring it back divides by the *degenerated* gain squared, which is smaller than $(g_mR_D)^2$ by $(1 + g_mR_S)^2$.

**Check:** for $R_S = 0$ the result reduces to the plain common-source value $4kT\left[\gamma/g_m + 1/(g_m^2R_D)\right]$. Degeneration improves linearity but always adds noise: the $R_S$ term itself, and a larger $R_D$ term.

### Result

$$\overline{V_{n,in}^2} = 4kT\left[\frac{\gamma}{g_m} + R_S + \frac{(1+g_mR_S)^2}{g_m^2R_D}\right]$$

The three terms come from $M_1$ (gate-referred, independent of $R_S$), from $R_S$ (its series noise voltage acts like an input voltage), and from $R_D$ (output noise $4kTR_D$ divided by the squared gain $[g_mR_D/(1+g_mR_S)]^2$).

**Common mistake.** Dividing the $R_S$ noise by the gain. $V_{nS}$ is not at the output; it is in the input loop, in series with the source, and it changes $v_{GS}$ exactly as $v_{in}$ does. It is referred to the input as $4kTR_S$.

**Common mistake.** Dividing the transistor term by $(1 + g_mR_S)^2$, on the grounds that degeneration "suppresses" the channel noise at the drain. The noise current at the drain is indeed reduced by $1 + g_mR_S$, but so is the gain, and the input-referred value stays $4kT\gamma/g_m$.

**Common mistake.** Leaving out the factor $(1 + g_mR_S)^2$ on the $R_D$ term, i.e. referring the load noise with the undegenerated gain $g_mR_D$. The actual gain is $g_mR_D/(1 + g_mR_S)$. Writing the transistor term as $4kT\gamma g_m$ (a current PSD, not a voltage) is another frequent slip.
