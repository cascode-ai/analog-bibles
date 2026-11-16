# Golden Solution - G370

## Reference answer

$F \approx 4.0$, i.e. NF ≈ 6.0 dB (an exact nodal noise analysis, which includes the generator correlation, gives ≈ 6.2 dB).

- Transistor: $g_m = 19.2$ mS, $\overline{v_{ia}^2} = 4kT(r_b + 1/2g_m) = 4kT(126\ \Omega) = 2.09\times10^{-18}$ V²/Hz, $\overline{i_{ia}^2} = 2q(I_B + I_C/\beta^2) = 3.2\times10^{-24} + 6.4\times10^{-26} = 3.26\times10^{-24}$ A²/Hz ($I_B = 10\ \mu$A).
- Shunt feedback at the input: $\overline{i_i^2} = \overline{i_{ia}^2} + \overline{v_{ia}^2}/R_F^2 + 4kT/R_F = 3.26\times10^{-24} + 2.1\times10^{-26} + 1.66\times10^{-24} = 4.95\times10^{-24}$ A²/Hz; $\overline{v_i^2} \approx \overline{v_{ia}^2}$.
- With the current source and $R_S$: $F = 1 + \dfrac{\overline{i_i^2} + \overline{v_i^2}/R_S^2}{4kT/R_S} = 1 + \dfrac{4.97\times10^{-24}}{1.66\times10^{-24}} = 3.99$ → 6.0 dB. Base-current shot noise and the feedback resistor's noise dominate.

## Grading notes

+2: NF 5.8–6.3 dB with the feedback resistor's noise current $4kT/R_F$ and the base-current shot noise included. +1: correct structure with a slip of <0.4 dB. 0: $R_F$ noise omitted (≈ 4.5 dB) with otherwise sound work. −2 (asserted as fact): the input noise current taken as $2qI_C$, the feedback resistor claimed noiseless or to cancel noise, or the noise figure computed with a voltage-source/series model that makes $\overline{v_i^2}$ dominant at 10 kΩ.
