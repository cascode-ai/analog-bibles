# Golden Solution - R642

## Reference answer

$(W/L)_{3,4} \approx 6.25$ (e.g., W ≈ 3.1 µm for L = 0.5 µm).

Derivation:
- $g_{m3,4} = 0.5/R = 0.5/546\ \Omega = 0.915$ mS at $I_D = 0.5$ mA.
- $W/L = g_m^2/(2\mu_nC_{ox}I_D) = (0.915\times10^{-3})^2/(2 \times 134\times10^{-6} \times 0.5\times10^{-3}) = 6.25$.
- Check: at the same current, a quarter of $g_{m1,2}$ (which gives $g_{m1,2}R = 2$) needs 1/16 of the aspect ratio: 100/16 = 6.25.

## Grading notes

+2: 6.25 (±5%). +1: correct method with a numerical slip. 0: correct $g_{m3,4}$ (0.915 mS) without the aspect ratio. -2 (asserted as fact): the full $I_T$ used per device (3.1), $g_m = \mu_nC_{ox}(W/L)I_D$ or another wrong $g_m$ formula, or an assumed overdrive not given in the problem.
