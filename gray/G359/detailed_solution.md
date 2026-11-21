# Detailed solution - G359

The output node is driven by white noise currents into an impedance of $R_{eq}=r_d\parallel R$ shunted by $C$, which is a single-pole low-pass response. Compute the low-frequency density and the pole, convert the pole frequency to the equivalent noise bandwidth of a one-pole response, and multiply.

### Step 1 — Low-frequency noise density

As in the circuit without the capacitor, $I_D=(10-0.7)\ \mathrm V/20\ \mathrm{k\Omega}=0.465$ mA and $r_d=(26\ \mathrm{mV})/I_D=55.9\ \Omega$, so $R_{eq}=r_d\parallel20\ \mathrm{k\Omega}=55.8\ \Omega$. The diode shot noise and the resistor thermal noise are uncorrelated currents into this node:

$$
S_0=\left(2qI_D+\frac{4kT}{R}\right)R_{eq}^2=(1.496\times10^{-22}\ \mathrm{A^2/Hz})(55.8\ \Omega)^2=4.65\times10^{-19}\ \mathrm{V^2/Hz}.
$$

### Step 2 — Frequency response and pole

With the capacitor across the diode, the node impedance is $R_{eq}/(1+j\omega R_{eq}C)$, so the output density is

$$
S_o(f)=\frac{S_0}{1+(f/f_1)^2},\qquad
f_1=\frac{1}{2\pi R_{eq}C}=\frac{1}{2\pi(55.8\ \Omega)(100\ \mathrm{pF})}=28.5\ \mathrm{MHz}.
$$

The pole is set by the small diode resistance, not by the 20-kΩ resistor, because the two are in parallel.

### Step 3 — Noise bandwidth

The noise bandwidth $f_N$ is the width of a brick-wall filter with the same peak density that passes the same total noise:

$$
f_N=\frac{1}{S_0}\int_0^\infty S_o(f)\,df=\int_0^\infty\frac{df}{1+(f/f_1)^2}=f_1\left[\tan^{-1}\frac{f}{f_1}\right]_0^\infty=\frac{\pi}{2}f_1 .
$$

$$
f_N=\frac{\pi}{2}(28.5\ \mathrm{MHz})=44.8\ \mathrm{MHz}.
$$

### Step 4 — Total output noise

$$
\overline{v_o^2}=S_0f_N=(4.65\times10^{-19}\ \mathrm{V^2/Hz})(4.48\times10^{7}\ \mathrm{Hz})=2.09\times10^{-11}\ \mathrm{V^2},\qquad
v_{o,\mathrm{rms}}=4.57\ \mu\mathrm V .
$$

Check: with $R$ neglected, $f_N=1/(4r_dC)$ and $S_0f_N=2qI_Dr_d^2/(4r_dC)=2kTr_d/(4r_dC)=kT/2C$, because the diode shot noise equals half the thermal noise of a resistor $r_d$. Numerically $kT/2C=(1.66\times10^{-20}\ \mathrm{V\cdot C})/(8\times100\ \mathrm{pF})=2.07\times10^{-11}$ V², in agreement. The total is independent of the bias current: more current lowers $r_d$ and the density but widens the bandwidth in proportion.
