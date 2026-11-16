# Detailed solution - R268

**Approach.** The capacitor initially lifts node X far above the supply, so the cascode $M_3$ is off and $M_1$'s current can only come through $C_1$, i.e. from the reference node. KCL at the gate node then shows that $I_{REF}$ splits equally between $M_2$ and $M_1$, so $C_1$ discharges at a constant current and $V_X$ ramps down linearly. When $V_X$ comes low enough, $M_3$ turns on, takes over $M_1$'s current, and the circuit settles at the ordinary cascode-mirror operating point.

### Step 1 — Reading the circuit

From the figure:

- $I_{REF}$ (ideal) flows into the gate node of the mirror; call it node G. The **diode-connected** $M_2$ has its gate and drain at G and its source grounded.
- $M_1$: gate at G, source grounded, drain at X.
- $M_3$: gate at the constant $V_b < V_{DD}$, source at X, drain at Y, with $R_1$ from $V_{DD}$ to Y.
- $C_1$ connects G (minus plate) to X (plus plate). At $t = 0$ it holds $V_{DD}$, so $V_X = V_G + V_{DD}$.
- All bulks are grounded; $M_3$'s source is at X, so its threshold has body effect: $V_{TH3} = 0.7 + 0.45(\sqrt{0.9 + V_X} - \sqrt{0.9})$ V.

Let $v_C = V_X - V_G$ and let $I_C$ be the current flowing from G through $C_1$ to X, so $I_C = -C_1\,dv_C/dt$.

**KCL at G:** $I_{REF} = I_{D2} + I_C$. **KCL at X:** $I_C + I_{D3} = I_{D1}$. **KCL at Y:** $(V_{DD} - V_Y)/R_1 = I_{D3}$.

### Step 2 — At $t = 0^+$: $M_3$ is off and $V_Y = V_{DD}$

At $t = 0^+$, $V_X = V_G + V_{DD}$, which is above $V_{DD}$. $M_3$'s gate is at $V_b < V_{DD}$, below both of its drain/source terminals (Y can be at most $V_{DD}$). Whichever terminal acts as the source, $V_{GS3} < 0$, so **$M_3$ is off**. No current flows in $R_1$:

$$V_Y = V_{DD}.$$

### Step 3 — Phase 1: $I_{REF}$ splits equally, $C_1$ discharges at $I_{REF}/2$

With $I_{D3} = 0$, KCL at X gives $I_C = I_{D1}$: everything $M_1$ draws comes through the capacitor from node G. KCL at G then reads

$$I_{REF} = I_{D2} + I_{D1}.$$

$M_1$ and $M_2$ have the same gate–source voltage $V_G$. $M_2$ is diode-connected and $M_1$ has a huge $V_{DS}$, so both are saturated and their currents are equal:

$$I_{D1} = I_{D2} = \frac{I_{REF}}{2} \quad\Longrightarrow\quad V_G = 0.7 + \sqrt{\frac{2(I_{REF}/2)}{\beta}} = 0.7 + \sqrt{\frac{I_{REF}}{\beta}} .$$

$V_G$ is constant, and the capacitor current is constant at $I_{REF}/2$:

$$C_1\frac{dv_C}{dt} = -\frac{I_{REF}}{2} \quad\Longrightarrow\quad V_X(t) = V_G + v_C(t) = \underbrace{0.7 + \sqrt{I_{REF}/\beta} + V_{DD}}_{V_X(0^+)} - \frac{I_{REF}}{2C_1}t .$$

**$V_X$ falls linearly** with slope $-I_{REF}/(2C_1)$, starting above $V_{DD}$. Meanwhile $V_Y = V_{DD}$.

Physically, $M_1$ acts as a constant current sink pulling the top plate of $C_1$ down, while the reference node supplies the same current to the bottom plate.

### Step 4 — Phase 2: $M_3$ turns on and takes over

$M_3$ starts to conduct when its gate–source voltage, with X now the lower terminal, exceeds its threshold:

$$V_b - V_X = V_{TH3}(V_X) \quad\Longleftrightarrow\quad V_X + V_{TH3}(V_X) = V_b .$$

This happens after

$$t_1 = \frac{V_X(0^+) - V_{X,on}}{I_{REF}/(2C_1)}, \qquad V_{X,on} = V_b - V_{TH3}(V_{X,on}).$$

From then on $M_3$ supplies part of $M_1$'s current ($I_{D3} = I_{D1} - I_C$):

- $I_C$ shrinks, so $C_1$ discharges more and more slowly and $V_X$'s descent **slows down**;
- $I_{D2} = I_{REF} - I_C$ grows toward $I_{REF}$, so $V_G$ rises from $0.7 + \sqrt{I_{REF}/\beta}$ to $0.7 + \sqrt{2I_{REF}/\beta}$;
- $I_{D3}$ grows from 0 to $I_{REF}$, so **$V_Y$ falls** from $V_{DD}$ toward $V_{DD} - R_1I_{REF}$.

**Final approach.** Near the end the approach is exponential. Linearize about the final point, where $I_C = 0$ and all three devices carry $I_{REF}$ with $g_m = \sqrt{2\beta I_{REF}}$. Let $\eta = \gamma/(2\sqrt{0.9 + V_X})$ describe $M_3$'s body effect: since $I_{D3} = \tfrac{\beta}{2}[V_b - V_X - V_{TH3}(V_X)]^2$, raising $V_X$ lowers $I_{D3}$ at the rate $(1 + \eta)g_m$. For small deviations $\delta V_G$, $\delta V_X$, $\delta I_C$:

$$
\begin{aligned}
\text{KCL at G:}\quad & \delta I_C = -g_m\,\delta V_G,\\
\text{KCL at X:}\quad & \delta I_C = \delta I_{D1} - \delta I_{D3} = g_m\,\delta V_G + (1 + \eta)g_m\,\delta V_X .
\end{aligned}
$$

Equating the two gives $\delta V_G = -\tfrac12(1 + \eta)\,\delta V_X$ and $\delta I_C = \tfrac12(1 + \eta)g_m\,\delta V_X$. The capacitor voltage deviation is $\delta v_C = \delta V_X - \delta V_G = \tfrac12(3 + \eta)\,\delta V_X$, so $C_1\,d(\delta v_C)/dt = -\delta I_C$ becomes

$$C_1\frac{3 + \eta}{2}\frac{d\,\delta V_X}{dt} = -\frac{(1 + \eta)g_m}{2}\,\delta V_X \quad\Longrightarrow\quad \tau_2 = \frac{C_1\,(3 + \eta)}{(1 + \eta)\,g_m} \approx \frac{2.7\,C_1}{g_m}.$$

### Step 5 — Final steady state

When $I_C = 0$, the capacitor is idle and the circuit is an ordinary cascode mirror:

$$
\begin{aligned}
I_{D2} &= I_{REF}, \qquad V_G = V_{GS}(I_{REF}) = 0.7 + \sqrt{2I_{REF}/\beta},\\
I_{D1} &= I_{D3} = I_{REF} \ \ (M_1 \text{ saturated, as given}),\\
V_X &= V_b - V_{GS3}(I_{REF}) = V_b - V_{TH3}(V_X) - \sqrt{2I_{REF}/\beta},\\
V_Y &= V_{DD} - R_1I_{REF},\\
v_C &= V_X - V_G = V_b - V_{GS3} - V_{GS2}.
\end{aligned}
$$

### Step 6 — Numerical example

Take $\beta = 2.68\ \mathrm{mA/V^2}$ ($W/L = 10/0.5$), $I_{REF} = 100\ \mu\mathrm{A}$, $R_1 = 10\ \mathrm{k}\Omega$, $C_1 = 10$ pF, $V_b = 2$ V.

**Phase 1:**

$$
\begin{aligned}
V_G &= 0.7 + \sqrt{100\ \mu\mathrm{A}/2.68\ \mathrm{mA/V^2}} = 0.7 + 0.193 = 0.893\ \mathrm{V},\\
V_X(0^+) &= 0.893 + 3 = 3.893\ \mathrm{V},\\
\text{slope} &= -\frac{50\ \mu\mathrm{A}}{10\ \mathrm{pF}} = -5\ \mathrm{V}/\mu\mathrm{s}.
\end{aligned}
$$

**Turn-on of $M_3$:** solve $V_X + 0.7 + 0.45(\sqrt{0.9 + V_X} - 0.949) = 2$ V. Try $V_X = 1.092$ V: $V_{TH3} = 0.7 + 0.45(\sqrt{1.992} - 0.949) = 0.908$ V, and the sum is 2.000 V ✓. Then

$$t_1 = \frac{3.893 - 1.092}{5\ \mathrm{V}/\mu\mathrm{s}} = 0.560\ \mu\mathrm{s}.$$

**Final state:** $V_G = 0.7 + 0.273 = 0.973$ V. $V_X$ solves $V_X + V_{TH3}(V_X) = 2 - 0.273 = 1.727$ V, giving $V_X = 0.857$ V ($V_{TH3} = 0.870$ V). $V_Y = 3 - 1 = 2.00$ V, and $v_C = 0.857 - 0.973 = -0.116$ V. Check $M_1$: $V_{DS1} = 0.857\ \mathrm{V} > 0.273$ V, saturated ✓. With $g_m = 0.732$ mS and $\eta = 0.17$: $\tau_2 = (10\ \mathrm{pF})(3.17)/(1.17\times0.732\ \mathrm{mS}) = 37$ ns.

| $t$ | $V_X$ (V) | $V_Y$ (V) | $I_C$ | Phase |
|---|---|---|---|---|
| $0^+$ | 3.893 | 3.000 | 50 μA | 1 ($M_3$ off) |
| 300 ns | 2.393 | 3.000 | 50 μA | 1 |
| 560 ns | 1.093 | 3.000 | 50 μA | $M_3$ turns on |
| 600 ns | 0.953 | 2.649 | 32 μA | 2 |
| 650 ns | 0.884 | 2.218 | 11 μA | 2 |
| 700 ns | 0.864 | 2.061 | 3 μA | 2 |
| $\infty$ | 0.857 | 2.000 | 0 | final |

### Result

- **$t = 0^+$:** node X is at the gate/drain voltage of $M_2$ plus $V_{DD}$, i.e. *above* $V_{DD}$, so $M_3$ is off and $V_Y = V_{DD}$. The gate node settles at $V_{TH} + \sqrt{I_{REF}/\beta}$, because $I_{REF}$ splits equally: half into $M_2$ and half through $C_1$ into $M_1$ (equal $V_{GS}$, both saturated).
- **Phase 1:** $C_1$ discharges at the constant current $I_{REF}/2$, so $V_X$ falls linearly with slope $-I_{REF}/(2C_1)$, from $V_{TH} + \sqrt{I_{REF}/\beta} + V_{DD}$, while $V_Y$ stays at $V_{DD}$.
- **Phase 2:** when $V_X$ reaches $V_b - V_{TH3}(V_X)$, $M_3$ turns on and gradually takes over $M_1$'s current. The capacitor current decays to zero, $V_X$ settles (slowing down) at $V_b - V_{GS3}(I_{REF})$, and $V_Y$ falls from $V_{DD}$ to $V_{DD} - R_1I_{REF}$.
- **Final state:** $M_2$ and $M_1$ carry $I_{REF}$, the gate node is at $V_{GS}(I_{REF})$, and $C_1$ holds $V_b - V_{GS3} - V_{GS2}$.

**Common mistake.** Treating $C_1$ as a capacitor from X to ground, so that $V_X$ starts at $V_{DD}$. The capacitor sits between X and the gate node, so at $t = 0^+$ X is at $V_G + V_{DD}$, almost 0.9 V *above* the supply.

**Common mistake.** Using a ramp slope of $I_{REF}/C_1$. While $M_3$ is off, $M_1$'s current comes from node G through $C_1$, so the reference current is shared equally by $M_1$ and $M_2$. Only half of it, $I_{REF}/2$, discharges the capacitor.

**Common mistake.** Letting $V_Y$ drop at $t = 0$. $M_3$ cannot conduct while its gate ($V_b$) is below both of its other terminals, so no current flows in $R_1$ until $V_X$ has ramped down to $V_b - V_{TH3}$.
