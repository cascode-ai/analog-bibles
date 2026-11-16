# Detailed solution - R390

**Approach.** Model the amplifier as a voltage-controlled voltage source $A_0(V_+ - V_-)$ in series with its output resistance $R_0$. The feedback divider $R_1$–$R_2$ then both samples the output and *loads* it. We first use feedback theory with the loading included (open-loop gain and output resistance of the loaded amplifier, feedback factor, loop gain), and then confirm both results by a direct KCL analysis.

### Step 1 — Model of the circuit

Reading the figure: $V_{in}$ drives the non-inverting input (+). The output drives the series divider $R_1$ (from the output to node M) and $R_2$ (from M to ground). Node M is connected to the inverting input (−). This is a non-inverting amplifier.

**Model in words.** The amplifier is an ideal voltage source $A_0(V_{in} - V_M)$ (from an internal node to ground) in series with $R_0$ to the output node. Its inputs draw no current. $R_1$ connects the output to M and $R_2$ connects M to ground. Here $A_0$ is the open-circuit voltage gain and $R_0$ the output resistance.

<!-- diagram: diagram-01.cir -->

Since the inverting input draws no current, M is an unloaded divider tap:

$$V_M = \frac{R_2}{R_1 + R_2}V_{out} = \beta V_{out}, \qquad \beta = \frac{R_2}{R_1 + R_2},$$

where $\beta$ is the **feedback factor**.

### Step 2 — Open-loop quantities with loading

**Breaking the loop.** Because the amplifier input draws no current, the divider does not load the input side, but it *does* load the output: the series combination $R_1 + R_2$ hangs from the output to ground.

**Loaded open-loop gain.** With the loop broken (the − input grounded and the divider still connected at the output), the source $A_0V_{in}$ drives $R_0$ in series with $R_1 + R_2$:

$$A_{v,open} = A_0\,\frac{R_1 + R_2}{R_0 + R_1 + R_2}.$$

**Loaded open-loop output resistance.** Looking into the output with the source zeroed, $R_0$ appears in parallel with the divider:

$$R_{out,open} = R_0\parallel(R_1 + R_2) = \frac{R_0(R_1 + R_2)}{R_0 + R_1 + R_2}.$$

**Loop gain:**

$$\beta A_{v,open} = \frac{R_2}{R_1 + R_2}\cdot\frac{A_0(R_1 + R_2)}{R_0 + R_1 + R_2} = \frac{A_0R_2}{R_0 + R_1 + R_2}.$$

### Step 3 — Closed-loop gain and output impedance

**Gain.** With series feedback at the input (voltage subtracted) and the output voltage sensed:

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

**Gain.** KCL at the output: the current coming out of $R_0$ equals the current going into the divider:

$$\frac{A_0(V_{in} - \beta V_{out}) - V_{out}}{R_0} = \frac{V_{out}}{R_1 + R_2}.$$

Multiply by $R_0$ and collect $V_{out}$:

$$
\begin{aligned}
A_0V_{in} &= V_{out}\left[1 + \beta A_0 + \frac{R_0}{R_1 + R_2}\right]\\
\frac{V_{out}}{V_{in}} &= \frac{A_0}{1 + \dfrac{A_0R_2}{R_1 + R_2} + \dfrac{R_0}{R_1 + R_2}} = \frac{A_0(R_1 + R_2)}{R_1 + R_2 + A_0R_2 + R_0}.\ \checkmark
\end{aligned}
$$

**Output impedance.** Set $V_{in} = 0$, apply $V_x$ at the output and find the current $I_x$ it supplies. The divider takes $V_x/(R_1 + R_2)$. The amplifier source is now $-A_0\beta V_x$, so $R_0$ takes $[V_x - (-A_0\beta V_x)]/R_0$:

$$
\begin{aligned}
I_x &= \frac{V_x}{R_1 + R_2} + \frac{V_x(1 + A_0\beta)}{R_0}\\
Z_{out} &= \frac{V_x}{I_x} = (R_1 + R_2)\ \Big\|\ \frac{R_0}{1 + A_0R_2/(R_1 + R_2)} = \frac{R_0(R_1 + R_2)}{R_0 + R_1 + R_2 + A_0R_2}.\ \checkmark
\end{aligned}
$$

The second form is instructive: the output looks like the divider in parallel with $R_0$ reduced by the *unloaded* loop gain $1 + \beta A_0$.

### Step 5 — Limits and a numerical feel

- $R_0 \to 0$ (ideal output): gain $\to A_0/(1 + \beta A_0)$ and $Z_{out} \to 0$.
- $A_0 \to \infty$: gain $\to (R_1 + R_2)/R_2 = 1 + R_1/R_2$ and $Z_{out} \to 0$. The closed-loop gain can never exceed $1 + R_1/R_2$.

**Example** (illustrative): $A_0 = 100$, $R_0 = 1\ \mathrm{k}\Omega$, $R_1 = 9\ \mathrm{k}\Omega$, $R_2 = 1\ \mathrm{k}\Omega$ ($\beta = 0.1$):

$$
\begin{aligned}
\frac{V_{out}}{V_{in}} &= \frac{100\times10\ \mathrm{k}}{1\ \mathrm{k} + 10\ \mathrm{k} + 100\ \mathrm{k}} = \frac{1000}{111} = 9.01,\\
Z_{out} &= \frac{1\ \mathrm{k}\times10\ \mathrm{k}}{111\ \mathrm{k}} = 90.1\ \Omega .
\end{aligned}
$$

Ignoring the loading would give $100/11 = 9.09$ and $1\ \mathrm{k}\Omega/11 = 90.9\ \Omega$: the loading lowers the gain slightly, because part of the amplifier's output voltage is lost across $R_0$.

### Result

$$\frac{V_{out}}{V_{in}} = \frac{A_0(R_1 + R_2)}{R_0 + R_1 + R_2 + A_0R_2}, \qquad Z_{out} = \frac{R_0(R_1 + R_2)}{R_0 + R_1 + R_2 + A_0R_2} = \frac{R_0}{1 + A_0R_2/(R_1 + R_2)}\ \Big\|\ (R_1 + R_2).$$

They follow from the loaded open-loop gain $A_0(R_1 + R_2)/(R_0 + R_1 + R_2)$, the loaded open-loop output resistance $R_0\parallel(R_1 + R_2)$ and the feedback factor $\beta = R_2/(R_1 + R_2)$.

**Common mistake.** Ignoring the loading, i.e. writing $A_0/(1 + \beta A_0)$ and $R_0/(1 + \beta A_0)$. The divider draws current from the amplifier output, so the open-loop gain must include the division between $R_0$ and $R_1 + R_2$, and the open-loop output resistance must include $R_1 + R_2$ in parallel.

**Common mistake.** Taking the feedback factor as $R_1/(R_1 + R_2)$. The fraction of the output returned to the inverting input is the voltage across $R_2$: $\beta = R_2/(R_1 + R_2)$.

**Common mistake.** Claiming that this feedback raises the output impedance. The loop senses the output *voltage* and corrects it, which lowers the output impedance by the factor $1 + \beta A_{v,open}$.
