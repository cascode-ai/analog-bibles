# Detailed solution - R540

**Approach.** $M_3$ and $M_4$ feed the lower transistors of the two stacks ($Q_1$ on the X side, $Q_3$ on the Y side). Their threshold mismatch makes these currents unequal, and the ratio enters the loop equation $V_X = V_Y$ exactly as an $M_1$–$M_2$ mismatch would: it changes the PTAT voltage across $R_1$, which the output amplifies. Derive the current ratio, the loop equation and the output error, including the unamplified corrections.

### Step 1 — Circuit relations

Neglecting base currents, $Q_1$ carries $I_{D3}$, $Q_2$ carries $I_{D1}$, $Q_3$ carries $I_{D4}$ and $Q_4$ carries $I_{D2}$:

$$V_X = |V_{EB1}| + |V_{EB2}|,\qquad V_Y = |V_{EB3}| + |V_{EB4}| + I_{D2}R_1,\qquad V_{out} = V_Y + I_{D2}R_2 .$$

With $|V_{EB}| = V_T\ln(I_C/I_S)$ ($I_S \propto$ emitter area), $V_X = V_Y$ gives

$$I_{D2}R_1 = V_T\ln\left(n^2\,\frac{I_{D1}I_{D3}}{I_{D2}I_{D4}}\right),\qquad
V_{out} = |V_{EB3}| + |V_{EB4}| + \left(1 + \frac{R_2}{R_1}\right)I_{D2}R_1 .$$

$I_{D3}$ and $I_{D4}$ enter on the same footing as $I_{D1}$ and $I_{D2}$: $M_3$ and $M_4$ are inside the loop.

### Step 2 — Current ratio from the threshold mismatch

At the common $|V_{GS}|$, $M_1$, $M_2$, $M_3$ have overdrive $V_{ov}$ and $M_4$ has $V_{ov} - \Delta V$, so by the square law

$$\frac{I_{D3}}{I_{D4}} = \left(\frac{V_{ov}}{V_{ov} - \Delta V}\right)^2 \approx 1 + \frac{2\Delta V}{V_{ov}},\qquad I_{D1} = I_{D2} = I_{D3}.$$

### Step 3 — Error in the PTAT voltage

With $I_{D1} = I_{D2}$:

$$I_{D2}R_1 = V_T\ln\left(n^2\frac{I_{D3}}{I_{D4}}\right) = 2V_T\ln n + V_T\ln\frac{I_{D3}}{I_{D4}} .$$

$Q_1$ now carries more current than $Q_3$, which raises $V_X$ relative to the right stack, and the op amp responds with a larger voltage across $R_1$: the PTAT voltage grows by $V_T\ln(I_{D3}/I_{D4})$.

### Step 4 — Output error: leading term

**(a)** From $V_{out} = |V_{EB3}| + |V_{EB4}| + (1 + R_2/R_1)I_{D2}R_1$, keeping only the amplified term:

$$\Delta V_{out} \approx \left(1 + \frac{R_2}{R_1}\right)V_T\ln\frac{I_{D3}}{I_{D4}} \approx \left(1 + \frac{R_2}{R_1}\right)\frac{2V_T\,\Delta V}{V_{ov}} .$$

**(b)** From $V_{out} = V_X + I_{D2}R_2 = V_X + (R_2/R_1)\,I_{D2}R_1$, with $V_X$ hardly changed (its junctions carry the nominal-threshold currents):

$$\Delta V_{out} \approx \frac{R_2}{R_1}\,V_T\ln\frac{I_{D3}}{I_{D4}} .$$

The two differ by the unamplified $V_T\ln(I_{D3}/I_{D4})$, which in form (a) is cancelled by the *fall* of $|V_{EB3}|$ ($Q_3$ now runs below $Q_4$'s current), so form (b) is slightly closer to the exact value. Either way, the output **rises**.

### Step 5 — Complete first-order result

With $r = I_{D3}/I_{D4}$ and the ideal current $I$ ($IR_1 = 2V_T\ln n$), Step 3 gives $I_{D2} = I(1 + \ln r/(2\ln n))$. Then
- $|V_{EB4}|$ ($Q_4$ carries $I_{D2}$) rises by $V_T\ln(I_{D2}/I) \approx V_T\ln r/(2\ln n)$;
- $|V_{EB3}|$ ($Q_3$ carries $I_{D4} = I_{D2}/r$) changes by $V_T\ln r/(2\ln n) - V_T\ln r$.

Adding these to the amplified term:

$$
\begin{aligned}
\Delta V_{out} &\approx \left(1 + \frac{R_2}{R_1}\right)V_T\ln r - V_T\ln r + \frac{V_T\ln r}{\ln n}\\
&= \left(\frac{R_2}{R_1} + \frac{1}{\ln n}\right)V_T\ln\frac{I_{D3}}{I_{D4}} .
\end{aligned}
$$

### Step 6 — Numerical example

$n = 8$, $1 + R_2/R_1 = 17.2/\ln8 \approx 8.27$, $V_{ov} = 0.2$ V, $\Delta V = 5$ mV, $V_T = 26$ mV:

$$
\begin{aligned}
\frac{I_{D3}}{I_{D4}} &= \left(\frac{0.200}{0.195}\right)^2 = 1.052,\qquad V_T\ln1.052 = 26\ \mathrm{mV}\times0.0506 = 1.32\ \mathrm{mV},\\
\text{form (a):}\quad \Delta V_{out} &\approx 8.27\times1.32\ \mathrm{mV} = 10.9\ \mathrm{mV},\\
\text{form (b):}\quad \Delta V_{out} &\approx 7.27\times1.32\ \mathrm{mV} = 9.6\ \mathrm{mV},\\
\text{complete:}\quad \Delta V_{out} &\approx \left(7.27 + \frac{1}{2.079}\right)\times1.32\ \mathrm{mV} = 7.75\times1.32\ \mathrm{mV} = 10.2\ \mathrm{mV}.
\end{aligned}
$$

An exact numerical solution of the circuit gives about 10.2 mV. Unlike channel-length modulation, which is benign in $M_3$/$M_4$ because their drains sit at nearly equal voltages, a threshold mismatch changes their current ratio directly and is just as harmful as in $M_1$/$M_2$.

### Result

$I_{D3}/I_{D4} = [V_{ov}/(V_{ov} - \Delta V)]^2 \approx 1 + 2\Delta V/V_{ov}$. Since $Q_1$ (fed by $M_3$) is in the X branch and $Q_3$ (fed by $M_4$) in the Y branch, this ratio enters the PTAT voltage just as an $M_1$–$M_2$ mismatch would: $I_{D2}R_1 = 2V_T\ln n + V_T\ln(I_{D3}/I_{D4})$. The output rises by

$$\Delta V_{out} \approx \left(1 + \frac{R_2}{R_1}\right)V_T\ln\frac{I_{D3}}{I_{D4}} \approx \left(1 + \frac{R_2}{R_1}\right)\frac{2V_T\,\Delta V}{V_{ov}}$$

(leading order), or equivalently $(R_2/R_1)V_T\ln(I_{D3}/I_{D4})$ using $V_{out} = V_X + I_{D2}R_2$ with $V_X$ essentially unchanged. The complete first-order result is

$$\Delta V_{out} \approx \left(\frac{R_2}{R_1} + \frac{1}{\ln n}\right)V_T\ln\frac{I_{D3}}{I_{D4}} .$$

Example ($n = 8$, $1 + R_2/R_1 \approx 8.3$, $V_{ov} = 0.2$ V, $\Delta V = 5$ mV): ≈ 10.9, 9.6 and 10.2 mV for the three forms. Unlike channel-length modulation, a threshold mismatch in $M_3$/$M_4$ is as harmful as one in $M_1$/$M_2$.

**Common mistake.** Arguing by analogy with channel-length modulation that $M_3$/$M_4$ errors are negligible. A threshold mismatch changes their current ratio regardless of the drain voltages, and that ratio sits inside the loop equation.

**Common mistake.** Saying the mismatch only changes $|V_{EB3}|$, giving $\Delta V_{out} = -V_T\ln(I_{D3}/I_{D4})$. The changed $|V_{EB1}|$ versus $|V_{EB3}|$ forces a new voltage across $R_1$, which is then amplified.

**Common mistake.** Quoting $V_T\ln(I_{D3}/I_{D4}) \approx 1.3$ mV as the output error. It sits in the PTAT voltage across $R_1$, which the output scales by $1 + R_2/R_1$ (or $R_2/R_1$ in the alternative split).
