# Detailed solution - A275

With a large dc gain, the dominant pole contributes a full −90° at the unity-gain frequency. The remaining lag comes from the output pole $p_2$ and from the right-half-plane zero, which adds phase lag (not lead) because it lies in the RHP. Both are set by $g_{m6}$.

### Step 1 — Second-stage transconductance

M6 is saturated with $I_6=228$ µA:

$$
g_{m6}=\sqrt{2K'_P\left(\frac WL\right)_6I_6}=\sqrt{2(50\ \mu\mathrm{A/V^2})(100)(228\ \mu\mathrm A)}=1.51\ \mathrm{mS}.
$$

### Step 2 — Output pole and RHP zero

$$
|p_2|=\frac{g_{m6}}{C_L}=\frac{1.51\ \mathrm{mS}}{20\ \mathrm{pF}}=7.55\times10^7\ \mathrm{rad/s}\ (12.0\ \mathrm{MHz}),\qquad
z=\frac{g_{m6}}{C_c}=\frac{1.51\ \mathrm{mS}}{5\ \mathrm{pF}}=3.02\times10^8\ \mathrm{rad/s}\ (48.1\ \mathrm{MHz}).
$$

### Step 3 — Phase margin at 1 MHz

The open-loop phase at $\omega$ is $-90^\circ-\arctan(\omega/|p_2|)-\arctan(\omega/z)$, so

$$
\Phi_M=180^\circ+\angle A(j\omega_u)=90^\circ-\arctan\frac{1\ \mathrm{MHz}}{12.0\ \mathrm{MHz}}-\arctan\frac{1\ \mathrm{MHz}}{48.1\ \mathrm{MHz}}
=90^\circ-4.8^\circ-1.2^\circ=84^\circ .
$$

This margin applies to the stated 1-MHz crossover. At this op amp's own $GB=g_{m1}/C_c=7.1$ MHz, the same model gives about 51°.
