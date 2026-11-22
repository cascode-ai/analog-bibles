# Detailed solution - A079

Follow the two clocks through the switching transition and track the charge each transistor delivers to the output node after M1 has turned off, since in the slow regime only that charge remains on $C_1$. Choose $W_2$ so that the charge drawn by M2 cancels the charge removed by M1.

### Step 1 — Turn-off and turn-on voltages

Before the transition the output node is at $V_S=2$ V, so both transistors have $V_{SB}=2$ V:

$$
V_T=0.7\ \mathrm V+0.4\ \mathrm{V^{1/2}}\big(\sqrt{2.7\ \mathrm V}-\sqrt{0.7\ \mathrm V}\big)=1.023\ \mathrm V,\qquad
V_X\equiv V_S+V_T=3.023\ \mathrm V .
$$

M1 is on while $\phi_1>V_X$ and M2 is on while $\bar\phi_1>V_X$. The clocks switch together, $\bar\phi_1=5\ \mathrm V-\phi_1$, so M1 turns off when $\phi_1=V_X$, at which point $\bar\phi_1=5-V_X=1.98$ V. Because $V_X>2.5$ V, M1 is already off before M2 turns on. Before this instant, any charge coupled into the node (by either device) flows back into the 2-V source through M1.

### Step 2 — Charge from M1 after it turns off

After turn-off, M1's channel charge has already returned to the source, and only its gate–drain overlap couples to the node as $\phi_1$ falls from $V_X$ to 0. This removes charge from the node:

$$
\Delta Q_1=-W_1\,\mathrm{CGDO}\,V_X .
$$

### Step 3 — Charge from M2 while $\bar\phi_1$ rises from $5-V_X$ to 5 V

M2 has both source and drain on the node, so both overlaps (CGSO and CGDO) couple its gate to it.

- From $\bar\phi_1=5-V_X$ to $V_X$, M2 is off; the gate swing $2V_X-5$ couples through both overlaps: $2W_2\,\mathrm{CGDO}\,(2V_X-5)$.
- From $V_X$ to 5 V, M2 is on; its channel forms and draws its charge from the node, while the overlaps keep coupling: $W_2\big(L_2C_{ox}+2\,\mathrm{CGDO}\big)(5-V_X)$.

Adding the two intervals:

$$
\Delta Q_2=W_2\Big[2\,\mathrm{CGDO}\,V_X+L_2C_{ox}(5-V_X)\Big],
$$

which raises the node voltage, opposite in sign to $\Delta Q_1$.

### Step 4 — Cancellation condition and size of M2

Setting $\Delta Q_1+\Delta Q_2=0$:

$$
W_2\Big[2\,\mathrm{CGDO}\,V_X+L_2C_{ox}(5-V_X)\Big]=W_1\,\mathrm{CGDO}\,V_X
\quad\Rightarrow\quad
W_2=W_1\left[2+\frac{L_2C_{ox}(5-V_S-V_T)}{\mathrm{CGDO}\,(V_S+V_T)}\right]^{-1}.
$$

For $L_2=0.8\ \mu$m:

$$
\mathrm{CGDO}\,V_X=(220\ \mathrm{pF/m})(3.023\ \mathrm V)=6.65\times10^{-10}\ \mathrm{F\,V/m},\qquad
L_2C_{ox}(5-V_X)=(0.8\ \mu\mathrm m)(24.7\times10^{-4}\ \mathrm{F/m^2})(1.977\ \mathrm V)=3.91\times10^{-9}\ \mathrm{F\,V/m},
$$

$$
\frac{W_2}{W_1}=\frac{6.65}{2(6.65)+39.1}=0.127 .
$$

So $W_2\approx0.127\,W_1$ (about $0.107\,W_1$ for $L_2=1\ \mu$m). Because M2's channel charge dominates its contribution, a shorter $L_2$ requires a wider M2; using the minimum allowed $L_2$ keeps the dummy compact. The dummy is much smaller than the usual half-size dummy because, in the slow regime, M1's channel charge never reaches $C_1$: only its overlap feedthrough has to be cancelled.
