# Detailed solution - R087

**Approach.** The **output swing** fixes the sum of the two overdrives. The **gain** $g_{m1}(r_{O1}\|r_{O2})$ reduces to $2/[(\lambda_1 + \lambda_2)V_{ov1}]$ and, because $\lambda \propto 1/L$, fixes the channel lengths once $V_{ov1}$ is chosen. The square law at 1 mA then gives the widths. There are more unknowns ($W_1$, $L_1$, $W_2$, $L_2$) than constraints, so we state the free choices and present one complete design.

### Step 1 — Swing constraint

$M_2$, with its gate at the fixed bias $V_b$, is a current-source load, and both transistors carry $I_D = 1$ mA. With $|V_{ov2}| = V_{SG2} - |V_{TH2}|$, the output can move only while both devices stay saturated:

- $M_1$: $V_{DS1} \ge V_{GS1} - V_{TH1}$, i.e. $V_{out} \ge V_{ov1}$. (With a gain of 100, a 2.2-V output swing needs only 22 mV peak-to-peak at the input, so $V_{ov1}$ is essentially constant.)
- $M_2$: $V_{SD2} \ge |V_{ov2}|$, i.e. $V_{out} \le V_{DD} - |V_{ov2}|$.

So $V_{ov1} \le V_{out} \le V_{DD} - |V_{ov2}|$, and

$$
\begin{aligned}
V_{DD} - |V_{ov2}| - V_{ov1} &= 2.2\ \mathrm{V}\\
V_{ov1} + |V_{ov2}| &= 3\ \mathrm{V} - 2.2\ \mathrm{V} = 0.8\ \mathrm{V}.
\end{aligned}
$$

Only overdrives appear, not thresholds: the gate voltages adjust to whatever the thresholds are.

### Step 2 — Gain constraint

$M_2$'s gate and source are both at ac ground, so it reduces to $r_{O2}$ from $out$ to ground; $M_1$ contributes $g_{m1}v_{in}$ and $r_{O1}$.

<!-- diagram: diagram-01.cir -->

KCL at $out$:

$$
\begin{aligned}
g_{m1}v_{in} + \frac{v_{out}}{r_{O1}} + \frac{v_{out}}{r_{O2}} &= 0\\
A_v = \frac{v_{out}}{v_{in}} &= -g_{m1}\,(r_{O1}\|r_{O2}) .
\end{aligned}
$$

With $g_{m1} = 2I_D/V_{ov1}$ and $r_O = 1/(\lambda I_D)$:

$$
\begin{aligned}
r_{O1}\|r_{O2} &= \frac{1}{1/r_{O1} + 1/r_{O2}} = \frac{1}{\lambda_1I_D + \lambda_2I_D} = \frac{1}{(\lambda_1 + \lambda_2)I_D},\\
|A_v| &= \frac{2I_D}{V_{ov1}}\cdot\frac{1}{(\lambda_1 + \lambda_2)I_D} = \frac{2}{(\lambda_1 + \lambda_2)\,V_{ov1}} .
\end{aligned}
$$

The bias current cancels: the gain depends only on $V_{ov1}$ and on the channel lengths through

$$\lambda_1 = (0.1\ \mathrm{V^{-1}})\frac{0.5\ \mu\mathrm{m}}{L_1} = \frac{0.05\ \mu\mathrm{m/V}}{L_1}, \qquad \lambda_2 = (0.2\ \mathrm{V^{-1}})\frac{0.5\ \mu\mathrm{m}}{L_2} = \frac{0.1\ \mu\mathrm{m/V}}{L_2} .$$

**Minimum length is not enough.** With $L_1 = L_2 = 0.5$ μm, $\lambda_1 + \lambda_2 = 0.3\ \mathrm{V^{-1}}$, and a gain of 100 would need $V_{ov1} = 2/(0.3 \times 100) = 0.067$ V, in weak inversion (and with an enormous $W_1$). A reasonable $V_{ov1} = 0.4$ V gives only $2/(0.3\times0.4) = 16.7$. So the channels must be longer.

### Step 3 — Choose the free parameters

Two constraints fix two of the four quantities $V_{ov1}$, $|V_{ov2}|$, $L_1$, $L_2$ (the widths then follow from the square law). Two choices are free:

1. **Equal lengths**, $L_1 = L_2 = L$. Then $\lambda_1 + \lambda_2 = (0.05 + 0.1)\ \mu\mathrm{m/V}/L = (0.15\ \mu\mathrm{m/V})/L$ and the gain condition becomes
$$
\begin{aligned}
\frac{2}{(0.15\ \mu\mathrm{m/V}/L)\,V_{ov1}} &= 100\\
\frac{2L}{(0.15\ \mu\mathrm{m/V})\,V_{ov1}} &= 100\\
L &= \frac{100\times0.15\ \mu\mathrm{m/V}}{2}\,V_{ov1} = (7.5\ \mu\mathrm{m/V})\,V_{ov1} .
\end{aligned}
$$
2. **Equal overdrives**, $V_{ov1} = |V_{ov2}| = 0.8\ \mathrm{V}/2 = 0.4$ V, which satisfies the swing constraint.

Then

$$L = (7.5\ \mu\mathrm{m/V})(0.4\ \mathrm{V}) = 3\ \mu\mathrm{m}, \qquad L_1 = L_2 = 3\ \mu\mathrm{m}.$$

### Step 4 — Widths from the square law

$W/L = 2I_D/(\mu C_{ox}V_{ov}^2)$, with $\mu_pC_{ox}$ for the PMOS (the factor $1 + \lambda V_{DS}$, a few percent with these long channels, is neglected in the sizing).

**$M_1$ (NMOS):**

$$
\begin{aligned}
\left(\frac{W}{L}\right)_1 &= \frac{2\,(1\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.4\ \mathrm{V})^2} = \frac{2000\ \mu\mathrm{A}}{21.44\ \mu\mathrm{A}} = 93.3,\\
W_1 &= 93.3\times3\ \mu\mathrm{m} = 280\ \mu\mathrm{m}.
\end{aligned}
$$

**$M_2$ (PMOS):**

$$
\begin{aligned}
\left(\frac{W}{L}\right)_2 &= \frac{2\,(1\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(0.4\ \mathrm{V})^2} = \frac{2000\ \mu\mathrm{A}}{6.144\ \mu\mathrm{A}} = 325.5,\\
W_2 &= 325.5\times3\ \mu\mathrm{m} = 977\ \mu\mathrm{m}.
\end{aligned}
$$

### Step 5 — Verify the design

$$
\begin{aligned}
\lambda_1 &= \frac{0.05\ \mu\mathrm{m/V}}{3\ \mu\mathrm{m}} = 0.0167\ \mathrm{V^{-1}}, & r_{O1} &= \frac{1}{(0.0167\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 60\ \mathrm{k}\Omega,\\
\lambda_2 &= \frac{0.1\ \mu\mathrm{m/V}}{3\ \mu\mathrm{m}} = 0.0333\ \mathrm{V^{-1}}, & r_{O2} &= \frac{1}{(0.0333\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 30\ \mathrm{k}\Omega,
\end{aligned}
$$

$$
\begin{aligned}
r_{O1}\|r_{O2} &= \frac{60\times30}{60 + 30}\ \mathrm{k}\Omega = 20\ \mathrm{k}\Omega,\\
g_{m1} &= \frac{2I_D}{V_{ov1}} = \frac{2\,(1\ \mathrm{mA})}{0.4\ \mathrm{V}} = 5\ \mathrm{mS},\\
|A_v| &= (5\ \mathrm{mS})(20\ \mathrm{k}\Omega) = 100.\ \checkmark
\end{aligned}
$$

**Swing:** $V_{out}$ ranges from $V_{ov1} = 0.4$ V to $V_{DD} - |V_{ov2}| = 2.6$ V, a span of 2.2 V. ✓

**Bias voltages:** $V_{in} = V_{TH1} + V_{ov1} = 0.7 + 0.4 = 1.1$ V and $V_b = V_{DD} - |V_{TH2}| - |V_{ov2}| = 3 - 0.8 - 0.4 = 1.8$ V. For a symmetric swing the output should rest near $(0.4 + 2.6)/2 = 1.5$ V; in practice feedback sets this level, since a gain-of-100 stage is very sensitive to small current mismatches.

### Step 6 — Other valid designs

With $L_1 = L_2 = L = (7.5\ \mu\mathrm{m/V})V_{ov1}$, other splits of the 0.8-V budget give:

| $V_{ov1}$ | $\lvert V_{ov2}\rvert$ | $L$ | $(W/L)_1$, $W_1$ | $(W/L)_2$, $W_2$ | $r_{O1}\parallel r_{O2}$ | $g_{m1}$ |
|---|---|---|---|---|---|---|
| 0.4 V | 0.4 V | 3 μm | 93.3, 280 μm | 325.5, 977 μm | 20 kΩ | 5 mS |
| 0.3 V | 0.5 V | 2.25 μm | 166, 373 μm | 208, 469 μm | 15 kΩ | 6.7 mS |
| 0.2 V | 0.6 V | 1.5 μm | 373, 560 μm | 145, 217 μm | 10 kΩ | 10 mS |

All three give $|A_v| = 100$ and a 2.2-V swing. A smaller $V_{ov1}$ allows shorter channels (larger $g_{m1}$) at the cost of a wider $M_1$, while the PMOS, with its larger overdrive, becomes smaller. Unequal lengths are also allowed, as long as $(\lambda_1 + \lambda_2)V_{ov1} = 0.02$, i.e. $V_{ov1}\,(0.05\ \mu\mathrm{m}/L_1 + 0.1\ \mu\mathrm{m}/L_2) = 0.02\ \mathrm{V}$.

### Result

Two constraints define the design:

- **Swing:** $V_{DD} - V_{ov1} - |V_{ov2}| = 2.2$ V, so $V_{ov1} + |V_{ov2}| = 0.8$ V.
- **Gain:** $g_{m1}(r_{O1}\|r_{O2}) = \dfrac{2}{(\lambda_1 + \lambda_2)V_{ov1}} = 100$, with $\lambda_1 = (0.05\ \mu\mathrm{m/V})/L_1$ and $\lambda_2 = (0.1\ \mu\mathrm{m/V})/L_2$. With $L_1 = L_2 = L$: $L = (7.5\ \mu\mathrm{m/V})\,V_{ov1}$.

One complete design (equal overdrives of 0.4 V, equal lengths):

$$M_1:\ W_1/L_1 \approx 280\ \mu\mathrm{m}/3\ \mu\mathrm{m}\ (93.3), \qquad M_2:\ W_2/L_2 \approx 977\ \mu\mathrm{m}/3\ \mu\mathrm{m}\ (325.5),$$

giving $g_{m1} = 5$ mS, $r_{O1} = 60\ \mathrm{k}\Omega$, $r_{O2} = 30\ \mathrm{k}\Omega$ and a gain of $5\ \mathrm{mS}\times20\ \mathrm{k}\Omega = 100$. Another valid choice is $V_{ov1} = 0.2$ V, $|V_{ov2}| = 0.6$ V, $L = 1.5$ μm, $W_1 \approx 560$ μm, $W_2 \approx 217$ μm.

**Common mistake.** Keeping $\lambda$ at its $L = 0.5$ μm values: then $\lambda_1 + \lambda_2 = 0.3\ \mathrm{V^{-1}}$ and the gain stays far below 100 (16.7 at $V_{ov1} = 0.4$ V). Widening the devices does not help, since the gain does not depend on $W$; the length must grow.

**Common mistake.** Putting threshold voltages into the swing budget, e.g. taking the lowest output as $V_{TH}$ or $V_{in}$. The limits $V_{out} \ge V_{ov1}$ and $V_{DD} - V_{out} \ge |V_{ov2}|$ contain only overdrives.

**Common mistake.** Sizing the PMOS with $\mu_nC_{ox}$. With $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$, $M_2$ needs a $W/L$ about 3.5 times larger than $M_1$ for the same current and overdrive.
