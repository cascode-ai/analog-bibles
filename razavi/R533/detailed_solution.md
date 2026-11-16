# Detailed solution - R533

**Approach.** Work with the single-ended half circuit. Using the hint, the zero is the complex frequency at which the output is zero even though the input is not. Setting $V_{out} = 0$ in the KCL at the output node gives the zero in one line. We then confirm it, and its half-plane, by deriving the full closed-loop transfer function from KCL at X and at the output.

### Step 1 — Half circuit and model

By symmetry, analyse one half of the fully differential amplifier. The input $V_{in}$ drives node X through $C_1$; $C_2$ connects X to the output; $C_L$ loads the output.

**Op-amp model.** A voltage-controlled current source $G_mV_X$ pulls current *out of* the output node to ground, so a positive $V_X$ makes the output go negative (the op amp inverts). In parallel there is the output resistance $R_{out}$ from the output to ground. The low-frequency open-loop gain is $V_{out}/V_X = -G_mR_{out}$.

The model has two nodes:
- **X**, connected to the input through $C_1$ and to the output through $C_2$ (the op amp input draws no current);
- **out**, connected to X through $C_2$ and to ground through the source $G_mV_X$, $R_{out}$ and $C_L$.

<!-- diagram: diagram-01.cir -->

### Step 2 — The zero from the hint ($V_{out} = 0$)

At the zero frequency $s_z$, the output voltage is zero while $V_X$ is not. With $V_{out} = 0$:
- no current flows in $R_{out}$ or in $C_L$ (both have zero voltage across them);
- the current arriving at the output through $C_2$ is $sC_2(V_X - V_{out}) = sC_2V_X$;
- the current source removes $G_mV_X$.

**KCL at the output node** (current in = current out):

$$sC_2V_X = G_mV_X .$$

Since $V_X \ne 0$ (from KCL at X with $V_{out} = 0$, $V_X = V_{in}\,C_1/(C_1 + C_2)$), divide by $V_X$:

$$s_z = +\frac{G_m}{C_2} .$$

The zero is **real and positive**: a right-half-plane zero at $\omega_z = G_m/C_2$.

**Interpretation.** The signal at X reaches the output by two paths with opposite signs:
- through the op amp, which *pulls* current $G_mV_X$ out of the output (inverting);
- directly through $C_2$, which *pushes* current $sC_2V_X$ into the output (non-inverting feedforward).

At $s = G_m/C_2$ the two currents cancel exactly, and the output stays at zero. The position depends only on $G_m$ and $C_2$, not on $C_1$, $C_L$ or $R_{out}$.

### Step 3 — Full transfer function: KCL at X

The current through $C_1$ into X equals the current through $C_2$ out of X:

$$(V_{in} - V_X)\,sC_1 = (V_X - V_{out})\,sC_2 .$$

Cancel $s$ and solve for $V_X$:

$$V_X(C_1 + C_2) = C_1V_{in} + C_2V_{out}\quad\Longrightarrow\quad V_X = \frac{C_1V_{in} + C_2V_{out}}{C_1 + C_2}. \tag{1}$$

### Step 4 — Full transfer function: KCL at the output

The current arriving through $C_2$ equals the current leaving through the source, $R_{out}$ and $C_L$:

$$(V_X - V_{out})\,sC_2 = G_mV_X + V_{out}\left(\frac{1}{R_{out}} + sC_L\right).$$

Group the $V_X$ and $V_{out}$ terms:

$$V_X\,(sC_2 - G_m) = V_{out}\left(\frac{1}{R_{out}} + sC_L + sC_2\right). \tag{2}$$

### Step 5 — Combine and solve

Substitute (1) into (2) and multiply by $(C_1 + C_2)$:

$$(C_1V_{in} + C_2V_{out})(sC_2 - G_m) = V_{out}(C_1 + C_2)\left(\frac{1}{R_{out}} + sC_L + sC_2\right).$$

Move all $V_{out}$ terms to the right:

$$C_1V_{in}(sC_2 - G_m) = V_{out}\left[(C_1 + C_2)\left(\frac{1}{R_{out}} + sC_L + sC_2\right) - C_2(sC_2 - G_m)\right].$$

Expand the bracket. The $s C_2^2$ terms cancel:

$$
\begin{aligned}
[\ldots] &= \frac{C_1 + C_2}{R_{out}} + s(C_1 + C_2)C_L + sC_1C_2 + sC_2^2 - sC_2^2 + G_mC_2\\
&= G_mC_2 + \frac{C_1 + C_2}{R_{out}} + s\left[C_L(C_1 + C_2) + C_1C_2\right].
\end{aligned}
$$

Therefore

$$\boxed{\frac{V_{out}}{V_{in}} = -\frac{C_1\,(G_m - sC_2)}{G_mC_2 + \dfrac{C_1 + C_2}{R_{out}} + s\left[C_L(C_1 + C_2) + C_1C_2\right]}}$$

### Step 6 — Reading off the zero, the DC gain and the pole

**Zero:** the numerator vanishes at $G_m - sC_2 = 0$, i.e. $s_z = +G_m/C_2$, the same as in Step 2. It lies in the right half plane: the numerator factor is $(1 - s/\omega_z)$ rather than $(1 + s/\omega_z)$.

**DC gain:** set $s = 0$ and divide numerator and denominator by $G_mC_2$:

$$\frac{V_{out}}{V_{in}}\bigg|_{s=0} = -\frac{C_1}{C_2}\cdot\frac{1}{1 + \dfrac{C_1 + C_2}{C_2\,G_mR_{out}}} \approx -\frac{C_1}{C_2},$$

the familiar capacitive-amplifier gain, reduced slightly by the finite op-amp gain $G_mR_{out}$.

**Pole** (for completeness): $s_p = -\dfrac{G_mC_2 + (C_1 + C_2)/R_{out}}{C_L(C_1 + C_2) + C_1C_2} \approx -\dfrac{G_m\,\beta}{C_L + C_1C_2/(C_1 + C_2)}$, where $\beta = C_2/(C_1 + C_2)$ is the feedback factor.

Neglecting the small $1/R_{out}$ term, the ratio of the zero to the pole magnitude is

$$\left|\frac{s_z}{s_p}\right| \approx \frac{G_m}{C_2}\cdot\frac{C_L(C_1 + C_2) + C_1C_2}{G_mC_2} = \frac{C_L(C_1 + C_2) + C_1C_2}{C_2^2},$$

which is large (for example 9 for $C_1 = 4C_2$ and $C_L = C_2$). The zero therefore lies well above the closed-loop bandwidth, where it adds phase lag.

Adding an op-amp input capacitance at X changes (1) and the pole, but not the output-node condition of Step 2, so the zero stays at $G_m/C_2$.

### Result

The closed-loop transfer function has a **right-half-plane zero at**

$$s_z = +\frac{G_m}{C_2},\qquad \omega_z = \frac{G_m}{C_2},$$

independent of $C_1$, $C_L$ and $R_{out}$. At this frequency the feedforward current through $C_2$, $sC_2V_X$, exactly equals the op amp's current $G_mV_X$, so no current is left for $R_{out}$ and $C_L$ and $V_{out} = 0$. The full result is

$$\frac{V_{out}}{V_{in}} = -\frac{C_1(G_m - sC_2)}{G_mC_2 + (C_1 + C_2)/R_{out} + s\left[C_L(C_1 + C_2) + C_1C_2\right]} .$$

**Common mistake.** Placing the zero in the left half plane. The feedforward path through $C_2$ is non-inverting while the op amp path is inverting, so they cancel at a *positive* real $s$. The numerator is $G_m - sC_2$, not $G_m + sC_2$.

**Common mistake.** Getting $G_m/(C_1 + C_2)$, $G_m/C_L$ or $G_m/C_1$ by mixing up which capacitor carries the feedforward current. Only $C_2$ connects X directly to the output. At the zero no current flows in $C_L$, and $C_1$ only sets $V_X$.

**Common mistake.** Answering "no zero" because the op amp model has none. The zero is created by the feedback capacitor bridging the op amp's input and output, not by the op amp itself.
