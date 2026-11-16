# Detailed solution - R270

**Approach.** Identify what $C_1$ is attached to: the n-well of the PMOS $M_3$. At $t = 0$ that well sits at 0 V while $M_3$'s p+ source sits at $V_{DD}$, so a pn junction is strongly forward-biased and charges $C_1$. Then analyse the transistor loop $M_1 \to M_3 \to M_2 \to M_1$, which is a positive-feedback loop with two possible dc states. The junction currents at $t = 0$ kick it into the latched (conducting) state. Finally, follow $V_Y$ as the well charges and $M_3$'s threshold recovers. We assume the node capacitances of X and Y are small, so X and Y follow quasi-statically, and we model the junctions as diodes (about 0.7 V when carrying a large current).

### Step 1 — Reading the circuit

From the figure:

- $M_3$ (PMOS): source at $V_{DD}$, gate and drain tied together at Y. It is **diode-connected**. Its **n-well (bulk)** is connected to the top plate of $C_1$, whose other plate is grounded. At $t = 0$, $V_{C1} = 0$, so the well is at 0 V.
- $M_2$ (PMOS, bulk at $V_{DD}$): source at $V_{DD}$, gate at Y (it mirrors $M_3$), drain at X.
- $M_1$ (NMOS): gate at X, drain at Y, source grounded.
- **Node X** connects only to $M_2$'s drain and $M_1$'s gate: it has **no dc load**.

PMOS threshold with body effect (magnitude), with $V_{BS} = V_{well} - V_S$ ($V_{BS} > 0$ is reverse bias for a PMOS):

$$|V_{TH3}| = 0.8 + 0.4\left(\sqrt{0.8 + V_{BS}} - \sqrt{0.8}\right)\ \mathrm{V}.$$

### Step 2 — $t = 0$: forward-biased junctions charge $C_1$

$M_3$'s p+ source is at 3 V and its n-well at 0 V. The **source–well junction is forward-biased by 3 V**: a pn diode conducts a very large current long before that. The same holds for the drain–well junction (p+ drain at Y) whenever $V_Y > 0.7$ V. Consequences:

- **The well charges very quickly.** A large diode current flows from the source (and from Y) into the well and onto $C_1$. The well voltage rises rapidly to about $V_{DD} - 0.7$ V = 2.3 V, where the forward bias has dropped to an ordinary diode voltage.
- **Then it creeps toward $V_{DD}$.** With an exponential diode, $I = I_S e^{v/V_T}$ with $v = V_{DD} - V_{well}$, the charging law $-C_1\,dv/dt = I_Se^{v/V_T}$ integrates to
$$v(t) \approx V_T\ln\frac{C_1V_T}{I_St} \qquad (\text{large } t),$$
so the forward bias falls by only $V_T\ln10 \approx 60$ mV per decade of time: a slow, roughly logarithmic tail. (With a fixed-drop diode model the charging simply stops at about 2.3 V. The exact tail also depends on junction leakage.)
- The forward-biased p+/n-well junction, together with the p-substrate, forms a parasitic PNP transistor, so part of this early current also flows to the substrate. This lasts only as long as the well is low.
- The square-law body-effect formula does not apply during this strong forward bias. $M_3$'s channel is then much stronger than normal.

### Step 3 — The transistor loop has positive feedback and latches

Trace a small increase of $M_3$'s current: $V_Y$ falls, so $M_2$'s source–gate voltage grows and $M_2$ pushes more current into X. X has no dc load, so $V_X$ rises, which turns $M_1$ on harder. $M_1$ pulls more current out of Y, so $V_Y$ falls further. The original change is **reinforced**: positive feedback.

There are two dc solutions:

- **Off state:** $V_X \le 0.7$ V, $M_1$ off, so no current anywhere and $M_2$, $M_3$ off. This is consistent, but only if nothing ever pulls current from Y or charges X.
- **Latched state:** $M_2$ is on but has no dc load, so it must carry zero current. A conducting PMOS carries zero current only when $V_{SD} = 0$, so **$V_X = V_{DD}$** with $M_2$ in deep triode. Then $M_1$ has $V_{GS1} = V_{DD} = 3$ V and conducts heavily, and $M_3$ supplies that current.

**Which state is reached?** At $t = 0$ the drain–well junction draws current out of Y (if $V_Y > 0.7$ V). That pulls Y down, turns on $M_3$ and therefore $M_2$, which charges X, and the positive feedback does the rest. If $V_Y$ is already low, $M_2$ is on anyway and charges X. Either way the **latched state is the expected outcome**: **$V_X$ goes to $V_{DD}$ almost at once and stays there.** (With unknown initial node voltages and finite node capacitances, start-up is not strictly guaranteed. The off state remains a mathematical possibility, but the junction currents make it unlikely.)

### Step 4 — The level of $V_Y$ in the latched state

In the latched state, $M_3$ (diode, saturated) and $M_1$ (gate at 3 V) carry the same current. $M_1$ is in triode because $V_Y$ is well below $V_{GS1} - V_{TH} = 2.3$ V. KCL at Y:

$$\frac{\beta_p}{2}\left(V_{DD} - V_Y - |V_{TH3}|\right)^2 = \beta_n\left[(V_{DD} - 0.7)V_Y - \tfrac12V_Y^2\right].$$

$V_Y$ is a low-to-moderate level set by the strength of $M_3$ against $M_1$. It depends on $|V_{TH3}|$, which changes as the well charges.

**Example with equal $\beta_n = \beta_p$**, final state (well at $V_{DD}$, $|V_{TH3}| = 0.8$ V):

$$
\begin{aligned}
\tfrac12(2.2 - V_Y)^2 &= 2.3V_Y - \tfrac12V_Y^2\\
2.42 - 2.2V_Y + \tfrac12V_Y^2 - 2.3V_Y + \tfrac12V_Y^2 &= 0\\
V_Y^2 - 4.5V_Y + 2.42 &= 0\\
V_Y &= \frac{4.5 - \sqrt{20.25 - 9.68}}{2} = \frac{4.5 - 3.251}{2} = 0.62\ \mathrm{V}.
\end{aligned}
$$

**When the well is still near $V_{DD} - 0.7$ V** (forward bias $V_{BS} = -0.7$ V):

$$|V_{TH3}| = 0.8 + 0.4\left(\sqrt{0.8 - 0.7} - \sqrt{0.8}\right) = 0.8 + 0.4(0.316 - 0.894) = 0.57\ \mathrm{V}.$$

The forward body bias *lowers* $|V_{TH3}|$, so $M_3$ is stronger. Repeating the calculation with 0.57 V gives $V_Y^2 - 4.73V_Y + 2.952 = 0$, so $V_Y = (4.73 - \sqrt{22.37 - 11.81})/2 = 0.74$ V.

### Step 5 — The time evolution of $V_Y$

- **Very early** (well near 0 V): $V_Y$ is governed by the forward-biased drain–well junction and by the abnormally strong $M_3$. It may be held near the well voltage + 0.7 V and can first move up or down depending on the sizes (for instance, it rises with the well if $M_1$ is weak). The square-law model says little here.
- **After the fast charging** (well ≈ 2.3 V): $|V_{TH3}| \approx 0.57$ V and $V_Y$ sits at the corresponding latched level (≈ 0.74 V for equal β).
- **Slow tail:** as $C_1$ creeps toward $V_{DD}$, the forward bias disappears, $|V_{TH3}|$ returns to 0.8 V, $M_3$ weakens, and **$V_Y$ drifts slowly down** to its final value (≈ 0.62 V for equal β).

| Phase | Well ($V_{C1}$) | $V_X$ | $V_Y$ (equal β) |
|---|---|---|---|
| $t = 0$ | 0 | initial value | initial value |
| fast junction charging | → about 2.3 V | → $V_{DD}$ (latch) | settles near 0.74 V |
| slow tail | creeps → 3 V (about 60 mV/decade) | $V_{DD}$ | drifts down → 0.62 V |

### Result

- **$C_1$ (the n-well of $M_3$)** starts at 0 V, so the source–well junction (and the drain–well junction while $V_Y > 0.7$ V) is strongly forward-biased. A large junction current charges $C_1$ quickly to about $V_{DD} - 0.7$ V, after which it creeps slowly toward $V_{DD}$ (roughly logarithmically in time; a fixed-drop diode model stops near 2.3 V).
- **$V_X$ goes to $V_{DD}$ almost at once and stays there.** The junction current pulls Y down, turning on $M_3$ and $M_2$. X has no dc load, so $M_2$ pulls it to $V_{DD}$ (deep triode, zero current), and the positive-feedback loop $M_1$–$M_3$–$M_2$ latches.
- **$V_Y$ settles at a low-to-moderate level** set by $\tfrac{\beta_p}{2}(V_{DD} - V_Y - |V_{TH3}|)^2 = \beta_n[(V_{DD} - 0.7)V_Y - V_Y^2/2]$ ($M_1$ in triode). While the well is still slightly forward-biased, $|V_{TH3}|$ is reduced (about 0.57 V), so $V_Y$ is somewhat higher. As the well charges and $|V_{TH3}|$ returns to 0.8 V, $V_Y$ drifts slowly down (for equal β: about 0.74 V → 0.62 V). Its very early behaviour depends on the sizes and on the junctions.

**Common mistake.** Treating $C_1$ as a capacitor on node Y or on the gate line, and drawing an RC-type charging of Y. $C_1$ hangs on the n-well of $M_3$, so the physics at $t = 0$ is junction conduction, not channel current into a capacitor.

**Common mistake.** Applying the body-effect formula with 3 V of forward bias (or with the wrong sign). A forward-biased source–well junction conducts and clamps the bias near 0.7 V. Moreover, forward body bias *lowers* a PMOS threshold magnitude, so $M_3$ is stronger, not weaker, while the well is low.

**Common mistake.** Letting $V_X$ settle at a mid-supply "mirror" voltage. Node X has no dc load. Once $M_2$ conducts at all, X is pulled to $V_{DD}$, and the loop latches.
