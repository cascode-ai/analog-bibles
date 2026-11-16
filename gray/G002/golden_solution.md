# Golden Solution - G002

## Reference answer

$\psi_0 \approx 0.751$ V in both cases.
- Zero bias (junction voltage 0.751 V): $W_1 \approx 0.336\ \mu$m (p side), $W_2 \approx 0.027\ \mu$m (n side), $|\mathcal{E}_{max}| \approx 4.1\times10^4$ V/cm.
- 0.3 V forward bias (junction voltage $\psi_0 - 0.3 = 0.451$ V): $W_1 \approx 0.261\ \mu$m, $W_2 \approx 0.021\ \mu$m, $|\mathcal{E}_{max}| \approx 3.2\times10^4$ V/cm.

Derivation: $\psi_0 = V_T\ln(N_AN_D/n_i^2) = 0.751$ V. $W_1 = [2\epsilon(\psi_0 - V_D)/(qN_A(1+N_A/N_D))]^{1/2}$, $W_2 = W_1N_A/N_D$, $|\mathcal{E}_{max}| = qN_AW_1/\epsilon$, with $V_D = 0$ and $V_D = +0.3$ V. The widths and field scale as $\sqrt{\psi_0 - V_D}$: forward bias narrows the depletion region and lowers the field.

## Grading notes

+2: $\psi_0$ in 0.74–0.76 V and all six values within ±4% (zero bias: 0.336 µm, 0.027 µm, 4.14×10⁴ V/cm; forward: 0.261 µm, 0.021 µm, 3.21×10⁴ V/cm). +1: one case fully right and the other with a single slip. 0: one case right and the other wrong or missing. -2 (asserted as fact): forward bias added to $\psi_0$ (widening the depletion region), widths swapped between the p and n sides, or a formula error (missing factor 2, average field reported as maximum).
