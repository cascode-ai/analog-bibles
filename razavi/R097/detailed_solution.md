# Detailed solution - R097

Approach. $M_1$ is a source follower (drain at $V_{DD}$, output at its source) and $M_2$, with its gate at the fixed $V_b$, is its current-source load. Set the two drain currents equal and follow $M_2$ from triode (output near ground) to saturation (a constant current $I_2$). In each region the follower slope comes from the small-signal model, including the body effect of $M_1$ ($V_{SB1} = V_{out}$).

### Step 1 — Region boundaries

- $M_1$: $V_{GS1} = V_{in} - V_{out}$ and $V_{SB1} = V_{out}$, so $V_{TH1} = 0.7 + 0.45(\sqrt{0.9 + V_{out}} - \sqrt{0.9})$ V. With its drain at $V_{DD} \ge V_{in}$, $V_{DS1} \ge V_{GS1}$, so it is saturated whenever it is on.
- $M_2$: $V_{GS2} = V_b$ (fixed) and $V_{TH2} = 0.7$ V. Its saturation current is
$$I_2 = \frac12\beta_2(V_b - 0.7)^2 ,$$
and it is saturated for $V_{DS2} = V_{out} \ge V_b - 0.7$ V, in triode below.

KCL at the output: $I_{D1} = I_{D2}$.

### Step 2 — $V_{in} \le 0.7$ V: $M_1$ off

Even with $V_{out} = 0$, $V_{GS1} = V_{in} \le 0.7$ V, so $M_1$ carries no current, and $M_2$, whose channel is on ($V_b > 0.7$ V), can carry zero current only with $V_{DS2} = 0$:

$$V_{out} = 0\qquad (V_{in} \le 0.7\ \mathrm{V}).$$

### Step 3 — $M_1$ on, $M_2$ in triode ($V_{out} < V_b - 0.7$ V)

$$\frac12\beta_1\left(V_{in} - V_{out} - V_{TH1}\right)^2 = \beta_2\left[(V_b - 0.7)V_{out} - \tfrac12V_{out}^2\right].$$

Near $V_{out} = 0$, $M_2$ is a resistor of about $1/[\beta_2(V_b - 0.7)]$, and the current grows toward $I_2$ as $V_{out}$ rises.

Slope. $M_1$ injects $g_{m1}(v_{in} - v_{out}) - g_{mb1}v_{out}$ into the output, and $M_2$ is its triode resistance $R = 1/[\beta_2(V_b - 0.7 - V_{out})]$ to ground:

$$
\begin{aligned}
g_{m1}(v_{in} - v_{out}) - g_{mb1}v_{out} &= \frac{v_{out}}{R}\\
g_{m1}v_{in} &= v_{out}\left(\frac1R + g_{m1} + g_{mb1}\right)\\
\frac{dV_{out}}{dV_{in}} &= \frac{g_{m1}R}{1 + (g_{m1} + g_{mb1})R} .
\end{aligned}
$$

At turn-on $g_{m1} = 0$, so the slope starts at 0; it rises as $g_{m1}$ grows and as $R$ increases toward the edge of $M_2$'s saturation.

### Step 4 — $M_2$ saturated ($V_{out} \ge V_b - 0.7$ V): the follower line

The current is fixed at $I_2$, so $M_1$'s overdrive is fixed:

$$
\begin{aligned}
\tfrac12\beta_1(V_{in} - V_{out} - V_{TH1})^2 &= I_2\\
V_{in} - V_{out} - V_{TH1} &= \sqrt{2I_2/\beta_1}\\
V_{out} &= V_{in} - V_{TH1}(V_{out}) - \sqrt{\frac{2I_2}{\beta_1}} .
\end{aligned}
$$

With $M_2$ an ideal current source ($R \to \infty$ in Step 3),

$$\frac{dV_{out}}{dV_{in}} = \frac{g_{m1}}{g_{m1} + g_{mb1}} = \frac{1}{1 + \eta_1}, \qquad \eta_1 = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{out}}} .$$

The slope is below 1 only because of the body effect ($V_{TH1}$ rises with $V_{out}$). Around $V_{out} = 1$ V, $\eta_1 = 0.45/(2\sqrt{1.9}) = 0.16$ and the slope is $1/1.16 \approx 0.86$; $\eta_1$ decreases slowly as $V_{out}$ rises, so the line curves upward very slightly ("straight-ish").

### Step 5 — Transition points

Turn-on: $V_{in} = 0.7$ V.

$M_2$ enters saturation at $V_{out} = V_b - 0.7$ V, with the current already $I_2$, so by Step 4:

$$
\begin{aligned}
V_{TH1}(V_b - 0.7) &= 0.7 + 0.45\left(\sqrt{0.9 + V_b - 0.7} - \sqrt{0.9}\right) = 0.7 + 0.45\left(\sqrt{V_b + 0.2} - \sqrt{0.9}\right),\\
\sqrt{\frac{2I_2}{\beta_1}} &= \sqrt{\frac{\beta_2(V_b - 0.7)^2}{\beta_1}} = (V_b - 0.7)\sqrt{\frac{\beta_2}{\beta_1}},\\
V_{in} &= (V_b - 0.7) + 0.7 + 0.45\left(\sqrt{V_b + 0.2} - \sqrt{0.9}\right) + (V_b - 0.7)\sqrt{\frac{\beta_2}{\beta_1}}\\
&= V_b + 0.45\left(\sqrt{V_b + 0.2} - \sqrt{0.9}\right) + (V_b - 0.7)\sqrt{\frac{\beta_2}{\beta_1}} .
\end{aligned}
$$

If this exceeds 3 V, $M_2$ stays in triode over the whole sweep.

End point: at $V_{in} = 3$ V, $V_{out} = 3 - V_{TH1}(V_{out}) - \sqrt{2I_2/\beta_1}$.

### Step 6 — A numerical example

For illustration take $V_b = 1.0$ V and $\beta_1 = \beta_2 = 2\ \mathrm{mA/V^2}$:

$$
\begin{aligned}
I_2 &= \tfrac12(2\ \mathrm{mA/V^2})(0.3\ \mathrm{V})^2 = 90\ \mu\mathrm{A},\qquad \sqrt{2I_2/\beta_1} = 0.3\ \mathrm{V},\\
V_{in}\big|_{M_2\ \mathrm{sat}} &= 1.0 + 0.45(\sqrt{1.2} - 0.9487) + 0.3 = 1.0 + 0.066 + 0.3 = 1.366\ \mathrm{V}\quad (V_{out} = 0.3\ \mathrm{V}).
\end{aligned}
$$

End point: $V_{out} + V_{TH1}(V_{out}) = 2.7$ V. Trying $V_{out} = 1.70$ V gives $V_{TH1} = 0.7 + 0.45(\sqrt{2.6} - 0.9487) = 0.999$ V, and $1.70 + 0.999 = 2.70$ V. ✓

| $V_{in}$ (V) | $V_{out}$ (V) | Current (μA) | $M_2$ | Slope |
|---|---|---|---|---|
| ≤ 0.7 | 0 | 0 | triode | 0 |
| 0.8 | 0.012 | 7 | triode | 0.22 |
| 1.0 | 0.079 | 41 | triode | 0.43 |
| 1.2 | 0.183 | 76 | triode | 0.61 |
| 1.366 | 0.300 | 90 | → saturation | 0.83 |
| 2.0 | 0.834 | 90 | sat | 0.85 |
| 3.0 | 1.701 | 90 | sat | 0.88 |

![R097 output curve](/q/R097/solution-plot.svg)

### Result

A source-follower characteristic, with $I_2 = \tfrac12\beta_2(V_b - 0.7)^2$:

- $V_{in} \le 0.7$ V: $M_1$ off, $V_{out} = 0$ ($M_2$ in triode with zero current).
- $M_1$ on, $V_{out} < V_b - 0.7$ V: $M_2$ in triode (a resistance of about $1/[\beta_2(V_b - 0.7)]$ near 0 V). $V_{out}$ rises with slope $g_{m1}R/[1 + (g_{m1} + g_{mb1})R]$, $R$ being $M_2$'s incremental resistance, and the current grows toward $I_2$.
- $V_{out} \ge V_b - 0.7$ V: $M_2$ saturated, current fixed at $I_2$; $V_{out} = V_{in} - V_{TH1}(V_{out}) - \sqrt{2I_2/\beta_1}$, slope $1/(1 + \eta_1)$, e.g. about 0.86 around $V_{out} = 1$ V.
- $M_1$ stays saturated over the whole range (drain at $V_{DD}$, gate at most $V_{DD}$).
- Transition points: $V_{in} = 0.7$ V; $V_{out} = V_b - 0.7$ V, reached at $V_{in} = V_b + 0.45[\sqrt{V_b + 0.2} - \sqrt{0.9}] + (V_b - 0.7)\sqrt{\beta_2/\beta_1}$ (if this exceeds 3 V, $M_2$ stays in triode over the whole sweep); end point $V_{out} = 3 - V_{TH1}(V_{out}) - \sqrt{2I_2/\beta_1}$ at $V_{in} = 3$ V.

Common mistake. Drawing the follower line with slope exactly 1 ($V_{out} = V_{in} - V_{TH}$). With the bulk grounded, $V_{TH1}$ rises with $V_{out}$, so the slope is $1/(1 + \eta_1) \approx 0.83$–$0.88$, and the level shift also contains the overdrive $\sqrt{2I_2/\beta_1}$.

Common mistake. Treating $M_2$ as a current source right from turn-on. Near $V_{out} = 0$ it is in triode and acts as a resistor; the follower reaches its full slope only once $V_{out}$ exceeds $V_b - 0.7$ V.

Common mistake. Claiming that $M_1$ enters triode at high $V_{in}$. Its drain at $V_{DD}$ is never below its gate, so it stays saturated.
