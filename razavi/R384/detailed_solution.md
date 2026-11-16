# Detailed solution - R384

**Approach.** Each half is a "super source follower": $M_1$, with fixed drain current, forces its source to track its gate, and $M_3$ supplies whatever current the source node needs. KCL at the drain and source nodes shows that $I_{D3} - I_{D4}$ is $2/R_S$ times the source-voltage difference plus a term from $R_S$'s noise; $M_1$, $M_2$ and $R_S$ reach the output, while $M_3$, $M_4$ are absorbed by the local loops. Dividing by $2/R_S$ refers the noise to the input.

### Step 1 — Nodes and small-signal model

In the left half (the right half mirrors it), call the drain of $M_1$ node $A_1$ and its source node $S_1$; $R_S$ connects $S_1$ to $S_2$. The noise sources are the channel noise currents $4kT\gamma g_m$ of $M_1$–$M_4$, their flicker gate voltages ($K_N$ for $M_1$, $M_2$; $K_P$ for $M_3$, $M_4$) and $R_S$'s noise current $\overline{I_{nR}^2} = 4kT/R_S$ in parallel with it.

$A_1$ connects only to the drain of $M_1$ and the gate of $M_3$ (the ideal current source is open, the gate draws no current, and $\lambda = 0$). $S_1$ connects to the source of $M_1$, the drain of $M_3$, $R_S$ and the open bottom current source. $M_1$ carries $g_{m1}(V_{G1} - V_{S1}) + I_{n1}$ from $A_1$ to $S_1$, and $M_3$ carries $g_{m3}(0 - V_{A1}) + I_{n3}$ from $V_{DD}$ (ac ground) into $S_1$.

<!-- diagram: diagram-01.cir -->

### Step 2 — $M_1$'s drain current is fixed, so its source follows its gate

Only $M_1$ can carry small-signal current at $A_1$, so its small-signal drain current is zero:

$$
\begin{aligned}
g_{m1}(V_{G1} - V_{S1}) + I_{n1} &= 0\\
V_{S1} &= V_{G1} + \frac{I_{n1}}{g_{m1}}.
\end{aligned}
$$

The source tracks the gate **exactly**, and $M_1$'s thermal noise appears as an extra voltage $I_{n1}/g_{m1}$ at $S_1$; its flicker voltage $V_{f1}$, already in series with the gate, appears directly: $V_{S1} = V_{G1} + I_{n1}/g_{m1} + V_{f1}$. Likewise

$$V_{S2} = V_{G2} + \frac{I_{n2}}{g_{m2}} + V_{f2}, \qquad g_{m2} = g_{m1}.$$

### Step 3 — Output current difference: transconductance $2/R_S$

KCL at $S_1$: $M_1$ delivers no small-signal current (Step 2) and the bottom source is ideal, so $M_3$'s drain current leaves entirely through $R_S$ together with $I_{nR}$ (taken from $S_1$ to $S_2$):

$$i_{d3} = \frac{V_{S1} - V_{S2}}{R_S} + I_{nR}, \qquad i_{d4} = \frac{V_{S2} - V_{S1}}{R_S} - I_{nR}.$$

Subtracting:

$$i_{d3} - i_{d4} = \frac{2\,(V_{S1} - V_{S2})}{R_S} + 2I_{nR}.$$

For the signal alone, $V_{S1} - V_{S2} = V_{G1} - V_{G2} = V_{in}$, so

$$G_m = \frac{i_{d3} - i_{d4}}{V_{in}} = \frac{2}{R_S}.$$

The factor 2 appears because the $R_S$ current leaves one side and enters the other.

### Step 4 — Why $M_3$ and $M_4$ contribute nothing

$M_3$'s noise does not appear in Step 3: $i_{d3}$ is fixed by $V_{S1}$, $V_{S2}$ and $R_S$, and $V_{S1}$ by $M_1$. So $M_3$'s total drain current is dictated by the rest of the circuit,

$$g_{m3}(0 - V_{A1}) + I_{n3} = i_{d3} \quad\Longrightarrow\quad V_{A1} = \frac{I_{n3} - i_{d3}}{g_{m3}},$$

and its noise only moves the gate node $A_1$. The high-impedance node $A_1$ makes the local loop gain infinite: any extra current from $M_3$ would raise $V_{S1}$, cut $M_1$'s current, and raise $V_{A1}$ until $M_3$'s current is cut back by exactly $I_{n3}$. The same holds for $M_4$ and for the flicker noise of both.

### Step 5 — Input-referred noise

Inserting the noisy source voltages of Step 2 into Step 3:

$$i_{d3} - i_{d4} = \frac{2}{R_S}\left[V_{in} + \frac{I_{n1} - I_{n2}}{g_{m1}} + V_{f1} - V_{f2}\right] + 2I_{nR}.$$

Dividing the noise part by $G_m = 2/R_S$:

$$V_{n,in} = \frac{I_{n1} - I_{n2}}{g_{m1}} + V_{f1} - V_{f2} + R_SI_{nR}.$$

The sources are uncorrelated, so the powers add:

$$
\begin{aligned}
\text{$M_1$, $M_2$ thermal:}&\quad 2\cdot\frac{4kT\gamma g_{m1}}{g_{m1}^2} = \frac{8kT\gamma}{g_{m1}},\\
\text{$R_S$:}&\quad R_S^2\cdot\frac{4kT}{R_S} = 4kTR_S,\\
\text{$M_1$, $M_2$ flicker:}&\quad 2\cdot\frac{K_N}{C_{ox}(WL)_1f} = \frac{2K_N}{C_{ox}(WL)_1f}.
\end{aligned}
$$

### Result

$$\overline{V_{n,in}^2} = \frac{8kT\gamma}{g_{m1}} + 4kTR_S + \frac{2K_N}{C_{ox}(WL)_1f}$$

The transconductance from $V_{in}$ to $I_{D3} - I_{D4}$ is $2/R_S$. $M_1$ and $M_2$ contribute their gate-referred thermal and flicker noise, $R_S$ contributes $4kTR_S$, and **$M_3$, $M_4$ contribute nothing**, because their noise is absorbed by the infinite-gain local loops (with ideal current sources and $\lambda = 0$).

**Common mistake.** Letting $M_3$'s noise current flow directly to the output. $I_{D3}$ is fixed by KCL at $S_1$ and $V_{S1}$ by $M_1$; $M_3$'s noise only moves its own gate.

**Common mistake.** Claiming that the loop also suppresses $M_1$'s noise. $I_{n1}/g_{m1}$ sits between the gate and source of $M_1$, right at the follower's input, so it passes through unattenuated.

**Common mistake.** Using $g_{m1}$ or $g_{m3}$ as the transconductance, or forgetting the factor 2. Dividing $2I_{nR}$ by $2/R_S$ gives $R_SI_{nR}$, i.e. exactly $4kTR_S$ (not $kTR_S$ or $16kTR_S$).
