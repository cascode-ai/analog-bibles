# Detailed solution - R281

**Approach.** In subthreshold saturation, $V_{DS} \gg V_T$ makes the bracket in the current equation equal to 1, so $I_D$ depends on $V_{GS}$ only through an exponential. Differentiating with respect to $V_{GS}$ returns the same exponential divided by $V_T$, which gives $g_m = I_D/V_T$.

### Step 1 — Saturation: the bracket becomes 1

For $V_{DS} \gg V_T$, $\exp(-V_{DS}/V_T)$ is negligible (at $V_{DS} = 4V_T \approx 0.1$ V it is already $e^{-4} = 0.018$), so

$$1 - \exp\!\left(\frac{-V_{DS}}{V_T}\right) \approx 1, \qquad I_D \approx \mu C_d\frac{W}{L}V_T^2\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right).$$

The current no longer depends on $V_{DS}$: subthreshold "saturation" is reached after only a few $V_T$ of drain–source voltage, far less than the $V_{GS} - V_{TH}$ needed in strong inversion.

### Step 2 — Differentiate with respect to $V_{GS}$

Only the exponential depends on $V_{GS}$, so at constant $V_{DS}$

$$
\begin{aligned}
g_m = \frac{\partial I_D}{\partial V_{GS}} &= \mu C_d\frac{W}{L}V_T^2\cdot\frac{1}{V_T}\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right)\\
&= \mu C_d\frac{W}{L}V_T\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right).
\end{aligned}
$$

### Step 3 — Express it in terms of the bias current

Comparing with Step 1, this is exactly $I_D$ divided by $V_T$:

$$g_m = \frac{1}{V_T}\left[\mu C_d\frac{W}{L}V_T^2\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right)\right] = \frac{I_D}{V_T},$$

the same form as a bipolar transistor's $g_m = I_C/V_T$. (Real devices show $g_m = I_D/(\zeta V_T)$ with a nonideality factor $\zeta > 1$, since the gate controls the surface potential only partially; the model given here has $\zeta = 1$.)

### Step 4 — Interpretation and comparison with strong inversion

**Transconductance efficiency.** In subthreshold,

$$\frac{g_m}{I_D} = \frac{1}{V_T} \approx \frac{1}{26\ \mathrm{mV}} = 38.5\ \mathrm{V^{-1}},$$

independent of size and current. In strong inversion (square law), $g_m/I_D = 2/(V_{GS} - V_{TH})$, which is $10\ \mathrm{V^{-1}}$ for an overdrive of 0.2 V. Subthreshold operation gives the most transconductance per unit of bias current, at the cost of large devices and low speed.

**Numerical example.** At $I_D = 1\ \mu\mathrm{A}$:

$$g_m = \frac{1\ \mu\mathrm{A}}{26\ \mathrm{mV}} = 38.5\ \mu\mathrm{S},$$

whereas a square-law device with $V_{GS} - V_{TH} = 0.2$ V at the same current would have $g_m = 2(1\ \mu\mathrm{A})/(0.2\ \mathrm{V}) = 10\ \mu\mathrm{S}$.

**Link with the triode on-resistance.** In deep triode ($V_{DS} \ll V_T$) the same model gives $R_{on} = V_T/I_{D,sat}$, with $I_{D,sat}$ the saturation current at the same $V_{GS}$; numerically, $g_m$ in saturation equals $1/R_{on}$ in deep triode at the same $V_{GS}$.

### Result

In saturation ($V_{DS} \gg V_T$) the bracket is ≈ 1, so $I_D = \mu C_d\frac{W}{L}V_T^2\exp[(V_{GS} - V_{TH})/V_T]$, independent of $V_{DS}$, and

$$g_m = \frac{\partial I_D}{\partial V_{GS}} = \mu C_d\frac{W}{L}V_T\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right) = \frac{I_D}{V_T}.$$

**Common mistake.** Using the square-law formulas $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$ or $g_m = 2I_D/(V_{GS} - V_{TH})$. In subthreshold the $I_D$–$V_{GS}$ law is exponential, so $g_m$ is proportional to $I_D$ itself, not to its square root.

**Common mistake.** Writing $g_m = I_DV_T$. $g_m$ must be in A/V, which $I_D/V_T$ is; $I_DV_T$ is a power.

**Common mistake.** Differentiating with the $V_{DS}$ bracket still in place, or treating $V_T$ as the threshold voltage. In saturation the bracket is 1, and $V_T = kT/q$ is a constant at a given temperature.
