# Detailed solution - R033

**Approach:** $C_1$ connects the input node to node X, and X has no other path to a fixed voltage except the drain of $M_1$. Neglect node-X parasitic capacitance and channel-length modulation ($\lambda=0$). When $V_{in}$ steps, the capacitor carries X up by the full step. The same step turns $M_1$ on, and $M_1$ then discharges X: first with a constant saturation current (linear ramp), then in triode (exponential-like tail) down to 0 V.

![R033 example $V_X(t)$ waveform](/q/R033/solution-vx.svg)

### Step 1 — Before the step ($t < 0$)

$C_1$ holds 2 V with X positive, so $V_X = V_{in} + V_{C1}$. For $t < 0$, $V_{in} = 0$ and

$$V_X = 0 + 2 = 2\ \mathrm{V}.$$

$M_1$ is off ($V_{GS} = 0 < V_{TH}$), so nothing discharges $C_1$ and $V_X$ stays at 2 V.

### Step 2 — The jump at $t = 0$

$M_1$ can only supply a finite current, which moves no charge in zero time, so right after the step $V_{C1}$ is still 2 V and

$$V_X(0^+) = V_{in}(0^+) + V_{C1}(0^+) = 3 + 2 = 5\ \mathrm{V}.$$

The jump is the full 3 V: node X sees only $C_1$ (whose other plate is held by $V_{in}$) and the drain of $M_1$, so there is no capacitive divider to attenuate the step.

### Step 3 — Saturation discharge and the transition time

After the input settles at 3 V, $V_{GS}=3\ \mathrm{V}$ and $V_{DS}=V_X$ because the source is grounded. With the bulk also grounded, $V_{TH}=V_{TH0}=0.7\ \mathrm{V}$. The overdrive is $V_{ov}=V_{GS}-V_{TH}=2.3\ \mathrm{V}$. An on NMOS is in saturation for $V_{DS}\ge V_{ov}$. Since $V_X(0^+)=5\ \mathrm{V}$, it starts in saturation. With $\beta=\mu_n C_{ox}W/L$ and $\lambda=0$, its saturation current is

$$
I_D=\frac{\beta}{2}(V_{GS}-V_{TH})^2
=\frac{\beta}{2}(2.3\ \mathrm{V})^2
=2.645\,\beta\,\mathrm{V^2}.
$$

Take both branch currents as positive out of node X. The drain current is $I_D$, and the current from X through $C_1$ is $C_1\,d(V_X-V_{in})/dt$. Their sum is zero by KCL. Since $V_{in}$ is constant after the step,

$$
C_1\frac{d(V_X-V_{in})}{dt}+I_D=0\quad\Longrightarrow\quad C_1\frac{dV_X}{dt}=-I_D.
$$

The minus sign means that the transistor removes charge from the X-side plate. The saturation current stays constant because the overdrive is fixed and the model neglects channel-length modulation. Integrating the constant slope from $V_X(0^+)=5\ \mathrm{V}$ gives

$$
V_X(t)-5\ \mathrm{V}=-\frac{I_D}{C_1}t
=-\frac{2.645\,\beta\,\mathrm{V^2}}{C_1}t.
$$

This expression applies until the first time $t_1$ at which $V_{DS}=V_{ov}$, so $V_X(t_1)=2.3\ \mathrm{V}$. The voltage drop divided by the magnitude of the slope gives

$$
t_1=\frac{C_1(5.0\ \mathrm{V}-2.3\ \mathrm{V})}{2.645\,\beta\,\mathrm{V^2}}
\approx (1.02\ \mathrm{V^{-1}})\frac{C_1}{\beta}.
$$

### Step 4 — Triode discharge and the tail

Below 2.3 V, $0<V_{DS}<V_{ov}$ and the channel is in triode. Applying the triode model and using $V_{DS}=V_X$ in the same KCL equation gives

$$
I_D=\beta\left(V_{ov}V_{DS}-\frac{V_{DS}^2}{2}\right),
\qquad
C_1\frac{dV_X}{dt}=-\beta V_X(V_{ov}-V_X/2).
$$

At $V_X=V_{ov}$ this current equals $\beta V_{ov}^2/2$, so the slope matches the saturation ramp at $t_1$. For $0<V_X<V_{ov}$ the current is positive, and $V_X$ keeps decreasing.

To find the exact curve, separate variables. The voltage factor splits into two terms that can each be integrated:

$$
\frac{dV_X}{V_X(V_{ov}-V_X/2)}=-\frac{\beta}{C_1}\,dt,
\qquad
\frac{1}{V_X(V_{ov}-V_X/2)}
=\frac{1}{V_{ov}}\left(\frac{1}{V_X}+\frac{1}{2V_{ov}-V_X}\right).
$$

The $-V_X$ in the second denominator gives a minus sign when integrating that term. Combining the two logarithms gives $\ln[V_X/(2V_{ov}-V_X)]$. Integrate from $(t_1,V_{ov})$ to $(t,V_X(t))$. The logarithm is zero at the lower limit because $V_{ov}/(2V_{ov}-V_{ov})=1$. Thus

$$
\ln\frac{V_X(t)}{2V_{ov}-V_X(t)}
=-\frac{t-t_1}{\tau},
\qquad
\tau=\frac{C_1}{\beta V_{ov}}=\frac{C_1}{\beta(2.3\ \mathrm{V})}.
$$

Let $E=e^{-(t-t_1)/\tau}$. Exponentiating and rearranging gives $V_X(1+E)=2V_{ov}E$, so

$$
V_X(t)=\frac{(4.6\ \mathrm{V})E}{1+E},
\qquad t\ge t_1.
$$

At $t_1$, $E=1$ and $V_X=2.3\ \mathrm{V}$. For later times, $0<E<1$ so $0<V_X<2.3\ \mathrm{V}$, consistent with the triode assumption. As $E$ becomes small, $V_X\simeq(4.6\ \mathrm{V})e^{-(t-t_1)/\tau}$. In this tail the quadratic term is negligible and the channel behaves like a resistance $R_{on}=1/(\beta V_{ov})$, giving the time constant $R_{on}C_1=\tau$.

As $V_X$ approaches 0 V, the other plate remains at 3 V, so $V_{C1}=V_X-V_{in}\to-3\ \mathrm{V}$. The X-side plate drops from $C_1(2\ \mathrm{V})$ to $C_1(-3\ \mathrm{V})$, so $M_1$ removes a total charge of $C_1(5\ \mathrm{V})$.

### Step 5 — Numerical example

With $\beta = 1\ \mathrm{mA/V^2}$ and $C_1 = 1$ pF: $I_D = 2.65$ mA, the ramp slope is $-2.65$ V/ns, $t_1 = 2.7\ \mathrm{V}/(2.645\ \mathrm{V/ns}) = 1.02$ ns, and $\tau = 1\ \mathrm{pF}/2.3\ \mathrm{mS} = 0.43$ ns.

| $t$ | $V_X$ (V) | $M_1$ |
|---|---|---|
| $t < 0$ | 2.0 | off |
| $0^+$ | 5.0 | saturated |
| 0.5 ns | 3.68 | saturated |
| 1.02 ns | 2.30 | edge |
| $t_1 + \tau$ = 1.46 ns | 1.24 | triode |
| $t_1 + 2\tau$ = 1.89 ns | 0.55 | triode |
| $t_1 + 4\tau$ = 2.76 ns | 0.08 | triode |
| ∞ | 0 | triode, no current |

(Triode values from $V_X = (4.6\ \mathrm{V})E/(1 + E)$: $E = e^{-1} = 0.368$ gives $1.69/1.368 = 1.24$ V, and so on.)

### Result

- $t < 0$: $V_X = 2$ V ($M_1$ off, $V_{in} = 0$).
- $t = 0$: the step couples through $C_1$ and $V_X$ jumps to 3 + 2 = 5 V. Node X sees only $C_1$ (whose other plate is held by $V_{in}$) and the drain of $M_1$, so the jump is the full 3 V.
- Phase 1: $M_1$ (now $V_{GS} = 3$ V) is saturated and discharges X with a constant current $\tfrac12\beta(2.3\ \mathrm{V})^2 = 2.645\,\beta\,\mathrm{V^2}$. $V_X$ ramps down linearly at $(2.65\,\beta\,\mathrm{V^2})/C_1$ until it reaches 2.3 V, at $t_1 \approx (1.02\,\mathrm{V^{-1}})C_1/\beta$.
- Phase 2: $M_1$ is in triode and $V_X$ decays roughly exponentially to 0 (time constant ≈ $C_1/((2.3\ \mathrm{V})\beta)$).
- Final $C_1$ voltage: −3 V (X at 0, the other plate at 3 V).

**Common mistake:** Leaving $V_X$ at 2 V at the step, or letting it rise only gradually. The capacitor holds its voltage at the instant of the step, so X jumps by the full 3 V.

**Common mistake:** Letting $V_X$ settle at 5 V or at 2.3 V. With the gate at 3 V, $M_1$ conducts until its drain reaches ground; 2.3 V is only the boundary between the constant-current and triode phases.

**Common mistake:** Making the jump go the wrong way, thinking that the gate "pulls the drain down" at the step. At $t = 0^+$ the transistor has had no time to move any charge; the only instantaneous effect is the capacitive coupling, which raises X.
