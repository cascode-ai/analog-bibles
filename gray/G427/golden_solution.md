# Golden Solution - G427

## Reference answer

$\omega_r \approx 1.34 \times 10^9$ rad/s ($f_r \approx 213$ MHz).

- With the loop broken at the op-amp output, the total output load is $C_{L\text{eff}} = C_L + \dfrac{C_2(C_1 + C_{ia})}{C_2 + C_1 + C_{ia}} = 6 + \dfrac{4(6.58)}{10.58} = 8.49$ pF.
- $R_{dm}(\omega) = g_{m1}R_{odh}\cdot\dfrac{1}{1 + j\omega R_{odh}C_{L\text{eff}}}\cdot\dfrac{C_2}{C_2 + C_1 + C_{ia}}$. Above the pole, $|R_{dm}| \approx \dfrac{g_{m1}}{\omega C_{L\text{eff}}}\cdot 0.378$.
- $\omega_r \approx \dfrac{0.030}{8.49 \times 10^{-12}} \times 0.378 = 1.34 \times 10^9$ rad/s.

## Grading notes

+2: ≈ 1.3–1.4 × 10⁹ rad/s (or ≈ 210–215 MHz, labelled), using $C_{L\text{eff}}$ ≈ 8.5 pF and the feedback factor ≈ 0.378. +1: correct method with a slip in $C_{L\text{eff}}$ (e.g. 8.4–8.7 pF) or Hz/rad mix-up. 0: $C_{ia}$ ignored consistently (giving ≈ 1.9 × 10⁹ rad/s), or $C_{L\text{eff}}$ = $C_L$ only (≈ 1.9 × 10⁹). −2 (asserted as fact): unity-gain frequency taken as $g_{m1}/C_L$ (5 × 10⁹) without the feedback factor, or computed as the dominant pole $1/(R_{odh}C_{L\text{eff}})$.
