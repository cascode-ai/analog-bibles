# Detailed solution - R096

**Approach.** $M_1$ is a common-gate (CG) device: its gate is held at $V_{b1}$ and the input reaches its source through $R_S$. Its load is the PMOS current source $M_2$. The same current flows through $M_2$, $M_1$ and $R_S$, so the two transistors behave like two current sources in series: whichever can carry *less* current sets the current and stays saturated, and the other is forced into triode. We find which device "wins" in each range of $V_{in}$, the input $V_{in}^*$ at which they tie (where the gain is huge), and the end points.

### Step 1 — The circuit and the region boundaries

From the figure: $M_2$ (PMOS) has source at $V_{DD} = 3$ V, gate at $V_{b2}$, drain at $V_{out}$. $M_1$ (NMOS) has gate at $V_{b1}$, drain at $V_{out}$, and source at node $S$, which is connected to $V_{in}$ through $R_S$; the bulk of $M_1$ is at ground.

The same current $I$ flows from $V_{DD}$ through $M_2$, $M_1$ and $R_S$ into the input source, so

$$V_S = V_{in} + IR_S, \qquad V_{GS1} = V_{b1} - V_S, \qquad V_{SB1} = V_S ,$$

and the threshold of $M_1$ includes the body effect:

$$V_{TH1} = V_{TH}(V_S) = 0.7 + 0.45\left(\sqrt{0.9 + V_S} - \sqrt{0.9}\right)\ \mathrm{V}.$$

No $\lambda$ is given; we first take $\lambda = 0$ and discuss $\lambda > 0$ at the end.

**$M_2$** has a fixed gate drive $V_{SG2} = V_{DD} - V_{b2}$. Its saturation current is

$$I_2 = \frac12\beta_2(V_{DD} - V_{b2} - 0.8)^2 ,$$

and it is saturated when $V_{SD2} \ge V_{SG2} - 0.8$, i.e. **$V_{out} \le V_{b2} + 0.8$ V** (triode above that).

**$M_1$** is saturated when $V_{DS1} \ge V_{GS1} - V_{TH1}$, i.e. $V_{out} - V_S \ge V_{b1} - V_S - V_{TH1}$, or **$V_{out} \ge V_{b1} - V_{TH1}$** (triode below that).

### Step 2 — The current that $M_1$ can carry

In saturation $M_1$ carries

$$I_{1,sat} = \frac12\beta_1\left(V_{b1} - V_S - V_{TH}(V_S)\right)^2, \qquad V_S = V_{in} + IR_S .$$

Raising $V_{in}$ raises $V_S$, which both reduces $V_{GS1}$ and raises $V_{TH1}$. So **$M_1$'s current capability falls as $V_{in}$ rises**, while $M_2$'s capability $I_2$ is fixed. The two capabilities cross at one input voltage $V_{in}^*$.

### Step 3 — Low $V_{in}$: $M_1$ in triode, output tracking the input

For $V_{in} < V_{in}^*$, $M_1$ could carry more than $I_2$. The series current cannot exceed what $M_2$ supplies, so

- $I = I_2$, and $M_2$ is saturated;
- $M_1$ is pushed into **triode** with a small $V_{DS1}$, just large enough to carry $I_2$:
$$I_2 = \beta_1\left[(V_{b1} - V_S - V_{TH1})V_{DS1} - \tfrac12V_{DS1}^2\right], \qquad V_S = V_{in} + I_2R_S .$$

The output is

$$V_{out} = V_S + V_{DS1} = V_{in} + I_2R_S + V_{DS1} .$$

The output is **low and tracks the input**. Its slope is $1 + dV_{DS1}/dV_{in}$, a little above 1. As $V_{in}$ rises, $M_1$'s overdrive shrinks, so it needs a larger $V_{DS1}$ to carry the same $I_2$. The slope therefore keeps increasing, and $V_{DS1}$ grows rapidly as $M_1$ approaches the edge of saturation.

### Step 4 — The transition at $V_{in}^*$: a vertical jump

At $V_{in}^*$, $M_1$'s saturation current equals $I_2$, so both devices can be saturated at once. With $I = I_2$ and $V_S^* = V_{in}^* + I_2R_S$:

$$
\begin{aligned}
\tfrac12\beta_1\left(V_{b1} - V_S^* - V_{TH1}\right)^2 &= I_2\\
V_{b1} - V_S^* - V_{TH1} &= \sqrt{2I_2/\beta_1}\\
V_{in}^* &= V_{b1} - V_{TH1} - \sqrt{\frac{2I_2}{\beta_1}} - I_2R_S ,
\end{aligned}
$$

with $V_{TH1} = V_{TH}(V_S^*)$ evaluated at $V_S^* = V_{b1} - V_{TH1} - \sqrt{2I_2/\beta_1}$ (an implicit equation, solved in one or two iterations).

**Gain at the transition.** With both devices saturated and $\lambda = 0$, the output node sits between two *ideal* current sources: the resistance seen at the output is infinite, and so is the gain of this CG stage. The curve is **vertical** at $V_{in}^*$. The output jumps from the edge of $M_1$'s saturation, $V_{out} \approx V_{b1} - V_{TH1}$, to the edge of $M_2$'s saturation, $V_{out} \approx V_{b2} + 0.8$ V.

**With $\lambda > 0$** the jump becomes a very steep segment of finite slope. The small-signal gain is $G_m(R_{out1}\|r_{O2})$ with $G_m \approx (g_{m1} + g_{mb1})/[1 + (g_{m1} + g_{mb1})R_S]$, where $R_{out1} = r_{O1} + [1 + (g_{m1} + g_{mb1})r_{O1}]R_S$ is the output resistance of the degenerated CG device. For $(g_{m1} + g_{mb1})R_S \gg 1$ this is about $r_{O2}/R_S$.

**Condition for this picture.** Both devices can be saturated together only if $V_{b1} - V_{TH1} < V_{b2} + 0.8$ V. If instead $V_{b1} - V_{TH1} > V_{b2} + 0.8$ V, there is no jump: the output passes continuously, with a finite slope, through a range in which both transistors are in triode.

### Step 5 — High $V_{in}$: $M_2$ in triode, output near $V_{DD}$

For $V_{in} > V_{in}^*$, $M_1$ cannot carry $I_2$. Now $M_1$ is saturated and sets the current $I = I_{1,sat} < I_2$, and $M_2$ is pushed into **triode** with a small source–drain voltage:

$$I_{1,sat} = \beta_2\left[(V_{DD} - V_{b2} - 0.8)(V_{DD} - V_{out}) - \tfrac12(V_{DD} - V_{out})^2\right].$$

$V_{out}$ is close to $V_{DD}$ and approaches it as the current falls with increasing $V_{in}$.

**Cutoff of $M_1$.** With zero current, $V_S = V_{in}$, so $M_1$ turns off when $V_{b1} - V_{in} = V_{TH}(V_{in})$. With $u = \sqrt{0.9 + V_{in}}$, this becomes $u^2 + 0.45u - (V_{b1} + 0.6269) = 0$, giving $V_{in,off} = u^2 - 0.9$. Beyond this point no current flows and **$V_{out} = V_{DD}$** exactly ($M_2$ in triode with $V_{SD2} = 0$).

**Special cases.** If $V_{in}^* < 0$ (large $I_2$), the output is high over the whole sweep; if $V_{in}^* > 3$ V, it stays in the low, tracking region.

### Step 6 — A numerical example

For illustration take $V_{b1} = 2.0$ V, $V_{b2} = 1.5$ V, $\beta_1 = 2\ \mathrm{mA/V^2}$, $\beta_2 = 1\ \mathrm{mA/V^2}$, $R_S = 1\ \mathrm{k}\Omega$.

$$
\begin{aligned}
I_2 &= \tfrac12(1\ \mathrm{mA/V^2})(3 - 1.5 - 0.8)^2\ \mathrm{V^2} = 0.245\ \mathrm{mA},\\
\sqrt{2I_2/\beta_1} &= \sqrt{0.245\ \mathrm{V^2}} = 0.495\ \mathrm{V},\qquad I_2R_S = 0.245\ \mathrm{V}.
\end{aligned}
$$

**$V_{in}^*$.** Solve $V_S^* + V_{TH}(V_S^*) = 2.0 - 0.495 = 1.505$ V. Trying $V_S^* = 0.668$ V: $V_{TH} = 0.7 + 0.45(\sqrt{1.568} - 0.9487) = 0.837$ V and $0.668 + 0.837 = 1.505$ V. ✓ So

$$V_{in}^* = V_S^* - I_2R_S = 0.668 - 0.245 = 0.423\ \mathrm{V}.$$

The jump goes from $V_{b1} - V_{TH1} = 2.0 - 0.837 = 1.163$ V up to $V_{b2} + 0.8 = 2.3$ V, and $1.163 < 2.3$, so the jump picture applies.

**Start ($V_{in} = 0$).** $V_S = 0.245$ V, $V_{TH1} = 0.7 + 0.45(\sqrt{1.145} - 0.9487) = 0.755$ V, overdrive $2.0 - 0.245 - 0.755 = 1.000$ V. Triode: $2\ \mathrm{mA/V^2}\,[1.000\,V_{DS1} - \frac12V_{DS1}^2] = 0.245$ mA gives $V_{DS1}^2 - 2.000V_{DS1} + 0.245 = 0$, so $V_{DS1} = 0.131$ V and $V_{out} = 0.245 + 0.131 = 0.376$ V.

**Cutoff.** $u^2 + 0.45u - 2.627 = 0$ gives $u = 1.411$ and $V_{in,off} = 1.991 - 0.9 = 1.09$ V.

| $V_{in}$ (V) | $V_{out}$ (V) | Current (mA) | $M_1$ | $M_2$ | Slope |
|---|---|---|---|---|---|
| 0 | 0.376 | 0.245 | triode | sat | 1.18 |
| 0.2 | 0.628 | 0.245 | triode | sat | 1.38 |
| 0.4 | 1.000 | 0.245 | triode | sat | 3.5 |
| 0.423 | 1.163 → 2.300 | 0.245 | sat | sat | vertical |
| 0.5 | 2.584 | 0.205 | sat | triode | 1.8 |
| 0.6 | 2.725 | 0.155 | sat | triode | 1.1 |
| 0.8 | 2.895 | 0.068 | sat | triode | 0.64 |
| 1.09 | 3.000 | 0 | cutoff | triode ($V_{SD} = 0$) | 0 |
| 3.0 | 3.000 | 0 | off | — | 0 |

### Result

A **non-inverting** common-gate characteristic with a current-source load: $V_{out}$ is low and tracks $V_{in}$ for small $V_{in}$, rises abruptly (with very high gain) around one input level $V_{in}^*$, and is near $V_{DD}$ above it. With $I_2 = \tfrac12\beta_2(V_{DD} - V_{b2} - 0.8)^2$:

- **$V_{in} < V_{in}^*$:** $M_1$ could carry more than $I_2$, so the current is $I_2$ ($M_2$ saturated) and $M_1$ is in triode. $V_{out} = V_{in} + I_2R_S + V_{DS1}$ rises with a slope a little above 1, steepening as $V_{in}^*$ approaches.
- **$V_{in} \approx V_{in}^* = V_{b1} - V_{TH1} - \sqrt{2I_2/\beta_1} - I_2R_S$** ($V_{TH1}$ with body effect, $V_{SB} = V_S$): both devices saturated, a very large gain (unbounded for $\lambda = 0$); $V_{out}$ jumps from $\approx V_{b1} - V_{TH1}$ ($M_1$ edge) to $\approx V_{b2} + 0.8$ V ($M_2$ edge).
- **$V_{in} > V_{in}^*$:** $M_1$ saturated with a current below $I_2$, $M_2$ in triode; $V_{out}$ is close to $V_{DD}$ and approaches it as the current falls. $M_1$ cuts off when $V_{in} \ge V_{b1} - V_{TH}(V_{in})$, after which $V_{out} = V_{DD}$.
- If $V_{in}^* < 0$ the output is high over the whole range; if $V_{in}^* > 3$ V it stays low. If $V_{b1} - V_{TH1} > V_{b2} + 0.8$ V, the output instead passes continuously through a region with both transistors in triode.

**Common mistake.** Drawing an inverting curve because "$M_1$ is the amplifying device". The input drives the *source* of $M_1$ (through $R_S$); raising $V_{in}$ reduces $V_{GS1}$ and the current that $M_1$ can sink, so the output *rises*.

**Common mistake.** Describing the transition as gradual, with a modest gain such as 1 or a resistor ratio. The load is a current source, not a resistor, so near $V_{in}^*$ the output node is a high-impedance node between two current sources. The gain there is huge (unbounded for $\lambda = 0$), and the output swings between the two saturation edges over a tiny input range.

**Common mistake.** Forgetting that the current is set by the *weaker* device. Below $V_{in}^*$ it is $I_2$, and $M_1$ must be in triode; above $V_{in}^*$ it is $M_1$'s saturation current, and $M_2$ must be in triode. Assuming both are always saturated leads to contradictions in the KCL.
