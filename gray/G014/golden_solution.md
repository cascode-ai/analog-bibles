# Golden Solution - G014

## Reference answer

$f_T = \dfrac{1}{2\pi[\tau_F + (C_{je}+C_\mu)/g_m]}$ with $\tau_F \approx 147$ ps, $C_{je} \approx 4.38$ pF, $C_\mu(2\ \mathrm{V}) \approx 0.305$ pF, so $C_{je}+C_\mu \approx 4.69$ pF.

- Low currents: $f_T \approx I_C/[2\pi V_T(C_{je}+C_\mu)]$, a straight line of slope +1 on log–log axes: ≈ 1.3 MHz at 1 µA, 12.9 MHz at 10 µA, 116 MHz at 100 µA.
- Corner where $(C_{je}+C_\mu)/g_m = \tau_F$: $I_C \approx 0.83$ mA, where $f_T$ is half its maximum (≈ 540 MHz).
- High currents: $f_T \to 1/(2\pi\tau_F) \approx 1.08$ GHz; 591 MHz at 1 mA, 847 MHz at 3 mA, ≈ 1.0 GHz at 10 mA.
- (Real devices show a drop in $f_T$ at high current from high-level injection and Kirk effect; this model does not include it.)

Extraction: $\tau_T = 1/(2\pi f_T)$ = 265.3 ps (1 mA) and 159.2 ps (10 mA); $\tau_T = \tau_F + (C_{je}+C_\mu)/g_m$ with $1/g_m$ = 26 Ω and 2.6 Ω gives $C_{je}+C_\mu(10\ \mathrm{V}) = 4.53$ pF, $C_{je} = 4.38$ pF, $\tau_F = 147.4$ ps; $C_{\mu0} = 0.15\sqrt{1+10/0.55} = 0.657$ pF → $C_\mu(2\ \mathrm{V}) = 0.305$ pF.

## Grading notes

+2: slope +1 at low current with ≈ 1.3 MHz at 1 µA (±10%), flattening toward ≈ 1.08 GHz (±7%), corner near 0.8 mA (0.6–1.1 mA), consistent with ≈ 590 MHz at 1 mA. +1: correct shape and asymptote with the low-current level or corner off by up to ~20% (e.g. $C_\mu$ at 10 V used). 0: correct qualitative shape without numbers, or numbers right for one region only. -2 (asserted as fact): $f_T$ decreasing with current at low $I_C$, $f_T$ constant over the range, a peak-and-fall at high current claimed from this model's data as a computed result, or $f_T$ levels off by an order of magnitude.
