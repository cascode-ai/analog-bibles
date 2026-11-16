# Detailed solution - R607

**Approach.** Rewrite the gain in terms of the bias quantities, $|A_v| = 2IR_D/(V_{GS} - V_{TH})$. It shows that the gain can be raised in only two ways: by reducing the overdrive, or by increasing the DC drop $IR_D$ across the load. Each of these degrades linearity through a different mechanism: the first at the input (the voltage-to-current conversion), the second at the output (headroom and the triode region).

### Step 1 — The gain in terms of overdrive and load drop

For a square-law device in saturation, $I = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$ with $V_{ov} = V_{GS} - V_{TH}$, the overdrive voltage. Then $\mu_nC_{ox}(W/L) = 2I/V_{ov}^2$ and

$$|A_v| = \mu_nC_{ox}\frac{W}{L}V_{ov}R_D = \frac{2I}{V_{ov}^2}V_{ov}R_D = \frac{2\,IR_D}{V_{ov}} .$$

This holds for the common-source (CS) stage (bias current $I$) and for each side of the differential pair (each transistor carries $I = I_{SS}/2$). There are only two "knobs":

1. **lower $V_{ov}$** (e.g. a larger $W/L$ at the same current, or less current at the same $IR_D$);
2. **larger $IR_D$** (a larger $R_D$, or more current through it).

### Step 2 — Effect 1: a smaller overdrive makes the input transistor less linear

The transistor converts the input voltage into a current, and the nonlinearity of that conversion is set by the input swing *relative to the overdrive*.

**CS stage.** With $V_{GS} = V_{GS0} + V_m\cos\omega t$:

$$I_D = \tfrac12\mu_nC_{ox}\tfrac{W}{L}(V_{ov} + V_m\cos\omega t)^2 = \text{DC} + \mu_nC_{ox}\tfrac{W}{L}V_{ov}V_m\cos\omega t + \tfrac14\mu_nC_{ox}\tfrac{W}{L}V_m^2\cos2\omega t,$$

so

$$\mathrm{HD2} = \frac{V_m}{4V_{ov}}.$$

**Differential pair.** The even harmonics cancel, and the cubic term of $\Delta I = kV_{ov}V_{in}\sqrt{1 - V_{in}^2/(4V_{ov}^2)} \approx kV_{ov}V_{in} - kV_{in}^3/(8V_{ov})$ gives

$$\mathrm{HD3} = \frac{V_m^2}{32V_{ov}^2},$$

and the pair's linear input range, $\sqrt2V_{ov}$ (the input at which one transistor turns off), shrinks as $V_{ov}$ falls.

**Trade-off in one line.** Eliminate $V_{ov}$ with $V_{ov} = 2IR_D/|A_v|$:

$$\mathrm{HD2}_{CS} = \frac{|A_v|\,V_m}{8\,IR_D}, \qquad \mathrm{HD3}_{pair} = \frac{|A_v|^2V_m^2}{128\,(IR_D)^2}.$$

For a given load drop $IR_D$ and input amplitude, the distortion grows in proportion to the gain (CS) or to its square (pair). Example: with $IR_D = 1$ V and $V_m = 20$ mV, a CS stage with $V_{ov} = 0.4$ V has $|A_v| = 5$ and HD2 = 1.25 %; lowering the overdrive to 0.2 V doubles the gain to 10 but also doubles HD2 to 2.5 %.

**Why.** At a small overdrive the device operates near the bottom of its square-law curve, where the slope ($g_m$) changes rapidly with $V_{GS}$: the gain per volt is high, but so is the relative change of that gain across the swing.

### Step 3 — Effect 2: a larger $IR_D$ squeezes the output headroom

**DC drain level.** The drain sits at

$$V_{D} = V_{DD} - IR_D,$$

which falls as $IR_D$ grows. Meanwhile the output swing $|A_v|V_m = 2IR_DV_m/V_{ov}$ grows in proportion to $IR_D$.

**Saturation condition at the signal peaks.** The transistor stays saturated only while its drain is no more than one threshold below its gate, $V_D \ge V_G - V_{TH}$. In the CS stage the worst moment is when the gate is at its peak ($V_{GS0} + V_m$) and the drain at its trough ($V_{DD} - IR_D - |A_v|V_m$):

$$V_{DD} - IR_D - |A_v|V_m \;\ge\; V_{ov} + V_m .$$

For the pair (each gate swinging by $\pm V_m/2$ about $V_{in,CM}$, each drain by $\pm|A_v|V_m/2$ about $V_{DD} - IR_D$):

$$V_{DD} - IR_D - \frac{|A_v|V_m}{2} \;\ge\; V_{in,CM} + \frac{V_m}{2} - V_{TH}.$$

Raising $IR_D$ eats into the left side twice: the DC drop increases, and the output excursion $|A_v|V_m$ grows with it. Once the inequality fails, the transistor enters the **triode region** at the output peaks; there its current depends strongly on $V_{DS}$, the incremental gain collapses, and the output waveform is flattened, which is severe distortion.

**Consequence for a fixed supply.** Combining $|A_v| = 2IR_D/V_{ov}$ with $IR_D \le V_{DD} - V_{ov} - (\text{swing})$:

$$|A_v| \le \frac{2\,(V_{DD} - V_{ov} - \text{swing})}{V_{ov}}.$$

So within a given supply, a higher gain leaves less voltage room for a linear output swing, and the gain cannot be raised by $R_D$ alone without eventually driving the device into triode.

### Step 4 — Summary of the two mechanisms

| way to raise $\lvert A_v\rvert = 2IR_D/V_{ov}$ | where linearity suffers | symptom |
|---|---|---|
| smaller $V_{ov}$ (larger $W/L$ or less current) | input: V-to-I conversion | HD2 $= V_m/(4V_{ov})$ (CS), HD3 $= V_m^2/(32V_{ov}^2)$ (pair), narrower input range |
| larger $IR_D$ (larger $R_D$) | output: headroom | lower drain bias, larger output swing, transistor driven into triode at the peaks |

### Result

Since $|A_v| = g_mR_D = 2IR_D/(V_{GS} - V_{TH})$, the gain can be increased only by:

1. **Reducing the overdrive** (larger $W/L$ at fixed current). The input swing then becomes a larger fraction of $V_{GS} - V_{TH}$, so the voltage-to-current conversion becomes more nonlinear: HD2 $= V_m/[4(V_{GS} - V_{TH})]$ in the CS stage and HD3 $= V_m^2/[32(V_{GS} - V_{TH})^2]$ in the pair, whose linear input range ($\approx\sqrt2(V_{GS} - V_{TH})$) also shrinks.
2. **Increasing $R_D$ (the drop $IR_D$).** The drain bias $V_{DD} - IR_D$ falls while the output swing $|A_v|V_m$ grows, so at the output peaks the drain approaches $V_G - V_{TH}$ and the transistor enters the triode region, causing heavy distortion. For a fixed supply, more gain leaves less room for a linear output swing.

**Common mistake.** Believing that a lower overdrive improves linearity because it gives more gain (or that gain by itself makes a stage more linear). Open-loop, the opposite holds: the distortion of the input device is set by $V_m/V_{ov}$, and lowering $V_{ov}$ to raise the gain increases it.

**Common mistake.** Thinking that a larger $R_D$ moves the transistor further from the triode region. A larger $R_D$ *lowers* the DC drain voltage and *enlarges* the output swing, both of which bring the drain closer to $V_G - V_{TH}$.
