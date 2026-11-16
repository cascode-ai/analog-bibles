# Detailed solution - R538

**Approach.** Write each branch voltage as a sum of emitter–base voltages (plus the drop on $R_1$), impose $V_X = V_Y$, and track how the PMOS currents enter. The drains of $M_3$ and $M_4$ sit at the emitters of $Q_1$ and $Q_3$, one $V_{EB}$ above ground and at almost the same voltage, so their current *ratio* barely changes and the amplified PTAT error is small. Their current *level* rises, however, which raises the emitter–base voltages directly. Both effects are computed and added.

### Step 1 — Circuit relations

Neglecting base currents, $Q_1$ carries $I_{D3}$, $Q_2$ carries $I_{D1}$, $Q_3$ carries $I_{D4}$ and $Q_4$ carries $I_{D2}$:

$$V_X = |V_{EB1}| + |V_{EB2}|,\qquad V_Y = |V_{EB3}| + |V_{EB4}| + I_{D2}R_1,\qquad V_{out} = V_Y + I_{D2}R_2 ,$$

with $|V_{EB}| = V_T\ln(I_C/I_S)$ and $I_S$ or $nI_S$ according to the emitter area. Setting $V_X = V_Y$ and collecting the logarithms gives the loop equation

$$I_{D2}R_1 = V_T\ln\left(n^2\,\frac{I_{D1}I_{D3}}{I_{D2}I_{D4}}\right),$$

and the output is

$$V_{out} = |V_{EB3}| + |V_{EB4}| + \left(1 + \frac{R_2}{R_1}\right)I_{D2}R_1 .$$

Ideally (all PMOS currents equal to $I$): $IR_1 = 2V_T\ln n$ and $V_{out} = |V_{EB3}| + |V_{EB4}| + 2(1 + R_2/R_1)V_T\ln n$.

### Step 2 — The PMOS currents with CLM in $M_3$ and $M_4$ only

With $I_D = I_0(1 + \lambda|V_{DS}|)$, $I_0$ being the current without CLM:
- $M_1$, $M_2$: $I_{D1} = I_{D2} = I_0$.
- $M_3$ (drain at the emitter of $Q_1$, $|V_{DS3}| = V_{DD} - |V_{EB1}|$):
$$I_{D3} = I_0\,a,\qquad a = 1 + \lambda(V_{DD} - |V_{EB1}|).$$
- $M_4$ (drain at the emitter of $Q_3$, $|V_{DS4}| = V_{DD} - |V_{EB3}|$):
$$I_{D4} = I_0\,b,\qquad b = 1 + \lambda(V_{DD} - |V_{EB3}|).$$

Both $a$ and $b$ are large (≈ 1.44 for $\lambda = 0.2\ \mathrm{V^{-1}}$) but nearly equal.

### Step 3 — Effect 1: the amplified PTAT term (small)

The loop equation becomes

$$I_0R_1 = V_T\ln\left(n^2\frac{I_0\cdot I_0a}{I_0\cdot I_0b}\right) = 2V_T\ln n + V_T\ln\frac ab .$$

The two drain voltages differ by $|V_{EB1}| - |V_{EB3}| \approx V_T\ln n$ ($Q_3$ has $n$ times the area at nearly the same current; ≈ 54 mV for $n = 8$), so

$$\frac ab = \frac{1 + \lambda(V_{DD} - |V_{EB1}|)}{1 + \lambda(V_{DD} - |V_{EB3}|)} \approx 1 - \frac{\lambda V_T\ln n}{1 + \lambda(V_{DD} - |V_{EB}|)} .$$

$M_4$ (lower drain) carries slightly *more* current than $M_3$, so the PTAT voltage shrinks by $V_T\ln(b/a)$ and the output falls by $1 + R_2/R_1$ times that:

$$\Delta V_{out,1} = \left(1 + \frac{R_2}{R_1}\right)V_T\ln\frac ab \approx -\left(1 + \frac{R_2}{R_1}\right)\frac{\lambda V_T^2\ln n}{1 + \lambda(V_{DD} - |V_{EB}|)} ,$$

small because the drain-voltage difference is only $V_T\ln n$, not the roughly 1 V that appears when $M_1$ and $M_2$ have CLM.

### Step 4 — Effect 2: the unamplified rise of $|V_{EB3}|$ (dominant)

$Q_1$ and $Q_3$ now run at $a$ and $b$ times the current of $Q_2$ and $Q_4$, so $|V_{EB3}|$ in the output rises by

$$\Delta V_{out,2} = V_T\ln b = V_T\ln\left[1 + \lambda(V_{DD} - |V_{EB3}|)\right].$$

It is not amplified, but $\ln b$ is of order 0.4, so it outweighs Effect 1. (The change of $I_0$ itself, by the factor $1 + \ln(a/b)/(2\ln n)$, shifts $|V_{EB3}| + |V_{EB4}|$ by a further $V_T\ln(a/b)/\ln n$, a fraction of a millivolt.)

### Step 5 — Total error

$$\boxed{\Delta V_{out} \approx V_T\ln\left[1 + \lambda(V_{DD} - |V_{EB3}|)\right] + \left(1 + \frac{R_2}{R_1}\right)V_T\ln\frac{1 + \lambda(V_{DD} - |V_{EB1}|)}{1 + \lambda(V_{DD} - |V_{EB3}|)}}$$

or, linearizing the ratio,

$$\Delta V_{out} \approx V_T\ln\left[1 + \lambda(V_{DD} - |V_{EB}|)\right] - \left(1 + \frac{R_2}{R_1}\right)\frac{\lambda V_T^2\ln n}{1 + \lambda(V_{DD} - |V_{EB}|)} .$$

(Splitting the output as $V_{out} = V_X + I_0R_2$ gives $V_T\ln a + (R_2/R_1)V_T\ln(a/b)$, the same total.)

**Numerical example.** $n = 8$, $1 + R_2/R_1 = 17.2/\ln8 \approx 8.27$ (zero temperature coefficient), $|V_{EB1}| \approx 0.78$ V, $|V_{EB3}| \approx 0.78 - V_T\ln8 = 0.726$ V, $\lambda = 0.2\ \mathrm{V^{-1}}$, $V_{DD} = 3$ V:

$$
\begin{aligned}
a &= 1 + 0.2(3 - 0.78) = 1.444, \qquad b = 1 + 0.2(3 - 0.726) = 1.455,\\
\Delta V_{out,2} &= 26\ \mathrm{mV}\times\ln1.455 = 26\ \mathrm{mV}\times0.375 = +9.7\ \mathrm{mV},\\
\Delta V_{out,1} &= 8.27\times26\ \mathrm{mV}\times\ln\frac{1.444}{1.455} = 8.27\times26\ \mathrm{mV}\times(-0.0075) = -1.6\ \mathrm{mV},\\
\Delta V_{out} &\approx +9.7 - 1.6 = +8\ \mathrm{mV}.
\end{aligned}
$$

A full numerical solution of the circuit gives +8.0 mV (and +4.3 mV for $\lambda = 0.1\ \mathrm{V^{-1}}$). When $M_1$ and $M_2$ have CLM instead, their drains are about 0.8 V apart, the current ratio changes by about 14 %, and the amplified error is about 28 mV; CLM in $M_3$/$M_4$ is much more benign.

### Result

With $a = 1 + \lambda(V_{DD} - |V_{EB1}|)$ and $b = 1 + \lambda(V_{DD} - |V_{EB3}|)$ (the drains of $M_3$ and $M_4$ sit at $|V_{EB1}|$ and $|V_{EB3}|$), the loop gives $I_0R_1 = 2V_T\ln n + V_T\ln(a/b)$, and

$$\Delta V_{out} \approx V_T\ln\left[1 + \lambda(V_{DD} - |V_{EB3}|)\right] + \left(1 + \frac{R_2}{R_1}\right)V_T\ln\frac{1 + \lambda(V_{DD} - |V_{EB1}|)}{1 + \lambda(V_{DD} - |V_{EB3}|)} \approx V_T\ln\left[1 + \lambda(V_{DD} - |V_{EB}|)\right] - \left(1 + \frac{R_2}{R_1}\right)\frac{\lambda V_T^2\ln n}{1 + \lambda(V_{DD} - |V_{EB}|)} .$$

The error is positive and only a few millivolts (≈ +9.7 − 1.6 ≈ +8 mV for $n = 8$, $\lambda = 0.2\ \mathrm{V^{-1}}$), much smaller than the ≈ 28 mV obtained when $M_1$ and $M_2$ have CLM. It is dominated by the unamplified rise of the emitter–base voltages, not by the PTAT term.

**Common mistake.** Placing the drains of $M_3$ and $M_4$ at $V_X$ and $V_{out}$ (as for $M_1$ and $M_2$) and predicting a large, amplified error. They are at the emitters of $Q_1$ and $Q_3$ and differ by just $\approx V_T\ln n$.

**Common mistake.** Reporting only the small negative PTAT term. $Q_1$ and $Q_3$ carry about 40 % more current than $Q_2$ and $Q_4$, which raises $|V_{EB3}|$ by about 10 mV and dominates the error.

**Common mistake.** Amplifying the CLM factor $\lambda|V_{DS}| \approx 0.44$ by $1 + R_2/R_1$. Only the *ratio* $a/b$ enters the PTAT voltage; the common factor acts only through the logarithm, unamplified.
