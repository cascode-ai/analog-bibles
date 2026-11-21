# Detailed solution - G424

The CM input range is bounded below by the tail transistors leaving saturation and above by the input transistors leaving saturation. Compute the overdrives from the square law, find the tail-node voltage for the lower limit, and find the folding-node voltage (the drain of $M_1$), set by the cascode $M_{1A}$, for the upper limit. Only $V_{t1}$ changes; everything else is as in the original design.

### Step 1 — Overdrive voltages

In saturation $I_D=\tfrac12k'(W/L)V_{ov}^2$, with $W/L=m\cdot(40\ \mu\mathrm m/0.3\ \mu\mathrm m)=133.3m$, so $V_{ov}=\sqrt{2I_D/[k'(133.3m)]}$:

$$
V_{ov1}=\sqrt{\frac{2(2.0\ \mathrm{mA})}{(170\ \mu\mathrm{A/V^2})(10)(133.3)}}=0.133\ \mathrm V.
$$

| Device | $m$ | $\lvert I_D\rvert$ | $k'$ | $\lvert V_{ov}\rvert$ |
|---|---|---|---|---|
| $M_1$, $M_2$ | 10 | 2.0 mA | 170 μA/V² | 0.133 V |
| $M_5$, $M_6$ | 10 | 2.0 mA | 170 μA/V² | 0.133 V |
| $M_{1A}$, $M_{2A}$ | 24 | 2.4 mA | 45 μA/V² | 0.183 V |

### Step 2 — Lower limit: tail devices at the edge of saturation

The tail node is one $V_{GS1}$ below the CM input: $V_{tail}=V_{IC}-V_{t1}-V_{ov1}$. The tail transistors $M_5$, $M_6$ (sources at ground) stay saturated while $V_{tail}\ge V_{ov5}$:

$$
V_{IC(\min)}=V_{t1}+V_{ov1}+V_{ov5}=0.3\ \mathrm V+0.133\ \mathrm V+0.133\ \mathrm V=0.57\ \mathrm V.
$$

### Step 3 — Upper limit: input transistors at the edge of saturation

The drain of $M_1$ is the folding node, the source of the PMOS cascode $M_{1A}$. With $M_{1A}$ saturated, its source sits one $|V_{GS1A}|$ above its gate:

$$
V_{D1}=V_{BiasC}+|V_{t1A}|+|V_{ov1A}|=1.0\ \mathrm V+0.5\ \mathrm V+0.183\ \mathrm V=1.683\ \mathrm V.
$$

$M_1$ stays saturated while $V_{DS1}\ge V_{ov1}$, i.e. while its gate is no more than $V_{t1}$ above its drain:

$$
V_{IC(\max)}=V_{D1}+V_{t1}=1.683\ \mathrm V+0.3\ \mathrm V=1.98\ \mathrm V.
$$

### Step 4 — Result and comparison

$$
0.57\ \mathrm V\le V_{IC}\le1.98\ \mathrm V.
$$

With the original $V_{t1}=0.5$ V the same expressions give 0.77 V to 2.18 V. Lowering the input-pair threshold by 0.2 V shifts the whole range down by 0.2 V without changing its width (1.42 V); the upper end now lies just below $V_{DD}=2$ V, while the lower end moves closer to ground.
