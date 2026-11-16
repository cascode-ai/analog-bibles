# Detailed solution - R533

**Approach.** In the single-ended half circuit, the zero is the frequency at which the output is zero although the input is not. Setting $V_{out} = 0$ in the KCL at the output gives it in one line; the full closed-loop transfer function from KCL at X and at the output confirms it and its half-plane.

### Step 1 — Half circuit and model

The input drives X through $C_1$, $C_2$ connects X to the output, and the output node carries the op amp's $G_mV_X$ (drawn to ground, so the op amp inverts: $V_{out}/V_X = -G_mR_{out}$ at low frequency), $R_{out}$ and $C_L$. The op amp input draws no current.

<!-- diagram: diagram-01.cir -->

### Step 2 — The zero from the hint ($V_{out} = 0$)

With $V_{out} = 0$, no current flows in $R_{out}$ or $C_L$, the current arriving through $C_2$ is $sC_2(V_X - V_{out}) = sC_2V_X$, and the source removes $G_mV_X$. KCL at the output:

$$sC_2V_X = G_mV_X .$$

Since $V_X \ne 0$ (KCL at X with $V_{out} = 0$ gives $V_X = V_{in}\,C_1/(C_1 + C_2)$),

$$s_z = +\frac{G_m}{C_2} ,$$

a **real, positive** (right-half-plane) zero at $\omega_z = G_m/C_2$. The signal at X reaches the output through the op amp, which *pulls* $G_mV_X$ out of the output, and directly through $C_2$, which *pushes* $sC_2V_X$ in; at $s = G_m/C_2$ they cancel. The position depends only on $G_m$ and $C_2$, not on $C_1$, $C_L$ or $R_{out}$.

### Step 3 — Full transfer function: KCL at X

$$(V_{in} - V_X)\,sC_1 = (V_X - V_{out})\,sC_2
\quad\Longrightarrow\quad V_X(C_1 + C_2) = C_1V_{in} + C_2V_{out}\quad\Longrightarrow\quad V_X = \frac{C_1V_{in} + C_2V_{out}}{C_1 + C_2}. \tag{1}$$

### Step 4 — Full transfer function: KCL at the output

The current arriving through $C_2$ leaves through the source, $R_{out}$ and $C_L$:

$$(V_X - V_{out})\,sC_2 = G_mV_X + V_{out}\left(\frac{1}{R_{out}} + sC_L\right)
\quad\Longrightarrow\quad
V_X\,(sC_2 - G_m) = V_{out}\left(\frac{1}{R_{out}} + sC_L + sC_2\right). \tag{2}$$

### Step 5 — Combine and solve

Substituting (1) into (2) and multiplying by $(C_1 + C_2)$:

$$(C_1V_{in} + C_2V_{out})(sC_2 - G_m) = V_{out}(C_1 + C_2)\left(\frac{1}{R_{out}} + sC_L + sC_2\right),$$

$$C_1V_{in}(sC_2 - G_m) = V_{out}\left[(C_1 + C_2)\left(\frac{1}{R_{out}} + sC_L + sC_2\right) - C_2(sC_2 - G_m)\right].$$

In the bracket the $sC_2^2$ terms cancel:

$$
\begin{aligned}
[\ldots] &= \frac{C_1 + C_2}{R_{out}} + s(C_1 + C_2)C_L + sC_1C_2 + sC_2^2 - sC_2^2 + G_mC_2\\
&= G_mC_2 + \frac{C_1 + C_2}{R_{out}} + s\left[C_L(C_1 + C_2) + C_1C_2\right].
\end{aligned}
$$

Therefore

$$\boxed{\frac{V_{out}}{V_{in}} = -\frac{C_1\,(G_m - sC_2)}{G_mC_2 + \dfrac{C_1 + C_2}{R_{out}} + s\left[C_L(C_1 + C_2) + C_1C_2\right]}}$$

### Step 6 — Reading off the zero, the DC gain and the pole

**Zero:** $G_m - sC_2 = 0$ gives $s_z = +G_m/C_2$, as in Step 2; the numerator factor is $(1 - s/\omega_z)$, a right-half-plane zero.

**DC gain:** at $s = 0$, dividing by $G_mC_2$,

$$\frac{V_{out}}{V_{in}}\bigg|_{s=0} = -\frac{C_1}{C_2}\cdot\frac{1}{1 + \dfrac{C_1 + C_2}{C_2\,G_mR_{out}}} \approx -\frac{C_1}{C_2},$$

the capacitive-amplifier gain, slightly reduced by the finite op-amp gain $G_mR_{out}$.

**Pole:** $s_p = -\dfrac{G_mC_2 + (C_1 + C_2)/R_{out}}{C_L(C_1 + C_2) + C_1C_2} \approx -\dfrac{G_m\,\beta}{C_L + C_1C_2/(C_1 + C_2)}$, with $\beta = C_2/(C_1 + C_2)$. Neglecting the small $1/R_{out}$ term,

$$\left|\frac{s_z}{s_p}\right| \approx \frac{G_m}{C_2}\cdot\frac{C_L(C_1 + C_2) + C_1C_2}{G_mC_2} = \frac{C_L(C_1 + C_2) + C_1C_2}{C_2^2},$$

which is large (for example 9 for $C_1 = 4C_2$ and $C_L = C_2$), so the zero lies well above the closed-loop bandwidth, where it adds phase lag. An op-amp input capacitance at X changes (1) and the pole, but not the output-node condition of Step 2, so the zero stays at $G_m/C_2$.

### Result

The closed-loop transfer function has a **right-half-plane zero at**

$$s_z = +\frac{G_m}{C_2},\qquad \omega_z = \frac{G_m}{C_2},$$

independent of $C_1$, $C_L$ and $R_{out}$. At this frequency the feedforward current through $C_2$, $sC_2V_X$, exactly equals the op amp's current $G_mV_X$, so no current is left for $R_{out}$ and $C_L$ and $V_{out} = 0$. The full result is

$$\frac{V_{out}}{V_{in}} = -\frac{C_1(G_m - sC_2)}{G_mC_2 + (C_1 + C_2)/R_{out} + s\left[C_L(C_1 + C_2) + C_1C_2\right]} .$$

**Common mistake.** Placing the zero in the left half plane. The feedforward path through $C_2$ is non-inverting while the op amp path is inverting, so they cancel at a *positive* real $s$: the numerator is $G_m - sC_2$.

**Common mistake.** Getting $G_m/(C_1 + C_2)$, $G_m/C_L$ or $G_m/C_1$. Only $C_2$ connects X directly to the output; at the zero no current flows in $C_L$, and $C_1$ only sets $V_X$.

**Common mistake.** Answering "no zero" because the op amp model has none. The zero is created by the feedback capacitor bridging the op amp's input and output.
