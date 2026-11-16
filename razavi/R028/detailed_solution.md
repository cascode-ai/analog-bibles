# Detailed solution - R028

**Approach.** The current source $I_1$ takes charge from node X and deposits it on $C_2$, the gate capacitor of $M_1$. So the gate voltage rises linearly from 0, and $M_1$ is off until it reaches $V_{TH}$. Before that, only $I_1$ discharges $C_1$ (a linear ramp). Afterwards $M_1$ adds a growing drain current, $C_1$ discharges faster, $M_1$ enters triode, and the current peaks and then collapses as $V_X$ approaches zero. Write KCL at X and at the gate, and follow these phases.

### Step 1 — Reading the circuit and the basic equations

From the figure:

- node X is the top plate of $C_1$ (initially 3 V); $I_X$ is the total current leaving node X toward $M_1$ and $I_1$;
- the drain of $M_1$ is node X; its source and bulk are grounded ($V_{TH} = 0.7$ V, no body effect);
- the current source $I_1$ flows from node X into the gate node G;
- $C_2$ connects the gate to ground (initially 0 V).

**KCL at X:**

$$I_X = I_1 + I_{D1} = -C_1\frac{dV_X}{dt},$$

where $I_{D1}$ is the drain current of $M_1$.

**KCL at G** (the gate draws no current, so all of $I_1$ charges $C_2$):

$$C_2\frac{dV_G}{dt} = I_1 \quad\Longrightarrow\quad V_G(t) = \frac{I_1}{C_2}\,t .$$

The gate voltage is a **linear ramp** from 0, independent of everything else (with an ideal current source).

Symbols: $\beta = \mu_nC_{ox}W/L$.

### Step 2 — Phase 1: $M_1$ off, linear ramp of $V_X$

At $t = 0$, $V_G = 0 < V_{TH}$, so $M_1$ is off and $I_{D1} = 0$. Then

$$I_X = I_1, \qquad V_X(t) = 3\ \mathrm{V} - \frac{I_1}{C_1}\,t .$$

This lasts until the gate reaches the threshold:

$$\frac{I_1}{C_2}\,t_1 = V_{TH} \quad\Longrightarrow\quad t_1 = \frac{V_{TH}C_2}{I_1} .$$

At that moment

$$V_X(t_1) = 3 - \frac{I_1}{C_1}\cdot\frac{V_{TH}C_2}{I_1} = 3 - V_{TH}\frac{C_2}{C_1} .$$

We assume $V_X(t_1) > 0$, i.e. $3C_1 > V_{TH}C_2$ (the other case is treated in Step 5).

### Step 3 — Phase 2: $M_1$ turns on, saturation, accelerating discharge

For $t > t_1$ the overdrive grows linearly in time:

$$V_G - V_{TH} = \frac{I_1}{C_2}\,(t - t_1).$$

At first $V_X$ is still well above $V_G - V_{TH}$, so $M_1$ is saturated:

$$I_{D1} = \tfrac12\beta\,(V_G - V_{TH})^2 = \tfrac12\beta\left(\frac{I_1}{C_2}\right)^2(t - t_1)^2 .$$

- $I_{D1}$ starts from **zero** at $t_1$ and grows **quadratically** in time. There is no jump: $I_X = I_1 + I_{D1}$ rises smoothly above $I_1$.
- $V_X$ falls **faster than linearly** (its slope $-I_X/C_1$ steepens).

### Step 4 — Phase 3: triode, peak of $I_X$, and the end

Saturation requires $V_X \ge V_G - V_{TH}$. $V_X$ is falling and $V_G - V_{TH}$ is rising, so they soon cross and **$M_1$ enters triode**:

$$I_{D1} = \beta\left[(V_G - V_{TH})V_X - \tfrac12V_X^2\right].$$

Now the factor $V_X$ shrinks quickly, and so does the drain current: **$I_X$ peaks** around the saturation/triode transition and then **falls**. $C_1$ is discharged toward 0 V.

**What happens at $V_X = 0$.** There $I_{D1} = 0$, but the ideal current source still pulls $I_1$ out of node X, so $I_X = I_1 > 0$ and $V_X$ **overshoots slightly below zero**. With the drain below the grounded source, X becomes the source of $M_1$ and the device conducts in reverse, supplying current *into* node X from ground. A quasi-equilibrium is reached when this reverse current balances $I_1$. In deep triode the device is a resistor $R_{on} \approx 1/[\beta(V_G - V_{TH})]$, so

$$V_X \approx -I_1R_{on} = -\frac{I_1}{\beta\,(V_G - V_{TH})} .$$

Since $V_G = I_1t/C_2$ keeps rising, $R_{on}$ keeps falling and $V_X$ creeps back toward $0^-$. Correspondingly $I_X = -C_1\,dV_X/dt$ is a small **negative** tail that tends to $0^-$.

Two remarks:

- With an ideal $I_1$ there is no true DC steady state: the gate keeps charging. The size of the negative dip depends on $I_1/\beta$. For a weak device it may be limited by the drain–bulk junction (about $-0.6$ V).
- A real floating current source, which needs some voltage across it, would stop conducting once $V_X$ fell to about $V_G$. The gate would then stay put, and $M_1$ alone would finish discharging $C_1$ to 0 V, without the dip. The end state is the same: $V_X \approx 0$, $I_X \to 0$.

### Step 5 — The other ordering ($3C_1 < V_{TH}C_2$)

If $C_2$ is large, $V_X$ reaches 0 at $t = 3C_1/I_1$, *before* the gate reaches $V_{TH}$. Then $I_X$ stays equal to $I_1$ with no peak above it. Once $V_X$ goes below zero, the fall is stopped by $M_1$ conducting in reverse (as soon as $V_G - V_X$ exceeds $V_{TH}$) or by the drain–bulk junction. The end state is the same.

### Step 6 — Numerical example

Take $C_1 = C_2 = 1$ pF, $I_1 = 100\ \mu$A, $\beta = 1\ \mathrm{mA/V^2}$.

$$
\begin{aligned}
\frac{I_1}{C_1} &= \frac{100\ \mu\mathrm{A}}{1\ \mathrm{pF}} = 0.1\ \mathrm{V/ns} \quad(\text{same for } V_G),\\
t_1 &= \frac{(0.7\ \mathrm{V})(1\ \mathrm{pF})}{100\ \mu\mathrm{A}} = 7\ \mathrm{ns},\\
V_X(t_1) &= 3 - 0.7 = 2.3\ \mathrm{V}.
\end{aligned}
$$

After $t_1$: $I_{D1} = \tfrac12(1\ \mathrm{mA/V^2})(0.1\ \mathrm{V/ns})^2(t - t_1)^2 = 0.005\ \mathrm{mA}\times[(t - t_1)/\mathrm{ns}]^2$. For example, at $t = 12$ ns, $V_G = 1.2$ V and $I_{D1} = 0.005\times25 = 0.125$ mA, so $I_X = 0.225$ mA.

Integrating the equations step by step gives:

| $t$ (ns) | $V_G$ (V) | $V_X$ (V) | $I_X$ (mA) | $M_1$ |
|---|---|---|---|---|
| 0 | 0 | 3.00 | 0.100 | off |
| 7 | 0.70 | 2.30 | 0.100 | turning on |
| 10 | 1.00 | 1.96 | 0.145 | sat. |
| 12 | 1.20 | 1.59 | 0.225 | sat. |
| 14 | 1.40 | 1.03 | 0.345 | sat. (triode from ≈ 14.6 ns) |
| 15 | 1.50 | 0.65 | 0.41 (peak) | triode |
| 16 | 1.60 | 0.27 | 0.31 | triode |
| 17 | 1.70 | 0.05 | 0.15 | triode |
| 20 | 2.00 | −0.076 (minimum) | ≈ 0 | reverse |
| 100 | 10.0 | −0.011 | ≈ −0.0001 | reverse |

With a much weaker device ($\beta = 50\ \mu\mathrm{A/V^2}$), $I_X$ peaks at only about 0.14 mA and the dip below zero reaches about $-0.55$ V, close to the junction limit.

### Result

- $I_X$ is the total current leaving node X: $I_X = I_1 + I_{D1} = -C_1\,dV_X/dt$, while $I_1$ charges the gate: $V_G = I_1t/C_2$.
- **$t < t_1 = V_{TH}C_2/I_1$:** $M_1$ off, $I_X = I_1$, $V_X = 3 - I_1t/C_1$ (a linear ramp; this sequence assumes $3C_1 > V_{TH}C_2$, so $V_X$ is still positive at $t_1$).
- **$t > t_1$:** $I_{D1} = \tfrac12\beta(V_G - 0.7)^2$ grows quadratically from zero (no jump) while $M_1$ is saturated ($V_X > V_G - V_{TH}$), and $V_X$ falls faster than linearly. Once $V_X < V_G - V_{TH}$, $M_1$ is in triode, $I_X$ **peaks** and then falls.
- **End:** $C_1$ is discharged to about 0 V. $V_X$ dips slightly below 0 (reverse conduction of $M_1$ balancing $I_1$, $V_X \approx -I_1/[\beta(V_G - V_{TH})]$) and creeps back toward $0^-$, while $I_X$ crosses zero and decays to zero from below. With an ideal $I_1$ there is no true DC steady state, since the gate keeps charging.
- If $3C_1 < V_{TH}C_2$, $V_X$ reaches 0 before $M_1$ turns on, $I_X$ stays at $I_1$ without a peak, and the end state is the same.

**Common mistake.** Assuming $M_1$ is on from $t = 0$. Its gate starts at 0 V (with $C_2$ discharged) and must first be charged to $V_{TH}$ by $I_1$; until then only $I_1$ discharges $C_1$.

**Common mistake.** Drawing a jump in $I_X$ when $M_1$ turns on. The gate voltage rises continuously, so the drain current starts from zero and grows as $(t - t_1)^2$.

**Common mistake.** Letting $V_X$ settle at a high value, or fall without limit. Once $M_1$ is on with a rising gate voltage, it pulls node X to ground; it even conducts in reverse to stop $V_X$ from going much below zero.
