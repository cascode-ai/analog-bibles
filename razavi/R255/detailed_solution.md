# Detailed solution - R255

**Approach.** Write Kirchhoff's current law (KCL) at nodes X and Y with the square-law transistor currents. Solve it first at $I_{REF} = 0$, then find how $V_X$ and $V_Y$ move as $I_{REF}$ grows (by differentiating the KCL equations), locate the point where the two curves cross, and finally follow $M_1$ into the triode region at large $I_{REF}$. A numerical example makes the sketch concrete.

### Step 1 — The circuit and its KCL equations

Reading the figure:

- $I_{REF}$ flows from $V_{DD}$ into node X.
- $M_2$ is **diode-connected**: gate and drain both at X, source grounded.
- $M_1$ has its gate at X (so it mirrors $M_2$), its drain at Y and its source grounded.
- $R_1$ connects $V_{DD}$ to Y, and $R_2$ connects X to Y.

Square-law model with $\lambda = 0$, where $\beta = \mu_nC_{ox}W/L$ and $V_{TH} = 0.7$ V:

$$I_D = \frac{\beta}{2}(V_{GS} - V_{TH})^2 \ \ \text{(saturation)}, \qquad I_D = \beta\left[(V_{GS} - V_{TH})V_{DS} - \tfrac12 V_{DS}^2\right] \ \ \text{(triode)}.$$

$M_2$ is always saturated: $V_{DS2} = V_{GS2}$ is always larger than $V_{GS2} - V_{TH}$. Both transistors have $V_{GS} = V_X$, so **while $M_1$ is also saturated** the two currents are equal (identical devices, $\lambda = 0$):

$$I_{D1} = I_{D2} = \frac{\beta}{2}(V_X - V_{TH})^2 .$$

**KCL at X.** Current enters from $I_{REF}$ and from Y through $R_2$; it leaves through $M_2$:

$$I_{REF} + \frac{V_Y - V_X}{R_2} = I_{D2}. \tag{1}$$

**KCL at Y.** Current enters through $R_1$; it leaves through $M_1$ and through $R_2$ toward X:

$$\frac{V_{DD} - V_Y}{R_1} = I_{D1} + \frac{V_Y - V_X}{R_2}. \tag{2}$$

With $I_{D1} = I_{D2}$, replace $I_{D1}$ in (2) by the left-hand side of (1):

$$\frac{V_{DD} - V_Y}{R_1} = I_{REF} + \frac{2(V_Y - V_X)}{R_2}. \tag{3}$$

### Step 2 — The operating point at $I_{REF} = 0$

Could everything be off? If $M_2$ were off, no current would flow anywhere, so there would be no drop across $R_1$ or $R_2$ and $V_X = V_Y = V_{DD} = 3$ V. But then $V_{GS2} = 3\ \mathrm{V} > V_{TH}$ and $M_2$ would conduct, a contradiction. So **the circuit conducts even with $I_{REF} = 0$**: current flows from $V_{DD}$ through $R_1$ and $R_2$ into the diode $M_2$, and $M_1$ copies it.

Call this current $I_0 = I_{D2}$. Then:

- from (1) with $I_{REF} = 0$: $V_Y - V_X = R_2I_0$, so $R_2$ carries $I_0$;
- from (3): $V_{DD} - V_Y = 2R_1I_0$, because $R_1$ carries both $M_1$'s current and $R_2$'s current.

Hence

$$V_Y = V_{DD} - 2R_1I_0, \qquad V_X = V_{DD} - (2R_1 + R_2)I_0 .$$

Combining with the diode law $V_X = V_{TH} + \sqrt{2I_0/\beta}$ gives one equation for $I_0$:

$$V_{DD} - (2R_1 + R_2)I_0 = V_{TH} + \sqrt{\frac{2I_0}{\beta}} .$$

In words, $M_2$ behaves like a diode biased from $V_{DD}$ through an effective resistance $2R_1 + R_2$. So at $I_{REF} = 0$:

$$V_{TH} < V_X < V_Y < V_{DD}.$$

$V_X$ sits a little above 0.7 V, and $V_Y$ sits above it by $R_2I_0$. $M_1$ is saturated because $V_Y > V_X > V_X - V_{TH}$.

**Numerical example** (used throughout). Take $W/L = 10/0.5$ with $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$, so $\beta = 134\ \mu\mathrm{A/V^2}\times20 = 2.68\ \mathrm{mA/V^2}$, and take $R_1 = R_2 = 10\ \mathrm{k}\Omega$:

$$3\ \mathrm{V} - (30\ \mathrm{k}\Omega)\,I_0 = 0.7\ \mathrm{V} + \sqrt{\frac{2I_0}{2.68\ \mathrm{mA/V^2}}}.$$

Solving numerically gives $I_0 = 69.1\ \mu\mathrm{A}$. Then

$$
\begin{aligned}
V_X &= 3 - (30\ \mathrm{k}\Omega)(69.1\ \mu\mathrm{A}) = 3 - 2.073 = 0.927\ \mathrm{V},\\
V_Y &= 3 - (20\ \mathrm{k}\Omega)(69.1\ \mu\mathrm{A}) = 3 - 1.382 = 1.618\ \mathrm{V}.
\end{aligned}
$$

Check: $\sqrt{2(69.1\ \mu\mathrm{A})/(2.68\ \mathrm{mA/V^2})} = \sqrt{0.0516}\ \mathrm{V} = 0.227$ V, and $0.7 + 0.227 = 0.927$ V. ✓

### Step 3 — Slopes of $V_X$ and $V_Y$ while $M_1$ is saturated

Increase $I_{REF}$ by a small amount $dI$. Then $V_X$ and $V_Y$ change by $dV_X$ and $dV_Y$, and $I_{D2}$ changes by $g_m\,dV_X$, where

$$g_m = \frac{dI_{D2}}{dV_X} = \beta(V_X - V_{TH})$$

is the transconductance. Differentiate (1) and (3).

From (1):

$$dI + \frac{dV_Y - dV_X}{R_2} = g_m\,dV_X \quad\Longrightarrow\quad dV_Y - dV_X = R_2\,(g_m\,dV_X - dI). \tag{4}$$

From (3), then substituting (4):

$$
\begin{aligned}
-\frac{dV_Y}{R_1} &= dI + \frac{2(dV_Y - dV_X)}{R_2}\\
-\frac{dV_Y}{R_1} &= dI + 2(g_m\,dV_X - dI) = 2g_m\,dV_X - dI\\
dV_Y &= R_1\,(dI - 2g_m\,dV_X). \tag{5}
\end{aligned}
$$

Equation (4) can also be written $dV_Y = (1 + g_mR_2)\,dV_X - R_2\,dI$. Set it equal to (5):

$$
\begin{aligned}
(1 + g_mR_2)\,dV_X - R_2\,dI &= R_1\,dI - 2g_mR_1\,dV_X\\
\left[1 + g_m(2R_1 + R_2)\right]dV_X &= (R_1 + R_2)\,dI\\
\frac{dV_X}{dI_{REF}} &= \frac{R_1 + R_2}{1 + g_m(2R_1 + R_2)} .
\end{aligned}
$$

Put this back into (5):

$$
\begin{aligned}
\frac{dV_Y}{dI_{REF}} &= R_1\left[1 - \frac{2g_m(R_1 + R_2)}{1 + g_m(2R_1 + R_2)}\right]
= R_1\,\frac{1 + 2g_mR_1 + g_mR_2 - 2g_mR_1 - 2g_mR_2}{1 + g_m(2R_1 + R_2)}\\
&= -\,\frac{R_1\,(g_mR_2 - 1)}{1 + g_m(2R_1 + R_2)} = -\,\frac{R_1\,(R_2 - 1/g_m)}{2R_1 + R_2 + 1/g_m}.
\end{aligned}
$$

**What this means.**

- $dV_X/dI_{REF}$ is positive and small. When $g_mR_1$ and $g_mR_2$ are large, $dV_X/dI_{REF} \approx (R_1 + R_2)/[g_m(2R_1 + R_2)]$, which is below $1/g_m$. So $V_X$ rises slowly, like (in fact a little more slowly than) a diode voltage.
- $dV_Y/dI_{REF}$ is **negative when $g_mR_2 > 1$**, the usual case. $M_1$ copies the growing current and pulls it through $R_1$, which lowers $V_Y$. For $g_mR_2 \gg 1$ the slope tends to $-R_1R_2/(2R_1 + R_2)$, so $V_Y$ falls almost linearly.
- If $g_mR_2 < 1$ (very small $R_2$ or a weak device), $V_Y$ is tied so tightly to the rising $V_X$ that it first **rises**. Since $g_m$ grows with $I_{REF}$, it then peaks where $g_mR_2 = \beta R_2(V_X - V_{TH}) = 1$, or keeps rising until $M_1$ leaves saturation. Example: $\beta = 1\ \mathrm{mA/V^2}$, $R_1 = 2\ \mathrm{k}\Omega$, $R_2 = 0.5\ \mathrm{k}\Omega$ gives $V_Y = 1.68$ V at $I_{REF} = 0$ and 1.96 V at 3 mA.

**Numbers for the example at $I_{REF} = 0$:**

$$
\begin{aligned}
g_m &= (2.68\ \mathrm{mA/V^2})(0.227\ \mathrm{V}) = 0.609\ \mathrm{mS}, \qquad \frac{1}{g_m} = 1.64\ \mathrm{k}\Omega, \qquad g_mR_2 = 6.1 > 1,\\
\frac{dV_X}{dI_{REF}} &= \frac{20\ \mathrm{k}\Omega}{1 + (0.609\ \mathrm{mS})(30\ \mathrm{k}\Omega)} = \frac{20\ \mathrm{k}\Omega}{19.3} = 1.04\ \mathrm{k}\Omega \ \ (1.04\ \mathrm{mV}/\mu\mathrm{A}),\\
\frac{dV_Y}{dI_{REF}} &= -\frac{(10\ \mathrm{k}\Omega)(10 - 1.64)\ \mathrm{k}\Omega}{(20 + 10 + 1.64)\ \mathrm{k}\Omega} = -2.64\ \mathrm{k}\Omega \ \ (-2.64\ \mathrm{mV}/\mu\mathrm{A}).
\end{aligned}
$$

### Step 4 — The crossing point $V_X = V_Y$

At $I_{REF} = 0$, $V_Y > V_X$, and $V_Y$ falls while $V_X$ rises, so the curves cross. At the crossing $R_2$ carries **no current**, so:

- from (1): $I_{D2} = I_{REF}$, hence $V_X = V_{TH} + \sqrt{2I_{REF}/\beta}$;
- from (3): $V_{DD} - V_Y = R_1I_{REF}$, hence $V_Y = V_{DD} - R_1I_{REF}$.

The crossing current solves

$$V_{DD} - R_1I_{REF} = V_{TH} + \sqrt{\frac{2I_{REF}}{\beta}} = V_{GS}(I_{REF}).$$

For the example, try $I_{REF} = 192\ \mu\mathrm{A}$:

$$
\begin{aligned}
V_{DD} - R_1I_{REF} &= 3 - (10\ \mathrm{k}\Omega)(192\ \mu\mathrm{A}) = 1.080\ \mathrm{V},\\
V_{TH} + \sqrt{2I_{REF}/\beta} &= 0.7 + \sqrt{2(192\ \mu\mathrm{A})/(2.68\ \mathrm{mA/V^2})} = 0.7 + 0.379 = 1.079\ \mathrm{V}.
\end{aligned}
$$

So the curves cross at $I_{REF} \approx 192\ \mu\mathrm{A}$, at about 1.08 V. $M_1$ is still saturated there, since $V_{DS1} = V_{GS1} > V_{GS1} - V_{TH}$. Beyond this point $V_Y < V_X$, and $R_2$ carries current from X to Y.

### Step 5 — $M_1$ enters the triode region; $V_Y$ flattens

$M_1$ leaves saturation when $V_{DS1} = V_{GS1} - V_{TH}$, i.e.

$$V_Y = V_X - 0.7\ \mathrm{V}.$$

In the example this happens at $I_{REF} \approx 391\ \mu\mathrm{A}$, with $V_X = 1.19$ V and $V_Y = 0.49$ V (found by solving (1) and (3) numerically). Beyond it, $I_{D1} \ne I_{D2}$ and (2) must be used with the triode current.

For large $I_{REF}$, $V_X$ keeps rising and $M_1$ goes deep into triode, where it behaves like a resistor

$$R_{on1} = \frac{1}{\beta(V_X - V_{TH})}.$$

<!-- diagram: diagram-01.cir -->

Node Y is then fed from $V_{DD}$ through $R_1$ and from X through $R_2$, and drained to ground by $R_{on1}$. KCL at Y gives

$$\frac{V_{DD} - V_Y}{R_1} + \frac{V_X - V_Y}{R_2} = \frac{V_Y}{R_{on1}} \quad\Longrightarrow\quad V_Y = \frac{V_{DD}/R_1 + V_X/R_2}{1/R_1 + 1/R_2 + \beta(V_X - V_{TH})}.$$

When $V_X$ becomes large, the $V_X/R_2$ term dominates the numerator and $\beta V_X$ dominates the denominator, so

$$V_Y \to \frac{V_X/R_2}{\beta V_X} = \frac{1}{\beta R_2}.$$

Physically, $R_2$ and $R_{on1}$ form a divider driven by $V_X$. As $V_X$ rises, $M_1$'s conductance rises in proportion, so $V_Y$ stops falling and levels off at a small value. For the example, $1/(\beta R_2) = 1/(2.68\ \mathrm{mA/V^2}\times10\ \mathrm{k}\Omega) = 37$ mV, which is approached very slowly.

Meanwhile (1) shows $I_{D2} = I_{REF} - (V_X - V_Y)/R_2$: a little of $I_{REF}$ is diverted through $R_2$, so $V_X$ stays slightly below the bare diode value $V_{TH} + \sqrt{2I_{REF}/\beta}$ but keeps its square-root-like rise. (A real current source tied to 3 V would stop $V_X$ before it reaches $V_{DD}$.)

### Step 6 — Table of values for the sketch

Solving (1) and (2) with the full square-law model, for $\beta = 2.68\ \mathrm{mA/V^2}$ and $R_1 = R_2 = 10\ \mathrm{k}\Omega$:

| $I_{REF}$ | $V_X$ (V) | $V_Y$ (V) | $M_1$ |
|---|---|---|---|
| 0 | 0.927 | 1.618 | saturation |
| 100 μA | 1.015 | 1.343 | saturation |
| 192 μA | 1.079 | 1.079 | saturation (curves cross) |
| 300 μA | 1.142 | 0.761 | saturation |
| 391 μA | 1.189 | 0.489 | edge of triode |
| 600 μA | 1.310 | 0.301 | triode |
| 1 mA | 1.506 | 0.218 | triode |
| 2 mA | 1.868 | 0.156 | triode |

### Result

- **At $I_{REF} = 0$ the circuit already conducts**: current flows $V_{DD} \to R_1 \to R_2 \to M_2$ and $M_1$ copies it, so $V_{TH} < V_X < V_Y$, with $V_{DD} - (2R_1 + R_2)I_0 = V_{TH} + \sqrt{2I_0/\beta}$ (example: $V_X \approx 0.93$ V, $V_Y \approx 1.62$ V).
- **$V_X$ rises slowly** (diode-like, concave down), with slope $(R_1 + R_2)/[1 + g_m(2R_1 + R_2)]$.
- **$V_Y$ falls roughly linearly** in the usual case $g_mR_2 > 1$, with $g_m = \beta(V_X - 0.7)$ and slope $-R_1(R_2 - 1/g_m)/(2R_1 + R_2 + 1/g_m) \approx -R_1R_2/(2R_1 + R_2)$. If $\beta R_2(V_X - 0.7) < 1$ at the start, $V_Y$ first rises and peaks where $\beta R_2(V_X - 0.7) = 1$ (or until $M_1$ leaves saturation).
- **The curves cross** where $V_{DD} - R_1I_{REF} = V_{GS}(I_{REF}) = 0.7 + \sqrt{2I_{REF}/\beta}$, where $R_2$ carries no current (example: about 192 μA at 1.08 V). Beyond it, $V_Y < V_X$.
- **Once $V_Y < V_X - 0.7$ V, $M_1$ is in triode** and $V_Y$ flattens, approaching $1/(\beta R_2)$ ($R_2$ against $M_1$'s on-resistance). In the example: 0.22 V at 1 mA, while $V_X$ keeps rising (1.51 V at 1 mA).

**Common mistake.** Ignoring $R_2$ and writing $V_Y = V_{DD} - R_1I_{REF}$ for all $I_{REF}$. That is true only at the single crossing point, where $R_2$ carries no current. Elsewhere $R_2$ carries current, and it is $R_2$ that makes the circuit conduct at $I_{REF} = 0$ and makes $V_Y$ level off at large currents.

**Common mistake.** Claiming that at $I_{REF} = 0$ no current flows and $V_X$ is undefined. With no current, $V_X$ would be pulled to $V_{DD}$ through $R_1$ and $R_2$, which turns $M_2$ on; the self-consistent state has $I_0 > 0$.

**Common mistake.** Stating that $V_Y$ generally *increases* with $I_{REF}$, or that $V_X = V_Y$ for all $I_{REF}$. $V_Y$ rises only in the special case $g_mR_2 < 1$. Normally the mirror current through $R_1$ dominates and $V_Y$ falls until $M_1$ enters triode.
