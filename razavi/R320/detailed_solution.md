# Detailed solution - R320

**Approach.** $C_{GS}$ bridges the gate and the source, and $C_{GD}$ the gate and the drain, so apply Miller's theorem to each with the low-frequency gain from the gate to its far terminal. Degeneration makes the source follow the gate (shrinking the effective $C_{GS}$, as in a source follower) and reduces the drain gain (shrinking the Miller multiplication of $C_{GD}$).

### Step 1 — The circuit and the Miller rule

<!-- diagram: diagram-01.cir -->

Call the source S and the drain D (the output); $V_{DD}$ is an ac ground, $\lambda = 0$ and $g_{mb} = 0$. A capacitor $C$ from the input to a node at $AV_{in}$ draws

$$I_C = Cs\,(V_{in} - AV_{in}) = (1 - A)\,Cs\,V_{in},$$

so it acts as a grounded $(1 - A)C$; with low-frequency gains for $A$ this is the Miller approximation, valid well below the circuit's poles.

### Step 2 — Low-frequency gains to the source and the drain

The drain current $I_D = g_m(V_{in} - V_S)$ flows through $R_S$, so $V_S = I_DR_S$:

$$
\begin{aligned}
V_S &= g_mR_S(V_{in} - V_S)\\
V_S(1 + g_mR_S) &= g_mR_SV_{in}\\
A_S = \frac{V_S}{V_{in}} &= \frac{g_mR_S}{1 + g_mR_S},
\end{aligned}
$$

the source-follower gain: positive and less than 1. Then

$$I_D = g_m(V_{in} - V_S) = g_mV_{in}\left(1 - \frac{g_mR_S}{1 + g_mR_S}\right) = \frac{g_mV_{in}}{1 + g_mR_S},$$

which is drawn through $R_D$, so $V_D = -R_DI_D$ and

$$A_D = \frac{V_D}{V_{in}} = -\frac{g_mR_D}{1 + g_mR_S},$$

the degenerated CS gain with effective transconductance $g_m/(1 + g_mR_S)$.

### Step 3 — The two Miller terms

**$C_{GS}$ (bootstrapped).** With $A = A_S$:

$$
\begin{aligned}
1 - A_S &= 1 - \frac{g_mR_S}{1 + g_mR_S} = \frac{1}{1 + g_mR_S},\\
C_{GS,in} &= (1 - A_S)\,C_{GS} = \frac{C_{GS}}{1 + g_mR_S}.
\end{aligned}
$$

The source moves with the gate, so only $V_{in}/(1 + g_mR_S)$ appears across $C_{GS}$, as in a source follower.

**$C_{GD}$ (Miller-multiplied).** With $A = A_D$:

$$C_{GD,in} = (1 - A_D)\,C_{GD} = \left(1 + \frac{g_mR_D}{1 + g_mR_S}\right)C_{GD}.$$

The drain moves opposite to the gate; degeneration reduces the gain and hence the multiplication.

### Step 4 — Total input capacitance

Both equivalent capacitances go from the gate to ground, so they add:

$$C_{in}\approx\frac{C_{GS}}{1 + g_mR_S} + C_{GD}\left(1 + \frac{g_mR_D}{1 + g_mR_S}\right).$$

**Checks.** $R_S = 0$ gives $C_{GS} + (1 + g_mR_D)C_{GD}$, the standard CS result; $R_D = 0$ gives $C_{GS}/(1 + g_mR_S) + C_{GD}$, the source-follower result.

**Example.** For $g_mR_S = 2$ and $g_mR_D = 10$:

$$C_{in}\approx\frac{C_{GS}}{3} + C_{GD}\left(1 + \frac{10}{3}\right) = 0.33\,C_{GS} + 4.33\,C_{GD},$$

against $C_{GS} + 11\,C_{GD}$ without degeneration: both terms shrink, at the cost of a gain reduced from 10 to 3.3.

**With the body effect** (neglected here), the source gain becomes $g_mR_S/[1 + (g_m + g_{mb})R_S]$ and the $C_{GS}$ term $C_{GS}(1 + g_{mb}R_S)/[1 + (g_m + g_{mb})R_S]$: slightly less bootstrapping.

### Step 5 — How accurate is this estimate?

The input current is exactly

$$I_{in} = C_{GS}s\,(V_{in} - V_S) + C_{GD}s\,(V_{in} - V_D).$$

Each term already carries a factor $s$, so to first order in $s$, $V_S$ and $V_D$ may be replaced by $A_SV_{in}$ and $A_DV_{in}$; their corrections from the capacitor currents are themselves proportional to $s$ and only add $s^2$ terms:

$$\frac{I_{in}}{V_{in}} = \left[(1 - A_S)C_{GS} + (1 - A_D)C_{GD}\right]s + O(s^2).$$

So $C_{in}$ is the **exact low-frequency input capacitance** (solving the full circuit gives the same coefficient of $s$). Near the poles of the source and drain nodes, $V_S$ and $V_D$ lag the input, the effective gains change and the input admittance acquires a real part, so there the formula is only an estimate.

### Result

$$C_{in}\approx\frac{C_{GS}}{1 + g_mR_S} + C_{GD}\left(1 + \frac{g_mR_D}{1 + g_mR_S}\right).$$

- The source follows the gate with gain $g_mR_S/(1 + g_mR_S)$, so $C_{GS}$ is bootstrapped and appears divided by $1 + g_mR_S$.
- The gate-to-drain gain is $-g_mR_D/(1 + g_mR_S)$, so $C_{GD}$ is Miller-multiplied by $1 + g_mR_D/(1 + g_mR_S)$.
- Both use low-frequency gains (Miller approximation).

**Common mistake.** Multiplying $C_{GS}$ by $1 + g_mR_S$, as if the source moved opposite to the gate. The source moves *with* the gate, so $C_{GS}$ is *divided* by $1 + g_mR_S$.

**Common mistake.** Using the undegenerated gain $g_mR_D$ in the $C_{GD}$ term. With $R_S$ the gate-to-drain gain is $g_mR_D/(1 + g_mR_S)$, so the Miller multiplication is much smaller.

**Common mistake.** Leaving $C_{GS}$ unchanged ("degeneration only affects the gain"), or dividing $C_{GD}$ by the gain. Each capacitance is scaled by $1 - A$ with the gain to *its own* far terminal: positive and below 1 for $C_{GS}$, negative for $C_{GD}$.
