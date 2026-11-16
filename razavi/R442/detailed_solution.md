# Detailed solution - R442

**Approach.** Use KCL at each node to find which current flows through which transistor, then use the square law in saturation (with the body effect where a source is not at ground) to get each gate-source voltage. The gate of $M_3$ is node X itself, so $V_{G3}$ follows from the current of $M_3$; the gate of $M_2$ sits one gate-source voltage of $M_2$ above X.

### Step 1 — Which current flows in which device

Reading the figure:

- $M_1$: input device, gate at $V_{in}$, source grounded, drain at X.
- $M_2$: cascode device, source at X, drain at $V_{out}$, gate at node G (our name for the drain of $M_3$).
- $M_3$: auxiliary amplifier, gate at X, source grounded, drain at G.
- $I_1$ (PMOS) feeds node G; $I_2$ (PMOS) feeds the output node.

**KCL at G.** The current $I_1$ enters G. The gate of $M_2$ draws no DC current, so all of $I_1$ must flow down through $M_3$:

$$I_{D3} = I_1 = 100\ \mu\mathrm{A}.$$

**KCL at the output and at X.** $I_2$ enters the output node and can only flow down through $M_2$ into X. The gate of $M_3$ draws no current, so the same current flows through $M_1$. This is consistent with $V_{in}$ being biased so that $M_1$ carries $I_2$:

$$I_{D2} = I_{D1} = I_2 = 0.5\ \mathrm{mA}.$$

All NMOS devices have

$$\left(\frac{W}{L}\right)_{1-3} = \frac{100\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}} = 200 .$$

We use the square law in saturation, $I_D = \tfrac12\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})^2$, neglecting channel-length modulation as instructed. Its inverse gives the overdrive voltage $V_{ov} = V_{GS} - V_{TH} = \sqrt{2I_D/(\mu_nC_{ox}W/L)}$.

### Step 2 — Gate voltage of $M_3$ (which is also the voltage of X)

$M_3$ has its source and bulk at ground, so $V_{SB3} = 0$ and its threshold is $V_{TH0} = 0.7$ V. Its overdrive for 100 μA:

$$
\begin{aligned}
V_{ov3} &= \sqrt{\frac{2I_{D3}}{\mu_nC_{ox}(W/L)_3}} = \sqrt{\frac{2\,(100\ \mu\mathrm{A})}{(134\ \mu\mathrm{A/V^2})(200)}}\\
&= \sqrt{\frac{2\times10^{-4}}{2.68\times10^{-2}}}\ \mathrm{V} = \sqrt{7.46\times10^{-3}}\ \mathrm{V}\\
&= 0.086\ \mathrm{V}.
\end{aligned}
$$

So

$$V_{G3} = V_{GS3} = V_{TH0} + V_{ov3} = 0.7\ \mathrm{V} + 0.086\ \mathrm{V} = 0.786\ \mathrm{V}.$$

The gate of $M_3$ *is* node X, so

$$V_X = V_{G3} \approx 0.79\ \mathrm{V}.$$

**Why X is fixed by $M_3$ and not by $M_1$.** The loop $X \to M_3 \to G \to M_2 \to X$ is a negative-feedback loop. If X were higher, $M_3$ would sink more than $I_1$, pull G down, reduce $V_{GS2}$, and lower X again. The loop settles where $M_3$ carries exactly $I_1$, i.e. where $V_X = V_{GS3}(I_1)$. $M_1$ is a current source here; its gate voltage sets the current through the stack, not the voltage at X.

### Step 3 — Threshold of $M_2$ (body effect)

The source of $M_2$ is at $V_X = 0.786$ V while its bulk is at ground, so $V_{SB2} = 0.786$ V. The threshold rises according to

$$V_{TH2} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB2}} - \sqrt{2|\phi_F|}\right),$$

where $\gamma = 0.45\ \mathrm{V^{1/2}}$ is the body-effect coefficient and $2|\phi_F| = 0.9$ V. Numerically:

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

Overdrive of $M_2$ for 0.5 mA:

$$
\begin{aligned}
V_{ov2} &= \sqrt{\frac{2I_{D2}}{\mu_nC_{ox}(W/L)_2}} = \sqrt{\frac{2\,(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(200)}}\\
&= \sqrt{\frac{1\times10^{-3}}{2.68\times10^{-2}}}\ \mathrm{V} = \sqrt{0.0373}\ \mathrm{V}\\
&= 0.193\ \mathrm{V}.
\end{aligned}
$$

The gate of $M_2$ sits one gate-source voltage above its source X:

$$
\begin{aligned}
V_{G2} &= V_X + V_{GS2} = V_X + V_{TH2} + V_{ov2}\\
&= 0.786\ \mathrm{V} + 0.857\ \mathrm{V} + 0.193\ \mathrm{V}\\
&= 1.837\ \mathrm{V} \approx 1.84\ \mathrm{V}.
\end{aligned}
$$

If the body effect were ignored ($V_{TH2} = 0.7$ V), the result would be $0.786 + 0.7 + 0.193 = 1.68$ V, about 160 mV too low.

### Step 5 — Checking that every device is saturated

- **$M_1$** (overdrive 0.193 V, since it also carries 0.5 mA with $W/L = 200$; this needs $V_{in} = 0.7 + 0.193 = 0.893$ V): $V_{DS1} = V_X = 0.786\ \mathrm{V} > 0.193$ V. ✓
- **$M_3$**: $V_{DS3} = V_{G2} = 1.84\ \mathrm{V} > V_{ov3} = 0.086$ V. ✓
- **$M_2$**: saturated as long as $V_{out} \ge V_{G2} - V_{TH2} = V_X + V_{ov2} = 0.98$ V.
- **PMOS source $I_1$** ($W/L = 50/0.5 = 100$, 100 μA):
  $$|V_{ov,P1}| = \sqrt{\frac{2\,(100\ \mu\mathrm{A})}{(38.4\ \mu\mathrm{A/V^2})(100)}} = \sqrt{0.0521}\ \mathrm{V} = 0.228\ \mathrm{V},$$
  and its source-drain voltage is $V_{DD} - V_{G2} = 3 - 1.84 = 1.16\ \mathrm{V} > 0.228$ V. ✓
- **PMOS source $I_2$** (0.5 mA): $|V_{ov,P2}| = \sqrt{2(0.5\ \mathrm{mA})/(38.4\ \mu\mathrm{A/V^2}\times100)} = 0.51$ V, so $V_{out} \le 3 - 0.51 = 2.49$ V.

So the output can sit anywhere between about 0.98 V and 2.49 V with all devices saturated.

### Result

- Gate of $M_3$ (= node X): $V_{G3} = V_{GS3} = 0.7 + 0.086 \approx 0.79$ V.
- Gate of $M_2$: $V_{G2} = V_X + V_{TH2} + V_{ov2} = 0.786 + 0.857 + 0.193 \approx 1.84$ V, with $V_{TH2} = 0.857$ V raised by the body effect (it would be about 1.68 V without body effect).

**Common mistake.** Assuming X is set by $V_{in}$ or by $M_1$. $M_1$ only sets the current. The feedback through $M_3$ and $M_2$ forces X to the gate-source voltage that lets $M_3$ carry $I_1$.

**Common mistake.** Giving $M_3$ the current $I_2$ (or $M_2$ the current $I_1$). KCL at node G shows that all of $I_1$, and only $I_1$, flows in $M_3$, because the gate of $M_2$ draws no current.

**Common mistake.** Computing $V_{G2}$ as if the source of $M_2$ were grounded ($V_{G2} = V_{GS2} \approx 0.9$ V), or forgetting the body effect. The source of $M_2$ is at X, so both $V_X$ and the raised threshold $V_{TH2}$ must be added.
