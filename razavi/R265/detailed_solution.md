# Detailed solution - R265

**Approach.** Node Y touches only $C_1$ and the drain of $M_1$. So whatever current $M_1$ draws must flow through $C_1$, which means it must come from node X and therefore from $R_1$. Writing KCL at X and Y shows that $V_X$ is set algebraically by $R_1$ and the two transistor currents, while $C_1$ integrates $M_1$'s current. This gives two phases: a linear ramp of $V_Y$ while $M_1$ is saturated, then a decay of $V_Y$ to zero (and a recovery of $V_X$) once $M_1$ is in triode.

### Step 1 — Reading the circuit and writing KCL

From the figure:

- $R_1$ connects $V_{DD}$ to X.
- $M_2$ is **diode-connected** at X (drain and gate at X), source grounded.
- $M_1$ has its gate at X, its source grounded and its drain at Y.
- $C_1$ connects X and Y. At $t = 0$ it holds $V_0 > 0$ with Y positive: $V_Y - V_X = V_0$.
- Nothing else is connected to Y.

Square law, $\lambda = 0$, $V_{TH} = 0.7$ V, $\beta = \mu_nC_{ox}W/L$. Let $v_C = V_Y - V_X$ be the capacitor voltage.

**KCL at Y.** The only current into Y comes through $C_1$; it leaves through $M_1$:

$$C_1\frac{dv_C}{dt} = -I_{D1}. \tag{1}$$

**KCL at X.** $R_1$ supplies $M_2$ and also the capacitor current, which flows from X through $C_1$ to Y. That capacitor current equals $I_{D1}$ by (1):

$$\frac{V_{DD} - V_X}{R_1} = I_{D2} + I_{D1}. \tag{2}$$

Equation (2) has no time derivative: given the state of $M_1$, it fixes $V_X$ instantly.

### Step 2 — Two reference levels for $V_X$

Define two voltages that will appear below:

- $V_{X0}$, the value when $M_1$ carries **no** current (only $M_2$ loads $R_1$):
$$\frac{V_{DD} - V_{X0}}{R_1} = \frac{\beta}{2}(V_{X0} - V_{TH})^2 .$$
- $V_{X1}$, the value when $M_1$ is saturated and carries the **same** current as $M_2$ (so $R_1$ supplies twice that current):
$$\frac{V_{DD} - V_{X1}}{R_1} = \beta(V_{X1} - V_{TH})^2 .$$

Since $R_1$ must supply more current in the second case, its drop is larger: $V_{X1} < V_{X0}$.

### Step 3 — Phase 1: $M_1$ saturated, $V_X$ flat, $V_Y$ ramps down linearly

At $t = 0^+$ the capacitor voltage cannot jump, so $V_Y = V_X + V_0$. $M_1$ is then saturated, since $V_{DS1} = V_X + V_0 > V_X - V_{TH}$, and it carries the same current as $M_2$ (same $V_{GS}$):

$$I_{D1} = I_{D2} = \frac{\beta}{2}(V_X - V_{TH})^2 .$$

Equation (2) becomes $(V_{DD} - V_X)/R_1 = \beta(V_X - V_{TH})^2$, so

$$V_X = V_{X1} \quad \text{(constant)}, \qquad I_{D1} = I_1 \equiv \frac{\beta}{2}(V_{X1} - V_{TH})^2 \quad \text{(constant)}.$$

$V_X$ therefore **steps down to $V_{X1}$ at $t = 0^+$**: $R_1$ suddenly has to feed two transistors.

With a constant $I_{D1}$, equation (1) integrates to a straight line:

$$v_C(t) = V_0 - \frac{I_1}{C_1}t \quad\Longrightarrow\quad V_Y(t) = V_{X1} + V_0 - \frac{I_1}{C_1}t .$$

**$V_Y$ falls linearly** with slope $-I_1/C_1$: $M_1$ acts as a constant current source discharging $C_1$, and the current is drawn through the capacitor from X.

**End of phase 1.** $M_1$ leaves saturation when $V_Y = V_X - V_{TH} = V_{X1} - V_{TH}$, i.e. after $V_Y$ has dropped by $V_0 + V_{TH}$:

$$t_1 = \frac{C_1(V_0 + V_{TH})}{I_1}.$$

### Step 4 — Phase 2: $M_1$ in triode, $V_Y \to 0$, $V_X$ recovers

Now $I_{D1} = \beta[(V_X - V_{TH})V_Y - \tfrac12V_Y^2]$, which is smaller than $I_{D2}$ and shrinks as $V_Y$ falls. Consequences:

- From (1), $C_1$ keeps discharging, but more and more slowly, so **$V_Y$ decays toward 0**.
- From (2), as $I_{D1}$ shrinks, $R_1$ has less current to supply, so its drop decreases and **$V_X$ rises from $V_{X1}$ back to $V_{X0}$**.

**Final approach.** For small $V_Y$, $M_1$ is a resistor: $I_{D1} \approx \beta(V_X - V_{TH})V_Y = g_{m0}V_Y$, with $g_{m0} = \beta(V_{X0} - V_{TH})$. (The deep-triode conductance of $M_1$ equals the saturation $g_m$ of $M_2$ at the same overdrive.) Linearize (2) about $V_{X0}$:

$$
\begin{aligned}
-\frac{\delta V_X}{R_1} &= g_{m0}\,\delta V_X + g_{m0}V_Y\\
\delta V_X &= -\frac{g_{m0}R_1}{1 + g_{m0}R_1}V_Y .
\end{aligned}
$$

So when $V_Y$ falls, $V_X$ rises. The capacitor voltage changes by $d(V_Y - V_X) = \left(1 + \frac{g_{m0}R_1}{1 + g_{m0}R_1}\right)dV_Y$. Equation (1) then gives

$$C_1\left(1 + \frac{g_{m0}R_1}{1 + g_{m0}R_1}\right)\frac{dV_Y}{dt} = -g_{m0}V_Y \quad\Longrightarrow\quad V_Y \propto e^{-t/\tau_f}, \qquad \tau_f = \frac{C_1}{g_{m0}}\left(1 + \frac{g_{m0}R_1}{1 + g_{m0}R_1}\right) \approx \frac{2C_1}{g_{m0}} .$$

**Final state:** $V_Y = 0$, $V_X = V_{X0}$, and $M_1$ is on (gate at $V_{X0}$) but carries no current because $V_{DS1} = 0$. The capacitor ends with $v_C = V_Y - V_X = -V_{X0}$: Y is now *below* X, the reverse of the initial polarity.

### Step 5 — Numerical example

Take $\beta = 2.68\ \mathrm{mA/V^2}$ ($W/L = 10/0.5$), $R_1 = 10\ \mathrm{k}\Omega$, $C_1 = 10$ pF, $V_0 = 1$ V.

**$V_{X0}$:** with $u = V_{X0} - 0.7$, $(2.3 - u)/(10\ \mathrm{k}\Omega) = (1.34\ \mathrm{mA/V^2})u^2$, i.e. $13.4u^2 + u - 2.3 = 0$:

$$u = \frac{-1 + \sqrt{1 + 4(13.4)(2.3)}}{2(13.4)} = \frac{-1 + 11.148}{26.8} = 0.379\ \mathrm{V}, \qquad V_{X0} = 1.079\ \mathrm{V}, \quad I_{D2} = 192\ \mu\mathrm{A}.$$

**$V_{X1}$:** $26.8u^2 + u - 2.3 = 0$:

$$u = \frac{-1 + \sqrt{1 + 4(26.8)(2.3)}}{2(26.8)} = \frac{-1 + 15.734}{53.6} = 0.275\ \mathrm{V}, \qquad V_{X1} = 0.975\ \mathrm{V}, \quad I_1 = (1.34\ \mathrm{mA/V^2})(0.275)^2 = 101\ \mu\mathrm{A}.$$

Check: $R_1$ carries $(3 - 0.975)/10\ \mathrm{k}\Omega = 202.5\ \mu\mathrm{A} = 2I_1$ ✓.

**Phase 1:** $V_Y(0^+) = 0.975 + 1 = 1.975$ V. The slope is $-I_1/C_1 = -101\ \mu\mathrm{A}/10\ \mathrm{pF} = -10.1\ \mathrm{V}/\mu\mathrm{s}$, and

$$t_1 = \frac{(10\ \mathrm{pF})(1 + 0.7)\ \mathrm{V}}{101\ \mu\mathrm{A}} = 168\ \mathrm{ns}, \qquad V_Y(t_1) = 0.975 - 0.7 = 0.275\ \mathrm{V}.$$

**Phase 2:** $g_{m0} = (2.68\ \mathrm{mA/V^2})(0.379\ \mathrm{V}) = 1.015$ mS, $g_{m0}R_1 = 10.15$, so

$$\tau_f = \frac{10\ \mathrm{pF}}{1.015\ \mathrm{mS}}\left(1 + \frac{10.15}{11.15}\right) = 9.85\ \mathrm{ns}\times1.91 = 18.8\ \mathrm{ns}.$$

Numerical integration of (1)–(2):

| $t$ | $V_X$ (V) | $V_Y$ (V) | $I_{D1}$ | $M_1$ |
|---|---|---|---|---|
| $0^+$ | 0.975 | 1.975 | 101 μA | saturation |
| 50 ns | 0.975 | 1.469 | 101 μA | saturation |
| 100 ns | 0.975 | 0.962 | 101 μA | saturation |
| 168 ns | 0.975 | 0.275 | 101 μA | edge of triode |
| 180 ns | 0.987 | 0.168 | 91 μA | triode |
| 200 ns | 1.029 | 0.066 | 52 μA | triode |
| 250 ns | 1.074 | 0.005 | 5 μA | triode |
| $\infty$ | 1.079 | 0 | 0 | triode, $V_{DS} = 0$ |

### Result

- **$t = 0^+$:** $V_X$ drops to $V_{X1}$, defined by $(V_{DD} - V_{X1})/R_1 = \beta(V_{X1} - V_{TH})^2$, because $R_1$ must supply both $M_2$ and $M_1$, which carry equal currents $I_1 = \tfrac{\beta}{2}(V_{X1} - V_{TH})^2$. $V_Y$ starts at $V_{X1} + V_0$.
- **Phase 1** ($M_1$ saturated): $V_X$ stays flat at $V_{X1}$ while $V_Y$ ramps down linearly with slope $-I_1/C_1$, because $M_1$'s constant current discharges $C_1$.
- **Phase 2:** when $V_Y$ reaches $V_{X1} - V_{TH}$, after $t_1 = C_1(V_0 + V_{TH})/I_1$, $M_1$ enters triode. Its current falls, $V_Y$ decays toward 0 (ever more slowly, finally with $\tau_f \approx 2C_1/g_{m0}$), and $V_X$ rises from $V_{X1}$ back to the single-diode value $V_{X0}$, with $(V_{DD} - V_{X0})/R_1 = \tfrac{\beta}{2}(V_{X0} - V_{TH})^2$.
- **Final state:** $V_Y = 0$, $V_X = V_{X0}$, $M_1$ on with zero current, $C_1$ holding $-V_{X0}$ (Y below X).

**Common mistake.** Keeping $V_X$ constant throughout. While $M_1$ conducts, its current is drawn through $C_1$ from node X, so $R_1$ supplies two transistor currents and $V_X$ sits at the lower level $V_{X1}$. Only after $M_1$'s current dies out does $V_X$ return to $V_{X0}$.

**Common mistake.** Letting $V_Y$ settle at $V_X$ or at $V_{DD}$. Y has no path to $V_{DD}$, only $M_1$ to ground (through its channel) and $C_1$. $M_1$ stays on (its gate is at $V_{X0} > V_{TH}$) and keeps sinking current until $V_{DS1} = 0$, so $V_Y \to 0$.

**Common mistake.** Describing phase 1 as an exponential RC discharge. A saturated MOSFET draws a constant current, so a capacitor discharged by it ramps *linearly*. The slowing-down tail appears only once $M_1$ is in triode.
