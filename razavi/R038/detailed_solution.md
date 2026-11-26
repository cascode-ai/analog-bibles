# Detailed solution - R038

**Approach:** Call the source of $M_1$ (driven by $V_{in}$) S and its gate G. $C_1$ sits across gate and source and $C_2$ across drain and gate, so the gate floats between two capacitors. At the step every node moves up by 3 V. Afterwards $M_1$ draws current out of X, and since the gate draws none, that current flows through $C_2$ *and* $C_1$ in series, so both capacitors lose the same charge. The discharge stops when the voltage on $C_1$ (which is $V_{GS}$) falls to the threshold, raised here by the body effect.

![R038 $V_X(t)$ waveform for the equal-capacitor example](/q/R038/solution-vx.svg)

### Step 1 — The state before the step

$V_G = V_S + V_{C1}$ and $V_X = V_G + V_{C2} = V_S + V_{C1} + V_{C2}$, so just before the step ($V_S = 0$):

$$V_S = 0, \qquad V_G = 3\ \mathrm{V}, \qquad V_X = 6\ \mathrm{V}.$$

(With $V_{GS} = 3$ V the device would already be conducting for $t < 0$, so the given capacitor voltages are a snapshot at the instant of the step; we take them as the initial condition.)

### Step 2 — The jump at $t = 0$

Neither capacitor can change its voltage instantly, so G and X move up by exactly 3 V with S:

$$V_S(0^+) = 3\ \mathrm{V}, \qquad V_G(0^+) = 6\ \mathrm{V}, \qquad V_X(0^+) = 9\ \mathrm{V}.$$

$V_X$ jumps from 6 V to 9 V.

### Step 3 — Operating point just after the step

$$
\begin{aligned}
V_{GS} &= V_{C1} = 3\ \mathrm{V},\\
V_{DS} &= V_{C1} + V_{C2} = 6\ \mathrm{V},\\
V_{SB} &= 3 - 0 = 3\ \mathrm{V}.
\end{aligned}
$$

With the source 3 V above the grounded bulk,

$$V_{TH} = 0.7 + 0.45\left(\sqrt{0.9 + 3} - \sqrt{0.9}\right) = 0.7 + 0.45\,(1.9748 - 0.9487) = 0.7 + 0.4618 = 1.162\ \mathrm{V},$$

constant for $t > 0$, since $V_S$ is held at 3 V by $V_{in}$. The overdrive $3 - 1.162 = 1.838$ V is below $V_{DS} = 6$ V, so $M_1$ is saturated:

$$I_D(0^+) = \tfrac12\beta\,(1.838\ \mathrm{V})^2 = 1.69\,\beta\ \mathrm{V^2}.$$

### Step 4 — Where the drain current comes from: charge balance

At X, only the drain ($I_D$ leaving) and the top plate of $C_2$ are connected:

$$C_2\frac{dV_{C2}}{dt} = -I_D .$$

At G, the gate draws no current, so whatever leaves $C_2$ enters $C_1$:

$$C_1\frac{dV_{C1}}{dt} = C_2\frac{dV_{C2}}{dt} = -I_D .$$

So the drain current is drawn through the series combination of $C_2$ and $C_1$, from the $V_{in}$ node, and both capacitors lose the same charge $\Delta Q(t) = \int_0^t I_D\,dt$. With $V_S$ fixed,

$$\frac{dV_X}{dt} = \frac{dV_{C1}}{dt} + \frac{dV_{C2}}{dt} = -I_D\left(\frac{1}{C_1} + \frac{1}{C_2}\right).$$

The crucial consequence: $V_{GS} = V_{C1}$ falls as the discharge proceeds; the gate is pulled down along with X.

### Step 5 — End of the discharge and the final value

In saturation the discharge continues until

$$V_{C1}(\infty) = V_{TH} = 1.162\ \mathrm{V}.$$

The charge removed from $C_1$, and therefore from $C_2$, is

$$\Delta Q = C_1\,(3 - 1.162)\ \mathrm{V} = 1.838\,C_1\ \mathrm{V},$$

$$V_{C2}(\infty) = 3 - \frac{\Delta Q}{C_2} = 3 - 1.838\,\frac{C_1}{C_2}\ \mathrm{V},$$

and

$$
\begin{aligned}
V_X(\infty) &= V_S + V_{C1}(\infty) + V_{C2}(\infty)\\
&= 3 + V_{TH} + 3 - \frac{C_1}{C_2}\,(3 - V_{TH})\\
&= 6\ \mathrm{V} + V_{TH} - \frac{C_1}{C_2}\,(3\ \mathrm{V} - V_{TH}).
\end{aligned}
$$

For $C_1 = C_2$: $V_X(\infty) = 6 + 1.162 - 1.838 = 5.32$ V. (Ignoring the body effect, $V_{TH} = 0.7$ V would give $6 + 0.7 - 2.3 = 4.4$ V.)

Does $M_1$ stay saturated? $V_{DS} \ge V_{GS} - V_{TH}$ means $V_{C1} + V_{C2} \ge V_{C1} - V_{TH}$, i.e. $V_{C2} \ge -V_{TH}$. $V_{C2}$ is smallest at the end, so

$$
\begin{aligned}
3 - 1.838\,\frac{C_1}{C_2} &\ge -1.162\\
\frac{C_1}{C_2} &\le \frac{4.162}{1.838} \approx 2.26 .
\end{aligned}
$$

If $C_1/C_2 > (3\ \mathrm{V}+V_{TH})/(3\ \mathrm{V}-V_{TH})$, the smaller $C_2$ is drained so fast that $V_{DS}$ falls below the overdrive before $V_{GS}$ reaches $V_{TH}$. $M_1$ enters triode. At $V_X\to3$ V, charge balance gives $V_{GS}-V_{TH}\to u_0-6\ \mathrm{V}/(1+C_1/C_2)>0$, where $u_0=3\ \mathrm{V}-V_{TH}$. The triode current is then proportional to $V_{DS}=V_X-3\ \mathrm{V}$ to first order, giving an exponential tail.

### Step 6 — Time dependence (saturated case)

With the overdrive $u = V_{C1} - V_{TH}$, starting at $u_0 = 1.838$ V, $C_1\,dV_{C1}/dt = -\tfrac12\beta u^2$ gives

$$\frac{du}{dt} = -\frac{\beta}{2C_1}u^2 \quad\Longrightarrow\quad u(t) = \frac{u_0}{1 + t/T}, \qquad T = \frac{2C_1}{\beta u_0} .$$

With $V_{C2} = 3 - (C_1/C_2)(u_0 - u)$ (equal charges removed):

$$V_X(t) = 3 + (V_{TH} + u) + 3 - \frac{C_1}{C_2}(u_0 - u) = V_X(\infty) + \left(1 + \frac{C_1}{C_2}\right)u(t).$$

So $V_X$ falls from 9 V with decreasing slope, approaching $V_X(\infty)$ asymptotically as $1/t$ (a square-law tail).

Example: $C_1 = C_2 = 1$ pF, $\beta = 1\ \mathrm{mA/V^2}$, so $T = 2\ \mathrm{pF}/(1.838\ \mathrm{mS}) = 1.09$ ns and $V_X(t) = 5.32 + 2u(t)$:

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

- $V_X = 6$ V just before the step (source 0, gate 3 V, X 6 V; the given charges are taken at that instant).
- At $t = 0$ all nodes move up by 3 V: source 3 V, gate 6 V, $V_X = 9$ V.
- Then $M_1$ ($V_{GS} = 3$ V, $V_{DS} = 6$ V, saturated) draws current from X. This current can only come through the series combination of $C_2$ and $C_1$, so both capacitors discharge by the same charge: $C_1\,dV_{C1}/dt = C_2\,dV_{C2}/dt = -I_D$ and $dV_X/dt = -I_D(1/C_1 + 1/C_2)$. The initial current is $\tfrac12\beta(3 - 1.16)^2 \approx 1.69\beta$.
- $V_{GS}$ (= voltage of $C_1$) falls until $M_1$ turns off at $V_{GS} = V_{TH}(V_{SB} = 3\ \mathrm{V}) \approx 1.16$ V. $V_X$ falls from 9 V with decreasing slope to
$$V_X(\infty) = 6\ \mathrm{V} + V_{TH} - \frac{C_1}{C_2}(3\ \mathrm{V} - V_{TH}),$$
e.g. ≈ 5.3 V for $C_1 = C_2$ (4.4 V if the body effect is ignored), approached asymptotically. At the end $V_{C1} = 1.16$ V and $V_{C2} = 3 - (C_1/C_2)(3 - 1.16)$.
- At or below the capacitance-ratio boundary, the channel stays saturated during discharge. Above it, $V_{DS}$ falls below the overdrive while $M_1$ is still on. The channel enters triode and $V_X$ approaches 3 V with an exponential tail.

**Common mistake:** Treating the gate as fixed at 6 V (or 3 V) after the step. The gate floats between $C_1$ and $C_2$; the drain current pulls charge through both, so the gate falls along with X, which is what eventually turns $M_1$ off.

**Common mistake:** Letting $V_X$ discharge to $V_{in} = 3$ V (or to 0) for equal capacitors. For equal capacitors the channel current vanishes as $V_{C1}$ approaches $V_{TH}$, with $V_{DS}$ still about 2.32 V.

**Common mistake:** Using $V_{TH} = 0.7$ V. With the source 3 V above the grounded bulk the threshold is about 1.16 V, which moves the final value from 4.4 V to about 5.3 V.
