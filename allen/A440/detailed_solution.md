# Detailed solution - A440

The op amp's single pole makes the closed-loop DAC a first-order system. Find its closed-loop pole from the loop gain (including the ladder's source resistance), then find how long the worst-case step takes to settle within 0.5 LSB.

### Step 1 — Closed-loop transfer function

Seen from the summing node, the ladder is a Norton source $i_\Sigma=I\sum b_i2^{-i}$ in parallel with $R_S=R+(2R\parallel2R)=2R$; the feedback resistor is $R$. Writing KCL at the inverting input with $v_-=-v_{OUT}/A_{vd}(s)$, exactly as for the dc case but with the frequency-dependent gain,

$$
v_{OUT}(s)=\frac{Ri_\Sigma}{1+\dfrac{1}{A_{vd}(s)\beta}},\qquad
\beta=\frac{R_S}{R_S+R}=\frac{2}{3}.
$$

### Step 2 — Closed-loop pole

Substituting $A_{vd}(s)=10^6/(s+100)$:

$$
\frac{v_{OUT}}{Ri_\Sigma}=\frac{\beta\,10^6}{s+100+\beta\,10^6}
\quad\Longrightarrow\quad
\omega_H=100+\tfrac23\times10^6=6.668\times10^5\ \mathrm{rad/s}.
$$

This equals $100(1+A_0\beta)$ with $A_0=10^4$, i.e. essentially $\beta\cdot GB$ with $GB=10^6$ rad/s. With one pole and no slewing specified, a step settles exponentially with time constant $1/\omega_H=1.50\ \mu$s.

### Step 3 — Worst-case settling criterion

The largest step is 0 to all ones, $\Delta v=RI(1-2^{-10})=1023\,\mathrm{LSB}$ with $1\,\mathrm{LSB}=RI/2^{10}$. The remaining error after time $T$ is $\Delta v\,e^{-\omega_HT}$, and it must not exceed 0.5 LSB:

$$
1023\,e^{-\omega_HT}\le0.5
\quad\Longrightarrow\quad
T=\frac{\ln2046}{\omega_H}=\frac{7.624}{6.668\times10^5\ \mathrm{s^{-1}}}=11.43\ \mu\mathrm s .
$$

### Step 4 — Conversion rate

$$
f=\frac1T=\frac{1}{11.43\ \mu\mathrm s}=87.5\times10^3\ \text{conversions/s}.
$$

Using the slightly simpler bound $e^{-\omega_HT}\le2^{-(N+1)}$ gives $T=11.44\ \mu$s and $87.4\times10^3$ conversions/s, the same to three figures.
