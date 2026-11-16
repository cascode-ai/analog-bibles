# Golden Solution - A025

## Reference answer

$V_T \approx 0.763$ V (with $V_{T0} \approx 0.306$ V and $\gamma \approx 0.577\ \mathrm{V^{1/2}}$).

- $\phi_F(\text{substrate}) = -0.0259\ln(3\times10^{16}/1.45\times10^{10}) = -0.377$ V; $\phi_F(\text{gate}) = 0.0259\ln(4\times10^{19}/1.45\times10^{10}) = 0.563$ V; $\phi_{MS} = -0.940$ V.
- $C_{ox} = 3.9(8.854\times10^{-14})/(200\times10^{-8}) = 1.727\times10^{-7}\ \mathrm{F/cm^2}$.
- $Q_{b0} = -\sqrt{2(1.6\times10^{-19})(1.036\times10^{-12})(0.754)(3\times10^{16})} = -8.66\times10^{-8}\ \mathrm{C/cm^2}$, $-Q_{b0}/C_{ox} = 0.501$ V; $Q_{ss}/C_{ox} = 1.6\times10^{-9}/1.727\times10^{-7} = 0.0093$ V.
- $V_{T0} = -0.940 + 0.754 + 0.501 - 0.009 = 0.306$ V; $\gamma = \sqrt{2(1.6\times10^{-19})(1.036\times10^{-12})(3\times10^{16})}/1.727\times10^{-7} = 0.577\ \mathrm{V^{1/2}}$.
- $V_T = 0.306 + 0.577\left(\sqrt{0.754 + 2} - \sqrt{0.754}\right) = 0.306 + 0.577(1.660 - 0.868) = 0.306 + 0.457 = 0.763$ V.

## Grading notes

+2: $V_T$ = 0.74–0.78 V with $V_{T0}$ ≈ 0.31 V and $\gamma$ ≈ 0.58 V^1/2 (or an equivalent direct calculation of the extra depletion charge). +1: correct method with one slip that moves $V_T$ by less than ≈ 0.05 V (e.g. $Q_{ss}$ term with the wrong sign). 0: $V_{T0}$ and γ correct but the body-effect step done wrong, or the body effect right with $V_{T0}$ badly wrong. −2 (asserted as fact): $V_{SB}$ treated as lowering $V_T$, $2|\phi_F|$ replaced by $|\phi_{MS}|$ = 0.94 V (giving 0.736 V) or by $|\phi_F|$, or a result off by more than 0.1 V from a wrong sign in $\phi_{MS}$ or $Q_{b0}$.
