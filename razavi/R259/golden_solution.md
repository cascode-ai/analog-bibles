# Golden Solution - R259

## Reference answer

Usual sizing ($v_U = \sqrt{2I_{REF}/\beta_{34}} < 0.7$ V, sweep up to $V_b \approx V_{DD}$): three regions. $I_{out} = I_{REF}$ wherever a solution exists; $V_X$ is very high at the low end, falls, then stays flat at $V_{GS2} = 0.7 + v_L$ ($v_L = \sqrt{2I_{REF}/\beta_{12}}$); $V_A = V_B = V_b - V_{GS4}$ rise together with slope just below 1, then $V_A$ flattens just below $V_{GS2}$ while $V_B$ keeps rising. Here $\beta_{12}$, $\beta_{34}$ are the β of $M_{1,2}$ and $M_{3,4}$, and $V_{TH}(s) = 0.7 + 0.45(\sqrt{0.9 + s} - \sqrt{0.9})$ for $M_3$, $M_4$.

- Normal range $v_L + V_{TH4}(v_L) + v_U \lesssim V_b \lesssim V_{GS2} + V_{TH4}(V_{GS2} - v_U)$: all devices saturated. $V_X = V_{GS2}$ (flat); $V_A = V_B = V_b - V_{GS4}$, rising with slope $1/(1+\eta) \approx 0.8$ (body effect); $I_{out} = I_{REF}$.
- Low $V_b$: $V_A < v_L$, $M_2$ (and $M_1$) are in triode, and $V_X = 0.7 + (v_L^2 + V_A^2)/(2V_A)$ must rise to keep $I_{REF}$ flowing; $V_A = V_B$ and $I_{out} = I_{REF}$ still ($M_3$, $M_4$ saturated, identical stacks). As $V_b \to 0.7 + v_U$, $V_A \to 0$ and $V_X \to \infty$: below that an ideal $I_{REF}$ has no dc solution. With a real source the node X runs out of headroom near $V_{DD}$, the reference current and $I_{out}$ fall, and $I_{out} \to 0$ as $V_b$ drops toward $V_{TH}$; either description of the low end is correct.
- High $V_b$ (above $V_{GS2} + V_{TH4}$): $M_4$ enters triode, so $V_A$ approaches $V_{GS2}$ and flattens just below it, while $V_B = V_b - V_{GS3}$ keeps rising ($M_3$ stays saturated, its drain at $V_{DD}$, as long as $V_b < V_{DD} + V_{TH3}$, i.e. throughout a sweep to $V_{DD}$; beyond that $V_B$ would level off toward $V_{DD}$). $M_1$ is saturated, so $I_{out} = I_{REF}$ with λ = 0 (with λ > 0, $V_B > V_A$ would make $I_{out}$ slightly larger).
- If $v_U > 0.7$ V (very small $M_{3,4}$), the all-saturated window vanishes: $M_4$ enters triode before $M_2$ saturates, and while both are in triode $V_B > V_A$ and $I_{out}$ shows a small bump above $I_{REF}$, returning to $I_{REF}$ once $M_2$ saturates.
- Example (W/L = 20/0.5 for all, β = 5.36 mA/V² with $\mu_nC_{ox}$ = 134 μA/V², $I_{REF}$ = 100 μA; square-law simulation): $V_X$ = 0.89 V for $V_b \gtrsim 1.13$ V; $V_A = V_B$ ≈ 0.25, 0.42, 0.59 V at $V_b$ = 1.2, 1.4, 1.6 V; above ≈ 1.75 V, $V_A$ ≈ 0.83–0.88 V while $V_B$ ≈ 0.93, 1.36, 1.80 V at $V_b$ = 2, 2.5, 3 V; at the low end $V_X$ ≈ 0.96 V at $V_b$ = 1.0 V, 1.13 V at 0.95 V, diverging as $V_b \to 0.89$ V (ideal source).

## Grading notes

Sizes and $I_{REF}$ are free: an answer may treat the usual case ($v_U < 0.7$ V) only, or give a more general parametric analysis; neither is docked.
+2: the three regions: normal (flat $V_X = V_{GS2}$, $V_A = V_B$ rising ≈ 1:1 with $V_b$, $I_{out} = I_{REF}$), low $V_b$ ($M_2$ in triode, $V_X$ rising sharply), high $V_b$ ($M_4$ in triode, $V_A$ saturating near $V_X$ while $V_B$ continues up). Breakpoints approximately $V_{GS4} + V_{ov2}$ and $V_{GS2} + V_{TH4}$. At the low end either an ideal-source statement ($V_X \to \infty$, no dc solution below $V_b \approx 0.7 + v_U$) or a finite-compliance collapse of $I_{out}$ is accepted; neither is required beyond noting that $V_X$ blows up / the source runs out of headroom. An $I_{out} > I_{REF}$ bump for $v_U > 0.7$ V and $M_3$ leaving saturation for $V_b > V_{DD} + V_{TH}$ are correct extras.
+1: normal region and one of the two edge regions right.
0: only the normal region described.
-2 (asserted as fact): $V_X$ following $V_b$; $I_{out}$ proportional to $V_b$; $V_A$ decreasing with $V_b$; $V_B$ clamped together with $V_A$ at high $V_b$ with no reason; misread connections.
