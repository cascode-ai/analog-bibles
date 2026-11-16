# Golden Solution - A036

## Reference answer

$v_{out} \approx 1.2498$ V (1.24977 V), with $R_1 \approx 10.004$ kΩ: only ≈ 0.23 mV below the ideal 1.25 V, a hundred times less error than with an n-well resistor of 20,000 ppm/V.

- $K = 2\times10^{-4}\ \mathrm{V^{-1}}$. In units of 10 kΩ: $v_{out}[1 + 10^{-4}(2.5 + v_{out}) + 1] = 2.5$ ⇒ $10^{-4}v_{out}^2 + 2.00025v_{out} - 2.5 = 0$ ⇒ $v_{out} = 1.24977$ V.
- Check: $R_1 = 10\ \mathrm{k\Omega}[1 + 2\times10^{-4}(3.74977)/2] = 10.0037$ kΩ; $2.5\times10/20.0037 = 1.24977$ V.

## Grading notes

+2: $v_{out}$ = 1.2497–1.2499 V (or 1.2498 V), with $R_1$ ≈ 10.004 kΩ, i.e. a deviation of ≈ 0.2 mV from 1.25 V. +1: method right and the conclusion "≈ 1.25 V, error ≈ 0.02%" stated without the exact value, or a slip that keeps the result within 1.2495–1.2500 V. 0: correct equation not solved, or the coefficient applied with the wrong sign (1.25023 V) with otherwise correct work. −2 (asserted as fact): a deviation of the same size as for the 20,000 ppm/V resistor (≈ 1.227 V), a value below 1.249 V, or 200 ppm/V treated as 2%/V.
