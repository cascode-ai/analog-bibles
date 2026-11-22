# Detailed solution - A305

Both enhancement amplifiers have the same structure: a differential pair with one gate fixed and one drain thrown away, whose remaining drain current is folded through a cascode M5 into a high-impedance output loaded by the current source M6. Find the signal current, follow it through the folding node, and multiply by the output resistance; then compare with the estimate $-0.5g_{m1}r_{ds6}$. All devices are saturated with small-signal parameters $g_m$, $r_{ds}$; the body effect is neglected.

### Step 1 — Signal current of the input pair

With M2's gate fixed and a signal $v_{in}$ on M1's gate, the common-source node moves by about $v_{in}/2$ (matched transconductances, large tail resistance $r_{ds3}$), so

$$
i_{d1}=\frac{g_{m1}v_{in}}2 .
$$

To first order in the tail conductance the exact value is $g_{m1}v_{in}/[2+1/(g_mr_{ds3})]$.

Only M1's half is used, since M2's drain goes to a supply; this is the origin of the factor 0.5.

### Step 2 — Folding node and output resistance

The folding node (drains of M1 and M4, source of M5) is low impedance, about $1/g_{m5}$, so essentially all of $i_{d1}$ is taken from the M5 path; M4's current is fixed, so the current that M5 delivers to the output changes by $-i_{d1}$. The output node sees M6 in parallel with the cascode M5 sitting on $r_{ds1}\parallel r_{ds4}$:

$$
R_{out}=r_{ds6}\parallel\left[g_{m5}r_{ds5}(r_{ds1}\parallel r_{ds4})\right],\qquad
A_v=-\frac{i_{d1}R_{out}}{v_{in}}=-\frac12g_{m1}\left[r_{ds6}\parallel g_{m5}r_{ds5}(r_{ds1}\parallel r_{ds4})\right].
$$

The gain is inverting: a rise of $v_{in}$ increases M1's current, which steals current from M5 and lowers the output. When the cascode resistance is much larger than $r_{ds6}$, $A_v\approx-0.5g_{m1}r_{ds6}$.

### Step 3 — Upper amplifier ([Fig. 1])

M1 and M6 are n-channel and M5 is p-channel, so

$$
A_v(\mathrm{upper})=-0.5g_{mN}\left[r_{dsN}\parallel g_{mP}r_{dsP}(r_{dsN}\parallel r_{dsP})\right]\approx-0.5g_{mN}r_{dsN}
$$

provided $g_{mP}r_{dsP}(r_{dsN}\parallel r_{dsP})\gg r_{dsN}$. For example, with $g_{mN}=100\ \mu$S, $r_{dsN}=2$ MΩ, $g_{mP}=50\ \mu$S, $r_{dsP}=1$ MΩ, the cascode term is 33 MΩ ≫ 2 MΩ and $A_v=-94$, against the estimate −100 (6 % high).

### Step 4 — Lower amplifier ([Fig. 2])

M1 and M6 are p-channel and M5 is n-channel, so

$$
A_v(\mathrm{lower})=-0.5g_{mP}\left[r_{dsP}\parallel g_{mN}r_{dsN}(r_{dsN}\parallel r_{dsP})\right]\approx-0.5g_{mP}r_{dsP} .
$$

With the same example values the cascode term is 133 MΩ and $A_v=-24.8$, against the estimate −25. Both estimates are therefore valid approximations, slightly optimistic by the ratio of $r_{ds6}$ to the cascode resistance.
