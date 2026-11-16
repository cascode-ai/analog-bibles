# Golden Solution - G004

## Reference answer

$BV \approx 70$ V (70.2 V; about 69.4 V if the built-in potential of 0.75 V is subtracted).

Setting the maximum field of the abrupt junction, $|\mathcal{E}_{max}| = \left[\dfrac{2qN_AN_DV_R}{\epsilon(N_A+N_D)}\right]^{1/2}$, equal to $\mathcal{E}_{crit}$:
$BV = \dfrac{\epsilon\,\mathcal{E}_{crit}^2}{2q}\left(\dfrac{1}{N_A}+\dfrac{1}{N_D}\right) = \dfrac{(1.04\times10^{-12})(1.6\times10^{11})}{2(1.6\times10^{-19})}(1.25\times10^{-16} + 10^{-17}) = 70.2$ V.
The lightly doped p side sets the breakdown; the one-sided approximation (only $N_A$) gives 65 V.

## Grading notes

+2: 67–72 V with the correct two-sided formula (with or without subtracting $\psi_0$). +1: 64–66 V from the one-sided approximation (only $N_A$) with that approximation stated, or a small slip. 0: correct formula with an arithmetic error giving a wrong value. -2 (asserted as fact): breakdown set by the heavily doped side (≈ 5 V from using only $N_D$), $\mathcal{E}_{crit}$ not squared, or a value off by a large factor from a formula error.
