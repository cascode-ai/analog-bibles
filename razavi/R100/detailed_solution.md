# Detailed solution - R100

**Approach:** The output is the *source* of $M_2$, a follower of the fixed $V_{b1}$ biased by the current source $M_1$; the input PMOS $M_3$ only supplies the current from above. Find the plateau where the output does not depend on $V_{in}$, find where it ends (the earlier of two conditions), and follow the output down to zero at $V_{in} = V_{DD} - |V_{THP}|$.

### Step 1 — The key quantities

![V_out versus V_in](/q/R100/solution-transfer.svg)

Call the drain node of $M_3$ and $M_2$ node $D$. All three transistors carry the same current $I$ ($\lambda = 0$), and $M_2$ has $V_{SB2} = V_{out}$.

Current of $M_1$ when saturated ($V_{out} \ge V_{b2} - 0.7$ V):

$$I_1 = \frac12\beta_1(V_{b2} - 0.7)^2 .$$

$M_3$ has $V_{SG3} = 3 - V_{in}$; it is on for $V_{in} < 2.2$ V, with saturation current $\frac12\beta_3(2.2 - V_{in})^2$ and saturation condition $V_{SD3} \ge 2.2 - V_{in}$.

$M_2$ is saturated when $V_D \ge V_{b1} - V_{TH2}(V_{out})$.

### Step 2 — Small $V_{in}$: a flat plateau

For small $V_{in}$, $M_3$ could supply far more than $I_1$, so the current is set by $M_1$, $I = I_1$, and $M_3$ is in triode with a small $V_{SD3}$: node $D$ sits just below $V_{DD}$.

$M_2$ then carries the fixed current $I_1$ with its gate at the fixed $V_{b1}$. In saturation, $V_{GS2} = V_{TH2} + \sqrt{2I_1/\beta_2}$, so

$$V_{out} = V_0 = V_{b1} - V_{TH2}(V_0) - \sqrt{\frac{2I_1}{\beta_2}} ,$$

independent of $V_{in}$: a horizontal line. (This assumes $V_0 > V_{b2} - 0.7$ V, so that $M_1$ is indeed saturated.) The input only changes the drop across $M_3$, i.e. where node $D$ sits.

### Step 3 — How node $D$ moves, and the two ways the plateau can end

As $V_{in}$ rises, $M_3$'s gate drive falls, so it needs a larger $V_{SD3}$ to pass $I_1$:

$$I_1 = \beta_3\left[(2.2 - V_{in})V_{SD3} - \tfrac12V_{SD3}^2\right], \qquad V_D = V_{DD} - V_{SD3} .$$

$V_D$ therefore falls. The plateau lasts as long as both:

1. $M_2$ has headroom: $V_D \ge V_{b1} - V_{TH2}(V_0)$, so that $M_2$ stays saturated; and
2. $M_3$ can still deliver $I_1$: its saturation current $\frac12\beta_3(2.2 - V_{in})^2 \ge I_1$, i.e.
$$V_{in} \le V_{in}^* = 2.2 - \sqrt{\frac{2I_1}{\beta_3}} = 2.2 - (V_{b2} - 0.7)\sqrt{\frac{\beta_1}{\beta_3}} .$$

At $V_{in}^*$, $M_3$ is exactly at its triode/saturation edge, so $V_D(V_{in}^*) = V_{DD} - \sqrt{2I_1/\beta_3}$. Whichever condition fails first ends the plateau.

### Step 4 — Case (a): the plateau ends at $V_{in}^*$ (vertical drop)

If $V_D$ is still above $V_{b1} - V_{TH2}$ when $V_{in}$ reaches $V_{in}^*$, the plateau ends because $M_3$ becomes current-limited. At $V_{in}^*$, $M_3$ and $M_1$ are two saturated current sources carrying the same current, and with $\lambda = 0$ nothing in between sets the voltage: the gain is unbounded and $V_{out}$ drops vertically at $V_{in}^*$, down to $V_{b2} - 0.7$ V, where $M_1$ leaves saturation. On the way, $M_2$ (whose $V_{GS}$ grows as $V_{out}$ falls) enters triode and $V_D$ collapses toward $V_{out}$.

Beyond $V_{in}^*$, $M_3$ is saturated and sets the current, $I = \frac12\beta_3(2.2 - V_{in})^2 < I_1$. $M_1$ (and $M_2$) are in triode, and the output follows from $M_1$'s triode equation:

$$\frac12\beta_3(2.2 - V_{in})^2 = \beta_1\left[(V_{b2} - 0.7)V_{out} - \tfrac12V_{out}^2\right],$$

which falls smoothly from $V_{b2} - 0.7$ V at $V_{in}^*$ to 0 at $V_{in} = 2.2$ V.

### Step 5 — Case (b): the plateau ends by loss of headroom (gradual decline)

If $V_D$ drops below $V_{b1}-V_{TH2}(V_0)$ before $V_{in}^*$, $M_2$ enters triode at $I=I_1$ and $V_{out}$ starts to decline continuously. To check whether that decline removes the jump, set $s=V_{b2}-0.7\ \mathrm{V}$ and evaluate $M_2$ at $V_{out}=s$ and $D^*=V_D(V_{in}^*)$ from Step 3. With $u_2=V_{b1}-s-V_{TH2}(s)$ and $d_2=D^*-s$, the trial current in the triode region is $\beta_2(u_2d_2-d_2^2/2)$ for $0<d_2<u_2$. Use the saturation current $\beta_2u_2^2/2$ if $d_2\ge u_2>0$. If $d_2\le0$, node $D$ cannot sustain a forward current at this trial output.

If the trial current exceeds $I_1$, the fixed-current branch still has $V_{out}>s$ just below $V_{in}^*$, and the output jumps from that value to $s$ at the match. If the trial current is at most $I_1$, or $D^*\le s$, the branch reaches $s$ by the match and the jump has zero height. When it reaches $s$ earlier, $M_1$ enters triode and the current drops below $I_1$ before the match.

### Step 6 — $V_{in} \ge 2.2$ V: $M_3$ off

For $V_{in} \ge V_{DD} - |V_{THP}| = 2.2$ V, $M_3$ is off and no current flows. $M_1$, whose gate is biased on, pulls the output to ground with zero current:

$$V_{out} = 0\qquad (V_{in} \ge 2.2\ \mathrm{V}).$$

### Step 7 — A numerical example

For illustration take $V_{b1} = 2.0$ V, $V_{b2} = 1.0$ V, $\beta_1 = \beta_2 = 2\ \mathrm{mA/V^2}$, $\beta_3 = 1\ \mathrm{mA/V^2}$:

$$
\begin{aligned}
I_1 &= \tfrac12(2\ \mathrm{mA/V^2})(0.3\ \mathrm{V})^2 = 90\ \mu\mathrm{A},\qquad \sqrt{2I_1/\beta_2} = 0.3\ \mathrm{V},\\
V_0 + V_{TH2}(V_0) &= 2.0 - 0.3 = 1.7\ \mathrm{V} \;\Rightarrow\; V_0 = 0.834\ \mathrm{V}\ \ (V_{TH2} = 0.866\ \mathrm{V}),\\
V_{in}^* &= 2.2 - \sqrt{2(90\ \mu\mathrm{A})/(1\ \mathrm{mA/V^2})} = 2.2 - 0.424 = 1.776\ \mathrm{V},\\
V_D(V_{in}^*) &= 3 - 0.424 = 2.576\ \mathrm{V} > V_{b1} - V_{TH2} = 1.134\ \mathrm{V}.
\end{aligned}
$$

$M_2$ still has headroom at $V_{in}^*$, so this is case (a). $V_0 = 0.834$ V $> V_{b2} - 0.7 = 0.3$ V, so $M_1$ is saturated on the plateau.

After the drop, e.g. at $V_{in} = 2.0$ V: $\frac12(1\ \mathrm{mA/V^2})(0.2)^2 = 20\ \mu\mathrm{A} = (2\ \mathrm{mA/V^2})[0.3V_{out} - 0.5V_{out}^2]$, i.e. $V_{out}^2 - 0.6V_{out} + 0.02 = 0$, so $V_{out} = (0.6 - \sqrt{0.28})/2 = 0.035$ V.

| $V_{in}$ (V) | $V_{out}$ (V) | $V_D$ (V) | $M_3$ | $M_2$ | $M_1$ |
|---|---|---|---|---|---|
| 0 | 0.834 | 2.959 | triode | sat | sat |
| 1.5 | 0.834 | 2.857 | triode | sat | sat |
| 1.776 | 0.834 → 0.300 | 2.576 → ≈ 0.3 | sat | → triode | → triode |
| 1.8 | 0.200 | 0.239 | sat | triode | triode |
| 1.9 | 0.088 | 0.107 | sat | triode | triode |
| 2.0 | 0.035 | 0.043 | sat | triode | triode |
| ≥ 2.2 | 0 | 0 | off | — | — |

### Result

$V_{out}$ is flat (independent of $V_{in}$) at the level set by the follower $M_2$, then falls once $M_3$ can no longer keep $M_2$'s drain high enough or supply $I_1 = \tfrac12\beta_1(V_{b2} - 0.7)^2$. It reaches 0 V at $V_{in} = V_{DD} - |V_{THP}| = 2.2$ V and stays at 0 V beyond.

- Small $V_{in}$: $M_3$ is strongly on (triode) and its drain $D$ is near $V_{DD}$; $M_2$ is a saturated source follower carrying $I_1$: $V_{out} = V_0 = V_{b1} - V_{TH2}(V_0) - \sqrt{2I_1/\beta_2}$, independent of $V_{in}$ (assuming $V_0 > V_{b2} - 0.7$ V so $M_1$ is saturated).
- As $V_{in}$ rises, $M_3$ needs a larger $V_{SD}$ to pass $I_1$ and $V_D$ falls. The plateau holds while $V_D \ge V_{b1} - V_{TH2}$ ($M_2$ saturated) and $M_3$ can still deliver $I_1$ ($\tfrac12\beta_3(2.2 - V_{in})^2 \ge I_1$).
- With $\lambda = 0$, a vertical drop at $V_{in}^* = 2.2 - (V_{b2}-0.7)\sqrt{\beta_1/\beta_3}$ occurs if the output just before the match still exceeds $V_{b2}-0.7$ V. The drop ends at that boundary. If a continuous decline reaches the boundary by the match, the jump has zero height. On the branch where $M_3$ is saturated and $M_1$ is in triode, $\tfrac12\beta_3(2.2-V_{in})^2=\beta_1[(V_{b2}-0.7)V_{out}-V_{out}^2/2]$.
- $V_{in} \ge 2.2$ V: $M_3$ off, no current, $V_{out} = 0$.
- Transition points: end of the plateau ($V_D = V_{b1} - V_{TH2}$ or $V_{in} = 2.2 - \sqrt{2I_1/\beta_3}$, whichever comes first), $V_{out} = V_{b2} - 0.7$ V, $V_{in} = 2.2$ V.

**Common mistake:** Treating $M_2$ as a cascode with the output at its drain, which gives a high-gain inverting curve from the start. The output is $M_2$'s *source* and its gate is fixed, so the output stays flat while $M_2$ and $M_1$ are saturated.

**Common mistake:** Drawing the output rising (or falling) with $V_{in}$ throughout. On the plateau $V_{in}$ only changes the drop across $M_3$; the current is set by $M_1$ and the output by $V_{b1} - V_{GS2}(I_1)$.

**Common mistake:** Leaving a nonzero output above $V_{in} = 2.2$ V. Once $M_3$ is off nothing feeds the stack, and $M_1$ (biased on) pulls $V_{out}$ to 0 V.
