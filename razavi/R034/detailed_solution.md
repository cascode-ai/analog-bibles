# Detailed solution - R034

**Approach:** Neglect node-X parasitic capacitance and channel-length modulation ($\lambda=0$). $C_1$ is connected between node X (the drain of $M_1$) and the $V_{in}$ node (the other channel terminal), so $V_X = V_{in} + V_{C1}$. Find $V_X$ before the step and check that $M_1$ is off. At the step, X follows the input down because the capacitor voltage cannot change instantly. After the step $M_1$ turns on with $V_{GS} = 3$ V and discharges $C_1$ in a local loop: a constant-current ramp in saturation, then a triode decay to zero.

![R034 example $V_X(t)$ waveform](/q/R034/solution-vx.svg)

### Step 1 — Before the step ($t < 0$)

With $V_X = V_{in} + V_{C1}$ at all times,

$$V_X = 3\ \mathrm{V} + 3\ \mathrm{V} = 6\ \mathrm{V}.$$

The lower-potential channel terminal, the $V_{in}$ node at 3 V, is the source, so

$$V_{GS} = V_{DD} - V_{in} = 3 - 3 = 0\ \mathrm{V} < V_{TH} .$$

$M_1$ is off (the body effect from the 3-V source-to-bulk voltage only raises $V_{TH}$ further), nothing discharges $C_1$, and $V_X$ stays at 6 V.

### Step 2 — The step at $t = 0$

$V_{in}$ falls from 3 V to 0, and $C_1$ cannot change its voltage instantaneously (only a finite current can flow), so

$$V_X(0^+) = V_{in}(0^+) + V_{C1}(0^+) = 0 + 3 = 3\ \mathrm{V}.$$

$V_X$ drops with the input, from 6 V to 3 V.

### Step 3 — Saturation discharge and the transition time

After the step, the source is held at 0 V and the gate at 3 V. With source and bulk both at 0 V, $V_{TH}=0.7\ \mathrm{V}$. The overdrive is $V_{ov}=V_{GS}-V_{TH}=2.3\ \mathrm{V}$, and $V_{DS}=V_X$. The on transistor is in saturation while $V_{DS}\ge V_{ov}$. At $0^+$, $V_{DS}=3\ \mathrm{V}$, so this condition holds.

Take both branch currents as positive when they leave X. The drain current $I_D$ flows toward the source. The capacitor current from X toward the input is $C_1\,d(V_X-V_{in})/dt$ because $V_X-V_{in}$ is the voltage across $C_1$, positive at X. Kirchhoff's current law at X gives

$$
C_1\frac{d(V_X-V_{in})}{dt}+I_D=0.
$$

After the step, $V_{in}=0$ is constant, so the capacitor current is $C_1\,dV_X/dt$. The negative value it takes during discharge means the capacitor supplies the channel current at X. Both branches meet again at the source, closing the discharge loop.

With channel-length modulation neglected as above, the saturated current depends only on the fixed overdrive.

$$
I_D=\frac{\beta}{2}(V_{GS}-V_{TH})^2
=\frac{\beta}{2}(2.3\ \mathrm{V})^2
=(2.645\ \mathrm{V^2})\beta.
$$

The current is constant, so the node equation gives the constant slope $dV_X/dt=-I_D/C_1$. Integrating from $V_X(0^+)=3\ \mathrm{V}$ yields

$$
V_X(t)=3\ \mathrm{V}-\frac{(2.645\ \mathrm{V^2})\beta}{C_1}t
\qquad (0\le t\le t_1).
$$

The ramp applies until $V_{DS}=V_{ov}$, so $V_X(t_1)=2.3\ \mathrm{V}$. Dividing the voltage drop by the magnitude of the slope gives

$$
t_1=\frac{C_1(3\ \mathrm{V}-2.3\ \mathrm{V})}{(2.645\ \mathrm{V^2})\beta}
\approx (0.265\ \mathrm{V^{-1}})\frac{C_1}{\beta}.
$$

### Step 4 — Triode discharge and the exact solution

As $V_X$ falls below $2.3\ \mathrm{V}$, the gate overdrive stays positive and $0<V_{DS}<V_{ov}$, so the transistor enters triode. Use the triode current in the same node equation.

$$
I_D=\beta\left[(V_{GS}-V_{TH})V_{DS}-\frac{V_{DS}^2}{2}\right],
\qquad
C_1\frac{dV_X}{dt}
=-\beta V_X\left(2.3\ \mathrm{V}-\frac{V_X}{2}\right).
$$

Separate the variables and integrate from the transition at $t_1$, when $V_X=2.3\ \mathrm{V}$. Here $v$ is the voltage integration variable.

$$
\int_{2.3\ \mathrm{V}}^{V_X(t)}\frac{dv}{v(2.3\ \mathrm{V}-v/2)}
=-\frac{\beta}{C_1}(t-t_1).
$$

The partial-fraction split is

$$
\frac{1}{v(2.3\ \mathrm{V}-v/2)}=
\frac{1}{2.3\ \mathrm{V}}\left(\frac{1}{v}+\frac{1}{4.6\ \mathrm{V}-v}\right).
$$

The second term contributes a minus sign on integration because $d(4.6\ \mathrm{V}-v)=-dv$. The logarithm of $v/(4.6\ \mathrm{V}-v)$ at the lower limit is $\ln(1)=0$. Evaluating the upper limit and defining $\tau=C_1/[(2.3\ \mathrm{V})\beta]$ gives

$$
\ln\!\left(\frac{V_X(t)}{4.6\ \mathrm{V}-V_X(t)}\right)
=-\frac{t-t_1}{\tau}.
$$

Let $E=e^{-(t-t_1)/\tau}$. Exponentiating gives $V_X=E(4.6\ \mathrm{V}-V_X)$, so

$$
V_X(t)=\frac{(4.6\ \mathrm{V})E}{1+E}
\qquad(t\ge t_1).
$$

At $t_1$, $E=1$ and the voltage is $2.3\ \mathrm{V}$. Substituting that voltage into the triode current gives $I_D=\frac{\beta}{2}(2.3\ \mathrm{V})^2$, the same as the saturation current. Since $dV_X/dt=-I_D/C_1$ on both sides, the slope is continuous. For $t>t_1$, $0<E<1$ gives $0<V_X<2.3\ \mathrm{V}$, confirming the triode condition.

Near zero, $V_X^2/2$ is small compared with $(2.3\ \mathrm{V})V_X$. The channel then behaves like a resistance $R_{on}\approx 1/[(2.3\ \mathrm{V})\beta]$. The time constant is $R_{on}C_1\approx\tau$. In the exact solution, $E\ll1$ gives the late-time tail $V_X(t)\simeq (4.6\ \mathrm{V})e^{-(t-t_1)/\tau}$, which approaches zero while the overdrive remains positive.

### Step 5 — Numerical example

With $\beta = 1\ \mathrm{mA/V^2}$ and $C_1 = 1$ pF: $I_D = 2.65$ mA, ramp slope $-2.65$ V/ns, $t_1 = 0.7\ \mathrm{V}/(2.65\ \mathrm{V/ns}) \approx 0.265$ ns, and $\tau = 0.43$ ns.

| $t$ | $V_X$ (V) | $M_1$ |
|---|---|---|
| $t < 0$ | 6.0 | off |
| $0^+$ | 3.0 | saturated |
| 0.265 ns | 2.30 | edge |
| $t_1 + \tau$ ≈ 0.70 ns | 1.24 | triode |
| $t_1 + 2\tau$ ≈ 1.13 ns | 0.55 | triode |
| $t_1 + 4\tau$ ≈ 2.0 ns | 0.08 | triode |
| ∞ | 0 | triode, no current |

### Result

- $t < 0$: $V_X = 6$ V ($V_{in} = 3$ V plus 3 V on $C_1$). $M_1$ is off because its gate, at $V_{DD} = 3$ V, equals its source voltage.
- $t = 0$: $V_X$ drops with the input to 3 V.
- Phase 1: now $V_{GS} = 3$ V and $V_{DS} = 3$ V, so $M_1$ is saturated. It discharges $C_1$ (connected between its drain and source) with a constant current $\tfrac12\beta(2.3\ \mathrm{V})^2 = 2.645\,\beta\,\mathrm{V^2}$, and $V_X$ ramps down linearly at $\frac{(2.645\ \mathrm{V^2})\beta}{C_1}$ to 2.3 V.
- Phase 2: $M_1$ is in triode and $V_X$ decays roughly exponentially to 0 V (time constant ≈ $C_1/((2.3\ \mathrm{V})\beta)$).

**Common mistake:** Leaving $V_X$ at 3 V after the step because "the capacitor holds 3 V". It does at the instant of the step, but afterwards $M_1$ is on with $V_{GS} = 3$ V and its channel is right across $C_1$, so the capacitor is discharged.

**Common mistake:** Claiming $M_1$ is off after the step. Before the step its source was at 3 V (equal to its gate); after it the source is at 0 V, so $V_{GS} = 3$ V.

**Common mistake:** Ending at a nonzero voltage such as 2.3 V. That only marks the change from saturation to triode; with the gate 3 V above the source, the channel conducts until $V_{DS} = 0$.
