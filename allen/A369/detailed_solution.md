# Detailed solution - A369

The limits have the same form as for any n-channel input pair in a folded cascode: the upper limit is set by M1 staying saturated with its drain held by the folding current source M4, the lower limit by the tail M3 staying saturated. Substitute the depletion threshold $V_{T1}=-0.5$ V, then clip the result to the rails.

### Step 1 — Upper limit

The drain of M1 is the folding node, at $V_{DD}-V_{SD4}(\mathrm{sat})$ when M4 is at the edge of saturation. M1 stays saturated while $V_{D1}\ge v_{icm}-V_{T1}$:

$$
V_{icm}(\text{upper})=V_{DD}-V_{SD4}(\mathrm{sat})+V_{T1}=1.5-0.2-0.5=0.8\ \mathrm V .
$$

### Step 2 — Lower limit

The tail M3 needs $V_{DS3}(\mathrm{sat})$, and the gate of M1 sits one $V_{GS1}=V_{T1}+V_{DS1}(\mathrm{sat})$ above the common source:

$$
V_{icm}(\text{lower})=V_{DS3}(\mathrm{sat})+V_{T1}+V_{DS1}(\mathrm{sat})=0.2-0.5+0.2=-0.1\ \mathrm V,
$$

which is below ground.

### Step 3 — ICMR within the rails

The device limits span −0.1 V to 0.8 V; the input cannot go below ground, so within the rails

$$
\mathrm{ICMR}:\ 0\le v_{icm}\le0.8\ \mathrm V,\qquad\text{width }0.8\ \mathrm V .
$$

Compared with a 0 V native input pair (0.4–1.3 V), the negative threshold shifts the whole range down by 0.5 V; the lower limit now passes below the negative rail, so the in-rail range is clipped at 0 V and is slightly narrower.
