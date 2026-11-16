# Detailed solution - R126

**Approach.** The cascode gate voltage sets the drain of $M_1$ (node $X$): $V_X = V_b - V_{GS2}$. Find the $V_X$ that keeps $M_1$ 50 mV above the edge of saturation, compute $V_{GS2}$ with the body effect of $M_2$ (source at $V_X$, bulk at ground), and add the two.

### Step 1 — Overdrive of $M_1$ and the required $V_X$

$M_1$'s source is grounded, so $V_{DS1} = V_X$, and the condition is $V_X = V_{ov1} + 50$ mV. With $\lambda = 0$, $V_{ov} = \sqrt{2I_D/[\mu_nC_{ox}(W/L)]}$; for $M_1$, $(W/L)_1 = 50/0.5 = 100$:

$$
\begin{aligned}
\mu_nC_{ox}(W/L)_1 &= (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2},\\
V_{ov1} &= \sqrt{\frac{2(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.07463\ \mathrm{V^2}} = 0.2732\ \mathrm{V}.
\end{aligned}
$$

(With source and bulk at ground, $V_{TH1} = 0.7$ V, so the input dc level is $V_{GS1} = 0.973$ V; it is not needed for $V_b$.) Then

$$V_X = V_{ov1} + 0.05\ \mathrm{V} = 0.2732 + 0.05 = 0.3232\ \mathrm{V}.$$

### Step 2 — Overdrive of $M_2$

$(W/L)_2 = 10/0.5 = 20$, with the same 0.5 mA:

$$
\begin{aligned}
\mu_nC_{ox}(W/L)_2 &= (134\ \mu\mathrm{A/V^2})(20) = 2.68\ \mathrm{mA/V^2},\\
V_{ov2} &= \sqrt{\frac{2(0.5\ \mathrm{mA})}{2.68\ \mathrm{mA/V^2}}} = \sqrt{0.3731\ \mathrm{V^2}} = 0.6108\ \mathrm{V}.
\end{aligned}
$$

$M_2$ is five times narrower than $M_1$, so it needs a $\sqrt5 \approx 2.24$ times larger overdrive.

### Step 3 — Threshold of $M_2$ with the body effect

$V_{SB2} = V_X = 0.3232$ V:

$$
\begin{aligned}
V_{TH2} &= V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB2}} - \sqrt{2|\phi_F|}\right),\\
\sqrt{2|\phi_F| + V_{SB2}} &= \sqrt{0.9 + 0.3232} = \sqrt{1.2232} = 1.1060\ \mathrm{V^{1/2}},\\
\sqrt{2|\phi_F|} &= \sqrt{0.9} = 0.9487\ \mathrm{V^{1/2}},\\
V_{TH2} &= 0.7 + 0.45\,(1.1060 - 0.9487) = 0.7 + 0.45\times0.1573 = 0.7 + 0.0708 = 0.7708\ \mathrm{V}.
\end{aligned}
$$

### Step 4 — The gate voltage $V_b$

$$V_b = V_X + V_{GS2} = V_X + V_{TH2} + V_{ov2} = 0.3232 + 0.7708 + 0.6108 = 1.7048\ \mathrm{V} \approx 1.70\ \mathrm{V}.$$

**Without the body effect** ($V_{TH2} = 0.7$ V): $V_b = 0.3232 + 0.7 + 0.6108 = 1.634$ V, about 70 mV too low. In the real circuit that would set $V_X \approx 0.26$ V (solving $V_X + V_{TH2}(V_X) = 1.634 - 0.611$ V), leaving $M_1$ about 10 mV *inside* the triode region instead of 50 mV outside it.

### Step 5 — Check that $M_2$ is saturated

With $\lambda = 0$:

$$V_{out} = V_{DD} - I_DR_D = 3\ \mathrm{V} - (0.5\ \mathrm{mA})(1\ \mathrm{k\Omega}) = 2.5\ \mathrm{V},$$

$$V_{DS2} = V_{out} - V_X = 2.5 - 0.323 = 2.18\ \mathrm{V} > V_{ov2} = 0.611\ \mathrm{V},$$

so $M_2$ is saturated with about 1.57 V of margin ✓ ($V_{out}$ could fall to $V_b - V_{TH2} = 1.70 - 0.77 = 0.93$ V before $M_2$ entered triode).

### Result

$$V_b = V_{ov1} + 50\ \mathrm{mV} + V_{TH2} + V_{ov2} = 0.323 + 0.771 + 0.611\ \mathrm{V} \approx 1.70\ \mathrm{V}$$

(about 1.63 V if the body effect of $M_2$ were neglected). The intermediate values are $V_{ov1} = 0.273$ V, $V_X = 0.323$ V, $V_{ov2} = 0.611$ V and $V_{TH2} = 0.771$ V.

**Common mistake.** Setting $V_X = V_{GS1} + 50$ mV (about 1.02 V) instead of $V_{ov1} + 50$ mV: the edge of saturation is $V_{DS} = V_{GS} - V_{TH}$.

**Common mistake.** Ignoring the body effect of $M_2$. Its source sits at $X \approx 0.32$ V above the grounded bulk, which raises $V_{TH2}$ by about 71 mV; with a target margin of only 50 mV, this pushes $M_1$ into the triode region.

**Common mistake.** Computing $V_{GS2}$ with $(W/L)_1$, or applying the 50-mV margin to $M_2$. $M_2$ is the narrow device (20 vs 100), so its overdrive is 0.611 V, not 0.273 V, and the margin is required for the input device $M_1$.
