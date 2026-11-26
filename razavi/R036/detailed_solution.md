# Detailed solution - R036

**Approach:** Use capacitor-voltage continuity to find the jump, then use the NMOS current and the node equation at X to find how the voltage rises. Neglect node-X parasitic capacitance and channel-length modulation ($\lambda=0$).

### Step 1 — Capacitor voltage and the input step

Define the capacitor voltage as $V_{C1}=V_{in}-V_X$, positive at the gate plate as shown. A finite branch current cannot change the charge on $C_1$ instantaneously, so $V_{C1}(0^+)=V_{C1}(0^-)=3\ \mathrm{V}$. The two values of $V_X$ follow from the change in $V_{in}$.

$$
\begin{aligned}
V_X(0^-)&=V_{in}(0^-)-V_{C1}(0^-)=0\ \mathrm{V}-3\ \mathrm{V}=-3\ \mathrm{V},\\
V_X(0^+)&=V_{in}(0^+)-V_{C1}(0^+)=3\ \mathrm{V}-3\ \mathrm{V}=0\ \mathrm{V}.
\end{aligned}
$$

The negative source voltage at $0^-$ forward biases the junction to the grounded bulk. Use the given capacitor voltage as the initial condition at that instant. The channel model below describes the response after the step.

### Step 2 — Operating region and the node equation

The gate and drain are both held at 3 V after the step, the source is at $V_X$, and the bulk is grounded. Thus

$$
V_{GS}=V_{DS}=3\ \mathrm{V}-V_X,\qquad V_{SB}=V_X.
$$

Use the body-effect threshold law before substituting the given parameters.

$$
V_{TH}=V_{TH0}+\gamma
\left(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\right).
$$

At $0^+$, $V_{SB}=0$, so $V_{TH}=V_{TH0}=0.7\ \mathrm{V}$ and $V_{GS}>V_{TH}$. The saturation condition is $V_{DS}\ge V_{GS}-V_{TH}$. Because $V_{DS}=V_{GS}$ and $V_{TH}>0$ for $V_X\ge0$, this holds whenever the device is on during charging.

Take $I_D$ as positive into X from the channel and the capacitor current as positive from X toward the gate plate. Kirchhoff's current law equates these two currents. Use the saturated square-law model for $I_D$.

$$
C_1\frac{d(V_X-V_{in})}{dt}=I_D,\qquad
I_D=\frac{\beta}{2}(V_{GS}-V_{TH})^2.
$$

After the step $V_{in}=3\ \mathrm{V}$ is constant. With $V_{TH}(V_X)$ obtained from the threshold law at $V_{SB}=V_X$, the charging equation becomes

$$
C_1\frac{dV_X}{dt}
=\frac{\beta}{2}\big[3\ \mathrm{V}-V_X-V_{TH}(V_X)\big]^2
\qquad(V_{GS}>V_{TH}).
$$

At $0^+$, the overdrive is $3\ \mathrm{V}-0.7\ \mathrm{V}=2.3\ \mathrm{V}$. Thus

$$
I_D(0^+)=\frac{\beta}{2}(2.3\ \mathrm{V})^2
=(2.645\ \mathrm{V^2})\beta,\qquad
\left.\frac{dV_X}{dt}\right|_{0^+}=\frac{I_D(0^+)}{C_1}.
$$

### Step 3 — Final voltage with body effect

As $V_X$ rises, $V_{GS}$ falls and $V_{TH}$ rises. The current tends to zero as the overdrive tends to zero. The final voltage $V_{X,\infty}$ therefore satisfies

$$
V_{DD}-V_{X,\infty}
=V_{TH0}+\gamma\left(
\sqrt{2|\phi_F|+V_{X,\infty}}-\sqrt{2|\phi_F|}
\right).
$$

Let $u=\sqrt{2|\phi_F|+V_{X,\infty}}$, so $V_{X,\infty}=u^2-2|\phi_F|$. This removes the square root involving the unknown.

$$
u^2+\gamma u
=V_{DD}-V_{TH0}+2|\phi_F|+\gamma\sqrt{2|\phi_F|}.
$$

Substituting the given parameters yields $u^2+(0.45\ \mathrm{V}^{1/2})u\approx3.6269\ \mathrm{V}$. The square root defines $u\ge0$, so take the nonnegative quadratic root.

$$
u=\frac{-\gamma+\sqrt{\gamma^2+4\left(V_{DD}-V_{TH0}+2|\phi_F|+\gamma\sqrt{2|\phi_F|}\right)}}{2}
\approx1.69269\ \mathrm{V}^{1/2}.
$$

$$

V_{X,\infty}=u^2-2|\phi_F|\approx1.965\ \mathrm{V}.
$$

At this limit, $V_{GS}=V_{TH}\approx1.035\ \mathrm{V}$. This is also the final voltage across $C_1$, with the gate side positive. Setting $\gamma=0$ instead gives $V_{DD}-V_{TH0}=2.30\ \mathrm{V}$.

### Step 4 — Shape of the rise and waveform

Write the remaining overdrive as $V_{ov}=3\ \mathrm{V}-V_X-V_{TH}(V_X)$. The threshold law gives

$$
\frac{dV_{TH}}{dV_X}=\frac{\gamma}{2\sqrt{2|\phi_F|+V_X}}>0.
$$

As $V_X$ rises, $dV_{ov}/dt=-(1+dV_{TH}/dV_X)\,dV_X/dt$. Substituting the node equation and differentiating the reciprocal gives

$$
\frac{d}{dt}\left(\frac{1}{V_{ov}}\right)
=\left(1+\frac{dV_{TH}}{dV_X}\right)\frac{\beta}{2C_1}.
$$

The right-hand side is positive and tends to a finite positive value. The reciprocal overdrive therefore grows approximately linearly at late times. Near the final voltage the overdrive is proportional to $V_{X,\infty}-V_X$, so the remaining voltage error falls as $1/t$. The plotted voltage rises from 0 V with a decreasing slope and approaches 1.965 V.

For the plot, take $\beta=1\ \mathrm{mA/V^2}$ and $C_1=1\ \mathrm{pF}$. The initial slope is $2.645\ \mathrm{mA}/(1\ \mathrm{pF})=2.645\ \mathrm{V/ns}$. Numerical integration of the charging equation gives these representative points.

| $t$ (ns) | $V_X$ (V) |
|---|---:|
| $0^+$ | 0 |
| 0.5 | 0.780 |
| 1 | 1.113 |
| 5 | 1.700 |
| 50 | 1.935 |
| $\infty$ | 1.965 |

![R036 source-follower waveform](/q/R036/solution-vx.svg)
