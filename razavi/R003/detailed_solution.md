# Detailed solution - R003

**Approach.** Write $g_m$ and $r_O$ of a saturated MOSFET in terms of the drain current using the square law, multiply them, and simplify. Then insert $\lambda \propto 1/L$ to see how the result scales with the channel length, and evaluate it for a few values of $L$ and $I_D$ to draw the family of curves.

### Step 1 — Transconductance in terms of $I_D$

In saturation the square-law drain current is

$$I_D = \frac12\,\mu_nC_{ox}\frac{W}{L}\,V_{ov}^2, \qquad V_{ov} = V_{GS} - V_{TH},$$

where $V_{ov}$ is the overdrive voltage, $V_{TH}$ the threshold voltage, $\mu_nC_{ox}$ the process transconductance parameter and $W/L$ the aspect ratio (channel width over channel length).

The transconductance is the derivative with respect to $V_{GS}$:

$$g_m = \frac{\partial I_D}{\partial V_{GS}} = \mu_nC_{ox}\frac{W}{L}V_{ov}.$$

Solve the current equation for the overdrive,

$$V_{ov} = \sqrt{\frac{2I_D}{\mu_nC_{ox}(W/L)}},$$

and substitute:

$$g_m = \mu_nC_{ox}\frac{W}{L}\sqrt{\frac{2I_D}{\mu_nC_{ox}(W/L)}} = \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D}.$$

So at a fixed $W/L$, $g_m$ grows only as the **square root** of the current.

### Step 2 — Output resistance in terms of $I_D$

Channel-length modulation multiplies the saturation current by $(1 + \lambda V_{DS})$, where $\lambda$ is the channel-length modulation coefficient. The output resistance $r_O$ is the inverse slope of $I_D$ versus $V_{DS}$:

$$\frac{\partial I_D}{\partial V_{DS}} = \frac12\,\mu_nC_{ox}\frac{W}{L}V_{ov}^2\,\lambda \approx \lambda I_D \quad\Longrightarrow\quad r_O = \frac{1}{\lambda I_D}.$$

(The approximation neglects $\lambda V_{DS}$ against 1 inside $I_D$, the usual first-order step.) So $r_O$ falls as $1/I_D$: it drops **faster** with current than $g_m$ rises.

### Step 3 — The intrinsic gain

Multiply the two results:

$$
\begin{aligned}
g_m r_O &= \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D}\cdot\frac{1}{\lambda I_D}\\
&= \frac{1}{\lambda}\cdot\frac{\sqrt{2\mu_nC_{ox}(W/L)}\,\sqrt{I_D}}{I_D}\\
&= \frac{1}{\lambda}\sqrt{\frac{2\mu_nC_{ox}(W/L)}{I_D}} .
\end{aligned}
$$

**Equivalent overdrive form.** Using $I_D = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$ inside the square root,

$$g_m r_O = \frac{1}{\lambda}\sqrt{\frac{2\mu_nC_{ox}(W/L)}{\tfrac12\mu_nC_{ox}(W/L)V_{ov}^2}} = \frac{1}{\lambda}\cdot\frac{2}{V_{ov}} = \frac{2}{\lambda V_{ov}} .$$

**Interpretation.** $g_m r_O$ is the largest gain a single transistor can give (a common-source stage with an ideal current-source load). At a fixed size, raising the current raises the overdrive, and the intrinsic gain falls as $1/V_{ov} \propto 1/\sqrt{I_D}$.

### Step 4 — Bringing in the channel length

The problem states $\lambda \propto 1/L$: a longer channel is less affected by the small shortening caused by the drain voltage. Write it with the given reference point $\lambda_0 = 0.1\ \mathrm{V^{-1}}$ at $L_0 = 0.5\ \mu$m:

$$\lambda = \lambda_0\frac{L_0}{L}, \qquad \frac{1}{\lambda} = \frac{L}{\lambda_0L_0}.$$

Substitute into the result of Step 3. The answer depends on what is held fixed when $L$ changes.

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

### Step 5 — Numerical example at fixed $W = 50\ \mu$m

Use $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$ and three channel lengths. For each length, first find $W/L$ and $\lambda$, then evaluate $g_mr_O = (1/\lambda)\sqrt{2\mu_nC_{ox}(W/L)/I_D}$.

**$L = 0.5\ \mu$m:** $W/L = 100$, $\lambda = 0.1\ \mathrm{V^{-1}}$, and $2\mu_nC_{ox}(W/L) = 2(134\ \mu\mathrm{A/V^2})(100) = 26.8\ \mathrm{mA/V^2}$. Then

$$g_mr_O = \frac{1}{0.1\ \mathrm{V^{-1}}}\sqrt{\frac{26.8\ \mathrm{mA/V^2}}{I_D}} .$$

$$
\begin{aligned}
I_D = 0.1\ \mathrm{mA}:&\quad (10\ \mathrm{V})\sqrt{\frac{26.8\ \mathrm{mA/V^2}}{0.1\ \mathrm{mA}}} = (10\ \mathrm{V})\sqrt{268\ \mathrm{V^{-2}}} = (10\ \mathrm{V})(16.37\ \mathrm{V^{-1}}) = 164,\\
I_D = 0.5\ \mathrm{mA}:&\quad 10\sqrt{53.6} = 10\times7.32 = 73.2,\\
I_D = 1\ \mathrm{mA}:&\quad 10\sqrt{26.8} = 10\times5.18 = 51.8.
\end{aligned}
$$

($1/\lambda$ carries units of V and the square root units of V⁻¹, so the product is dimensionless; the remaining lines use the same units.)

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

Each doubling of $L$ multiplies every value by $\sqrt2$, as predicted in Step 4(a).

### Step 6 — The plot

Values of $g_m r_O$ (fixed $W = 50\ \mu$m), including two more currents to show the shape:

| $I_D$ (mA) | $L = 0.5\ \mu$m | $L = 1\ \mu$m | $L = 2\ \mu$m |
|---|---|---|---|
| 0.05 | 232 | 327 | 463 |
| 0.1 | 164 | 232 | 327 |
| 0.2 | 116 | 164 | 232 |
| 0.5 | 73 | 104 | 146 |
| 1 | 52 | 73 | 104 |
| 2 | 37 | 52 | 73 |

**Description of the curves** ($g_m r_O$ on the vertical axis, $I_D$ on the horizontal axis):

- Each curve is a **hyperbola-like decay $\propto 1/\sqrt{I_D}$**: very large at small currents, dropping steeply at first and then flattening out. On log–log axes each curve is a straight line of slope $-1/2$.
- **Longer $L$ lies higher.** The curves are copies of one another scaled vertically by $\sqrt2$ per doubling of $L$ (fixed $W$), or by 2 per doubling of $L$ at fixed $W/L$. On log–log axes they are parallel lines.
- Since $g_mr_O \propto \sqrt{L/I_D}$ at fixed $W$, the $L = 1\ \mu$m curve at a current $I_D$ has the same value as the $L = 0.5\ \mu$m curve at $I_D/2$ (for example 164 at 0.2 mA versus 164 at 0.1 mA).

**Fixed $W/L$ variant.** If $W/L = 100$ is kept as $L$ grows ($W = 100\ \mu$m at $L = 1\ \mu$m, $W = 200\ \mu$m at $L = 2\ \mu$m), $g_m$ stays the same at each current and only $1/\lambda$ grows; the $L = 0.5\ \mu$m column is multiplied by 2 and 4: for example 146 and 293 at $I_D = 0.5$ mA.

**Limits of the square-law picture.** At very low currents the device enters weak inversion (subthreshold), where $g_m \approx I_D/(\zeta V_T)$ with $V_T = kT/q$ the thermal voltage and $\zeta > 1$ the subthreshold slope factor. Then $g_mr_O \approx \frac{I_D}{\zeta V_T}\cdot\frac{1}{\lambda I_D} = \frac{1}{\lambda\zeta V_T}$, which no longer depends on current: the $1/\sqrt{I_D}$ rise levels off. At very high currents velocity saturation lowers $g_m$ below the square-law value, making the gain fall even faster.

### Result

$$g_m r_O = \frac{\sqrt{2\mu_nC_{ox}(W/L)I_D}}{\lambda I_D} = \frac{1}{\lambda}\sqrt{\frac{2\mu_nC_{ox}(W/L)}{I_D}} = \frac{2}{\lambda(V_{GS} - V_{TH})} .$$

With $\lambda = \lambda_0L_0/L$:

$$g_m r_O = \frac{1}{\lambda_0L_0}\sqrt{\frac{2\mu_nC_{ox}WL}{I_D}} .$$

- Plotted against $I_D$, each curve **falls as $1/\sqrt{I_D}$**.
- **Longer $L$ gives a higher curve**: $g_mr_O \propto \sqrt{L}$ at fixed $W$ (doubling $L$ raises it by $\sqrt2$), and $\propto L$ at fixed $W/L$ (doubling $L$ doubles it).
- Example with $W = 50\ \mu$m: $L = 0.5\ \mu$m gives 164, 73, 52 at $I_D = 0.1$, 0.5, 1 mA; $L = 1\ \mu$m gives 232, 104, 73; $L = 2\ \mu$m gives 327, 146, 104.

**Common mistake.** Concluding that $g_mr_O$ *increases* with $I_D$ because $g_m$ increases with $I_D$. The output resistance falls as $1/I_D$, faster than $g_m$ rises ($\sqrt{I_D}$), so the product falls as $1/\sqrt{I_D}$. High intrinsic gain is obtained at *low* current density.

**Common mistake.** Forgetting that $W/L$ changes when $L$ changes at a fixed $W$, and claiming $g_mr_O \propto L$ without saying that $W/L$ is held fixed. The scaling with $L$ is $\sqrt L$ at fixed $W$ and $L$ at fixed $W/L$; the assumption must be stated.

**Common mistake.** Claiming that $g_m r_O$ is independent of $L$, or decreases with it. Since $\lambda \propto 1/L$, the output resistance grows in proportion to $L$, and this always outweighs the at most $\sqrt{L}$ drop of $g_m$.
