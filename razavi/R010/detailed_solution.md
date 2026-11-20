# Detailed solution - R010

**Approach:** Sweeping the bulk changes source–bulk bias and threshold. Obtain current, gate transconductance and bulk sensitivity within the channel model, then identify its limits under forward junction bias.

### Step 1 — Terminal voltages

Source, drain and gate are fixed at 1 V, 1.5 V and 1.9 V; bulk voltage is $V_X$:

$$V_{GS}=V_G-V_S=0.9\ \mathrm V,\qquad V_{DS}=V_D-V_S=0.5\ \mathrm V,$$
$$V_{SB}=V_S-V_B=V_S-V_X.$$

The sweep changes body bias, while gate–source and drain–source voltages stay fixed.

### Step 2 — Body-effect threshold and operating region

$$V_{TH}=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\right).$$

Substituting the given parameters gives (voltages in V in numerical expressions):

$$V_{TH}=0.7+0.45\left(\sqrt{1.9-V_X}-\sqrt{0.9}\right).$$

Over the retained 0–1.5 V channel-model interval, threshold decreases from about 0.8934 V to 0.5577 V, with $0<V_{GS}-V_{TH}<0.5$ V. Conduction and $V_{DS}\ge V_{GS}-V_{TH}$ therefore hold, giving saturation within this model. Its 1–1.5 V segment additionally requires negligible junction current.

### Step 3 — Current and gate transconductance

Neglect CLM and use $\beta=\mu_nC_{ox}W/L$:

$$I_D=\frac12\beta(V_{GS}-V_{TH})^2,\qquad g_m=\left.\frac{\partial I_D}{\partial V_{GS}}\right|_{V_{DS},V_{SB}}=\beta(V_{GS}-V_{TH}).$$

Substituting the terminal voltages gives:

$$\frac{I_X}{\beta}=\frac12(0.9-V_{TH})^2,\qquad\frac{g_m}{\beta}=0.9-V_{TH}.$$

Key points are in the reference answer. Increasing $V_X$ lowers threshold and increases overdrive, so both curves increase. The starting overdrive is only about 6.6 mV, making the near-threshold values formal square-law estimates.

### Step 4 — Bulk sensitivity and sweep slope

With negligible junction current and fixed source, drain and gate potentials:

$$\frac{dV_{TH}}{dV_X}=-\frac{\gamma}{2\sqrt{2|\phi_F|+V_S-V_X}}.$$

The chain rule gives:

$$g_{mb}=\frac{\partial I_X}{\partial V_X}=-g_m\frac{dV_{TH}}{dV_X}
=g_m\frac{\gamma}{2\sqrt{2|\phi_F|+V_S-V_X}}>0,$$
$$\frac{dg_m}{dV_X}=\frac{\beta\gamma}{2\sqrt{2|\phi_F|+V_S-V_X}}>0.$$

The bulk-sweep current slope is $g_{mb}$, whereas device transconductance conventionally denotes $g_m$. At $V_X=1$ V, for example, $g_m/\beta=0.2000$ V and $g_{mb}/\beta\approx0.04743$ V; they are distinct quantities.

### Step 5 — Curves and model limits

![R010: normalized current and gate transconductance](/q/R010/review-curves.svg)

No junction is forward biased over 0–1 V. The dashed 1–1.5 V segment is conditional on negligible junction current; the gray 1.5–3 V region has no prescribed curve.

Source–bulk forward bias begins in polarity at $V_X>V_S$ and drain–bulk forward bias at $V_X>V_D$, corresponding to 1 V and 1.5 V. These are voltage-polarity conditions, not universal strong-injection thresholds. Even in the 1–1.5 V segment, negligible junction current requires unspecified device parameters.

Under strong injection, drain–bulk diode current can oppose the arrow, while parasitic bipolar transport can contribute along it. Total current also depends on junction parameters, internal bulk potential and transport models. $V_{DS}=0.5$ V alone neither determines a parasitic NPN's operating region nor establishes a plateau or total-current sign. Do not extrapolate the threshold square root beyond its domain. The high-forward-bias region remains unresolved, without an invented curve.
