# Detailed solution - A329

The PSRR is the differential gain divided by the gain from a supply to the output, so the comparison rests on how strongly supply ripple couples to each output node. Find, for each topology, the path from $V_{DD}$ (or $V_{SS}$) to an output: an uncascoded device or a Miller capacitor gives a strong path, a cascoded output gives a weak one. The differential output is treated in the last step.

### Step 1 — Two-stage Miller op amps, [Fig. 1] and [Fig. 2]: poor

In [Fig. 1] the p-channel second-stage drivers M6 and M7 connect directly between $V_{DD}$ and the outputs, with no cascode, and the Miller capacitor $C_c$ (with $R_z$) connects each driver's gate to its drain. Above the dominant pole $C_c$ is a low impedance, so each driver behaves as a diode-connected device from $V_{DD}$: its gate and drain move together, and the output follows $V_{DD}$ with a gain near unity,

$$
\frac{v_{o}}{v_{dd}}\approx1\quad(\omega\gg|p_1|),\qquad
A_{vd}(\omega)\approx\frac{GB}{\omega}.
$$

Since the differential gain falls at −20 dB/dec above the dominant pole while the supply gain does not, the positive-supply PSRR $=A_{vd}/A_{dd}$ falls with frequency over most of the band. [Fig. 2] has the same structure with the additional push–pull drivers M13 and M14, which are also uncascoded and connected to $V_{DD}$, so it behaves the same way. The low-frequency PSRR depends on how well the first-stage nodes track the supply (bias and common-mode feedback, not shown), and is not what decides the rating. Rate both **poor**.

### Step 2 — Folded-cascode op amp, [Fig. 3]: good

The outputs of [Fig. 3] are taken between the cascode devices M6/M7 (from the $V_{DD}$ side) and M8/M9 above M10/M11 (from the $V_{SS}$ side). A change in $V_{DD}$ modulates the currents of M4/M5 only through their own output conductance, and the cascodes M6/M7 then present a very high resistance to the output, so the ripple appears at the output only through the very large cascode output resistance or the small gate–drain capacitance of a cascode device. There is no Miller capacitor; the compensation is the load capacitance $C_L$ at the output. With bias voltages that track the supply, the supply gain is small and both it and the differential gain share the same output pole, so the PSRR is roughly as large as the differential gain and flat up to the dominant pole. Rate **good**.

### Step 3 — Class B folded-cascode push–pull op amp, [Fig. 4]: good

[Fig. 4] has cascoded outputs as well: M8/M9 from the $V_{DD}$ side and the cascoded mirrors M10–M13 (and M18–M21 on the other path) from the ground side. The supply again reaches the outputs only through cascode output resistances and small $C_{gd}$, and the outputs are compensated by $C_L$. Rate **good**.

### Step 4 — Class AB op amp with cascoded outputs, [Fig. 5]: good

The outputs of [Fig. 5] are taken at the cascode devices M13–M16 (M13/M14 above, M15/M16 below), with M9–M12 as the outer current sources. As a single-stage op amp it is compensated by its load capacitance at the outputs, like [Fig. 3] and [Fig. 4]. Supply coupling is weak for the same reason. Rate **good**.

### Step 5 — Effect of the differential output

With perfect symmetry, supply ripple appears equally at the two outputs, i.e. as a common-mode output, so the ideal differential PSRR is infinite for all five circuits. In practice the supply-to-differential gain is, to first order, the mismatch between the two halves times the per-output coupling found above:

$$
A_{dd,\text{diff}}\approx\Delta\cdot A_{dd,\text{single}} ,
$$

where $\Delta$ is the relative mismatch. The per-output comparison therefore carries over to the differential output and sets the practical ranking.

| Op amp | PSRR rating | Main reason |
|---|---|---|
| [Fig. 1] | poor | uncascoded drivers; $C_c$ makes them diodes from $V_{DD}$ above the dominant pole |
| [Fig. 2] | poor | as [Fig. 1], with uncascoded push–pull drivers |
| [Fig. 3] | good | cascoded outputs, no Miller capacitor |
| [Fig. 4] | good | cascoded outputs and cascoded mirrors |
| [Fig. 5] | good | cascoded outputs M13–M16, load-capacitance compensation |
