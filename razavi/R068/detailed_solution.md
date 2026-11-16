# Detailed solution - R068

**Approach.** At the edge of the triode region the drain–source voltage equals the overdrive: $V_{out} = V_{in} - V_{TH}$. Combine this with the load-line equation $V_{out} = V_{DD} - R_DI_D$ and the square law, which gives a quadratic equation for the overdrive. Then evaluate $g_m$ at that bias and use $A_v = -g_mR_D$.

### Step 1 — Reading the circuit and the data

From the figure: $M_1$ has its gate at $V_{in}$, its source and bulk at ground (no body effect), and its drain at $V_{out}$, connected to $V_{DD} = 3$ V through $R_D = 2\ \mathrm{k}\Omega$.

Device constant:

$$\beta = \mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})\times\frac{50}{0.5} = 13.4\ \mathrm{mA/V^2}.$$

Define the overdrive $V_{ov} = V_{in} - V_{TH}$ (since $V_{GS} = V_{in}$).

### Step 2 — The condition for the edge of triode

As $V_{in}$ rises, the current rises and $V_{out}$ falls. $M_1$ is saturated while $V_{DS} \ge V_{GS} - V_{TH}$, and it enters triode when $V_{DS}$ falls below the overdrive. The **edge of the triode region** is therefore

$$V_{out} = V_{DS} = V_{GS} - V_{TH} = V_{in} - V_{TH} = V_{ov} .$$

At this point the device is still described by the saturation law ($\lambda = 0$):

$$I_D = \frac12\,\beta\,V_{ov}^2 .$$

### Step 3 — Combine with the load line

**KVL** through $R_D$:

$$V_{out} = V_{DD} - R_DI_D = V_{DD} - R_D\cdot\frac12\beta V_{ov}^2 .$$

Impose the edge condition $V_{out} = V_{ov}$:

$$V_{ov} = V_{DD} - \frac12\beta R_D\,V_{ov}^2 .$$

Rearrange into standard quadratic form:

$$\frac12\beta R_D\,V_{ov}^2 + V_{ov} - V_{DD} = 0 .$$

The coefficient is

$$\frac12\beta R_D = \frac12(13.4\times10^{-3}\ \mathrm{A/V^2})(2\times10^{3}\ \Omega) = 13.4\ \mathrm{V^{-1}},$$

so

$$13.4\,V_{ov}^2 + V_{ov} - 3 = 0 \qquad (V_{ov}\ \text{in volts}).$$

### Step 4 — Solve for the overdrive and the input voltage

Using the quadratic formula and keeping the positive root (the overdrive must be positive):

$$V_{ov} = \frac{-1 + \sqrt{1^2 + 4(13.4)(3)}}{2(13.4)} = \frac{-1 + \sqrt{161.8}}{26.8} = \frac{-1 + 12.720}{26.8} = \frac{11.720}{26.8} = 0.437\ \mathrm{V}.$$

The input voltage is

$$V_{in} = V_{TH} + V_{ov} = 0.7 + 0.437 = 1.137\ \mathrm{V}.$$

**Check.** The current is

$$I_D = \frac12\beta V_{ov}^2 = \frac12(13.4\ \mathrm{mA/V^2})(0.437\ \mathrm{V})^2 = 6.7\times0.1912\ \mathrm{mA} = 1.281\ \mathrm{mA},$$

and the output voltage is

$$V_{out} = 3 - (2\ \mathrm{k}\Omega)(1.281\ \mathrm{mA}) = 3 - 2.563 = 0.437\ \mathrm{V} = V_{ov}.\ \checkmark$$

### Step 5 — Small-signal gain at the edge of triode

**Transconductance** at this bias (square-law form in terms of the overdrive):

$$g_m = \beta V_{ov} = (13.4\ \mathrm{mA/V^2})(0.437\ \mathrm{V}) = 5.86\ \mathrm{mS}.$$

**Small-signal model.** As for any saturated CS stage with $\lambda = 0$: $M_1$ is a current source $g_mv_{in}$ from the output to ground, and $R_D$ connects the output to ac ground ($V_{DD}$). **KCL at the output** gives $g_mv_{in} + v_{out}/R_D = 0$, so

$$A_v = \frac{v_{out}}{v_{in}} = -g_mR_D = -(5.86\times10^{-3}\ \mathrm{S})(2\times10^{3}\ \Omega) = -11.7 .$$

**Is the gain the same if approached from the triode side?** In triode, $I_D = \beta[V_{ov}V_{DS} - V_{DS}^2/2]$. Its small-signal parameters are

$$\frac{\partial I_D}{\partial V_{GS}} = \beta V_{DS}, \qquad \frac{\partial I_D}{\partial V_{DS}} = \beta(V_{ov} - V_{DS}).$$

At the edge, $V_{DS} = V_{ov}$, so the transconductance is $\beta V_{ov} = g_m$ (the same) and the output conductance is zero. The gain is therefore continuous: $-11.7$ from both sides. For larger $V_{in}$, deeper in triode, the transconductance $\beta V_{DS}$ falls and the output conductance rises, so the gain collapses.

**Comparison with the 1-mA bias point.** At $I_D = 1$ mA, $g_m = 5.18$ mS and $A_v = -10.35$. Biasing at the edge of triode, with the larger current 1.28 mA, gives the maximum gain this stage can reach in saturation, about $-11.7$, but leaves no margin for output swing downward.

### Result

At the edge of the triode region $V_{out} = V_{in} - V_{TH}$, and with $V_{out} = V_{DD} - R_D\cdot\tfrac12\beta(V_{in} - V_{TH})^2$:

$$13.4\,V_{ov}^2 + V_{ov} - 3 = 0 \;\Longrightarrow\; V_{ov} = 0.437\ \mathrm{V}, \qquad V_{in} = 0.7 + 0.437 \approx 1.137\ \mathrm{V}$$

($I_D \approx 1.28$ mA, $V_{out} \approx 0.437$ V). The small-signal gain there is

$$A_v = -g_mR_D = -\beta V_{ov}R_D = -(5.86\ \mathrm{mS})(2\ \mathrm{k}\Omega) \approx -11.7 .$$

**Common mistake.** Writing the edge condition as $V_{out} = V_{in}$ or $V_{out} = V_{TH}$. The boundary of saturation is $V_{DS} = V_{GS} - V_{TH}$, i.e. $V_{out} = V_{in} - V_{TH}$.

**Common mistake.** Reusing $g_m$ from the 1-mA bias point (gain −10.35). At the edge of triode the current is 1.28 mA and the overdrive 0.437 V, so $g_m$ is larger (5.86 mS).

**Common mistake.** Using the triode transconductance with a $V_{DS}$ different from $V_{ov}$, or adding a finite triode output resistance. Exactly at the edge, $\beta V_{DS} = \beta V_{ov}$ and the output conductance $\beta(V_{ov} - V_{DS})$ is zero, so the saturation result $-g_mR_D$ is exact.
