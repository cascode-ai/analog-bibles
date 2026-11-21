# Detailed solution - A517

In [Fig. 1] the offset source sits in series with each comparator's input, so it shifts only the decision; the node voltages $v(i+1)=2v(i)-b_iV_{REF}$ depend on the input and the bits alone. Nothing changes until the offset makes some comparator see the opposite sign, so the smallest harmful offset equals the node voltage closest to zero.

### Step 1 — Ideal node voltages

In units of $V_{REF}$, with $v(0)=0.6$ and $b_i=+1$ for $v(i)>0$:

| Node | Voltage | Bit |
|---|---|---|
| $v(0)$ | 0.6 | $b_0=+1$ |
| $v(1)$ | $1.2-1=0.2$ | $b_1=+1$ |
| $v(2)$ | $0.4-1=-0.6$ | $b_2=-1$ |
| $v(3)$ | $-1.2+1=-0.2$ | $b_3=-1$ |
| $v(4)$ | $-0.4+1=0.6$ | $b_4=+1$ |

### Step 2 — Effect of the offset

With the polarity drawn, comparator $i$ sees $v(i)+V_{OS}$ against ground. If no decision changes, the node voltages are exactly those above, since $V_{OS}$ is not in the signal path. A decision changes only when $v(i)+V_{OS}$ changes sign:

- $V_{OS}=+0.2V_{REF}$ brings $v(3)+V_{OS}$ from $-0.2V_{REF}$ to zero and flips $b_3$;
- $V_{OS}=-0.2V_{REF}$ brings $v(1)+V_{OS}$ from $+0.2V_{REF}$ to zero and flips $b_1$.

All other nodes are $0.6V_{REF}$ from zero.

### Step 3 — Smallest offset

$$
|V_{OS}|_{min}=\min_i|v(i)|=0.2\,V_{REF}.
$$

The offset tolerance does not shrink along the pipeline, because the offset acts on each decision directly and is not amplified by the following stages.
