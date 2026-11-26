# Golden Solution - R043

## Reference answer

$C_{GS} \approx 84.0$ fF, $C_{GD} = 20$ fF, $C_{GB} \approx 0$, $C_{DB} \approx 21.2$ fF, $C_{SB} \approx 42.4$ fF; $f_T \approx 7.9$ GHz.
- $WLC_{ox} = 50 \times 0.5 \times 3.84 = 96.0$ fF; $WC_{ov} = 50 \times 0.4 = 20$ fF.
- Saturation: $C_{GS} = \tfrac23WLC_{ox} + WC_{ov} = 64.0 + 20 = 84.0$ fF; $C_{GD} = WC_{ov} = 20$ fF; $C_{GB}$ neglected (the inversion layer shields the bulk).
- $C_{jsw} = 0.35\times10^{-11}$ F/m = 0.0035 fF/µm (negligible here).
- Drain (one region $W/2 \times E$): $C_{DB} = \tfrac{W}{2}EC_j + 2(\tfrac{W}{2} + E)C_{jsw} = 25 \times 1.5 \times 0.56 + 2(26.5)(0.0035) = 21.0 + 0.19 = 21.2$ fF.
- Sources (two regions $W/2 \times E$): $C_{SB} = WEC_j + 2(W + 2E)C_{jsw} = 42.0 + 0.37 = 42.4$ fF.
- $g_m = \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = 5.18$ mS (overdrive 0.39 V); $f_T = g_m/[2\pi(C_{GS} + C_{GD})] = 5.18\ \mathrm{mS}/(2\pi \times 104.0\ \mathrm{fF}) \approx 7.9$ GHz.

## Grading notes

Score by parts: $C_{GS}$, $C_{GD}$, $C_{DB}$, $C_{SB}$ (and $C_{GB} \approx 0$), $f_T$; tolerance ±5%. +2: all correct (sidewall terms may be dropped as negligible). +1: one capacitance wrong through a slip, or $f_T$ computed with $C_{GS}$ only (≈ 9.8 GHz) while the capacitances are right. 0: about half right, e.g. the folded geometry misapplied to both drain and source (drain given 42 fF). -2 (asserted as fact): a wrong capacitance model that makes most results wrong, e.g. overlap omitted throughout (so $C_{GD} = 0$ and $f_T$ ≈ 13 GHz) or junction capacitances added into $f_T$.
