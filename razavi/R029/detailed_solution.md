# Detailed solution - R029

**Approach.** $M_1$ (gate fixed at 2 V) connects $C_1$, charged to 3 V, to the empty $C_2$. Current flows from $C_1$ through $M_1$ into $C_2$, so $V_X$ falls and the source voltage $V_S$ rises, with total charge conserved. The transfer stops either when $M_1$ cuts off because $V_S$ has risen to $2\ \mathrm{V} - V_{TH}$, or when $V_X$ and $V_S$ become equal first. Find the initial current, the condition that separates the two cases and the final voltages, including the body effect.

### Step 1 — Charge conservation

Call the source node (top plate of $C_2$) S; with the bulk grounded, $V_{SB} = V_S$. The current leaving $C_1$ passes through $M_1$ and arrives on $C_2$:

$$I_X = -C_1\frac{dV_X}{dt} = C_2\frac{dV_S}{dt} .$$

Integrating from $t = 0$, the charge removed from $C_1$ equals the charge added to $C_2$:

$$C_1\,(3 - V_X) = C_2\,V_S \quad\Longrightarrow\quad V_X = 3 - \frac{C_2}{C_1}V_S .$$

With $r = C_2/C_1$ and the body effect,

$$V_{TH}(V_S) = 0.7 + 0.45\left(\sqrt{0.9 + V_S} - 0.9487\right)\ \mathrm{V}.$$

### Step 2 — Initial current

At $t = 0^+$: $V_X = 3$ V, $V_S = 0$, $V_{GS} = 2$ V, $V_{DS} = 3$ V and $V_{TH} = 0.7$ V. $V_{DS} = 3\ \mathrm{V} > V_{ov} = 1.3$ V, so $M_1$ is **saturated** and the current jumps from zero to

$$I_X(0^+) = \tfrac12\beta\,(2 - 0.7)^2 = \tfrac12\beta\,(1.3\ \mathrm{V})^2 = 0.845\,\beta\ \mathrm{V^2}.$$

### Step 3 — How the current evolves

As charge moves, $V_{GS} = 2 - V_S$ falls, $V_{TH}(V_S)$ rises (the source climbs above the grounded bulk), and in triode $V_{DS} = V_X - V_S$ also shrinks. So **$I_X$ decreases monotonically from $0.845\beta$ to zero**, faster than with a constant threshold. $M_1$ is saturated while

$$V_X - V_S \ge 2 - V_S - V_{TH} \quad\Longleftrightarrow\quad V_X \ge 2 - V_{TH}(V_S).$$

### Step 4 — The cut-off level of the source

If $M_1$ stays saturated, it conducts until $V_{GS}$ drops to $V_{TH}$:

$$2 - V_S = V_{TH}(V_S) = 0.7 + 0.45\sqrt{0.9 + V_S} - 0.4269 .$$

With $u = \sqrt{0.9 + V_S}$:

$$
\begin{aligned}
2 - (u^2 - 0.9) &= 0.2731 + 0.45u\\
u^2 + 0.45u - 2.6269 &= 0\\
u &= \frac{-0.45 + \sqrt{0.2025 + 10.5076}}{2} = \frac{-0.45 + 3.2726}{2} = 1.4113\\
V_{S,\mathrm{off}} &= u^2 - 0.9 = 1.9918 - 0.9 = 1.09\ \mathrm{V}.
\end{aligned}
$$

There $V_{TH} = 0.91$ V (without body effect, $2 - 0.7 = 1.3$ V). In saturation the current vanishes as the *square* of the shrinking overdrive, so this level is approached **asymptotically**, with a slow (hyperbolic, $\propto 1/t$) tail, like a source follower charging a capacitor.

### Step 5 — Which way it ends: the capacitor ratio

**Case 1: $M_1$ cuts off while saturated.** At cut-off $V_S = 1.09$ V, and charge conservation gives

$$V_{X,\mathrm{final}} = 3 - 1.09\,r\ \mathrm{V}.$$

For consistency $M_1$ must still be saturated there, $V_X \ge 2 - V_{TH}(1.09) = 1.09$ V:

$$
\begin{aligned}
3 - 1.09\,r &\ge 1.09\\
r &\le \frac{3 - 1.09}{1.09} = 1.75 .
\end{aligned}
$$

(Checking the end point suffices: $V_X - [2 - V_{TH}(V_S)]$ is a concave function of $V_S$, so if it is positive at $V_S = 0$ and at $V_S = 1.09$ V it is positive in between.) So for **$C_2 < 1.75\,C_1$**, $V_S \to 1.09$ V and $V_X \to 3 - 1.09\,C_2/C_1$, with $M_1$ just cut off and $V_X$ still above $V_S$.

**Case 2: the two nodes equalize.** For **$C_2 > 1.75\,C_1$**, $V_X$ meets $V_S$ before $V_S$ reaches 1.09 V. $M_1$ enters triode and conducts until $V_{DS} = 0$, i.e. $V_X = V_S = V_f$, which is ordinary charge sharing:

$$
\begin{aligned}
C_1\,(3 - V_f) &= C_2V_f\\
V_f &= \frac{3C_1}{C_1 + C_2} .
\end{aligned}
$$

Check: $V_f < 1.09$ V exactly when $3/(1 + r) < 1.09$, i.e. $r > 1.75$, so $M_1$ is still on ($V_{GS} = 2 - V_f > V_{TH}(V_f)$) when the nodes meet. The approach is an exponential-like triode tail.

### Step 6 — Two examples

Take $\beta = 1\ \mathrm{mA/V^2}$ and $C_1 = 1$ pF, so the initial current is 0.845 mA and the natural time scale is $C_1/(\beta\cdot1\ \mathrm{V}) = 1$ ns.

**$C_2 = C_1$ ($r = 1$, Case 1).** Final $V_S = 1.09$ V and $V_X = 3 - 1.09 = 1.91$ V.

| $t$ (ns) | $V_X$ (V) | $V_S$ (V) | $I_X$ (mA) |
|---|---|---|---|
| 0⁺ | 3.00 | 0 | 0.845 |
| 0.5 | 2.70 | 0.30 | 0.43 |
| 1 | 2.53 | 0.47 | 0.27 |
| 2 | 2.34 | 0.66 | 0.13 |
| 5 | 2.14 | 0.86 | 0.036 |
| 20 | 1.98 | 1.02 | 0.003 |
| ∞ | 1.91 | 1.09 | 0 |

**$C_2 = 3C_1$ ($r = 3$, Case 2).** $V_f = 3/(1 + 3) = 0.75$ V. $M_1$ leaves saturation after about 4.7 ns ($V_X \approx 1.2$ V, $V_S \approx 0.6$ V), and both nodes settle at 0.75 V within about 20 ns while $I_X$ decays to zero.

### Result

$M_1$ transfers charge from $C_1$ to $C_2$, with $C_1(3 - V_X) = C_2V_S$.

- $I_X$ jumps to $\tfrac12\beta(2 - 0.7)^2 = 0.845\beta$ at $t = 0^+$ (saturation, $V_{GS} = 2$ V, $V_{TH} = 0.7$ V at $V_S = 0$) and **decreases monotonically to zero**. The body effect ($V_{SB} = V_S$) speeds up the decay.
- $V_X$ falls from 3 V while $V_S$ rises from 0.
- **Case 1, $C_2 < 1.75\,C_1$:** $M_1$ stays saturated and turns off as $V_S \to 2 - V_{TH}(V_S) = 1.09$ V (asymptotically, with a square-law tail; 1.3 V without body effect). Final $V_X = 3 - 1.09\,C_2/C_1$ V.
- **Case 2, $C_2 > 1.75\,C_1$:** $V_X$ drops to $V_S$ first; $M_1$ ends in triode with $V_{DS} \to 0$, and both nodes settle at $3C_1/(C_1 + C_2)$ (simple charge sharing).

**Common mistake.** Letting $C_1$ discharge to 0 V, as if the source of $M_1$ were grounded. The source is node S on $C_2$, which charges up, and charge conservation fixes the final voltages.

**Common mistake.** Always predicting charge sharing, or always predicting cut-off at 1.09 V. Which mechanism stops the transfer depends on $C_2/C_1$ compared with 1.75.

**Common mistake.** Drawing $I_X$ growing with time. $V_{GS}$ falling, $V_{TH}$ rising and $V_{DS}$ shrinking all reduce the current, so its maximum is at $t = 0^+$.
