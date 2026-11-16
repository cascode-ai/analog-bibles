# Detailed solution - R386

**Approach.** The circuit is a common-source amplifier (open-loop gain $A = g_{m1}r_{O1}$) with a capacitive feedback network: $C_1$ from the input to the gate X and $C_2$ from the output back to X. We derive the closed-loop gain, identify the feedback factor $\beta = C_2/(C_1 + C_2)$, express the gain error as $\approx 1/(\beta A)$, and find the largest $C_1/C_2$ that keeps the error below 5 % with $A = 50$. The closed-loop output impedance then follows as $r_{O1}/(1 + \beta A)$.

### Step 1 — The circuit and its small-signal model

Reading the figure: the input $V_{in}$ drives node X (gate of $M_1$) through $C_1$; $C_2$ connects the output (drain of $M_1$) back to X; $M_1$ has its source grounded; the load is the ideal current source $I_1$. The gate's dc bias is set by means not shown and is assumed not to load X.

**Small-signal model in words.** Nodes: in, X and out.

- $C_1$ between in and X; $C_2$ between X and out.
- The gate draws no current, so X connects only to the two capacitors.
- $M_1$: a controlled current $g_{m1}V_X$ from out to ground, in parallel with $r_{O1}$, where $g_{m1}$ is the transconductance and $r_{O1}$ the output resistance.
- $I_1$ is ideal: an open circuit for small signals.

The open-loop gain of the CS stage is $A = g_{m1}r_{O1}$, which cannot exceed 50; we use $A = 50$ (the best case).

<!-- diagram: diagram-01.cir -->

### Step 2 — Closed-loop gain

**KCL at X.** The current arriving through $C_1$ plus the current arriving through $C_2$ is zero (no other connection):

$$
\begin{aligned}
sC_1(V_{in} - V_X) + sC_2(V_{out} - V_X) &= 0\\
V_X &= \frac{C_1V_{in} + C_2V_{out}}{C_1 + C_2}.
\end{aligned}
$$

This capacitive division holds at any frequency, because only capacitors meet at X.

**KCL at the output, low frequency.** The current through $C_2$, $sC_2(V_{out} - V_X)$, is negligible compared with $V_{out}/r_{O1}$ at low frequencies (where $1/(\omega C_2) \gg r_{O1}$). So the output node behaves as an ordinary CS stage:

$$g_{m1}V_X + \frac{V_{out}}{r_{O1}} = 0 \quad\Longrightarrow\quad V_{out} = -AV_X .$$

**Combine.** Substitute $V_X$:

$$
\begin{aligned}
V_{out} &= -A\,\frac{C_1V_{in} + C_2V_{out}}{C_1 + C_2}\\
V_{out}\,(C_1 + C_2 + AC_2) &= -AC_1V_{in}\\
\frac{V_{out}}{V_{in}} &= -\frac{AC_1}{C_1 + C_2 + AC_2}.
\end{aligned}
$$

Divide numerator and denominator by $AC_2$:

$$\frac{V_{out}}{V_{in}} = -\frac{C_1/C_2}{1 + \dfrac{1 + C_1/C_2}{A}} .$$

For $A \to \infty$ the gain is $-C_1/C_2$, set only by the capacitor ratio.

### Step 3 — Feedback factor and gain error

The fraction of the output fed back to X (with $V_{in} = 0$) is the capacitive divider

$$\beta = \frac{C_2}{C_1 + C_2}, \qquad \frac{1}{\beta} = 1 + \frac{C_1}{C_2}.$$

So the closed-loop gain is

$$\frac{V_{out}}{V_{in}} = -\frac{C_1}{C_2}\cdot\frac{1}{1 + \dfrac{1}{\beta A}} \approx -\frac{C_1}{C_2}\left(1 - \frac{1}{\beta A}\right).$$

The relative **gain error** (deviation from the ideal $-C_1/C_2$) is therefore, to first order,

$$\varepsilon \approx \frac{1}{\beta A} = \frac{1 + C_1/C_2}{A}.$$

**Physical intuition.** The loop gain $\beta A$ measures how well feedback forces X to a virtual ground. A larger closed-loop gain needs a larger $C_1/C_2$, i.e. a smaller $\beta$, which weakens the loop and increases the error. With $A$ capped at 50, only a small closed-loop gain can be precise.

### Step 4 — Maximum gain for an error below 5 %

Require $\varepsilon \le 0.05$ with $A = 50$:

$$
\begin{aligned}
\frac{1 + C_1/C_2}{50} &\le 0.05\\
1 + \frac{C_1}{C_2} &\le 2.5\\
\frac{C_1}{C_2} &\le 1.5 .
\end{aligned}
$$

At the limit, $\beta = 1/2.5 = 0.4$ and $\beta A = 20$. The actual closed-loop gain is

$$\frac{V_{out}}{V_{in}} = -\frac{1.5}{1 + 2.5/50} = -\frac{1.5}{1.05} = -1.43 .$$

So the **maximum closed-loop gain is about 1.5 (nominal $C_1/C_2$), i.e. about 1.43 actual.**

*Exact error definition.* If the error is defined exactly as $1 - |A_v|/(C_1/C_2) \le 0.05$, then

$$
\begin{aligned}
\frac{1}{1 + (1 + C_1/C_2)/50} &\ge 0.95\\
\frac{1 + C_1/C_2}{50} &\le \frac{1}{0.95} - 1 = 0.0526\\
1 + \frac{C_1}{C_2} &\le 2.63, \qquad \frac{C_1}{C_2} \le 1.63,
\end{aligned}
$$

with an actual gain of $0.95\times1.63 \approx 1.55$ and $\beta A = 50/2.63 = 19$.

### Step 5 — Closed-loop output impedance at low frequency

Set $V_{in} = 0$ (the left plate of $C_1$ at AC ground) and apply a test voltage $V_t$ at the output, drawing a current $I_t$.

**Gate voltage.** The series $C_2$–$C_1$ path from the output to ground divides $V_t$ capacitively:

$$V_X = \frac{C_2}{C_1 + C_2}V_t = \beta V_t .$$

**Output current.** At low frequency the current through the capacitive branch is negligible, so the test current flows into $r_{O1}$ and into $M_1$'s controlled source:

$$I_t = \frac{V_t}{r_{O1}} + g_{m1}V_X = V_t\left(\frac{1}{r_{O1}} + \beta g_{m1}\right).$$

**Impedance:**

$$Z_{out} = \frac{V_t}{I_t} = \frac{r_{O1}}{1 + \beta g_{m1}r_{O1}} = \frac{r_{O1}}{1 + \beta A}.$$

The shunt feedback at the output *lowers* the output impedance by the factor $1 + \beta A$. With $\beta A = 20$:

$$Z_{out} = \frac{r_{O1}}{21}, \qquad\text{and since } r_{O1} = \frac{50}{g_{m1}}:\quad Z_{out} = \frac{50/21}{g_{m1}} \approx \frac{2.4}{g_{m1}}.$$

(With the exact error definition, $\beta A = 19$ and $Z_{out} = r_{O1}/20 = 2.5/g_{m1}$.)

### Result

$$\frac{V_{out}}{V_{in}} = -\frac{C_1/C_2}{1 + (1 + C_1/C_2)/(g_{m1}r_{O1})}, \qquad \beta = \frac{C_2}{C_1 + C_2}, \qquad \text{error} \approx \frac{1}{\beta g_{m1}r_{O1}}.$$

With $g_{m1}r_{O1} = 50$ and an error below 5 %: $1 + C_1/C_2 \le 2.5$, so $C_1/C_2 \le 1.5$ and the **maximum closed-loop gain is ≈ 1.5 nominal (≈ −1.43 actual)**. (With the exact error definition: $C_1/C_2 \approx 1.63$, gain ≈ −1.55.)

Low-frequency output impedance: $Z_{out} = \dfrac{r_{O1}}{1 + g_{m1}r_{O1}C_2/(C_1 + C_2)} = \dfrac{r_{O1}}{21} \approx \dfrac{2.4}{g_{m1}}$ (≈ $r_{O1}/20 = 2.5/g_{m1}$ with the exact convention).

**Common mistake.** Taking the feedback factor as $C_1/(C_1 + C_2)$. The fraction of the *output* fed back to X is set by $C_2$ (from the output) over the total capacitance at X: $\beta = C_2/(C_1 + C_2)$. Swapping them gives a wrong ratio.

**Common mistake.** Claiming that a gain near $g_{m1}r_{O1}$ (e.g. 47.5) is achievable. The closed-loop gain is set by $C_1/C_2$, and the precision requirement limits the loop gain $\beta A$, not the open-loop gain itself. With $A = 50$ and $\beta A \ge 20$, the closed-loop gain cannot exceed about 1.5.

**Common mistake.** Giving $Z_{out} = r_{O1}$, i.e. ignoring the feedback, or thinking feedback raises it. Sensing the output voltage (shunt feedback at the output) reduces the output impedance by $1 + \beta A$.
