# Detailed solution - R083

**Approach.** Same circuit and same edge-of-triode condition as without body effect, but now the load $M_2$ has its source at $V_{out}$ and its bulk at ground, so its threshold depends on $V_{out}$. Equate the saturation currents with $V_{TH2}(V_{out})$, solve the resulting nonlinear equation by iteration, and then include the body transconductance $g_{mb2}$ in the small-signal model, which gives $A_v = -g_{m1}/(g_{m2} + g_{mb2})$.

### Step 1 — The circuit and which device has a body effect

From the figure: $M_1$ is a common-source transistor (gate at $V_{in}$, source at ground, drain at $V_{out}$). $M_2$ is a diode-connected load: gate and drain at $V_{DD} = 3$ V, source at $V_{out}$. Both bulks are at ground, and both devices carry the same current $I_D$.

- **$M_1$:** source and bulk are both at ground, so its source–bulk voltage is $V_{SB1} = 0$ and $V_{TH1} = V_{TH0} = 0.7$ V. **No body effect.**
- **$M_2$:** its source is at $V_{out}$ and its bulk at 0, so $V_{SB2} = V_{out} > 0$. The **body effect** raises its threshold:

$$V_{TH2} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{out}} - \sqrt{2|\phi_F|}\right) = 0.7 + 0.45\left(\sqrt{0.9 + V_{out}} - 0.9487\right)\ \mathrm{V},$$

where $\gamma = 0.45\ \mathrm{V^{1/2}}$ is the body-effect coefficient and $2|\phi_F| = 0.9$ V.

**Current factors**, $\beta = \mu_nC_{ox}(W/L)$:

$$\beta_1 = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}, \qquad \beta_2 = (134\ \mu\mathrm{A/V^2})(20) = 2.68\ \mathrm{mA/V^2}.$$

### Step 2 — Operating regions and the edge condition

**$M_2$ is saturated** whenever it conducts, because $V_{DS2} = V_{GS2} = V_{DD} - V_{out}$, which always exceeds $V_{GS2} - V_{TH2}$.

**$M_1$ at the edge of triode:** $V_{DS1} = V_{GS1} - V_{TH1}$. With the overdrive $V_{ov1} = V_{in} - 0.7$ V, this means

$$V_{out} = V_{ov1} .$$

### Step 3 — Current equation with a $V_{out}$-dependent threshold

Equate the **square-law saturation currents** (same current in both devices):

$$\frac12\beta_1V_{ov1}^2 = \frac12\beta_2\,(V_{DD} - V_{out} - V_{TH2})^2 .$$

Take positive square roots and divide by $\sqrt{\beta_2}$, using $\sqrt{\beta_1/\beta_2} = \sqrt{100/20} = \sqrt5 = 2.236$:

$$\sqrt5\,V_{ov1} = V_{DD} - V_{out} - V_{TH2} .$$

Insert the edge condition $V_{out} = V_{ov1}$ and the body-effect formula:

$$\sqrt5\,V_{ov1} = 3 - V_{ov1} - 0.7 - 0.45\left(\sqrt{0.9 + V_{ov1}} - 0.9487\right).$$

Collect the $V_{ov1}$ terms on the left:

$$(1 + \sqrt5)\,V_{ov1} = 2.3 - 0.45\left(\sqrt{0.9 + V_{ov1}} - 0.9487\right).$$

The unknown appears both linearly and under a square root, so we solve by iteration.

### Step 4 — Solve by fixed-point iteration

Rewrite the equation as an update rule ($1 + \sqrt5 = 3.236$):

$$V_{ov1}^{(k+1)} = \frac{2.3 - 0.45\left(\sqrt{0.9 + V_{ov1}^{(k)}} - 0.9487\right)}{3.236} .$$

Start from the answer without body effect, $V_{ov1}^{(0)} = 2.3/3.236 = 0.7107$ V:

| $k$ | $V_{ov1}^{(k)}$ (V) | $\sqrt{0.9 + V_{ov1}^{(k)}}$ | $V_{TH2} - 0.7$ (V) | $V_{ov1}^{(k+1)}$ (V) |
|---|---|---|---|---|
| 0 | 0.7107 | 1.2691 | 0.1442 | 0.6662 |
| 1 | 0.6662 | 1.2515 | 0.1363 | 0.6686 |
| 2 | 0.6686 | 1.2525 | 0.1367 | 0.6685 |
| 3 | 0.6685 | 1.2524 | 0.1367 | 0.6685 |

The iteration has converged:

$$
\begin{aligned}
V_{ov1} &= 0.6685\ \mathrm{V},\\
V_{in} &= V_{TH1} + V_{ov1} = 0.7 + 0.6685 = 1.369\ \mathrm{V},\\
V_{out} &= V_{ov1} = 0.669\ \mathrm{V},\\
V_{TH2} &= 0.7 + 0.1367 = 0.837\ \mathrm{V}.
\end{aligned}
$$

**Check.** The overdrive of $M_2$ is $V_{ov2} = 3 - 0.6685 - 0.8367 = 1.4948$ V, and $\sqrt5\times0.6685 = 1.4948$ V, as required. The currents:

$$
\begin{aligned}
I_{D1} &= \tfrac12(13.4\ \mathrm{mA/V^2})(0.6685\ \mathrm{V})^2 = 6.7\times0.4469\ \mathrm{mA} = 2.99\ \mathrm{mA},\\
I_{D2} &= \tfrac12(2.68\ \mathrm{mA/V^2})(1.4948\ \mathrm{V})^2 = 1.34\times2.2345\ \mathrm{mA} = 2.99\ \mathrm{mA}.
\end{aligned}
$$

**Why the edge comes earlier than without body effect (1.411 V).** The body effect raises $V_{TH2}$ by about 0.14 V. For a given current, the output $V_{out} = V_{DD} - V_{TH2} - V_{ov2}$ therefore sits lower, so it meets the line $V_{out} = V_{in} - V_{TH}$ at a smaller input voltage.

### Step 5 — Small-signal model including $g_{mb2}$

With $\lambda = 0$ there are no output resistances $r_O$. $V_{DD}$ and ground are AC grounds. The model has one node, $out$:

- **$M_1$:** a current source $g_{m1}v_{in}$ from $out$ to ground. Its source and bulk are both grounded, so $v_{bs1} = 0$ and there is no $g_{mb1}$ term.
- **$M_2$:** gate and drain at AC ground, source at $out$, bulk at ground. So $v_{gs2} = -v_{out}$ and the bulk–source voltage is $v_{bs2} = 0 - v_{out} = -v_{out}$. The drain-to-source current has two parts, the gate transconductance $g_{m2}v_{gs2}$ and the **body transconductance** $g_{mb2}v_{bs2}$:
$$i_{d2} = g_{m2}v_{gs2} + g_{mb2}v_{bs2} = -(g_{m2} + g_{mb2})\,v_{out} .$$

<!-- diagram: diagram-01.cir -->

**KCL at $out$**: the current supplied by $M_2$ equals the current drawn by $M_1$:

$$
\begin{aligned}
-(g_{m2} + g_{mb2})\,v_{out} &= g_{m1}v_{in}\\
A_v = \frac{v_{out}}{v_{in}} &= -\frac{g_{m1}}{g_{m2} + g_{mb2}} .
\end{aligned}
$$

So the diode-connected load now looks like a smaller resistance, $1/(g_{m2} + g_{mb2})$. When $v_{out}$ rises, $V_{SB2}$ rises too, which raises $V_{TH2}$ and reduces $M_2$'s current, the same effect as a further drop in $V_{GS2}$. The load therefore "fights" output swings harder, and the gain falls.

### Step 6 — Numerical gain

**Body-effect factor** $\eta = g_{mb}/g_m = \partial V_{TH}/\partial V_{SB}$:

$$\eta = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB2}}} = \frac{0.45}{2\sqrt{0.9 + 0.6685}} = \frac{0.45}{2\times1.2524} = 0.180 .$$

**Transconductances**, $g_m = \beta V_{ov}$:

$$
\begin{aligned}
g_{m1} &= (13.4\ \mathrm{mA/V^2})(0.6685\ \mathrm{V}) = 8.96\ \mathrm{mS},\\
g_{m2} &= (2.68\ \mathrm{mA/V^2})(1.4948\ \mathrm{V}) = 4.01\ \mathrm{mS},\\
g_{mb2} &= \eta\,g_{m2} = 0.180\times4.01\ \mathrm{mS} = 0.72\ \mathrm{mS}.
\end{aligned}
$$

**Gain:**

$$A_v = -\frac{8.96\ \mathrm{mS}}{4.01\ \mathrm{mS} + 0.72\ \mathrm{mS}} = -\frac{8.96}{4.73} = -1.90 .$$

**Compact form.** The two devices carry the same current, so $g_{m1}/g_{m2} = \sqrt{\beta_1/\beta_2} = \sqrt5$, and

$$A_v = -\frac{g_{m1}}{g_{m2}(1 + \eta)} = -\frac{\sqrt5}{1 + \eta} = -\frac{2.236}{1.180} = -1.90 .$$

The body effect reduces the gain by the factor $1 + \eta$, from $-2.24$ to $-1.90$.

### Result

$$V_{in} \approx 1.37\ \mathrm{V} \qquad (V_{out} \approx 0.669\ \mathrm{V},\ V_{TH2} \approx 0.837\ \mathrm{V},\ I_D \approx 2.99\ \mathrm{mA}),$$

$$A_v = -\frac{g_{m1}}{g_{m2} + g_{mb2}} = -\frac{\sqrt5}{1 + \eta} \approx -1.90, \qquad \eta = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{out}}} = 0.180 .$$

**Common mistake.** Including the body effect in only one of the two parts: using $V_{TH2}(V_{out})$ for the bias point but keeping the gain at $-\sqrt5$, or the reverse. The body effect changes both the DC operating point (through $V_{TH2}$) and the small-signal load (through $g_{mb2}$).

**Common mistake.** Applying the body effect to $M_1$. Its source is tied to its bulk (both at ground), so $V_{SB1} = 0$ and $v_{bs1} = 0$; only $M_2$, whose source moves with the output, is affected.

**Common mistake.** Multiplying the gain by $(1 + \eta)$ instead of dividing by it. $g_{mb2}$ adds to $g_{m2}$ in the *denominator*: the load resistance drops to $1/(g_{m2} + g_{mb2})$, so the gain magnitude decreases.
