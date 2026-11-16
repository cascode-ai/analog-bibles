# Detailed solution - R385

**Approach.** This is the linear voltage-to-current converter built from two "super source followers" ($M_1$/$M_3$ and $M_2$/$M_4$) joined by $R_S$, now with noisy MOSFET current sources $M_5$–$M_8$. We write KCL at the drain node of $M_1$ (which fixes the source voltage) and at its source node (which fixes $I_{D3}$), keep every noise current as a signed signal, form $I_{D3} - I_{D4}$, and divide by the transconductance $2/R_S$. The powers of the independent sources are added only at the end, for both thermal and flicker noise.

### Step 1 — Nodes, devices and noise sources

Reading the figure (left half; the right half is its mirror image with $M_2$, $M_4$, $M_6$, $M_8$):

- $M_1$ (NMOS): gate = $V_{G1}$ (input), drain = node $A_1$, source = node $S_1$.
- $M_5$ (PMOS current source, fixed gate bias): from $V_{DD}$ into $A_1$.
- $M_7$ (NMOS current source, fixed gate bias): from $S_1$ to ground.
- $M_3$ (PMOS): source at $V_{DD}$, gate at $A_1$, drain at $S_1$ (local feedback).
- $R_S$: between $S_1$ and $S_2$.

Input: $V_{in} = V_{G1} - V_{G2}$. Output: $I_{D3} - I_{D4}$.

With fixed gate biases and $\lambda = 0$, the current sources carry no small-signal current except their noise. We use these signed noise currents ($k$ = Boltzmann's constant, $T$ = temperature, $\gamma$ = channel-noise coefficient):

| Source | Direction (left half) | Thermal PSD |
|---|---|---|
| $I_{n1}$ | through $M_1$, from $A_1$ to $S_1$ | $4kT\gamma g_{m1}$ |
| $I_{n5}$ | from $V_{DD}$ into $A_1$ | $4kT\gamma g_{m5}$ |
| $I_{n7}$ | from $S_1$ to ground | $4kT\gamma g_{m7}$ |
| $I_{n3}$ | through $M_3$, from $V_{DD}$ into $S_1$ | $4kT\gamma g_{m3}$ |
| $I_{nR}$ | across $R_S$, from $S_1$ to $S_2$ | $4kT/R_S$ |

Flicker noise is a gate voltage $K/(C_{ox}WLf)$ ($K_N$ for NMOS, $K_P$ for PMOS), where $C_{ox}$ is the oxide capacitance per unit area and $WL$ the gate area. For a current-source transistor it produces a drain current $g_m$ times that voltage, which acts exactly like its thermal noise current.

**Small-signal model in words.** Node $A_1$ connects to $M_5$ (noise current only), the drain of $M_1$, and the gate of $M_3$ (no current): it has **infinite impedance**. Node $S_1$ connects to the source of $M_1$, the drain of $M_3$, $M_7$ (noise current only) and $R_S$. $M_1$ carries $g_{m1}(V_{G1} - V_{S1}) + I_{n1}$ from $A_1$ to $S_1$; $M_3$ carries $i_{d3}$ into $S_1$.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at $A_1$: the source voltage

Everything that enters $A_1$ must leave through $M_1$:

$$
\begin{aligned}
g_{m1}(V_{G1} - V_{S1}) + I_{n1} &= I_{n5}\\
V_{S1} &= V_{G1} + \frac{I_{n1} - I_{n5}}{g_{m1}}.
\end{aligned}
$$

The source still follows the gate, but now shifted by $M_1$'s own noise *and* by $M_5$'s noise: $M_5$'s noise current has no other path, so it is forced through $M_1$ and changes its $V_{GS}$ by $I_{n5}/g_{m1}$. Also, the total current that $M_1$ delivers into $S_1$ equals $I_{n5}$.

Right half, likewise: $V_{S2} = V_{G2} + (I_{n2} - I_{n6})/g_{m1}$ (with $g_{m2} = g_{m1}$).

### Step 3 — KCL at $S_1$: the current of $M_3$

Arriving at $S_1$: $M_1$'s current ($I_{n5}$, from Step 2) and $M_3$'s drain current $i_{d3}$. Leaving: $I_{n7}$ through $M_7$, and the $R_S$ branch current $(V_{S1} - V_{S2})/R_S + I_{nR}$:

$$
\begin{aligned}
i_{d3} + I_{n5} &= I_{n7} + \frac{V_{S1} - V_{S2}}{R_S} + I_{nR}\\
i_{d3} &= I_{n7} - I_{n5} + \frac{V_{S1} - V_{S2}}{R_S} + I_{nR}.
\end{aligned}
$$

Right half (the $R_S$ current enters $S_2$):

$$i_{d4} = I_{n8} - I_{n6} + \frac{V_{S2} - V_{S1}}{R_S} - I_{nR}.$$

### Step 4 — The output current difference

Subtract:

$$i_{d3} - i_{d4} = (I_{n7} - I_{n8}) - (I_{n5} - I_{n6}) + \frac{2(V_{S1} - V_{S2})}{R_S} + 2I_{nR}.$$

From Step 2,

$$V_{S1} - V_{S2} = V_{in} + \frac{I_{n1} - I_{n2}}{g_{m1}} - \frac{I_{n5} - I_{n6}}{g_{m1}}.$$

Substitute and collect the $I_{n5} - I_{n6}$ terms:

$$i_{d3} - i_{d4} = \frac{2}{R_S}\left[V_{in} + \frac{I_{n1} - I_{n2}}{g_{m1}}\right] - (I_{n5} - I_{n6})\left(1 + \frac{2}{g_{m1}R_S}\right) + (I_{n7} - I_{n8}) + 2I_{nR}.$$

The signal transconductance is $G_m = 2/R_S$, as with ideal current sources.

**$M_3$ and $M_4$ do not appear.** $i_{d3}$ is fully determined by KCL at $S_1$, and $V_{S1}$ by $M_1$. $M_3$'s noise (thermal or flicker) only shifts its gate voltage: $V_{A1} = (I_{n3} - i_{d3})/g_{m3}$. Because $A_1$ has infinite impedance, the local loop has infinite gain and absorbs $M_3$'s noise completely.

### Step 5 — Referring to the input (thermal noise)

Divide the noise terms by $G_m = 2/R_S$:

$$V_{n,in} = \frac{I_{n1} - I_{n2}}{g_{m1}} - (I_{n5} - I_{n6})\left(\frac{1}{g_{m1}} + \frac{R_S}{2}\right) + (I_{n7} - I_{n8})\frac{R_S}{2} + R_SI_{nR}.$$

(For the $M_5$ term: $\tfrac{R_S}{2}\left(1 + \tfrac{2}{g_{m1}R_S}\right) = \tfrac{R_S}{2} + \tfrac{1}{g_{m1}}$.)

All sources are independent, so square each coefficient and add. Each pair (e.g. $I_{n5} - I_{n6}$) gives twice the power of one device:

$$\overline{V_{n,in}^2} = 2\left[\frac{4kT\gamma}{g_{m1}} + 4kT\gamma g_{m5}\left(\frac{1}{g_{m1}} + \frac{R_S}{2}\right)^2 + 4kT\gamma g_{m7}\frac{R_S^2}{4}\right] + 4kTR_S .$$

The $R_S$ term is $R_S^2\cdot4kT/R_S = 4kTR_S$.

**Why the two current sources have different weights.**

- The lower source's noise $I_{n7}$ only draws current from $S_1$; $M_3$ supplies it, so it appears directly in $I_{D3}$. Divided by $2/R_S$, it is worth $(R_S/2)I_{n7}$ at the input.
- The upper source's noise $I_{n5}$ does that too (through $M_1$), **and** it changes $M_1$'s $V_{GS}$ by $I_{n5}/g_{m1}$, which shifts $V_{S1}$ like an input voltage. Hence its larger weight, $1/g_{m1} + R_S/2$.

### Step 6 — Flicker noise

- $M_1$, $M_2$: their flicker voltages are in series with the gates and pass to $V_{S1}$, $V_{S2}$ unchanged (Step 2 with $V_{G1} \to V_{G1} + V_{f1}$): $2K_N/(C_{ox}(WL)_1f)$.
- $M_5$, $M_6$: drain current $g_{m5}V_{f5}$, weighted like $I_{n5}$: $2g_{m5}^2(1/g_{m1} + R_S/2)^2K_P/(C_{ox}(WL)_5f)$.
- $M_7$, $M_8$: drain current $g_{m7}V_{f7}$, weighted like $I_{n7}$: $2g_{m7}^2(R_S^2/4)K_N/(C_{ox}(WL)_7f)$.
- $M_3$, $M_4$: absorbed by the loops, nothing.

$$\overline{V_{n,in}^2}\Big|_{1/f} = \frac{2}{C_{ox}f}\left[\frac{K_N}{(WL)_1} + g_{m5}^2\left(\frac{1}{g_{m1}} + \frac{R_S}{2}\right)^2\frac{K_P}{(WL)_5} + g_{m7}^2\frac{R_S^2}{4}\cdot\frac{K_N}{(WL)_7}\right].$$

**Design implication.** The current-source transistors should have small $g_m$ (large overdrive) and large area. The upper ones are the more harmful, since their noise also modulates $V_{GS1}$.

### Result

Thermal:

$$\overline{V_{n,in}^2} = 2\left[\frac{4kT\gamma}{g_{m1}} + 4kT\gamma g_{m5}\left(\frac{1}{g_{m1}} + \frac{R_S}{2}\right)^2 + 4kT\gamma g_{m7}\frac{R_S^2}{4}\right] + 4kTR_S$$

Flicker:

$$\overline{V_{n,in}^2}\Big|_{1/f} = \frac{2}{C_{ox}f}\left[\frac{K_N}{(WL)_1} + g_{m5}^2\left(\frac{1}{g_{m1}} + \frac{R_S}{2}\right)^2\frac{K_P}{(WL)_5} + g_{m7}^2\frac{R_S^2}{4}\cdot\frac{K_N}{(WL)_7}\right]$$

The transconductance is $2/R_S$. $M_3$ and $M_4$ contribute nothing (absorbed by the local loops). The upper current sources ($M_5$, $M_6$) are referred with weight $1/g_{m1} + R_S/2$, the lower ones ($M_7$, $M_8$) with weight $R_S/2$.

**Common mistake.** Assuming the local feedback rejects the noise of the current sources. The loop absorbs only $M_3$'s noise. The current-source noise changes the current that $M_3$ must supply (KCL at $S_1$) and, for $M_5$, also the $V_{GS}$ of $M_1$; both reach the output.

**Common mistake.** Giving the upper source the same weight $R_S/2$ as the lower one. $I_{n5}$ is forced through $M_1$, so it also shifts $V_{S1}$ by $I_{n5}/g_{m1}$; the full weight is $1/g_{m1} + R_S/2$.

**Common mistake.** Writing the $R_S$ term as $4kT/R_S$ in a voltage PSD. Its noise current $4kT/R_S$ is referred to the input by multiplying by $R_S^2$ (weight $R_S$), giving $4kTR_S$ in V²/Hz.
