# Detailed solution - A138

With equal voltages $v_{IC}$ on both gates the stage is balanced: the tail device M5 carries $I_{SS}=10$ µA and each of M1–M4 carries $I_{SS}/2=5$ µA. The upper limit is reached when the input devices leave saturation against their drains, which the p-channel mirror holds one $V_{SG3}$ below $V_{DD}$; the lower limit is reached when the tail device M5 runs out of drain–source voltage.

### Step 1 — Device voltages

With $W/L=10$ for every device and $V_{OV}=\sqrt{2I_D/[K'(W/L)]}$:

$$
V_{SG3}=0.7+\sqrt{\frac{2(5\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(10)}}=0.7+0.141\ \mathrm V=0.841\ \mathrm V,
$$

$$
V_{DS5}(\mathrm{sat})=\sqrt{\frac{2(10\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(10)}}=0.135\ \mathrm V,\qquad
V_{GS1}=0.7+\sqrt{\frac{2(5\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(10)}}=0.7+0.095\ \mathrm V=0.795\ \mathrm V .
$$

### Step 2 — Maximum input common-mode voltage

The drain of M1 is at $V_{DD}-V_{SG3}$, fixed by the diode-connected M3. M1 stays saturated while $V_{DS1}\ge V_{GS1}-V_{TN}$, i.e. $V_{G1}\le V_{D1}+V_{TN}$:

$$
v_{IC}(\max)=V_{DD}-V_{SG3}+V_{TN1}=V_{DD}-0.841+0.7\ \mathrm V=V_{DD}-0.141\ \mathrm V,
$$

which is 4.86 V for $V_{DD}=5$ V. In balance the M2/M4 side has the same drain voltage, so it gives the same limit; a slight imbalance moves the output and only relaxes M2, so the M1/M3 path sets the limit.

### Step 3 — Minimum input common-mode voltage

The common source node is one $V_{GS1}$ below the gates, and M5 (source grounded) needs at least $V_{DS5}(\mathrm{sat})$:

$$
v_{IC}(\min)=V_{SS}+V_{DS5}(\mathrm{sat})+V_{GS1}=0+0.135+0.795\ \mathrm V=0.930\ \mathrm V .
$$

### Step 4 — Input common-mode range

For $V_{DD}=5$ V:

$$
0.93\ \mathrm V\le v_{IC}\le4.86\ \mathrm V,\qquad \mathrm{ICMR}=4.86-0.93\ \mathrm V=3.93\ \mathrm V .
$$

The upper limit lies above $V_{DD}-V_{SG3}$ by $V_{TN}$, because an n-channel device may have its gate up to one threshold above its drain and still be saturated.
