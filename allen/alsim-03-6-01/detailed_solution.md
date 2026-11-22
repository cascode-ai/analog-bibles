# Detailed solution - alsim-03-6-01

Translate each element of [Fig. 1] into a netlist line using the circled node numbers, add the model cards and a dc input, and run an operating-point analysis. A short hand analysis of the bias branch and the output node then confirms the simulated numbers.

### Step 1 — Element lines

SPICE MOSFET lines are `Mname drain gate source bulk model W= L=`. Reading the figure with node 0 as ground:

| Element | Drain | Gate | Source | Bulk | Comment |
|---|---|---|---|---|---|
| M1 (n) | 2 | 1 | 0 | 0 | input transistor |
| M2 (p) | 2 | 3 | 4 | 4 | mirror output |
| M3 (p) | 3 | 3 | 4 | 4 | diode-connected reference |
| R1 | 3 | 0 | — | — | 50 kΩ |
| VDD | 4 | 0 | — | — | 5 V |
| VIN | 1 | 0 | — | — | 1 V (chosen) |

The p-channel bulks go to $V_{DD}$ (node 4) and the n-channel bulk to ground, so no device has a body-source voltage and GAMMA has no effect here.

### Step 2 — Netlist for part (a)

```spice
Circuit (a)
M1 2 1 0 0 NCH W=1U L=1U
M2 2 3 4 4 PCH W=1U L=1U
M3 3 3 4 4 PCH W=1U L=1U
R1 3 0 50K
VIN 1 0 DC 1
VDD 4 0 DC 5
.MODEL NCH NMOS LEVEL=1 VTO=0.7 KP=110U GAMMA=0.4 LAMBDA=0.04 PHI=0.7
.MODEL PCH PMOS LEVEL=1 VTO=-0.7 KP=50U GAMMA=0.57 LAMBDA=0.05 PHI=0.8
.OP
.END
```

### Step 3 — Netlist change for part (b)

A 1:2 ratio-matched pair is built from identical unit devices, with M2 made of two of them in parallel. Only the M2 line changes:

```spice
M2 2 3 4 4 PCH W=1U L=1U M=2
```

`M=2` is the multiplier (two parallel 1 µm/1 µm devices). Writing `W=2U` gives the same level-1 result but is not a ratio-matched layout, because its edge effects differ from those of the unit device M3.

### Step 4 — Hand check of the reference branch

M3 is diode connected, so it is saturated with $V_{SD3}=V_{SG3}$. Its square-law current must equal the resistor current:

$$
\frac{V_{DD}-V_{SG3}}{R}=\frac{K'_P}{2}\frac WL\left(V_{SG3}-|V_{TP}|\right)^2\left(1+\lambda_PV_{SG3}\right),
$$

$$
\frac{5-V_{SG3}}{50\ \mathrm{k\Omega}}=(25\ \mu\mathrm{A/V^2})(V_{SG3}-0.7)^2(1+0.05V_{SG3})
\;\Rightarrow\;V_{SG3}=2.138\ \mathrm V .
$$

So $V(3)=5-2.138=2.862$ V and $I_{REF}=2.862\ \mathrm V/50\ \mathrm{k\Omega}=57.2\ \mu$A.

### Step 5 — Output node with $v_{IN}=1$ V

With $V_{GS1}=1$ V, M1 is barely on, and in saturation it can carry only

$$
I_{D1}=\frac{K'_N}{2}\frac WL(V_{GS1}-V_{TN})^2(1+\lambda_NV_{DS1})=(55\ \mu\mathrm{A/V^2})(0.3\ \mathrm V)^2(1+0.04v_{OUT})\approx5.9\ \mu\mathrm A .
$$

M2 would mirror 57 µA (or 114 µA in (b)) if saturated, so it must leave saturation: $v_{OUT}$ rises until M2 in nonsaturation conducts the same 5.9 µA, which takes $V_{SD2}$ below 0.1 V. The output therefore sits just below $V_{DD}$, and doubling M2 halves its $V_{SD2}$.

### Step 6 — Simulated operating point

ngspice level-1 results:

| Quantity | (a) | (b) |
|---|---|---|
| V(3) | 2.862 V | 2.862 V |
| $I_{D3}$ (reference) | 57.2 µA | 57.2 µA |
| V(2) = $v_{OUT}$ | 4.915 V | 4.958 V |
| $I_{D1}=I_{D2}$ | 5.92 µA | 5.93 µA |

The bias values match the hand result of Step 4 exactly, and the output is near 4.9 V as predicted in Step 5. A dc sweep of VIN with the same decks shows that $v_{OUT}=2.5$ V, where both M1 and M2 are saturated, is reached at $v_{IN}=1.68$ V in (a) and 2.09 V in (b), because M1 must sink the full mirrored current there.
