# Golden Solution - A127

## Reference answer

$e_{eq} \approx 7.4$ nV/√Hz with all three transistors counted. M1 and M2 alone give 6.3 nV/√Hz.

- $g_{m1} = \sqrt{2 \cdot 110\ \mu \cdot 10 \cdot 100\ \mu} = 469\ \mu$S and $g_{m2} = g_{m3} = \sqrt{2 \cdot 50\ \mu \cdot 10 \cdot 100\ \mu} = 316\ \mu$S.
- Gate-referred densities $e_{ni}^2 = 8kT/(3g_{mi})$: $e_{n1}^2 = 2.35\times10^{-17}$ V²/Hz and $e_{n2}^2 = e_{n3}^2 = 3.49\times10^{-17}$ V²/Hz.
- M2's noise reaches the output with transconductance $g_{m2}$. M3's noise current flows into its own diode impedance $1/g_{m3}$, producing $e_{n3}$ at the M2/M3 gates, which M2 converts with $g_{m2}$. So M3 adds as much as M2.
- $e_{eq}^2 = e_{n1}^2 + (g_{m2}/g_{m1})^2(e_{n2}^2 + e_{n3}^2) = 2.35\times10^{-17} + 0.4545 \cdot 6.98\times10^{-17} = 5.53\times10^{-17}$ V²/Hz, so $e_{eq} = 7.43$ nV/√Hz.
- Neglecting M3, i.e. treating M2's gate as a noiseless bias: $e_{eq} = \sqrt{2.35\times10^{-17} + 0.4545 \cdot 3.49\times10^{-17}} = 6.28$ nV/√Hz.

## Grading notes

+2: ≈ 7.4 nV/√Hz (7.2–7.6) with M1, M2 and M3 included and the $(g_{m2}/g_{m1})^2$ weighting. +1: 6.2–6.4 nV/√Hz when the answer explicitly states that M3's noise is neglected (treated as an ideal bias), or a small arithmetic slip in the full result. 0: 6.28 nV/√Hz with M3 silently ignored, or the right method with a wrong $g_m$. −2 (asserted as fact): load noise referred with $(g_{m1}/g_{m2})^2$ (inverted), noise powers added without the transconductance weighting, the result given in V² without the square root and called a voltage, or the 100 µA source blamed for noise it is stated not to have.
