# Detailed solution - R557

**Approach.** Record the node voltages and capacitor charges at the end of the first phase. When the switches change, the inverting-input node becomes floating, so its charge is conserved, while the ideal op amp keeps it equal to $V_X$. Charge conservation there gives the output step in terms of the step of $V_X$, the change of $V_{EB}$ when the current rises from $I_1$ to $I_1 + I_2$.

### Step 1 — State at the end of the first phase ($S_1$ on, $S_2$ off)

Call the op amp's inverting-input node N; it connects to ground through $C_2$ and to $V_{out}$ through both $C_1$ and $S_1$. $Q_1$ carries only $I_1$, so

$$V_X = V_{EB}(I_1) = V_T\ln\frac{I_1}{I_S},$$

and the op amp is a unity-gain follower: $V_N = V_{out} = V_X = V_{EB}(I_1)$. $C_1$ is shorted ($V_{C1} = 0$) and $C_2$ holds $V_{EB}(I_1)$, so the total charge on the plates at N is

$$Q_N = C_2(V_N - 0) + C_1(V_N - V_{out}) = C_2V_{EB}(I_1) + 0 .$$

### Step 2 — The step of $V_X$ when $S_2$ turns on

Now $Q_1$ carries $I_1 + I_2$, so

$$V_X' = V_{EB}(I_1 + I_2) = V_T\ln\frac{I_1 + I_2}{I_S},$$

$$
\begin{aligned}
\Delta V_{EB} = V_X' - V_X &= V_T\ln\frac{I_1 + I_2}{I_S} - V_T\ln\frac{I_1}{I_S}\\
&= V_T\ln\frac{I_1 + I_2}{I_1}\\
&= V_T\ln\left(1 + \frac{I_2}{I_1}\right).
\end{aligned}
$$

This PTAT voltage depends only on $V_T$ and a current ratio; it replaces the $\Delta V_{BE}$ of two transistors, hence "single-junction".

### Step 3 — Charge conservation at node N

The op amp, now with negative feedback through $C_1$, keeps $V_N' = V_X'$, so N steps up by $\Delta V_{EB}$. With $S_1$ open, N connects only to the two capacitor plates and the op-amp input, so $Q_N$ is **conserved** (charge injection neglected). With new output $V_{out}'$:

$$Q_N' = C_2V_X' + C_1(V_X' - V_{out}') = C_2V_{EB}(I_1).$$

Subtracting the first-phase charge written the same way, $C_2V_X + C_1(V_X - V_{out})$ with $V_X = V_{out}$, and writing $\Delta V_{out} = V_{out}' - V_{out}$:

$$
\begin{aligned}
C_2\,\Delta V_{EB} + C_1\left(\Delta V_{EB} - \Delta V_{out}\right) &= 0\\
C_1\,\Delta V_{out} &= (C_1 + C_2)\,\Delta V_{EB}\\
\Delta V_{out} &= \left(1 + \frac{C_2}{C_1}\right)\Delta V_{EB}.
\end{aligned}
$$

With $\Delta V_{EB}$ from Step 2:

$$\Delta V_{out} = \left(1 + \frac{C_2}{C_1}\right)V_T\ln\left(1 + \frac{I_2}{I_1}\right).$$

Both factors are positive, so **the output rises**.

### Step 4 — Interpretation and the new output level

With $S_1$ open, the op amp, $C_1$ (output to − input) and $C_2$ (− input to ground) form a noninverting amplifier with gain $1 + Z_{C1}/Z_{C2} = 1 + C_2/C_1$ for *changes*. Its input is the step $\Delta V_{EB}$ at X; the dc level $V_{EB}(I_1)$ already present is "remembered" by $C_2$ and not amplified. The new output is

$$
\begin{aligned}
V_{out}' &= V_{out} + \Delta V_{out}\\
&= V_{EB}(I_1) + \Delta V_{EB} + \frac{C_2}{C_1}\Delta V_{EB}\\
&= V_{EB}(I_1 + I_2) + \frac{C_2}{C_1}V_T\ln\left(1 + \frac{I_2}{I_1}\right):
\end{aligned}
$$

a bandgap voltage, $V_{EB}$ (negative TC) plus a scaled PTAT term, from a single transistor. With $\partial V_{EB}/\partial T \approx -1.5$ mV/K and $k/q \approx 0.087$ mV/K, zero TC requires $(C_2/C_1)\ln(1 + I_2/I_1) \approx 17.2$.

**Illustrative numbers** (not given in the problem): with $I_2 = 7I_1$ and $C_2 = 8C_1$ at 300 K,

$$
\begin{aligned}
\Delta V_{EB} &= (25.85\ \mathrm{mV})\ln 8 = (25.85\ \mathrm{mV})(2.079) = 53.8\ \mathrm{mV},\\
\Delta V_{out} &= (1 + 8)(53.8\ \mathrm{mV}) = 484\ \mathrm{mV}.
\end{aligned}
$$

### Result

$$\Delta V_{out} = \left(1 + \frac{C_2}{C_1}\right)V_T\ln\left(1 + \frac{I_2}{I_1}\right) \quad\text{(an increase)},$$

and the new output is

$$V_{out} = V_{EB}(I_1 + I_2) + \frac{C_2}{C_1}V_T\ln\left(1 + \frac{I_2}{I_1}\right).$$

With $S_2$ on, $Q_1$ carries $I_1 + I_2$, so $V_X$ rises by $\Delta V_{EB} = V_T\ln[(I_1 + I_2)/I_1]$. The op amp keeps node N equal to $V_X$, and with $S_1$ open N is floating, so its charge is conserved: $C_2\Delta V_{EB} + C_1(\Delta V_{EB} - \Delta V_{out}) = 0$. That gives the noninverting gain $1 + C_2/C_1$.

**Common mistake.** Answering $(C_2/C_1)\Delta V_{EB}$, which is only the extra term on top of the new $V_{EB}$. The output also follows the $\Delta V_{EB}$ step of X itself, so the total change is $(1 + C_2/C_1)\Delta V_{EB}$.

**Common mistake.** Treating the stage as an inverting amplifier with gain $-C_2/C_1$, or using $C_1/C_2$. The step is applied to the *noninverting* input (X) and $C_2$ goes from the inverting input to ground, so the gain is $+(1 + C_2/C_1)$, with the feedback capacitor $C_1$ in the denominator.

**Common mistake.** Writing $\Delta V_{EB} = V_T\ln(I_2/I_1)$. The transistor current changes from $I_1$ to $I_1 + I_2$, so the ratio is $1 + I_2/I_1$.
