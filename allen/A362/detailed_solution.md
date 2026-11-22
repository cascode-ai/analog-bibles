# Detailed solution - A362

With depletion input devices ($V_{T1}=-1$ V) the whole input common-mode range moves down by 1.1 V relative to the enhancement case. Write the two ICMR limits, intersect the range with the rails $[0,V_{DD}]$, and find where the intersection shrinks to a point; here the lower rail, not the lower device limit, binds.

### Step 1 — Saturation voltages

With $V_{DS}(\mathrm{sat})=\sqrt{2I_D/[K'(W/L)]}$, $W/L=100$, 100 µA in M5 and 50 µA in the others:

$$
V_{DS5}(\mathrm{sat})=0.135\ \mathrm V,\qquad V_{DS1}(\mathrm{sat})=0.095\ \mathrm V,\qquad V_{SD3}(\mathrm{sat})=0.141\ \mathrm V .
$$

### Step 2 — Limits of the input common-mode range

Lower limit (M5 at the edge of saturation, input gate one $V_{GS1}=V_{T1}+V_{DS1}(\mathrm{sat})$ above the common source):

$$
v_{icm}\ge V_{DS5}(\mathrm{sat})+V_{T1}+V_{DS1}(\mathrm{sat})=0.135-1+0.095=-0.770\ \mathrm V,
$$

below ground: the device range extends below the negative rail. Upper limit (M3 at the edge of saturation, M1 at $V_{D1}=v_{icm}-V_{T1}$):

$$
v_{icm}\le V_{DD}-V_{SD3}(\mathrm{sat})+V_{T1}=V_{DD}-1.141\ \mathrm V .
$$

### Step 3 — Minimum supply

Within the rails the usable range is

$$
0\le v_{icm}\le V_{DD}-1.141\ \mathrm V,
$$

which has zero width at

$$
V_{DD}(\min)=1.141\ \mathrm V\approx1.14\ \mathrm V,
$$

with the single point at $v_{icm}=0$, the lower rail. Setting the two device limits equal would give 0.372 V, but then the common-mode point would be at −0.77 V, outside the rails.

### Step 4 — Check at the operating point

At $V_{DD}=1.141$ V and $v_{icm}=0$: $V_{GS1}=-1+0.095=-0.905$ V, so the common source is at $+0.905$ V and $V_{DS5}=0.905\ \mathrm V>0.135$ V (saturated). The drains are at $V_{DD}-V_{SD3}(\mathrm{sat})=1.0$ V, so $V_{DS1}=0.095\ \mathrm V=V_{DS1}(\mathrm{sat})$: M1 and M3 are both exactly at the edge of saturation.

A negative threshold therefore does not lower the minimum supply: it moves the ICMR below ground, and the upper limit, about $V_{DD}-V_{ON}-|V_{T1}|$, becomes binding. With the body effect included (bulk at ground), the source at about 0.76 V raises $V_{T1}$ to about −0.85 V and the minimum supply drops to about 1.0 V.
