# Golden Solution - G374

## Reference answer

Equivalent input noise voltage ≈ $3.6\times10^{-18}$ V²/Hz (noise resistance ≈ 215–222 Ω) → ≈ 13.5 µV rms in 50 MHz; average noise figure with 50 Ω ≈ 5.3–5.5, i.e. ≈ 7.3–7.4 dB.

- Series feedback at the input: $\overline{v_i^2} = \overline{v_{ia}^2} + \overline{i_{ia}^2}R^2 + 4kTR$ with the feedback resistance seen at $Q_1$'s emitter $R = R_{E1}\parallel(R_F + R_{E2}) = 100\parallel740 = 88\ \Omega$.
- Basic amplifier: $Q_1$: $4kT(r_b + 1/2g_{m1}) = 4kT(100 + 21.7)$; noise at $Q_1$'s collector referred back through its transconductance $\approx 1/(1/g_{m1} + 88\ \Omega) \approx 1/132\ \Omega$: $R_A$ (9 kΩ) gives $4kT\cdot132^2/9\text{ k} \approx 4kT(1.9\ \Omega)$, $Q_2$'s base-current noise $2qI_{B2}$ gives ≈ $4kT(3.4\ \Omega)$; later stages are negligible.
- $\overline{i_{ia}^2}R^2 = 2qI_{B1}\cdot88^2 \approx 4kT(0.9\ \Omega)$.
- Total ≈ $4kT(100 + 21.7 + 1.9 + 3.4 + 0.9 + 88) \approx 4kT(216\ \Omega) = 3.6\times10^{-18}$ V²/Hz (a nodal analysis of the same core model keeping the finite-β terms gives $4kT(222\ \Omega)$; the small residual noise of $Q_4$–$Q_8$ and the bias network, whose currents are not given, is neglected throughout). × 50 MHz = $1.8\times10^{-10}$ V² → 13.4–13.6 µV rms.
- Input current noise: $2qI_{B1} + 4kT/R_D = 1.9\times10^{-24} + 1.4\times10^{-24} = 3.3\times10^{-24}$ A²/Hz (the 12-kΩ $R_D$ is a shunt at the input since $C_B$ is grounded), negligible with 50 Ω.
- All noise is white, so the average and spot noise figures coincide: $F = 1 + \dfrac{216 + 0.5}{50} \approx 5.3$ → 7.3 dB.

## Grading notes

+2: equivalent input noise voltage 12.5–14.5 µV rms (density ≈ $3.3$–$3.8\times10^{-18}$ V²/Hz) with $r_{b1}$, $1/2g_{m1}$ and the ≈ 88-Ω feedback resistance identified as the main terms, and NF 7.0–7.6 dB (or $F \approx 5.0$–5.8 stated as a ratio; dB conversion is not required). Saying that the output/bias stages are neglected because their currents are not given is fine. +1: correct to within 15% with one small term mishandled. Using $R_{E1} = 100\ \Omega$ instead of the loaded 88 Ω is +1 if the result is within 15%. 0: the feedback-network thermal noise omitted (≈ 10 µV, NF ≈ 5.5 dB) with otherwise sound reasoning. −2 (asserted as fact): the feedback resistors' noise divided by the loop gain; a collector shot-noise source placed collector-to-ground so that it is not suppressed by emitter degeneration or by the series feedback (e.g. $Q_1$'s collector shot noise referred through the degenerated transconductance, $1/g_{m1} + 88$ Ω, instead of $1/g_{m1}$, or a significant $Q_3$ contribution); or a result more than 15% off (noise voltage outside 11.5–15.5 µV rms, or $F$ outside ≈ 4.6–6.2, i.e. NF outside ≈ 6.6–7.9 dB) because of a wrong noise model. An omitted term is not a wrong model: the feedback-network omission above stays at 0.
