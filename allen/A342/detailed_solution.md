# Detailed solution - A342

Each output of this push–pull folded cascode is driven from two directions: a folded input current arrives from above through a p-channel cascode, and a second folded input current, of opposite sign, is mirrored to the n-channel cascode current sink below. Find the four input currents, follow each to its output, then multiply the net output current by the single-ended output resistance obtained from the cascode formula.

### Step 1 — Input currents

The input devices M1 and M2 have their gates at $v_{IN}^+$, M3 and M4 at $v_{IN}^-$, and all four share the tail M5. For a differential input $\pm v_{in}/2$ the common source is an ac ground, so each device has $v_{gs}=\pm v_{in}/2$ and

$$
i_1=i_2=+0.5\,g_mv_{in},\qquad i_3=i_4=-0.5\,g_mv_{in}.
$$

### Step 2 — Current paths to the outputs

The drains of the input devices are tied to four folding nodes, at the sources of the p-channel cascodes M8, M9, M16 and M17. A change in an input current is taken from the cascode on that node (its current source M6, M7, M14 or M15 is fixed).

- $v_{OUT}^+$ (drains of M9 and M11): the change of M4 passes through the cascode M9 into the output, supplying $+0.5\,g_mv_{in}$. The change of M1 passes through M16 into the cascode mirror M10/M12, whose output M11/M13 then sinks $0.5\,g_mv_{in}$ less from the output, which also adds $+0.5\,g_mv_{in}$.
- $v_{OUT}^-$: by symmetry, M2 through M8 and M3 through M17 into the mirror M18/M20 → M19/M21 give $-0.5\,g_mv_{in}$ each.

The fraction of a folded current that reaches the output is $k=(r_{ds}/2)/(r_{ds}/2+1/g_m)\approx1$, because with the output short-circuited the cascode source presents about $1/g_m$, much less than the $r_{ds}/2$ of the folding node. The net short-circuit output currents are therefore

$$
i_{o+}=+g_mv_{in},\qquad i_{o-}=-g_mv_{in}.
$$

### Step 3 — Output resistance

Looking up from $v_{OUT}^+$, the cascode M9 sits on a folding node loaded by $r_{ds7}\parallel r_{ds4}=r_{ds}/2$:

$$
R_{up}\approx g_mr_{ds}\frac{r_{ds}}2=\frac{g_mr_{ds}^2}2 .
$$

Looking down, the output of the cascode mirror M11 over M13 gives $R_{dn}\approx g_mr_{ds}\cdot r_{ds}=g_mr_{ds}^2$. Hence

$$
R_{out}=R_{up}\parallel R_{dn}=\frac{g_mr_{ds}^2}3\quad\text{per output},\qquad
R_{out,d}=2R_{out}=\frac23g_mr_{ds}^2 .
$$

### Step 4 — Differential voltage gain

$$
v_{OUT}^\pm=\pm g_mv_{in}\,\frac{g_mr_{ds}^2}3=\pm\frac{(g_mr_{ds})^2}3v_{in},
$$
$$
A_{vd}=\frac{v_{OUT}^+-v_{OUT}^-}{v_{in}}=\frac23(g_mr_{ds})^2 .
$$

This is twice the gain of the class A folded cascode, $(g_mr_{ds})^2/3$, because both push–pull paths deliver the full input-device current to each output while the output resistance is the same. A nodal analysis gives $0.67\,(g_mr_{ds})^2$.

| Quantity | Differential | Per output |
|---|---|---|
| Voltage gain | $\tfrac23(g_mr_{ds})^2$ | $(g_mr_{ds})^2/3$ |
| Output resistance | $\tfrac23g_mr_{ds}^2$ | $g_mr_{ds}^2/3$ |
