# Detailed solution - R664

**Approach.** For each quantity that constant-field scaling controls (oxide field, $C_{ox}$, drain current, transconductance, capacitances and delay, threshold voltage, gate control), compare its scaling factor under ideal scaling with the factor obtained when $t_{ox}$ is held constant. The oxide becomes *safer*, but the device loses most of the benefits of a thinner oxide.

### Step 1 — Reference: what ideal scaling keeps constant

Ideal scaling divides $t_{ox}$ and the voltages by the same $\alpha$, so the oxide field $E_{ox} \approx V_{GS}/t_{ox}$ changes by $(1/\alpha)/(1/\alpha) = 1$, i.e. it is unchanged, and

$$C_{ox} = \frac{\epsilon_{ox}}{t_{ox}}$$

rises by $\alpha$. Here $t_{ox}$ is the only quantity left unscaled.

### Step 2 — Oxide field: breakdown is no longer a concern

$$E_{ox} \approx \frac{V_{GS}}{t_{ox}} \;\longrightarrow\; \frac{V_{GS}/\alpha}{t_{ox}} = \frac{E_{ox}}{\alpha}.$$

The oxide field **falls by $\alpha$**, so breakdown is no problem at all: the oxide is simply thicker than it needs to be. The cost appears in everything that depends on $C_{ox}$.

### Step 3 — Oxide capacitance, drain current and transconductance

$C_{ox} = \epsilon_{ox}/t_{ox}$ stays **constant** instead of rising by $\alpha$. In

$$I_D = \frac12\,\mu C_{ox}\,\frac{W}{L}\,(V_{GS} - V_{TH})^2$$

(mobility taken constant), $W/L$ is unchanged ($(1/\alpha)/(1/\alpha) = 1$), $(V_{GS} - V_{TH})^2$ scales as $(1/\alpha)^2 = 1/\alpha^2$ (assuming $V_{TH}$ can still be brought down by $\alpha$; see Step 5), and $C_{ox}$ scales by $\alpha$ ideally but by 1 here:

$$\text{ideal: } I_D \to \alpha\cdot1\cdot\frac{1}{\alpha^2}\,I_D = \frac{I_D}{\alpha}, \qquad t_{ox}\text{ fixed: } I_D \to 1\cdot1\cdot\frac{1}{\alpha^2}\,I_D = \frac{I_D}{\alpha^2}.$$

The drive current drops by $\alpha^2$ instead of $\alpha$. Likewise, with $g_m = \mu C_{ox}(W/L)(V_{GS} - V_{TH})$,

$$\text{ideal: } g_m \to \alpha\cdot1\cdot\frac{1}{\alpha}\,g_m = g_m, \qquad t_{ox}\text{ fixed: } g_m \to 1\cdot1\cdot\frac{1}{\alpha}\,g_m = \frac{g_m}{\alpha}.$$

$g_m$ falls by $\alpha$ instead of staying constant; for example, the input impedance $1/g_m$ of a common-gate stage rises by $\alpha$, and the intrinsic gain $g_mr_O$ suffers as well.

### Step 4 — Capacitances and speed

**Gate capacitance** $C_G \approx WLC_{ox}$:

$$\text{ideal: } \frac{1}{\alpha}\cdot\frac{1}{\alpha}\cdot\alpha = \frac{1}{\alpha}, \qquad t_{ox}\text{ fixed: } \frac{1}{\alpha}\cdot\frac{1}{\alpha}\cdot1 = \frac{1}{\alpha^2}.$$

**Junction and wiring capacitances** do not involve $t_{ox}$ and still scale roughly by $1/\alpha$ (for junctions, area $1/\alpha^2$ times capacitance per area $\alpha$).

**Delay** $\tau \approx CV_{DD}/I_D$:

| Node dominated by | Ideal scaling | $t_{ox}$ fixed |
|---|---|---|
| gate capacitance | $\dfrac{(1/\alpha)(1/\alpha)}{1/\alpha} = \dfrac{1}{\alpha}$ | $\dfrac{(1/\alpha^2)(1/\alpha)}{1/\alpha^2} = \dfrac{1}{\alpha}$ |
| junction/wiring capacitance | $\dfrac{(1/\alpha)(1/\alpha)}{1/\alpha} = \dfrac{1}{\alpha}$ | $\dfrac{(1/\alpha)(1/\alpha)}{1/\alpha^2} = 1$ |

Gate-loaded nodes still speed up by $\alpha$, but nodes loaded by junctions and interconnect **stop getting faster**: the current has dropped by $\alpha^2$ while their capacitance has dropped only by $\alpha$. Since parasitics are a large part of real loads, much of the speed benefit of scaling is lost.

### Step 5 — Threshold voltage and body effect

$$V_{TH} = \phi_{MS} + 2\phi_F + \frac{Q_{dep}}{C_{ox}}, \qquad Q_{dep} = \sqrt{4q\epsilon_{si}|\phi_F|N_{sub}}.$$

- With $N_{sub} \to \alpha N_{sub}$, $Q_{dep}$ grows by about $\sqrt\alpha$ ($\phi_F$ changes only logarithmically).
- Ideal scaling: $Q_{dep}/C_{ox} \to \sqrt\alpha/\alpha = 1/\sqrt\alpha$, so this term shrinks.
- $t_{ox}$ fixed: $Q_{dep}/C_{ox} \to \sqrt\alpha/1 = \sqrt\alpha$, so this term **grows**.

The higher substrate doping now pushes $V_{TH}$ *up*; scaling $V_{TH}$ by $1/\alpha$ requires a separate threshold-adjust implant. The body-effect coefficient

$$\gamma = \frac{\sqrt{2q\epsilon_{si}N_{sub}}}{C_{ox}}$$

grows by $\sqrt\alpha$ (instead of falling by $\sqrt\alpha$): the bulk competes more strongly with the gate.

### Step 6 — Weaker gate control: subthreshold slope and short-channel effects

**Subthreshold slope.** The slope factor is $\zeta = 1 + C_d/C_{ox}$ and the swing $S = 2.3\,\zeta kT/q$ per decade. The higher doping thins the depletion region, so $C_d = \epsilon_{si}/W_{dep}$ increases while $C_{ox}$ does not: $C_d/C_{ox}$ rises, $S$ gets worse, and with $V_{TH}$ lowered by $\alpha$ the off-state leakage at $V_{GS} = 0$ grows sharply.

**Short-channel effects.** $L$ shrinks by $\alpha$ but the gate stays at the same distance $t_{ox}$ from the channel, so the drain's field reaches relatively farther into the channel. With the scale length $\lambda \approx \sqrt{(\epsilon_{si}/\epsilon_{ox})\,t_{ox}W_{dep}}$ (short-channel effects grow roughly as $e^{-L/2\lambda}$) and $W_{dep} \propto 1/\alpha$:

$$\text{ideal: } \lambda \to \sqrt{\frac{1}{\alpha}\cdot\frac{1}{\alpha}}\,\lambda = \frac{\lambda}{\alpha}, \qquad t_{ox}\text{ fixed: } \lambda \to \sqrt{1\cdot\frac{1}{\alpha}}\,\lambda = \frac{\lambda}{\sqrt\alpha}.$$

$L/\lambda$ is unchanged under ideal scaling but falls by $\sqrt\alpha$ with $t_{ox}$ fixed, so threshold roll-off, drain-induced barrier lowering (DIBL) and punch-through become worse, and $r_O$ degrades.

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

**Common mistake.** Claiming that the oxide breaks down, or that its field increases. The thickness is kept while the voltages are divided by $\alpha$, so the field *decreases*.

**Common mistake.** Stating vaguely that "the current scaling is not obtained" without the direction. Because $C_{ox}$ does not grow, $I_D$ and $g_m$ come out *smaller* than with ideal scaling, by a factor of $\alpha$.

**Common mistake.** Forgetting the threshold voltage and short-channel behaviour. The higher doping was meant to be balanced by a larger $C_{ox}$; without it, the depletion charge dominates $V_{TH}$ and $\gamma$, and the drain gains influence over the channel.
