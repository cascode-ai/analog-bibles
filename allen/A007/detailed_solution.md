# Detailed solution - A007

The input terminal is connected to the rest of the circuit only through the dependent current source, so the input current and the source current are the same. Combine that with KCL at the output node, which has no external load, and both ratios follow.

### Step 1 — Input current equals the source current

The source $g_m(v_1-v_2)$ is in series with the input terminal and points away from it, in the direction of $i_1$. KCL at the input terminal therefore gives

$$
i_1=g_m(v_1-v_2).
$$

### Step 2 — Voltage gain $v_2/v_1$

At the output node the only other branch is $R_L$ (the output port is open), so all of $i_1$ flows down through $R_L$:

$$
v_2=i_1R_L=g_mR_L(v_1-v_2).
$$

Collecting the $v_2$ terms, $v_2(1+g_mR_L)=g_mR_Lv_1$, hence

$$
\frac{v_2}{v_1}=\frac{g_mR_L}{1+g_mR_L}.
$$

### Step 3 — Input resistance $v_1/i_1$

From Step 1, $v_1=v_2+i_1/g_m$, and from Step 2, $v_2=i_1R_L$:

$$
v_1=i_1R_L+\frac{i_1}{g_m}
\quad\Rightarrow\quad
\frac{v_1}{i_1}=R_L+\frac1{g_m}.
$$

### Step 4 — Interpretation

The controlling voltage $v_1-v_2$ is the voltage across the source itself, so the source behaves as a resistance $1/g_m$ in series with $R_L$. The circuit is therefore a voltage divider of $1/g_m$ and $R_L$, which reproduces both results: $v_2/v_1=R_L/(R_L+1/g_m)$ and $v_1/i_1=R_L+1/g_m$. This is the small-signal model of a follower: for $g_mR_L\gg1$ the gain approaches 1 from below and the input resistance is about $R_L$.
