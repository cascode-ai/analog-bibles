# Detailed solution - R087

**Approach.** The specifications give two equations. The **output swing** fixes the sum of the two overdrive voltages. The **gain** $g_{m1}(r_{O1}\|r_{O2})$ reduces to $2/[(\lambda_1 + \lambda_2)V_{ov1}]$ and, because $\lambda \propto 1/L$, fixes the channel lengths once $V_{ov1}$ is chosen. The square law at 1 mA then gives the widths. Since there are more unknowns ($W_1$, $L_1$, $W_2$, $L_2$) than constraints, we make and state some free choices and present one complete design.

### Step 1 — The circuit

From the figure: $M_1$ is an NMOS common-source (CS) amplifier (gate at $V_{in}$, source at ground, drain at $V_{out}$). $M_2$ is a PMOS with source at $V_{DD} = 3$ V and gate at a fixed bias voltage $V_b$: it is a **current-source load**. Both transistors carry the bias current $I_D = 1$ mA.

Define the **overdrive voltages** $V_{ov1} = V_{GS1} - V_{TH1}$ and $|V_{ov2}| = V_{SG2} - |V_{TH2}|$.

### Step 2 — Swing constraint

The output can move only as far as both transistors stay saturated.

- **Lower limit.** $M_1$ stays saturated while $V_{DS1} \ge V_{GS1} - V_{TH1}$, i.e. $V_{out} \ge V_{ov1}$. (With a gain of 100, a 2.2-V output swing needs only 22 mV peak-to-peak at the input, so $V_{ov1}$ is essentially constant during the swing.)
- **Upper limit.** $M_2$ stays saturated while $V_{SD2} \ge |V_{ov2}|$, i.e. $V_{DD} - V_{out} \ge |V_{ov2}|$, or $V_{out} \le V_{DD} - |V_{ov2}|$.

The allowed range is therefore

$$V_{ov1} \le V_{out} \le V_{DD} - |V_{ov2}| ,$$

and its width is the swing:

$$
\begin{aligned}
V_{DD} - |V_{ov2}| - V_{ov1} &= 2.2\ \mathrm{V}\\
V_{ov1} + |V_{ov2}| &= 3\ \mathrm{V} - 2.2\ \mathrm{V} = 0.8\ \mathrm{V}.
\end{aligned}
$$

Only overdrives appear here, not threshold voltages: the gate voltages adjust to whatever the thresholds are.

### Step 3 — Gain constraint

**Small-signal model.** $M_2$'s gate is at the constant voltage $V_b$ and its source at $V_{DD}$, both AC grounds, so $v_{sg2} = 0$ and its controlled source carries no current; only its output resistance $r_{O2}$ remains, from $out$ to AC ground. $M_1$ contributes a current source $g_{m1}v_{in}$ from $out$ to ground and its output resistance $r_{O1}$ from $out$ to ground.

<!-- diagram: diagram-01.cir -->

**KCL at $out$**:

$$
\begin{aligned}
g_{m1}v_{in} + \frac{v_{out}}{r_{O1}} + \frac{v_{out}}{r_{O2}} &= 0\\
A_v = \frac{v_{out}}{v_{in}} &= -g_{m1}\,(r_{O1}\|r_{O2}) .
\end{aligned}
$$

**Express it through the design variables.** Use $g_{m1} = 2I_D/V_{ov1}$ and $r_O = 1/(\lambda I_D)$:

$$
\begin{aligned}
r_{O1}\|r_{O2} &= \frac{1}{1/r_{O1} + 1/r_{O2}} = \frac{1}{\lambda_1I_D + \lambda_2I_D} = \frac{1}{(\lambda_1 + \lambda_2)I_D},\\
|A_v| &= \frac{2I_D}{V_{ov1}}\cdot\frac{1}{(\lambda_1 + \lambda_2)I_D} = \frac{2}{(\lambda_1 + \lambda_2)\,V_{ov1}} .
\end{aligned}
$$

The bias current cancels. The gain depends only on $V_{ov1}$ and on the two $\lambda$'s, i.e. on the channel lengths.

**Length scaling.** $\lambda$ is inversely proportional to $L$, and the given values hold at $L = 0.5$ μm:

$$\lambda_1 = (0.1\ \mathrm{V^{-1}})\frac{0.5\ \mu\mathrm{m}}{L_1} = \frac{0.05\ \mu\mathrm{m/V}}{L_1}, \qquad \lambda_2 = (0.2\ \mathrm{V^{-1}})\frac{0.5\ \mu\mathrm{m}}{L_2} = \frac{0.1\ \mu\mathrm{m/V}}{L_2} .$$

**Why minimum length is not enough.** With $L_1 = L_2 = 0.5$ μm, $\lambda_1 + \lambda_2 = 0.3\ \mathrm{V^{-1}}$. A gain of 100 would require $V_{ov1} = 2/(0.3 \times 100) = 0.067$ V, which is in weak inversion where the square law no longer applies (and $W_1$ would be enormous). With a reasonable $V_{ov1} = 0.4$ V the gain would be only $2/(0.3\times0.4) = 16.7$. So the channels must be made longer.

### Step 4 — Choose the free parameters

We have two constraints, the swing equation and the gain equation, but four free quantities: $V_{ov1}$, $|V_{ov2}|$, $L_1$, $L_2$ (the widths then follow from the square law). Two choices are free:

1. **Equal lengths**, $L_1 = L_2 = L$. Then $\lambda_1 + \lambda_2 = (0.05 + 0.1)\ \mu\mathrm{m/V}/L = (0.15\ \mu\mathrm{m/V})/L$ and the gain condition becomes
$$
\begin{aligned}
\frac{2}{(0.15\ \mu\mathrm{m/V}/L)\,V_{ov1}} &= 100\\
\frac{2L}{(0.15\ \mu\mathrm{m/V})\,V_{ov1}} &= 100\\
L &= \frac{100\times0.15\ \mu\mathrm{m/V}}{2}\,V_{ov1} = (7.5\ \mu\mathrm{m/V})\,V_{ov1} .
\end{aligned}
$$
2. **Equal overdrives**, $V_{ov1} = |V_{ov2}| = 0.8\ \mathrm{V}/2 = 0.4$ V. This satisfies the swing constraint.

Then

$$L = (7.5\ \mu\mathrm{m/V})(0.4\ \mathrm{V}) = 3\ \mu\mathrm{m}, \qquad L_1 = L_2 = 3\ \mu\mathrm{m}.$$

### Step 5 — Widths from the square law

Saturation current: $I_D = \frac12\mu C_{ox}(W/L)V_{ov}^2$, so $W/L = 2I_D/(\mu C_{ox}V_{ov}^2)$. The PMOS must use $\mu_pC_{ox}$. (The factor $1 + \lambda V_{DS}$, only a few percent with these long channels, is neglected in the sizing, as usual.)

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

### Step 6 — Verify the design

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

**Swing:** $V_{out}$ can range from $V_{ov1} = 0.4$ V to $V_{DD} - |V_{ov2}| = 2.6$ V, a span of 2.2 V. ✓

**Bias voltages that go with it:** $V_{in} = V_{TH1} + V_{ov1} = 0.7 + 0.4 = 1.1$ V, and $V_b = V_{DD} - |V_{TH2}| - |V_{ov2}| = 3 - 0.8 - 0.4 = 1.8$ V. For a symmetric swing the output should rest near the middle of its range, $(0.4 + 2.6)/2 = 1.5$ V. In practice this DC level is set by feedback, because a stage with a gain of 100 is very sensitive to small mismatches between the two currents.

### Step 7 — Other valid designs

The two free choices can be made differently. With $L_1 = L_2 = L = (7.5\ \mu\mathrm{m/V})V_{ov1}$, other splits of the 0.8-V budget give:

| $V_{ov1}$ | $\lvert V_{ov2}\rvert$ | $L$ | $(W/L)_1$, $W_1$ | $(W/L)_2$, $W_2$ | $r_{O1}\parallel r_{O2}$ | $g_{m1}$ |
|---|---|---|---|---|---|---|
| 0.4 V | 0.4 V | 3 μm | 93.3, 280 μm | 325.5, 977 μm | 20 kΩ | 5 mS |
| 0.3 V | 0.5 V | 2.25 μm | 166, 373 μm | 208, 469 μm | 15 kΩ | 6.7 mS |
| 0.2 V | 0.6 V | 1.5 μm | 373, 560 μm | 145, 217 μm | 10 kΩ | 10 mS |

All three give $|A_v| = 100$ and a 2.2-V swing. A smaller $V_{ov1}$ allows shorter channels (because $g_{m1}$ is larger) at the cost of a wider $M_1$; the PMOS, with its larger overdrive, then becomes smaller. Unequal lengths are also allowed, as long as $(\lambda_1 + \lambda_2)V_{ov1} = 0.02$, i.e. $V_{ov1}\,(0.05\ \mu\mathrm{m}/L_1 + 0.1\ \mu\mathrm{m}/L_2) = 0.02\ \mathrm{V}$.

### Result

Two constraints define the design:

- **Swing:** $V_{DD} - V_{ov1} - |V_{ov2}| = 2.2$ V, so $V_{ov1} + |V_{ov2}| = 0.8$ V.
- **Gain:** $g_{m1}(r_{O1}\|r_{O2}) = \dfrac{2}{(\lambda_1 + \lambda_2)V_{ov1}} = 100$, with $\lambda_1 = (0.05\ \mu\mathrm{m/V})/L_1$ and $\lambda_2 = (0.1\ \mu\mathrm{m/V})/L_2$. With $L_1 = L_2 = L$: $L = (7.5\ \mu\mathrm{m/V})\,V_{ov1}$.

One complete design (equal overdrives of 0.4 V, equal lengths):

$$M_1:\ W_1/L_1 \approx 280\ \mu\mathrm{m}/3\ \mu\mathrm{m}\ (93.3), \qquad M_2:\ W_2/L_2 \approx 977\ \mu\mathrm{m}/3\ \mu\mathrm{m}\ (325.5),$$

giving $g_{m1} = 5$ mS, $r_{O1} = 60\ \mathrm{k}\Omega$, $r_{O2} = 30\ \mathrm{k}\Omega$ and a gain of $5\ \mathrm{mS}\times20\ \mathrm{k}\Omega = 100$. Another valid choice is $V_{ov1} = 0.2$ V, $|V_{ov2}| = 0.6$ V, $L = 1.5$ μm, $W_1 \approx 560$ μm, $W_2 \approx 217$ μm.

**Common mistake.** Keeping $\lambda$ at its $L = 0.5$ μm values. Then $\lambda_1 + \lambda_2 = 0.3\ \mathrm{V^{-1}}$, and with any reasonable overdrive the gain $2/[(\lambda_1 + \lambda_2)V_{ov1}]$ stays far below 100 (16.7 at $V_{ov1} = 0.4$ V). Increasing $W$ does not help, because the gain does not depend on $W$; the length must grow.

**Common mistake.** Putting threshold voltages into the swing budget, for example taking the lowest output as $V_{TH}$ or as $V_{in}$. The limits are set by the saturation conditions, $V_{out} \ge V_{ov1}$ and $V_{DD} - V_{out} \ge |V_{ov2}|$, which contain only overdrives.

**Common mistake.** Sizing the PMOS with $\mu_nC_{ox}$. $M_2$ must use $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$, which is why it needs a $W/L$ about 3.5 times larger than $M_1$ for the same current and overdrive.
