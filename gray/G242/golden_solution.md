# Golden Solution - G242

## Reference answer

$g_{m3} = 2|I_{D3}|/|V_{ov3}| = 2(100\ \mu\mathrm{A})/0.2\ \mathrm{V} = 1$ mA/V.

Pole: $p = -g_{m3}/C_x = -10^{-3}/10^{-13} = -1.0\times10^{10}$ rad/s ($|f_p| = 1.59$ GHz). Zero: $z = -2g_{m3}/C_x = -2.0\times10^{10}$ rad/s ($|f_z| = 3.18$ GHz). Both in the left half plane; $G_m$ falls from $g_{m1}$ to $g_{m1}/2$ between them, with at most ≈ 19.5° of phase lag.

Derivation: node X is driven by $i_{d1}$ through $(1/g_{m3})\|C_x$, and $M_4$ copies $v_X$: $G_m(s) = g_{m1}\dfrac{1 + sC_x/(2g_{m3})}{1 + sC_x/g_{m3}}$.

## Grading notes

+2: $g_{m3} = 1$ mA/V, pole $-1\times10^{10}$ rad/s (1.6 GHz) and zero $-2\times10^{10}$ rad/s (3.2 GHz). +1: correct values with a rad/s–Hz slip in one of them, or signs omitted but left-half-plane location stated. 0: pole correct, zero missing or wrong by a slip. −2 (asserted as fact): right-half-plane zero, zero at the same frequency as the pole or at $g_{m3}/(2C_x)$, or $g_{m3}$ from a wrong formula (e.g., $|I_D|/|V_{ov}|$) giving values off by 2× stated as fact.
