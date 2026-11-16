# Detailed solution - R066

**Approach.** The output swing of a CS stage with a current-source load is limited at the bottom by $M_1$ leaving saturation (when $V_{out}$ falls below $M_1$'s overdrive) and at the top by $M_2$ leaving saturation (when $V_{DD} - V_{out}$ falls below $M_2$'s overdrive). Compute both overdrives from the square law at $I_D = 0.5$ mA; the swing is $V_{DD}$ minus the two overdrives.

### Step 1 — Reading the circuit

From the figure:

- $M_1$ (NMOS): gate at $V_{in}$, source at ground, drain at $V_{out}$. So $V_{DS1} = V_{out}$.
- $M_2$ (PMOS): source at $V_{DD} = 3$ V, gate at the bias voltage $V_b$, drain at $V_{out}$. So $V_{SD2} = V_{DD} - V_{out}$.

Both carry $I_D = 0.5$ mA. The bias voltages $V_{in}$ (dc part) and $V_b$ set the gate–source voltages; the output voltage only changes $V_{DS1}$ and $V_{SD2}$.

### Step 2 — Saturation conditions

**$M_1$ saturated** when its drain–source voltage is at least its overdrive $V_{ov1} = V_{GS1} - V_{TH1}$:

$$V_{DS1} \ge V_{ov1} \quad\Longleftrightarrow\quad V_{out} \ge V_{ov1} .$$

**$M_2$ saturated** when its source–drain voltage is at least its overdrive $|V_{ov2}| = V_{SG2} - |V_{TH2}|$:

$$V_{SD2} \ge |V_{ov2}| \quad\Longleftrightarrow\quad V_{DD} - V_{out} \ge |V_{ov2}| \quad\Longleftrightarrow\quad V_{out} \le V_{DD} - |V_{ov2}| .$$

Both devices are saturated, and the stage has its full gain, for

$$V_{ov1} \le V_{out} \le V_{DD} - |V_{ov2}| .$$

Only the overdrives matter, not the threshold voltages: the thresholds are part of $V_{GS}$, which is set by the bias, not of the $V_{DS}$ needed to stay saturated.

### Step 3 — Overdrive of $M_1$

From the **square law** $I_D = \tfrac12\mu_nC_{ox}(W/L)_1V_{ov1}^2$, with $(W/L)_1 = 50/0.5 = 100$:

$$V_{ov1} = \sqrt{\frac{2I_D}{\mu_nC_{ox}(W/L)_1}} = \sqrt{\frac{2(0.5\times10^{-3}\ \mathrm{A})}{(134\times10^{-6}\ \mathrm{A/V^2})(100)}} = \sqrt{\frac{1\times10^{-3}}{1.34\times10^{-2}}}\ \mathrm{V} = \sqrt{0.0746}\ \mathrm{V} = 0.273\ \mathrm{V}.$$

### Step 4 — Overdrive of $M_2$

For the PMOS, $(W/L)_2 = 50/2 = 25$ (note the 2-µm length) and $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$:

$$|V_{ov2}| = \sqrt{\frac{2I_D}{\mu_pC_{ox}(W/L)_2}} = \sqrt{\frac{2(0.5\times10^{-3}\ \mathrm{A})}{(38.4\times10^{-6}\ \mathrm{A/V^2})(25)}} = \sqrt{\frac{1\times10^{-3}}{9.6\times10^{-4}}}\ \mathrm{V} = \sqrt{1.042}\ \mathrm{V} = 1.021\ \mathrm{V}.$$

The PMOS needs a large overdrive because its mobility is low and its long channel makes $W/L$ small. (This long $L$ is chosen for a high $r_{O2}$, i.e. high gain; the price is headroom.)

### Step 5 — Limits and swing

**Lower limit** ($M_1$ at the edge of saturation):

$$V_{out,min} = V_{ov1} = 0.273\ \mathrm{V}.$$

**Upper limit** ($M_2$ at the edge of saturation):

$$V_{out,max} = V_{DD} - |V_{ov2}| = 3 - 1.021 = 1.979\ \mathrm{V}.$$

**Maximum swing:**

$$\Delta V_{out,max} = V_{out,max} - V_{out,min} = V_{DD} - V_{ov1} - |V_{ov2}| = 3 - 0.273 - 1.021 = 1.706\ \mathrm{V} \approx 1.71\ \mathrm{V}.$$

**Bias voltages for reference.** $V_{GS1} = 0.7 + 0.273 = 0.973$ V sets the dc input level. $V_{SG2} = 0.8 + 1.021 = 1.821$ V, so $V_b = 3 - 1.821 = 1.179$ V. For a symmetric swing, the quiescent output would be placed at the midpoint, $(0.273 + 1.979)/2 \approx 1.13$ V, allowing about ±0.85 V.

### Result

$$0.273\ \mathrm{V} = V_{GS1} - V_{TH1} \;\le\; V_{out} \;\le\; V_{DD} - |V_{GS2} - V_{TH2}| = 3 - 1.021 = 1.979\ \mathrm{V},$$

so the maximum output swing with both devices saturated is

$$V_{DD} - V_{ov1} - |V_{ov2}| \approx 1.71\ \mathrm{V}.$$

**Common mistake.** Including the threshold voltages in the limits, e.g. $V_{out,min} = V_{GS1} = 0.97$ V or $V_{out,max} = V_{DD} - V_{SG2} = 1.18$ V. Saturation requires $V_{DS} \ge V_{GS} - V_{TH}$, the overdrive, not $V_{DS} \ge V_{GS}$.

**Common mistake.** Using $(W/L)_2 = 50/0.5$ or $\mu_nC_{ox}$ for the PMOS. With $(W/L)_2 = 25$ and $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$ the PMOS overdrive is about 1.02 V; using the wrong values gives a much smaller overdrive and an overly optimistic swing.
