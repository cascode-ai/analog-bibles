# Detailed solution - G259

The resistors $R_{E1}$, $R_F$, $R_{E2}$ sense the emitter current of $Q_3$ (series sampling) and return a voltage in series with the base–emitter loop of $Q_1$ (series mixing): series–series feedback, whose closed-loop gain is a transconductance. Represent the feedback network by its $z$-parameters, load the basic amplifier with $z_{11f}$ and $z_{22f}$, and use $z_{12f}$ (referred to the collector current) as $f$. The output impedance needs separate care, because the loop controls the emitter, not the collector, current of $Q_3$.

### Step 1 — Small-signal parameters

With $g_m=I_C/V_T$, $r_\pi=\beta/g_m$ and $r_o=V_A/I_C$:

| Device | $I_C$ (mA) | $g_m$ (mA/V) | $r_\pi$ (kΩ) | $r_o$ (kΩ) |
|---|---|---|---|---|
| $Q_1$ | 0.5 | 19.2 | 6.24 | 80 |
| $Q_2$ | 0.77 | 29.6 | 4.05 | 51.9 |
| $Q_3$ | 0.73 | 28.1 | 4.27 | 54.8 |

### Step 2 — Feedback network

For the T-network $R_{E1}$, $R_F$, $R_{E2}$ (port 1 at the emitter of $Q_1$, port 2 at the emitter of $Q_3$):

$$
z_{11f}=R_{E1}\parallel(R_F+R_{E2})=256\ \Omega,\qquad z_{22f}=R_{E2}\parallel(R_F+R_{E1})=256\ \Omega,
$$

$$
z_{12f}=\frac{R_{E1}R_{E2}}{R_{E1}+R_{E2}+R_F}=\frac{(290)(290)}{2480}\ \Omega=33.9\ \Omega .
$$

The network is driven by the emitter current of $Q_3$, $i_o/\alpha_3$ with $\alpha_3=\beta/(\beta+1)=0.9917$, so referred to the output current

$$
f=\frac{z_{12f}}{\alpha_3}=34.2\ \Omega .
$$

### Step 3 — Basic-amplifier transconductance

Neglect $r_o$ in the forward path (it is large compared with the collector loads). With $z_{11f}$ in the emitter of $Q_1$ and $z_{22f}$ in the emitter of $Q_3$, the resistances looking into the bases are

$$
R_{in1}=r_{\pi1}+(\beta+1)z_{11f}=6.24\ \mathrm{k\Omega}+(121)(256\ \Omega)=37.2\ \mathrm{k\Omega},\qquad
R_{in3}=r_{\pi3}+(\beta+1)z_{22f}=35.3\ \mathrm{k\Omega}.
$$

Follow the signal through the three stages:

$$
i_{c1}=\frac{\beta v_s}{R_{in1}},\qquad
v_{c1}=-i_{c1}\,(R_{L1}\parallel r_{\pi2})=-i_{c1}(2.93\ \mathrm{k\Omega}),
$$

$$
v_{c2}=-g_{m2}v_{c1}\,(R_{L2}\parallel R_{in3})=-g_{m2}v_{c1}(5.13\ \mathrm{k\Omega}),\qquad
i_o=\frac{\beta v_{c2}}{R_{in3}} .
$$

Multiplying the factors:

$$
a=\frac{i_o}{v_s}=\frac{120}{37.2\ \mathrm{k\Omega}}\,(2.93\ \mathrm{k\Omega})(29.6\ \mathrm{mA/V})(5.13\ \mathrm{k\Omega})\frac{120}{35.3\ \mathrm{k\Omega}}=4.88\ \mathrm{A/V}.
$$

The two inversions cancel, so $a>0$ and the feedback is negative.

### Step 4 — Loop gain and overall gain

$$
T=af=(4.88\ \mathrm{A/V})(34.2\ \Omega)=167,
$$

$$
\frac{i_o}{v_s}=\frac{a}{1+T}=\frac{4.88\ \mathrm{A/V}}{168}=29.1\ \mathrm{mA/V},
$$

close to the ideal $1/f=29.2$ mA/V. (Placing $r_o$ across $R_{L1}$ and $R_{L2}$ lowers $T$ to 147; an exact nodal solution with all $r_o$ included gives 29.0 mA/V.)

### Step 5 — Input impedance

Series mixing multiplies the loaded input impedance by $1+T$:

$$
Z_{in}=R_{in1}(1+T)=(37.2\ \mathrm{k\Omega})(168)=6.25\ \mathrm{M\Omega}.
$$

At this level $r_{o1}$ (80 kΩ from collector to emitter of $Q_1$) is no longer negligible: an exact nodal solution including every $r_o$ gives about 3.5 MΩ.

### Step 6 — Output impedance

The two-port formula $Z_{out}=z_{oa}(1+T)$ would give tens of megohms, but it does not apply: the loop holds the emitter current of $Q_3$ constant, and the collector current differs from it by the base current, which is not sensed. With the emitter current held fixed, a test voltage $v$ at the collector drives $v/r_{o3}$ through $r_{o3}$; to keep the emitter current constant, $g_{m3}v_{be3}+v_{be3}/r_{\pi3}=-v/r_{o3}$, so

$$
i_c=\frac{v}{r_{o3}}+g_{m3}v_{be3}=\frac{v}{r_{o3}}\left(1-\frac{\beta}{\beta+1}\right)=\frac{v}{(\beta+1)r_{o3}} .
$$

Even infinite loop gain therefore cannot raise $Z_{out}$ above $(\beta+1)r_{o3}=(121)(54.8\ \mathrm{k\Omega})=6.6\ \mathrm{M\Omega}$. With the finite loop gain, an exact nodal solution (input grounded, all $r_o$ included) gives

$$
Z_{out}\approx5.6\ \mathrm{M\Omega}.
$$

Summary: $i_o/v_s\approx29.0$ mA/V, $T\approx167$, $Z_{in}\approx6.3$ MΩ (3.5 MΩ with $r_o$ included), $Z_{out}\approx5.6$ MΩ.
