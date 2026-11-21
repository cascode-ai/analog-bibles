# Detailed solution - G416

With the tail current fixed and $v_{ic}=0$, the input pair and the PMOS mirrors carry constant currents. The CMC signal now drives the gates of the output current sinks $M_7$ and $M_9$ directly, so each output is a common-source amplifier: $M_7$ (or $M_9$) with the mirror output transistor $M_6$ (or $M_8$) as its load.

### Step 1 — Small-signal parameters

$M_7$ and $M_9$ sink the mirrored 100 μA at $V_{ov}=0.2$ V:

$$
g_{m7}=\frac{2(100\ \mu\mathrm A)}{0.2\ \mathrm V}=1\ \mathrm{mA/V},\qquad
r_{o7}=\frac{10\ \mathrm V}{100\ \mu\mathrm A}=100\ \mathrm{k\Omega},\qquad
r_{o6}=\frac{20\ \mathrm V}{100\ \mu\mathrm A}=200\ \mathrm{k\Omega}.
$$

### Step 2 — Why the PMOS output devices act as fixed loads

The gate of $M_5$ is at a fixed bias and $v_{ic}=0$, so the currents of $M_1$–$M_4$ do not change, and neither do the gate voltages of $M_6$ and $M_8$. A change in $V_{o1}$ affects $M_6$ only through its $r_{o6}$; $M_6$ is therefore just a resistance $r_{o6}$ from the output to ac ground.

### Step 3 — Common-source gain

At the $V_{o1}$ node, $M_7$ sinks $g_{m7}v_{cmc}$ and the node resistance is $r_{o6}\parallel r_{o7}$. Raising the NMOS gates increases their current and pulls the output down:

$$
a_{cmc}=\frac{v_{oc}}{v_{cmc}}=-g_{m7}(r_{o6}\parallel r_{o7})=-(1\ \mathrm{mA/V})(200\ \mathrm{k\Omega}\parallel100\ \mathrm{k\Omega})=-66.7.
$$

The $V_{o2}$ side ($M_9$ with $M_8$) is identical, so both outputs move together, as a CM signal should.
