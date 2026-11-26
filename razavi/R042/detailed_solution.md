# Detailed solution - R042

Approach: Use $f_T = g_m/(2\pi C_{in})$, where $C_{in}$ is the total capacitance seen from the gate with source, drain and bulk at ac ground. In subthreshold, $g_m$ follows from the exponential law, and $C_{in}$ must be re-examined because there is no inversion layer. Then compare the result with the strong-inversion $f_T$ of the same transistor.

### Step 1 — Transconductance in subthreshold

$$g_m = \frac{\partial I_D}{\partial V_{GS}} = I_0\exp\frac{V_{GS}}{\zeta V_T}\cdot\frac{1}{\zeta V_T} = \frac{I_D}{\zeta V_T} .$$

So $g_m$ is proportional to the current and $g_m/I_D = 1/(\zeta V_T)$ is constant. For $\zeta = 1.5$ and $V_T \approx 25.9$ mV (300 K):

$$\frac{g_m}{I_D} = \frac{1}{1.5\times 25.9\ \mathrm{mV}} = 25.7\ \mathrm{V^{-1}},$$

compared with $g_m/I_D = 2/(V_{GS} - V_{TH}) = 10\ \mathrm{V^{-1}}$ for a square-law device at an overdrive of 0.2 V. This high transconductance efficiency is the attraction of subthreshold operation.

### Step 2 — Gate capacitance in weak inversion

In subthreshold the mobile channel charge is tiny, so there is no inversion layer to shield the bulk from the gate:

- $C_{GS}$ and $C_{GD}$ reduce to the overlap capacitances, $C_{GS} \approx C_{GD} \approx WC_{ov}$, with $C_{ov}$ the overlap capacitance per unit width.
- $C_{GB}$ becomes significant: the gate reaches the bulk through $C_{ox}$ in series with the depletion-layer capacitance $C_{dep}$ (both per unit area),

$$C_{GB} = WL\,\frac{C_{ox}C_{dep}}{C_{ox} + C_{dep}} .$$

Relation to $\zeta$: The same capacitive divider sets the subthreshold slope. A change in $V_{GS}$ moves the surface potential $\psi_s$ by $\partial\psi_s/\partial V_{GS} = C_{ox}/(C_{ox} + C_{dep})$, and the current depends on $\exp(\psi_s/V_T)$, so

$$\zeta = \frac{C_{ox} + C_{dep}}{C_{ox}} = 1 + \frac{C_{dep}}{C_{ox}} \quad\Longrightarrow\quad C_{dep} = (\zeta - 1)\,C_{ox} .$$

Substituting into $C_{GB}$:

$$C_{GB} = WL\,\frac{C_{ox}\cdot(\zeta - 1)C_{ox}}{C_{ox} + (\zeta - 1)C_{ox}} = WL\,\frac{(\zeta - 1)C_{ox}^2}{\zeta\,C_{ox}} = WLC_{ox}\,\frac{\zeta - 1}{\zeta} .$$

In the $f_T$ test source, drain and bulk are all at ac ground, so all three capacitances load the gate:

$$C_{in} = C_{GS} + C_{GD} + C_{GB} \approx 2WC_{ov} + WLC_{ox}\,\frac{\zeta - 1}{\zeta} .$$

For $\zeta = 1.5$, $C_{GB} = WLC_{ox}/3$, the same order as the strong-inversion gate capacitance ($\tfrac23WLC_{ox}$ to $WLC_{ox}$): the capacitance does *not* collapse in subthreshold.

### Step 3 — $f_T$ in subthreshold

As in strong inversion, $V_{gs} = I_{in}/(j\omega C_{in})$ and $I_{out} = g_mV_{gs}$, so the current gain $g_m/(\omega C_{in})$ reaches 1 at

$$f_{T,sub} = \frac{g_m}{2\pi C_{in}} = \frac{I_D}{2\pi\,\zeta V_T\,C_{in}} .$$

Neglecting the overlap terms, $C_{in} \approx WLC_{ox}(\zeta - 1)/\zeta$, and the factor $\zeta$ cancels:

$$f_{T,sub} \approx \frac{I_D}{2\pi\,\zeta V_T}\cdot\frac{\zeta}{(\zeta - 1)WLC_{ox}} = \frac{I_D}{2\pi\,(\zeta - 1)\,V_T\,WLC_{ox}} .$$

For a given device $C_{in}$ is fixed, so $f_{T,sub} \propto I_D \propto \exp[V_{GS}/(\zeta V_T)]$: $f_T$ is *exponential* in the gate voltage and drops by a factor of 10 for every

$$\Delta V_{GS} = \zeta V_T\ln 10 = 1.5\times25.9\ \mathrm{mV}\times2.303 = 89\ \mathrm{mV}\qquad(\zeta = 1.5)$$

of reduction in $V_{GS}$.

### Step 4 — $f_T$ in strong inversion, written in terms of $I_D$

In strong-inversion saturation (with $C_{GS} + C_{GD} \approx WLC_{ox}$) the square law gives $V_{GS} - V_{TH} = \sqrt{2I_D/(\mu_nC_{ox}W/L)}$, so

$$f_{T,SI} \approx \frac{\mu_n(V_{GS} - V_{TH})}{2\pi L^2} = \frac{\mu_n}{2\pi L^2}\sqrt{\frac{2I_D}{\mu_nC_{ox}W/L}} \propto \sqrt{I_D} .$$

In strong inversion $f_T$ grows only linearly with $V_{GS}$ (as the square root of the current); in subthreshold it is proportional to $I_D$ itself, which is exponentially small.

### Step 5 — Comparison for the same transistor

Take one device (fixed $W$, $L$) and lower its gate voltage from strong inversion into subthreshold.

Asymptotic matching: Compare the two expressions at the same $I_D$. They match when $2I_D/(V_{GS} - V_{TH}) = I_D/(\zeta V_T)$, i.e. at

$$V_{GS} - V_{TH} \approx 2\zeta V_T = 2\times1.5\times25.9\ \mathrm{mV} \approx 78\ \mathrm{mV} .$$

This is an order of magnitude estimate near moderate inversion. The two asymptotes do not locate a precise inversion boundary, and the capacitance there is only approximate. With the same capacitance $WLC_{ox}$ in both formulas they are equal; with the weak-inversion capacitance of Step 2 the subthreshold value is a factor $\zeta/(\zeta - 1) = 3$ higher, a modest difference compared with what follows. This estimate is already several times below the strong-inversion $f_T$ at a normal overdrive.

Where the subthreshold approximation applies, $f_T$ falls by a decade every 89 mV.

Illustration with assumed values $\mu_n = 0.035\ \mathrm{m^2/(V\,s)}$, $L = 0.5\ \mu\mathrm{m}$ and $\zeta = 1.5$, so that $\mu_n/(2\pi L^2) = 0.035/(1.571\times10^{-12}) = 2.23\times10^{10}\ \mathrm{Hz/V}$. The table uses $WLC_{ox}$ in both regions and uses the matching point as the reference for extrapolation.

| Bias point | $f_T$ |
|---|---|
| strong inversion, $V_{GS} - V_{TH} = 0.5$ V | $2.23\times10^{10}\times0.5 = 11$ GHz |
| strong inversion, $V_{GS} - V_{TH} = 0.2$ V | $2.23\times10^{10}\times0.2 = 4.5$ GHz |
| asymptotic matching point, $V_{GS} - V_{TH} \approx 78$ mV | $2.23\times10^{10}\times0.078 = 1.7$ GHz |
| subthreshold, 89 mV below the matching point | 170 MHz |
| subthreshold, 178 mV below the matching point | 17 MHz |
| subthreshold, 267 mV below the matching point | 1.7 MHz |

Why the high $g_m/I_D$ does not help speed: At equal $I_D$ a subthreshold device has a larger $g_m$, but to carry that current below threshold it must be made very wide, so its capacitance grows much faster than its $g_m$. The ratio $f_{T,sub}/f_{T,SI} = (V_{GS} - V_{TH})/(2\zeta V_T)$ for "equal current and equal capacitance" compares two operating points that cannot both exist in one device; for a given transistor, subthreshold operation always means a lower $f_T$.

### Result

$$g_m = \frac{I_D}{\zeta V_T}, \qquad f_{T,sub} = \frac{g_m}{2\pi C_{in}} = \frac{I_D}{2\pi\zeta V_TC_{in}} \approx \frac{I_D}{2\pi(\zeta - 1)V_T\,WLC_{ox}},$$

with $C_{in} \approx WLC_{ox}(\zeta - 1)/\zeta + 2WC_{ov}$ (gate-to-bulk capacitance through the depletion layer plus overlaps). Hence $f_{T,sub} \propto I_D \propto \exp[V_{GS}/(\zeta V_T)]$, falling a decade per $\zeta V_T\ln10 \approx 90$ mV. In strong inversion $f_T = \mu_n(V_{GS} - V_{TH})/(2\pi L^2) \propto \sqrt{I_D}$. Matching the two asymptotes gives $V_{GS}-V_{TH}\approx 2\zeta V_T$ as a speed reference near moderate inversion. In subthreshold, $f_T$ drops exponentially as the gate voltage falls. Subthreshold operation buys a high $g_m/I_D$ at the cost of speed.

**Common mistake:** Claiming that subthreshold devices are faster because their $g_m/I_D$ is higher. $f_T$ is $g_m$ divided by capacitance, not by current; for a given device the subthreshold current, and with it $g_m$, is exponentially small while the gate capacitance stays of order $WLC_{ox}$.

**Common mistake:** Using the square-law $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$ or $g_m = 2I_D/(V_{GS} - V_{TH})$ below threshold. There $g_m = I_D/(\zeta V_T)$; forgetting the factor $\zeta$ overestimates $g_m$ by 50 % for $\zeta = 1.5$.

**Common mistake:** Assuming the gate capacitance vanishes without an inversion layer. The gate then couples to the bulk through $C_{ox}$ in series with $C_{dep}$, and with the bulk at ac ground this $C_{GB}$ loads the gate just as $C_{GS}$ does in strong inversion.
