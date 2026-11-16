# Golden Solution - A476

## Reference answer

$f_{clock} \approx 285$–$288$ kHz ($T \approx 3.5$ µs).

Derivation:
- Op amp: $A_0 = 10^4$, $f_a = 100$ Hz → $GB = 1$ MHz ($\omega_{GB} = 6.28\times10^6$ rad/s).
- A1: input capacitance $C + C/2 + C/4 + C/8 = 15C/8$, feedback $2C$ → $\beta_1 = \frac{2}{2 + 15/8} = \frac{16}{31} = 0.516$; closed-loop bandwidth $\omega_{a}(1 + A_0\beta_1) = 3.24\times10^6$ rad/s, $\tau_1 = 0.308$ µs.
- A2: input capacitance $15C/8 + C/8 = 2C$, feedback $2C$ → $\beta_2 = 0.5$; $\tau_2 = 1/(3.14\times10^6) = 0.318$ µs.
- ENOB = 7 bits → the settling error must be below ½ LSB of a 7-bit converter, $2^{-8}$ of full scale: $e^{-t/\tau} \le 1/256$ → $t = \tau\ln 256 = 5.545\tau$. $t_1 = 1.71$ µs, $t_2 = 1.76$ µs, $T = 3.47$ µs → $f_{clock} = 288$ kHz.
- Including the static gain error $1/(1 + A_0\beta) \approx 2\times10^{-4}$ of each stage (leaving $e^{-t/\tau} \le 0.0037$) gives $T \approx 3.51$ µs, $f_{clock} \approx 285$ kHz. The finite dc gain alone (≈0.02%) is far below the 7-bit limit, so settling dominates.

## Grading notes

+2: 270–300 kHz from single-pole settling of both stages with the feedback factors (≈0.52 and 0.5) and an error criterion of $2^{-8}$ (½ LSB at 7 bits), times added. +1: correct method with the criterion taken as $2^{-7}$ (≈ 330 kHz) and stated, or feedback factors approximated as 0.5 for both stages with a slip leading to a value within ±15%. 0: correct settling method but conversion time taken as half a clock period (≈ 144 kHz) or only one stage's settling counted (≈ 570 kHz), with the rest sound. −2 (asserted as fact): τ = 1/GB without the feedback factor and with radian/hertz confusion giving a value off by more than 2×, the dominant pole (100 Hz) used as the closed-loop bandwidth, or a frequency set by the dc gain error alone. An answer that credits the 1/16 attenuation of the LSB stage at the output (C/8 into 2C), so that the LSB stage need only settle to about 1/16 or to a budget-split value (roughly 330–380 kHz), uses a less conservative but physically sound error budget than the worst-case reading intended here: +1 if the budget is stated and the feedback factors and summed settling times are right.
