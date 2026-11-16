# Detailed solution - R596

**Approach.** In steady state the CM loop must make $M_5$ carry exactly the current supplied by the PMOS loads, which is fixed by $V_b$, so $V_{GS5} = V_X$ cannot change permanently. After $S_1$ opens, X floats, so the injected charge $\Delta q$ must stay on the capacitors at X. Together, these put the charge across $C_1$ and $C_2$, shifting the output CM level; a charge-conservation equation with the loop gain confirms it.

### Step 1 — What the CM loop holds fixed

The loads $M_3$, $M_4$ (gates at the fixed $V_b$) supply $I_{D3} + I_{D4}$, and in steady state all of it must flow through $M_1$, $M_2$ and the tail:

$$I_{D5} = I_{D3} + I_{D4}.$$

$I_{D5}$ is set by $V_{GS5} = V_X$, so after settling $V_X$ must return to its value before the injection. Otherwise the current mismatch would keep charging the output nodes, and the loop keeps moving the outputs until $V_X$ is restored.

### Step 2 — Where the injected charge goes

After $S_1$ opens, X connects only to $C_1$ (to $V_{out1}$), $C_2$ (to $V_{out2}$) and $C_{GS5}$ (to ground), so its total charge changes only by $\Delta q$. With $C_1 = C_2$ a differential output change contributes nothing, so only the CM change enters:

$$C_1(\Delta V_X - \Delta V_{out,CM}) + C_2(\Delta V_X - \Delta V_{out,CM}) + C_{GS5}\,\Delta V_X = \Delta q,$$

i.e.

$$(C_1 + C_2)(\Delta V_X - \Delta V_{out,CM}) + C_{GS5}\,\Delta V_X = \Delta q .$$

### Step 3 — Steady state from the two facts

With $\Delta V_X = 0$ after settling (Step 1):

$$
\begin{aligned}
(C_1 + C_2)(0 - \Delta V_{out,CM}) + 0 &= \Delta q\\
\Delta V_{out,CM} &= -\frac{\Delta q}{C_1 + C_2}.
\end{aligned}
$$

The charge cannot stay on $C_{GS5}$ (that would change $V_X$), so it sits on $C_1$ and $C_2$, changing their stored voltage by $\Delta q/(C_1 + C_2)$, and the outputs move instead of X.

**Sign.** $S_1$ is an NMOS switch, so it injects electrons, $\Delta q < 0$, and the output CM level **rises**:

$$\Delta V_{out,CM} = +\frac{|\Delta q|}{C_1 + C_2},$$

i.e. $|\Delta q|/(2C)$ for $C_1 = C_2 = C$.

### Step 4 — Including the finite loop gain

A change $\Delta V_X$ changes the tail current by $g_{m5}\Delta V_X$, which $M_1$, $M_2$ (common-gate for CM signals) draw from the output nodes, whose CM resistance is set by $r_{O3}$ and $r_{O4}$:

$$\Delta V_{out,CM} = -A_{CM}\,\Delta V_X, \qquad A_{CM} \approx g_{m5}\,(r_{O3}\parallel r_{O4}).$$

<!-- diagram: diagram-01.cir -->

Substituting into the charge equation of Step 2:

$$
\begin{aligned}
(C_1 + C_2)(\Delta V_X + A_{CM}\Delta V_X) + C_{GS5}\,\Delta V_X &= \Delta q\\
\Delta V_X\left[(C_1 + C_2)(1 + A_{CM}) + C_{GS5}\right] &= \Delta q\\
\Delta V_X &= \frac{\Delta q}{(C_1 + C_2)(1 + A_{CM}) + C_{GS5}},\\
\Delta V_{out,CM} = -A_{CM}\,\Delta V_X &= -\frac{\Delta q}{(C_1 + C_2)\,\dfrac{1 + A_{CM}}{A_{CM}} + \dfrac{C_{GS5}}{A_{CM}}}.
\end{aligned}
$$

For a large loop gain ($A_{CM} \gg 1$ and $A_{CM}(C_1 + C_2) \gg C_{GS5}$):

$$\Delta V_X \approx \frac{\Delta q}{A_{CM}(C_1 + C_2)} \approx 0, \qquad \Delta V_{out,CM} \approx -\frac{\Delta q}{C_1 + C_2},$$

in agreement with Step 3; the residual at the gate of $M_5$ is smaller than the output shift by the factor $A_{CM}$.

### Step 5 — The transient

1. **Right after $S_1$ opens**, before the loop reacts, the outputs have not moved, so X jumps by about
$$\Delta V_X(0^+) \approx \frac{\Delta q}{C_1 + C_2 + C_{GS5}}$$
(downward, for electrons).
2. **Loop response.** The lower $V_X$ reduces $I_{D5}$ below the load current; the excess load current charges both outputs upward, and through $C_1$ and $C_2$ they pull X back up.
3. **Settling.** The outputs stop when $V_X$ again gives $I_{D5} = I_{D3} + I_{D4}$, having risen by $|\Delta q|/(C_1 + C_2)$.

The gate-voltage jump is temporary; the lasting effect is the output CM shift.

### Result

After the circuit settles:

- **Gate of $M_5$:** essentially **no change**. The CM loop restores $V_{GS5}$ because $M_5$ must again carry the load current set by $V_b$; only a small residual $\Delta V_X = \Delta q/[(C_1 + C_2)(1 + A_{CM}) + C_{GS5}] \approx 0$ remains, with $A_{CM} \approx g_{m5}(r_{O3}\parallel r_{O4})$.
- **Output CM level:**
$$\Delta V_{out,CM} \approx -\frac{\Delta q}{C_1 + C_2}\quad\left(= -\frac{\Delta q}{2C}\ \text{for}\ C_1 = C_2 = C\right).$$
For an NMOS switch $\Delta q$ is negative (electrons), so the output CM **rises** by $|\Delta q|/(C_1 + C_2)$.

**Common mistake.** Claiming that the gate of $M_5$ shifts permanently by $\Delta q/(C_1 + C_2)$ while the output CM stays put. That would change the tail current while the load current is fixed, which cannot be a steady state.

**Common mistake.** Answering $\Delta q/C_{GS5}$ (the charge does not end up on $C_{GS5}$) or $A_{CM}\Delta q/(C_1 + C_2)$ (the loop suppresses the change at X; it does not amplify the output shift). $\Delta q/(C_1 + C_2 + C_{GS5})$ is only the initial jump of X, before the loop responds.
