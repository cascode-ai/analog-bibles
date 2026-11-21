# Detailed solution - grsim-04-18

Short the output to small-signal ground, apply a purely differential input, and let $r_o\to\infty$ (including the tail). The tail node then settles where the two input-transistor currents cancel, which gives the pair's transconductance with mismatched $g_m$. The mirror then forwards $T_1$'s current to the output with gain $g_{m4}/g_{m3}$. Rewriting the result with averages and differences gives the requested formula. Finally, an exact linear small-signal simulation includes all the $r_o$'s.

### Step 1 — Input pair with mismatched $g_m$

Apply $v_{i1}=v_{id}/2$, $v_{i2}=-v_{id}/2$ and call the tail-node voltage $v_t$. With $r_{o5}\to\infty$ no small-signal current leaves the tail node, so the two drain currents are equal and opposite:

$$
i_1=g_{m1}(v_{i1}-v_t),\qquad i_2=g_{m2}(v_{i2}-v_t),\qquad i_1+i_2=0
\;\Rightarrow\;
v_t=\frac{g_{m1}v_{i1}+g_{m2}v_{i2}}{g_{m1}+g_{m2}} .
$$

Substituting back,

$$
i_1=-i_2=\frac{g_{m1}g_{m2}}{g_{m1}+g_{m2}}\,v_{id}.
$$

With mismatch the tail node is no longer an ac ground: it moves toward the gate of the stronger device ($v_t=0.025v_{id}$ here).

### Step 2 — Mirror and output current

$T_1$ draws $i_1$ from the diode $T_3$, whose gate voltage becomes $v_3=-i_1/g_{m3}$. $T_4$ sources $g_{m4}(-v_3)=(g_{m4}/g_{m3})\,i_1$ into the output, while $T_2$ draws $i_2=-i_1$ out of it. The current delivered into the short is

$$
i_{out}=\frac{g_{m4}}{g_{m3}}i_1-i_2=i_1\left(1+\frac{g_{m4}}{g_{m3}}\right),
\qquad
G_m[dm]=\frac{i_{out}}{v_{id}}=\frac{g_{m1}g_{m2}}{g_{m1}+g_{m2}}\cdot\frac{g_{m3}+g_{m4}}{g_{m3}} .
$$

### Step 3 — Average-and-difference form

Write $g_{m1,2}=g_{m1-2}\pm\Delta g_{m1-2}/2$ and $g_{m3,4}=g_{m3-4}\pm\Delta g_{m3-4}/2$:

$$
\frac{g_{m1}g_{m2}}{g_{m1}+g_{m2}}=\frac{g_{m1-2}^2-\Delta g_{m1-2}^2/4}{2g_{m1-2}}=\frac{g_{m1-2}}2\left[1-\left(\frac{\Delta g_{m1-2}}{2g_{m1-2}}\right)^2\right],
\qquad
\frac{g_{m3}+g_{m4}}{g_{m3}}=\frac{2}{1+\dfrac{\Delta g_{m3-4}}{2g_{m3-4}}} .
$$

Multiplying,

$$
G_m[dm]=g_{m1-2}\,\frac{1-\left(\dfrac{\Delta g_{m1-2}}{2g_{m1-2}}\right)^2}{1+\dfrac{\Delta g_{m3-4}}{2g_{m3-4}}},
$$

which is exact when all $r_o\to\infty$ and approximate otherwise. The input-pair mismatch enters only to second order, because the tail node adjusts to equalize the two currents. The mirror mismatch enters to first order, because it directly scales the half of the signal that passes through the mirror.

### Step 4 — Numerical value

From the table, $g_{m1-2}=1.0$ mA/V, $\Delta g_{m1-2}=0.1$ mA/V, $g_{m3-4}=1.0$ mA/V, $\Delta g_{m3-4}=0.2$ mA/V:

$$
G_m[dm]=(1.0\ \mathrm{mA/V})\,\frac{1-(0.05)^2}{1+0.1}=\frac{0.9975}{1.1}\ \mathrm{mA/V}=0.907\ \mathrm{mA/V}.
$$

Without mismatch, $G_m[dm]=g_m=1.0$ mA/V. The mismatch lowers $G_m[dm]$ by about 9%, of which only 0.25% comes from the input pair.

### Step 5 — SPICE check (linear small-signal model)

Each transistor is replaced by its small-signal model: a VCCS $g_m v_{gs}$ from drain to source with $r_o$ in parallel. The diode $T_3$ is a VCCS controlled by its own drain voltage, $T_4$ is controlled by $v_3$, and the tail $T_5$ is just $r_{o5}=0.5$ MΩ. The output is shorted by a 0-V source whose current is $i_{out}$.

```spice
* grsim-04-18 small-signal model of the mirror-loaded pair (DM input)
V1  g1 0 0.5
V2  g2 0 -0.5
G1  d1 t g1 t 1.05m
RO1 d1 t 0.95meg
G2  out t g2 t 0.95m
RO2 out t 1.05meg
G3  d1 0 d1 0 1.1m
RO3 d1 0 1meg
G4  out 0 d1 0 0.9m
RO4 out 0 1meg
RO5 t 0 0.5meg
VSH out 0 0
.control
op
print i(VSH) v(t) v(d1)
.endc
.end
```

| Case | Formula ($r_o\to\infty$) | ngspice (all $r_o$ included) |
|---|---|---|
| With mismatch | 0.907 mA/V | 0.906 mA/V |
| Without mismatch (all $g_m=1$ mA/V, $r_o=1$ MΩ) | 1.000 mA/V | 0.999 mA/V |

The simulation also shows the tail node moving by $0.025\,v_{id}$, as Step 1 predicts. The finite output resistances change $G_m[dm]$ by only about 0.1%, so the approximate formula is accurate. The mismatch reduces $G_m[dm]$ by 9%, almost entirely through $g_{m3}\ne g_{m4}$.
