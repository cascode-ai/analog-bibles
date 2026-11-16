# Golden Solution - G060

## Reference answer

$R_i = \dfrac{r_o + R_D}{1 + g_m r_o}$: about 505 Ω for $R_D = 10$ kΩ and about 1.0 kΩ (999.5 Ω) for $R_D = 1$ MΩ.

- $g_m = \sqrt{2\mu_n C_{ox}(W/L) I_D} = \sqrt{2 (200\ \mu)(100)(100\ \mu)} = 2$ mA/V; $r_o = 1/(\lambda I_D) = 1/(0.01 \times 100\ \mu\mathrm{A}) = 1\ \mathrm{M\Omega}$; $g_m r_o = 2000$.
- Input resistance at the source with the gate grounded (no body effect): KCL gives $i_i = g_m v_i + (v_i - v_o)/r_o$ with $v_o = i_i R_D$, so $R_i = (r_o + R_D)/(1 + g_m r_o)$.
- $R_D = 10$ kΩ: $(1\ \mathrm{M} + 10\ \mathrm{k})/2001 = 504.7\ \Omega$ (close to $1/g_m = 500\ \Omega$).
- $R_D = 1$ MΩ (the parallel ideal current source adds nothing to the small-signal load): $(1\ \mathrm{M} + 1\ \mathrm{M})/2001 = 999.5\ \Omega$, about twice $1/g_m$, because the drain load is now comparable to $r_o$.

## Grading notes

+2: both values within ±3% (≈ 505 Ω and ≈ 1.0 kΩ), with the formula $(r_o + R_D)/(1 + g_m r_o)$ or an equivalent derivation. +1: first value given as $1/g_m = 500$ Ω with the second correct, or a small arithmetic slip. 0: first value right but the second given as ≈ 500 Ω (drain-load effect missed). −2 (asserted as fact): $R_i$ computed as $1/g_m$ for both cases while claiming $R_D$ has no effect, $R_i = r_o$, $R_i = 1/(g_m + g_{mb})$ with an invented $g_{mb}$, or $g_m$ off by a formula error (e.g. 1 mA/V or 4 mA/V).
