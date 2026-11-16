# Detailed solution - R261

**Approach.** Write $V_{DS2}$ as a sum of gate–source voltages around the bias network, as in the $\gamma = 0$ case, but give each transistor whose source is above ground its body-effect threshold. The body effect pushes $V_{DS2}$ *below* the edge of saturation, so $M_2$ enters triode; compare its triode current with $M_1$'s saturation current and evaluate the result for a representative design.

### Step 1 — The loop and the $\gamma = 0$ starting point

Call $M_2$'s drain (the source of $M_3$) node B. Going around the loop of gate–source voltages ($M_0$ and $M_1$ diode-connected, $M_4$ a follower driving the gate of $M_3$):

$$V_{DS2} = V_B = \underbrace{V_{GS1} + V_{GS0}}_{V_{b1}} - V_{GS4} - V_{GS3}.$$

With $\gamma = 0$: $V_{GS3} \approx V_{GS0}$ and $V_{GS4} \approx V_{TH}$, so $V_{DS2} \approx V_{GS1} - V_{TH} = V_{ov}$ and $M_2$ sits at the edge of saturation. The only error is then channel-length modulation, $I_{out}/I_{REF} - 1 \approx -\lambda V_{TH}/(1 + \lambda V_{GS1}) \approx -6.4\%$.

### Step 2 — Which thresholds the body effect raises

With grounded bulks, a transistor whose source sits at $s$ has

$$V_{TH}(s) = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + s} - \sqrt{2|\phi_F|}\right), \qquad V_{TH0} = 0.7\ \mathrm{V}.$$

$M_1$ and $M_2$ have grounded sources. The threshold of $M_0$ (source at X, $V_X = V_{GS1} \approx 0.9$ V) rises and *helps*, lifting $V_{b1}$; those of $M_4$ (source at $V_{G3} \approx 1$ V) and $M_3$ (source at B, $V_B = V_{DS2} \approx 0.15$ V) rise and *hurt*, lowering the gate and the source of $M_3$. $M_4$'s source is the highest of the three, so the net effect is expected to lower $V_{DS2}$.

### Step 3 — General expression for $V_{DS2}$

Write each gate–source voltage as threshold plus overdrive:

$$V_{GS1} = V_{TH0} + V_{ov1}, \quad V_{GS0} = V_{TH}(V_X) + V_{ov0}, \quad V_{GS4} = V_{TH}(V_{G3}) + V_{ov4}, \quad V_{GS3} = V_{TH}(V_B) + V_{ov3}.$$

Substituting into $V_{DS2} = V_{GS1} + V_{GS0} - V_{GS4} - V_{GS3}$:

$$V_{DS2} = V_{ov1} + (V_{ov0} - V_{ov3}) - V_{ov4} + \left[V_{TH0} + V_{TH}(V_X) - V_{TH}(V_{G3}) - V_{TH}(V_B)\right].$$

In the bracket the four $V_{TH0}$ terms cancel (two plus, two minus), and so do the $\sqrt{2|\phi_F|}$ terms, except one:

$$
\begin{aligned}
\left[\ \cdot\ \right] &= \gamma\left[\sqrt{2|\phi_F| + V_X} - \sqrt{2|\phi_F| + V_{G3}} - \sqrt{2|\phi_F| + V_B} + \sqrt{2|\phi_F|}\right]\\
&= -\gamma\left\{\left[\sqrt{2|\phi_F| + V_{G3}} - \sqrt{2|\phi_F| + V_X}\right] + \left[\sqrt{2|\phi_F| + V_B} - \sqrt{2|\phi_F|}\right]\right\}.
\end{aligned}
$$

Hence

$$V_{DS2} = V_{ov1} + (V_{ov0} - V_{ov3}) - V_{ov4} - \gamma\left\{\left[\sqrt{2|\phi_F| + V_{G3}} - \sqrt{2|\phi_F| + V_X}\right] + \left[\sqrt{2|\phi_F| + V_B} - \sqrt{2|\phi_F|}\right]\right\}.$$

- $V_{ov4}$ is tiny (wide $M_4$, small $I_1$).
- $V_{ov0} - V_{ov3}$ is small: $M_0$ and $M_3$ carry similar currents, so their overdrives differ only through $\lambda$ and the current difference.
- Both braces are **positive**, because $V_{G3} > V_X$ and $V_B > 0$.

So $V_{DS2} \approx V_{ov1} - \gamma\{\cdots\}$ is **smaller than $V_{ov1}$**: $M_2$ is pushed **below the edge of saturation, into triode**.

### Step 4 — Numbers for a representative design

Use the same design as for the $\gamma = 0$ case: $I_{REF} = 100\ \mu\mathrm{A}$; $M_0$–$M_3$ with $W/L = 20/0.5$, so $\beta = (134\ \mu\mathrm{A/V^2})(40) = 5.36\ \mathrm{mA/V^2}$; $M_4$ with $W/L = 200/0.5$ at $I_1 = 5\ \mu\mathrm{A}$; $V_{DD} = 3$ V; output at 2 V; $\lambda = 0.1\ \mathrm{V^{-1}}$.

**$M_1$** (source grounded, diode): from $100\ \mu\mathrm{A} = \tfrac12\beta V_{ov1}^2(1 + \lambda V_{GS1})$,

$$V_{ov1} = 0.185\ \mathrm{V}, \qquad V_{GS1} = V_X = 0.885\ \mathrm{V}.$$

**$M_0$** (source at X):

$$
\begin{aligned}
V_{TH}(0.885) &= 0.7 + 0.45\left(\sqrt{1.785} - \sqrt{0.9}\right) = 0.7 + 0.45(1.336 - 0.949) = 0.874\ \mathrm{V},\\
V_{ov0} &= 0.184\ \mathrm{V} \ \ (\text{from } 100\ \mu\mathrm{A} = \tfrac12\beta V_{ov0}^2(1 + \lambda V_{GS0})),\\
V_{GS0} &= 0.874 + 0.184 = 1.058\ \mathrm{V}, \qquad V_{b1} = 0.885 + 1.058 = 1.943\ \mathrm{V}.
\end{aligned}
$$

**$M_4$** (source at $V_{G3}$, found by iteration): with $V_{G3} \approx 1.032$ V,

$$
\begin{aligned}
V_{TH}(1.032) &= 0.7 + 0.45\left(\sqrt{1.932} - 0.949\right) = 0.7 + 0.45(1.390 - 0.949) = 0.899\ \mathrm{V},\\
V_{ov4} &= \sqrt{\frac{2(5\ \mu\mathrm{A})}{(53.6\ \mathrm{mA/V^2})(1 + 0.1\times1.97)}} = 0.0125\ \mathrm{V},\\
V_{GS4} &= 0.899 + 0.0125 = 0.911\ \mathrm{V}, \qquad V_{G3} = 1.943 - 0.911 = 1.032\ \mathrm{V}. \ \checkmark
\end{aligned}
$$

So $M_4$ shifts the level down by 0.91 V instead of 0.71 V.

**$M_2$/$M_3$:** solving $I_{D3} = I_{D2}$ numerically gives $V_B = V_{DS2} = 0.136$ V, with $V_{TH}(0.136) = 0.731$ V and $V_{ov3} = 0.165$ V.

**Check with the formula of Step 3:**

$$
\begin{aligned}
\sqrt{0.9 + 1.032} - \sqrt{0.9 + 0.885} &= 1.390 - 1.336 = 0.054\ \mathrm{V^{1/2}},\\
\sqrt{0.9 + 0.136} - \sqrt{0.9} &= 1.018 - 0.949 = 0.069\ \mathrm{V^{1/2}},\\
\gamma\{\cdots\} &= 0.45\times0.123 = 0.055\ \mathrm{V},\\
V_{DS2} &= 0.185 + (0.184 - 0.165) - 0.0125 - 0.055 = 0.136\ \mathrm{V}. \ \checkmark
\end{aligned}
$$

In threshold terms: $M_0$'s threshold rises by 0.174 V (helps), $M_4$'s by 0.199 V and $M_3$'s by 0.031 V (both hurt), a net loss of 0.055 V. Since $V_{DS2} = 0.136\ \mathrm{V} < V_{ov2} = 0.185$ V, **$M_2$ is in the triode region**.

### Step 5 — Current ratio with $M_2$ in triode

$M_1$ is saturated and $M_2$ is in triode, with the same overdrive $V_{ov}$. Keeping the $(1 + \lambda V_{DS})$ factor in both regions so that the model is continuous:

$$I_{REF} = \frac{\beta}{2}V_{ov}^2(1 + \lambda V_{GS1}), \qquad I_{out} = \beta\left(V_{ov}V_{DS2} - \tfrac12V_{DS2}^2\right)(1 + \lambda V_{DS2}).$$

Dividing, with $x = V_{DS2}/V_{ov}$:

$$\frac{I_{out}}{I_{REF}} = \frac{2V_{ov}V_{DS2} - V_{DS2}^2}{V_{ov}^2}\cdot\frac{1 + \lambda V_{DS2}}{1 + \lambda V_{GS1}} = (2x - x^2)\,\frac{1 + \lambda V_{DS2}}{1 + \lambda V_{GS1}} .$$

The factor $2x - x^2$ equals 1 at the edge ($x = 1$) and drops faster and faster as $x$ falls below 1, so the error grows rapidly once $V_{DS2}$ goes below $V_{ov}$.

**Numbers:**

$$
\begin{aligned}
x &= \frac{0.136}{0.185} = 0.735, \qquad 2x - x^2 = 1.470 - 0.540 = 0.930,\\
\frac{1 + \lambda V_{DS2}}{1 + \lambda V_{GS1}} &= \frac{1.0136}{1.0885} = 0.931,\\
\frac{I_{out}}{I_{REF}} &= 0.930\times0.931 = 0.866 \quad\Longrightarrow\quad I_{out} \approx 86.6\ \mu\mathrm{A}.
\end{aligned}
$$

That is about **13 % low**, against 6.4 % for $\gamma = 0$. Moving the output between 1.5 V and 3 V changes $V_{DS2}$ slightly (through $\lambda$ of $M_3$) and gives $I_{out} = 85.9$–87.7 μA (12–14 % low).

An equivalent exact form, valid while $M_0$ and $M_3$ are saturated, compares the two upper devices, which carry $I_{REF}$ and $I_{out}$:

$$\frac{I_{out}}{I_{REF}} = \left(\frac{V_{ov3}}{V_{ov0}}\right)^2\frac{1 + \lambda V_{DS3}}{1 + \lambda V_{DS0}} = \left(\frac{0.1650}{0.1837}\right)^2\frac{1 + 0.1(2 - 0.136)}{1 + 0.1(1.058)} = 0.807\times\frac{1.186}{1.106} = 0.866. \ \checkmark$$

### Result

With $\gamma \ne 0$:

$$V_{DS2} = V_{ov1} + (V_{ov0} - V_{ov3}) - V_{ov4} - \gamma\left\{\left[\sqrt{2|\phi_F| + V_{G3}} - \sqrt{2|\phi_F| + V_X}\right] + \left[\sqrt{2|\phi_F| + V_B} - \sqrt{2|\phi_F|}\right]\right\} < V_{ov}.$$

The wide, low-current $M_4$ has $V_{GS4} \approx V_{TH4}(V_{SB} \approx 1\ \mathrm{V}) \approx 0.9$ V rather than 0.7 V. This is only partly offset by the raised threshold of $M_0$, so $V_{DS2}$ falls about 50–60 mV below the edge of saturation and **$M_2$ enters the triode region**. Then

$$\frac{I_{out}}{I_{REF}} \approx \left[2\frac{V_{DS2}}{V_{ov}} - \left(\frac{V_{DS2}}{V_{ov}}\right)^2\right]\frac{1 + \lambda V_{DS2}}{1 + \lambda V_{GS1}},$$

and the mismatch is **considerably larger than for $\gamma = 0$: typically 10–15 % low** (−13 % for the example, versus −6.4 % with $\gamma = 0$). The output resistance of the cascode is also degraded, because $M_2$ in triode has a much lower small-signal resistance.

**Common mistake.** Keeping the $\gamma = 0$ premise that $M_2$ sits at the edge of saturation and quoting the 6–7 % error. That edge was designed with $V_{GS4} \approx 0.7$ V; with $M_4$'s source at about 1 V, the body effect raises its threshold by about 0.2 V and the premise no longer holds.

**Common mistake.** Concluding that the body effect *raises* $V_{DS2}$ or cancels the error because $M_0$'s threshold also rises. $M_0$'s source (0.885 V) is lower than $M_4$'s (1.03 V), and $M_3$'s threshold rises as well, so the net change in $V_{DS2}$ is negative.

**Common mistake.** Using $M_2$'s saturation equation, $\tfrac{\beta}{2}V_{ov}^2(1 + \lambda V_{DS2})$, once $V_{DS2} < V_{ov}$. That predicts only a slightly larger λ-error; in triode the current falls as $2x - x^2$, which dominates the error.
