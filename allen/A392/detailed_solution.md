# Detailed solution - A392

During this autozero phase the comparator is a unity-gain follower of its own offset source, so the capacitor voltage is the follower's output. Closing the loop around a single-pole amplifier gives a single closed-loop pole at $(1+A_0)$ times the open-loop pole; the charging time and the final value both follow from that closed-loop transfer function. The comparator output is assumed to drive $C_{AZ}$ without slewing and without moving its dominant pole.

### Step 1 — Closed-loop transfer function

The ideal comparator with gain $A(s)$ has $v_+=V_{OS}$ (the offset source between ground and the noninverting input) and $v_-=v_{out}$ (unity feedback), so

$$
v_{out}=A(s)\bigl(V_{OS}-v_{out}\bigr)\quad\Rightarrow\quad
\frac{v_{out}}{V_{OS}}=\frac{A(s)}{1+A(s)} .
$$

With the single-pole model $A(s)=A_0/(1+s/\omega_p)$,

$$
\frac{v_{out}}{V_{OS}}=\frac{A_0}{1+A_0+s/\omega_p}
=\frac{A_0}{1+A_0}\cdot\frac1{1+s/[\omega_p(1+A_0)]} .
$$

### Step 2 — Closed-loop time constant

The feedback moves the pole to

$$
\omega_{CL}=\omega_p(1+A_0)=(10^4\ \mathrm{rad/s})(1001)=1.001\times10^7\ \mathrm{rad/s},
\qquad \tau=\frac1{\omega_{CL}}=99.9\ \mathrm{ns}.
$$

### Step 3 — Time to reach 99 %

For a step-like start the capacitor voltage is $v_{C_{AZ}}(t)=v_{C_{AZ}}(\infty)(1-e^{-t/\tau})$. Reaching 99 % of the final value requires $e^{-t/\tau}=0.01$:

$$
t_{99\%}=\tau\ln100=4.605\,(99.9\ \mathrm{ns})=0.46\ \mu\mathrm s .
$$

The open-loop time constant would be 1000 times longer (100 µs); the loop gain speeds up the settling by the factor $1+A_0$.

### Step 4 — Final value

At dc, $s=0$:

$$
v_{C_{AZ}}(\infty)=\frac{A_0}{1+A_0}V_{OS}=\frac{1000}{1001}V_{OS}=0.999\,V_{OS}.
$$

The stored voltage falls short of $V_{OS}$ by $V_{OS}/(1+A_0)$, so after autozeroing a residual offset of about $V_{OS}/1001$ remains at the input.
