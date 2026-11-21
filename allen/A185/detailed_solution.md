# Detailed solution - A185

The small-signal model (b) has three unknown node voltages: $v_1$ (D1 = S2), $v_{out}$ (D2 = D3) and $v_4$ (D4 = S3). Write KCL at each, solve the three linear equations for $v_{out}/v_{in}$, and then let $g_m\gg g_{ds}$ to recover the approximate form.

### Step 1 — Nodal equations

From model (b): the source $g_{m1}v_{in}$ and $r_{ds1}$ connect $v_1$ to ground; $g_{m2}v_1$, $g_{mbs2}v_1$ and $r_{ds2}$ connect $v_1$ to $v_{out}$, the sources pushing current from $v_1$ up into $v_{out}$; $g_{m3}v_4$, $g_{mbs3}v_4$ and $r_{ds3}$ connect $v_4$ to $v_{out}$ in the same way; $r_{ds4}$ connects $v_4$ to ground. Summing currents leaving each node:

$$
\begin{aligned}
v_1:&\quad (g_{ds1}+g_{ds2}+g_{m2}+g_{mbs2})v_1-g_{ds2}v_{out}=-g_{m1}v_{in},\\
v_{out}:&\quad -(g_{m2}+g_{mbs2}+g_{ds2})v_1+(g_{ds2}+g_{ds3})v_{out}-(g_{m3}+g_{mbs3}+g_{ds3})v_4=0,\\
v_4:&\quad -g_{ds3}v_{out}+(g_{m3}+g_{mbs3}+g_{ds3}+g_{ds4})v_4=0.
\end{aligned}
$$

### Step 2 — Solving for the gain

To shorten the algebra write $a=g_{m2}+g_{mbs2}+g_{ds2}$ and $b=g_{m3}+g_{mbs3}+g_{ds3}+g_{ds4}$. The first and third equations give

$$
v_1=\frac{g_{ds2}v_{out}-g_{m1}v_{in}}{a+g_{ds1}},\qquad v_4=\frac{g_{ds3}}{b}\,v_{out}.
$$

Substituting into the output equation, using $(g_{m3}+g_{mbs3}+g_{ds3})=b-g_{ds4}$, and multiplying through by $b(a+g_{ds1})$:

$$
\frac{v_{out}}{v_{in}}=\frac{-g_{m1}(g_{m2}+g_{mbs2}+g_{ds2})(g_{m3}+g_{mbs3}+g_{ds3}+g_{ds4})}{g_{ds1}g_{ds2}(g_{m3}+g_{mbs3}+g_{ds3}+g_{ds4})+g_{ds3}g_{ds4}(g_{m2}+g_{mbs2}+g_{ds1}+g_{ds2})}.
$$

### Step 3 — Reduction to the approximate expression

Divide numerator and denominator by $(g_{m2}+g_{mbs2}+g_{ds2})(g_{m3}+g_{mbs3}+g_{ds3}+g_{ds4})$ and drop each $g_{ds}$ against the $g_m$ beside it:

$$
\frac{v_{out}}{v_{in}}\approx\frac{-g_{m1}}{\dfrac{g_{ds1}g_{ds2}}{g_{m2}+g_{mbs2}}+\dfrac{g_{ds3}g_{ds4}}{g_{m3}+g_{mbs3}}}
=-g_{m1}\left(R_A\parallel R_B\right),
$$

with $R_A=(g_{m2}+g_{mbs2})r_{ds1}r_{ds2}$ and $R_B=(g_{m3}+g_{mbs3})r_{ds3}r_{ds4}$, the resistances looking down into the M2 cascode and up into the M3 cascode. Neglecting the body effect,

$$
A_v\cong-g_{m1}\{[g_{m2}r_{ds1}r_{ds2}]\parallel[g_{m3}r_{ds3}r_{ds4}]\},
$$

which is the given expression: $g_{m1}$ times the output resistance of two cascodes in parallel, a gain of order $(g_mr_{ds})^2$. Keeping $g_{mbs2}$ and $g_{mbs3}$ raises both cascode resistances slightly, and so raises the gain a little.
