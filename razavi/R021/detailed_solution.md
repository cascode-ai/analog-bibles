# Detailed solution - R021

**Approach.** The gate (2 V) and the source (1 V) of $M_1$ are fixed, so $V_{GS} = 1$ V never changes; $V_{in}$ drives only the bulk, a "back gate" that changes the threshold, hence the drain current and the drop across $R_1$. Compute $V_{TH}(V_{in})$, the saturation current and $V_{out} = V_{DD} - R_1I_D$, check the region, and then discuss where the source–bulk junction becomes forward-biased.

### Step 1 — Terminal voltages

The drain is fed from $V_{DD}$ through $R_1$ and sits above 1 V, so the lower-potential terminal, at 1 V, is the source:

$$
\begin{aligned}
V_{GS} &= 2 - 1 = 1\ \mathrm{V} \quad(\text{fixed}),\\
V_{DS} &= V_{out} - 1,\\
V_{SB} &= 1 - V_{in},
\end{aligned}
$$

and the drain current flows through $R_1$:

$$V_{out} = V_{DD} - R_1I_D = 3 - R_1I_D .$$

### Step 2 — Threshold versus $V_{in}$

$$V_{TH} = 0.7 + 0.45\left(\sqrt{0.9 + 1 - V_{in}} - 0.9487\right) = 0.7 + 0.45\left(\sqrt{1.9 - V_{in}} - 0.9487\right)\ \mathrm{V},$$

$$
\begin{aligned}
V_{in} = 0:&\quad V_{TH} = 0.7 + 0.45\,(1.3784 - 0.9487) = 0.893\ \mathrm{V},\\
V_{in} = 0.5\ \mathrm{V}:&\quad V_{TH} = 0.7 + 0.45\,(1.1832 - 0.9487) = 0.806\ \mathrm{V},\\
V_{in} = 1\ \mathrm{V}:&\quad V_{TH} = 0.7 + 0.45\,(0.9487 - 0.9487) = 0.700\ \mathrm{V},\\
V_{in} = 1.5\ \mathrm{V}:&\quad V_{TH} = 0.7 + 0.45\,(0.6325 - 0.9487) = 0.558\ \mathrm{V}.
\end{aligned}
$$

Raising the bulk toward (and above) the source lowers the threshold.

### Step 3 — Drain current and output voltage (saturation)

Assuming saturation (checked in Step 4):

$$I_D = \tfrac12\beta\,(V_{GS} - V_{TH})^2 = \tfrac12\beta\,(1 - V_{TH})^2 ,$$

$$
\begin{aligned}
V_{in} = 0:&\quad I_D = \tfrac12\beta\,(0.107\ \mathrm{V})^2 = 0.0057\beta\ \mathrm{V^2},\\
V_{in} = 0.5\ \mathrm{V}:&\quad I_D = \tfrac12\beta\,(0.194\ \mathrm{V})^2 = 0.019\beta\ \mathrm{V^2},\\
V_{in} = 1\ \mathrm{V}:&\quad I_D = \tfrac12\beta\,(0.300\ \mathrm{V})^2 = 0.045\beta\ \mathrm{V^2},\\
V_{in} = 1.5\ \mathrm{V}:&\quad I_D = \tfrac12\beta\,(0.442\ \mathrm{V})^2 = 0.098\beta\ \mathrm{V^2}.
\end{aligned}
$$

At $V_{in} = 0$ the device is barely on (overdrive 0.11 V), so **$V_{out}$ starts just below 3 V**, and then falls as $I_D$ grows.

**Slope.** $V_{in}$ acts through the body transconductance $g_{mb} = \partial I_D/\partial V_{in} = g_m\eta$, with $g_m = \beta(1 - V_{TH})$ and $\eta = \gamma/(2\sqrt{1.9 - V_{in}})$:

$$\frac{dV_{out}}{dV_{in}} = -R_1\,g_{mb} = -R_1\,\beta\,(1 - V_{TH})\,\frac{\gamma}{2\sqrt{1.9 - V_{in}}} .$$

Both $g_m$ (rising overdrive) and $\eta$ (shrinking $V_{SB}$) grow with $V_{in}$, so **the curve falls with an ever-increasing slope** (concave down): a common-source amplifier driven from its bulk.

**Example, $\beta R_1 = 10\ \mathrm{V^{-1}}$:** $V_{out} = 3 - 10\,(I_D/\beta)$:

| $V_{in}$ (V) | $V_{TH}$ (V) | $V_{ov}$ (V) | $I_D/\beta$ (V²) | $V_{out}$ (V) | slope |
|---|---|---|---|---|---|
| 0 | 0.893 | 0.107 | 0.0057 | 2.94 | −0.17 |
| 0.5 | 0.806 | 0.194 | 0.019 | 2.81 | −0.37 |
| 1.0 | 0.700 | 0.300 | 0.045 | 2.55 | −0.71 |
| 1.25 | 0.636 | 0.364 | 0.066 | 2.34 | −1.02 |
| 1.5 | 0.558 | 0.442 | 0.098 | 2.02 | −1.57 |

Sample line, $V_{in} = 1$ V: $V_{out} = 3 - (10\ \mathrm{V^{-1}})(0.045\ \mathrm{V^2}) = 3 - 0.45 = 2.55$ V.

### Step 4 — Region check and the triode case

Saturation requires

$$V_{out} - 1 \ge 1 - V_{TH} \quad\Longleftrightarrow\quad V_{out} \ge 2 - V_{TH},$$

where $2 - V_{TH}$ ranges from 1.11 V ($V_{in} = 0$) to 1.44 V ($V_{in} = 1.5$ V). In the example $V_{out} \ge 2.02$ V, so $M_1$ stays saturated.

If $R_1$ is large, $R_1I_D$ can pull $V_{out}$ below $2 - V_{TH}$: $M_1$ enters **triode**, the current becomes limited by $R_1$, and the curve **flattens**, approaching (but staying above) the 1-V source potential. For example, with $\beta R_1 = 30\ \mathrm{V^{-1}}$ the saturation formula would give an impossible $3 - 30\times0.098 = 0.07$ V at $V_{in} = 1.5$ V; the triode equation $V_{out} = 3 - \beta R_1[(1 - V_{TH})(V_{out} - 1) - \tfrac12(V_{out} - 1)^2]$ gives $V_{out} \approx 1.17$ V instead.

### Step 5 — $V_{in} > 1$ V: forward-biased source–bulk junction

For $V_{in} > 1$ V the bulk is above the source ($V_{SB} < 0$), so the source–bulk junction is **forward biased**.

- Up to a few hundred millivolts (roughly $V_{in} \lesssim 1.4$ V) its current is small and the forward-body-bias calculation above is a reasonable estimate.
- From about 1.5–1.7 V (forward bias 0.5–0.7 V) a large junction current flows from $V_{in}$ into the 1-V source, and the electrons injected into the bulk turn on the **parasitic lateral npn** (source = emitter, bulk = base, drain = collector), whose collector current is drawn through $R_1$ and pulls $V_{out}$ down further.
- The square-law/body-effect description is invalid there, and the exact curve depends on junction and bipolar parameters that are not given; a real circuit must never drive the bulk this far.

### Result

- $V_{GS} = 1$ V is fixed; the bulk acts as a back gate. As $V_{in}$ rises, $V_{SB} = 1 - V_{in}$ falls and $V_{TH} = 0.7 + 0.45(\sqrt{1.9 - V_{in}} - \sqrt{0.9})$ falls (0.893, 0.806, 0.70 and 0.56 V at $V_{in} = 0$, 0.5, 1 and 1.5 V).
- In saturation $I_D = \tfrac12\beta(1 - V_{TH})^2$ = 0.0057β, 0.019β, 0.045β and 0.098β at those points. $V_{out} = V_{DD} - R_1I_D$ **starts just below 3 V** ($M_1$ barely on) and **falls with growing slope**, $dV_{out}/dV_{in} = -R_1g_{mb}$.
- If $R_1$ is large, $V_{out}$ drops below $2 - V_{TH}$, $M_1$ enters triode and the curve flattens above 1 V.
- For $V_{in} > 1$ V the source–bulk junction is forward biased. Above roughly 1.5–1.7 V it conducts heavily and the parasitic lateral npn pulls extra current through $R_1$, so $V_{out}$ drops further and the circuit no longer behaves as a MOSFET.

**Common mistake.** Treating $V_{in}$ as the gate input. The gate is fixed at 2 V; $V_{in}$ is on the bulk, whose effect is weaker ($g_{mb} = \eta g_m$) and acts only via $V_{TH}$.

**Common mistake.** Saying that $V_{out}$ rises with $V_{in}$. Raising the bulk lowers $V_{TH}$, which *increases* the drain current and the drop across $R_1$, so $V_{out}$ falls.

**Common mistake.** Extrapolating the body-effect formula to $V_{in} = 3$ V. Once the bulk is more than about 0.5–0.6 V above the source, the junction (and the lateral bipolar transistor) conducts, and the square-law model is meaningless.
