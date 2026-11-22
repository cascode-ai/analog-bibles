# Detailed solution - A313

The stage has two signal nodes: node X (drain of M1, source of M2, gate of M4) and the output. M1 converts $v_{in}$ into a current at X; M4 is a common-source device loaded by the diode-connected M3; and M2, a source follower from the output back to X, closes a negative-feedback loop. Write KCL at the two nodes of the small-signal model and eliminate $v_x$. Bulk effects are neglected and all devices are saturated.

### Step 1 — Small-signal model

All supply nodes are ac ground. The elements are:

- M1: current $g_{m1}v_{in}$ from X to ground, with $r_{ds1}$ from X to ground;
- M2 (drain at $V_{DD}$, gate at the output, source at X): current $g_{m2}(v_{out}-v_x)$ into X, with $r_{ds2}$ from X to ground;
- M3 (diode-connected p-channel at the output): conductance $g_{m3}+g_{ds3}$ from the output to ground;
- M4: current $g_{m4}v_x$ from the output to ground, with $r_{ds4}$ from the output to ground.

<!-- diagram: diagram-01.cir -->

### Step 2 — Node equations

KCL at X (current arriving through M2 equals the current leaving through M1 and the two drain resistances):

$$
g_{m2}(v_{out}-v_x)=g_{m1}v_{in}+(g_{ds1}+g_{ds2})v_x
\;\Rightarrow\;
v_x(g_{m2}+g_{ds1}+g_{ds2})=g_{m2}v_{out}-g_{m1}v_{in} .
$$

KCL at the output:

$$
(g_{m3}+g_{ds3}+g_{ds4})v_{out}+g_{m4}v_x=0
\;\Rightarrow\;
v_x=-\frac{g_{m3}+g_{ds3}+g_{ds4}}{g_{m4}}\,v_{out} .
$$

### Step 3 — Voltage gain

Eliminating $v_x$:

$$
\frac{v_{out}}{v_{in}}=\frac{g_{m1}g_{m4}}{g_{m2}g_{m4}+(g_{m2}+g_{ds1}+g_{ds2})(g_{m3}+g_{ds3}+g_{ds4})}\approx\frac{g_{m1}g_{m4}}{g_{m2}(g_{m3}+g_{m4})} .
$$

The gain is positive. If $g_{m3}=g_{m4}$, it is about $g_{m1}/(2g_{m2})$.

### Step 4 — Interpretation

A rise in $v_{in}$ increases M1's current and pulls X down; M4 then conducts less and the diode M3 lets the output rise. M2 feeds the output back to X as a follower, opposing the change at X; this negative feedback sets the low, transconductance-ratio gain and gives the stage a low output resistance.
