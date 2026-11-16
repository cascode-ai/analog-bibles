# Detailed solution - R548

**Approach.** Replace the amplifier by its model: an internal source $A_1(V_X - V_Y)$ in series with $R_{out}$. The amplifier must deliver the branch currents $I_1 + I_2$ through $R_{out}$, so with finite gain it needs a nonzero differential input $\epsilon = V_X - V_Y$. That $\epsilon$ acts exactly like an input offset voltage of the op amp. We find $\epsilon$, then find how much a given $\epsilon$ shifts $V_{out}$ by linearizing the bandgap core around its ideal operating point.

### Step 1 — Ideal operation ($A_1 \to \infty$)

Reading the figure: $V_{out}$ feeds two branches. Branch 1 is $R_1$ from $V_{out}$ to node X, then the diode-connected transistor $Q_1$ (emitter area $A$) to ground. Branch 2 is $R_2$ from $V_{out}$ to node Y, then $R_3$, then the diode-connected $Q_2$ (emitter area $nA$) to ground. X drives the + input and Y the − input. Call the branch currents $I_1$ and $I_2$.

With infinite gain the amplifier forces $V_X = V_Y$. Then $I_1R_1 = I_2R_2$, and because $R_1 = R_2$, $I_1 = I_2 \equiv I_0$. **KVL** from X to ground through each branch gives $V_{BE1} = V_{BE2} + I_0R_3$. With the diode law $V_{BE} = V_T\ln(I/I_S)$, and $I_{S2} = nI_{S1}$ because $Q_2$ has $n$ times the emitter area,

$$I_0R_3 = V_{BE1} - V_{BE2} = V_T\ln\frac{I_0}{I_{S1}} - V_T\ln\frac{I_0}{nI_{S1}} = V_T\ln n .$$

The output is the voltage across $Q_2$, $R_3$ and $R_2$:

$$V_{out,ideal} = V_{BE2} + I_0(R_2 + R_3) = V_{BE2} + \left(1 + \frac{R_2}{R_3}\right)V_T\ln n, \qquad I_0 = \frac{V_T\ln n}{R_3}.$$

### Step 2 — The amplifier model and the required input voltage $\epsilon$

Model the amplifier as an ideal voltage-controlled voltage source $A_1(V_X - V_Y)$ in series with $R_{out}$. The output terminal $V_{out}$ is on the far side of $R_{out}$, and it supplies both branches, so the current through $R_{out}$ is $I_1 + I_2$.

<!-- diagram: diagram-01.cir -->

**KVL** from the internal source to the output terminal:

$$V_{out} = A_1(V_X - V_Y) - (I_1 + I_2)R_{out}.$$

Define the differential input $\epsilon = V_X - V_Y$ and solve:

$$\epsilon = \frac{V_{out} + (I_1 + I_2)R_{out}}{A_1}.$$

**Why $R_{out}$ is "inside the loop".** The feedback network senses $V_{out}$ *after* the drop across $R_{out}$. If $A_1 \to \infty$, then $\epsilon \to 0$ whatever $R_{out}$ is: the loop simply raises the internal source to make up for the drop. $R_{out}$ matters only because the gain is finite. To push the extra $(I_1 + I_2)R_{out}$ through it, the internal source needs a larger input $\epsilon$.

To first order we may use the ideal values, $I_1 + I_2 \approx 2I_0 = 2V_T\ln n/R_3$:

$$\epsilon \approx \frac{1}{A_1}\left(V_{out} + \frac{2V_T\ln n}{R_3}R_{out}\right).$$

### Step 3 — Exact relations for a nonzero $\epsilon$

**KVL from X to Y through ground:**

$$\epsilon = V_X - V_Y = V_{BE1} - (V_{BE2} + I_2R_3).$$

Write the two base–emitter voltages with the diode law:

$$V_{BE1} - V_{BE2} = V_T\ln\frac{I_1}{I_{S1}} - V_T\ln\frac{I_2}{nI_{S1}} = V_T\ln n + V_T\ln\frac{I_1}{I_2}.$$

Substitute and solve for the voltage across $R_3$:

$$I_2R_3 = V_T\ln n + V_T\ln\frac{I_1}{I_2} - \epsilon. \qquad (1)$$

**The two resistors.** $V_{out} - V_X = I_1R_1$ and $V_{out} - V_Y = I_2R_2$. Subtract:

$$I_2R_2 - I_1R_1 = V_X - V_Y = \epsilon.$$

With $R_1 = R_2$:

$$I_1 - I_2 = -\frac{\epsilon}{R_2}. \qquad (2)$$

So a positive $\epsilon$ makes $I_1$ slightly smaller than $I_2$.

### Step 4 — Linearize: change of the PTAT current

$\epsilon$ is tiny (of order mV or less), so expand around the ideal point $I_1 = I_2 = I_0$. Using (2) and $\ln(1 + x) \approx x$ for $|x| \ll 1$:

$$V_T\ln\frac{I_1}{I_2} = V_T\ln\left(1 + \frac{I_1 - I_2}{I_2}\right) \approx V_T\,\frac{I_1 - I_2}{I_2} = -\frac{V_T}{I_0}\cdot\frac{\epsilon}{R_2} = -\frac{\epsilon}{g_mR_2},$$

where $g_m = I_0/V_T$ is the transconductance of each transistor, so $1/g_m = V_T/I_0$ is the small-signal resistance of a diode-connected transistor. Because $I_0 = V_T\ln n/R_3$,

$$\frac{1}{g_m} = \frac{V_T}{I_0} = \frac{R_3}{\ln n}.$$

Write $I_2 = I_0 + \Delta I_2$ in (1) and subtract the ideal relation $I_0R_3 = V_T\ln n$:

$$
\begin{aligned}
(I_0 + \Delta I_2)R_3 &= V_T\ln n - \frac{\epsilon}{g_mR_2} - \epsilon\\
\Delta I_2\,R_3 &= -\epsilon\left(1 + \frac{1}{g_mR_2}\right)\\
\Delta I_2 &= -\frac{\epsilon}{R_3}\left(1 + \frac{1}{g_mR_2}\right).
\end{aligned}
$$

The offset $\epsilon$ subtracts directly from the $\Delta V_{BE}$ that sets the PTAT current. The factor $1 + 1/(g_mR_2)$ is a small extra effect: the current imbalance (2) changes $V_{BE1} - V_{BE2}$ a little further.

### Step 5 — Change of $V_{out}$

From the second branch, exactly,

$$V_{out} = V_Y + I_2R_2 = V_{BE2} + I_2(R_3 + R_2).$$

A change $\Delta I_2$ changes $V_{BE2}$ by $\Delta I_2/g_m$ (derivative of $V_T\ln(I_2/I_{S2})$ is $V_T/I_2 = 1/g_m$) and the resistor drop by $\Delta I_2(R_2 + R_3)$:

$$\Delta V_{out} = \Delta I_2\left(\frac{1}{g_m} + R_2 + R_3\right).$$

Substitute $\Delta I_2$ from Step 4:

$$
\begin{aligned}
\Delta V_{out} &= -\frac{\epsilon}{R_3}\left(1 + \frac{1}{g_mR_2}\right)\left(\frac{1}{g_m} + R_2 + R_3\right)\\
&= -\left(1 + \frac{1}{g_mR_1}\right)\left(1 + \frac{R_2}{R_3} + \frac{1}{g_mR_3}\right)\epsilon ,
\end{aligned}
$$

using $R_1 = R_2$ in the first factor. Since the error is driven by $\epsilon$, it is the same as the error caused by an input offset voltage $\epsilon$, amplified by roughly $1 + R_2/R_3$.

### Step 6 — The error in $V_{out}$

Insert $\epsilon$ from Step 2:

$$\Delta V_{out} \approx -\left(1 + \frac{1}{g_mR_1}\right)\left(1 + \frac{R_2}{R_3} + \frac{1}{g_mR_3}\right)\frac{V_{out} + 2\left(V_T\ln n/R_3\right)R_{out}}{A_1}.$$

With $1/g_m = R_3/\ln n$, the corrections are $1/(g_mR_1) = R_3/(R_1\ln n)$ and $1/(g_mR_3) = 1/\ln n$. Both come from the diode resistances and are usually small compared with $R_2/R_3$, so

$$\Delta V_{out} \approx -\left(1 + \frac{R_2}{R_3}\right)\frac{V_{out} + 2R_{out}V_T\ln n/R_3}{A_1}.$$

It splits into two parts:

- $-(1 + R_2/R_3)\,V_{out}/A_1$: the ordinary finite-gain error, present even with $R_{out} = 0$;
- $-(1 + R_2/R_3)\,2V_T\ln n\,R_{out}/(R_3A_1)$: the extra error due to $R_{out}$.

The output is *lower* than ideal ($\Delta V_{out} < 0$).

**Equivalent view.** Define the large-signal load resistance $R_{L} = V_{out}/(I_1 + I_2)$. Then $\epsilon = V_{out}(1 + R_{out}/R_L)/A_1 = V_{out}/A_{1,eff}$ with

$$A_{1,eff} = A_1\frac{R_L}{R_L + R_{out}}.$$

$R_{out}$ and the load form a voltage divider that reduces the effective amplifier gain. A large $R_{out}$ hurts only when it is comparable to or larger than $R_L$.

### Step 7 — Numerical check

Take illustrative values $n = 8$, $R_3 = 2$ kΩ, $R_1 = R_2 = 14.5$ kΩ, $A_1 = 10^4$, $R_{out} = 50$ kΩ, $T = 300$ K ($V_T = 25.85$ mV), and $V_{out} \approx 1.07$ V.

$$
\begin{aligned}
V_T\ln n &= (25.85\ \mathrm{mV})(2.079) = 53.76\ \mathrm{mV},\\
I_0 &= \frac{53.76\ \mathrm{mV}}{2\ \mathrm{k}\Omega} = 26.88\ \mu\mathrm{A},\\
(I_1 + I_2)R_{out} &\approx (53.76\ \mu\mathrm{A})(50\ \mathrm{k}\Omega) = 2.688\ \mathrm{V},\\
\epsilon &= \frac{1.07\ \mathrm{V} + 2.688\ \mathrm{V}}{10^4} = 0.376\ \mathrm{mV},\\
\frac{1}{g_m} &= \frac{R_3}{\ln n} = \frac{2\ \mathrm{k}\Omega}{2.079} = 962\ \Omega,\\
\text{factor} &= \left(1 + \frac{962}{14500}\right)\left(1 + 7.25 + \frac{962}{2000}\right) = (1.066)(8.731) = 9.31,\\
\Delta V_{out} &= -9.31\times0.376\ \mathrm{mV} = -3.50\ \mathrm{mV}.
\end{aligned}
$$

The simple factor $1 + R_2/R_3 = 8.25$ gives $-8.25\times0.376 = -3.10$ mV. Solving the full nonlinear circuit equations numerically gives −3.48 mV, of which −2.48 mV is due to $R_{out}$ (with $R_{out} = 0$ the error is −1.00 mV). The complete first-order formula is accurate to about 1 %. The simple form is about 11 % low, mainly because $1/\ln n = 0.48$ is not negligible next to 8.25.

Note that the $R_{out}$ term dominates here: $R_{out} = 50$ kΩ is larger than $R_L = 1.07\ \mathrm{V}/53.76\ \mu\mathrm{A} = 19.9$ kΩ.

### Result

$R_{out}$ lies inside the feedback loop, so it causes no error if $A_1 \to \infty$. With finite $A_1$ the internal source must produce $V_{out} + (I_1 + I_2)R_{out}$, which requires

$$V_X - V_Y = \epsilon = \frac{V_{out} + (I_1 + I_2)R_{out}}{A_1}, \qquad I_1 \approx I_2 = \frac{V_T\ln n}{R_3}.$$

This behaves like an op-amp offset and gives

$$\Delta V_{out} \approx -\left(1 + \frac{1}{g_mR_1}\right)\left(1 + \frac{R_2}{R_3} + \frac{1}{g_mR_3}\right)\frac{V_{out} + 2(V_T\ln n/R_3)R_{out}}{A_1} \approx -\left(1 + \frac{R_2}{R_3}\right)\frac{V_{out} + 2(V_T\ln n/R_3)R_{out}}{A_1},$$

with $1/g_m = R_3/\ln n$. The part due to $R_{out}$ is $\approx -(1 + R_2/R_3)\,2V_T\ln n\,R_{out}/(R_3A_1)$. Equivalently, $R_{out}$ reduces the effective amplifier gain by $R_L/(R_L + R_{out})$.

**Common mistake.** Treating $R_{out}$ as a series drop outside the loop, i.e. $\Delta V_{out} = -(I_1 + I_2)R_{out}$, possibly multiplied by $1 + R_2/R_3$. In the example that would be −2.7 V, which is absurd. The feedback senses $V_{out}$ itself, so the loop corrects the drop, and only the residual $(I_1 + I_2)R_{out}/A_1$ remains.

**Common mistake.** Concluding that $R_{out}$ has no effect at all. That is true only for infinite gain. With finite $A_1$ the drop raises the required input $\epsilon$, and the extra error can even exceed the ordinary $V_{out}/A_1$ error.

**Common mistake.** Forgetting that $\epsilon$ is amplified by $1 + R_2/R_3$, or using only one branch current. $\epsilon$ subtracts from the $V_T\ln n$ across $R_3$, so the PTAT current changes by $-\epsilon/R_3$ and $V_{out}$ by about $-\epsilon(R_2 + R_3)/R_3$. The current through $R_{out}$ is the sum $I_1 + I_2 \approx 2V_T\ln n/R_3$, because the amplifier feeds both branches.
