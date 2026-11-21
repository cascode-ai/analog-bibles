# Detailed solution - A437

Find how much of each sink current is drawn from the op amp's summing node, add the contributions of all bits, and take the output for all ones minus the output for all zeros.

### Step 1 — Resistance of the ladder seen from each node

The op amp holds its inverting input at virtual ground, so for the ladder that node is a ground. The leftmost node $N$ has $R$ to ground; seen from node $N-1$ through its series $R$ this is $R+R=2R$, in parallel with the $2R$ of node $N-1$ gives $R$, and the pattern repeats toward the op amp. Hence every node $k\ge1$ sees exactly $2R$ to ground on its left side (away from the op amp), and

$$
R_{\text{node 1, left + down}}=2R\parallel2R=R .
$$

### Step 2 — Fraction of each sink current taken from the summing node

By reciprocity, the short-circuit current into the summing node caused by a current $I$ drawn at node $k$ equals $I$ times the open-circuit voltage ratio $v_k/V_s$ obtained when a source $V_s$ drives the ladder from the summing-node end through the series $R$. In that dual problem the series $R$ feeds node 1, whose resistance to ground is $R$ (Step 1), so $v_1=V_s/2$; each further series $R$ again feeds a node of resistance $R$, so the voltage halves at every node:

$$
\frac{v_k}{V_s}=\frac1{2^k}\quad\Longrightarrow\quad i_{\Sigma,k}=\frac{I}{2^k},\qquad k=1,\dots,N .
$$

A nodal solution of the ladder ($N=6$) gives the same fractions $1/2,\ 1/4,\ \dots,\ 1/64$.

### Step 3 — Output voltage and full-scale value

The sink pulls $i_{\Sigma,k}$ out of the summing node; since no current enters the op amp input, it is supplied by the output through the feedback $R$, which makes $v_{OUT}$ positive:

$$
v_{OUT}=R\sum_{k=1}^{N}b_k\frac{I}{2^k}=RI\sum_{k=1}^{N}b_k2^{-k},
$$

with $S_1$ the MSB (weight $1/2$) and $S_N$ the LSB (weight $2^{-N}$). For all zeros $v_{OUT}=0$; for all ones the geometric sum gives

$$
FS=RI\sum_{k=1}^{N}2^{-k}=RI\left(1-\frac1{2^N}\right).
$$

The full-scale range (the value approached as $N\to\infty$) is $RI$, and the full-scale value lies one LSB below it: $1\,\mathrm{LSB}=RI/2^N$.
