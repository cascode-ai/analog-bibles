# Detailed solution - G393

The $V_{cms}$ node is a single RC node: the diode-connected $M_{23}$ sets its resistance and $C_{gs23}$ plus the fixed 90 fF set its capacitance. Find the bias current of $M_{23}$, size it from the given overdrive, then compute $C_{gs23}$ and the pole $-1/(RC)$.

### Step 1 — Bias current and transconductance of $M_{23}$

With $V_{oc}=V_{CM}$ the PMOS pair is balanced, so the tail current $|I_{D25}|$ splits equally and $M_{23}$, in series with $M_{21}$, carries half of it:

$$
I_{D23}=\frac{|I_{D25}|}{2}=\frac{0.4\ \mathrm{mA}}{2}=0.2\ \mathrm{mA}.
$$

A diode-connected MOSFET is in saturation ($V_{DS}=V_{GS}>V_{ov}$), so the square law $I_D=\tfrac12k'_n(W/L)V_{ov}^2$ applies and its transconductance is

$$
g_{m23}=\frac{2I_{D23}}{V_{ov23}}=\frac{2(0.2\ \mathrm{mA})}{0.2\ \mathrm{V}}=2\ \mathrm{mA/V}.
$$

### Step 2 — Resistance at the $V_{cms}$ node

Looking into the drain of a diode-connected device, a test voltage $v_x$ appears as $v_{gs}$ and draws $g_{m23}v_x$ plus $v_x/r_{o23}$. Since $r_o\gg1/g_m$, and the drain of $M_{21}$ looking back up is a high-impedance (current-source-like) node,

$$
R=\frac1{g_{m23}}\parallel r_{o23}\approx\frac1{g_{m23}}=500\ \Omega.
$$

### Step 3 — Size of $M_{23}$ and its gate–source capacitance

From the square law with the given overdrive,

$$
\left(\frac WL\right)_{23}=\frac{2I_{D23}}{k'_nV_{ov23}^2}
=\frac{2(0.2\ \mathrm{mA})}{(127\ \mu\mathrm{A/V^2})(0.2\ \mathrm V)^2}=78.7,
\qquad W_{23}=78.7\times0.8\ \mu\mathrm m=63.0\ \mu\mathrm m.
$$

In saturation the gate–source capacitance is $C_{gs}=\tfrac23WLC_{ox}$:

$$
C_{gs23}=\tfrac23(63.0\ \mu\mathrm m)(0.8\ \mu\mathrm m)(2.30\ \mathrm{fF/\mu m^2})=77.3\ \mathrm{fF}.
$$

The two capacitances are in parallel at the node:

$$
C=C_{gs23}+90\ \mathrm{fF}=167\ \mathrm{fF}.
$$

### Step 4 — Pole frequency

A single node with resistance $R$ to ground and capacitance $C$ gives one real pole at $p=-1/(RC)$:

$$
p=-\frac{g_{m23}}{C}=-\frac{2\ \mathrm{mA/V}}{167.3\ \mathrm{fF}}=-1.20\times10^{10}\ \mathrm{rad/s},
\qquad \frac{|p|}{2\pi}=1.9\ \mathrm{GHz}.
$$

Including the gate overlap capacitance of $M_{23}$ (a few fF) would lower $|p|$ only slightly.
