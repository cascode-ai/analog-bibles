# Detailed solution - A339

Find the small-signal voltages at the two first-stage outputs, then the currents that the second-stage devices deliver to each output node, and multiply by the resistance at that node. Each output is driven push–pull: one first-stage output drives a p-channel source directly, the other drives a p-channel device whose current is mirrored into an n-channel sink. Call the first-stage outputs A (drain of the input device driven by the + side of $v_{in}$) and B (drain of the other input device).

### Step 1 — First-stage outputs

For a differential input the common source of the n-channel pair is an ac ground, so each input device receives $\pm v_{id}/2$. Each drain is loaded by its own $r_{ds}$ and that of its p-channel current-source load, $r_{ds}\parallel r_{ds}=r_{ds}/2$:

$$
v_A=-g_m\frac{r_{ds}}2\frac{v_{id}}2=-\frac{g_mr_{ds}}4v_{id},\qquad v_B=+\frac{g_mr_{ds}}4v_{id}.
$$

### Step 2 — Currents delivered to output $v_{o1}$

Two devices act on $v_{o1}$:

- The outer p-channel source has its gate at A. When A falls by $|v_A|$, it supplies an extra current $g_m|v_A|=g_m\frac{g_mr_{ds}}4v_{id}$ into $v_{o1}$.
- The inner p-channel device has its gate at B. When B rises, its current falls by $g_m\frac{g_mr_{ds}}4v_{id}$. That current feeds the diode side of the 1:1 n-channel mirror, so the mirror's output device at $v_{o1}$ sinks the same amount less, which also adds to the current into $v_{o1}$. The diode node is a low-impedance node ($\approx1/g_m$), so the mirror copies the current faithfully.

The net small-signal current into $v_{o1}$ is therefore

$$
i_{o1}=2g_m\frac{g_mr_{ds}}4v_{id}=\frac{g_m^2r_{ds}}2v_{id}.
$$

### Step 3 — Output resistance

With the input grounded, the gates of the output devices have no signal, so each output node sees the drain–source resistance of the p-channel source in parallel with that of the n-channel mirror output:

$$
R_{o1}=R_{o2}=r_{ds}\parallel r_{ds}=\frac{r_{ds}}2,\qquad R_{out,d}=R_{o1}+R_{o2}=r_{ds}
$$

between the two outputs.

### Step 4 — Differential voltage gain

$$
v_{o1}=i_{o1}R_{o1}=\frac{g_m^2r_{ds}}2\,\frac{r_{ds}}2\,v_{id}=\frac{(g_mr_{ds})^2}4v_{id},
$$

and by symmetry $v_{o2}=-v_{o1}$. Hence

$$
A_{vd}=\frac{v_{o1}-v_{o2}}{v_{id}}=\frac{(g_mr_{ds})^2}2 .
$$

This is twice the gain of the simple two-stage design with current-source loads, $(g_mr_{ds})^2/4$, because the push–pull output uses the transconductance of both the p-channel source and the mirrored sink, while the output resistance stays $r_{ds}/2$ per output.

| Quantity | Differential | Per output |
|---|---|---|
| Voltage gain | $(g_mr_{ds})^2/2$ | $(g_mr_{ds})^2/4$ |
| Output resistance | $r_{ds}$ | $r_{ds}/2$ |
