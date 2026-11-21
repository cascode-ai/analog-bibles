# Detailed solution - G260

With the output taken as the emitter voltage of $Q_3$, the divider $R_F$–$R_{E1}$ samples $v_o$ (shunt sampling) and returns a fraction of it in series with the base–emitter loop of $Q_1$ (series mixing): series–shunt feedback, a voltage amplifier. Use the $h$-parameters of the network $R_F$, $R_{E1}$: $h_{12f}$ is the feedback factor, $h_{11f}$ loads the emitter of $Q_1$, and $1/h_{22f}$ loads the output.

### Step 1 — Small-signal parameters

As computed from $g_m=I_C/V_T$, $r_\pi=\beta/g_m$, $r_o=V_A/I_C$:

| Device | $g_m$ (mA/V) | $r_\pi$ (kΩ) | $r_o$ (kΩ) |
|---|---|---|---|
| $Q_1$ | 19.2 | 6.24 | 80 |
| $Q_2$ | 29.6 | 4.05 | 51.9 |
| $Q_3$ | 28.1 | 4.27 | 54.8 |

### Step 2 — Feedback network

Port 1 is the emitter of $Q_1$, port 2 the output node (emitter of $Q_3$); $R_{E2}$ stays with the amplifier as part of its output load. For the network formed by $R_F$ in series to port 2 and $R_{E1}$ to ground at port 1:

$$
f=h_{12f}=\frac{R_{E1}}{R_{E1}+R_F}=\frac{290}{2190}=0.1324,\qquad
h_{11f}=R_{E1}\parallel R_F=252\ \Omega,\qquad \frac1{h_{22f}}=R_{E1}+R_F=2.19\ \mathrm{k\Omega}.
$$

The output loading combines with $R_{E2}$: $R'_E=R_{E2}\parallel(R_{E1}+R_F)=256\ \Omega$.

### Step 3 — Basic-amplifier voltage gain

Neglecting $r_o$ in the forward path, the base input resistances of $Q_1$ and $Q_3$ are

$$
R_{in1}=r_{\pi1}+(\beta+1)h_{11f}=36.7\ \mathrm{k\Omega},\qquad R_{in3}=r_{\pi3}+(\beta+1)R'_E=35.3\ \mathrm{k\Omega}.
$$

The signal path:

$$
i_{c1}=\frac{\beta v_s}{R_{in1}},\quad v_{c1}=-i_{c1}(R_{L1}\parallel r_{\pi2})=-i_{c1}(2.93\ \mathrm{k\Omega}),\quad
v_{c2}=-g_{m2}v_{c1}(R_{L2}\parallel R_{in3})=-g_{m2}v_{c1}(5.13\ \mathrm{k\Omega}),
$$

and $Q_3$ is an emitter follower onto $R'_E$, $v_o=v_{c2}\,(\beta+1)R'_E/R_{in3}=0.879\,v_{c2}$. Multiplying the factors:

$$
a=\frac{v_o}{v_s}=\frac{120}{36.7\ \mathrm{k\Omega}}(2.93\ \mathrm{k\Omega})(29.6\ \mathrm{mA/V})(5.13\ \mathrm{k\Omega})(0.879)=1280 .
$$

### Step 4 — Loop gain and closed-loop gain

$$
T=af=(1280)(0.1324)=169,\qquad
\frac{v_o}{v_s}=\frac{a}{1+T}=\frac{1280}{170}=7.51,
$$

close to the ideal $1/f=1+R_F/R_{E1}=7.55$. Including all $r_o$ (in the basic amplifier $T$ becomes 153), an exact nodal solution gives $v_o/v_s=7.50$.

### Step 5 — Input impedance

With $r_o$ neglected, series mixing multiplies the loaded input resistance by $1+T$:

$$
Z_{in}=R_{in1}(1+T)=(36.7\ \mathrm{k\Omega})(170)=6.25\ \mathrm{M\Omega}.
$$

This value is so high that $r_{o1}=80\ \mathrm{k\Omega}$, which bridges the collector and emitter of $Q_1$ and lets signal current bypass the feedback-enhanced base path, cannot be ignored. With the given $V_A$, an exact nodal solution including every $r_o$ gives

$$
Z_{in}\approx3.5\ \mathrm{M\Omega}.
$$

### Step 6 — Output impedance

Without feedback the output node sees $R'_E$ in parallel with the emitter-follower output resistance of $Q_3$, $(r_{\pi3}+R_{L2})/(\beta+1)$ (the base of $Q_3$ is fed from $R_{L2}$, since $r_{o2}$ is neglected):

$$
z_{oa}=256\ \Omega\parallel\frac{4.27\ \mathrm{k\Omega}+6\ \mathrm{k\Omega}}{121}=256\ \Omega\parallel84.9\ \Omega=63.8\ \Omega .
$$

Shunt sampling divides it by $1+T$:

$$
Z_{out}=\frac{63.8\ \Omega}{170}=0.374\ \Omega ,
$$

and the exact nodal solution with all $r_o$ gives 0.39 Ω.

Summary: $v_o/v_s\approx7.50$, $T\approx169$, $Z_{in}\approx3.5$ MΩ (6.25 MΩ if $r_o$ is neglected), $Z_{out}\approx0.37$–0.39 Ω.
