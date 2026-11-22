# Detailed solution - G015

In a uniformly doped base, minority carriers cross by diffusion with a linear concentration profile, which gives the base transit time $\tau_F=W_B^2/(2D_p)$. Adding the time to charge the emitter–base depletion capacitance gives $\tau_T=1/(2\pi f_T)$, and the stored base charge is $\tau_F|I_C|$. Magnitudes are used for the $pnp$ currents.

### Step 1 — Base transit time

With the hole concentration falling linearly from $p(0)$ at the emitter edge to about zero at the collector edge, the stored charge is $Q_B=\tfrac12qAp(0)W_B$ and the diffusion current is $|I_C|=qAD_pp(0)/W_B$. Their ratio is the transit time:

$$
\tau_F=\frac{Q_B}{|I_C|}=\frac{W_B^2}{2D_p}=\frac{(10\times10^{-4}\ \mathrm{cm})^2}{2(13\ \mathrm{cm^2/s})}=3.85\times10^{-8}\ \mathrm s=38.5\ \mathrm{ns}.
$$

### Step 2 — $f_T$

From the hybrid-π model with $C_\mu$ neglected, $f_T=g_m/(2\pi C_\pi)$ with $C_\pi=\tau_Fg_m+C_{je}$, so

$$
\tau_T=\frac1{2\pi f_T}=\tau_F+\frac{C_{je}}{g_m},\qquad
g_m=\frac{|I_C|}{V_T}=\frac{0.5\ \mathrm{mA}}{26\ \mathrm{mV}}=19.2\ \mathrm{mA/V}.
$$

$$
\frac{C_{je}}{g_m}=\frac{2\ \mathrm{pF}}{19.2\ \mathrm{mA/V}}=0.104\ \mathrm{ns},\qquad
\tau_T=38.5\ \mathrm{ns}+0.104\ \mathrm{ns}=38.6\ \mathrm{ns},\qquad
f_T=\frac1{2\pi(38.6\ \mathrm{ns})}=4.13\ \mathrm{MHz}.
$$

The wide base dominates: the depletion term changes $f_T$ by only 0.3%. This is why lateral $pnp$ transistors are slow.

### Step 3 — Stored base charge

$$
Q_B=\tau_F|I_C|=(38.5\ \mathrm{ns})(0.5\ \mathrm{mA})=1.92\times10^{-11}\ \mathrm C=19.2\ \mathrm{pC}.
$$

Results: $f_T\approx4.1$ MHz and $Q_B\approx19$ pC.
