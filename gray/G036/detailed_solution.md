# Detailed solution - G036

The current gain of a lateral $pnp$ transistor starts to fall when the hole density injected into the lightly doped $n$-type base becomes comparable to the base doping (high-level injection): the base then carries extra majority electrons, emitter efficiency drops, and the collector current grows only as $e^{V_{BE}/2V_T}$. Find the epi doping, the effective injecting area, and the current at which the injected hole density reaches $N_D$.

### Step 1 — Epi doping

For $n$-type silicon $\rho=1/(q\mu_nN_D)$. At 0.5 Ω·cm the doping is about $10^{16}\ \mathrm{cm^{-3}}$, where $\mu_n\approx1250\ \mathrm{cm^2/V\,s}$:

$$
N_D=\frac1{(1.6\times10^{-19}\ \mathrm C)(1250\ \mathrm{cm^2/V\,s})(0.5\ \Omega\,\mathrm{cm})}=1.0\times10^{16}\ \mathrm{cm^{-3}},
$$

consistent with standard resistivity–doping data.

### Step 2 — Hole current at the onset of high-level injection

In the base, holes diffuse with a linear profile from $p_n(0)$ at the emitter edge to about zero at the collector edge, so the collector current density is

$$
J_p=\frac{qD_pp_n(0)}{W_B}.
$$

High-level injection begins when $p_n(0)\approx N_D$, so

$$
I_C=\frac{qAN_DD_p}{W_B},
$$

where $A$ is the emitter area that injects holes toward the collector.

### Step 3 — Effective emitter area

In a lateral $pnp$ transistor only holes injected sideways from the emitter sidewall reach the surrounding collector ring; holes injected from the bottom go toward the buried layer and are mostly lost. Treat the sidewall as a quarter-cylinder of radius equal to the 3-µm junction depth around the 4 × 30 µm perimeter:

$$
A=(3\ \mu\mathrm m)(4\times30\ \mu\mathrm m)\frac\pi2=565\ \mu\mathrm m^2=5.65\times10^{-6}\ \mathrm{cm^2}.
$$

### Step 4 — Current at which the gain begins to fall

$$
I_C=\frac{(1.6\times10^{-19}\ \mathrm C)(5.65\times10^{-6}\ \mathrm{cm^2})(10^{16}\ \mathrm{cm^{-3}})(10\ \mathrm{cm^2/s})}{8\times10^{-4}\ \mathrm{cm}}=1.13\times10^{-4}\ \mathrm A\approx0.11\ \mathrm{mA}.
$$

Treating the sidewall as vertical ($A=360\ \mu$m²) gives 72 µA. The gain starts falling at roughly 0.1 mA; this is ten times higher than for a 5 Ω·cm ($10^{15}\ \mathrm{cm^{-3}}$) epi, because the onset current is proportional to the base doping.
