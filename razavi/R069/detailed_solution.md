# Detailed solution - R069

**Approach.** "50 mV into triode" means $V_{DS} = V_{out} = V_{ov} - 50$ mV, where $V_{ov} = V_{in} - V_{TH}$. Combine this with the triode-region current and the load line $V_{out} = V_{DD} - R_DI_D$ to get a quadratic in $V_{ov}$. For the gain, use the triode small-signal model: a transconductance $\beta V_{DS}$ *and* a finite channel resistance $1/[\beta(V_{ov} - V_{DS})]$ that appears in parallel with $R_D$.

### Step 1 — Data and the condition

From the figure: $M_1$ has its gate at $V_{in}$, source and bulk at ground, and drain at $V_{out}$, connected to $V_{DD} = 3$ V through $R_D = 2\ \mathrm{k}\Omega$. The device constant is

$$\beta = \mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}.$$

Let $V_{ov} = V_{in} - V_{TH}$ be the overdrive. The problem asks for

$$V_{DS} = V_{out} = V_{ov} - 0.05\ \mathrm{V},$$

i.e. the drain is 50 mV below the saturation boundary $V_{DS} = V_{ov}$.

### Step 2 — Triode current in a convenient form

In the **triode region** the square-law current is

$$I_D = \beta\left[V_{ov}V_{DS} - \frac{V_{DS}^2}{2}\right] = \frac{\beta}{2}\left[V_{ov}^2 - (V_{ov} - V_{DS})^2\right].$$

(The second form follows from expanding $(V_{ov} - V_{DS})^2 = V_{ov}^2 - 2V_{ov}V_{DS} + V_{DS}^2$.) With $V_{ov} - V_{DS} = 0.05$ V:

$$I_D = \frac{\beta}{2}\left[V_{ov}^2 - (0.05\ \mathrm{V})^2\right] = \frac{\beta}{2}\left[V_{ov}^2 - 0.0025\ \mathrm{V^2}\right].$$

The current is only slightly below the saturation value $\tfrac12\beta V_{ov}^2$.

### Step 3 — Combine with the load line and solve

**KVL** through $R_D$: $V_{out} = V_{DD} - R_DI_D$. Substitute $V_{out} = V_{ov} - 0.05$ and the current from Step 2:

$$V_{ov} - 0.05 = 3 - \frac{\beta R_D}{2}\left(V_{ov}^2 - 0.0025\right).$$

With $\tfrac12\beta R_D = \tfrac12(13.4\times10^{-3})(2\times10^3) = 13.4\ \mathrm{V^{-1}}$:

$$V_{ov} - 0.05 = 3 - 13.4V_{ov}^2 + 13.4\times0.0025 = 3.0335 - 13.4V_{ov}^2 .$$

Collect all terms on one side:

$$13.4V_{ov}^2 + V_{ov} - 3.0835 = 0 .$$

Positive root of the quadratic:

$$V_{ov} = \frac{-1 + \sqrt{1 + 4(13.4)(3.0835)}}{2(13.4)} = \frac{-1 + \sqrt{166.28}}{26.8} = \frac{-1 + 12.895}{26.8} = \frac{11.895}{26.8} = 0.4438\ \mathrm{V}.$$

Hence

$$V_{in} = V_{TH} + V_{ov} = 0.7 + 0.4438 = 1.144\ \mathrm{V}, \qquad V_{out} = V_{ov} - 0.05 = 0.394\ \mathrm{V}.$$

**Check.** $I_D = \tfrac12(13.4\ \mathrm{mA/V^2})(0.4438^2 - 0.0025)\ \mathrm{V^2} = 6.7\times0.1945\ \mathrm{mA} = 1.303$ mA, and $V_{DD} - R_DI_D = 3 - 2.606 = 0.394$ V. ✓

For comparison, the edge of triode ($V_{DS} = V_{ov}$) occurs at $V_{in} = 1.137$ V. Moving 50 mV into triode takes only about 7 mV more input, because near the edge the output falls about 11.7 times faster than the input rises.

### Step 4 — Small-signal parameters in the triode region

Differentiate the triode current $I_D = \beta[V_{ov}V_{DS} - V_{DS}^2/2]$ (with $V_{ov} = V_{GS} - V_{TH}$):

**Transconductance** (at constant $V_{DS}$):

$$g_m = \frac{\partial I_D}{\partial V_{GS}} = \beta V_{DS} = (13.4\ \mathrm{mA/V^2})(0.394\ \mathrm{V}) = 5.28\ \mathrm{mS}.$$

**Output (channel) conductance** (at constant $V_{GS}$):

$$g_{ds} = \frac{\partial I_D}{\partial V_{DS}} = \beta(V_{ov} - V_{DS}) = (13.4\ \mathrm{mA/V^2})(0.05\ \mathrm{V}) = 0.67\ \mathrm{mS}, \qquad r_{ds} = \frac{1}{g_{ds}} = 1.49\ \mathrm{k}\Omega.$$

In saturation ($\lambda = 0$) the device has no output conductance; in triode the channel behaves partly like a resistor, and its resistance (1.49 kΩ) is comparable with $R_D$.

### Step 5 — Small-signal model and gain

**Small-signal model.** The output node connects to: the controlled source $g_mv_{in}$ from the output to ground, the channel resistance $r_{ds}$ from the output to ground, and $R_D$ to ac ground ($V_{DD}$).

<!-- diagram: diagram-01.cir -->

**KCL at the output node** (sum of currents leaving = 0):

$$g_mv_{in} + g_{ds}v_{out} + \frac{v_{out}}{R_D} = 0 .$$

Solve for the gain:

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{g_m}{g_{ds} + 1/R_D} = -g_m\,(r_{ds}\parallel R_D) .$$

Numbers ($1/R_D = 0.5$ mS):

$$A_v = -\frac{5.28\ \mathrm{mS}}{0.67\ \mathrm{mS} + 0.5\ \mathrm{mS}} = -\frac{5.28}{1.17} = -4.5 .$$

**Interpretation.** At the edge of triode the gain was $-11.7$. Only about 7 mV more input, putting the device 50 mV into triode, cuts the gain by a factor of about 2.6. The main reason is the channel resistance $r_{ds}$, which shunts $R_D$ (1.49 kΩ in parallel with 2 kΩ is 0.85 kΩ). The transconductance also drops slightly, from 5.86 to 5.28 mS. This is why amplifying transistors are kept out of the triode region.

### Result

Driving $M_1$ 50 mV into triode ($V_{out} = V_{in} - V_{TH} - 0.05$ V) requires

$$13.4V_{ov}^2 + V_{ov} - 3.0835 = 0 \;\Longrightarrow\; V_{ov} = 0.444\ \mathrm{V}, \qquad V_{in} \approx 1.144\ \mathrm{V},$$

with $V_{out} \approx 0.394$ V and $I_D \approx 1.30$ mA. The small-signal gain there is

$$A_v = -\frac{\beta V_{DS}}{\beta(V_{ov} - V_{DS}) + 1/R_D} = -\frac{5.28\ \mathrm{mS}}{0.67\ \mathrm{mS} + 0.5\ \mathrm{mS}} \approx -4.5 .$$

**Common mistake.** Ignoring the triode output conductance and writing $A_v = -\beta V_{DS}R_D \approx -10.6$. In triode the channel resistance $1/[\beta(V_{ov} - V_{DS})] \approx 1.5\ \mathrm{k}\Omega$ appears in parallel with $R_D$ and more than halves the gain.

**Common mistake.** Keeping the saturation gain ($\approx -11.7$) in triode. The saturation formula assumes zero output conductance, which no longer holds once $V_{DS} < V_{GS} - V_{TH}$.

**Common mistake.** Finding the input by adding 50 mV to the edge-of-triode input (giving 1.187 V). The condition is on $V_{DS}$ relative to $V_{GS} - V_{TH}$, not on $V_{in}$; because the stage has high gain near the edge, a 50-mV change in that margin needs only a few millivolts of input.
