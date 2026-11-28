# Detailed solution - R081

Approach: $M_1$ is a common-source (CS) stage with the diode-connected load $M_2$. Impose the edge-of-triode condition on $M_1$, equate the square-law currents of the two transistors, solve for $V_{in}$, and find the gain $A_v = -g_{m1}/g_{m2}$ from the small-signal model.

### Step 1 — Device parameters and the edge condition

$M_2$ is diode-connected with its source at the output, so $V_{GS2} = V_{DD} - V_{out}$, and both transistors carry the same current. With $\lambda = \gamma = 0$, both have $V_{TH} = 0.7$ V, and with $\beta = \mu_nC_{ox}(W/L)$:

$$
\begin{aligned}
\beta_1 &= (134\ \mu\mathrm{A/V^2})\cdot\frac{50}{0.5} = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2},\\
\beta_2 &= (134\ \mu\mathrm{A/V^2})\cdot\frac{10}{0.5} = (134\ \mu\mathrm{A/V^2})(20) = 2.68\ \mathrm{mA/V^2}.
\end{aligned}
$$

$V_{DS2} = V_{GS2} > V_{GS2} - V_{TH}$, so $M_2$ is always saturated while it conducts. $M_1$ is at the edge of triode when

$$V_{DS1} = V_{GS1} - V_{TH} \quad\Longrightarrow\quad V_{out} = V_{in} - V_{TH} = V_{in} - 0.7\ \mathrm{V}.$$

As $V_{in}$ rises, $V_{out}$ falls, so $M_1$ starts in saturation and enters triode once $V_{out}$ drops below $V_{in} - V_{TH}$.

### Step 2 — Equal drain currents

At the edge $M_1$ still obeys the saturation equation, so

$$\frac12\beta_1(V_{in} - V_{TH})^2 = \frac12\beta_2(V_{DD} - V_{out} - V_{TH})^2 .$$

Both overdrives are positive, so take the positive square root of both sides:

$$\sqrt{\beta_1}\,(V_{in} - V_{TH}) = \sqrt{\beta_2}\,(V_{DD} - V_{out} - V_{TH}) .$$

With

$$\sqrt{\frac{\beta_1}{\beta_2}} = \sqrt{\frac{100}{20}} = \sqrt5 = 2.236 ,$$

this becomes

$$\sqrt5\,(V_{in} - 0.7\ \mathrm{V}) = 3\ \mathrm{V} - V_{out} - 0.7\ \mathrm{V} = 2.3\ \mathrm{V} - V_{out} .$$

### Step 3 — Solve for the input voltage at the edge

Let $V_{ov1} = V_{in} - V_{TH}$. The edge condition (Step 1) says $V_{out} = V_{ov1}$; substituting into the current equation:

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

Bias current and check: $V_{ov2} = V_{DD} - V_{out} - V_{TH} = 3 - 0.711 - 0.7 = 1.589\ \mathrm{V}$, and

$$
\begin{aligned}
I_{D1} &= \tfrac12(13.4\ \mathrm{mA/V^2})(0.711\ \mathrm{V})^2 = 6.7\times0.5052\ \mathrm{mA} = 3.38\ \mathrm{mA},\\
I_{D2} &= \tfrac12(2.68\ \mathrm{mA/V^2})(1.589\ \mathrm{V})^2 = 1.34\times2.526\ \mathrm{mA} = 3.38\ \mathrm{mA}.
\end{aligned}
$$

The two agree, and $V_{ov2} > 0$, so $M_2$ is on (and saturated).

### Step 4 — Small-signal model

With $\lambda = \gamma = 0$, each transistor is just a current source $g_mv_{gs}$ from drain to source, and $V_{DD}$ is ac ground:

- $M_1$: $g_{m1}v_{gs1} = g_{m1}v_{in}$ flowing from $out$ to ground.
- $M_2$: gate and drain at ac ground, source at $out$, so $v_{gs2} = -v_{out}$, and it delivers $g_{m2}v_{gs2} = -g_{m2}v_{out}$ from ac ground into $out$.

<!-- diagram: diagram-01.cir -->

KCL at the output:

$$
\begin{aligned}
-g_{m2}v_{out} &= g_{m1}v_{in}\\
\frac{v_{out}}{v_{in}} &= -\frac{g_{m1}}{g_{m2}} .
\end{aligned}
$$

That is, the diode-connected $M_2$ acts as a resistance $1/g_{m2}$ to ac ground.

The saturation $g_{m1}$ still applies at the edge: in triode $g_{m1} = \beta_1V_{DS1}$ and the channel conductance is $\beta_1(V_{ov1} - V_{DS1})$, which at $V_{DS1} = V_{ov1}$ give $\beta_1V_{ov1}$ and zero, the saturation values.

### Step 5 — Numerical gain

$$
\begin{aligned}
g_{m1} &= \beta_1V_{ov1} = (13.4\ \mathrm{mA/V^2})(0.711\ \mathrm{V}) = 9.52\ \mathrm{mS},\\
g_{m2} &= \beta_2V_{ov2} = (2.68\ \mathrm{mA/V^2})(1.589\ \mathrm{V}) = 4.26\ \mathrm{mS},\\
A_v &= -\frac{9.52\ \mathrm{mS}}{4.26\ \mathrm{mS}} = -2.24 .
\end{aligned}
$$

Equivalently, with $g_m = \sqrt{2\beta I_D}$ and the same $I_D$ in both devices,

$$A_v = -\frac{\sqrt{2\beta_1I_D}}{\sqrt{2\beta_2I_D}} = -\sqrt{\frac{\beta_1}{\beta_2}} = -\sqrt{\frac{(W/L)_1}{(W/L)_2}} = -\sqrt5 = -2.236 ,$$

which depends only on the size ratio, not on the bias point, as long as both devices are saturated.

### Result

$M_1$ reaches the edge of the triode region at

$$V_{in} = V_{TH} + \frac{V_{DD} - V_{TH}}{1 + \sqrt5} \approx 1.41\ \mathrm{V}$$

(with $V_{out} \approx 0.711$ V and $I_D \approx 3.38$ mA). The small-signal gain there is

$$A_v = -\frac{g_{m1}}{g_{m2}} = -\sqrt{\frac{(W/L)_1}{(W/L)_2}} = -\sqrt5 \approx -2.24 .$$

Common mistake: Writing the gain as $-(W/L)_1/(W/L)_2 = -5$. At a given current $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$ scales with the *square root* of $W/L$, and the two devices share the same current, so the gain is $-\sqrt5$.

Common mistake: Using a wrong edge condition, such as $V_{out} = V_{in}$ or $V_{DS1} = V_{TH}$. The boundary is $V_{DS1} = V_{GS1} - V_{TH}$, i.e. $V_{out} = V_{in} - 0.7$ V.

Common mistake: Taking $V_{GS2}$ as fixed (e.g. $V_{GS2} = V_{DD}$). Its source is the output, so $V_{GS2} = V_{DD} - V_{out}$, which is why $M_2$ acts as the resistance $1/g_{m2}$.
