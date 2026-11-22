# Detailed solution - A322

A smaller load capacitance raises the dominant pole and hence GB, while the nondominant poles stay where they are. Compute the nominal GB for $C_L=1$ pF, find where the loop gain actually crosses unity (the nondominant poles now also reduce the magnitude), and add up the phase lag there.

### Step 1 — Dominant pole and nominal GB

$$
|p_d|=\frac1{R_{out}C_L}=\frac1{(7.44\ \mathrm{M\Omega})(1\ \mathrm{pF})}=1.344\times10^5\ \mathrm{rad/s},\qquad
GB=A_{vd}(0)|p_d|=3678(1.344\times10^5)=494\times10^6\ \mathrm{rad/s}\ (78.7\ \mathrm{MHz}).
$$

### Step 2 — True unity-gain frequency

At such a high GB the nondominant poles are not far away, so the loop gain crosses unity below GB. Solving

$$
\frac{GB}{\omega}\prod_i\left[1+\left(\frac{\omega}{|p_i|}\right)^2\right]^{-1/2}=1
$$

gives $\omega_u\approx374\times10^6$ rad/s (about 60 MHz).

### Step 3 — Phase margin

The phase lag at $\omega_u$:

$$
90^\circ+2\tan^{-1}\frac{374}{702}+\tan^{-1}\frac{374}{1652}+\tan^{-1}\frac{374}{4176}+\tan^{-1}\frac{374}{555000}
=90^\circ+56.1^\circ+12.8^\circ+5.1^\circ+0.04^\circ\approx164^\circ,
$$

so $PM\approx180^\circ-164^\circ=16^\circ$: the op amp is only marginally stable. The cruder estimate that evaluates the phase at the nominal GB of 494 Mrad/s gives $90^\circ-70.3^\circ-16.6^\circ-6.8^\circ\approx-4^\circ$, which overstates the problem; either way the phase margin is far too small (a 60° margin needs $C_L\approx3.5$ pF or more).
