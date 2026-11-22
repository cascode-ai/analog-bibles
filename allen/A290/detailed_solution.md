# Detailed solution - A290

The gain of the cascoded stage is $g_{m1}R_{out}$, where the mirror delivers the full $g_{m1}v_{in}$ to the output node and $R_{out}$ is the n-channel cascode in parallel with the p-channel cascode. Changing only $W_1$ and $W_2$ at constant current changes $g_{m1}$ but not $R_{out}$, so the required $g_{m1}$ follows directly; the load capacitance then follows from $GB=g_{m1}/C$. All devices are saturated; $g_m=\sqrt{2K'(W/L)I_D}$ and $r_{ds}=1/(\lambda I_D)$.

### Step 1 — Output resistance

$r_{ds2}$ depends only on the current, and MC2, MC4 and M4 are unchanged, so $R_{out}$ is the same before and after resizing. With all devices 10/1 at 50 µA:

$$
g_{mC2}=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(50\ \mu\mathrm A)}=331.7\ \mu\mathrm S,\qquad
g_{mC4}=\sqrt{2(50\ \mu\mathrm{A/V^2})(10)(50\ \mu\mathrm A)}=223.6\ \mu\mathrm S,
$$
$$
r_{dsN}=\frac1{(0.04\ \mathrm{V^{-1}})(50\ \mu\mathrm A)}=0.5\ \mathrm{M\Omega},\qquad r_{dsP}=\frac1{(0.05\ \mathrm{V^{-1}})(50\ \mu\mathrm A)}=0.4\ \mathrm{M\Omega},
$$
$$
R_{out}\approx(g_{mC2}r_{dsC2}r_{ds2})\parallel(g_{mC4}r_{dsC4}r_{ds4})=(82.9\ \mathrm{M\Omega})\parallel(35.8\ \mathrm{M\Omega})=25.0\ \mathrm{M\Omega}.
$$

The original gain is $(331.7\ \mu\mathrm S)(25.0\ \mathrm{M\Omega})=8.3\times10^3$.

### Step 2 — New input-device width

$$
g_{m1}=\frac{A_v}{R_{out}}=\frac{10^4}{25.0\ \mathrm{M\Omega}}=400\ \mu\mathrm S,\qquad
\left(\frac WL\right)_1=\frac{g_{m1}^2}{2K'_NI_D}=\frac{(400\ \mu\mathrm S)^2}{2(110\ \mu\mathrm{A/V^2})(50\ \mu\mathrm A)}=14.5 .
$$

So $W_1=W_2\approx14.5$ µm with $L=1$ µm. Since $g_{m1}\propto\sqrt{W_1}$, a 20 % gain increase needs a 45 % wider input pair.

### Step 3 — Load capacitance for $GB=10$ MHz

The output node is the only high-impedance node, so the unity-gain frequency is $g_{m1}/C$:

$$
C=\frac{g_{m1}}{2\pi(10\ \mathrm{MHz})}=\frac{400\ \mu\mathrm S}{6.283\times10^7\ \mathrm{s^{-1}}}=6.37\ \mathrm{pF}.
$$
