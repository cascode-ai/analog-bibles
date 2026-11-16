# Golden Solution - R370

## Reference answer

$(W/L)_1 \approx 3.7\times10^3$ (e.g., W ≈ 1.87 mm for L = 0.5 μm).

- Output resistance $\approx 1/g_{m1} = 100$ Ω → $g_{m1} = 10$ mS.
- $(W/L)_1 = \dfrac{g_{m1}^2}{2\mu_nC_{ox}I_D} = \dfrac{(10^{-2})^2}{2(134\times10^{-6})(10^{-4})} = 3731$.
- The overdrive is only $2I_D/g_{m1} = 20$ mV, so in reality the device would be near subthreshold and the square-law estimate is optimistic; with body effect ($R_{out} = 1/(g_{m1}+g_{mb1})$) a somewhat smaller W/L would suffice.

## Grading notes

+2: $g_{m1} = 10$ mS and $(W/L)_1 \approx 3730$ (±5%). Mentioning the 20-mV overdrive/subthreshold issue is a plus. +1: correct method with a small numerical slip, or body effect included with an explicitly assumed $V_{SB}$ giving a consistent, somewhat smaller W/L. 0: correct $g_{m1}$ but W/L not computed or wrong by a factor of 2 through a formula slip. -2 (asserted as fact): output resistance taken as $r_O$ or $1/(g_mr_O)$, $g_m = \mu_nC_{ox}(W/L)V_{ov}$ with an invented overdrive, or a W/L off by orders of magnitude.
