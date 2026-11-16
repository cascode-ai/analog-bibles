# Golden Solution - G373

## Reference answer

$f \approx 490$ Hz.

- White-noise value: $F_0 \approx 3.95$ (6.0 dB), with $\overline{i_i^2} = 2q(I_{B1} + I_{B2}) + 2q(I_{C1}+I_{C2})/\beta^2 + 4kT/5\text{ k} + \dots = 9.79\times10^{-24}$ A²/Hz against $4kT/R_S = 3.32\times10^{-24}$.
- Flicker noise adds $2q(I_{B1} + I_{B2})\frac{f_a}{f} = 6.4\times10^{-24}\frac{10^3}{f}$ A²/Hz, both base currents being referred to the emitter of $Q_1$ with unity gain.
- 3 dB above means $F = 2F_0$: $6.4\times10^{-24}\cdot10^3/f = F_0\cdot3.32\times10^{-24} = 1.31\times10^{-23}$ → $f \approx 488$ Hz.

## Grading notes

+2: 450–520 Hz with both devices' base-current flicker noise referred with unity gain and the condition $F = 2F_0$. +1: a slip under 10%, or the condition read as $F - 1$ doubling (≈ 650 Hz) with an otherwise complete $F_0 ≈ 3.95$–$4.03$. 0: one device's flicker noise omitted (≈ 244 Hz), or the 5-kΩ load thermal noise omitted from $F_0$ ($F_0 ≈ 2.96$, giving ≈ 650–665 Hz), with sound reasoning otherwise. (The two ≈ 650-Hz cases are told apart by $F_0$: ≈ 3.95–4.03 with the $F - 1$ reading is +1, ≈ 2.96 with the $F = 2F_0$ condition is 0.) −2 (asserted as fact): flicker placed in the collector current and multiplied by β², an answer above the 1-kHz corner, or a claim that flicker noise cannot raise the noise figure.
