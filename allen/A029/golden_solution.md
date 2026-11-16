# Golden Solution - A029

## Reference answer

$V_{T0} \approx 0.650$ V, $\gamma \approx 0.882\ \mathrm{V^{1/2}}$.

- $\phi_F(\text{substrate}) = -0.0259\ln(7\times10^{16}/1.45\times10^{10}) = -0.399$ V; $\phi_F(\text{gate}) = 0.0259\ln(10^{19}/1.45\times10^{10}) = 0.527$ V; $\phi_{MS} = -0.926$ V; $-2\phi_F = 0.797$ V.
- $C_{ox} = 1.727\times10^{-7}\ \mathrm{F/cm^2}$.
- $Q_{b0} = -\sqrt{2(1.6\times10^{-19})(1.036\times10^{-12})(7\times10^{16})(0.797)} = -1.36\times10^{-7}\ \mathrm{C/cm^2}$, $-Q_{b0}/C_{ox} = 0.788$ V; $Q_{ss}/C_{ox} = 0.0093$ V.
- $V_{T0} = -0.926 + 0.797 + 0.788 - 0.009 = 0.650$ V.
- $\gamma = \sqrt{2(1.6\times10^{-19})(1.036\times10^{-12})(7\times10^{16})}/1.727\times10^{-7} = 1.523\times10^{-7}/1.727\times10^{-7} = 0.882\ \mathrm{V^{1/2}}$.

## Grading notes

+2: $V_{T0}$ = 0.63–0.67 V and γ = 0.86–0.90 V^1/2. +1: one of the two right and the other off by a single slip (e.g. $Q_{ss}$ sign, giving 0.668 V). 0: correct method with errors in both, or only γ correct. −2 (asserted as fact): sign errors in $\phi_{MS}$ or $Q_{b0}$ giving values off by more than 0.2 V (e.g. negative $V_{T0}$), or γ with $N_A$ replaced by the gate doping.
