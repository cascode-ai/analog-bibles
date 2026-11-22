# Detailed solution - A158

Treat the output as a current-summing node: find the small-signal current that the input pair delivers to it (directly through M2, and through M1 → M3 → M4), then divide by the total conductance at the output node.

### Step 1 — Bias currents and transconductance

As in the bias analysis of this circuit, the 1:1 mirrors give $I_5=I_6=I_7=100\ \mu$A, and $I_1=I_2=I_3=I_4=50\ \mu$A (KCL at M1's drain: $I_3=I_6-I_1$). In saturation $g_m=\sqrt{2K'(W/L)I_D}$ and $g_{ds}=\lambda I_D$:

$$
g_{m1}=g_{m2}=g_{m3}=\sqrt{2(110\ \mu\mathrm{A/V^2})(100)(50\ \mu\mathrm A)}=1049\ \mu\mathrm S .
$$

### Step 2 — Signal current delivered to the output

With $v_1=v_{in}/2$ and $v_2=-v_{in}/2$, the common source node of M1–M2 is an ac ground to first order, so the drain currents (positive downward) change by

$$
i_{d1}=+\frac{g_{m1}v_{in}}2,\qquad i_{d2}=-\frac{g_{m2}v_{in}}2 .
$$

At M1's drain the current from M6 is fixed, so KCL forces the diode M3 to absorb the opposite change, $i_{d3}=-i_{d1}=-g_{m1}v_{in}/2$. M4 copies it 1:1: $i_{d4}=-g_{m1}v_{in}/2$. M7's current is fixed, so the net small-signal current drawn down from the output by M2 and M4 is

$$
i_{d2}+i_{d4}=-g_{m1}v_{in},
$$

that is, a current $g_{m1}v_{in}$ is pushed into the output node. The mirror recovers the full differential current, not half of it.

### Step 3 — Output conductance and gain

Three drains connect to the output, each seen through its own $g_{ds}$ (M2's source is an ac ground, M4's and M7's gates are held):

$$
g_{out}=g_{ds2}+g_{ds4}+g_{ds7}=(0.04)(50\ \mu\mathrm A)+(0.04)(50\ \mu\mathrm A)+(0.05)(100\ \mu\mathrm A)=9\ \mu\mathrm S ,
$$

so $R_{out}=111$ kΩ. The open-circuit gain is

$$
\frac{v_o}{v_{in}}=\frac{g_{m1}}{g_{ds2}+g_{ds4}+g_{ds7}}=\frac{1049\ \mu\mathrm S}{9\ \mu\mathrm S}=116.5\ \mathrm{V/V},
$$

positive, i.e. noninverting from $v_1$. Solving the full three-node small-signal equations (nodes: M1 drain, output, common source) without the ac-ground approximation gives 116.1, and a level-1 ngspice simulation, whose bias currents include the $(1+\lambda v_{DS})$ factors, gives about 120. The gain is therefore $v_o/v_{in}\approx116$ V/V.
