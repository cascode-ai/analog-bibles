# Detailed solution - A403

The offset is the difference of the gate–source voltages that make the two transistors carry the same current. Writing $V_{GS}$ from the square law separates it into a threshold term and an overdrive term; the worst case puts every parameter tolerance in the direction that widens the difference.

### Step 1 — Offset expression

For a saturated NMOS carrying $I$, $I=\tfrac12K'(W/L)(V_{GS}-V_T)^2$, so

$$
V_{GS}=V_T+\sqrt{\frac{2I}{K'(W/L)}} .
$$

With equal currents and equal $W/L$,

$$
V_{OS}=V_{GS1}-V_{GS2}=(V_{T1}-V_{T2})+\sqrt{\frac{2I}{K'_1(W/L)}}-\sqrt{\frac{2I}{K'_2(W/L)}} .
$$

### Step 2 — Worst-case parameter assignment

Both terms are largest with the same sign when M1 has the highest threshold and the lowest $K'$ (largest overdrive), and M2 the opposite:

| Device | $V_T$ | $K'$ |
|---|---|---|
| M1 | $0.7+0.15=0.85$ V | $0.9(110)=99\ \mu\mathrm{A/V^2}$ |
| M2 | $0.7-0.15=0.55$ V | $1.1(110)=121\ \mu\mathrm{A/V^2}$ |

### Step 3 — Numerical value

With $2I/(W/L)=2(10\ \mu\mathrm A)/10=2\ \mu\mathrm A$:

$$
V_{ov1}=\sqrt{\frac{2\ \mu\mathrm A}{99\ \mu\mathrm{A/V^2}}}=0.1421\ \mathrm V,\qquad
V_{ov2}=\sqrt{\frac{2\ \mu\mathrm A}{121\ \mu\mathrm{A/V^2}}}=0.1286\ \mathrm V,
$$
$$
|V_{OS}|=(0.85-0.55)\ \mathrm V+(0.1421-0.1286)\ \mathrm V=0.300+0.0136=0.314\ \mathrm V .
$$

The offset is dominated by the ±0.15-V threshold spread; the ±10 % spread of $K'$ adds only about 14 mV because it enters through the square root of a small overdrive. These are worst-case process extremes for two independent devices; matched devices on one die differ far less, so this figure is a pessimistic bound.
