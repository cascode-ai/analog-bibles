# Detailed solution - G264

$R_E$ senses the emitter current of $Q_2$ (series sampling at the output) and $R_F$ returns a current to the base of $Q_1$ (shunt mixing at the input): shunt–series feedback, a current amplifier. Represent the feedback network $R_F$, $R_E$ by its $g$-parameters, load the basic amplifier with $g_{11f}$ and $g_{22f}$, and use $g_{12f}$ referred to the collector current as $f$. As in other circuits whose loop senses an emitter current, the output impedance needs a separate argument.

### Step 1 — Small-signal parameters

Both devices: $g_m=I_C/V_T=38.46$ mA/V, $r_\pi=\beta/g_m=5.2\ \mathrm{k\Omega}$, $r_o=V_A/I_C=100\ \mathrm{k\Omega}$, $\alpha_2=\beta/(\beta+1)=0.995$.

### Step 2 — Feedback network

Port 1 is the base node of $Q_1$, port 2 the emitter of $Q_2$. For $R_F$ in series from port 1 and $R_E$ to ground at port 2:

$$
g_{11f}=\frac1{R_E+R_F}=\frac1{1.1\ \mathrm{k\Omega}},\qquad g_{22f}=R_E\parallel R_F=90.9\ \Omega,\qquad
f=-\frac{R_E}{R_E+R_F}\cdot\frac1{\alpha_2}=-0.0914 .
$$

The fed-back current is drawn out of the input node when the emitter current of $Q_2$ flows down through $R_E$, hence the negative sign; the factor $1/\alpha_2$ converts the sensed emitter current $i_o/\alpha_2$ to the output current $i_o$. The ideal gain is $1/f=-10.94$.

### Step 3 — Basic amplifier

At the input, $R_S$, $R_E+R_F$ (from $g_{11f}$) and $r_{\pi1}$ are in parallel:

$$
R_{i}=R_S\parallel(R_E+R_F)\parallel r_{\pi1}=1\ \mathrm{k\Omega}\parallel1.1\ \mathrm{k\Omega}\parallel5.2\ \mathrm{k\Omega}=476\ \Omega .
$$

$Q_2$ has $g_{22f}$ in its emitter, so its base presents $R_{in2}=r_{\pi2}+(\beta+1)(90.9\ \Omega)=23.5\ \mathrm{k\Omega}$, and the collector of $Q_1$ sees $R_{L1}\parallel r_{o1}\parallel R_{in2}=3305\ \Omega$. Following the signal, $v_{be1}=i\,R_i$, $v_{c1}=-g_{m1}v_{be1}(3305\ \Omega)$, $i_{b2}=v_{c1}/R_{in2}$ and $i_o=\beta i_{b2}$:

$$
a=\frac{i_o}{i}=-(476\ \Omega)(38.46\ \mathrm{mA/V})(3305\ \Omega)\frac{200}{23.5\ \mathrm{k\Omega}}=-515 .
$$

### Step 4 — Loop transmission and current gain

$$
T=af=(-515)(-0.0914)=47.1,\qquad
\frac{i_o}{i_s}=\frac{a}{1+T}=\frac{-515}{48.1}=-10.7 .
$$

The return ratio of $g_{m1}$ (45.8) gives essentially the same loop transmission, and a direct nodal solution gives $i_o/i_s=-10.72$. The gain is negative because $i_o$ is defined into the collector of $Q_2$, whereas the input current pushes the emitter current of $Q_2$ outward through $R_E$.

### Step 5 — Input impedance

Shunt mixing divides the loaded input resistance by $1+T$:

$$
Z_{in}=\frac{476\ \Omega}{48.1}=9.9\ \Omega ,
$$

including $R_S$ (excluding $R_S$, about 10.0 Ω).

### Step 6 — Output impedance

Without feedback, the collector of $Q_2$ with emitter resistance $R'_E=g_{22f}=90.9\ \Omega$ and base resistance $R_b=R_{L1}\parallel r_{o1}$ presents

$$
z_{oa}\approx r_{o2}\left[1+\frac{g_{m2}R'_E\,r_{\pi2}}{r_{\pi2}+R_b+R'_E}\right]=299\ \mathrm{k\Omega},
$$

and the two-port formula $(1+T)z_{oa}=14.4$ MΩ would follow. That overestimates $Z_{out}$: the loop holds the emitter current of $Q_2$, and the collector current differs from it by the base current, which is not sensed. With the emitter current held fixed, a voltage $v$ at the collector drives $v/r_{o2}$ through $r_{o2}$, and keeping the emitter current constant forces $g_{m2}v_{be2}(1+1/\beta)=-v/r_{o2}$, so the collector current changes by only $v/[(\beta+1)r_{o2}]$. The output impedance is therefore bounded by $(\beta+1)r_{o2}=20$ MΩ, and with $T\approx47$ an exact nodal solution gives

$$
Z_{out}\approx8.5\ \mathrm{M\Omega}.
$$

Summary: $i_o/i_s\approx-10.7$, $T\approx47$, $Z_{in}\approx9.9\ \Omega$, $Z_{out}\approx8.5$ MΩ.
