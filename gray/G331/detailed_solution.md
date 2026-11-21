# Detailed solution - G331

Turn off $V_i$, replace the controlled source $a_v(s)v_x$ with an independent source $a_v(s)v_t$, and compute the $v_x$ returned through the resistive divider; then $\mathscr{R}=-v_x/v_t$. With $C_{\text{in}}=0$ the divider is a constant 1/2, so $\mathscr{R}$ is $a_v/2$ and crosses unity at about half the frequency where $|a_v|$ does.

### Step 1 — Return ratio

With $V_i=0$, the input resistor goes to ground. The source $a_v(s)v_t$ drives the 100-kΩ feedback resistor, and with $C_{\text{in}}=0$ the inverting node sits at the midpoint of two equal resistors:
$$
v_{\text{node}}=a_v(s)v_t\,\frac{100\ \mathrm{k\Omega}}{100\ \mathrm{k\Omega}+100\ \mathrm{k\Omega}}=\frac{a_v(s)v_t}{2} .
$$
$v_x$ has its + terminal at ground, so $v_x=-v_{\text{node}}$ and
$$
\mathscr{R}(s)=-\frac{v_x}{v_t}=\frac{a_v(s)}{2}=\frac{500}{(1+s/100)(1+s/10^6)} .
$$

### Step 2 — Frequency where $|\mathscr{R}|=1$

Between the two poles, $100\ \mathrm{rad/s}\ll\omega\ll10^6\ \mathrm{rad/s}$, the first pole factor is about $j\omega/100$ and the second about 1, so
$$
|\mathscr{R}(j\omega)|\approx\frac{500\times100\ \mathrm{rad/s}}{\omega}=1
\quad\Rightarrow\quad \omega\approx5\times10^4\ \mathrm{rad/s}.
$$
The second pole lowers this only slightly: solving $|\mathscr{R}(j\omega)|=1$ exactly gives $\omega=4.99\times10^4$ rad/s, or 7.95 kHz.

### Step 3 — Comparison with $|a_v|=1$

By the same approximation, $|a_v(j\omega)|\approx1000\times100\ \mathrm{rad/s}/\omega=1$ at $\omega\approx10^5$ rad/s. The exact value including the $10^6$-rad/s pole is $9.95\times10^4$ rad/s, or 15.8 kHz. The return ratio therefore crosses unity at half the unity-gain frequency of the op amp: the ratio is the feedback factor $1/2$ of the resistive divider.
