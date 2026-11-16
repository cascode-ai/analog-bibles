# Detailed solution - R515

**Approach.** First note what the ideal square law predicts in saturation and in triode: it never predicts a falling $g_m$. Then add the two facts that matter in this measurement. $V_{DS}$ is held at only 200 mV, so at large overdrive the device is in the triode region. And the vertical gate field degrades the carrier mobility. A short calculation with a mobility-degradation model shows that together they make $\partial I_D/\partial V_{GS}$ decrease.

### Step 1 — What the plot shows

Readings from the figure ($V_{DS} = 200$ mV fixed; $g_m = \partial I_D/\partial V_{GS}$ is the transconductance):

| $V_{GS} - V_{TH}$ (V) | 0.1 | 0.2 | 0.3 | 0.4 | 0.45 | 0.5 | 0.55 | 0.6 |
|---|---|---|---|---|---|---|---|---|
| $g_m$ (mS) | 0.46 | 1.5 | 3.0 | 4.4 | 4.85 | 5.0 | 5.0 | 4.8 |

Three regions are visible:
- **0 to about 0.15 V:** a slow, curving rise (moderate inversion near threshold).
- **About 0.2 to 0.4 V:** a nearly linear rise, as the square law predicts in saturation, about 15 mS per volt of overdrive.
- **Above about 0.4 V:** the rise slows, $g_m$ peaks at about 5.0 mS near $V_{GS} - V_{TH} \approx 0.5$ V, and then **decreases**, to about 4.8 mS at 0.6 V.

We must explain the last region: why more gate drive gives *less* incremental current.

### Step 2 — The ideal square law cannot explain a falling $g_m$

Write $V_{ov} = V_{GS} - V_{TH}$ (the overdrive voltage), $\mu$ for the carrier mobility, $C_{ox}$ for the gate-oxide capacitance per unit area, and $W/L = 5\ \mu\mathrm{m}/40\ \mathrm{nm} = 125$.

**Saturation** ($V_{DS} \ge V_{ov}$ in the square law):

$$I_D = \tfrac12\mu C_{ox}\frac WL V_{ov}^2 \quad\Longrightarrow\quad g_m = \frac{\partial I_D}{\partial V_{GS}} = \mu C_{ox}\frac WL V_{ov},$$

which **rises** linearly without limit.

**Triode** ($V_{DS} < V_{ov}$):

$$I_D = \mu C_{ox}\frac WL\left(V_{ov}V_{DS} - \tfrac12V_{DS}^2\right) \quad\Longrightarrow\quad g_m = \mu C_{ox}\frac WL V_{DS},$$

which is **constant**: it does not depend on $V_{ov}$ at all.

So with a constant mobility the curve could at most flatten. A decrease needs a mobility that falls with $V_{GS}$.

### Step 3 — At $V_{DS} = 200$ mV the device is in (or entering) triode

By the square-law criterion the transistor leaves saturation when $V_{ov} > V_{DS} = 0.2$ V. In this 40-nm device velocity saturation lowers the knee voltage $V_{D,sat}$ well below $V_{ov}$. A common model is $V_{D,sat} = V_{ov}E_cL/(V_{ov} + E_cL)$, with $E_c$ the critical lateral field. This is why $g_m$ keeps growing up to about 0.4 V.

$V_{D,sat}$ still increases with $V_{ov}$, however. At overdrives of about 0.5 V and above it reaches and then exceeds the fixed 200 mV, and the device operates in the triode region. There, as Step 2 shows, extra overdrive by itself no longer adds transconductance: $g_m \to \mu C_{ox}(W/L)V_{DS}$.

A rough consistency check: if the peak value 5 mS is the triode value $\mu C_{ox}(W/L)V_{DS}$, then

$$\mu C_{ox} = \frac{g_m}{(W/L)\,V_{DS}} = \frac{5\ \mathrm{mS}}{125\times0.2\ \mathrm{V}} = 200\ \mu\mathrm{A/V^2},$$

a reasonable effective value for a 40-nm NMOS device.

### Step 4 — Mobility degradation by the vertical field

The gate voltage creates a **vertical** electric field across the oxide, roughly proportional to $V_{GS} - V_{TH}$ (plus a $V_{TH}$-related term). This field pulls the electrons tightly against the Si–SiO₂ interface, where surface-roughness scattering is strong. The effective mobility therefore falls as $V_{GS}$ rises. A standard model is

$$\mu_{eff} = \frac{\mu_0}{1 + \theta V_{ov}},$$

where $\mu_0$ is the low-field mobility and $\theta$ (in V⁻¹) is the degradation coefficient. It is large in thin-oxide processes.

**Triode current with degraded mobility:**

$$I_D = \frac{\mu_0C_{ox}(W/L)\left(V_{ov}V_{DS} - \tfrac12V_{DS}^2\right)}{1 + \theta V_{ov}} .$$

**Differentiate** with the quotient rule, holding $V_{DS}$ constant. Write $k = \mu_0C_{ox}W/L$:

$$
\begin{aligned}
g_m &= k\,\frac{V_{DS}(1 + \theta V_{ov}) - \theta\left(V_{ov}V_{DS} - \tfrac12V_{DS}^2\right)}{(1 + \theta V_{ov})^2}\\
&= k\,\frac{V_{DS} + \theta V_{ov}V_{DS} - \theta V_{ov}V_{DS} + \tfrac12\theta V_{DS}^2}{(1 + \theta V_{ov})^2}\\
&= k\,\frac{V_{DS}\left(1 + \tfrac12\theta V_{DS}\right)}{(1 + \theta V_{ov})^2}.
\end{aligned}
$$

The numerator is fixed (because $V_{DS}$ is fixed), and the denominator grows with $V_{ov}$. So in triode **$g_m$ decreases monotonically as the overdrive increases**, which is exactly the behaviour beyond the peak.

**Physical picture.** Raising $V_{GS}$ by $\Delta V$ does two things:
1. It adds channel charge, $\Delta Q \approx C_{ox}WL\,\Delta V$, which carries extra current. This is the only effect in the ideal model.
2. It slows down **all** the charge already in the channel, because $\mu_{eff}$ drops.

The second effect scales with the total channel charge, which is large at large overdrive. Eventually the current lost by the slowed existing charge equals, and then exceeds, the current carried by the new charge. $g_m$ then peaks (here about 5 mS near 0.5 V) and falls.

### Step 5 — Why both ingredients are needed, and what the other effects do

**Mobility degradation in saturation alone.** With $I_D = \tfrac12kV_{ov}^2/(1 + \theta V_{ov})$:

$$
\begin{aligned}
g_m &= \tfrac12k\,\frac{2V_{ov}(1 + \theta V_{ov}) - \theta V_{ov}^2}{(1 + \theta V_{ov})^2} = \tfrac12k\,\frac{V_{ov}(2 + \theta V_{ov})}{(1 + \theta V_{ov})^2}\\
&= \frac{k}{2\theta}\left[1 - \frac{1}{(1 + \theta V_{ov})^2}\right].
\end{aligned}
$$

This rises monotonically toward the limit $k/(2\theta)$: it **levels off** but never falls. In saturation, the extra overdrive also lengthens the "useful" voltage $V_{ov}$ that multiplies the mobility, which keeps compensating. In triode the multiplier is the fixed $V_{DS}$, so nothing compensates for the falling mobility.

**Velocity saturation** (lateral field). In the extreme limit $I_D \approx WC_{ox}v_{sat}V_{ov}$, so $g_m \to WC_{ox}v_{sat}$, a constant. It explains the flattening between 0.3 and 0.5 V, not the decline.

**Source/drain series resistance** $R_{SD}$. In saturation it only reduces the effective transconductance, to about $g_m/(1 + g_mR_S)$. In triode with a small $V_{DS}$, the channel resistance $1/(kV_{ov})$ is in series with $R_{SD}$, so
$$I_D pprox rac{V_{DS}}{1/(kV_{ov}) + R_{SD}} = rac{kV_{ov}V_{DS}}{1 + kR_{SD}V_{ov}} ,$$
which has exactly the form of the mobility-degradation model with an effective $	heta_{eff} = 	heta + kR_{SD}$. Series resistance therefore adds to the decline at high current, through the same mechanism: the fixed $V_{DS}$ is shared with a resistance the gate cannot modulate.

### Result

$g_m$ falls above $V_{GS} - V_{TH} \approx 0.5$ V mainly because of **mobility degradation by the vertical (gate) field**, acting while the transistor is in the **triode region** at the fixed $V_{DS} = 200$ mV.

- At such a large overdrive the knee voltage exceeds 0.2 V, so the device is no longer saturated. Ideally its transconductance would then be $\mu C_{ox}(W/L)V_{DS}$, which does not increase with overdrive.
- The rising vertical field lowers the mobility, $\mu = \mu_0/(1 + \theta V_{ov})$, so that $g_m = \mu_0C_{ox}(W/L)V_{DS}(1 + \theta V_{DS}/2)/(1 + \theta V_{ov})^2$ decreases with $V_{ov}$. The added channel charge no longer compensates for the slowing of all the existing charge.
- Velocity saturation makes $g_m$ level off (toward $WC_{ox}v_{sat}$). Source/drain series resistance acts like extra mobility degradation in triode and reduces $g_m$ further at high current. In saturation the simple $\theta$ model only makes $g_m$ level off; the actual decline needs operation below the knee together with strong vertical-field degradation.

**Common mistake.** Attributing the drop to the transistor entering subthreshold or cutoff. The overdrive is *increasing* (0.5–0.6 V above threshold), so the device is in strong inversion and $I_D$ keeps increasing. Only its *slope* $g_m$ decreases.

**Common mistake.** Claiming that the square law predicts the fall, or blaming channel-length modulation or body effect. The square law gives a rising (saturation) or constant (triode) $g_m$. Channel-length modulation concerns the $V_{DS}$ dependence, and there is no source–bulk voltage change here.

**Common mistake.** Citing only velocity saturation, or a vague "short-channel effects". Velocity saturation explains why $g_m$ stops growing (flattening toward $WC_{ox}v_{sat}$), but it does not produce a maximum followed by a decrease. The decrease requires the current carried by the existing channel charge to drop faster than the new charge adds current, i.e. a falling mobility in the triode region.
