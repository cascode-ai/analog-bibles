# Detailed solution - R358

**Approach.** Recall exactly what Miller's theorem states and under which condition it holds. Then look at what the thermal noise of a floating resistor physically is: one current source between the two nodes. The two do not fit together, for three reasons. A simple example shows that the Miller shortcut can be wrong by a large factor. We finish with the correct method.

### Step 1 — What Miller's theorem says

Let an impedance $Z$ connect two nodes X and Y, and suppose that, for the excitation being analysed, the circuit sets $V_Y = A\,V_X$. The current flowing from X to Y through $Z$ is

$$I_Z = \frac{V_X - V_Y}{Z} = \frac{V_X(1 - A)}{Z}.$$

- **Seen from X**, this is the current that a grounded impedance $Z_1 = \dfrac{Z}{1 - A}$ would draw: $V_X/Z_1 = V_X(1-A)/Z$.
- **Seen from Y**, the current that $Z$ draws out of Y is $(V_Y - V_X)/Z = V_Y(1 - 1/A)/Z$ (using $V_X = V_Y/A$). This is exactly the current that a grounded impedance $Z_2 = \dfrac{Z}{1 - 1/A}$ would draw: $V_Y/Z_2$.

So $Z$ can be replaced by $Z_1$ from X to ground and $Z_2$ from Y to ground, **provided that $A$ is the actual ratio $V_Y/V_X$ produced by the excitation under study**. The theorem is a statement about currents and voltages for one particular excitation; it says nothing about the internals of $Z$.

### Step 2 — The noise of a floating resistor

A resistor $R$ between X and Y has thermal noise that can be modelled as a current source $I_n$ in parallel with it, with $\overline{I_n^2} = 4kT/R$ ($k$ is Boltzmann's constant and $T$ the absolute temperature). Equivalently, it is a voltage source of PSD $4kTR$ in series with it.

The key features of this source:

1. It sits **inside** the element being "Millerized".
2. It is a **single** current that leaves one node and enters the other. Its effects at X and at Y are equal in magnitude, opposite in sign and **fully correlated**.
3. Its strength is set by the physical resistance $R$ and the temperature, not by the voltage across the resistor or the current it carries.

### Step 3 — Why the theorem cannot be used

**(a) The ratio $A$ belongs to a different excitation.** $A$ is normally obtained from the signal path (for example the gain from X to Y). When the excitation is the resistor's own noise, which injects current into *both* X and Y, the circuit produces a different ratio $V_Y/V_X$ in general. The precondition of the theorem ($V_Y = AV_X$ for *this* excitation) is not met.

**(b) Correlation is lost.** Splitting $R$ into two grounded resistors $Z_1$ and $Z_2$ and giving each one its own noise generator $4kT/Z_1$ and $4kT/Z_2$ replaces one source, which acts on both nodes with perfect (negative) correlation, by two *independent* sources. The output noise then comes out wrong, because the cross terms that the correlation would produce are discarded.

**(c) Miller impedances are not physical resistors.** $Z_1 = R/(1 - A)$ and $Z_2 = R/(1 - 1/A)$ are mathematical equivalents for the signal current. They are not pieces of resistive material in thermal equilibrium, so there is no reason for them to generate $4kT/Z$ of noise. Their values depend on $A$: they can be very small (large $|A|$), very large, or even **negative** (for $A > 1$, $Z_1 < 0$). A negative "resistor" would have negative noise power, which is meaningless.

### Step 4 — A concrete example: inverting amplifier with feedback resistor

Take an ideal voltage amplifier of gain $-A_0$ (infinite input impedance, zero output impedance) from X to Y, a feedback resistor $R_F$ from X to Y, and a source resistance $R_s$ from X to ground. Consider only the noise of $R_F$, as a current $I_{nF}$ from X to Y.

<!-- diagram: diagram-01.cir -->

**Correct analysis.** $Y$ is driven by the amplifier with zero output impedance, so the part of $I_{nF}$ entering Y is absorbed. KCL at X, with $V_Y = -A_0V_X$ (current arriving from $R_s$ = current leaving through $R_F$ and $I_{nF}$):

$$
\begin{aligned}
-\frac{V_X}{R_s} &= \frac{V_X - V_Y}{R_F} + I_{nF} = \frac{(1 + A_0)V_X}{R_F} + I_{nF}\\
V_X &= -\frac{R_sR_F}{R_F + (1 + A_0)R_s}\,I_{nF}.
\end{aligned}
$$

The output is $V_Y = -A_0V_X$, so

$$\overline{V_{Y}^2}\Big|_{correct} = A_0^2\,\frac{R_s^2R_F^2}{\left[R_F + (1 + A_0)R_s\right]^2}\cdot\frac{4kT}{R_F}.$$

For $A_0 \to \infty$ this tends to $4kTR_F$, the well-known result that the feedback resistor's noise appears at the output of an inverting amplifier with unity weight.

**Miller analysis (incorrect).** With $A = -A_0$, the theorem gives $Z_1 = R_F/(1 + A_0)$ from X to ground. For the *signal*, this is correct here. Now give $Z_1$ "its" thermal noise current $4kT(1 + A_0)/R_F$. (The noise of $Z_2$, at the stiff node Y, does nothing.) That current flows into $R_s\parallel Z_1 = R_sR_F/[R_F + (1 + A_0)R_s]$, so

$$\overline{V_{Y}^2}\Big|_{Miller} = A_0^2\,\frac{R_s^2R_F^2}{\left[R_F + (1 + A_0)R_s\right]^2}\cdot\frac{4kT(1 + A_0)}{R_F} = (1 + A_0)\,\overline{V_{Y}^2}\Big|_{correct}.$$

The Miller shortcut **overestimates the noise power by the factor $1 + A_0$**, for example by 101 times for $A_0 = 100$. As $A_0 \to \infty$ it predicts infinite noise instead of $4kTR_F$.

**What went wrong.** The Miller resistor $R_F/(1 + A_0)$ correctly carries the same *signal* current as $R_F$: the voltage across $R_F$ is $(1 + A_0)$ times $V_X$. But the physical resistor's noise current is still only $4kT/R_F$, no matter how large the voltage across it is. Assigning thermal noise to the small Miller resistor multiplies the noise power by $1 + A_0$.

### Step 5 — The correct procedure

Keep the resistor floating. Model its noise as a current source between X and Y (or a voltage source in series with it), and compute its effect on the output by ordinary circuit analysis: KCL/KVL with superposition, or the input-shorted / input-open methods for input-referred noise. Miller's theorem may still be used to estimate *signal* quantities, such as input impedance or a pole, but not to generate the noise sources.

### Result

Miller's theorem cannot be applied to the noise of a floating resistor because:

- it is valid only for the excitation that establishes the ratio $A = V_Y/V_X$. The resistor's own noise is a different excitation, located inside the element and driving both nodes, so the ratio does not apply;
- the noise is one current that leaves one node and enters the other (fully correlated, opposite signs). Two grounded Miller resistors with independent noise generators lose this correlation;
- the Miller impedances $Z/(1 - A)$ and $Z/(1 - 1/A)$ are mathematical equivalents, not physical resistors at temperature $T$. They can be tiny, huge or negative, so $4kT/Z_{Miller}$ is meaningless. In the inverting-amplifier example the error is a factor $1 + A_0$ in noise power.

The noise must be modelled as a current (or voltage) source in the floating resistor itself and analysed directly.

**Common mistake.** Attaching $4kT(1 - A)/R$ of noise to the input-side Miller resistor, i.e. treating it as a real resistor. A resistor's thermal noise depends only on its physical resistance and temperature; the Miller resistor is a bookkeeping device for the signal current, and with large $|A|$ the error is huge.

**Common mistake.** Saying that the noise current "splits between the two nodes according to the gain ratio". The noise current of a floating resistor does not split: the full current leaves one node and the full current enters the other.

**Common mistake.** Answering only that "Miller's theorem is for signals, not noise" without a reason. The actual reasons are the dependence of $A$ on the excitation, the loss of correlation, and the non-physical nature of the Miller impedances.
