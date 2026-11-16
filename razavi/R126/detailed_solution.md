# Detailed solution - R126

**Approach.** In a cascode, the gate voltage $V_b$ of the cascode device $M_2$ sets the voltage at node $X$ (the drain of $M_1$): $V_X = V_b - V_{GS2}$. We first find the value of $V_X$ that keeps $M_1$ 50 mV above the edge of saturation, then compute $V_{GS2}$ from the square law, including the body effect of $M_2$ (its source is at $V_X$, its bulk at ground), and add the two.

### Step 1 — The circuit and the condition on $M_1$

From the figure:

- $M_1$: input device, gate at $V_{in}$, source at ground, drain at node $X$.
- $M_2$: cascode device, gate at $V_b$, source at $X$, drain at $V_{out}$, which connects to $V_{DD}$ through $R_D$.
- Both carry the same current: $I_{D1} = I_{D2} = 0.5$ mA.

$M_1$ is at the edge of saturation when $V_{DS1} = V_{GS1} - V_{TH1}$. Here $V_{DS1} = V_X$ (the source of $M_1$ is grounded), and $V_{GS1} - V_{TH1} = V_{ov1}$ is the **overdrive voltage** of $M_1$. The requirement "50 mV away from the triode region" means

$$V_X = V_{DS1} = V_{ov1} + 50\ \mathrm{mV}.$$

So we need $V_{ov1}$.

### Step 2 — Overdrive of $M_1$

From the square-law saturation current $I_D = \tfrac12\mu_nC_{ox}\frac{W}{L}V_{ov}^2$ (with $\lambda = 0$):

$$V_{ov} = \sqrt{\frac{2I_D}{\mu_nC_{ox}(W/L)}} .$$

For $M_1$, $(W/L)_1 = 50/0.5 = 100$:

$$
\begin{aligned}
\mu_nC_{ox}(W/L)_1 &= (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2},\\
V_{ov1} &= \sqrt{\frac{2(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.07463\ \mathrm{V^2}} = 0.2732\ \mathrm{V}.
\end{aligned}
$$

($M_1$'s source and bulk are both at ground, so $V_{TH1} = V_{TH0} = 0.7$ V and $V_{GS1} = 0.973$ V. That is the dc level the input must have, though it is not needed for $V_b$.)

### Step 3 — Required voltage at node $X$

$$V_X = V_{ov1} + 0.05\ \mathrm{V} = 0.2732 + 0.05 = 0.3232\ \mathrm{V}.$$

### Step 4 — Overdrive of $M_2$

For $M_2$, $(W/L)_2 = 10/0.5 = 20$, and it carries the same 0.5 mA:

$$
\begin{aligned}
\mu_nC_{ox}(W/L)_2 &= (134\ \mu\mathrm{A/V^2})(20) = 2.68\ \mathrm{mA/V^2},\\
V_{ov2} &= \sqrt{\frac{2(0.5\ \mathrm{mA})}{2.68\ \mathrm{mA/V^2}}} = \sqrt{0.3731\ \mathrm{V^2}} = 0.6108\ \mathrm{V}.
\end{aligned}
$$

$M_2$ is five times narrower than $M_1$, so it needs a $\sqrt5 \approx 2.24$ times larger overdrive for the same current.

### Step 5 — Threshold of $M_2$ with the body effect

The bulk of $M_2$ is at ground but its source is at $X$, so its source–bulk voltage is $V_{SB2} = V_X = 0.3232$ V. The body effect raises its threshold:

$$V_{TH2} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB2}} - \sqrt{2|\phi_F|}\right).$$

Here $V_{TH0} = 0.7$ V is the threshold at $V_{SB} = 0$, $\gamma = 0.45\ \mathrm{V^{1/2}}$ is the body-effect coefficient and $2|\phi_F| = 0.9$ V is the surface potential. Step by step:

$$
\begin{aligned}
\sqrt{2|\phi_F| + V_{SB2}} &= \sqrt{0.9 + 0.3232} = \sqrt{1.2232} = 1.1060\ \mathrm{V^{1/2}},\\
\sqrt{2|\phi_F|} &= \sqrt{0.9} = 0.9487\ \mathrm{V^{1/2}},\\
V_{TH2} &= 0.7 + 0.45\,(1.1060 - 0.9487) = 0.7 + 0.45\times0.1573 = 0.7 + 0.0708 = 0.7708\ \mathrm{V}.
\end{aligned}
$$

### Step 6 — The gate voltage $V_b$

The gate of $M_2$ sits $V_{GS2}$ above its source:

$$V_b = V_X + V_{GS2} = V_X + V_{TH2} + V_{ov2}.$$

Substituting:

$$V_b = 0.3232 + 0.7708 + 0.6108 = 1.7048\ \mathrm{V} \approx 1.70\ \mathrm{V}.$$

**Without the body effect** (if $V_{TH2}$ were taken as 0.7 V): $V_b = 0.3232 + 0.7 + 0.6108 = 1.634$ V. That is about 70 mV too low. Applied to the real circuit, it would set $V_X \approx 0.26$ V (solving $V_X + V_{TH2}(V_X) = 1.634 - 0.611$ V), leaving $M_1$ about 10 mV *inside* the triode region instead of 50 mV outside it.

### Step 7 — Check that $M_2$ is saturated

With $\lambda = 0$ the output dc level is

$$V_{out} = V_{DD} - I_DR_D = 3\ \mathrm{V} - (0.5\ \mathrm{mA})(1\ \mathrm{k\Omega}) = 2.5\ \mathrm{V}.$$

$$
\begin{aligned}
V_{DS2} &= V_{out} - V_X = 2.5 - 0.323 = 2.18\ \mathrm{V},\\
V_{GS2} - V_{TH2} &= V_{ov2} = 0.611\ \mathrm{V}.
\end{aligned}
$$

Since $2.18\ \mathrm{V} > 0.611\ \mathrm{V}$, $M_2$ is saturated, with about 1.57 V of margin. ✓ (Equivalently, $V_{out}$ could fall to $V_b - V_{TH2} = 1.70 - 0.77 = 0.93$ V before $M_2$ entered triode.)

### Result

$$V_b = V_{ov1} + 50\ \mathrm{mV} + V_{TH2} + V_{ov2} = 0.323 + 0.771 + 0.611\ \mathrm{V} \approx 1.70\ \mathrm{V}$$

(about 1.63 V if the body effect of $M_2$ were neglected). The intermediate values are $V_{ov1} = 0.273$ V, $V_X = 0.323$ V, $V_{ov2} = 0.611$ V and $V_{TH2} = 0.771$ V.

**Common mistake.** Setting $V_X = V_{GS1} + 50$ mV (about 1.02 V) instead of $V_{ov1} + 50$ mV. The edge of saturation is $V_{DS} = V_{GS} - V_{TH}$, not $V_{DS} = V_{GS}$, so the threshold must be subtracted.

**Common mistake.** Ignoring the body effect of $M_2$. Its source sits at $X \approx 0.32$ V while its bulk is grounded, which raises $V_{TH2}$ by about 71 mV. Since the target margin is only 50 mV, neglecting this pushes $M_1$ into the triode region.

**Common mistake.** Computing $V_{GS2}$ with $(W/L)_1$, or applying the 50-mV margin to $M_2$ instead of $M_1$. $M_2$ is the narrow device (20 vs 100), so its overdrive is 0.611 V, not 0.273 V; and the problem asks for $M_1$, the input device, to be 50 mV from triode.
