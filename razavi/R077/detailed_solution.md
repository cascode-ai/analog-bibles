# Detailed solution - R077

**Approach.** With $I_D$ and $L$ fixed, $r_O = 1/(\lambda I_D)$ does not change, so the dependence of $g_mr_O$ on $W/L$ comes entirely from $g_m$, which we express in terms of $I_D$ and $W/L$.

### Step 1 — What stays fixed and what changes

$\lambda$ depends only on $L$, so it is constant, and hence so is $r_O = 1/(\lambda I_D)$. The overdrive $V_{ov} = V_{GS} - V_{TH}$ is **not** constant: to keep the same current in a wider device the gate voltage must drop. From the square law $I_D = \frac12\mu C_{ox}(W/L)V_{ov}^2$,

$$V_{ov} = \sqrt{\frac{2I_D}{\mu C_{ox}(W/L)}} \;\propto\; \left(\frac{W}{L}\right)^{-1/2}.$$

So $g_m = \mu C_{ox}(W/L)V_{ov}$ contains two factors that change in opposite directions, and $V_{ov}$ must be eliminated first.

### Step 2 — Transconductance at constant current

Substituting $V_{ov}$ into $g_m = \mu C_{ox}(W/L)V_{ov}$ and moving the prefactor inside the square root:

$$g_m = \mu C_{ox}\frac{W}{L}\sqrt{\frac{2I_D}{\mu C_{ox}(W/L)}} = \sqrt{\left(\mu C_{ox}\frac{W}{L}\right)^2\frac{2I_D}{\mu C_{ox}(W/L)}} = \sqrt{2\mu C_{ox}\frac{W}{L}I_D} \;\propto\; \sqrt{\frac{W}{L}} .$$

At constant current $g_m$ grows only as the **square root** of $W/L$: the factor $W/L$ grows, but the overdrive shrinks as $(W/L)^{-1/2}$.

### Step 3 — Form the product $g_mr_O$

$$g_mr_O = \sqrt{2\mu C_{ox}\frac{W}{L}I_D}\cdot\frac{1}{\lambda I_D} = \frac{1}{\lambda}\sqrt{\frac{2\mu C_{ox}(W/L)I_D}{I_D^2}} = \frac{1}{\lambda}\sqrt{\frac{2\mu C_{ox}(W/L)}{I_D}} .$$

With $\lambda$, $\mu C_{ox}$ and $I_D$ fixed, the only variable is $W/L$:

$$g_mr_O \;\propto\; \sqrt{\frac{W}{L}} .$$

**Check.** Since $g_m = 2I_D/V_{ov}$, also $g_mr_O = 2/(\lambda V_{ov})$; with $V_{ov} \propto (W/L)^{-1/2}$ (Step 1) this gives $g_mr_O \propto (W/L)^{+1/2}$ again. The gain rises because the wider device runs at a smaller overdrive.

### Step 4 — Numerical illustration

Take, as an example, $\mu C_{ox} = 100\ \mu\mathrm{A/V^2}$, $I_D = 100\ \mu\mathrm{A}$, $\lambda = 0.1\ \mathrm{V^{-1}}$. The output resistance is the same for every width:

$$r_O = \frac{1}{(0.1\ \mathrm{V^{-1}})(100\ \mu\mathrm{A})} = 100\ \mathrm{k}\Omega .$$

For $W/L = 20$:

$$
\begin{aligned}
g_m &= \sqrt{2\,(100\ \mu\mathrm{A/V^2})(20)(100\ \mu\mathrm{A})} = \sqrt{4\times10^{-7}}\ \mathrm{A/V} = 0.632\ \mathrm{mS},\\
V_{ov} &= \sqrt{\frac{2\,(100\ \mu\mathrm{A})}{(100\ \mu\mathrm{A/V^2})(20)}} = \sqrt{0.1}\ \mathrm{V} = 0.316\ \mathrm{V},\\
g_mr_O &= (0.632\ \mathrm{mS})(100\ \mathrm{k}\Omega) = 63.2 .
\end{aligned}
$$

Check: $2/(\lambda V_{ov}) = 2/[(0.1\ \mathrm{V^{-1}})(0.316\ \mathrm{V})] = 63.2$. For other widths:

| $W/L$ | $V_{ov}$ | $g_m$ | $r_O$ | $g_mr_O$ |
|---|---|---|---|---|
| 5 | 0.632 V | 0.316 mS | 100 kΩ | 31.6 |
| 10 | 0.447 V | 0.447 mS | 100 kΩ | 44.7 |
| 20 | 0.316 V | 0.632 mS | 100 kΩ | 63.2 |
| 40 | 0.224 V | 0.894 mS | 100 kΩ | 89.4 |
| 80 | 0.158 V | 1.265 mS | 100 kΩ | 126.5 |

Every **fourfold** increase of $W/L$ (5 → 20 → 80) **doubles** the intrinsic gain (31.6 → 63.2 → 126.5), as the square-root law requires.

### Step 5 — The plot and its limits

- With $W/L$ on the horizontal axis, the curve is a **square-root curve**, $g_mr_O = k\sqrt{W/L}$ with $k = \lambda^{-1}\sqrt{2\mu C_{ox}/I_D}$. It rises monotonically and is concave down: its slope $k/(2\sqrt{W/L})$ falls as $W/L$ grows. Extrapolated, it passes through the origin; on log–log axes it is a straight line of slope $1/2$.
- **Small $W/L$.** The overdrive becomes large (0.63 V at $W/L = 5$ in the example), so the device needs a large $V_{DS}$ to stay saturated ($V_{DS} \ge V_{ov}$), and in practice velocity saturation and mobility degradation also lower $g_m$.
- **Large $W/L$.** The overdrive shrinks toward zero and the device enters **weak inversion**, where the square law no longer holds. $g_m$ approaches $I_D/(\zeta V_T)$ (thermal voltage $V_T = kT/q \approx 26$ mV, subthreshold slope factor $\zeta \approx 1.5$) and can no longer grow, so the real curve **flattens** toward $g_mr_O \approx 1/(\lambda\zeta V_T)$, about 256 in the example (the square law would reach that value near $W/L \approx 320$, where $V_{ov}$ is only about 80 mV).

With the current fixed, the only route to more gain is a larger $g_m/I_D = 2/V_{ov}$, which a wider device provides at the price of more area and capacitance, i.e. a slower device.

### Result

$$g_mr_O = \frac{1}{\lambda}\sqrt{\frac{2\mu C_{ox}(W/L)}{I_D}} \;\propto\; \sqrt{\frac{W}{L}} ,$$

a **square-root curve rising with $W/L$**, which doubles for every fourfold increase of $W/L$. The reason: $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$ grows as $\sqrt{W/L}$, while $r_O = 1/(\lambda I_D)$ stays fixed (both $I_D$ and $\lambda$ are constant), and the overdrive falls as $1/\sqrt{W/L}$. At very large $W/L$ the device enters weak inversion and the real curve levels off.

**Common mistake.** Drawing a straight line, $g_mr_O \propto W/L$, from $g_m = \mu C_{ox}(W/L)V_{ov}$ with $V_{ov}$ treated as constant. At constant current the overdrive falls as $(W/L)^{-1/2}$, so $g_m$ grows only as $\sqrt{W/L}$.

**Common mistake.** Drawing a horizontal line from $g_mr_O = 2/(\lambda V_{ov})$ with a fixed $V_{ov}$. That is the answer when $V_{GS}$ is held constant; here $I_D$ is fixed, $r_O$ is fixed and $V_{ov}$ falls, so the gain rises.
