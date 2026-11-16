# Detailed solution - R083

**Approach.** Same circuit and edge-of-triode condition as without body effect, but the load $M_2$ has its source at $V_{out}$ and its bulk at ground, so its threshold depends on $V_{out}$. Equate the saturation currents with $V_{TH2}(V_{out})$, solve by iteration, and include $g_{mb2}$ in the small-signal model, which gives $A_v = -g_{m1}/(g_{m2} + g_{mb2})$.

### Step 1 — Body effect, device parameters and the edge condition

$M_1$ has source and bulk at ground, so $V_{TH1} = V_{TH0} = 0.7$ V. The diode-connected load $M_2$ has its source at $V_{out}$ and bulk at ground, so $V_{SB2} = V_{out} > 0$ and

$$V_{TH2} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{out}} - \sqrt{2|\phi_F|}\right) = 0.7 + 0.45\left(\sqrt{0.9 + V_{out}} - 0.9487\right)\ \mathrm{V}.$$

With $\beta = \mu_nC_{ox}(W/L)$:

$$\beta_1 = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}, \qquad \beta_2 = (134\ \mu\mathrm{A/V^2})(20) = 2.68\ \mathrm{mA/V^2}.$$

$M_2$ is saturated whenever it conducts, since $V_{DS2} = V_{GS2} = V_{DD} - V_{out}$. $M_1$ is at the edge of triode when $V_{DS1} = V_{GS1} - V_{TH1}$, i.e., with $V_{ov1} = V_{in} - 0.7$ V,

$$V_{out} = V_{ov1} .$$

### Step 2 — Current equation with a $V_{out}$-dependent threshold

Both devices carry the same current:

$$\frac12\beta_1V_{ov1}^2 = \frac12\beta_2\,(V_{DD} - V_{out} - V_{TH2})^2 .$$

Taking positive square roots, with $\sqrt{\beta_1/\beta_2} = \sqrt{100/20} = \sqrt5 = 2.236$:

$$\sqrt5\,V_{ov1} = V_{DD} - V_{out} - V_{TH2} .$$

Inserting $V_{out} = V_{ov1}$ and the body-effect formula, and collecting the $V_{ov1}$ terms:

$$\sqrt5\,V_{ov1} = 3 - V_{ov1} - 0.7 - 0.45\left(\sqrt{0.9 + V_{ov1}} - 0.9487\right),$$

$$(1 + \sqrt5)\,V_{ov1} = 2.3 - 0.45\left(\sqrt{0.9 + V_{ov1}} - 0.9487\right).$$

The unknown appears both linearly and under a square root, so we solve by iteration.

### Step 3 — Solve by fixed-point iteration

With $1 + \sqrt5 = 3.236$:

$$V_{ov1}^{(k+1)} = \frac{2.3 - 0.45\left(\sqrt{0.9 + V_{ov1}^{(k)}} - 0.9487\right)}{3.236} .$$

Start from the answer without body effect, $V_{ov1}^{(0)} = 2.3/3.236 = 0.7107$ V:

| $k$ | $V_{ov1}^{(k)}$ (V) | $\sqrt{0.9 + V_{ov1}^{(k)}}$ | $V_{TH2} - 0.7$ (V) | $V_{ov1}^{(k+1)}$ (V) |
|---|---|---|---|---|
| 0 | 0.7107 | 1.2691 | 0.1442 | 0.6662 |
| 1 | 0.6662 | 1.2515 | 0.1363 | 0.6686 |
| 2 | 0.6686 | 1.2525 | 0.1367 | 0.6685 |
| 3 | 0.6685 | 1.2524 | 0.1367 | 0.6685 |

So

$$
\begin{aligned}
V_{ov1} &= 0.6685\ \mathrm{V},\\
V_{in} &= V_{TH1} + V_{ov1} = 0.7 + 0.6685 = 1.369\ \mathrm{V},\\
V_{out} &= V_{ov1} = 0.669\ \mathrm{V},\\
V_{TH2} &= 0.7 + 0.1367 = 0.837\ \mathrm{V}.
\end{aligned}
$$

**Check.** $V_{ov2} = 3 - 0.6685 - 0.8367 = 1.4948$ V $= \sqrt5\times0.6685$, as required, and

$$
\begin{aligned}
I_{D1} &= \tfrac12(13.4\ \mathrm{mA/V^2})(0.6685\ \mathrm{V})^2 = 6.7\times0.4469\ \mathrm{mA} = 2.99\ \mathrm{mA},\\
I_{D2} &= \tfrac12(2.68\ \mathrm{mA/V^2})(1.4948\ \mathrm{V})^2 = 1.34\times2.2345\ \mathrm{mA} = 2.99\ \mathrm{mA}.
\end{aligned}
$$

The edge comes earlier than without body effect (1.411 V): the body effect raises $V_{TH2}$ by about 0.14 V, so $V_{out} = V_{DD} - V_{TH2} - V_{ov2}$ sits lower and meets the line $V_{out} = V_{in} - V_{TH}$ at a smaller input.

### Step 4 — Small-signal model including $g_{mb2}$

With $\lambda = 0$ there is no $r_O$; $V_{DD}$ and ground are ac grounds, and the model has one node, $out$:

- **$M_1$:** a current source $g_{m1}v_{in}$ from $out$ to ground; $v_{bs1} = 0$, so no $g_{mb1}$ term.
- **$M_2$:** gate and drain at ac ground, source at $out$, bulk at ground, so $v_{gs2} = v_{bs2} = -v_{out}$ and
$$i_{d2} = g_{m2}v_{gs2} + g_{mb2}v_{bs2} = -(g_{m2} + g_{mb2})\,v_{out} .$$

<!-- diagram: diagram-01.cir -->

KCL at $out$:

$$
\begin{aligned}
-(g_{m2} + g_{mb2})\,v_{out} &= g_{m1}v_{in}\\
A_v = \frac{v_{out}}{v_{in}} &= -\frac{g_{m1}}{g_{m2} + g_{mb2}} .
\end{aligned}
$$

The load now looks like the smaller resistance $1/(g_{m2} + g_{mb2})$: a rise in $v_{out}$ also raises $V_{SB2}$ and hence $V_{TH2}$, which cuts $M_2$'s current further, so the gain falls.

### Step 5 — Numerical gain

With $\eta = g_{mb}/g_m = \partial V_{TH}/\partial V_{SB}$:

$$\eta = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB2}}} = \frac{0.45}{2\sqrt{0.9 + 0.6685}} = \frac{0.45}{2\times1.2524} = 0.180 ,$$

$$
\begin{aligned}
g_{m1} &= (13.4\ \mathrm{mA/V^2})(0.6685\ \mathrm{V}) = 8.96\ \mathrm{mS},\\
g_{m2} &= (2.68\ \mathrm{mA/V^2})(1.4948\ \mathrm{V}) = 4.01\ \mathrm{mS},\\
g_{mb2} &= \eta\,g_{m2} = 0.180\times4.01\ \mathrm{mS} = 0.72\ \mathrm{mS},
\end{aligned}
$$

$$A_v = -\frac{8.96\ \mathrm{mS}}{4.01\ \mathrm{mS} + 0.72\ \mathrm{mS}} = -\frac{8.96}{4.73} = -1.90 .$$

**Compact form.** With equal currents $g_{m1}/g_{m2} = \sqrt{\beta_1/\beta_2} = \sqrt5$, so

$$A_v = -\frac{g_{m1}}{g_{m2}(1 + \eta)} = -\frac{\sqrt5}{1 + \eta} = -\frac{2.236}{1.180} = -1.90 .$$

The body effect reduces the gain by the factor $1 + \eta$, from $-2.24$ to $-1.90$.

### Result

$$V_{in} \approx 1.37\ \mathrm{V} \qquad (V_{out} \approx 0.669\ \mathrm{V},\ V_{TH2} \approx 0.837\ \mathrm{V},\ I_D \approx 2.99\ \mathrm{mA}),$$

$$A_v = -\frac{g_{m1}}{g_{m2} + g_{mb2}} = -\frac{\sqrt5}{1 + \eta} \approx -1.90, \qquad \eta = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{out}}} = 0.180 .$$

**Common mistake.** Including the body effect in only one part: using $V_{TH2}(V_{out})$ for the bias point but keeping the gain at $-\sqrt5$, or the reverse. It changes both the operating point (through $V_{TH2}$) and the load (through $g_{mb2}$).

**Common mistake.** Applying the body effect to $M_1$. Its source and bulk are both grounded, so $V_{SB1} = 0$ and $v_{bs1} = 0$.

**Common mistake.** Multiplying the gain by $(1 + \eta)$ instead of dividing by it. $g_{mb2}$ adds to $g_{m2}$ in the *denominator*.
