# Detailed solution - A009

$R_3$ bridges the internal node $v_1$ and the output, and the output is set by an ideal source controlled by the current in $R_2$, so the voltage ratio across $R_3$ is known exactly. Miller's theorem then replaces $R_3$ by grounded resistors at its two ends, which leaves a simple divider at the input followed by the known output ratio.

### Step 1 — The node-to-node gain $K$

Let $v_1$ be the voltage of the node joining $R_1$, $R_2$ and $R_3$. The current flowing down through $R_2$ is $i_a=v_1/R_2$. The source has its − terminal at the output and + at ground, so

$$
v_{out}=-r_mi_a=-\frac{r_m}{R_2}\,v_1,
\qquad
K\equiv\frac{v_{out}}{v_1}=-\frac{r_m}{R_2}.
$$

This ratio holds whatever current flows in $R_3$, because the ideal source fixes $v_{out}$ once $v_1$ is known.

### Step 2 — Miller replacement of $R_3$

Miller's theorem: an impedance $Z$ connected between two nodes whose voltages satisfy $v_b=Kv_a$ is equivalent to $Z/(1-K)$ from node a to ground plus $ZK/(K-1)$ from node b to ground, since each carries the same current $(v_a-v_b)/Z$ out of its node. With $Z=R_3$ and $K=-r_m/R_2$:

$$
R_{3a}=\frac{R_3}{1-K}=\frac{R_3}{1+r_m/R_2}=\frac{R_2R_3}{R_2+r_m},
\qquad
R_{3b}=\frac{R_3K}{K-1}=\frac{r_mR_3}{R_2+r_m}.
$$

$R_{3a}$ goes from $v_1$ to ground. $R_{3b}$ lands directly across the ideal voltage source, so it changes the source current but not $v_{out}$, and it can be ignored.

### Step 3 — Divider at the input

Node $v_1$ now sees $R_1$ from $v_{in}$ and, to ground, $R_2$ in parallel with $R_{3a}$:

$$
R_2\parallel R_{3a}=\frac{R_2\cdot\dfrac{R_2R_3}{R_2+r_m}}{R_2+\dfrac{R_2R_3}{R_2+r_m}}=\frac{R_2R_3}{R_2+R_3+r_m}.
$$

The voltage divider gives

$$
\frac{v_1}{v_{in}}=\frac{R_2\parallel R_{3a}}{R_1+R_2\parallel R_{3a}}
=\frac{R_2R_3}{R_1(R_2+R_3+r_m)+R_2R_3}.
$$

### Step 4 — Overall gain

Multiplying by $K$:

$$
\frac{v_{out}}{v_{in}}=K\,\frac{v_1}{v_{in}}
=-\frac{r_m}{R_2}\cdot\frac{R_2R_3}{R_1(R_2+R_3+r_m)+R_2R_3}
=-\frac{r_mR_3}{R_1R_2+R_1R_3+R_1r_m+R_2R_3}.
$$

Miller's theorem is exact when the $K$ used is the true ratio $v_{out}/v_1$; here it is, because the output is an ideal source. A direct nodal equation at $v_1$, $(v_1-v_{in})/R_1+v_1/R_2+(v_1-v_{out})/R_3=0$ with $v_{out}=-r_mv_1/R_2$, gives the same expression.
