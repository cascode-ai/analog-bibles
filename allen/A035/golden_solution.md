# Golden Solution - A035

## Reference answer

$v_{out} \approx 1.2271$ V (with $R_1 \approx 10.37$ kΩ), about 23 mV below the 1.25 V of an ideal 10 kΩ/10 kΩ divider.

- Divider: $v_{out} = v_{in}R_2/(R_1 + R_2)$, i.e. $v_{out}(R_1 + R_2) = v_{in}R_2$, with $K = 0.02\ \mathrm{V^{-1}}$.
- In units of 10 kΩ: $v_{out}[1 + 0.01(2.5 + v_{out}) + 1] = 2.5$ ⇒ $0.01v_{out}^2 + 2.025v_{out} - 2.5 = 0$ ⇒ $v_{out} = \dfrac{-2.025 + \sqrt{2.025^2 + 0.1}}{0.02} = 1.2271$ V.
- Check: $R_1 = 10\ \mathrm{k\Omega}[1 + 0.02(2.5 + 1.2271)/2] = 10.373$ kΩ, and $2.5\times10/(10 + 10.373) = 1.2271$ V. (One fixed-point iteration from $v_{out} = 1.25$ V already gives 1.2270 V.)

## Grading notes

+2: $v_{out}$ = 1.226–1.228 V with $R_1$ ≈ 10.37 kΩ, from the self-consistent divider equation (quadratic or iteration). +1: correct method with a small slip (result within ±0.005 V), or $R_1$ evaluated with $v_{out}$ left out of the average (average voltage 1.25 V, giving ≈ 1.2346 V). 0: the right equation set up but not solved, or the voltage coefficient applied with the wrong sign (≈ 1.274 V) while the method is otherwise right. −2 (asserted as fact): K misread by orders of magnitude (e.g. 20,000 ppm/V taken as 20 V⁻¹, or as 200 ppm/V so that the effect is called negligible), or $v_{out}$ = 1.25 V claimed exact with the coefficient ignored.
