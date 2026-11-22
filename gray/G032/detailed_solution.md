# Detailed solution - G032

The junction lies where the diffused donor concentration falls to the background acceptor concentration. The $n$ layer above it is non-uniformly doped, so its sheet resistance follows from integrating the conductivity over depth, which amounts to counting the net donors per unit area.

### Step 1 — Junction depth

The donor profile is $N_D(x)=N_0e^{-x/\ell}$ with $N_0=10^{17}\ \mathrm{cm^{-3}}$ and $\ell=0.5\ \mu$m. The metallurgical junction is where the net doping changes sign, $N_D(x_j)=N_A=10^{15}\ \mathrm{cm^{-3}}$:

$$
x_j=\ell\ln\frac{N_0}{N_A}=(0.5\ \mu\mathrm m)\ln100=2.30\ \mu\mathrm m .
$$

### Step 2 — Sheet resistance of a non-uniform layer

A thin slice $dx$ at depth $x$ has sheet conductance $q\mu_nn(x)\,dx$, and the slices conduct in parallel. With the depletion width neglected and $n(x)=N_D(x)-N_A$ in the $n$ region,

$$
\frac1{R_\square}=q\mu_n\int_0^{x_j}\left[N_D(x)-N_A\right]dx .
$$

The integral is the net donor dose:

$$
\int_0^{x_j}\left[N_D-N_A\right]dx=N_0\ell\left(1-\frac{N_A}{N_0}\right)-N_Ax_j
=(10^{17})(0.5\times10^{-4})(0.99)-(10^{15})(2.30\times10^{-4})=4.72\times10^{12}\ \mathrm{cm^{-2}}.
$$

### Step 3 — Numerical value

$$
R_\square=\frac1{(1.6\times10^{-19}\ \mathrm C)(800\ \mathrm{cm^2/V\,s})(4.72\times10^{12}\ \mathrm{cm^{-2}})}=1.66\ \mathrm{k\Omega}/\square .
$$

Ignoring the background acceptors (dose $N_0\ell(0.99)=4.95\times10^{12}\ \mathrm{cm^{-2}}$) gives 1.58 kΩ/□, and integrating the donor profile to infinity gives 1.56 kΩ/□; the compensation by the background doping changes the result by only about 5%.

Results: $x_j=2.3\ \mu$m and $R_\square\approx1.66$ kΩ/□.
