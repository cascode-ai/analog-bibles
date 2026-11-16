# Detailed solution - R255

**Approach.** Write KCL at nodes X and Y with the square-law transistor currents. Solve it at $I_{REF} = 0$, differentiate it to find how $V_X$ and $V_Y$ move as $I_{REF}$ grows, locate the point where the two curves cross, and follow $M_1$ into the triode region at large $I_{REF}$. A numerical example makes the sketch concrete.

### Step 1 — The KCL equations

$M_2$ is diode-connected, so it is always saturated, and both transistors have $V_{GS} = V_X$. So **while $M_1$ is also saturated** (identical devices, $\lambda = 0$, $\beta = \mu_nC_{ox}W/L$, $V_{TH} = 0.7$ V):

$$I_{D1} = I_{D2} = \frac{\beta}{2}(V_X - V_{TH})^2 .$$

KCL at X and at Y:

$$I_{REF} + \frac{V_Y - V_X}{R_2} = I_{D2}, \tag{1}$$

$$\frac{V_{DD} - V_Y}{R_1} = I_{D1} + \frac{V_Y - V_X}{R_2}. \tag{2}$$

With $I_{D1} = I_{D2}$, replacing $I_{D1}$ in (2) by the left-hand side of (1) gives

$$\frac{V_{DD} - V_Y}{R_1} = I_{REF} + \frac{2(V_Y - V_X)}{R_2}. \tag{3}$$

### Step 2 — The operating point at $I_{REF} = 0$

The circuit conducts even with $I_{REF} = 0$: with no current, $R_1$ and $R_2$ would pull X to $V_{DD} = 3$ V and turn $M_2$ on. So current flows from $V_{DD}$ through $R_1$ and $R_2$ into the diode $M_2$, and $M_1$ copies it. Call it $I_0 = I_{D2}$. With $I_{REF} = 0$, (1) gives $V_Y - V_X = R_2I_0$, and (3) gives $V_{DD} - V_Y = 2R_1I_0$ ($R_1$ carries both $M_1$'s and $R_2$'s current). Hence

$$V_Y = V_{DD} - 2R_1I_0, \qquad V_X = V_{DD} - (2R_1 + R_2)I_0 .$$

With the diode law $V_X = V_{TH} + \sqrt{2I_0/\beta}$, this gives one equation for $I_0$, a diode biased from $V_{DD}$ through an effective resistance $2R_1 + R_2$:

$$V_{DD} - (2R_1 + R_2)I_0 = V_{TH} + \sqrt{\frac{2I_0}{\beta}} .$$

So at $I_{REF} = 0$, $V_{TH} < V_X < V_Y < V_{DD}$: $V_X$ sits a little above 0.7 V and $V_Y$ above it by $R_2I_0$. $M_1$ is saturated because $V_Y > V_X > V_X - V_{TH}$.

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

Increase $I_{REF}$ by $dI$. Then $I_{D2}$ changes by $g_m\,dV_X$, with $g_m = \beta(V_X - V_{TH})$. Differentiate (1):

$$dI + \frac{dV_Y - dV_X}{R_2} = g_m\,dV_X \quad\Longrightarrow\quad dV_Y - dV_X = R_2\,(g_m\,dV_X - dI). \tag{4}$$

Differentiate (3), then substitute (4):

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

- $dV_X/dI_{REF}$ is positive and small: for large $g_mR_1$ and $g_mR_2$ it is about $(R_1 + R_2)/[g_m(2R_1 + R_2)]$, below $1/g_m$, so $V_X$ rises slowly, a little more slowly than a diode voltage.
- $dV_Y/dI_{REF}$ is **negative when $g_mR_2 > 1$**, the usual case, because $M_1$ pulls the growing mirrored current through $R_1$. For $g_mR_2 \gg 1$ the slope tends to $-R_1R_2/(2R_1 + R_2)$, so $V_Y$ falls almost linearly.
- If $g_mR_2 < 1$ (very small $R_2$ or a weak device), $V_Y$ is tied so tightly to the rising $V_X$ that it first **rises**; since $g_m$ grows with $I_{REF}$, it peaks where $g_mR_2 = \beta R_2(V_X - V_{TH}) = 1$, or keeps rising until $M_1$ leaves saturation. Example: $\beta = 1\ \mathrm{mA/V^2}$, $R_1 = 2\ \mathrm{k}\Omega$, $R_2 = 0.5\ \mathrm{k}\Omega$ gives $V_Y = 1.68$ V at $I_{REF} = 0$ and 1.96 V at 3 mA.

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

So the curves cross at $I_{REF} \approx 192\ \mu\mathrm{A}$, at about 1.08 V, with $M_1$ still saturated ($V_{DS1} = V_{GS1}$). Beyond this point $V_Y < V_X$, and $R_2$ carries current from X to Y.

### Step 5 — $M_1$ enters the triode region; $V_Y$ flattens

$M_1$ leaves saturation when $V_{DS1} = V_{GS1} - V_{TH}$, i.e.

$$V_Y = V_X - 0.7\ \mathrm{V}.$$

In the example this happens at $I_{REF} \approx 391\ \mu\mathrm{A}$, with $V_X = 1.19$ V and $V_Y = 0.49$ V (found by solving (1) and (3) numerically). Beyond it, $I_{D1} \ne I_{D2}$, and (2) must be used with the triode current $I_{D1} = \beta\left[(V_X - V_{TH})V_Y - \tfrac12 V_Y^2\right]$.

For large $I_{REF}$, $V_X$ keeps rising and $M_1$ goes deep into triode, where it behaves like a resistor

$$R_{on1} = \frac{1}{\beta(V_X - V_{TH})}.$$

<!-- diagram: diagram-01.cir -->

Node Y is then fed from $V_{DD}$ through $R_1$ and from X through $R_2$, and drained to ground by $R_{on1}$. KCL at Y gives

$$\frac{V_{DD} - V_Y}{R_1} + \frac{V_X - V_Y}{R_2} = \frac{V_Y}{R_{on1}} \quad\Longrightarrow\quad V_Y = \frac{V_{DD}/R_1 + V_X/R_2}{1/R_1 + 1/R_2 + \beta(V_X - V_{TH})}.$$

When $V_X$ becomes large, $V_X/R_2$ dominates the numerator and $\beta V_X$ the denominator, so

$$V_Y \to \frac{V_X/R_2}{\beta V_X} = \frac{1}{\beta R_2}.$$

$R_2$ and $R_{on1}$ form a divider driven by $V_X$ whose ratio falls as $M_1$'s conductance rises with $V_X$, so $V_Y$ stops falling and levels off at a small value. For the example, $1/(\beta R_2) = 1/(2.68\ \mathrm{mA/V^2}\times10\ \mathrm{k}\Omega) = 37$ mV, which is approached very slowly.

Meanwhile (1) gives $I_{D2} = I_{REF} - (V_X - V_Y)/R_2$: a little of $I_{REF}$ is diverted through $R_2$, so $V_X$ stays slightly below the bare diode value $V_{TH} + \sqrt{2I_{REF}/\beta}$ but keeps its square-root-like rise. (A real current source tied to 3 V would stop $V_X$ before it reaches $V_{DD}$.)

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

**Common mistake.** Ignoring $R_2$ and writing $V_Y = V_{DD} - R_1I_{REF}$ for all $I_{REF}$. That holds only at the crossing point; elsewhere $R_2$ carries current, and it is $R_2$ that makes the circuit conduct at $I_{REF} = 0$ and makes $V_Y$ level off at large currents.

**Common mistake.** Claiming that at $I_{REF} = 0$ no current flows and $V_X$ is undefined. With no current, $R_1$ and $R_2$ would pull X to $V_{DD}$ and turn $M_2$ on, so the self-consistent state has $I_0 > 0$.

**Common mistake.** Stating that $V_Y$ generally *increases* with $I_{REF}$, or that $V_X = V_Y$ for all $I_{REF}$. $V_Y$ rises only in the special case $g_mR_2 < 1$; normally the mirror current through $R_1$ dominates and $V_Y$ falls until $M_1$ enters triode.
