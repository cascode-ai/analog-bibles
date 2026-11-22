# Detailed solution - A338

For differential signals the tail node of the input pair is an ac ground and the circuit splits into two identical half circuits. Each half is a common-source input stage followed by a common-source second stage, each loaded by two equal drain–source resistances. Multiply the stage gains for the voltage gain, and add the two single-ended output resistances for the differential output resistance. At low frequency $C_c$ and $R_z$ carry no current and play no role.

### Step 1 — First stage

The input pair M1–M2 is loaded by the current sources M3–M4. Each drain sees $r_{ds1}\parallel r_{ds3}=r_{ds}/2$, so

$$
v_{d1}-v_{d2}=-g_{m1}(r_{ds1}\parallel r_{ds3})\,v_{id}=-\frac{g_mr_{ds}}2\,v_{id}.
$$

### Step 2 — Second stage

On each side the p-channel driver (M7 at $v_{o1}$, M6 at $v_{o2}$) is a common-source stage whose load is the n-channel current sink (M9, M8). Its gate is driven by the first-stage node of the same side, so

$$
\frac{v_{o1}-v_{o2}}{v_{d1}-v_{d2}}=-g_{m7}(r_{ds7}\parallel r_{ds9})=-\frac{g_mr_{ds}}2 .
$$

### Step 3 — Differential voltage gain

$$
A_{vd}=\frac{v_{o1}-v_{o2}}{v_{id}}=\Bigl(-\frac{g_mr_{ds}}2\Bigr)\Bigl(-\frac{g_mr_{ds}}2\Bigr)=\frac{(g_mr_{ds})^2}4 .
$$

Each single-ended output carries half the differential swing, so the gain to one output is $(g_mr_{ds})^2/8$.

### Step 4 — Differential output resistance

With the inputs grounded, the gates of M6–M9 have no signal, so each output node sees only the two drain–source resistances to ac ground:

$$
R_{o1}=R_{o2}=r_{ds}\parallel r_{ds}=\frac{r_{ds}}2 .
$$

Between the two outputs these are in series through ground:

$$
R_{out,d}=R_{o1}+R_{o2}=r_{ds}.
$$

| Quantity | Differential | Per output |
|---|---|---|
| Voltage gain | $(g_mr_{ds})^2/4$ | $(g_mr_{ds})^2/8$ |
| Output resistance | $r_{ds}$ | $r_{ds}/2$ |
