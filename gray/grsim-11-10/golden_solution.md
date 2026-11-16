# Golden Solution - grsim-11-10

## Reference answer

(a) $\overline{v_{iB}^2}/\Delta f \approx 4kT/(2g_{m1}) = 4kT(13\ \Omega) = 2.2\times10^{-19}$ V²/Hz (rising slightly, to ≈ $4kT(15\ \Omega)$ at 150 MHz). $\overline{i_{iB}^2}/\Delta f \approx 2q(I_{B1} + I_{B2}) + \dfrac{4kT}{5\text{ k}} + 2q(I_{C1} + I_{C2})\left(\dfrac{1}{\beta_0^2} + \dfrac{f^2}{f_T^2}\right) \approx 9.8\times10^{-24} + 6.4\times10^{-22}\left(\dfrac{f}{400\text{ MHz}}\right)^2$ A²/Hz (≈ $1.0$–$1.1\times10^{-22}$ at 150 MHz).

(b) $i_S \approx 0.25$–$0.26\ \mu$A rms.

- (a) The common-base generators equal the transistor's common-emitter ones; since the current gain ≈ 1, all noise currents at $Q_1$'s collector (5-kΩ load, $Q_2$'s input noise current) are referred to the emitter unchanged (strictly divided by $|\alpha|^2$, a few % at 150 MHz). Each transistor's referred collector noise rises as $2qI_C f^2/f_T^2$ above $f_T/\beta_0 = 4$ MHz.
- (b) Total equivalent input noise current over 0–150 MHz, including $4kT/R_S$: white part $(2q\cdot20\ \mu\text{A} + 2\times3.32\times10^{-24} + 6.4\times10^{-26})\times1.5\times10^8 \approx 2.0\times10^{-15}$ A²; rising part $2q\cdot2\text{ mA}\cdot\dfrac{B^3}{3f_T^2} = 6.4\times10^{-22}\times7.0\times10^6 = 4.5\times10^{-15}$ A²; total ≈ $6.5\times10^{-15}$ A² → 80 nA rms (a full small-signal evaluation gives 83 nA).
- SNR = 10 dB: $i_S = \sqrt{10}\times80$–$83$ nA ≈ 0.25–0.26 µA rms.

## Grading notes

A correct answer shows (a) $\overline{v_{iB}^2}$ ≈ $4kT(13\ \Omega)$ and an $\overline{i_{iB}^2}$ with a white floor ≈ $1\times10^{-23}$ A²/Hz rising as $f^2$ to ≈ $1\times10^{-22}$ A²/Hz at 150 MHz, confirmed by a simulation within ±15%; and (b) $i_S$ ≈ 0.23–0.28 µA rms with the high-frequency rise of the collector noise included in the integral. +2: both parts right and consistent with simulation. +1: (b) computed with only the white noise (≈ 0.14 µA) but (a) and the simulation right, or simulation missing. 0: one part right, the other wrong. −2: load and following-stage noise divided by a large current gain, $\overline{i_{iB}^2}$ taken as frequency independent while asserting simulation agreement, or SNR of 10 dB treated as a voltage ratio of 10.
