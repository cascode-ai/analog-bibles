# Detailed solution - R558

**Approach.** Derive the phase-2 output by charge conservation at the op amp's inverting input: it is a $V_{EB}$ plus a capacitor-scaled PTAT term $V_T\ln(1 + I_2/I_1)$. Setting its temperature derivative to zero fixes the product of the capacitor ratio and the logarithm of the current ratio, and shows what properties the currents must have.

### Step 1 — Output in phase 2

Call the op amp's inverting-input node N; it connects to ground through $C_2$ and to $V_{out}$ through both $C_1$ and $S_1$.

In phase 1, $Q_1$ carries only $I_1$, so $V_X = V_{EB}(I_1) = V_T\ln(I_1/I_S)$; $S_1$ makes the op amp a follower, so $V_N = V_{out} = V_{EB}(I_1)$. $C_1$ is shorted and $C_2$ holds $V_{EB}(I_1)$, so the charge at N is $Q_N = C_2V_{EB}(I_1)$.

In phase 2, $Q_1$ carries $I_1 + I_2$, so $V_X$ rises by

$$\Delta V_{EB} = V_T\ln\frac{I_1 + I_2}{I_S} - V_T\ln\frac{I_1}{I_S} = V_T\ln\left(1 + \frac{I_2}{I_1}\right).$$

The op amp (feedback through $C_1$) keeps $V_N = V_X$, so N rises by $\Delta V_{EB}$, and with $S_1$ open its charge is conserved (charge injection neglected):

$$
\begin{aligned}
C_2\,\Delta V_{EB} + C_1\left(\Delta V_{EB} - \Delta V_{out}\right) &= 0\\
\Delta V_{out} &= \left(1 + \frac{C_2}{C_1}\right)\Delta V_{EB}.
\end{aligned}
$$

Adding this to $V_{EB}(I_1)$ and using $V_{EB}(I_1) + \Delta V_{EB} = V_{EB}(I_1 + I_2)$:

$$V_{out,2} = V_{EB}(I_1 + I_2) + \frac{C_2}{C_1}V_T\ln\left(1 + \frac{I_2}{I_1}\right):$$

a CTAT junction voltage plus a capacitor ratio times a PTAT voltage, a bandgap built from a single junction.

### Step 2 — Temperature derivative and zero-TC condition

$V_{EB}(I_1 + I_2)$ has a TC of about −1.5 mV/K and $V_T$ one of $k/q = 86.17\ \mu$V/K. $C_2/C_1$ (same layers) is nearly temperature-independent, and $I_2/I_1$ is **required** to be (Step 3). So

$$\frac{\partial V_{out,2}}{\partial T} = \frac{\partial V_{EB}}{\partial T} + \frac{C_2}{C_1}\cdot\frac{k}{q}\ln\left(1 + \frac{I_2}{I_1}\right).$$

Setting it to zero with $\partial V_{EB}/\partial T = -1.5$ mV/K:

$$\frac{C_2}{C_1}\cdot\frac{k}{q}\ln\left(1 + \frac{I_2}{I_1}\right) = 1.5\ \mathrm{mV/K},$$

$$\frac{C_2}{C_1}\ln\left(1 + \frac{I_2}{I_1}\right) = \frac{1.5\times10^{-3}\ \mathrm{V/K}}{8.617\times10^{-5}\ \mathrm{V/K}} \approx 17.4 .$$

Only the product matters, so one ratio is a free choice. **Example:** $I_2 = 7I_1$, convenient with a mirror of eight identical unit transistors (one for $I_1$, seven for $I_2$):

$$
\begin{aligned}
\ln\left(1 + \frac{I_2}{I_1}\right) &= \ln 8 = 2.079,\\
\frac{C_2}{C_1} &= \frac{17.4}{2.079} = 8.37 \approx 8.4 .
\end{aligned}
$$

The output level at 300 K ($V_T = 25.85$ mV) is

$$
\begin{aligned}
\frac{C_2}{C_1}V_T\ln\left(1 + \frac{I_2}{I_1}\right) &= 17.4\times25.85\ \mathrm{mV} = 0.45\ \mathrm{V},\\
V_{out,2} &\approx V_{EB} + 0.45\ \mathrm{V} \approx 0.75 + 0.45 = 1.2\ \mathrm{V},
\end{aligned}
$$

the familiar bandgap value, close to $E_g/q$.

### Step 3 — Requirements on the currents and capacitors

1. **$I_2/I_1$ must be temperature-independent**, so that the PTAT term is exactly proportional to $T$. Derive both currents from the same reference through a mirror, so that the ratio is set by geometry (for example 7:1 unit transistors).
2. **The absolute currents do not set the PTAT term.** They only set the operating point of $V_{EB}$ (its value and, slightly, its TC). If they are PTAT, $V_{EB}$ has a slightly less negative TC (by about $k/q$), and the product 17.4 is fine-tuned accordingly, typically in simulation.
3. **Capacitor ratio.** Build $C_2$ and $C_1$ from unit capacitors so that the ratio is accurate and tracks over temperature and process. The large ratio (≈ 8.4) also sets the gain $1 + C_2/C_1$ that the op amp must deliver accurately.

**Equivalent form.** $V_{out,2} = V_{EB}(I_1) + (1 + C_2/C_1)V_T\ln(1 + I_2/I_1)$, with the condition $(1 + C_2/C_1)(k/q)\ln(1 + I_2/I_1) = -\partial V_{EB}(I_1)/\partial T$. This is consistent, because the lower $V_{EB}(I_1)$ has a TC more negative by $(k/q)\ln(1 + I_2/I_1) \approx 0.18$ mV/K. Applying −1.5 mV/K to $V_{EB}(I_1)$ instead would give $C_2/C_1 \approx 7.4$ rather than 8.4 for the same current ratio; "zero TC when $S_1$ is off" refers to the phase-2 junction voltage $V_{EB}(I_1 + I_2)$.

**Timing.** The zero-TC voltage exists only in phase 2 (in phase 1 the output returns to $V_{EB}(I_1)$), so the output is sampled at the end of phase 2.

### Result

In phase 2,

$$V_{out} = V_{EB}(I_1 + I_2) + \frac{C_2}{C_1}V_T\ln\left(1 + \frac{I_2}{I_1}\right).$$

Choose

$$\frac{C_2}{C_1}\frac{k}{q}\ln\left(1 + \frac{I_2}{I_1}\right) = 1.5\ \mathrm{mV/K}, \qquad\text{i.e.}\qquad \frac{C_2}{C_1}\ln\left(1 + \frac{I_2}{I_1}\right) \approx 17.4\quad (k/q = 86.17\ \mu\mathrm{V/K}).$$

Example: $I_2 = 7I_1$ ($\ln 8 = 2.08$) and $C_2 \approx 8.4C_1$, giving $V_{out} \approx V_{EB} + 17.4V_T \approx V_{EB} + 0.45\ \mathrm{V} \approx 1.2$ V. The ratio $I_2/I_1$ must be temperature-independent (both currents mirrored from the same reference), so that the second term is exactly PTAT. Capacitor ratios are accurate and nearly temperature-independent. The absolute currents only set the operating point of $V_{EB}$.

**Common mistake.** Writing the PTAT term as $V_T\ln(I_2/I_1)$, as if $I_2$ replaced $I_1$. In phase 2 both sources feed $Q_1$, so the logarithm is $\ln(1 + I_2/I_1)$; with $I_2 = 7I_1$, $\ln 7 = 1.95$ instead of $\ln 8 = 2.08$, a 6 % error in the PTAT term.

**Common mistake.** Inverting the capacitor ratio, i.e. using $C_1/C_2 \approx 8.4$. The PTAT term is then about 70 times too small and the output stays strongly CTAT; $C_2$ must be the larger one, because the gain applied to $\Delta V_{EB}$ is $1 + C_2/C_1$.

**Common mistake.** Letting the current ratio drift with temperature (for example, one current from a PTAT source and the other from a resistor), or thinking the absolute currents set the PTAT term. Only the *ratio* enters, and it must be constant.
