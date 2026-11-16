# Detailed solution - R335

**Approach.** The ideal current source $I_1$ forces the total ac current leaving the output node to zero, so **no ac current flows in $R_S$**. This fixes the source voltage, after which one KCL equation at the output gives $v_{out}$ as the sum of the signal and the three noise terms; dividing by the gain refers each to the input.

### Step 1 — Small-signal model and noise sources

$I_1$ is an ac open circuit. With $\lambda = 0$ and no body effect, $M_1$ is a current source $g_m(v_{in} - v_S)$ from the output to the source node S, in parallel with $R_F$. The uncorrelated noise sources are:

- $I_{n1}$: channel noise of $M_1$, from drain to source, $\overline{I_{n1}^2} = 4kT\gamma g_m$;
- $I_{nF}$: Norton noise current of $R_F$, in parallel with $R_F$ (output to S), $\overline{I_{nF}^2} = 4kT/R_F$;
- $V_{nS}$: Thevenin noise voltage of $R_S$, in series with $R_S$, $\overline{V_{nS}^2} = 4kTR_S$.

<!-- diagram: diagram-01.cir -->

### Step 2 — No ac current flows in $R_S$

Apart from $I_1$, which carries no ac current, the output node connects only to the transistor branch and the $R_F$ branch, both leading to S. So by KCL these two branches together carry zero net ac current into S, and since $R_S$ is the only other path from S,

$$i_{R_S} = 0 .$$

There is then no ac drop across $R_S$ itself, and the source voltage is just the noise voltage of $R_S$:

$$v_S = V_{nS} + i_{R_S}R_S = V_{nS}.$$

For the signal alone, **node S is at ac ground**, so $R_S$ does not affect the gain.

### Step 3 — KCL at the output node

The currents leaving the output through the transistor and $R_F$ branches sum to zero:

$$g_m(v_{in} - v_S) + I_{n1} + \frac{v_{out} - v_S}{R_F} + I_{nF} = 0 .$$

Multiplying by $R_F$ and solving for $v_{out}$:

$$
\begin{aligned}
v_{out} - v_S &= -g_mR_F(v_{in} - v_S) - R_F(I_{n1} + I_{nF})\\
v_{out} &= -g_mR_F\,v_{in} + (1 + g_mR_F)\,v_S - R_F(I_{n1} + I_{nF}).
\end{aligned}
$$

With $v_S = V_{nS}$ from Step 2:

$$v_{out} = -g_mR_F\,v_{in} + (1 + g_mR_F)\,V_{nS} - R_F\,(I_{n1} + I_{nF}).$$

### Step 4 — Signal gain and the meaning of each term

With all noise off,

$$A_v = \frac{v_{out}}{v_{in}} = -g_mR_F :$$

$I_1$ cannot absorb the current $g_mv_{in}$, so it returns through $R_F$.

- **$R_S$:** $V_{nS}$ raises the source, so $M_1$ conducts $g_mV_{nS}$ less; that current must flow through $R_F$ instead, raising $v_{out} - v_S$ by $g_mR_FV_{nS}$. With the source rise itself, $v_{out} = (1 + g_mR_F)V_{nS}$.
- **$M_1$ and $R_F$:** both are currents between the output and S that must return through $R_F$, giving $-R_F(I_{n1} + I_{nF})$.

### Step 5 — Referring each term to the input

Dividing the output expression by $A_v = -g_mR_F$:

$$
\begin{aligned}
v_{n,in} &= \frac{(1 + g_mR_F)V_{nS} - R_F(I_{n1} + I_{nF})}{-g_mR_F}\\
&= -\frac{1 + g_mR_F}{g_mR_F}\,V_{nS} + \frac{I_{n1}}{g_m} + \frac{I_{nF}}{g_m}.
\end{aligned}
$$

The sources are uncorrelated, so the squared coefficients multiply the individual powers:

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \left(\frac{1 + g_mR_F}{g_mR_F}\right)^2\overline{V_{nS}^2} + \frac{\overline{I_{n1}^2}}{g_m^2} + \frac{\overline{I_{nF}^2}}{g_m^2}\\
&= 4kTR_S\left(\frac{1 + g_mR_F}{g_mR_F}\right)^2 + \frac{4kT\gamma g_m}{g_m^2} + \frac{4kT/R_F}{g_m^2}\\
&= \frac{4kT\gamma}{g_m} + \frac{4kT}{g_m^2R_F} + 4kTR_S\left(\frac{1 + g_mR_F}{g_mR_F}\right)^2 .
\end{aligned}
$$

### Step 6 — Checks

- **$R_S = 0$:** a common-source stage with load $R_F$, and the result reduces to $4kT\gamma/g_m + 4kT/(g_m^2R_F)$.
- **$g_mR_F \gg 1$:** $\left(\frac{1 + g_mR_F}{g_mR_F}\right)^2 \to 1$, so $R_S$ contributes about $4kTR_S$, like a degeneration resistor; for moderate $g_mR_F$ its noise is magnified by $(1 + 1/(g_mR_F))^2$.
- **Dimensions:** every term is $4kT$ times a resistance ($\gamma/g_m$, $1/(g_m^2R_F)$, $R_S$), so the result is in V²/Hz.

$R_S$ is absent from the gain (it carries no ac current), yet it adds noise, because its noise *voltage* moves the source node.

### Result

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_m} + \frac{4kT}{g_m^2R_F} + 4kTR_S\left(\frac{1 + g_mR_F}{g_mR_F}\right)^2$$

with signal gain $A_v = -g_mR_F$. Because $I_1$ is ideal, no ac current flows in $R_S$, so the source voltage is the noise voltage of $R_S$ alone; that noise reaches the output amplified by $(1 + g_mR_F)$.

**Common mistake.** Treating the circuit as a degenerated common-source stage with gain $g_mR_F/(1 + g_mR_S)$, as if $R_F$ were a drain load to $V_{DD}$. $R_F$ connects the drain to the *source*, and $I_1$ lets no ac current leave the drain–source pair, so the gain is simply $-g_mR_F$.

**Common mistake.** Referring the noise of $R_S$ as just $4kTR_S$. Its noise voltage reaches the output both through the transistor ($g_mR_F$) and directly through $R_F$ (the "1" in $1 + g_mR_F$), giving the factor $\left[(1 + g_mR_F)/(g_mR_F)\right]^2$.

**Common mistake.** Treating $R_F$ as a load from the output to ground. Its noise current, like that of $M_1$, flows between the output and S and closes through $R_F$, so it refers to the input as $I_{nF}/g_m$, giving $4kT/(g_m^2R_F)$.
