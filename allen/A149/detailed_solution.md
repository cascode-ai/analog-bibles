# Detailed solution - A149

In this amplifier M7 and M8 are separate diode-connected PMOS loads; there is no current mirror. The output is the drain of M2. The intuitive approach finds the signal current that the input produces in M2, and the resistance that this current sees at the output; the gain is their product. M1's signal current flows only into its own load M7 and never reaches the output.

### Step 1 — Output resistance

Looking into the output node, three paths go to ac ground:

- the diode-connected M8 (gate tied to drain, source at $V_{DD}$): conductance $g_{m8}+g_{ds8}$;
- the drain resistance of M2, $r_{ds2}$, to the common source node, which is at ac ground for the differential signal.

$$
R_{out}\approx\frac{1}{g_{ds2}+g_{m8}+g_{ds8}}\approx\frac1{g_{m8}} .
$$

### Step 2 — Signal current in M2

$v_{in}$ is applied with M1's gate at $+v_{in}/2$ and M2's gate at $-v_{in}/2$. With the tail an ideal current sink and the two halves matched, the drain currents change by equal and opposite amounts, so the common source node does not move: it is an ac ground. M2 therefore sees $v_{gs2}=-v_{in}/2$ and its drain current changes by

$$
i_{d2}=-\frac{g_{m2}v_{in}}{2}.
$$

### Step 3 — Voltage gain

M2 pulls $g_{m2}v_{in}/2$ less current out of the output node, so the output rises by this current times $R_{out}$:

$$
\frac{v_{out}}{v_{in}}\approx\frac{0.5\,g_{m2}}{g_{ds2}+g_{m8}+g_{ds8}}\approx\frac{g_{m2}}{2g_{m8}}\quad\text{(noninverting from the + input)}.
$$

Only half the transconductance is used, because M1's half of the signal current is absorbed by M7. The gain is half that of a single diode-loaded common-source stage with the same devices; with $g_{m2}$ and $g_{m8}$ of similar size it is below 1.

### Step 4 — Second-order refinements

- For an unmatched pair with an ideal tail, $i_{d1}=-i_{d2}$ forces $g_{m1}(v_{in}/2-v_s)=g_{m2}(v_{in}/2+v_s)$, which gives $v_{out}/v_{in}=g_{m1}g_{m2}/[(g_{m1}+g_{m2})(g_{ds2}+g_{m8}+g_{ds8})]$, equal to the result above when $g_{m1}=g_{m2}$.
- For a single-ended test source at the output the common source node is no longer an ac ground, and M2 contributes only about $g_{ds2}/2$ to the output conductance: $R_{out}\approx1/(g_{m8}+g_{ds8}+g_{ds2}/2)$. Since $g_{ds}\ll g_{m8}$, this changes nothing at the level of the approximation, and $R_{out}\approx1/g_{m8}$, $A_v\approx g_{m2}/(2g_{m8})$ stand.
