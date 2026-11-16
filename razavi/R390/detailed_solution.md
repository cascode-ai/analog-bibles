# Detailed solution - R390

**Approach.** Model the amplifier as $A_0(V_+ - V_-)$ in series with $R_0$; the divider $R_1$–$R_2$ then both samples and *loads* the output. Apply feedback theory with the loading included (loaded open-loop gain and output resistance, feedback factor, loop gain), then confirm both results by direct KCL.

### Step 1 — Model of the circuit

The amplifier is an ideal source $A_0(V_{in} - V_M)$ in series with $R_0$ to the output, with inputs that draw no current; call the divider tap (the − input) M. $R_1$ runs from the output to M and $R_2$ from M to ground.

<!-- diagram: diagram-01.cir -->

Since the − input draws no current, M is an unloaded tap:

$$V_M = \frac{R_2}{R_1 + R_2}V_{out} = \beta V_{out}, \qquad \beta = \frac{R_2}{R_1 + R_2}.$$

### Step 2 — Open-loop quantities with loading

The divider does not load the input side (infinite input impedance) but hangs $R_1 + R_2$ from the output to ground. With the loop broken (− input grounded, divider still at the output), $A_0V_{in}$ drives $R_0$ in series with $R_1 + R_2$:

$$A_{v,open} = A_0\,\frac{R_1 + R_2}{R_0 + R_1 + R_2}, \qquad R_{out,open} = R_0\parallel(R_1 + R_2) = \frac{R_0(R_1 + R_2)}{R_0 + R_1 + R_2}.$$

**Loop gain:**

$$\beta A_{v,open} = \frac{R_2}{R_1 + R_2}\cdot\frac{A_0(R_1 + R_2)}{R_0 + R_1 + R_2} = \frac{A_0R_2}{R_0 + R_1 + R_2}.$$

### Step 3 — Closed-loop gain and output impedance

**Gain:**

$$
\begin{aligned}
\frac{V_{out}}{V_{in}} &= \frac{A_{v,open}}{1 + \beta A_{v,open}} = \frac{\dfrac{A_0(R_1 + R_2)}{R_0 + R_1 + R_2}}{1 + \dfrac{A_0R_2}{R_0 + R_1 + R_2}}\\
&= \frac{A_0(R_1 + R_2)}{R_0 + R_1 + R_2 + A_0R_2}.
\end{aligned}
$$

**Output impedance.** Sensing the output voltage divides the output resistance by $1 + $ loop gain:

$$
\begin{aligned}
Z_{out} &= \frac{R_{out,open}}{1 + \beta A_{v,open}} = \frac{R_0(R_1 + R_2)}{R_0 + R_1 + R_2}\cdot\frac{R_0 + R_1 + R_2}{R_0 + R_1 + R_2 + A_0R_2}\\
&= \frac{R_0(R_1 + R_2)}{R_0 + R_1 + R_2 + A_0R_2}.
\end{aligned}
$$

### Step 4 — Direct check by KCL

**Gain.** The current out of $R_0$ equals the current into the divider:

$$\frac{A_0(V_{in} - \beta V_{out}) - V_{out}}{R_0} = \frac{V_{out}}{R_1 + R_2}.$$

Multiplying by $R_0$ and collecting $V_{out}$:

$$
\begin{aligned}
A_0V_{in} &= V_{out}\left[1 + \beta A_0 + \frac{R_0}{R_1 + R_2}\right]\\
\frac{V_{out}}{V_{in}} &= \frac{A_0}{1 + \dfrac{A_0R_2}{R_1 + R_2} + \dfrac{R_0}{R_1 + R_2}} = \frac{A_0(R_1 + R_2)}{R_1 + R_2 + A_0R_2 + R_0}.\ \checkmark
\end{aligned}
$$

**Output impedance.** With $V_{in} = 0$ and $V_x$ at the output, the divider takes $V_x/(R_1 + R_2)$, and the source is $-A_0\beta V_x$, so $R_0$ takes $[V_x - (-A_0\beta V_x)]/R_0$:

$$
\begin{aligned}
I_x &= \frac{V_x}{R_1 + R_2} + \frac{V_x(1 + A_0\beta)}{R_0}\\
Z_{out} &= \frac{V_x}{I_x} = (R_1 + R_2)\ \Big\|\ \frac{R_0}{1 + A_0R_2/(R_1 + R_2)} = \frac{R_0(R_1 + R_2)}{R_0 + R_1 + R_2 + A_0R_2}.\ \checkmark
\end{aligned}
$$

The second form shows the divider in parallel with $R_0$ reduced by the *unloaded* loop gain $1 + \beta A_0$.

### Step 5 — Limits and a numerical feel

- $R_0 \to 0$: gain $\to A_0/(1 + \beta A_0)$ and $Z_{out} \to 0$.
- $A_0 \to \infty$: gain $\to (R_1 + R_2)/R_2 = 1 + R_1/R_2$ and $Z_{out} \to 0$; the gain can never exceed $1 + R_1/R_2$.

**Example** (illustrative): $A_0 = 100$, $R_0 = 1\ \mathrm{k}\Omega$, $R_1 = 9\ \mathrm{k}\Omega$, $R_2 = 1\ \mathrm{k}\Omega$ ($\beta = 0.1$):

$$
\begin{aligned}
\frac{V_{out}}{V_{in}} &= \frac{100\times10\ \mathrm{k}}{1\ \mathrm{k} + 10\ \mathrm{k} + 100\ \mathrm{k}} = \frac{1000}{111} = 9.01,\\
Z_{out} &= \frac{1\ \mathrm{k}\times10\ \mathrm{k}}{111\ \mathrm{k}} = 90.1\ \Omega .
\end{aligned}
$$

Ignoring the loading would give $100/11 = 9.09$ and $1\ \mathrm{k}\Omega/11 = 90.9\ \Omega$: part of the amplifier's output voltage is lost across $R_0$.

### Result

$$\frac{V_{out}}{V_{in}} = \frac{A_0(R_1 + R_2)}{R_0 + R_1 + R_2 + A_0R_2}, \qquad Z_{out} = \frac{R_0(R_1 + R_2)}{R_0 + R_1 + R_2 + A_0R_2} = \frac{R_0}{1 + A_0R_2/(R_1 + R_2)}\ \Big\|\ (R_1 + R_2).$$

They follow from the loaded open-loop gain $A_0(R_1 + R_2)/(R_0 + R_1 + R_2)$, the loaded open-loop output resistance $R_0\parallel(R_1 + R_2)$ and the feedback factor $\beta = R_2/(R_1 + R_2)$.

**Common mistake.** Ignoring the loading, i.e. writing $A_0/(1 + \beta A_0)$ and $R_0/(1 + \beta A_0)$. The open-loop gain must include the division between $R_0$ and $R_1 + R_2$, and the open-loop output resistance must include $R_1 + R_2$ in parallel.

**Common mistake.** Taking the feedback factor as $R_1/(R_1 + R_2)$. The fraction returned to the − input is the voltage across $R_2$.

**Common mistake.** Claiming that this feedback raises the output impedance. Sensing the output *voltage* lowers it by $1 + \beta A_{v,open}$.
