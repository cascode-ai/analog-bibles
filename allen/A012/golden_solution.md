# Golden Solution - A012

## Reference answer

$R_{in} = \dfrac{R}{1 - A_v} = \dfrac{50\ \mathrm{k\Omega}}{1 - 0.99} = 5\ \mathrm{M\Omega}$.

With $K = v_o/v_i = 0.99$, the bridging resistor seen from the input is $R/(1 - K)$; the amplifier's own input resistance is infinite, so this is the whole input resistance. (The output-side element $RK/(K - 1) = -4.95$ MΩ is across the ideal zero-impedance output and has no effect.) Directly: $i_{in} = (v_i - 0.99v_i)/R = 0.01v_i/R$. The near-unity gain bootstraps $R$, raising its apparent value 100 times.

## Grading notes

+2: 5 MΩ via $R/(1 - A_v)$ (a direct current calculation giving 5 MΩ is equally fine). +1: correct expression with a unit or rounding slip that is obviously a typo. 0: correct expression with an arithmetic error in the value. −2 (asserted as fact): ≈ 25 kΩ from $R/(1 + A_v)$ (inverting-gain formula), 500 Ω from $R(1 - A_v)$, 50 kΩ (Miller effect ignored), −4.95 MΩ (the output-side element) or an infinite input resistance.
