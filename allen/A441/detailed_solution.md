# Detailed solution - A441

With only $b_0$ closed the circuit is an inverting amplifier driven by a step of $V_{REF}$. The op amp's single pole makes it a first-order system; find the closed-loop pole from the feedback factor and take four time constants.

### Step 1 — Circuit seen by the op amp

The open switches leave $R_2$–$R_4$ floating, so they carry no current and drop out. Closing $b_0$ at $t=0$ applies a step $V_{REF}u(t)$ to $R_1$, whose other end is the inverting input; $R_0$ is the feedback resistor. Ideally

$$
v_{OUT}(\infty)=-\frac{R_0}{R_1}V_{REF}=-\frac{V_{REF}}{2}.
$$

### Step 2 — Closed-loop response with finite gain

KCL at the inverting input, with $v_-=-v_{OUT}/A_{vd}$ ($V_{OS}=0$), gives the standard inverting-amplifier result

$$
\frac{v_{OUT}}{V_{REF}}=-\frac{R_0}{R_1}\cdot\frac{1}{1+\dfrac{1}{A_{vd}(s)\beta}},\qquad
\beta=\frac{R_1}{R_0+R_1}=\frac{2R_0}{3R_0}=\frac23 .
$$

Substituting $A_{vd}(s)=10^6/(s+10)$:

$$
\frac{1}{1+\dfrac{s+10}{\beta\,10^6}}=\frac{\beta\,10^6}{s+10+\beta\,10^6},
\qquad
\omega_H=10+\tfrac23\times10^6=6.667\times10^5\ \mathrm{rad/s}.
$$

This is $10(1+A_0\beta)$ with $A_0=10^5$, i.e. $\beta\cdot GB$ with $GB=10^6$ rad/s.

### Step 3 — Time to reach the final state

The step response is $v_{OUT}(t)=v_{OUT}(\infty)\left(1-e^{-t/\tau}\right)$ with

$$
\tau=\frac{1}{\omega_H}=\frac{1}{6.667\times10^5\ \mathrm{s^{-1}}}=1.50\ \mu\mathrm s .
$$

Taking the final state as reached after four time constants (output within $e^{-4}=1.8\%$ of $-V_{REF}/2$),

$$
t=4\tau=4(1.50\ \mu\mathrm s)=6.0\ \mu\mathrm s .
$$
