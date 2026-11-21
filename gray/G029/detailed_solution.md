# Detailed solution - G029

In weak inversion the drain current depends exponentially on the gate voltage, so $g_m$ is the current divided by $nV_T$. $f_T$ then follows from the same definition as in strong inversion: $g_m$ over $2\pi$ times the total gate capacitance.

### Step 1 — Subthreshold transconductance

In weak inversion the drain current is

$$
I_D=\frac WLI_t\exp\!\left(\frac{V_{GS}-V_t}{nV_T}\right)\left(1-e^{-V_{DS}/V_T}\right).
$$

With $V_{DS}=1\ \mathrm V\gg V_T=26$ mV, the last factor is $1-e^{-38}\approx1$, so the current is independent of $V_{DS}$ and

$$
g_m=\frac{\partial I_D}{\partial V_{GS}}=\frac{I_D}{nV_T}=\frac{10\ \mathrm{nA}}{1.5(26\ \mathrm{mV})}=2.56\times10^{-7}\ \mathrm{A/V}=0.256\ \mu\mathrm{A/V}.
$$

The factor $n>1$ accounts for the capacitive division between the gate and the depletion capacitance: only $1/n$ of a gate-voltage change reaches the surface potential.

### Step 2 — Unity-current-gain frequency

With drain, source and body at ac ground, a gate current $i_g=j\omega(C_{gs}+C_{gd}+C_{gb})v_{gs}$ produces an output current $g_mv_{gs}$, so the current gain reaches unity at

$$
f_T=\frac{g_m}{2\pi(C_{gs}+C_{gd}+C_{gb})}=\frac{2.56\times10^{-7}\ \mathrm{A/V}}{2\pi(10\times10^{-15}\ \mathrm F)}=4.08\ \mathrm{MHz}.
$$

Results: $g_m\approx0.256\ \mu$A/V and $f_T\approx4.1$ MHz. The low current makes the device slow even though its capacitances are small.
