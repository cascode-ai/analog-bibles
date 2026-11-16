# Detailed solution - R664

**Approach.** Go through the quantities that ideal (constant-field) scaling controls — oxide field, $C_{ox}$, drain current, transconductance, capacitances and delay, threshold voltage, gate control — first under ideal scaling and then with $t_{ox}$ held constant. Each one follows from a standard device equation once the scaling factors of its ingredients are known. The comparison shows that the oxide becomes *safer*, but the device loses most of the benefits that a thinner oxide provides.

### Step 1 — Ideal scaling as a reference

Ideal (constant-field) scaling by $\alpha > 1$:

- dimensions $W$, $L$, $t_{ox}$, junction depth $x_j$: divided by $\alpha$;
- voltages $V_{DD}$, $V_{TH}$ (and hence the overdrive $V_{ov} = V_{GS} - V_{TH}$): divided by $\alpha$;
- doping levels: multiplied by $\alpha$.

Its purpose is to keep every electric field the same, so the physics stays the same while the device shrinks. In particular the oxide field $E_{ox} \approx V_{GS}/t_{ox}$ is $(1/\alpha)/(1/\alpha) = 1$, i.e. unchanged, and the oxide capacitance per unit area,

$$C_{ox} = \frac{\epsilon_{ox}}{t_{ox}},$$

rises by $\alpha$. In the problem, $t_{ox}$ is the only quantity left unscaled; everything else follows the rules above.

### Step 2 — Oxide field: breakdown is no longer a concern

The field across the gate oxide is approximately the gate–channel voltage divided by the oxide thickness:

$$E_{ox} \approx \frac{V_{GS}}{t_{ox}} \;\longrightarrow\; \frac{V_{GS}/\alpha}{t_{ox}} = \frac{E_{ox}}{\alpha}.$$

With $t_{ox}$ fixed and the voltages divided by $\alpha$, the oxide field **falls by $\alpha$**. Breakdown is therefore not a problem at all: the oxide is simply thicker than it needs to be. The cost of this safety shows up in everything that depends on $C_{ox}$.

### Step 3 — Oxide capacitance, drain current and transconductance

**Oxide capacitance.** $C_{ox} = \epsilon_{ox}/t_{ox}$ stays **constant**, instead of rising by $\alpha$.

**Drain current** (square-law saturation current, mobility $\mu$ taken constant):

$$I_D = \frac12\,\mu C_{ox}\,\frac{W}{L}\,(V_{GS} - V_{TH})^2 .$$

- $W/L$: $(1/\alpha)/(1/\alpha) = 1$, unchanged.
- $(V_{GS} - V_{TH})^2$: $(1/\alpha)^2 = 1/\alpha^2$ (assuming $V_{TH}$ can still be brought down by $\alpha$; see Step 5).
- $C_{ox}$: ideal $\times\alpha$; here $\times1$.

So

$$\text{ideal: } I_D \to \alpha\cdot1\cdot\frac{1}{\alpha^2}\,I_D = \frac{I_D}{\alpha}, \qquad t_{ox}\text{ fixed: } I_D \to 1\cdot1\cdot\frac{1}{\alpha^2}\,I_D = \frac{I_D}{\alpha^2}.$$

The drive current drops by $\alpha^2$ instead of $\alpha$.

**Transconductance:**

$$g_m = \mu C_{ox}\,\frac{W}{L}\,(V_{GS} - V_{TH}).$$

$$\text{ideal: } g_m \to \alpha\cdot1\cdot\frac{1}{\alpha}\,g_m = g_m, \qquad t_{ox}\text{ fixed: } g_m \to 1\cdot1\cdot\frac{1}{\alpha}\,g_m = \frac{g_m}{\alpha}.$$

$g_m$ falls by $\alpha$ instead of staying constant. For example, the input impedance $1/g_m$ of a common-gate stage rises by $\alpha$, and the intrinsic gain $g_mr_O$ suffers as well.

### Step 4 — Capacitances and speed

**Gate capacitance** $C_G \approx WLC_{ox}$:

$$\text{ideal: } \frac{1}{\alpha}\cdot\frac{1}{\alpha}\cdot\alpha = \frac{1}{\alpha}, \qquad t_{ox}\text{ fixed: } \frac{1}{\alpha}\cdot\frac{1}{\alpha}\cdot1 = \frac{1}{\alpha^2}.$$

**Junction and wiring capacitances** do not involve $t_{ox}$, so they still scale as in the ideal case, roughly by $1/\alpha$ (area $1/\alpha^2$ times capacitance per area $\alpha$ for junctions).

**Delay.** The time to charge a node capacitance $C$ through a swing $V_{DD}$ with a current $I_D$ is $\tau \approx CV_{DD}/I_D$.

| Node dominated by | Ideal scaling | $t_{ox}$ fixed |
|---|---|---|
| gate capacitance | $\dfrac{(1/\alpha)(1/\alpha)}{1/\alpha} = \dfrac{1}{\alpha}$ | $\dfrac{(1/\alpha^2)(1/\alpha)}{1/\alpha^2} = \dfrac{1}{\alpha}$ |
| junction/wiring capacitance | $\dfrac{(1/\alpha)(1/\alpha)}{1/\alpha} = \dfrac{1}{\alpha}$ | $\dfrac{(1/\alpha)(1/\alpha)}{1/\alpha^2} = 1$ |

Nodes loaded mainly by gates still speed up by $\alpha$, but nodes loaded by junctions and interconnect **stop getting faster**, because the current has dropped by $\alpha^2$ while their capacitance has dropped only by $\alpha$. In real circuits, where parasitic capacitance is a large part of the load, much of the speed benefit of scaling is lost.

### Step 5 — Threshold voltage and body effect

The threshold voltage is

$$V_{TH} = \phi_{MS} + 2\phi_F + \frac{Q_{dep}}{C_{ox}}, \qquad Q_{dep} = \sqrt{4q\epsilon_{si}|\phi_F|N_{sub}},$$

where $\phi_{MS}$ is the gate–substrate work-function difference, $\phi_F$ the bulk Fermi potential and $Q_{dep}$ the depletion charge per unit area.

- With $N_{sub} \to \alpha N_{sub}$, $Q_{dep}$ grows by about $\sqrt\alpha$ ($\phi_F$ changes only logarithmically).
- Ideal scaling: $Q_{dep}/C_{ox} \to \sqrt\alpha/\alpha = 1/\sqrt\alpha$, so this term shrinks.
- $t_{ox}$ fixed: $Q_{dep}/C_{ox} \to \sqrt\alpha/1 = \sqrt\alpha$, so this term **grows**.

So the higher substrate doping now pushes $V_{TH}$ *up* rather than down; scaling $V_{TH}$ by $1/\alpha$ requires a separate threshold-adjust implant.

The body-effect coefficient

$$\gamma = \frac{\sqrt{2q\epsilon_{si}N_{sub}}}{C_{ox}}$$

grows by $\sqrt\alpha$ (instead of falling by $\sqrt\alpha$ in ideal scaling): the bulk competes more strongly with the gate.

### Step 6 — Weaker gate control: subthreshold slope and short-channel effects

**Subthreshold slope.** The gate controls the surface potential through a capacitive divider between $C_{ox}$ and the depletion capacitance $C_d$, giving a slope factor $\zeta = 1 + C_d/C_{ox}$ and a subthreshold swing $S = 2.3\,\zeta kT/q$ per decade. The higher doping makes the depletion region thinner, so $C_d = \epsilon_{si}/W_{dep}$ increases, while $C_{ox}$ no longer does. $C_d/C_{ox}$ rises, $S$ gets worse (more mV per decade), and since $V_{TH}$ is lowered by $\alpha$, the off-state leakage at $V_{GS} = 0$ grows sharply.

**Short-channel effects.** The gate controls the channel through the oxide, the drain through the silicon. The channel length shrinks by $\alpha$ but the gate stays at the same distance $t_{ox}$ from the channel, so the drain's field reaches relatively farther into the channel compared with the gate's. A common measure is the scale length $\lambda \approx \sqrt{(\epsilon_{si}/\epsilon_{ox})\,t_{ox}W_{dep}}$; short-channel effects grow roughly as $e^{-L/2\lambda}$. With $W_{dep} \propto 1/\alpha$:

$$\text{ideal: } \lambda \to \sqrt{\frac{1}{\alpha}\cdot\frac{1}{\alpha}}\,\lambda = \frac{\lambda}{\alpha}, \qquad t_{ox}\text{ fixed: } \lambda \to \sqrt{1\cdot\frac{1}{\alpha}}\,\lambda = \frac{\lambda}{\sqrt\alpha}.$$

In ideal scaling $L/\lambda$ is unchanged; with $t_{ox}$ fixed it falls by $\sqrt\alpha$. Threshold roll-off, drain-induced barrier lowering (DIBL) and punch-through therefore become worse, and the output resistance $r_O$ degrades.

### Step 7 — Summary table

| Quantity | Ideal scaling | $t_{ox}$ not scaled |
|---|---|---|
| Oxide field $V/t_{ox}$ | 1 | $1/\alpha$ (safer) |
| $C_{ox}$ | $\alpha$ | 1 |
| $I_D$ | $1/\alpha$ | $1/\alpha^2$ |
| $g_m$ | 1 | $1/\alpha$ |
| Gate capacitance | $1/\alpha$ | $1/\alpha^2$ |
| Delay, junction/wire-loaded node | $1/\alpha$ | 1 |
| $Q_{dep}/C_{ox}$ term of $V_{TH}$ | $1/\sqrt\alpha$ | $\sqrt\alpha$ |
| Body-effect coefficient $\gamma$ | $1/\sqrt\alpha$ | $\sqrt\alpha$ |
| Gate control vs. drain ($L/\lambda$) | 1 | $1/\sqrt\alpha$ (worse) |

### Result

Keeping $t_{ox}$ constant makes the oxide field fall by $\alpha$, so breakdown is not an issue. But $C_{ox}$ no longer increases, and the device loses the benefits of scaling:

- the drive current falls by about $\alpha^2$ (instead of $\alpha$) and $g_m$ by about $\alpha$ (instead of staying constant), so nodes dominated by junction and wiring capacitance no longer speed up;
- the depletion term $Q_{dep}/C_{ox}$ of $V_{TH}$ and the body-effect coefficient $\gamma$ grow by $\sqrt\alpha$ instead of shrinking, so $V_{TH}$ needs separate adjustment;
- gate control weakens: the subthreshold slope worsens and short-channel effects ($V_{TH}$ roll-off, DIBL, punch-through, lower $r_O$) grow, because the gate is now relatively far from a much shorter channel.

That is why $t_{ox}$ must be scaled along with $L$, and why oxide breakdown (rather than convenience) sets the limit on how thin it can be made.

**Common mistake.** Claiming that the oxide breaks down, or that its field increases, in this scenario. The oxide thickness is kept while the voltages are divided by $\alpha$, so the field *decreases*; breakdown is the reason one might hesitate to thin the oxide, not a consequence of keeping it.

**Common mistake.** Stating vaguely that "the current scaling is not obtained" without the direction. Because $C_{ox}$ does not grow, the drive current and $g_m$ come out *smaller* than with ideal scaling, by a factor of $\alpha$.

**Common mistake.** Forgetting the threshold voltage and short-channel behaviour. The higher doping was meant to be balanced by a larger $C_{ox}$; without it, the depletion charge dominates $V_{TH}$ and $\gamma$, and the drain gains influence over the channel.
