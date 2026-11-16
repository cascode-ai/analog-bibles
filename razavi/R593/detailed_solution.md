# Detailed solution - R593

**Approach.** Read off from the two plots what happens to the output common-mode (CM) level, $V_{out,CM} = (V_{out1} + V_{out2})/2$, as the differential input varies. A CMFB loop forces whatever it *senses* to equal a reference, so if the sensed quantity is not the true average, the loop regulates the wrong quantity. A common nonlinear sense circuit (source followers sharing one current source) senses roughly the *larger* output, which produces exactly the curve of [Fig. 2].

### Step 1 — What the two plots say about the CM level

**[Fig. 1].** $V_{out1}$ and $V_{out2}$ are mirror images about a horizontal line and cross half-way between the top and bottom levels, so $V_{out1} + V_{out2}$ is constant: the CM level is fixed and each output swings equally around it.

**[Fig. 2].** The curves cross near the *top*. For $V_{in} < 0$, $V_{out1}$ stays near the upper level while $V_{out2}$ swings all the way down; for $V_{in} > 0$ the roles swap. So the CM level is **not constant**: it is highest at $V_{in} = 0$ and falls as $|V_{in}|$ grows. The circuit holds the **larger** output nearly constant, not the average. The differential behaviour is unremarkable; the anomaly is entirely in the common mode, so the explanation lies in the CMFB.

### Step 2 — What a CMFB loop regulates

A CMFB senses a voltage $V_{sense}$ meant to represent $V_{out,CM}$, compares it with $V_{REF}$, and adjusts the load (or tail) currents to move both outputs together. With high loop gain it settles where

$$V_{sense} = V_{REF}.$$

A linear average, $V_{sense} = (V_{out1} + V_{out2})/2 + \text{const}$, fixes the CM level and gives [Fig. 1]. Any other dependence still gives $V_{sense} = V_{REF}$, but the CM level then varies with the differential swing.

### Step 3 — A nonlinear sense circuit: source followers sharing one current source

A simple way to sense the CM is to drive two source followers $M_7$, $M_8$ from $V_{out1}$ and $V_{out2}$, tie their sources to a **single** current source $I_S$, and compare the common source node S with $V_{REF}$; the error amplifier drives the gates of the PMOS loads.

<!-- diagram: diagram-01.cir -->

$M_7$ and $M_8$ form a source-coupled pair sharing $I_S$. With $I_D = \tfrac{\beta}{2}V_{ov}^2$ ($\beta = \mu_nC_{ox}W/L$), define the overdrives

$$a = V_{out1} - V_S - V_{TH}, \qquad b = V_{out2} - V_S - V_{TH}.$$

**While both followers conduct:**

$$
\begin{aligned}
\tfrac{\beta}{2}a^2 + \tfrac{\beta}{2}b^2 &= I_S \;\Rightarrow\; a^2 + b^2 = \frac{2I_S}{\beta},\\
a - b &= V_{out1} - V_{out2} \equiv \Delta,\\
(a + b)^2 &= 2(a^2 + b^2) - (a - b)^2 = \frac{4I_S}{\beta} - \Delta^2 .
\end{aligned}
$$

Since $a + b = 2(V_{out,CM} - V_S - V_{TH})$:

$$V_{out,CM} = V_S + V_{TH} + \sqrt{\frac{I_S}{\beta} - \frac{\Delta^2}{4}} .$$

**When one follower turns off.** At $|\Delta| \ge \sqrt{2I_S/\beta}$ the follower driven by the lower output is cut off and the other carries all of $I_S$:

$$V_S = \max(V_{out1}, V_{out2}) - V_{GS}(I_S), \qquad V_{GS}(I_S) = V_{TH} + \sqrt{2I_S/\beta}.$$

The lower output no longer affects $V_S$: the circuit is a **maximum detector**, not an averager.

### Step 4 — Closing the loop produces [Fig. 2]

The CMFB forces $V_S = V_{REF}$.

**Near balance** (both followers on):

$$V_{out,CM} = V_{REF} + V_{TH} + \sqrt{\frac{I_S}{\beta} - \frac{\Delta^2}{4}},$$

largest at $\Delta = 0$ and **decreasing as the differential swing grows**. The higher output, $V_{out,CM} + |\Delta|/2$, rises only gently, while the lower output, $V_{out,CM} - |\Delta|/2$, falls steeply.

**Large swing** (one follower off):

$$\max(V_{out1}, V_{out2}) = V_{REF} + V_{TH} + \sqrt{2I_S/\beta} = \text{constant}.$$

The higher output is pinned at this plateau, and since the differential pair still imposes $\Delta$, **all of the swing appears on the lower output**, which falls until the input transistor enters triode (the bottom level).

**The crossing point.** At $V_{in} = 0$ each follower carries $I_S/2$, so

$$V_{out1} = V_{out2} = V_{REF} + V_{TH} + \sqrt{I_S/\beta} = V_{REF} + V_{GS}(I_S/2),$$

while the plateau is $V_{REF} + V_{GS}(I_S)$. The crossing sits slightly below the upper plateau, by $(\sqrt2 - 1)\sqrt{I_S/\beta} \approx 0.41$ times the follower overdrive at $I_S/2$: outputs crossing just below the top, one output staying high while the other carries the swing, exactly as in [Fig. 2]. In short, the shared source node follows the higher gate, so the loop regulates the higher output and never sees the lower one.

### Step 5 — Why a well-designed CMFB gives [Fig. 1]

A good CMFB senses the true average over the whole swing: two resistors (or capacitors, in switched-capacitor CMFB) from $V_{out1}$ and $V_{out2}$ to a common node at exactly $(V_{out1} + V_{out2})/2$, or source followers with **separate** current sources (constant $V_{GS}$) followed by a resistive averager. The loop then holds the average at the reference, the outputs swing symmetrically, and the crossing lies midway, as in [Fig. 1].

Other sensing schemes give similar errors whenever the sense devices leave their linear range (for example, differential pairs comparing each output with $V_{REF}$ that saturate for large swings). A different failure with a similar look is a CMFB whose correction range is exhausted, so that the loads supply more than $I_{SS}/2$ at balance and push both outputs up against the upper limit; only the side whose input device takes more than the load current can then move down.

### Step 6 — Consequences

- **Lopsided swing and poor headroom:** the lower output provides the entire differential swing, moving about twice as far on one side of balance as in [Fig. 1], and at balance both outputs sit near the upper limit, leaving the loads little headroom.
- **Signal-dependent CM level:** $V_{out,CM}$ moves with $\Delta^2$, which can disturb the next stage's biasing.
- **Distortion:** each single-ended output is strongly asymmetric, i.e. contains even-order distortion, and with imperfect matching some of it appears differentially.

### Result

In [Fig. 2] the output CM level is not held constant: it is highest at $V_{in} = 0$ and drops as the differential swing grows, because the larger output stays near a fixed upper level while the smaller output carries the whole swing. This happens when the CMFB **senses the output CM nonlinearly**. A typical example is a pair of source followers sharing one current source: for large swings the follower driven by the higher output takes all the current, so the sensed voltage tracks $\max(V_{out1}, V_{out2}) - V_{GS}$ instead of the average. Forcing this sensed value to the reference pins the higher output, and the lower output takes all the swing. (In square law, $V_{out,CM} = V_S + V_{TH} + \sqrt{I_S/\beta - (V_{out1} - V_{out2})^2/4}$ while both followers conduct.) A CMFB with linear averaging (resistors, capacitors, or followers with separate current sources) keeps the average fixed and gives [Fig. 1].

**Common mistake.** Attributing [Fig. 2] to a differential-mode effect such as higher differential gain, an input offset or positive feedback. Those change the *slope* or *position* of the transition but keep the outputs symmetric about a fixed CM level; only the common-mode loop can explain a moving CM level.

**Common mistake.** Assuming that any CMFB holds the *average* output constant. The loop regulates only what it senses; with a source-coupled sense pair (or any sense device driven beyond its linear range), that is essentially the larger output.
