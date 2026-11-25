# Detailed solution - R030

**Approach:** $C_1$ is connected between the drain (X) and source (S) of $M_1$, not to ground. KCL at X and S shows that $C_2$ receives no net current, so the source stays at ground. The discharge therefore has a constant-current saturation interval followed by a triode interval.

### Step 1 — KCL and the node voltages

Call the source node S. Initially, $V_X-V_S=3$ V and $V_S=0$. Define $i_{C1}=C_1,d(V_X-V_S)/dt$ as the current entering the X plate of $C_1$.

At X: $I_X+i_{C1}=0$, so $i_{C1}=-I_X$.

At S: the current into $C_2$ is

$$C_2\frac{dV_S}{dt}=I_X+i_{C1}=0.$$

Thus $V_S(t)=0$ for all $t$, and $V_X(t)$ is the voltage across $C_1$. The capacitor $C_1$ discharges through $M_1$ in a local drain-to-source loop; there is no charge sharing with $C_2$.

### Step 2 — Saturation: constant current and linear ramp

Assume the square-law model with channel-length modulation neglected ($\lambda=0$). With $V_S=0$, $V_{GS}=2$ V, $V_{DS}=V_X$, $V_{SB}=0$, and $V_{TH}=0.7$ V. Hence

$$V_{ov}=V_{GS}-V_{TH}=1.3\ \mathrm{V}.$$

The saturation condition is $V_{DS}\ge V_{ov}$, so it holds while $V_X\ge1.3$ V. In this region,

$$I_X=\frac12\beta V_{ov}^2=\frac12\beta(1.3\ \mathrm{V})^2=(0.845\ \mathrm{V^2})\beta.$$

Using $I_X=-C_1,dV_X/dt$ gives

$$V_X(t)=3\ \mathrm{V}-\frac{(0.845\ \mathrm{V^2})\beta}{C_1}t.$$

The transition occurs at $V_X(t_1)=1.3$ V:

$$t_1=\frac{C_1(3-1.3)\ \mathrm{V}}{(0.845\ \mathrm{V^2})\beta}=\frac{2.01\,C_1}{\beta\,\mathrm{V}}.$$

### Step 3 — Triode decay and the closed form

For $0\le V_X<1.3$ V, the triode current is

$$I_X=\beta\left(V_{ov}V_X-\frac12V_X^2\right)=\beta\left(1.3V_X-\frac12V_X^2\right),$$

so

$$C_1\frac{dV_X}{dt}=-\beta V_X\left(1.3-\frac12V_X\right).$$

Separate variables and use

$$\frac{1}{V_X(1.3-V_X/2)}=\frac{1}{1.3}\left(\frac{1}{V_X}+\frac{1}{2.6-V_X}\right).$$

Integrating from $(t_1,V_X)=(t_1,1.3\ \mathrm{V})$ gives the required intermediate relation

$$\ln\!\left[\frac{V_X(t)}{2.6\ \mathrm{V}-V_X(t)}\right]= -\frac{t-t_1}{\tau},\qquad \tau=\frac{C_1}{1.3\beta}=R_{on}C_1,$$

where $R_{on}=1/[\beta(1.3\ \mathrm{V})]$. Let $E=e^{-(t-t_1)/\tau}$. Solving the logarithmic relation,

$$V_X(t)=\frac{2.6\ \mathrm{V}\,E}{1+E},\qquad I_X(t)=\frac{2\beta(1.3\ \mathrm{V})^2E}{(1+E)^2}.$$

At $t=t_1$, these expressions give $V_X=1.3$ V and $I_X=0.845\beta$; the voltage slope is also continuous. As $t-t_1\gg\tau$, both $V_X$ and $I_X$ approach zero.

### Step 4 — Numerical example

For $\beta=1\ \mathrm{mA/V^2}$ and $C_1=1$ pF,

$$
\begin{aligned}
I_X&=0.845\ \mathrm{mA}, & \frac{dV_X}{dt}&=-0.845\ \mathrm{V/ns},\\
t_1&=2.01\ \mathrm{ns}, & \tau&=0.77\ \mathrm{ns}.
\end{aligned}
$$

| $t$ (ns) | $V_X$ (V) | $I_X$ (mA) | $V_S$ (V) | $M_1$ |
|---|---:|---:|---:|---|
| 0 | 3.00 | 0.845 | 0 | sat. |
| 1.0 | 2.16 | 0.845 | 0 | sat. |
| 2.01 | 1.30 | 0.845 | 0 | boundary |
| 2.78 | 0.70 | 0.66 | 0 | triode |
| 3.55 | 0.31 | 0.35 | 0 | triode |
| 4.32 | 0.12 | 0.15 | 0 | triode |
| 5.86 | 0.017 | 0.02 | 0 | triode |

### Result

### Answer figures

![V_X versus time](/q/R030/solution-vx.svg)

![I_X versus time](/q/R030/solution-ix.svg)

The curves use the stated MOS model with the illustrative values $\beta=1\ \mathrm{mA/V^2}$ and $C_1=1$ pF shown in each figure.

- $C_2$ receives no net current, so $V_S=0$ V for all $t$.
- $V_X$ falls linearly from 3 V to 1.3 V with $I_X=0.845\beta$; the transition time is $t_1=C_1(3-1.3)/(0.845\beta)$.
- In triode, $V_X$ and $I_X$ decay to 0; the characteristic time is $\tau=C_1/(1.3\beta)$.

**Common mistake:** Treating the circuit as charge sharing between $C_1$ and $C_2$ and allowing $V_S$ to rise. The KCL equations show that $C_2$ has zero net current.

**Common mistake:** Stopping at $V_X=1.3$ V. That is the saturation-to-triode boundary, not the final voltage; the channel remains on and discharges $C_1$ toward 0 V.

**Common mistake:** Drawing a pure exponential from $t=0$. The saturation interval is a straight-line ramp before the triode decay.
