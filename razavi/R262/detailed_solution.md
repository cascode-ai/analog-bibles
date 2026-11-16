# Detailed solution - R262

**Approach.** The source of the diode-connected $M_2$ connects only to $C_1$, so the whole of $I_{REF}$ flows through $M_2$ into the capacitor: the capacitor voltage ramps linearly, and $V_X$ rides one gate–source voltage higher (with body effect). $M_1$ sees the rising $V_X$ as its gate voltage, so its current grows and $V_Y$ falls until $M_1$ is deep in triode. We derive each waveform and then evaluate a numerical example.

### Step 1 — The capacitor voltage: a linear ramp

The gate of $M_1$ draws no current, so all of $I_{REF}$ flows through $M_2$ into $C_1$:

$$C_1\frac{dV_{C1}}{dt} = I_{REF} \quad\Longrightarrow\quad V_{C1}(t) = V_{S2}(t) = \frac{I_{REF}}{C_1}\,t .$$

$M_2$ is diode-connected, hence saturated, and carries the constant current $I_{REF}$, so its overdrive is constant:

$$V_{ov} = V_{GS2} - V_{TH2} = \sqrt{\frac{2I_{REF}}{\beta}} .$$

Its bulk is grounded, so $V_{SB2} = V_{C1}$ and

$$V_{TH}(V_{SB}) = 0.7 + 0.45\left(\sqrt{0.9 + V_{SB}} - \sqrt{0.9}\right)\ \mathrm{V}.$$

### Step 2 — $V_X(t)$: a ramp starting at $V_{GS}(I_{REF})$

Node X is one gate–source voltage above $M_2$'s source:

$$V_X(t) = V_{S2}(t) + V_{TH}\big(V_{S2}(t)\big) + \sqrt{\frac{2I_{REF}}{\beta}} .$$

- **At $t = 0^+$:** $V_{S2} = 0$, so $V_X(0^+) = 0.7 + \sqrt{2I_{REF}/\beta} = V_{GS}(I_{REF})$, the ordinary diode voltage.
- **Slope:** with $\eta = dV_{TH}/dV_{SB} = \gamma/(2\sqrt{0.9 + V_{S2}})$,
$$\frac{dV_X}{dt} = (1 + \eta)\frac{dV_{S2}}{dt} = (1 + \eta)\frac{I_{REF}}{C_1}.$$
At $V_{S2} = 0$, $\eta = 0.45/(2\times0.949) = 0.237$, falling to about 0.15 at $V_{S2} = 1.5$ V. So $V_X$ ramps almost linearly, about 15–24 % faster than the capacitor itself, and very slightly concave down.

### Step 3 — $V_Y$ at $t = 0^+$

At $t = 0^+$ both sources are at ground and both gates are at X, so $M_1$ has the same $V_{GS}$ as $M_2$ and, if saturated, copies its current:

$$I_{D1}(0^+) = I_{REF} \quad\Longrightarrow\quad V_Y(0^+) = V_{DD} - R_1I_{REF} .$$

This assumes $M_1$ is saturated, i.e. $V_{DD} - R_1I_{REF} \ge \sqrt{2I_{REF}/\beta}$, the normal case for a sensible $R_1$.

### Step 4 — $V_Y(t)$ falls, and $M_1$ goes into triode

As $V_X$ rises, $M_1$'s gate–source voltage rises while its source stays grounded, so its current is no longer a copy of $I_{REF}$ but grows **quadratically**. With $M_1$ saturated:

$$I_{D1}(t) = \frac{\beta}{2}\left(V_X(t) - 0.7\right)^2, \qquad V_Y(t) = V_{DD} - R_1\frac{\beta}{2}\left(V_X(t) - 0.7\right)^2 .$$

Since $V_X(t) - 0.7 \approx V_{ov} + (1 + \eta)I_{REF}t/C_1$,

$$V_Y(t) \approx V_{DD} - R_1I_{REF}\left(1 + \frac{t}{t_0}\right)^2, \qquad t_0 = \frac{C_1V_{ov}}{(1 + \eta)I_{REF}} :$$

an inverted parabola that starts at $V_{DD} - R_1I_{REF}$ and bends downward ever faster.

**Entering triode.** $M_1$ leaves saturation when $V_Y = V_X - 0.7$. After that it behaves like a resistor whose value keeps falling as $V_X$ rises:

$$R_{on1} = \frac{1}{\beta(V_X - 0.7)}, \qquad V_Y \approx V_{DD}\frac{R_{on1}}{R_1 + R_{on1}} .$$

So **$V_Y$ flattens out at a low value** and keeps creeping slowly toward zero as $V_X$ rises.

### Step 5 — The end of the ramp: ideal or real current source

- **Ideal current source:** nothing stops the charging. $V_{C1}$ and $V_X$ keep ramping indefinitely, and $V_Y$ keeps creeping toward zero.
- **Real current source tied to $V_{DD} = 3$ V:** its current collapses as $V_X$ approaches $V_{DD}$, so $V_X$ levels off near $V_{DD}$. The capacitor keeps charging (ever more slowly) until $M_2$ turns off, i.e. until $V_{C1} + V_{TH}(V_{C1}) \approx V_{DD}$, roughly $V_{DD} - V_{TH2}$ with the body-effect threshold. $V_Y$ settles at $V_{DD}R_{on1}/(R_1 + R_{on1})$ with $R_{on1}$ evaluated at $V_{GS1} \approx V_{DD}$.

The problem does not say which kind of source is meant; either description is reasonable, and the linear ramp is the same in both until $V_X$ nears $V_{DD}$.

### Step 6 — Numerical example

Take $\beta = 2.68\ \mathrm{mA/V^2}$ ($W/L = 10/0.5$, $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$), $I_{REF} = 100\ \mu\mathrm{A}$, $R_1 = 10\ \mathrm{k}\Omega$, $C_1 = 10$ pF.

$$
\begin{aligned}
\frac{I_{REF}}{C_1} &= \frac{100\ \mu\mathrm{A}}{10\ \mathrm{pF}} = 10\ \mathrm{V}/\mu\mathrm{s},\\
V_{ov} &= \sqrt{2(100\ \mu\mathrm{A})/(2.68\ \mathrm{mA/V^2})} = 0.273\ \mathrm{V}, \qquad V_X(0^+) = 0.973\ \mathrm{V},\\
V_Y(0^+) &= 3 - (10\ \mathrm{k}\Omega)(100\ \mu\mathrm{A}) = 2.0\ \mathrm{V} \quad (> V_{ov}, \text{ so } M_1 \text{ is saturated}),\\
t_0 &= \frac{(10\ \mathrm{pF})(0.273\ \mathrm{V})}{1.237\times100\ \mu\mathrm{A}} = 22\ \mathrm{ns}.
\end{aligned}
$$

**Triode edge.** With $u = V_X - 0.7$, the condition $3 - R_1\tfrac{\beta}{2}u^2 = u$ becomes $13.4u^2 + u - 3 = 0$, so $u = 0.437$ V and $V_X = 1.137$ V. This is reached when $V_{C1} = 0.134$ V, i.e. at $t = 13.4$ ns.

| $t$ | $V_{C1}$ (V) | $V_X$ (V) | $V_Y$ (V) | $M_1$ |
|---|---|---|---|---|
| $0^+$ | 0 | 0.973 | 2.00 | saturation |
| 5 ns | 0.05 | 1.035 | 1.50 | saturation |
| 10 ns | 0.10 | 1.096 | 0.90 | saturation |
| 13.4 ns | 0.134 | 1.137 | 0.44 | edge of triode |
| 20 ns | 0.20 | 1.218 | 0.26 | triode |
| 50 ns | 0.50 | 1.579 | 0.13 | triode |
| 100 ns | 1.00 | 2.167 | 0.076 | triode |
| 150 ns | 1.50 | 2.743 | 0.055 | triode |

$V_X$ reaches $V_{DD} = 3$ V at about 172 ns ($V_{C1} = 1.72$ V). With a real source the ramp stops there, the capacitor creeps up to about 1.97 V (where $V_{TH2} \approx 1.03$ V), and $V_Y$ settles near $3\times162\ \Omega/(10\ \mathrm{k}\Omega + 162\ \Omega) \approx 0.05$ V.

### Result

- **$V_{C1}$** ramps linearly at $I_{REF}/C_1$: $I_{REF}$ has no path other than through $M_2$ into $C_1$.
- **$V_X$** starts at $V_{GS}(I_{REF}) = 0.7 + \sqrt{2I_{REF}/\beta}$ and ramps almost linearly with slope $(1 + \eta)I_{REF}/C_1$, slightly more than $I_{REF}/C_1$ because the body effect raises $V_{TH2}$ as the source rises. With an ideal source the ramp continues indefinitely. A real source runs out of headroom as $V_X$ approaches $V_{DD}$, so the ramp stops there, and $C_1$ ends at about $V_{DD} - V_{TH2}$ (body effect).
- **$V_Y$** starts at $V_{DD} - R_1I_{REF}$ (when $M_1$ copies $I_{REF}$) and falls along an inverted parabola, because $I_{D1} = \tfrac{\beta}{2}(V_X - 0.7)^2$ grows quadratically. $M_1$ then enters triode and $V_Y$ levels off at a low value, $\approx V_{DD}R_{on1}/(R_1 + R_{on1})$ with $R_{on1}$ the on-resistance at $V_{GS1} \approx V_X$.

**Common mistake.** Treating the circuit as an ordinary mirror, with $V_X$ constant at $V_{GS}(I_{REF})$ and $V_Y = V_{DD} - R_1I_{REF}$ constant. $M_2$'s source sits on $C_1$, which integrates $I_{REF}$, so every voltage in the reference branch ramps.

**Common mistake.** Drawing an exponential (RC) settling of $V_X$. $C_1$ is charged by the constant current $I_{REF}$, which gives a linear ramp; $R_1$ is in the other branch and has no effect on $C_1$.

**Common mistake.** Drawing $V_Y$ rising toward $V_{DD}$. $M_1$'s source is grounded while its gate voltage rises, so it conducts *more* and pulls $V_Y$ *down*.
