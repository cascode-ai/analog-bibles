# Detailed solution - R366

**Approach.** Recover the $g_{m2}$ that the noise specification forces and from it $M_2$'s overdrive. $M_2$ at the edge of saturation fixes the input node; adding $V_{GS1}$ (with body effect) gives the minimum $V_b$. The output swing is bounded below by $M_1$'s saturation and above by $V_{DD}$.

### Step 1 — The transconductance forced by the noise specification

Call the input node (source of $M_1$, drain of $M_2$) X. With the input open, KCL at X forces $M_1$'s channel current to equal $M_2$'s noise current $I_{n2}$: $M_1$'s own noise cancels, and $I_{n2}$ flows through $M_1$ into $R_D$ like an input current. With transimpedance $R_D$ (CG current gain 1),

$$\overline{I_{n,in}^2} = \frac{4kT}{R_D} + 4kT\gamma g_{m2}.$$

Setting $M_2$'s rms contribution to 1/5 of $R_D$'s:

$$
\begin{aligned}
\sqrt{4kT\gamma g_{m2}} &= \frac15\sqrt{\frac{4kT}{R_D}}\\
4kT\gamma g_{m2} &= \frac{1}{25}\cdot\frac{4kT}{R_D}\\
g_{m2} &= \frac{1}{25\gamma R_D} = \frac{1}{25\times\tfrac23\times1000\ \Omega} = 60\ \mu\mathrm{S}.
\end{aligned}
$$

From $g_m^2 = 2\mu_nC_{ox}(W/L)I_D$:

$$\left(\frac{W}{L}\right)_2 = \frac{g_{m2}^2}{2\mu_nC_{ox}I_{D2}} = \frac{(60\ \mu\mathrm{S})^2}{2\,(134\ \mu\mathrm{A/V^2})(0.5\ \mathrm{mA})} = \frac{3.6\times10^{-9}}{1.34\times10^{-7}} = 0.027 .$$

### Step 2 — Overdrive of $M_2$ and the voltage of node X

$$V_{ov2} = \frac{2I_{D2}}{g_{m2}} = \frac{2\times0.5\ \mathrm{mA}}{60\ \mu\mathrm{S}} = \frac{1\times10^{-3}\ \mathrm{A}}{60\times10^{-6}\ \mathrm{A/V}} = 16.7\ \mathrm{V}.$$

(Check: $\tfrac12(134\ \mu\mathrm{A/V^2})(0.027)(16.7\ \mathrm{V})^2 = 0.5$ mA.)

$M_2$'s source is grounded and its drain is X, so **at the edge of the triode region**

$$V_X = V_{DS2} = V_{ov2} = 16.7\ \mathrm{V}.$$

$M_2$'s source and bulk are both at ground, so it has no body effect.

### Step 3 — Gate–source voltage of $M_1$

With $(W/L)_1 = 50/0.5 = 100$:

$$V_{ov1} = \sqrt{\frac{2I_{D1}}{\mu_nC_{ox}(W/L)_1}} = \sqrt{\frac{2\times0.5\times10^{-3}\ \mathrm{A}}{(134\times10^{-6}\ \mathrm{A/V^2})(100)}} = \sqrt{0.0746\ \mathrm{V^2}} = 0.273\ \mathrm{V}.$$

The source of $M_1$ is at $V_X$ and its bulk at ground, so $V_{SB1} = V_X = 16.7$ V and

$$V_{TH1} = V_{TH0} + \gamma_{body}\left(\sqrt{2|\phi_F| + V_{SB1}} - \sqrt{2|\phi_F|}\right),$$

$$
\begin{aligned}
\sqrt{2|\phi_F| + V_{SB1}} &= \sqrt{0.9 + 16.67}\ \sqrt{\mathrm{V}} = \sqrt{17.57} = 4.191\ \sqrt{\mathrm{V}},\\
\sqrt{2|\phi_F|} &= \sqrt{0.9} = 0.949\ \sqrt{\mathrm{V}},\\
V_{TH1} &= 0.7 + 0.45\,(4.191 - 0.949) = 0.7 + 0.45\times3.243 = 0.7 + 1.459 = 2.16\ \mathrm{V}.
\end{aligned}
$$

So

$$V_{GS1} = V_{TH1} + V_{ov1} = 2.16 + 0.273 = 2.43\ \mathrm{V}$$

(or $0.7 + 0.273 = 0.97$ V if the body effect were ignored).

### Step 4 — Minimum $V_b$

With X at its lowest allowed value, $V_b$ is at its minimum:

$$V_{b,min} = V_X + V_{GS1} = V_{ov2} + V_{TH1} + V_{ov1}.$$

$$
\begin{aligned}
\text{with body effect:} \quad V_{b,min} &= 16.67 + 2.16 + 0.273 = 19.1\ \mathrm{V},\\
\text{without body effect:} \quad V_{b,min} &= 16.67 + 0.70 + 0.273 = 17.6\ \mathrm{V}.
\end{aligned}
$$

Either way $V_b$ would have to be far above $V_{DD} = 3$ V, which an on-chip bias cannot provide.

### Step 5 — Maximum allowable output swing

**Lower limit.** $M_1$ stays saturated for $V_{out} - V_X \ge V_{ov1}$, i.e. $V_{out} \ge V_b - V_{TH1}$:

$$V_{out,min} = V_X + V_{ov1} = V_{ov2} + V_{ov1} = 16.67 + 0.273 = 16.94\ \mathrm{V}.$$

**Upper limit.** Through $R_D$ the output cannot rise above $V_{out,max} = V_{DD} = 3$ V.

**Allowable swing:**

$$V_{out,max} - V_{out,min} = V_{DD} - V_{ov1} - V_{ov2} = 3 - 0.273 - 16.67 = -13.9\ \mathrm{V} < 0 .$$

A negative "swing" means **no output voltage keeps both transistors saturated**. Even the quiescent output, $V_{DD} - I_DR_D = 3 - 0.5 = 2.5$ V, is far below the 16.94 V that $M_1$ would need, so the circuit cannot be biased as specified.

### Step 6 — Why the specification fails, and what a 3-V supply allows

A positive swing needs $V_{ov2} < V_{DD} - V_{ov1}$, i.e.

$$g_{m2} = \frac{2I_D}{V_{ov2}} > \frac{2I_D}{V_{DD} - V_{ov1}} = \frac{1\ \mathrm{mA}}{3 - 0.273\ \mathrm{V}} = 0.367\ \mathrm{mS},$$

six times the 60 μS the noise requirement allows. Even at this zero-swing limit, $M_2$'s rms noise relative to $R_D$'s would be

$$\sqrt{\frac{4kT\gamma g_{m2}}{4kT/R_D}} = \sqrt{\gamma g_{m2}R_D} = \sqrt{\tfrac23\times0.367\times10^{-3}\times1000} = \sqrt{0.244} = 0.49,$$

about one-half, not one-fifth: a 0.5-mA current source can have a small $g_m$ (low noise) only with a huge overdrive, which consumes headroom.

### Result

The noise requirement forces $g_{m2} = 1/(25\gamma R_D) = 60\ \mu$S, i.e. $V_{ov2} = 2I_D/g_{m2} \approx 16.7$ V. With $M_2$ at the edge of saturation:

$$V_{b,min} = V_{ov2} + V_{TH1} + V_{ov1} \approx 16.7 + 2.16 + 0.27 \approx 19.1\ \mathrm{V}$$

(≈ 17.6 V if the body effect of $M_1$ is ignored), far above $V_{DD} = 3$ V.

The output must stay above $V_b - V_{TH1} = V_{ov2} + V_{ov1} \approx 16.9$ V, so the allowable swing $V_{DD} - V_{ov1} - V_{ov2} \approx -13.9$ V is negative: **there is no allowable output swing**, and the design is infeasible with a 3-V supply.

**Common mistake.** Reporting a positive swing by assuming a "typical" overdrive (say 0.2–0.3 V) for $M_2$. With $g_{m2}$ and $I_{D2}$ both fixed, $V_{ov2} = 2I_D/g_{m2} = 16.7$ V is fixed too.

**Common mistake.** Computing the swing as $V_{DD} - V_{ov1}$, ignoring $M_2$. The source of $M_1$ cannot go below $V_{ov2}$ without pushing $M_2$ into triode, so $V_{ov2}$ adds directly to the minimum output voltage.

**Common mistake.** Omitting the $-\sqrt{2|\phi_F|}$ term of the body effect, which gives $V_{TH1} \approx 2.6$ V and $V_b \approx 19.5$ V. This shifts $V_b$ by a few tenths of a volt but does not change the conclusion.
