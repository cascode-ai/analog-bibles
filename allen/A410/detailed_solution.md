# Detailed solution - A410

As before, add the amplifier's time to reach the enabling imbalance and the latch's regeneration time to half the output swing. Voltages are normalized to $V_{OH}-V_{OL}$ and times to $\tau_L$.

### Step 1 — Amplifier response

With dc gain 5, pole at $1/\tau_L$ and an input step of 0.05,

$$
v_{amp}(t)=0.25\bigl(1-e^{-t/\tau_L}\bigr).
$$

### Step 2 — Time to enable the latch

The latch is enabled at $v_{amp}=0.15$, three fifths of the amplifier's final value:

$$
0.25\bigl(1-e^{-t_1/\tau_L}\bigr)=0.15
\quad\Rightarrow\quad
e^{-t_1/\tau_L}=0.4,\qquad
t_1=-\tau_L\ln0.4=0.916\,\tau_L .
$$

### Step 3 — Latch delay

$$
t_2=\tau_L\ln\frac{0.5}{0.15}=1.204\,\tau_L .
$$

### Step 4 — Total propagation delay

$$
\frac{t_p}{\tau_L}=0.916+1.204=2.12 .
$$

### Step 5 — Comparison with other enabling levels

For an enabling level $x$, the total is

$$
\frac{t_p}{\tau_L}=\ln\frac1{1-4x}+\ln\frac{0.5}x=\ln\frac{0.5}{x(1-4x)} .
$$

At $x=0.1$ and $x=0.15$ the product $x(1-4x)$ is the same, 0.06, so both give $\ln(8.33)=2.12$. Setting the derivative to zero, $4/(1-4x)=1/x$, gives the optimum $x=0.125$, half the amplifier's final output, where $t_p=\tau_L\ln8=2.08\,\tau_L$. Enabling earlier leaves the latch too small an imbalance; enabling later wastes time while the amplifier output creeps toward its final value.
