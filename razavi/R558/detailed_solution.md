# Detailed solution - R558

**Approach.** First derive the phase-2 output, using charge conservation at the op amp's inverting input. It turns out to be a $V_{EB}$ plus a capacitor-scaled PTAT term $V_T\ln(1 + I_2/I_1)$. Then differentiate with respect to temperature and set the result to zero. This fixes the product of the capacitor ratio and the logarithm of the current ratio, and it shows what properties the currents must have.

### Step 1 — Output in phase 1

Call the op amp's inverting input node N. It connects to ground through $C_2$, to $V_{out}$ through $C_1$, and to $V_{out}$ through $S_1$.

In phase 1 ($S_1$ on, $S_2$ off):

- $Q_1$ carries only $I_1$. With $I_C = I_S\exp(V_{EB}/V_T)$, base grounded and base current neglected, $V_X = V_{EB}(I_1) = V_T\ln(I_1/I_S)$.
- $S_1$ makes the op amp a unity-gain follower, so $V_N = V_{out} = V_{EB}(I_1)$.
- $C_1$ is shorted (zero voltage) and $C_2$ holds $V_{EB}(I_1)$. The charge on node N is $Q_N = C_2V_{EB}(I_1)$.

### Step 2 — Output in phase 2

In phase 2 ($S_1$ off, $S_2$ on):

- $Q_1$ carries $I_1 + I_2$, so $V_X$ rises by
$$\Delta V_{EB} = V_T\ln\frac{I_1 + I_2}{I_S} - V_T\ln\frac{I_1}{I_S} = V_T\ln\left(1 + \frac{I_2}{I_1}\right).$$
- The ideal op amp (feedback through $C_1$) keeps $V_N = V_X$, so N also rises by $\Delta V_{EB}$.
- With $S_1$ open, N is floating and its charge is conserved (switch charge injection neglected).

**Charge conservation at N** (the total change of charge on the plates at N is zero):

$$
\begin{aligned}
C_2\,\Delta V_{EB} + C_1\left(\Delta V_{EB} - \Delta V_{out}\right) &= 0\\
\Delta V_{out} &= \left(1 + \frac{C_2}{C_1}\right)\Delta V_{EB}.
\end{aligned}
$$

Add this to the phase-1 output $V_{EB}(I_1)$, and use $V_{EB}(I_1) + \Delta V_{EB} = V_{EB}(I_1 + I_2)$:

$$V_{out,2} = V_{EB}(I_1 + I_2) + \frac{C_2}{C_1}V_T\ln\left(1 + \frac{I_2}{I_1}\right).$$

The first term falls with temperature (complementary to absolute temperature, CTAT). The second is a capacitor ratio times a PTAT voltage. This is a bandgap structure built from a single junction.

### Step 3 — Temperature derivative

Which quantities depend on temperature?

- $V_{EB}(I_1 + I_2)$: TC $\approx -1.5$ mV/K (given).
- $V_T = kT/q$: TC $= k/q = 86.17\ \mu$V/K.
- $C_2/C_1$: a ratio of two capacitors built from the same layers, so it is (very nearly) temperature-independent.
- $I_2/I_1$: we **require** it to be temperature-independent (see Step 5).

Then, differentiating term by term:

$$\frac{\partial V_{out,2}}{\partial T} = \frac{\partial V_{EB}}{\partial T} + \frac{C_2}{C_1}\cdot\frac{k}{q}\ln\left(1 + \frac{I_2}{I_1}\right).$$

### Step 4 — Zero-TC condition

Set the derivative to zero with $\partial V_{EB}/\partial T = -1.5$ mV/K:

$$\frac{C_2}{C_1}\cdot\frac{k}{q}\ln\left(1 + \frac{I_2}{I_1}\right) = 1.5\ \mathrm{mV/K}.$$

Divide by $k/q$:

$$\frac{C_2}{C_1}\ln\left(1 + \frac{I_2}{I_1}\right) = \frac{1.5\times10^{-3}\ \mathrm{V/K}}{8.617\times10^{-5}\ \mathrm{V/K}} \approx 17.4 .$$

Only the product matters, so one of the two ratios is a free choice.

**Example.** Choose $I_2 = 7I_1$, which is convenient with a mirror of eight identical unit transistors (one for $I_1$, seven for $I_2$):

$$
\begin{aligned}
\ln\left(1 + \frac{I_2}{I_1}\right) &= \ln 8 = 2.079,\\
\frac{C_2}{C_1} &= \frac{17.4}{2.079} = 8.37 \approx 8.4 .
\end{aligned}
$$

**Output level** at 300 K ($V_T = 25.85$ mV):

$$
\begin{aligned}
\frac{C_2}{C_1}V_T\ln\left(1 + \frac{I_2}{I_1}\right) &= 17.4\times25.85\ \mathrm{mV} = 0.45\ \mathrm{V},\\
V_{out,2} &\approx V_{EB} + 0.45\ \mathrm{V} \approx 0.75 + 0.45 = 1.2\ \mathrm{V}.
\end{aligned}
$$

This is the familiar bandgap value, close to $E_g/q$.

### Step 5 — Requirements on the currents and capacitors

1. **$I_2/I_1$ must be temperature-independent.** The PTAT term is exactly proportional to $T$ only if the argument of the logarithm is constant. Derive $I_1$ and $I_2$ from the same reference current through a current mirror, so that their ratio is set by device geometry (for example 7:1 unit transistors), not by their temperature dependence.
2. **The absolute currents do not set the PTAT term.** They only set the operating point of $V_{EB}$, i.e. its value and, slightly, its TC. If the currents themselves are PTAT, $V_{EB}$ has a slightly less negative TC (by about $k/q$), and the ratio product (17.4) is fine-tuned accordingly, typically in simulation.
3. **Capacitor ratio.** Build $C_2$ and $C_1$ from unit capacitors so that the ratio is accurate and tracks over temperature and process. The large ratio (≈ 8.4) also sets the gain $1 + C_2/C_1$ that the op amp must deliver with good accuracy.

**Equivalent form.** The same output can be written as $V_{out,2} = V_{EB}(I_1) + (1 + C_2/C_1)V_T\ln(1 + I_2/I_1)$. The condition then reads $(1 + C_2/C_1)(k/q)\ln(1 + I_2/I_1) = -\partial V_{EB}(I_1)/\partial T$. This is consistent, because $V_{EB}(I_1)$ is lower than $V_{EB}(I_1 + I_2)$ and so has a slightly more negative TC, by $(k/q)\ln(1 + I_2/I_1) \approx 0.18$ mV/K. Applying −1.5 mV/K to $V_{EB}(I_1)$ instead of $V_{EB}(I_1 + I_2)$ would give $C_2/C_1 \approx 7.4$ rather than 8.4 for the same current ratio. The problem's "zero TC when $S_1$ is off" refers to the phase-2 junction voltage $V_{EB}(I_1 + I_2)$.

**Timing.** The zero-TC voltage exists only in phase 2. In phase 1 the output returns to $V_{EB}(I_1)$, so in practice the output is sampled at the end of phase 2.

### Result

In phase 2,

$$V_{out} = V_{EB}(I_1 + I_2) + \frac{C_2}{C_1}V_T\ln\left(1 + \frac{I_2}{I_1}\right).$$

Choose

$$\frac{C_2}{C_1}\frac{k}{q}\ln\left(1 + \frac{I_2}{I_1}\right) = 1.5\ \mathrm{mV/K}, \qquad\text{i.e.}\qquad \frac{C_2}{C_1}\ln\left(1 + \frac{I_2}{I_1}\right) \approx 17.4\quad (k/q = 86.17\ \mu\mathrm{V/K}).$$

Example: $I_2 = 7I_1$ ($\ln 8 = 2.08$) and $C_2 \approx 8.4C_1$, giving $V_{out} \approx V_{EB} + 17.4V_T \approx V_{EB} + 0.45\ \mathrm{V} \approx 1.2$ V. The ratio $I_2/I_1$ must be temperature-independent (both currents mirrored from the same reference), so that the second term is exactly PTAT. Capacitor ratios are accurate and nearly temperature-independent. The absolute currents only set the operating point of $V_{EB}$.

**Common mistake.** Writing the PTAT term as $V_T\ln(I_2/I_1)$, as if $I_2$ replaced $I_1$. In phase 2 both sources feed $Q_1$, so the current goes from $I_1$ to $I_1 + I_2$ and the logarithm is $\ln(1 + I_2/I_1)$. With $I_2 = 7I_1$, $\ln 7 = 1.95$ instead of $\ln 8 = 2.08$: a 6 % error in the PTAT term.

**Common mistake.** Inverting the capacitor ratio, i.e. using $C_1/C_2 \approx 8.4$. That makes the PTAT term about 70 times too small, and the output stays strongly CTAT. The capacitor from the inverting input to ground ($C_2$) must be the larger one, because the gain applied to $\Delta V_{EB}$ is $1 + C_2/C_1$.

**Common mistake.** Thinking that the absolute values of $I_1$ and $I_2$ set the size of the PTAT term, or letting their ratio drift with temperature (for example, one current from a PTAT source and the other from a resistor). Only the *ratio* enters the PTAT term, and it must be constant for that term to be proportional to $T$.
