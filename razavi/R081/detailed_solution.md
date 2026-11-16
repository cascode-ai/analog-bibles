# Detailed solution - R081

**Approach.** $M_1$ is a common-source (CS) amplifier and $M_2$ a diode-connected NMOS load. Write the condition for $M_1$ to sit at the triode/saturation boundary, equate the square-law currents of the two transistors (they carry the same current), solve for $V_{in}$, and then find the small-signal gain from the small-signal model, $A_v = -g_{m1}/g_{m2}$.

### Step 1 — The circuit and the device parameters

Reading the figure:

- $M_1$: gate at $V_{in}$, source at ground, drain at $V_{out}$, so it is a CS stage.
- $M_2$: gate and drain both tied to $V_{DD} = 3$ V, source at $V_{out}$. This is a **diode-connected** load: its gate–source voltage is set by the output voltage itself, $V_{GS2} = V_{DD} - V_{out}$.
- No current leaves through $V_{out}$, so both transistors carry the same drain current $I_D$.

With $\lambda = \gamma = 0$, neither channel-length modulation nor the body effect is present, so both devices have $V_{TH} = 0.7$ V. Define the **current factors** $\beta = \mu_nC_{ox}(W/L)$:

$$
\begin{aligned}
\beta_1 &= (134\ \mu\mathrm{A/V^2})\cdot\frac{50}{0.5} = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2},\\
\beta_2 &= (134\ \mu\mathrm{A/V^2})\cdot\frac{10}{0.5} = (134\ \mu\mathrm{A/V^2})(20) = 2.68\ \mathrm{mA/V^2}.
\end{aligned}
$$

### Step 2 — Operating regions

**$M_2$ is always saturated while it conducts.** Its drain and gate are at the same potential, so

$$V_{DS2} = V_{DD} - V_{out} = V_{GS2} > V_{GS2} - V_{TH} .$$

The saturation condition $V_{DS} \ge V_{GS} - V_{TH}$ therefore holds automatically.

**Edge of triode for $M_1$.** $M_1$ is saturated as long as $V_{DS1} \ge V_{GS1} - V_{TH}$. It is exactly at the edge when

$$V_{DS1} = V_{GS1} - V_{TH} \quad\Longrightarrow\quad V_{out} = V_{in} - V_{TH} = V_{in} - 0.7\ \mathrm{V}.$$

As $V_{in}$ rises, $V_{out}$ falls, so $M_1$ starts in saturation and enters the triode region once $V_{out}$ drops below $V_{in} - V_{TH}$. We want the input voltage at which this boundary is reached.

### Step 3 — Equal drain currents

Both devices are saturated (at the edge, $M_1$ still obeys the saturation equation). The **square-law saturation current** $I_D = \frac12\beta(V_{GS} - V_{TH})^2$ gives, since the two currents are equal:

$$\frac12\beta_1(V_{in} - V_{TH})^2 = \frac12\beta_2(V_{DD} - V_{out} - V_{TH})^2 .$$

Both overdrives are positive, so take the positive square root of both sides:

$$\sqrt{\beta_1}\,(V_{in} - V_{TH}) = \sqrt{\beta_2}\,(V_{DD} - V_{out} - V_{TH}) .$$

Divide by $\sqrt{\beta_2}$. The ratio of current factors is the ratio of aspect ratios:

$$\sqrt{\frac{\beta_1}{\beta_2}} = \sqrt{\frac{100}{20}} = \sqrt5 = 2.236 ,$$

so

$$\sqrt5\,(V_{in} - 0.7\ \mathrm{V}) = 3\ \mathrm{V} - V_{out} - 0.7\ \mathrm{V} = 2.3\ \mathrm{V} - V_{out} .$$

### Step 4 — Solve for the input voltage at the edge

Let $V_{ov1} = V_{in} - V_{TH}$ be the overdrive of $M_1$. The edge condition from Step 2 says $V_{out} = V_{ov1}$. Substitute it into the current equation:

$$
\begin{aligned}
\sqrt5\,V_{ov1} &= 2.3\ \mathrm{V} - V_{ov1}\\
(1 + \sqrt5)\,V_{ov1} &= 2.3\ \mathrm{V}\\
V_{ov1} &= \frac{2.3\ \mathrm{V}}{1 + 2.236} = \frac{2.3\ \mathrm{V}}{3.236} = 0.711\ \mathrm{V}.
\end{aligned}
$$

Then

$$
\begin{aligned}
V_{in} &= V_{TH} + V_{ov1} = 0.7\ \mathrm{V} + 0.711\ \mathrm{V} = 1.411\ \mathrm{V},\\
V_{out} &= V_{ov1} = 0.711\ \mathrm{V}.
\end{aligned}
$$

**Bias current and consistency check.** The overdrive of $M_2$ is

$$V_{ov2} = V_{DD} - V_{out} - V_{TH} = 3 - 0.711 - 0.7 = 1.589\ \mathrm{V} .$$

The current computed from each device:

$$
\begin{aligned}
I_{D1} &= \tfrac12(13.4\ \mathrm{mA/V^2})(0.711\ \mathrm{V})^2 = 6.7\times0.5052\ \mathrm{mA} = 3.38\ \mathrm{mA},\\
I_{D2} &= \tfrac12(2.68\ \mathrm{mA/V^2})(1.589\ \mathrm{V})^2 = 1.34\times2.526\ \mathrm{mA} = 3.38\ \mathrm{mA}.
\end{aligned}
$$

The two agree, and $V_{ov2} > 0$, so $M_2$ is on (and, being diode-connected, saturated).

### Step 5 — Small-signal model

With $\lambda = \gamma = 0$, each transistor reduces to a single voltage-controlled current source $g_mv_{gs}$ from drain to source (no $r_O$, no $g_{mb}$). $V_{DD}$ is a constant voltage, so it is an **AC ground**. The model has one internal node, $out$:

- **$M_1$:** a current source $g_{m1}v_{gs1} = g_{m1}v_{in}$ flowing from $out$ to ground.
- **$M_2$:** drain and gate both at AC ground, source at $out$. Its gate–source voltage is $v_{gs2} = 0 - v_{out} = -v_{out}$, and it contributes a current $g_{m2}v_{gs2} = -g_{m2}v_{out}$ flowing from AC ground into $out$.

<!-- diagram: diagram-01.cir -->

**KCL at the output node**: the current delivered into $out$ by $M_2$ must equal the current drawn out of $out$ by $M_1$:

$$
\begin{aligned}
-g_{m2}v_{out} &= g_{m1}v_{in}\\
\frac{v_{out}}{v_{in}} &= -\frac{g_{m1}}{g_{m2}} .
\end{aligned}
$$

A current source controlled by its own terminal voltage is just a resistor: the diode-connected $M_2$ behaves as a resistance $1/g_{m2}$ from $out$ to AC ground, so the gain is $-g_{m1}\times(1/g_{m2})$.

**Why the saturation $g_{m1}$ still applies at the edge.** In triode, $g_{m1} = \beta_1V_{DS1}$ and the channel conductance is $\beta_1(V_{ov1} - V_{DS1})$. At the edge, $V_{DS1} = V_{ov1}$, so the triode $g_{m1}$ equals the saturation value $\beta_1V_{ov1}$ and the channel conductance is zero. Both descriptions give the same result at the boundary.

### Step 6 — Numerical gain

Transconductances, $g_m = \beta V_{ov}$:

$$
\begin{aligned}
g_{m1} &= \beta_1V_{ov1} = (13.4\ \mathrm{mA/V^2})(0.711\ \mathrm{V}) = 9.52\ \mathrm{mS},\\
g_{m2} &= \beta_2V_{ov2} = (2.68\ \mathrm{mA/V^2})(1.589\ \mathrm{V}) = 4.26\ \mathrm{mS},\\
A_v &= -\frac{9.52\ \mathrm{mS}}{4.26\ \mathrm{mS}} = -2.24 .
\end{aligned}
$$

**A shortcut that explains the number.** Writing $g_m = \sqrt{2\beta I_D}$ and using the fact that both devices carry the same $I_D$:

$$A_v = -\frac{\sqrt{2\beta_1I_D}}{\sqrt{2\beta_2I_D}} = -\sqrt{\frac{\beta_1}{\beta_2}} = -\sqrt{\frac{(W/L)_1}{(W/L)_2}} = -\sqrt5 = -2.236 .$$

The gain of a CS stage with a diode-connected load depends only on the size ratio, not on the bias point, as long as both devices are saturated.

### Result

$M_1$ reaches the edge of the triode region at

$$V_{in} = V_{TH} + \frac{V_{DD} - V_{TH}}{1 + \sqrt5} \approx 1.41\ \mathrm{V}$$

(with $V_{out} \approx 0.711$ V and $I_D \approx 3.38$ mA). The small-signal gain there is

$$A_v = -\frac{g_{m1}}{g_{m2}} = -\sqrt{\frac{(W/L)_1}{(W/L)_2}} = -\sqrt5 \approx -2.24 .$$

**Common mistake.** Writing the gain as $-(W/L)_1/(W/L)_2 = -5$. The transconductance at a given current is $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$, proportional to the *square root* of $W/L$. The two devices share the same current, so the gain is $-\sqrt5$, not $-5$.

**Common mistake.** Using a wrong edge condition, such as $V_{out} = V_{in}$ or $V_{DS1} = V_{TH}$. The triode/saturation boundary is $V_{DS1} = V_{GS1} - V_{TH}$, i.e. $V_{out} = V_{in} - 0.7$ V.

**Common mistake.** Treating $M_2$ as if its gate–source voltage were fixed, for example $V_{GS2} = V_{DD}$. Its source is the output node, so $V_{GS2} = V_{DD} - V_{out}$ changes with $V_{out}$. That is exactly why it behaves as the resistance $1/g_{m2}$ in the small-signal model.
