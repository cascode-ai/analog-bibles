# Detailed solution - R003

**Approach.** Multiply the square-law $g_m$ and $r_O$, both written in terms of $I_D$, then insert $\lambda \propto 1/L$ to see how the result scales with the channel length, and evaluate it for a few values of $L$ and $I_D$ to draw the family of curves.

### Step 1 — The intrinsic gain

In saturation, eliminating $V_{ov}$ from $g_m = \mu_nC_{ox}(W/L)V_{ov}$ with the square law gives $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$, which grows only as $\sqrt{I_D}$; neglecting $\lambda V_{DS}$ against 1 inside $I_D$, $r_O = 1/(\lambda I_D)$, which falls as $1/I_D$. Their product:

$$
\begin{aligned}
g_m r_O &= \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D}\cdot\frac{1}{\lambda I_D}\\
&= \frac{1}{\lambda}\cdot\frac{\sqrt{2\mu_nC_{ox}(W/L)}\,\sqrt{I_D}}{I_D}\\
&= \frac{1}{\lambda}\sqrt{\frac{2\mu_nC_{ox}(W/L)}{I_D}} .
\end{aligned}
$$

Using $I_D = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$ inside the square root gives the equivalent overdrive form

$$g_m r_O = \frac{1}{\lambda}\sqrt{\frac{2\mu_nC_{ox}(W/L)}{\tfrac12\mu_nC_{ox}(W/L)V_{ov}^2}} = \frac{1}{\lambda}\cdot\frac{2}{V_{ov}} = \frac{2}{\lambda V_{ov}} .$$

At a fixed size, more current means more overdrive, so the intrinsic gain falls as $1/V_{ov} \propto 1/\sqrt{I_D}$.

### Step 2 — Bringing in the channel length

With the given value $\lambda_0 = 0.1\ \mathrm{V^{-1}}$ at $L_0 = 0.5\ \mu$m,

$$\lambda = \lambda_0\frac{L_0}{L}, \qquad \frac{1}{\lambda} = \frac{L}{\lambda_0L_0}.$$

Substituting into Step 1, the answer depends on what is held fixed when $L$ changes.

**(a) Fixed width $W$** (the aspect ratio $W/L$ falls as $L$ grows):

$$
\begin{aligned}
g_m r_O &= \frac{L}{\lambda_0 L_0}\sqrt{\frac{2\mu_nC_{ox}W}{L\,I_D}}\\
&= \frac{1}{\lambda_0L_0}\sqrt{\frac{L^2\cdot2\mu_nC_{ox}W}{L\,I_D}}\\
&= \frac{1}{\lambda_0 L_0}\sqrt{\frac{2\mu_nC_{ox}WL}{I_D}} \;\propto\; \sqrt{\frac{L}{I_D}} .
\end{aligned}
$$

Doubling $L$ raises $r_O$ by 2 but lowers $g_m$ by $\sqrt2$ (smaller $W/L$), a net gain of $\sqrt2 \approx 1.41$.

**(b) Fixed aspect ratio $W/L$** (both $W$ and $L$ scaled together):

$$g_m r_O = \frac{L}{\lambda_0L_0}\sqrt{\frac{2\mu_nC_{ox}(W/L)}{I_D}} \;\propto\; \frac{L}{\sqrt{I_D}} .$$

Now $g_m$ is unchanged at a given current and only $r_O$ grows, so doubling $L$ doubles the intrinsic gain.

Either way, **a longer channel gives a higher intrinsic gain at the same current**, at the price of a larger device (more capacitance, lower speed).

### Step 3 — Numerical example at fixed $W = 50\ \mu$m

For each length, find $W/L$ and $\lambda$, then evaluate $g_mr_O = (1/\lambda)\sqrt{2\mu_nC_{ox}(W/L)/I_D}$ with $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$.

**$L = 0.5\ \mu$m:** $W/L = 100$, $\lambda = 0.1\ \mathrm{V^{-1}}$, and $2\mu_nC_{ox}(W/L) = 2(134\ \mu\mathrm{A/V^2})(100) = 26.8\ \mathrm{mA/V^2}$, so

$$g_mr_O = \frac{1}{0.1\ \mathrm{V^{-1}}}\sqrt{\frac{26.8\ \mathrm{mA/V^2}}{I_D}} ,$$

$$
\begin{aligned}
I_D = 0.1\ \mathrm{mA}:&\quad (10\ \mathrm{V})\sqrt{\frac{26.8\ \mathrm{mA/V^2}}{0.1\ \mathrm{mA}}} = (10\ \mathrm{V})\sqrt{268\ \mathrm{V^{-2}}} = (10\ \mathrm{V})(16.37\ \mathrm{V^{-1}}) = 164,\\
I_D = 0.5\ \mathrm{mA}:&\quad 10\sqrt{53.6} = 10\times7.32 = 73.2,\\
I_D = 1\ \mathrm{mA}:&\quad 10\sqrt{26.8} = 10\times5.18 = 51.8.
\end{aligned}
$$

The remaining lines use the same units (V times V⁻¹, dimensionless).

**$L = 1\ \mu$m:** $W/L = 50$, $\lambda = 0.1 \times 0.5/1 = 0.05\ \mathrm{V^{-1}}$, $2\mu_nC_{ox}(W/L) = 13.4\ \mathrm{mA/V^2}$:

$$
\begin{aligned}
I_D = 0.1\ \mathrm{mA}:&\quad 20\sqrt{134} = 20\times11.58 = 232,\\
I_D = 0.5\ \mathrm{mA}:&\quad 20\sqrt{26.8} = 20\times5.18 = 104,\\
I_D = 1\ \mathrm{mA}:&\quad 20\sqrt{13.4} = 20\times3.66 = 73.2.
\end{aligned}
$$

**$L = 2\ \mu$m:** $W/L = 25$, $\lambda = 0.1\times0.5/2 = 0.025\ \mathrm{V^{-1}}$, $2\mu_nC_{ox}(W/L) = 6.7\ \mathrm{mA/V^2}$:

$$
\begin{aligned}
I_D = 0.1\ \mathrm{mA}:&\quad 40\sqrt{67} = 40\times8.19 = 327,\\
I_D = 0.5\ \mathrm{mA}:&\quad 40\sqrt{13.4} = 40\times3.66 = 146,\\
I_D = 1\ \mathrm{mA}:&\quad 40\sqrt{6.7} = 40\times2.59 = 104.
\end{aligned}
$$

Each doubling of $L$ multiplies every value by $\sqrt2$, as predicted in Step 2(a).

### Step 4 — The plot

Values of $g_m r_O$ (fixed $W = 50\ \mu$m), with two more currents to show the shape:

| $I_D$ (mA) | $L = 0.5\ \mu$m | $L = 1\ \mu$m | $L = 2\ \mu$m |
|---|---|---|---|
| 0.05 | 232 | 327 | 463 |
| 0.1 | 164 | 232 | 327 |
| 0.2 | 116 | 164 | 232 |
| 0.5 | 73 | 104 | 146 |
| 1 | 52 | 73 | 104 |
| 2 | 37 | 52 | 73 |

- Each curve **decays as $1/\sqrt{I_D}$**: very large at small currents, dropping steeply at first and then flattening; on log–log axes, a straight line of slope $-1/2$.
- **Longer $L$ lies higher**: the curves are vertically scaled copies, by $\sqrt2$ per doubling of $L$ at fixed $W$ (or by 2 at fixed $W/L$), i.e. parallel lines on log–log axes.
- Since $g_mr_O \propto \sqrt{L/I_D}$ at fixed $W$, the $L = 1\ \mu$m curve at $I_D$ equals the $L = 0.5\ \mu$m curve at $I_D/2$ (for example 164 at 0.2 mA versus 164 at 0.1 mA).

**Fixed $W/L$ variant.** Keeping $W/L = 100$ ($W = 100\ \mu$m at $L = 1\ \mu$m, $W = 200\ \mu$m at $L = 2\ \mu$m) leaves $g_m$ unchanged and multiplies the $L = 0.5\ \mu$m column by 2 and 4: for example 146 and 293 at $I_D = 0.5$ mA.

**Limits of the square law.** At very low currents the device enters subthreshold, where $g_m \approx I_D/(\zeta V_T)$ ($\zeta > 1$ the subthreshold slope factor), so $g_mr_O \approx \frac{I_D}{\zeta V_T}\cdot\frac{1}{\lambda I_D} = \frac{1}{\lambda\zeta V_T}$ and the $1/\sqrt{I_D}$ rise levels off. At very high currents velocity saturation lowers $g_m$ below the square-law value, making the gain fall even faster.

### Result

$$g_m r_O = \frac{\sqrt{2\mu_nC_{ox}(W/L)I_D}}{\lambda I_D} = \frac{1}{\lambda}\sqrt{\frac{2\mu_nC_{ox}(W/L)}{I_D}} = \frac{2}{\lambda(V_{GS} - V_{TH})} .$$

With $\lambda = \lambda_0L_0/L$:

$$g_m r_O = \frac{1}{\lambda_0L_0}\sqrt{\frac{2\mu_nC_{ox}WL}{I_D}} .$$

- Plotted against $I_D$, each curve **falls as $1/\sqrt{I_D}$**.
- **Longer $L$ gives a higher curve**: $g_mr_O \propto \sqrt{L}$ at fixed $W$ (doubling $L$ raises it by $\sqrt2$), and $\propto L$ at fixed $W/L$ (doubling $L$ doubles it).
- Example with $W = 50\ \mu$m: $L = 0.5\ \mu$m gives 164, 73, 52 at $I_D = 0.1$, 0.5, 1 mA; $L = 1\ \mu$m gives 232, 104, 73; $L = 2\ \mu$m gives 327, 146, 104.

**Common mistake.** Concluding that $g_mr_O$ *increases* with $I_D$ because $g_m$ does. The output resistance falls as $1/I_D$, faster than $g_m$ rises ($\sqrt{I_D}$), so high intrinsic gain comes at *low* current density.

**Common mistake.** Forgetting that $W/L$ changes when $L$ changes at a fixed $W$. The scaling is $\sqrt L$ at fixed $W$ and $L$ at fixed $W/L$, so the assumption must be stated.

**Common mistake.** Claiming that $g_m r_O$ is independent of $L$, or decreases with it. Since $\lambda \propto 1/L$, $r_O$ grows in proportion to $L$, which always outweighs the at most $\sqrt{L}$ drop of $g_m$.
