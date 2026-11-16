# Detailed solution - R565

**Approach.** Write the loop equation of the modified circuit (KVL around the gate–source loop, with the PMOS mirror forcing equal currents) and look for operating points. Then check their *stability* by computing the loop gain of the positive-feedback current loop, either as a small-signal return ratio or by tracing the large-signal current transfer around the loop. We compare everything with the original circuit to see what the source resistor actually does.

### Step 1 — Reminder: why the original circuit works

In the original circuit, $M_1$ (diode-connected, source grounded) and $M_2$ ($K$ times wider, with $R_S$ in its source) share a gate. $M_3$ (diode-connected) and $M_4$ form a 1:1 PMOS mirror, so $I_{REF} = I_{out} = I$. KVL around the gate loop:

$$V_{GS1} = V_{GS2} + IR_S .$$

With $\beta_N = \mu_nC_{ox}(W/L)_N$ and the square law $V_{GS} = V_{TH} + \sqrt{2I/\beta}$:

$$\sqrt{\frac{2I}{\beta_N}}\left(1 - \frac{1}{\sqrt K}\right) = IR_S \quad\Longrightarrow\quad I = \frac{2}{\beta_NR_S^2}\left(1 - \frac{1}{\sqrt K}\right)^2,$$

which is independent of $V_{DD}$. The wider $M_2$ needs less overdrive than $M_1$, and the voltage saved is exactly what drops across $R_S$.

### Step 2 — The modified circuit and its loop equation

Now $M_2$'s source is grounded and $R_S$ sits between $M_1$'s source and ground. $M_1$ is still diode-connected (gate and drain at node N), but its source is at $IR_S$, so

$$V_N = V_{GS1} + IR_S .$$

$M_2$'s gate is at N and its source at ground, so $V_{GS2} = V_N$. The new loop equation is

$$V_{GS2} = V_{GS1} + IR_S .$$

$M_1$'s source is now above its grounded bulk, so it also suffers body effect: $V_{TH1} = V_{TH0} + \Delta V_{TH1}$ with $\Delta V_{TH1} > 0$ for $I > 0$.

<!-- diagram: diagram-01.cir -->

### Step 3 — Labeled sizes ($M_2$ is $K$ times wider): no operating point

Substitute the square law into the loop equation:

$$V_{TH0} + \sqrt{\frac{2I}{K\beta_N}} = V_{TH0} + \Delta V_{TH1} + \sqrt{\frac{2I}{\beta_N}} + IR_S .$$

Cancel $V_{TH0}$ and move the overdrive terms to the left:

$$\sqrt{\frac{2I}{\beta_N}}\left(\frac{1}{\sqrt K} - 1\right) = IR_S + \Delta V_{TH1}.$$

For $K > 1$ and $I > 0$ the left side is **negative** and the right side is **positive**, so the only solution is $I = 0$. In words: $M_2$ is wider, so it needs *less* $V_{GS}$ than $M_1$ for the same current, yet the loop now gives it *more* $V_{GS}$ than $M_1$ (by $IR_S$).

**What actually happens: a current-transfer argument.** Suppose $M_4$ delivers some current $I_{REF}$ to $M_1$. Then $M_1$ has overdrive $V_{ov1} = \sqrt{2I_{REF}/\beta_N}$, and $M_2$ gets the overdrive $V_{ov1} + I_{REF}R_S + \Delta V_{TH1}$, so

$$I_{out} = \frac12K\beta_N\left(V_{ov1} + I_{REF}R_S + \Delta V_{TH1}\right)^2 > \frac12K\beta_NV_{ov1}^2 = K\,I_{REF} > I_{REF}.$$

The PMOS mirror returns $I_{out}$ as the new $I_{REF}$. Each trip around the loop multiplies the current by *more* than $K$, at every current level including near zero (where, as in the original circuit, the gain is about $K$). The zero-current state is therefore unstable too, and any small current **regenerates and grows**.

The growth stops only when a transistor leaves saturation. As the current rises, node N ($V_{GS1} + IR_S$) moves up and node P ($V_{DD} - |V_{GS3}|$) moves down, until $M_2$ or $M_4$ enters the triode region. (The diode-connected $M_1$ and $M_3$ always stay saturated, since $V_{DS} = V_{GS}$.) The final current is then set by $V_{DD}$ and the triode resistance, so it is **not** supply-independent, and it may be very large.

### Step 4 — Reversed sizes ($M_1$ is $K$ times wider): an operating point exists

One might try to rescue the circuit by making $M_1$ the wider device: $(W/L)_1 = K(W/L)_2$, with $\beta_2 = \mu_nC_{ox}(W/L)_2$. Neglecting $M_1$'s body effect, the loop equation becomes

$$
\begin{aligned}
\sqrt{\frac{2I}{\beta_2}} &= \sqrt{\frac{2I}{K\beta_2}} + IR_S\\
\sqrt{\frac{2I}{\beta_2}}\left(1 - \frac{1}{\sqrt K}\right) &= IR_S\\
I &= \frac{2}{\mu_nC_{ox}(W/L)_2R_S^2}\left(1 - \frac{1}{\sqrt K}\right)^2 ,
\end{aligned}
$$

the same form as the original. Is this point usable? We must check its stability.

### Step 5 — Stability: loop gain at the operating point

Break the loop at the current that $M_4$ injects into node N, inject a small current $i$, and follow it around (small-signal, body effect neglected).

**Modified circuit (reversed sizes).** The diode-connected $M_1$ with $R_S$ in its source presents an impedance $1/g_{m1} + R_S$ at N, because $i = g_{m1}(v_N - v_{S1})$ and $v_{S1} = iR_S$. So $v_N = i(1/g_{m1} + R_S)$. $M_2$ (source grounded) converts this to $g_{m2}v_N$, and the 1:1 mirror returns it to N. The loop gain is

$$L_{mod} = g_{m2}\left(R_S + \frac{1}{g_{m1}}\right).$$

At the operating point, $V_{ov1} = V_{ov2}/\sqrt K$ ($M_1$ is $K$ times wider), so $IR_S = V_{ov2} - V_{ov1} = V_{ov2}(1 - 1/\sqrt K)$. With $g_m = 2I/V_{ov}$:

$$
\begin{aligned}
g_{m2}R_S &= \frac{2IR_S}{V_{ov2}} = 2\left(1 - \frac{1}{\sqrt K}\right),\\
\frac{g_{m2}}{g_{m1}} &= \frac{V_{ov1}}{V_{ov2}} = \frac{1}{\sqrt K},\\
L_{mod} &= 2 - \frac{2}{\sqrt K} + \frac{1}{\sqrt K} = 2 - \frac{1}{\sqrt K} .
\end{aligned}
$$

For $K = 4$: $L_{mod} = 2 - 0.5 = 1.5 > 1$.

**Original circuit.** Now N has impedance $1/g_{m1}$, and $M_2$ with source degeneration has transconductance $g_{m2}/(1 + g_{m2}R_S)$:

$$L_{orig} = \frac{g_{m2}}{g_{m1}(1 + g_{m2}R_S)} .$$

At its operating point $g_{m2}/g_{m1} = \sqrt K$ and $g_{m2}R_S = 2IR_S/V_{ov2} = 2\sqrt K(1 - 1/\sqrt K) = 2\sqrt K - 2$, so

$$L_{orig} = \frac{\sqrt K}{2\sqrt K - 1} \quad(= 0.67 \text{ for } K = 4) < 1 .$$

**Meaning.** The loop is a *positive*-feedback loop (an increase of current returns as a further increase). An equilibrium of such a loop is stable only if the returned perturbation is smaller than the original one, $L < 1$. The original circuit satisfies this. The modified one does not: a slightly larger current returns even larger and runs away to the supply-limited state, while a slightly smaller one collapses toward zero.

### Step 6 — A numerical picture

Take $\beta = 1$ mA/V² (for $M_1$ in the original and labeled cases, for $M_2$ in the reversed case), $K = 4$ and $R_S = 1$ kΩ, neglecting body effect. For each injected $I_{REF}$, the NMOS pair returns $I_{out}$ (all values in mA):

| $I_{REF}$ | Original | Modified, labeled sizes | Modified, reversed sizes |
|---|---|---|---|
| 0.1 | 0.162 | 0.60 | 0.052 |
| 0.4 | 0.431 | 3.35 | 0.359 |
| 0.5 | **0.500** | 4.50 | **0.500** |
| 0.6 | 0.564 | 5.75 | 0.659 |
| 0.8 | 0.681 | 8.53 | 1.026 |

- **Original:** $I_{out} > I_{REF}$ below 0.5 mA and $I_{out} < I_{REF}$ above it, so the current is pushed toward 0.5 mA from both sides. The equilibrium is stable.
- **Labeled sizes:** $I_{out}$ is always several times $I_{REF}$. There is no equilibrium, and the current runs away.
- **Reversed sizes:** $I_{out} < I_{REF}$ below 0.5 mA (the current decays toward zero) and $I_{out} > I_{REF}$ above it (it runs away). The equilibrium is unstable, with slope $1.5$ there, matching $L_{mod}$.

### Result

The modified circuit has **no stable, supply-independent operating point**.

- **New loop equation** ($I_{REF} = I_{out} = I$, gates tied, $M_1$'s source at $IR_S$): $V_{GS2} = V_{GS1} + IR_S$.
- **With the labeled sizes** ($M_2$ $K$ times wider, $K > 1$), $\sqrt{2I/(K\beta_N)} = \sqrt{2I/\beta_N} + IR_S + \Delta V_{TH1}$ has no solution with $I > 0$, and $M_1$'s body effect makes it worse. For any $I_{REF}$ the NMOS side delivers $I_{out} > K\,I_{REF} > I_{REF}$, so the loop gain exceeds unity at every current. The current regenerates until $M_2$ or $M_4$ enters triode, and it is then set by $V_{DD}$.
- **If $M_1$ is made the wider device** ($(W/L)_1 = K(W/L)_2$), an equilibrium $I = \dfrac{2}{\mu_nC_{ox}(W/L)_2R_S^2}\left(1 - \dfrac{1}{\sqrt K}\right)^2$ exists, but it is unstable. Its loop gain is $g_{m2}(R_S + 1/g_{m1}) = 2 - 1/\sqrt K > 1$ (1.5 for $K = 4$), against $\sqrt K/(2\sqrt K - 1) < 1$ (0.67) in the original. Any perturbation grows, toward zero current or toward the supply-limited state.
- **Role of $K$ and $R_S$:** the degeneration must sit in the source of the *wider* transistor driven by the diode-connected device ($M_2$). There it reduces the positive-feedback loop gain below unity at the operating point. Moving $R_S$ to $M_1$ destroys the useful operating point, so the modified circuit is not a usable bias.

**Common mistake.** Assuming the circuit still works with the same current formula, $I = \frac{2}{\mu_nC_{ox}(W/L)_NR_S^2}(1 - 1/\sqrt K)^2$, and $M_2$ wider. With $R_S$ under $M_1$, the loop requires $V_{GS2} > V_{GS1}$, which a wider $M_2$ carrying the same current cannot satisfy, so that formula has no meaning here.

**Common mistake.** Swapping the sizes, finding a valid-looking solution, and declaring the circuit supply-independent. A solution of the dc equations is not automatically an operating point. In a positive-feedback loop it must also have a loop gain below one. Here it is $2 - 1/\sqrt K > 1$, so the circuit never settles there.

**Common mistake.** Concluding that, without a valid operating point, the circuit simply carries zero current. With $M_2$ wider the zero state is unstable as well (the low-current loop gain exceeds $K$), so any leakage or start-up kick makes the current run away to a supply-dependent value, possibly large.
