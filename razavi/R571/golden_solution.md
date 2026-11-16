# Golden Solution - R571

## Reference answer

≈ 0.73 ns after $t_0$ (≈ 49 ps in saturation plus ≈ 684 ps in the triode region).

- $\beta = \mu_nC_{ox}W/L = 134\ \mu\mathrm{A/V^2} \times 40 = 5.36$ mA/V², $V_{DD} - V_{TH} = 2.3$ V. The source is the grounded input terminal, so $V_{SB} = 0$ (no body effect).
- Saturation ($V_{out}$ from 3 V to 2.3 V): constant current $\tfrac12\beta(2.3)^2 = 14.2$ mA, so $t_1 = 2V_{TH}C_H/[\beta(V_{DD} - V_{TH})^2] = 0.7\ \mathrm{V} \times 1\ \mathrm{pF}/14.2\ \mathrm{mA} = 49.4$ ps.
- Triode: $C_H\,dV_{out}/dt = -\beta[(V_{DD} - V_{TH})V_{out} - V_{out}^2/2]$. The solution is $V_{out} = \dfrac{2(V_{DD} - V_{TH})e^{-u}}{1 + e^{-u}}$ with $u = \beta(V_{DD} - V_{TH})(t - t_1)/C_H$ and $C_H/[\beta(V_{DD} - V_{TH})] = 81.1$ ps.
- At $V_{out} = 1$ mV: $e^{-u} = 0.001/(4.6 - 0.001)$, so $u = 8.43$ and $t - t_1 = 684$ ps.
- Total: 49 + 684 ≈ 733 ps (a direct numerical integration gives the same).

## Grading notes

+2: 0.70–0.77 ns, with the saturation interval (≈ 49 ps) and the triode-region solution. +1: the triode interval right but the saturation interval omitted or mishandled (≈ 0.68 ns). 0: correct setup with an arithmetic slip, or only a single-RC estimate (≈ 0.65 ns) offered for this square-law question. -2 (asserted as fact): a time more than 30% off through a formula error (½ missing, $V_{DD}$ used in place of $V_{DD} - V_{TH}$, body effect invented for a grounded source), or $M_1$ treated as saturated throughout.
