# Detailed solution - R442

**Approach.** KCL at each node shows which current flows in which transistor; the square law (with body effect where a source is above ground) then gives each gate-source voltage. The gate of $M_3$ is node X itself, so $V_{G3}$ follows from the current of $M_3$; the gate of $M_2$ sits one $V_{GS2}$ above X.

### Step 1 — Which current flows in which device

Call the drain of $M_3$ (gate of $M_2$) node G. $I_1$ enters G, and the gate of $M_2$ draws no dc current, so

$$I_{D3} = I_1 = 100\ \mu\mathrm{A}.$$

$I_2$ enters the output and can only flow down through $M_2$ into X and on through $M_1$ (the gate of $M_3$ draws no current), consistent with $V_{in}$ biasing $M_1$ at $I_2$:

$$I_{D2} = I_{D1} = I_2 = 0.5\ \mathrm{mA}.$$

All NMOS devices have

$$\left(\frac{W}{L}\right)_{1-3} = \frac{100\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}} = 200 ,$$

and channel-length modulation is neglected.

### Step 2 — Gate voltage of $M_3$ (which is also the voltage of X)

$M_3$ has $V_{SB3} = 0$, so its threshold is $V_{TH0} = 0.7$ V, and for 100 μA

$$
\begin{aligned}
V_{ov3} &= \sqrt{\frac{2I_{D3}}{\mu_nC_{ox}(W/L)_3}} = \sqrt{\frac{2\,(100\ \mu\mathrm{A})}{(134\ \mu\mathrm{A/V^2})(200)}}\\
&= \sqrt{\frac{2\times10^{-4}}{2.68\times10^{-2}}}\ \mathrm{V} = \sqrt{7.46\times10^{-3}}\ \mathrm{V}\\
&= 0.086\ \mathrm{V}.
\end{aligned}
$$

So

$$V_{G3} = V_{GS3} = V_{TH0} + V_{ov3} = 0.7\ \mathrm{V} + 0.086\ \mathrm{V} = 0.786\ \mathrm{V},$$

and since the gate of $M_3$ *is* node X,

$$V_X = V_{G3} \approx 0.79\ \mathrm{V}.$$

X is fixed by $M_3$, not by $M_1$: the loop $X \to M_3 \to G \to M_2 \to X$ is negative feedback (a higher X makes $M_3$ sink more than $I_1$, pulling G down and X back), so it settles where $M_3$ carries exactly $I_1$. $M_1$ only sets the current through the stack.

### Step 3 — Threshold of $M_2$ (body effect)

The source of $M_2$ is at $V_X = 0.786$ V and its bulk at ground, so $V_{SB2} = 0.786$ V in

$$V_{TH2} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB2}} - \sqrt{2|\phi_F|}\right),$$

which gives

$$
\begin{aligned}
\sqrt{0.9 + 0.786} &= \sqrt{1.686} = 1.2986,\\
\sqrt{0.9} &= 0.9487,\\
V_{TH2} &= 0.7 + 0.45\,(1.2986 - 0.9487)\ \mathrm{V}\\
&= 0.7 + 0.45\times0.3499\ \mathrm{V} = 0.7 + 0.157\ \mathrm{V}\\
&= 0.857\ \mathrm{V}.
\end{aligned}
$$

### Step 4 — Gate voltage of $M_2$

For 0.5 mA,

$$
\begin{aligned}
V_{ov2} &= \sqrt{\frac{2I_{D2}}{\mu_nC_{ox}(W/L)_2}} = \sqrt{\frac{2\,(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(200)}}\\
&= \sqrt{\frac{1\times10^{-3}}{2.68\times10^{-2}}}\ \mathrm{V} = \sqrt{0.0373}\ \mathrm{V}\\
&= 0.193\ \mathrm{V},
\end{aligned}
$$

and the gate of $M_2$ sits one gate-source voltage above X:

$$
\begin{aligned}
V_{G2} &= V_X + V_{GS2} = V_X + V_{TH2} + V_{ov2}\\
&= 0.786\ \mathrm{V} + 0.857\ \mathrm{V} + 0.193\ \mathrm{V}\\
&= 1.837\ \mathrm{V} \approx 1.84\ \mathrm{V}.
\end{aligned}
$$

Ignoring the body effect ($V_{TH2} = 0.7$ V) would give $0.786 + 0.7 + 0.193 = 1.68$ V, about 160 mV too low.

### Step 5 — Checking that every device is saturated

- **$M_1$** (also 0.5 mA with $W/L = 200$, so overdrive 0.193 V and $V_{in} = 0.7 + 0.193 = 0.893$ V): $V_{DS1} = V_X = 0.786\ \mathrm{V} > 0.193$ V. ✓
- **$M_3$**: $V_{DS3} = V_{G2} = 1.84\ \mathrm{V} > V_{ov3} = 0.086$ V. ✓
- **$M_2$**: saturated for $V_{out} \ge V_{G2} - V_{TH2} = V_X + V_{ov2} = 0.98$ V.
- **PMOS source $I_1$** ($W/L = 50/0.5 = 100$, 100 μA):
  $$|V_{ov,P1}| = \sqrt{\frac{2\,(100\ \mu\mathrm{A})}{(38.4\ \mu\mathrm{A/V^2})(100)}} = \sqrt{0.0521}\ \mathrm{V} = 0.228\ \mathrm{V},$$
  with $V_{SD} = V_{DD} - V_{G2} = 3 - 1.84 = 1.16\ \mathrm{V} > 0.228$ V. ✓
- **PMOS source $I_2$** (0.5 mA): $|V_{ov,P2}| = \sqrt{2(0.5\ \mathrm{mA})/(38.4\ \mu\mathrm{A/V^2}\times100)} = 0.51$ V, so $V_{out} \le 3 - 0.51 = 2.49$ V.

So the output can sit anywhere between about 0.98 V and 2.49 V with all devices saturated.

### Result

- Gate of $M_3$ (= node X): $V_{G3} = V_{GS3} = 0.7 + 0.086 \approx 0.79$ V.
- Gate of $M_2$: $V_{G2} = V_X + V_{TH2} + V_{ov2} = 0.786 + 0.857 + 0.193 \approx 1.84$ V, with $V_{TH2} = 0.857$ V raised by the body effect (about 1.68 V without body effect).

**Common mistake.** Assuming X is set by $V_{in}$ or by $M_1$. $M_1$ only sets the current; the feedback through $M_3$ and $M_2$ forces X to the $V_{GS3}$ that lets $M_3$ carry $I_1$.

**Common mistake.** Giving $M_3$ the current $I_2$ (or $M_2$ the current $I_1$). Since the gate of $M_2$ draws no current, all of $I_1$, and only $I_1$, flows in $M_3$.

**Common mistake.** Computing $V_{G2}$ as if the source of $M_2$ were grounded ($V_{G2} = V_{GS2} \approx 0.9$ V), or forgetting the body effect. Both $V_X$ and the raised $V_{TH2}$ must be added.
