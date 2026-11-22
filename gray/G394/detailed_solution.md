# Detailed solution - G394

The $V_{cms}$ node is a single RC node: the diode-connected $M_{23}$ sets its resistance and $C_{gs23}$ plus the fixed 90 fF set its capacitance. Find the bias current of $M_{23}$, size it from the given overdrive, then compute $C_{gs23}$ and the pole $-1/(RC)$.

### Step 1 — Bias current and transconductance of $M_{23}$

With $V_{oc}=V_{CM}$ the PMOS pair is balanced, so the tail current splits equally and $M_{23}$, in series with $M_{21}$, carries half of it:

$$
I_{D23}=\frac{|I_{D25}|}{2}=\frac{0.1\ \mathrm{mA}}{2}=0.05\ \mathrm{mA}.
$$

The diode-connected device is saturated ($V_{DS}=V_{GS}>V_{ov}$), so with the square law $I_D=\tfrac12k'_n(W/L)V_{ov}^2$,

$$
g_{m23}=\frac{2I_{D23}}{V_{ov23}}=\frac{2(0.05\ \mathrm{mA})}{0.2\ \mathrm{V}}=0.5\ \mathrm{mA/V}.
$$

### Step 2 — Resistance at the $V_{cms}$ node

A test voltage at the drain of the diode-connected $M_{23}$ is also its $v_{gs}$, so the device presents $1/g_{m23}\parallel r_{o23}$; the drain of $M_{21}$ above it is a high-impedance node. With $r_o\gg1/g_m$,

$$
R\approx\frac1{g_{m23}}=2\ \mathrm{k\Omega}.
$$

### Step 3 — Size of $M_{23}$ and the node capacitance

$$
\left(\frac WL\right)_{23}=\frac{2I_{D23}}{k'_nV_{ov23}^2}
=\frac{2(0.05\ \mathrm{mA})}{(127\ \mu\mathrm{A/V^2})(0.2\ \mathrm V)^2}=19.7,
\qquad W_{23}=19.7\times0.8\ \mu\mathrm m=15.7\ \mu\mathrm m.
$$

With $C_{gs}=\tfrac23WLC_{ox}$ in saturation,

$$
C_{gs23}=\tfrac23(15.7\ \mu\mathrm m)(0.8\ \mu\mathrm m)(2.30\ \mathrm{fF/\mu m^2})=19.3\ \mathrm{fF},
\qquad C=C_{gs23}+90\ \mathrm{fF}=109\ \mathrm{fF}.
$$

The 90-fF capacitance is fixed by the problem and does not change with the bias current.

### Step 4 — Pole frequency

The single RC node gives one real pole $p=-1/(RC)$:

$$
p=-\frac{g_{m23}}{C}=-\frac{0.5\ \mathrm{mA/V}}{109.3\ \mathrm{fF}}=-4.6\times10^{9}\ \mathrm{rad/s},
\qquad \frac{|p|}{2\pi}=0.73\ \mathrm{GHz}.
$$
