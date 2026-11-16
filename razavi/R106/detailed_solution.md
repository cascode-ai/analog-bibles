# Detailed solution - R106

**Approach.** This is a folded-cascode branch. The current source $I_1$ feeds node $P$, $M_1$ (gate $V_{b2}$) sinks current from $P$, and $M_2$ (gate $V_{b1}$) connects $P$ to the test source. KCL at $P$ gives $I_X = I_{D1} - I_1$: the test source supplies whatever $M_1$ sinks beyond $I_1$. So $I_X$ is controlled by $M_1$'s current, which depends on $V_P$; $M_2$ only sets how $V_P$ follows $V_X$. Follow $V_X$ from high values (cascode saturated) down to 0 V (where $M_2$ conducts in reverse).

### Step 1 — The circuit and KCL at node $P$

From the figure: the ideal current source $I_1$ flows from $V_{DD}$ into node $P$. $M_1$ has drain at $P$, gate at $V_{b2}$ and source at ground. $M_2$ has one terminal at $P$, gate at $V_{b1}$, and its other terminal (the "drain" in normal operation) connected to the source $V_X$; $I_X$ flows from the source into this terminal. Bulks are at ground.

**KCL at $P$.** Into $P$: $I_1$ and the current $I_X$ coming through $M_2$. Out of $P$: $M_1$'s drain current:

$$I_1 + I_X = I_{D1} \quad\Longrightarrow\quad I_X = I_{D1} - I_1 .$$

**$M_1$'s current versus $V_P$.** $V_{GS1} = V_{b2}$ is fixed, so

$$
I_{D1} =
\begin{cases}
\beta_1\left[(V_{b2} - 0.7)V_P - \tfrac12V_P^2\right], & V_P < V_{b2} - 0.7\ \text{(triode)},\\
I_B = \tfrac12\beta_1(V_{b2} - 0.7)^2, & V_P \ge V_{b2} - 0.7\ \text{(saturation)}.
\end{cases}
$$

We are told $I_B > I_1$, so $M_1$, when saturated, can sink all of $I_1$ plus some extra current from $M_2$.

### Step 2 — Large $V_X$: cascode saturated, a flat plateau

For large $V_X$, $M_2$ is saturated and acts as a cascode (a source follower of $V_{b1}$ whose source is $P$). If $M_1$ is also saturated, it sinks $I_B$, of which $I_1$ comes from the current source, so

$$I_X = I_B - I_1 \quad\text{(constant, the folded-cascode current)}.$$

$M_2$ carries this current, so its source sits at

$$V_P = V_{b1} - V_{TH2}(V_P) - \sqrt{\frac{2(I_B - I_1)}{\beta_2}}, \qquad V_{TH2}(V_P) = 0.7 + 0.45\left(\sqrt{0.9 + V_P} - \sqrt{0.9}\right).$$

This picture is consistent if $V_P \ge V_{b2} - 0.7$ V (so $M_1$ is indeed saturated). $M_2$ is saturated as long as

$$V_X \ge V_{b1} - V_{TH2}(V_P) .$$

**If $V_{b1}$ is too low** for $V_P$ to reach $V_{b2} - 0.7$ V, i.e. if $\tfrac12\beta_2[V_{b1} - (V_{b2} - 0.7) - V_{TH2}(V_{b2} - 0.7)]^2 < I_B - I_1$, then $M_2$ saturates while $M_1$ is still in triode. The plateau is then lower than $I_B - I_1$, set by $\tfrac12\beta_2[V_{b1} - V_P - V_{TH2}(V_P)]^2 + I_1 = \beta_1[(V_{b2} - 0.7)V_P - V_P^2/2]$.

### Step 3 — Decreasing $V_X$: $M_2$, then $M_1$, leave saturation

- **$M_2$ enters triode** when $V_X < V_{b1} - V_{TH2}(V_P)$. It then acts like a small resistor between $X$ and $P$, so **$V_P$ follows $V_X$ down**. While $V_P$ stays above $V_{b2} - 0.7$ V, $M_1$ is still saturated and $I_X$ stays at $I_B - I_1$: this transition produces **no visible kink** in $I_X$.
- **$M_1$ enters triode** when $V_P < V_{b2} - 0.7$ V (slightly above that value of $V_X$, because of the small drop across $M_2$). From then on, $I_{D1}$ falls with $V_P$, and so does $I_X = I_{D1}(V_P) - I_1$.

### Step 4 — The zero crossing and negative $I_X$

**Zero crossing.** $I_X = 0$ when $M_1$ in triode carries exactly $I_1$:

$$\beta_1\left[(V_{b2} - 0.7)V_{P0} - \tfrac12V_{P0}^2\right] = I_1 .$$

Then $M_2$ carries no current, so it has $V_{DS} = 0$: $V_X = V_{P0}$.

**Below $V_{P0}$ ($I_X < 0$).** $M_1$ can no longer sink all of $I_1$. The excess must leave through $M_2$, which now conducts **in reverse**: $X$ is below $P$, so $X$ acts as $M_2$'s source and current flows from $P$ into the voltage source. At $V_X = 0$, $M_1$ and $M_2$ are both in triode, both with their sources at 0 V, sharing $I_1$:

$$I_1 = \beta_1\left[(V_{b2} - 0.7)V_P - \tfrac12V_P^2\right] + \beta_2\left[(V_{b1} - 0.7)V_P - \tfrac12V_P^2\right], \qquad I_X(0) = -(I_1 - I_{D1}(V_P)) .$$

**If instead $I_B < I_1$** (not the case here), the excess $I_1 - I_B$ could only leave through $M_2$ toward the source, so $I_X = -(I_1 - I_B)$ at low $V_X$. For $V_X$ above about $V_{b1} - V_{TH}$ no path would remain, and node $P$ would be pushed to the compliance limit of the current source.

### Step 5 — A numerical example

For illustration take $V_{b2} = 1.0$ V, $\beta_1 = 4\ \mathrm{mA/V^2}$, $I_1 = 0.1$ mA, $V_{b1} = 1.8$ V, $\beta_2 = 2\ \mathrm{mA/V^2}$:

$$
\begin{aligned}
I_B &= \tfrac12(4\ \mathrm{mA/V^2})(0.3\ \mathrm{V})^2 = 0.18\ \mathrm{mA} > I_1,\qquad I_B - I_1 = 0.08\ \mathrm{mA},\\
\sqrt{2(I_B - I_1)/\beta_2} &= \sqrt{0.08}\ \mathrm{V} = 0.283\ \mathrm{V},\quad V_P + V_{TH2}(V_P) = 1.8 - 0.283 = 1.517\ \mathrm{V}\Rightarrow V_P = 0.679\ \mathrm{V},\\
V_{TH2} &= 0.838\ \mathrm{V};\quad M_2\ \text{saturated for } V_X \ge 1.8 - 0.838 = 0.962\ \mathrm{V}.
\end{aligned}
$$

Since $V_P = 0.679$ V $> V_{b2} - 0.7 = 0.3$ V, $M_1$ is saturated on the plateau.

**Zero crossing:** $4(0.3V_{P0} - 0.5V_{P0}^2) = 0.1$ (in mA), i.e. $V_{P0}^2 - 0.6V_{P0} + 0.05 = 0$, so $V_{P0} = (0.6 - \sqrt{0.16})/2 = 0.1$ V.

**At $V_X = 0$:** $0.1 = 4(0.3V_P - 0.5V_P^2) + 2(1.1V_P - 0.5V_P^2)$, i.e. $3V_P^2 - 3.4V_P + 0.1 = 0$, so $V_P = 0.030$ V. Then $I_{D1} = 4(0.3\times0.030 - 0.5\times0.030^2) = 0.034$ mA and $I_X = 0.034 - 0.1 = -0.066$ mA.

| $V_X$ (V) | $V_P$ (V) | $M_1$ | $M_2$ | $I_{D1}$ (mA) | $I_X$ (mA) |
|---|---|---|---|---|---|
| 0 | 0.030 | triode | triode (reverse) | 0.034 | −0.066 |
| 0.05 | 0.065 | triode | triode (reverse) | 0.069 | −0.031 |
| 0.1 | 0.100 | triode | no current | 0.100 | 0 |
| 0.2 | 0.173 | triode | triode | 0.148 | 0.048 |
| 0.3 | 0.251 | triode | triode | 0.175 | 0.075 |
| 0.357 | 0.300 | → sat | triode | 0.180 | 0.080 |
| 0.962 | 0.679 | sat | → sat | 0.180 | 0.080 |
| 3.0 | 0.679 | sat | sat | 0.180 | 0.080 |

### Result

$$I_X = I_{D1} - I_1$$

(KCL at node $P$, which joins $I_1$, the drain of $M_1$ and the source of $M_2$). $I_X$ is negative at $V_X = 0$, rises through zero, and saturates at $I_B - I_1$ once $M_1$ saturates ($V_P = V_{b2} - 0.7$ V). $M_2$ may still be in triode then; it saturates later, at $V_X = V_{b1} - V_{TH2}(V_P)$, without a visible kink in $I_X$.

- **Large $V_X$** ($V_X \ge V_{b1} - V_{TH2}(V_P)$): $M_2$ is a saturated cascode with $V_P = V_{b1} - V_{TH2}(V_P) - \sqrt{2(I_B - I_1)/\beta_2}$. If this is above $V_{b2} - 0.7$ V, $M_1$ is saturated and $I_X = I_B - I_1$, constant. If $V_{b1}$ is too low for this, $M_2$ saturates first while $M_1$ is still in triode, and the plateau is lower, set by $\tfrac12\beta_2[V_{b1} - V_P - V_{TH2}(V_P)]^2 + I_1 = \beta_1[(V_{b2} - 0.7)V_P - V_P^2/2]$.
- **Lower $V_X$:** $M_2$ in triode, $V_P$ follows $V_X$ down; once $V_P < V_{b2} - 0.7$ V, $M_1$ is in triode and its current falls, so $I_X = I_{D1}(V_P) - I_1$ decreases.
- **$I_X = 0$** at $V_X = V_{P0}$, where $M_1$ in triode carries exactly $I_1$: $\beta_1[(V_{b2} - 0.7)V_{P0} - V_{P0}^2/2] = I_1$ (then $M_2$ has $V_{DS} = 0$).
- **$V_X < V_{P0}$:** $I_X < 0$. The part of $I_1$ that $M_1$ cannot sink flows out through $M_2$ (now conducting with $V_X$ as its source) into the voltage source. At $V_X = 0$, $I_X = -(I_1 - I_{D1}(V_P))$, with $V_P$ set by $M_1$ and $M_2$ both in triode sharing $I_1$.
- **Transition points:** $V_X = V_{P0}$ (zero crossing), $V_P = V_{b2} - 0.7$ V ($M_1$ saturates), $V_X = V_{b1} - V_{TH2}(V_P)$ ($M_2$ saturates; no kink in $I_X$ if $M_1$ is already saturated), plateau $I_B - I_1$.

**Common mistake.** Writing $I_X = I_{D1} + I_1$, or taking the plateau as $I_B$ or $I_1$. The current source *feeds* node $P$, so $M_1$ takes $I_1$ from it and only the remainder, $I_B - I_1$, from the test source. This subtraction is the essence of a folded cascode.

**Common mistake.** Placing a kink where $M_2$ saturates. As long as $M_1$ is saturated, its current is $I_B$ regardless of $V_P$, so $I_X$ is already flat; $M_2$'s change of region only changes $V_P$, not $I_X$.

**Common mistake.** Stopping the curve at $I_X = 0$ or assuming $M_2$ cannot conduct for low $V_X$. A MOSFET is symmetric: when $V_X < V_P$, the $X$ terminal becomes $M_2$'s source, and the part of $I_1$ that $M_1$ cannot sink flows out through $M_2$, giving negative $I_X$.
