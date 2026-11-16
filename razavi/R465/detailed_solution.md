# Detailed solution - R465

**Approach.** The gain of the bulk-driven pair is $g_{mb1}(r_{O1}\parallel r_{O3}) = \eta\,g_{m1}(r_{O1}\parallel r_{O3})$. With the drain currents held constant, $g_{m1}$ and the $r_O$'s do not change, so the gain varies only through $\eta$, which depends on the well-to-source voltage, i.e. on the input common-mode level.

### Step 1 — Gain of the bulk-driven pair at constant current

With gate and source at ac ground, a well voltage $v_w$ produces the drain current $g_{mb}v_w$, with

$$g_{mb} = \eta\,g_m, \qquad \eta = \frac{\partial|V_{TH}|}{\partial V_{BS}} ,$$

and each well drives its own drain into $r_{O1}\parallel r_{O3}$, so

$$|A_v| = g_{mb1}(r_{O1}\parallel r_{O3}) = \eta\,g_{m1}(r_{O1}\parallel r_{O3}).$$

With the drain currents held at their design value (e.g. by CMFB acting on $V_{b1}$ or $V_{b2}$), $g_{m1} = \sqrt{2\mu_pC_{ox}(W/L)_1I_D}$, $r_{O1} = 1/(\lambda_pI_D)$ and $r_{O3} = 1/(\lambda_nI_D)$ are all constant.

### Step 2 — How $\eta$ depends on the input common-mode level

Differentiating

$$|V_{TH}| = |V_{TH0}| + \gamma\left(\sqrt{2|\phi_F| + V_{BS}} - \sqrt{2|\phi_F|}\right)$$

with respect to $V_{BS}$:

$$\eta = \frac{\partial|V_{TH}|}{\partial V_{BS}} = \gamma\cdot\frac{1}{2\sqrt{2|\phi_F| + V_{BS}}} = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{BS}}} .$$

The sources are at $V_{DD}$ and the wells at $V_{in,CM}$, so $V_{BS} = V_{in,CM} - V_{DD}$ and

$$\eta = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{in,CM} - V_{DD}}} = \frac{0.4\ \mathrm{V^{1/2}}}{2\sqrt{0.8\ \mathrm{V} + V_{in,CM} - V_{DD}}} .$$

Therefore

$$|A_v| \propto \eta \propto \frac{1}{\sqrt{0.8\ \mathrm{V} + V_{in,CM} - V_{DD}}} .$$

### Step 3 — Direction and size of the variation

Raising $V_{in,CM}$ increases the reverse bias of the well–source junction and widens the depletion region, so the threshold becomes *less sensitive* to the well voltage: $\eta$ and the gain fall. Lowering $V_{in,CM}$ below $V_{DD}$ (slight forward bias) raises them.

Gain normalised to its value at $V_{in,CM} = V_{DD}$:

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

The negative entries mean a slightly forward-biased source–well junction, usable only while its current stays negligible (a few hundred millivolts at most).

The logarithmic sensitivity is

$$\frac{d\ln|A_v|}{dV_{in,CM}} = -\frac{1}{2\left(2|\phi_F| + V_{in,CM} - V_{DD}\right)},$$

$-1/(2\times0.8\ \mathrm{V}) = -0.625\ \mathrm{V^{-1}}$ at $V_{in,CM} = V_{DD}$: about $-6\,\%$ of gain per 100 mV, or 25–30 % over the usable few-hundred-millivolt range.

### Step 4 — Consequences

- The amplifier's accuracy depends on where the input CM level sits.
- For a large differential input each well swings over a sizeable range, so each half's gain changes with its own instantaneous well voltage, causing distortion.
- (Outside the constant-current assumption: with $V_{SG}$ fixed, raising $V_{in,CM}$ would also raise $|V_{TH}|$ and lower $I_D$ and $V_{ov}$; since $g_mr_O \propto 1/V_{ov}$, this would partly offset the fall in $\eta$.)

### Result

$$|A_v| = \eta\,g_{m1}(r_{O1}\parallel r_{O3}), \qquad \eta = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{in,CM} - V_{DD}}},$$

so at constant drain current the gain varies as $1/\sqrt{0.8\ \mathrm{V} + V_{in,CM} - V_{DD}}$. It **decreases** as $V_{in,CM}$ rises (more reverse bias on the well) and **increases** as $V_{in,CM}$ falls below $V_{DD}$: $\eta \approx 0.28$ at $V_{DD} - 0.3$ V, 0.22 at $V_{DD}$ and 0.18 at $V_{DD} + 0.5$ V, a change of roughly 25–30 % over a few hundred millivolts.

**Common mistake.** Concluding that the gain is independent of the input CM level because the currents are constant. Constant currents fix $g_m$ and $r_O$, but $\eta$ still depends on the well-to-source voltage.

**Common mistake.** Getting the direction wrong because more reverse bias increases $|V_{TH}|$. The gain depends on the *slope* $\partial|V_{TH}|/\partial V_{BS}$, which falls as the reverse bias grows.
