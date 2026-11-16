# Detailed solution - R281

**Approach.** In subthreshold saturation, $V_{DS} \gg V_T$ makes the bracket in the current equation equal to 1, so $I_D$ depends only on $V_{GS}$, through an exponential. The transconductance is the derivative of $I_D$ with respect to $V_{GS}$ at constant $V_{DS}$. Differentiating an exponential returns the same exponential divided by the scale voltage $V_T$, which gives $g_m = I_D/V_T$.

### Step 1 — The model and its symbols

$$I_D = \mu C_d\frac{W}{L}V_T^2\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right)\left[1 - \exp\!\left(\frac{-V_{DS}}{V_T}\right)\right].$$

Here $\mu$ is the carrier mobility, $C_d$ the depletion capacitance per unit area, $W/L$ the aspect ratio, $V_{TH}$ the threshold voltage, and $V_T = kT/q$ the thermal voltage (about 26 mV at room temperature). Note that $V_T$ and $V_{TH}$ are different quantities.

The **transconductance** is defined as

$$g_m = \left.\frac{\partial I_D}{\partial V_{GS}}\right|_{V_{DS}\ \text{constant}},$$

the change in drain current per unit change in gate–source voltage.

### Step 2 — Saturation: the bracket becomes 1

For $V_{DS} \gg V_T$, the term $\exp(-V_{DS}/V_T)$ is negligible. For example, at $V_{DS} = 4V_T \approx 0.1$ V it is $e^{-4} = 0.018$, and it shrinks rapidly beyond that. So

$$1 - \exp\!\left(\frac{-V_{DS}}{V_T}\right) \approx 1,$$

and

$$I_D \approx \mu C_d\frac{W}{L}V_T^2\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right).$$

The current no longer depends on $V_{DS}$: this is subthreshold "saturation". It is reached after only a few $V_T$ of drain–source voltage, far less than the $V_{GS} - V_{TH}$ needed in strong inversion.

### Step 3 — Differentiate with respect to $V_{GS}$

Only the exponential depends on $V_{GS}$. Use the chain rule, $\frac{d}{dx}\exp(x/a) = \frac{1}{a}\exp(x/a)$, with $x = V_{GS} - V_{TH}$ and $a = V_T$:

$$
\begin{aligned}
g_m = \frac{\partial I_D}{\partial V_{GS}} &= \mu C_d\frac{W}{L}V_T^2\cdot\frac{1}{V_T}\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right)\\
&= \mu C_d\frac{W}{L}V_T\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right).
\end{aligned}
$$

### Step 4 — Express it in terms of the bias current

Compare with Step 2: the expression for $g_m$ is exactly $I_D$ divided by $V_T$:

$$g_m = \frac{1}{V_T}\left[\mu C_d\frac{W}{L}V_T^2\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right)\right] = \frac{I_D}{V_T}.$$

This is the same form as a bipolar transistor's $g_m = I_C/V_T$, because in subthreshold the current is carried by diffusion over a barrier controlled exponentially by the gate. (Real devices show $g_m = I_D/(\zeta V_T)$ with a nonideality factor $\zeta > 1$, since the gate controls the surface potential only partially. The model given here has $\zeta = 1$.)

### Step 5 — Interpretation and comparison with strong inversion

**Transconductance efficiency.** In subthreshold,

$$\frac{g_m}{I_D} = \frac{1}{V_T} \approx \frac{1}{26\ \mathrm{mV}} = 38.5\ \mathrm{V^{-1}},$$

independent of size and current. In strong inversion (square law), $g_m/I_D = 2/(V_{GS} - V_{TH})$, which is $10\ \mathrm{V^{-1}}$ for an overdrive of 0.2 V. Subthreshold operation thus gives the most transconductance per unit of bias current, at the cost of large devices and low speed.

**Numerical example.** At $I_D = 1\ \mu\mathrm{A}$:

$$g_m = \frac{1\ \mu\mathrm{A}}{26\ \mathrm{mV}} = 38.5\ \mu\mathrm{S},$$

whereas a square-law device with $V_{GS} - V_{TH} = 0.2$ V at the same current would have $g_m = 2(1\ \mu\mathrm{A})/(0.2\ \mathrm{V}) = 10\ \mu\mathrm{S}$.

**Link with the triode on-resistance.** In deep triode ($V_{DS} \ll V_T$) the same model gives $R_{on} = V_T/I_{D,sat}$, where $I_{D,sat}$ is the saturation current at the same $V_{GS}$. Numerically, then, $g_m$ in saturation equals $1/R_{on}$ in deep triode at the same $V_{GS}$.

### Result

In saturation ($V_{DS} \gg V_T$) the bracket is ≈ 1, so $I_D = \mu C_d\frac{W}{L}V_T^2\exp[(V_{GS} - V_{TH})/V_T]$, independent of $V_{DS}$, and

$$g_m = \frac{\partial I_D}{\partial V_{GS}} = \mu C_d\frac{W}{L}V_T\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right) = \frac{I_D}{V_T}.$$

**Common mistake.** Using the square-law formulas $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$ or $g_m = 2I_D/(V_{GS} - V_{TH})$. They assume a quadratic $I_D$–$V_{GS}$ law. In subthreshold the dependence is exponential, so $g_m$ is proportional to $I_D$ itself, not to its square root.

**Common mistake.** Multiplying instead of dividing, $g_m = I_DV_T$. Check the units: $g_m$ must be in A/V, and $I_D/V_T$ is; $I_DV_T$ is a power.

**Common mistake.** Forgetting to drop the $V_{DS}$ bracket before differentiating, or treating $V_T$ as the threshold voltage. In saturation the bracket is 1, and $V_T = kT/q$ is the thermal voltage, which is constant at a given temperature and is not differentiated.
