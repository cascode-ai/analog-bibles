# Golden Solution - grsim-11-14

## Reference answer

(a) $\overline{v_i^2}/\Delta f = 2\left[4kT\left(r_b + \frac{1}{2g_m} + R_E\right) + 2qI_BR_E^2\right] + \frac{2\cdot4kT R_C}{A_v^2} \approx 4kT(2.1\text{ k}\Omega) = 3.5\times10^{-17}$ V²/Hz (≈ 5.9 nV/√Hz); $\overline{i_i^2}/\Delta f = 2q(I_B + I_C/\beta^2) \approx 1.47\times10^{-25}$ A²/Hz (≈ 0.38 pA/√Hz).

(b) Total equivalent input noise ≈ 41 µV rms; total output noise ≈ 0.77 mV rms.

- Bias: $I_{tail} \approx 9.3\text{ V}/100.25\text{ k} = 93\ \mu$A, $I_C \approx 46\ \mu$A, $g_m = 1.77$ mS, $1/2g_m = 283\ \Omega$, $I_B = 0.46\ \mu$A.
- Pair: twice one half's voltage noise: $2(200 + 283 + 500) = 1966\ \Omega$; base-current noise in $R_E$ adds ≈ 9 Ω; loads $2\cdot20\text{ k}/A_v^2$ with $A_v \approx R_C/(1/g_m + R_E) \approx 18.7$: ≈ 114 Ω. Tail-resistor noise is common mode (no differential output). Only $Q_1$'s current generator appears ($Q_2$'s base is grounded).
- (b) Spot input noise with $R_S = 50\ \Omega$: $4kT(50 + 2100) + \overline{i_i^2}\cdot50^2 \approx 3.58\times10^{-17}$ V²/Hz; noise bandwidth of a single pole $\frac{\pi}{2}\cdot30\text{ MHz} = 47.1$ MHz → $1.69\times10^{-9}$ V² → 41 µV rms. Gain from $v_s$ ≈ 18.6 → output $5.9\times10^{-7}$ V² → 0.77 mV rms.

## Grading notes

A correct answer shows (a) $\overline{v_i^2}$ ≈ $4kT(2.0$–$2.2\text{ k}\Omega)$ (≈ 5.6–6.1 nV/√Hz; ≈ 5.7 nV/√Hz if the load term is omitted) and $\overline{i_i^2}$ ≈ $1.5\times10^{-25}$ A²/Hz, with a simulation (input-referred noise at low frequency) agreeing within ±15%; (b) ≈ 38–44 µV rms at the input and ≈ 0.7–0.8 mV rms at the output, using the noise bandwidth $\frac{\pi}{2}f_{3dB}$. +2: both parts right. +1: (b) computed with 30 MHz instead of 47 MHz (≈ 33 µV, 0.61 mV) or simulation missing. 0: the factor 2 for the pair missed but otherwise consistent. −2: emitter resistors treated as noiseless, current generator claimed to dominate at 50 Ω, or tail noise asserted to dominate the differential output.
