# Detailed solution - R271

**Approach.** $C_1$ links the n-well of the PMOS $M_3$ to the p-type bulk of the NMOS $M_1$. With $C_1$ uncharged, the two bulks start at the same potential, which opens a path of two forward-biased pn junctions in series with $C_1$ between $V_{DD}$ and ground; that path charges $C_1$ and temporarily forward-biases the bodies of both transistors. Meanwhile the positive-feedback loop $M_1 \to M_3 \to M_2 \to M_1$ latches, sending $V_X$ to $V_{DD}$, and $V_Y$ follows the body biases as they relax. The node capacitances of X and Y are taken as small (X, Y quasi-static) and the junctions are modelled as diodes (about 0.7 V at large current).

### Step 1 — $t = 0$: a forward-biased junction path charges $C_1$

Follow the path from $V_{DD}$ to ground:

$$V_{DD} \xrightarrow{\ \text{p+ source of } M_3 \to \text{n-well}\ } \text{plus plate of } C_1 \xrightarrow{\ C_1\ } \text{p-bulk of } M_1 \xrightarrow{\ \text{p-bulk} \to \text{n+ source of } M_1\ } \text{ground}.$$

Both junctions point "forward" along this path, and since $V_{C1} = 0$ their forward voltages add up to the full supply:

$$V_{F3} + V_{F1} = V_{DD} - V_{C1} = 3\ \mathrm{V}.$$

The common bulk potential starts somewhere in between, around mid-supply for comparable junctions. With roughly 1.5 V of forward bias on each junction, a **large current** charges $C_1$ rapidly, slowing once each junction is back to a normal diode drop:

$$V_{C1} \approx V_{DD} - 2V_{D,on} \approx 3 - 2(0.7) = 1.6\ \mathrm{V}, \qquad V_{well} \approx 2.3\ \mathrm{V}, \qquad V_{B1} \approx 0.7\ \mathrm{V}.$$

After that the junction current decays exponentially with the shrinking forward voltage, and $C_1$ **creeps very slowly toward $V_{DD}$** (well → 3 V, $M_1$'s bulk → 0): for an exponential diode, a logarithmic-in-time tail (tens of millivolts per decade of time). A fixed-drop diode model simply stops near 1.6 V; the exact tail depends on the junction model and on leakage.

Other junctions may also conduct briefly ($M_3$'s drain–well junction if $V_Y$ exceeds the well voltage by 0.7 V, or $M_1$'s bulk–drain junction if $M_1$'s bulk exceeds $V_Y$ by 0.7 V). They inject current into or out of Y early on and help trigger the loop.

### Step 2 — Both transistors are temporarily forward body-biased

While $C_1$ is charging, $M_3$'s well is *below* its source and $M_1$'s bulk is *above* its source: both are **forward body biases**, which **lower** the threshold magnitudes and make both transistors stronger than normal. With $V_{SB}$ for the NMOS and $V_{BS} = V_{well} - V_S$ for the PMOS (negative values mean forward bias),

$$V_{TH1} = 0.7 + 0.45\left(\sqrt{0.9 + V_{SB1}} - \sqrt{0.9}\right), \qquad |V_{TH3}| = 0.8 + 0.4\left(\sqrt{0.8 + V_{BS3}} - \sqrt{0.8}\right).$$

These are meaningless during the first, strong-forward-bias moment; once each junction is at about 0.7 V or less they give

$$
\begin{aligned}
V_{TH1} &= 0.7 + 0.45\left(\sqrt{0.9 - 0.7} - \sqrt{0.9}\right) = 0.7 + 0.45(0.447 - 0.949) = 0.47\ \mathrm{V},\\
|V_{TH3}| &= 0.8 + 0.4\left(\sqrt{0.8 - 0.7} - \sqrt{0.8}\right) = 0.8 + 0.4(0.316 - 0.894) = 0.57\ \mathrm{V}.
\end{aligned}
$$

As $C_1$ charges toward $V_{DD}$, both relax to their nominal values (0.7 V and 0.8 V).

### Step 3 — The loop latches: $V_X \to V_{DD}$

More current in $M_3$ lowers $V_Y$; $M_2$ then pushes more current into X, which connects only to $M_2$'s drain and $M_1$'s gate (**no dc load**); X rises, and $M_1$ conducts more and lowers $V_Y$ further: positive feedback.

- The **off state** ($V_X \le V_{TH1}$, no current) is a dc solution.
- In the **latched state**, $M_2$ is on but has no dc load, so its current must be zero, which for a conducting device means $V_{SD2} = 0$: **$V_X = V_{DD}$**. $M_1$ then has $V_{GS1} = 3$ V and conducts strongly, and $M_3$ supplies its current.

The junction currents into and out of Y at $t = 0$ make $M_3$ (and hence $M_2$) conduct, which triggers the loop, so **$V_X$ rises quickly to $V_{DD}$ and stays there**. (Start-up is not strictly guaranteed for arbitrary initial node voltages and capacitances, but the latched state is the expected outcome.)

### Step 4 — The level of $V_Y$ and its slow drift

In the latched state, $M_3$ (diode, saturated) and $M_1$ (in triode, since $V_Y < V_{DD} - V_{TH1}$) carry the same current. KCL at Y:

$$\frac{\beta_p}{2}\left(V_{DD} - V_Y - |V_{TH3}|\right)^2 = \beta_n\left[(V_{DD} - V_{TH1})V_Y - \tfrac12V_Y^2\right]. \tag{1}$$

**Which way does $V_Y$ drift as the thresholds recover?** Raising $V_{TH1}$ weakens $M_1$ and tends to raise $V_Y$; raising $|V_{TH3}|$ weakens $M_3$ and tends to lower $V_Y$. Differentiate (1), and use (1) itself to replace $\beta_p(V_{DD} - V_Y - |V_{TH3}|)$ by $\beta_nV_Y[2(V_{DD} - V_{TH1}) - V_Y]/(V_{DD} - V_Y - |V_{TH3}|)$:

$$dV_Y = \frac{\beta_nV_Y}{D}\left[dV_{TH1} - \frac{2(V_{DD} - V_{TH1}) - V_Y}{V_{DD} - V_Y - |V_{TH3}|}\,d|V_{TH3}|\right], \qquad D = \beta_p(V_{DD} - V_Y - |V_{TH3}|) + \beta_n(V_{DD} - V_{TH1} - V_Y) > 0 .$$

The fraction multiplying $d|V_{TH3}|$ exceeds 1, because $2(V_{DD} - V_{TH1}) - V_Y - (V_{DD} - V_Y - |V_{TH3}|) = V_{DD} - 2V_{TH1} + |V_{TH3}| > 0$. The two junctions are in series and carry the same current, so (for similar junctions) their forward voltages recover at the same rate, and the PMOS threshold is even a bit more sensitive: at 0.7 V forward bias, $dV_{TH}/dV_F = 0.4/(2\sqrt{0.1}) = 0.63$ against $0.45/(2\sqrt{0.2}) = 0.50$ for the NMOS. Hence $d|V_{TH3}| \gtrsim dV_{TH1}$ and the bracket is negative: **$V_Y$ drifts down**, because the weakening of the saturated $M_3$ (current $\propto$ overdrive²) outweighs that of the triode $M_1$.

**Examples** (solve (1) with the thresholds at the start and the end of the slow tail):

- $\beta_p = \beta_n$, early ($V_{TH1} = 0.47$, $|V_{TH3}| = 0.57$ V): $\tfrac12(2.43 - V_Y)^2 = 2.53V_Y - \tfrac12V_Y^2$, i.e. $V_Y^2 - 4.96V_Y + 2.95 = 0$, so $V_Y = 0.69$ V. Final (0.7 V, 0.8 V): $V_Y^2 - 4.5V_Y + 2.42 = 0$, so $V_Y = 0.62$ V.
- $\beta_p = 10\beta_n$: early, $5.5V_Y^2 - 26.84V_Y + 29.55 = 0$ gives $V_Y = 1.68$ V; final, $5.5V_Y^2 - 24.3V_Y + 24.2 = 0$ gives $V_Y = 1.52$ V.

Very early, before the forward biases have settled, $V_Y$ may be held briefly by a conducting drain junction, so its first motion depends on the sizes.

### Result

- **$C_1$** links the n-well of $M_3$ to the p-bulk of $M_1$. At $t = 0$ the two bulks are at the same potential, and the path $V_{DD}$ → (source–well junction of $M_3$) → $C_1$ → (bulk–source junction of $M_1$) → ground is forward-biased. A large current charges $C_1$ quickly to about $V_{DD} - 2V_{D,on} \approx 1.6$ V (well ≈ $V_{DD} - 0.7$ V, $M_1$'s bulk ≈ +0.7 V). Afterwards the junction currents decay and $C_1$ creeps very slowly toward $V_{DD}$ (a fixed-drop model stops near 1.6 V).
- During this time **both transistors are forward body-biased**: $|V_{TH3}|$ and $V_{TH1}$ are lowered (≈ 0.57 V and ≈ 0.47 V at 0.7 V of forward bias), and they relax to 0.8 V and 0.7 V as $C_1$ charges.
- **$V_X$ goes to $V_{DD}$ almost at once and stays there**: the junction currents trigger the positive-feedback loop $M_1$–$M_3$–$M_2$, and $M_2$ pulls X (no dc load) to $V_{DD}$.
- **$V_Y$ settles at the $M_3$/$M_1$ balance**, $\tfrac{\beta_p}{2}(V_{DD} - V_Y - |V_{TH3}|)^2 = \beta_n[(V_{DD} - V_{TH1})V_Y - V_Y^2/2]$, and **drifts slowly down** while $C_1$ charges (e.g. ≈ 0.69 → 0.62 V for $\beta_p = \beta_n$, 1.68 → 1.52 V for $\beta_p = 10\beta_n$).

**Common mistake.** Treating $C_1$ as connected to Y, X or ground. It sits between two bulk terminals, so it is charged by junction (diode) currents, not channel currents, and it acts on the transistors only through the body effect.

**Common mistake.** Claiming that $C_1$ stays at 0 V because "no transistor drives it". The two body junctions in series form a forward-biased diode path across the full supply at $t = 0$, so $C_1$ charges immediately.

**Common mistake.** Letting $V_X$ settle at an intermediate mirror voltage. X has no dc load, so once $M_2$ conducts at all, X goes to $V_{DD}$ and the loop latches.
