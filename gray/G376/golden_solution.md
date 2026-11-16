# Golden Solution - G376

## Reference answer

≈ $4.6$–$4.8\times10^{-19}$ A², i.e. ≈ 0.68–0.69 nA rms; white noise contributes ≈ $3.3\times10^{-19}$ A² and the base-current flicker noise ≈ $1.3\times10^{-19}$ A².

- First transistor: $I_B = 5\ \mu$A, $g_m = 38.5$ mS; $\overline{i_{ia}^2} = 2qI_B(1 + f_a/f) + 2qI_C/\beta^2 = 1.6\times10^{-24}(1 + 5000/f) + 8\times10^{-27}$ A²/Hz; $\overline{v_{ia}^2} \approx 4kT(r_b + 1/2g_m) = 4kT(313\ \Omega)$.
- Shunt feedback: $\overline{i_i^2} = \overline{i_{ia}^2} + \overline{v_{ia}^2}/R_F^2 + 4kT/R_F = 1.6\times10^{-24} + 8\times10^{-27} + 5.2\times10^{-26} + 1.66\times10^{-24} + 8\times10^{-21}/f$ A²/Hz.
- Integral 0.01 Hz–100 kHz: white $3.32\times10^{-24}\times10^5 = 3.3\times10^{-19}$; flicker $8\times10^{-21}\ln(10^7) = 1.29\times10^{-19}$; total $4.6\times10^{-19}$ A² → 0.68 nA rms (an exact nodal analysis gives 0.69 nA). Following stages are negligible (divided by β² or by the first-stage gain).

## Grading notes

+2: 0.63–0.73 nA rms with base-current shot and flicker noise of the first transistor and the 10-kΩ resistor noise, flicker integrated as $f_a\ln(f_2/f_1)$. +1: within 20% because a small term is mishandled, or a minor slip. 0: flicker noise omitted (≈ 0.58 nA) or the feedback-resistor noise omitted (≈ 0.54 nA) with otherwise correct work. −2 (asserted as fact): base-current noise multiplied by β², the input current noise taken as $2qI_C$, flicker noise integrated as white or as $1/f^2$, or an answer off by more than 3×.
