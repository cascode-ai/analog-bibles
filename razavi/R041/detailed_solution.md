# Detailed solution - R041

**Approach.** Express both quantities in $f_T = g_m/[2\pi(C_{GD} + C_{GS})]$ in terms of the device geometry: $g_m$ from the square law, and the gate capacitance from the oxide capacitance of the channel area $WL$. The width $W$ and the oxide capacitance per unit area $C_{ox}$ cancel, leaving only the mobility, the overdrive and $L^2$. Then interpret the result for a fixed bias current and a shrinking voltage headroom.

### Step 1 — Transconductance from the square law

In saturation the **square-law drain current** is

$$I_D = \frac12\,\mu_nC_{ox}\frac{W}{L}\,(V_{GS} - V_{TH})^2 ,$$

where $\mu_n$ is the electron mobility, $C_{ox}$ the gate-oxide capacitance per unit area, $W$ and $L$ the channel width and length, $V_{GS}$ the gate–source voltage and $V_{TH}$ the threshold voltage. (Channel-length modulation is neglected; it does not affect $g_m$ to first order.)

The **transconductance** is the derivative of $I_D$ with respect to $V_{GS}$ at constant $V_{DS}$:

$$g_m = \frac{\partial I_D}{\partial V_{GS}} = \frac12\,\mu_nC_{ox}\frac{W}{L}\cdot 2\,(V_{GS} - V_{TH}) = \mu_nC_{ox}\frac{W}{L}\,(V_{GS} - V_{TH}) .$$

### Step 2 — Gate capacitance in terms of geometry

The gate, the thin oxide and the channel form a parallel-plate capacitor of area $WL$. Its capacitance is

$$C_{gate} = WLC_{ox} .$$

In the small-signal model this capacitance is shared between $C_{GS}$ and $C_{GD}$. If we neglect the overlap capacitances (the small extra capacitance where the gate overlaps the source and drain diffusions), the total is

$$C_{GS} + C_{GD} \approx WLC_{ox} .$$

This is the approximation behind the stated formula: the whole channel charge is controlled by the gate, and its capacitance is $WLC_{ox}$. (Step 4 discusses the more detailed saturation split.)

### Step 3 — Form $f_T$ and simplify

Substitute $g_m$ from Step 1 and the capacitance from Step 2 into the definition of $f_T$:

$$f_T = \frac{g_m}{2\pi\,(C_{GD} + C_{GS})} = \frac{\mu_nC_{ox}\dfrac{W}{L}\,(V_{GS} - V_{TH})}{2\pi\,WLC_{ox}} .$$

Cancel $C_{ox}$ (it appears in numerator and denominator):

$$f_T = \frac{\mu_n\dfrac{W}{L}\,(V_{GS} - V_{TH})}{2\pi\,WL} .$$

Cancel $W$:

$$f_T = \frac{\mu_n\,(V_{GS} - V_{TH})}{2\pi\,L\cdot L} .$$

Hence

$$f_T = \frac{\mu_n}{2\pi}\,\frac{V_{GS} - V_{TH}}{L^2} .$$

**Why $W$ drops out.** Making the device wider increases $g_m$ and the gate capacitance in the same proportion. **Why $L^2$.** A longer channel lowers $g_m$ (proportional to $1/L$) *and* raises the capacitance (proportional to $L$). Physically, $L^2/[\mu_n(V_{GS} - V_{TH})]$ is of the order of the time an electron needs to cross the channel, so $f_T$ is roughly the inverse of the carrier transit time, hence the name.

### Step 4 — Effect of the saturation capacitance split (same scaling)

In saturation the channel is pinched off at the drain end. The gate–channel capacitance then appears almost entirely between gate and source:

$$C_{GS} = \tfrac23\,WLC_{ox} + WC_{ov}, \qquad C_{GD} = WC_{ov},$$

where $C_{ov}$ is the overlap capacitance per unit width. Neglecting overlap, $C_{GS} + C_{GD} = \tfrac23\,WLC_{ox}$, and the same cancellation as in Step 3 gives

$$f_T = \frac{\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})}{2\pi\cdot\tfrac23\,WLC_{ox}} = \frac32\cdot\frac{\mu_n}{2\pi}\,\frac{V_{GS} - V_{TH}}{L^2} .$$

Only the numerical constant changes, from 1 to 3/2. The dependence on $\mu_n$, on the overdrive and on $L^2$ is identical, and that dependence is the point of the problem. The stated form corresponds to taking the total gate capacitance as $WLC_{ox}$, which also roughly accounts for the overlap and fringing capacitances that the $\tfrac23$ value ignores.

### Step 5 — Link to the minimum drain–source voltage

Define the **overdrive voltage** $V_{ov} = V_{GS} - V_{TH}$. A transistor stays in saturation only while $V_{DS} \ge V_{ov}$, so

$$V_{DS,min} = V_{ov} .$$

With a low supply voltage we want a small $V_{DS,min}$, i.e. a small $V_{ov}$. For a **fixed** bias current $I_D$ and a fixed $L$, solve the square law for the width:

$$W = \frac{2\,I_D\,L}{\mu_nC_{ox}\,V_{ov}^2} .$$

So $W$ must grow as $1/V_{ov}^2$, which is the "increase the width" of the problem statement. Follow each quantity:

$$
\begin{aligned}
C_{GS} + C_{GD} &\approx WLC_{ox} = \frac{2\,I_D\,L^2}{\mu_n\,V_{ov}^2} \qquad(\propto 1/V_{ov}^2),\\
g_m &= \mu_nC_{ox}\frac{W}{L}V_{ov} = \frac{2\,I_D}{V_{ov}} \qquad(\propto 1/V_{ov}),\\
f_T &= \frac{g_m}{2\pi\,WLC_{ox}} = \frac{2I_D/V_{ov}}{2\pi\cdot 2I_DL^2/(\mu_nV_{ov}^2)} = \frac{\mu_n\,V_{ov}}{2\pi L^2} .
\end{aligned}
$$

The capacitance grows faster than the transconductance, so $f_T$ falls in direct proportion to the overdrive. For a fixed $I_D$ and $L$:

| $V_{ov} = V_{DS,min}$ | relative $W$ | relative $g_m$ | relative $C_{GS}+C_{GD}$ | relative $f_T$ |
|---|---|---|---|---|
| 0.4 V | 1 | 1 | 1 | 1 |
| 0.2 V | 4 | 2 | 4 | 1/2 |
| 0.1 V | 16 | 4 | 16 | 1/4 |

**Numerical illustration.** With $\mu_n \approx 350\ \mathrm{cm^2/(V\cdot s)} = 0.035\ \mathrm{m^2/(V\cdot s)}$ and $L = 0.5\ \mu\mathrm{m}$:

$$f_T = \frac{(0.035\ \mathrm{m^2/(V\,s)})(0.2\ \mathrm{V})}{2\pi\,(0.5\times10^{-6}\ \mathrm{m})^2} = \frac{7\times10^{-3}}{1.571\times10^{-12}}\ \mathrm{Hz} = 4.5\ \mathrm{GHz}$$

at $V_{ov} = 0.2$ V, but only 2.2 GHz at $V_{ov} = 0.1$ V. The only other way to recover speed is a shorter $L$, which is why low-voltage design pushes toward minimum channel length.

### Result

$$f_T = \frac{g_m}{2\pi(C_{GD} + C_{GS})} = \frac{\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})}{2\pi\,WLC_{ox}} = \frac{\mu_n}{2\pi}\,\frac{V_{GS} - V_{TH}}{L^2},$$

using the square-law $g_m$ and a total gate capacitance $C_{GS} + C_{GD} \approx WLC_{ox}$ (with $C_{GS} = \tfrac23WLC_{ox}$, $C_{GD} \approx 0$ the constant becomes 3/2, with the same scaling). Since $V_{DS,min} = V_{GS} - V_{TH}$, lowering the headroom at constant current forces $W \propto 1/V_{ov}^2$, and $f_T$ drops in proportion to $V_{GS} - V_{TH}$.

**Common mistake.** Concluding that $f_T \propto 1/L$, by forgetting that the gate capacitance itself is proportional to $L$. Both $g_m \propto 1/L$ and $C \propto L$ act in the same direction, giving $1/L^2$.

**Common mistake.** Arguing that a smaller overdrive raises $f_T$ because $g_m = 2I_D/V_{ov}$ increases. At fixed current the extra $g_m$ comes from a wider device whose capacitance grows as $1/V_{ov}^2$, faster than $g_m$, so $f_T$ falls.

**Common mistake.** Writing the gate capacitance without relating it to $W$ and $L$ (or leaving a stray $W$ or $C_{ox}$). The whole result rests on $C_{GS} + C_{GD} \propto WLC_{ox}$, so that $W$ and $C_{ox}$ cancel exactly.
