# Detailed solution - R251

**Approach.** $V_1$ drives the **source** of the diode-connected $M_2$, while $M_1$'s source stays grounded. Raising $V_1$ forces $V_X$ up; $M_1$ sees the full $V_X$, conducts harder and pulls Y down, which diverts more of $I_{REF}$ from X through $R_2$, until $M_2$ cuts off. From then on $V_1$ no longer appears in any equation and both curves are flat. Write the node equations, follow these trends, find the cutoff point and the flat levels, and illustrate with an example.

### Step 1 — Node equations

$V_{GS2} = V_X - V_1$ and $V_{GS1} = V_X$. With the bulks grounded, $V_{SB2} = V_1$ and

$$V_{TH2}(V_1) = 0.7 + 0.45\left(\sqrt{0.9 + V_1} - \sqrt{0.9}\right),$$

which rises from 0.7 V at $V_1 = 0$ to 1.16 V at $V_1 = 3$ V; $V_{TH1} = 0.7$ V. KCL at X and Y:

$$I_{REF} = I_{D2} + \frac{V_X - V_Y}{R_2}, \qquad I_{D2} = \frac{\beta}{2}\left(V_X - V_1 - V_{TH2}(V_1)\right)^2 \ \text{(diode, saturated)} , \qquad (1)$$

$$\frac{V_{DD} - V_Y}{R_1} + \frac{V_X - V_Y}{R_2} = I_{D1}(V_{GS} = V_X,\ V_{DS} = V_Y) . \qquad (2)$$

### Step 2 — The starting point, $V_1 = 0$

Both sources are grounded, and the circuit is a resistor-loaded mirror with $R_2$ between X and Y. $V_X$ is the diode voltage for $I_{D2} = I_{REF} + (V_Y - V_X)/R_2$, not simply $V_{GS}(I_{REF}) = 0.7 + \sqrt{2I_{REF}/\beta}$: typically $R_1$ pulls Y above X, so some current flows from Y into X and $M_2$ carries somewhat more than $I_{REF}$.

### Step 3 — Raising $V_1$: $V_X$ rises

From (1),

$$V_X = V_1 + V_{TH2}(V_1) + \sqrt{\frac{2I_{D2}}{\beta}} .$$

The first two terms rise with $V_1$ (the second through the body effect), so **$V_X$ rises**, somewhat less than $V_1 + \Delta V_{TH2}$ because $I_{D2}$ shrinks.

### Step 4 — The response of $V_Y$

Differentiating (2) with $M_1$ saturated ($dI_{D1} = g_{m1}dV_X$, $g_{m1} = \beta(V_X - 0.7)$):

$$-\frac{dV_Y}{R_1} + \frac{dV_X - dV_Y}{R_2} = g_{m1}\,dV_X \;\Longrightarrow\; dV_Y\left(\frac{1}{R_1} + \frac{1}{R_2}\right) = dV_X\left(\frac{1}{R_2} - g_{m1}\right) ,$$

$$\frac{dV_Y}{dV_1} = \frac{1 - g_{m1}R_2}{1 + R_2/R_1}\cdot\frac{dV_X}{dV_1} .$$

$R_2$ drags Y up with X (the "1"), while $M_1$'s extra current pulls Y down (the "$g_{m1}R_2$"). **If $g_{m1}R_2 > 1$** (the usual case), **$V_Y$ falls** as $V_1$ rises; if $g_{m1}R_2 < 1$, $V_Y$ rises with X, and may turn over later as $g_{m1}$ grows, or keep rising until $M_2$ cuts off. If $M_1$ enters triode ($V_Y < V_X - 0.7$ V), the same relation holds with $g_{m1}$ replaced by $\beta V_Y$ and an extra $g_{ds1} = \beta(V_X - 0.7 - V_Y)$ added to the conductances on the left.

### Step 5 — $M_2$'s current falls, and $M_2$ cuts off

From (1), $I_{D2} = I_{REF} - (V_X - V_Y)/R_2$. As $V_X$ rises and $V_Y$ falls, $R_2$ takes an increasing share of $I_{REF}$ from X to Y, so **$I_{D2}$ decreases** (at $V_1 = 0$ the $R_2$ current may even flow from Y to X; it reverses as $V_1$ rises). $M_2$ turns off when

$$V_X - V_1 = V_{TH2}(V_1) \qquad\Longleftrightarrow\qquad V_1 + V_{TH2}(V_1) = V_{X,flat},$$

with $V_{X,flat}$ the value of $V_X$ once $M_2$ is off (Step 6); for typical values this takes a few hundred millivolts of $V_1$.

### Step 6 — The flat region ($M_2$ off)

With $I_{D2} = 0$, all of $I_{REF}$ flows from X through $R_2$ into Y:

$$V_X = V_Y + R_2I_{REF}, \qquad \frac{V_{DD} - V_Y}{R_1} + I_{REF} = I_{D1}(V_{GS} = V_Y + R_2I_{REF},\ V_{DS} = V_Y) .$$

**Neither equation contains $V_1$**, so $V_X$ and $V_Y$ stay **constant** up to $V_{DD}$; $M_2$'s source keeps rising, but $M_2$ is simply off. $M_1$ is in triode here if $R_2I_{REF} > 0.7$ V, since then $V_{DS1} = V_Y < V_{GS1} - 0.7 = V_Y + R_2I_{REF} - 0.7$.

**Exception.** With an ideal $I_{REF}$ and a large $R_2I_{REF}$, if $V_{X,flat}$ exceeds $3\ \mathrm{V} + V_{TH2}(3\ \mathrm{V}) = 3 + 1.16 = 4.16$ V, $M_2$ never cuts off within the sweep and the trends continue up to $V_1 = 3$ V.

### Step 7 — Numerical example

$I_{REF} = 100\ \mu$A, $W/L = 10/0.5$ ($\beta = 2.68\ \mathrm{mA/V^2}$), $R_1 = R_2 = 10\ \mathrm{k}\Omega$, $V_{DD} = 3$ V.

**Flat region.** $R_2I_{REF} = 1$ V $> 0.7$ V, so $M_1$ is in triode, with $V_{GS1} - 0.7 = V_Y + 0.3$ V:

$$\frac{3 - V_Y}{10\ \mathrm{k}\Omega} + 0.1\ \mathrm{mA} = (2.68\ \mathrm{mA/V^2})\left[(V_Y + 0.3)V_Y - \tfrac12V_Y^2\right] .$$

In volts and mA, $0.4 - 0.1V_Y = 1.34V_Y^2 + 0.804V_Y$, i.e. $1.34V_Y^2 + 0.904V_Y - 0.4 = 0$:

$$V_Y = \frac{-0.904 + \sqrt{0.817 + 2.144}}{2.68} = \frac{-0.904 + 1.721}{2.68} = 0.305\ \mathrm{V}, \qquad V_X = 0.305 + 1.0 = 1.305\ \mathrm{V} .$$

**Cutoff.** $V_1 + V_{TH2}(V_1) = 1.305$ V. At $V_1 = 0.5$ V, $V_{TH2} = 0.7 + 0.45(1.1832 - 0.9487) = 0.806$ V and the sum is 1.306 V, so $M_2$ cuts off at $V_1 \approx 0.50$ V.

**Full solution** of (1) and (2):

| $V_1$ (V) | 0 | 0.1 | 0.2 | 0.25 | 0.3 | 0.4 | ≥ 0.5 |
|---|---|---|---|---|---|---|---|
| $V_X$ (V) | 1.015 | 1.089 | 1.151 | 1.176 | 1.201 | 1.263 | 1.305 |
| $V_Y$ (V) | 1.343 | 1.033 | 0.716 | 0.567 | 0.443 | 0.341 | 0.305 |
| $I_{D2}$ (μA) | 133 | 94 | 57 | 39 | 24 | 8 | 0 |
| $I_{D1}$ (μA) | 133 | 202 | 272 | 304 | 331 | 358 | 370 |
| $M_1$ | sat | sat | sat | sat | triode | triode | triode |

At $V_1 = 0$, $g_{m1}R_2 = \beta(V_X - 0.7)R_2 = (2.68\ \mathrm{mA/V^2})(0.315\ \mathrm{V})(10\ \mathrm{k}\Omega) = 8.4 > 1$, so $V_Y$ falls steeply while $V_X$ rises. $V_X$ at $V_1 = 0$ (1.02 V) differs from $V_{GS}(I_{REF}) = 0.97$ V because 33 μA flows from Y into X through $R_2$.

### Result

- **Starting at $V_1 = 0$:** a resistor-loaded mirror with $R_2$ between X and Y; the starting values follow from the node equations (example: $V_X \approx 1.02$ V, $V_Y \approx 1.34$ V).
- **As $V_1$ rises:** $V_X$ rises, roughly as $V_1 + V_{TH2}(V_1) + \sqrt{2I_{D2}/\beta}$. $V_Y$ **falls** if $g_{m1}R_2 > 1$ (typical), because $M_1$, with its grounded source, is driven harder; if $g_{m1}R_2 < 1$ it rises instead (and may turn over later). In general $dV_Y/dV_1 = \frac{1 - g_{m1}R_2}{1 + R_2/R_1}\,\frac{dV_X}{dV_1}$ with $M_1$ saturated. $M_2$'s current shrinks as $R_2$ diverts more of $I_{REF}$.
- **$M_2$ cuts off** where $V_1 + V_{TH2}(V_1)$ reaches the flat-region $V_X$ (about 0.5 V in the example). From there on **both curves are flat** up to $V_{DD}$, with $V_X - V_Y = R_2I_{REF}$ (all of $I_{REF}$ through $R_2$ into $M_1$; $M_1$ in triode if $R_2I_{REF} > 0.7$ V). In the example $V_X \approx 1.30$ V and $V_Y \approx 0.30$ V.
- If the flat-region $V_X$ exceeded about 4.16 V (possible only with a large $R_2I_{REF}$), $M_2$ would stay on over the whole range.

**Common mistake.** Letting $V_X$ follow $V_1 + V_{GS}$ all the way to $V_1 = 3$ V. $M_1$ pulls Y down and $R_2$ diverts $I_{REF}$ away from $M_2$, so $M_2$ cuts off after a modest rise of $V_1$, and X then no longer depends on $V_1$.

**Common mistake.** Drawing $V_Y$ rising with $V_1$ from the start (for typical values). The rising gate voltage of the grounded-source $M_1$ increases its current, and Y drops whenever $g_{m1}R_2 > 1$.

**Common mistake.** Putting $M_1$'s source at $V_1$ as well. Only $M_2$'s source is connected to $V_1$, and that asymmetry is what makes the circuit differ from a normal mirror.
