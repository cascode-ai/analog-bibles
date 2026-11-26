# Detailed solution - R041

Approach: Write $g_m$ from the square law and the gate capacitance as that of the channel area $WL$; $W$ and $C_{ox}$ cancel in $f_T = g_m/[2\pi(C_{GD} + C_{GS})]$, leaving the mobility, the overdrive and $L^2$. Then interpret the result for a fixed bias current and a shrinking voltage headroom.

### Step 1 — Transconductance and gate capacitance in terms of geometry

With the square law $I_D = \tfrac12\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})^2$ (channel-length modulation neglected),

$$g_m = \frac{\partial I_D}{\partial V_{GS}} = \frac12\,\mu_nC_{ox}\frac{W}{L}\cdot 2\,(V_{GS} - V_{TH}) = \mu_nC_{ox}\frac{W}{L}\,(V_{GS} - V_{TH}) .$$

The gate, oxide and channel form a parallel-plate capacitor of area $WL$, whose capacitance is shared between $C_{GS}$ and $C_{GD}$. Neglecting the overlap capacitances,

$$C_{GS} + C_{GD} \approx WLC_{ox} .$$

This is the approximation behind the stated formula; Step 3 discusses the more detailed saturation split.

### Step 2 — Form $f_T$ and simplify

$$f_T = \frac{g_m}{2\pi\,(C_{GD} + C_{GS})} = \frac{\mu_nC_{ox}\dfrac{W}{L}\,(V_{GS} - V_{TH})}{2\pi\,WLC_{ox}} = \frac{\mu_n\,(V_{GS} - V_{TH})}{2\pi\,L\cdot L} = \frac{\mu_n}{2\pi}\,\frac{V_{GS} - V_{TH}}{L^2} .$$

$W$ and $C_{ox}$ cancel because $g_m$ and the gate capacitance are both proportional to each of them: widening the device raises both in the same proportion. A longer channel both lowers $g_m$ ($\propto 1/L$) and raises the capacitance ($\propto L$), hence $L^2$. Physically, $L^2/[\mu_n(V_{GS} - V_{TH})]$ is of the order of the time an electron needs to cross the channel, so $f_T$ is roughly the inverse of the carrier transit time, hence the name.

### Step 3 — Effect of the saturation capacitance split (same scaling)

In saturation the channel is pinched off at the drain end, so the gate–channel capacitance appears almost entirely between gate and source:

$$C_{GS} = \tfrac23\,WLC_{ox} + WC_{ov}, \qquad C_{GD} = WC_{ov},$$

where $C_{ov}$ is the overlap capacitance per unit width. Neglecting overlap, $C_{GS} + C_{GD} = \tfrac23\,WLC_{ox}$, and the same cancellation gives

$$f_T = \frac{\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})}{2\pi\cdot\tfrac23\,WLC_{ox}} = \frac32\cdot\frac{\mu_n}{2\pi}\,\frac{V_{GS} - V_{TH}}{L^2} .$$

Only the constant changes, from 1 to 3/2; the dependence on $\mu_n$, on the overdrive and on $L^2$, which is the point of the problem, is identical. Taking the total gate capacitance as $WLC_{ox}$ also roughly accounts for the overlap and fringing capacitances that the $\tfrac23$ value ignores.

### Step 4 — Link to the minimum drain–source voltage

With $V_{ov} = V_{GS} - V_{TH}$, saturation requires $V_{DS} \ge V_{ov}$, so

$$V_{DS,min} = V_{ov} .$$

A low supply calls for a small $V_{ov}$. For a fixed bias current $I_D$ and a fixed $L$, the square law gives the width

$$W = \frac{2\,I_D\,L}{\mu_nC_{ox}\,V_{ov}^2} ,$$

so $W$ must grow as $1/V_{ov}^2$ (the "increase the width" of the problem statement). Then

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

Numerical illustration: With $\mu_n \approx 350\ \mathrm{cm^2/(V\cdot s)} = 0.035\ \mathrm{m^2/(V\cdot s)}$ and $L = 0.5\ \mu\mathrm{m}$:

$$f_T = \frac{(0.035\ \mathrm{m^2/(V\,s)})(0.2\ \mathrm{V})}{2\pi\,(0.5\times10^{-6}\ \mathrm{m})^2} = \frac{7\times10^{-3}}{1.571\times10^{-12}}\ \mathrm{Hz} = 4.5\ \mathrm{GHz}$$

at $V_{ov} = 0.2$ V, but only 2.2 GHz at $V_{ov} = 0.1$ V. The only other way to recover speed is a shorter $L$, which is why low-voltage design pushes toward minimum channel length.

### Result

$$f_T = \frac{g_m}{2\pi(C_{GD} + C_{GS})} = \frac{\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})}{2\pi\,WLC_{ox}} = \frac{\mu_n}{2\pi}\,\frac{V_{GS} - V_{TH}}{L^2},$$

using the square-law $g_m$ and a total gate capacitance $C_{GS} + C_{GD} \approx WLC_{ox}$ (with $C_{GS} = \tfrac23WLC_{ox}$, $C_{GD} \approx 0$ the constant becomes 3/2, with the same scaling). Since $V_{DS,min} = V_{GS} - V_{TH}$, lowering the headroom at constant current forces $W \propto 1/V_{ov}^2$, and $f_T$ drops in proportion to $V_{GS} - V_{TH}$.

**Common mistake:** Concluding that $f_T \propto 1/L$ by forgetting that the gate capacitance itself is proportional to $L$. Both $g_m \propto 1/L$ and $C \propto L$ act in the same direction, giving $1/L^2$.

**Common mistake:** Arguing that a smaller overdrive raises $f_T$ because $g_m = 2I_D/V_{ov}$ increases. At fixed current the extra $g_m$ comes from a wider device whose capacitance grows as $1/V_{ov}^2$, faster than $g_m$, so $f_T$ falls.

**Common mistake:** Leaving the gate capacitance unrelated to $W$ and $L$ (or leaving a stray $W$ or $C_{ox}$). The result rests on $C_{GS} + C_{GD} \propto WLC_{ox}$, so that $W$ and $C_{ox}$ cancel exactly.
