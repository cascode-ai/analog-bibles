# Detailed solution - A074

While $\phi_1$ is high, $C_1$ charges to the source voltage. On the falling edge, charge from the channel and from the gate–drain overlap is injected onto $C_1$ and lowers its voltage. Evaluate the operating-point threshold (with body effect), confirm the slow regime, and evaluate the two terms of the given error expression.

### Step 1 — Voltage before the falling edge and threshold

$\phi_1$ stays high long enough for $C_1$ to charge fully, so the switch carries no current at the end of the pulse and both of its terminals are at $V_S=2.0$ V. With the bulk at ground, $V_{SB}=2$ V:

$$
V_T=V_{T0}+\gamma\Big(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\Big)=0.7\ \mathrm V+0.4\ \mathrm{V^{1/2}}\big(\sqrt{2.7\ \mathrm V}-\sqrt{0.7\ \mathrm V}\big)=1.023\ \mathrm V .
$$

The switch therefore turns off when the falling gate reaches $V_S+V_T=3.023$ V.

### Step 2 — Parameters of the falling edge and slow-regime check

$$
U=\frac{5\ \mathrm V}{10\ \mathrm{ns}}=5\times10^{8}\ \mathrm{V/s},\qquad
\beta=K'\frac WL=(110\ \mu\mathrm{A/V^2})(5)=550\ \mu\mathrm{A/V^2},
$$

$$
C_{channel}=WLC_{ox}=(5\ \mu\mathrm m)(1\ \mu\mathrm m)(24.7\times10^{-4}\ \mathrm{F/m^2})=12.35\ \mathrm{fF},\qquad C_L=C_1=30\ \mathrm{fF}.
$$

The slow regime requires the gate to fall slowly compared with the rate at which the switch can conduct charge back to the source. With $V_{HT}=V_H-V_S-V_T=5-2-1.023=1.977$ V,

$$
\frac{\beta V_{HT}^2}{2C_L}=\frac{(550\ \mu\mathrm{A/V^2})(1.977\ \mathrm V)^2}{2(30\ \mathrm{fF})}=3.6\times10^{10}\ \mathrm{V/s}\gg U=5\times10^{8}\ \mathrm{V/s},
$$

so the slow-regime expression applies.

### Step 3 — The two error terms

The first term is the charge that reaches $C_L$ while the switch is turning off. In the slow regime most of the channel charge and overlap-coupled charge flows back to the low-impedance source, and only the part injected in a short interval near turn-off remains:

$$
\frac{W\cdot\mathrm{CGDO}+C_{channel}/2}{C_L}\sqrt{\frac{\pi UC_L}{2\beta}}
=\frac{5\ \mathrm{fF}+6.175\ \mathrm{fF}}{30\ \mathrm{fF}}\sqrt{\frac{\pi(5\times10^{8}\ \mathrm{V/s})(30\ \mathrm{fF})}{2(550\ \mu\mathrm{A/V^2})}}
=0.3725\times0.207\ \mathrm V=0.077\ \mathrm V .
$$

The second term is capacitive feedthrough after the switch is off: the gate continues from $V_S+V_T$ down to $V_L=0$, coupling through the overlap capacitance onto $C_L$:

$$
\frac{W\cdot\mathrm{CGDO}}{C_L}(V_S+V_T-V_L)=\frac{5\ \mathrm{fF}}{30\ \mathrm{fF}}(2\ \mathrm V+1.023\ \mathrm V-0)=0.504\ \mathrm V .
$$

### Step 4 — Output voltage at $t_1$

$$
V_{error}=0.077\ \mathrm V+0.504\ \mathrm V=0.581\ \mathrm V,\qquad
v_{out}(t_1)=V_S-V_{error}=2.0\ \mathrm V-0.581\ \mathrm V=1.42\ \mathrm V .
$$

The error is negative-going because the falling gate removes charge from the n-channel switch and the overlap. It is dominated by the overlap feedthrough, since the 5 fF overlap is one sixth of the 30 fF hold capacitor; ignoring the body effect ($V_T=0.7$ V) would underestimate it and give 1.47 V.
