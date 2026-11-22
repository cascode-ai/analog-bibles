# Detailed solution - A468

Every branch resistor ends at 0 V, either at ground or at the op amp's virtual ground, so the branch currents do not depend on the switch positions. Find the voltages of the two ladder nodes, the four branch currents, and choose $R_x$ so that the currents form a binary sequence; the largest current belongs to the MSB.

### Step 1 — Node voltages

The source's + terminal is grounded, so the left bottom node (call it A) is at $V_A=-V_{REF}$. Its 2R and 4R branches go to 0 V regardless of the bits. The node to the right of $R_x$ (call it B) has three resistances to 0 V: its 2R branch, its 4R branch and the 4R to ground at the right end:

$$
R_B=2R\parallel4R\parallel4R=2R\parallel2R=R .
$$

$R_x$ and $R_B$ form a divider from node A:

$$
V_B=-V_{REF}\,\frac{R}{R_x+R}.
$$

### Step 2 — Branch currents

Each branch draws a current from the 0 V end toward the negative node:

$$
I_{A,2R}=\frac{V_{REF}}{2R},\qquad I_{A,4R}=\frac{V_{REF}}{4R},\qquad
I_{B,2R}=\frac{|V_B|}{2R},\qquad I_{B,4R}=\frac{|V_B|}{4R}.
$$

The currents at A are in the ratio 2 : 1, and so are those at B. A binary sequence $V_{REF}/2R,\ V_{REF}/4R,\ V_{REF}/8R,\ V_{REF}/16R$ therefore requires

$$
\frac{|V_B|}{2R}=\frac{V_{REF}}{8R}\ \Longrightarrow\ |V_B|=\frac{V_{REF}}{4}
\ \Longrightarrow\ \frac{R}{R_x+R}=\frac14\ \Longrightarrow\ R_x=3R .
$$

### Step 3 — Switch assignment and output

From left to right the switches carry $V_{REF}/2R$, $V_{REF}/4R$, $V_{REF}/8R$ and $V_{REF}/16R$, so they are $b_0$ (2R at node A), $b_1$ (4R at node A), $b_2$ (2R at node B) and $b_3$ (4R at node B). A switch set to 1 routes its branch current out of the summing node; the ideal op amp supplies it through the feedback $R$, which raises $v_{OUT}$:

$$
v_{OUT}=R\left(b_0\frac{V_{REF}}{2R}+b_1\frac{V_{REF}}{4R}+b_2\frac{V_{REF}}{8R}+b_3\frac{V_{REF}}{16R}\right)
=V_{REF}\left(\frac{b_0}{2}+\frac{b_1}{4}+\frac{b_2}{8}+\frac{b_3}{16}\right).
$$
