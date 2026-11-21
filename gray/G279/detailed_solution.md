# Detailed solution - G279

Take the op amp's controlled source $a_vv_x$ (with $v_x=v_+-v_-=v_i-v_o$) as the reference. Find the return ratio with $v_i=0$, the asymptotic gain and the feedthrough, and use Blackman's formula at both ports. The gate draws no current, so $R_o$ never carries signal current and the gate voltage equals the source value $a_vv_x$.

### Step 1 — Follower parameters

$g_m=\sqrt{2k'(W/L)I_D}=4.243$ mA/V, and with $V_{SB}=0$ the body transconductance is

$$
g_{mb}=\frac{g_m\gamma}{2\sqrt{2|\phi_f|}}=\frac{(4.243\ \mathrm{mA/V})(0.3\ \mathrm{V^{1/2}})}{2\sqrt{0.6\ \mathrm V}}=0.822\ \mathrm{mA/V}.
$$

With the body at ground, the follower current is $g_m(v_g-v_o)-g_{mb}v_o$. The output node is also connected to the non-inverting input through $R_i$.

### Step 2 — Return ratio

Set $v_i=0$ and replace $a_vv_x$ by a test voltage $v_t$, so $v_g=v_t$. KCL at the output node (current source ideal, $r_o=\infty$; $R_i$ goes to the grounded non-inverting input):

$$
g_m(v_t-v_o)=g_{mb}v_o+\frac{v_o}{R_i}\quad\Rightarrow\quad v_o=v_t\,\frac{g_m}{g_m+g_{mb}+1/R_i}=0.8376\,v_t .
$$

Then $v_x=-v_o$ and the returned value is $a_vv_x=-a_v(0.8376)v_t$:

$$
\mathcal R=\frac{a_v\,g_m}{g_m+g_{mb}+1/R_i}=837.6 .
$$

### Step 3 — Closed-loop gain

As $a_v\to\infty$, $v_x\to0$, so $A_\infty=1$. With $a_v=0$ the gate is at ground and $v_i$ reaches the output only through $R_i$:

$$
d=\frac{1/R_i}{g_m+g_{mb}+1/R_i}=1.97\times10^{-4}.
$$

$$
\frac{v_o}{v_i}=(1)\frac{837.6}{838.6}+\frac{1.97\times10^{-4}}{838.6}=0.9988 .
$$

### Step 4 — Input resistance (Blackman)

With $a_v=0$, $v_i$ sees $R_i$ in series with the follower output resistance: $R_{in}(a_v{=}0)=R_i+1/(g_m+g_{mb})=1.0002\ \mathrm{M\Omega}$.

- Input port shorted ($v_i=0$): $\mathcal R(\text{short})=837.6$, as in Step 2.
- Input port open: no current can flow in $R_i$, so the non-inverting input follows the output, $v_x=0$, and $\mathcal R(\text{open})=0$.

$$
R_{in}=1.0002\ \mathrm{M\Omega}\cdot\frac{1+837.6}{1+0}=839\ \mathrm{M\Omega}.
$$

### Step 5 — Output resistance (Blackman)

With $a_v=0$, the output sees the follower, $1/(g_m+g_{mb})$, in parallel with $R_i$ to the grounded input: $R_{out}(a_v{=}0)=197.4\ \Omega$. Shorting the output gives $v_x=0$, $\mathcal R(\text{short})=0$; with the output open, $\mathcal R(\text{open})=837.6$:

$$
R_{out}=\frac{197.4\ \Omega}{838.6}=0.235\ \Omega .
$$

These results are exact and agree with the two-port values to four digits, because the only feedforward path ($R_i$) is very weak.
