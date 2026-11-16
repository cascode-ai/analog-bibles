# Detailed solution - R072

**Approach.** The small-signal gain magnitude of the saturated CS stage with $\lambda = 0$ is $g_mR_D$. At each output voltage, the load line gives the drain current, the square law gives $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$, and hence the gain. Writing the gain directly as a function of $V_{out}$ shows how much it changes over the swing.

### Step 1 — Data and the gain expression

From the figure: $M_1$ has its gate at $V_{in}$, its source and bulk at ground, and its drain at $V_{out}$, connected to $V_{DD} = 3$ V through $R_D = 2\ \mathrm{k}\Omega$. The device constant is

$$\beta = \mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})\times100 = 13.4\ \mathrm{mA/V^2}.$$

**Small-signal model.** $M_1$ is a current source $g_mv_{in}$ from the output to ground, and $R_D$ connects the output to ac ground. **KCL at the output** gives $g_mv_{in} + v_{out}/R_D = 0$, so $A_v = -g_mR_D$, with magnitude $g_mR_D$.

### Step 2 — Gain as a function of the output voltage

**Load line** (KVL across $R_D$):

$$I_D = \frac{V_{DD} - V_{out}}{R_D} .$$

**Square-law transconductance:**

$$g_m = \sqrt{2\beta I_D} = \sqrt{\frac{2\beta\,(V_{DD} - V_{out})}{R_D}} .$$

**Gain magnitude:**

$$g_mR_D = R_D\sqrt{\frac{2\beta(V_{DD} - V_{out})}{R_D}} = \sqrt{2\beta R_D\,(V_{DD} - V_{out})} .$$

With $2\beta R_D = 2(13.4\times10^{-3}\ \mathrm{A/V^2})(2\times10^{3}\ \Omega) = 53.6\ \mathrm{V^{-1}}$:

$$g_mR_D = \sqrt{53.6\ \mathrm{V^{-1}}\times(3\ \mathrm{V} - V_{out})} .$$

The gain is largest when the output is low (large current) and falls as the output rises toward $V_{DD}$. This dependence of the small-signal gain on the signal level *is* the nonlinearity of the stage.

### Step 3 — The two ends of the swing

**At $V_{out} = 1$ V:**

$$I_D = \frac{3 - 1\ \mathrm{V}}{2\ \mathrm{k}\Omega} = 1\ \mathrm{mA}, \qquad g_m = \sqrt{2(13.4\ \mathrm{mA/V^2})(1\ \mathrm{mA})} = 5.18\ \mathrm{mS},$$

$$g_mR_D = (5.18\ \mathrm{mS})(2\ \mathrm{k}\Omega) = 10.35 .$$

**At $V_{out} = 2.5$ V:**

$$I_D = \frac{3 - 2.5\ \mathrm{V}}{2\ \mathrm{k}\Omega} = 0.25\ \mathrm{mA}, \qquad g_m = \sqrt{2(13.4\ \mathrm{mA/V^2})(0.25\ \mathrm{mA})} = 2.59\ \mathrm{mS},$$

$$g_mR_D = (2.59\ \mathrm{mS})(2\ \mathrm{k}\Omega) = 5.18 .$$

Both points are in saturation: the overdrives are $\sqrt{2I_D/\beta} = 0.386$ V and $0.193$ V, below $V_{DS} = 1$ V and 2.5 V respectively, so the formula $g_mR_D$ applies over the whole swing.

### Step 4 — How much does the gain vary?

**Ratio** of the two gains:

$$\frac{g_mR_D\,|_{V_{out} = 1\ \mathrm{V}}}{g_mR_D\,|_{V_{out} = 2.5\ \mathrm{V}}} = \sqrt{\frac{V_{DD} - 1\ \mathrm{V}}{V_{DD} - 2.5\ \mathrm{V}}} = \sqrt{\frac{2}{0.5}} = \sqrt4 = 2 .$$

The gain changes by a **factor of 2**: from 10.35 down to 5.18, a change of about 5.2, i.e. a 50 % drop from its maximum value. Intermediate points from the formula of Step 2:

| $V_{out}$ (V) | 1.0 | 1.5 | 2.0 | 2.5 |
|---|---|---|---|---|
| $I_D$ (mA) | 1.0 | 0.75 | 0.5 | 0.25 |
| $g_mR_D$ | 10.35 | 8.97 | 7.32 | 5.18 |

**Why.** A 4:1 change in current produces only a 2:1 change in $g_m$, because $g_m \propto \sqrt{I_D}$ for a square-law device. The gain therefore varies as the square root of the voltage across $R_D$. A large output swing makes the gain depend strongly on where the signal is, so the output is a distorted version of the input. To reduce this, one can limit the swing, or use a load and device arrangement whose gain depends less on the current.

### Result

$$g_mR_D = \sqrt{2\mu_nC_{ox}\frac{W}{L}R_D\,(V_{DD} - V_{out})}$$

goes from about **10.35** at $V_{out} = 1$ V ($I_D = 1$ mA, $g_m = 5.18$ mS) to about **5.18** at $V_{out} = 2.5$ V ($I_D = 0.25$ mA, $g_m = 2.59$ mS): it varies by a **factor of 2** (a change of about 5.2, or 50 % of the maximum) over the swing.

**Common mistake.** Concluding that the gain varies by a factor of 4 because the current does. The square-law transconductance is proportional to $\sqrt{I_D}$, so the gain changes only by $\sqrt4 = 2$.

**Common mistake.** Treating the gain as constant over the swing (using one bias-point value for the whole range). The gain $g_mR_D$ depends on the instantaneous current; its variation is exactly the nonlinearity the problem refers to.
