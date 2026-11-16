# Detailed solution - R539

**Approach.** With a common gate voltage, the threshold mismatch makes the currents of $M_1$ and $M_2$ unequal; the square law gives the ratio. The loop equation $V_X = V_Y$ turns this ratio into an error in the PTAT voltage across $R_1$, which the output amplifies by $1 + R_2/R_1$. The smaller, unamplified changes of the emitter–base voltages are added at the end.

### Step 1 — Circuit relations

Neglecting base currents, $Q_2$ carries $I_{D1}$, $Q_1$ carries $I_{D3}$, $Q_4$ carries $I_{D2}$ and $Q_3$ carries $I_{D4}$:

$$V_X = |V_{EB1}| + |V_{EB2}|,\qquad V_Y = |V_{EB3}| + |V_{EB4}| + I_{D2}R_1,\qquad V_{out} = V_Y + I_{D2}R_2 ,$$

with $|V_{EB}| = V_T\ln(I_C/I_S)$ and $I_S \propto$ emitter area. The op amp forces $V_X = V_Y$:

$$V_T\ln\frac{I_{D1}}{I_S} + V_T\ln\frac{I_{D3}}{I_S} = V_T\ln\frac{I_{D2}}{nI_S} + V_T\ln\frac{I_{D4}}{nI_S} + I_{D2}R_1
\quad\Longrightarrow\quad I_{D2}R_1 = V_T\ln\left(n^2\,\frac{I_{D1}I_{D3}}{I_{D2}I_{D4}}\right),$$

and the output is

$$V_{out} = |V_{EB3}| + |V_{EB4}| + \left(1 + \frac{R_2}{R_1}\right)I_{D2}R_1 .$$

Ideally all currents are equal, $I_{D2}R_1 = 2V_T\ln n$, and the PTAT term is $2(1 + R_2/R_1)V_T\ln n$.

### Step 2 — Current ratio caused by the threshold mismatch

All four PMOS devices have the same $|V_{GS}|$. $M_1$, $M_3$, $M_4$ have the overdrive $V_{ov}$, and $M_2$ only $V_{ov} - \Delta V$, so by the square law

$$\frac{I_{D1}}{I_{D2}} = \frac{V_{ov}^2}{(V_{ov} - \Delta V)^2} = \left(1 - \frac{\Delta V}{V_{ov}}\right)^{-2} \approx 1 + \frac{2\Delta V}{V_{ov}}\qquad(\Delta V \ll V_{ov}),$$

i.e. $\Delta I_D/I_D = g_m\Delta V/I_D$ with $g_m/I_D = 2/V_{ov}$. Also $I_{D3} = I_{D4} = I_{D1}$.

### Step 3 — Error in the PTAT voltage

With $I_{D3} = I_{D4}$, the loop equation becomes

$$I_{D2}R_1 = V_T\ln\left(n^2\frac{I_{D1}}{I_{D2}}\right) = 2V_T\ln n + V_T\ln\frac{I_{D1}}{I_{D2}} .$$

The voltage across $R_1$ grows by $V_T\ln(I_{D1}/I_{D2})$: $Q_2$ now runs at a higher current than $Q_4$, so the mismatch acts exactly like a change in the emitter-area ratio.

### Step 4 — Error at the output: the dominant (amplified) term

The PTAT term in $V_{out}$ is $(1 + R_2/R_1)I_{D2}R_1$, so

$$\Delta V_{out} \approx \left(1 + \frac{R_2}{R_1}\right)V_T\ln\frac{I_{D1}}{I_{D2}} \approx \left(1 + \frac{R_2}{R_1}\right)\frac{2V_T\,\Delta V}{V_{ov}} .$$

The output **rises**: $M_2$, with the larger threshold, carries less current, which raises the PTAT voltage. For a typical $1 + R_2/R_1 \approx 8$ and $V_{ov} = 0.2$ V the error is about $2\,\Delta V$.

### Step 5 — Complete first-order result (including unamplified terms)

The branch currents themselves change, shifting the emitter–base voltages in $V_{out}$. With $r = I_{D1}/I_{D2}$ and the ideal current $I$ ($IR_1 = 2V_T\ln n$):
- From Step 3, $I_{D2} = I\left(1 + \dfrac{\ln r}{2\ln n}\right)$, so $|V_{EB4}|$ ($Q_4$ carries $I_{D2}$) rises by $V_T\ln(I_{D2}/I) \approx V_T\ln r/(2\ln n)$.
- $Q_3$ carries $I_{D4} = rI_{D2}$, so $|V_{EB3}|$ rises by $V_T\ln r + V_T\ln r/(2\ln n)$.

Adding these to the amplified term:

$$
\begin{aligned}
\Delta V_{out} &\approx \left(1 + \frac{R_2}{R_1}\right)V_T\ln r + V_T\ln r + \frac{V_T\ln r}{\ln n}\\
&= \left(2 + \frac{R_2}{R_1} + \frac{1}{\ln n}\right)V_T\ln\frac{I_{D1}}{I_{D2}} .
\end{aligned}
$$

### Step 6 — Numerical example

$n = 8$, $1 + R_2/R_1 = 17.2/\ln8 \approx 8.27$ (zero temperature coefficient), $V_{ov} = 0.2$ V, $\Delta V = 5$ mV, $V_T = 26$ mV:

$$
\begin{aligned}
\frac{I_{D1}}{I_{D2}} &= \left(\frac{0.200}{0.195}\right)^2 = 1.052,\qquad \ln1.052 = 0.0506,\\
\text{dominant term:}\quad \Delta V_{out} &\approx 8.27\times26\ \mathrm{mV}\times0.0506 = 10.9\ \mathrm{mV}\\
&\left(\text{linearized: } 8.27\times\frac{2\times26\ \mathrm{mV}\times5\ \mathrm{mV}}{200\ \mathrm{mV}} = 10.8\ \mathrm{mV}\right),\\
\text{complete:}\quad \Delta V_{out} &\approx \left(2 + 7.27 + \frac{1}{2.079}\right)\times26\ \mathrm{mV}\times0.0506 = 9.75\times1.32\ \mathrm{mV} = 12.8\ \mathrm{mV}.
\end{aligned}
$$

An exact numerical solution of the circuit equations gives 12.8 mV, confirming the complete first-order expression: a 5-mV threshold mismatch produces an output error of more than 10 mV.

### Result

The mismatch makes $I_{D1}/I_{D2} = [V_{ov}/(V_{ov} - \Delta V)]^2 \approx 1 + 2\Delta V/V_{ov}$. Through $V_X = V_Y$ this adds $V_T\ln(I_{D1}/I_{D2})$ to the PTAT voltage across $R_1$, which the output amplifies:

$$\Delta V_{out} \approx \left(1 + \frac{R_2}{R_1}\right)V_T\ln\frac{I_{D1}}{I_{D2}} \approx \left(1 + \frac{R_2}{R_1}\right)\frac{2V_T\,\Delta V}{V_{ov}}$$

(leading, amplified term; $V_{out}$ rises). Including the unamplified rise of the stacked emitter–base voltages, the complete first-order result is

$$\Delta V_{out} \approx \left(2 + \frac{R_2}{R_1} + \frac{1}{\ln n}\right)V_T\ln\frac{I_{D1}}{I_{D2}} .$$

Example ($n = 8$, $1 + R_2/R_1 \approx 8.3$, $V_{ov} = 0.2$ V, $\Delta V = 5$ mV): ≈ 10.8 mV (leading term), ≈ 12.8 mV (complete).

**Common mistake.** Concluding that there is no error because the op amp equalizes $V_X$ and $V_Y$. It equalizes *voltages*, but the branch *currents* differ, so the emitter–base voltages differ and the voltage across $R_1$ must change to compensate.

**Common mistake.** Treating $\Delta V$ like an op-amp offset, $\Delta V_{out} = (1 + R_2/R_1)\Delta V$. The mismatch acts through the current ratio, so its effect across $R_1$ is $V_T\ln(I_{D1}/I_{D2}) \approx (2V_T/V_{ov})\Delta V$, here about a quarter of $\Delta V$.

**Common mistake.** Dropping the factor 2 in $I_{D1}/I_{D2} \approx 1 + 2\Delta V/V_{ov}$, or treating each stack as a single junction ($I_{D2}R_1 = V_T\ln n$ instead of $2V_T\ln n$).
