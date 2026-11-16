# Golden Solution - G368

## Reference answer

It decreases: from about 16.3 dB at 50 Ω to about 4.4–4.5 dB at 200 kΩ.

- Generators at the base of $Q_1$: $\overline{v_i^2} \approx 4kT(2.1\text{ k}\Omega) \approx 3.5\times10^{-17}$ V²/Hz, $\overline{i_i^2} = 2qI_B \approx 1.47\times10^{-25}$ A²/Hz ($I_C \approx 46\ \mu$A, $I_B \approx 0.46\ \mu$A).
- At 200 kΩ: $F = 1 + \dfrac{\overline{v_i^2}}{4kTR_S} + \dfrac{\overline{i_i^2}R_S}{4kT} = 1 + 0.0105 + 1.77 \approx 2.8$ → 4.5 dB.
- The optimum source resistance is $\sqrt{\overline{v_i^2}/\overline{i_i^2}} \approx 15$ kΩ ($F_{opt} \approx 1.3$, ≈ 1.1 dB). 200 kΩ is above the optimum, so the base-current noise now dominates and F has started to rise again, but it is still far below the 50-Ω value.

## Grading notes

+2: "decrease" with numbers close to 4.5 dB (4.2–4.8 dB) versus ≈ 16 dB, and the explanation that current noise now dominates (200 kΩ is beyond the ≈ 15-kΩ optimum). +1: correct conclusion with the optimum argument but no numbers, or numbers with a minor slip. 0: correct conclusion but the reasoning wrong (e.g., "larger RS always lowers F"). −2 (asserted as fact): "increase" relative to 50 Ω, or a claim that F at 200 kΩ exceeds 16 dB.
