# Detailed solution - A360

Write the two limits of the input common-mode range in terms of saturation voltages and the input threshold, intersect that range with the rails $[0,V_{DD}]$, and find the supply at which the intersection shrinks to a single point. The answer depends on which limit, or which rail, binds.

### Step 1 — Saturation voltages

With $V_{DS}(\mathrm{sat})=\sqrt{2I_D/[K'(W/L)]}$ and $W/L=100$:

$$
V_{DS5}(\mathrm{sat})=\sqrt{\frac{2(100\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(100)}}=0.135\ \mathrm V,\qquad
V_{DS1}(\mathrm{sat})=\sqrt{\frac{2(50\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(100)}}=0.095\ \mathrm V,
$$
$$
V_{SD3}(\mathrm{sat})=\sqrt{\frac{2(50\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(100)}}=0.141\ \mathrm V .
$$

### Step 2 — Limits of the input common-mode range

Lower limit: M5 must keep $V_{DS5}\ge V_{DS5}(\mathrm{sat})$, and the input gate is one $V_{GS1}=V_{T1}+V_{DS1}(\mathrm{sat})$ above the common source:

$$
v_{icm}\ge V_{DS5}(\mathrm{sat})+V_{T1}+V_{DS1}(\mathrm{sat})=0.135+0.7+0.095=0.930\ \mathrm V .
$$

Upper limit: the drains of M1/M2 are at $V_{DD}-V_{SD3}$; M3 saturated requires $V_{SD3}\ge V_{SD3}(\mathrm{sat})$, and M1 saturated requires $V_{D1}\ge v_{icm}-V_{T1}$:

$$
v_{icm}\le V_{DD}-V_{SD3}(\mathrm{sat})+V_{T1}=V_{DD}+0.559\ \mathrm V .
$$

This upper limit always lies above $V_{DD}$, so within the rails the upper end of the usable range is the rail $V_{DD}$ itself.

### Step 3 — Minimum supply

The usable in-rail range is

$$
0.930\ \mathrm V\le v_{icm}\le V_{DD},
$$

which shrinks to a single point when

$$
V_{DD}(\min)\approx0.93\ \mathrm V .
$$

Setting the two device limits equal instead gives $V_{DD}=V_{SD3}(\mathrm{sat})+V_{DS1}(\mathrm{sat})+V_{DS5}(\mathrm{sat})=0.372$ V, but that single common-mode point would be at 0.93 V, far above a 0.37 V supply; the condition is not sufficient. With enhancement input devices it is the lower limit, about $V_T+2V_{ON}$, that sets the minimum supply.

With the body effect (bulk at ground), $V_{T1}$ rises to about 0.73 V and the minimum supply to about 0.96 V.
