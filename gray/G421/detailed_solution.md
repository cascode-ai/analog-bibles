# Detailed solution - G421

A MOSFET in cutoff has no channel, so the only capacitance between its gate and its source/drain diffusions is the overlap capacitance, $C_{ol}$ per unit width at each edge. Choose the device type so that it stays firmly off at the bias voltages of the two nodes it connects, and choose its width so that its overlap capacitance equals $C_{gd1}=C_{ol}W_1$.

### Step 1 — Target capacitance

$$
C_n=C_{gd1}=C_{ol}W_1=(0.35\ \mathrm{fF/\mu m})(77\ \mu\mathrm m)=27\ \mathrm{fF}.
$$

Each $C_n$ connects an input gate (dc ≈ 0 V) to the opposite input transistor's drain (dc ≈ −0.55 V).

### Step 2 — Capacitance of a cutoff device

With source and drain shorted together, the gate sees both overlaps in parallel:

$$
C_n=C_{gs,ov}+C_{gd,ov}=2C_{ol}W_n .
$$

Setting this equal to $C_{ol}W_1$:

$$
W_n=\frac{W_1}2=\frac{77\ \mu\mathrm m}2=38.5\ \mu\mathrm m.
$$

The overlap capacitance does not depend on $L$; using the same drawn $L=1\ \mu$m and the same device type as $M_1$ makes the overlap regions identical in structure, so $C_n$ tracks $C_{gd1}$ over process variations.

### Step 3 — Device type and cutoff check

Use a PMOS, with its gate on one input and its shorted source/drain on the opposite drain node:

$$
V_{SG}\approx0\ \mathrm V-(-0.55\ \mathrm V)=-0.55\ \mathrm V<|V_{tp}|=0.8\ \mathrm V,
$$

so the gate is above the source and the PMOS is firmly off (no inversion layer; its n-well is at $V_{DD}$).

An NMOS with its gate on the input would have $V_{GS}\approx+0.55$ V, only 50 mV below $V_{tn}=0.6$ V, too close to turning on. An NMOS connected the other way (gate on the −0.55-V drain node) would be off, but as a different device type its overlap capacitance would not track the PMOS $C_{gd1}$.

### Step 4 — Connection of each device

- $M_{n1}$ (PMOS, $W=38.5\ \mu$m, $L=1\ \mu$m): gate to $V_{i1}$; source and drain together to the drain of $M_2$.
- $M_{n2}$ (PMOS, $W=38.5\ \mu$m, $L=1\ \mu$m): gate to $V_{i2}$; source and drain together to the drain of $M_1$.
- Body: n-well to $V_{DD}$, like $M_1$–$M_2$.

An equivalent alternative is a full replica of $M_1$ ($W=77\ \mu$m) with gate and source tied to the input and drain to the opposite drain: $C_{gs}$ is then shorted, leaving one overlap $C_{ol}W=C_{gd1}$ between the two nodes, and with $V_{SG}=0$ the device is off.
