# Detailed solution - R623

**Approach.** The input-referred offset is the differential input that makes $V_{out} = 0$. With an ideal tail source this forces equal currents in both branches, which pins down every node voltage except the drains of $M_1$ and $M_2$. Find how far apart the cascode mismatch pushes those two nodes, then the gate-voltage difference $M_1$ and $M_2$ need to carry equal currents despite their different drain–source voltages; $\lambda \neq 0$ links the two. A small-signal calculation confirms the result and shows what happens as $R_D \to \infty$.

### Step 1 — Nodes and the linearized device equation

Call the common source of $M_1$ and $M_2$ node P, the drain of $M_1$ (source of $M_3$) node X, and the drain of $M_2$ (source of $M_4$) node Y. Only the cascodes are mismatched, $V_{TH3} - V_{TH4} = \Delta V_{TH}$; nominally $g_{m1} = g_{m2}$, $r_{O1} = r_{O2}$, $g_{m3} = g_{m4}$ and $r_{O3} = r_{O4}$. For small deviations, the current of a saturated device changes by

$$\delta I_D = g_m\left(\delta V_{GS} - \delta V_{TH}\right) + \frac{\delta V_{DS}}{r_O},$$

applied below to the *difference* between the two sides.

### Step 2 — What $V_{out} = 0$ implies

$V_{out} = 0$ puts the two cascode drains at the same voltage, so the equal loads carry equal currents, $I_{D3} = I_{D4}$. With the ideal tail source $I_{D1} + I_{D2} = I_{SS}$, and each cascode carries the current of the input device below it, so

$$I_{D1} = I_{D2} = I_{D3} = I_{D4} = \frac{I_{SS}}{2},$$

and both cascode drains sit at

$$V_{D3} = V_{D4} = V_{DD} - R_D\frac{I_{SS}}{2}.$$

$R_D$ has dropped out: whatever its value, the two drains are at the same voltage and the currents are fixed.

### Step 3 — The cascode mismatch moves nodes X and Y apart

$M_3$ and $M_4$ have equal currents, equal gate voltages ($V_b$) and equal drain voltages, but different thresholds; only $V_X$ and $V_Y$ are free. Let $\Delta V_S = V_X - V_Y$. Going from $M_4$ to $M_3$, $\delta V_{GS} = (V_b - V_X) - (V_b - V_Y) = -\Delta V_S$, $\delta V_{DS} = (V_D - V_X) - (V_D - V_Y) = -\Delta V_S$ and $\delta V_{TH} = \Delta V_{TH}$, so equal currents require

$$I_{D3} - I_{D4} = g_{m3}\left(-\Delta V_S - \Delta V_{TH}\right) + \frac{-\Delta V_S}{r_{O3}} = 0 \quad\Longrightarrow\quad -\Delta V_S\left(g_{m3} + \frac{1}{r_{O3}}\right) = g_{m3}\,\Delta V_{TH} .$$

Solving:

$$\Delta V_S = V_X - V_Y = -\Delta V_{TH}\,\frac{g_{m3}}{g_{m3} + 1/r_{O3}} = -\Delta V_{TH}\,\frac{g_{m3}r_{O3}}{1 + g_{m3}r_{O3}} \approx -\Delta V_{TH}.$$

Like a source follower, the cascode with the higher threshold must sit almost $\Delta V_{TH}$ lower at its source to carry the same current.

### Step 4 — The input pair must compensate for unequal drain voltages

$M_1$ and $M_2$ carry equal currents (Step 2) and share P, but

$$V_{DS1} - V_{DS2} = (V_X - V_P) - (V_Y - V_P) = \Delta V_S .$$

With $\lambda \neq 0$ the gate voltages must make up for this (no threshold mismatch in $M_1$, $M_2$):

$$I_{D1} - I_{D2} = g_{m1}\left(V_{GS1} - V_{GS2}\right) + \frac{\Delta V_S}{r_{O1}} = 0 \quad\Longrightarrow\quad V_{GS1} - V_{GS2} = -\frac{\Delta V_S}{g_{m1}r_{O1}} .$$

The sources are common, so this is the input offset. Substituting $\Delta V_S$ from Step 3:

$$V_{OS} = \Delta V_{TH}\,\frac{g_{m3}r_{O3}}{1 + g_{m3}r_{O3}}\cdot\frac{1}{g_{m1}r_{O1}} \approx \frac{\Delta V_{TH}}{g_{m1}r_{O1}} .$$

The cascode mismatch acts like a voltage $\Delta V_{TH}$ applied to the *drain* of $M_1$, which is $g_{m1}r_{O1}$ times weaker than the gate. With $\lambda = 0$ the offset would be exactly zero.

### Step 5 — Cross-check with small-signal gains

Model the mismatch as a source $-\Delta V_{TH}$ in series with the gate of $M_3$. With an ideal tail source only its differential part reaches $V_{out}$, and P is a virtual ground for it, so each side reduces to the half circuit below: $g_{m1}v_{in}$ from X to ground in parallel with $r_{O1}$; $g_{m3}(v_{g3} - v_X)$ from the output to X in parallel with $r_{O3}$; and $R_D$ from the output to ac ground.

<!-- diagram: diagram-01.cir -->

Let $R_{out} = r_{O1} + r_{O3} + g_{m3}r_{O3}r_{O1}$, the output resistance of the cascode.

**Gain from the input (gate of $M_1$).** With the output shorted, KCL at X gives the short-circuit output current $i = g_{m1}v_{in}\,r_{O1}(1 + g_{m3}r_{O3})/R_{out}$. The output voltage is $-i\,(R_D \parallel R_{out})$, so

$$A_{in} = -\frac{g_{m1}r_{O1}(1 + g_{m3}r_{O3})}{R_{out}}\cdot\frac{R_DR_{out}}{R_D + R_{out}} = -\frac{g_{m1}r_{O1}(1 + g_{m3}r_{O3})\,R_D}{R_D + R_{out}} .$$

**Gain from the gate of $M_3$** (with $v_{in} = 0$, so $M_1$ is just $r_{O1}$). KCL at X:

$$\frac{v_X}{r_{O1}} = g_{m3}(v_{g3} - v_X) - \frac{v_X}{r_{O3}} \quad\Longrightarrow\quad v_X = \frac{g_{m3}v_{g3}}{g_{m3} + 1/r_{O1} + 1/r_{O3}} .$$

The short-circuit output current is $v_X/r_{O1} = g_{m3}r_{O3}v_{g3}/R_{out}$, so

$$A_{3} = -\frac{g_{m3}r_{O3}}{R_{out}}\cdot\frac{R_DR_{out}}{R_D + R_{out}} = -\frac{g_{m3}r_{O3}\,R_D}{R_D + R_{out}} .$$

**Refer to the input.** The error source $-\Delta V_{TH}$ is equivalent to an input voltage

$$|V_{OS}| = \Delta V_{TH}\,\frac{|A_3|}{|A_{in}|} = \Delta V_{TH}\,\frac{g_{m3}r_{O3}}{g_{m1}r_{O1}(1 + g_{m3}r_{O3})},$$

in agreement with Step 4; the factor $R_D/(R_D + R_{out})$ is common to both gains and cancels.

**Numerical check.** Take $\mu_nC_{ox}W/L = 5$ mA/V² for all devices, $V_{TH} = 0.5$ V, $\lambda = 0.1\ \mathrm{V^{-1}}$, $I_{SS} = 1$ mA, $V_{DD} = 3$ V, $V_b = 2$ V, input common-mode level 1.2 V and $\Delta V_{TH} = 10$ mV. Solving the large-signal square-law equations (with the $1 + \lambda V_{DS}$ factor) gives $V_X - V_Y = -9.8$ mV and $V_{OS} = 0.196$ mV, both for $R_D = 1$ kΩ and for $R_D = 2$ kΩ. The formula with $g_{m1}r_{O1} \approx 50$ and $g_{m3}r_{O3} \approx 51$–55 gives 0.195 mV.

### Step 6 — What happens as $R_D \to \infty$

Neither derivation contains $R_D$, so **the input-referred offset does not change** as $R_D \to \infty$. What changes:

- **Gain.** $|A_{in}| \to g_{m1}r_{O1}(1 + g_{m3}r_{O3})$, the full cascode gain, since the load no longer shunts $R_{out}$.
- **Output offset.**
$$V_{out,os} = |A_{in}|\,V_{OS} \to g_{m1}r_{O1}(1 + g_{m3}r_{O3})\cdot\frac{\Delta V_{TH}\,g_{m3}r_{O3}}{g_{m1}r_{O1}(1 + g_{m3}r_{O3})} = g_{m3}r_{O3}\,\Delta V_{TH} .$$

Gain and output offset grow together, and the output offset tends to the finite value $g_{m3}r_{O3}\Delta V_{TH}$. (With $R_D \to \infty$ and an ideal tail source the output common-mode level is undefined, so a real design would need common-mode feedback; this does not affect the differential offset.)

### Result

$$|V_{OS,in}| = \Delta V_{TH}\,\frac{g_{m3}r_{O3}}{1 + g_{m3}r_{O3}}\cdot\frac{1}{g_{m1}r_{O1}} \approx \frac{\Delta V_{TH}}{g_{m1}r_{O1}},$$

independent of $R_D$. The cascode threshold mismatch moves the drains of the input devices apart by about $\Delta V_{TH}$, and channel-length modulation turns this into an input offset reduced by the intrinsic gain $g_{m1}r_{O1}$. As $R_D \to \infty$ the input-referred offset is unchanged; the gain rises to $g_{m1}r_{O1}(1 + g_{m3}r_{O3})$ and the output offset rises to about $g_{m3}r_{O3}\Delta V_{TH}$.

**Common mistake.** Claiming the offset is zero because "a cascode cannot change the current". That holds only for $\lambda = 0$; with $\lambda \neq 0$ the shifted drain voltage changes the input device's current, and the input must compensate by $\Delta V_S/(g_{m1}r_{O1})$.

**Common mistake.** Referring $\Delta V_{TH}$ to the input as if it were in series with the input gate (offset $\approx \Delta V_{TH}$), or scaling it by $g_{m3}/g_{m1}$. The cascode only moves the drain of the input device, whose influence is weaker than the gate's by $g_{m1}r_{O1}$.

**Common mistake.** Concluding that the offset vanishes or diverges as $R_D \to \infty$ because the gain changes. Signal and error see the same load factor $R_D/(R_D + R_{out})$, so only the output quantities depend on $R_D$.
