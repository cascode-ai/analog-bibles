# Detailed solution - A361

The circuit and currents are the same as for the enhancement-input stage; only the threshold of M1/M2 changes to 0.1 V. Write the two ICMR limits, find the supply at which they meet, and check that the meeting point lies inside the rails.

### Step 1 — Saturation voltages

With $V_{DS}(\mathrm{sat})=\sqrt{2I_D/[K'(W/L)]}$, $W/L=100$, 100 µA in M5 and 50 µA in the others:

$$
V_{DS5}(\mathrm{sat})=0.135\ \mathrm V,\qquad V_{DS1}(\mathrm{sat})=0.095\ \mathrm V,\qquad V_{SD3}(\mathrm{sat})=0.141\ \mathrm V .
$$

### Step 2 — Limits of the input common-mode range

Lower limit (M5 at the edge of saturation, input gate one $V_{GS1}$ above the common source):

$$
v_{icm}\ge V_{DS5}(\mathrm{sat})+V_{T1}+V_{DS1}(\mathrm{sat})=0.135+0.1+0.095=0.330\ \mathrm V .
$$

Upper limit (M3 at the edge of saturation, M1 at $V_{D1}=v_{icm}-V_{T1}$):

$$
v_{icm}\le V_{DD}-V_{SD3}(\mathrm{sat})+V_{T1}=V_{DD}-0.041\ \mathrm V .
$$

### Step 3 — Minimum supply and rail check

The range has zero width when the two limits meet:

$$
V_{DD}-0.041\ \mathrm V=0.330\ \mathrm V\quad\Rightarrow\quad
V_{DD}(\min)=V_{SD3}(\mathrm{sat})+V_{DS1}(\mathrm{sat})+V_{DS5}(\mathrm{sat})=0.372\ \mathrm V .
$$

The single common-mode point, $v_{icm}=0.330$ V, lies inside $[0,\ 0.372]$ V, so the rail condition is satisfied and $V_{DD}(\min)\approx0.37$ V.

Compared with 0.7 V input devices (about 0.93 V), the low threshold moves the ICMR down into the middle of the supply range, so the stage can work at the absolute minimum supply, the sum of the three saturation voltages. The body effect would raise $V_{T1}$ in both limits equally and does not change this result.
