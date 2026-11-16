# Detailed solution - R320

**Approach.** $C_{GS}$ connects the gate to the source, and $C_{GD}$ connects the gate to the drain. Both are "bridging" capacitors, so we use Miller's theorem for each one, with the low-frequency voltage gains from the gate to the source and from the gate to the drain. Source degeneration makes the source follow the gate (which shrinks the effective $C_{GS}$, as in a source follower) and reduces the drain gain (which shrinks the Miller multiplication of $C_{GD}$).

### Step 1 — The circuit

<!-- diagram: diagram-01.cir -->

- NMOS $M_1$: gate = input, source = node **S** with $R_S$ to ground, drain = node **D** (output) with $R_D$ to $V_{DD}$ (an ac ground).
- Capacitances considered: $C_{GS}$ from gate to S, and $C_{GD}$ from gate to D.
- $\lambda = 0$ (no $r_O$) and no body effect ($g_{mb} = 0$).

### Step 2 — Miller's theorem for a capacitor

If a capacitor $C$ connects the input node (voltage $V_{in}$) to another node whose voltage is $A\,V_{in}$, the current drawn from the input through $C$ is

$$I_C = Cs\,(V_{in} - AV_{in}) = (1 - A)\,Cs\,V_{in}.$$

So, seen from the input, the capacitor behaves as a grounded capacitance $(1 - A)C$. We use the low-frequency gains for $A$ (the Miller approximation, valid well below the circuit's poles).

### Step 3 — Low-frequency gain from the gate to the source

The drain current is $I_D = g_m(V_{in} - V_S)$, and it flows through $R_S$, so $V_S = I_DR_S$:

$$
\begin{aligned}
V_S &= g_mR_S(V_{in} - V_S)\\
V_S(1 + g_mR_S) &= g_mR_SV_{in}\\
A_S = \frac{V_S}{V_{in}} &= \frac{g_mR_S}{1 + g_mR_S}.
\end{aligned}
$$

This is the source-follower gain: positive and less than 1. The source **follows** the gate.

### Step 4 — Low-frequency gain from the gate to the drain

Using $V_S$ from Step 3, the drain current is

$$I_D = g_m(V_{in} - V_S) = g_mV_{in}\left(1 - \frac{g_mR_S}{1 + g_mR_S}\right) = \frac{g_mV_{in}}{1 + g_mR_S}.$$

This current flows from the drain node to the source, so it is drawn through $R_D$ and $V_D = -R_DI_D$:

$$A_D = \frac{V_D}{V_{in}} = -\frac{g_mR_D}{1 + g_mR_S}.$$

This is the familiar gain of a degenerated common-source stage: the effective transconductance is $g_m/(1 + g_mR_S)$.

### Step 5 — The two Miller terms

**$C_{GS}$ (bootstrapped).** With $A = A_S$:

$$
\begin{aligned}
1 - A_S &= 1 - \frac{g_mR_S}{1 + g_mR_S} = \frac{1}{1 + g_mR_S},\\
C_{GS,in} &= (1 - A_S)\,C_{GS} = \frac{C_{GS}}{1 + g_mR_S}.
\end{aligned}
$$

Because the source moves in the same direction as the gate, the voltage across $C_{GS}$ is only $V_{in}/(1 + g_mR_S)$, and the current needed to charge it is reduced by the same factor. This is the same bootstrapping that reduces $C_{GS}$ in a source follower.

**$C_{GD}$ (Miller-multiplied).** With $A = A_D$:

$$C_{GD,in} = (1 - A_D)\,C_{GD} = \left(1 + \frac{g_mR_D}{1 + g_mR_S}\right)C_{GD}.$$

The drain moves opposite to the gate, so the voltage across $C_{GD}$ is larger than $V_{in}$. Degeneration reduces the gain and therefore the multiplication factor.

### Step 6 — Total input capacitance

The two equivalent capacitances are both from the gate to ground, so they add:

$$C_{in}\approx\frac{C_{GS}}{1 + g_mR_S} + C_{GD}\left(1 + \frac{g_mR_D}{1 + g_mR_S}\right).$$

**Checks.**

- $R_S = 0$: $C_{in} = C_{GS} + (1 + g_mR_D)C_{GD}$, the standard common-source result.
- $R_D = 0$ (drain at ac ground): $C_{in} = C_{GS}/(1 + g_mR_S) + C_{GD}$, the source-follower result.

**Example.** For $g_mR_S = 2$ and $g_mR_D = 10$:

$$C_{in}\approx\frac{C_{GS}}{3} + C_{GD}\left(1 + \frac{10}{3}\right) = 0.33\,C_{GS} + 4.33\,C_{GD},$$

compared with $C_{GS} + 11\,C_{GD}$ for the same stage without degeneration. Both terms shrink, at the cost of a gain reduced from 10 to 3.3.

**With the body effect** (neglected here), the source gain becomes $g_mR_S/[1 + (g_m + g_{mb})R_S]$ and the $C_{GS}$ term becomes $C_{GS}(1 + g_{mb}R_S)/[1 + (g_m + g_{mb})R_S]$, slightly less bootstrapping.

### Result

$$C_{in}\approx\frac{C_{GS}}{1 + g_mR_S} + C_{GD}\left(1 + \frac{g_mR_D}{1 + g_mR_S}\right).$$

- The source follows the gate with gain $g_mR_S/(1 + g_mR_S)$, so $C_{GS}$ is bootstrapped and appears divided by $1 + g_mR_S$.
- The gate-to-drain gain is $-g_mR_D/(1 + g_mR_S)$, so $C_{GD}$ is Miller-multiplied by $1 + g_mR_D/(1 + g_mR_S)$.
- Both use low-frequency gains (Miller approximation).

**Common mistake.** Multiplying $C_{GS}$ by $1 + g_mR_S$, as if the source moved opposite to the gate. The source is a follower output: it moves *with* the gate, so the voltage across $C_{GS}$ shrinks and its effective value is *divided* by $1 + g_mR_S$.

**Common mistake.** Using the undegenerated gain $g_mR_D$ in the $C_{GD}$ term. With $R_S$ present the gate-to-drain gain is $g_mR_D/(1 + g_mR_S)$, so the Miller multiplication is much smaller.

**Common mistake.** Leaving $C_{GS}$ unchanged ("degeneration only affects the gain"), or dividing $C_{GD}$ by the gain. Each capacitance is scaled by $1 - A$ with the gain to *its own* far terminal: a positive gain below 1 for $C_{GS}$, a negative gain for $C_{GD}$.
