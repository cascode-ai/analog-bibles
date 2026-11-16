# Golden Solution - A022

## Reference answer

$BV \approx 58$ V (58.2–58.3 V).

The maximum field at the junction is $E_0 = \left[\frac{2qN_AN_D}{\varepsilon_{Si}(N_A+N_D)}\right]^{1/2}(\phi_0 + v_R)^{1/2}$; setting $E_0 = E_{max}$ and neglecting $\phi_0$:
$BV \approx \dfrac{\varepsilon_{Si}(N_A+N_D)}{2qN_AN_D}E_{max}^2 = \dfrac{(1.036\times10^{-12})(2\times10^{16})(9\times10^{10})}{2(1.6\times10^{-19})(10^{32})} \approx 58.2$ V.
(Subtracting $\phi_0 \approx 0.7$ V would give ≈ 57.5 V.)

## Grading notes

+2: 57–59 V from $BV = \varepsilon_{Si}(N_A+N_D)E_{max}^2/(2qN_AN_D)$ or an equivalent field calculation (e.g. $BV = \tfrac12 E_{max}W$ with $x_p = \varepsilon_{Si}E_{max}/(qN_A)$). +1: correct formula with a small arithmetic slip (within ±10%). 0: correct method with a factor-of-2 error (e.g. ≈ 29 V or ≈ 116 V from using only one doping in the reduced concentration), or a correct setup (correct formula and correct intermediate quantities such as $x_p$, $x_n$, $W$) with an arithmetic or unit slip in the final number, however large (e.g. ½E_maxW evaluated as 5.8×10⁴ V). −2 (asserted as fact): a value off by an order of magnitude or more that comes from a wrong formula or model, or a result from an empirical breakdown chart that ignores the stated critical-field assumption and contradicts it.
