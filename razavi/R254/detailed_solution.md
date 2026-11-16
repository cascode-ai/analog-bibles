# Detailed solution - R254

**Approach.** $M_3$ has its channel between the $V_1$ node and X, and its gate at Y. An MOS channel conducts in either direction, the source being whichever terminal is lower. So $M_3$ can **sink** current from X into $V_1$ (when $V_1 < V_X$) or **inject** current from $V_1$ into X (when $V_1 > V_X$). For small $V_1$, $M_3$ steals all of $I_{REF}$, $M_2$ and $M_1$ are off, and X sits just above $V_1$. As $V_1$ rises past the threshold region, $M_2$ and $M_1$ take over and Y falls. For large $V_1$ the curves become flat, either with $M_3$ off or with $M_3$ injecting a small, constant current. We follow these regions in order.

### Step 1 — The circuit and node equations

Reading the figure:

- $I_{REF}$ flows from $V_{DD}$ into X. $M_2$: drain and gate at X (diode-connected), source grounded. $M_1$: gate at X, source grounded, drain at Y. $R_1$ runs from $V_{DD}$ to Y.
- $M_3$: gate at Y; one channel terminal on the gate line (X), the other on the $V_1$ node.

Notation: $\beta = \mu_nC_{ox}W/L$, $a = \sqrt{2I_{REF}/\beta}$, and the two "reference" levels

$$V_{X0} = V_{GS}(I_{REF}) = 0.7 + a, \qquad V_{Y0} = V_{DD} - R_1I_{REF} .$$

These are the node voltages of the plain mirror without $M_3$ (with $M_1$ saturated, which needs $V_{Y0} \ge a$). Bulks are grounded, so $M_3$'s threshold depends on whichever terminal is its source: $V_{TH3}(V_S) = 0.7 + 0.45(\sqrt{0.9 + V_S} - \sqrt{0.9})$.

Let $I_3$ be $M_3$'s current from the $V_1$ node into X (negative when it flows from X into $V_1$). Then:

$$\text{KCL at X: } I_{REF} + I_3 = \frac{\beta}{2}(V_X - 0.7)^2, \qquad \text{KCL at Y: } \frac{V_{DD} - V_Y}{R_1} = I_{D1}(V_{GS} = V_X, V_{DS} = V_Y) .$$

### Step 2 — Small $V_1$: $M_3$ sinks $I_{REF}$, $V_X \approx V_1$, $V_Y = V_{DD}$

Suppose $V_X < 0.7$ V. Then $M_2$ and $M_1$ are off, no current flows in $R_1$, and $V_Y = V_{DD} = 3$ V. $I_{REF}$ must go somewhere, and the only path is through $M_3$ into the $V_1$ source. $M_3$'s source is the $V_1$ terminal, its drain is X, and its gate is at $V_{DD}$, a very large gate drive $V_{ov3} = V_{DD} - V_1 - V_{TH3}(V_1)$. So it carries $I_{REF}$ with only a small $V_{DS3}$, in the triode region:

$$I_{REF} = \beta\left[V_{ov3}(V_X - V_1) - \tfrac12(V_X - V_1)^2\right] .$$

Solve the quadratic for $V_X - V_1$ (the smaller root is the triode one):

$$V_X = V_1 + V_{ov3} - \sqrt{V_{ov3}^2 - \frac{2I_{REF}}{\beta}} \;\approx\; V_1 + \frac{I_{REF}}{\beta\left[V_{DD} - V_1 - V_{TH3}(V_1)\right]} .$$

**$V_X$ tracks $V_1$ with slope ≈ 1, a few tens of millivolts above it.** This is consistent ($V_X < 0.7$ V) at $V_1 = 0$ provided $I_{REF}/\beta < 1.37\ \mathrm{V^2}$, which holds for any sensible bias.

### Step 3 — Transition: $M_2$ and $M_1$ take over

When $V_X$ passes 0.7 V (at $V_1$ a little below 0.7 V), $M_2$ and $M_1$ start to conduct:

1. $M_1$ pulls current through $R_1$, so $V_Y$ **falls** from $V_{DD}$.
2. A lower $V_Y$ reduces $M_3$'s gate drive, so $M_3$ sinks less of $I_{REF}$.
3. The remainder flows into $M_2$, which raises $V_X$ further, so $M_1$ pulls Y down further.

$V_X$ approaches $V_{X0}$ and $V_Y$ approaches $V_{Y0}$. $M_3$'s current passes through zero exactly when its two channel terminals are at the same voltage:

$$I_3 = 0 \quad\text{at}\quad V_1 = V_X = V_{X0}\ (= V_{GS}(I_{REF})),\qquad V_Y = V_{Y0} .$$

Beyond this point the roles of $M_3$'s terminals swap: the $V_1$ node becomes the drain and X the source.

(If $V_{DD} - R_1I_{REF} < a$, $M_1$ ends up in triode and $V_{Y0}$ is instead the root of $\frac{V_{DD} - V_{Y0}}{R_1} = \beta\left(aV_{Y0} - \tfrac12V_{Y0}^2\right)$.)

### Step 4 — Large $V_1$: flat curves

Now $V_1 > V_X$. $M_3$ can inject current from $V_1$ into X only if its gate–source voltage $V_Y - V_X$ exceeds $V_{TH3}(V_X)$.

**Case A: $V_{Y0} \le V_{X0} + V_{TH3}(V_{X0})$.** $M_3$ stays off, and

$$V_X = V_{X0}, \qquad V_Y = V_{Y0} \qquad\text{for all larger } V_1 .$$

**Case B: $V_{Y0} > V_{X0} + V_{TH3}(V_{X0})$.** $M_3$ conducts from $V_1$ into X. Just after the swap $V_1 - V_X$ is small, so it is in triode and its current grows as $V_1$ rises: $V_X$ keeps rising slightly and $V_Y$ keeps falling. Once $V_1 - V_X$ exceeds $M_3$'s overdrive, i.e. for $V_1 \ge V_{Yh} - V_{TH3}(V_{Xh})$, $M_3$ is saturated. With $\lambda = 0$ its current no longer depends on $V_1$, so the levels freeze at $(V_{Xh}, V_{Yh})$, given by

$$\frac{\beta}{2}(V_{Xh} - 0.7)^2 = I_{REF} + \frac{\beta}{2}\left[V_{Yh} - V_{Xh} - V_{TH3}(V_{Xh})\right]^2, \qquad V_{Yh} = V_{DD} - \frac{\beta R_1}{2}(V_{Xh} - 0.7)^2 .$$

Here $V_{Xh} > V_{X0}$ and $V_{Yh} < V_{Y0}$. Negative feedback ($M_3 \to M_2 \to M_1 \to Y$) keeps $V_Y \approx V_X + V_{GS3}$, so the shift is small.

In both cases **both curves are flat up to $V_1 = V_{DD}$.**

### Step 5 — Numerical example

$I_{REF} = 100\ \mu$A, $R_1 = 10\ \mathrm{k}\Omega$, $W/L = 10/0.5$ ($\beta = 2.68\ \mathrm{mA/V^2}$):

$$
\begin{aligned}
a &= 0.273\ \mathrm{V}, \quad V_{X0} = 0.973\ \mathrm{V}, \quad V_{Y0} = 3 - 1.0 = 2.0\ \mathrm{V},\\
V_{X0} + V_{TH3}(V_{X0}) &= 0.973 + 0.889 = 1.862\ \mathrm{V} < V_{Y0} \quad\Rightarrow\quad \text{Case B.}
\end{aligned}
$$

At $V_1 = 0$: $V_{ov3} = 3 - 0 - 0.7 = 2.3$ V and $V_X = 2.3 - \sqrt{5.29 - 0.0746} = 0.016$ V.

| $V_1$ (V) | 0 | 0.3 | 0.6 | 0.65 | 0.7 | 0.8 | 0.9 | 0.95 | 0.97 | 1.0 | ≥ 1.05 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| $V_X$ (V) | 0.016 | 0.319 | 0.624 | 0.675 | 0.726 | 0.826 | 0.923 | 0.962 | 0.972 | 0.979 | 0.981 |
| $V_Y$ (V) | 3.00 | 3.00 | 3.00 | 3.00 | 2.99 | 2.79 | 2.33 | 2.08 | 2.01 | 1.96 | 1.94 |
| $I_3$ (μA) | −100 | −100 | −100 | −100 | −99 | −79 | −33 | −8 | −1 | +4 | +6 |

$V_X$ stays 16–26 mV above $V_1$ up to about 0.7 V. $V_Y$ then drops steeply. $M_3$ reverses at $V_1 \approx 0.97$ V, and from about 1.05 V both curves are flat at $V_X \approx 0.98$ V and $V_Y \approx 1.94$ V ($M_3$ injecting about 6 μA, saturated).

**Remark: possible bistability.** For a large $R_1I_{REF}$ the curve can fold back. Example: $\beta = 1\ \mathrm{mA/V^2}$, $I_{REF} = 0.2$ mA, $R_1 = 10\ \mathrm{k}\Omega$ ($V_{X0} = 1.33$ V, $V_{Y0} = 1.0$ V). The "$M_3$ off" state $(1.33\ \mathrm{V}, 1.0\ \mathrm{V})$ exists as soon as $V_1 + V_{TH3}(V_1) > V_{Y0}$, i.e. $V_1 > 0.245$ V. The low branch ($M_3$ sinking) survives up to about $V_1 = 0.815$ V ($V_X \approx 1.04$ V, $V_Y \approx 2.4$ V). An upward sweep therefore jumps to the high branch near 0.815 V, while a downward sweep stays on it down to about 0.245 V. For the main example above the solution is unique.

### Result

- **Small $V_1$:** $M_3$ (source at $V_1$, gate at Y $= V_{DD}$) sinks all of $I_{REF}$ from X into the $V_1$ node in the triode region. $V_X \approx V_1 + I_{REF}/\{\beta[V_{DD} - V_1 - V_{TH3}(V_1)]\}$ tracks just above $V_1$ (slope ≈ 1); $M_2$, $M_1$ are off and $V_Y = V_{DD}$.
- **Transition ($V_1 \approx 0.7$–1 V):** once $V_X > 0.7$ V, $M_2$ and $M_1$ conduct, $V_Y$ falls, $M_3$ diverts less, and $M_2$ takes over $I_{REF}$. $V_X$ settles near $V_{X0} = V_{GS}(I_{REF}) = 0.7 + \sqrt{2I_{REF}/\beta}$, and $M_3$'s current reverses at $V_1 = V_{X0}$.
- **Large $V_1$:** both curves are flat. If $V_{Y0} = V_{DD} - R_1I_{REF} \le V_{X0} + V_{TH3}(V_{X0})$, they sit at $(V_{X0}, V_{Y0})$ with $M_3$ off. Otherwise $M_3$ injects a small current from $V_1$ into X, and once it saturates the levels are slightly shifted, $V_{Xh} > V_{X0}$ and $V_{Yh} < V_{Y0}$ (example: 0.98 V and 1.94 V instead of 0.97 V and 2.0 V).

**Common mistake.** Ignoring $M_3$'s reverse conduction and drawing $V_X = V_{GS}(I_{REF})$ and $V_Y = V_{DD} - R_1I_{REF}$ for all $V_1$. For small $V_1$, Y is at $V_{DD}$ and $M_3$ has a huge gate drive with its source at $V_1$, so it swallows all of $I_{REF}$ and drags X down to just above $V_1$.

**Common mistake.** Treating the $V_1$ terminal of $M_3$ as always the drain (or always the source). The source of an NMOS is whichever channel terminal is lower: the $V_1$ node for $V_1 < V_X$, and X for $V_1 > V_X$. The current reverses at $V_1 = V_X$.

**Common mistake.** Misreading the topology, e.g. taking $M_3$'s gate as driven by $V_1$, or its channel as connected to Y or $V_{DD}$, and then letting $V_Y$ follow $V_1$. $V_1$ connects only to one channel terminal of $M_3$. Y is set by $R_1$ from $V_{DD}$ and the current of $M_1$.
