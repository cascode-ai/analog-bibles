# Detailed solution - R020

**Approach.** $M_1$ is diode-connected (gate tied to drain), so it is always saturated and carries the fixed current $I_1$. Its gate–source voltage, which is $V_{out}$, is therefore the threshold plus a fixed overdrive. $V_{in}$ drives the bulk, so it changes $V_{out}$ only through the body effect. Find $V_{SB}$ in terms of $V_{in}$ and $V_{out}$, solve the resulting equation, describe the slope, and note where the source–bulk junction becomes forward-biased.

### Step 1 — Reading the circuit

From the figure and the statement:

- the gate and drain of $M_1$ are both tied to $V_{DD} = 3$ V;
- the source is pulled down by the current source $I_1$ (which flows out of the source to ground);
- $V_{out}$ is measured from gate to source: $V_{out} = V_{GS}$;
- the bulk (dashed line) is driven by $V_{in}$, from 0 to 3 V.

Node voltages:

$$
\begin{aligned}
V_S &= V_{DD} - V_{GS} = 3 - V_{out},\\
V_{SB} &= V_S - V_{in} = 3 - V_{out} - V_{in}.
\end{aligned}
$$

### Step 2 — $V_{out}$ = threshold + overdrive

**Region.** Gate and drain are at the same potential, so $V_{DS} = V_{GS} > V_{GS} - V_{TH}$: a diode-connected MOSFET is **always in saturation** when it conducts.

**Current.** The source node has only two branches, the channel and $I_1$, so the channel carries $I_1$. With the square law and $\beta = \mu_nC_{ox}W/L$:

$$I_1 = \tfrac12\beta\,(V_{GS} - V_{TH})^2 \quad\Longrightarrow\quad V_{GS} - V_{TH} = \sqrt{\frac{2I_1}{\beta}} .$$

The overdrive $V_{ov} = \sqrt{2I_1/\beta}$ is a **constant**, so

$$V_{out} = V_{GS} = V_{TH}(V_{SB}) + \sqrt{\frac{2I_1}{\beta}} .$$

All of the dependence on $V_{in}$ comes through the threshold. With $V_{TH0} = 0.7$ V, $\gamma = 0.45\ \mathrm{V^{1/2}}$ and $2|\phi_F| = 0.9$ V:

$$V_{TH} = 0.7 + 0.45\left(\sqrt{0.9 + V_{SB}} - 0.9487\right),\qquad V_{SB} = 3 - V_{out} - V_{in}.$$

### Step 3 — Direction of the change

Raising $V_{in}$ raises the bulk toward the source, which reduces $V_{SB}$ and hence $V_{TH}$, so **$V_{out}$ falls** as $V_{in}$ rises. (Because $V_{out}$ falls, the source $V_S = 3 - V_{out}$ rises slightly, which partly counteracts the reduction of $V_{SB}$; that is why the change is modest.)

**Slope.** Let $\eta = \partial V_{TH}/\partial V_{SB} = \gamma/(2\sqrt{0.9 + V_{SB}})$. Since the overdrive is constant, $dV_{out} = dV_{TH} = \eta\,dV_{SB}$, and $dV_{SB} = -dV_{out} - dV_{in}$:

$$
\begin{aligned}
dV_{out} &= \eta\,(-dV_{out} - dV_{in})\\
dV_{out}\,(1 + \eta) &= -\eta\,dV_{in}\\
\frac{dV_{out}}{dV_{in}} &= -\frac{\eta}{1 + \eta}.
\end{aligned}
$$

The slope is negative and small in magnitude ($\eta \approx 0.14$–$0.3$). It **steepens** as $V_{SB}$ shrinks, because $\eta \propto 1/\sqrt{0.9 + V_{SB}}$ grows. So the curve is **falling and concave down**.

### Step 4 — Numerical example

Take $\sqrt{2I_1/\beta} = 0.2$ V (any value just shifts the whole curve vertically). Then $V_{out} = V_{TH} + 0.2$ V and $V_{SB} = 2.8 - V_{TH} - V_{in}$. Substitute $u = \sqrt{0.9 + V_{SB}}$, so that $V_{TH} = 3.7 - V_{in} - u^2$, into the body-effect equation ($0.7 - 0.45\times0.9487 = 0.2731$):

$$
\begin{aligned}
3.7 - V_{in} - u^2 &= 0.2731 + 0.45u\\
u^2 + 0.45u - (3.4269 - V_{in}) &= 0\\
u &= \frac{-0.45 + \sqrt{0.2025 + 4\,(3.4269 - V_{in})}}{2} .
\end{aligned}
$$

**$V_{in} = 0$:**

$$
\begin{aligned}
u &= \frac{-0.45 + \sqrt{0.2025 + 13.7076}}{2} = \frac{-0.45 + 3.7296}{2} = 1.6398,\\
V_{SB} &= u^2 - 0.9 = 2.6890 - 0.9 = 1.789\ \mathrm{V},\\
V_{TH} &= 0.7 + 0.45\,(1.6398 - 0.9487) = 1.011\ \mathrm{V},\\
V_{out} &= 1.011 + 0.2 = 1.21\ \mathrm{V}.
\end{aligned}
$$

Check: $V_S = 3 - 1.211 = 1.789$ V, and $V_{SB} = 1.789 - 0 = 1.789$ V. ✓

**$V_{in} = 2.1$ V:** $u = (-0.45 + \sqrt{0.2025 + 5.3076})/2 = (-0.45 + 2.3474)/2 = 0.9487$, so $V_{SB} = 0.9 - 0.9 = 0$, $V_{TH} = V_{TH0} = 0.7$ V and $V_{out} = 0.90$ V. Here the bulk is exactly at the source potential ($V_S = 3 - 0.9 = 2.1\ \mathrm{V} = V_{in}$), so $V_{out} = V_{TH0} + \sqrt{2I_1/\beta}$.

The same steps give the table:

| $V_{in}$ (V) | $V_{SB}$ (V) | $V_{TH}$ (V) | $V_{out}$ (V) | slope $dV_{out}/dV_{in}$ |
|---|---|---|---|---|
| 0 | 1.79 | 1.011 | 1.21 | −0.12 |
| 0.5 | 1.35 | 0.948 | 1.15 | −0.13 |
| 1.0 | 0.92 | 0.880 | 1.08 | −0.14 |
| 1.5 | 0.50 | 0.805 | 1.00 | −0.16 |
| 2.1 | 0 | 0.700 | 0.90 | −0.19 |
| 2.5 | −0.32 | 0.617 | ≈ 0.82 | −0.23 |

### Step 5 — The upper range: forward-biased source–bulk junction

For $V_{in} > V_S$ (beyond about 2.1 V in the example) the p-type bulk is above the n+ source, so the source–bulk junction is **forward biased** ($V_{SB} < 0$).

- Up to a few hundred millivolts of forward bias (about 0.3 V at $V_{in} = 2.5$ V) the junction current is negligible, and the formula above still gives a reasonable estimate: the threshold keeps dropping and $V_{out}$ keeps falling, ever more steeply.
- As the forward bias approaches 0.6–0.7 V (toward $V_{in} = 3$ V; the formula would give about 0.68 V there) the junction conducts heavily. It then supplies a large part of $I_1$ directly from $V_{in}$, diverting it from the channel. The source is pulled up toward roughly $V_{in}$ minus a diode drop, $V_{out}$ drops further, and the body-effect formula is no longer meaningful.
- The drain–bulk junction stays off, since the drain is at 3 V $\ge V_{in}$.

### Result

$M_1$ is diode-connected (always saturated) and carries $I_1$, so

$$V_{out} = V_{GS} = V_{TH}(V_{SB}) + \sqrt{\frac{2I_1}{\beta}}, \qquad V_{SB} = V_S - V_{in} = (3 - V_{out}) - V_{in}.$$

- $V_{out}$ **falls** as $V_{in}$ rises, because raising the bulk reduces $V_{SB}$ and hence $V_{TH}$.
- The slope is $-\eta/(1 + \eta)$ with $\eta = \gamma/(2\sqrt{2|\phi_F| + V_{SB}})$, so the fall gets steeper as $V_{SB}$ approaches zero (concave down).
- $V_{out}$ reaches $V_{TH0} + \sqrt{2I_1/\beta}$ when $V_{in}$ equals the source voltage ($V_{SB} = 0$). Example with $\sqrt{2I_1/\beta} = 0.2$ V: 1.21 V at $V_{in} = 0$ ($V_{SB} \approx 1.79$ V), 1.08 V at 1 V, 1.00 V at 1.5 V, 0.90 V at 2.1 V ($V_{SB} = 0$), ≈ 0.82 V at 2.5 V (forward bias ≈ 0.3 V).
- Beyond that the source–bulk junction is forward biased. Near the top of the range it conducts heavily, diverting $I_1$ from the channel, and the MOS model no longer applies.

**Common mistake.** Concluding that $V_{out}$ is constant because the diode-connected device carries a fixed current. The overdrive is indeed fixed, but $V_{TH}$ depends on $V_{SB}$, and $V_{in}$ changes $V_{SB}$ directly through the bulk.

**Common mistake.** Getting the sign wrong. Raising the bulk of an NMOS toward its source *lowers* the threshold, so $V_{GS}$ needed for the same current falls: $V_{out}$ decreases with $V_{in}$.

**Common mistake.** Extending the body-effect formula all the way to $V_{in} = 3$ V. Once the bulk rises more than about 0.5–0.6 V above the source, the source–bulk pn junction conducts and the square-law/body-effect description breaks down.
