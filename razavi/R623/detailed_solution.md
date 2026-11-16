# Detailed solution - R623

**Approach.** The input-referred offset is the differential input that makes $V_{out} = 0$. With an ideal tail source, $V_{out} = 0$ forces equal currents in the two branches, which pins down every node voltage except the drains of $M_1$ and $M_2$. We find how far apart the cascode mismatch pushes those two nodes, then ask what gate-voltage difference $M_1$ and $M_2$ need to carry equal currents despite their different drain–source voltages. Channel-length modulation ($\lambda \neq 0$) is what links the two. A small-signal calculation then confirms the result and shows what happens as $R_D \to \infty$.

### Step 1 — The circuit and the definition of offset

Reading the figure:

- $M_1$ and $M_2$ form the input differential pair. Their sources meet at node P, which is fed by an ideal tail current source $I_{SS}$. $V_{in}$ is applied between their gates.
- $M_3$ and $M_4$ are cascode devices on top of $M_1$ and $M_2$, with both gates at $V_b$. Call the drain of $M_1$ (source of $M_3$) node X, and the drain of $M_2$ (source of $M_4$) node Y.
- Each cascode drain connects to $V_{DD}$ through a load $R_D$. $V_{out}$ is taken between the two cascode drains.

Only $M_3$ and $M_4$ are mismatched: $V_{TH3} - V_{TH4} = \Delta V_{TH}$. The body effect is neglected ($\gamma = 0$). Nominal small-signal parameters are $g_{m1} = g_{m2}$, $r_{O1} = r_{O2}$ for the input devices and $g_{m3} = g_{m4}$, $r_{O3} = r_{O4}$ for the cascodes, where $g_m$ is the transconductance and $r_O = 1/(\lambda I_D)$ the output resistance from channel-length modulation.

The **input-referred offset voltage** $V_{OS}$ is the DC differential input that makes $V_{out} = 0$.

**Linearized device equation.** For small deviations from the nominal operating point, the drain current of a saturated MOSFET changes by

$$\delta I_D = g_m\left(\delta V_{GS} - \delta V_{TH}\right) + \frac{\delta V_{DS}}{r_O},$$

where the last term is the channel-length-modulation effect. We apply this to the *difference* between the two sides.

### Step 2 — What $V_{out} = 0$ implies

$V_{out} = 0$ means the two cascode drains are at the same voltage. The two loads are equal resistors from the same supply, so they must carry equal currents:

$$I_{D3} = I_{D4}.$$

KCL at node P with an ideal tail source gives $I_{D1} + I_{D2} = I_{SS}$, and each cascode carries the same current as the input device below it. Hence

$$I_{D1} = I_{D2} = I_{D3} = I_{D4} = \frac{I_{SS}}{2},$$

and both cascode drains sit at

$$V_{D3} = V_{D4} = V_{DD} - R_D\frac{I_{SS}}{2}.$$

Note that $R_D$ has now dropped out of the problem: whatever its value, the two drains are at the same voltage and the two currents are fixed.

### Step 3 — The cascode mismatch moves nodes X and Y apart

$M_3$ and $M_4$ now have equal currents, equal gate voltages ($V_b$) and equal drain voltages, but different thresholds. The only free variables are their source voltages $V_X$ and $V_Y$. Let $\Delta V_S = V_X - V_Y$.

Write the current difference with the linearized equation of Step 1. Going from $M_4$ to $M_3$:

- $\delta V_{GS} = (V_b - V_X) - (V_b - V_Y) = -\Delta V_S$;
- $\delta V_{DS} = (V_{D} - V_X) - (V_{D} - V_Y) = -\Delta V_S$;
- $\delta V_{TH} = \Delta V_{TH}$.

Equal currents require

$$I_{D3} - I_{D4} = g_{m3}\left(-\Delta V_S - \Delta V_{TH}\right) + \frac{-\Delta V_S}{r_{O3}} = 0 .$$

Collect the $\Delta V_S$ terms:

$$-\Delta V_S\left(g_{m3} + \frac{1}{r_{O3}}\right) = g_{m3}\,\Delta V_{TH} .$$

Solve:

$$\Delta V_S = V_X - V_Y = -\Delta V_{TH}\,\frac{g_{m3}}{g_{m3} + 1/r_{O3}} = -\Delta V_{TH}\,\frac{g_{m3}r_{O3}}{1 + g_{m3}r_{O3}} \approx -\Delta V_{TH}.$$

**Intuition.** A cascode transistor behaves like a source follower from its gate to node X: to carry the same current with a higher threshold, its source must sit lower by almost the full $\Delta V_{TH}$. The factor $g_{m3}r_{O3}/(1 + g_{m3}r_{O3})$ is only slightly less than 1, because the lower source also increases $V_{DS3}$, which helps a little through $r_{O3}$.

### Step 4 — The input pair must compensate for unequal drain voltages

$M_1$ and $M_2$ carry equal currents (Step 2) and share the source node P, but their drain–source voltages now differ by

$$V_{DS1} - V_{DS2} = (V_X - V_P) - (V_Y - V_P) = \Delta V_S .$$

Because $\lambda \neq 0$, a different $V_{DS}$ changes the current, and the gate voltage must make up for it. Applying the linearized equation (no threshold mismatch in $M_1$, $M_2$):

$$I_{D1} - I_{D2} = g_{m1}\left(V_{GS1} - V_{GS2}\right) + \frac{\Delta V_S}{r_{O1}} = 0 .$$

Solve for the gate–source difference:

$$V_{GS1} - V_{GS2} = -\frac{\Delta V_S}{g_{m1}r_{O1}} .$$

The sources are common, so $V_{GS1} - V_{GS2} = V_{G1} - V_{G2}$, which is the input offset. Substituting $\Delta V_S$ from Step 3:

$$V_{OS} = \Delta V_{TH}\,\frac{g_{m3}r_{O3}}{1 + g_{m3}r_{O3}}\cdot\frac{1}{g_{m1}r_{O1}} \approx \frac{\Delta V_{TH}}{g_{m1}r_{O1}} .$$

**Intuition.** The cascode mismatch shifts the drain of the input device by about $\Delta V_{TH}$. Through channel-length modulation, this acts like a voltage $\Delta V_{TH}$ applied to the *drain* of $M_1$, which is $g_{m1}r_{O1}$ times weaker than the gate. Referred to the gate, it is divided by the intrinsic gain $g_{m1}r_{O1}$. If $\lambda = 0$ the offset would be exactly zero, since the input devices would then ignore their drain voltages.

### Step 5 — Cross-check with small-signal gains

Model the threshold mismatch as a small voltage source $-\Delta V_{TH}$ in series with the gate of $M_3$. The excitation is on one side only, but it can be split into a common-mode part and a differential part. With an ideal tail source no common-mode current can flow, so only the differential part reaches $V_{out}$. For the differential part node P is a virtual ground. Each side then becomes the small-signal half circuit below: the input $v_{in}$ drives $M_1$ (controlled source $g_{m1}v_{in}$ from X to ground, in parallel with $r_{O1}$); $M_3$ is a controlled source $g_{m3}(v_{g3} - v_X)$ from the output to X, in parallel with $r_{O3}$; and $R_D$ connects the output to AC ground.

<!-- diagram: diagram-01.cir -->

Let $R_{out} = r_{O1} + r_{O3} + g_{m3}r_{O3}r_{O1}$, the output resistance of the cascode.

**Gain from the input (gate of $M_1$).** With the output shorted, KCL at X gives the short-circuit output current $i = g_{m1}v_{in}\,r_{O1}(1 + g_{m3}r_{O3})/R_{out}$. The output voltage is $-i\,(R_D \parallel R_{out})$, so

$$A_{in} = -\frac{g_{m1}r_{O1}(1 + g_{m3}r_{O3})}{R_{out}}\cdot\frac{R_DR_{out}}{R_D + R_{out}} = -\frac{g_{m1}r_{O1}(1 + g_{m3}r_{O3})\,R_D}{R_D + R_{out}} .$$

**Gain from the gate of $M_3$** (with $v_{in} = 0$, so $M_1$ is just $r_{O1}$). KCL at X:

$$\frac{v_X}{r_{O1}} = g_{m3}(v_{g3} - v_X) - \frac{v_X}{r_{O3}} \quad\Longrightarrow\quad v_X = \frac{g_{m3}v_{g3}}{g_{m3} + 1/r_{O1} + 1/r_{O3}} .$$

The short-circuit output current is $v_X/r_{O1} = g_{m3}r_{O3}v_{g3}/R_{out}$, so

$$A_{3} = -\frac{g_{m3}r_{O3}}{R_{out}}\cdot\frac{R_DR_{out}}{R_D + R_{out}} = -\frac{g_{m3}r_{O3}\,R_D}{R_D + R_{out}} .$$

**Refer to the input.** The error source $-\Delta V_{TH}$ produces the same output as an input voltage

$$|V_{OS}| = \Delta V_{TH}\,\frac{|A_3|}{|A_{in}|} = \Delta V_{TH}\,\frac{g_{m3}r_{O3}}{g_{m1}r_{O1}(1 + g_{m3}r_{O3})},$$

in agreement with Step 4. The factor $R_D/(R_D + R_{out})$ is common to both gains and cancels.

**Numerical check.** Take $\mu_nC_{ox}W/L = 5$ mA/V² for all devices, $V_{TH} = 0.5$ V, $\lambda = 0.1\ \mathrm{V^{-1}}$, $I_{SS} = 1$ mA, $V_{DD} = 3$ V, $V_b = 2$ V, input common-mode level 1.2 V and $\Delta V_{TH} = 10$ mV. Solving the large-signal square-law equations (with the $1 + \lambda V_{DS}$ factor) gives $V_X - V_Y = -9.8$ mV and $V_{OS} = 0.196$ mV, both for $R_D = 1$ kΩ and for $R_D = 2$ kΩ. The formula with $g_{m1}r_{O1} \approx 50$ and $g_{m3}r_{O3} \approx 51$–55 gives 0.195 mV.

### Step 6 — What happens as $R_D \to \infty$

Neither derivation contains $R_D$, so **the input-referred offset does not change** as $R_D \to \infty$. What does change:

- **Gain.** $|A_{in}| \to g_{m1}r_{O1}(1 + g_{m3}r_{O3})$, the full cascode gain, because the load no longer shunts $R_{out}$.
- **Output offset.**
$$V_{out,os} = |A_{in}|\,V_{OS} \to g_{m1}r_{O1}(1 + g_{m3}r_{O3})\cdot\frac{\Delta V_{TH}\,g_{m3}r_{O3}}{g_{m1}r_{O1}(1 + g_{m3}r_{O3})} = g_{m3}r_{O3}\,\Delta V_{TH} .$$

The output offset and the gain grow together, so their ratio stays fixed. The output offset tends to the finite value $g_{m3}r_{O3}\Delta V_{TH}$; it does not diverge.

(In practice, with $R_D \to \infty$ and an ideal tail source, the output common-mode level is undefined, because current sources would be in series. A real design would need common-mode feedback. This does not affect the differential offset.)

### Result

$$|V_{OS,in}| = \Delta V_{TH}\,\frac{g_{m3}r_{O3}}{1 + g_{m3}r_{O3}}\cdot\frac{1}{g_{m1}r_{O1}} \approx \frac{\Delta V_{TH}}{g_{m1}r_{O1}},$$

independent of $R_D$. The cascode threshold mismatch moves the drains of the input devices apart by about $\Delta V_{TH}$, and channel-length modulation turns this into an input offset reduced by the intrinsic gain $g_{m1}r_{O1}$. As $R_D \to \infty$ the input-referred offset is unchanged; the gain rises to $g_{m1}r_{O1}(1 + g_{m3}r_{O3})$ and the output offset rises to about $g_{m3}r_{O3}\Delta V_{TH}$.

**Common mistake.** Claiming the offset is zero because "a cascode cannot change the current". That is true only for $\lambda = 0$. With $\lambda \neq 0$ the shifted drain voltage of the input device changes its current, and the input must compensate by $\Delta V_S/(g_{m1}r_{O1})$.

**Common mistake.** Referring $\Delta V_{TH}$ to the input as if it were in series with the input gate (offset $\approx \Delta V_{TH}$), or scaling it by $g_{m3}/g_{m1}$. The cascode's gate does not drive the output current directly; it only moves the drain of the input device, whose influence is weaker than the gate's by $g_{m1}r_{O1}$.

**Common mistake.** Concluding that the offset vanishes or diverges as $R_D \to \infty$ because the gain changes. Both the signal and the error see the same load factor $R_D/(R_D + R_{out})$, so the input-referred offset does not depend on $R_D$; only the output quantities do.
