# Detailed solution - R367

**Approach.** Write the input-referred noise voltage of the common-gate (CG) stage (input shorted) and the output-swing limits set by the saturation of $M_1$ and $M_2$. The swing is $V_{DD} - V_{ov1} - V_{ov2}$, so it is maximized by small overdrives. We choose the overdrives, size the devices, place the output bias point in the middle of the allowed range (this fixes $R_D$), compute $V_b$, and finally check that the noise meets 3 nV/√Hz. Several choices are free; one complete, consistent design is given.

### Step 1 — The circuit and what can be chosen

Reading the figure:

- $M_1$: CG amplifier, gate at $V_b$, source = input node X ($V_{in}$), drain = $V_{out}$, load $R_D$ to $V_{DD} = 3$ V.
- $M_2$: NMOS current source from X to ground, carrying $I_{D2} = 0.5$ mA. Its gate is driven by the diode-connected $M_0$ (fed by $I_1$), and $C_0$ shunts the noise of $M_0$ and $I_1$ to ground, so $M_2$'s gate is a clean AC ground.
- $I_{D1} = I_{D2} = I_D = 0.5$ mA.

Design variables: $(W/L)_1$, $(W/L)_2$, $R_D$ and $V_b$. Equivalently, we may choose the overdrives $V_{ov1}$, $V_{ov2}$ (where $V_{ov} = V_{GS} - V_{TH}$) and the output bias point.

Specifications: input-referred noise voltage $\le 3\ \mathrm{nV/\sqrt{Hz}}$, i.e. $\overline{V_{n,in}^2} \le (3\times10^{-9})^2 = 9\times10^{-18}\ \mathrm{V^2/Hz}$, and maximum output swing.

### Step 2 — Input-referred noise voltage

The **input-referred noise voltage** is found with the input **shorted** to ground (node X held at AC ground) by dividing the output noise by the square of the voltage gain.

**Small-signal model in words (input shorted).** Node X is grounded, and the gate of $M_1$ is AC ground, so $v_{gs1} = 0$ and the controlled source $g_{m1}v_{gs1}$ vanishes. The drain node sees only $R_D$ to AC ground ($\lambda = 0$, so no $r_O$). The noise sources:

- $M_1$'s channel noise current, $\overline{I_{n1}^2} = 4kT\gamma g_{m1}$, flows from the drain to the grounded source and therefore entirely through $R_D$;
- $R_D$'s noise current, $\overline{I_{nD}^2} = 4kT/R_D$, flows in $R_D$;
- $M_2$'s noise current, $\overline{I_{n2}^2} = 4kT\gamma g_{m2}$, is connected from X to ground. With X shorted to ground it **flows into the short** and never reaches the output, so $M_2$ does not contribute to the input-referred *voltage*. ($M_0$ and $I_1$ are shunted by $C_0$ anyway.)

Here $k$ is Boltzmann's constant, $T = 300$ K and $\gamma = 2/3$.

**Output noise and gain:**

$$\overline{V_{n,out}^2} = \left(4kT\gamma g_{m1} + \frac{4kT}{R_D}\right)R_D^2, \qquad |A_v| = g_{m1}R_D .$$

(KCL at the drain with a source voltage $v_{in}$: $v_{out}/R_D + g_{m1}(0 - v_{in}) = 0$, so $v_{out} = g_{m1}R_Dv_{in}$.)

**Input-referred noise voltage:**

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{\left(4kT\gamma g_{m1} + 4kT/R_D\right)R_D^2}{g_{m1}^2R_D^2}\\
&= 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right).
\end{aligned}
$$

(With body effect, $g_{m1}$ in the denominator becomes $g_{m1} + g_{mb1}$, which lowers the noise slightly; we neglect it.) The noise falls as $g_{m1}$ and $R_D$ grow. At fixed current, $g_{m1} = 2I_D/V_{ov1}$, so **a small $V_{ov1}$ helps the noise**.

### Step 3 — The output swing

**Lower limit of $V_{out}$.** Two saturation conditions stack up:

1. $M_2$ saturated: $V_{DS2} = V_X \ge V_{ov2}$. To leave the most room, set node X at its minimum, $V_X = V_{ov2}$. This fixes the gate bias of $M_1$:
$$V_b = V_X + V_{GS1} = V_{ov2} + V_{TH1} + V_{ov1}.$$
2. $M_1$ saturated: $V_{DS1} \ge V_{ov1}$, i.e. $V_{out} \ge V_X + V_{ov1}$:
$$V_{out,min} = V_{ov1} + V_{ov2} \quad (= V_b - V_{TH1}).$$

**Upper limit of $V_{out}$.** The output connects to $V_{DD}$ through $R_D$, so

$$V_{out,max} = V_{DD}.$$

**Swing:**

$$V_{out,max} - V_{out,min} = V_{DD} - V_{ov1} - V_{ov2}.$$

(As is usual for such estimates, the overdrives are evaluated at the bias current.)

The swing is maximized by making both overdrives small, which means wide devices. The square law alone sets no lower limit (the swing keeps growing as $V_{ov} \to 0$), so in practice one chooses a minimum overdrive. Below roughly 0.15–0.2 V the device approaches weak inversion and becomes very large (large capacitance at X and at the output). A small $V_{ov2}$ also raises $g_{m2}$ and hence the input-referred noise *current* (Step 7).

**Choice (free):** $V_{ov1} = V_{ov2} = 0.2$ V.

### Step 4 — Device sizes

From the square law $I_D = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$:

$$\left(\frac{W}{L}\right)_{1,2} = \frac{2I_D}{\mu_nC_{ox}V_{ov}^2} = \frac{2\times0.5\times10^{-3}\ \mathrm{A}}{(134\times10^{-6}\ \mathrm{A/V^2})(0.2\ \mathrm{V})^2} = \frac{1\times10^{-3}}{5.36\times10^{-6}} = 187 .$$

With $L = 0.5\ \mu$m this is $W \approx 93\ \mu$m for both $M_1$ and $M_2$.

Transconductances:

$$g_{m1} = g_{m2} = \frac{2I_D}{V_{ov}} = \frac{2\times0.5\ \mathrm{mA}}{0.2\ \mathrm{V}} = 5\ \mathrm{mS}.$$

(Check: $\sqrt{2\mu_nC_{ox}(W/L)I_D} = \sqrt{2(134\ \mu)(187)(0.5\ \mathrm{m})} = \sqrt{2.5\times10^{-5}} = 5$ mS.)

$M_0$ is sized by the mirror ratio, $(W/L)_0 = (W/L)_2\,I_1/I_{D2}$; for instance $I_1 = 50\ \mu$A gives $(W/L)_0 = 18.7$ (a free choice).

### Step 5 — Load resistor and output bias point

With $V_{ov1} + V_{ov2} = 0.4$ V, the output may range from 0.4 V to 3 V. To allow the largest symmetric swing, put the quiescent output in the middle:

$$V_{out,Q} = \frac{V_{out,min} + V_{out,max}}{2} = \frac{0.4 + 3}{2} = 1.7\ \mathrm{V}.$$

The drop across $R_D$ is then $V_{DD} - V_{out,Q} = 1.3$ V, so

$$R_D = \frac{V_{DD} - V_{out,Q}}{I_D} = \frac{3 - 1.7\ \mathrm{V}}{0.5\ \mathrm{mA}} = 2.6\ \mathrm{k}\Omega,$$

which is the general rule $R_D = (V_{DD} - V_{ov1} - V_{ov2})/(2I_D)$.

The output can then move $\pm1.3$ V around 1.7 V: a swing of **2.6 V peak-to-peak**.

### Step 6 — Gate bias $V_b$

From Step 3, with $V_{TH1} = V_{TH0} = 0.7$ V (body effect neglected):

$$V_b = V_{ov2} + V_{TH1} + V_{ov1} = 0.2 + 0.7 + 0.2 = 1.1\ \mathrm{V}.$$

**Saturation check at the bias point:**

- $M_2$: $V_{DS2} = V_X = V_b - V_{GS1} = 1.1 - 0.9 = 0.2\ \mathrm{V} = V_{ov2}$ (at the edge, by design);
- $M_1$: $V_{DS1} = V_{out,Q} - V_X = 1.7 - 0.2 = 1.5\ \mathrm{V} \ge V_{ov1} = 0.2$ V ✓.

If the body effect is included with typical values ($\gamma_{body} = 0.45\ \mathrm{V^{1/2}}$, $2|\phi_F| = 0.9$ V), $M_1$ has $V_{SB1} = 0.2$ V and $V_{TH1} = 0.7 + 0.45(\sqrt{1.1} - \sqrt{0.9}) = 0.7 + 0.45(1.049 - 0.949) = 0.745$ V, so $V_b \approx 1.15$ V. In practice one adds about 0.1 V of margin to $V_b$ so that $M_2$ is not exactly at the edge, at the cost of 0.1 V of swing.

### Step 7 — Verify the noise

$$
\begin{aligned}
\frac{\gamma}{g_{m1}} &= \frac{2/3}{5\times10^{-3}\ \mathrm{S}} = 133.3\ \Omega,\\
\frac{1}{g_{m1}^2R_D} &= \frac{1}{(5\times10^{-3})^2(2600)}\ \Omega = \frac{1}{0.065}\ \Omega = 15.4\ \Omega,\\
4kT &= 4(1.38\times10^{-23})(300) = 1.656\times10^{-20}\ \mathrm{J},\\
\overline{V_{n,in}^2} &= (1.656\times10^{-20})(133.3 + 15.4)\ \mathrm{V^2/Hz} = 2.46\times10^{-18}\ \mathrm{V^2/Hz},\\
\sqrt{\overline{V_{n,in}^2}} &= 1.57\ \mathrm{nV/\sqrt{Hz}} \;<\; 3\ \mathrm{nV/\sqrt{Hz}}\ \checkmark
\end{aligned}
$$

The specification is met with margin; it is not the binding constraint here.

**How loose is the noise specification?** Keeping $V_{ov2} = 0.2$ V and the centered $R_D = (2.8\ \mathrm{V} - V_{ov1})/(1\ \mathrm{mA})$, the noise equals exactly 3 nV/√Hz (i.e. $\gamma/g_{m1} + 1/(g_{m1}^2R_D) = 9\times10^{-18}/1.656\times10^{-20} = 543\ \Omega$) at about $V_{ov1} \approx 0.58$ V. Any $V_{ov1}$ below that satisfies the noise; a smaller $V_{ov1}$ helps *both* noise and swing, which is why we took it small.

**Price of a small $V_{ov2}$.** It does not affect the input-referred voltage, but it raises the input-referred noise *current*, $\overline{I_{n,in}^2} = 4kT/R_D + 4kT\gamma g_{m2}$ (the noise of $M_2$ flows through $M_1$ when the input is open):

$$\overline{I_{n,in}^2} = (1.656\times10^{-20})\left(\frac{1}{2600} + \frac23\times5\times10^{-3}\right) = 6.2\times10^{-23}\ \mathrm{A^2/Hz} \;\Rightarrow\; 7.9\ \mathrm{pA/\sqrt{Hz}}.$$

This matters if the stage is driven from a high source impedance.

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

The general results: swing $= V_{DD} - V_{ov1} - V_{ov2}$, maximized by small overdrives; $R_D = (V_{DD} - V_{ov1} - V_{ov2})/(2I_D)$ centers the bias point; $M_2$ does not enter the input-referred noise voltage.

**Common mistake.** Including $M_2$'s noise in the input-referred noise *voltage*. With the input shorted, $M_2$'s noise current flows into the short; it belongs only to the input-referred noise *current*. Including it makes the noise constraint look much tighter than it is and drives the design in the wrong direction.

**Common mistake.** Using $g_m = I_D/V_{ov}$ instead of $g_m = 2I_D/V_{ov}$. This halves $g_{m1}$ (2.5 mS instead of 5 mS); for the same design the noise would then come out as $\sqrt{1.656\times10^{-20}(266.7 + 61.5)} \approx 2.3$ nV/√Hz instead of 1.57 nV/√Hz, so a design checked this way is checked against the wrong numbers.

**Common mistake.** Taking the lower limit of the output as $V_{ov1}$ (or as $V_b - V_{TH1}$ with an arbitrary $V_b$). The source of $M_1$ cannot go below $V_{ov2}$ without pushing $M_2$ into triode, so the output must stay above $V_{ov1} + V_{ov2}$; an $R_D$ that biases the output below this violates saturation.
