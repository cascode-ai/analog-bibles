# Detailed solution - R010

**Approach:** Derive the body-effect channel curves with the fixed terminal biases, then separate the conditional extension from the range requiring junction and bipolar models.

### Terminal biases and model

The source, drain and gate remain at 1 V, 1.5 V and 1.9 V. With $V_B=V_X$:

$$V_{GS}=V_G-V_S=0.9\ \mathrm V,\qquad V_{DS}=V_D-V_S=0.5\ \mathrm V,$$
$$V_{SB}=V_S-V_B=1\ \mathrm V-V_X.$$

Use $\beta=\mu_nC_{ox}W/L$, neglect channel-length modulation, and initially neglect junction current. The body-effect relation is:

$$V_{TH}=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\right).$$

Substitution gives, with voltages in V in the numerical expression:

$$V_{TH}=0.7+0.45\left(\sqrt{1.9-V_X}-\sqrt{0.9}\right).$$

### Saturation and required quantities

The channel is on if $V_{GS}>V_{TH}$ and saturated if $V_{DS}\ge V_{GS}-V_{TH}$. Over 0–1 V, threshold falls from $0.893375$ to $0.700$ V, so:

$$0.006625\ \mathrm V\lesssim V_{GS}-V_{TH}\le0.200\ \mathrm V<0.5\ \mathrm V.$$

The general saturated-current and gate-transconductance equations are:

$$I_D=\frac12\beta(V_{GS}-V_{TH})^2,\qquad
 g_m=\left.\frac{\partial I_D}{\partial V_{GS}}\right|_{V_{DS},V_{SB}}=\beta(V_{GS}-V_{TH}).$$

With negligible junction current, the drain current follows the $I_X$ arrow, giving:

$$I_X=\frac12\beta(0.9-V_{TH})^2,\qquad g_m=\beta(0.9-V_{TH}).$$

At $V_X=1$ V, substitution gives $V_{TH}=0.700$ V, $I_X/\beta=0.02000$ V² and $g_m/\beta=0.2000$ V. At the starting point, the 6.6-mV overdrive gives only formal square-law estimates; weak-inversion behavior needs a more complete model.

### Monotonicity and bulk transconductance

At fixed source, drain and gate voltages, differentiating the threshold formula gives:

$$\frac{dV_{TH}}{dV_X}=-\frac{\gamma}{2\sqrt{2|\phi_F|+V_S-V_X}}.$$

The chain rule then gives the bulk transconductance, defined as the current response to bulk voltage:

$$g_{mb}=\left.\frac{\partial I_X}{\partial V_X}\right|_{V_G,V_D,V_S}
=-g_m\frac{dV_{TH}}{dV_X}
=g_m\frac{\gamma}{2\sqrt{2|\phi_F|+V_S-V_X}}>0,$$
$$\frac{dg_m}{dV_X}=\frac{\beta\gamma}{2\sqrt{2|\phi_F|+V_S-V_X}}>0.$$

Both current and gate transconductance increase. The bulk-sweep current slope is $g_{mb}$; the requested conventional device transconductance is $g_m$.

### Forward junction bias and conditional extension

For the p-type bulk and n-type source/drain junctions, forward-bias polarity requires:

$$V_B>V_S\ \Longleftrightarrow\ V_X>1\ \mathrm V,\qquad
V_B>V_D\ \Longleftrightarrow\ V_X>1.5\ \mathrm V.$$

These are polarity boundaries, not universal strong-injection thresholds. Junction current depends on unspecified parameters. If it remains negligible, the channel-only formula can be illustrated over 1–1.5 V: threshold reaches $0.55770$ V and the overdrive $0.34230$ V remains below $V_{DS}$. The endpoint is therefore $I_X/\beta=0.05859$ V² and $g_m/\beta=0.3423$ V under that assumption.

Once injection matters, the total drain-terminal current can contain junction and parasitic bipolar contributions. The supplied parameters do not determine their magnitudes, the high-bias current sign, a plateau, or a total-device transconductance curve. Do not extrapolate the threshold square root beyond its mathematical domain ($V_X\le1.9$ V); that domain alone does not establish physical validity.

### Required plots and conclusion

Each quantity has its own axes. Solid curves cover 0–1 V; dashed curves show the conditional 1–1.5 V extension. The gray upper range has no prescribed curve, and forward bias can invalidate the dashed extension before its endpoint. For display only, $\beta=1\ \mathrm{mA/V^2}$; both vertical scales vary linearly with $\beta$.

![R010: current and gate transconductance, conditional extension and undetermined range](/q/R010/solution-curves.svg)
