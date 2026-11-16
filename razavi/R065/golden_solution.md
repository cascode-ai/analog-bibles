# Golden Solution - R065

## Reference answer

$A_v = -g_{m1}(r_{O1}\|r_{O2}) \approx -48.8$.

- $g_{m1} = \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = 3.66$ mS.
- $\lambda_1 = 0.1\ \mathrm{V^{-1}}$; $\lambda_2 = 0.2 \times 0.5/2 = 0.05\ \mathrm{V^{-1}}$.
- $r_{O1} = 1/(0.1 \times 0.5\ \mathrm{mA}) = 20$ kΩ, $r_{O2} = 1/(0.05 \times 0.5\ \mathrm{mA}) = 40$ kΩ, $r_{O1}\|r_{O2} = 13.3$ kΩ.
- $A_v = -3.66\ \mathrm{mS} \times 13.3\ \mathrm{k\Omega} \approx -48.8$.

## Grading notes

+2: −48.8 within ±3%, with $\lambda_2$ scaled to 0.05 V⁻¹. +1: correct method with one arithmetic slip. 0: correct expression $-g_{m1}(r_{O1}\|r_{O2})$ but several slips. -2 (asserted as fact): λ of $M_2$ not scaled with its 2-μm length (giving about −24.4), $g_m$ of the PMOS used instead of $g_{m1}$, only one $r_O$ used, or a positive gain.
