# Detailed solution - A340

Treat each half of the folded cascode as a transconductor driving a high output resistance: the gain of one side is $G_mR_{out}$, and the differential gain is twice that. The output resistance comes from the cascode formula $R\approx g_mr_{ds}R_S$ applied to the stacks above and below each output; the transconductance comes from how the input-pair current divides at the folding node.

### Step 1 — Half circuit

For a differential input the common source of M1–M2 (tail M3) is an ac ground, and each input device receives $\pm v_{in}/2$. The gates of M4–M11 are at fixed bias voltages, i.e. ac ground. One half consists of M1 driving the folding node (drain of M1 and M4, source of M6), the p-channel cascode M6, the output node, and the n-channel cascode M8 over the current sink M10.

### Step 2 — Output resistance of one side

Looking up from the output into M6: its source is the folding node, whose resistance to ac ground is $r_{ds4}\parallel r_{ds1}=r_{ds}/2$ (both M4 and M1 terminate there). A cascode device multiplies its source resistance by about $g_mr_{ds}$:

$$
R_{up}\approx g_{m6}r_{ds6}\frac{r_{ds}}2=\frac{g_mr_{ds}^2}2 .
$$

Looking down into M8, whose source sees $r_{ds10}=r_{ds}$:

$$
R_{dn}\approx g_{m8}r_{ds8}r_{ds10}=g_mr_{ds}^2 .
$$

The single-ended output resistance is

$$
R_{out}=R_{up}\parallel R_{dn}=\frac{(g_mr_{ds}^2/2)(g_mr_{ds}^2)}{3g_mr_{ds}^2/2}=\frac{g_mr_{ds}^2}3 ,
$$

and between the two outputs, in series through ac ground,

$$
R_{out,d}=2R_{out}=\frac23g_mr_{ds}^2 .
$$

### Step 3 — Transconductance of one side

The signal current of M1, $g_m v_{in}/2$, enters the folding node. There it can flow into $r_{ds4}\parallel r_{ds1}=r_{ds}/2$ or into the source of M6. With the output short-circuited (the condition that defines $G_m$), the resistance looking into the source of M6 is about $1/g_m\ll r_{ds}/2$, so essentially all of the current passes through the cascode to the output:

$$
i_o\approx\pm\frac{g_m}2v_{in},\qquad G_m\approx\frac{g_m}2 .
$$

### Step 4 — Differential voltage gain

Each output moves by

$$
v_o=\pm G_mR_{out}v_{in}=\pm\frac{g_m}2\,\frac{g_mr_{ds}^2}3\,v_{in}=\pm\frac{(g_mr_{ds})^2}6v_{in},
$$

so the differential gain is

$$
A_{vd}=\frac{v_{out}}{v_{in}}=\frac{(g_mr_{ds})^2}3 .
$$

A full nodal solution of the half circuit gives $A_{vd}=(g_mr_{ds})^2/3+2g_mr_{ds}/9+\dots$, i.e. $0.336\,(g_mr_{ds})^2$ at $g_mr_{ds}=100$, confirming the approximation.

| Quantity | Differential | Per output |
|---|---|---|
| Voltage gain | $(g_mr_{ds})^2/3$ | $(g_mr_{ds})^2/6$ |
| Output resistance | $\tfrac23g_mr_{ds}^2$ | $g_mr_{ds}^2/3$ |
