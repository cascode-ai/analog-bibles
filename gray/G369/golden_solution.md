# Golden Solution - G369

## Reference answer

$f \approx 180$ Hz.

- $I_C \approx 46\ \mu$A, $I_B \approx 0.46\ \mu$A, $2qI_B = 1.47\times10^{-25}$ A²/Hz; $\overline{v_i^2} \approx 4kT(2.1\text{ k}\Omega) = 3.5\times10^{-17}$ V²/Hz (negligible here).
- $F = 1 + \dfrac{\overline{v_i^2} + \overline{i_i^2}R_S^2}{4kTR_S} = 100$ requires $\overline{i_i^2} = \dfrac{99\cdot4kTR_S - \overline{v_i^2}}{R_S^2} = \dfrac{3.287\times10^{-13}}{4\times10^{10}} = 8.22\times10^{-24}$ A²/Hz.
- $2qI_B(1 + f_a/f) = 8.22\times10^{-24}$ → $1 + f_a/f = 55.9$ → $f = 10\text{ kHz}/54.9 \approx 182$ Hz. (Flicker noise of $Q_2$'s base current flows only in $r_{b2}$ and of the emitter-resistor paths are negligible.)

## Grading notes

+2: 170–195 Hz with the base-current noise of $Q_1$ through 200 kΩ identified as the term that grows. +1: correct method, result within 25% because of a bias-current approximation or a small slip. 0: right setup but F = 20 dB interpreted as F = 20 (ratio) or similar unit slip, giving a wrong frequency. −2 (asserted as fact): flicker noise placed in the collector current or voltage generator so that the answer comes out far off (e.g., tens of kHz), or the claim that F cannot reach 20 dB.
