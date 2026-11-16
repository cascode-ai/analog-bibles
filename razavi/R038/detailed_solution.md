# Detailed solution - R038

**Approach.** Name the nodes: S (source of $M_1$, driven by $V_{in}$), G (gate) and X (drain). $C_1$ sits across gate and source, and $C_2$ across drain and gate, so the gate floats between two capacitors. At the step every node moves up by 3 V. Afterwards $M_1$ draws current out of X, and since the gate draws none, that current must flow through $C_2$ *and* $C_1$ in series. Both capacitors therefore lose the same charge. The discharge stops when the voltage on $C_1$ (which is $V_{GS}$) falls to the threshold, raised here by the body effect. Find the jump, the charge balance, the end point and the shape of the waveform.

### Step 1 — Reading the circuit and the state before the step

From the figure:

- the source of $M_1$ is node S, connected to the $+$ terminal of $V_{in}$ (a step from 0 to 3 V at $t = 0$);
- $C_1$ connects the gate G ("+") to S ("−") and holds 3 V;
- $C_2$ connects the drain X ("+") to the gate G ("−") and holds 3 V;
- the drain of $M_1$ is node X, the output;
- the bulk is grounded.

So $V_G = V_S + V_{C1}$ and $V_X = V_G + V_{C2} = V_S + V_{C1} + V_{C2}$. Just before the step ($V_S = 0$):

$$V_S = 0, \qquad V_G = 3\ \mathrm{V}, \qquad V_X = 6\ \mathrm{V}.$$

(With $V_{GS} = 3$ V the device would already be conducting for $t < 0$, so the given capacitor voltages are a snapshot at the instant of the step; we take them as the initial condition.)

### Step 2 — The jump at $t = 0$

When $V_{in}$ steps up by 3 V, neither capacitor can change its voltage instantly. So G and X move up by exactly 3 V with S:

$$V_S(0^+) = 3\ \mathrm{V}, \qquad V_G(0^+) = 6\ \mathrm{V}, \qquad V_X(0^+) = 9\ \mathrm{V}.$$

**$V_X$ jumps from 6 V to 9 V.**

### Step 3 — Operating point just after the step

$$
\begin{aligned}
V_{GS} &= V_{C1} = 3\ \mathrm{V},\\
V_{DS} &= V_{C1} + V_{C2} = 6\ \mathrm{V},\\
V_{SB} &= 3 - 0 = 3\ \mathrm{V}.
\end{aligned}
$$

The source now sits 3 V above the grounded bulk, so the threshold is raised by the body effect ($V_{TH0} = 0.7$ V, $\gamma = 0.45\ \mathrm{V^{1/2}}$, $2|\phi_F| = 0.9$ V):

$$V_{TH} = 0.7 + 0.45\left(\sqrt{0.9 + 3} - \sqrt{0.9}\right) = 0.7 + 0.45\,(1.9748 - 0.9487) = 0.7 + 0.4618 = 1.162\ \mathrm{V}.$$

$V_S$ stays at 3 V from now on (it is held by $V_{in}$), so this threshold is **constant** for $t > 0$.

The overdrive is $3 - 1.162 = 1.838$ V, smaller than $V_{DS} = 6$ V, so $M_1$ is **saturated**. With $\beta = \mu_nC_{ox}W/L$:

$$I_D(0^+) = \tfrac12\beta\,(1.838\ \mathrm{V})^2 = 1.69\,\beta\ \mathrm{V^2}.$$

### Step 4 — Where the drain current comes from: charge balance

**KCL at X.** X connects only to the drain (current $I_D$ leaving X) and to the top plate of $C_2$:

$$C_2\frac{dV_{C2}}{dt} = -I_D .$$

**KCL at G.** The gate draws no current, so whatever leaves the lower plate of $C_2$ must enter the upper plate of $C_1$. The same current flows through both capacitors:

$$C_1\frac{dV_{C1}}{dt} = C_2\frac{dV_{C2}}{dt} = -I_D .$$

So the drain current is drawn through the **series combination of $C_2$ and $C_1$**, from the $V_{in}$ node, and **both capacitors lose the same charge** $\Delta Q(t) = \int_0^t I_D\,dt$. Since $V_S$ is fixed,

$$\frac{dV_X}{dt} = \frac{dV_{C1}}{dt} + \frac{dV_{C2}}{dt} = -I_D\left(\frac{1}{C_1} + \frac{1}{C_2}\right).$$

The crucial consequence: **$V_{GS} = V_{C1}$ falls** as the discharge proceeds. The gate is not held at a fixed voltage; it is pulled down along with X.

### Step 5 — End of the discharge and the final value

In saturation the discharge continues until $V_{GS}$ falls to $V_{TH}$:

$$V_{C1}(\infty) = V_{TH} = 1.162\ \mathrm{V}.$$

The charge removed from $C_1$ is

$$\Delta Q = C_1\,(3 - 1.162)\ \mathrm{V} = 1.838\,C_1\ \mathrm{V},$$

and the same charge is removed from $C_2$:

$$V_{C2}(\infty) = 3 - \frac{\Delta Q}{C_2} = 3 - 1.838\,\frac{C_1}{C_2}\ \mathrm{V}.$$

Then

$$
\begin{aligned}
V_X(\infty) &= V_S + V_{C1}(\infty) + V_{C2}(\infty)\\
&= 3 + V_{TH} + 3 - \frac{C_1}{C_2}\,(3 - V_{TH})\\
&= 6\ \mathrm{V} + V_{TH} - \frac{C_1}{C_2}\,(3\ \mathrm{V} - V_{TH}).
\end{aligned}
$$

**For $C_1 = C_2$:** $V_X(\infty) = 6 + 1.162 - 1.838 = 5.32$ V. (Ignoring the body effect, $V_{TH} = 0.7$ V would give $6 + 0.7 - 2.3 = 4.4$ V.)

**Validity: does $M_1$ stay saturated?** Saturation requires $V_{DS} \ge V_{GS} - V_{TH}$, i.e. $V_{C1} + V_{C2} \ge V_{C1} - V_{TH}$, i.e. $V_{C2} \ge -V_{TH}$. $V_{C2}$ is smallest at the end, so the condition is

$$
\begin{aligned}
3 - 1.838\,\frac{C_1}{C_2} &\ge -1.162\\
\frac{C_1}{C_2} &\le \frac{4.162}{1.838} = 2.26 .
\end{aligned}
$$

**If $C_1/C_2 > 2.26$:** $C_2$ (the smaller capacitor) is drained so fast that $V_{DS}$ shrinks to below the overdrive before $V_{GS}$ reaches $V_{TH}$. $M_1$ enters triode while still on, and it keeps conducting until $V_{DS} = 0$. So $V_X$ approaches the source voltage, **3 V**, exponentially. (The final-value formula would then give an impossible value below 3 V.)

### Step 6 — Time dependence (saturated case)

Let $u = V_{C1} - V_{TH}$ be the overdrive, starting at $u_0 = 1.838$ V. From $C_1\,dV_{C1}/dt = -\tfrac12\beta u^2$:

$$\frac{du}{dt} = -\frac{\beta}{2C_1}u^2 \quad\Longrightarrow\quad u(t) = \frac{u_0}{1 + t/T}, \qquad T = \frac{2C_1}{\beta u_0} .$$

With $V_{C2} = 3 - (C_1/C_2)(u_0 - u)$ (equal charges removed):

$$V_X(t) = 3 + (V_{TH} + u) + 3 - \frac{C_1}{C_2}(u_0 - u) = V_X(\infty) + \left(1 + \frac{C_1}{C_2}\right)u(t).$$

So $V_X$ falls from 9 V with **decreasing slope**, approaching $V_X(\infty)$ **asymptotically** as $1/t$ (a square-law tail, because the current is proportional to the square of the remaining overdrive).

**Example:** $C_1 = C_2 = 1$ pF, $\beta = 1\ \mathrm{mA/V^2}$, so $T = 2\ \mathrm{pF}/(1.838\ \mathrm{mS}) = 1.09$ ns and $V_X(t) = 5.32 + 2u(t)$:

| $t$ (ns) | $u$ (V) | $V_X$ (V) | $I_D$ (mA) |
|---|---|---|---|
| $0^-$ | — | 6.00 | — |
| $0^+$ | 1.838 | 9.00 | 1.69 |
| 0.5 | 1.26 | 7.84 | 0.79 |
| 1 | 0.96 | 7.24 | 0.46 |
| 2 | 0.65 | 6.62 | 0.21 |
| 5 | 0.33 | 5.98 | 0.054 |
| 10 | 0.18 | 5.68 | 0.016 |
| ∞ | 0 | 5.32 | 0 |

The initial slope is $-1.69\ \mathrm{mA}\times(1/1\ \mathrm{pF} + 1/1\ \mathrm{pF}) = -3.4$ V/ns.

### Result

- **$V_X = 6$ V just before the step** (source 0, gate 3 V, X 6 V; the given charges are taken at that instant).
- **At $t = 0$ all nodes move up by 3 V:** source 3 V, gate 6 V, **$V_X = 9$ V**.
- **Then** $M_1$ ($V_{GS} = 3$ V, $V_{DS} = 6$ V, saturated) draws current from X. This current can only come through the series combination of $C_2$ and $C_1$, so both capacitors discharge by the same charge: $C_1\,dV_{C1}/dt = C_2\,dV_{C2}/dt = -I_D$ and $dV_X/dt = -I_D(1/C_1 + 1/C_2)$. The initial current is $\tfrac12\beta(3 - 1.16)^2 \approx 1.69\beta$.
- $V_{GS}$ (= voltage of $C_1$) falls until $M_1$ turns off at $V_{GS} = V_{TH}(V_{SB} = 3\ \mathrm{V}) \approx 1.16$ V. $V_X$ falls from 9 V with decreasing slope to
$$V_X(\infty) = 6\ \mathrm{V} + V_{TH} - \frac{C_1}{C_2}(3\ \mathrm{V} - V_{TH}),$$
e.g. **≈ 5.3 V for $C_1 = C_2$** (4.4 V if the body effect is ignored), approached asymptotically. At the end $V_{C1} = 1.16$ V and $V_{C2} = 3 - (C_1/C_2)(3 - 1.16)$.
- This holds while $M_1$ remains saturated, i.e. $V_{C2} > -V_{TH}$, i.e. $C_1/C_2 < 2.26$. If $C_1/C_2 > 2.26$, $V_{DS}$ collapses first, $M_1$ enters triode (still on), and $V_X$ approaches the source voltage, 3 V, exponentially.

**Common mistake.** Treating the gate as fixed at 6 V (or 3 V) after the step. The gate is a floating node between $C_1$ and $C_2$; the drain current pulls charge through both capacitors, so the gate falls along with X, and that is what eventually turns $M_1$ off.

**Common mistake.** Letting $V_X$ discharge to $V_{in} = 3$ V (or to 0) for equal capacitors. $M_1$ shuts off when $V_{C1}$ reaches $V_{TH}$, long before $V_{DS}$ reaches zero, unless $C_1/C_2 > 2.26$.

**Common mistake.** Using $V_{TH} = 0.7$ V. After the step the source is 3 V above the grounded bulk, which raises the threshold to about 1.16 V and moves the final value from 4.4 V to about 5.3 V.
