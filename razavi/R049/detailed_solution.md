# Detailed solution - R049

**Approach.** Treat the channel surface as a node that is coupled to two "gates": the real (front) gate through the oxide capacitance $C_{ox}$, and the bulk (back gate) through the depletion-layer capacitance $C_{dep}$. The threshold shift caused by a change of the bulk voltage is set by the ratio of the two couplings, $C_{dep}/C_{ox}$. We then show how $C_{dep}$ depends on the doping and connect the picture to the formula for $\gamma$.

### Step 1 — What the body effect is

The threshold voltage with body effect is

$$V_{TH} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB}} - \sqrt{2|\phi_F|}\right),$$

where $V_{TH0}$ is the threshold at zero source–bulk voltage, $V_{SB}$ is the source–bulk voltage, $2|\phi_F|$ is the surface potential needed for strong inversion ($\phi_F$ is the Fermi potential of the substrate) and $\gamma$ is the **body-effect coefficient**:

$$\gamma = \frac{\sqrt{2q\,\epsilon_{si}N_{sub}}}{C_{ox}} .$$

Here $q$ is the electron charge, $\epsilon_{si}$ the permittivity of silicon, $N_{sub}$ the substrate doping density and $C_{ox}$ the gate-oxide capacitance per unit area. The task is to see *why* $\gamma \propto \sqrt{N_{sub}}$ and $\gamma \propto 1/C_{ox}$ without just quoting this formula.

### Step 2 — The back-gate picture: a capacitive divider

Below the gate of an NMOS, the region under the oxide is depleted of holes. Seen from the channel surface:

- the **front gate** is separated from the surface by the oxide, a capacitance $C_{ox}$ per unit area;
- the **bulk** (the neutral p-type substrate below the depletion layer) is separated from the surface by the depletion layer, a capacitance $C_{dep} = \epsilon_{si}/x_d$ per unit area, where $x_d$ is the depletion-layer width.

So the surface sits in the middle of a capacitive divider between gate and bulk. The bulk acts on the channel exactly like a second gate, the **back gate**, only through a different capacitance.

<!-- diagram: diagram-01.cir -->

Inversion begins when the surface reaches a fixed potential ($2|\phi_F|$ above the source side). Suppose the bulk is made more negative with respect to the source by $\Delta V_{SB}$. Through $C_{dep}$ this pulls the surface down, and also uncovers extra negative depletion charge (more acceptor ions are exposed as the depletion layer widens):

$$\Delta Q_{dep} \approx C_{dep}\,\Delta V_{SB} .$$

To bring the surface back to the inversion condition, the gate must supply an equal and opposite charge through $C_{ox}$, which requires an extra gate voltage

$$\Delta V_{TH} = \frac{\Delta Q_{dep}}{C_{ox}} \approx \frac{C_{dep}}{C_{ox}}\,\Delta V_{SB} .$$

So the **sensitivity of the threshold to the back-gate voltage is the ratio of the back-gate coupling to the front-gate coupling**:

$$\frac{\partial V_{TH}}{\partial V_{SB}} \approx \frac{C_{dep}}{C_{ox}} .$$

### Step 3 — Why the back-gate coupling grows as $\sqrt{N_{sub}}$

The depletion-layer width under the channel at inversion, with a reverse bias $V_{SB}$, follows from the one-sided junction (Poisson) solution:

$$x_d = \sqrt{\frac{2\epsilon_{si}\,(2|\phi_F| + V_{SB})}{q\,N_{sub}}} .$$

The depletion capacitance is therefore

$$C_{dep} = \frac{\epsilon_{si}}{x_d} = \epsilon_{si}\sqrt{\frac{q\,N_{sub}}{2\epsilon_{si}\,(2|\phi_F| + V_{SB})}} = \sqrt{\frac{q\,\epsilon_{si}\,N_{sub}}{2\,(2|\phi_F| + V_{SB})}} \;\propto\; \sqrt{N_{sub}} .$$

**Intuition.** In a heavily doped substrate the acceptor ions are packed densely, so a thin layer is enough to hold the required depletion charge: $x_d \propto 1/\sqrt{N_{sub}}$. The back gate is effectively *closer* to the channel, and each volt of $V_{SB}$ uncovers more charge, which the front gate must then cancel. Four times the doping halves $x_d$ and doubles $C_{dep}$, so the back gate's grip on the channel doubles.

### Step 4 — Why a larger $C_{ox}$ weakens the body effect

The extra depletion charge $\Delta Q_{dep}$ must be balanced by the gate, and the gate voltage needed for that is $\Delta Q_{dep}/C_{ox}$. A larger $C_{ox}$ (a thinner oxide) means the front gate is *closer* to the channel: it delivers the same charge with a smaller voltage change. The front gate then dominates the back gate, and the threshold moves less for a given $V_{SB}$. Halving $t_{ox}$ doubles $C_{ox} = \epsilon_{ox}/t_{ox}$ and halves the threshold shift.

### Step 5 — Recovering the formula for $\gamma$

Combine Steps 2 and 3:

$$\frac{\partial V_{TH}}{\partial V_{SB}} = \frac{C_{dep}}{C_{ox}} = \frac{1}{C_{ox}}\sqrt{\frac{q\,\epsilon_{si}\,N_{sub}}{2\,(2|\phi_F| + V_{SB})}} .$$

Differentiating the body-effect equation of Step 1 gives

$$\frac{\partial V_{TH}}{\partial V_{SB}} = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB}}} .$$

Equate the two expressions and solve for $\gamma$:

$$
\begin{aligned}
\frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB}}} &= \frac{\sqrt{q\epsilon_{si}N_{sub}}}{\sqrt2\,C_{ox}\sqrt{2|\phi_F| + V_{SB}}}\\
\gamma &= \frac{2\sqrt{q\epsilon_{si}N_{sub}}}{\sqrt2\,C_{ox}} = \frac{\sqrt{2q\,\epsilon_{si}N_{sub}}}{C_{ox}} .
\end{aligned}
$$

This is the textbook expression, obtained from the back-gate picture: numerator from the back-gate coupling ($\propto\sqrt{N_{sub}}$), denominator from the front-gate coupling ($C_{ox}$).

**Numerical illustration.** For $N_{sub} = 10^{17}\ \mathrm{cm^{-3}}$, $\epsilon_{si} = 11.7\times8.854\times10^{-14} = 1.04\times10^{-12}$ F/cm and $C_{ox} = 3.84\ \mathrm{fF/\mu m^2} = 3.84\times10^{-7}\ \mathrm{F/cm^2}$ ($t_{ox} = 9$ nm):

$$\gamma = \frac{\sqrt{2(1.6\times10^{-19})(1.04\times10^{-12})(10^{17})}}{3.84\times10^{-7}}\ \mathrm{V^{1/2}} = \frac{1.82\times10^{-7}}{3.84\times10^{-7}}\ \mathrm{V^{1/2}} = 0.47\ \mathrm{V^{1/2}},$$

a typical value. The two dependences then scale as follows:

| Change | Effect on $C_{dep}$ or $C_{ox}$ | New $\gamma$ |
|---|---|---|
| none | — | 0.47 V$^{1/2}$ |
| $N_{sub}\times4$ | $C_{dep}\times2$ (back gate twice as strong) | 0.95 V$^{1/2}$ |
| $t_{ox}/2$ | $C_{ox}\times2$ (front gate twice as strong) | 0.24 V$^{1/2}$ |

### Result

The bulk is a **back gate** coupled to the channel through the depletion capacitance $C_{dep}$, while the real gate couples through $C_{ox}$. A change $\Delta V_{SB}$ uncovers depletion charge $\approx C_{dep}\Delta V_{SB}$ that the gate must cancel, costing $\Delta V_{TH} \approx (C_{dep}/C_{ox})\Delta V_{SB}$. Since $C_{dep} = \epsilon_{si}/x_d \propto \sqrt{N_{sub}}$ (heavier doping gives a thinner depletion layer, i.e. a closer, stronger back gate) and the front gate's strength is $C_{ox}$:

$$\gamma = \frac{\sqrt{2q\,\epsilon_{si}N_{sub}}}{C_{ox}} \propto \frac{\sqrt{N_{sub}}}{C_{ox}} .$$

**Common mistake.** Inverting the doping dependence, e.g. arguing that a heavily doped substrate is "stiffer" so the body effect is weaker. Heavier doping makes the depletion layer thinner, which *increases* the coupling between the bulk and the channel, so $\gamma$ grows.

**Common mistake.** Thinking a thicker oxide reduces the body effect because the gate is "better isolated". A thicker oxide (smaller $C_{ox}$) weakens the *front* gate, so the back gate's influence on the threshold becomes relatively larger and $\gamma$ increases.
