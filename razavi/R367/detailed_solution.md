# Detailed solution - R367

**Approach.** Write the input-referred noise voltage of the common-gate (CG) stage (input shorted) and the output-swing limits set by the saturation of $M_1$ and $M_2$. The swing is $V_{DD} - V_{ov1} - V_{ov2}$, so choose small overdrives, size the devices, center the output bias point (this fixes $R_D$), compute $V_b$, and check the noise against 3 nV/√Hz. Several choices are free; one complete, consistent design is given.

### Step 1 — Input-referred noise voltage

Call the input node (source of $M_1$, drain of $M_2$) X; $C_0$ shunts the noise of $M_0$ and $I_1$, so $M_2$'s gate is a clean ac ground. The specification is $\overline{V_{n,in}^2} \le (3\times10^{-9})^2 = 9\times10^{-18}\ \mathrm{V^2/Hz}$.

With the input shorted, X is grounded and $v_{gs1} = 0$, so:

- $M_1$'s noise current, $\overline{I_{n1}^2} = 4kT\gamma g_{m1}$, flows from the drain to the grounded source and therefore entirely through $R_D$ (no $r_O$, since $\lambda = 0$);
- $R_D$'s noise current, $\overline{I_{nD}^2} = 4kT/R_D$, flows in $R_D$;
- $M_2$'s noise current, $\overline{I_{n2}^2} = 4kT\gamma g_{m2}$, from X to ground, **flows into the short** and never reaches the output, so $M_2$ does not contribute to the input-referred *voltage*.

With the CG gain $|A_v| = g_{m1}R_D$:

$$\overline{V_{n,out}^2} = \left(4kT\gamma g_{m1} + \frac{4kT}{R_D}\right)R_D^2,$$

$$\overline{V_{n,in}^2} = \frac{\left(4kT\gamma g_{m1} + 4kT/R_D\right)R_D^2}{g_{m1}^2R_D^2} = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right).$$

(With body effect, $g_{m1}$ in the denominator becomes $g_{m1} + g_{mb1}$, which lowers the noise slightly; we neglect it.) At fixed current $g_{m1} = 2I_D/V_{ov1}$, so **a small $V_{ov1}$ helps the noise**.

### Step 2 — The output swing

**Lower limit of $V_{out}$.** Two saturation conditions stack up:

1. $M_2$ saturated: $V_X \ge V_{ov2}$. Setting X at its minimum, $V_X = V_{ov2}$, fixes the gate bias of $M_1$:
$$V_b = V_X + V_{GS1} = V_{ov2} + V_{TH1} + V_{ov1}.$$
2. $M_1$ saturated: $V_{out} \ge V_X + V_{ov1}$:
$$V_{out,min} = V_{ov1} + V_{ov2} \quad (= V_b - V_{TH1}).$$

**Upper limit.** Through $R_D$, $V_{out,max} = V_{DD}$. So

$$V_{out,max} - V_{out,min} = V_{DD} - V_{ov1} - V_{ov2},$$

with the overdrives evaluated at the bias current.

The swing grows as both overdrives shrink (wide devices), and the square law sets no lower limit. In practice, below roughly 0.15–0.2 V a device approaches weak inversion and becomes very large (large capacitance at X and at the output), and a small $V_{ov2}$ also raises the input-referred noise *current* (Step 6).

**Choice (free):** $V_{ov1} = V_{ov2} = 0.2$ V.

### Step 3 — Device sizes

$$\left(\frac{W}{L}\right)_{1,2} = \frac{2I_D}{\mu_nC_{ox}V_{ov}^2} = \frac{2\times0.5\times10^{-3}\ \mathrm{A}}{(134\times10^{-6}\ \mathrm{A/V^2})(0.2\ \mathrm{V})^2} = \frac{1\times10^{-3}}{5.36\times10^{-6}} = 187 .$$

With $L = 0.5\ \mu$m this is $W \approx 93\ \mu$m for both $M_1$ and $M_2$, and

$$g_{m1} = g_{m2} = \frac{2I_D}{V_{ov}} = \frac{2\times0.5\ \mathrm{mA}}{0.2\ \mathrm{V}} = 5\ \mathrm{mS}.$$

(Check: $\sqrt{2\mu_nC_{ox}(W/L)I_D} = \sqrt{2(134\ \mu)(187)(0.5\ \mathrm{m})} = \sqrt{2.5\times10^{-5}} = 5$ mS.)

$M_0$ is sized by the mirror ratio, $(W/L)_0 = (W/L)_2\,I_1/I_{D2}$; for instance $I_1 = 50\ \mu$A gives $(W/L)_0 = 18.7$ (a free choice).

### Step 4 — Load resistor and output bias point

With $V_{ov1} + V_{ov2} = 0.4$ V the output may range from 0.4 V to 3 V. For the largest symmetric swing, put the quiescent output in the middle:

$$V_{out,Q} = \frac{V_{out,min} + V_{out,max}}{2} = \frac{0.4 + 3}{2} = 1.7\ \mathrm{V}.$$

The drop across $R_D$ is then $V_{DD} - V_{out,Q} = 1.3$ V, so

$$R_D = \frac{V_{DD} - V_{out,Q}}{I_D} = \frac{3 - 1.7\ \mathrm{V}}{0.5\ \mathrm{mA}} = 2.6\ \mathrm{k}\Omega,$$

which is the general rule $R_D = (V_{DD} - V_{ov1} - V_{ov2})/(2I_D)$. The output can move $\pm1.3$ V around 1.7 V: a swing of **2.6 V peak-to-peak**.

### Step 5 — Gate bias $V_b$

With $V_{TH1} = V_{TH0} = 0.7$ V (body effect neglected):

$$V_b = V_{ov2} + V_{TH1} + V_{ov1} = 0.2 + 0.7 + 0.2 = 1.1\ \mathrm{V}.$$

At the bias point, $V_{DS2} = V_X = V_b - V_{GS1} = 1.1 - 0.9 = 0.2\ \mathrm{V} = V_{ov2}$ (at the edge, by design) and $V_{DS1} = V_{out,Q} - V_X = 1.7 - 0.2 = 1.5\ \mathrm{V} \ge V_{ov1} = 0.2$ V ✓.

With the body effect ($\gamma_{body} = 0.45\ \mathrm{V^{1/2}}$, $2|\phi_F| = 0.9$ V as typical values), $V_{SB1} = 0.2$ V and $V_{TH1} = 0.7 + 0.45(\sqrt{1.1} - \sqrt{0.9}) = 0.7 + 0.45(1.049 - 0.949) = 0.745$ V, so $V_b \approx 1.15$ V. In practice about 0.1 V of margin is added to $V_b$ so that $M_2$ is not exactly at the edge, at the cost of 0.1 V of swing.

### Step 6 — Verify the noise

$$
\begin{aligned}
\frac{\gamma}{g_{m1}} &= \frac{2/3}{5\times10^{-3}\ \mathrm{S}} = 133.3\ \Omega,\\
\frac{1}{g_{m1}^2R_D} &= \frac{1}{(5\times10^{-3})^2(2600)}\ \Omega = \frac{1}{0.065}\ \Omega = 15.4\ \Omega,\\
4kT &= 4(1.38\times10^{-23})(300) = 1.656\times10^{-20}\ \mathrm{J},\\
\overline{V_{n,in}^2} &= (1.656\times10^{-20})(133.3 + 15.4)\ \mathrm{V^2/Hz} = 2.46\times10^{-18}\ \mathrm{V^2/Hz},\\
\sqrt{\overline{V_{n,in}^2}} &= 1.57\ \mathrm{nV/\sqrt{Hz}} \;<\; 3\ \mathrm{nV/\sqrt{Hz}}\ \checkmark
\end{aligned}
$$

The specification is met with margin; it is not the binding constraint.

**How loose is it?** Keeping $V_{ov2} = 0.2$ V and the centered $R_D = (2.8\ \mathrm{V} - V_{ov1})/(1\ \mathrm{mA})$, the noise reaches exactly 3 nV/√Hz ($\gamma/g_{m1} + 1/(g_{m1}^2R_D) = 9\times10^{-18}/1.656\times10^{-20} = 543\ \Omega$) at about $V_{ov1} \approx 0.58$ V. Any smaller $V_{ov1}$ satisfies the noise, and a small $V_{ov1}$ helps *both* noise and swing.

**Price of a small $V_{ov2}$.** It does not affect the input-referred voltage, but it raises the input-referred noise *current*, $\overline{I_{n,in}^2} = 4kT/R_D + 4kT\gamma g_{m2}$ (with the input open, $M_2$'s noise flows through $M_1$):

$$\overline{I_{n,in}^2} = (1.656\times10^{-20})\left(\frac{1}{2600} + \frac23\times5\times10^{-3}\right) = 6.2\times10^{-23}\ \mathrm{A^2/Hz} \;\Rightarrow\; 7.9\ \mathrm{pA/\sqrt{Hz}},$$

which matters if the stage is driven from a high source impedance.

### Result

One complete design (overdrive values are the free choice; everything else follows):

| Quantity | Value |
|---|---|
| $V_{ov1} = V_{ov2}$ | 0.2 V |
| $(W/L)_1 = (W/L)_2$ | $2I_D/(\mu_nC_{ox}V_{ov}^2) \approx 187$ (≈ 93 μm / 0.5 μm) |
| $g_{m1}$ | 5 mS |
| $R_D$ | 2.6 kΩ (output biased at 1.7 V) |
| $V_b$ | $V_{ov2} + V_{TH1} + V_{ov1} \approx 1.1$ V (≈ 1.15 V with body effect) |
| $\sqrt{\overline{V_{n,in}^2}} = \sqrt{4kT(\gamma/g_{m1} + 1/(g_{m1}^2R_D))}$ | ≈ 1.57 nV/√Hz (≤ 3 nV/√Hz) |
| Output range | $0.4\ \mathrm{V} \le V_{out} \le 3$ V, i.e. ≈ 2.6 V peak-to-peak |

In general: swing $= V_{DD} - V_{ov1} - V_{ov2}$, maximized by small overdrives; $R_D = (V_{DD} - V_{ov1} - V_{ov2})/(2I_D)$ centers the bias point; $M_2$ does not enter the input-referred noise voltage.

**Common mistake.** Including $M_2$'s noise in the input-referred noise *voltage*. With the input shorted it flows into the short; it belongs only to the input-referred noise *current*, and including it makes the noise constraint look much tighter than it is.

**Common mistake.** Using $g_m = I_D/V_{ov}$ instead of $2I_D/V_{ov}$. This halves $g_{m1}$ (2.5 mS instead of 5 mS), and the same design would be checked at $\sqrt{1.656\times10^{-20}(266.7 + 61.5)} \approx 2.3$ nV/√Hz instead of 1.57 nV/√Hz.

**Common mistake.** Taking the lower output limit as $V_{ov1}$ alone. The source of $M_1$ cannot go below $V_{ov2}$ without pushing $M_2$ into triode, so the output must stay above $V_{ov1} + V_{ov2}$.
