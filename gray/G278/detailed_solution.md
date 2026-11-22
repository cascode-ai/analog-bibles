# Detailed solution - G278

The output (source of the follower) is connected straight back to the inverting input, so the feedback network is a wire: the loop senses the output voltage (shunt) and subtracts it in series with the input (series). This is series–shunt feedback with $f=1$ and no loading by the feedback network. The basic amplifier is the op amp followed by the source follower, including the body effect.

### Step 1 — Small-signal parameters of the follower

From the square law, $g_m=\sqrt{2k'(W/L)I_D}=\sqrt{2(180\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})}=4.243$ mA/V. The body transconductance is $g_{mb}=g_m\gamma/(2\sqrt{2|\phi_f|+V_{SB}})$ with $V_{SB}=0$:

$$
g_{mb}=\frac{(4.243\ \mathrm{mA/V})(0.3\ \mathrm{V^{1/2}})}{2\sqrt{0.6\ \mathrm V}}=0.822\ \mathrm{mA/V},\qquad \frac1{g_m+g_{mb}}=197.5\ \Omega .
$$

With the body grounded and $r_o=\infty$, a source follower driving an ideal current-source load has gain $g_m/(g_m+g_{mb})=0.838$ and output resistance $1/(g_m+g_{mb})$.

### Step 2 — Feedback network and basic amplifier

The feedback network is the wire from output to inverting input, so $f=h_{12f}=1$ and $h_{11f}=0$, $h_{22f}=0$: it adds nothing to the basic amplifier. The gate draws no current, so there is no drop across $R_o$ and the op amp's output voltage $a_vv_x$ appears at the gate:

$$
a=a_v\,\frac{g_m}{g_m+g_{mb}}=(1000)(0.838)=838 .
$$

### Step 3 — Loop gain and closed-loop gain

$$
T=af=838,\qquad \frac{v_o}{v_i}=\frac{a}{1+T}=\frac{837.8}{838.8}=0.9988,
$$

a gain error of $1/(1+T)=0.12\%$.

### Step 4 — Input and output resistances

The input loop of the basic amplifier contains only $R_i$ (the source of $v_i$ and the wire add nothing). Series mixing multiplies it by $1+T$:

$$
R_{in}=R_i(1+T)=(1\ \mathrm{M\Omega})(838.8)=839\ \mathrm{M\Omega}.
$$

The output resistance of the basic amplifier is that of the follower, $1/(g_m+g_{mb})=197.5\ \Omega$ ($R_o$ is in series with the gate and does not appear at the source). Shunt sampling divides it by $1+T$:

$$
R_{out}=\frac{197.5\ \Omega}{838.8}=0.235\ \Omega .
$$

Neglecting the body effect would give $T=1000$, gain 0.999 and essentially the same output resistance ($1/g_m$ divided by 1001, 0.236 Ω).
