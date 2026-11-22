# Detailed solution - G042

The threshold of a $p$-channel device is the gate voltage that inverts the $n$-type surface: it must overcome the work-function difference, the surface-state charge, and the depletion charge, and bend the bands by $2|\phi_f|$. For the implanted device, the $p$-type implant partly compensates the well near the surface, reducing the depletion charge that must be supported.

### Step 1 — Threshold expression and common terms

For a PMOS with ionized donors $qN_D$ in the depletion layer and positive surface-state charge $Q_{ss}$,

$$
V_t=\phi_{ms}-2|\phi_f|-\frac{|Q_b|}{C_{ox}}-\frac{Q_{ss}}{C_{ox}} ,\qquad |Q_b|=\sqrt{2q\epsilon_{Si}N_D(2|\phi_f|)} .
$$

The common terms are

$$
C_{ox}=\frac{3.9(8.86\times10^{-14}\ \mathrm{F/cm})}{400\times10^{-8}\ \mathrm{cm}}=8.64\times10^{-8}\ \mathrm{F/cm^2},\qquad
\frac{Q_{ss}}{C_{ox}}=\frac{(1.6\times10^{-19}\ \mathrm C)(10^{11}\ \mathrm{cm^{-2}})}{8.64\times10^{-8}\ \mathrm{F/cm^2}}=0.19\ \mathrm V,
$$
$$
|\phi_f|=\frac{kT}q\ln\frac{N_D}{n_i}=(0.026\ \mathrm V)\ln\frac{10^{16}}{1.5\times10^{10}}=0.349\ \mathrm V,\qquad 2|\phi_f|=0.70\ \mathrm V .
$$

### Step 2 — Unimplanted device

With $\epsilon_{Si}=11.6\epsilon_0=1.03\times10^{-12}$ F/cm:

$$
|Q_b|=\sqrt{2(1.6\times10^{-19}\ \mathrm C)(1.03\times10^{-12}\ \mathrm{F/cm})(10^{16}\ \mathrm{cm^{-3}})(0.70\ \mathrm V)}=4.79\times10^{-8}\ \mathrm{C/cm^2},\qquad \frac{|Q_b|}{C_{ox}}=0.55\ \mathrm V,
$$

$$
V_t=-0.1-0.70-0.55-0.19=-1.54\ \mathrm V .
$$

### Step 3 — Implanted device, box model

The implant leaves a net donor concentration $10^{16}-0.9\times10^{16}=10^{15}\ \mathrm{cm^{-3}}$ in the top 0.3 µm. The inversion condition is still set by the well doping, $2|\phi_f|=0.70$ V. If the whole depletion layer lies within this layer,

$$
|Q_b|=\sqrt{2q\epsilon_{Si}(10^{15}\ \mathrm{cm^{-3}})(0.70\ \mathrm V)}=1.51\times10^{-8}\ \mathrm{C/cm^2},\qquad \frac{|Q_b|}{C_{ox}}=0.18\ \mathrm V,\qquad V_t=-1.16\ \mathrm V .
$$

### Step 4 — Check: depletion extending into the well

At $10^{15}\ \mathrm{cm^{-3}}$ a 0.70-V depletion layer would be 0.95 µm deep, well beyond the 0.3-µm layer, so the depletion region actually reaches the $10^{16}$ well. With $N_1=10^{15}$ to $x_i=0.3\ \mu$m and $N_2=10^{16}$ beyond, Poisson's equation gives the surface potential $\psi=(q/\epsilon)\int_0^Wx\,N(x)\,dx$:

$$
\psi=\frac q{\epsilon_{Si}}\left[\frac{N_1x_i^2}2+\frac{N_2\left(W^2-x_i^2\right)}2\right]=0.70\ \mathrm V\quad\Rightarrow\quad W=0.41\ \mu\mathrm m,
$$
$$
|Q_b|=q\left[N_1x_i+N_2(W-x_i)\right]=2.29\times10^{-8}\ \mathrm{C/cm^2},\qquad \frac{|Q_b|}{C_{ox}}=0.26\ \mathrm V,\qquad V_t\approx-1.25\ \mathrm V .
$$

Results: $V_t\approx-1.54$ V without the implant and $V_t\approx-1.2$ V with it ($-1.16$ V in the simple box model, $-1.25$ V when the depletion layer extends into the well). The $p$-type implant makes the threshold less negative because it reduces the net donor charge under the gate. Treating the implant instead as a thin acceptor sheet of dose $(0.9\times10^{16}\ \mathrm{cm^{-3}})(0.3\ \mu\mathrm m)=2.7\times10^{11}\ \mathrm{cm^{-2}}$ gives a shift of $+0.50$ V, i.e. $V_t\approx-1.04$ V.
