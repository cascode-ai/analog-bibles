# Detailed solution - R565

**Approach.** Write the loop equation of the modified circuit (KVL around the gate–source loop, with the PMOS mirror forcing equal currents) and look for operating points. Then check their *stability* through the loop gain of the positive-feedback current loop, both as a small-signal return ratio and by tracing the large-signal current transfer, and compare with the original circuit.

### Step 1 — Loop equations of the original and modified circuits

In both circuits the 1:1 PMOS mirror forces $I_{REF} = I_{out} = I$. In the original, KVL around the gate loop with $\beta_N = \mu_nC_{ox}(W/L)_N$ gives

$$V_{GS1} = V_{GS2} + IR_S, \qquad \sqrt{\frac{2I}{\beta_N}}\left(1 - \frac{1}{\sqrt K}\right) = IR_S \quad\Longrightarrow\quad I = \frac{2}{\beta_NR_S^2}\left(1 - \frac{1}{\sqrt K}\right)^2 ,$$

independent of $V_{DD}$: the wider $M_2$ needs less overdrive than $M_1$, and the voltage saved drops across $R_S$.

In the modified circuit $M_1$ is still diode-connected (gate and drain at node N), but its source is at $IR_S$, so $V_N = V_{GS1} + IR_S$; $M_2$'s source is grounded, so $V_{GS2} = V_N$:

$$V_{GS2} = V_{GS1} + IR_S .$$

$M_1$'s source is now above its grounded bulk, so $V_{TH1} = V_{TH0} + \Delta V_{TH1}$ with $\Delta V_{TH1} > 0$ for $I > 0$.

<!-- diagram: diagram-01.cir -->

### Step 2 — Labeled sizes ($M_2$ is $K$ times wider): no operating point

With the square law:

$$V_{TH0} + \sqrt{\frac{2I}{K\beta_N}} = V_{TH0} + \Delta V_{TH1} + \sqrt{\frac{2I}{\beta_N}} + IR_S ,$$

$$\sqrt{\frac{2I}{\beta_N}}\left(\frac{1}{\sqrt K} - 1\right) = IR_S + \Delta V_{TH1}.$$

For $K > 1$ and $I > 0$ the left side is **negative** and the right side **positive**, so the only solution is $I = 0$: the wider $M_2$ needs *less* $V_{GS}$ than $M_1$ for the same current, yet the loop gives it *more* (by $IR_S$).

**Current transfer.** If $M_4$ delivers $I_{REF}$ to $M_1$, then $V_{ov1} = \sqrt{2I_{REF}/\beta_N}$ and $M_2$ gets the overdrive $V_{ov1} + I_{REF}R_S + \Delta V_{TH1}$, so

$$I_{out} = \frac12K\beta_N\left(V_{ov1} + I_{REF}R_S + \Delta V_{TH1}\right)^2 > \frac12K\beta_NV_{ov1}^2 = K\,I_{REF} > I_{REF}.$$

The mirror returns $I_{out}$ as the new $I_{REF}$, so each trip multiplies the current by *more* than $K$, at every level including near zero (where, as in the original, the gain is about $K$). The zero-current state is unstable too, and any small current **regenerates and grows**.

The growth stops only when a transistor leaves saturation: as the current rises, N ($V_{GS1} + IR_S$) moves up and P ($V_{DD} - |V_{GS3}|$) moves down, until $M_2$ or $M_4$ enters triode (the diode-connected $M_1$ and $M_3$ always stay saturated). The final current is then set by $V_{DD}$ and the triode resistance: **not** supply-independent, and possibly very large.

### Step 3 — Reversed sizes ($M_1$ is $K$ times wider): an operating point exists

With $(W/L)_1 = K(W/L)_2$, $\beta_2 = \mu_nC_{ox}(W/L)_2$, and $M_1$'s body effect neglected:

$$
\begin{aligned}
\sqrt{\frac{2I}{\beta_2}} &= \sqrt{\frac{2I}{K\beta_2}} + IR_S\\
\sqrt{\frac{2I}{\beta_2}}\left(1 - \frac{1}{\sqrt K}\right) &= IR_S\\
I &= \frac{2}{\mu_nC_{ox}(W/L)_2R_S^2}\left(1 - \frac{1}{\sqrt K}\right)^2 ,
\end{aligned}
$$

the same form as the original. Whether this point is usable depends on its stability.

### Step 4 — Stability: loop gain at the operating point

Break the loop at the current $M_4$ injects into N, inject a small current $i$, and follow it around (body effect neglected).

**Modified circuit (reversed sizes).** The diode-connected $M_1$ with $R_S$ in its source presents $1/g_{m1} + R_S$ at N (since $i = g_{m1}(v_N - v_{S1})$ and $v_{S1} = iR_S$). $M_2$ converts $v_N$ to $g_{m2}v_N$, and the mirror returns it to N:

$$L_{mod} = g_{m2}\left(R_S + \frac{1}{g_{m1}}\right).$$

At the operating point $V_{ov1} = V_{ov2}/\sqrt K$, so $IR_S = V_{ov2} - V_{ov1} = V_{ov2}(1 - 1/\sqrt K)$. With $g_m = 2I/V_{ov}$:

$$
\begin{aligned}
g_{m2}R_S &= \frac{2IR_S}{V_{ov2}} = 2\left(1 - \frac{1}{\sqrt K}\right),\\
\frac{g_{m2}}{g_{m1}} &= \frac{V_{ov1}}{V_{ov2}} = \frac{1}{\sqrt K},\\
L_{mod} &= 2 - \frac{2}{\sqrt K} + \frac{1}{\sqrt K} = 2 - \frac{1}{\sqrt K} .
\end{aligned}
$$

For $K = 4$: $L_{mod} = 2 - 0.5 = 1.5 > 1$.

**Original circuit.** N has impedance $1/g_{m1}$, and the degenerated $M_2$ has transconductance $g_{m2}/(1 + g_{m2}R_S)$:

$$L_{orig} = \frac{g_{m2}}{g_{m1}(1 + g_{m2}R_S)} .$$

At its operating point $g_{m2}/g_{m1} = \sqrt K$ and $g_{m2}R_S = 2IR_S/V_{ov2} = 2\sqrt K(1 - 1/\sqrt K) = 2\sqrt K - 2$, so

$$L_{orig} = \frac{\sqrt K}{2\sqrt K - 1} \quad(= 0.67 \text{ for } K = 4) < 1 .$$

An equilibrium of a positive-feedback loop is stable only if $L < 1$. The original satisfies this; in the modified circuit a slightly larger current returns even larger and runs away to the supply-limited state, while a slightly smaller one collapses toward zero.

### Step 5 — A numerical picture

Take $\beta = 1$ mA/V² (for $M_1$ in the original and labeled cases, for $M_2$ in the reversed case), $K = 4$ and $R_S = 1$ kΩ, neglecting body effect. For each injected $I_{REF}$, the NMOS pair returns $I_{out}$ (all values in mA):

| $I_{REF}$ | Original | Modified, labeled sizes | Modified, reversed sizes |
|---|---|---|---|
| 0.1 | 0.162 | 0.60 | 0.052 |
| 0.4 | 0.431 | 3.35 | 0.359 |
| 0.5 | **0.500** | 4.50 | **0.500** |
| 0.6 | 0.564 | 5.75 | 0.659 |
| 0.8 | 0.681 | 8.53 | 1.026 |

- **Original:** $I_{out} > I_{REF}$ below 0.5 mA and $I_{out} < I_{REF}$ above it, so the current is pushed toward 0.5 mA from both sides: a stable equilibrium.
- **Labeled sizes:** $I_{out}$ is always several times $I_{REF}$: no equilibrium, and the current runs away.
- **Reversed sizes:** $I_{out} < I_{REF}$ below 0.5 mA (the current decays toward zero) and $I_{out} > I_{REF}$ above it (it runs away): an unstable equilibrium, with slope $1.5$ there, matching $L_{mod}$.

### Result

The modified circuit has **no stable, supply-independent operating point**.

- **New loop equation** ($I_{REF} = I_{out} = I$, gates tied, $M_1$'s source at $IR_S$): $V_{GS2} = V_{GS1} + IR_S$.
- **With the labeled sizes** ($M_2$ $K$ times wider, $K > 1$), $\sqrt{2I/(K\beta_N)} = \sqrt{2I/\beta_N} + IR_S + \Delta V_{TH1}$ has no solution with $I > 0$, and $M_1$'s body effect makes it worse. For any $I_{REF}$ the NMOS side delivers $I_{out} > K\,I_{REF} > I_{REF}$, so the loop gain exceeds unity at every current. The current regenerates until $M_2$ or $M_4$ enters triode, and it is then set by $V_{DD}$.
- **If $M_1$ is made the wider device** ($(W/L)_1 = K(W/L)_2$), an equilibrium $I = \dfrac{2}{\mu_nC_{ox}(W/L)_2R_S^2}\left(1 - \dfrac{1}{\sqrt K}\right)^2$ exists, but it is unstable. Its loop gain is $g_{m2}(R_S + 1/g_{m1}) = 2 - 1/\sqrt K > 1$ (1.5 for $K = 4$), against $\sqrt K/(2\sqrt K - 1) < 1$ (0.67) in the original. Any perturbation grows, toward zero current or toward the supply-limited state.
- **Role of $K$ and $R_S$:** the degeneration must sit in the source of the *wider* transistor driven by the diode-connected device ($M_2$). There it reduces the positive-feedback loop gain below unity at the operating point. Moving $R_S$ to $M_1$ destroys the useful operating point, so the modified circuit is not a usable bias.

**Common mistake.** Assuming the circuit still works with the same current formula and $M_2$ wider. With $R_S$ under $M_1$ the loop requires $V_{GS2} > V_{GS1}$, which a wider $M_2$ carrying the same current cannot satisfy.

**Common mistake.** Swapping the sizes, finding a valid-looking solution, and declaring the circuit supply-independent. In a positive-feedback loop a dc solution is an operating point only if its loop gain is below one; here it is $2 - 1/\sqrt K > 1$.

**Common mistake.** Concluding that, without a valid operating point, the circuit simply carries zero current. With $M_2$ wider the zero state is unstable as well (low-current loop gain above $K$), so any leakage or start-up kick makes the current run away to a supply-dependent, possibly large value.
