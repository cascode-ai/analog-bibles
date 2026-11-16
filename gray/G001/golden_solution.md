# Golden Solution - G001

## Reference answer

$\psi_0 \approx 0.751$ V; depletion depth on the p side $W_1 \approx 0.93\ \mu$m, on the n side $W_2 \approx 0.074\ \mu$m (total ≈ 1.00 µm); $|\mathcal{E}_{max}| \approx 1.14\times10^5$ V/cm (at the metallurgical junction).

- $\psi_0 = V_T\ln(N_AN_D/n_i^2) = 0.026\ln\big(8\times10^{32}/2.25\times10^{20}\big) = 0.026\times28.9 = 0.751$ V.
- Total junction voltage $\psi_0 + V_R = 5.751$ V.
- $W_1 = \left[\dfrac{2\epsilon(\psi_0+V_R)}{qN_A(1+N_A/N_D)}\right]^{1/2} = \left[\dfrac{2(1.04\times10^{-12})(5.751)}{(1.6\times10^{-19})(8\times10^{15})(1.08)}\right]^{1/2} = 9.30\times10^{-5}$ cm.
- $W_2 = W_1N_A/N_D = 7.44\times10^{-6}$ cm (the depletion region lies mostly in the lightly doped p side).
- $|\mathcal{E}_{max}| = qN_AW_1/\epsilon = (1.6\times10^{-19})(8\times10^{15})(9.30\times10^{-5})/(1.04\times10^{-12}) = 1.14\times10^5$ V/cm.

## Grading notes

+2: $\psi_0$ in 0.74–0.76 V, $W_1$ in 0.90–0.96 µm, $W_2$ in 0.072–0.077 µm, $|\mathcal{E}_{max}|$ in (1.11–1.17)×10⁵ V/cm. Using $\epsilon = 11.7\epsilon_0$ or $n_i = 1.45\times10^{10}$ is fine within these ranges. +1: all right except one arithmetic slip, or $\psi_0$ computed but neglected in the depletion widths (giving $W_1 \approx 0.87$ µm, $\mathcal{E}_{max} \approx 1.07\times10^5$ V/cm) with that simplification stated. 0: built-in potential right but depletion depths or field wrong through a slip, or only some of the quantities given. -2 (asserted as fact): depletion widths swapped (wider on the heavily doped n side), the factor 2 missing in the width formula, the field computed as $V/W$ (average field) and called the maximum, or values off by an order of magnitude from a unit error.
