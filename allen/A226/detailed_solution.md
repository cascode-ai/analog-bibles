# Detailed solution - A226

Compute the average power in the load and the average power taken from each supply over one period, using the fact that each supply delivers current only during its own half-cycle; then maximize the ratio over the allowed swing.

### Step 1 — Load power

With $v_{OUT}=V_p\sin\omega t$ across $R_L$,

$$
P_{R_L}=\frac1T\int_0^T\frac{V_p^2\sin^2\omega t}{R_L}\,dt=\frac{V_p^2}{2R_L}.
$$

### Step 2 — Supply power

The load current is $i_L=(V_p/R_L)\sin\omega t$. During the positive half-cycle ($0<t<T/2$) the upper device conducts and draws $i_L$ from $V_{DD}$; during the other half it is off. Class B means there is no quiescent current, so the average current from $V_{DD}$ over the full period is

$$
\overline{i_{DD}}=\frac1T\int_0^{T/2}\frac{V_p}{R_L}\sin\omega t\,dt
=\frac{V_p}{R_L}\cdot\frac{1}{T}\cdot\frac{2}{\omega}
=\frac{V_p}{\pi R_L},
$$

using $\int_0^{T/2}\sin\omega t\,dt=2/\omega$ and $\omega T=2\pi$. By symmetry the lower device draws the same average current from $V_{SS}$ during the negative half-cycle. The total supply power is

$$
P_{supply}=V_{DD}\frac{V_p}{\pi R_L}+|V_{SS}|\frac{V_p}{\pi R_L}=(V_{DD}-V_{SS})\frac{V_p}{\pi R_L}.
$$

### Step 3 — Efficiency

$$
\eta=\frac{P_{R_L}}{P_{supply}}=\frac{V_p^2/(2R_L)}{(V_{DD}-V_{SS})V_p/(\pi R_L)}=\frac{\pi}{2}\,\frac{V_p}{V_{DD}-V_{SS}} .
$$

Unlike Class A, the supply power is proportional to $V_p$ rather than fixed, so $\eta$ rises linearly with the signal amplitude.

### Step 4 — Maximum efficiency

The output cannot swing beyond the rails, so the largest amplitude is $V_p=(V_{DD}-V_{SS})/2=V_{DD}$ for $V_{SS}=-V_{DD}$. Substituting,

$$
\eta_{max}=\frac{\pi}{2}\cdot\frac12=\frac{\pi}{4}=0.785=78.5\% .
$$

Real output devices need some headroom (threshold and saturation voltages), so a practical Class B stage stays below this ideal bound.
