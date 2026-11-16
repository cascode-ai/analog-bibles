# Golden Solution - R414

## Reference answer

$A_v = -(g_{m1}+g_{m2})(r_{O1}\|r_{O2}) \approx -19.6$ and $R_{out} = r_{O1}\|r_{O2} \approx 1.82\ \mathrm{k\Omega}$ (bias from the square law without λ). If λ is kept in the bias, the result depends on how consistently it is used: exact derivatives give ≈ −24.1 and 1.82 kΩ, while the shortcut $g_o = \lambda I_D$ gives −19.1 and 1.44 kΩ.

- Bias: $V_{in} = V_{out} = V_M$ with both devices saturated: $\tfrac12(134\ \mu)(100)(V_M - 0.7)^2 = \tfrac12(38.4\ \mu)(100)(2.2 - V_M)^2$ → $1.868(V_M - 0.7) = 2.2 - V_M$ → $V_M = 1.223$ V, $I_D = 1.83$ mA.
- $g_{m1} = 2I_D/0.523\ \mathrm{V} = 7.01$ mS, $g_{m2} = 2I_D/0.977\ \mathrm{V} = 3.75$ mS; $r_{O1} = 1/(0.1 \times 1.83\ \mathrm{mA}) = 5.46\ \mathrm{k\Omega}$, $r_{O2} = 2.73\ \mathrm{k\Omega}$, $r_{O1}\|r_{O2} = 1.82\ \mathrm{k\Omega}$.
- Both gates are driven by $V_{in}$: $A_v = -10.76\ \mathrm{mS} \times 1.82\ \mathrm{k\Omega} = -19.6$.
- (With λ in the bias: $V_M = 1.254$ V, $I_D = 2.32$ mA. Consistent derivatives, $g_m = 2I_D/V_{ov}$ (8.36 and 4.90 mS) and $g_o = \lambda I_D/(1 + \lambda V_{DS})$, give $A_v = -24.1$ and $R_{out} = 1.82\ \mathrm{k\Omega}$; the shortcut $g_o = \lambda I_D$ gives $A_v = -19.1$ and $R_{out} = 1.44\ \mathrm{k\Omega}$.)

## Grading notes

+2: $V_M \approx 1.22$–1.25 V, gain ≈ −19 to −20 (±5%) and $R_{out}$ ≈ 1.4–1.85 kΩ, consistent with the bias model used; if λ is kept in the bias and $g_o = \lambda I_D/(1 + \lambda V_{DS})$ is used consistently, a gain ≈ −24 (±5%) with $R_{out}$ ≈ 1.82 kΩ is also +2. +1: gain right with $R_{out}$ wrong by a slip, or a small bias error propagating up to ±10%. 0: correct formulas but a wrong bias point (e.g. $V_M$ = 1.5 V assumed). -2 (asserted as fact): gain $-g_{m1}(r_{O1}\|r_{O2})$ only (M2 treated as a passive load), a positive gain, or $R_{out} = r_{O1} + r_{O2}$.
