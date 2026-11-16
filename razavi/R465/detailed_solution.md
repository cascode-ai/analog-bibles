# Detailed solution - R465

**Approach.** The gain of the bulk-driven pair is $g_{mb1}(r_{O1}\parallel r_{O3}) = \eta\,g_{m1}(r_{O1}\parallel r_{O3})$. With the drain currents held constant, $g_{m1}$ and the $r_O$'s do not change, so the gain varies only through the body-effect coefficient $\eta$, which depends on the well-to-source voltage, i.e. on the input common-mode level. We derive that dependence and evaluate it numerically.

### Step 1 — Gain of the bulk-driven pair

From the figure: PMOS $M_1$, $M_2$ with sources at $V_{DD}$ and gates at $V_{b1}$; their n-wells carry the input; NMOS current sources $M_3$, $M_4$ load the drains.

With the gate and source at AC ground, a well voltage $v_w$ changes the threshold voltage and hence the drain current. The small-signal current is $g_{mb}v_w$, with the body transconductance

$$g_{mb} = \eta\,g_m, \qquad \eta = \frac{\partial|V_{TH}|}{\partial V_{BS}} .$$

KCL at each drain (current from the PMOS = current into $r_{O1}\parallel r_{O3}$) gives a common-source gain from each well to its own drain, so the differential gain is

$$|A_v| = g_{mb1}(r_{O1}\parallel r_{O3}) = \eta\,g_{m1}(r_{O1}\parallel r_{O3}).$$

### Step 2 — How $\eta$ depends on the input common-mode level

The PMOS threshold magnitude with the well at $V_{BS}$ above the source is

$$|V_{TH}| = |V_{TH0}| + \gamma\left(\sqrt{2|\phi_F| + V_{BS}} - \sqrt{2|\phi_F|}\right).$$

Differentiating with respect to $V_{BS}$:

$$\eta = \frac{\partial|V_{TH}|}{\partial V_{BS}} = \gamma\cdot\frac{1}{2\sqrt{2|\phi_F| + V_{BS}}} = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{BS}}} .$$

The sources are at $V_{DD}$ and the wells at $V_{in,CM}$, so $V_{BS} = V_{in,CM} - V_{DD}$, and

$$\eta = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{in,CM} - V_{DD}}} = \frac{0.4\ \mathrm{V^{1/2}}}{2\sqrt{0.8\ \mathrm{V} + V_{in,CM} - V_{DD}}} .$$

### Step 3 — Why the other factors stay constant

The drain currents are held at their design value (for example by common-mode feedback acting on $V_{b1}$ or $V_{b2}$). Then:

- $g_{m1} = \sqrt{2\mu_pC_{ox}(W/L)_1I_D}$ is constant, since it depends only on the current and the size;
- $r_{O1} = 1/(\lambda_pI_D)$ and $r_{O3} = 1/(\lambda_nI_D)$ are constant.

Therefore

$$|A_v| \propto \eta \propto \frac{1}{\sqrt{0.8\ \mathrm{V} + V_{in,CM} - V_{DD}}} .$$

### Step 4 — Direction and size of the variation

**Direction.** Raising $V_{in,CM}$ increases the reverse bias of the well–source junction. This widens the depletion region under the channel, and the threshold becomes *less sensitive* to further changes of the well voltage, so $\eta$ and the gain fall. Lowering $V_{in,CM}$ below $V_{DD}$ reduces the reverse bias (slight forward bias), and $\eta$ and the gain rise.

**Numbers** (gain normalised to its value at $V_{in,CM} = V_{DD}$):

| $V_{in,CM} - V_{DD}$ | $2\lvert\phi_F\rvert + V_{BS}$ | $\eta$ | Relative gain |
|---|---|---|---|
| −0.3 V | 0.5 V | 0.283 | 1.27 |
| −0.2 V | 0.6 V | 0.258 | 1.15 |
| −0.1 V | 0.7 V | 0.239 | 1.07 |
| 0 | 0.8 V | 0.224 | 1.00 |
| +0.5 V | 1.3 V | 0.175 | 0.78 |
| +1.0 V | 1.8 V | 0.149 | 0.67 |

For example, at $V_{in,CM} = V_{DD} - 0.3$ V:

$$\eta = \frac{0.4}{2\sqrt{0.8 - 0.3}} = \frac{0.4}{2\times0.707} = 0.283 .$$

The negative values of $V_{in,CM} - V_{DD}$ correspond to a slightly forward-biased source–well junction. They are usable only while the junction current stays negligible, i.e. for a few hundred millivolts at most.

**Sensitivity.** The logarithmic derivative is

$$\frac{d\ln|A_v|}{dV_{in,CM}} = -\frac{1}{2\left(2|\phi_F| + V_{in,CM} - V_{DD}\right)},$$

which at $V_{in,CM} = V_{DD}$ equals $-1/(2\times0.8\ \mathrm{V}) = -0.625\ \mathrm{V^{-1}}$: about $-6\,\%$ of gain per 100 mV of common-mode change. Over the usable few-hundred-millivolt range the gain changes by 25–30 %.

### Step 5 — Consequences

- The gain is **not** independent of the input CM level, so the amplifier's accuracy depends on where the input sits.
- For a large differential input, each well swings over a sizeable range, so each half sees a gain that changes with its own instantaneous well voltage. This creates nonlinearity (distortion).
- (Side remark, outside the constant-current assumption: if $V_{SG}$ were fixed instead, raising $V_{in,CM}$ would also raise $|V_{TH}|$, reducing $I_D$ and the overdrive $V_{ov}$. Since $g_m r_O \propto 1/V_{ov}$, this would partly offset the fall in $\eta$.)

### Result

$$|A_v| = \eta\,g_{m1}(r_{O1}\parallel r_{O3}), \qquad \eta = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{in,CM} - V_{DD}}},$$

so at constant drain current the gain varies as $1/\sqrt{0.8\ \mathrm{V} + V_{in,CM} - V_{DD}}$. It **decreases** as $V_{in,CM}$ rises (more reverse bias on the well) and **increases** as $V_{in,CM}$ falls below $V_{DD}$: $\eta \approx 0.28$ at $V_{DD} - 0.3$ V, 0.22 at $V_{DD}$ and 0.18 at $V_{DD} + 0.5$ V, a change of roughly 25–30 % over a few hundred millivolts.

**Common mistake.** Concluding that the gain is independent of the input CM level because "the bias currents are held constant". Constant currents fix $g_m$ and $r_O$, but the body-effect factor $\eta$ still depends on the well-to-source voltage.

**Common mistake.** Getting the direction wrong: claiming that more reverse bias on the well increases the gain because it increases $|V_{TH}|$. The gain depends on the *slope* $\partial|V_{TH}|/\partial V_{BS}$, not on $|V_{TH}|$ itself, and that slope falls as the reverse bias grows.
