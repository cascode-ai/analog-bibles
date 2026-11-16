# Golden Solution - G044

## Reference answer

$g_m \approx 308\ \mu$A/V, $g_{mb} \approx 11\ \mu$A/V, $r_o \approx 2.05$ MΩ, $C_{gs} \approx 27$ fF, $C_{gd} \approx 3.5$ fF, $C_{sb} \approx 11$ fF, $C_{db} \approx 8.3$ fF.

- $L_{\text{eff}} = 1 - 2(0.09) = 0.82\ \mu$m, $W/L = 12.2$.
- $g_m = \sqrt{2k'(W/L)I_D} = \sqrt{2(194\ \mu)(12.2)(20\ \mu)} = 308\ \mu$A/V ($V_{ov} = 0.13$ V; ≈ 315 μA/V if the $(1+\lambda V_{DS})$ factor is kept).
- $g_{mb} = g_m\gamma/(2\sqrt{2\phi_f + V_{SB}}) = 308\times0.094/(2\times1.289) = 11.2\ \mu$A/V ($\chi = 0.036$).
- $\lambda = 0.02/0.82 = 0.0244\ \mathrm{V^{-1}}$; $r_o = 1/(\lambda I_D) = 2.05$ MΩ (2.15 MΩ with $(1+\lambda V_{DS})/(\lambda I_D)$).
- $C_{gs} = \tfrac23WL_{\text{eff}}C_{ox} + WC_{ol} = \tfrac23(10)(0.82)(4.32) + 3.5 = 23.6 + 3.5 = 27.1$ fF; $C_{gd} = WC_{ol} = 3.5$ fF.
- Junctions: bottom area 10 μm² → 2.0 fF at zero bias; periphery bordering the field oxide $10 + 1 + 1 = 12$ μm → 14.4 fF (the gate edge is not counted). $C_{sb}$ ($V_{SB} = 1$ V): $2.0/\sqrt{1+1/0.7} + 14.4/(1+1/0.7)^{0.4} = 1.28 + 10.1 = 11.4$ fF. $C_{db}$ ($V_{DB} = 3$ V): $2.0/\sqrt{1+3/0.7} + 14.4/(1+3/0.7)^{0.4} = 0.87 + 7.4 = 8.3$ fF. (With the full 22-μm perimeter: 19.8 fF and 14.4 fF.) The channel-to-substrate depletion capacitance (≈ 1 fF) is neglected.

## Grading notes

Seven quantities. +2: all within ±10% of the reference, with either perimeter convention for $C_{sb}$, $C_{db}$ (12 μm excluding the gate edge, or the full 22 μm: 19.8 fF and 14.4 fF) and either $(1+\lambda V_{DS})$ convention. +1: five or six of seven right (e.g. junction capacitances left at zero bias, giving 16.4 fF for both; the overlap term omitted from $C_{gs}$; or $dX_d/dV_{DS}$ = 0.02 taken directly as λ in V⁻¹, giving 2.5 MΩ — each counts as one wrong quantity). 0: about half right (e.g. $g_m$, $r_o$, $C_{gs}$, $C_{gd}$ right but body effect and junctions wrong). −2 (asserted as fact): $C_{gs}$ using the full $WLC_{ox}$ in saturation with $C_{gd}$ also containing channel charge, $g_{mb}$ larger than $g_m$, $r_o$ off by more than 2× from a wrong λ, or capacitances off by 10× from a unit error.
