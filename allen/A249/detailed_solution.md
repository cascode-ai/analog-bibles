# Detailed solution - A249

The unity-gain bandwidth of a dominant-pole amplifier is its dc gain times its dominant-pole magnitude. Take both from the transfer function, using the dominant-pole approximation, and multiply.

### Step 1 — dc gain

At $s=0$ the transfer function reduces to

$$
A_v(0)=g_{mI}g_{mII}R_IR_{II}.
$$

### Step 2 — Dominant pole

Write the denominator as $1+as+bs^2$. For widely spaced poles, $p_1\approx-1/a$, and when the Miller term dominates the $s$ coefficient (high-gain second stage, $R_I$ and $R_{II}$ large),

$$
a\approx g_{mII}R_IR_{II}C_c\quad\Rightarrow\quad |p_1|\cong\frac{1}{g_{mII}R_IR_{II}C_c}.
$$

### Step 3 — Unity-gain bandwidth

For $|p_1|\ll\omega$ while $\omega$ is still below the nondominant pole and the zero, the response falls at $-20$ dB/decade:

$$
|A_v(j\omega)|\approx\frac{A_v(0)|p_1|}{\omega}.
$$

It reaches unity at

$$
GB=A_v(0)|p_1|=\frac{g_{mI}g_{mII}R_IR_{II}}{g_{mII}R_IR_{II}C_c}=\frac{g_{mI}}{C_c}.
$$

For the CMOS two-stage op amp the first-stage transconductance is that of the input pair, $g_{mI}=g_{m1}=g_{m2}$, so $GB\cong g_{m1}/C_c$.

### Step 4 — Physical view

Above $|p_1|$ the second stage with $C_c$ acts as an integrator: the large loop gain around $C_c$ holds node 1 close to a virtual ground, so the first stage's output current $g_{mI}v_{in}$ flows entirely through $C_c$, giving $v_{out}\approx-g_{mI}v_{in}/(sC_c)$ up to the sign convention of the stages. Its magnitude equals 1 at $\omega=g_{mI}/C_c$, independent of $R_I$, $R_{II}$ and $g_{mII}$.
