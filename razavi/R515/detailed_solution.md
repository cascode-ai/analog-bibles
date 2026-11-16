# Detailed solution - R515

**Approach.** The ideal square law never predicts a falling $g_m$. Two facts of this measurement do: with $V_{DS}$ held at only 200 mV the device is in the triode region at large overdrive, and the vertical gate field degrades the mobility. A short calculation with a mobility-degradation model shows that together they make $\partial I_D/\partial V_{GS}$ decrease.

### Step 1 — What the plot shows

Readings from the figure ($V_{DS} = 200$ mV):

| $V_{GS} - V_{TH}$ (V) | 0.1 | 0.2 | 0.3 | 0.4 | 0.45 | 0.5 | 0.55 | 0.6 |
|---|---|---|---|---|---|---|---|---|
| $g_m$ (mS) | 0.46 | 1.5 | 3.0 | 4.4 | 4.85 | 5.0 | 5.0 | 4.8 |

- **0 to about 0.15 V:** a slow, curving rise (moderate inversion near threshold).
- **About 0.2 to 0.4 V:** a nearly linear rise, as in square-law saturation, about 15 mS per volt of overdrive.
- **Above about 0.4 V:** the rise slows, $g_m$ peaks at about 5.0 mS near $V_{GS} - V_{TH} \approx 0.5$ V, and then **decreases**, to about 4.8 mS at 0.6 V.

### Step 2 — The ideal square law cannot explain a falling $g_m$

With $V_{ov} = V_{GS} - V_{TH}$ and $W/L = 5\ \mu\mathrm{m}/40\ \mathrm{nm} = 125$, a constant mobility gives $g_m = \mu C_{ox}(W/L)V_{ov}$ in saturation, which **rises** without limit, and

$$I_D = \mu C_{ox}\frac WL\left(V_{ov}V_{DS} - \tfrac12V_{DS}^2\right) \quad\Longrightarrow\quad g_m = \mu C_{ox}\frac WL V_{DS}$$

in triode, which is **constant**. At most the curve could flatten; a decrease needs a mobility that falls with $V_{GS}$.

### Step 3 — At $V_{DS} = 200$ mV the device is in (or entering) triode

By the square-law criterion the transistor would leave saturation once $V_{ov} > 0.2$ V. In this 40-nm device velocity saturation lowers the knee $V_{D,sat}$ well below $V_{ov}$ (a common model is $V_{D,sat} = V_{ov}E_cL/(V_{ov} + E_cL)$, with $E_c$ the critical lateral field), which is why $g_m$ keeps growing up to about 0.4 V.

$V_{D,sat}$ still increases with $V_{ov}$, however. At overdrives of about 0.5 V and above it exceeds the fixed 200 mV, the device is in triode, and extra overdrive by itself no longer adds transconductance: $g_m \to \mu C_{ox}(W/L)V_{DS}$. If the peak value 5 mS is this triode value, then

$$\mu C_{ox} = \frac{g_m}{(W/L)\,V_{DS}} = \frac{5\ \mathrm{mS}}{125\times0.2\ \mathrm{V}} = 200\ \mu\mathrm{A/V^2},$$

a reasonable effective value for a 40-nm NMOS device.

### Step 4 — Mobility degradation by the vertical field

The vertical field across the oxide, roughly proportional to $V_{GS} - V_{TH}$, presses the electrons against the Si–SiO₂ interface, where surface-roughness scattering is strong. A standard model is

$$\mu_{eff} = \frac{\mu_0}{1 + \theta V_{ov}},$$

with $\mu_0$ the low-field mobility and $\theta$ (V⁻¹) a degradation coefficient that is large in thin-oxide processes. In triode,

$$I_D = \frac{\mu_0C_{ox}(W/L)\left(V_{ov}V_{DS} - \tfrac12V_{DS}^2\right)}{1 + \theta V_{ov}} .$$

With $k = \mu_0C_{ox}W/L$ and $V_{DS}$ constant:

$$
\begin{aligned}
g_m &= k\,\frac{V_{DS}(1 + \theta V_{ov}) - \theta\left(V_{ov}V_{DS} - \tfrac12V_{DS}^2\right)}{(1 + \theta V_{ov})^2}\\
&= k\,\frac{V_{DS} + \theta V_{ov}V_{DS} - \theta V_{ov}V_{DS} + \tfrac12\theta V_{DS}^2}{(1 + \theta V_{ov})^2}\\
&= k\,\frac{V_{DS}\left(1 + \tfrac12\theta V_{DS}\right)}{(1 + \theta V_{ov})^2}.
\end{aligned}
$$

The numerator is fixed and the denominator grows with $V_{ov}$, so in triode **$g_m$ decreases monotonically with overdrive**, as beyond the peak. Physically, raising $V_{GS}$ adds channel charge ($\Delta Q \approx C_{ox}WL\,\Delta V$) but also slows **all** the charge already in the channel. The loss scales with the total charge, so at large overdrive it overtakes the gain, and $g_m$ peaks (here about 5 mS near 0.5 V) and falls.

### Step 5 — Why both ingredients are needed, and what the other effects do

**Mobility degradation in saturation alone.** With $I_D = \tfrac12kV_{ov}^2/(1 + \theta V_{ov})$:

$$
\begin{aligned}
g_m &= \tfrac12k\,\frac{2V_{ov}(1 + \theta V_{ov}) - \theta V_{ov}^2}{(1 + \theta V_{ov})^2} = \tfrac12k\,\frac{V_{ov}(2 + \theta V_{ov})}{(1 + \theta V_{ov})^2}\\
&= \frac{k}{2\theta}\left[1 - \frac{1}{(1 + \theta V_{ov})^2}\right],
\end{aligned}
$$

which rises monotonically toward $k/(2\theta)$: it **levels off** but never falls. In saturation the growing $V_{ov}$ that multiplies the mobility keeps compensating; in triode the multiplier is the fixed $V_{DS}$.

**Velocity saturation** (lateral field). In the extreme limit $I_D \approx WC_{ox}v_{sat}V_{ov}$, so $g_m \to WC_{ox}v_{sat}$, a constant. It explains the flattening between 0.3 and 0.5 V, not the decline.

**Source/drain series resistance** $R_{SD}$. In saturation it reduces the effective transconductance to about $g_m/(1 + g_mR_S)$. In triode with a small $V_{DS}$, the channel resistance $1/(kV_{ov})$ is in series with $R_{SD}$:
$$I_D \approx \frac{V_{DS}}{1/(kV_{ov}) + R_{SD}} = \frac{kV_{ov}V_{DS}}{1 + kR_{SD}V_{ov}} ,$$
exactly the mobility-degradation form with $\theta_{eff} = \theta + kR_{SD}$. Series resistance therefore adds to the decline at high current: the fixed $V_{DS}$ is shared with a resistance the gate cannot modulate.

### Result

$g_m$ falls above $V_{GS} - V_{TH} \approx 0.5$ V mainly because of **mobility degradation by the vertical (gate) field**, acting while the transistor is in the **triode region** at the fixed $V_{DS} = 200$ mV.

- At such a large overdrive the knee voltage exceeds 0.2 V, so the device is no longer saturated. Ideally its transconductance would then be $\mu C_{ox}(W/L)V_{DS}$, which does not increase with overdrive.
- The rising vertical field lowers the mobility, $\mu = \mu_0/(1 + \theta V_{ov})$, so that $g_m = \mu_0C_{ox}(W/L)V_{DS}(1 + \theta V_{DS}/2)/(1 + \theta V_{ov})^2$ decreases with $V_{ov}$. The added channel charge no longer compensates for the slowing of all the existing charge.
- Velocity saturation makes $g_m$ level off (toward $WC_{ox}v_{sat}$). Source/drain series resistance acts like extra mobility degradation in triode and reduces $g_m$ further at high current. In saturation the simple $\theta$ model only makes $g_m$ level off; the actual decline needs operation below the knee together with strong vertical-field degradation.

**Common mistake.** Attributing the drop to subthreshold operation or cutoff. The overdrive is *increasing* (0.5–0.6 V above threshold), so $I_D$ keeps increasing; only its *slope* $g_m$ decreases.

**Common mistake.** Claiming that the square law predicts the fall, or blaming channel-length modulation or body effect. The square law gives a rising (saturation) or constant (triode) $g_m$; channel-length modulation concerns the $V_{DS}$ dependence, and the source–bulk voltage does not change here.

**Common mistake.** Citing only velocity saturation or vague "short-channel effects". Velocity saturation explains why $g_m$ stops growing, but not a maximum followed by a decrease, which requires a falling mobility in the triode region.
