# Detailed solution - A439

At low frequencies the only imperfection is the finite dc gain of the op amp. Replace the ladder by its Norton equivalent, find the resulting relative gain error of the current-to-voltage conversion, and require the absolute error at the worst-case code to stay below 0.5 LSB.

### Step 1 — Low-frequency op-amp gain

At $s\to0$,

$$
A_0=A_{vd}(0)=\frac{10^6\ \mathrm{rad/s}}{100\ \mathrm{rad/s}}=10^4 .
$$

### Step 2 — Norton equivalent of the ladder at the summing node

Seen from the inverting input, the ideal current sinks are open circuits, so the ladder looks like the series $R$ followed by node 1, whose resistance to ground is $2R\parallel2R=R$ (every node sees $2R$ looking away from the op amp):

$$
R_S=R+R=2R .
$$

The code-dependent short-circuit current $i_\Sigma=I\sum b_i2^{-i}$ (drawn out of the summing node) flows in parallel with $R_S$.

<!-- diagram: diagram-01.cir -->

The equivalent circuit is: node $v_-$ with the current source $i_\Sigma$ pulling current out of it to ground, $R_S=2R$ from $v_-$ to ground, the feedback resistor $R$ from $v_-$ to $v_{OUT}$, and the op amp output $v_{OUT}=-A_0v_-$.

### Step 3 — Gain error from finite $A_0$

KCL at $v_-$, with $v_-=-v_{OUT}/A_0$:

$$
\frac{v_{OUT}-v_-}{R}=i_\Sigma+\frac{v_-}{2R}
\;\Longrightarrow\;
v_{OUT}\left(1+\frac{1}{A_0}+\frac{1}{2A_0}\right)=Ri_\Sigma
\;\Longrightarrow\;
v_{OUT}=\frac{Ri_\Sigma}{1+\dfrac{1}{A_0\beta}},\qquad
\beta=\frac{R_S}{R_S+R}=\frac{2}{3}.
$$

With $A_0\beta=6667$, the output is low by the fraction

$$
\varepsilon=\frac{1}{1+A_0\beta}=\frac{1}{6668}=1.50\times10^{-4}
$$

of its ideal value.

### Step 4 — Worst-case code and maximum $N$

The error $\varepsilon\,v_{OUT,ideal}$ is largest at the all-ones code, $v_{OUT,ideal}=RI(1-2^{-N})$. With $1\,\mathrm{LSB}=RI/2^N$, the error in LSB is $\varepsilon(2^N-1)$, and the requirement is

$$
\varepsilon\left(2^N-1\right)\le0.5
\quad\Longrightarrow\quad
2^N\le1+\frac{0.5}{1.50\times10^{-4}}=3335 .
$$

| $N$ | Error at full scale |
|---|---|
| 11 | $2047\times1.50\times10^{-4}=0.31$ LSB |
| 12 | $4095\times1.50\times10^{-4}=0.61$ LSB |

Hence the converter can resolve at most $N=11$ bits; ignoring the ladder ($\beta=1$) would overestimate the loop gain by 50%.
