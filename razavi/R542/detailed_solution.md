# Detailed solution - R542

**Approach.** The base current of $Q_2$ flows into the emitter node of $Q_1$, and that of $Q_4$ into the emitter node of $Q_3$. This changes all four collector currents, but identically on both sides. Writing $V_X$ and $V_Y$ with the correct collector currents and imposing $V_X = V_Y$ shows that the PTAT term is untouched; only a tiny, unamplified shift of the emitter–base voltages remains.

### Step 1 — Currents in each transistor

All PMOS devices carry $I$. With $\alpha = \beta/(\beta + 1)$, a PNP's emitter current splits into $\alpha I_E$ at the collector and $I_E/(\beta + 1)$ out of the base.

**Left side.**
- $Q_2$: $I_{E2} = I$ (from $M_1$), $I_{C2} = \alpha I = \dfrac{\beta}{\beta + 1}I$, and $I_{B2} = \dfrac{I}{\beta + 1}$ flows out of its base.
- $Q_1$: its emitter node receives $I$ from $M_3$ **plus** $I_{B2}$, and $Q_1$ draws no base current, so
$$I_{C1} = I_{E1} = I + \frac{I}{\beta + 1} = \frac{\beta + 2}{\beta + 1}\,I .$$

**Right side** (same structure, area $nA$):
- $Q_4$: $I_{E4} = I$ (also the current in $R_1$), $I_{C4} = \alpha I$, $I_{B4} = I/(\beta + 1)$.
- $Q_3$: $I_{C3} = I_{E3} = \dfrac{\beta + 2}{\beta + 1}\,I$.

### Step 2 — Branch voltages

With $|V_{EB}| = V_T\ln(I_C/I_S)$ and $I_S$ proportional to the emitter area:

$$V_X = |V_{EB1}| + |V_{EB2}| = V_T\ln\frac{\frac{\beta + 2}{\beta + 1}I}{I_S} + V_T\ln\frac{\alpha I}{I_S},$$

$$V_Y = |V_{EB3}| + |V_{EB4}| + IR_1 = V_T\ln\frac{\frac{\beta + 2}{\beta + 1}I}{nI_S} + V_T\ln\frac{\alpha I}{nI_S} + IR_1 .$$

### Step 3 — The loop condition: the base-current effects cancel

In $V_X = V_Y$ the factors $(\beta + 2)/(\beta + 1)$ and $\alpha$ appear identically on both sides and cancel:

$$IR_1 = V_T\ln n + V_T\ln n = 2V_T\ln n\qquad\text{exactly}.$$

The PTAT current $I = 2V_T\ln n/R_1$ is **unchanged** by the finite β: both halves are disturbed in the same way, so the difference of their emitter–base voltages, which is all the loop responds to, is unaffected.

### Step 4 — The output voltage

$$V_{out} = V_Y + IR_2 = |V_{EB3}| + |V_{EB4}| + I(R_1 + R_2) .$$

$I(R_1 + R_2) = 2(1 + R_2/R_1)V_T\ln n$ is unchanged. Only $|V_{EB3}| + |V_{EB4}|$ differs from the $\beta \to \infty$ case, where both collector currents equal $I$:

$$
\begin{aligned}
\Delta V_{out} &= V_T\ln\frac{\beta + 2}{\beta + 1} + V_T\ln\frac{\beta}{\beta + 1}\\
&= V_T\ln\frac{\beta(\beta + 2)}{(\beta + 1)^2} .
\end{aligned}
$$

Since $\beta(\beta + 2) = (\beta + 1)^2 - 1$,

$$\boxed{\Delta V_{out} = V_T\ln\left[1 - \frac{1}{(\beta + 1)^2}\right] \approx -\frac{V_T}{(\beta + 1)^2}}$$

This error is **not** amplified by $1 + R_2/R_1$, and it is second order in $1/\beta$: $Q_3$'s current rises by about $1/\beta$ while $Q_4$'s falls by about $1/\beta$.

### Step 5 — Numbers

$$
\begin{aligned}
\beta = 10:&\quad \Delta V_{out} = 26\ \mathrm{mV}\times\ln\frac{10\times12}{121} = 26\ \mathrm{mV}\times\ln0.9917 = -0.22\ \mathrm{mV},\\
\beta = 5:&\quad \Delta V_{out} = 26\ \mathrm{mV}\times\ln\frac{5\times7}{36} = 26\ \mathrm{mV}\times\ln0.9722 = -0.73\ \mathrm{mV}.
\end{aligned}
$$

Even the low β of parasitic substrate PNPs in CMOS gives a negligible error, against the tens of millivolts that an amplified PTAT-term error would produce.

**Variant.** If the emitter–base voltages are (less accurately) taken from the emitter currents, only $|V_{EB3}|$ changes, by $V_T\ln[(\beta + 2)/(\beta + 1)] \approx +V_T/(\beta + 1)$ (about +2.3 mV for β = 10); it still cancels in the loop and is still unamplified.

**When it would matter.** The cancellation relies on symmetry: if $Q_2$ and $Q_4$ had *different* β, the difference would enter the PTAT voltage across $R_1$ and be multiplied by $1 + R_2/R_1$.

### Result

The base currents $I/(\beta + 1)$ of $Q_2$ and $Q_4$ add to the emitter currents of $Q_1$ and $Q_3$ ($I_{C1} = I_{C3} = I(\beta + 2)/(\beta + 1)$), while $I_{C2} = I_{C4} = \alpha I$. These changes are identical in both halves, so they cancel in $V_X = V_Y$: $IR_1 = 2V_T\ln n$ exactly, and the PTAT term (the part amplified by $1 + R_2/R_1$) is unaffected. The only change is in $|V_{EB3}| + |V_{EB4}|$:

$$\Delta V_{out} = V_T\ln\frac{\beta(\beta + 2)}{(\beta + 1)^2} \approx -\frac{V_T}{(\beta + 1)^2},$$

i.e. negligible: about −0.2 mV for β = 10 and −0.7 mV for β = 5.

**Common mistake.** Considering only the extra current in $Q_1$ and amplifying it by $1 + R_2/R_1$, giving an error of order $(1 + R_2/R_1)V_T/\beta$. The same extra current flows in $Q_3$, so the effect cancels in the loop equation.

**Common mistake.** Letting the base currents flow through $R_1$ or $R_2$. The base current of $Q_4$ goes to the emitter node of $Q_3$; the current in $R_1$ is $Q_4$'s emitter current, the PMOS current $I$.

**Common mistake.** Concluding that finite β never matters in this topology. The cancellation needs equal β for $Q_2$ and $Q_4$; a β mismatch produces an amplified error.
