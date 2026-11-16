# Golden Solution - G003

## Reference answer

$C_{j0} \approx 0.57$ pF; $C_j \approx 0.21$ pF at 5 V reverse bias; $C_j \approx 0.74$ pF at 0.3 V forward bias.

- $\psi_0 = V_T\ln(N_AN_D/n_i^2) = 0.751$ V.
- $C_{j0} = A\left[\dfrac{q\epsilon N_AN_D}{2(N_A+N_D)\psi_0}\right]^{1/2}$ (equivalently $\epsilon A/W_{tot}$ with $W_{tot} = 0.363\ \mu$m at zero bias) $= 5.73\times10^{-13}$ F.
- $C_j = C_{j0}/\sqrt{1 - V_D/\psi_0}$: $V_D = -5$ V gives $0.573/\sqrt{7.65} = 0.207$ pF; $V_D = +0.3$ V gives $0.573/\sqrt{0.601} = 0.739$ pF (0.3 V is below $\psi_0/2$, so the depletion formula is still a fair approximation).

## Grading notes

+2: three values within ±4% (0.573, 0.207, 0.739 pF). +1: one value off through an arithmetic slip, or the forward-bias value given with a correct remark only. 0: $C_{j0}$ right but the bias dependence wrong in one case. -2 (asserted as fact): forward bias decreasing the capacitance, a graded-junction exponent (1/3) used without reason giving clearly different values, or $C_{j0}$ off by a factor from a formula error (e.g. using only $N_D$, or missing the factor 2).
