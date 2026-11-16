# Detailed solution - R133

**Approach.** As $V_{in}$ rises, the current grows and $V_{out}$ falls, crossing two region boundaries: the PMOS load $M_2$ leaves triode (it saturates when $V_{out}$ drops to 0.8 V), and $M_1$ reaches the edge of triode ($V_{out} = V_{in} - V_{TH}$). Check which happens first, find the input at which $M_1$ reaches its edge, and compute the gain there with both devices saturated, using $r_O$ for the output resistances.

### Step 1 — Device constants and the fixed overdrive of $M_2$

Neither device has body effect (each source is tied to its bulk). With $\beta = \mu C_{ox}W/L$:

$$\beta_1 = (134\ \mu\mathrm{A/V^2})(40) = 5.36\ \mathrm{mA/V^2},\qquad \beta_2 = (38.4\ \mu\mathrm{A/V^2})(8.8) = 0.338\ \mathrm{mA/V^2}.$$

$M_2$ has $V_{SG2} = 3$ V, hence a fixed overdrive

$$V_{ov2} = V_{SG2} - |V_{THP}| = 3 - 0.8 = 2.2\ \mathrm{V}.$$

### Step 2 — The two region boundaries

**$M_2$** is saturated when $V_{SD2} \ge V_{ov2}$:

$$V_{DD} - V_{out} \ge 2.2\ \mathrm{V}\quad\Longleftrightarrow\quad V_{out} \le V_b + |V_{THP}| = 0.8\ \mathrm{V}.$$

Above 0.8 V it is in triode, where the circuit was designed to work (at 0.5 mA, $V_{out} = 2.17$ V and the gain is 5). Its saturation current, with $\lambda$ neglected for bias, is

$$I_{D2,sat} = \tfrac12\beta_2V_{ov2}^2 = \tfrac12(0.338\ \mathrm{mA/V^2})(2.2\ \mathrm{V})^2 = 0.818\ \mathrm{mA}.$$

**$M_1$** is saturated when $V_{out} \ge V_{ov1} = V_{in} - V_{TH}$, and reaches the **edge of triode** when $V_{out} = V_{ov1} = V_{in} - 0.7$ V.

### Step 3 — Which boundary is crossed first?

When $V_{out}$ reaches 0.8 V, $M_2$ is at the edge of saturation and carries 0.818 mA, so $M_1$'s overdrive is

$$V_{ov1} = \sqrt{\frac{2I_D}{\beta_1}} = \sqrt{\frac{2(0.818\ \mathrm{mA})}{5.36\ \mathrm{mA/V^2}}} = \sqrt{0.3051\ \mathrm{V^2}} = 0.552\ \mathrm{V}.$$

$V_{DS1} = 0.8$ V $> 0.552$ V, so $M_1$ is still saturated: **$M_2$ saturates first**, at

$$V_{in} = V_{TH} + V_{ov1} = 0.7 + 0.552 = 1.252\ \mathrm{V}.$$

### Step 4 — Where $M_1$ reaches the edge of triode

With both devices saturated ($\lambda = 0$ for bias), $M_2$ pins the current at 0.818 mA whatever $V_{out}$ is, which fixes $M_1$'s overdrive at 0.552 V and its input at 1.252 V. The transfer curve therefore has a **vertical segment** at this input: $V_{out}$ drops from 0.8 V down to the point where $M_1$ leaves saturation,

$$V_{out} = V_{ov1} = 0.552\ \mathrm{V}.$$

So $M_1$ reaches the edge of triode at

$$V_{in} \approx 1.25\ \mathrm{V},\qquad V_{out} = V_{in} - V_{TH} \approx 0.55\ \mathrm{V},\qquad I_D \approx 0.82\ \mathrm{mA}.$$

**With finite $\lambda$**, the vertical segment tilts into a steep line whose slope is the gain found below (about −12), so the 0.25-V drop from 0.8 V to 0.55 V takes only about $0.25/12 \approx 20$ mV of input: both edges stay very close to $V_{in} \approx 1.25$ V.

Region check: $V_{SD2} = 3 - 0.552 = 2.448$ V $> 2.2$ V, so $M_2$ is saturated ✓; $M_1$ is at its edge ($V_{DS1} = V_{ov1}$) ✓.

### Step 5 — Small-signal gain at this point

Both devices are saturated; $M_2$'s gate and source are at ac ground, so it contributes only $r_{O2}$. KCL at the output, $g_{m1}v_{in} + v_{out}/r_{O1} + v_{out}/r_{O2} = 0$, gives

$$A_v = -g_{m1}\,(r_{O1}\parallel r_{O2}).$$

At $I_D = 0.818$ mA:

$$
\begin{aligned}
g_{m1} &= \sqrt{2\beta_1I_D} = \sqrt{2(5.36\ \mathrm{mA/V^2})(0.818\ \mathrm{mA})} = 2.96\ \mathrm{mS}\quad(= \beta_1V_{ov1} = 5.36\times0.552),\\
r_{O1} &= \frac{1}{\lambda_nI_D} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.818\ \mathrm{mA})} = 12.2\ \mathrm{k\Omega},\\
r_{O2} &= \frac{1}{\lambda_pI_D} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.818\ \mathrm{mA})} = 6.11\ \mathrm{k\Omega},\\
r_{O1}\parallel r_{O2} &= \frac{12.2\times6.11}{12.2 + 6.11}\ \mathrm{k\Omega} = 4.08\ \mathrm{k\Omega},\\
A_v &= -(2.96\ \mathrm{mS})(4.08\ \mathrm{k\Omega}) \approx -12.1 .
\end{aligned}
$$

At the edge, $M_1$'s triode conductance $\beta_1(V_{ov1} - V_{DS1})$ has shrunk to zero, so the saturation model (with $r_{O1}$) is the right description. With $\lambda = 0$ the gain would be unbounded.

### Step 6 — The whole transfer curve (for orientation)

From the square-law equations ($\lambda = 0$):

| $V_{in}$ (V) | 0.7 | 0.9 | 1.0 | 1.132 | 1.2 | 1.25 | 1.252 | 1.30 | 1.5 |
|---|---|---|---|---|---|---|---|---|---|
| $V_{out}$ (V) | 3.00 | 2.85 | 2.65 | 2.17 | 1.74 | 1.01 | 0.80 → 0.55 | 0.37 | 0.22 |
| $M_1$ | edge of cut-off | sat | sat | sat | sat | sat | sat → edge | triode | triode |
| $M_2$ | triode | triode | triode | triode | triode | triode | edge → sat | sat | sat |

The design point (gain −5) is at $V_{in} = 1.132$ V. The curve steepens as $M_2$'s triode resistance rises toward saturation, drops (vertically for $\lambda = 0$) at $V_{in} \approx 1.25$ V with both devices saturated, and flattens once $M_1$ is in triode.

### Result

$M_1$ reaches the edge of the triode region at

$$V_{in} \approx 1.25\ \mathrm{V}\quad(V_{out} = V_{in} - V_{TH} \approx 0.55\ \mathrm{V},\ I_D \approx 0.82\ \mathrm{mA}).$$

$M_2$ is already saturated there, since it saturated when $V_{out}$ fell to 0.8 V. The small-signal gain is

$$A_v = -g_{m1}(r_{O1}\parallel r_{O2}) = -(2.96\ \mathrm{mS})(4.08\ \mathrm{k\Omega}) \approx -12,$$

much larger than the design value of 5, and unbounded if $\lambda = 0$.

**Common mistake.** Forcing $M_2$ to stay in triode and solving the triode equation with $V_{SD2} > 2.2$ V. Below $V_{out} = 0.8$ V, $M_2$ is saturated and its current is pinned at 0.818 mA.

**Common mistake.** Computing the gain with $M_2$ as a triode resistor (or keeping the design gain of 5). Here $M_2$ is saturated, with $r_{O2} = 6.1$ kΩ instead of the 2.16-kΩ triode value, and the gain rises to about −12.

**Common mistake.** Concluding that $M_1$ enters triode before $M_2$ saturates. At $V_{out} = 0.8$ V, $M_1$'s overdrive is only 0.55 V; $M_2$ saturates first, and $M_1$ reaches its edge at essentially the same input.
