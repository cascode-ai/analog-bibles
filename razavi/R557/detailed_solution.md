# Detailed solution - R557

**Approach.** Record the node voltages and capacitor charges at the end of the first phase. When the switches change, the inverting-input node becomes floating, so its total charge is conserved, while the ideal op amp keeps that node equal to $V_X$. Writing charge conservation at that node gives the output step in terms of the step of $V_X$, which is the change of $V_{EB}$ when the current rises from $I_1$ to $I_1 + I_2$.

### Step 1 — State at the end of the first phase ($S_1$ on, $S_2$ off)

Call the op amp's inverting input node N. N connects to ground through $C_2$, to $V_{out}$ through $C_1$, and to $V_{out}$ through $S_1$.

- $S_2$ is off, so $Q_1$ carries only $I_1$. From the bipolar law $I_C = I_S\exp(V_{EB}/V_T)$, with base current neglected and the base grounded:
$$V_X = V_{EB}(I_1) = V_T\ln\frac{I_1}{I_S}.$$
- $S_1$ is on, so N is tied to $V_{out}$ and the op amp is a unity-gain follower: $V_N = V_{out} = V_X = V_{EB}(I_1)$.
- Capacitor voltages: $C_1$ is shorted, so $V_{C1} = 0$. $C_2$ holds $V_{C2} = V_{EB}(I_1)$.

The total charge on the capacitor plates connected to node N is

$$Q_N = C_2(V_N - 0) + C_1(V_N - V_{out}) = C_2V_{EB}(I_1) + 0 .$$

### Step 2 — The step of $V_X$ when $S_2$ turns on

Now $S_1$ turns off and $S_2$ turns on. $Q_1$ carries $I_1 + I_2$, so

$$V_X' = V_{EB}(I_1 + I_2) = V_T\ln\frac{I_1 + I_2}{I_S}.$$

The change is the difference of two logarithms, so $I_S$ cancels:

$$
\begin{aligned}
\Delta V_{EB} = V_X' - V_X &= V_T\ln\frac{I_1 + I_2}{I_S} - V_T\ln\frac{I_1}{I_S}\\
&= V_T\ln\frac{I_1 + I_2}{I_1}\\
&= V_T\ln\left(1 + \frac{I_2}{I_1}\right).
\end{aligned}
$$

This is a PTAT voltage: it depends only on $V_T = kT/q$ and a current ratio. The bandgap uses it in place of the $\Delta V_{BE}$ of two transistors, which is why it is called "single-junction".

### Step 3 — What the op amp and the open switch impose

- **Ideal op amp with negative feedback** (now through $C_1$): the inputs are virtually shorted, so $V_N' = V_X'$, and node N steps up by $\Delta V_N = \Delta V_{EB}$.
- **$S_1$ is open**: node N connects only to the two capacitor plates and to the op-amp input, which draws no current. No charge can enter or leave N, so $Q_N$ is **conserved**. (Charge injection of the switches is neglected, as stated.)

### Step 4 — Charge conservation at node N

After the transition, with $V_N' = V_X'$ and new output $V_{out}'$:

$$Q_N' = C_2V_X' + C_1(V_X' - V_{out}').$$

Set $Q_N' = Q_N$:

$$C_2V_X' + C_1(V_X' - V_{out}') = C_2V_{EB}(I_1).$$

It is cleanest to work with changes. Subtract the first-phase charge written the same way, $C_2V_X + C_1(V_X - V_{out})$ with $V_X = V_{out}$, so $\Delta V_{out} = V_{out}' - V_{out}$:

$$
\begin{aligned}
C_2\,\Delta V_{EB} + C_1\left(\Delta V_{EB} - \Delta V_{out}\right) &= 0\\
C_1\,\Delta V_{out} &= (C_1 + C_2)\,\Delta V_{EB}\\
\Delta V_{out} &= \left(1 + \frac{C_2}{C_1}\right)\Delta V_{EB}.
\end{aligned}
$$

Substituting $\Delta V_{EB}$ from Step 2:

$$\Delta V_{out} = \left(1 + \frac{C_2}{C_1}\right)V_T\ln\left(1 + \frac{I_2}{I_1}\right).$$

Both factors are positive, so **the output rises**.

### Step 5 — Interpretation and the new output level

**Noninverting amplifier.** With $S_1$ open, the op amp, $C_1$ (from output to the − input) and $C_2$ (from the − input to ground) form a noninverting amplifier. Its gain for *changes* is $1 + Z_{C1}/Z_{C2} = 1 + (1/sC_1)/(1/sC_2) = 1 + C_2/C_1$, just as $1 + R_F/R_G$ for a resistive one. The input of this amplifier is the step $\Delta V_{EB}$ at X. The dc level $V_{EB}(I_1)$ already present is "remembered" by $C_2$ and is not amplified.

**New output:**

$$
\begin{aligned}
V_{out}' &= V_{out} + \Delta V_{out}\\
&= V_{EB}(I_1) + \Delta V_{EB} + \frac{C_2}{C_1}\Delta V_{EB}\\
&= V_{EB}(I_1 + I_2) + \frac{C_2}{C_1}V_T\ln\left(1 + \frac{I_2}{I_1}\right).
\end{aligned}
$$

This is a bandgap voltage: a $V_{EB}$ (negative TC) plus a scaled PTAT term (positive TC), obtained from a single transistor. With $\partial V_{EB}/\partial T \approx -1.5$ mV/K and $k/q \approx 0.087$ mV/K, zero TC requires $(C_2/C_1)\ln(1 + I_2/I_1) \approx 17.2$.

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

**Common mistake.** Answering $(C_2/C_1)\Delta V_{EB}$. That is only the extra term on top of the new $V_{EB}$. The output follows the $\Delta V_{EB}$ step of X itself *and* adds $(C_2/C_1)\Delta V_{EB}$, so the total change is $(1 + C_2/C_1)\Delta V_{EB}$.

**Common mistake.** Treating the stage as an inverting amplifier with gain $-C_2/C_1$, or using $C_1/C_2$. The input step is applied to the *noninverting* input (X), and $C_2$ goes from the inverting input to ground, so the gain is $+(1 + C_2/C_1)$. The capacitor in the feedback position ($C_1$) is in the denominator.

**Common mistake.** Writing $\Delta V_{EB} = V_T\ln(I_2/I_1)$. The transistor current changes from $I_1$ to $I_1 + I_2$ (both sources feed X), so the ratio is $(I_1 + I_2)/I_1 = 1 + I_2/I_1$.
