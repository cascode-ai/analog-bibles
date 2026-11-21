# Detailed solution - A231

This is shunt–shunt feedback: $R_2$ samples the output voltage and returns it to the common gate node. Find the output resistance directly by applying a test voltage at the output with $v_{IN}$ at ac ground and summing the currents it draws.

### Step 1 — Small-signal circuit with a test source

Both transistors are common-source devices with their sources at ac ground ($V_{SS}$, $V_{DD}$) and their drains at the output. Model each as $g_mv_{gs}$ in parallel with $1/g_{ds}$. With $v_{IN}=0$, $R_1$ runs from the gate node to ground and $R_2$ from the gate node to the output. Apply $v_x$ at the output. No gate current flows, so $R_1$ and $R_2$ form a divider:

$$
v_g=v_x\frac{R_1}{R_1+R_2}=\frac{v_x}{2}\qquad(R_1=R_2).
$$

### Step 2 — Current drawn from the test source

KCL at the output, with currents leaving the node counted positive:

- M1 (n-channel, $v_{gs1}=v_g$): $g_{m1}v_g+g_{ds1}v_x$ into its drain.
- M2 (p-channel, $v_{sg2}=-v_g$): its drain delivers $g_{m2}v_{sg2}=-g_{m2}v_g$ into the node, which is a current $g_{m2}v_g$ leaving it, plus $g_{ds2}v_x$.
- Feedback path: $v_x/(R_1+R_2)$ through $R_2$ and $R_1$ to ground.

$$
i_x=(g_{m1}+g_{m2})\frac{R_1}{R_1+R_2}v_x+(g_{ds1}+g_{ds2})v_x+\frac{v_x}{R_1+R_2}.
$$

### Step 3 — Output resistance without $R_L$

With $R_1=R_2$:

$$
R_{out}=\frac{v_x}{i_x}=\frac{1}{\dfrac{g_{m1}+g_{m2}}{2}+g_{ds1}+g_{ds2}+\dfrac{1}{R_1+R_2}}\approx\frac{2}{g_{m1}+g_{m2}},
$$

the approximation holding for $g_m\gg g_{ds}$ and $g_m(R_1+R_2)\gg1$. Without feedback the output resistance would be $1/(g_{ds1}+g_{ds2})$. The feedback lowers it by about the loop gain, $(g_{m1}+g_{m2})/[2(g_{ds1}+g_{ds2})]$, as expected for shunt sampling at the output.

### Step 4 — Including $R_L$

$R_L$ (with $C_L$ at low frequency ignored) connects the output node to ground and simply adds the conductance $1/R_L$ to the sum:

$$
R_{out}=\frac{1}{\dfrac{g_{m1}+g_{m2}}{2}+g_{ds1}+g_{ds2}+\dfrac{1}{R_1+R_2}+\dfrac1{R_L}}\approx\frac{2}{g_{m1}+g_{m2}}\Big\|\,R_L .
$$

Since $2/(g_{m1}+g_{m2})$ is typically a few hundred ohms to a few kilohms, $R_L$ matters only if it is comparably small.
