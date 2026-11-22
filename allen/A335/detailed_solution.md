# Detailed solution - A335

Each signal path contains two high-impedance nodes, the first-stage output and the inverter output, so the amplifier has two low-frequency poles. The output inverter is an inverting gain stage, so Miller compensation around it splits the poles as in a single-ended two-stage op amp; one identical network is needed for each side.

### Step 1 — Poles of the uncompensated amplifier

The first stage (n-channel pair M1–M2, p-channel current-source loads, n-channel tail) has high-impedance outputs at the drains of M1 and M2, nodes d1 and d2. Node d1 drives the inverter MP1–MN1 that forms $v_{out}^+$, and d2 drives MP2–MN2 that forms $v_{out}^-$. Both gates of an inverter are driven by the same node, so its small-signal transconductance is the sum of the two device transconductances, and its gain is

$$
A_{v2}=-(g_{mN}+g_{mP})(r_{dsN}\parallel r_{dsP}).
$$

Each output node has resistance $r_{dsN}\parallel r_{dsP}$ and carries $C_L$, so both nodes of each path are high-impedance and the two poles are at low frequency and close together.

### Step 2 — Placement of the compensation capacitors

Connect a Miller capacitor $C_c$, preferably in series with a nulling resistor $R_z$, from each output back to the input of the same inverter: from $v_{out}^+$ to d1 and from $v_{out}^-$ to d2.

<!-- diagram: diagram-01.cir -->

Each capacitor bridges an inverting stage, so its effect is multiplied by the inverter gain and it splits the poles of its own half. The two networks are identical to preserve the symmetry; a capacitor from one output to the opposite side's first-stage node would give positive feedback.

### Step 3 — Design relations (per half)

With $g_{m2}=g_{mN}+g_{mP}$ for the push–pull second stage:

$$
GB=\frac{g_{m1}}{C_c},\qquad p_2\approx-\frac{g_{mN}+g_{mP}}{C_L},\qquad z=\frac{g_{mN}+g_{mP}}{C_c}\ (R_z=0).
$$

The output pole is higher than for a single common-source device of the same current, because both inverter devices contribute transconductance; a smaller $C_c$ therefore suffices. The right-half-plane zero is removed with $R_z\ge1/(g_{mN}+g_{mP})$. For a 60° phase margin with the zero at or beyond $10\,GB$, $|p_2|\ge2.2\,GB$, so

$$
\frac{g_{mN}+g_{mP}}{C_L}\ge2.2\frac{g_{m1}}{C_c}\quad\Rightarrow\quad C_c\ge2.2\frac{g_{m1}}{g_{mN}+g_{mP}}C_L .
$$

### Step 4 — Common-mode feedback

The output common-mode level, and with it the bias of the inverters, is not set by this circuit: the first-stage output level depends on the match between the loads and the tail. A common-mode feedback loop acting on the first stage (for example on the load or tail bias) is required, and it must be stable as well; the Miller networks above compensate the differential path.
