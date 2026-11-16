# Golden Solution - G372

## Reference answer

$F \approx 3.95$–$4.0$, i.e. NF ≈ 6.0 dB.

- Common-base generators at the emitter of $Q_1$ equal its common-emitter generators: $\overline{v_i^2} = 4kT(1/2g_m) = 4kT(13\ \Omega)$, $\overline{i_{i1}^2} = 2q(I_{B1} + I_{C1}/\beta^2)$.
- Because the common-base current gain is ≈ 1, every noise current at $Q_1$'s collector node is referred to the input unchanged: the 5-kΩ load ($4kT/5\text{ k} = 3.32\times10^{-24}$) and $Q_2$'s input noise current $2q(I_{B2} + I_{C2}/\beta^2)$; $Q_2$'s voltage generator over 5 kΩ is negligible.
- $\overline{i_i^2} = 2q(10 + 0.1 + 10 + 0.1)\ \mu\text{A} + 3.32\times10^{-24} = 6.46\times10^{-24} + 3.32\times10^{-24} = 9.78\times10^{-24}$ A²/Hz; $\overline{v_i^2}/R_S^2 \approx 9\times10^{-27}$.
- With $4kT/R_S = 3.32\times10^{-24}$ A²/Hz: $F = 1 + 9.79/3.32 = 3.95$ → 5.97 dB. (Including $1/\alpha^2$ for the collector-node currents and correlation gives 4.03, 6.06 dB.)

## Grading notes

+2: NF 5.8–6.2 dB with the 5-kΩ load noise and $Q_2$'s base-current noise referred to the input with unity current gain. +1: a slip that moves the result by less than 0.4 dB. 0: $Q_2$'s noise or the 5-kΩ load omitted (≈ 4.7 dB) with otherwise correct analysis. −2 (asserted as fact): load and following-stage noise claimed to be divided by a large current gain, $\overline{i_i^2}$ = $2qI_C$, or the common-base stage claimed noiseless at the input.
