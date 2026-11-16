# Detailed solution - R539

**Approach.** A threshold mismatch between $M_1$ and $M_2$, which share the same gate voltage, makes their currents unequal. Find this current ratio from the square law. Then insert it into the loop equation of the bandgap ($V_X = V_Y$), which turns it into an error in the PTAT voltage across $R_1$. The output amplifies that error by $1 + R_2/R_1$. Finally add the smaller, unamplified changes of the emitter–base voltages.

### Step 1 — Circuit relations

- $M_1$–$M_4$ share the gate voltage set by $A_1$ and have their sources at $V_{DD}$.
- **Left stack.** $V_X = |V_{EB1}| + |V_{EB2}|$: $Q_2$ (area $A$) carries $I_{D1}$, and $Q_1$ (area $A$), which drives the base of $Q_2$, carries $I_{D3}$.
- **Right stack.** $V_Y = |V_{EB3}| + |V_{EB4}| + I_{D2}R_1$: $Q_4$ (area $nA$) carries $I_{D2}$, and $Q_3$ (area $nA$), which drives the base of $Q_4$, carries $I_{D4}$. The output is $V_{out} = V_Y + I_{D2}R_2$.
- **Bipolar law:** $|V_{EB}| = V_T\ln(I_C/I_S)$, with $I_S \propto$ emitter area.

**Loop equation.** The op amp forces $V_X = V_Y$:

$$V_T\ln\frac{I_{D1}}{I_S} + V_T\ln\frac{I_{D3}}{I_S} = V_T\ln\frac{I_{D2}}{nI_S} + V_T\ln\frac{I_{D4}}{nI_S} + I_{D2}R_1 ,$$

$$\Longrightarrow\quad I_{D2}R_1 = V_T\ln\left(n^2\,\frac{I_{D1}I_{D3}}{I_{D2}I_{D4}}\right).$$

**Output:**

$$V_{out} = |V_{EB3}| + |V_{EB4}| + \left(1 + \frac{R_2}{R_1}\right)I_{D2}R_1 .$$

Ideally all currents are equal, $I_{D2}R_1 = 2V_T\ln n$, and the PTAT term is $2(1 + R_2/R_1)V_T\ln n$.

### Step 2 — Current ratio caused by the threshold mismatch

All four PMOS devices have the same $|V_{GS}|$. Let $V_{ov} = |V_{GS}| - |V_{TH}|$ be the overdrive of the devices with the nominal threshold ($M_1$, $M_3$, $M_4$). $M_2$ has $|V_{TH2}| = |V_{TH}| + \Delta V$, so its overdrive is only $V_{ov} - \Delta V$. With the square law, $I_D = \tfrac12\mu_pC_{ox}\tfrac WL(|V_{GS}| - |V_{TH}|)^2$:

$$\frac{I_{D1}}{I_{D2}} = \frac{V_{ov}^2}{(V_{ov} - \Delta V)^2} = \left(1 - \frac{\Delta V}{V_{ov}}\right)^{-2} \approx 1 + \frac{2\Delta V}{V_{ov}}\qquad(\Delta V \ll V_{ov}).$$

Equivalently, $\Delta I_D/I_D = g_m\Delta V/I_D$ with $g_m/I_D = 2/V_{ov}$. Also $I_{D3} = I_{D4} = I_{D1}$, because $M_3$ and $M_4$ are matched to $M_1$.

### Step 3 — Error in the PTAT voltage

Substitute $I_{D3} = I_{D4}$ into the loop equation:

$$I_{D2}R_1 = V_T\ln\left(n^2\frac{I_{D1}}{I_{D2}}\right) = 2V_T\ln n + V_T\ln\frac{I_{D1}}{I_{D2}} .$$

The voltage across $R_1$ grows by $V_T\ln(I_{D1}/I_{D2})$. Physically, $Q_2$ now runs at a higher current than $Q_4$, so the op amp must place a larger voltage across $R_1$ to keep $V_X = V_Y$. The mismatch acts exactly like a change in the emitter-area ratio.

### Step 4 — Error at the output: the dominant (amplified) term

The PTAT term in $V_{out}$ is $(1 + R_2/R_1)I_{D2}R_1$, so

$$\Delta V_{out} \approx \left(1 + \frac{R_2}{R_1}\right)V_T\ln\frac{I_{D1}}{I_{D2}} \approx \left(1 + \frac{R_2}{R_1}\right)\frac{2V_T\,\Delta V}{V_{ov}} .$$

The output **rises**: $M_2$, with the larger threshold, carries less current, which raises the PTAT voltage. A threshold mismatch of a few millivolts becomes an output error of order $(1 + R_2/R_1)(2V_T/V_{ov})\Delta V$. For a typical $1 + R_2/R_1 \approx 8$ and $V_{ov} = 0.2$ V this is about $2\,\Delta V$.

### Step 5 — Complete first-order result (including unamplified terms)

The branch currents themselves change, so the emitter–base voltages in $V_{out}$ also shift. Let $r = I_{D1}/I_{D2}$ and let $I$ be the ideal current ($IR_1 = 2V_T\ln n$).

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

An exact numerical solution of the circuit equations gives 12.8 mV, confirming the complete first-order expression. A 5-mV threshold mismatch thus produces an output error of more than 10 mV.

### Result

The mismatch makes $I_{D1}/I_{D2} = [V_{ov}/(V_{ov} - \Delta V)]^2 \approx 1 + 2\Delta V/V_{ov}$. Through $V_X = V_Y$ this adds $V_T\ln(I_{D1}/I_{D2})$ to the PTAT voltage across $R_1$, which the output amplifies:

$$\Delta V_{out} \approx \left(1 + \frac{R_2}{R_1}\right)V_T\ln\frac{I_{D1}}{I_{D2}} \approx \left(1 + \frac{R_2}{R_1}\right)\frac{2V_T\,\Delta V}{V_{ov}}$$

(leading, amplified term; $V_{out}$ rises). Including the unamplified rise of the stacked emitter–base voltages, the complete first-order result is

$$\Delta V_{out} \approx \left(2 + \frac{R_2}{R_1} + \frac{1}{\ln n}\right)V_T\ln\frac{I_{D1}}{I_{D2}} .$$

Example ($n = 8$, $1 + R_2/R_1 \approx 8.3$, $V_{ov} = 0.2$ V, $\Delta V = 5$ mV): ≈ 10.8 mV (leading term), ≈ 12.8 mV (complete).

**Common mistake.** Concluding that there is no error because the op amp equalizes $V_X$ and $V_Y$. The op amp equalizes *voltages*, but the mismatch makes the *currents* in the two branches differ. The emitter–base voltages then differ, and the voltage across $R_1$ must change to compensate.

**Common mistake.** Treating $\Delta V$ like an op-amp offset and writing $\Delta V_{out} = (1 + R_2/R_1)\Delta V$. The threshold mismatch acts through the current ratio, and its effect on the voltage across $R_1$ is $V_T\ln(I_{D1}/I_{D2}) \approx (2V_T/V_{ov})\Delta V$. Here that is about a quarter of $\Delta V$.

**Common mistake.** Dropping the factor 2 in $I_{D1}/I_{D2} \approx 1 + 2\Delta V/V_{ov}$, or reading each stack as a single junction (which gives $I_{D2}R_1 = V_T\ln n$ instead of $2V_T\ln n$). The square law makes the relative current error twice the relative overdrive error, and each side of this circuit stacks two junctions.
