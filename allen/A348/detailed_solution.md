# Detailed solution - A348

Break the loop at the output common mode: apply a common-mode change $v_c$ to both outputs and follow it through the sensing resistors, the CMFB amplifier M12–M16, the bottom current sinks M10/M11 and back to the outputs. The loop gain is the product of the CMFB amplifier's voltage gain, the transconductance of M10/M11, and the common-mode output resistance.

### Step 1 — Sensing and the CMFB amplifier

The two equal resistors between the outputs place the output common mode $v_c$ on the gate of M13; the gate of M14 is at $V_{CMREF}$. M13–M14 are a p-channel pair with tail M12 and an n-channel mirror load: M15 (diode) on the M13 side and M16 on the M14 side. The single-ended output, at the drains of M14 and M16, drives the gates of M10 and M11.

When $v_c$ rises, M13's current falls by $g_mv_c/2$ and M14's rises by $g_mv_c/2$ (M12 fixes the sum). The mirror copies the fall of M13's current to M16, which sinks $g_mv_c/2$ less. The net current into the output node of the pair is therefore $g_mv_c$, flowing into $r_{ds14}\parallel r_{ds16}=r_{ds}/2$:

$$
v_{g10}=+g_mv_c\frac{r_{ds}}2=+\frac{g_mr_{ds}}2v_c .
$$

### Step 2 — Current injected at the outputs

M10 and M11 are the bottom sinks of the n-channel cascodes M8/M10 and M9/M11. A rise $v_{g10}$ of their gates makes each sink an extra

$$
i=g_mv_{g10}=g_m\frac{g_mr_{ds}}2v_c
$$

from its output, through the cascode M8 (M9), which passes the current unchanged.

### Step 3 — Common-mode output resistance

Looking down, the cascode M8 over M10 gives $g_{m8}r_{ds8}r_{ds10}=g_mr_{ds}^2$. Looking up, M6 sits on the folding node; for common-mode signals the input pair's total current is fixed by M3, so the input devices do not load the folding node, which sees only $r_{ds4}$. Hence $R_{up}\approx g_{m6}r_{ds6}r_{ds4}=g_mr_{ds}^2$ and

$$
R_{out,cm}=g_mr_{ds}^2\parallel g_mr_{ds}^2=\frac{g_mr_{ds}^2}2 .
$$

The sensing resistors are assumed much larger than this and are neglected.

### Step 4 — Loop gain

The extra sink current lowers the outputs:

$$
LG=\frac{v_o}{v_c}=-\frac{g_mr_{ds}}2\cdot g_m\cdot\frac{g_mr_{ds}^2}2=-\frac{(g_mr_{ds})^3}4 .
$$

A nodal check gives a coefficient of $-0.25$. The sign confirms negative feedback: a common-mode rise raises the gates of M10/M11, which pull the outputs back down. The loop contains two high-impedance nodes, the gate node of M10/M11 and the outputs, which is why the dashed Miller capacitors $C_c$ are offered for compensating it.
