# Detailed solution - R358

**Approach.** Compare the condition under which Miller's theorem holds with what the thermal noise of a floating resistor physically is, a single current source between the two nodes. They do not fit together, for three reasons; a simple example shows that the Miller shortcut can be wrong by a large factor.

### Step 1 — What Miller's theorem says

If an impedance $Z$ connects nodes X and Y and the excitation under study sets $V_Y = A\,V_X$, the current through $Z$,

$$I_Z = \frac{V_X - V_Y}{Z} = \frac{V_X(1 - A)}{Z},$$

is the same as that drawn from X by a grounded $Z_1 = \dfrac{Z}{1 - A}$, and the current drawn from Y is that of a grounded $Z_2 = \dfrac{Z}{1 - 1/A}$. The replacement is valid **only if $A$ is the actual ratio $V_Y/V_X$ produced by that excitation**; the theorem concerns terminal currents and voltages, not the internals of $Z$.

### Step 2 — The noise of a floating resistor

A resistor $R$ between X and Y has a noise current $I_n$ in parallel, $\overline{I_n^2} = 4kT/R$ (equivalently a series voltage of PSD $4kTR$). This source:

1. sits **inside** the element that would be "Millerized";
2. is a **single** current that leaves one node and enters the other, so its effects at X and Y are equal, opposite and **fully correlated**;
3. has a strength set only by $R$ and the temperature, not by the voltage across the resistor.

### Step 3 — Why the theorem cannot be used

**(a) The ratio $A$ belongs to a different excitation.** $A$ is normally the signal gain from X to Y. The resistor's own noise injects current into *both* nodes and in general produces a different $V_Y/V_X$, so the theorem's precondition is not met.

**(b) Correlation is lost.** Giving the two grounded resistors $Z_1$ and $Z_2$ their own generators $4kT/Z_1$ and $4kT/Z_2$ replaces one perfectly (negatively) correlated source by two *independent* ones, discarding the cross terms.

**(c) Miller impedances are not physical resistors.** $Z_1 = R/(1 - A)$ and $Z_2 = R/(1 - 1/A)$ are equivalents for the signal current, not resistive material in thermal equilibrium. They can be very small (large $|A|$), very large, or even **negative** ($Z_1 < 0$ for $A > 1$), and a negative "resistor" would have negative noise power.

### Step 4 — A concrete example: inverting amplifier with feedback resistor

Take an ideal voltage amplifier of gain $-A_0$ (infinite input impedance, zero output impedance) from X to Y, a feedback resistor $R_F$ from X to Y, and a source resistance $R_s$ from X to ground, and consider only the noise of $R_F$, as a current $I_{nF}$ from X to Y.

<!-- diagram: diagram-01.cir -->

**Correct analysis.** The stiff node Y absorbs the part of $I_{nF}$ entering it. KCL at X with $V_Y = -A_0V_X$:

$$
\begin{aligned}
-\frac{V_X}{R_s} &= \frac{V_X - V_Y}{R_F} + I_{nF} = \frac{(1 + A_0)V_X}{R_F} + I_{nF}\\
V_X &= -\frac{R_sR_F}{R_F + (1 + A_0)R_s}\,I_{nF}.
\end{aligned}
$$

With $V_Y = -A_0V_X$,

$$\overline{V_{Y}^2}\Big|_{correct} = A_0^2\,\frac{R_s^2R_F^2}{\left[R_F + (1 + A_0)R_s\right]^2}\cdot\frac{4kT}{R_F},$$

which tends to $4kTR_F$ for $A_0 \to \infty$, the well-known unity-weight output noise of the feedback resistor.

**Miller analysis (incorrect).** With $A = -A_0$, $Z_1 = R_F/(1 + A_0)$ from X to ground, which is correct for the *signal*. Giving it "its" noise current $4kT(1 + A_0)/R_F$ (the noise of $Z_2$, at the stiff node Y, does nothing), flowing into $R_s\parallel Z_1 = R_sR_F/[R_F + (1 + A_0)R_s]$:

$$\overline{V_{Y}^2}\Big|_{Miller} = A_0^2\,\frac{R_s^2R_F^2}{\left[R_F + (1 + A_0)R_s\right]^2}\cdot\frac{4kT(1 + A_0)}{R_F} = (1 + A_0)\,\overline{V_{Y}^2}\Big|_{correct}.$$

The shortcut **overestimates the noise power by $1 + A_0$**, for example 101 times for $A_0 = 100$, and predicts infinite noise instead of $4kTR_F$ as $A_0 \to \infty$. The Miller resistor correctly carries the signal current, since the voltage across $R_F$ is $(1 + A_0)V_X$, but the physical resistor's noise current is still only $4kT/R_F$.

### Step 5 — The correct procedure

Keep the resistor floating, model its noise as a current between X and Y (or a series voltage), and find its effect on the output by direct analysis (KCL/KVL with superposition, or the input-shorted / input-open methods). Miller's theorem remains usable for *signal* quantities such as input impedance or a pole, but not for generating noise sources.

### Result

Miller's theorem cannot be applied to the noise of a floating resistor because:

- it is valid only for the excitation that establishes the ratio $A = V_Y/V_X$. The resistor's own noise is a different excitation, located inside the element and driving both nodes, so the ratio does not apply;
- the noise is one current that leaves one node and enters the other (fully correlated, opposite signs). Two grounded Miller resistors with independent noise generators lose this correlation;
- the Miller impedances $Z/(1 - A)$ and $Z/(1 - 1/A)$ are mathematical equivalents, not physical resistors at temperature $T$. They can be tiny, huge or negative, so $4kT/Z_{Miller}$ is meaningless. In the inverting-amplifier example the error is a factor $1 + A_0$ in noise power.

The noise must be modelled as a current (or voltage) source in the floating resistor itself and analysed directly.

**Common mistake.** Attaching $4kT(1 - A)/R$ of noise to the input-side Miller resistor, as if it were a real resistor. Thermal noise depends only on the physical resistance and temperature; with large $|A|$ the error is huge.

**Common mistake.** Saying that the noise current "splits between the two nodes according to the gain ratio". The full current leaves one node and the full current enters the other.

**Common mistake.** Answering only that "Miller's theorem is for signals, not noise" without a reason: the dependence of $A$ on the excitation, the loss of correlation, and the non-physical Miller impedances.
