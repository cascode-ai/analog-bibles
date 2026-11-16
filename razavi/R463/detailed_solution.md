# Detailed solution - R463

**Approach.** With the gates at a fixed bias and the sources at $V_{DD}$, the input can change the drain current of $M_1$ only through the **body effect**: the n-well voltage shifts the threshold, so the bulk acts as a weak back gate with $g_{mb} = \eta g_m$. Each half is then a CS stage driven from the bulk, and the differential gain is $g_{mb1}$ times the resistance at each drain.

### Step 1 — How the bulk controls the current (body transconductance)

There is no tail current source: the sources of $M_1$ and $M_2$ sit at $V_{DD}$, an ac ground, so each half works on its own. For a PMOS whose n-well is $V_{BS}$ above its source,

$$|V_{TH}| = |V_{TH0}| + \gamma\left(\sqrt{2|\phi_F| + V_{BS}} - \sqrt{2|\phi_F|}\right),$$

with $V_{BS} = V_{in,CM} - V_{DD}$ at the operating point. Raising the well voltage increases the reverse bias of the well-source junction and raises $|V_{TH}|$; with $V_{SG}$ fixed the drain current falls. The threshold change per volt of well voltage is

$$\eta = \frac{\partial|V_{TH}|}{\partial V_{BS}} = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{BS}}} ,$$

and since $\Delta|V_{TH}|$ acts like $-\Delta|V_{TH}|$ in $V_{SG}$, a well voltage $v_w$ produces the source-to-drain current

$$i_{SD} = -g_m\,\eta\,v_w = -g_{mb}v_w, \qquad g_{mb} = \eta\,g_m .$$

### Step 2 — Small-signal half circuit and its gain

The gate and source of $M_1$ are ac grounds, so only $-g_{mb1}v_{w1}$ flows from ground into the drain $D_1$, with $r_{O1}$ from $D_1$ to ground; $M_3$ contributes only $r_{O3}$.

<!-- diagram: diagram-01.cir -->

KCL at $D_1$:

$$
\begin{aligned}
-g_{mb1}v_{w1} &= \frac{v_{d1}}{r_{O1}} + \frac{v_{d1}}{r_{O3}}\\
v_{d1} &= -g_{mb1}(r_{O1}\parallel r_{O3})\,v_{w1} .
\end{aligned}
$$

The right half is identical: $v_{d2} = -g_{mb2}(r_{O2}\parallel r_{O4})\,v_{w2}$, with $g_{mb2} = g_{mb1}$, $r_{O2} = r_{O1}$ and $r_{O4} = r_{O3}$.

### Step 3 — Differential gain

$$
\begin{aligned}
v_{out} = v_{d1} - v_{d2} &= -g_{mb1}(r_{O1}\parallel r_{O3})\,(v_{w1} - v_{w2})\\
|A_v| = \left|\frac{v_{out}}{v_{in}}\right| &= g_{mb1}(r_{O1}\parallel r_{O3}) = \eta\,g_{m1}(r_{O1}\parallel r_{O3}),
\end{aligned}
$$

with

$$\eta = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{in,CM} - V_{DD}}} .$$

Each well drives its own drain inversely: raising a well lowers that side's current, and $M_3$ (or $M_4$) pulls the drain down.

### Step 4 — The value of $\eta$ and what it means

The p+ source at $V_{DD}$ and the n-well at $V_{in,CM}$ form a pn junction, which conducts if $V_{in,CM}$ falls more than a few hundred millivolts below $V_{DD}$; so the input CM level must sit at, or only slightly below, $V_{DD}$.

- For $V_{in,CM} = V_{DD}$ ($V_{BS} = 0$):
$$\eta = \frac{0.4\ \mathrm{V^{1/2}}}{2\sqrt{0.8\ \mathrm{V}}} = \frac{0.4}{2\times0.894} = 0.22 .$$
- For $V_{in,CM} = V_{DD} - 0.2$ V (slight forward bias): $\eta = 0.4/(2\sqrt{0.6}) = 0.26$.

So

$$|A_v| \approx (0.22\text{–}0.26)\,g_{m1}(r_{O1}\parallel r_{O3}),$$

only about one quarter to one fifth of the gain of a gate-driven pair built from the same devices. In exchange, the input can sit near (or slightly above) $V_{DD}$, and $V_{b1}$ sets the current independently of the input level.

### Result

$$|A_v| = g_{mb1}(r_{O1}\parallel r_{O3}) = \eta\,g_{m1}(r_{O1}\parallel r_{O3}), \qquad \eta = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{in,CM} - V_{DD}}},$$

with $V_{in,CM} - V_{DD}$ the well-to-source voltage. For $V_{in,CM} = V_{DD}$, $\eta = 0.4/(2\sqrt{0.8}) \approx 0.22$, so the gain is roughly one fifth of that of a gate-driven pair with the same devices.

**Common mistake.** Writing the gain as $g_{m1}(r_{O1}\parallel r_{O3})$, as if the input drove the gates; the body effect brings in the factor $\eta \approx 0.2$.

**Common mistake.** Assuming a tail current source and a virtual-ground common source node, or treating the bulk as an ac ground. The sources are tied to $V_{DD}$ and the *bulk* is the signal node.

**Common mistake.** Getting $\eta > 1$ or using the wrong sign of $V_{BS}$: $\eta$ is of order 0.2–0.4, and $V_{BS}$ is about zero with the input at $V_{DD}$. Using only $r_{O1}$ or only $r_{O3}$ for the load is also wrong.
