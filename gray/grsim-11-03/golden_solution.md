# Golden Solution - grsim-11-03

## Reference answer

$S_o(f) = \dfrac{(r_d\parallel R)^2\left[2qI_D(1 + f_c/f) + 4kT/R\right]}{1 + (f/f_1)^2} \approx \dfrac{4.65\times10^{-19}(1 + 938/f)}{1 + (f/2.85\text{ MHz})^2}$ V²/Hz.

- Bias: $I_D = 0.465$ mA, $r_d = 55.9\ \Omega$, $R_{eq} = r_d\parallel20\text{ k} = 55.8\ \Omega$.
- Flicker corner $f_c = K_1/2q = 937.5$ Hz; pole $f_1 = 1/(2\pi R_{eq}C) = 1/(2\pi\cdot55.8\cdot1\text{ nF}) = 2.85$ MHz.
- Values (V²/Hz): 1 Hz $4.3\times10^{-16}$; 100 Hz $4.8\times10^{-18}$; 938 Hz $9.3\times10^{-19}$; 10 kHz $5.1\times10^{-19}$; 100 kHz $4.7\times10^{-19}$; 1 MHz $4.1\times10^{-19}$; 2.85 MHz $2.3\times10^{-19}$; 10 MHz $3.5\times10^{-20}$.
- Shape on log–log axes: slope −1 (−10 dB/decade) up to ≈ 940 Hz, flat at ≈ $4.65\times10^{-19}$ V²/Hz, then slope −2 (−20 dB/decade) above ≈ 2.85 MHz.

## Grading notes

A correct answer (hand analysis and a simulation that agrees with it) shows: the 1/f region with ≈ $4.3\times10^{-16}$ V²/Hz at 1 Hz and a corner near 940 Hz, the white level ≈ $4.65\times10^{-19}$ V²/Hz, and the single-pole roll-off from ≈ 2.85 MHz giving ≈ $3.5\times10^{-20}$ V²/Hz at 10 MHz. Tolerance ±15% on levels and frequencies (the simulator's diode drop and $kT$ may differ slightly). +2: hand result and simulation both right and consistent. +1: correct hand analysis with a simulation that is not reported or slightly mis-set (e.g., AF or KF mistyped) but recognized. 0: one of the three regions wrong. −2: pole computed with the 20-kΩ resistor alone (≈ 8 kHz), a 1/f² flicker slope, or a diode modeled with $4kTr_d$ thermal noise presented as matching the simulation.
