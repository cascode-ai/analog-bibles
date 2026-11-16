# Detailed solution - R593

**Approach.** First read off from the two plots what happens to the output common-mode (CM) level, $V_{out,CM} = (V_{out1} + V_{out2})/2$, as the differential input varies. Then recall that a CMFB loop forces whatever it *senses* to equal a reference. If the sensed quantity is not the true average of the outputs, the loop regulates the wrong quantity. We show that a common, nonlinear sensing circuit (source followers sharing one current source) senses roughly the *larger* output, which produces exactly the curve of [Fig. 2].

### Step 1 — What the two plots say about the CM level

**[Fig. 1].** $V_{out1}$ and $V_{out2}$ are mirror images about a horizontal line and cross half-way between the top and bottom levels. So $V_{out1} + V_{out2}$ is constant: the CM level stays fixed at every $V_{in}$, and each output swings up and down by the same amount around it. This is what a CMFB is supposed to do.

**[Fig. 2].** The curves cross near the *top*. Reading each output from left to right:

- for $V_{in} < 0$, $V_{out1}$ stays close to the upper level while $V_{out2}$ swings all the way down;
- for $V_{in} > 0$, the roles swap: $V_{out2}$ stays near the upper level and $V_{out1}$ carries the entire swing.

So the CM level is **not constant**: it is highest at $V_{in} = 0$ (where both outputs sit near the top) and falls as $|V_{in}|$ grows (one output high, the other low). What the circuit holds nearly constant is the **larger** of the two outputs, not their average. The differential behaviour (the difference $V_{out1} - V_{out2}$) is unremarkable; the anomaly is entirely in the common mode, so the explanation must lie in the CMFB.

### Step 2 — What a CMFB loop regulates

A CMFB network has three parts:

1. a **sense circuit** that produces a voltage $V_{sense}$ meant to represent $V_{out,CM}$;
2. an **error amplifier** that compares $V_{sense}$ with a reference $V_{REF}$;
3. a **control path** that adjusts the load (or tail) currents of the main amplifier, which moves both outputs together.

With high loop gain the loop settles where

$$V_{sense} = V_{REF}.$$

If $V_{sense}$ is a *linear* average, $V_{sense} = (V_{out1} + V_{out2})/2 + \text{const}$, this fixes the CM level and gives [Fig. 1]. If $V_{sense}$ depends on the outputs in some other way, the loop still forces $V_{sense} = V_{REF}$, but the CM level then varies with the differential swing.

### Step 3 — A nonlinear sense circuit: source followers sharing one current source

A popular, simple way to sense the CM is to drive two source followers $M_7$, $M_8$ from $V_{out1}$ and $V_{out2}$ and tie their sources to a **single** current source $I_S$. The common source node S is used as $V_{sense}$ and compared with $V_{REF}$; the error amplifier drives the gates of the PMOS loads.

<!-- diagram: diagram-01.cir -->

$M_7$ and $M_8$ form a source-coupled pair, so they share $I_S$ according to their gate voltages. With the square law, $I_D = \tfrac{\beta}{2}V_{ov}^2$ ($\beta = \mu_nC_{ox}W/L$), define the overdrives

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

**When one follower turns off.** At $|\Delta| \ge \sqrt{2I_S/\beta}$ the follower driven by the lower output is cut off and the other carries all of $I_S$. Then

$$V_S = \max(V_{out1}, V_{out2}) - V_{GS}(I_S), \qquad V_{GS}(I_S) = V_{TH} + \sqrt{2I_S/\beta}.$$

The lower output no longer affects $V_S$ at all: the circuit has become a **maximum detector**, not an averager.

### Step 4 — Closing the loop produces [Fig. 2]

The CMFB forces $V_S = V_{REF}$. Substitute this into the results of Step 3.

**Near balance** (both followers on):

$$V_{out,CM} = V_{REF} + V_{TH} + \sqrt{\frac{I_S}{\beta} - \frac{\Delta^2}{4}},$$

which is largest at $\Delta = 0$ and **decreases as the differential swing grows**. The higher output is $V_{out,CM} + |\Delta|/2$, which rises only gently, while the lower output $V_{out,CM} - |\Delta|/2$ falls steeply.

**Large swing** (one follower off):

$$\max(V_{out1}, V_{out2}) = V_{REF} + V_{TH} + \sqrt{2I_S/\beta} = \text{constant}.$$

The higher output is pinned at this plateau, and since the differential pair still imposes the difference $\Delta$, **all of the swing appears on the lower output**, which falls until the input transistor enters the triode region (the bottom level).

**The crossing point.** At $V_{in} = 0$ each follower carries $I_S/2$, so

$$V_{out1} = V_{out2} = V_{REF} + V_{TH} + \sqrt{I_S/\beta} = V_{REF} + V_{GS}(I_S/2),$$

while the plateau is $V_{REF} + V_{GS}(I_S)$. The crossing therefore sits slightly below the upper plateau, by $(\sqrt2 - 1)\sqrt{I_S/\beta} \approx 0.41$ times the follower overdrive at $I_S/2$. That is exactly the shape of [Fig. 2]: outputs crossing near (just below) the top, one output staying high while the other carries the swing.

**Physical picture.** In a source-coupled pair the device with the higher gate voltage grabs most of the current, so the shared source node follows the higher gate. The loop therefore "sees" and regulates the higher output; the lower output is invisible to it.

### Step 5 — Why a well-designed CMFB gives [Fig. 1]

A good CMFB senses the true average over the whole swing, for example:

- two resistors (or two capacitors, in switched-capacitor CMFB) from $V_{out1}$ and $V_{out2}$ to a common node, whose voltage is exactly $(V_{out1} + V_{out2})/2$;
- source followers that each have their **own** current source, so each $V_{GS}$ stays constant, followed by a resistive averaging network.

With linear sensing the loop holds $(V_{out1} + V_{out2})/2$ at the reference, the outputs swing symmetrically, and the crossing lies midway, as in [Fig. 1].

Other sensing schemes give similar errors whenever the sense devices leave their linear range (for example, differential pairs comparing each output with $V_{REF}$ that saturate for large swings). A different failure with a similar look is a CMFB whose correction range is exhausted, so that the loads supply more than $I_{SS}/2$ at balance and push both outputs up against the upper limit; only the side whose input device takes more than the load current can then move down.

### Step 6 — Consequences

- **Lopsided swing and poor headroom:** the lower output must provide the entire differential swing by itself, so each output moves about twice as far on one side of balance as in [Fig. 1], and at balance both outputs sit close to the upper limit, leaving the load devices little headroom.
- **Signal-dependent CM level:** $V_{out,CM}$ moves with $\Delta^2$, which can disturb the next stage's biasing.
- **Distortion:** each single-ended output is now strongly asymmetric (gentle on one side of zero, steep on the other), i.e. it contains even-order distortion; if the two outputs are not perfectly matched, some of it appears differentially.

### Result

In [Fig. 2] the output CM level is not held constant: it is highest at $V_{in} = 0$ and drops as the differential swing grows, because the larger output stays near a fixed upper level while the smaller output carries the whole swing. This happens when the CMFB **senses the output CM nonlinearly**. A typical example is a pair of source followers sharing one current source: for large swings the follower driven by the higher output takes all the current, so the sensed voltage tracks $\max(V_{out1}, V_{out2}) - V_{GS}$ instead of the average. Forcing this sensed value to the reference pins the higher output, and the lower output takes all the swing. (In square law, $V_{out,CM} = V_S + V_{TH} + \sqrt{I_S/\beta - (V_{out1} - V_{out2})^2/4}$ while both followers conduct.) A CMFB with linear averaging (resistors, capacitors, or followers with separate current sources) keeps the average fixed and gives [Fig. 1].

**Common mistake.** Attributing [Fig. 2] to a differential-mode effect such as higher differential gain, an input offset or positive feedback. Those would change the *slope* or *position* of the transition, but would keep the two outputs symmetric about a fixed CM level. The defining feature of [Fig. 2] is the moving CM level, which only the common-mode loop can explain.

**Common mistake.** Assuming that any CMFB holds the *average* output constant. The loop regulates only what it senses. If the sense circuit is a source-coupled pair (or any device driven beyond its linear range), the regulated quantity is something else, here essentially the larger output.
