# Detailed solution - R069

**Approach.** "50 mV into triode" means $V_{DS} = V_{out} = V_{ov} - 50$ mV, where $V_{ov} = V_{in} - V_{TH}$. Combine this with the triode-region current and the load line $V_{out} = V_{DD} - R_DI_D$ to get a quadratic in $V_{ov}$. For the gain, use the triode small-signal model: a transconductance $\beta V_{DS}$ *and* a finite channel resistance $1/[\beta(V_{ov} - V_{DS})]$ that appears in parallel with $R_D$.

### Step 1 — The condition and the triode current

With

$$\beta = \mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}$$

and the overdrive $V_{ov} = V_{in} - V_{TH}$, the problem asks for

$$V_{DS} = V_{out} = V_{ov} - 0.05\ \mathrm{V},$$

i.e. the drain 50 mV below the saturation boundary $V_{DS} = V_{ov}$. In triode, expanding $(V_{ov} - V_{DS})^2 = V_{ov}^2 - 2V_{ov}V_{DS} + V_{DS}^2$,

$$I_D = \beta\left[V_{ov}V_{DS} - \frac{V_{DS}^2}{2}\right] = \frac{\beta}{2}\left[V_{ov}^2 - (V_{ov} - V_{DS})^2\right],$$

and with $V_{ov} - V_{DS} = 0.05$ V:

$$I_D = \frac{\beta}{2}\left[V_{ov}^2 - (0.05\ \mathrm{V})^2\right] = \frac{\beta}{2}\left[V_{ov}^2 - 0.0025\ \mathrm{V^2}\right],$$

only slightly below the saturation value $\tfrac12\beta V_{ov}^2$.

### Step 2 — Combine with the load line and solve

Substituting $V_{out} = V_{ov} - 0.05$ and this current into $V_{out} = V_{DD} - R_DI_D$, with $\tfrac12\beta R_D = \tfrac12(13.4\times10^{-3})(2\times10^3) = 13.4\ \mathrm{V^{-1}}$:

$$V_{ov} - 0.05 = 3 - \frac{\beta R_D}{2}\left(V_{ov}^2 - 0.0025\right) = 3 - 13.4V_{ov}^2 + 13.4\times0.0025 = 3.0335 - 13.4V_{ov}^2 ,$$

$$13.4V_{ov}^2 + V_{ov} - 3.0835 = 0 .$$

Positive root:

$$V_{ov} = \frac{-1 + \sqrt{1 + 4(13.4)(3.0835)}}{2(13.4)} = \frac{-1 + \sqrt{166.28}}{26.8} = \frac{-1 + 12.895}{26.8} = \frac{11.895}{26.8} = 0.4438\ \mathrm{V}.$$

Hence

$$V_{in} = V_{TH} + V_{ov} = 0.7 + 0.4438 = 1.144\ \mathrm{V}, \qquad V_{out} = V_{ov} - 0.05 = 0.394\ \mathrm{V}.$$

**Check.** $I_D = \tfrac12(13.4\ \mathrm{mA/V^2})(0.4438^2 - 0.0025)\ \mathrm{V^2} = 6.7\times0.1945\ \mathrm{mA} = 1.303$ mA, and $V_{DD} - R_DI_D = 3 - 2.606 = 0.394$ V. ✓

The edge of triode ($V_{DS} = V_{ov}$) occurs at $V_{in} = 1.137$ V, so moving 50 mV into triode takes only about 7 mV more input: near the edge the output falls about 11.7 times faster than the input rises.

### Step 3 — Small-signal parameters in the triode region

Differentiating $I_D = \beta[V_{ov}V_{DS} - V_{DS}^2/2]$ (with $V_{ov} = V_{GS} - V_{TH}$):

$$g_m = \frac{\partial I_D}{\partial V_{GS}} = \beta V_{DS} = (13.4\ \mathrm{mA/V^2})(0.394\ \mathrm{V}) = 5.28\ \mathrm{mS},$$

$$g_{ds} = \frac{\partial I_D}{\partial V_{DS}} = \beta(V_{ov} - V_{DS}) = (13.4\ \mathrm{mA/V^2})(0.05\ \mathrm{V}) = 0.67\ \mathrm{mS}, \qquad r_{ds} = \frac{1}{g_{ds}} = 1.49\ \mathrm{k}\Omega.$$

In saturation ($\lambda = 0$) the device has no output conductance; in triode the channel acts partly as a resistor, here comparable with $R_D$.

### Step 4 — Small-signal model and gain

The output node connects to the controlled source $g_mv_{in}$ and the channel resistance $r_{ds}$, both to ground, and to $R_D$ to ac ground ($V_{DD}$).

<!-- diagram: diagram-01.cir -->

KCL at the output node (sum of currents leaving = 0):

$$g_mv_{in} + g_{ds}v_{out} + \frac{v_{out}}{R_D} = 0 \quad\Longrightarrow\quad A_v = \frac{v_{out}}{v_{in}} = -\frac{g_m}{g_{ds} + 1/R_D} = -g_m\,(r_{ds}\parallel R_D) .$$

With $1/R_D = 0.5$ mS:

$$A_v = -\frac{5.28\ \mathrm{mS}}{0.67\ \mathrm{mS} + 0.5\ \mathrm{mS}} = -\frac{5.28}{1.17} = -4.5 .$$

At the edge of triode the gain was $-11.7$, so about 7 mV more input cuts it by a factor of about 2.6. The main reason is the channel resistance $r_{ds}$ shunting $R_D$ (1.49 kΩ in parallel with 2 kΩ is 0.85 kΩ); the transconductance also drops slightly, from 5.86 to 5.28 mS. This is why amplifying transistors are kept out of the triode region.

### Result

Driving $M_1$ 50 mV into triode ($V_{out} = V_{in} - V_{TH} - 0.05$ V) requires

$$13.4V_{ov}^2 + V_{ov} - 3.0835 = 0 \;\Longrightarrow\; V_{ov} = 0.444\ \mathrm{V}, \qquad V_{in} \approx 1.144\ \mathrm{V},$$

with $V_{out} \approx 0.394$ V and $I_D \approx 1.30$ mA. The small-signal gain there is

$$A_v = -\frac{\beta V_{DS}}{\beta(V_{ov} - V_{DS}) + 1/R_D} = -\frac{5.28\ \mathrm{mS}}{0.67\ \mathrm{mS} + 0.5\ \mathrm{mS}} \approx -4.5 .$$

**Common mistake.** Ignoring the triode output conductance and writing $A_v = -\beta V_{DS}R_D \approx -10.6$. In triode the channel resistance $1/[\beta(V_{ov} - V_{DS})] \approx 1.5\ \mathrm{k}\Omega$ appears in parallel with $R_D$ and more than halves the gain.

**Common mistake.** Keeping the saturation gain ($\approx -11.7$) in triode. The saturation formula assumes zero output conductance, which no longer holds once $V_{DS} < V_{GS} - V_{TH}$.

**Common mistake.** Finding the input by adding 50 mV to the edge-of-triode input (giving 1.187 V). The condition is on $V_{DS}$ relative to $V_{GS} - V_{TH}$, not on $V_{in}$; near the edge the stage has high gain, so a 50-mV change in that margin needs only a few millivolts of input.
