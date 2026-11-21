# Detailed solution - G030

The resistivity of an extrinsic sample is set by the majority carriers, $\rho=1/(q\mu N)$, but the mobility itself falls with doping because of ionized-impurity scattering. Solve for $N$ iteratively: guess a doping, read the mobility at that doping, recompute $N$, and repeat until the two agree.

### Step 1 — Resistivity of a doped sample

At room temperature all dopants are ionized and the minority-carrier density is negligible, so for $p$-type silicon $p\approx N_A$ and

$$
\rho=\frac1{q\mu_pN_A}\quad\Rightarrow\quad N_A=\frac1{q\mu_p\rho},
$$

and likewise $N_D=1/(q\mu_n\rho)$ for $n$-type.

### Step 2 — $p$-type silicon

Start with the low-doping hole mobility, $\mu_p\approx480\ \mathrm{cm^2/V\,s}$: $N_A=1/[(1.6\times10^{-19}\ \mathrm C)(480\ \mathrm{cm^2/V\,s})(1\ \Omega\,\mathrm{cm})]=1.3\times10^{16}\ \mathrm{cm^{-3}}$. At this doping the hole mobility from the standard mobility–doping data is about 410 cm²/V·s, so

$$
N_A=\frac1{(1.6\times10^{-19}\ \mathrm C)(410\ \mathrm{cm^2/V\,s})(1\ \Omega\,\mathrm{cm})}=1.5\times10^{16}\ \mathrm{cm^{-3}},
$$

at which the mobility is still about 400–420 cm²/V·s, so the iteration has converged.

### Step 3 — $n$-type silicon

With the low-doping electron mobility $\mu_n\approx1350\ \mathrm{cm^2/V\,s}$, the first estimate is $N_D=4.6\times10^{15}\ \mathrm{cm^{-3}}$. At this doping $\mu_n\approx1250$–1300 cm²/V·s, giving

$$
N_D=\frac1{(1.6\times10^{-19}\ \mathrm C)(1280\ \mathrm{cm^2/V\,s})(1\ \Omega\,\mathrm{cm})}=4.9\times10^{15}\ \mathrm{cm^{-3}}\approx5\times10^{15}\ \mathrm{cm^{-3}}.
$$

These agree with Irvin's resistivity–doping curves for silicon, which give about $1.5\times10^{16}$ and $(4.6$–$5)\times10^{15}\ \mathrm{cm^{-3}}$ at 1 Ω·cm. An empirical mobility fit (Caughey–Thomas form) gives $1.7\times10^{16}$ and $5.3\times10^{15}\ \mathrm{cm^{-3}}$, within the spread of the data.

### Step 4 — Comparison

$p$-type: $N_A\approx1.5\times10^{16}\ \mathrm{cm^{-3}}$; $n$-type: $N_D\approx5\times10^{15}\ \mathrm{cm^{-3}}$. The $n$-type sample needs only about one third of the doping because electrons are about three times as mobile as holes.
