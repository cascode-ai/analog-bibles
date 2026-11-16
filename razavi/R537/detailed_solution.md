# Detailed solution - R537

**Approach.** Write $V_X$ and $V_Y$ as sums of emitter–base voltages (plus the drop on $R_1$), let the op amp force $V_X = V_Y$, and solve for the voltage across $R_1$: it depends on the logarithm of a ratio of the four branch currents. Channel-length modulation makes $M_1$ and $M_2$ carry different currents because their drains sit at $V_X$ and $V_{out}$; that ratio enters the PTAT voltage across $R_1$, which the output amplifies by $1 + R_2/R_1$.

### Step 1 — Branch voltages

Neglecting base currents, $Q_2$ carries $I_{D1}$, $Q_1$ carries $I_{D3}$, $Q_4$ carries $I_{D2}$ and $Q_3$ carries $I_{D4}$, so

$$V_X = |V_{EB2}| + |V_{EB1}|,\qquad V_Y = |V_{EB4}| + |V_{EB3}| + I_{D2}R_1,\qquad V_{out} = V_Y + I_{D2}R_2 ,$$

and the op amp forces $V_X = V_Y$. With $|V_{EB}| = V_T\ln(I_C/I_S)$, the saturation current is $I_S$ for $Q_1$, $Q_2$ and $nI_S$ for $Q_3$, $Q_4$.

### Step 2 — Voltage across $R_1$ in general

Setting $V_X = V_Y$:

$$V_T\ln\frac{I_{D1}}{I_S} + V_T\ln\frac{I_{D3}}{I_S} = V_T\ln\frac{I_{D2}}{nI_S} + V_T\ln\frac{I_{D4}}{nI_S} + I_{D2}R_1 ,$$

$$I_{D2}R_1 = V_T\ln\frac{I_{D1}I_{D3}}{I_S^2} - V_T\ln\frac{I_{D2}I_{D4}}{n^2I_S^2} = V_T\ln\left(n^2\,\frac{I_{D1}I_{D3}}{I_{D2}I_{D4}}\right).$$

The output is

$$V_{out} = |V_{EB3}| + |V_{EB4}| + \left(1 + \frac{R_2}{R_1}\right)I_{D2}R_1 .$$

With all four currents equal (ideal case), the usual stacked bandgap results:

$$I_{D2}R_1 = 2V_T\ln n,\qquad V_{out,ideal} = |V_{EB3}| + |V_{EB4}| + 2\left(1 + \frac{R_2}{R_1}\right)V_T\ln n .$$

### Step 3 — Effect of channel-length modulation in $M_1$ and $M_2$

All four PMOS devices have the same $V_{SG}$. With $I_0$ the current without channel-length modulation:
- $M_3$, $M_4$: $I_{D3} = I_{D4} = I_0$.
- $M_1$ (drain at X): $|V_{DS1}| = V_{DD} - V_X$, $I_{D1} = I_0\left[1 + \lambda(V_{DD} - V_X)\right]$.
- $M_2$ (drain at $V_{out}$): $|V_{DS2}| = V_{DD} - V_{out}$, $I_{D2} = I_0\left[1 + \lambda(V_{DD} - V_{out})\right]$.

$V_{out}$ is above $V_X$ by the drop on $R_2$, so

$$\frac{I_{D1}}{I_{D2}} = \frac{1 + \lambda(V_{DD} - V_X)}{1 + \lambda(V_{DD} - V_{out})} > 1 .$$

The op amp equalizes X and Y, but not the drain voltages of $M_1$ and $M_2$.

### Step 4 — The PTAT voltage and the output error

With $I_{D3} = I_{D4}$, Step 2 gives

$$I_{D2}R_1 = V_T\ln\left(n^2\frac{I_{D1}}{I_{D2}}\right) = 2V_T\ln n + V_T\ln\frac{I_{D1}}{I_{D2}} .$$

The PTAT voltage acquires an error $V_T\ln(I_{D1}/I_{D2})$, which the output multiplies by $1 + R_2/R_1$. To first order (ignoring the small, unamplified changes in $|V_{EB3}| + |V_{EB4}|$ due to the slightly different current levels):

$$\boxed{\Delta V_{out} \approx \left(1 + \frac{R_2}{R_1}\right)V_T\ln\frac{1 + \lambda(V_{DD} - V_X)}{1 + \lambda(V_{DD} - V_{out})}}$$

Writing the ratio as $1 + \dfrac{\lambda(V_{out} - V_X)}{1 + \lambda(V_{DD} - V_{out})}$ and using $\ln(1 + \epsilon) \approx \epsilon$:

$$\Delta V_{out} \approx \left(1 + \frac{R_2}{R_1}\right)V_T\,\frac{\lambda\,(V_{out} - V_X)}{1 + \lambda(V_{DD} - V_{out})}.$$

The error is **positive** ($V_{out}$ rises) because $I_{D1} > I_{D2}$, and large because $V_{out} - V_X = I_{D2}R_2$ is of order 1 V and the result is amplified by $1 + R_2/R_1$. (Writing $V_{out} = V_X + (R_2/R_1)\,I_{D2}R_1$ with $V_X$ fixed gives the factor $R_2/R_1$ instead; the difference is an unamplified term of the same order as the neglected $V_{EB}$ shifts.)

### Step 5 — Numerical example

Take $n = 8$ and choose $R_2/R_1$ for zero temperature coefficient: with each $V_{EB}$ drifting by about $-1.5$ mV/K and $V_T/T \approx 0.087$ mV/K, $(1 + R_2/R_1)\ln n \approx 17.2$, so

$$1 + \frac{R_2}{R_1} = \frac{17.2}{\ln8} = \frac{17.2}{2.079} = 8.27 .$$

With $|V_{EB}| \approx 0.78$ V for the unit-area devices:

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

A full numerical solution including the unamplified $V_{EB}$ shifts gives about 27.6 mV, so the first-order formula is accurate. About 28 mV is more than 1 % of the 2.35-V output, which is why long-channel or cascoded current sources are preferred for $M_1$/$M_2$.

### Result

$M_1$ and $M_2$ see different drain–source voltages, $V_{DD} - V_X$ and $V_{DD} - V_{out}$, so with channel-length modulation $I_{D1}/I_{D2} = [1 + \lambda(V_{DD} - V_X)]/[1 + \lambda(V_{DD} - V_{out})] > 1$, while $I_{D3} = I_{D4}$. The PTAT voltage across $R_1$ becomes $2V_T\ln n + V_T\ln(I_{D1}/I_{D2})$, and the output error is

$$\Delta V_{out} \approx \left(1 + \frac{R_2}{R_1}\right)V_T\ln\frac{1 + \lambda(V_{DD} - V_X)}{1 + \lambda(V_{DD} - V_{out})} \approx \left(1 + \frac{R_2}{R_1}\right)V_T\,\frac{\lambda(V_{out} - V_X)}{1 + \lambda(V_{DD} - V_{out})},$$

which is positive ($V_{out}$ rises). Example: $n = 8$, $1 + R_2/R_1 \approx 8.3$, $V_X \approx 1.56$ V, $V_{out} \approx 2.35$ V, $\lambda = 0.2\ \mathrm{V^{-1}}$ gives an error of about 28 mV.

**Common mistake.** Claiming there is no error because the op amp forces $V_X = V_Y$. The drains of $M_1$ and $M_2$ are at X and at $V_{out}$, which differ by the drop across $R_2$, so their currents differ.

**Common mistake.** Leaving the error unamplified, i.e. reporting $V_T\ln(I_{D1}/I_{D2})$ (only about 3.4 mV here). It appears in the PTAT voltage across $R_1$, which the output scales by $1 + R_2/R_1$.

**Common mistake.** Adding a term like $\lambda V_{out}$ directly to the output. The PMOS devices affect the output only through the *ratio* of their currents, which enters logarithmically.
