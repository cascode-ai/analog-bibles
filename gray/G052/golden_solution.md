# Golden Solution - G052

## Reference answer

$g_m \approx 0.50$ mA/V, $r_o \approx 64$ kΩ, $C_{gs} \approx 1.2$ fF, $C_{gd} \approx 0.32$ fF.

- $L_{\text{eff}} = 0.2 - 0.02 = 0.18\ \mu$m, $W/L = 5$.
- $g_m = \sqrt{2k'(W/L)I_D} = \sqrt{2(247\ \mu)(5)(100\ \mu)} = 497\ \mu$A/V ($V_{ov} = 0.40$ V < $V_{DS}$, so saturated). Keeping $(1+\lambda V_{DS}) = 1.156$ in the square law gives $V_{ov} = 0.375$ V and $g_m = 2I_D/V_{ov} = 534\ \mu$A/V.
- $\lambda = 0.028/0.18 = 0.156\ \mathrm{V^{-1}}$; $r_o = 1/(\lambda I_D) = L_{\text{eff}}/(I_D\,dX_d/dV_{DS}) = 64$ kΩ (74 kΩ with $(1+\lambda V_{DS})/(\lambda I_D)$).
- $C_{gs} = \tfrac23WL_{\text{eff}}C_{ox} + WC_{ol} = \tfrac23(0.9)(0.18)(8.22) + 0.9(0.36) = 0.89 + 0.32 = 1.21$ fF.
- $C_{gd} = WC_{ol} = 0.32$ fF.

## Grading notes

Four quantities. +2: $g_m$ 470–560 μA/V, $r_o$ 58–78 kΩ, $C_{gs}$ 1.1–1.35 fF (overlap included), $C_{gd}$ 0.30–0.35 fF; using the drawn 0.2 μm as $L_{\text{eff}}$ (471 μA/V, 71 kΩ, 1.31 fF) is acceptable, as is either $(1+\lambda V_{DS})$ convention. +1: three of four (e.g. overlap omitted from $C_{gs}$, giving 0.89 fF, or $C_{gd}$ computed as $WL_dC_{ox}$ = 0.07 fF instead of using the given $C_{ol}$). 0: two of four. −2 (asserted as fact): triode equations used although $V_{DS} > V_{ov}$, $C_{gs} = WLC_{ox}$ with $C_{gd}$ also containing half the channel, $r_o = 1/(\lambda I_D)$ with λ = 0.028 V⁻¹ (357 kΩ), or values off by orders of magnitude from unit errors.
