# Detailed solution - R580

**Approach.** When CK is high, $M_1$ charges $C_1$ to $V_{in}$ while $C_2$ holds its voltage; when CK is low, $C_1$ and $C_2$ share their charge. Charge conservation in each sharing phase gives a recursion for $V_{out}$, which is solved in closed form and plotted over many cycles.

### Step 1 — The two phases

Call the node between $M_1$, $M_2$ and $C_1$ node P, so $V_{C1} = V_P$, and $V_{out}$ is the voltage on $C_2$. The clocks are non-overlapping, so the input never connects directly to $C_2$.

- **CK high** ($M_1$ on, $M_2$ off): $C_1$ charges to $V_P = V_{in} = 2$ V, and $C_2$, isolated, **holds** $V_{out}$.
- **CK low** ($M_1$ off, $M_2$ on): $C_1$ (at 2 V) and $C_2$ (at $V_{out}[k-1]$) share charge until both reach the new $V_{out}[k]$.

### Step 2 — Charge conservation in a sharing phase

During the $k$-th CK-low phase the joined top plates of $C_1$ and $C_2$ are isolated, so (with charge injection and clock feedthrough neglected) their total charge is conserved:

$$C_1(2\ \mathrm{V}) + C_2\,V_{out}[k-1] = (C_1 + C_2)\,V_{out}[k],$$

$$V_{out}[k] = \frac{C_1(2\ \mathrm{V}) + C_2\,V_{out}[k-1]}{C_1 + C_2}.$$

With $C_1 = C_2$, the new output is the average of the input and the old output:

$$V_{out}[k] = \frac{2\ \mathrm{V} + V_{out}[k-1]}{2}.$$

### Step 3 — Closed-form solution

With the error $e[k] = 2\ \mathrm{V} - V_{out}[k]$:

$$
\begin{aligned}
e[k] &= 2 - \frac{2 + V_{out}[k-1]}{2} = \frac{2 - V_{out}[k-1]}{2} = \frac{e[k-1]}{2}.
\end{aligned}
$$

The error **halves** every cycle. From $e[0] = 2$ V ($V_{out}[0] = 0$):

$$e[k] = 2\cdot2^{-k}\ \mathrm{V}, \qquad V_{out}[k] = 2\left(1 - 2^{-k}\right)\ \mathrm{V}.$$

| After sharing phase $k$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 10 |
|---|---|---|---|---|---|---|---|---|
| $V_{out}$ (V) | 0 | 1 | 1.5 | 1.75 | 1.875 | 1.9375 | 1.969 | 1.998 |
| Error (mV) | 2000 | 1000 | 500 | 250 | 125 | 62.5 | 31.3 | 2.0 |

The output gets within 1 mV of 2 V after 11 cycles ($2\cdot2^{-11}\ \mathrm{V} = 0.98$ mV).

### Step 4 — The plot versus time

With clock period $T$, CK high during the first half of each period and low during the second:

| Time interval | CK | $V_{C1}$ | $V_{out}$ |
|---|---|---|---|
| $0$ – $T/2$ | high | 2 V | 0 |
| $T/2$ – $T$ | low | 1 V | **1 V** |
| $T$ – $3T/2$ | high | 2 V | 1 V (held) |
| $3T/2$ – $2T$ | low | 1.5 V | **1.5 V** |
| $2T$ – $5T/2$ | high | 2 V | 1.5 V (held) |
| $5T/2$ – $3T$ | low | 1.75 V | **1.75 V** |
| $3T$ – $7T/2$ | high | 2 V | 1.75 V (held) |
| $7T/2$ – $4T$ | low | 1.875 V | **1.875 V** |
| … | … | … | … |

- $V_{out}$ is a **staircase**: flat during each CK-high phase, stepping up at the start of each CK-low phase (after a quick RC settling through $M_2$).
- The steps halve each time (1 V, 0.5 V, 0.25 V, 0.125 V, …), so the staircase approaches 2 V geometrically along the envelope $2(1 - 2^{-k})$, $k$ being the number of completed CK-low phases.
- $V_{C1}$ alternates between 2 V (CK high) and the new $V_{out}$ (CK low); its dips (1, 1.5, 1.75, … V) shrink as $V_{out}$ approaches 2 V.

The circuit is a discrete-time first-order low-pass, $V_{out}[k] = \tfrac12V_{out}[k-1] + \tfrac12V_{in}$, with its pole at $z = C_2/(C_1 + C_2) = 1/2$.

### Step 5 — Practical remark (switch threshold and body effect)

A real NMOS switch with a 3-V gate passes a voltage only while $V_{source} < V_{DD} - V_{TH}(V_{SB})$. With typical values ($V_{TH0} = 0.7$ V, $\gamma = 0.45\ \mathrm{V^{1/2}}$, $2|\phi_F| = 0.9$ V), the threshold at $V_{SB} = 2$ V is $0.7 + 0.45(\sqrt{2.9} - \sqrt{0.9}) = 1.04$ V, so $V_{GS} = 1$ V is not enough: $M_1$ can charge $C_1$ only to about 1.96–1.97 V, and slowly. In practice the staircase levels off near 1.96 V; with ideal switches, as assumed here, it converges to 2 V.

### Result

$V_{out}$ is a staircase that changes only during the CK-low phases and approaches 2 V geometrically: 0 during the first CK-high phase, then 1 V, 1.5 V, 1.75 V, 1.875 V, 1.9375 V, …. After the $k$-th sharing phase

$$V_{out}[k] = 2\left(1 - 2^{-k}\right)\ \mathrm{V},$$

so the remaining error halves every clock cycle.

- CK high: $M_2$ is off, so $V_{out}$ holds, while $C_1$ charges to $V_{in} = 2$ V.
- CK low: $M_1$ is off and $M_2$ on, and the equal capacitors share charge: $V_{out}[k] = (2\ \mathrm{V} + V_{out}[k-1])/2$.
- The voltage on $C_1$ alternates between 2 V (CK high) and $V_{out}[k]$ (CK low).
- With body effect and a 3-V clock, a real NMOS switch could charge $C_1$ only to about 1.96 V, so in practice the staircase levels off there; with ideal switches it converges to 2 V.

**Common mistake.** Letting $V_{out}$ reach 2 V in the first cycle, as if $C_2$ were charged directly from the input. With non-overlapping clocks $C_2$ only sees $C_1$, which delivers a finite charge packet $C_1\cdot(2\ \mathrm{V} - V_{out})$ per cycle, closing only half of the remaining gap.

**Common mistake.** Concluding that $V_{out}$ settles at 1 V, i.e. applying the charge-sharing formula only once, or assuming $C_1$ is discharged before each sharing phase. $C_2$ keeps its charge from cycle to cycle and $C_1$ is recharged to 2 V every CK-high phase, so the output keeps climbing toward 2 V.

**Common mistake.** Drawing a linear ramp or a continuous exponential. $V_{out}$ changes only while $M_2$ is on, so the waveform is a staircase whose steps shrink by a factor of 2 each cycle.
