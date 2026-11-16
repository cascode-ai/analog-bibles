# Detailed solution - R335

**Approach.** Write the small-signal equations of the circuit with all three noise sources present ($M_1$, $R_F$, $R_S$). The key observation is that the ideal current source $I_1$ forces the total ac current leaving the output node to be zero, so **no ac current flows in $R_S$**. This fixes the source voltage, after which a single KCL equation at the output gives $v_{out}$ as a sum of the signal and the three noise terms. Dividing each noise term by the signal gain refers it to the input.

### Step 1 — Reading the circuit and the small-signal model

- $M_1$: gate at $v_{in}$, drain at the output node, source at node S.
- $I_1$: an ideal, noiseless current source from $V_{DD}$ into the output. For ac signals it is an **open circuit** (infinite impedance, no ac current).
- $R_F$: from the output to node S, i.e. in parallel with the drain–source path of $M_1$.
- $R_S$: from node S to ground.

With $\lambda = 0$ and no body effect, the transistor is a current source $g_m(v_{in} - v_S)$ from the output to S.

**Noise sources** (all uncorrelated):

- $I_{n1}$: channel noise of $M_1$, from drain to source, $\overline{I_{n1}^2} = 4kT\gamma g_m$;
- $I_{nF}$: Norton noise current of $R_F$, in parallel with $R_F$ (output to S), $\overline{I_{nF}^2} = 4kT/R_F$;
- $V_{nS}$: Thevenin noise voltage of $R_S$, in series with $R_S$, $\overline{V_{nS}^2} = 4kTR_S$.

Here $k$ is Boltzmann's constant, $T$ the absolute temperature and $\gamma$ the channel-noise coefficient.

<!-- diagram: diagram-01.cir -->

### Step 2 — No ac current flows in $R_S$

Consider the output node. Its only connections are $I_1$ (no ac current), the transistor branch and the $R_F$ branch, both of which lead to node S. KCL at the output therefore says that the transistor branch and the $R_F$ branch together carry **zero** net ac current from the output to S.

Now apply KCL to node S. The only current arriving at S comes through those two branches, and it is zero. The only path away from S is $R_S$, so the ac current in $R_S$ is zero too:

$$i_{R_S} = 0 .$$

Consequently there is no ac drop across the resistor $R_S$ itself, and the source voltage equals just the noise voltage of $R_S$ (KVL from S through $V_{nS}$ and $R_S$ to ground):

$$v_S = V_{nS} + i_{R_S}R_S = V_{nS}.$$

For the signal alone ($V_{nS} = 0$), **node S is at ac ground**: $R_S$ only sets the dc bias and has no effect on the gain.

### Step 3 — KCL at the output node

The currents leaving the output node through the transistor branch and the $R_F$ branch sum to zero:

$$g_m(v_{in} - v_S) + I_{n1} + \frac{v_{out} - v_S}{R_F} + I_{nF} = 0 .$$

Multiply by $R_F$ and solve for $v_{out}$:

$$
\begin{aligned}
v_{out} - v_S &= -g_mR_F(v_{in} - v_S) - R_F(I_{n1} + I_{nF})\\
v_{out} &= -g_mR_F\,v_{in} + g_mR_F\,v_S + v_S - R_F(I_{n1} + I_{nF})\\
v_{out} &= -g_mR_F\,v_{in} + (1 + g_mR_F)\,v_S - R_F(I_{n1} + I_{nF}).
\end{aligned}
$$

Substitute $v_S = V_{nS}$ from Step 2:

$$v_{out} = -g_mR_F\,v_{in} + (1 + g_mR_F)\,V_{nS} - R_F\,(I_{n1} + I_{nF}).$$

### Step 4 — Signal gain and the meaning of each term

**Signal gain** (all noise off):

$$A_v = \frac{v_{out}}{v_{in}} = -g_mR_F .$$

$M_1$ converts $v_{in}$ to a current $g_mv_{in}$. Since $I_1$ cannot absorb it, the current has to return through $R_F$, which produces $v_{out} = -g_mR_Fv_{in}$.

**Noise of $R_S$.** $V_{nS}$ raises the source. This lowers $v_{gs}$, so $M_1$ conducts $g_mV_{nS}$ *less*. That current must now flow through $R_F$ (the total is fixed at zero), which raises $v_{out} - v_S$ by $g_mR_FV_{nS}$. Adding the source rise itself gives $v_{out} = (1 + g_mR_F)V_{nS}$. In words, the source noise is amplified both through the transistor and directly through $R_F$.

**Noise of $M_1$ and $R_F$.** Both are currents between the output and S. They must return through $R_F$, giving $-R_F(I_{n1} + I_{nF})$ at the output.

### Step 5 — Referring each term to the input

Divide the output expression by $A_v = -g_mR_F$. The equivalent input noise voltage is

$$
\begin{aligned}
v_{n,in} &= \frac{(1 + g_mR_F)V_{nS} - R_F(I_{n1} + I_{nF})}{-g_mR_F}\\
&= -\frac{1 + g_mR_F}{g_mR_F}\,V_{nS} + \frac{I_{n1}}{g_m} + \frac{I_{nF}}{g_m}.
\end{aligned}
$$

The three sources are uncorrelated, so we square each coefficient and add the powers:

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \left(\frac{1 + g_mR_F}{g_mR_F}\right)^2\overline{V_{nS}^2} + \frac{\overline{I_{n1}^2}}{g_m^2} + \frac{\overline{I_{nF}^2}}{g_m^2}\\
&= 4kTR_S\left(\frac{1 + g_mR_F}{g_mR_F}\right)^2 + \frac{4kT\gamma g_m}{g_m^2} + \frac{4kT/R_F}{g_m^2}\\
&= \frac{4kT\gamma}{g_m} + \frac{4kT}{g_m^2R_F} + 4kTR_S\left(\frac{1 + g_mR_F}{g_mR_F}\right)^2 .
\end{aligned}
$$

### Step 6 — Checks and interpretation

- **$R_S = 0$:** the source is grounded, and the circuit becomes a common-source stage with $R_F$ as its load. The result reduces to $4kT\gamma/g_m + 4kT/(g_m^2R_F)$, the familiar CS result.
- **$g_mR_F \gg 1$:** the $R_S$ factor $\left(\frac{1 + g_mR_F}{g_mR_F}\right)^2 \to 1$, so $R_S$ contributes about $4kTR_S$, just as a degeneration resistor would. When $g_mR_F$ is not large, its noise is magnified further, by the factor $(1 + 1/(g_mR_F))^2$.
- **Dimensions:** every term is $4kT$ times a resistance ($\gamma/g_m$, $1/(g_m^2R_F)$, $R_S$), so the result is in V²/Hz.

Notice the asymmetry: $R_S$ does not appear in the gain at all (no ac current flows in it), yet it still adds noise, because its noise *voltage* moves the source node.

### Result

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_m} + \frac{4kT}{g_m^2R_F} + 4kTR_S\left(\frac{1 + g_mR_F}{g_mR_F}\right)^2$$

with signal gain $A_v = -g_mR_F$. Because $I_1$ is ideal, no ac current flows in $R_S$, so the source voltage is the noise voltage of $R_S$ alone; that noise reaches the output amplified by $(1 + g_mR_F)$.

**Common mistake.** Treating the circuit as a degenerated common-source stage with gain $g_mR_F/(1 + g_mR_S)$, as if $R_F$ were a drain load to $V_{DD}$. $R_F$ actually connects the drain to the *source*, and the ideal current source $I_1$ allows no ac current to leave the drain–source pair, so $R_S$ carries no signal current and the gain is simply $-g_mR_F$.

**Common mistake.** Referring the noise of $R_S$ as just $4kTR_S$. The noise voltage at the source reaches the output both through the transistor ($g_mR_F$) and directly through $R_F$ (the "1" in $1 + g_mR_F$). Divided by the gain $g_mR_F$, it gives the factor $\left[(1 + g_mR_F)/(g_mR_F)\right]^2$, which matters when $g_mR_F$ is only moderate.

**Common mistake.** Treating $R_F$ as a load from the output to ground. Its noise current, like that of $M_1$, flows between the output and S and closes through $R_F$, so it refers to the input as $I_{nF}/g_m$, giving $4kT/(g_m^2R_F)$.
