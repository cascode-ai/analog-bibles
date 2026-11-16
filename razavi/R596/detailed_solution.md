# Detailed solution - R596

**Approach.** Two facts determine the answer. (1) In steady state the CM loop must make $M_5$ carry exactly the current supplied by the PMOS loads, which is fixed by $V_b$; so $V_{GS5}$, the voltage of X, cannot change permanently. (2) After $S_1$ opens, X is a floating node, so the injected charge $\Delta q$ must stay on the capacitors connected to X. Combining the two, the charge ends up across $C_1$ and $C_2$ and shifts the output CM level. We confirm this with a charge-conservation equation that includes the loop gain.

### Step 1 — What the CM loop holds fixed

The PMOS loads $M_3$, $M_4$ are current sources with gates at the fixed bias $V_b$; together they supply $I_{D3} + I_{D4}$. In steady state no current flows into capacitors, so all of it must flow through $M_1$, $M_2$ and the tail transistor:

$$I_{D5} = I_{D3} + I_{D4}.$$

$I_{D5}$ is set by $V_{GS5} = V_X$ (the source of $M_5$ is grounded). Hence, after settling, $V_X$ must return to the value that makes $I_{D5}$ equal to the load current, the same as before the injection. If it did not, the current mismatch would keep charging the output nodes and the outputs would keep moving: the CM loop moves the outputs until $V_X$ is restored.

### Step 2 — Where the injected charge goes

After $S_1$ opens, X is connected only to capacitors: $C_1$ (to $V_{out1}$), $C_2$ (to $V_{out2}$) and the gate capacitance of $M_5$, $C_{GS5}$ (to ground). No conducting path reaches X, so its total charge changes only by the injected $\Delta q$. Write the change of the charge on all plates connected to X (only the CM output change matters, since a differential change gives equal and opposite contributions through $C_1 = C_2$):

$$C_1(\Delta V_X - \Delta V_{out,CM}) + C_2(\Delta V_X - \Delta V_{out,CM}) + C_{GS5}\,\Delta V_X = \Delta q,$$

i.e.

$$(C_1 + C_2)(\Delta V_X - \Delta V_{out,CM}) + C_{GS5}\,\Delta V_X = \Delta q .$$

### Step 3 — Steady state from the two facts

From Step 1, $\Delta V_X = 0$ after settling. Substitute into the charge equation:

$$
\begin{aligned}
(C_1 + C_2)(0 - \Delta V_{out,CM}) + 0 &= \Delta q\\
\Delta V_{out,CM} &= -\frac{\Delta q}{C_1 + C_2}.
\end{aligned}
$$

The charge cannot stay on $C_{GS5}$ (that would change $V_X$), so it sits on $C_1$ and $C_2$, changing the voltage they store by $\Delta q/(C_1 + C_2)$. Since X is held where it was, the outputs move instead.

**Sign.** $S_1$ is an NMOS switch, so the injected charge is electrons: $\Delta q < 0$. Then

$$\Delta V_{out,CM} = +\frac{|\Delta q|}{C_1 + C_2},$$

the output CM level **rises**. For $C_1 = C_2 = C$ this is $|\Delta q|/(2C)$.

### Step 4 — Including the finite loop gain

To see how small the residual change of $V_X$ is, model the loop. A change $\Delta V_X$ changes the tail current by $g_{m5}\Delta V_X$. This current change splits equally between the two sides and, through $M_1$, $M_2$ (which act as common-gate devices for CM signals), is drawn from the output nodes, whose resistance is set by the loads, $r_{O3}$ and $r_{O4}$. The resulting CM gain from X to the outputs is

$$\Delta V_{out,CM} = -A_{CM}\,\Delta V_X, \qquad A_{CM} \approx g_{m5}\,(r_{O3}\parallel r_{O4}).$$

<!-- diagram: diagram-01.cir -->

Substitute $\Delta V_{out,CM} = -A_{CM}\Delta V_X$ into the charge equation of Step 2:

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

in agreement with Step 3. The residual on the gate of $M_5$ is smaller than the output shift by the factor $A_{CM}$.

### Step 5 — The transient (how the circuit gets there)

1. **Right after $S_1$ opens.** The injection is fast; before the loop reacts, the outputs (held momentarily by their own load capacitance) have not moved, so the charge divides among the capacitors at X and X jumps by about
$$\Delta V_X(0^+) \approx \frac{\Delta q}{C_1 + C_2 + C_{GS5}}$$
(downward, for electrons).
2. **Loop response.** The lower $V_X$ reduces $I_{D5}$ below the load current. The excess load current charges the output nodes, so both outputs rise. Through $C_1$ and $C_2$, the rising outputs pull X back up.
3. **Settling.** The outputs stop moving when $V_X$ is back at the value giving $I_{D5} = I_{D3} + I_{D4}$; by then they have risen by $|\Delta q|/(C_1 + C_2)$.

So the initial jump of the gate voltage is temporary; the lasting effect is the shift of the output CM level.

### Result

After the circuit settles:

- **Gate of $M_5$:** essentially **no change**. The CM loop restores $V_{GS5}$ because $M_5$ must again carry the load current set by $V_b$; only a small residual $\Delta V_X = \Delta q/[(C_1 + C_2)(1 + A_{CM}) + C_{GS5}] \approx 0$ remains, with $A_{CM} \approx g_{m5}(r_{O3}\parallel r_{O4})$.
- **Output CM level:**
$$\Delta V_{out,CM} \approx -\frac{\Delta q}{C_1 + C_2}\quad\left(= -\frac{\Delta q}{2C}\ \text{for}\ C_1 = C_2 = C\right).$$
For an NMOS switch $\Delta q$ is negative (electrons), so the output CM **rises** by $|\Delta q|/(C_1 + C_2)$.

**Common mistake.** Claiming that the gate of $M_5$ shifts permanently by $\Delta q/(C_1 + C_2)$ while the output CM stays put. That would change the tail current while the load current is fixed, which cannot be a steady state; the loop keeps moving the outputs until the gate voltage is restored.

**Common mistake.** Dividing by the wrong capacitance or multiplying by the loop gain: $\Delta q/C_{GS5}$ (the charge does not end up on $C_{GS5}$), or $A_{CM}\Delta q/(C_1 + C_2)$ (the loop *suppresses* the change at X; it does not amplify the output shift, which is fixed by charge conservation at $-\Delta q/(C_1 + C_2)$). The value $\Delta q/(C_1 + C_2 + C_{GS5})$ is only the initial jump of X, before the loop responds.
