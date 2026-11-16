# Detailed solution - R581

**Approach.** Follow the charge on $C_1$ and $C_2$ through one clock cycle. $M_1$'s turn-off leaves an error on $C_1$ (charge injection plus clock feedthrough). Charge conservation on the isolated $C_1$–$C_2$ node over $M_2$'s whole on–off cycle shows that $M_2$ returns at turn-off exactly what it took at turn-on. The cycle-to-cycle charge-sharing recursion then gives the output error after many cycles.

### Step 1 — Ideal operation and assumptions

Call the top plate of $C_1$ X. With ideal switches, charge conservation for the $k$-th sharing event ($C_1 = C_2 = C$) gives

$$
\begin{aligned}
C\,V_{in} + C\,V_{out}[k-1] &= 2C\,V_{out}[k]\\
V_{out}[k] &= \frac{V_{in} + V_{out}[k-1]}{2},
\end{aligned}
$$

so for a constant input $V_{out} \to V_{in}$, and any other final value is an error caused by the switches.

Each switch has an overlap capacitance $WC_{ov}$ from its gate to each of its two diffusion terminals. Assume $WC_{ov} \ll C$: the overlaps matter as coupling paths from the clock lines, but their loading is neglected, so every node capacitance is $C$.

### Step 2 — $M_1$ turns off: error stored on $C_1$

While CK is high, $M_1$ is in deep triode with both terminals at $V_{in}$, so its channel charge is

$$q_1 = WLC_{ox}\,(V_{DD} - V_{in} - V_{TH1}),$$

where $V_{TH1} \ge V_{TH0}$ includes the body effect at $V_{SB} = V_{in}$ (bulk grounded) and rises with $V_{in}$.

**Charge injection.** When CK falls, let a fraction $\alpha$ of the channel electrons go to $C_1$; the rest goes to the input source, which absorbs it. The split is not given, so keep $\alpha$: $\alpha = 1$ is the worst case and $\alpha = \tfrac12$ an equal split.

$$\Delta V_{inj} = -\frac{\alpha\,q_1}{C}.$$

**Clock feedthrough.** CK falls by $V_{DD}$ and couples to X through $M_1$'s overlap (the conservative textbook model, with the whole swing coupling):

$$\Delta V_{ft} = -V_{DD}\,\frac{WC_{ov}}{WC_{ov} + C} \approx -\frac{WC_{ov}V_{DD}}{C}.$$

After $M_1$ turns off, $C_1$ holds

$$V_1 = V_{in} - \Delta V_1, \qquad \Delta V_1 = \frac{\alpha\,WLC_{ox}(V_{DD} - V_{in} - V_{TH1}) + WC_{ov}V_{DD}}{C}.$$

Both terms lower the stored voltage, and $\Delta V_1$ depends on $V_{in}$ (linearly, and nonlinearly through $V_{TH1}$): an input-dependent error.

### Step 3 — $M_2$ turns on: charge conservation on the merged node

Just before $\overline{CK}$ rises, X is at $V_1$, the output is at $V_2 = V_{out}[k-1]$, and $M_2$'s gate is at 0. With $M_1$ off, X and $V_{out}$ then form one **isolated node** whose total charge is conserved. Connected to it are $C_1$ and $C_2$ to ground, $M_2$'s two overlap capacitances to its gate ($\overline{CK}$) and, while $M_2$ is on, its channel, a capacitor $WLC_{ox}$ from the node to the gate.

<!-- diagram: diagram-01.cir -->

**Before $M_2$ turns on** (gate at 0):

$$Q_{before} = C V_1 + C V_2 + WC_{ov}(V_1 - 0) + WC_{ov}(V_2 - 0).$$

**While $M_2$ is on** (gate at $V_{DD}$, both sides at a common voltage $V_x$), the channel holds electrons, a charge $-q_2$ on the node side, with

$$q_2 = WLC_{ox}\,(V_{DD} - V_x - V_{TH2}),$$

so

$$Q_{on} = 2C V_x + 2WC_{ov}(V_x - V_{DD}) - q_2.$$

Setting $Q_{before} = Q_{on}$, with $WC_{ov} \ll C$ in the coefficients of $V_1$, $V_2$ and $V_x$:

$$
\begin{aligned}
C(V_1 + V_2) &= 2C V_x - 2WC_{ov}V_{DD} - q_2\\
V_x &= \frac{V_1 + V_2}{2} + \frac{WC_{ov}V_{DD} + q_2/2}{C}.
\end{aligned}
$$

While $M_2$ is on, the node sits *above* the ideal average: the rising gate pushes charge in through the overlaps, and forming the channel pulls electrons out of the capacitors.

### Step 4 — $M_2$ turns off: its error cancels

When $\overline{CK}$ falls, the channel charge $-q_2$ splits equally (given), $-q_2/2$ to each capacitor, and the gate couples a step of $-V_{DD}$ through each overlap. The two nodes are now isolated from each other, so conserve charge on each separately.

**Node X:**

$$
\begin{aligned}
C V_{1f} + WC_{ov}(V_{1f} - 0) &= C V_x + WC_{ov}(V_x - V_{DD}) - \frac{q_2}{2}\\
V_{1f} &\approx V_x - \frac{WC_{ov}V_{DD} + q_2/2}{C}.
\end{aligned}
$$

**Output node:** the same capacitance $C$, the same overlap $WC_{ov}$ and the same half of the channel charge give the same equation:

$$V_{2f} \approx V_x - \frac{WC_{ov}V_{DD} + q_2/2}{C}.$$

Substituting $V_x$ from Step 3:

$$
\begin{aligned}
V_{2f} &= \frac{V_1 + V_2}{2} + \frac{WC_{ov}V_{DD} + q_2/2}{C} - \frac{WC_{ov}V_{DD} + q_2/2}{C}\\
&= \frac{V_1 + V_2}{2} = V_{1f}.
\end{aligned}
$$

$M_2$ returns exactly the channel charge it borrowed, and its gate couples back exactly the overlap charge it pushed in, so **$M_2$ produces no net error**: the result is the ideal charge sharing of $V_1$ and $V_2$. This relies on the equal split, $C_1 = C_2$ and equal overlaps. X also carries $M_1$'s overlap ($C + 2WC_{ov}$ against $C + WC_{ov}$ at the output), so the cancellation is exact only to first order in $WC_{ov}/C$.

### Step 5 — Cycle-to-cycle recursion and steady state

From Steps 2 and 4, the held output after the $k$-th transfer is

$$V_{out}[k] = \frac{V_1 + V_{out}[k-1]}{2} = \frac{(V_{in} - \Delta V_1) + V_{out}[k-1]}{2}.$$

This is the ideal averager of Step 1 with $V_{in}$ replaced by $V_{in} - \Delta V_1$. Its fixed point follows from $2V^* = V_{in} - \Delta V_1 + V^*$, i.e. $V^* = V_{in} - \Delta V_1$, and

$$V_{out}[k] = V^* + \frac{V_{out}[0] - V^*}{2^k}.$$

If the output starts at the correct value $V_{in}$, the error grows toward its final value:

| transfer $k$ | 1 | 2 | 3 | $\to\infty$ |
|---|---|---|---|---|
| $V_{in} - V_{out}[k]$ | $\Delta V_1/2$ | $3\Delta V_1/4$ | $7\Delta V_1/8$ | $\Delta V_1$ |

The input has been applied for many cycles, so the output has settled to $V_{out} = V_{in} - \Delta V_1$: $C_2$, repeatedly averaged with a $C_1$ that always carries the same error, ends up with that full error.

### Step 6 — Which part of the cycle has the largest error?

While $M_2$ is on in steady state ($V_1 = V_2 = V_{in} - \Delta V_1$ before it closes), Step 3 gives

$$
\begin{aligned}
V_{out,on} = V_x &= V_{in} - \Delta V_1 + \frac{WC_{ov}V_{DD} + q_2/2}{C}\\
&= V_{in} - \frac{\alpha q_1 + WC_{ov}V_{DD}}{C} + \frac{WC_{ov}V_{DD} + q_2/2}{C}\\
&= V_{in} - \frac{\alpha q_1}{C} + \frac{q_2}{2C}.
\end{aligned}
$$

Since $V_x \approx V_{in}$, $q_2 \approx q_1$, and $V_{out,on} \approx V_{in} + (\tfrac12 - \alpha)\,q_1/C$. For $\alpha = \tfrac12$ the on-phase output equals $V_{in}$ exactly, while the held value is still $V_{in} - \Delta V_1$. For $\tfrac12 \le \alpha \le 1$ the on-phase error $(\alpha - \tfrac12)\,q_1/C$ is smaller than the held error $(\alpha q_1 + WC_{ov}V_{DD})/C$, so the **held value (after $M_2$ turns off) carries the largest error**.

### Step 7 — Worst case over the input range

Expanded, the error is a gain error ($1 + \alpha WLC_{ox}/C$), an offset, and a nonlinearity through $V_{TH1}(V_{in})$:

$$V_{out} = V_{in} - \Delta V_1 = V_{in}\left(1 + \frac{\alpha WLC_{ox}}{C}\right) - \frac{\alpha WLC_{ox}(V_{DD} - V_{TH1})}{C} - \frac{WC_{ov}V_{DD}}{C}.$$

$V_{DD} - V_{in} - V_{TH1}$ falls as $V_{in}$ rises, both directly and through the body effect, and the feedthrough term does not depend on $V_{in}$. So the error is largest at $V_{in} = 0$, where $V_{TH1} = V_{TH0} = 0.7$ V:

$$
\begin{aligned}
V_{DD} - V_{TH0} &= 3\ \mathrm{V} - 0.7\ \mathrm{V} = 2.3\ \mathrm{V},\\
|\Delta V_{out}|_{max} &= \frac{\alpha\,(2.3\ \mathrm{V})\,WLC_{ox} + (3\ \mathrm{V})\,WC_{ov}}{C}.
\end{aligned}
$$

- $\alpha = 1$ (all channel charge onto $C_1$): $|\Delta V_{out}|_{max} = \dfrac{(2.3\ \mathrm{V})\,WLC_{ox} + (3\ \mathrm{V})\,WC_{ov}}{C}$.
- $\alpha = \tfrac12$: $|\Delta V_{out}|_{max} = \dfrac{(1.15\ \mathrm{V})\,WLC_{ox} + (3\ \mathrm{V})\,WC_{ov}}{C}$.

At the top of the range ($V_{in} \to V_{DD} - V_{TH}$) the channel charge vanishes and only the feedthrough term $WC_{ov}V_{DD}/C$ remains.

### Result

$M_2$ contributes no net error (its turn-on and turn-off charges cancel). After many cycles the held output carries the full error of $M_1$:

$$V_{out} = V_{in} - \Delta V_1, \qquad \Delta V_1 \approx \frac{\alpha\,WLC_{ox}(V_{DD} - V_{in} - V_{TH}) + WC_{ov}V_{DD}}{C},$$

where $\alpha$ is the fraction of $M_1$'s channel charge that goes to $C_1$ ($\alpha = 1$ worst case, $\alpha = \tfrac12$ equal split) and $V_{TH}$ includes the body effect at $V_{SB} = V_{in}$. The error is largest at $V_{in} = 0$:

$$|\Delta V_{out}|_{max} \approx \frac{WLC_{ox}(V_{DD} - V_{TH0}) + WC_{ov}V_{DD}}{C} = \frac{(2.3\ \mathrm{V})\,WLC_{ox} + (3\ \mathrm{V})\,WC_{ov}}{C}\quad(\alpha = 1),$$

or $[(1.15\ \mathrm{V})\,WLC_{ox} + (3\ \mathrm{V})\,WC_{ov}]/C$ for $\alpha = \tfrac12$. After the first transfer only half of this error appears; it builds up to the full value over the cycles.

**Common mistake.** Treating $M_2$'s turn-off as a fresh pedestal $-(q_2/2 + WC_{ov}V_{DD})/C$ on $C_2$ every cycle, which gives a steady-state error about three times too large. $M_2$ took the same channel and overlap charge from the capacitors when it turned on, so the two effects cancel.

**Common mistake.** Quoting only the first-transfer error $\Delta V_1/2$. The input has been applied for many cycles, and the averaging drives the held output to the full $\Delta V_1$.

**Common mistake.** Writing $M_1$'s error as independent of $V_{in}$, or dropping its clock feedthrough. The channel charge is proportional to $V_{DD} - V_{in} - V_{TH}$, and the overlap term $WC_{ov}V_{DD}/C$ is present at every input; an NMOS switch injects electrons, so the pedestal is always negative.
