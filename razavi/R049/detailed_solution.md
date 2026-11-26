# Detailed solution - R049

**Approach:** Treat the channel surface as a node coupled to two "gates": the real (front) gate through the oxide capacitance $C_{ox}$, and the bulk (back gate) through the depletion-layer capacitance $C_{dep}$. The threshold shift caused by a change of the bulk voltage is set by the ratio of the two couplings, $C_{dep}/C_{ox}$. Then show how $C_{dep}$ depends on the doping and connect the picture to the formula for $\gamma$.

### Step 1 — The back-gate picture: a capacitive divider

The goal is to see *why* the body-effect coefficient in $V_{TH} = V_{TH0} + \gamma(\sqrt{2|\phi_F| + V_{SB}} - \sqrt{2|\phi_F|})$ is

$$\gamma = \frac{\sqrt{2q\,\epsilon_{si}N_{sub}}}{C_{ox}}$$

without just quoting this formula.

Seen from the channel surface of an NMOS, the front gate is separated by the oxide, a capacitance $C_{ox}$ per unit area, and the neutral p-type bulk by the depletion layer of width $x_d$, a capacitance $C_{dep} = \epsilon_{si}/x_d$ per unit area. The surface thus sits in the middle of a capacitive divider between gate and bulk: the bulk acts on the channel like a second gate, the back gate, only through a different capacitance.

<!-- diagram: diagram-01.cir -->

Inversion begins when the surface reaches a fixed potential ($2|\phi_F|$ above the source side). Making the bulk more negative with respect to the source by $\Delta V_{SB}$ pulls the surface down through $C_{dep}$ and uncovers extra negative depletion charge (more acceptor ions are exposed as the depletion layer widens):

$$\Delta Q_{dep} \approx C_{dep}\,\Delta V_{SB} .$$

To bring the surface back to inversion the gate must supply an equal and opposite charge through $C_{ox}$, which requires an extra gate voltage

$$\Delta V_{TH} = \frac{\Delta Q_{dep}}{C_{ox}} \approx \frac{C_{dep}}{C_{ox}}\,\Delta V_{SB} .$$

So the sensitivity of the threshold to the back-gate voltage is the ratio of the back-gate coupling to the front-gate coupling:

$$\frac{\partial V_{TH}}{\partial V_{SB}} \approx \frac{C_{dep}}{C_{ox}} .$$

### Step 2 — Why the back-gate coupling grows as $\sqrt{N_{sub}}$

The one-sided junction (Poisson) solution gives the depletion width under the channel at inversion, with reverse bias $V_{SB}$:

$$x_d = \sqrt{\frac{2\epsilon_{si}\,(2|\phi_F| + V_{SB})}{q\,N_{sub}}} ,$$

so

$$C_{dep} = \frac{\epsilon_{si}}{x_d} = \epsilon_{si}\sqrt{\frac{q\,N_{sub}}{2\epsilon_{si}\,(2|\phi_F| + V_{SB})}} = \sqrt{\frac{q\,\epsilon_{si}\,N_{sub}}{2\,(2|\phi_F| + V_{SB})}} \;\propto\; \sqrt{N_{sub}} .$$

In a heavily doped substrate the acceptor ions are packed densely, so a thin layer holds the required depletion charge ($x_d \propto 1/\sqrt{N_{sub}}$). The back gate is effectively *closer* to the channel, and each volt of $V_{SB}$ uncovers more charge, which the front gate must then cancel. Four times the doping halves $x_d$ and doubles $C_{dep}$, so the back gate's grip on the channel doubles.

### Step 3 — Why a larger $C_{ox}$ weakens the body effect

The gate voltage needed to balance $\Delta Q_{dep}$ is $\Delta Q_{dep}/C_{ox}$. A larger $C_{ox}$ (a thinner oxide) puts the front gate *closer* to the channel, so it delivers the same charge with a smaller voltage change: the front gate dominates the back gate, and the threshold moves less for a given $V_{SB}$. Halving $t_{ox}$ doubles $C_{ox} = \epsilon_{ox}/t_{ox}$ and halves the threshold shift.

### Step 4 — Recovering the formula for $\gamma$

Combining Steps 1 and 2:

$$\frac{\partial V_{TH}}{\partial V_{SB}} = \frac{C_{dep}}{C_{ox}} = \frac{1}{C_{ox}}\sqrt{\frac{q\,\epsilon_{si}\,N_{sub}}{2\,(2|\phi_F| + V_{SB})}} .$$

Differentiating the body-effect equation gives

$$\frac{\partial V_{TH}}{\partial V_{SB}} = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB}}} .$$

Equating the two expressions and solving for $\gamma$:

$$
\begin{aligned}
\frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB}}} &= \frac{\sqrt{q\epsilon_{si}N_{sub}}}{\sqrt2\,C_{ox}\sqrt{2|\phi_F| + V_{SB}}}\\
\gamma &= \frac{2\sqrt{q\epsilon_{si}N_{sub}}}{\sqrt2\,C_{ox}} = \frac{\sqrt{2q\,\epsilon_{si}N_{sub}}}{C_{ox}} .
\end{aligned}
$$

This is the textbook expression, obtained from the back-gate picture: numerator from the back-gate coupling ($\propto\sqrt{N_{sub}}$), denominator from the front-gate coupling ($C_{ox}$).

Numerical illustration. For $N_{sub} = 10^{17}\ \mathrm{cm^{-3}}$, $\epsilon_{si} = 11.7\times8.854\times10^{-14} = 1.04\times10^{-12}$ F/cm and $C_{ox} = 3.84\ \mathrm{fF/\mu m^2} = 3.84\times10^{-7}\ \mathrm{F/cm^2}$ ($t_{ox} = 9$ nm):

$$\gamma = \frac{\sqrt{2(1.6\times10^{-19})(1.04\times10^{-12})(10^{17})}}{3.84\times10^{-7}}\ \mathrm{V^{1/2}} = \frac{1.82\times10^{-7}}{3.84\times10^{-7}}\ \mathrm{V^{1/2}} = 0.47\ \mathrm{V^{1/2}},$$

a typical value. The two dependences then scale as follows:

| Change | Effect on $C_{dep}$ or $C_{ox}$ | New $\gamma$ |
|---|---|---|
| none | — | 0.47 V$^{1/2}$ |
| $N_{sub}\times4$ | $C_{dep}\times2$ (back gate twice as strong) | 0.95 V$^{1/2}$ |
| $t_{ox}/2$ | $C_{ox}\times2$ (front gate twice as strong) | 0.24 V$^{1/2}$ |

### Result

The bulk is a back gate coupled to the channel through the depletion capacitance $C_{dep}$, while the real gate couples through $C_{ox}$. A change $\Delta V_{SB}$ uncovers depletion charge $\approx C_{dep}\Delta V_{SB}$ that the gate must cancel, costing $\Delta V_{TH} \approx (C_{dep}/C_{ox})\Delta V_{SB}$. Since $C_{dep} = \epsilon_{si}/x_d \propto \sqrt{N_{sub}}$ (heavier doping gives a thinner depletion layer, i.e. a closer, stronger back gate) and the front gate's strength is $C_{ox}$:

$$\gamma = \frac{\sqrt{2q\,\epsilon_{si}N_{sub}}}{C_{ox}} \propto \frac{\sqrt{N_{sub}}}{C_{ox}} .$$

**Common mistake:** Inverting the doping dependence, e.g. arguing that a heavily doped substrate is "stiffer" so the body effect is weaker. Heavier doping makes the depletion layer thinner, which *increases* the coupling between the bulk and the channel, so $\gamma$ grows.

**Common mistake:** Thinking a thicker oxide reduces the body effect because the gate is "better isolated". A thicker oxide (smaller $C_{ox}$) weakens the *front* gate, so the back gate's relative influence on the threshold grows and $\gamma$ increases.
