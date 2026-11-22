# Detailed solution - A341

Find the small-signal drain currents of the four input devices, add them at the two folding nodes (the drains of M7 and M8), and multiply the current reaching each output by the resistance at that output. Unlike a main folded-cascode amplifier, each output here is loaded by a plain current sink, so the output resistance is only about $r_{ds}$ and the gain is of order $g_mr_{ds}$.

### Step 1 — Currents of the input devices

Apply $+v_{in}/2$ to the gate of M1 and $-v_{in}/2$ to the gate of M4; the gates of M2 and M3 are at the dc bias $V_{Bias}$, i.e. ac ground. In the pair M1–M2 (tail M5 a current source), a gate signal $v_g$ on one device splits equally across the two gate–source voltages, so the drain currents are $\pm g_mv_g/2$. With $v_g=v_{in}/2$:

$$
i_1=+\frac{g_m}2\frac{v_{in}}2=0.25\,g_mv_{in},\qquad i_2=-0.25\,g_mv_{in}.
$$

In the pair M3–M4 the gate of M4 receives $-v_{in}/2$:

$$
i_4=-0.25\,g_mv_{in},\qquad i_3=+0.25\,g_mv_{in}.
$$

### Step 2 — Currents at the folding nodes

The drains of M1 and M3 are tied to the drain of M7, which is the source of the cascode M9; the drains of M2 and M4 are tied to the drain of M8, the source of M10. The extra current drawn from each node is

$$
i_1+i_3=+0.5\,g_mv_{in}\quad(\text{M7 node}),\qquad i_2+i_4=-0.5\,g_mv_{in}\quad(\text{M8 node}).
$$

M7 and M8 carry fixed currents, so this change is taken from the cascodes: the current of M9 into $v_{out}^-$ falls by $0.5\,g_mv_{in}$, and that of M10 into $v_{out}^+$ rises by $0.5\,g_mv_{in}$.

### Step 3 — Output resistance

Looking down from each output there is only the current sink M11 (or M12), with resistance $r_{ds}$. Looking up, the cascode M9 sits on a folding node of resistance about $r_{ds}/2$ (M7 in parallel with the input devices), giving $\approx g_mr_{ds}\cdot r_{ds}/2\gg r_{ds}$. Hence

$$
R_{out}=r_{ds}\parallel\frac{g_mr_{ds}^2}2\approx r_{ds}
$$

per output, and $2r_{ds}$ between the outputs.

### Step 4 — Differential voltage gain

$$
v_{out}^-\approx-0.5\,g_mr_{ds}v_{in},\qquad v_{out}^+\approx+0.5\,g_mr_{ds}v_{in},
$$
$$
A_{vd}=\frac{v_{out}^+-v_{out}^-}{v_{in}}\approx g_mr_{ds}.
$$

A full nodal analysis with $g_mr_{ds}=100$ gives $0.94\,g_mr_{ds}$; the small difference comes from the finite cascode resistance looking up and from the input devices' own $r_{ds}$.
