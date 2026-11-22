# Detailed solution - A054

Find the terminal voltages relative to the source, include the body effect in the threshold, determine the operating region, and then assign the gate capacitance components for that region.

### Step 1 — Threshold voltage with body effect

With $V_S=0.5$ V and $V_B=0$, the source–bulk voltage is $V_{SB}=0.5$ V, so the threshold rises above $V_{T0}$:

$$
V_T=V_{T0}+\gamma\Big(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\Big)
=0.7\ \mathrm V+0.4\ \mathrm{V^{1/2}}\big(\sqrt{1.2\ \mathrm V}-\sqrt{0.7\ \mathrm V}\big)=0.804\ \mathrm V .
$$

### Step 2 — Operating region

The gate–source and drain–source voltages are

$$
V_{GS}=2.4\ \mathrm V-0.5\ \mathrm V=1.9\ \mathrm V,\qquad V_{DS}=2\ \mathrm V-0.5\ \mathrm V=1.5\ \mathrm V,
$$

so $V_{GS}>V_T$ (the channel is inverted) and

$$
V_{GS}-V_T=1.9\ \mathrm V-0.804\ \mathrm V=1.096\ \mathrm V<V_{DS}=1.5\ \mathrm V .
$$

The transistor is in saturation. The conclusion does not depend on the body effect: even with $V_T=V_{T0}$, $V_{GS}-V_T=1.2$ V is still below 1.5 V. ($K'$ only sets the current and does not affect the capacitances.)

### Step 3 — Capacitances in saturation

The components are the channel-area oxide capacitance and the overlaps:

$$
C_2=C_{ox}WL=(24.7\times10^{-4}\ \mathrm{F/m^2})(5\ \mu\mathrm m)(1\ \mu\mathrm m)=12.35\ \mathrm{fF},\quad
\mathrm{CGSO}\cdot W=\mathrm{CGDO}\cdot W=1.10\ \mathrm{fF},\quad
\mathrm{CGBO}\cdot L=0.70\ \mathrm{fF}.
$$

In saturation the inversion layer shields the bulk, and the channel, pinched off at the drain end, belongs to the source, which receives $\tfrac23$ of $C_2$:

$$
\begin{aligned}
C_{GS}&=\mathrm{CGSO}\cdot W+\tfrac23C_2=1.10+8.23=9.33\ \mathrm{fF},\\
C_{GD}&=\mathrm{CGDO}\cdot W=1.10\ \mathrm{fF},\\
C_{GB}&=\mathrm{CGBO}\cdot L=0.70\ \mathrm{fF}.
\end{aligned}
$$
