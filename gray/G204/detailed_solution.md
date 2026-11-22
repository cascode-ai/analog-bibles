# Detailed solution - G204

Treat the Darlington pair as one composite transistor: find its input resistance seen at the base of $Q_1$, then the base current it draws from the source, and multiply by the composite current gain to get the output current in $R_L$. Both collectors feed the output, so both collector currents count.

### Step 1 — Small-signal parameters

$$
g_{m1}=\frac{10\ \mu\mathrm A}{26\ \mathrm{mV}}=0.385\ \mathrm{mA/V},\quad r_{\pi1}=\frac{\beta}{g_{m1}}=260\ \mathrm{k\Omega};\qquad
g_{m2}=\frac{1\ \mathrm{mA}}{26\ \mathrm{mV}}=38.5\ \mathrm{mA/V},\quad r_{\pi2}=2.6\ \mathrm{k\Omega}.
$$

### Step 2 — Input resistance and base current

The emitter current of $Q_1$, $(\beta+1)i_{b1}$, is the base current of $Q_2$ and flows through $r_{\pi2}$, so $r_{\pi2}$ is reflected to the input multiplied by $\beta+1$:

$$
R_i=r_{\pi1}+(\beta+1)r_{\pi2}=260\ \mathrm{k\Omega}+101(2.6\ \mathrm{k\Omega})=522.6\ \mathrm{k\Omega},
\qquad
i_{b1}=\frac{v_i}{R_S+R_i}=\frac{v_i}{622.6\ \mathrm{k\Omega}}.
$$

### Step 3 — Output current and gain

With $i_{b2}=(\beta+1)i_{b1}$, the total collector current into the output node is

$$
i_{c1}+i_{c2}=\beta i_{b1}+\beta(\beta+1)i_{b1}=\beta(\beta+2)\,i_{b1}=10\,200\,i_{b1}.
$$

This current flows through $R_L$, so $v_o=-\beta(\beta+2)R_Li_{b1}$ and

$$
\frac{v_o}{v_i}=-\frac{\beta(\beta+2)R_L}{R_S+r_{\pi1}+(\beta+1)r_{\pi2}}
=-\frac{(10\,200)(3\ \mathrm{k\Omega})}{622.6\ \mathrm{k\Omega}}=-49.1 .
$$

Only about 84 % of $v_i$ reaches the composite base-emitter path, because $R_S=100$ kΩ is not negligible against $R_i$; with $R_S=0$ the gain would be $-58.6$.
