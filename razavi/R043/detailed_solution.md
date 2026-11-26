# Detailed solution - R043

**Approach:** In saturation, $C_{GS} = \tfrac23WLC_{ox} + WC_{ov}$, $C_{GD} = WC_{ov}$ and $C_{GB} \approx 0$; the junction capacitances follow from the area and perimeter of each source/drain (S/D) region of the folded layout. Then $g_m$ from the square law gives $f_T = g_m/[2\pi(C_{GS} + C_{GD})]$.

### Step 1 — Gate capacitances in saturation

With $C_{ox} = 3.84\ \mathrm{fF/\mu m^2}$ (consistent with $\varepsilon_{ox}/t_{ox} = 3.9\times8.854\times10^{-12}/(9\times10^{-9}) = 3.84\times10^{-3}\ \mathrm{F/m^2}$) and the overlap capacitance $C_{ov} = 0.4\ \mathrm{fF/\mu m}$ per unit width:

$$WLC_{ox} = (50\ \mu\mathrm{m})(0.5\ \mu\mathrm{m})(3.84\ \mathrm{fF/\mu m^2}) = 25\ \mu\mathrm{m^2}\times3.84\ \mathrm{fF/\mu m^2} = 96.0\ \mathrm{fF},$$

$$WC_{ov} = (50\ \mu\mathrm{m})(0.4\ \mathrm{fF/\mu m}) = 20\ \mathrm{fF}.$$

In saturation the channel is pinched off near the drain, so the channel charge is controlled from the source side:

$$
\begin{aligned}
C_{GS} &= \tfrac23\,WLC_{ox} + WC_{ov} = \tfrac23(96.0\ \mathrm{fF}) + 20\ \mathrm{fF} = 64.0 + 20 = 84.0\ \mathrm{fF},\\
C_{GD} &= WC_{ov} = 20\ \mathrm{fF}.
\end{aligned}
$$

The inversion layer shields the bulk from the gate, so $C_{GB} \approx 0$ (the small fringing capacitance at the ends of the fingers is neglected).

### Step 2 — Drain–bulk junction capacitance (one central region)

Since $1\ \mathrm{F/m} = 10^{15}\ \mathrm{fF}/10^{6}\ \mu\mathrm{m} = 10^{9}\ \mathrm{fF/\mu m}$, the sidewall capacitance per unit perimeter is

$$C_{jsw} = 0.35\times10^{-11}\times10^{9}\ \mathrm{fF/\mu m} = 0.0035\ \mathrm{fF/\mu m}.$$

The drain is the single central region of $W/2$ by $E$. Bottom part, then sidewall part with all four sides counted:

$$A_D = \frac{W}{2}E = (25\ \mu\mathrm{m})(1.5\ \mu\mathrm{m}) = 37.5\ \mu\mathrm{m^2}, \qquad A_DC_j = 37.5\times0.56\ \mathrm{fF} = 21.0\ \mathrm{fF},$$

$$P_D = 2\left(\frac{W}{2} + E\right) = 2(25 + 1.5)\ \mu\mathrm{m} = 53\ \mu\mathrm{m}, \qquad P_DC_{jsw} = 53\times0.0035\ \mathrm{fF} = 0.19\ \mathrm{fF}.$$

Total (zero-bias values):

$$C_{DB} = A_DC_j + P_DC_{jsw} = 21.0 + 0.19 = 21.2\ \mathrm{fF}.$$

An unfolded device with a drain of $W\times E$ would have $C_{DB} = 50\times1.5\times0.56 + 2(50 + 1.5)\times0.0035 = 42.0 + 0.36 = 42.4$ fF: folding halves the drain capacitance, which is its purpose.

### Step 3 — Source–bulk junction capacitance (two outer regions)

There are two source regions, each $W/2$ by $E$:

$$A_S = 2\cdot\frac{W}{2}E = WE = (50\ \mu\mathrm{m})(1.5\ \mu\mathrm{m}) = 75\ \mu\mathrm{m^2}, \qquad A_SC_j = 75\times0.56\ \mathrm{fF} = 42.0\ \mathrm{fF},$$

$$P_S = 2\times2\left(\frac{W}{2} + E\right) = 4(26.5)\ \mu\mathrm{m} = 106\ \mu\mathrm{m}, \qquad P_SC_{jsw} = 106\times0.0035\ \mathrm{fF} = 0.37\ \mathrm{fF},$$

$$C_{SB} = A_SC_j + P_SC_{jsw} = 42.0 + 0.37 = 42.4\ \mathrm{fF}.$$

With this small $C_{jsw}$ the sidewall terms are below 1 % and could be dropped.

### Step 4 — Transconductance at $I_D = 1$ mA

With $W/L = 50/0.5 = 100$:

$$g_m = \sqrt{2\,\mu_nC_{ox}\frac{W}{L}I_D} = \sqrt{2\,(134\times10^{-6}\ \mathrm{A/V^2})(100)(1\times10^{-3}\ \mathrm{A})} = \sqrt{2.68\times10^{-5}}\ \mathrm{A/V} = 5.18\ \mathrm{mS}.$$

The overdrive is

$$V_{ov} = \frac{2I_D}{g_m} = \frac{2\times1\ \mathrm{mA}}{5.18\ \mathrm{mS}} = 0.386\ \mathrm{V},$$

a normal strong-inversion value; the device is saturated provided $V_{DS} \ge 0.39$ V, as the problem assumes.

### Step 5 — Transit frequency

With source, drain and bulk at ac ground, $C_{DB}$ and $C_{SB}$ carry no signal, so only $C_{GS}$ and $C_{GD}$ load the gate:

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

**Common mistake:** Giving the drain the area of both outer regions (42 fF). In the folded layout the drain is the single central region shared by the two fingers; getting this backwards removes the whole benefit of folding.

**Common mistake:** Leaving out the overlap capacitance: then $C_{GD} = 0$, $C_{GS} = 64$ fF and $f_T \approx 12.9$ GHz, more than 60 % too high. Using $C_{GS}$ alone gives 9.8 GHz, but $C_{GD}$ is in parallel with $C_{GS}$ when the drain is at ac ground.

**Common mistake:** Adding $C_{DB}$ or $C_{SB}$ to the denominator of $f_T$. With source and drain at ac ground the junction capacitances carry no signal current.
