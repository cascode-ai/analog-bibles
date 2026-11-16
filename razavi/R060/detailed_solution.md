# Detailed solution - R060

**Approach.** Treat the two experiments separately. For a negative drain voltage, use the symmetry of the MOSFET: the terminal at the lower potential acts as the source. For a positive substrate voltage, use the body-effect equation with a negative $V_{SB}$. In both cases also check the pn junctions between the n+ regions and the p-type substrate, which become forward biased and eventually dominate.

### Step 1 — Decreasing $V_D$ below zero: source and drain exchange roles

In normal operation ($V_D > 0$) $V_{GS} = 1.5$ V and $V_{GS} - V_{TH} = 0.8$ V, so the device is in triode for $V_D < 0.8$ V and saturated above. As $V_D$ goes through zero the current passes through zero, and for $V_D < 0$ the lower-potential terminal, the drain terminal, **acts as the source**, while the grounded terminal acts as the drain. The current **reverses**: it now flows from the grounded terminal, through the channel, out of the "drain" terminal.

Write $V_D = -x$ with $x > 0$. For the reversed device:

$$V_{GS}' = V_G - V_D = 1.5 + x, \qquad V_{DS}' = 0 - V_D = x, \qquad V_{SB}' = V_D - 0 = -x .$$

**Region.** Triode requires $V_{DS}' < V_{GS}' - V_{TH}$:

$$x < 1.5 + x - V_{TH} \quad\Longleftrightarrow\quad V_{TH} < 1.5\ \mathrm{V},$$

which always holds: the reversed device stays in **triode** however negative $V_D$ becomes, because the effective $V_{GS}$ grows as fast as the effective source goes down.

**Current magnitude** (square law, triode, $\beta = \mu_nC_{ox}W/L$):

$$|I_D| = \beta\left[(1.5 + x - V_{TH})\,x - \frac{x^2}{2}\right] = \beta\left[(1.5 - V_{TH})\,x + \frac{x^2}{2}\right].$$

The $x^2/2$ term is positive, so $|I_D|$ rises **faster than linearly** with $|V_D|$, because the gate drive keeps growing.

**Body effect.** The effective source is now *below* the grounded bulk, $V_{SB}' = -x < 0$, so the threshold *decreases*, adding further current. At $V_D = -0.4$ V, for example:

$$V_{TH} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB}'} - \sqrt{2|\phi_F|}\right) = 0.7 + 0.45\left(\sqrt{0.9 - 0.4} - \sqrt{0.9}\right) = 0.7 + 0.45(0.7071 - 0.9487) = 0.591\ \mathrm{V},$$

$$|I_D| = \beta\left[(1.9 - 0.591)(0.4) - 0.08\right] = 0.44\,\beta\ (\text{in A if }\beta\text{ is in A/V}^2).$$

| $V_D$ (V) | −0.1 | −0.2 | −0.4 | −0.6 |
|---|---|---|---|---|
| $V_{TH}$ of reversed device (V) | 0.676 | 0.650 | 0.591 | 0.520 |
| $\lvert I_D\rvert/\beta$ (V²) | 0.087 | 0.190 | 0.444 | 0.768 |

### Step 2 — Decreasing $V_D$ further: the drain–substrate junction turns on

The n+ "drain" region now sits at $V_D < 0$ while the p-substrate is at 0 V, so the **drain–substrate junction is forward biased** by $|V_D|$, with a current growing roughly as $I_s\exp(|V_D|/V_T)$:

- for $|V_D|$ up to a few hundred millivolts it is negligible next to the channel current;
- once $V_D$ falls below about $-0.5$ to $-0.7$ V, the junction **conducts heavily**, and this current (from the substrate contact into the drain terminal), which the gate does not control, soon dominates.

The forward-biased junction injects electrons into the substrate as minority carriers, which can be collected by other n-type regions on the chip, and the substrate current can trigger **latch-up** of the parasitic thyristor in CMOS. The body-effect formula also stops being meaningful once $|V_{SB}'|$ approaches $2|\phi_F| = 0.9$ V. In practice, an NMOS drain (or source) must never be driven more than a few hundred millivolts below the substrate.

### Step 3 — Raising the substrate voltage $V_{sub}$ above zero: lower threshold

Now keep $V_D$ positive (e.g. $V_D = 1$ V, so the device is saturated) and raise the substrate to $V_{sub} > 0$. With the source at 0,

$$V_{SB} = 0 - V_{sub} = -V_{sub} < 0 .$$

This **forward body bias** reverses the body effect: a substrate raised toward the channel potential narrows the depletion layer, so less depletion charge has to be balanced by the gate, and the threshold **decreases**:

$$
\begin{aligned}
V_{sub} = 0.25\ \mathrm{V}:&\quad V_{TH} = 0.7 + 0.45\left(\sqrt{0.65} - \sqrt{0.9}\right) = 0.7 + 0.45(0.8062 - 0.9487) = 0.636\ \mathrm{V},\\
V_{sub} = 0.5\ \mathrm{V}:&\quad V_{TH} = 0.7 + 0.45\left(\sqrt{0.40} - \sqrt{0.9}\right) = 0.7 + 0.45(0.6325 - 0.9487) = 0.558\ \mathrm{V}.
\end{aligned}
$$

The saturation current $\tfrac12\beta(1.5 - V_{TH})^2$ therefore **increases**:

| $V_{sub}$ (V) | 0 | 0.25 | 0.5 | 0.7 |
|---|---|---|---|---|
| $V_{TH}$ (V) | 0.700 | 0.636 | 0.558 | 0.474 |
| $I_D/\beta$ (V²), saturation | 0.320 | 0.373 | 0.444 | 0.526 |
| relative to $V_{sub} = 0$ | 1 | 1.17 | 1.39 | 1.64 |

(The value at 0.7 V is only indicative, because there the junction current of Step 4 already dominates.)

### Step 4 — Raising $V_{sub}$ further: junction conduction and bipolar action

The p-substrate at $V_{sub}$ and the n+ source at 0 V form a junction **forward biased by $V_{sub}$** (and if $V_D < V_{sub}$, the drain junction is forward biased too).

- Below about 0.4–0.5 V the junction current is small, and the main effect is the lower threshold of Step 3.
- Beyond roughly 0.6–0.7 V the source–substrate junction **conducts heavily**: a large current flows from the substrate terminal into the source.
- The n+ source / p substrate / n+ drain structure is a **lateral npn bipolar transistor** (emitter = source, base = substrate, collector = drain). With its base–emitter junction forward biased, electrons injected from the source are collected by the higher-voltage drain, giving a drain current that the **gate no longer controls**.
- The large substrate current can also trigger **latch-up** of the parasitic pnpn structures of a CMOS chip.

For these reasons the substrate is always tied to the most negative supply. Small, controlled forward body bias (a few hundred millivolts) is sometimes used deliberately to lower $V_{TH}$, but never to the point of junction conduction.

### Result

**$V_D$ decreasing below 0:** the drain becomes the lower-potential terminal and acts as the source. The current reverses (flowing from the grounded terminal into the drain terminal); the device stays in triode with an effective $V_{GS} = 1.5 - V_D$ that grows as $V_D$ falls, so $|I_D| = \beta[(1.5 - V_{TH})|V_D| + V_D^2/2]$ rises faster than linearly, helped by a threshold lowered by the negative $V_{SB}$ (0.59 V at $V_D = -0.4$ V). Meanwhile the drain–substrate junction is forward biased, and below about $-0.6$ V it conducts heavily, injecting current into the substrate (latch-up risk).

**$V_{sub}$ increasing above 0:** $V_{SB} = -V_{sub} < 0$, so the threshold decreases (≈ 0.64 V at 0.25 V, ≈ 0.56 V at 0.5 V) and $I_D$ increases. The source–substrate junction (and the drain–substrate junction if $V_D < V_{sub}$) is forward biased; beyond about 0.6 V a large substrate current flows, the parasitic lateral npn (source–substrate–drain) turns on so the gate loses control of the current, and latch-up becomes possible.

**Common mistake.** Saying the device "turns off" when $V_D$ becomes negative. The lower terminal simply becomes the source, the effective $V_{GS}$ increases, and a growing reverse current flows.

**Common mistake.** Claiming that a positive substrate voltage raises $V_{TH}$. It is a *forward* body bias ($V_{SB} < 0$), which narrows the depletion region and lowers the threshold, so the current increases.

**Common mistake.** Assuming the junctions stay reverse biased. In both experiments an n+/p-substrate junction becomes forward biased, and beyond about 0.6 V its exponential current, not the MOS equations, dominates the behaviour.
