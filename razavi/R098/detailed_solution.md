# Detailed solution - R098

**Approach:** This is a cascode common-source stage: $M_1$ is the input device, $M_2$ (gate at $V_{b1}$) the cascode, and the PMOS $M_3$ (gate at $V_{b2}$) a current-source load. All three carry the same current, set by whichever side can carry less: $M_3$ (its saturation current $I_3$) or the $M_1$–$M_2$ stack (set by $V_{in}$). The two cross at one input $V_{in}^*$, where all devices are saturated and the gain is very high; before and after it, devices leave saturation one by one.

### Step 1 — Load current and region boundaries

![V_out versus V_in](/q/R098/solution-transfer.svg)

Assume $V_{b2} < V_{DD} - |V_{THP}| = 2.2\ \mathrm{V}$ so that the PMOS load $M_3$ conducts. Call the drain of $M_1$ (source of $M_2$) node $X$; $M_2$ has a body effect, $V_{SB2} = V_X$. $M_3$ has the fixed gate drive $V_{SG3} = V_{DD} - V_{b2}$, so its saturation current (ignoring the small $1 + \lambda V_{SD}$ factor) is

$$I_3 = \frac12\beta_3(V_{DD} - V_{b2} - 0.8)^2 .$$

| Device | Saturated when | In triode when |
|---|---|---|
| $M_3$ | $V_{out} \le V_{b2} + 0.8$ V | $V_{out}$ above that |
| $M_2$ | $V_{out} \ge V_{b1} - V_{TH2}(V_X)$ | $V_{out}$ below that |
| $M_1$ | $V_X \ge V_{in} - 0.7$ V | $V_X$ below that |

### Step 2 — Below $V_{in}^*$: output at or just below $V_{DD}$

For $V_{in} \le 0.7$ V no current flows down the stack, so $M_3$ (whose channel is on) must have $V_{SD3} = 0$:

$$V_{out} = V_{DD}.$$

For $0.7\ \mathrm{V} < V_{in} < V_{in}^*$, $M_1$'s saturation current $\frac12\beta_1(V_{in} - 0.7)^2$ is still less than $I_3$. It sets the current, and $M_3$ must be in triode, acting as a small resistor to $V_{DD}$: $V_{out}$ stays just below $V_{DD}$, falling slowly (gain $g_{m1}$ times $M_3$'s small triode resistance). $M_2$ sits as a follower above $M_1$, $V_X \approx V_{b1} - V_{TH2} - V_{ov2}$, and both NMOS devices are saturated.

### Step 3 — $V_{in} \approx V_{in}^*$: all saturated, a nearly vertical drop

The two sides balance when

$$\frac12\beta_1(V_{in}^* - 0.7)^2 = I_3 \quad\Longrightarrow\quad V_{in}^* = 0.7 + \sqrt{\frac{2I_3}{\beta_1}} = 0.7 + (2.2 - V_{b2})\sqrt{\frac{\beta_3}{\beta_1}} .$$

Around this input all three transistors are saturated. In the small-signal model, $M_1$ draws $g_{m1}v_{in}$ from $X$ with $r_{O1}$ to ground; $M_2$ (gate at ac ground, source at $X$, so $v_{gs2} = v_{bs2} = -v_X$) carries $-(g_{m2} + g_{mb2})v_X$ from $out$ to $X$ with $r_{O2}$ in parallel; $M_3$ reduces to $r_{O3}$ from $out$ to ac ground.

<!-- diagram: diagram-01.cir -->

Looking down into $M_2$'s drain, the cascode presents the standard

$$R_{down} = r_{O1} + r_{O2} + (g_{m2} + g_{mb2})r_{O1}r_{O2} \approx g_{m2}r_{O2}r_{O1} ,$$

and almost all of $M_1$'s signal current $g_{m1}v_{in}$ reaches the output, so

$$A_v \approx -g_{m1}\left(R_{down}\|r_{O3}\right) \approx -g_{m1}\left[(g_{m2}r_{O2}r_{O1})\|r_{O3}\right].$$

This is very high, in practice limited by the uncascoded PMOS: $r_{O3} \ll g_{m2}r_{O2}r_{O1}$, so $A_v \approx -g_{m1}r_{O3}$. With $\lambda = 0$ the drop would be exactly vertical.

The output falls steeply from the edge of $M_3$'s saturation,

$$V_{out} \approx V_{DD} - |V_{ov3}| = V_{b2} + 0.8\ \mathrm{V},$$

down to the edge of $M_2$'s saturation,

$$V_{out} \approx V_{b1} - V_{TH2}(V_X) .$$

### Step 4 — Below the drop: $M_2$, then $M_1$, enter triode

Once $V_{out} < V_{b1} - V_{TH2}$, $M_2$ is in triode and progressively stops shielding $M_1$; the gain falls toward roughly $g_{m1}(r_{O1}\|r_{O3})$ (gradually: in the example below the slope is still about 20 when, about 10 mV of input later, $M_1$ also enters triode). $V_X$ is pulled down with $V_{out}$, and $M_1$ enters triode when

$$V_X < V_{in} - 0.7\ \mathrm{V}.$$

From then on, $M_1$ and $M_2$ are both in triode and carry $I_3$ like two resistors in series; the gain is small and $V_{out}$ declines slowly toward a low value at $V_{in} = 3$ V.

Order of the transitions: This sequence assumes $V_{b1}$ lets all three devices be saturated at $V_{in}^*$:

- $V_{b1} \ge V_{TH2} + V_{ov2} + V_{ov1}$ (room for $M_1$ under $M_2$);
- $V_{b1} - V_{TH2} < V_{b2} + 0.8$ V (the $M_2$ edge lies below the $M_3$ edge).

For a lower $V_{b1}$, $M_1$ is already in triode in the transition region and the peak gain is lower; for a higher $V_{b1}$, $M_2$ enters triode before $M_3$ saturates.

### Step 5 — A numerical example

For illustration take $V_{b2} = 1.5$ V, $V_{b1} = 2.0$ V, $\beta_1 = \beta_2 = 2\ \mathrm{mA/V^2}$, $\beta_3 = 1\ \mathrm{mA/V^2}$ (with $\lambda_n = 0.1\ \mathrm{V^{-1}}$, $\lambda_p = 0.2\ \mathrm{V^{-1}}$ as given):

$$
\begin{aligned}
I_3 &= \tfrac12(1\ \mathrm{mA/V^2})(3 - 1.5 - 0.8)^2\ \mathrm{V^2} = 0.245\ \mathrm{mA},\\
V_{in}^* &\approx 0.7 + \sqrt{2(0.245\ \mathrm{mA})/(2\ \mathrm{mA/V^2})} = 0.7 + 0.495 = 1.195\ \mathrm{V},\\
V_{b2} + 0.8 &= 2.3\ \mathrm{V}\quad(M_3\ \text{edge}),\\
V_{b1} - V_{TH2} &\approx 2.0 - 0.83 \approx 1.17\ \mathrm{V}\quad(M_2\ \text{edge}).
\end{aligned}
$$

The exact solution, including the $(1 + \lambda V_{DS})$ factors (which shift the steep segment up by about 20 mV), gives:

| $V_{in}$ (V) | $V_{out}$ (V) | $V_X$ (V) | $M_1$ | $M_2$ | $M_3$ | Slope |
|---|---|---|---|---|---|---|
| ≤ 0.7 | 3.000 | — | off | off | triode ($I = 0$) | 0 |
| 1.0 | 2.848 | 0.847 | sat | sat | triode | −1.1 |
| 1.2 | 2.410 | 0.683 | sat | sat | triode | −6 |
| 1.212 | 2.300 | 0.673 | sat | sat | → sat | −22 |
| 1.25 | 1.440 | 0.626 | sat | sat | sat | −23 |
| 1.261 | 1.174 | 0.611 | sat | → triode | sat | −23 |
| 1.271 | 0.976 | 0.571 | → triode | triode | sat | −20 |
| 1.4 | 0.557 | 0.330 | triode | triode | sat | −1.1 |
| 2.0 | 0.331 | 0.151 | triode | triode | sat | −0.15 |
| 3.0 | 0.251 | 0.083 | triode | triode | sat | −0.04 |

The output falls by more than 1.1 V over only about 50 mV of input (gain about 20 to 23, close to $g_{m1}r_{O3}$ at $I \approx 0.3$ mA), between two gentle regions.

### Result

An inverting characteristic with a very sharp transition (cascode gain). $V_{out} \approx V_{DD}$ until $M_1$'s current reaches the load current $I_3 = \tfrac12\beta_3(V_{DD} - V_{b2} - 0.8)^2$; then a nearly vertical drop; then a slow decline with $M_2$ and $M_1$ in triode.

- $V_{in} \le 0.7$ V: no current, $V_{out} = V_{DD}$.
- $0.7\ \mathrm{V} < V_{in} < V_{in}^*$: $M_1$ (saturated) sinks less than $I_3$, so $M_3$ is in triode and $V_{out}$ stays just below $V_{DD}$, falling slowly.
- $V_{in} \approx V_{in}^* = 0.7 + \sqrt{2I_3/\beta_1}$: all three devices saturated; gain $\approx g_{m1}[(g_{m2}r_{O2}r_{O1})\|r_{O3}]$, very high, so $V_{out}$ drops almost vertically from $\approx V_{DD} - |V_{ov3}| = V_{b2} + 0.8$ V ($M_3$ edge) to $\approx V_{b1} - V_{TH2}$ ($M_2$ edge). With $\lambda = 0$ the drop would be exactly vertical.
- Below $V_{out} \approx V_{b1} - V_{TH2}$: $M_2$ in triode and the gain falls toward roughly $g_{m1}(r_{O1}\|r_{O3})$. Node $X$ falls with $V_{out}$, and $M_1$ enters triode when $V_X < V_{in} - 0.7$ V. Thereafter the gain is small and $V_{out}$ declines slowly toward a low value at $V_{in} = 3$ V.
- Transition points: $V_{in} = 0.7$ V; $V_{in}^*$; $V_{out} = V_{b2} + 0.8$ V; $V_{out} = V_{b1} - V_{TH2}$ (with $V_{SB2} = V_X$); $V_X = V_{in} - 0.7$ V. This order assumes $V_{b1}$ lets all three devices be saturated at $V_{in}^*$.

**Common mistake:** Drawing a gradual fall with a moderate, constant slope from 0.7 V. While $M_1$ cannot sink $I_3$, the output stays pinned near $V_{DD}$; once it can, the output collapses over a few tens of millivolts because the output node sees $R_{down}\|r_{O3}$.

**Common mistake:** Treating $M_3$ as the input device, or drawing a non-inverting curve. $M_3$'s gate is at the fixed $V_{b2}$; only $M_1$ is driven by $V_{in}$, and more input pulls more current down, so $V_{out}$ falls.

**Common mistake:** Getting the order of the transitions wrong for the normal bias. Going down from the top, the output first passes the $M_3$ edge ($V_{b2} + 0.8$ V, where $M_3$ *enters* saturation), then the $M_2$ edge ($V_{b1} - V_{TH2}$), and only then does $M_1$ enter triode, when $V_X$ drops below $V_{in} - 0.7$ V.
