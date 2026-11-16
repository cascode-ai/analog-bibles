# Detailed solution - R032

**Approach.** $M_1$ is a grounded-source switch whose gate steps from 0 to 3 V. Before the step it is off and $C_1$ holds 1 V. After the step the drain (1 V) is far below $V_{GS} - V_{TH}$, so $M_1$ is in triode from the start and discharges $C_1$ like a (slightly nonlinear) resistor. Solve the triode discharge equation and compare it with a pure $RC$ exponential.

### Step 1 — Before the step ($t < 0$)

$V_{GS} = 0 < V_{TH}$, so **$M_1$ is off** and $V_X$ stays at 1 V.

### Step 2 — Region of operation after the step

At $t = 0^+$ the capacitor voltage is still $V_X = 1$ V, while $V_{GS} = 3$ V and (no body effect) $V_{TH} = 0.7$ V:

$$V_{GS} - V_{TH} = 3 - 0.7 = 2.3\ \mathrm{V}, \qquad V_{DS} = V_X = 1\ \mathrm{V} < 2.3\ \mathrm{V}.$$

So **$M_1$ is in triode immediately**, and stays there as $V_X$ falls; there is no constant-current saturation phase.

### Step 3 — The discharge equation

$$I_D = \beta\left[(V_{GS} - V_{TH})V_{DS} - \tfrac12V_{DS}^2\right] = \beta\left[2.3V_X - \tfrac12V_X^2\right],$$

all drawn from $C_1$:

$$C_1\frac{dV_X}{dt} = -\beta\left[2.3V_X - \tfrac12V_X^2\right].$$

For small $V_X$ the quadratic term is negligible and $M_1$ is a resistor

$$R_{on} = \frac{1}{\beta\,(V_{in} - V_{TH})} = \frac{1}{2.3\,\beta},$$

so $V_X$ decays exponentially with time constant

$$\tau = R_{on}C_1 = \frac{C_1}{2.3\,\beta} .$$

### Step 4 — Exact solution

With $a = 2.3$ V, separate the variables and use partial fractions:

$$\frac{dV_X}{V_X\,(a - V_X/2)} = -\frac{\beta}{C_1}\,dt, \qquad \frac{1}{V_X\,(a - V_X/2)} = \frac{1}{a}\left(\frac{1}{V_X} + \frac{1}{2a - V_X}\right).$$

Integrating:

$$\ln\frac{V_X}{2a - V_X} = -\frac{\beta a}{C_1}\,t + K = -\frac{t}{\tau} + K .$$

At $t = 0$, $V_X = 1$ V, so $K = \ln\dfrac{1}{4.6 - 1} = \ln\dfrac{1}{3.6}$. Hence

$$\frac{V_X}{4.6 - V_X} = \frac{e^{-t/\tau}}{3.6} \quad\Longrightarrow\quad V_X(t) = \frac{4.6\,E}{1 + E}, \qquad E = \frac{e^{-t/\tau}}{3.6} .$$

Checks:

- $t = 0$: $E = 1/3.6 = 0.278$, so $V_X = 4.6\times0.278/1.278 = 1.00$ V. ✓
- $t \gg \tau$: $E \ll 1$, so $V_X \approx 4.6E = 1.28\,e^{-t/\tau}$, a pure exponential tail to **0 V**.

**Initial slope:**

$$\left.\frac{dV_X}{dt}\right|_{0^+} = -\frac{\beta}{C_1}\left[2.3\times1 - \tfrac12\times1^2\right] = -\frac{1.8\,\beta}{C_1}\ (\mathrm{V^2}),$$

against $-V_X/\tau = -2.3\beta/C_1$ for a pure exponential through the same starting point. The $-\tfrac12V_{DS}^2$ term makes the device conduct a little *less* than $R_{on}$ would at $V_{DS} = 1$ V, so the start is about 22 % slower than the exponential, and the curve becomes exactly exponential as $V_X \to 0$.

### Step 5 — Numerical example

With $\beta = 1\ \mathrm{mA/V^2}$ and $C_1 = 1$ pF: $R_{on} = 1/(2.3\ \mathrm{mS}) = 435\ \Omega$, $\tau = 0.435$ ns, initial current $1.8$ mA, initial slope $-1.8$ V/ns.

| $t$ (ns) | $V_X$ (V), exact | $I_D$ (mA) | $1\ \mathrm{V}\times e^{-t/\tau}$ for comparison |
|---|---|---|---|
| $0^-$ | 1.00 | 0 | — |
| $0^+$ | 1.00 | 1.80 | 1.00 |
| 0.25 | 0.62 | 1.24 | 0.56 |
| 0.5 | 0.37 | 0.79 | 0.32 |
| 1.0 | 0.125 | 0.28 | 0.10 |
| 2.0 | 0.013 | 0.03 | 0.010 |

The exact curve lies slightly above the pure exponential (slower start) and then decays at the same rate.

### Result

- **$t < 0$:** $V_X = 1$ V ($M_1$ off).
- **$t = 0$:** the gate goes to 3 V. Since $V_X = 1\ \mathrm{V} < V_{GS} - V_{TH} = 2.3$ V, **$M_1$ is immediately in triode** and discharges $C_1$.
- **$t > 0$:** $C_1\,dV_X/dt = -\beta[2.3V_X - V_X^2/2]$. $V_X$ **decays from 1 V to 0**, approximately exponentially with time constant $\tau \approx C_1/(2.3\beta)$, i.e. $R_{on}C_1$ with $R_{on} = 1/[\beta(3 - 0.7)]$. Exactly, $V_X = 4.6E/(1 + E)$ with $E = e^{-t/\tau}/3.6$.
- The initial slope is $-1.8\beta/C_1$ (V/s), slightly slower than the pure exponential at the start, and the decay becomes exactly exponential as $V_X \to 0$.

**Common mistake.** Drawing a linear (constant-current) ramp at the start, as in saturation. That would require $V_{DS} > V_{GS} - V_{TH} = 2.3$ V, but the drain starts at only 1 V.

**Common mistake.** Letting $V_X$ settle at a nonzero value, or jump with the input. The gate stays at 3 V, so the channel drains $C_1$ completely, and $V_X$, a capacitor voltage, changes continuously.

**Common mistake.** Using $\beta V_{in}$ instead of $\beta(V_{in} - V_{TH})$ for the on-conductance. The deep-triode conductance is set by the overdrive, $\beta(3 - 0.7)\ \mathrm{V} = 2.3\beta$.
