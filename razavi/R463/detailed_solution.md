# Detailed solution - R463

**Approach.** With the gates held at a constant bias and the sources tied to $V_{DD}$, the only way the input can change the drain current of $M_1$ is through the **body effect**: the n-well voltage changes the threshold voltage. The bulk therefore acts as a weak "back gate" with transconductance $g_{mb} = \eta g_m$. Each half of the circuit is a common-source stage driven from the bulk, and the differential gain is $g_{mb1}$ times the resistance at each drain.

### Step 1 — Reading the circuit

From the figure:

- $M_1$, $M_2$: PMOS devices with sources at $V_{DD}$ and gates at the fixed bias $V_{b1}$. Their n-wells (bulks) are driven by the two terminals of the input $V_{in}$ (dotted connections).
- $M_3$, $M_4$: NMOS current sources (gates at $V_{b2}$, sources grounded) that load the drains of $M_1$ and $M_2$.
- $V_{out}$ is the voltage between the two drains.

There is **no tail current source**: the sources of $M_1$ and $M_2$ are tied directly to $V_{DD}$, an AC ground. So each half works on its own, and no virtual-ground argument is needed.

### Step 2 — How the bulk controls the current (body transconductance)

For a PMOS whose n-well is at a potential $V_{BS}$ above its source, the threshold magnitude is

$$|V_{TH}| = |V_{TH0}| + \gamma\left(\sqrt{2|\phi_F| + V_{BS}} - \sqrt{2|\phi_F|}\right),$$

where $\gamma = 0.4\ \mathrm{V^{1/2}}$ is the body-effect coefficient and $2|\phi_F| = 0.8$ V. Here $V_{BS} = V_{in,CM} - V_{DD}$ is the well-to-source voltage at the operating point.

**Raising the well voltage increases the reverse bias of the well-source junction, which raises $|V_{TH}|$.** With $V_{SG}$ fixed, the overdrive $V_{SG} - |V_{TH}|$ falls, and so does the drain current.

Differentiating, the change of threshold per volt of well voltage is

$$\eta = \frac{\partial|V_{TH}|}{\partial V_{BS}} = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{BS}}} .$$

A threshold change $\Delta|V_{TH}|$ acts like a change of $-\Delta|V_{TH}|$ in $V_{SG}$. So the small-signal source-to-drain current produced by a well voltage $v_w$ is

$$i_{SD} = -g_m\,\eta\,v_w = -g_{mb}v_w, \qquad g_{mb} = \eta\,g_m ,$$

where $g_m$ is the ordinary (gate) transconductance of the device.

### Step 3 — Small-signal half circuit and its gain

**Model of the left half (in words).** The source of $M_1$ ($V_{DD}$) and its gate ($V_{b1}$) are AC grounds, so its gate-controlled source is zero. What remains is a current $-g_{mb1}v_{w1}$ flowing from AC ground into the drain node $D_1$, together with $r_{O1}$ from $D_1$ to AC ground. $M_3$ has a fixed gate voltage and contributes only $r_{O3}$ from $D_1$ to ground.

<!-- diagram: diagram-01.cir -->

**KCL at $D_1$** (current delivered by $M_1$ = current leaving through the two resistances):

$$
\begin{aligned}
-g_{mb1}v_{w1} &= \frac{v_{d1}}{r_{O1}} + \frac{v_{d1}}{r_{O3}}\\
v_{d1} &= -g_{mb1}(r_{O1}\parallel r_{O3})\,v_{w1} .
\end{aligned}
$$

The right half is identical: $v_{d2} = -g_{mb2}(r_{O2}\parallel r_{O4})\,v_{w2}$, with $g_{mb2} = g_{mb1}$, $r_{O2} = r_{O1}$ and $r_{O4} = r_{O3}$.

### Step 4 — Differential gain

Subtracting the two halves:

$$
\begin{aligned}
v_{out} = v_{d1} - v_{d2} &= -g_{mb1}(r_{O1}\parallel r_{O3})\,(v_{w1} - v_{w2})\\
|A_v| = \left|\frac{v_{out}}{v_{in}}\right| &= g_{mb1}(r_{O1}\parallel r_{O3}) = \eta\,g_{m1}(r_{O1}\parallel r_{O3}),
\end{aligned}
$$

with

$$\eta = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{in,CM} - V_{DD}}} .$$

The gain is inverting from each well to its own drain: raising a well lowers that side's current, and $M_3$ (or $M_4$) pulls the drain down.

### Step 5 — The value of $\eta$ and what it means

The well-source junction of a PMOS is a pn junction: the p+ source sits at $V_{DD}$ and the n-well at $V_{in,CM}$. If $V_{in,CM}$ falls more than a few hundred millivolts below $V_{DD}$, the junction is forward-biased and conducts. So the input common-mode level must sit at, or only slightly below, $V_{DD}$.

- For $V_{in,CM} = V_{DD}$ ($V_{BS} = 0$):
$$\eta = \frac{0.4\ \mathrm{V^{1/2}}}{2\sqrt{0.8\ \mathrm{V}}} = \frac{0.4}{2\times0.894} = 0.22 .$$
- For $V_{in,CM} = V_{DD} - 0.2$ V (slight forward bias): $\eta = 0.4/(2\sqrt{0.6}) = 0.26$.

So

$$|A_v| \approx (0.22\text{–}0.26)\,g_{m1}(r_{O1}\parallel r_{O3}),$$

only about one quarter to one fifth of the gain of a conventional gate-driven pair built from the same devices. The bulk is a much weaker control terminal than the gate. In exchange, the input can sit near (or even slightly above) $V_{DD}$, and $V_{b1}$ can set the current independently of the input level.

### Result

$$|A_v| = g_{mb1}(r_{O1}\parallel r_{O3}) = \eta\,g_{m1}(r_{O1}\parallel r_{O3}), \qquad \eta = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{in,CM} - V_{DD}}},$$

with $V_{in,CM} - V_{DD}$ the well-to-source voltage. For $V_{in,CM} = V_{DD}$, $\eta = 0.4/(2\sqrt{0.8}) \approx 0.22$, so the gain is roughly one fifth of that of a gate-driven pair with the same devices.

**Common mistake.** Writing the gain as $g_{m1}(r_{O1}\parallel r_{O3})$, as if the input drove the gates. The gates are at a fixed bias; the input reaches the current only through the body effect, which brings in the factor $\eta \approx 0.2$.

**Common mistake.** Assuming a tail current source and treating the common source node as a virtual ground (or the bulk as an AC ground). Here the sources are tied directly to $V_{DD}$ and the *bulk* is the input; the bulk is the signal node, not a ground.

**Common mistake.** Getting $\eta$ larger than 1 or computing it with the wrong sign of $V_{BS}$. $\eta = \gamma/(2\sqrt{2|\phi_F| + V_{BS}})$ is a fraction of order 0.2–0.4 for typical $\gamma$, and $V_{BS}$ here is the well-to-source voltage, about zero when the input sits at $V_{DD}$. Using only $r_{O1}$ or only $r_{O3}$ for the load is also wrong: both devices load each drain.
