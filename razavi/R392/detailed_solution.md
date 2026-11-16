# Detailed solution - R392

**Approach.** With $R_S$ replaced by an ideal current source and $R_{D2}$ added at the drain of $M_2$, KCL at the input node and at Y forces the small-signal drain current of $M_2$ to equal $-I_{in}$, independent of all transistor parameters, which gives the transimpedance directly. The same KCL applied to total terminal currents shows that no internal noise source can change $M_2$'s drain current, so only $R_{D2}$ contributes to the input-referred noise current.

### Step 1 — Small-signal model

Nodes: in, X, Y and out.

- $R_F$ between in and Y; the gate of $M_1$ draws no current.
- $M_1$: $g_{m1}V_{in}$ from X to ground; $R_D$ from X to ac ground.
- $M_2$: $g_{m2}(V_X - V_Y)$ from out (drain) to Y (source); no $r_O$ and no body effect ($\lambda = \gamma = 0$).
- The ideal current source replacing $R_S$ at Y: an open circuit for small signals.
- $R_{D2}$ from out to ac ground.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at the input node and at Y

The input node connects only to the input source, the gate of $M_1$ (no current) and $R_F$, so **all** of $I_{in}$ flows through $R_F$ into Y. At Y the current source carries no small-signal current, so with $i_{d2}$ the small-signal drain current of $M_2$ (drain to source, i.e. into Y):

$$
\begin{aligned}
i_{d2} + I_{in} &= 0\\
i_{d2} &= -I_{in}.
\end{aligned}
$$

The current gain is **exactly −1**, regardless of $g_{m1}$, $g_{m2}$, $R_D$ or $R_F$. The loop $Y \to R_F \to M_1 \to X \to M_2 \to Y$ adjusts the node voltages until $M_2$'s current balances the current arriving through $R_F$: current–current feedback with $\beta = 1$ and an infinite open-loop current gain (nothing at Y can absorb the input current). The finite loop gain $g_{m1}R_D$ only affects node voltages; for example, $Z_{in} = (R_F + 1/g_{m2})/(1 + g_{m1}R_D)$.

### Step 3 — Transimpedance

With $V_{out} = V_{DD} - R_{D2}I_{D2}$,

$$v_{out} = -R_{D2}\,i_{d2} = -R_{D2}(-I_{in}) = R_{D2}\,I_{in},$$

$$\frac{V_{out}}{I_{in}} = +R_{D2},$$

exact under the stated assumptions.

### Step 4 — Input-referred noise current

With the input open, repeat the KCL of Step 2 using total terminal currents, noise included:

- at the input node, the total current in the $R_F$ branch (resistor plus its noise source) is zero, since the gate draws no current;
- at Y, the total drain current of $M_2$ (controlled part plus its noise) plus the $R_F$ branch current is zero, since the current source is fixed.

Hence $M_2$'s total drain current is zero **whatever** the noise of $M_1$, $M_2$, $R_D$ and $R_F$; these sources only shift node voltages (e.g. $M_2$'s noise $I_{n2}$ is cancelled by $g_{m2}v_{gs2} = -I_{n2}$) and never reach $R_{D2}$.

Only $R_{D2}$'s noise remains, flowing in $R_{D2}$ itself (the drain of $M_2$ has infinite impedance):

$$\overline{V_{n,out}^2} = \frac{4kT}{R_{D2}}R_{D2}^2 = 4kTR_{D2}.$$

Dividing by the transimpedance squared:

$$\overline{I_{n,in}^2} = \frac{4kTR_{D2}}{R_{D2}^2} = \frac{4kT}{R_{D2}}\quad(\mathrm{A^2/Hz}).$$

This relies on the ideal, noiseless current source at Y; a real one would inject its noise current at Y, which by the same KCL would add in full to $\overline{I_{n,in}^2}$.

### Result

With $R_S$ replaced by an ideal current source and $\lambda = \gamma = 0$, KCL at the input node and at Y gives $i_{d2} = -I_{in}$ exactly, so

$$\frac{V_{out}}{I_{in}} = +R_{D2}, \qquad \overline{I_{n,in}^2} = \frac{4kT}{R_{D2}}.$$

The noise of $M_1$, $M_2$, $R_D$ and $R_F$ cannot change $M_2$'s drain current and therefore does not appear; only $R_{D2}$ contributes.

**Common mistake.** Giving the transimpedance as $R_F$ (as in a shunt-feedback TIA with its output at Y) or as a $g_m$-dependent expression. The output is $M_2$'s drain current, pinned to $-I_{in}$ by KCL at Y.

**Common mistake.** Referring the noise of $M_1$, $R_D$ or $R_F$ to the input as if the loop were open (e.g. adding $4kT/R_F$). These sources only move node voltages.

**Common mistake.** Keeping $R_S$. Part of the input current would then flow through $R_S$, the current gain would no longer be exactly −1, and $R_S$'s noise would appear at the output.
