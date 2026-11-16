# Detailed solution - R266

**Approach.** Apply Kirchhoff's current law (KCL) at node X and at the source of $M_2$. $M_2$ and $C_1$ form a closed loop hanging from node X: any current $M_2$ draws from X comes straight back to X through $C_1$. So the left-hand $R_1$ carries no current and $V_X$ stays at $V_{DD}$. With its gate fixed at $V_{DD}$, $M_1$ draws a constant current and $V_Y$ is constant too. The only transient is internal to the $M_2$–$C_1$ loop.

### Step 1 — Reading the circuit

From the figure:

- The left $R_1$ connects $V_{DD}$ to X; the right $R_1$ connects $V_{DD}$ to Y.
- $M_2$: drain at X, gate at X (it is diode-connected), source connected **only** to the minus plate of $C_1$.
- $C_1$: plus plate at the gate node, which is node X; minus plate at $M_2$'s source. At $t = 0$ it holds $V_0$, so $V_{S2}(0) = V_X - V_0$.
- $M_1$: gate at X, source grounded, drain at Y.
- All bulks are grounded, so $M_2$ has $V_{SB2} = V_{S2}$.

Square law, $\lambda = 0$, $\beta = \mu_nC_{ox}W/L$, $V_{TH}(V_{SB}) = 0.7 + 0.45(\sqrt{0.9 + V_{SB}} - \sqrt{0.9})$ V.

### Step 2 — KCL shows that the left $R_1$ carries no current

**KCL at the source node of $M_2$.** Two elements touch it: $M_2$ and $C_1$. The current $I_{D2}$ that leaves $M_2$'s source must enter $C_1$'s minus plate:

$$I_{C1,\text{into minus plate}} = I_{D2}.$$

A capacitor passes the same current through both plates, so the same $I_{D2}$ leaves $C_1$'s plus plate and **flows into node X**.

**KCL at X.** Currents in: from $R_1$, $I_{R1} = (V_{DD} - V_X)/R_1$, and from $C_1$, $I_{D2}$. Currents out: into $M_2$'s drain, $I_{D2}$. The gates draw nothing. So

$$I_{R1} + I_{D2} = I_{D2} \quad\Longrightarrow\quad I_{R1} = 0 \quad\Longrightarrow\quad V_X = V_{DD} \ \ \text{for all } t.$$

Physically, $M_2$'s current simply **circulates** around the loop X → $M_2$ → source → $C_1$ → X. It needs nothing from the supply, so no current flows in $R_1$ and there is no drop across it.

### Step 3 — $V_Y$ is constant

$M_1$'s gate is at $V_X = V_{DD} = 3$ V and its source is grounded, so $V_{GS1} = 3$ V for all $t \ge 0$, with overdrive $V_{GS1} - V_{TH} = 2.3$ V. KCL at Y:

$$\frac{V_{DD} - V_Y}{R_1} = I_{D1}.$$

**Which region?** $M_1$ is saturated only if $V_Y \ge 2.3$ V. In saturation

$$V_Y = V_{DD} - R_1\frac{\beta}{2}(2.3\ \mathrm{V})^2 = 3 - 2.645\,\beta R_1\ \mathrm{V},$$

which is at least 2.3 V only if $\beta R_1 \le 0.7/2.645 = 0.265\ \mathrm{V^{-1}}$. That requires a very small resistor or a very weak device. For usual values $\beta R_1 \gg 0.265\ \mathrm{V^{-1}}$, so **$M_1$ is in triode** and $V_Y$ solves

$$\frac{V_{DD} - V_Y}{R_1} = \beta\left[(V_{DD} - 0.7)V_Y - \tfrac12V_Y^2\right],$$

a low value. Either way, **$V_Y$ is constant in time**, because nothing in its equation changes.

**Example** ($\beta = 2.68\ \mathrm{mA/V^2}$, $R_1 = 10\ \mathrm{k}\Omega$, so $\beta R_1 = 26.8\ \mathrm{V^{-1}}$). Multiply the triode equation by $R_1$:

$$
\begin{aligned}
3 - V_Y &= 26.8\left(2.3V_Y - 0.5V_Y^2\right) = 61.64V_Y - 13.4V_Y^2\\
13.4V_Y^2 - 62.64V_Y + 3 &= 0\\
V_Y &= \frac{62.64 - \sqrt{62.64^2 - 4(13.4)(3)}}{2(13.4)} = \frac{62.64 - 61.34}{26.8} = 0.048\ \mathrm{V}.
\end{aligned}
$$

(The other root is above $V_{DD}$ and not physical.) So $V_Y \approx 48$ mV: $M_1$ acts as a switch of about $1/[\beta(2.3\ \mathrm{V})] = 162\ \Omega$ pulling Y to ground.

### Step 4 — What does happen: $C_1$ discharges inside the loop

$C_1$ sits directly across $M_2$'s gate and source, and since $M_2$ is diode-connected also across its drain and source: $V_{GS2} = V_{DS2} = v_C$. $M_2$ is therefore always saturated when it conducts, and KCL at its source gives

$$C_1\frac{dv_C}{dt} = -I_{D2} = -\frac{\beta}{2}\left[v_C - V_{TH}(V_{DD} - v_C)\right]^2 ,$$

where the source voltage is $V_{S2} = V_{DD} - v_C$, so the body effect raises $V_{TH2}$.

- If $v_C > V_{TH2}$, $M_2$ conducts and discharges $C_1$; its source rises from $V_{DD} - V_0$.
- The discharge stops when $v_C = V_{TH2}$:
$$v_C = 0.7 + 0.45\left(\sqrt{0.9 + 3 - v_C} - \sqrt{0.9}\right).$$
Try $v_C = 1.035$ V: $\sqrt{3.9 - 1.035} = 1.693$, $0.45(1.693 - 0.949) = 0.335$, and $0.7 + 0.335 = 1.035$ ✓. So **$C_1$ ends at about 1.03 V**, and $M_2$'s source ends at about $3 - 1.03 = 1.97$ V.
- If $V_0$ is already below this threshold (about 1.03 V), $M_2$ is off from the start and nothing happens at all.

The discharge has the same slowing, hyperbolic shape as any capacitor discharged through a diode-connected MOSFET. For example, with $\beta = 2.68\ \mathrm{mA/V^2}$, $C_1 = 10$ pF and $V_0 = 2$ V: $v_C = 2.00$, 1.56, 1.39, 1.26, 1.14, 1.09 V at $t = 0$, 5, 10, 20, 50, 100 ns.

Throughout this internal transient, Steps 2–3 still hold: $V_X = V_{DD}$ and $V_Y$ is constant. Only $M_2$'s source node moves.

### Result

- **$V_X = V_{DD}$, constant for all $t$.** $M_2$'s source connects only to $C_1$, whose other plate is at X. The current $M_2$ draws from X returns to X through $C_1$, so $R_1$ carries no current (and the gate of $M_1$ draws nothing either).
- **$V_Y$ is constant**, at the level set by $M_1$ with $V_{GS1} = V_{DD}$ against $R_1$. For usual values ($\beta R_1 > 0.265\ \mathrm{V^{-1}}$) $M_1$ is in triode and $V_Y$ is low, from $(V_{DD} - V_Y)/R_1 = \beta[(V_{DD} - 0.7)V_Y - V_Y^2/2]$ (about 48 mV for $\beta = 2.68\ \mathrm{mA/V^2}$, $R_1 = 10\ \mathrm{k}\Omega$). Otherwise $M_1$ is saturated and $V_Y = V_{DD} - \tfrac{\beta R_1}{2}(2.3\ \mathrm{V})^2 \ge 2.3$ V.
- **The only transient is internal:** if $V_0 > V_{TH2}$, $C_1$ discharges through $M_2$ until its voltage equals $M_2$'s body-effect threshold, about 1.03 V ($M_2$'s source rises from $V_{DD} - V_0$ to about 1.97 V). Otherwise nothing happens.

**Common mistake.** Letting $V_X$ follow the capacitor voltage or decay toward $V_{TH}$, as in a circuit where $C_1$ is connected from X to ground. Here $C_1$ is connected between X and $M_2$'s source, so it does not set $V_X$. The node is held at $V_{DD}$ by $R_1$, which carries no current.

**Common mistake.** Reading $C_1$ as grounded or $M_2$'s source as grounded. Then the mirror would carry a current from $R_1$ and $V_X$ would sit near $V_{GS}$. With the actual connection, the loop current never reaches ground.

**Common mistake.** Letting $V_Y$ rise toward $V_{DD}$ or change with time. $M_1$'s gate is at the constant 3 V from $t = 0^+$, so its current, and hence the drop across the right-hand $R_1$, is constant.
