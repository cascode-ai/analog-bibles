# Detailed solution - R386

**Approach.** The circuit is a common-source amplifier (open-loop gain $A = g_{m1}r_{O1}$) with capacitive feedback: $C_1$ from the input to the gate and $C_2$ from the output back to the gate. Derive the closed-loop gain, identify $\beta = C_2/(C_1 + C_2)$, write the gain error as $\approx 1/(\beta A)$, find the largest $C_1/C_2$ that keeps it below 5 % with $A = 50$, and get the output impedance $r_{O1}/(1 + \beta A)$.

### Step 1 — Small-signal model

Call the gate node X; it connects only to $C_1$ and $C_2$ (the gate draws no current, and the bias network is assumed not to load it). $M_1$ is $g_{m1}V_X$ from out to ground in parallel with $r_{O1}$, and $I_1$ is an open circuit. We use the best case $A = g_{m1}r_{O1} = 50$.

<!-- diagram: diagram-01.cir -->

### Step 2 — Closed-loop gain

**KCL at X:**

$$
\begin{aligned}
sC_1(V_{in} - V_X) + sC_2(V_{out} - V_X) &= 0\\
V_X &= \frac{C_1V_{in} + C_2V_{out}}{C_1 + C_2},
\end{aligned}
$$

a capacitive division valid at any frequency, since only capacitors meet at X.

**Output node, low frequency.** The $C_2$ current is negligible next to $V_{out}/r_{O1}$ when $1/(\omega C_2) \gg r_{O1}$, so

$$g_{m1}V_X + \frac{V_{out}}{r_{O1}} = 0 \quad\Longrightarrow\quad V_{out} = -AV_X .$$

**Combining:**

$$
\begin{aligned}
V_{out} &= -A\,\frac{C_1V_{in} + C_2V_{out}}{C_1 + C_2}\\
V_{out}\,(C_1 + C_2 + AC_2) &= -AC_1V_{in}\\
\frac{V_{out}}{V_{in}} &= -\frac{AC_1}{C_1 + C_2 + AC_2} = -\frac{C_1/C_2}{1 + \dfrac{1 + C_1/C_2}{A}} .
\end{aligned}
$$

For $A \to \infty$ the gain is $-C_1/C_2$.

### Step 3 — Feedback factor and gain error

With $V_{in} = 0$, the fraction of the output fed back to X is

$$\beta = \frac{C_2}{C_1 + C_2}, \qquad \frac{1}{\beta} = 1 + \frac{C_1}{C_2},$$

so

$$\frac{V_{out}}{V_{in}} = -\frac{C_1}{C_2}\cdot\frac{1}{1 + \dfrac{1}{\beta A}} \approx -\frac{C_1}{C_2}\left(1 - \frac{1}{\beta A}\right), \qquad \varepsilon \approx \frac{1}{\beta A} = \frac{1 + C_1/C_2}{A}.$$

A larger closed-loop gain needs a larger $C_1/C_2$, i.e. a smaller $\beta$, which weakens the loop; with $A$ capped at 50, only a small gain can be precise.

### Step 4 — Maximum gain for an error below 5 %

With $\varepsilon \le 0.05$ and $A = 50$:

$$
\begin{aligned}
\frac{1 + C_1/C_2}{50} &\le 0.05\\
1 + \frac{C_1}{C_2} &\le 2.5\\
\frac{C_1}{C_2} &\le 1.5 .
\end{aligned}
$$

At the limit, $\beta = 1/2.5 = 0.4$ and $\beta A = 20$, and the actual gain is

$$\frac{V_{out}}{V_{in}} = -\frac{1.5}{1 + 2.5/50} = -\frac{1.5}{1.05} = -1.43 .$$

So the **maximum closed-loop gain is about 1.5 (nominal $C_1/C_2$), i.e. about 1.43 actual.**

*Exact error definition.* With $1 - |A_v|/(C_1/C_2) \le 0.05$:

$$
\begin{aligned}
\frac{1}{1 + (1 + C_1/C_2)/50} &\ge 0.95\\
\frac{1 + C_1/C_2}{50} &\le \frac{1}{0.95} - 1 = 0.0526\\
1 + \frac{C_1}{C_2} &\le 2.63, \qquad \frac{C_1}{C_2} \le 1.63,
\end{aligned}
$$

with an actual gain of $0.95\times1.63 \approx 1.55$ and $\beta A = 50/2.63 = 19$.

### Step 5 — Closed-loop output impedance at low frequency

With $V_{in} = 0$ and a test voltage $V_t$ at the output, the series $C_2$–$C_1$ path divides $V_t$:

$$V_X = \frac{C_2}{C_1 + C_2}V_t = \beta V_t .$$

At low frequency the capacitive branch carries negligible current, so

$$I_t = \frac{V_t}{r_{O1}} + g_{m1}V_X = V_t\left(\frac{1}{r_{O1}} + \beta g_{m1}\right),$$

$$Z_{out} = \frac{V_t}{I_t} = \frac{r_{O1}}{1 + \beta g_{m1}r_{O1}} = \frac{r_{O1}}{1 + \beta A}.$$

With $\beta A = 20$:

$$Z_{out} = \frac{r_{O1}}{21}, \qquad\text{and since } r_{O1} = \frac{50}{g_{m1}}:\quad Z_{out} = \frac{50/21}{g_{m1}} \approx \frac{2.4}{g_{m1}}.$$

(With the exact error definition, $\beta A = 19$ and $Z_{out} = r_{O1}/20 = 2.5/g_{m1}$.)

### Result

$$\frac{V_{out}}{V_{in}} = -\frac{C_1/C_2}{1 + (1 + C_1/C_2)/(g_{m1}r_{O1})}, \qquad \beta = \frac{C_2}{C_1 + C_2}, \qquad \text{error} \approx \frac{1}{\beta g_{m1}r_{O1}}.$$

With $g_{m1}r_{O1} = 50$ and an error below 5 %: $1 + C_1/C_2 \le 2.5$, so $C_1/C_2 \le 1.5$ and the **maximum closed-loop gain is ≈ 1.5 nominal (≈ −1.43 actual)**. (With the exact error definition: $C_1/C_2 \approx 1.63$, gain ≈ −1.55.)

Low-frequency output impedance: $Z_{out} = \dfrac{r_{O1}}{1 + g_{m1}r_{O1}C_2/(C_1 + C_2)} = \dfrac{r_{O1}}{21} \approx \dfrac{2.4}{g_{m1}}$ (≈ $r_{O1}/20 = 2.5/g_{m1}$ with the exact convention).

**Common mistake.** Taking the feedback factor as $C_1/(C_1 + C_2)$. The fraction of the *output* fed back to X is $\beta = C_2/(C_1 + C_2)$.

**Common mistake.** Claiming that a gain near $g_{m1}r_{O1}$ (e.g. 47.5) is achievable. The closed-loop gain is $C_1/C_2$, and precision requires $\beta A \ge 20$, which with $A = 50$ caps it at about 1.5.

**Common mistake.** Giving $Z_{out} = r_{O1}$, or thinking feedback raises it. Sensing the output voltage reduces the output impedance by $1 + \beta A$.
