# Detailed solution - A198

The input node is the drain of M1 and also the input of the inverter M3–M4, whose output (shifted by the battery $V_{DC}$) drives the gate of M2. A rise of the input voltage makes the inverter pull M2's gate down, which steers tail current from M1 to M2, so less current flows into the input node: shunt negative feedback. With $r_{ds5}$ ignored the tail current is constant. Write the inverter gain, KCL at the common source node S, and the current into the input node.

### Step 1 — Inverter gain

The inverter M3–M4 has both gates at the input and its output loaded only by $r_{ds3}\parallel r_{ds4}$ (M2's gate draws no current). Both transistors convert $v_{in}$ to drain current, so

$$
v_C=-A\,v_{in},\qquad A=(g_{m3}+g_{m4})(r_{ds3}\parallel r_{ds4}),
$$

and the battery $V_{DC}$ passes $v_C$ unchanged to M2's gate.

### Step 2 — Common source node S

Write the source-to-drain currents of the p-channel devices with M1's gate at ac ground, M1's drain at $v_{in}$, M2's gate at $v_C$ and M2's drain grounded:

$$
i_{D1}=g_{m1}v_S+g_{ds1}(v_S-v_{in}),\qquad i_{D2}=g_{m2}(v_S-v_C)+g_{ds2}v_S .
$$

Since M5's current is constant, $i_{D1}+i_{D2}=0$, which gives

$$
v_S=v_{in}\,\frac{g_{ds1}-g_{m2}A}{g_{m1}+g_{m2}+g_{ds1}+g_{ds2}} .
$$

### Step 3 — Input current and $R_{in}$

M1 delivers $i_{D1}$ into the input node and the inverter gates draw nothing, so the source must supply $i_{in}=-i_{D1}$:

$$
i_{in}=g_{ds1}v_{in}-(g_{m1}+g_{ds1})v_S .
$$

Substituting $v_S$:

$$
R_{in}=\frac{v_{in}}{i_{in}}=\frac{g_{m1}+g_{m2}+g_{ds1}+g_{ds2}}{g_{ds1}(g_{m2}+g_{ds2})+g_{m2}A(g_{m1}+g_{ds1})} .
$$

### Step 4 — Identical M1 and M2

With $g_{m1}=g_{m2}=g_m$ and $r_{ds1}=r_{ds2}=r_{ds}$ the numerator and denominator share the factor $g_m+g_{ds}$, and

$$
R_{in}=\frac{r_{ds1}+r_{ds2}}{1+g_{m2}r_{ds}(g_{m3}+g_{m4})(r_{ds3}\parallel r_{ds4})}
=\frac{2r_{ds}}{1+g_mr_{ds}(g_{m3}+g_{m4})(r_{ds3}\parallel r_{ds4})}
\approx\frac{2}{g_m(g_{m3}+g_{m4})(r_{ds3}\parallel r_{ds4})} .
$$

Without feedback the input would see $2r_{ds}$ (M1 into the source node, M2 to ground); the loop gain $g_mr_{ds}A$ divides it down to a very small resistance, of order $1/(g_mA)$.
