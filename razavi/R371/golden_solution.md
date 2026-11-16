# Golden Solution - R371

## Reference answer

$(W/L)_2 \approx 6.0$ ($g_{m2} = 0.4$ mS, $V_{ov2} = 0.5$ V); output range 0.5 V ≤ $V_{out}$ ≤ 2.28 V, i.e. a maximum swing of ≈ 1.78 V.

- Input-referred noise: $4kT\gamma(1/g_{m1} + g_{m2}/g_{m1}^2)$; the rms ratio is $\sqrt{g_{m2}/g_{m1}} = 1/5$ → $g_{m2} = g_{m1}/25 = 0.4$ mS.
- $(W/L)_2 = g_{m2}^2/(2\mu_nC_{ox}I_D) = (0.4\ \mathrm{m})^2/(2.68\times10^{-8}) = 5.97$; $V_{ov2} = 2I_D/g_{m2} = 0.5$ V.
- Lowest output: $M_2$ at the edge of saturation, $V_{out} = V_{ov2} = 0.5$ V. Highest output: input at $V_{DD}$, $V_{out} = V_{DD} - V_{TH} - V_{ov1} = 3 - 0.7 - 0.02 = 2.28$ V ($M_1$ remains saturated since its drain is at $V_{DD}$). Swing ≈ 1.78 V.
- (If the body effect of $M_1$ is included with its bulk at ground, $V_{TH1}$ rises to ≈ 1.03 V at the top and the swing shrinks to ≈ 1.45 V.)

## Grading notes

+2: $g_{m2} = g_{m1}/25 = 0.4$ mS, $(W/L)_2 \approx 6$ (±5%), and the swing from $V_{ov2} = 0.5$ V to $V_{DD} - V_{GS1} \approx 2.28$ V (≈ 1.78 V); a body-effect-corrected top (≈ 1.95 V, swing ≈ 1.45 V) is also accepted when stated. +1: correct $(W/L)_2$ and swing limits with a small slip, or the upper limit taken as $V_{DD} - V_{ov1}$ with a stated assumption that the input may exceed $V_{DD}$. 0: correct $(W/L)_2$ but the swing missing or wrong. -2 (asserted as fact): ratio applied to noise power ($g_{m2} = g_{m1}/5$), the $M_2$ term written as $4kT\gamma/g_{m2}$, or a lower output limit of 0 V.
