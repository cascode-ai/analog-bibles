# Detailed solution - R104

**Approach.** Node $X$ is the *source* of $M_1$ (whose drain is at $V_{DD}$ and gate at $V_{b1}$) and the *drain* of $M_2$ (gate at $V_{b2}$, source grounded). Write KCL at $X$ to get $I_X = I_{D2} - I_{D1}$, then describe each device current as a function of $V_X$: $M_1$'s current falls as its source rises (with body effect) until it cuts off; $M_2$'s current follows its ordinary triode-then-saturation output characteristic.

### Step 1 — The circuit and KCL at node $X$

From the figure: $M_1$ has drain at $V_{DD} = 3$ V, gate at $V_{b1}$ and source at $X$. $M_2$ has drain at $X$, gate at $V_{b2}$ and source at ground. Both bulks are at ground. The test source $V_X$ drives node $X$, and $I_X$ flows from the source into $X$.

**KCL at $X$.** Into the node: $I_X$ and $M_1$'s drain current $I_{D1}$ (flowing down from $V_{DD}$ through its channel). Out of the node: $M_2$'s drain current $I_{D2}$:

$$I_X + I_{D1} = I_{D2} \quad\Longrightarrow\quad I_X = I_{D2} - I_{D1} .$$

### Step 2 — Current of $M_1$ (a follower-type device whose source is $X$)

For $M_1$: $V_{GS1} = V_{b1} - V_X$, $V_{DS1} = 3 - V_X$, $V_{SB1} = V_X$, and with the body effect

$$V_{TH1}(V_X) = 0.7 + 0.45\left(\sqrt{0.9 + V_X} - \sqrt{0.9}\right)\ \mathrm{V}.$$

**Region.** Saturation needs $V_{DS1} \ge V_{GS1} - V_{TH1}$, i.e. $3 - V_X \ge V_{b1} - V_X - V_{TH1}$, i.e. $V_{b1} \le 3 + V_{TH1}$. This holds for any $V_{b1}$ up to about 3.7 V. (For a larger $V_{b1}$, $M_1$ would start in triode at low $V_X$.) So, while on,

$$I_{D1} = \frac12\beta_1\left(V_{b1} - V_X - V_{TH1}(V_X)\right)^2 .$$

This current **decreases** as $V_X$ rises: $V_{GS1}$ shrinks and $V_{TH1}$ grows. It reaches zero (cutoff) at $V_{X,off}$, where $V_{b1} - V_{X,off} = V_{TH1}(V_{X,off})$. With $u = \sqrt{0.9 + V_{X,off}}$, this is $u^2 + 0.45u - (V_{b1} + 0.6269) = 0$ and $V_{X,off} = u^2 - 0.9$, slightly below $V_{b1} - 0.7$ V because of the body effect.

At $V_X = 0$ ($V_{TH1} = 0.7$ V): $I_{D1}(0) = \frac12\beta_1(V_{b1} - 0.7)^2$.

### Step 3 — Current of $M_2$ (its output characteristic)

For $M_2$: $V_{GS2} = V_{b2}$ (fixed), $V_{DS2} = V_X$, no body effect.

- **Triode, $V_X < V_{b2} - 0.7$ V:** $I_{D2} = \beta_2\left[(V_{b2} - 0.7)V_X - \tfrac12V_X^2\right]$, starting at 0 when $V_X = 0$ and rising with a decreasing slope.
- **Saturation, $V_X \ge V_{b2} - 0.7$ V:** $I_{D2} = I_2 = \frac12\beta_2(V_{b2} - 0.7)^2$, constant.

(If $V_{b2} > 3.7$ V, $M_2$ stays in triode over the whole sweep.)

### Step 4 — Combine: $I_X = I_{D2} - I_{D1}$

- **Start ($V_X = 0$):** $I_{D2} = 0$ (no drain–source voltage), so
$$I_X(0) = -\frac12\beta_1(V_{b1} - 0.7)^2 ,$$
negative: $M_1$ pushes current into the source $V_X$.
- **Rising part:** $I_{D2}$ grows and $I_{D1}$ shrinks, so $I_X$ rises, with slope
$$\frac{dI_X}{dV_X} = \frac{dI_{D2}}{dV_X} - \frac{dI_{D1}}{dV_X} = g_{ds2} + (g_{m1} + g_{mb1}),$$
where $g_{ds2} = \beta_2(V_{b2} - 0.7 - V_X)$ is $M_2$'s triode channel conductance (zero once it saturates), and $g_{m1} + g_{mb1}$ is the conductance looking into the source of $M_1$. $I_X$ crosses zero where $I_{D2} = I_{D1}$, the voltage node $X$ would take on its own.
- **Kinks:** at $V_X = V_{b2} - 0.7$ V, $M_2$ saturates and its contribution to the slope disappears; at $V_X = V_{X,off}$, $M_1$ turns off. Both joins are smooth in value; $M_1$'s current and its slope both go to zero at cutoff.
- **Plateau:** for $V_X$ above both $V_{b2} - 0.7$ V and $V_{X,off}$,
$$I_X = I_2 = \frac12\beta_2(V_{b2} - 0.7)^2 ,$$
flat up to $V_X = 3$ V (with channel-length modulation the slope would be $\lambda I_2$).

### Step 5 — A numerical example

For illustration take $V_{b1} = 1.5$ V, $V_{b2} = 1.2$ V and $\beta_1 = \beta_2 = 2\ \mathrm{mA/V^2}$:

$$
\begin{aligned}
I_X(0) &= -\tfrac12(2\ \mathrm{mA/V^2})(0.8\ \mathrm{V})^2 = -0.64\ \mathrm{mA},\\
I_2 &= \tfrac12(2\ \mathrm{mA/V^2})(0.5\ \mathrm{V})^2 = 0.25\ \mathrm{mA}\quad(M_2\ \text{saturates at}\ V_X = 0.5\ \mathrm{V}),\\
V_{X,off}&:\ u = \frac{-0.45 + \sqrt{0.2025 + 4(2.1269)}}{2} = 1.2507,\quad V_{X,off} = 1.2507^2 - 0.9 = 0.664\ \mathrm{V}.
\end{aligned}
$$

| $V_X$ (V) | $I_{D1}$ (mA) | $M_2$ | $I_{D2}$ (mA) | $I_X$ (mA) |
|---|---|---|---|---|
| 0 | 0.640 | triode | 0 | −0.640 |
| 0.1 | 0.458 | triode | 0.090 | −0.368 |
| 0.2 | 0.308 | triode | 0.160 | −0.148 |
| 0.285 | 0.204 | triode | 0.204 | 0 |
| 0.4 | 0.099 | triode | 0.240 | 0.142 |
| 0.5 | 0.038 | sat | 0.250 | 0.212 |
| 0.664 | 0 | sat | 0.250 | 0.250 |
| 3.0 | 0 | sat | 0.250 | 0.250 |

### Result

$$I_X = I_{D2} - I_{D1}$$

(KCL at $X$). $I_X$ is negative at $V_X = 0$, rises as $M_2$'s current grows and $M_1$'s current shrinks, and is flat at $I_2 = \tfrac12\beta_2(V_{b2} - 0.7)^2$ once $M_1$ is off and $M_2$ saturated.

- **$M_1$** (drain at $V_{DD}$, source at $X$) is a follower-type device, saturated while on provided $V_{b1} \le V_{DD} + 0.7$ V: $I_{D1} = \tfrac12\beta_1(V_{b1} - V_X - V_{TH1})^2$ with $V_{TH1} = 0.7 + 0.45(\sqrt{0.9 + V_X} - \sqrt{0.9})$ (body effect, $V_{SB} = V_X$), decreasing to zero at $V_X = V_{b1} - V_{TH1}(V_X)$, slightly below $V_{b1} - 0.7$ V.
- **$M_2$:** triode for $V_X < V_{b2} - 0.7$ V, with $I_{D2} = \beta_2[(V_{b2} - 0.7)V_X - V_X^2/2]$ rising from 0; saturated beyond, $I_{D2} = I_2$.
- **So:** $I_X(0) = -\tfrac12\beta_1(V_{b1} - 0.7)^2$; $I_X$ rises through zero; for $V_X$ above both $V_{b2} - 0.7$ V and $M_1$'s cutoff, $I_X = I_2$ (flat).
- **Transition points:** $V_X = V_{b2} - 0.7$ V ($M_2$ saturates), $V_X = V_{b1} - V_{TH1}$ ($M_1$ off).

**Common mistake.** Treating $X$ as the drain of $M_1$ and making $M_1$'s current grow with $V_X$. $M_1$'s drain is at $V_{DD}$; $X$ is its *source*, so raising $V_X$ reduces $V_{GS1}$ and $M_1$'s current falls.

**Common mistake.** Ignoring the body effect in $M_1$'s cutoff. $V_{SB1} = V_X$, so the threshold rises as $V_X$ rises, and $M_1$ turns off before $V_X$ reaches $V_{b1} - 0.7$ V (0.664 V instead of 0.8 V in the example).

**Common mistake.** Getting the sign of $I_X$ wrong (for example $I_X = I_{D1} - I_{D2}$), which gives a curve that decreases overall. $M_1$ feeds current *into* node $X$ and $M_2$ draws current *out* of it, so the source supplies the difference $I_{D2} - I_{D1}$.
