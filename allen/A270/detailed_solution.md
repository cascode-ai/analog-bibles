# Detailed solution - A270

The reference current is set by the two diode-connected transistors M9 and M8 in series across the supplies; the same current flows in both, so their overdrives are fixed by their transconductance parameters and must add up to the supply voltage minus the two thresholds. M5 and M7 then copy $I_8$ in proportion to their aspect ratios. All devices are saturated with $i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2$, and channel-length modulation is neglected.

### Step 1 — Equal currents in the two diodes

Each diode-connected device has $V_{DS}=V_{GS}$ and is saturated. With $S_8=S_9=1$ and $V_{ov}=|V_{GS}|-|V_T|$,

$$
I_8=\frac{K'_P}{2}S_9V_{ov9}^2=\frac{K'_N}{2}S_8V_{ov8}^2
\;\Rightarrow\;
V_{ov9}=\sqrt{\frac{K'_N}{K'_P}}\,V_{ov8}=\sqrt{\frac{110}{50}}\,V_{ov8}=1.483\,V_{ov8}.
$$

### Step 2 — KVL around the bias branch

The two gate-source voltages share the total supply:

$$
V_{SG9}+V_{GS8}=V_{DD}-V_{SS}=3\ \mathrm V
\;\Rightarrow\;
V_{ov9}+V_{ov8}=3\ \mathrm V-0.7\ \mathrm V-0.7\ \mathrm V=1.6\ \mathrm V .
$$

Combining with Step 1:

$$
V_{ov8}=\frac{1.6\ \mathrm V}{1+1.483}=0.644\ \mathrm V\ (V_{GS8}=1.344\ \mathrm V),\qquad V_{ov9}=0.956\ \mathrm V .
$$

### Step 3 — Bias and mirror currents

$$
I_8=\frac{K'_N}{2}S_8V_{ov8}^2=(55\ \mu\mathrm{A/V^2})(1)(0.644\ \mathrm V)^2=22.8\ \mu\mathrm A .
$$

M5 and M7 have the same $V_{GS}$ as M8, so their currents scale with $S$:

$$
I_5=\frac{S_5}{S_8}I_8=2(22.8\ \mu\mathrm A)=45.7\ \mu\mathrm A,\qquad
I_7=\frac{S_7}{S_8}I_8=10(22.8\ \mu\mathrm A)=228\ \mu\mathrm A .
$$

These are consistent with the rest of the amplifier: $S_6/S_4=100/10=10=2S_7/S_5$, so M6 carries $I_7$ at $V_{SG6}=V_{SG4}$, as the saturation assumption requires.
