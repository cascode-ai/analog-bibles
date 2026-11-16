# Detailed solution - R384

**Approach.** Each half of the circuit is a "super source follower": $M_1$ with fixed drain current forces its source to track its gate, and $M_3$ supplies whatever current the source node needs. Using KCL at the drain and source nodes, we find that the output current difference is $2/R_S$ times the voltage difference between the source nodes, plus a term from $R_S$'s noise. We then see which noise sources reach the output: $M_1$, $M_2$ and $R_S$ do; $M_3$ and $M_4$ are absorbed by the local loops. Finally we divide by the transconductance $2/R_S$.

### Step 1 — The circuit and its nodes

Reading the figure (left half; the right half is its mirror image):

- $M_1$ (NMOS): gate = input $V_{G1}$, drain = node $A_1$, source = node $S_1$.
- An ideal current source from $V_{DD}$ feeds $A_1$; another ideal current source pulls a fixed current from $S_1$ to ground.
- $M_3$ (PMOS): source at $V_{DD}$, gate at $A_1$, drain at $S_1$.
- $R_S$ connects $S_1$ to $S_2$ (the corresponding node of the right half).

The output of interest is $I_{D3} - I_{D4}$ and the input is $V_{in} = V_{G1} - V_{G2}$.

**Noise sources:** channel thermal noise currents $\overline{I_{n}^2} = 4kT\gamma g_m$ of $M_1$–$M_4$; flicker noise gate voltages $K_N/(C_{ox}(WL)_1f)$ for $M_1$, $M_2$ and $K_P/(C_{ox}(WL)_3f)$ for $M_3$, $M_4$; $R_S$'s noise current $\overline{I_{nR}^2} = 4kT/R_S$ in parallel with it. The current sources are ideal and noiseless. Here $k$ is Boltzmann's constant, $T$ the temperature, $\gamma$ the channel-noise coefficient, $K_N$, $K_P$ the flicker coefficients, $C_{ox}$ the oxide capacitance per unit area and $WL$ the gate area.

**Small-signal model in words (left half).** Node $A_1$ connects only to the drain of $M_1$ and the gate of $M_3$: the ideal current source is an open circuit, the gate draws no current, and with $\lambda = 0$ there is no $r_O$. Node $S_1$ connects to the source of $M_1$, the drain of $M_3$, $R_S$ and the (open) bottom current source. $M_1$ carries $g_{m1}(V_{G1} - V_{S1}) + I_{n1}$ from $A_1$ to $S_1$; $M_3$ carries $g_{m3}(0 - V_{A1}) + I_{n3}$ from $V_{DD}$ (AC ground) into $S_1$.

<!-- diagram: diagram-01.cir -->

### Step 2 — $M_1$'s drain current is fixed, so its source follows its gate

KCL at $A_1$: the only element that can carry small-signal current at this node is $M_1$, so its small-signal drain current must be zero:

$$
\begin{aligned}
g_{m1}(V_{G1} - V_{S1}) + I_{n1} &= 0\\
V_{S1} &= V_{G1} + \frac{I_{n1}}{g_{m1}}.
\end{aligned}
$$

So the source of $M_1$ tracks the gate **exactly** (a unity-gain follower), and $M_1$'s thermal noise appears as an extra voltage $I_{n1}/g_{m1}$ at $S_1$, just like a gate-referred noise voltage. The flicker noise of $M_1$, already modeled as a voltage $V_{f1}$ in series with its gate, likewise appears directly: $V_{S1} = V_{G1} + I_{n1}/g_{m1} + V_{f1}$. The same holds for the right half:

$$V_{S2} = V_{G2} + \frac{I_{n2}}{g_{m2}} + V_{f2}, \qquad g_{m2} = g_{m1}.$$

### Step 3 — Output current difference: transconductance $2/R_S$

KCL at $S_1$ (small-signal). Arriving: $M_1$'s current (zero, Step 2) and $M_3$'s drain current $i_{d3}$. Leaving: the bottom current source (zero, ideal), and the current through $R_S$ together with its noise current $I_{nR}$ (taken from $S_1$ to $S_2$):

$$i_{d3} = \frac{V_{S1} - V_{S2}}{R_S} + I_{nR}.$$

KCL at $S_2$, in the same way:

$$i_{d4} = \frac{V_{S2} - V_{S1}}{R_S} - I_{nR}.$$

Subtract:

$$i_{d3} - i_{d4} = \frac{2\,(V_{S1} - V_{S2})}{R_S} + 2I_{nR}.$$

For the signal alone, $V_{S1} - V_{S2} = V_{G1} - V_{G2} = V_{in}$, so

$$G_m = \frac{i_{d3} - i_{d4}}{V_{in}} = \frac{2}{R_S}.$$

The transconductance is set purely by $R_S$: the circuit is a linear voltage-to-current converter. The factor 2 appears because the current through $R_S$ leaves one side and enters the other, so it shows up with opposite signs in $I_{D3}$ and $I_{D4}$.

### Step 4 — Why $M_3$ and $M_4$ contribute nothing

$M_3$'s noise (thermal $I_{n3}$, or flicker as a gate voltage) does not appear in the KCL of Step 3 at all. There, $i_{d3}$ is fixed by $V_{S1}$, $V_{S2}$ and $R_S$, and $V_{S1}$ is fixed by $M_1$ (Step 2). $M_3$'s total drain current is therefore dictated by the rest of the circuit:

$$g_{m3}(0 - V_{A1}) + I_{n3} = i_{d3} \quad\Longrightarrow\quad V_{A1} = \frac{I_{n3} - i_{d3}}{g_{m3}}.$$

Its noise only moves the gate node $A_1$. Physically: if $I_{n3}$ tried to push extra current into $S_1$, $V_{S1}$ would start to rise, $M_1$'s $V_{GS}$ would fall and its drain current would drop. Since $A_1$ has infinite impedance, $V_{A1}$ would rise until $M_3$'s current is cut back by exactly $I_{n3}$. The local loop has infinite gain, so it absorbs $M_3$'s noise completely. The same holds for $M_4$, and for the flicker noise of both.

### Step 5 — Input-referred noise

Insert the noisy source voltages from Step 2 into Step 3:

$$i_{d3} - i_{d4} = \frac{2}{R_S}\left[V_{in} + \frac{I_{n1} - I_{n2}}{g_{m1}} + V_{f1} - V_{f2}\right] + 2I_{nR}.$$

Divide the noise part by $G_m = 2/R_S$ to refer it to the input:

$$V_{n,in} = \frac{I_{n1} - I_{n2}}{g_{m1}} + V_{f1} - V_{f2} + R_SI_{nR}.$$

All sources are uncorrelated, so the powers add:

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

**Common mistake.** Letting $M_3$'s noise current flow directly to the output. $I_{D3}$ is fixed by KCL at $S_1$ (it must supply exactly the $R_S$ current), and $V_{S1}$ is fixed by $M_1$. $M_3$'s noise can only move its own gate voltage.

**Common mistake.** Claiming that the feedback loop also suppresses $M_1$'s noise. $M_1$'s noise current appears as a voltage $I_{n1}/g_{m1}$ between its gate and source, i.e. right at the input of the follower. The loop makes $V_{S1}$ follow $V_{G1}$ plus that voltage, so it passes through unattenuated.

**Common mistake.** Using $g_{m1}$ or $g_{m3}$ as the transconductance, or forgetting the factor 2. The output current difference is $2(V_{S1} - V_{S2})/R_S$; dividing $R_S$'s noise current $2I_{nR}$ by $2/R_S$ gives $R_SI_{nR}$, i.e. exactly $4kTR_S$ (not $kTR_S$ or $16kTR_S$).
