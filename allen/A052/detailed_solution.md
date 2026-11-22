# Detailed solution - A052

Compute the three building blocks of the gate capacitance (gate-to-channel oxide capacitance, gate–source/drain overlaps and gate–bulk overlap), then assign them to $C_{GB}$, $C_{GS}$ and $C_{GD}$ according to where the channel is in each region.

### Step 1 — Building-block capacitances

With $W_{eff}=W=5\ \mu$m and $L_{eff}=L=1\ \mu$m:

$$
\begin{aligned}
C_2&=C_{ox}WL=(24.7\times10^{-4}\ \mathrm{F/m^2})(5\times10^{-6}\ \mathrm m)(1\times10^{-6}\ \mathrm m)=12.35\ \mathrm{fF},\\
C_1=C_3&=\mathrm{CGSO}\cdot W=(220\times10^{-12}\ \mathrm{F/m})(5\times10^{-6}\ \mathrm m)=1.10\ \mathrm{fF},\\
2C_5&=\mathrm{CGBO}\cdot L=(700\times10^{-12}\ \mathrm{F/m})(1\times10^{-6}\ \mathrm m)=0.70\ \mathrm{fF}.
\end{aligned}
$$

$C_2$ is the gate over the channel area; $C_1$ and $C_3$ are the gate overlapping the source and drain diffusions (CGDO = CGSO); $2C_5$ is the gate overlapping the field region at the two ends of the width, which always couples to the bulk.

### Step 2 — Off ($v_{GS}<V_T$)

No inversion layer exists, so the gate sees the bulk through the oxide over the whole channel area (the depletion capacitance in series is neglected in this model). Only the overlaps couple the gate to source and drain:

$$
C_{GB}=C_2+2C_5=12.35+0.70=13.05\ \mathrm{fF},\qquad C_{GS}=C_1=1.10\ \mathrm{fF},\qquad C_{GD}=C_3=1.10\ \mathrm{fF}.
$$

### Step 3 — Saturation

The inversion layer shields the bulk from the gate, so $C_2$ no longer appears in $C_{GB}$. The channel is pinched off at the drain end and connected to the source; the channel charge then depends on $v_{GS}$ only, and the standard result assigns $\tfrac23$ of $C_2$ to the source and none to the drain:

$$
C_{GS}=C_1+\tfrac23C_2=1.10+\tfrac23(12.35)=9.33\ \mathrm{fF},\qquad C_{GD}=C_3=1.10\ \mathrm{fF},\qquad C_{GB}=2C_5=0.70\ \mathrm{fF}.
$$

### Step 4 — Nonsaturation and summary

The channel extends from source to drain, and for small $v_{DS}$ its charge is shared equally by the two ends, so $C_2$ is split in half:

$$
C_{GS}=C_{GD}=C_1+\tfrac12C_2=1.10+6.175=7.28\ \mathrm{fF},\qquad C_{GB}=2C_5=0.70\ \mathrm{fF}.
$$

| Region | $C_{GB}$ (fF) | $C_{GS}$ (fF) | $C_{GD}$ (fF) |
|---|---|---|---|
| Off | 13.05 | 1.10 | 1.10 |
| Saturation | 0.70 | 9.33 | 1.10 |
| Nonsaturation | 0.70 | 7.28 | 7.28 |

The total gate capacitance is 15.25 fF when off and in nonsaturation, but 11.13 fF in saturation: there the channel charge varies with $v_{GS}$ as only $\tfrac23$ of $C_2$, and the drain-side remainder of the channel is pinched off. The regions differ mainly in which terminal the channel-area capacitance $C_2$ is attached to.
