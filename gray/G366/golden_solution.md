# Golden Solution - G366

## Reference answer

$F \approx 42$–$43$, i.e. NF ≈ 16.3 dB (≈ 16.1 dB if the load-resistor noise is ignored).

- Bias: tail current $\approx (10 - 0.7)/(100\text{ k} + 250) \approx 93\ \mu$A, so $I_C \approx 46\ \mu$A per device; $g_m = 1.77$ mS, $1/2g_m = 283\ \Omega$, $I_B = 0.46\ \mu$A.
- Equivalent input generators at the base of $Q_1$: each half contributes $4kT(r_b + 1/2g_m + R_E) = 4kT(983\ \Omega)$ (plus a negligible $2qI_BR_E^2$), and the pair doubles it: $4kT(1966\ \Omega)$; the two 20-kΩ loads referred through the differential gain ≈ $R_C/(1/g_m + R_E) = 18.8$ add $4kT(2\times20\text{ k}/18.8^2) = 4kT(114\ \Omega)$. Total $\overline{v_i^2} \approx 4kT(2.08$–$2.1\text{ k}\Omega) \approx 3.5\times10^{-17}$ V²/Hz. $\overline{i_i^2} = 2qI_B \approx 1.47\times10^{-25}$ A²/Hz.
- $F = 1 + \dfrac{\overline{v_i^2} + \overline{i_i^2}R_S^2}{4kTR_S} = 1 + \dfrac{2100 + 0.02}{50} \approx 43$ → 16.3 dB. The current generator is negligible at 50 Ω.

## Grading notes

+2: NF 15.9–16.6 dB, with the doubling of the voltage noise in the pair and the 500-Ω emitter resistors' noise included. +1: a slip that moves the result by up to 0.5 dB (e.g., a different bias-current estimate). 0: correct method with one significant omission (e.g., emitter-resistor noise left out, ≈ 13.5 dB). −2 (asserted as fact): only one transistor's noise counted for the pair (≈ 13.6 dB), $\overline{i_i^2}$ claimed to dominate at 50 Ω, or the tail-resistor noise claimed to dominate the differential output.
