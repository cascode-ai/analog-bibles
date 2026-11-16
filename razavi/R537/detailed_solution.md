# Detailed solution - R537

**Approach.** Write the two branch voltages $V_X$ and $V_Y$ as sums of emitter–base voltages (and the drop on $R_1$), let the op amp force $V_X = V_Y$, and solve for the voltage across $R_1$. It depends on the logarithm of a ratio of the four branch currents. Channel-length modulation makes $M_1$ and $M_2$ carry different currents because their drains sit at different voltages ($V_X$ versus $V_{out}$). That ratio enters the PTAT voltage across $R_1$, and the output amplifies it by $1 + R_2/R_1$.

### Step 1 — Reading the circuit

- $M_1$–$M_4$ are identical PMOS devices with sources at $V_{DD}$ and a common gate driven by $A_1$.
- **Left stack (node X).** $M_1$ feeds X, the emitter of $Q_2$ (area $A$). The base of $Q_2$ is driven by the emitter of $Q_1$ (area $A$), which is fed by $M_3$. So $V_X = |V_{EB2}| + |V_{EB1}|$, with $Q_2$ carrying $I_{D1}$ and $Q_1$ carrying $I_{D3}$ (base currents neglected).
- **Right stack (node Y, $V_{out}$).** $M_2$ feeds $V_{out}$. From there $R_2$ goes to Y and $R_1$ goes from Y to the emitter of $Q_4$ (area $nA$). The base of $Q_4$ is driven by the emitter of $Q_3$ (area $nA$), which is fed by $M_4$. So $V_Y = |V_{EB4}| + |V_{EB3}| + I_{D2}R_1$, with $Q_4$ carrying $I_{D2}$ and $Q_3$ carrying $I_{D4}$.
- The op amp has high gain and no offset, so it forces $V_X = V_Y$. Also $V_{out} = V_Y + I_{D2}R_2$.

**Bipolar law.** $|V_{EB}| = V_T\ln(I_C/I_S)$, where $V_T = kT/q$ and the saturation current $I_S$ is proportional to the emitter area: $I_S$ for $Q_1$, $Q_2$ and $nI_S$ for $Q_3$, $Q_4$.

### Step 2 — Voltage across $R_1$ in general

Set $V_X = V_Y$:

$$V_T\ln\frac{I_{D1}}{I_S} + V_T\ln\frac{I_{D3}}{I_S} = V_T\ln\frac{I_{D2}}{nI_S} + V_T\ln\frac{I_{D4}}{nI_S} + I_{D2}R_1 .$$

Collect the logarithms:

$$I_{D2}R_1 = V_T\ln\frac{I_{D1}I_{D3}}{I_S^2} - V_T\ln\frac{I_{D2}I_{D4}}{n^2I_S^2} = V_T\ln\left(n^2\,\frac{I_{D1}I_{D3}}{I_{D2}I_{D4}}\right).$$

**Output voltage.** $V_{out} = V_Y + I_{D2}R_2$, and $V_Y = |V_{EB3}| + |V_{EB4}| + I_{D2}R_1$, so

$$V_{out} = |V_{EB3}| + |V_{EB4}| + \left(1 + \frac{R_2}{R_1}\right)I_{D2}R_1 .$$

**Ideal case** (all four currents equal):

$$I_{D2}R_1 = 2V_T\ln n,\qquad V_{out,ideal} = |V_{EB3}| + |V_{EB4}| + 2\left(1 + \frac{R_2}{R_1}\right)V_T\ln n .$$

This is the usual stacked bandgap: two $V_{EB}$'s plus an amplified PTAT term.

### Step 3 — Effect of channel-length modulation in $M_1$ and $M_2$

All four PMOS devices have the same $V_{SG}$ (common gate and common source). Let $I_0$ be the current they would carry with zero channel-length modulation. Then:

- $M_3$, $M_4$ (no CLM): $I_{D3} = I_{D4} = I_0$.
- $M_1$: its drain is at X, so $|V_{DS1}| = V_{DD} - V_X$ and $I_{D1} = I_0\left[1 + \lambda(V_{DD} - V_X)\right]$.
- $M_2$: its drain is at $V_{out}$, so $|V_{DS2}| = V_{DD} - V_{out}$ and $I_{D2} = I_0\left[1 + \lambda(V_{DD} - V_{out})\right]$.

$V_{out}$ is above $V_X$ by the drop on $R_2$, so $M_2$ has the smaller $|V_{DS}|$ and the smaller current:

$$\frac{I_{D1}}{I_{D2}} = \frac{1 + \lambda(V_{DD} - V_X)}{1 + \lambda(V_{DD} - V_{out})} > 1 .$$

The op amp equalizes the voltages at X and Y, but it cannot equalize the drain voltages of $M_1$ and $M_2$.

### Step 4 — The PTAT voltage and the output error

Substitute $I_{D3} = I_{D4}$ into the result of Step 2:

$$I_{D2}R_1 = V_T\ln\left(n^2\frac{I_{D1}}{I_{D2}}\right) = 2V_T\ln n + V_T\ln\frac{I_{D1}}{I_{D2}} .$$

The PTAT voltage across $R_1$ acquires an error $V_T\ln(I_{D1}/I_{D2})$, and the output multiplies it by $1 + R_2/R_1$. To first order (ignoring the small, unamplified changes in $|V_{EB3}| + |V_{EB4}|$ caused by the slightly different current levels):

$$\boxed{\Delta V_{out} \approx \left(1 + \frac{R_2}{R_1}\right)V_T\ln\frac{1 + \lambda(V_{DD} - V_X)}{1 + \lambda(V_{DD} - V_{out})}}$$

**Linearized form.** Write the ratio as $1 + \dfrac{\lambda(V_{out} - V_X)}{1 + \lambda(V_{DD} - V_{out})}$ and use $\ln(1 + \epsilon) \approx \epsilon$:

$$\Delta V_{out} \approx \left(1 + \frac{R_2}{R_1}\right)V_T\,\frac{\lambda\,(V_{out} - V_X)}{1 + \lambda(V_{DD} - V_{out})}.$$

The error is **positive** ($V_{out}$ rises) because $I_{D1} > I_{D2}$. It is large because the drain voltages of $M_1$ and $M_2$ differ by $V_{out} - V_X = I_{D2}R_2$, which is of order 1 V, and the result is then amplified by $1 + R_2/R_1$.

(Writing instead $V_{out} = V_X + (R_2/R_1)\,I_{D2}R_1$ with $V_X$ treated as fixed gives the factor $R_2/R_1$ in place of $1 + R_2/R_1$. The two forms differ by an unamplified term of the same order as the neglected $V_{EB}$ shifts.)

### Step 5 — Numerical example

Take $n = 8$ and choose $R_2/R_1$ for zero temperature coefficient. Each of the two $V_{EB}$'s drifts by about $-1.5$ mV/K and $V_T/T \approx 0.087$ mV/K, which requires $(1 + R_2/R_1)\ln n \approx 17.2$:

$$1 + \frac{R_2}{R_1} = \frac{17.2}{\ln8} = \frac{17.2}{2.079} = 8.27 .$$

Let $|V_{EB}| \approx 0.78$ V for the unit-area devices. Then

$$
\begin{aligned}
V_X &= 2\times0.78 = 1.56\ \mathrm{V},\\
|V_{EB3}| = |V_{EB4}| &= 0.78 - V_T\ln8 = 0.78 - 0.026\times2.079 = 0.726\ \mathrm{V},\\
V_{out} &= 2\times0.726 + 8.27\times2\times0.026\times2.079 = 1.452 + 0.894 = 2.35\ \mathrm{V}.
\end{aligned}
$$

With $\lambda = 0.2\ \mathrm{V^{-1}}$ and $V_{DD} = 3$ V:

$$
\begin{aligned}
\frac{I_{D1}}{I_{D2}} &= \frac{1 + 0.2(3 - 1.56)}{1 + 0.2(3 - 2.35)} = \frac{1.288}{1.130} = 1.139,\\
\Delta V_{out} &\approx 8.27\times26\ \mathrm{mV}\times\ln1.139 = 8.27\times26\ \mathrm{mV}\times0.130 = 28\ \mathrm{mV}.
\end{aligned}
$$

A full numerical solution of the circuit equations, including the unamplified $V_{EB}$ shifts, gives about 27.6 mV. The first-order formula is accurate. An error of about 28 mV is more than 1 % of the 2.35-V output, which is why channel-length modulation in $M_1$/$M_2$ is a serious concern and long-channel or cascoded current sources are preferred there.

### Result

$M_1$ and $M_2$ see different drain–source voltages, $V_{DD} - V_X$ and $V_{DD} - V_{out}$, so with channel-length modulation $I_{D1}/I_{D2} = [1 + \lambda(V_{DD} - V_X)]/[1 + \lambda(V_{DD} - V_{out})] > 1$, while $I_{D3} = I_{D4}$. The PTAT voltage across $R_1$ becomes $2V_T\ln n + V_T\ln(I_{D1}/I_{D2})$, and the output error is

$$\Delta V_{out} \approx \left(1 + \frac{R_2}{R_1}\right)V_T\ln\frac{1 + \lambda(V_{DD} - V_X)}{1 + \lambda(V_{DD} - V_{out})} \approx \left(1 + \frac{R_2}{R_1}\right)V_T\,\frac{\lambda(V_{out} - V_X)}{1 + \lambda(V_{DD} - V_{out})},$$

which is positive ($V_{out}$ rises). Example: $n = 8$, $1 + R_2/R_1 \approx 8.3$, $V_X \approx 1.56$ V, $V_{out} \approx 2.35$ V, $\lambda = 0.2\ \mathrm{V^{-1}}$ gives an error of about 28 mV.

**Common mistake.** Claiming there is no error because the op amp forces $V_X = V_Y$. The op amp equalizes X and Y, but the drains of $M_1$ and $M_2$ are at X and at $V_{out}$, which differ by the drop across $R_2$. With channel-length modulation their currents therefore differ.

**Common mistake.** Leaving the error unamplified, i.e. reporting $V_T\ln(I_{D1}/I_{D2})$ (only about 3.4 mV here) as the output error. That error appears in the PTAT voltage across $R_1$, which the output scales by $1 + R_2/R_1$.

**Common mistake.** Adding a term like $\lambda V_{out}$ directly to the output, independent of the current ratio. The output is defined by the bipolar and resistor voltages; the PMOS devices affect it only through the *ratio* of their currents, which enters logarithmically.
