# Golden Solution - R703

## Reference answer

Both double (with the resistivity of the heavily doped gate polysilicon unchanged, the usual ideal-scaling convention for conductors).

- In general $R'_\square/R_\square = R'_G/R_G = 2\rho'/\rho$: ideal scaling shrinks all lateral and vertical dimensions by 2, including the thickness $t$ of the gate poly, so $R_\square = \rho/t$ doubles when $\rho$ is fixed.
- The gate resistance along the width is $R_\square$ times the number of squares $W/L$. After scaling, $W/L = 50\ \mu\mathrm{m}/0.25\ \mu\mathrm{m}$ is still 200 squares, so the gate resistance doubles: from $200R_\square$ to $200(2R_\square)$ end to end (the distributed effective value $R_\square W/(3L)$ also doubles).
- Why $\rho$ is held fixed: the constant-field rule "doping × 2" is applied to the substrate/well doping to scale depletion widths; gate poly is already degenerately doped near solid solubility, and conductor resistivities are kept constant in Dennard's scaling (which is why interconnect and gate resistance worsen with scaling). If one nevertheless doubles the poly doping with constant mobility, $\rho$ halves and both quantities stay unchanged; that is a non-standard reading.
- Consequence: since $g_m$ is unchanged by ideal scaling, the product $R_Gg_m$ doubles and gate-resistance noise worsens; $R_GC_G$ stays constant ($C_G$ halves) instead of halving like the intrinsic delays, so the gate RC becomes relatively worse. More fingers or silicided gates are needed to compensate.

## Grading notes

+2: sheet resistance ×2 (poly thickness halves, resistivity fixed) and total gate resistance ×2 (W/L, i.e. the number of squares, unchanged). Also +2 when the answer gives this as its conclusion and adds the doubled-poly-doping case (both unchanged) as a side alternative.
+1: both conclusions right with an incomplete justification (e.g., the thickness argument missing); or the doubled-poly-doping reading (both unchanged) taken as the main conclusion with an explicit assumption, but the constant-resistivity case also worked out correctly (both ×2) as the alternative.
0: an explicitly reasoned conclusion that both stay unchanged because the poly doping is raised by 2 along with the other doping levels, without the constant-resistivity case; or only one of the two quantities answered correctly.
-2 (asserted as fact): gate resistance halved or quartered (e.g., W halved with L forgotten), or the sheet resistance claimed unchanged or decreased while the poly resistivity is taken as constant.
