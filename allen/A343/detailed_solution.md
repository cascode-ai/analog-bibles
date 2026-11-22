# Detailed solution - A343

Find the signal currents of the cross-coupled input branches, follow the four mirrors that copy them to the outputs, and multiply the net output current by the cascoded output resistance. Each output receives the two branch currents with opposite signs from a source above and a sink below, so the two contributions add.

### Step 1 — Input-stage currents

The input $v_{i1}$ drives the n-channel M1 and, through the level shifter, the p-channel M3; $v_{i2}$ drives M2 and M4. In each branch an n-channel and a p-channel device are in series and carry the same current: M1 with M4, and M2 with M3. In the branch M1–M4 the input voltage $v_{id}=v_{i1}-v_{i2}$ appears across the series combination of $v_{gs1}$ and $v_{sg4}$; with $g_{mN}=g_{mP}$ it divides equally, so

$$
i_1=g_m\frac{v_{id}}2=\frac{g_mv_{id}}2\quad(\text{M1 and M4}),\qquad
i_2=-\frac{g_mv_{id}}2\quad(\text{M2 and M3}).
$$

The level shifters (followers M21, M22 and diodes M17–M20) pass the input voltages with a gain close to unity, so they are neglected to leading order.

### Step 2 — Steering to the outputs

The branch currents are sensed by diode-connected devices at both ends of each branch and mirrored 1:1:

- $i_1$: M7 → M9, which sources into $v_{o1}$; M6 → M12, which sinks from $v_{o2}$.
- $i_2$: M8 → M10, which sources into $v_{o2}$; M5 → M11, which sinks from $v_{o1}$.

The net small-signal currents into the outputs are

$$
i_{o1}=i_1-i_2=g_mv_{id},\qquad i_{o2}=i_2-i_1=-g_mv_{id}.
$$

### Step 3 — Output resistance

Each output is a cascoded current source above (M13 over M9) and below (M15 over M11). With the cascode formula $R\approx g_mr_{ds}\cdot r_{ds}$ for each,

$$
R_{out}=g_mr_{ds}^2\parallel g_mr_{ds}^2=\frac{g_mr_{ds}^2}2\quad\text{per output},\qquad
R_{out,d}=2R_{out}=g_mr_{ds}^2 .
$$

Keeping the lower-order terms, each cascode branch is $2r_{ds}+g_mr_{ds}^2$, so $R_{out,d}=r_{ds}(2+g_mr_{ds})$; the leading term is the one above.

### Step 4 — Differential voltage gain

$$
v_{o1}=i_{o1}R_{out}=g_mv_{id}\,\frac{g_mr_{ds}^2}2=\frac{(g_mr_{ds})^2}2v_{id},\qquad v_{o2}=-v_{o1},
$$
$$
A_{vd}=\frac{v_{o1}-v_{o2}}{v_{id}}=(g_mr_{ds})^2 .
$$

These are leading-order results for $g_mr_{ds}\gg1$ at low frequency, without body effect. The slightly less than unity gain of the level shifters and the finite resistance of the diode loads lower the gain a little below $(g_mr_{ds})^2$ at finite $g_mr_{ds}$.

| Quantity | Differential | Per output |
|---|---|---|
| Voltage gain | $(g_mr_{ds})^2$ | $(g_mr_{ds})^2/2$ |
| Output resistance | $g_mr_{ds}^2$ | $g_mr_{ds}^2/2$ |
