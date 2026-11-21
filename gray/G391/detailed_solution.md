# Detailed solution - G391

Write the current drawn from one output by the load network and evaluate it for purely differential ($v_{o2}=-v_{o1}$) and purely common-mode ($v_{o2}=v_{o1}$) excitation. The ratio of current to $s\,v_{o1}$ in each case is the half-circuit load capacitance.

### Step 1 — Load current at $V_{o1}$

The 7-pF capacitor carries a current proportional to $v_{o1}$, and the 6-pF bridging capacitor one proportional to $v_{o1}-v_{o2}$:

$$
i_{l1}=s\left[(7\ \mathrm{pF})\,v_{o1}+(6\ \mathrm{pF})(v_{o1}-v_{o2})\right].
$$

### Step 2 — Differential-mode load

With $v_{o2}=-v_{o1}$, the voltage across the bridging capacitor is $2v_{o1}$:

$$
i_{l1}=s\left[7\ \mathrm{pF}+2(6\ \mathrm{pF})\right]v_{o1}\quad\Longrightarrow\quad C_{Ld}=19\ \mathrm{pF}.
$$

Equivalently, the midpoint of the 6-pF capacitor lies on the axis of symmetry and is an ac ground for DM signals, so the capacitor splits into two 12-pF halves, each from one output to ground: $C_{Ld}=7+12=19$ pF.

### Step 3 — Common-mode load

With $v_{o2}=v_{o1}$, both ends of the bridging capacitor move together and it carries no current:

$$
i_{l1}=s(7\ \mathrm{pF})\,v_{o1}\quad\Longrightarrow\quad C_{Lc}=7\ \mathrm{pF}.
$$

The bridging capacitor therefore loads only the differential path, which matters when the DM and CMFB loops are compensated separately.
