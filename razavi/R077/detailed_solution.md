# Detailed solution - R077

**Approach.** Use the square-law model of a saturated MOSFET. With the drain current and the channel length held fixed, $r_O = 1/(\lambda I_D)$ does not change, so the dependence of $g_mr_O$ on $W/L$ comes entirely from $g_m$, which we express in terms of $I_D$ and $W/L$.

### Step 1 — Square-law model of a saturated MOSFET

Define the **overdrive voltage** $V_{ov} = V_{GS} - V_{TH}$ (gate–source voltage minus threshold voltage). In saturation the **square-law drain current** is

$$I_D = \frac12\,\mu C_{ox}\,\frac{W}{L}\,V_{ov}^2 ,$$

where $\mu C_{ox}$ is the process transconductance parameter (mobility times gate-oxide capacitance per unit area) and $W/L$ the aspect ratio.

The **transconductance** is the derivative with respect to $V_{GS}$:

$$g_m = \frac{\partial I_D}{\partial V_{GS}} = \mu C_{ox}\,\frac{W}{L}\,V_{ov} .$$

The **output resistance** due to channel-length modulation (coefficient $\lambda$) is

$$r_O = \frac{1}{\lambda I_D} .$$

The **intrinsic gain** is the product $g_mr_O$, the voltage gain of a single transistor with an ideal current-source load.

### Step 2 — What stays fixed and what changes

Now $I_D$ and $L$ are held constant while $W$ (and hence $W/L$) is varied.

- **$\lambda$ is constant**, because it depends on the channel length $L$, which is fixed.
- **$r_O$ is constant**, because $r_O = 1/(\lambda I_D)$ and both $\lambda$ and $I_D$ are fixed.
- **$V_{ov}$ is not constant.** To keep the same current in a wider device, the gate voltage must drop. Solve the current equation for $V_{ov}$:

$$
\begin{aligned}
V_{ov}^2 &= \frac{2I_D}{\mu C_{ox}(W/L)},\\
V_{ov} &= \sqrt{\frac{2I_D}{\mu C_{ox}(W/L)}} \;\propto\; \left(\frac{W}{L}\right)^{-1/2}.
\end{aligned}
$$

So the expression $g_m = \mu C_{ox}(W/L)V_{ov}$ contains two factors that change in opposite directions. We first eliminate $V_{ov}$.

### Step 3 — Transconductance at constant current

Substitute $V_{ov}$ from Step 2 into $g_m = \mu C_{ox}(W/L)V_{ov}$:

$$g_m = \mu C_{ox}\frac{W}{L}\sqrt{\frac{2I_D}{\mu C_{ox}(W/L)}} .$$

Move the prefactor inside the square root (it becomes squared there):

$$g_m = \sqrt{\left(\mu C_{ox}\frac{W}{L}\right)^2\frac{2I_D}{\mu C_{ox}(W/L)}} .$$

Cancel one factor of $\mu C_{ox}(W/L)$:

$$g_m = \sqrt{2\mu C_{ox}\frac{W}{L}I_D} \;\propto\; \sqrt{\frac{W}{L}} .$$

So at constant current, $g_m$ grows only as the **square root** of $W/L$: the factor $W/L$ grows, but the overdrive shrinks as $(W/L)^{-1/2}$.

### Step 4 — Form the product $g_mr_O$

Multiply $g_m$ from Step 3 by $r_O = 1/(\lambda I_D)$:

$$g_mr_O = \sqrt{2\mu C_{ox}\frac{W}{L}I_D}\cdot\frac{1}{\lambda I_D} .$$

Write $I_D = \sqrt{I_D^2}$ in the denominator and combine the square roots:

$$g_mr_O = \frac{1}{\lambda}\sqrt{\frac{2\mu C_{ox}(W/L)I_D}{I_D^2}} = \frac{1}{\lambda}\sqrt{\frac{2\mu C_{ox}(W/L)}{I_D}} .$$

With $\lambda$, $\mu C_{ox}$ and $I_D$ fixed, the only variable is $W/L$:

$$g_mr_O \;\propto\; \sqrt{\frac{W}{L}} .$$

**Check with the overdrive form.** Since $g_m = 2I_D/V_{ov}$, we also have $g_mr_O = 2/(\lambda V_{ov})$. In Step 2, $V_{ov} \propto (W/L)^{-1/2}$, so $g_mr_O \propto (W/L)^{+1/2}$, the same result. The gain rises because the wider device runs at a smaller overdrive.

### Step 5 — Numerical illustration

Take an example: $\mu C_{ox} = 100\ \mu\mathrm{A/V^2}$, $I_D = 100\ \mu\mathrm{A}$, $\lambda = 0.1\ \mathrm{V^{-1}}$. The output resistance is the same for every width:

$$r_O = \frac{1}{(0.1\ \mathrm{V^{-1}})(100\ \mu\mathrm{A})} = 100\ \mathrm{k}\Omega .$$

For $W/L = 20$:

$$
\begin{aligned}
g_m &= \sqrt{2\,(100\ \mu\mathrm{A/V^2})(20)(100\ \mu\mathrm{A})} = \sqrt{4\times10^{-7}}\ \mathrm{A/V} = 0.632\ \mathrm{mS},\\
V_{ov} &= \sqrt{\frac{2\,(100\ \mu\mathrm{A})}{(100\ \mu\mathrm{A/V^2})(20)}} = \sqrt{0.1}\ \mathrm{V} = 0.316\ \mathrm{V},\\
g_mr_O &= (0.632\ \mathrm{mS})(100\ \mathrm{k}\Omega) = 63.2 .
\end{aligned}
$$

Check: $2/(\lambda V_{ov}) = 2/[(0.1\ \mathrm{V^{-1}})(0.316\ \mathrm{V})] = 63.2$. Repeating for other widths:

| $W/L$ | $V_{ov}$ | $g_m$ | $r_O$ | $g_mr_O$ |
|---|---|---|---|---|
| 5 | 0.632 V | 0.316 mS | 100 kΩ | 31.6 |
| 10 | 0.447 V | 0.447 mS | 100 kΩ | 44.7 |
| 20 | 0.316 V | 0.632 mS | 100 kΩ | 63.2 |
| 40 | 0.224 V | 0.894 mS | 100 kΩ | 89.4 |
| 80 | 0.158 V | 1.265 mS | 100 kΩ | 126.5 |

Every **fourfold** increase of $W/L$ (5 → 20 → 80) **doubles** the intrinsic gain (31.6 → 63.2 → 126.5), as the square-root law requires.

### Step 6 — The plot and its limits

- **Horizontal axis:** $W/L$. **Vertical axis:** $g_mr_O$.
- The curve is a **square-root curve**, $g_mr_O = k\sqrt{W/L}$ with $k = \lambda^{-1}\sqrt{2\mu C_{ox}/I_D}$. It rises monotonically and is concave down: steep at small $W/L$ and progressively flatter, because its slope $k/(2\sqrt{W/L})$ falls as $W/L$ grows. Extrapolated, it passes through the origin.
- On log–log axes it is a straight line of slope $1/2$.
- **Small $W/L$.** The overdrive becomes large (0.63 V at $W/L = 5$ in the example). The device then needs a large $V_{DS}$ to stay saturated ($V_{DS} \ge V_{ov}$), and in practice velocity saturation and mobility degradation also lower $g_m$.
- **Large $W/L$.** The overdrive shrinks toward zero and the device enters **weak inversion** (subthreshold), where the square law no longer holds. There $g_m$ approaches the exponential-law value $I_D/(\zeta V_T)$, where $V_T = kT/q \approx 26$ mV is the thermal voltage and $\zeta \approx 1.5$ the subthreshold slope factor. Since $g_m$ can no longer grow, the real curve **flattens** toward $g_mr_O \approx 1/(\lambda\zeta V_T)$, about 256 in the example (the square law would reach that value near $W/L \approx 320$, where $V_{ov}$ is only about 80 mV).

**Physical intuition.** With the current fixed, $r_O$ cannot change, so the only route to more gain is a larger $g_m$ per unit current, $g_m/I_D = 2/V_{ov}$. A wider device carries the same current with less overdrive, so it uses that current more efficiently. The price is a larger area and more capacitance, i.e. a slower device.

### Result

$$g_mr_O = \frac{1}{\lambda}\sqrt{\frac{2\mu C_{ox}(W/L)}{I_D}} \;\propto\; \sqrt{\frac{W}{L}} ,$$

a **square-root curve rising with $W/L$**, which doubles for every fourfold increase of $W/L$. The reason: $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$ grows as $\sqrt{W/L}$, while $r_O = 1/(\lambda I_D)$ stays fixed (both $I_D$ and $\lambda$ are constant), and the overdrive falls as $1/\sqrt{W/L}$. At very large $W/L$ the device enters weak inversion and the real curve levels off.

**Common mistake.** Drawing a straight line, $g_mr_O \propto W/L$, from $g_m = \mu C_{ox}(W/L)V_{ov}$ with $V_{ov}$ treated as constant. At constant current the overdrive is *not* constant: it falls as $(W/L)^{-1/2}$, so $g_m$ grows only as $\sqrt{W/L}$.

**Common mistake.** Drawing a horizontal line by using $g_mr_O = 2/(\lambda V_{ov})$ with a fixed $V_{ov}$. A flat line is the answer when $V_{GS}$ is held constant, because there $I_D$ and $r_O$ change with $W/L$ in exact compensation. Here $I_D$ is held constant, $r_O$ is fixed, and $V_{ov}$ falls, so the gain rises.
