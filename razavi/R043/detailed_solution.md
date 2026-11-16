# Detailed solution - R043

**Approach.** Use the standard saturation capacitance model of a MOSFET: the gate–channel capacitance $WLC_{ox}$ split as $\tfrac23$ to the source and none to the drain, plus the overlap capacitances, and junction capacitances computed from the area and perimeter of each source/drain (S/D) region of the folded layout. Then compute $g_m$ from the square law and $f_T = g_m/[2\pi(C_{GS} + C_{GD})]$.

### Step 1 — Reading the layout

The figure shows a **folded** transistor:

- Two gate fingers, each of width $W/2 = 25\ \mu\mathrm{m}$ and length $L = 0.5\ \mu\mathrm{m}$, are connected in parallel, so the total width is $W = 50\ \mu\mathrm{m}$ and $W/L = 50/0.5 = 100$.
- The **drain** is a single diffusion region between the two fingers, shared by both. Its size is $(W/2)\times E = 25\ \mu\mathrm{m}\times1.5\ \mu\mathrm{m}$.
- The **source** consists of the two outer diffusion regions, each $(W/2)\times E$, connected together.

Folding gives the full width $W$ with a drain that is only half as long as in a straight layout, which halves the drain junction capacitance (Step 4).

**Unit conversions.** The data are mixed units, so convert everything to fF and µm:

- $C_{ox} = 3.84\ \mathrm{fF/\mu m^2}$ (consistent with $\varepsilon_{ox}/t_{ox} = 3.9\times8.854\times10^{-12}/(9\times10^{-9}) = 3.84\times10^{-3}\ \mathrm{F/m^2}$);
- $C_{ov} = 0.4\ \mathrm{fF/\mu m}$, the overlap capacitance per unit width;
- $C_j = 0.56\ \mathrm{fF/\mu m^2}$, the junction bottom-wall capacitance per unit area;
- $C_{jsw} = 0.35\times10^{-11}\ \mathrm{F/m}$. Since $1\ \mathrm{F/m} = 10^{15}\ \mathrm{fF}/10^{6}\ \mu\mathrm{m} = 10^{9}\ \mathrm{fF/\mu m}$,
$$C_{jsw} = 0.35\times10^{-11}\times10^{9}\ \mathrm{fF/\mu m} = 0.0035\ \mathrm{fF/\mu m},$$
the junction sidewall capacitance per unit perimeter.

### Step 2 — Gate capacitances in saturation

**Total gate-to-channel capacitance** (parallel plate of area $WL$):

$$WLC_{ox} = (50\ \mu\mathrm{m})(0.5\ \mu\mathrm{m})(3.84\ \mathrm{fF/\mu m^2}) = 25\ \mu\mathrm{m^2}\times3.84\ \mathrm{fF/\mu m^2} = 96.0\ \mathrm{fF}.$$

**Overlap capacitance** on each side (gate overlapping the source or drain diffusion along the full width):

$$WC_{ov} = (50\ \mu\mathrm{m})(0.4\ \mathrm{fF/\mu m}) = 20\ \mathrm{fF}.$$

In **saturation** the channel is pinched off near the drain, so the channel charge is controlled from the source side. The standard model is

$$
\begin{aligned}
C_{GS} &= \tfrac23\,WLC_{ox} + WC_{ov} = \tfrac23(96.0\ \mathrm{fF}) + 20\ \mathrm{fF} = 64.0 + 20 = 84.0\ \mathrm{fF},\\
C_{GD} &= WC_{ov} = 20\ \mathrm{fF}.
\end{aligned}
$$

$C_{GD}$ contains only overlap, because a change of the drain voltage hardly changes the channel charge of a saturated device.

### Step 3 — Gate–bulk capacitance

In saturation (and triode) the inversion layer lies between the gate and the substrate and acts as a shield: a change of the gate voltage is answered by charge in the channel, not by the depletion charge in the bulk. Therefore

$$C_{GB} \approx 0 .$$

(The small fringing capacitance from the gate to the substrate at the ends of the fingers is neglected.)

### Step 4 — Drain–bulk junction capacitance (one central region)

The drain is one region of $W/2$ by $E$.

**Bottom (area) part:**

$$A_D = \frac{W}{2}E = (25\ \mu\mathrm{m})(1.5\ \mu\mathrm{m}) = 37.5\ \mu\mathrm{m^2}, \qquad A_DC_j = 37.5\times0.56\ \mathrm{fF} = 21.0\ \mathrm{fF}.$$

**Sidewall part.** All four sides are counted, so the perimeter is

$$P_D = 2\left(\frac{W}{2} + E\right) = 2(25 + 1.5)\ \mu\mathrm{m} = 53\ \mu\mathrm{m}, \qquad P_DC_{jsw} = 53\times0.0035\ \mathrm{fF} = 0.19\ \mathrm{fF}.$$

**Total** (zero-bias values):

$$C_{DB} = A_DC_j + P_DC_{jsw} = 21.0 + 0.19 = 21.2\ \mathrm{fF}.$$

For comparison, an unfolded device with a drain of $W\times E$ would have $C_{DB} = 50\times1.5\times0.56 + 2(50 + 1.5)\times0.0035 = 42.0 + 0.36 = 42.4$ fF. Folding halves the drain capacitance, which is its purpose.

### Step 5 — Source–bulk junction capacitance (two outer regions)

There are **two** source regions, each $W/2$ by $E$.

**Bottom part:**

$$A_S = 2\cdot\frac{W}{2}E = WE = (50\ \mu\mathrm{m})(1.5\ \mu\mathrm{m}) = 75\ \mu\mathrm{m^2}, \qquad A_SC_j = 75\times0.56\ \mathrm{fF} = 42.0\ \mathrm{fF}.$$

**Sidewall part** (four sides of each of the two regions):

$$P_S = 2\times2\left(\frac{W}{2} + E\right) = 4(26.5)\ \mu\mathrm{m} = 106\ \mu\mathrm{m}, \qquad P_SC_{jsw} = 106\times0.0035\ \mathrm{fF} = 0.37\ \mathrm{fF}.$$

**Total:**

$$C_{SB} = A_SC_j + P_SC_{jsw} = 42.0 + 0.37 = 42.4\ \mathrm{fF}.$$

With this small $C_{jsw}$ the sidewall terms are below 1 % and could be dropped.

### Step 6 — Transconductance at $I_D = 1$ mA

**Square-law transconductance** in saturation:

$$g_m = \sqrt{2\,\mu_nC_{ox}\frac{W}{L}I_D} = \sqrt{2\,(134\times10^{-6}\ \mathrm{A/V^2})(100)(1\times10^{-3}\ \mathrm{A})} = \sqrt{2.68\times10^{-5}}\ \mathrm{A/V} = 5.18\ \mathrm{mS}.$$

The corresponding **overdrive voltage** $V_{ov} = V_{GS} - V_{TH}$ is

$$V_{ov} = \frac{2I_D}{g_m} = \frac{2\times1\ \mathrm{mA}}{5.18\ \mathrm{mS}} = 0.386\ \mathrm{V},$$

a normal strong-inversion value. The device is saturated provided $V_{DS} \ge 0.39$ V, as the problem assumes.

### Step 7 — Transit frequency

In the $f_T$ test the source, drain and bulk are at ac ground, so the junction capacitances $C_{DB}$ and $C_{SB}$ have no signal across them and do not enter. Only $C_{GS}$ and $C_{GD}$ load the gate:

$$C_{GS} + C_{GD} = 84.0 + 20 = 104.0\ \mathrm{fF},$$

$$f_T = \frac{g_m}{2\pi(C_{GS} + C_{GD})} = \frac{5.18\times10^{-3}\ \mathrm{S}}{2\pi\times104.0\times10^{-15}\ \mathrm{F}} = \frac{5.18\times10^{-3}}{6.53\times10^{-13}}\ \mathrm{Hz} = 7.9\ \mathrm{GHz}.$$

### Result

| Capacitance | Expression | Value |
|---|---|---|
| $C_{GS}$ | $\tfrac23WLC_{ox} + WC_{ov}$ | 84.0 fF |
| $C_{GD}$ | $WC_{ov}$ | 20 fF |
| $C_{GB}$ | shielded by the channel | ≈ 0 |
| $C_{DB}$ | one region $\tfrac{W}{2}\times E$ | 21.2 fF (21.0 bottom + 0.19 sidewall) |
| $C_{SB}$ | two regions $\tfrac{W}{2}\times E$ | 42.4 fF (42.0 bottom + 0.37 sidewall) |

With $g_m = 5.18$ mS at $I_D = 1$ mA:

$$f_T = \frac{g_m}{2\pi(C_{GS} + C_{GD})} \approx 7.9\ \mathrm{GHz}.$$

**Common mistake.** Giving the drain the area of both outer regions (42 fF). In the folded layout the drain is the single central region shared by the two fingers; the sources are the two outer regions. Getting this backwards removes the whole benefit of folding.

**Common mistake.** Leaving out the overlap capacitance. Then $C_{GD} = 0$, $C_{GS} = 64$ fF and $f_T \approx 12.9$ GHz, an overestimate by more than 60 %. Similarly, using $C_{GS}$ alone gives 9.8 GHz: $C_{GD}$ is in parallel with $C_{GS}$ when the drain is at ac ground.

**Common mistake.** Adding $C_{DB}$ or $C_{SB}$ to the denominator of $f_T$. By definition $f_T$ is measured with source and drain at ac ground, so the junction capacitances carry no signal current.
